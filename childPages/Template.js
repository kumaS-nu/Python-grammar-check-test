/**jsではhtmlで変数としたところに実際に文字を入れる。つまり変数を管理する。 */

/**以下2行は例を動かすために必要なだけで必須のものではない。 */
const greed = ["Hello"];
const greedFuncName = ["hello"];

/**これに関してはおまじないで。 */
window.onload = function() {
    setVariable();
};

/**関数名はこれで。 */
function setVariable() {
    //これで書き換えるところを取得する。引数には変数の個数を与える。
    const span = getAllVariable(2);

    const index0 = Math.floor(Math.random() * greed.length);

    const v0 = greed[index0];
    //これで変数としたところを書き換える。Unil.jsを見てください。
    setForEach(span, "0", v0);

    const v1 = greedFuncName[index0];
    setForEach(span, "1", v1);

    //これでコードのハイライトを更新する。
    hljs.highlightAll();
}