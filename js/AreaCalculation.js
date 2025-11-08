// 面积计算

function caculator() {
    A = parseInt(document.getElementById("box-length").value)
    B = parseInt(document.getElementById("box-width").value)
    C = parseInt(document.getElementById("box-height").value)
    sele = parseInt(document.getElementById("box1").value)
    ratio = [
        [2, 2, 0, 40, 0, 1, 1, 20],
        [1, 1, 0, 40, 0, 1, 1, 20],
        [1, 1, 0, 40, 0, 1, 1, 20],
        [1, 1, 0, 40, 1, 0, 1, 20],
        [1, 1, 0, 40, 0, 1, 1, 20],
        [1, 0, 4, 32, 0, 2, 2, 20],
        [0, 2, 3, 21, 1, 0, 4, 42],
        [1, 0, 4, 67, 0, 1, 4, 51],
        [1, 0, 4, 34, 0, 1, 4, 24],
        [2, 2, 0, 30, 0, 0.5, 1, 80],
        [1, 1, 0, 30, 0, 0.5, 1, 80]
    ]
    value = ratio[sele - 1]
    length = A * value[0] + B * value[1] + C * value[2] + value[3]
    width = A * value[4] + B * value[5] + C * value[6] + value[7]
    // 20240908 新增部分，飞机盒的幅宽-6
    if (sele == 7) {
        width = width - 6
    }
    document.getElementById("ans").innerText = "预估面积：长 " + length + "，幅宽" + width + "，面积为：" + length * width / 1000000
    // 20240908 增加下料尺寸
    msize_length = length - 4
    msize_width = width - 2
    document.getElementById("msize").innerText = "下料尺寸： " + msize_length + " X " + msize_width
}

function createAC(root) {
    title = document.createElement("h1")
    title.innerText = "面积计算"
    root.appendChild(title);

    boxTypeLabel = document.createElement("h1")
    boxTypeLabel.className = "mdui-text-color-theme"
    select = document.createElement("select")
    select.className = "mdui-select"
    select.setAttribute("mdui-select", "{position: 'bottom'}")
    select.id = "box1"
    options = [
        "1.一片成箱立箱",
        "2.两片成箱立箱",
        "3.小盖卧箱",
        "4.大盖卧箱",
        "5.平铺六支对箱",
        "6.鲅鱼箱",
        "7.飞机盒",
        "8.天盖",
        "9.地盖",
        "10.一片成手提袋",
        "11.两片成手提袋"
    ]
    for (i = 0; i < options.length; i++) {
        option = document.createElement("option")
        option.value = i + 1
        option.innerText = options[i]
        select.appendChild(option)
    }
    boxTypeLabel.innerText = "选择箱型："
    boxTypeLabel.appendChild(select)
    root.appendChild(boxTypeLabel)
    
    // 长宽高输入框
    ids = ["length", "width", "height"]
    labels = ["长", "宽", "高"]
    for (i = 0; i < ids.length; i++) {
        div = document.createElement("div")
        div.className = "mdui-textfield mdui-textfield-floating-label"
        label = document.createElement("label")
        label.className = "mdui-textfield-label"
        label.innerText = labels[i]
        input = document.createElement("input")
        input.className = "mdui-textfield-input"
        input.id = "box-" + ids[i]
        input.setAttribute("onblur", "checkNum()")
        div.appendChild(label)
        div.appendChild(input)
        root.appendChild(div)
    }

    // 结果显示区域
    rowDiv = document.createElement("div")
    rowDiv.className = "mdui-row"

    colDiv1 = document.createElement("div")
    colDiv1.className = "mdui-col-xs-8"

    ansSpan = document.createElement("span")
    ansSpan.className = "mdui-text-color-theme"
    ansSpan.id = "ans"
    ansSpan.innerText = "预估面积：无"
    colDiv1.appendChild(ansSpan)

    colDiv1.appendChild(document.createElement("br"))

    msizeSpan = document.createElement("span")
    msizeSpan.className = "mdui-text-color-theme"
    msizeSpan.id = "msize"
    msizeSpan.innerText = "下料尺寸：无"
    colDiv1.appendChild(msizeSpan)

    rowDiv.appendChild(colDiv1)

    colDiv2 = document.createElement("div")
    colDiv2.className = "mdui-col-xs-4"

    button = document.createElement("button")
    button.className = "mdui-btn mdui-color-theme-accent mdui-ripple"
    button.setAttribute("onclick", "caculator()")
    button.innerText = "开始计算"
    colDiv2.appendChild(button)

    rowDiv.appendChild(colDiv2)

    root.appendChild(rowDiv)

    divider = document.createElement("div")
    divider.className = "mdui-divider"
    divider.style.marginTop = "50pt"
    root.appendChild(divider)   

}
