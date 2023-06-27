import $ from "jquery";
class TabCSSOption{
    width = '100%'
}

export function TabCSS(option = new TabCSSOption()){
    $("#tabs > div:not(:nth-of-type(1))").css({
        display:"none"
    })
    $("#tabs .tabUl li").on("click",function(){
        const activeIndex:number = $("#tabs .tabUl li").index(this)
        $("#tabs > div").css({
            display:"none"
        })      
        $("#tabs .tabUl li").css({
            borderBottom:"1px solid #e7ebf0",
            color:'black'
        })  
        $(`#tabs > div`).get(activeIndex)!.style.display = 'block';
        $("#tabs .tabUl li").get(activeIndex)!.style.borderBottom = "3px solid #1976d2"
        $("#tabs .tabUl li").get(activeIndex)!.style.color = "#1976d2"
       
    }) 
    $(`#tabs * `).css({
        padding: '0',
        margin: '0',
    })
    $(`#tabs `).css({
        border: '#e7ebf0 1px solid',
        paddingTop: '10px',
        width: `${option.width}`,
    })
    
    $(`#tabs .tabUl `).css({
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'row',
    })
    
    $(`#tabs .tabLi `).css({
        borderBottom: '1px solid #e7ebf0',
        paddingBottom: '10px',
        flexGrow: '1',
        textAlign: 'center',
    })
    
    $(`#tabs > div `).css({
        padding:'10px 0',
    })

    $(`#tabs > div .footInfo`).css({
        borderTop: '#e7ebf0 1px solid',
        margin:"20",
        border: '1px #999999 solid',
        marginTop: '12px',
        height: '40px',
        background: '#eeeeee'
    })
    
    $(`#tabs > div .content `).css({
        overflowY: 'scroll',
        height:"50vh"
    })
}
