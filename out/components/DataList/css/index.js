"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataListCSS = void 0;
const jquery_1 = __importDefault(require("jquery"));
function DataListCSS({ name = 'default' }) {
    (0, jquery_1.default)(`.${name}Table`).css({
        width: '100%',
        borderCollapse: 'collapse',
    });
    (0, jquery_1.default)(`.${name}Caption`).css({
        fontSize: '2em',
        fontWeight: 'bold',
        margin: '1em 0'
    });
    (0, jquery_1.default)(`.${name}Th,.${name}Td`).css({
        border: '1px solid #999',
        textAlign: ' center',
        padding: '20px 0'
    });
    (0, jquery_1.default)(`.${name}Table .${name}Thead .${name}Tr`).css({
        backgroundColor: '#008c8c',
        color: '#fff'
    });
    (0, jquery_1.default)(`.${name}Table .${name}Tbody .${name}Tr:nth-child(odd)`).css({
        backgroundColor: '#eee'
    });
    (0, jquery_1.default)(`.${name}Table .${name}Tbody .${name}Tr .${name}Td:first-child`).css({
        color: '#f40'
    });
    (0, jquery_1.default)(`.${name}Table tfoot .${name}Td`).css({
        textAlign: 'left',
        paddingLeft: `20px`
    });
    let tmpColor;
    (0, jquery_1.default)(`.${name}Table .${name}Tbody .${name}Tr`)
        .on("mouseenter", function () {
        tmpColor = (0, jquery_1.default)(this).css("backgroundColor");
        (0, jquery_1.default)(this).css({
            backgroundColor: "#CCC"
        });
    })
        .on("mouseleave", function () {
        (0, jquery_1.default)(this).css({
            backgroundColor: tmpColor
        });
    });
}
exports.DataListCSS = DataListCSS;
//# sourceMappingURL=index.js.map