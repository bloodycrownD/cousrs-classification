import $ from "jquery";
import "jquery-ui-dist/jquery-ui.min"
import Tabs, { TabCSS } from "./components/Tabs";
import { DataList, DataListCSS } from "./components/DataList";
import { getContensIDs, getIdSelector } from "./utils";
import { formdata } from "./test/test"



$("<div id='root'></div>")
    .draggable()
    .appendTo("body")



// Tabs().appendTo("#root")
Tabs({
    heads: ['总览', "必修", "选修", '素质核心', '素质选修', 'MOOC'],
    contentsIDs: getContensIDs('总览content',"必修content", "选修content",  '素质核心content', '素质选修content', 'MOOCcontent'),
    footInfoIDs: getContensIDs('总览footInfo',"必修footInfo", "选修footInfo",  '素质核心footInfo', '素质选修footInfo', 'MOOCfootInfo')
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






DataListCSS()
TabCSS()
