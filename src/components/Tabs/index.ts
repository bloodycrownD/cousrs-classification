import $ from "jquery";
export * from "./css"

interface option{
    heads?:string[],
    contentsIDs?:string[]
    footInfoIDs?:string[]
}
export default function Tabs({
    heads = [],
    contentsIDs = [],
    footInfoIDs = []
}:option){
    return $(`<div id="tabs">
                <ul class="tabUl">
                    ${heads.map(h=>`<li class="tabLi">${h}</li>`).join('')}
                </ul>
                ${contentsIDs.map((val,index)=>`<div >
                            <div id="${val}" class='content'></div>
                            <div id="${footInfoIDs[index]}" style="${footInfoIDs[index]?"":"display:none;"}" class='footInfo'></div>
                        </div>`).join('')}
            </div>`)
}