// 所有工具函数

function checkNum() {
    ids = ["box-length", "box-width", "box-height"]
    for (i in ids) {
        element = document.getElementById(ids[i]).value
        if (isNaN(element)) {
            num = parseInt(i) + 1
            init()
        }
    }
}
function checkNum1() {
    ids = ["size-length", "size-width", "size-height", "bottle-diameter", "bottle-height"]
    for (i in ids) {
        element = document.getElementById(ids[i]).value
        if (isNaN(element)) {
            num = parseInt(i) + 1
            init()
        }
    }
}

function init() {
    // alert("输入有误，请输入数字")
    document.getElementById("ans").innerText = "预估面积：无"
    document.getElementById("price").innerText = "预估价格：无"
    document.getElementById("size-pre").innerText = "预计尺寸：无"
    document.getElementById("warning").innerText = ""
}

function addHtml(id) {
    alert("加载" + id + "模块")
    fetch("material.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}