if (typeof jQuery === "undefined") {
    throw new Error("jQuery plugins need to be before this file");
}

$.AdminBSB = {};
$.AdminBSB.options = {
    colors: {
        red: "#F44336",
        pink: "#E91E63",
        purple: "#9C27B0",
        deepPurple: "#673AB7",
        indigo: "#3F51B5",
        blue: "#2196F3",
        lightBlue: "#03A9F4",
        cyan: "#00BCD4",
        teal: "#009688",
        green: "#4CAF50",
        lightGreen: "#8BC34A",
        lime: "#CDDC39",
        yellow: "#ffe821",
        amber: "#FFC107",
        orange: "#FF9800",
        deepOrange: "#FF5722",
        brown: "#795548",
        grey: "#9E9E9E",
        blueGrey: "#607D8B",
        black: "#000000",
        white: "#ffffff",
    },
    leftSideBar: {
        scrollColor: "rgba(0,0,0,0.5)",
        scrollWidth: "4px",
        scrollAlwaysVisible: false,
        scrollBorderRadius: "0",
        scrollRailBorderRadius: "0",
        scrollActiveItemWhenPageLoad: true,
        breakpointWidth: 1170,
    },
    dropdownMenu: {
        effectIn: "fadeIn",
        effectOut: "fadeOut",
    },
};

/* Left Sidebar - Function =================================================================================================
 *  You can manage the left sidebar menu options
 *
 */
$.AdminBSB.leftSideBar = {
    activate: function() {
        var _this = this;
        var $body = $("body");
        var $overlay = $(".overlay");

        //Close sidebar
        $(window).click(function(e) {
            var $target = $(e.target);
            if (e.target.nodeName.toLowerCase() === "i") {
                $target = $(e.target).parent();
            }

            if (!$target.hasClass("bars") &&
                _this.isOpen() &&
                $target.parents("#leftsidebar").length === 0
            ) {
                if (!$target.hasClass("js-right-sidebar")) $overlay.fadeOut();
                $body.removeClass("overlay-open");
            }
        });

        $.each($(".menu-toggle.toggled"), function(i, val) {
            $(val).next().slideToggle(0);
        });

        $.each($(".ml-menu li.active"), function(i, val) {
            $(val).parents("li").addClass("active");
        });

        //When page load
        $.each($(".menu .list li.active"), function(i, val) {
            var $activeAnchors = $(val).find("a:eq(0)");

            $activeAnchors.addClass("toggled");
            $activeAnchors.next().show();
        });

        //Collapse or Expand Menu
        $(".menu-toggle").on("click", function(e) {
            var $this = $(this);
            var $content = $this.next();

            if ($($this.parents("ul")[0]).hasClass("list")) {
                var $not = $(e.target).hasClass("menu-toggle") ?
                    e.target :
                    $(e.target).parents(".menu-toggle");

                $.each(
                    $(".menu-toggle.toggled").not($not).next(),
                    function(i, val) {
                        if ($(val).is(":visible")) {
                            $(val).prev().toggleClass("toggled");
                            $(val).slideUp();
                        }
                    }
                );
            }

            $this.toggleClass("toggled");
            $content.slideToggle(320);
        });

        //Set menu height
        _this.setMenuHeight();
        _this.checkStatusForResize(true);
        $(window).resize(function() {
            _this.setMenuHeight();
            _this.checkStatusForResize(false);
        });

        //Set Waves
        Waves.attach(".menu .list a", ["waves-block"]);
        Waves.init();
    },
    setMenuHeight: function(isFirstTime) {
        if (typeof $.fn.slimScroll != "undefined") {
            var configs = $.AdminBSB.options.leftSideBar;
            var height =
                $(window).height() -
                ($(".legal").outerHeight() +
                    $(".user-info").outerHeight() +
                    $(".navbar").innerHeight());

            var $el = $(".list");

            $el.slimscroll({
                height: height + "px",
                color: configs.scrollColor,
                size: configs.scrollWidth,
                alwaysVisible: configs.scrollAlwaysVisible,
                borderRadius: configs.scrollBorderRadius,
                railBorderRadius: configs.scrollRailBorderRadius,
            });

            //Scroll active menu item when page load, if option set = true
            if ($.AdminBSB.options.leftSideBar.scrollActiveItemWhenPageLoad) {
                var item = $(".menu .list li.active")[0];
                if (item) {
                    var activeItemOffsetTop = item.offsetTop;
                    if (activeItemOffsetTop > 150)
                        $el.slimscroll({
                            scrollTo: activeItemOffsetTop + "px",
                        });
                }
            }
        }
    },
    checkStatusForResize: function(firstTime) {
        var $body = $("body");
        var $openCloseBar = $(".navbar .navbar-header .bars");
        var width = $body.width();

        if (firstTime) {
            $body
                .find(".content, .sidebar")
                .addClass("no-animate")
                .delay(1000)
                .queue(function() {
                    $(this).removeClass("no-animate").dequeue();
                });
        }

        if (width < $.AdminBSB.options.leftSideBar.breakpointWidth) {
            $body.addClass("ls-closed");
            $openCloseBar.fadeIn();
        } else {
            $body.removeClass("ls-closed");
            $openCloseBar.fadeOut();
        }
    },
    isOpen: function() {
        return $("body").hasClass("overlay-open");
    },
};
//==========================================================================================================================

/* Right Sidebar - Function ================================================================================================
 *  You can manage the right sidebar menu options
 *
 */
$.AdminBSB.rightSideBar = {
    activate: function() {
        var _this = this;
        var $sidebar = $("#rightsidebar");
        var $overlay = $(".overlay");

        //Close sidebar
        $(window).click(function(e) {
            var $target = $(e.target);
            if (e.target.nodeName.toLowerCase() === "i") {
                $target = $(e.target).parent();
            }

            if (!$target.hasClass("js-right-sidebar") &&
                _this.isOpen() &&
                $target.parents("#rightsidebar").length === 0
            ) {
                if (!$target.hasClass("bars")) $overlay.fadeOut();
                $sidebar.removeClass("open");
            }
        });

        $(".js-right-sidebar").on("click", function() {
            $sidebar.toggleClass("open");
            if (_this.isOpen()) {
                $overlay.fadeIn();
            } else {
                $overlay.fadeOut();
            }
        });
    },
    isOpen: function() {
        return $(".right-sidebar").hasClass("open");
    },
};
//==========================================================================================================================

/* Searchbar - Function ================================================================================================
 *  You can manage the search bar
 *
 */
var $searchBar = $(".search-bar");
$.AdminBSB.search = {
    activate: function() {
        var _this = this;

        //Search button click event
        $(".js-search").on("click", function() {
            _this.showSearchBar();
        });

        //Close search click event
        $searchBar.find(".close-search").on("click", function() {
            _this.hideSearchBar();
        });

        //ESC key on pressed
        $searchBar.find('input[type="text"]').on("keyup", function(e) {
            if (e.keyCode == 27) {
                _this.hideSearchBar();
            }
        });
    },
    showSearchBar: function() {
        $searchBar.addClass("open");
        $searchBar.find('input[type="text"]').focus();
        $(".js-search").fadeOut();
    },
    hideSearchBar: function() {
        $searchBar.removeClass("open");
        $searchBar.find('input[type="text"]').val("");
        $(".js-search").fadeIn();
    },
};
//==========================================================================================================================

/* Navbar - Function =======================================================================================================
 *  You can manage the navbar
 *
 */
$.AdminBSB.navbar = {
    activate: function() {
        var $body = $("body");
        var $overlay = $(".overlay");

        //Open left sidebar panel
        $(".bars").on("click", function() {
            $body.toggleClass("overlay-open");
            if ($body.hasClass("overlay-open")) {
                $overlay.fadeIn();
            } else {
                $overlay.fadeOut();
            }
        });

        //Close collapse bar on click event
        $('.nav [data-close="true"]').on("click", function() {
            var isVisible = $(".navbar-toggle").is(":visible");
            var $navbarCollapse = $(".navbar-collapse");
            if (isVisible) {
                $navbarCollapse.slideUp(function() {
                    $navbarCollapse.removeClass("in").removeAttr("style");
                });
            }
        });
    },
};
//==========================================================================================================================

/* Input - Function ========================================================================================================
 *  You can manage the inputs(also textareas) with name of class 'form-control'
 *
 */
$.AdminBSB.input = {
    activate: function($parentSelector) {
        $parentSelector = $parentSelector || $("body");

        //On focus event
        $parentSelector.find(".form-control").focus(function() {
            $(this).closest(".form-line").addClass("focused");
        });

        //On focusout event
        $parentSelector.find(".form-control").focusout(function() {
            var $this = $(this);
            if ($this.parents(".form-group").hasClass("form-float")) {
                if ($this.val() == "") {
                    $this.parents(".form-line").removeClass("focused");
                }
            } else {
                $this.parents(".form-line").removeClass("focused");
            }
        });

        //On label click
        $parentSelector.on(
            "click",
            ".form-float .form-line .form-label",
            function() {
                $(this).parent().find("input").focus();
            }
        );

        //Not blank form
        $parentSelector.find(".form-control").each(function() {
            if ($(this).val() !== "") {
                $(this).parents(".form-line").addClass("focused");
            }
        });
    },
};
//==========================================================================================================================

/* Form - Select - Function ================================================================================================
 *  You can manage the 'select' of form elements
 *
 */
$.AdminBSB.select = {
    activate: function() {
        if ($.fn.selectpicker) {
            $("select:not(.ms)").selectpicker();
        }
    },
};
//==========================================================================================================================

/* DropdownMenu - Function =================================================================================================
 *  You can manage the dropdown menu
 *
 */

$.AdminBSB.dropdownMenu = {
    activate: function() {
        var _this = this;

        $(".dropdown, .dropup, .btn-group").on({
            "show.bs.dropdown": function() {
                var dropdown = _this.dropdownEffect(this);
                _this.dropdownEffectStart(dropdown, dropdown.effectIn);
            },
            "shown.bs.dropdown": function() {
                var dropdown = _this.dropdownEffect(this);
                if (dropdown.effectIn && dropdown.effectOut) {
                    _this.dropdownEffectEnd(dropdown, function() {});
                }
            },
            "hide.bs.dropdown": function(e) {
                var dropdown = _this.dropdownEffect(this);
                if (dropdown.effectOut) {
                    e.preventDefault();
                    _this.dropdownEffectStart(dropdown, dropdown.effectOut);
                    _this.dropdownEffectEnd(dropdown, function() {
                        dropdown.dropdown.removeClass("open");
                    });
                }
            },
        });

        //Set Waves
        Waves.attach(".dropdown-menu li a", ["waves-block"]);
        Waves.init();
    },
    dropdownEffect: function(target) {
        var effectIn = $.AdminBSB.options.dropdownMenu.effectIn,
            effectOut = $.AdminBSB.options.dropdownMenu.effectOut;
        var dropdown = $(target),
            dropdownMenu = $(".dropdown-menu", target);

        if (dropdown.length > 0) {
            var udEffectIn = dropdown.data("effect-in");
            var udEffectOut = dropdown.data("effect-out");
            if (udEffectIn !== undefined) {
                effectIn = udEffectIn;
            }
            if (udEffectOut !== undefined) {
                effectOut = udEffectOut;
            }
        }

        return {
            target: target,
            dropdown: dropdown,
            dropdownMenu: dropdownMenu,
            effectIn: effectIn,
            effectOut: effectOut,
        };
    },
    dropdownEffectStart: function(data, effectToStart) {
        if (effectToStart) {
            data.dropdown.addClass("dropdown-animating");
            data.dropdownMenu.addClass("animated dropdown-animated");
            data.dropdownMenu.addClass(effectToStart);
        }
    },
    dropdownEffectEnd: function(data, callback) {
        var animationEnd =
            "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
        data.dropdown.one(animationEnd, function() {
            data.dropdown.removeClass("dropdown-animating");
            data.dropdownMenu.removeClass("animated dropdown-animated");
            data.dropdownMenu.removeClass(data.effectIn);
            data.dropdownMenu.removeClass(data.effectOut);

            if (typeof callback == "function") {
                callback();
            }
        });
    },
};
//==========================================================================================================================

/* Browser - Function ======================================================================================================
 *  You can manage browser
 *
 */
var edge = "Microsoft Edge";
var ie10 = "Internet Explorer 10";
var ie11 = "Internet Explorer 11";
var opera = "Opera";
var firefox = "Mozilla Firefox";
var chrome = "Google Chrome";
var safari = "Safari";

$.AdminBSB.browser = {
    activate: function() {
        var _this = this;
        var className = _this.getClassName();

        if (className !== "") $("html").addClass(_this.getClassName());
    },
    getBrowser: function() {
        var userAgent = navigator.userAgent.toLowerCase();

        if (/edge/i.test(userAgent)) {
            return edge;
        } else if (/rv:11/i.test(userAgent)) {
            return ie11;
        } else if (/msie 10/i.test(userAgent)) {
            return ie10;
        } else if (/opr/i.test(userAgent)) {
            return opera;
        } else if (/chrome/i.test(userAgent)) {
            return chrome;
        } else if (/firefox/i.test(userAgent)) {
            return firefox;
        } else if (!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) {
            return safari;
        }

        return undefined;
    },
    getClassName: function() {
        var browser = this.getBrowser();

        if (browser === edge) {
            return "edge";
        } else if (browser === ie11) {
            return "ie11";
        } else if (browser === ie10) {
            return "ie10";
        } else if (browser === opera) {
            return "opera";
        } else if (browser === chrome) {
            return "chrome";
        } else if (browser === firefox) {
            return "firefox";
        } else if (browser === safari) {
            return "safari";
        } else {
            return "";
        }
    },
};

//==========================================================================================================================

$(function() {
    $.AdminBSB.browser.activate();
    $.AdminBSB.leftSideBar.activate();
    $.AdminBSB.rightSideBar.activate();
    $.AdminBSB.navbar.activate();
    $.AdminBSB.dropdownMenu.activate();
    $.AdminBSB.input.activate();
    $.AdminBSB.select.activate();
    $.AdminBSB.search.activate();

    $(".page-loader-wrapper").fadeOut();
});

class Notification {
    /**
     *
     * @param {String} text Menssagem da notificação
     * @param {String} colorName Cor da notificação
     * @param {String} placementFrom  Posição x da notificação
     * @param {String} placementAlign Posição y da notificação
     * @param {String} animateEnter  Animação de entrada
     * @param {String} animateExit  Animação de saída
     */
    static show(
        text,
        colorName = "bg-black",
        placementFrom = "bottom",
        placementAlign = "right",
        animateEnter = "animated bounceInRight",
        animateExit = "animated bounceOutRight"
    ) {
        var allowDismiss = true;

        $.notify({ message: text }, {
            type: colorName,
            allow_dismiss: allowDismiss,
            newest_on_top: true,
            timer: 1000,
            placement: {
                from: placementFrom,
                align: placementAlign,
            },
            animate: {
                enter: animateEnter,
                exit: animateExit,
            },
            template: '<div data-notify="container" class="bootstrap-notify-container alert alert-dismissible {0} ' +
                (allowDismiss ? "p-r-35" : "") +
                '" role="alert">' +
                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">x</button>' +
                '<span data-notify="icon"></span> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                "</div>" +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                "</div>",
        });
    }

    /**
     *
     * @param {String} message Mensagem da notificação
     */
    static success(message) {
        this.show(message, "bg-green");
    }

    /**
     *
     * @param {String} message Mensagem da notificação
     */
    static error(message) {
        this.show(message, "bg-red");
    }

    /**
     *
     * @param {String} message Mensagem da notificação
     */
    static info(message) {
        this.show(message, "bg-blue");
    }

    /**
     *
     * @param {String} message Mensagem da notificação
     */
    static warning(message) {
        this.show(message, "bg-orange");
    }
}

function spinner(element, action) {
    var local = $(element).parent().closest(".card");
    if (local) {
        $(local).waitMe({
            effect: "win8",
            text: "Aguarde um momento",
            bg: "rgba(255, 255, 255, 0.7)",
            color: "#000",
            waitTime: -1,
            textPos: "vertical",
        });
    }
    action();
    if (local) {
        $(local).waitMe("hide");
    }
}

$(".btn").addClass("waves-effect");

//Masked Input ========================================================
$("input[data-type=cpf]").inputmask("999.999.999-99");
$("input[data-type=cnpj]").inputmask("99.999.999/9999-99");
$("input[data-type=documento]").inputmask({
    mask: ["999.999.999-99", "99.999.999/9999-99"],
    keepStatic: true,
});
$("input[data-type=cep]").inputmask("99.999-999");
$("input[data-type=telefone]").inputmask({
    mask: ["(99) 9999-9999", "(99) 99999-9999"],
    keepStatic: true,
});
$("input[data-type=uf]").inputmask("AA", { placeholder: "" });

//Date Time
$("input[data-type=datetime]").inputmask("d/m/y h:s", {
    placeholder: "__/__/____ __:__",
    alias: "datetime",
    hourFormat: "24",
});

$("input[data-type=time]").inputmask("h:s", {
    placeholder: "__:__",
    alias: "time",
    hourFormat: "24",
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
    unmaskAsNumber: true,
});

$("input[data-type=decimal]").inputmask({
    alias: "numeric",
    radixPoint: ",",
    prefix: "% ",
    allowMinus: false,
    digits: 2,
    max: 99.99,
});

$("input[data-type=dezenas]").inputmask("99,99,99,99,99,99,99,99,99,99");

$("input[required]").parent().parent().find("label").append('*').css('color', 'red').attr('title', 'Campo obrigatório');

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, "");
    if (cpf === "") return false;
    if (
        cpf.length !== 11 ||
        cpf === "00000000000" ||
        cpf === "11111111111" ||
        cpf === "22222222222" ||
        cpf === "33333333333" ||
        cpf === "44444444444" ||
        cpf === "55555555555" ||
        cpf === "66666666666" ||
        cpf === "77777777777" ||
        cpf === "88888888888" ||
        cpf === "99999999999"
    )
        return false;
    add = 0;
    for (i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(cpf.charAt(9))) return false;
    add = 0;
    for (i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(cpf.charAt(10))) return false;
    return true;
}