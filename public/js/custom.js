/******/
(function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: false,
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function(exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, { enumerable: true, get: getter });
            /******/
        }
        /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/
    __webpack_require__.r = function(exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', { value: true });
        /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function(value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/
        if (mode & 2 && typeof value != 'string')
            for (var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
        /******/
        return ns;
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function(module) {
        /******/
        var getter = module && module.__esModule ?
            /******/
            function getDefault() { return module['default']; } :
            /******/
            function getModuleExports() { return module; };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "/";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 1);
    /******/
})
/************************************************************************/
/******/
({

    /***/
    "./resources/js/custom.js":
    /*!********************************!*\
      !*** ./resources/js/custom.js ***!
      \********************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        function spinner(element, action) {
            var local = $(element).parent().closest(".card");

            if (local) {
                $(local).waitMe({
                    effect: "win8",
                    text: "Aguarde um momento",
                    bg: "rgba(255, 255, 255, 0.7)",
                    color: "#000",
                    waitTime: -1,
                    textPos: "vertical"
                });
            }

            action();

            if (local) {
                $(local).waitMe("hide");
            }
        }

        $(".btn").addClass("waves-effect"); //Masked Input ========================================================

        $("input[data-type=cpf]").inputmask("999.999.999-99");
        $("input[data-type=cnpj]").inputmask("99.999.999/9999-99");
        $("input[data-type=documento]").inputmask({
            mask: ["999.999.999-99", "99.999.999/9999-99"],
            keepStatic: true
        });
        $("input[data-type=cep]").inputmask("99.999-999");
        $("input[data-type=telefone]").inputmask({
            mask: ["(99) 9999-9999", "(99) 9 9999-9999"],
            keepStatic: true
        });
        $("input[data-type=uf]").inputmask("AA", {
            placeholder: ""
        }); //Date Time

        $("input[data-type=datetime]").inputmask("d/m/y h:s", {
            placeholder: "__/__/____ __:__",
            alias: "datetime",
            hourFormat: "24"
        });
        $("input[data-type=time]").inputmask("h:s", {
            placeholder: "__:__",
            alias: "time",
            hourFormat: "24"
        });
        $("input[data-type=money]").inputmask("currency", {
            autoUnmask: true,
            radixPoint: ",",
            groupSeparator: ".",
            allowMinus: false,
            prefix: "R$ ",
            digits: 2,
            digitsOptional: false,
            rightAlign: true,
            unmaskAsNumber: true
        });
        $("input[data-type=decimal]").inputmask({
            alias: "numeric",
            radixPoint: ",",
            prefix: "% ",
            allowMinus: false,
            digits: 2,
            max: 99.99
        });

        /***/
    }),

    /***/
    1:
    /*!**************************************!*\
      !*** multi ./resources/js/custom.js ***!
      \**************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__( /*! C:\laragon\www\doouganhou\resources\js\custom.js */ "./resources/js/custom.js");


        /***/
    })

    /******/
});