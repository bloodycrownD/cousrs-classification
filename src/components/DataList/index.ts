import $ from "jquery";
export * from "./css";


interface option {
    title?: string,
    colHeads?: string[],
    data?: any[][],
    name?:string,
    colHeadIds?:string[],
    dataID?:string
}

export function DataList({
    title = '',
    colHeads = [],
    data = [[]],
    name = 'default',
    colHeadIds = [],
    dataID
}: option) {
    return $(
        `<table class="${name}Table">
       <!-- <caption class="${name}Caption">${title}</caption>-->
        <thead class='${name}Thead'>
            <tr class='${name}Tr'>
                ${colHeads.map((val,index) => `<th ${colHeadIds[index]?`id="${colHeadIds[index]}"`:""} class='${name}Th'>${val}</th>`).join('')}
            </tr>
        </thead>
        <tbody class='${name}Tbody' ${dataID?`id='${dataID}'`:""}>
            ${data.map(row => `<tr class='${name}Tr'>${row.map(rd => `<td class='${name}Td'>${rd}</td>`).join("")}</tr>`).join("")}
        </tbody>
    </table>`
    );
}
