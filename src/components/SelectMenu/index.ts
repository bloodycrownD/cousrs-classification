import $ from "jquery";
export * from "./css";

class SelectMenuOption{
    items?:string[] = []
    id?:string = 'selectMenu'
}

export function SelectMenu(option = new SelectMenuOption()){
    const {items} = option
    return $(`<select name="selectMenu"  class="selectMenu">
                <option selected value='全部'>全部</option>
                ${items?.map(m=>`<option value='${m}'>${m.trim()||"否"}</option>`)}
            </select>`)
}