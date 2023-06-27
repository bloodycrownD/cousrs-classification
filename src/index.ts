import $ from "jquery";
// import "jquery-ui-dist/jquery-ui.min"
import { Tabs, TabCSS } from "./components/Tabs";
import { DataList, DataListCSS } from "./components/DataList";
import { getContensIDs, getFormData, getIdSelector } from "./utils";
// import { formdata } from "./test/test"
import { SelectMenu, SelectMenuEvent } from "./components/SelectMenu";


$.post("http://jwes.hit.edu.cn/cjcx/queryQmcj", { pageNo: 1, pageSize: 100, pageCount: 2 }, data => {
    const formdata = getFormData(data)

    $("<div id='root'></div>")
        .appendTo(".Contentbox .pd10")



    // Tabs().appendTo("#root")
    Tabs({
        heads: ['总览', "必修", "选修", '素质核心', '素质选修', 'MOOC', "自定义"],
        contentsIDs: getContensIDs('总览content', "必修content", "选修content", '素质核心content', '素质选修content', 'MOOCcontent', '自定义content'),
        footInfoIDs: getContensIDs('总览footInfo', "必修footInfo", "选修footInfo", '素质核心footInfo', '素质选修footInfo', 'MOOCfootInfo', "自定义footInfo")
    }).appendTo("#root")
    DataList({
        colHeads: [
            '学年学期',
            "开课院系",
            "课程代码",
            "课程名称",
            "课程性质",
            "课程类别",
            "学分",
            "是否考试课",
            "参与学分绩",
            "总成绩",
            "教学班排名"
        ],
        data: formdata,
    }).appendTo(getIdSelector('总览content'))
    $(getIdSelector("总览footInfo")).html(`<p>总学分：${formdata.map(m => Number(m[6])).reduce((x, y) => x + y)}</p>`)


    DataList({
        colHeads: [
            '学年学期',
            "开课院系",
            "课程代码",
            "课程名称",
            "课程性质",
            "课程类别",
            "学分",
            "是否考试课",
            "参与学分绩",
            "总成绩",
            "教学班排名"
        ],
        data: formdata.filter(f => f[4] === '必修'),
    }).appendTo(getIdSelector("必修content"))
    $(getIdSelector("必修footInfo")).html(`<p>总学分：${formdata.filter(f => f[4] === '必修').map(m => Number(m[6])).reduce((x, y) => x + y)}</p>`)

    DataList({
        colHeads: [
            '学年学期',
            "开课院系",
            "课程代码",
            "课程名称",
            "课程性质",
            "课程类别",
            "学分",
            "是否考试课",
            "参与学分绩",
            "总成绩",
            "教学班排名"
        ],
        data: formdata.filter(f => f[4] === '选修'),
    }).appendTo(getIdSelector("选修content"))
    $(getIdSelector("选修footInfo")).html(`<p>总学分：${formdata.filter(f => f[4] === '选修').map(m => Number(m[6])).reduce((x, y) => x + y)}</p>`)

    DataList({
        colHeads: [
            '学年学期',
            "开课院系",
            "课程代码",
            "课程名称",
            "课程性质",
            "课程类别",
            "学分",
            "是否考试课",
            "参与学分绩",
            "总成绩",
            "教学班排名"
        ],
        data: formdata.filter(f => f[5] === '素质核心'),
    }).appendTo(getIdSelector("素质核心content"))
    $(getIdSelector("素质核心footInfo")).html(`<p>总学分：${formdata.filter(f => f[5] === '素质核心').map(m => Number(m[6])).reduce((x, y) => x + y)}</p>`)

    DataList({
        colHeads: [
            '学年学期',
            "开课院系",
            "课程代码",
            "课程名称",
            "课程性质",
            "课程类别",
            "学分",
            "是否考试课",
            "参与学分绩",
            "总成绩",
            "教学班排名"
        ],
        data: formdata.filter(f => f[5] === '素质选修'),
    }).appendTo(getIdSelector("素质选修content"))
    $(getIdSelector("素质选修footInfo")).html(`<p>总学分：${formdata.filter(f => f[5] === '素质选修').map(m => Number(m[6])).reduce((x, y) => x + y)}</p>`)

    DataList({
        colHeads: [
            '学年学期',
            "开课院系",
            "课程代码",
            "课程名称",
            "课程性质",
            "课程类别",
            "学分",
            "是否考试课",
            "参与学分绩",
            "总成绩",
            "教学班排名"
        ],
        data: formdata.filter(f => f[5].includes('MOOC')),
    }).appendTo(getIdSelector("MOOCcontent"))
    $(getIdSelector("MOOCfootInfo")).html(`<p>总学分：${formdata.filter(f => f[5] === 'MOOC').map(m => Number(m[6])).reduce((x, y) => x + y)}</p>`)

    DataList({
        dataID: "customDataList",
        colHeads: ["", "", "课程代码", "课程名称", "", "", "", "", "", "总成绩", "教学班排名"],
        data: formdata,
        colHeadIds: getContensIDs('学年学期', "开课院系", "课程代码", "课程名称", "课程性质", "课程类别", "学分", "是否考试课", "参与学分绩", "总成绩", "教学班排名")
    }).appendTo(getIdSelector("自定义content"))
    $(getIdSelector("自定义footInfo")).html(`<p>总学分：${formdata.filter(f => f[5] === 'MOOC').map(m => Number(m[6])).reduce((x, y) => x + y)}</p>`)

    SelectMenu({ items: [...new Set(formdata.map(m => m[0]))] }).appendTo(getIdSelector('学年学期'))
    SelectMenu({ items: [...new Set(formdata.map(m => m[1]))] }).appendTo(getIdSelector("开课院系"))
    // SelectMenu({items:[...new Set(formdata.map(m=>m[2]))]}).appendTo(getIdSelector("课程代码",))
    // SelectMenu({items:[...new Set(formdata.map(m=>m[3]))]}).appendTo(getIdSelector("课程名称",))
    SelectMenu({ items: [...new Set(formdata.map(m => m[4]))] }).appendTo(getIdSelector("课程性质"))
    SelectMenu({ items: [...new Set(formdata.map(m => m[5]))] }).appendTo(getIdSelector("课程类别"))
    SelectMenu({ items: [...new Set(formdata.map(m => m[6]))] }).appendTo(getIdSelector("学分"))
    SelectMenu({ items: [...new Set(formdata.map(m => m[7]))] }).appendTo(getIdSelector("是否考试课"))
    SelectMenu({ items: [...new Set(formdata.map(m => m[8]))] }).appendTo(getIdSelector("参与学分绩"))
    // SelectMenu({items:[...new Set(formdata.map(m=>m[9]))]}).appendTo(getIdSelector("总成绩",))
    // SelectMenu({items:[...new Set(formdata.map(m=>m[10]))]}).appendTo(getIdSelector("教学班排名"))




    DataListCSS()
    TabCSS()
    SelectMenuEvent(formdata)
    $(`#tabs > div .footInfo p`).css({
        padding: '10px',
        color: 'red'
    })

    $("#root").css({
        paddingTop:'20px',
        width:"100%"
    })
})