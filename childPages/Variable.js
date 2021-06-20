const productName = ["juice", "orange", "apple", "rice", "meat", "tofu", "PS5"];
const productPrice = [120, 200, 250, 3000, 400, 100, 50000];

window.onload = function() {
    setVariable();
};

function setVariable() {
    const span = getAllVariable(8);
    const allIndex = [...Array(productName.length)].map((_, i) => i);
    const index = [];

    for (let i = 0; i < 3; i++) {
        const idx = Math.floor(Math.random() * allIndex.length);
        index.push(allIndex.splice(idx, 1));
    }

    const v0 = productName[index[0]];
    setForEach(span, "0", v0);

    const v1 = productPrice[index[0]];
    setForEach(span, "1", v1.toString());

    const v2 = productName[index[1]];
    setForEach(span, "2", v2);

    const v3 = productPrice[index[1]];
    setForEach(span, "3", v3.toString());

    const v4 = productName[index[2]];
    setForEach(span, "4", v4);

    const v5 = productPrice[index[2]];
    setForEach(span, "5", v5.toString());

    const v6 = v1 + v3 + v5;
    setForEach(span, "6", v6.toString());

    const v7 = Math.floor(v6 * 1.1);
    setForEach(span, "7", v7.toString());

    hljs.highlightAll();
}