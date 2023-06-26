import $ from "jquery";
import CSS from "./css";


interface option {
    title?: string,
    colHeads?: string[],
    data?: any[][],
    element?: string,
    name?:string
}

export default function DataList({
    title = 'table title',
    colHeads = [],
    data = [[]],
    element = "body",
    name = 'default'
}: option) {
    $(
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
    )
        .appendTo(element);
    CSS({})
}
