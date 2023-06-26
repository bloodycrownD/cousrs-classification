const trReg = /<tr.*?<\/tr>/igs
const tdReg = /<td>(?<data>.*?)<\/td>/igs
const tableReg = /<table width="100%"  cellpadding="0" cellspacing="0" style="border-collapse:collapse" class="bot_line">.*?<\/table>/igs
export function getFormData(html: string) {
    const htmltext = html.match(tableReg)
    const tmpTr = htmltext![0].match(trReg)
    const fromData: string[][] = []
    tmpTr?.slice(1).map(m => {
        const tmptd = m.matchAll(tdReg);
        const dataGroup: any[] = []
        for (const iterator of tmptd) {
            dataGroup.push(iterator.groups?.data)
        }
        const finalGroup: string[] = dataGroup.slice(1, 8)
        finalGroup.push(dataGroup[11])
        fromData.push(finalGroup)
    })
    return fromData

}