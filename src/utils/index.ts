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
        const finalGroup: string[] = dataGroup.slice(1, 10)
        finalGroup.push(dataGroup[11])
        finalGroup.push(dataGroup[13])
        fromData.push(finalGroup)
    })
    return fromData

}

export function getUniqueId(id:string){
    let hash = 0;
    if (id.length === 0) return '0';
    for (let i = 0; i < id.length; i++) {
        const char = id.charCodeAt(i);
        hash  = ((hash << 5) - hash) + char;
        hash |= 0; // Convert to 32bit integer
    }
    return String(hash)
}

export function getContensIDs(...ids:string[]){
    return ids.map(m=>getUniqueId(m))
}

export function getIdSelector(id:string){
    return `#${getUniqueId(id)}`
}