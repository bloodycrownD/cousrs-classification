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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
__exportStar(require("./css"), exports);
function Tabs({ heads = [], contentsID = [] }) {
    return (0, jquery_1.default)(`<div id="tabs">
    <ul class="tabUl">
        ${heads.map(h => `<li class="tabLi">${h}</li>`).join('')}
    </ul>
    ${contentsID.map(c => `<div id="${c}"></div>`).join('')}
</div>`);
}
exports.default = Tabs;
//# sourceMappingURL=index.js.map