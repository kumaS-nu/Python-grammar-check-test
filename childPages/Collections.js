const languages = ["C", "C++", "C#", "Java", "JavaScript", "Python", "Ruby", "Swift", "Go", "Rust", "Kotlin"];
const productName = ["juice", "orange", "apple", "rice", "meat", "tofu", "PS5"];
const productPrice = [120, 200, 250, 3000, 400, 100, 50000];

window.onload = function() {
    setVariable();
};

function setVariable() {
    const span = getAllVariable(36);
    const allIndex = [...Array(languages.length)].map((_, i) => i);
    const index = [];

    for (let i = 0; i < 3; i++) {
        const idx = Math.floor(Math.random() * allIndex.length);
        index.push(allIndex.splice(idx, 1));
    }

    const v0 = languages[index[0]];
    setForEach(span, "0", v0);

    const v1 = languages[index[1]];
    setForEach(span, "1", v1);

    const v2 = languages[index[2]];
    setForEach(span, "2", v2);

    const v3 = Math.floor(Math.random() * 3) + 1;
    setForEach(span, "3", v3);

    const v4 = languages[index[v3 - 1]];
    setForEach(span, "4", v4);

    const v5 = v3 - 1;
    setForEach(span, "5", v5);

    const idx0 = Math.floor(Math.random() * allIndex.length);
    const v6 = languages[allIndex.splice(idx0, 1)];
    setForEach(span, "6", v6);

    const idx1 = Math.floor(Math.random() * allIndex.length);
    const v7 = languages[allIndex.splice(idx1, 1)];
    setForEach(span, "7", v7);

    const idx2 = Math.floor(Math.random() * allIndex.length);
    const v8 = languages[allIndex.splice(idx2, 1)];
    setForEach(span, "8", v8);

    const v9 = Math.floor(Math.random() * 6) + 1;
    setForEach(span, "9", v9);

    const idx3 = Math.floor(Math.random() * allIndex.length);
    const v10 = languages[allIndex.splice(idx3, 1)];
    setForEach(span, "10", v10);

    const longlang = [v0, v1, v2, v6, v7, v8];
    longlang.splice(v9 - 1, 0, v10);

    const v11 = "'" + longlang.reduce((agg, current) => agg + "', '" + current) + "'";
    setForEach(span, "11", v11);

    const v12 = v9 - 1;
    setForEach(span, "12", v12);

    const v13 = Math.floor(Math.random() * (longlang.length - 1)) + 1;
    setForEach(span, "13", v13);

    const v14 = Math.floor(Math.random() * (longlang.length - v13 - 1)) + v13 + 1;
    setForEach(span, "14", v14);

    const sublang = []
    for(let i = v13 - 1; i < v14; i++){
        sublang.push(longlang[i]);
    }
    const v15 = "'" + sublang.reduce((agg, current) => agg + "', '" + current) + "'";
    setForEach(span, "15", v15);

    const v16 = v13 - 1;
    setForEach(span, "16", v16);

    const v17 = v14;
    setForEach(span, "17", v17);

    const v18 = Math.floor(Math.random() * longlang.length) + 1;
    setForEach(span, "18", v18);

    longlang.splice(v18 - 1, 1);
    const v19 = "'" + longlang.reduce((agg, current) => agg + "', '" + current) + "'";
    setForEach(span, "19", v19);

    const v20 = v18 - 1;
    setForEach(span, "20", v20);

    const v21 = Math.floor(Math.random() * 3) + 1;
    setForEach(span, "21", v21);

    const tuple = ["first", "second", "third"];
    const v22 = tuple[v21 - 1];
    setForEach(span, "22", v22);

    const v23 = v21 - 1;
    setForEach(span, "23", v23);

    const pIndex0 = Math.floor(Math.random() * productName.length);
    const restName = productName;
    const restPrice = productPrice;

    const v24 = restName[pIndex0];
    setForEach(span, "24", v24);

    const v25 = restPrice[pIndex0];
    setForEach(span, "25", v25);

    restName.splice(pIndex0, 1);
    restPrice.splice(pIndex0, 1);

    const pIndex1 = Math.floor(Math.random() * restName.length);
    const v26 = restName[pIndex1];
    setForEach(span, "26", v26);

    const v27 = restPrice[pIndex1];
    setForEach(span, "27", v27);

    restName.splice(pIndex1, 1);
    restPrice.splice(pIndex1, 1);
    
    const flag = Math.floor(Math.random() * 2) == 0;
    const v28 = flag ? v24 : v26;
    setForEach(span, "28", v28);

    const v29 = flag ? v25 : v27;
    setForEach(span, "29", v29);

    const flag2 = Math.floor(Math.random() * 2) == 0;
    const v30 = flag2 ? v24 : v26;
    setForEach(span, "30", v30);

    const basePrice = flag2 ? v25 : v27;
    const v31 = flag2 ?  Math.floor(basePrice * 1.1) + Math.floor(Math.random() * basePrice * 0.2) : Math.floor(basePrice * 0.9) - Math.floor(Math.random() * basePrice * 0.2);
    setForEach(span, "31", v31);

    const pIndex2 = Math.floor(Math.random() * restName.length);
    const v32 = restName[pIndex2];
    setForEach(span, "32", v32);

    const v33 = restPrice[pIndex2];
    setForEach(span, "33", v33);

    const v34 = flag ? v31 : v25;
    setForEach(span, "34", v34);

    const v35 = flag ? v27 : v31;
    setForEach(span, "35", v35);

    hljs.highlightAll();
}