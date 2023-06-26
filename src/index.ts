import $ from "jquery";
import "jquery-ui-dist/jquery-ui.min"
import Tabs from "./components/Tabs";
import DataList from "./components/DataList";
$("<div id='root'></div>")
    .draggable()
    .appendTo("body")

DataList({
    colHeads: ["aaa", "bbb", "ccc"],
    data: [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]],
    element: "#root"
})
// Tabs().appendTo("#root")
Tabs()
