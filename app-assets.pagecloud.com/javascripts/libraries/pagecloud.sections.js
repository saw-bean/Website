(() => {
    function e(e, o) {
        if (e) {
            var r = -1 !== o.indexOf("smooth"),
                t = function(e) {
                    if (e) {
                        var o = e.getBoundingClientRect().top + document.documentElement.scrollTop,
                            r = document.querySelector(".fixed-header");
                        return r ? o - r.offsetHeight : o
                    }
                }(e);
            if (r) var n = document.documentElement.scrollTop,
                c = setInterval((function() {
                    window.scrollTo(0, n), (n = n < t ? n + 50 : n - 50) >= t && n <= t + 50 && (clearInterval(c), window.scrollTo(0, t))
                }), 10);
            else window.scrollTo(0, t)
        }
    }
    "undefined" != typeof __webpack_require__ && Object.defineProperty(__webpack_require__, "p", {
        get: function() {
            try {
                if ("string" != typeof resourceBaseUrlRUNTIME) throw new Error("WebpackRequireFrom: 'resourceBaseUrlRUNTIME' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");
                return resourceBaseUrlRUNTIME
            } catch (e) {
                return console.error(e), "auto"
            }
        },
        set: function(e) {
            console.warn("WebpackRequireFrom: something is trying to override webpack public path. Ignoring the new value" + e + ".")
        }
    });
    try {
        var o;
        try {
            e(o = document.querySelector(decodeURIComponent(window.location.hash.replace(/\?.*/, ""))), window.location.href)
        } catch (e) {}
        if (window.scrollTo && window.location.hash && !o) {
            var r = decodeURIComponent(window.location.hash.replace("#", ""));
            r = r.replace(/\?.*/, ""), e(document.querySelector("[pagecloud-sn='" + r + "']"), window.location.href)
        }
    } catch (e) {}
    Array.prototype.forEach.call(document.querySelectorAll("a[href]"), (function(o) {
        try {
            var r = decodeURIComponent(o.href.replace(window.location.origin, "")),
                t = r.split("#")[0];
            if ((t = t.indexOf("?") >= 0 ? t.split("?")[0] : t) === window.location.pathname && -1 !== r.indexOf("#")) {
                var n = r.replace(/^.*#/, "");
                n = n.replace(/\?.*/, "");
                var c = document.querySelector("[pagecloud-sn='" + n + "']");
                (c = c || document.getElementById(n)) && (o.onclick = function(o) {
                    o.preventDefault(), e(c, r)
                })
            }
        } catch (e) {}
    }))
})();