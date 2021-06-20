const middle = ["hElLo", "pYtOn", "cShArP", "jAvAsCrIpT", "sWiFt", "kOtLiN"];
const find = ["A", "c", "C", "E", "F", "h", "i", "I", "j", "k", "l", "L", "n", "N", "o", "O", "p", "P", "r", "s", "S", "t", "T", "v", "W", "Y", ]
const beforeReplace = ["hello", "pyton", "csharp", "javascript", "swift", "kotlin"]
const bRep = ["o", "y", "c", "java", "ift", "t"]
const aRep = ["", "ho", "cy", "type", "eed", "h-"]
const title = ["hello to python", "hello to csharp", "hello to javascript", "hello to swift", "hello to kotlin"]

window.onload = function() {
    setVariable();
};

function setVariable() {

    const span = getAllVariable(21);

    const v0 = middle[Math.floor(Math.random() * middle.length)];
    setForEach(span, "0", v0);

    const v1 = v0.toLowerCase();
    setForEach(span, "1", v1);

    const v2 = middle[Math.floor(Math.random() * middle.length)];
    setForEach(span, "2", v2);

    const v3 = v2.toUpperCase();
    setForEach(span, "3", v3);

    const v4 = middle[Math.floor(Math.random() * middle.length)];
    setForEach(span, "4", v4);

    const index0 = Math.floor(Math.random() * (v4.length + 1));

    let v5;
    if (index0 === v4.length) {
        v5 = find[Math.floor(Math.random() * find.length)];
    } else {
        v5 = v4[index0];
    }
    setForEach(span, "5", v5);

    const v6 = v4.indexOf(v5);
    setForEach(span, "6", v6);

    const v7 = title[Math.floor(Math.random() * title.length)];
    setForEach(span, "7", v7);

    const v8 = find[Math.floor(Math.random() * find.length)];
    setForEach(span, "8", v8);

    const v9 = (v7.match(new RegExp(v8, "g")) || []).length;
    setForEach(span, "9", v9);

    const index1 = Math.floor(Math.random() * beforeReplace.length);

    const v10 = beforeReplace[index1];
    setForEach(span, "10", v10);

    const v11 = bRep[index1];
    setForEach(span, "11", v11);

    const v12 = aRep[index1];
    setForEach(span, "12", v12);

    const v13 = v10.replaceAll(v11, v12);
    setForEach(span, "13", v13);

    const v14 = title[Math.floor(Math.random() * title.length)];
    setForEach(span, "14", v14);

    const v15 = v14.charAt(0).toUpperCase() + v14.slice(1);
    setForEach(span, "15", v15);

    const v16 = title[Math.floor(Math.random() * title.length)];
    setForEach(span, "16", v16);

    const v17 = v16.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
    setForEach(span, "17", v17);

    const v18 = title[Math.floor(Math.random() * title.length)];
    setForEach(span, "18", v18);

    const v19 = find[Math.floor(Math.random() * find.length)];
    setForEach(span, "19", v19);

    const v20 = v18.split(v19).map(word => "'" + word + "'").join(', ')
    setForEach(span, "20", v20);

    //これでコードのハイライトを更新する。
    hljs.highlightAll();
}