(function (modules) {
    const __webpack_module_cache__ = {};
    /**
     * 实现自定义导入函数__webpack_require__
     * @param {*模块唯一值，uri始终唯一} moduleId 
     * @returns 
     */
    function __webpack_require__(moduleId) {
        if (__webpack_module_cache__[moduleId]) {
            return __webpack_module_cache__[moduleId];
        }

        const fn = modules[moduleId];
        const module = {
            exports
        };
        fn(module, module.exports, __webpack_require__);
        const result = module.exports;
        __webpack_module_cache__[moduleId] = result;
        return result;

    }
    // 调用入口函数
    var __webpack_exports__ = __webpack_require__("./src/index.js")
})(
    // 依赖对象树
    {
        "./src/module01.js": function (module, exports, __webpack_require__) {
            console.log("run module01...")
            const a = "module01";

            module.exports = {
                a
            }

        },
        "./src/module02.js": function (module, exports, __webpack_require__) {
            console.log("run module02...")
            const b = "module02";

            module.exports = {
                b
            }

        },
        "./src/index.js": function (module, exports, __webpack_require__) {
            // console.log("start run...")
            // const { a } = __webpack_require__("./src/module01.js");
            // const { b } = __webpack_require__("./src/module02.js");
            // console.log("导出结果", a, b)
            // 使用eval标记执行行等信息
            eval("console.log(\"start run...\")\n\nconst {a} = __webpack_require__(/*! ./module01 */ \"./src/module01.js\");\n\nconst {b} = __webpack_require__(/*! ./module02 */ \"./src/module02.js\");\n\nconsole.log(\"导出结果\",a,b)\n\n\n//# sourceURL=webpack://engineering/./src/index.js?");

        }

    })