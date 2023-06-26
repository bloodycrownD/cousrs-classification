import $ from "jquery";
export * from "./css";


interface option {
    title?: string,
    colHeads?: string[],
    data?: any[][],
    name?:string
}

export function DataList({
    title = '',
    colHeads = [],
    data = [[]],
    name = 'default'
}: option) {
    return $(
        `<table class="${name}Table">
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
    </table>`
    );
}
