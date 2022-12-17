console.log("玩转webpack");

import borderStyle from "./assets/index.css";
import containerStyle from './assets/container.css';
import colorStyle from './assets/color.less';
import postcssStyle from './assets/pre.pcss'


const dom = document.createElement("div");
const dom2 = document.createElement("div");
dom.className = `${borderStyle.border} ${containerStyle.container} ${colorStyle.color}`;
dom2.className = `${postcssStyle.postcssBg}`
dom.innerText = "hello Css!!!"
dom2.innerText = "hello postcss!!!"
document.body.appendChild(dom);
document.body.appendChild(dom2);

const module01 = require("./modules/module01");
const module02 = require("./modules/module02");

console.log("module01=>",module01);
console.log("module02=>",module02);

console.log("index.js run over!!!")