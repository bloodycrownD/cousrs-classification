// Node.js的核心模块，专门用来处理文件路径
const path = require("path");

module.exports = {
  // 入口
  // 相对路径和绝对路径都行
  entry: "./src/index.ts",
  // 输出
  output: {
    // path: 文件输出目录，必须是绝对路径
    // path.resolve()方法返回一个绝对路径
    // __dirname 当前文件的文件夹绝对路径
    path: path.resolve(__dirname, "out"),
    // filename: 输出文件名
    filename: "index.js",
  },
  // 加载器
  module: {
    rules: [
      {
        test: /\.tsx?$|\.ts?$/,
        use:[
          {
            loader:'ts-loader',
            options:{
              transpileOnly: true,	
            }
          }
        ],
        exclude:/node_modules/
      },
    ]
  },
  // 模式
  mode: "production", // 开发模式
  performance: {
    hints:false
  },

  //或者

  //警告 webpack 的性能提示
  performance: {
    hints:'warning',
    //入口起点的最大体积
    maxEntrypointSize: 50000000,
    //生成文件的最大体积
    maxAssetSize: 30000000,
    //只给出 js 文件的性能提示
    assetFilter: function(assetFilename) {
      return assetFilename.endsWith('.js');
    }
  },
  resolve:{
    extensions: ['.ts', '.js']
  }
};