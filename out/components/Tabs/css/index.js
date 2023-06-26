"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabCSS = void 0;
const jquery_1 = __importDefault(require("jquery"));
function TabCSS() {
    (0, jquery_1.default)("#tabs > div:not(:nth-of-type(1))").css({
        display: "none"
    });
    (0, jquery_1.default)("#tabs .tabUl li").on("click", function () {
        const activeIndex = (0, jquery_1.default)("#tabs .tabUl li").index(this);
        (0, jquery_1.default)("#tabs > div").css({
            display: "none"
        });
        (0, jquery_1.default)("#tabs .tabUl li").css({
            borderBottom: "1px solid #e7ebf0",
            color: 'black'
        });
        (0, jquery_1.default)(`#tabs > div`).get(activeIndex).style.display = 'block';
        (0, jquery_1.default)("#tabs .tabUl li").get(activeIndex).style.borderBottom = "3px solid #1976d2";
        (0, jquery_1.default)("#tabs .tabUl li").get(activeIndex).style.color = "#1976d2";
    });
    (0, jquery_1.default)(`#tabs * `).css({
        padding: '0',
        margin: '0',
    });
    (0, jquery_1.default)(`#tabs `).css({
        border: '#e7ebf0 1px solid',
        padding: '0 15px',
        paddingTop: '10px',
        width: '600px',
    });
    (0, jquery_1.default)(`#tabs .tabUl `).css({
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'row',
    });
    (0, jquery_1.default)(`#tabs .tabLi `).css({
        borderBottom: '1px solid #e7ebf0',
        paddingBottom: '10px',
        flexGrow: '1',
        textAlign: 'center',
    });
    (0, jquery_1.default)(`#tabs > div `).css({
        padding: '10px 0',
    });
}
exports.TabCSS = TabCSS;
//# sourceMappingURL=index.js.map