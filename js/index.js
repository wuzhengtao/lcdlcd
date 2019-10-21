new Vue({
    el: "#app",
    data: {
        quantity: 0, //数量
        length: 0, //长
        width: 0, //宽
        area: 0, //面积
        weight: 0, //克重
        cost: 0, //成本单价
        paperPrice: 0, //面纸
        print: 0, //印刷
        printAns: 0, //印刷结果
        skin: 0, //膜
        skinAns: 0, //膜结果
        plate: 0, //纸板
        plateAns: 0, //钢板结果
        knife: 0, //刀版
        knifeAns: 0, //刀版结果

        handling: 0, //加工
        pattern: 0, //格套
        other: 0, //其他

        price: 0 //最终结果

    },
    watch: {
        quantity(cur, old) {
            this.changePrintAns();
            this.changeKnifeAns();
        },
        //面积的改变
        length(cur, old) {
            this.changeArea();
        },
        width(cur, old) {
            this.changeArea();
        },
        //单价的改变
        area(cur, old) {
            this.changeCost();
            this.changeSkinAns();
            this.changePlateAns();
        },
        weight(cur, old) {
            this.changeCost();
        },
        cost(cur, old) {
            this.changeCost();
        },
        //印刷
        print(cur, old) {
            this.changePrintAns();
            this.changePrice();
        },
        //膜
        skin(cur, old) {
            this.changeSkinAns();
            this.changePrice();
        },
        //纸板
        plate(cur, old) {
            this.changePlateAns();
            this.changePrice();
        },
        //刀版
        knife(cur, old) {
            this.changeKnifeAns();
            this.changePrice();
        },

        //最终价格联动
        paperPrice(cur, old) {
            this.changePrice();
        },
        handling(cur, old) {
            this.changePrice();
        },
        pattern(cur, old) {
            this.changePrice();
        },
        other(cur, old) {
            this.changePrice();
        },
    },
    methods: {
        changeArea() {
            this.area = Number(((this.length * this.width) / 10000).toFixed(3));
        },
        changeCost() {
            this.paperPrice = Number(((this.area * this.weight * this.cost) / 1000000).toFixed(3));
        },
        changePrintAns() {
            this.printAns = Number((this.print / this.quantity).toFixed(3));
        },
        changeSkinAns() {
            this.skinAns = Number((this.skin * this.area).toFixed(3));
        },
        changePlateAns() {
            this.plateAns = Number((this.plate * this.area).toFixed(3));
        },
        changeKnifeAns() {
            this.knifeAns = Number((this.knife / this.quantity).toFixed(3));
        },
        changePrice() {
            this.price =
                (
                    this.paperPrice +
                    this.printAns +
                    this.skinAns +
                    this.plateAns +
                    this.knifeAns +
                    this.handling * 1.0 +
                    this.pattern * 1.0 +
                    this.other * 1.0
                ).toFixed(3);
        }
    },
}) 