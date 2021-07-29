(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1596], {
        72612: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return E
                },
                j: function() {
                    return y
                }
            });
            var r, l, o = n(67294),
                i = n(11191),
                c = n(61138),
                u = n(80767);

            function s() {
                return (s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var a, f, d = function(e) {
                return o.createElement("svg", s({
                    viewBox: "0 0 18 18",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), r || (r = o.createElement("path", {
                    d: "M7.925 13.256L13.05 17.1a.747.747 0 00.785.071.75.75 0 00.415-.671V6.932l-6.325 6.324zM1.5 12.75h3.75l9-9V1.5a.75.75 0 00-1.2-.6l-5.8 4.35H1.5A.75.75 0 00.75 6v6c0 .415.335.75.75.75z",
                    fill: "#fff"
                })), l || (l = o.createElement("path", {
                    d: "M.75 18a.75.75 0 01-.53-1.28L16.72.22a.75.75 0 111.06 1.06l-16.5 16.5a.748.748 0 01-.53.22z",
                    fill: "#fff"
                })))
            };

            function v() {
                return (v = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var p, m = function(e) {
                return o.createElement("svg", v({
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 18 18"
                }, e), a || (a = o.createElement("g", {
                    clipPath: "url(#unmuted_svg__clip0)",
                    fill: "#fff"
                }, o.createElement("path", {
                    d: "M10.84 1.078a.755.755 0 00-.785.072L4.252 5.502H.75a.75.75 0 00-.75.75v6.003c0 .415.335.75.75.75h3.502l5.803 4.352a.747.747 0 00.785.071.751.751 0 00.415-.671V1.75a.751.751 0 00-.415-.672zm2.849 4.992l-.53-.53-1.062 1.06.53.531a3.003 3.003 0 010 4.244l-.53.53 1.061 1.062.53-.53a4.507 4.507 0 000-6.367z"
                }), o.createElement("path", {
                    d: "M15.28 3.417l-1.06 1.061.53.53a6.01 6.01 0 010 8.49l-.53.53 1.06 1.061.53-.53c2.926-2.926 2.926-7.686 0-10.612l-.53-.53z"
                }))), f || (f = o.createElement("defs", null, o.createElement("clipPath", {
                    id: "unmuted_svg__clip0"
                }, o.createElement("path", {
                    fill: "#fff",
                    d: "M0 0h18v18H0z"
                })))))
            };

            function h() {
                return (h = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var b, g = function(e) {
                return o.createElement("svg", h({
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), p || (p = o.createElement("path", {
                    d: "M9 2h3.6l-4 4L10 7.4l4-4V7h2V0H9v2zM6 8.6l-4 4V9H0v7h7v-2H3.4l4-4L6 8.6z",
                    fill: "#fff"
                })))
            };

            function x() {
                return (x = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var w = function(e) {
                return o.createElement("svg", x({
                    viewBox: "0 0 17 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), b || (b = o.createElement("path", {
                    d: "M.4 11.4H4l-4 4 1.4 1.4 4-4v3.6h2v-7h-7v2zM15.4 0l-4 4V.4h-2v7h7v-2h-3.6l4-4L15.4 0z",
                    fill: "#fff"
                })))
            };

            function E(e) {
                var t = e.className,
                    n = e.onClick,
                    r = e.isMuted;
                return (0, i.tZ)(c.xu, {
                    as: "button",
                    sx: {
                        appearance: "none",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        border: "none",
                        borderRadius: 999,
                        height: 38,
                        width: 38,
                        p: 0,
                        cursor: "pointer",
                        outline: "none"
                    },
                    className: t,
                    onClick: n
                }, (0, i.tZ)(c.xu, {
                    sx: {
                        display: "flex"
                    }
                }, r ? (0, i.tZ)(d, {
                    sx: {
                        width: 18,
                        height: "100%",
                        mx: "auto"
                    }
                }) : (0, i.tZ)(m, {
                    sx: {
                        width: 19,
                        height: "100%",
                        mx: "auto"
                    }
                })))
            }

            function y(e) {
                var t = e.className,
                    n = e.onClick,
                    r = e.isFullscreen,
                    l = (0, o.useState)(!1),
                    s = l[0],
                    a = l[1];
                return (0, o.useEffect)((function() {
                    var e = (0, u.Z)();
                    a(e)
                }), []), s ? (0, i.tZ)(c.xu, {
                    as: "button",
                    sx: {
                        appearance: "none",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        border: "none",
                        borderRadius: 999,
                        height: 38,
                        width: 38,
                        p: 0,
                        cursor: "pointer",
                        outline: "none"
                    },
                    className: t,
                    onClick: n
                }, (0, i.tZ)(c.xu, {
                    sx: {
                        display: "flex"
                    }
                }, r ? (0, i.tZ)(w, {
                    sx: {
                        width: 16,
                        height: "100%",
                        mx: "auto"
                    }
                }) : (0, i.tZ)(g, {
                    sx: {
                        width: 16,
                        height: "100%",
                        mx: "auto"
                    }
                }))) : null
            }
        },
        62375: function(e, t, n) {
            "use strict";
            n.d(t, {
                AQ: function() {
                    return O
                },
                SI: function() {
                    return w
                }
            });
            var r = n(26265),
                l = n(67294),
                o = n(11191),
                i = n(61138),
                c = n(53110),
                u = n(72612),
                s = n(53869),
                a = n(17757),
                f = n(41139),
                d = n(6381);

            function v(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var p = {
                initial: {
                    opacity: 0
                },
                exit: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: .1,
                    duration: .2
                }
            };

            function m(e) {
                var t = e.isLoading,
                    n = e.size;
                return (0, o.tZ)(s.M, {
                    initial: !1
                }, t && (0, o.tZ)(a.E.div, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? v(Object(n), !0).forEach((function(t) {
                            (0, r.Z)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, p), (0, o.tZ)(i.xu, {
                    sx: {
                        position: d.vK,
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "white.100"
                    }
                }, (0, o.tZ)(f.Z, {
                    size: n
                }))))
            }
            var h = n(79640),
                b = n(80767);

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var w = (0, l.memo)((function(e) {
                var t = (0, o.tZ)(E, x({}, e));
                if (e.ratio) {
                    var n = e.ratio || 1;
                    return (0, o.tZ)(i.oM, {
                        ratio: n,
                        sx: {
                            bg: "black.5",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    }, t)
                }
                return t
            }));

            function E(e) {
                var t = e.artwork,
                    n = e.controls,
                    r = (0, h.RY)(t),
                    l = (0, h.AI)(t);
                return (0, h.Wv)(r) ? (0, o.tZ)(O, {
                    assetUrl: r,
                    posterUrl: l,
                    controls: n
                }) : (0, o.tZ)(y, {
                    imageUrl: r,
                    controls: n
                })
            }

            function y(e) {
                var t = e.imageUrl,
                    n = e.controls,
                    r = (0, c.r)(),
                    s = function() {
                        return r.active ? r.exit() : r.enter()
                    },
                    a = {
                        fullscreenActiveWrapper: {
                            backgroundColor: "white.100",
                            p: ["m", "xl"]
                        },
                        fullscreenControls: {
                            position: d.vK,
                            bottom: "s",
                            right: "s",
                            display: "flex",
                            flexDirection: d.BM
                        },
                        mediaControls: {
                            position: d.vK,
                            bottom: 0,
                            right: 0,
                            pr: "m",
                            pb: "xl"
                        }
                    };
                return (0, o.tZ)(l.Fragment, null, (0, o.tZ)(c.I, {
                    handle: r,
                    sx: x({
                        position: "relative",
                        mx: "auto"
                    }, r.active && a.fullscreenActiveWrapper)
                }, (0, o.tZ)(i.Ee, {
                    src: t,
                    sx: {
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        cursor: r.active ? "default" : "zoom-in"
                    },
                    onClick: function() {
                        if (!r.active && n && (0, b.Z)()) return r.enter()
                    }
                }), r.active && (0, o.tZ)(i.xu, {
                    sx: a.fullscreenControls
                }, (0, o.tZ)(u.j, {
                    onClick: s,
                    isFullscreen: r.active
                }))), n && (0, o.tZ)(i.xu, {
                    sx: a.mediaControls
                }, (0, o.tZ)(u.j, {
                    sx: {
                        ml: "xs"
                    },
                    onClick: s,
                    isFullscreen: r.active
                })))
            }

            function O(e) {
                var t = e.assetUrl,
                    n = e.posterUrl,
                    r = e.controls,
                    s = e.className,
                    a = (0, l.useRef)(null),
                    f = (0, l.useState)(!0),
                    v = f[0],
                    p = f[1],
                    h = (0, l.useState)(!1),
                    g = h[0],
                    w = h[1],
                    E = (0, l.useState)(!0),
                    y = E[0],
                    O = E[1],
                    Z = (0, c.r)();
                (0, l.useEffect)((function() {
                    if (a.current) {
                        var e = a.current,
                            t = function() {
                                var t, n = Boolean(null === e || void 0 === e ? void 0 : e.mozHasAudio) || Boolean(null === e || void 0 === e ? void 0 : e.webkitAudioDecodedByteCount) || Boolean(null === e || void 0 === e || null === (t = e.audioTracks) || void 0 === t ? void 0 : t.length);
                                w(n)
                            },
                            n = function() {
                                O(!1)
                            };
                        return e.addEventListener("loadeddata", t), y ? e.addEventListener("timeupdate", n) : e.removeEventListener("timeupdate", n),
                            function() {
                                e.removeEventListener("loadeddata", t), e.removeEventListener("timeupdate", n)
                            }
                    }
                }), [a, y]);
                var j = function() {
                        a.current.muted ? (a.current.muted = !1, p(!1)) : (a.current.muted = !0, p(!0))
                    },
                    k = function() {
                        return Z.active ? Z.exit() : Z.enter()
                    },
                    C = {
                        mediaWrapper: {
                            display: "flex",
                            justifyContent: "center",
                            width: "100%"
                        },
                        loading: {
                            position: d.vK,
                            display: "flex",
                            alignItems: "center",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            p: "xs",
                            backgroundColor: "white.100",
                            boxShadow: "m",
                            borderRadius: 999,
                            opacity: .7
                        },
                        video: {
                            width: "100%",
                            height: "100%",
                            mx: "auto",
                            transition: "filter 0.3s ease-in-out",
                            cursor: Z.active || !r ? "default" : "zoom-in",
                            filter: ["drop-shadow(0 5px 8px rgba(0, 0, 0, 0.25))", "drop-shadow(0 20px 20px rgba(0, 0, 0, 0.25)) ".concat(y ? "blur(10px)" : "")]
                        },
                        fullscreenActiveWrapper: {
                            backgroundColor: "white.100",
                            p: ["m", "xl"]
                        },
                        fullscreenControls: {
                            position: d.vK,
                            bottom: "s",
                            right: "s",
                            display: "flex",
                            flexDirection: d.BM
                        },
                        mediaControls: {
                            position: d.vK,
                            bottom: 0,
                            right: 0,
                            pr: "m",
                            pb: "xl"
                        }
                    };
                return (0, o.tZ)(i.xu, {
                    sx: C.mediaWrapper,
                    className: s
                }, (0, o.tZ)(c.I, {
                    handle: Z,
                    sx: x({
                        display: "flex",
                        position: "relative"
                    }, Z.active && C.fullscreenActiveWrapper)
                }, (0, o.tZ)("video", {
                    ref: a,
                    sx: C.video,
                    src: t,
                    poster: n,
                    loop: !0,
                    autoPlay: !0,
                    muted: !0,
                    playsInline: !0,
                    onClick: function() {
                        if (!Z.active && r && (0, b.Z)()) return Z.enter()
                    }
                }), (0, o.tZ)(m, {
                    isLoading: y,
                    size: 32
                }), Z.active && (0, o.tZ)(i.xu, {
                    sx: C.fullscreenControls
                }, g && (0, o.tZ)(u.Z, {
                    isMuted: v,
                    onClick: j,
                    sx: {
                        mb: "xs"
                    }
                }), (0, o.tZ)(u.j, {
                    onClick: k,
                    isFullscreen: Z.active
                }))), r && (0, o.tZ)(i.xu, {
                    sx: C.mediaControls
                }, g && (0, o.tZ)(u.Z, {
                    isMuted: v,
                    onClick: j
                }), (0, o.tZ)(u.j, {
                    sx: {
                        ml: "xs"
                    },
                    onClick: k,
                    isFullscreen: Z.active
                })))
            }
        },
        49461: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            var r = n(85893),
                l = n(5152),
                o = n(16174),
                i = (0, l.default)((function() {
                    return Promise.all([n.e(5246), n.e(5198)]).then(n.bind(n, 55198))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return [55198]
                        },
                        modules: ["../components/model-media/Model.tsx -> components/model-media/ModelViewer"]
                    }
                });

            function c(e) {
                var t = e.src,
                    n = e.className,
                    l = e.toBlob;
                return (0, r.jsx)(o.Z, {
                    className: n,
                    children: (0, r.jsx)(i, {
                        src: t,
                        toBlob: l
                    })
                })
            }
        },
        80767: function(e, t, n) {
            "use strict";

            function r() {
                var e, t, n;
                return (null === (e = document) || void 0 === e ? void 0 : e.fullscreenEnabled) || (null === (t = document) || void 0 === t ? void 0 : t.webkitFullscreenEnabled) || (null === (n = document) || void 0 === n ? void 0 : n.mozFullscreenEnabled)
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        53110: function(e, t, n) {
            "use strict";
            n.d(t, {
                I: function() {
                    return d
                },
                r: function() {
                    return f
                }
            });
            var r = n(67294),
                l = {
                    fullscreenEnabled: 0,
                    fullscreenElement: 1,
                    requestFullscreen: 2,
                    exitFullscreen: 3,
                    fullscreenchange: 4,
                    fullscreenerror: 5,
                    fullscreen: 6
                },
                o = ["webkitFullscreenEnabled", "webkitFullscreenElement", "webkitRequestFullscreen", "webkitExitFullscreen", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"],
                i = ["mozFullScreenEnabled", "mozFullScreenElement", "mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen"],
                c = ["msFullscreenEnabled", "msFullscreenElement", "msRequestFullscreen", "msExitFullscreen", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen"],
                u = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
                s = "fullscreenEnabled" in u && Object.keys(l) || o[0] in u && o || i[0] in u && i || c[0] in u && c || [],
                a = {
                    requestFullscreen: function(e) {
                        return e[s[l.requestFullscreen]]()
                    },
                    requestFullscreenFunction: function(e) {
                        return e[s[l.requestFullscreen]]
                    },
                    get exitFullscreen() {
                        return u[s[l.exitFullscreen]].bind(u)
                    },
                    get fullscreenPseudoClass() {
                        return ":" + s[l.fullscreen]
                    },
                    addEventListener: function(e, t, n) {
                        return u.addEventListener(s[l[e]], t, n)
                    },
                    removeEventListener: function(e, t, n) {
                        return u.removeEventListener(s[l[e]], t, n)
                    },
                    get fullscreenEnabled() {
                        return Boolean(u[s[l.fullscreenEnabled]])
                    },
                    set fullscreenEnabled(e) {},
                    get fullscreenElement() {
                        return u[s[l.fullscreenElement]]
                    },
                    set fullscreenElement(e) {},
                    get onfullscreenchange() {
                        return u[("on" + s[l.fullscreenchange]).toLowerCase()]
                    },
                    set onfullscreenchange(e) {
                        return u[("on" + s[l.fullscreenchange]).toLowerCase()] = e
                    },
                    get onfullscreenerror() {
                        return u[("on" + s[l.fullscreenerror]).toLowerCase()]
                    },
                    set onfullscreenerror(e) {
                        return u[("on" + s[l.fullscreenerror]).toLowerCase()] = e
                    }
                };

            function f() {
                var e = (0, r.useState)(!1),
                    t = e[0],
                    n = e[1],
                    l = (0, r.useRef)(null);
                return (0, r.useEffect)((function() {
                    var e = function() {
                        n(a.fullscreenElement === l.current)
                    };
                    return a.addEventListener("fullscreenchange", e),
                        function() {
                            return a.removeEventListener("fullscreenchange", e)
                        }
                }), []), {
                    active: t,
                    enter: (0, r.useCallback)((function() {
                        return a.fullscreenElement ? a.exitFullscreen().then((function() {
                            return a.requestFullscreen(l.current)
                        })) : l.current ? a.requestFullscreen(l.current) : void 0
                    }), []),
                    exit: (0, r.useCallback)((function() {
                        return a.fullscreenElement === l.current ? a.exitFullscreen() : Promise.resolve()
                    }), []),
                    node: l
                }
            }
            var d = function(e) {
                var t = e.handle,
                    n = e.onChange,
                    l = e.children,
                    o = e.className,
                    i = [];
                return o && i.push(o), i.push("fullscreen"), t.active && i.push("fullscreen-enabled"), (0, r.useEffect)((function() {
                    n && n(t.active, t)
                }), [t.active]), r.createElement("div", {
                    className: i.join(" "),
                    ref: t.node,
                    style: t.active ? {
                        height: "100%",
                        width: "100%"
                    } : void 0
                }, l)
            }
        }
    }
]);
//# sourceMappingURL=1596-bef1987ccf41c31f8a78.js.map