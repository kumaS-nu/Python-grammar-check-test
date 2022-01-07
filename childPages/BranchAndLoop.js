window.onload = function() {
    setVariable();
};

function setVariable() {
    const span = getAllVariable(2);

    const v0 = 20 + Math.floor(Math.random() * 10);
    setForEach(span, "0", v0);

    const v1 = v0 - (1 + Math.floor(Math.random() * 10));
    setForEach(span, "1", v1);

    hljs.highlightAll();
}