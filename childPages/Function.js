const greed = ["Hello", "Good morning", "Good afternoon", "Good evening", "Good night"];
const greedFuncName = ["hello", "good_morning", "good_afternoon", "good_evening", "good_night"];
const greedWithNameFuncName = ["hello_name", "good_morning_name", "good_afternoon_name", "good_evening_name", "good_night_name"]

window.onload = function() {
    setVariable();
};

function setVariable() {
    const span = getAllVariable(4);

    const index0 = Math.floor(Math.random() * greed.length);

    const v0 = greed[index0];
    setForEach(span, "0", v0);

    const v1 = greedFuncName[index0];
    setForEach(span, "1", v1);

    const index1 = Math.floor(Math.random() * greed.length);

    const v2 = greed[index1];
    setForEach(span, "2", v2);

    const v3 = greedWithNameFuncName[index1];
    setForEach(span, "3", v3);

    hljs.highlightAll();
}