import $ from 'jquery';
class DataListCSSOption{
    name?:string ='default'
}

export function DataListCSS(option = new DataListCSSOption()){
    const {name} = option;
    $(`.${name}Table`).css({
        width: '100%',
        borderCollapse: 'collapse',
    })
    
    // $(`.${name}Caption`).css({
    //     fontSize: '2em',
    //     fontWeight: 'bold',
    //     margin: '1em 0'
    // })
    
    $(`.${name}Th,.${name}Td`).css({
        border: '1px solid #999',
        textAlign: ' center',
        // padding: '20px 0'
    })
    
    $(`.${name}Table .${name}Thead .${name}Tr`).css({
        backgroundColor: '#008c8c',
        color: '#fff'
    })
    
    $(`.${name}Table .${name}Tbody .${name}Tr:nth-child(odd)`).css({
        backgroundColor: '#eee'
    })
    
    $(`.${name}Table .${name}Tbody .${name}Tr .${name}Td:first-child`).css({
        color: '#f40'
    })
    
    // $(`.${name}Table tfoot .${name}Td`).css({
    //     textAlign: 'left',
    //     paddingLeft: `20px`
    // })   
    let tmpColor;

    $(`.${name}Table .${name}Tbody .${name}Tr`).off()
    $(`.${name}Table .${name}Tbody .${name}Tr`)
    .on( "mouseenter", function(){        
        tmpColor = $(this).css("backgroundColor")
        $(this).css({
            backgroundColor:"#CCC"
        })
    } )
    .on("mouseleave",function(){
        $(this).css({
            backgroundColor:tmpColor
        })
    })
}

