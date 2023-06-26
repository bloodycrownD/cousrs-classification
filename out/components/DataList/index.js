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
exports.DataList = void 0;
const jquery_1 = __importDefault(require("jquery"));
__exportStar(require("./css"), exports);
function DataList({ title = '', colHeads = [], data = [[]], name = 'default' }) {
    return (0, jquery_1.default)(`<table class="${name}Table">
        <caption class="${name}Caption">${title}</caption>
        <thead class='${name}Thead'>
            <tr class='${name}Tr'>
                ${colHeads.map(m => `<th class='${name}Th'>${m}</th>`).join('')}
            </tr>
        </thead>
        <tbody class='${name}Tbody'>
            ${data.map(row => `<tr class='${name}Tr'>${row.map(rd => `<td class='${name}Td'>${rd}</td>`).join("")}</tr>`).join("")}
        </tbody>
        <tfoot>
            <tr class='${name}Tr'><td class='${name}Td' colspan='${colHeads.length}'>foot</td></tr>
        </tfoot>
    </table>`);
}
exports.DataList = DataList;
//# sourceMappingURL=index.js.map