(function (modules) {
    function require(moduleId) {

        const fn = modules[moduleId];
        const module = {
            exports
        };

        const result = fn(module,module.exports,require);
        return result;

    }
    require("./src/index.js")
})({
    "./src/module01.js": function (module, exports, require) {

    },
    "./src/module02.js": function () {

    }

})