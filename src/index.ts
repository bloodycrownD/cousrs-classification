import $ from "jquery";
import "jquery-ui-dist/jquery-ui.min"
import Tabs, { TabCSS } from "./components/Tabs";
import {DataList,DataListCSS} from "./components/DataList";
$("<div id='root'></div>")
    .draggable()
    .appendTo("body")



// Tabs().appendTo("#root")
Tabs({
    heads:['one','two'],
    contentsID: ['t1','t2']
}).appendTo("#root")
DataList({
    colHeads: ["aaa", "bbb", "ccc"],
    data: [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]],
}).appendTo("#t1")
DataList({
    colHeads: ["aaa", "bbb", "ccc"],
    data: [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]],
}).appendTo("#t2")
DataListCSS({})
TabCSS()
