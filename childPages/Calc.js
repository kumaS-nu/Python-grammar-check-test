window.onload = function() {
    setVariable();
};

function setVariable() {

    const span = getAllVariable(27);

    const v0 = Math.floor(Math.random() * 99 + 1);
    setForEach(span, "0", v0.toString());

    const v1 = Math.floor(Math.random() * 99 + 1);
    setForEach(span, "1", v1.toString());

    const v2 = v0 + v1;
    setForEach(span, "2", v2.toString());

    const v3 = Math.floor(Math.random() * 99 + 1);
    setForEach(span, "3", v3.toString());

    const v4 = Math.floor(Math.random() * (v3 - 1) + 1);
    setForEach(span, "4", v4.toString());

    const v5 = v3 - v4;
    setForEach(span, "5", v5.toString());

    const v6 = Math.floor(Math.random() * 99 + 1);
    setForEach(span, "6", v6.toString());

    const v7 = Math.floor(Math.random() * (99 - v6) + v6 + 1);
    setForEach(span, "7", v7.toString());

    const v8 = v6 - v7;
    setForEach(span, "8", v8.toString());

    const v9 = Math.floor(Math.random() * 99 + 1);
    setForEach(span, "9", v9.toString());

    const v10 = Math.floor(Math.random() * 99 + 1);
    setForEach(span, "10", v10.toString());

    const v11 = v9 * v10;
    setForEach(span, "11", v11.toString());

    const v12 = Math.floor(Math.random() * 99 + 1);
    setForEach(span, "12", v12.toString());

    const v13 = -Math.floor(Math.random() * 99 + 1);
    setForEach(span, "13", v13.toString());

    const v14 = v12 * v13;
    setForEach(span, "14", v14.toString());

    const v15 = Math.floor(Math.random() * 99 + 1) / 10;
    setForEach(span, "15", v15.toString());

    const v16 = Math.floor(Math.random() * 99 + 1) / 10;
    setForEach(span, "16", v16.toString());

    const v17 = v15 * v16;
    setForEach(span, "17", v17.toString());

    const v18 = Math.floor(Math.random() * 99 + 1);
    setForEach(span, "18", v18.toString());

    const v19 = Math.floor(Math.random() * 99 + 1);
    setForEach(span, "19", v19.toString());

    const v20 = v18 / v19;
    setForEach(span, "20", v20.toString());

    const v21 = Math.floor(Math.random() * 99 + 1);
    setForEach(span, "21", v21.toString());

    const v22 = Math.floor(Math.random() * 99 + 1);
    setForEach(span, "22", v22.toString());

    const v23 = v21 % v22;
    setForEach(span, "23", v23.toString());

    const v24 = Math.floor(Math.random() * 99 + 1);
    setForEach(span, "24", v24.toString());

    const v25 = Math.floor(Math.random() * 99 + 1);
    setForEach(span, "25", v25.toString());

    const v26 = Math.floor(v24 / v25);
    setForEach(span, "26", v26.toString());

    hljs.highlightAll();
}