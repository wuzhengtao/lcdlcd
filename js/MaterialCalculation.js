// MaterialCalculation.js
// 下料计算
function mc() {
    A = parseInt(document.getElementById("size-length").value)
    B = parseInt(document.getElementById("size-width").value)
    C = parseInt(document.getElementById("size-height").value)
    sele = parseInt(document.getElementById("size").value)
    xiabanParam = [0, 30, 35, 35, 35]
    lineParam = [0, 1, 1, 1, 2]
    xiaban1 = (((A + B) * 2 + xiabanParam[sele]) * 0.1).toFixed(2)
    xiaban2 = ((B + C + 2 * lineParam[sele]) * 0.1).toFixed(2)
    xiaban = (xiaban1 * xiaban2 * 0.0001).toFixed(5)


    line1 = ((B * 0.5 + lineParam[sele]) * 0.1).toFixed(2)
    line2 = (C * 0.1).toFixed(2)
    document.getElementById("size-xiaban").innerText = "下板尺寸：" + xiaban1 + "(cm) * " + xiaban2 + "(cm) = " + xiaban
    document.getElementById("size-xiaban").innerHTML += "(m<sup>2</sup>)"
    document.getElementById("size-line").innerText = "压线：" + line1 + "(cm) + " + line2 + "(cm) + " + line1 + "(cm)"

}

function createMC(root) {
    // 创建标题
    title = document.createElement("h1");
    title.innerText = "下料计算";
    root.appendChild(title)

    // 创建选择层数下拉框
    selectorView = document.createElement("h1");
    selectorView.className = "mdui-text-color-theme";
    select = document.createElement("select");
    select.className = "mdui-select";
    select.setAttribute("mdui-select", "{position: 'bottom'}");
    select.id = "size";

    options = [
        { value: "1", text: "1.B三层" },
        { value: "2", text: "2.双E五层" },
        { value: "3", text: "3.BE五层" },
        { value: "4", text: "4.BC五层" }
    ];

    options.forEach(optionData => {
        option = document.createElement("option");
        option.value = optionData.value;
        option.text = optionData.text;
        select.appendChild(option);
    });
    selectorView.innerText = "选择层数：";
    selectorView.appendChild(select);
    root.appendChild(selectorView);

    // 创建输入框
    const fields = [
        { label: "长", id: "size-length" },
        { label: "宽", id: "size-width" },
        { label: "高", id: "size-height" }
    ];

    fields.forEach(fieldData => {
        const fieldDiv = document.createElement("div");
        fieldDiv.className = "mdui-textfield mdui-textfield-floating-label";

        const label = document.createElement("label");
        label.className = "mdui-textfield-label";
        label.innerText = fieldData.label;
        fieldDiv.appendChild(label);

        const input = document.createElement("input");
        input.className = "mdui-textfield-input";
        input.id = fieldData.id;
        input.setAttribute("onblur", "checkNum1()");
        fieldDiv.appendChild(input);

        root.appendChild(fieldDiv);
    });

    // 创建结果显示和按钮行
    const rowDiv = document.createElement("div");
    rowDiv.className = "mdui-row";

    const colDiv1 = document.createElement("div");
    colDiv1.className = "mdui-col-xs-8";

    const sizeXiaban = document.createElement("span");
    sizeXiaban.className = "mdui-text-color-theme";
    sizeXiaban.id = "size-xiaban";
    sizeXiaban.innerText = "下板尺寸：无";
    colDiv1.appendChild(sizeXiaban);
    colDiv1.appendChild(document.createElement("br"));

    const sizeLine = document.createElement("span");
    sizeLine.className = "mdui-text-color-theme";
    sizeLine.id = "size-line";
    sizeLine.innerText = "压线：无";
    colDiv1.appendChild(sizeLine);
    rowDiv.appendChild(colDiv1);

    const colDiv2 = document.createElement("div");
    colDiv2.className = "mdui-col-xs-4";

    const button = document.createElement("button");
    button.className = "mdui-btn mdui-color-theme-accent mdui-ripple";
    button.setAttribute("onclick", "mc()");
    button.innerText = "开始计算";
    colDiv2.appendChild(button);
    rowDiv.appendChild(colDiv2);

    root.appendChild(rowDiv);

    // 创建分割线
    const h1 = document.createElement("div");
    h1.className = "mdui-divider";
    h1.style.marginTop = "50pt";
    root.appendChild(h1);
}