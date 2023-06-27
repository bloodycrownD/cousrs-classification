import $ from "jquery";
import { getIdSelector } from "../../../utils";
import { DataListCSS} from "../../DataList";

export function SelectMenuEvent(formdata:string[][]) {
    $(".selectMenu").on("change", function () {
        const selectVal:any[] = []
        $(".selectMenu option:selected").each(function(){
            selectVal.push($(this).val())
        })    
        
        const filtedData:string[][] =  formdata.filter(f => selectVal.every((val, index) => {
            if(val === "全部") return true;
            if(index > 1) return val.trim() === f[index + 2].trim()
            return val.trim() === f[index].trim()
        }))
        $("#customDataList").html(`${filtedData.map(row => `<tr class='defaultTr'>${row.map(rd => `<td class='defaultTd'>${rd}</td>`).join("")}</tr>`).join("")}`)

        
        const scores = filtedData.map(m => Number(m[6]))
        $(getIdSelector("自定义footInfo")).html(`<p>总学分：${scores.length?scores.reduce((x, y) => x + y):0}</p>`)


            DataListCSS()
            $(`#tabs > div .footInfo p`).css({
                padding: '10px',
                color: 'red'
            })
            
            
    })

   

    

    

}