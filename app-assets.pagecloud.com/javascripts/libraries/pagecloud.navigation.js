(() => {
    var e = {};
    e.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), void 0 !== e && Object.defineProperty(e, "p", {
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
        }),
        function(t) {
            var i = '[data-widget-type="pagecloud-navigation"]',
                n = document.querySelector('meta[name="file-name"]'),
                o = n && n.getAttribute("content"),
                r = document.querySelectorAll(i),
                a = r.length;
            let s = !1;
            try {
                window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                    get: function() {
                        s = {
                            passive: !0
                        }
                    }
                }))
            } catch (e) {}
            for (var l = 0; l < a; l += 1) {
                var c = r[l],
                    u = c.querySelector(".menu-btn"),
                    d = u.parentNode.querySelectorAll("li > a"),
                    f = c.getAttribute("data-alignment");
                u && u.addEventListener("click", g, !1),
                    function(t, i, n) {
                        i.forEach((function(i) {
                            i.addEventListener("click", v, !1);
                            var r = i.getAttribute("href");
                            const a = e.g.location && e.g.location.origin && e.g.location.pathname ? e.g.location.origin + e.g.location.pathname : "";
                            var l, c;
                            (r === "/" + o || a && r === a) && i.classList.add("is-active"), h(i, n, t), window.addEventListener("resize", (l = function() {
                                h(i, n, t)
                            }, 100, function() {
                                var e = this,
                                    t = arguments;
                                clearTimeout(c), c = setTimeout((function() {
                                    c = null, l.apply(e, t)
                                }), 100)
                            }), !1), window.addEventListener("scroll", (function() {
                                h(i, n, t)
                            }), s), i.addEventListener("mouseover", (function() {
                                h(i, n, t)
                            })), i.addEventListener("touchstart", (function() {
                                h(i, n, t)
                            }), s)
                        }))
                    }(u, d, f)
            }

            function h(e, t, i) {
                var n = e.parentNode;
                if (n) {
                    var o = n.querySelector("ul");
                    if (o)
                        if (i.offsetWidth) o.style.position = "inherit", o.style.width = "auto", o.style.top = "inherit", o.style.transform = "inherit", o.style.left = "inherit";
                        else if (o.offsetWidth) {
                        o.opacity = 0, o.style.display = "block";
                        var r = o.getBoundingClientRect();
                        o.opacity = 1, o.style.display = "";
                        var a = 0,
                            s = n.getBoundingClientRect();
                        switch (o.style.position = "fixed", o.style.top = s.bottom + "px", o.style.width = r.width + "px", o.style.transform = "none", t) {
                            case "right":
                                a = s.right - r.width;
                                break;
                            case "center":
                                a = s.left - r.width / 2 + s.width / 2;
                                break;
                            default:
                                a = s.left
                        }
                        o.style.left = a + "px"
                    }
                }
            }

            function v(e) {
                var n = t(this).closest(i);
                n.hasClass("active") && g(0, n)
            }

            function g(e, n) {
                var o = n || t(this).closest(i);
                o.toggleClass("active");
                var r = o.hasClass("active");
                document.body.style.overflow = r ? "hidden" : "visible";
                var a = o.closest(".fixed-header");
                if (a) {
                    let e = "";
                    r && (e = a.css("overflow")), a.css("overflow", r ? "visible" : e)
                }
            }
        }(window.jQuery)
})();