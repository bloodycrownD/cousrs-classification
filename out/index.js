"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
require("jquery-ui-dist/jquery-ui.min");
const Tabs_1 = __importStar(require("./components/Tabs"));
const DataList_1 = require("./components/DataList");
(0, jquery_1.default)("<div id='root'></div>")
    .draggable()
    .appendTo("body");
// Tabs().appendTo("#root")
(0, Tabs_1.default)({
    heads: ['one', 'two'],
    contentsID: ['t1', 't2']
}).appendTo("#root");
(0, DataList_1.DataList)({
    colHeads: ["aaa", "bbb", "ccc"],
    data: [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]],
}).appendTo("#t1");
(0, DataList_1.DataList)({
    colHeads: ["aaa", "bbb", "ccc"],
    data: [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]],
}).appendTo("#t2");
(0, DataList_1.DataListCSS)({});
(0, Tabs_1.TabCSS)();
//# sourceMappingURL=index.js.map