var pricePage = `
<!-- 价格计算 -->
            <div class="mdui-row">
                <div class="mdui-col-xs-4">
                    <h1>价格计算</h1>
                </div>
                <div class="mdui-col-xs-8">
                    <div class="mdui-textfield">
                        <input class="mdui-textfield-input" type="text" placeholder="备注" />
                    </div>
                </div>
            </div>
            <div class="mdui-textfield mdui-textfield-floating-label">
                <label class="mdui-textfield-label">数量</label>
                <input class="mdui-textfield-input" id="price-number" />
            </div>
            <div class="mdui-row">
                <div class="mdui-col-xs-2">
                    <h2>面纸费用：</h2>
                </div>
                <div class="mdui-col-xs-2 mdui-textfield mdui-textfield-floating-label">
                    <label class="mdui-textfield-label">面积：长</label>
                    <input class="mdui-textfield-input" id="price-length" onblur="computePaper()" />
                </div>
                <div class="mdui-col-xs-2 mdui-textfield mdui-textfield-floating-label">
                    <label class="mdui-textfield-label">面积：宽</label>
                    <input class="mdui-textfield-input" id="price-width" onblur="computePaper()" />
                </div>
                <div class="mdui-col-xs-2 mdui-textfield mdui-textfield-floating-label">
                    <label class="mdui-textfield-label">克重</label>
                    <input class="mdui-textfield-input" id="price-paper-weight" onblur="computePaper()" />
                </div>
                <div class="mdui-col-xs-2 mdui-textfield mdui-textfield-floating-label">
                    <label class="mdui-textfield-label">费用</label>
                    <input class="mdui-textfield-input" id="price-paper-cost" onblur="computePaper()" />
                </div>
                <div class="mdui-col-xs-2">
                    <h2 id="paper-price">= 0 元/个</h2>
                </div>
            </div>
            <div class="mdui-row">
                <div class="mdui-col-xs-2">
                    <h2>印刷：</h2>
                </div>
                <div class="mdui-col-xs-8 mdui-textfield mdui-textfield-floating-label">
                    <label class="mdui-textfield-label">印刷</label>
                    <input class="mdui-textfield-input" id="price-print" onblur="computePrint()" />
                </div>
                <div class="mdui-col-xs-2">
                    <h2 id="print-price">= 0 元/个</h2>
                </div>
            </div>
            <div class="mdui-row">
                <div class="mdui-col-xs-2">
                    <h2>膜：</h2>
                </div>
                <div class="mdui-col-xs-8 mdui-textfield mdui-textfield-floating-label">
                    <label class="mdui-textfield-label">膜</label>
                    <input class="mdui-textfield-input" id="price-skin" onblur="computeSkin()" />
                </div>
                <div class="mdui-col-xs-2">
                    <h2 id="skin-price">= 0 元/个</h2>
                </div>
            </div>
            <div class="mdui-row">
                <div class="mdui-col-xs-2">
                    <h2>纸板：</h2>
                </div>
                <div class="mdui-col-xs-8 mdui-textfield mdui-textfield-floating-label">
                    <label class="mdui-textfield-label">纸张</label>
                    <input class="mdui-textfield-input" id="price-plate" onblur="computePlate()" />
                </div>
                <div class="mdui-col-xs-2">
                    <h2 id="plate-price">= 0 元/个</h2>
                </div>
            </div>
            <div class="mdui-row">
                <div class="mdui-col-xs-2">
                    <h2>刀版：</h2>
                </div>
                <div class="mdui-col-xs-8 mdui-textfield mdui-textfield-floating-label">
                    <label class="mdui-textfield-label">刀版</label>
                    <input class="mdui-textfield-input" id="price-knife" onblur="computeKnife()" />
                </div>
                <div class="mdui-col-xs-2">
                    <h2 id="knife-price">= 0 元/个</h2>
                </div>
            </div>
            <div class="mdui-row">
                <div class="mdui-col-xs-4 mdui-textfield mdui-textfield-floating-label">
                    <label class="mdui-textfield-label">加工</label>
                    <input class="mdui-textfield-input" id="price-work" />
                </div>
                <div class="mdui-col-xs-4 mdui-textfield mdui-textfield-floating-label">
                    <label class="mdui-textfield-label">格套</label>
                    <input class="mdui-textfield-input" id="price-pattern" />
                </div>
                <div class="mdui-col-xs-4 mdui-textfield mdui-textfield-floating-label">
                    <label class="mdui-textfield-label">其他</label>
                    <input class="mdui-textfield-input" id="price-other" />
                </div>
            </div>
            <div class="mdui-row">
                <div class="mdui-col-xs-8">
                    <span class="mdui-text-color-theme" id="price">预估价格：无</span>
                </div>
                <div class="mdui-col-xs-4">
                    <button class="mdui-btn mdui-color-theme-accent mdui-ripple"
                        onclick="price_caculator()">开始计算</button>
                </div>
            </div>
`
