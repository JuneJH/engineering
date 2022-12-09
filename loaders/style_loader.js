module.exports = function (source) {

    return `
    const dom = document.createElement("style");
    dom.innerHTML = \`${source}\`;
    document.body.appendChild(dom);
    module.exports = \`${source}\`;
    `
}