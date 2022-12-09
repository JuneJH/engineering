console.log("start run...")
const cssStr = require("./assets/index.css");
const imgStr = require("./assets/nari.jpeg");
console.log("输出css",cssStr);
console.log("输出img",imgStr);
const imgDom = document.createElement("img");
imgDom.src = imgStr;
document.body.appendChild(imgDom)

const {a} = require("./module01");

const {b} = require("./module02");

console.log("导出结果",a,b)
