// SizeCalculation.js
// 尺寸计算

function sc() {
    init()
    A = parseInt(document.getElementById("bottle-diameter").value)
    B = parseInt(document.getElementById("bottle-height").value)
    BoxSelect = parseInt(document.getElementById("box").value)
    AccessoriesSelect = parseInt(document.getElementById("Accessories").value)
    ret = sizecacu(A, B, BoxSelect, AccessoriesSelect)
    document.getElementById("size-pre").innerText = "预计尺寸：长 " + ret.length + "(mm) * 宽 " + ret.width + "(mm) * 高 " + ret.height + "(mm) "
    if (BoxSelect > 2 && AccessoriesSelect == 2 && A >= 82) {
        document.getElementById("warning").innerText = "注意：48蛋托尺寸超标，需改用51蛋托"
    }

}

function sizecacu(diameter, height, box, accessories) {
    if (box == 1) {
        return {
            "length": diameter * 3 + 13,
            "width": diameter * 2 + 10,
            "height": height + 10
        }
    }
    if (box == 2) {
        return {
            "length": height + 8,
            "width": diameter * 3 + 10,
            "height": diameter * 2 + 12
        }
    }
    if (box == 3) {
        s_length = diameter * 6 + 28
        s_width = height + 8
        s_height = diameter + 12
        if (accessories == 1) {
            return {
                "length": s_length,
                "width": s_width,
                "height": s_height
            }
        }
        if (accessories == 2) {
            if (diameter <= 82) {
                return {
                    "length": 490,
                    "width": s_width,
                    "height": s_height
                }
            } else {
                return {
                    "length": diameter * 6 + 20,
                    "width": s_width,
                    "height": s_height
                }
            }
        }
        if (accessories == 3) {
            if (diameter <= 82) {
                return {
                    "length": 520,
                    "width": s_width,
                    "height": s_height
                }
            } else {
                return {
                    "length": diameter * 6 + 20,
                    "width": s_width,
                    "height": s_height
                }
            }
        }
        if (accessories == 4) {
            return {
                "length": s_length - 8,
                "width": s_width,
                "height": s_height + 6
            }
        }
    }
    if (box == 4) {
        s_length = diameter * 6 + 45
        s_width = height + 8
        s_height = diameter + 7
        if (accessories == 1) {
            return {
                "length": s_length,
                "width": s_width,
                "height": s_height
            }
        }
        if (accessories == 2) {
            if (diameter <= 82) {
                return {
                    "length": 510,
                    "width": s_width,
                    "height": s_height
                }
            } else {
                return {
                    "length": diameter * 6 + 35,
                    "width": s_width,
                    "height": s_height
                }
            }
        }
        if (accessories == 3) {
            if (diameter <= 82) {
                return {
                    "length": 540,
                    "width": s_width,
                    "height": s_height
                }
            } else {
                return {
                    "length": diameter * 6 + 35,
                    "width": s_width,
                    "height": s_height
                }
            }
        }
        if (accessories == 4) {
            return {
                "length": s_length,
                "width": s_width,
                "height": s_height + 6
            }
        }
    }
    if (box == 5) {
        s_length = diameter * 6 + 45
        s_width = height + 19
        s_height = diameter + 4
        if (accessories == 1) {
            return {
                "length": s_length,
                "width": s_width,
                "height": s_height
            }
        }
        if (accessories == 2) {
            if (diameter <= 82) {
                return {
                    "length": 505,
                    "width": s_width,
                    "height": s_height
                }
            } else {
                return {
                    "length": s_length,
                    "width": s_width,
                    "height": s_height
                }
            }
        }
        if (accessories == 3) {
            if (diameter <= 82) {
                return {
                    "length": 535,
                    "width": s_width,
                    "height": s_height
                }
            } else {
                return {
                    "length": s_length,
                    "width": s_width,
                    "height": s_height
                }
            }
        }
        if (accessories == 4) {
            return {
                "length": s_length,
                "width": s_width,
                "height": s_height + 6
            }
        }
    }

}

function createSC(root) {
    title = document.createElement("h1")
    title.className = "mdui-text-color-theme"
    title.innerText = "尺寸计算"
    root.appendChild(title)

    boxSelectH1 = document.createElement("h1")
    boxSelectH1.className = "mdui-text-color-theme"
    select1 = document.createElement("select")
    select1.className = "mdui-select"
    select1.setAttribute("mdui-select", "{position: 'bottom'}")
    select1.id = "box"

    options1 = [
        { value: "1", text: "1.立箱" },
        { value: "2", text: "2.2X3卧箱" },
        { value: "3", text: "3.1X6平铺卧箱" },
        { value: "4", text: "4.飞机盒" },
        { value: "5", text: "5.天地盖" }
    ]

    options1.forEach(optionData => {
        option = document.createElement("option")
        option.value = optionData.value
        option.text = optionData.text
        select1.appendChild(option)
    })
    boxSelectH1.innerText = "选择层数："
    boxSelectH1.appendChild(select1);
    root.appendChild(boxSelectH1);

    accessoriesSelectH1 = document.createElement("h1")
    accessoriesSelectH1.className = "mdui-text-color-theme"
    select2 = document.createElement("select")
    select2.className = "mdui-select"
    select2.setAttribute("mdui-select", "{position: 'bottom'}")
    select2.id = "Accessories"

    options2 = [
        { value: "1", text: "1.折叠纸托" },
        { value: "2", text: "2.48蛋托" },
        { value: "3", text: "3.51蛋托" },
        { value: "4", text: "4.卡脖格套" }
    ]

    options2.forEach(optionData => {
        option = document.createElement("option")
        option.value = optionData.value
        option.text = optionData.text
        select2.appendChild(option)
    })
    accessoriesSelectH1.innerText = "辅料格套选择："
    accessoriesSelectH1.appendChild(select2);
    root.appendChild(accessoriesSelectH1);

    // 创建输入框
    const fields = [
        { label: "直径", id: "bottle-diameter" },
        { label: "瓶高", id: "bottle-height" }
    ];

    const rowDiv = document.createElement("div");
    rowDiv.className = "mdui-row";

    fields.forEach(fieldData => {
        const fieldDiv = document.createElement("div");
        fieldDiv.className = "mdui-textfield mdui-textfield-floating-label mdui-col-xs-6";

        const label = document.createElement("label");
        label.className = "mdui-textfield-label";
        label.innerText = fieldData.label;
        fieldDiv.appendChild(label);

        const input = document.createElement("input");
        input.className = "mdui-textfield-input";
        input.id = fieldData.id;
        input.setAttribute("onblur", "checkNum1()");
        fieldDiv.appendChild(input);

        rowDiv.appendChild(fieldDiv);
    });

    root.appendChild(rowDiv);

    // 创建结果显示和按钮行
    const resultRowDiv = document.createElement("div");
    resultRowDiv.className = "mdui-row";

    const colDiv1 = document.createElement("div");
    colDiv1.className = "mdui-col-xs-8";

    const sizePreSpan = document.createElement("span");
    sizePreSpan.className = "mdui-text-color-theme";
    sizePreSpan.id = "size-pre";
    sizePreSpan.innerText = "预计尺寸：无";
    colDiv1.appendChild(sizePreSpan);

    colDiv1.appendChild(document.createElement("br"));

    const warningSpan = document.createElement("span");
    warningSpan.className = "mdui-text-color-theme";
    warningSpan.id = "warning";
    colDiv1.appendChild(warningSpan);

    resultRowDiv.appendChild(colDiv1);

    const colDiv2 = document.createElement("div");
    colDiv2.className = "mdui-col-xs-4";

    const button = document.createElement("button");
    button.className = "mdui-btn mdui-color-theme-accent mdui-ripple";
    button.setAttribute("onclick", "sc()");
    button.innerText = "开始计算";
    colDiv2.appendChild(button);

    resultRowDiv.appendChild(colDiv2);

    root.appendChild(resultRowDiv);

    const divider = document.createElement("div");
    divider.className = "mdui-divider";
    divider.style.marginTop = "50pt";
    root.appendChild(divider);
}