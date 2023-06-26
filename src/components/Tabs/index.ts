import $ from "jquery";
export * from "./css"

interface option{
    heads?:string[],
    contentsID?:string[]
}
export default function Tabs({
    heads = [],
    contentsID = []
}:option){
    return $(`<div id="tabs">
    <ul class="tabUl">
        ${heads.map(h=>`<li class="tabLi">${h}</li>`).join('')}
    </ul>
    ${contentsID.map(c=>`<div id="${c}"></div>`).join('')}
</div>`)
}