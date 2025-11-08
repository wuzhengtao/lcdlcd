// 价格计算

function price_caculator() {
    num = Number(document.getElementById("price-number").value)

    price_length = Number(document.getElementById("price-length").value)
    price_width = Number(document.getElementById("price-width").value)
    area = Number(((price_length * price_width) / 10000).toFixed(3))

    weight = Number(document.getElementById("price-paper-weight").value)
    cost = Number(document.getElementById("price-paper-cost").value)
    paper = Number(((area * weight * cost) / 1000000).toFixed(3));

    print = Number(document.getElementById("price-print").value)
    skin = Number(document.getElementById("price-skin").value)
    plate = Number(document.getElementById("price-plate").value)
    knife = Number(document.getElementById("price-knife").value)
    work = Number(document.getElementById("price-work").value)
    pattern = Number(document.getElementById("price-pattern").value)
    other = Number(document.getElementById("price-other").value)

    price =
        (
            this.paper +
            Number((print / num).toFixed(3)) +
            Number((skin * area).toFixed(3)) +
            Number((plate * area).toFixed(3)) +
            Number((knife / num).toFixed(3)) +
            work * 1.0 +
            pattern * 1.0 +
            other * 1.0
        ).toFixed(3);
    document.getElementById("price").innerText = "预估价格： " + price + " 元";
}
function computePaper() {
    price_length = Number(document.getElementById("price-length").value)
    price_width = Number(document.getElementById("price-width").value)
    area = Number(((price_length * price_width) / 10000).toFixed(3))

    weight = Number(document.getElementById("price-paper-weight").value)
    cost = Number(document.getElementById("price-paper-cost").value)
    paper = Number(((area * weight * cost) / 1000000).toFixed(3));

    document.getElementById("paper-price").innerText = "= " + paper + " 元/个"
}
function computePrint() {
    num = Number(document.getElementById("price-number").value)
    print = Number(document.getElementById("price-print").value)
    printprice = Number((print / num).toFixed(3))
    document.getElementById("print-price").innerText = "= " + printprice + " 元/个"
}
function computeSkin() {
    price_length = Number(document.getElementById("price-length").value)
    price_width = Number(document.getElementById("price-width").value)
    area = Number(((price_length * price_width) / 10000).toFixed(3))
    skin = Number(document.getElementById("price-skin").value)
    skinprice = Number((skin * area).toFixed(3))
    document.getElementById("skin-price").innerText = "= " + skinprice + " 元/个"
}
function computePlate() {
    price_length = Number(document.getElementById("price-length").value)
    price_width = Number(document.getElementById("price-width").value)
    area = Number(((price_length * price_width) / 10000).toFixed(3))
    plate = Number(document.getElementById("price-plate").value)
    plateprice = Number((plate * area).toFixed(3))
    document.getElementById("plate-price").innerText = "= " + plateprice + " 元/个"
}
function computeKnife() {
    num = Number(document.getElementById("price-number").value)
    knife = Number(document.getElementById("price-knife").value)
    knifeprice = Number((knife / num).toFixed(3))
    document.getElementById("knife-price").innerText = "= " + knifeprice + " 元/个"
}

function createPC(root) {
    header = document.createElement("div")
    header.className = "mdui-row"
    titleDiv = document.createElement("div")
    titleDiv.className = "mdui-col-xs-4"
    title = document.createElement("h1")
    title.innerText = "价格计算"
    titleDiv.appendChild(title)
    header.appendChild(titleDiv)
    inputDiv = document.createElement("div")
    inputDiv.className = "mdui-col-xs-8"
    inputField = document.createElement("div")
    inputField.className = "mdui-textfield"
    inputBox = document.createElement("input")
    inputBox.className = "mdui-textfield-input"
    inputBox.type = "text"
    inputBox.placeholder = "备注"
    inputField.appendChild(inputBox)
    inputDiv.appendChild(inputField)
    header.appendChild(inputDiv)
    root.appendChild(header)

    priceNumberField = document.createElement("div")
    priceNumberField.className = "mdui-textfield mdui-textfield-floating-label"
    priceNumberLabel = document.createElement("label")
    priceNumberLabel.className = "mdui-textfield-label"
    priceNumberLabel.innerText = "数量"
    priceNumberInput = document.createElement("input")
    priceNumberInput.className = "mdui-textfield-input"
    priceNumberInput.id = "price-number"
    priceNumberField.appendChild(priceNumberLabel)
    priceNumberField.appendChild(priceNumberInput)
    root.appendChild(priceNumberField)

    paperRow = document.createElement("div")
    paperRow.className = "mdui-row"
    // 面纸费用
    col1_1 = document.createElement("div")
    col1_1.className = "mdui-col-xs-2"
    h2_1_1 = document.createElement("h2")
    h2_1_1.innerText = "面纸费用："
    col1_1.appendChild(h2_1_1)
    paperRow.appendChild(col1_1)

    const paperFields = [
        { label: "面积：长", id: "price-length", onblur: "computePaper()" },
        { label: "面积：宽", id: "price-width", onblur: "computePaper()" },
        { label: "克重", id: "price-paper-weight", onblur: "computePaper()" },
        { label: "费用", id: "price-paper-cost", onblur: "computePaper()" }
    ];

    paperFields.forEach(fieldData => {
        const colDiv = document.createElement("div");
        colDiv.className = "mdui-col-xs-2 mdui-textfield mdui-textfield-floating-label";

        const label = document.createElement("label");
        label.className = "mdui-textfield-label";
        label.innerText = fieldData.label;
        colDiv.appendChild(label);

        const input = document.createElement("input");
        input.className = "mdui-textfield-input";
        input.id = fieldData.id;
        input.setAttribute("onblur", fieldData.onblur);
        colDiv.appendChild(input);

        paperRow.appendChild(colDiv);
    });

    col1_2 = document.createElement("div")
    col1_2.className = "mdui-col-xs-2"
    h2_1_2 = document.createElement("h2")
    h2_1_2.id = "paper-price"
    h2_1_2.innerText = "= 0 元/个"
    col1_2.appendChild(h2_1_2)
    paperRow.appendChild(col1_2)

    root.appendChild(paperRow)

    printRow = document.createElement("div")
    printRow.className = "mdui-row"
    // 印刷
    col2_1 = document.createElement("div")
    col2_1.className = "mdui-col-xs-2"
    h2_2_1 = document.createElement("h2")
    h2_2_1.innerText = "印刷："
    col2_1.appendChild(h2_2_1)
    printRow.appendChild(col2_1)

    col2_2 = document.createElement("div")
    col2_2.className = "mdui-col-xs-8 mdui-textfield mdui-textfield-floating-label"
    label2_2 = document.createElement("label")
    label2_2.className = "mdui-textfield-label"
    label2_2.innerText = "印刷"
    input2_2 = document.createElement("input")
    input2_2.className = "mdui-textfield-input"
    input2_2.id = "price-print"
    input2_2.setAttribute("onblur", "computePrint()")
    col2_2.appendChild(label2_2)
    col2_2.appendChild(input2_2)
    printRow.appendChild(col2_2)

    col2_3 = document.createElement("div")
    col2_3.className = "mdui-col-xs-2"
    h2_2_3 = document.createElement("h2")
    h2_2_3.id = "print-price"
    h2_2_3.innerText = "= 0 元/个"
    col2_3.appendChild(h2_2_3)
    printRow.appendChild(col2_3)

    root.appendChild(printRow)

    skinRow = document.createElement("div")
    skinRow.className = "mdui-row"
    // 膜
    col3_1 = document.createElement("div")
    col3_1.className = "mdui-col-xs-2"
    h2_3_1 = document.createElement("h2")
    h2_3_1.innerText = "膜："
    col3_1.appendChild(h2_3_1)
    skinRow.appendChild(col3_1)

    col3_2 = document.createElement("div")
    col3_2.className = "mdui-col-xs-8 mdui-textfield mdui-textfield-floating-label"
    label3_2 = document.createElement("label")
    label3_2.className = "mdui-textfield-label"
    label3_2.innerText = "膜"
    input3_2 = document.createElement("input")
    input3_2.className = "mdui-textfield-input"
    input3_2.id = "price-skin"
    input3_2.setAttribute("onblur", "computeSkin()")
    col3_2.appendChild(label3_2)
    col3_2.appendChild(input3_2)
    skinRow.appendChild(col3_2)

    col3_3 = document.createElement("div")
    col3_3.className = "mdui-col-xs-2"
    h2_3_3 = document.createElement("h2")
    h2_3_3.id = "skin-price"
    h2_3_3.innerText = "= 0 元/个"
    col3_3.appendChild(h2_3_3)
    skinRow.appendChild(col3_3)

    root.appendChild(skinRow)

    plateRow = document.createElement("div")
    plateRow.className = "mdui-row"
    // 纸板
    col4_1 = document.createElement("div")
    col4_1.className = "mdui-col-xs-2"
    h2_4_1 = document.createElement("h2")
    h2_4_1.innerText = "纸板："
    col4_1.appendChild(h2_4_1)
    plateRow.appendChild(col4_1)

    col4_2 = document.createElement("div")
    col4_2.className = "mdui-col-xs-8 mdui-textfield mdui-textfield-floating-label"
    label4_2 = document.createElement("label")
    label4_2.className = "mdui-textfield-label"
    label4_2.innerText = "纸张"
    input4_2 = document.createElement("input")
    input4_2.className = "mdui-textfield-input"
    input4_2.id = "price-plate"
    input4_2.setAttribute("onblur", "computePlate()")
    col4_2.appendChild(label4_2)
    col4_2.appendChild(input4_2)
    plateRow.appendChild(col4_2)

    col4_3 = document.createElement("div")
    col4_3.className = "mdui-col-xs-2"
    h2_4_3 = document.createElement("h2")
    h2_4_3.id = "plate-price"
    h2_4_3.innerText = "= 0 元/个"
    col4_3.appendChild(h2_4_3)
    plateRow.appendChild(col4_3)

    root.appendChild(plateRow)

    knifeRow = document.createElement("div")
    knifeRow.className = "mdui-row"
    // 刀版
    col5_1 = document.createElement("div")
    col5_1.className = "mdui-col-xs-2"
    h2_5_1 = document.createElement("h2")
    h2_5_1.innerText = "刀版："
    col5_1.appendChild(h2_5_1)
    knifeRow.appendChild(col5_1)

    col5_2 = document.createElement("div")
    col5_2.className = "mdui-col-xs-8 mdui-textfield mdui-textfield-floating-label"
    label5_2 = document.createElement("label")
    label5_2.className = "mdui-textfield-label"
    label5_2.innerText = "刀版"
    input5_2 = document.createElement("input")
    input5_2.className = "mdui-textfield-input"
    input5_2.id = "price-knife"
    input5_2.setAttribute("onblur", "computeKnife()")
    col5_2.appendChild(label5_2)
    col5_2.appendChild(input5_2)
    knifeRow.appendChild(col5_2)

    col5_3 = document.createElement("div")
    col5_3.className = "mdui-col-xs-2"
    h2_5_3 = document.createElement("h2")
    h2_5_3.id = "knife-price"
    h2_5_3.innerText = "= 0 元/个"
    col5_3.appendChild(h2_5_3)
    knifeRow.appendChild(col5_3)

    root.appendChild(knifeRow)

    workPatternOther = document.createElement("div")
    workPatternOther.className = "mdui-row"
    workField = document.createElement("div")
    workField.className = "mdui-col-xs-4 mdui-textfield mdui-textfield-floating-label"
    workLabel = document.createElement("label")
    workLabel.className = "mdui-textfield-label"
    workLabel.innerText = "加工"
    workInput = document.createElement("input")
    workInput.className = "mdui-textfield-input"
    workInput.id = "price-work"
    workField.appendChild(workLabel)
    workField.appendChild(workInput)
    workPatternOther.appendChild(workField)

    patternField = document.createElement("div")
    patternField.className = "mdui-col-xs-4 mdui-textfield mdui-textfield-floating-label"
    patternLabel = document.createElement("label")
    patternLabel.className = "mdui-textfield-label"
    patternLabel.innerText = "格套"
    patternInput = document.createElement("input")
    patternInput.className = "mdui-textfield-input"
    patternInput.id = "price-pattern"
    patternField.appendChild(patternLabel)
    patternField.appendChild(patternInput)
    workPatternOther.appendChild(patternField)

    otherField = document.createElement("div")
    otherField.className = "mdui-col-xs-4 mdui-textfield mdui-textfield-floating-label"
    otherLabel = document.createElement("label")
    otherLabel.className = "mdui-textfield-label"
    otherLabel.innerText = "其他"
    otherInput = document.createElement("input")
    otherInput.className = "mdui-textfield-input"
    otherInput.id = "price-other"
    otherField.appendChild(otherLabel)
    otherField.appendChild(otherInput)
    workPatternOther.appendChild(otherField)

    root.appendChild(workPatternOther)

    priceRow = document.createElement("div")
    priceRow.className = "mdui-row"
    colPrice1 = document.createElement("div")
    colPrice1.className = "mdui-col-xs-8"
    priceSpan = document.createElement("span")
    priceSpan.className = "mdui-text-color-theme"
    priceSpan.id = "price"
    priceSpan.innerText = "预估价格：无"
    colPrice1.appendChild(priceSpan)
    priceRow.appendChild(colPrice1)

    colPrice2 = document.createElement("div")
    colPrice2.className = "mdui-col-xs-4"
    calcButton = document.createElement("button")
    calcButton.className = "mdui-btn mdui-color-theme-accent mdui-ripple"
    calcButton.setAttribute("onclick", "price_caculator()")
    calcButton.innerText = "开始计算"
    colPrice2.appendChild(calcButton)
    priceRow.appendChild(colPrice2)

    root.appendChild(priceRow)
}
