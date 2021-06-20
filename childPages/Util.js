/** IDがnumまでのもの（変数とするもの）を取得する。
 * @num 取得するidの範囲。これ未満のidを取得する。
 */
function getAllVariable(num) {
    const span = {};
    for (let i = 0; i < num; i++) {
        span[i.toString()] = document.querySelectorAll('[id^="' + i.toString() + '"]');
    }
    return span;
}

/** 変数を適応する。
 * @span getAllVariable()で取得したもの。
 * @key 適応する要素のキー。つまりid名。
 * @content 書き換える内容。 */
function setForEach(span, key, content) {
    span[key].forEach(element => {
        element.textContent = content;
    })
}

/** 表示・非表示を切り替える。
 * @id 表示・非表示を切り替えるもののid。 */
function switchAnswer(id) {
    const answer = document.getElementById(id);
    if (answer.style.visibility === "hidden") {
        answer.style.visibility = "";
    } else {
        answer.style.visibility = "hidden";
    }
}

/** トップページに戻る。 */
function goBack() {
    window.location.href = '../index.html';
}