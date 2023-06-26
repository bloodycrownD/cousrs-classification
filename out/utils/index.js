"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormData = void 0;
const trReg = /<tr.*?<\/tr>/igs;
const tdReg = /<td>(?<data>.*?)<\/td>/igs;
const tableReg = /<table width="100%"  cellpadding="0" cellspacing="0" style="border-collapse:collapse" class="bot_line">.*?<\/table>/igs;
function getFormData(html) {
    const htmltext = html.match(tableReg);
    const tmpTr = htmltext[0].match(trReg);
    const fromData = [];
    tmpTr?.slice(1).map(m => {
        const tmptd = m.matchAll(tdReg);
        const dataGroup = [];
        for (const iterator of tmptd) {
            dataGroup.push(iterator.groups?.data);
        }
        const finalGroup = dataGroup.slice(1, 8);
        finalGroup.push(dataGroup[11]);
        fromData.push(finalGroup);
    });
    return fromData;
}
exports.getFormData = getFormData;
//# sourceMappingURL=index.js.map