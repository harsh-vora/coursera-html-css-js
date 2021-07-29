(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6280], {
        94158: function(e, t, n) {
            "use strict";
            n.d(t, {
                fC: function() {
                    return x
                }
            });
            var r = n(67294),
                i = n(22122);
            const o = "div",
                s = r.forwardRef(((e, t) => {
                    const {
                        as: n = o,
                        ...s
                    } = e;
                    return r.createElement(n, (0, i.Z)({}, s, {
                        ref: t
                    }))
                }));
            const a = r.createContext(void 0),
                l = e => {
                    const t = r.useContext(a);
                    return r.useEffect((() => {
                        const n = null == t ? void 0 : t.ref.current;
                        if (n && e) return u(n, e)
                    }), [t, e]), null == t ? void 0 : t.id
                };

            function u(e, t) {
                const n = e => {
                    const n = t.contains(e.target),
                        r = !0 === e.isTrusted;
                    !n && r && (t.click(), t.focus())
                };
                return e.addEventListener("click", n), () => e.removeEventListener("click", n)
            }

            function c(e) {
                const t = r.useRef(e);
                return r.useEffect((() => {
                    t.current = e
                })), r.useCallback(((...e) => {
                    var n;
                    return null === (n = t.current) || void 0 === n ? void 0 : n.call(t, ...e)
                }), [])
            }

            function d(e, t, {
                checkForDefaultPrevented: n = !0
            } = {}) {
                return function(r) {
                    if (null == e || e(r), !1 === n || !r.defaultPrevented) return null == t ? void 0 : t(r)
                }
            }
            const f = "button",
                [v, p] = function(e) {
                    const t = r.createContext(null);

                    function n(e) {
                        const {
                            children: n,
                            ...i
                        } = e, o = r.useMemo((() => i), Object.values(i));
                        return r.createElement(t.Provider, {
                            value: o
                        }, n)
                    }
                    return n.displayName = e + "Provider", [n, function(n) {
                        const i = r.useContext(t);
                        if (null === i) throw new Error(`\`${n}\` must be used within \`${e}\``);
                        return i
                    }]
                }("Checkbox"),
                h = r.forwardRef(((e, t) => {
                    const {
                        as: n = f,
                        "aria-labelledby": o,
                        name: a,
                        checked: u,
                        defaultChecked: p,
                        required: h,
                        disabled: x,
                        value: y = "on",
                        onCheckedChange: Z,
                        ...w
                    } = e, [k, j] = r.useState(null), O = function(...e) {
                        return r.useCallback(function(...e) {
                            return t => e.forEach((e => function(e, t) {
                                "function" == typeof e ? e(t) : null != e && (e.current = t)
                            }(e, t)))
                        }(...e), e)
                    }(t, (e => j(e))), P = l(k), C = o || P, S = r.useRef(!1), $ = !k || Boolean(k.closest("form")), [A = !1, K] = function({
                        prop: e,
                        defaultProp: t,
                        onChange: n = (() => {})
                    }) {
                        const [i, o] = function({
                            defaultProp: e,
                            onChange: t
                        }) {
                            const n = r.useState(e),
                                [i] = n,
                                o = r.useRef(i),
                                s = c(t);
                            return r.useEffect((() => {
                                o.current !== i && (s(i), o.current = i)
                            }), [i, o, s]), n
                        }({
                            defaultProp: t,
                            onChange: n
                        }), s = void 0 !== e, a = s ? e : i, l = c(n);
                        return [a, r.useCallback((t => {
                            if (s) {
                                const n = t,
                                    r = "function" == typeof t ? n(e) : t;
                                r !== e && l(r)
                            } else o(t)
                        }), [s, e, o, l])]
                    }({
                        prop: u,
                        defaultProp: p,
                        onChange: Z
                    });
                    return r.createElement(v, {
                        state: A,
                        disabled: x
                    }, r.createElement(s, (0, i.Z)({
                        type: "button",
                        role: "checkbox",
                        "aria-checked": m(A) ? "mixed" : A,
                        "aria-labelledby": C,
                        "aria-required": h,
                        "data-state": g(A),
                        "data-disabled": x ? "" : void 0,
                        disabled: x,
                        value: y
                    }, w, {
                        as: n,
                        ref: O,
                        onClick: d(e.onClick, (e => {
                            K((e => !!m(e) || !e)), $ && (S.current = e.isPropagationStopped(), S.current || e.stopPropagation())
                        }))
                    })), $ && r.createElement(b, {
                        control: k,
                        bubbles: !S.current,
                        name: a,
                        value: y,
                        checked: A,
                        required: h,
                        disabled: x,
                        style: {
                            transform: "translateX(-100%)"
                        }
                    }))
                })),
                b = e => {
                    const {
                        control: t,
                        checked: n,
                        bubbles: o = !0,
                        ...s
                    } = e, a = r.useRef(null), l = function(e) {
                        const t = r.useRef(e);
                        return r.useEffect((() => {
                            t.current = e
                        }), [e]), t.current
                    }(n), u = function(e) {
                        const [t, n] = r.useState(void 0);
                        return r.useEffect((() => {
                            if (e) {
                                const t = new ResizeObserver((t => {
                                    if (!Array.isArray(t)) return;
                                    if (!t.length) return;
                                    const r = t[0];
                                    let i, o;
                                    if ("borderBoxSize" in r) {
                                        const e = r.borderBoxSize,
                                            t = Array.isArray(e) ? e[0] : e;
                                        i = t.inlineSize, o = t.blockSize
                                    } else {
                                        const t = e.getBoundingClientRect();
                                        i = t.width, o = t.height
                                    }
                                    n({
                                        width: i,
                                        height: o
                                    })
                                }));
                                return t.observe(e, {
                                    box: "border-box"
                                }), () => {
                                    n(void 0), t.unobserve(e)
                                }
                            }
                        }), [e]), t
                    }(t);
                    return r.useEffect((() => {
                        const e = a.current,
                            t = window.HTMLInputElement.prototype,
                            r = Object.getOwnPropertyDescriptor(t, "checked").set;
                        if (l !== n && r) {
                            const t = new Event("click", {
                                bubbles: o
                            });
                            e.indeterminate = m(n), r.call(e, !m(n) && n), e.dispatchEvent(t)
                        }
                    }), [l, n, o]), r.createElement("input", (0, i.Z)({
                        type: "checkbox",
                        defaultChecked: !m(n) && n
                    }, s, {
                        tabIndex: -1,
                        ref: a,
                        style: { ...e.style,
                            ...u,
                            position: "absolute",
                            pointerEvents: "none",
                            opacity: 0,
                            margin: 0
                        }
                    }))
                };

            function m(e) {
                return "indeterminate" === e
            }

            function g(e) {
                return m(e) ? "indeterminate" : e ? "checked" : "unchecked"
            }
            const x = h
        },
        69530: function(e, t, n) {
            "use strict";
            var r, i = n(67294);

            function o() {
                return (o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            t.Z = function(e) {
                return i.createElement("svg", o({
                    viewBox: "0 0 16 11",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), r || (r = i.createElement("path", {
                    d: "M1.348 4.82L6 9.472l8.64-8.64",
                    stroke: "#fff",
                    strokeWidth: 1.911,
                    strokeMiterlimit: 10,
                    strokeLinejoin: "round"
                })))
            }
        },
        73381: function(e, t, n) {
            "use strict";
            var r = n(96626),
                i = n(16174),
                o = (0, r.zo)(i.Z, {
                    backgroundColor: "$black10",
                    height: 24,
                    width: 78,
                    borderRadius: "$1"
                });
            t.Z = o
        },
        31849: function(e, t, n) {
            "use strict";
            var r = n(33559),
                i = (0, n(96626).zo)(r.Z, {
                    backgroundColor: "$white100",
                    display: "flex",
                    flex: "auto",
                    flexDirection: "column",
                    borderRadius: "$2",
                    overflow: "hidden",
                    boxShadow: "$0",
                    transition: "$1",
                    textDecoration: "none",
                    color: "inherit",
                    position: "relative",
                    willChange: "transform",
                    "@media (hover: hover)": {
                        "&:hover": {
                            transform: "translateY(-4px)",
                            boxShadow: "$1"
                        },
                        "&:active": {
                            transform: "translateY(0)",
                            boxShadow: "$0"
                        }
                    },
                    variants: {
                        isHovered: {
                            true: {
                                transform: "translateY(-4px)",
                                boxShadow: "$1",
                                "&:active": {
                                    transform: "translateY(-4px)",
                                    boxShadow: "$1"
                                }
                            }
                        }
                    }
                });
            t.Z = i
        },
        23645: function(e, t, n) {
            "use strict";
            var r = n(28330),
                i = (0, n(96626).zo)(r.Z, {
                    gap: "$5",
                    padding: "$6",
                    flex: 1,
                    position: "relative"
                });
            t.Z = i
        },
        61520: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return u
                },
                Z: function() {
                    return c
                }
            });
            var r = n(11191),
                i = n(61138),
                o = n(67294),
                s = n(41139),
                a = n(53869),
                l = n(17757);

            function u(e) {
                var t = e.root,
                    n = e.target,
                    r = e.onIntersect,
                    i = e.threshold,
                    s = void 0 === i ? 1 : i,
                    a = e.rootMargin,
                    l = void 0 === a ? "0px" : a,
                    u = e.enabled,
                    c = void 0 === u || u;
                (0, o.useEffect)((function() {
                    if (c) {
                        var e = new IntersectionObserver((function(e) {
                                return e.forEach((function(e) {
                                    e.isIntersecting && r()
                                }))
                            }), {
                                root: null === t || void 0 === t ? void 0 : t.current,
                                rootMargin: l,
                                threshold: s
                            }),
                            i = n && n.current;
                        if (i) return e.observe(i),
                            function() {
                                e.unobserve(i)
                            }
                    }
                }), [n.current, c])
            }

            function c(e) {
                var t = e.handleNextPage,
                    n = e.isFetching,
                    c = e.enabled,
                    d = void 0 === c || c,
                    f = e.hasNextPage,
                    v = e.animationDuration,
                    p = void 0 === v ? .1 : v,
                    h = (0, o.useRef)();
                return u({
                    target: h,
                    onIntersect: t,
                    enabled: f && d
                }), (0, r.tZ)(o.Fragment, null, (0, r.tZ)(i.xu, {
                    ref: h,
                    sx: {
                        height: 1
                    }
                }), (0, r.tZ)(a.M, {
                    exitBeforeEnter: !0
                }, n && f && (0, r.tZ)(l.E.div, {
                    initial: {
                        y: 30,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1
                    },
                    exit: {
                        y: 30,
                        opacity: 0
                    },
                    style: {
                        position: "fixed",
                        right: 24,
                        bottom: 32
                    },
                    transition: {
                        ease: "easeInOut",
                        duration: p
                    }
                }, (0, r.tZ)(i.kC, {
                    sx: {
                        padding: 10,
                        backgroundColor: "white.100",
                        boxShadow: "m",
                        borderRadius: 999
                    }
                }, (0, r.tZ)(s.Z, {
                    size: 32
                })))))
            }
        },
        13099: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return f
                }
            });
            var r = n(85893),
                i = n(32292),
                o = n(745),
                s = n(96626),
                a = n(59923),
                l = n(54568),
                u = n(72694),
                c = n(16174),
                d = (0, s.zo)(u.Z, {
                    color: "$black60",
                    fontSize: "$0",
                    fontWeight: 400,
                    lineHeight: 1.6
                });

            function f(e) {
                var t = e.label,
                    n = e.name,
                    s = e.description,
                    u = (0, o.U$)({
                        name: n,
                        type: "checkbox"
                    }),
                    f = (0, i.Z)(u, 3),
                    v = f[0],
                    p = f[2];
                return (0, r.jsx)(a.Z, {
                    name: t,
                    checked: v.checked,
                    onCheckedChange: function(e) {
                        return p.setValue(e)
                    },
                    children: (0, r.jsxs)(c.Z, {
                        css: {
                            marginLeft: "$5",
                            "@bp1": {
                                marginLeft: "$7"
                            }
                        },
                        children: [(0, r.jsx)(l.Z, {
                            css: {
                                fontSize: "$2",
                                marginBottom: "$2",
                                display: "block"
                            },
                            htmlFor: t,
                            children: t
                        }), (0, r.jsx)(d, {
                            children: s
                        })]
                    })
                })
            }
        },
        31934: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return f
                }
            });
            var r = n(85893),
                i = n(67294),
                o = n(745),
                s = n(53869),
                a = n(85010),
                l = n(41139),
                u = n(16174),
                c = n(17757);

            function d(e) {
                var t = e.children;
                return (0, r.jsx)(c.E.div, {
                    initial: {
                        opacity: 0,
                        y: 0
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: 10
                    },
                    transition: {
                        duration: .15
                    },
                    children: t
                })
            }

            function f(e) {
                var t = e.label,
                    n = e.submittingLabel,
                    c = e.submittedLabel,
                    f = (0, o.u6)(),
                    v = f.isSubmitting,
                    p = f.handleSubmit,
                    h = f.isValid,
                    b = f.status,
                    m = (0, i.useState)(!1),
                    g = m[0],
                    x = m[1];
                (0, i.useEffect)((function() {
                    null !== b && void 0 !== b && b.formSubmitted && h && (x(!0), setTimeout((function() {
                        x(!1)
                    }), 1e4))
                }), [h, b]);
                var y = v || g || !h,
                    Z = v ? n : g ? c : t;
                return (0, r.jsxs)(a.Z, {
                    type: "submit",
                    onClick: function() {
                        return p()
                    },
                    disabled: y,
                    color: y ? "gray" : "black",
                    size: "large",
                    shape: "regular",
                    css: {
                        width: "100%",
                        cursor: y ? "not-allowed" : "pointer",
                        position: "relative",
                        "@media (hover: hover)": {
                            "&:hover": {
                                transform: "translateY(-4px)"
                            }
                        }
                    },
                    children: [v && (0, r.jsx)(u.Z, {
                        css: {
                            position: "absolute",
                            left: "$5",
                            top: "50%",
                            transform: "translateY(-50%)"
                        },
                        children: (0, r.jsx)(l.Z, {
                            size: 20
                        })
                    }), (0, r.jsx)(s.M, {
                        exitBeforeEnter: !0,
                        children: (0, r.jsx)(d, {
                            children: Z
                        }, Z)
                    })]
                })
            }
        },
        54568: function(e, t, n) {
            "use strict";
            var r = (0, n(96626).zo)("label", {
                fontSize: "$2",
                cursor: "pointer",
                fontWeight: 600,
                letterSpacing: "-0.2px",
                "@bp1": {
                    fontSize: "$3"
                }
            });
            t.Z = r
        },
        59923: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return d
                }
            });
            var r = n(85893),
                i = n(94158),
                o = n(96626),
                s = n(33559),
                a = n(69530);
            (0, o.zo)(i.fC, {
                position: "relative",
                width: 40,
                height: 40,
                backgroundColor: "transparent",
                cursor: "pointer",
                border: "none",
                padding: 0
            });

            function l(e) {
                var t = e.checked;
                return (0, r.jsx)(u, {
                    isChecked: t,
                    children: t && (0, r.jsx)(a.Z, {
                        style: {
                            width: 24
                        }
                    })
                })
            }
            var u = (0, o.zo)(s.Z, {
                    float: "left",
                    flexShrink: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    height: 40,
                    width: 40,
                    borderRadius: "$1",
                    backgroundColor: "$white100",
                    border: "1px solid",
                    borderColor: "$black10",
                    transition: "background-color $1 $ease",
                    "@media (hover: hover)": {
                        "&:hover": {
                            backgroundColor: "$black5",
                            borderColor: "$black10"
                        }
                    },
                    variants: {
                        isChecked: {
                            true: {
                                backgroundColor: "$black100",
                                borderColor: "$black100",
                                "@media (hover: hover)": {
                                    "&:hover": {
                                        backgroundColor: "$black100",
                                        borderColor: "$black100"
                                    }
                                }
                            }
                        }
                    }
                }),
                c = (0, o.zo)(i.fC, {
                    display: "flex",
                    position: "relative",
                    cursor: "pointer",
                    border: "none",
                    padding: "$5",
                    background: "$white100",
                    borderRadius: "$2",
                    boxShadow: "$0",
                    fontFamily: "$body",
                    transition: "transform $1 $ease, box-shadow $1 $ease",
                    textAlign: "unset",
                    "@bp1": {
                        padding: "$7"
                    },
                    "@media (hover: hover)": {
                        "&:hover": {
                            boxShadow: "$1",
                            transform: "translateY(-2px)"
                        }
                    }
                });

            function d(e) {
                var t = e.onCheckedChange,
                    n = e.checked,
                    i = e.name,
                    o = e.children,
                    s = e.css;
                return (0, r.jsxs)(c, {
                    onCheckedChange: t,
                    name: i,
                    checked: n,
                    css: s,
                    children: [(0, r.jsx)(l, {
                        checked: n
                    }), o]
                })
            }
        },
        8831: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return s
                },
                F: function() {
                    return a
                }
            });
            var r = n(85893),
                i = n(70797),
                o = n(34025);

            function s(e) {
                var t = e.setCurrentView,
                    n = e.currentView,
                    s = e.tabs;
                return (0, r.jsx)(o.Z, {
                    children: s.map((function(e) {
                        return (0, r.jsx)(i.Z, {
                            isActive: n === e,
                            onClick: function() {
                                return t(e)
                            },
                            children: e
                        }, e)
                    }))
                })
            }

            function a(e) {
                var t = e.setCurrentView,
                    n = e.currentView,
                    s = e.tabs;
                return (0, r.jsx)(o.Z, {
                    children: s.map((function(e) {
                        return (0, r.jsx)(i.Z, {
                            className: e.className,
                            isActive: n === e.value,
                            onClick: function() {
                                return t(e.value)
                            },
                            children: e.label
                        }, e.value)
                    }))
                })
            }
        },
        65012: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var r = n(67294),
                i = n(88767),
                o = n(79026);

            function s() {
                var e = (0, i.useQueryClient)();
                return (0, r.useCallback)((function() {
                    e.invalidateQueries("waitlistUsers"), e.invalidateQueries("usedVotes"), e.invalidateQueries(o.V.User), e.invalidateQueries("getWaitlistUser")
                }), [e])
            }
        },
        15739: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(88767),
                i = n(61503);

            function o(e) {
                var t = e.publicKey;
                return (0, r.useQuery)(["usedVotes", t], (function() {
                    return (0, i.eT)(t)
                }), {
                    enabled: Boolean(t),
                    refetchOnWindowFocus: !1
                })
            }
        },
        45472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSG: function() {
                    return Ei
                },
                default: function() {
                    return Ri
                }
            });
            var r = n(67294),
                i = n(11191),
                o = n(61138),
                s = n(5152),
                a = n(85286),
                l = n(95324),
                u = n(65073),
                c = n(11677),
                d = n(88767),
                f = n(22292),
                v = n(79026);
            var p = n(59536),
                h = n(92931);

            function b(e) {
                var t = e.children;
                return (0, i.tZ)(o.xv, {
                    sx: {
                        display: "flex",
                        fontFamily: "body",
                        fontWeight: 600,
                        fontSize: ["xs", "s", null, null, "m"],
                        letterSpacing: ["-0.015em", "-0.035em"],
                        maxWidth: "100%"
                    }
                }, (0, i.tZ)(o.xv, {
                    variant: "gradient",
                    sx: {
                        lineHeight: 1.2,
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }
                }, t))
            }

            function m(e) {
                var t = e.children;
                return (0, i.tZ)(o.xv, {
                    sx: {
                        fontFamily: "body",
                        fontWeight: 600,
                        letterSpacing: ["-0.05em"],
                        marginBottom: [5, "xs", "s"],
                        fontSize: ["m", null, null, null, "l"],
                        lineHeight: 1.1,
                        overflowX: "clip",
                        textOverflow: "ellipsis"
                    }
                }, t)
            }
            var g = n(38918),
                x = n(36765),
                y = n(52391);

            function Z(e) {
                var t = e.user,
                    n = (0, x.Js)(t),
                    r = (0, g.KO)(n),
                    s = "@".concat((0, y.Em)(t));
                return (0, i.tZ)(o.kC, {
                    sx: {
                        alignItems: ["center", null, "flex-start"],
                        flexDirection: "column"
                    }
                }, (0, i.tZ)(o.kC, {
                    sx: {
                        maxWidth: "100%"
                    }
                }, (0, i.tZ)(o.xv, {
                    variant: r ? null : "gradient"
                }, (0, i.tZ)(m, null, r ? n : s))), r && (0, i.tZ)(b, null, s))
            }
            var w = n(79272),
                k = n(6381);

            function j(e) {
                var t = e.coverImage,
                    n = e.avatar,
                    r = e.creator,
                    s = e.meta,
                    a = S({
                        coverImage: t
                    });
                return (0, i.tZ)(o.xu, {
                    sx: a.container
                }, (0, i.tZ)(o.xu, {
                    sx: {
                        position: "relative"
                    }
                }, t && (0, i.tZ)(O, null), (0, i.tZ)(o.xu, {
                    sx: a.coverImage
                })), (0, i.tZ)(h.Z, {
                    sx: {
                        height: 0
                    }
                }, (0, i.tZ)(o.kC, {
                    sx: a.pin
                }, (0, i.tZ)(w.Z, {
                    size: [120, null, 180],
                    imageUrl: n,
                    userIndex: null === r || void 0 === r ? void 0 : r.userIndex,
                    sx: a.avatar
                })), s))
            }

            function O() {
                return (0, i.tZ)(o.xu, {
                    sx: {
                        position: "absolute",
                        zIndex: 2,
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)"
                    }
                })
            }
            var P, C, S = function(e) {
                    var t = e.coverImage;
                    return {
                        coverImage: {
                            height: [180, null, 280],
                            backgroundImage: t ? "url(".concat(t, ")") : null,
                            backgroundColor: "black.5",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        },
                        container: {
                            position: k.Ep,
                            marginBottom: [72, null, 105]
                        },
                        banner: {
                            position: k.Ep,
                            marginBottom: ["l", "xl"],
                            paddingBottom: [60, null, 90]
                        },
                        pin: {
                            position: k.vK,
                            bottom: 0,
                            left: ["50%", null, "auto"],
                            zIndex: 3,
                            transform: ["translate(-50%, 50%)", null, "translateY(56px)"]
                        },
                        avatar: {
                            border: "solid 10px",
                            borderColor: "white.100"
                        },
                        avatarImage: {
                            borderRadius: 999,
                            display: "block",
                            marginLeft: -2,
                            marginTop: -2,
                            minHeight: "calc(100% + 4px)",
                            minWidth: "calc(100% + 4px)"
                        }
                    }
                },
                $ = n(26265),
                A = n(32292),
                K = n(78322);

            function I(e) {
                var t = e.userNumber;
                return (0, i.tZ)(U, null, "#", (0, g.vX)(t))
            }

            function U(e) {
                var t = e.children;
                return (0, i.tZ)(o.xv, {
                    sx: {
                        fontSize: [12, null, "sub"],
                        paddingX: [12, "s"],
                        paddingY: [7, 9],
                        backgroundColor: "black.100",
                        color: "white.100",
                        letterSpacing: 1,
                        borderRadius: 999,
                        textTransform: "uppercase"
                    },
                    variant: "mono.sub"
                }, t)
            }

            function E(e) {
                var t = e.children;
                return (0, i.tZ)(o.kC, {
                    sx: {
                        marginBottom: ["s", null, "m"]
                    }
                }, t)
            }

            function R() {
                return (R = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var V, B = function(e) {
                return r.createElement("svg", R({
                    viewBox: "0 0 17 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), P || (P = r.createElement("path", {
                    d: "M14 6h-4a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V8a2 2 0 00-2-2z",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeMiterlimit: 10,
                    strokeLinejoin: "round"
                })), C || (C = r.createElement("path", {
                    d: "M5 14H3a2 2 0 01-2-2V3a2 2 0 012-2h7a2 2 0 012 2v0",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeMiterlimit: 10,
                    strokeLinejoin: "round"
                })))
            };

            function L() {
                return (L = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var D = function(e) {
                    return r.createElement("svg", L({
                        viewBox: "0 0 16 11",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), V || (V = r.createElement("path", {
                        d: "M6 11a1 1 0 01-.707-.293L.586 6 2 4.586l4 4 8-8L15.414 2l-8.707 8.707A1 1 0 016 11z",
                        fill: "#24BE74"
                    })))
                },
                M = n(51250);

            function F(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? F(Object(n), !0).forEach((function(t) {
                        (0, $.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : F(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var z = {
                tag: {
                    boxShadow: "s",
                    borderRadius: 48,
                    alignItems: "center",
                    minHeight: [28, 35]
                }
            };

            function T(e) {
                var t = e.userIndex,
                    n = e.publicKey;
                return (0, i.tZ)(E, null, (0, i.tZ)(o.kC, {
                    sx: z.tag
                }, t && (0, i.tZ)(I, {
                    userNumber: t
                }), (0, i.tZ)(o.xv, {
                    variant: "mono.sub",
                    sx: {
                        letterSpacing: .6,
                        paddingLeft: 12,
                        fontSize: [12, "sub"]
                    }
                }, (0, g.Kz)(4, n)), (0, i.tZ)(N, {
                    textToCopy: n
                })))
            }

            function N(e) {
                var t = e.textToCopy,
                    n = (0, K.Z)(),
                    s = (0, A.Z)(n, 2),
                    a = s[0],
                    l = s[1],
                    u = (0, r.useState)(null),
                    c = u[0],
                    d = u[1],
                    f = (0, r.useState)(null),
                    v = f[0],
                    p = f[1];
                (0, r.useEffect)((function() {
                    setTimeout((function() {
                        p(!1)
                    }), 2500)
                }), [c]);
                var h = a.value && v;
                return (0, i.tZ)(o.kC, _(_({}, H(h)), {}, {
                    onClick: function() {
                        p(!0), d(Date.now()), l(t)
                    },
                    sx: {
                        paddingX: 10,
                        minHeight: [29, 35],
                        alignItems: "center",
                        cursor: "pointer",
                        color: "black.20",
                        transition: M.pB.smooth.fast,
                        "@media (hover: hover)": {
                            "&:hover": {
                                color: "black.100"
                            }
                        }
                    }
                }), h ? (0, i.tZ)(D, {
                    sx: {
                        display: "block"
                    },
                    width: 16,
                    height: 12
                }) : (0, i.tZ)(B, {
                    sx: {
                        display: "block"
                    },
                    width: 16,
                    height: 16
                }))
            }
            var H = function(e) {
                    return !e && {
                        "aria-label": "Copy Address",
                        "data-balloon-pos": "up"
                    }
                },
                W = n(30724),
                Q = n.n(W);

            function G(e) {
                var t = e.bio;
                return (0, i.tZ)(o.xu, null, (0, i.tZ)(o.xv, {
                    variant: "stnd.sub",
                    sx: {
                        lineHeight: 1.6,
                        fontSize: "sub",
                        "& p": {
                            marginBottom: "1rem"
                        },
                        "& p:last-of-type": {
                            marginBottom: 0
                        }
                    }
                }, (0, i.tZ)(Q(), {
                    plugins: [n(82558)]
                }, t)))
            }
            var q = n(19660),
                Y = n(91370),
                X = n(75188),
                J = n(20252);

            function ee(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function te(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ee(Object(n), !0).forEach((function(t) {
                        (0, $.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ee(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function ne(e) {
                var t, n = e.invite,
                    r = null === n || void 0 === n ? void 0 : n.senderPublicKey,
                    o = (0, u.ji)({
                        publicKey: r,
                        refetchOnWindowFocus: !1
                    }),
                    s = o.data,
                    a = o.isLoading,
                    l = {
                        publicKey: r
                    },
                    c = null !== (t = null === s || void 0 === s ? void 0 : s.user) && void 0 !== t ? t : l;
                return null !== c && void 0 !== c && c.isAdmin || !r || a ? null : (0, i.tZ)(re, {
                    user: c
                }, (0, i.tZ)(ie, {
                    user: c
                }))
            }

            function re(e) {
                var t = e.user,
                    n = e.children,
                    r = (0, g.mf)(t),
                    s = te(te({}, Y.o), {}, {
                        paddingLeft: ["s", "s"],
                        padding: [10, 10]
                    });
                return r ? (0, i.tZ)(X.ZP, {
                    href: "/".concat(r)
                }, (0, i.tZ)("a", {
                    sx: Y.A
                }, (0, i.tZ)(o.kC, {
                    sx: s
                }, n))) : (0, i.tZ)(J.Z, {
                    sx: s
                }, (0, i.tZ)(o.kC, {
                    sx: te(te({}, Y.A), {}, {
                        pointerEvents: "none"
                    })
                }, n))
            }

            function ie(e) {
                var t = e.user,
                    n = (0, g.wO)(t),
                    s = (0, g.Hs)(t),
                    a = null === t || void 0 === t ? void 0 : t.profileImageUrl;
                return (0, i.tZ)(r.Fragment, null, (0, i.tZ)(oe, null, (0, i.tZ)(o.xv, {
                    variant: "h.sub",
                    sx: {
                        marginRight: "0.5ch"
                    }
                }, "Invited by"), (0, i.tZ)(o.xv, {
                    variant: s ? "h.sub" : "mono.sub"
                }, (0, q.fw)(n))), (0, i.tZ)(w.Z, {
                    size: 24,
                    userIndex: null === t || void 0 === t ? void 0 : t.userIndex,
                    imageUrl: a,
                    sx: {
                        marginRight: 0
                    }
                }))
            }

            function oe(e) {
                var t = e.children,
                    n = e.className;
                return (0, i.tZ)(o.xv, {
                    className: n,
                    variant: "h.body",
                    sx: {
                        display: "flex",
                        alignItems: "center",
                        color: "black.100",
                        position: "relative",
                        top: -1,
                        fontSize: ["sub", "body"],
                        textDecoration: "none",
                        marginRight: 12
                    }
                }, t)
            }
            var se = n(93911),
                ae = n(52346),
                le = n(36270),
                ue = n(61862),
                ce = n(97381),
                de = n(37167),
                fe = n(43085),
                ve = n(40971),
                pe = n(31820),
                he = n(82720);

            function be(e) {
                var t, n, r, s, a, l, u, c, d, f, v, p, h, b = e.socialLinks;
                return (0, i.tZ)(o.rj, {
                    gap: ["s", null, 20]
                }, (0, i.tZ)(xe, {
                    icon: (0, i.tZ)(se.Z, {
                        style: {
                            display: "block"
                        }
                    }),
                    handle: null === b || void 0 === b || null === (t = b.website) || void 0 === t ? void 0 : t.handle,
                    linkBuilderFn: pe.R8.website
                }, (0, pe.iT)(null === b || void 0 === b || null === (n = b.website) || void 0 === n ? void 0 : n.handle)), (0, i.tZ)(xe, {
                    icon: (0, i.tZ)(ae.Z, {
                        style: {
                            display: "block"
                        },
                        width: 24,
                        height: 24
                    }),
                    handle: null === b || void 0 === b || null === (r = b.discord) || void 0 === r ? void 0 : r.handle
                }, null === b || void 0 === b || null === (s = b.discord) || void 0 === s ? void 0 : s.handle), (0, i.tZ)(xe, {
                    icon: (0, i.tZ)(ue.Z, {
                        style: {
                            display: "block"
                        }
                    }),
                    handle: null === b || void 0 === b || null === (a = b.youtube) || void 0 === a ? void 0 : a.handle,
                    linkBuilderFn: pe.R8.youtube
                }, "YouTube"), (0, i.tZ)(xe, {
                    icon: (0, i.tZ)(ce.Z, {
                        style: {
                            display: "block"
                        }
                    }),
                    handle: null === b || void 0 === b || null === (l = b.facebook) || void 0 === l ? void 0 : l.handle,
                    linkBuilderFn: pe.R8.facebook
                }, (0, he.ej)(null === b || void 0 === b || null === (u = b.facebook) || void 0 === u ? void 0 : u.handle)), (0, i.tZ)(xe, {
                    icon: (0, i.tZ)(le.Z, {
                        style: {
                            display: "block"
                        }
                    }),
                    handle: null === b || void 0 === b || null === (c = b.twitch) || void 0 === c ? void 0 : c.handle,
                    linkBuilderFn: pe.R8.twitch
                }, (0, he.ej)(null === b || void 0 === b || null === (d = b.twitch) || void 0 === d ? void 0 : d.handle)), (0, i.tZ)(xe, {
                    icon: (0, i.tZ)(de.Z, {
                        style: {
                            display: "block"
                        }
                    }),
                    handle: (0, pe.jO)(null === b || void 0 === b || null === (f = b.tiktok) || void 0 === f ? void 0 : f.handle),
                    linkBuilderFn: pe.R8.tiktok
                }, (0, he.ej)((0, pe.jO)(null === b || void 0 === b || null === (v = b.tiktok) || void 0 === v ? void 0 : v.handle))), (0, i.tZ)(xe, {
                    icon: (0, i.tZ)(fe.Z, {
                        style: {
                            display: "block"
                        },
                        width: 24,
                        height: 23
                    }),
                    handle: null === b || void 0 === b || null === (p = b.snapchat) || void 0 === p ? void 0 : p.handle,
                    linkBuilderFn: pe.R8.snapchat
                }, (0, he.ej)(null === b || void 0 === b || null === (h = b.snapchat) || void 0 === h ? void 0 : h.handle)))
            }

            function me(e) {
                var t = e.children;
                return (0, i.tZ)(o.xu, {
                    sx: {
                        marginRight: "s"
                    }
                }, t)
            }

            function ge(e) {
                var t = e.children;
                return (0, i.tZ)(o.xv, {
                    variant: "h.xs",
                    sx: {
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }
                }, t)
            }

            function xe(e) {
                var t = e.handle,
                    n = e.children,
                    r = e.linkBuilderFn,
                    s = e.icon,
                    a = ye();
                return (0, g.Qt)(t) ? null : r ? (0, i.tZ)(ve.Z, null, (0, i.tZ)(o.rU, {
                    href: r(t),
                    sx: a.link,
                    target: "_blank",
                    rel: "noreferrer"
                }, (0, i.tZ)(me, null, s), (0, i.tZ)(ge, null, n))) : (0, i.tZ)(ve.Z, null, (0, i.tZ)(o.xu, {
                    sx: a.link
                }, (0, i.tZ)(me, null, s), (0, i.tZ)(ge, null, n)))
            }
            var ye = function() {
                    return {
                        link: {
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                            color: "black.100",
                            fontFamily: "body",
                            fontSize: ["s", null, "xs"]
                        }
                    }
                },
                Ze = n(23426),
                we = n(8644),
                ke = n(73974),
                je = n(50684),
                Oe = n(54864),
                Pe = n(11163),
                Ce = n(81784),
                Se = n(57917);

            function $e(e) {
                var t, n, s, a, l = e.socialLinks,
                    u = e.isMyProfile,
                    c = (0, Pe.useRouter)();
                return (0, i.tZ)(r.Fragment, null, l.twitter ? (0, i.tZ)(o.kC, null, (0, i.tZ)(Oe.ZP, {
                    icon: (0, i.tZ)(o.xu, {
                        sx: {
                            width: 19
                        }
                    }, (0, i.tZ)(ke.Z, {
                        style: {
                            display: "block",
                            width: "100%",
                            height: "auto"
                        }
                    })),
                    handle: null === l || void 0 === l || null === (t = l.twitter) || void 0 === t ? void 0 : t.handle,
                    linkBuilderFn: pe.R8.twitter
                }, "@", (0, he.ej)(null === l || void 0 === l || null === (n = l.twitter) || void 0 === n ? void 0 : n.handle))) : u ? (0, i.tZ)(o.kC, {
                    sx: {
                        justifyContent: "flex-start"
                    }
                }, (0, i.tZ)(o.xu, {
                    sx: {
                        width: Se.Z,
                        justifyContent: "flex-center"
                    }
                }, (0, i.tZ)(Ze.Z, {
                    text: "Verify via Twitter",
                    redirectPath: c.asPath,
                    variant: Ce.D.ghostGraySmall
                }))) : null, l.instagram ? (0, i.tZ)(o.kC, null, (0, i.tZ)(Oe.ZP, {
                    icon: (0, i.tZ)(o.xu, {
                        sx: {
                            width: 19
                        }
                    }, (0, i.tZ)(je.Z, {
                        style: {
                            display: "block",
                            width: "100%",
                            height: "auto"
                        }
                    })),
                    handle: null === l || void 0 === l || null === (s = l.instagram) || void 0 === s ? void 0 : s.handle,
                    linkBuilderFn: pe.R8.instagram
                }, (0, he.ej)(null === l || void 0 === l || null === (a = l.instagram) || void 0 === a ? void 0 : a.handle))) : u ? (0, i.tZ)(o.kC, {
                    sx: {
                        justifyContent: "flex-start"
                    }
                }, (0, i.tZ)(o.xu, {
                    sx: {
                        width: Se.Z,
                        justifyContent: "flex-center"
                    }
                }, (0, i.tZ)(we.Z, {
                    text: "Verify via Instagram",
                    redirectPath: c.asPath,
                    variant: Ce.D.ghostGraySmall
                }))) : null)
            }

            function Ae(e) {
                var t = e.children;
                return (0, i.tZ)(o.xv, {
                    variant: "h.xs",
                    sx: {
                        borderBottom: "solid 1px",
                        borderColor: "black.10",
                        paddingBottom: "s",
                        lineHeight: 1,
                        marginBottom: "s"
                    }
                }, t)
            }
            var Ke = n(95953);

            function Ie(e) {
                var t = e.dateJoined;
                return t ? (0, i.tZ)(o.kC, {
                    sx: {
                        justifyContent: "space-between",
                        borderTop: "solid 1px",
                        borderBottom: "solid 1px",
                        borderColor: "black.10",
                        paddingY: "s",
                        alignItems: "center"
                    }
                }, (0, i.tZ)(o.xv, {
                    variant: "h.xs",
                    sx: {
                        lineHeight: 1
                    }
                }, "Joined"), (0, i.tZ)(o.xv, {
                    variant: "stnd.body",
                    sx: {
                        lineHeight: 1
                    }
                }, (0, Ke.CF)(t))) : null
            }
            var Ue, Ee, Re = n(15675),
                Ve = n(85893),
                Be = n(16174),
                Le = n(28330),
                De = n(72694);

            function Me() {
                return (Me = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var Fe = function(e) {
                    return r.createElement("svg", Me({
                        viewBox: "0 0 18 22",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), Ue || (Ue = r.createElement("path", {
                        d: "M9 22V2",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        strokeMiterlimit: 10
                    })), Ee || (Ee = r.createElement("path", {
                        d: "M2 9l7-7 7 7",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        strokeMiterlimit: 10,
                        strokeLinecap: "square"
                    })))
                },
                _e = n(65012),
                ze = n(23107),
                Te = n(41139),
                Ne = n(54015),
                He = n(37251),
                We = n(61503);

            function Qe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ge(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Qe(Object(n), !0).forEach((function(t) {
                        (0, $.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qe(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function qe(e) {
                var t = e.hasNoVotes,
                    n = e.isLoggedIn,
                    s = e.isVerified,
                    a = e.token,
                    l = e.publicAddress,
                    u = e.currentUserHasVoted,
                    c = e.isLoading,
                    f = (0, Pe.useRouter)(),
                    v = (0, r.useState)(u),
                    p = v[0],
                    h = v[1],
                    b = (0, ze.Z)().setCurrentModal,
                    m = (0, r.useCallback)((function() {
                        b(He.$.AUTH_MAIN)
                    }), [b]),
                    g = (0, _e.Z)(),
                    x = (0, d.useMutation)((function() {
                        return (0, We.jY)({
                            token: a,
                            publicKey: l
                        })
                    }), {
                        onSettled: g
                    }),
                    y = x.mutate,
                    Z = x.isLoading,
                    w = (0, d.useMutation)((function() {
                        return (0, We._n)({
                            token: a,
                            publicKey: l
                        })
                    }), {
                        onSettled: g
                    }),
                    k = w.mutate,
                    j = w.isLoading,
                    O = Z || j,
                    P = (0, r.useCallback)((function() {
                        return n ? s ? u ? (h(!1), k()) : void(t || (h(!0), y())) : f.push({
                            pathname: "/profile/verify",
                            query: {
                                "redirect-path": f.asPath
                            }
                        }) : m()
                    }), [y, k, t, n, s, m, u]);
                return (0, r.useEffect)((function() {
                    h(u)
                }), [u]), c ? (0, i.tZ)(Ye, null) : (0, i.tZ)(o.xu, {
                    sx: Xe.voteButtonWrapper
                }, (0, i.tZ)(o.zx, {
                    variant: "blank",
                    sx: Ge(Ge(Ge({}, Xe.voteButton), p && !O && Xe.voteButtonVoted), t && !O && !p && Xe.voteButtonDisabled),
                    style: {
                        pointerEvents: O ? "none" : "all"
                    },
                    onClick: P
                }, (0, i.tZ)(o.kC, {
                    sx: {
                        minWidth: 20,
                        minHeight: 20,
                        alignItems: "center",
                        justifyContent: "center"
                    }
                }, O ? (0, i.tZ)(Te.Z, {
                    size: 20
                }) : (0, i.tZ)(Fe, {
                    sx: Ge({
                        display: "block",
                        color: p ? "white.100" : "black.100"
                    }, t && !O && !p && Xe.voteButtonDisabledArrow),
                    width: 14,
                    height: 20
                }))))
            }

            function Ye() {
                return (0, i.tZ)(o.rj, {
                    gap: "xs",
                    sx: {
                        justifyContent: "center"
                    }
                }, (0, i.tZ)(Ne.Z, {
                    width: 60,
                    height: 60
                }), (0, i.tZ)(Ne.Z, {
                    width: 24,
                    height: 22,
                    sx: {
                        marginX: "auto"
                    }
                }))
            }
            var Xe = {
                    voteButtonWrapper: {
                        display: "flex",
                        flexDirection: k.BM,
                        alignItems: "center",
                        flexShrink: 0
                    },
                    voteButton: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 60,
                        height: 60,
                        borderRadius: 10,
                        border: "2px solid",
                        borderColor: "black.10",
                        backgroundColor: "white.100",
                        px: [0, 0, 0],
                        py: ["xs", null, 0],
                        "&:hover": {
                            backgroundColor: "black.5",
                            borderColor: "black.10",
                            boxShadow: "s"
                        }
                    },
                    voteButtonVoted: {
                        borderColor: "black.100",
                        backgroundColor: "black.100",
                        "&:hover": {
                            backgroundColor: "black.100",
                            borderColor: "black.100"
                        }
                    },
                    voteButtonDisabled: {
                        borderColor: "black.10",
                        cursor: "not-allowed",
                        "&:hover": {
                            boxShadow: "none",
                            borderColor: "black.10",
                            transform: "none"
                        }
                    },
                    voteButtonDisabledArrow: {
                        color: "black.10"
                    }
                },
                Je = n(15739),
                et = n(34660),
                tt = n(40189);

            function nt(e) {
                var t = e.publicAddress,
                    n = e.token,
                    r = e.user,
                    s = e.className,
                    a = rt(),
                    l = (0, u.ZP)({
                        publicKey: t
                    }).data,
                    c = (0, et.n3)({
                        publicKey: t
                    }).data,
                    d = (0, g.sD)(null === c || void 0 === c ? void 0 : c.socialVerifications),
                    f = (0, et.FJ)({
                        publicKey: t
                    }).data,
                    v = (0, g.sD)(null === f || void 0 === f ? void 0 : f.socialVerifications),
                    p = null === l || void 0 === l ? void 0 : l.user,
                    h = (0, Je.Z)({
                        publicKey: t
                    }),
                    b = h.data,
                    m = h.isLoading,
                    x = (0, tt.$)({
                        usedVotesData: b,
                        currentUser: p,
                        user: r
                    }),
                    y = x.currentUserHasVoted,
                    Z = x.hasNoVotes,
                    w = m;
                return (0, i.tZ)(o.xu, {
                    sx: a.container,
                    className: s
                }, (0, i.tZ)(o.kC, {
                    sx: a.flex
                }, (0, i.tZ)(o.xu, null, w ? (0, i.tZ)(Ye, null) : (0, i.tZ)(o.kC, {
                    sx: {
                        flexDirection: "row"
                    }
                }, (0, i.tZ)(qe, {
                    token: n,
                    publicAddress: null === r || void 0 === r ? void 0 : r.publicKey,
                    currentUserHasVoted: y,
                    hasNoVotes: Z,
                    isVerified: (null === d || void 0 === d ? void 0 : d.isValid) || (null === v || void 0 === v ? void 0 : v.isValid),
                    isLoggedIn: Boolean(t),
                    isLoading: w
                }), (0, i.tZ)(o.xv, {
                    variant: "stnd.sub",
                    sx: {
                        marginLeft: "m",
                        maxWidth: 300,
                        color: "black.60",
                        fontSize: "sub",
                        lineHeight: 1.6
                    }
                }, "Give this profile an upvote so they can receive early access to Foundation\u2019s creator tools.")))))
            }
            var rt = function() {
                    return {
                        container: {
                            alignSelf: "flex-start"
                        },
                        flex: {
                            justifyContent: "space-between",
                            alignItems: "center"
                        }
                    }
                },
                it = n(92721);

            function ot(e) {
                var t = e.currentUser,
                    n = e.user,
                    r = null === t || void 0 === t ? void 0 : t.publicAddress,
                    i = null === t || void 0 === t ? void 0 : t.token,
                    o = (0, x.yv)([null === n || void 0 === n ? void 0 : n.publicKey, r]),
                    s = (0, Je.Z)({
                        publicKey: r
                    }),
                    a = s.data,
                    l = s.isLoading,
                    u = (0, tt.$)({
                        usedVotesData: a,
                        user: n,
                        currentUser: t
                    }).remainingVotesCount,
                    c = (0, it.Z)({
                        publicKey: r
                    }).data,
                    d = (0, g.KO)(null === c || void 0 === c ? void 0 : c.socialVerifications);
                return (0, Ve.jsxs)(Be.Z, {
                    children: [(0, Ve.jsx)(Ae, {
                        children: "Community Upvote"
                    }), (0, Ve.jsxs)(Le.Z, {
                        css: {
                            gap: "$6"
                        },
                        children: [(0, Ve.jsx)(nt, {
                            publicAddress: r,
                            token: i,
                            user: n,
                            isMyProfile: o
                        }), !l && d && (0, Ve.jsxs)(De.Z, {
                            css: {
                                fontFamily: "$body",
                                fontWeight: 600,
                                letterSpacing: -.2
                            },
                            children: ["Votes available ", u, "/", 5]
                        })]
                    })]
                })
            }
            var st = n(39377);

            function at(e) {
                var t = e.user,
                    n = e.twitterSocialVerification,
                    r = e.instagramSocialVerification,
                    s = e.className,
                    a = e.currentUser,
                    l = (0, g.KO)(null === t || void 0 === t ? void 0 : t.bio),
                    u = (0, y.YD)(null === t || void 0 === t ? void 0 : t.links),
                    c = (0, x.S8)(t) && !(null !== t && void 0 !== t && t.isApprovedCreator);
                return (0, i.tZ)(o.xu, {
                    className: s
                }, (0, i.tZ)(o.rj, {
                    gap: "xl"
                }, (0, i.tZ)(ut, {
                    twitterSocialVerification: n,
                    instagramSocialVerification: r,
                    user: t,
                    currentUser: a
                }), l && (0, i.tZ)(o.xu, null, (0, i.tZ)(Ae, null, "Bio"), (0, i.tZ)(G, {
                    bio: null === t || void 0 === t ? void 0 : t.bio
                })), c && (0, i.tZ)(ot, {
                    user: t,
                    currentUser: a
                }), u && (0, i.tZ)(o.xu, null, (0, i.tZ)(Ae, null, "Links"), (0, i.tZ)(be, {
                    socialLinks: null === t || void 0 === t ? void 0 : t.links
                })), (0, i.tZ)(Ie, {
                    dateJoined: null === t || void 0 === t ? void 0 : t.createdAt
                }), (0, i.tZ)(Re.Z, {
                    showInvites: !0
                })))
            }

            function lt(e) {
                var t = e.user,
                    n = e.currentUser,
                    r = e.twitterSocialVerification,
                    s = e.instagramSocialVerification,
                    a = e.className,
                    l = (0, g.KO)(null === t || void 0 === t ? void 0 : t.bio),
                    u = (0, y.YD)(null === t || void 0 === t ? void 0 : t.links),
                    c = (0, x.S8)(t) && !(null !== t && void 0 !== t && t.isApprovedCreator);
                return (0, i.tZ)(o.xu, {
                    className: a
                }, (0, i.tZ)(o.rj, {
                    gap: "m"
                }, l && (0, i.tZ)(o.xu, null, (0, i.tZ)(Ae, null, "Bio"), (0, i.tZ)(G, {
                    bio: null === t || void 0 === t ? void 0 : t.bio
                })), (0, i.tZ)(ut, {
                    twitterSocialVerification: r,
                    instagramSocialVerification: s,
                    user: t,
                    currentUser: n
                }), c && (0, i.tZ)(ot, {
                    user: t,
                    currentUser: n
                }), u && (0, i.tZ)(o.rj, null, (0, i.tZ)(Ae, null, "Links"), (0, i.tZ)(be, {
                    socialLinks: null === t || void 0 === t ? void 0 : t.links
                })), (0, i.tZ)(Ie, {
                    dateJoined: null === t || void 0 === t ? void 0 : t.createdAt
                }), (0, i.tZ)(Re.Z, {
                    showInvites: !0
                })))
            }

            function ut(e) {
                var t = e.user,
                    n = e.currentUser,
                    r = e.twitterSocialVerification,
                    s = e.instagramSocialVerification,
                    a = null === t || void 0 === t ? void 0 : t.publicKey,
                    l = null === n || void 0 === n ? void 0 : n.publicAddress,
                    u = (0, x.yv)([l, a]),
                    c = (null === r || void 0 === r ? void 0 : r.isValid) && (null === s || void 0 === s ? void 0 : s.isValid),
                    d = (null === r || void 0 === r ? void 0 : r.isValid) && !(null !== s && void 0 !== s && s.isValid),
                    f = !(null !== r && void 0 !== r && r.isValid) && (null === s || void 0 === s ? void 0 : s.isValid),
                    v = c ? {
                        twitter: {
                            platform: st.X.twitter,
                            handle: null === r || void 0 === r ? void 0 : r.username
                        },
                        instagram: {
                            platform: st.X.instagram,
                            handle: null === s || void 0 === s ? void 0 : s.username
                        }
                    } : d ? {
                        twitter: {
                            platform: st.X.twitter,
                            handle: null === r || void 0 === r ? void 0 : r.username
                        }
                    } : f ? {
                        instagram: {
                            platform: st.X.instagram,
                            handle: null === s || void 0 === s ? void 0 : s.username
                        }
                    } : {};
                return null !== t && void 0 !== t && t.acceptedInvite || null !== r && void 0 !== r && r.isValid || null !== s && void 0 !== s && s.isValid ? (0, i.tZ)(o.rj, {
                    gap: "xs",
                    sx: {
                        justifyContent: "flex-start"
                    }
                }, ((null === r || void 0 === r ? void 0 : r.isValid) || (null === s || void 0 === s ? void 0 : s.isValid) || u) && (0, i.tZ)($e, {
                    socialLinks: v,
                    isMyProfile: u
                }), (null === t || void 0 === t ? void 0 : t.acceptedInvite) && (0, i.tZ)(o.xu, null, (0, i.tZ)(ne, {
                    invite: null === t || void 0 === t ? void 0 : t.acceptedInvite
                }))) : null
            }
            var ct = n(34909),
                dt = n(23723),
                ft = n(5479),
                vt = n(3069),
                pt = n(45136),
                ht = n(45077),
                bt = n(23397),
                mt = n(3846),
                gt = n(67826),
                xt = n(71934),
                yt = n(96626),
                Zt = n(33559),
                wt = n(87070),
                kt = n(64105),
                jt = n(32624),
                Ot = n(92461);

            function Pt(e) {
                var t = e.publicKey,
                    n = e.currentUserPublicKey,
                    r = e.limit,
                    i = e.refetchOnWindowFocus,
                    o = void 0 !== i && i,
                    s = e.enabled,
                    a = void 0 === s || s,
                    l = e.initialData;
                return (0, d.useInfiniteQuery)([v.V.ProfileCollectors, {
                    publicKey: t,
                    currentUserPublicKey: n
                }], (function(e) {
                    var i = e.pageParam,
                        o = void 0 === i ? 0 : i,
                        s = r || jt.KB;
                    return (0, Ot.m)({
                        publicKey: t,
                        currentUserPublicKey: n,
                        limit: s,
                        offset: s * o
                    })
                }), {
                    refetchOnWindowFocus: o,
                    getNextPageParam: kt.Hd,
                    enabled: (0, g.IE)([t, a]),
                    initialData: l,
                    keepPreviousData: !0
                })
            }
            var Ct = (0, yt.zo)(Zt.Z, {
                    backgroundColor: "$white100",
                    boxShadow: "$0",
                    borderRadius: "$round",
                    paddingX: "$5",
                    paddingY: "$3",
                    alignItems: "center",
                    position: "relative",
                    transition: "box-shadow $1 $ease",
                    "@media (hover: hover)": {
                        "&:hover": {
                            boxShadow: "$1"
                        }
                    }
                }),
                St = (0, yt.zo)(De.Z, {
                    fontFamily: "$body",
                    fontSize: "$body",
                    fontWeight: 600
                }),
                $t = (0, yt.zo)(St, {
                    position: "relative",
                    zIndex: 2,
                    marginLeft: "$5",
                    color: "$black50",
                    cursor: "pointer",
                    transition: "color $1 $ease",
                    display: "none",
                    "@bp1": {
                        display: "block"
                    },
                    "@media (hover: hover)": {
                        "&:hover": {
                            color: "$black100"
                        }
                    }
                }),
                At = (0, dt.Z)(["highestBidAuctions", 0, "endsAt"]),
                Kt = (0, dt.Z)(["highestBidAuctions_aggregate", "aggregate", "count"]),
                It = (0, ft.Z)((0, vt.Z)((function(e) {
                    return e.publicKey
                })), (0, pt.Z)([(0, ht.Z)(Kt), (0, ht.Z)(At)]), bt.Z, (0, mt.Z)([], "pages"));

            function Ut(e) {
                var t = e.publicKey,
                    n = Pt({
                        publicKey: t,
                        currentUserPublicKey: t,
                        limit: 100,
                        initialData: e.initialData
                    }),
                    r = n.data,
                    i = n.isError,
                    o = (0, ze.Z)().setCurrentModal,
                    s = It(r),
                    a = (0, gt.Z)(5, s),
                    l = function() {
                        o(He.$.COLLECTORS)
                    },
                    u = (0, g.Qt)(a),
                    c = (0, xt.Z)(s) > 5;
                return u || i ? null : (0, Ve.jsxs)(Ct, {
                    children: [(0, Ve.jsx)(Be.Z, {
                        onClick: l,
                        css: {
                            position: "absolute",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            cursor: "pointer",
                            zIndex: 1
                        }
                    }), (0, Ve.jsx)(St, {
                        css: {
                            marginRight: "$3"
                        },
                        children: "Collected by"
                    }), (0, Ve.jsx)(Be.Z, {
                        css: {
                            position: "relative",
                            zIndex: 2
                        },
                        children: (0, Ve.jsx)(wt.DL, {
                            users: a
                        })
                    }), c && (0, Ve.jsx)($t, {
                        onClick: l,
                        children: "View all"
                    })]
                })
            }
            var Et, Rt, Vt, Bt = n(79724),
                Lt = n(61920),
                Dt = n(8598),
                Mt = n(29278),
                Ft = n(59211),
                _t = "\n    fragment UserFragment on User {\n  userIndex\n  publicKey\n  username\n  name\n  firstName\n  lastName\n  isAdmin\n  providerType\n  bio\n  coverImageUrl\n  profileImageUrl\n  isApprovedCreator\n  moderationStatus\n  links {\n    website {\n      platform\n      handle\n    }\n    instagram {\n      platform\n      handle\n    }\n    twitter {\n      platform\n      handle\n    }\n    youtube {\n      platform\n      handle\n    }\n    facebook {\n      platform\n      handle\n    }\n    twitch {\n      platform\n      handle\n    }\n    tiktok {\n      platform\n      handle\n    }\n    discord {\n      platform\n      handle\n    }\n    snapchat {\n      platform\n      handle\n    }\n  }\n}\n    ",
                zt = n(90035),
                Tt = "\n    mutation SetArtworkUserVisibility($shouldHide: Boolean!, $tokenId: Float!) {\n  setArtworkUserVisibility(shouldHide: $shouldHide, tokenId: $tokenId) {\n    ...ArtworkUserVisibilityFragment\n  }\n}\n    ".concat("\n    fragment ArtworkUserVisibilityFragment on ArtworkUserVisibility {\n  id\n  hiddenAt\n  createdAt\n  updatedAt\n}\n    "),
                Nt = n(85010),
                Ht = n(8095),
                Wt = n(61520),
                Qt = n(30693),
                Gt = n(71522),
                qt = n(3101),
                Yt = n(83673),
                Xt = n(31621),
                Jt = n(31849),
                en = n(42984),
                tn = n(76526),
                nn = n(56344),
                rn = n(25194);

            function on() {
                return (on = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var sn = function(e) {
                    return r.createElement("svg", on({
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), Et || (Et = r.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M6.433 7.84C4.777 9.164 3.53 10.735 2.85 11.69l-.002.002a.522.522 0 00-.093.305c0 .117.037.223.095.303l.006.008a18.958 18.958 0 004.627 4.592 1 1 0 11-1.14 1.643 20.956 20.956 0 01-5.114-5.072 2.521 2.521 0 01-.474-1.468 2.522 2.522 0 01.466-1.474c.737-1.034 2.108-2.767 3.963-4.25C7.034 4.798 9.452 3.5 12.257 3.5h.024c2.101.052 4.141.733 5.889 1.957a1 1 0 01-1.148 1.638A8.715 8.715 0 0012.245 5.5c-2.172.004-4.153 1.014-5.812 2.34zM19.238 7.495a1 1 0 011.414-.02 23.18 23.18 0 012.627 3.046c.312.43.476.95.476 1.48a2.52 2.52 0 01-.476 1.478c-.745 1.033-2.13 2.764-3.987 4.245-1.85 1.476-4.261 2.776-7.035 2.776h-.004a9.448 9.448 0 01-3.137-.552 1 1 0 11.673-1.884 7.45 7.45 0 002.47.436c2.141 0 4.118-1.01 5.786-2.34 1.66-1.324 2.924-2.897 3.613-3.852l.002-.003a.52.52 0 00.095-.305.52.52 0 00-.095-.304l-.002-.003a21.186 21.186 0 00-2.4-2.784 1 1 0 01-.02-1.414z",
                        fill: "#212121"
                    })), Rt || (Rt = r.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.494 9.498c-.606-.65-1.414-1-2.24-1-.825 0-1.633.352-2.239 1.002a3.668 3.668 0 00-.96 2.5c0 .95.353 1.848.962 2.5a1 1 0 01-1.461 1.365A5.667 5.667 0 017.055 12c0-1.438.531-2.829 1.498-3.865.968-1.039 2.298-1.637 3.7-1.637 1.403-.001 2.733.596 3.703 1.634a1 1 0 01-1.462 1.365zM16.245 10.262a1 1 0 011.143.833c.122.78.085 1.577-.11 2.34a5.621 5.621 0 01-1.028 2.088 5.252 5.252 0 01-1.78 1.453 4.96 4.96 0 01-3.095.445 1 1 0 01.355-1.968 2.97 2.97 0 001.85-.267 3.251 3.251 0 001.1-.902c.306-.387.532-.846.66-1.345a3.812 3.812 0 00.072-1.534 1 1 0 01.833-1.143z",
                        fill: "#212121"
                    })), Vt || (Vt = r.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M22.737.769a1 1 0 01.049 1.413l-19.605 21a1 1 0 11-1.462-1.364l19.604-21a1 1 0 011.414-.049z",
                        fill: "#212121"
                    })))
                },
                an = n(96280),
                ln = n(21015),
                un = n(33020),
                cn = n(7372),
                dn = n(60076);

            function fn(e) {
                var t, n, r = e.artwork,
                    i = e.status,
                    s = e.currentUser,
                    a = e.setArtworkUserVisibility,
                    l = e.setIsHovered,
                    u = (null === r || void 0 === r || null === (t = r.splitRecipients) || void 0 === t || null === (n = t.aggregate) || void 0 === n ? void 0 : n.count) > 0,
                    c = (0, kt.a4)({
                        artwork: r,
                        user: null === r || void 0 === r ? void 0 : r.creator
                    }),
                    d = (0, kt.nS)(r),
                    f = (0, x.yv)([null === r || void 0 === r ? void 0 : r.ownerPublicKey, null === r || void 0 === r ? void 0 : r.publicKey, null === s || void 0 === s ? void 0 : s.publicAddress]),
                    v = (0, x.yv)([null === r || void 0 === r ? void 0 : r.ownerPublicKey, null === s || void 0 === s ? void 0 : s.publicAddress]),
                    p = (0, x.yv)([null === r || void 0 === r ? void 0 : r.publicKey, null === s || void 0 === s ? void 0 : s.publicAddress]),
                    h = (0, g.KO)(r.artworkUserVisibilities),
                    b = a.mutate,
                    m = a.isLoading,
                    y = m ? "Hiding NFT" : "Hide NFT",
                    Z = m ? "Unhiding NFT" : "Unhide NFT",
                    w = {
                        canUnlist: v && [dn.MG.Listed].includes(i),
                        canHide: u && !p || !p,
                        canChangePrice: v && [dn.MG.Listed].includes(i),
                        canBurn: f && [dn.MG.Settled, dn.MG.Minted].includes(i),
                        canTransfer: v && [dn.MG.Minted, dn.MG.Settled, dn.MG.Transferred].includes(i)
                    },
                    k = [{
                        enabled: w.canUnlist,
                        icon: (0, Ve.jsx)(nn.Z, {
                            icon: cn.Z,
                            width: 22,
                            height: 22
                        }),
                        children: "Unlist",
                        href: "".concat(c, "/unlist")
                    }, {
                        enabled: w.canTransfer,
                        icon: (0, Ve.jsx)(nn.Z, {
                            icon: an.Z,
                            width: 18,
                            height: 18
                        }),
                        children: "Transfer NFT",
                        href: "".concat(c, "/transfer")
                    }, {
                        enabled: w.canChangePrice,
                        icon: (0, Ve.jsx)(nn.Z, {
                            icon: ln.Z,
                            width: 22,
                            height: 22
                        }),
                        children: "Change reserve price",
                        href: "".concat(c, "/change-price")
                    }, {
                        enabled: w.canBurn,
                        icon: (0, Ve.jsx)(nn.Z, {
                            icon: un.Z,
                            width: 22,
                            height: 22
                        }),
                        children: (0, Ve.jsx)(De.Z, {
                            css: {
                                color: "#F93A3A"
                            },
                            children: "Burn NFT"
                        }),
                        href: "".concat(d, "/burn")
                    }, {
                        enabled: w.canHide,
                        icon: m ? (0, Ve.jsx)(Te.Z, {
                            size: 20
                        }) : h ? (0, Ve.jsx)(nn.Z, {
                            icon: rn.Z,
                            width: 22,
                            height: 16
                        }) : (0, Ve.jsx)(nn.Z, {
                            icon: sn,
                            width: 22,
                            height: 22
                        }),
                        children: h ? Z : y,
                        onClick: function() {
                            b({
                                tokenId: null === r || void 0 === r ? void 0 : r.tokenId,
                                shouldHide: !h
                            })
                        }
                    }].filter((function(e) {
                        return e.enabled
                    }));
                return (0, g.KO)(k) ? (0, Ve.jsx)(o.xu, {
                    onMouseEnter: function() {
                        return l(!0)
                    },
                    onMouseLeave: function() {
                        return l(!1)
                    },
                    sx: {
                        position: "relative",
                        zIndex: 4
                    },
                    children: (0, Ve.jsx)(en.Z, {
                        sx: {
                            marginY: -5
                        },
                        children: (0, Ve.jsx)(tn.Z, {
                            options: k
                        })
                    })
                }) : null
            }
            var vn = n(23645),
                pn = n(33287),
                hn = (0, yt.zo)(Le.Z, {
                    gap: "$2"
                }),
                bn = (0, yt.zo)(Be.Z, {
                    position: "relative",
                    zIndex: 2,
                    display: "inline-flex",
                    overflow: "hidden"
                }),
                mn = hn,
                gn = (0, yt.zo)(Zt.Z, {
                    paddingTop: "$5",
                    paddingBottom: "$6",
                    paddingLeft: "$6",
                    paddingRight: "$6",
                    borderTop: "solid 1px $black5",
                    justifyContent: "space-between"
                }),
                xn = (0, yt.zo)(De.Z, {
                    fontSize: "$1",
                    fontWeight: 600,
                    fontFamily: "$body",
                    variants: {
                        color: {
                            light: {
                                color: "$black60"
                            },
                            white: {
                                color: "$white100"
                            }
                        }
                    }
                }),
                yn = (0, yt.zo)(xn, {
                    fontSize: "$2"
                }),
                Zn = xn;

            function wn(e) {
                var t = e.user,
                    n = e.href;
                return (0, Ve.jsx)(X.ZP, {
                    href: n,
                    children: (0, Ve.jsxs)(jn, {
                        as: "a",
                        children: [(0, Ve.jsx)(w.Z, {
                            size: 22,
                            imageUrl: null === t || void 0 === t ? void 0 : t.profileImageUrl,
                            userIndex: null === t || void 0 === t ? void 0 : t.userIndex
                        }), (0, Ve.jsx)(kn, {
                            noUsername: !(0, g.Hs)(t),
                            children: (0, g.wO)(t)
                        })]
                    })
                })
            }
            var kn = (0, yt.zo)(De.Z, {
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    marginLeft: "$2",
                    fontFamily: "$body",
                    fontWeight: 600,
                    fontSize: "$2",
                    color: "$black60",
                    whiteSpace: "nowrap",
                    transition: "color $0 ease",
                    variants: {
                        noUsername: {
                            true: {
                                fontFamily: "$mono",
                                fontSize: "$1",
                                fontWeight: 400,
                                letterSpacing: "0.02em"
                            }
                        }
                    }
                }),
                jn = (0, yt.zo)(Zt.Z, {
                    textDecoration: "none",
                    maxWidth: "100%",
                    overflow: "hidden",
                    "@media (hover: hover)": (0, $.Z)({}, "&:hover ".concat(kn), {
                        color: "$black100"
                    })
                }),
                On = n(35538),
                Pn = n(42164);

            function Cn(e) {
                var t = e.auction,
                    n = e.artwork,
                    r = !1 === (null === t || void 0 === t ? void 0 : t.isPrimarySale),
                    i = (0, kt.dy)({
                        user: null === n || void 0 === n ? void 0 : n.owner
                    });
                return (0, Ve.jsxs)(gn, {
                    children: [(0, Ve.jsxs)(mn, {
                        css: {
                            flexShrink: 0
                        },
                        children: [(0, Ve.jsx)(Zn, {
                            children: "Reserve price"
                        }), (0, Ve.jsx)(yn, {
                            children: (0, Pn.Bt)(null === t || void 0 === t ? void 0 : t.reservePriceInETH)
                        })]
                    }), r && (0, Ve.jsxs)(mn, {
                        css: {
                            marginLeft: "$7"
                        },
                        children: [(0, Ve.jsx)(Zn, {
                            color: "light",
                            css: {
                                textAlign: "right"
                            },
                            children: "Listed by"
                        }), (0, Ve.jsx)(bn, {
                            children: (0, Ve.jsx)(On.Z, {
                                publicKey: null === n || void 0 === n ? void 0 : n.ownerPublicKey,
                                children: (0, Ve.jsx)(wn, {
                                    href: i,
                                    user: null === n || void 0 === n ? void 0 : n.owner
                                })
                            })
                        })]
                    })]
                })
            }
            var Sn = n(68941);

            function $n(e) {
                var t = e.auction,
                    n = (0, Sn.Z)((0, Ke.si)(null === t || void 0 === t ? void 0 : t.endsAt)),
                    r = n.countdownParts,
                    i = n.hasEnded;
                return (0, Ve.jsxs)(gn, {
                    css: {
                        backgroundColor: "$black100"
                    },
                    children: [(0, Ve.jsxs)(mn, {
                        css: {
                            flex: 1
                        },
                        children: [(0, Ve.jsx)(Zn, {
                            css: {
                                color: "$black50"
                            },
                            children: "Current bid"
                        }), (0, Ve.jsx)(yn, {
                            color: "white",
                            children: (0, Pn.Bt)(null === t || void 0 === t ? void 0 : t.highestBidAmount)
                        })]
                    }), (0, Ve.jsxs)(mn, {
                        css: {
                            textAlign: "right"
                        },
                        children: [(0, Ve.jsx)(Zn, {
                            css: {
                                color: "$black50"
                            },
                            children: "Ending in"
                        }), (0, Ve.jsx)(Zt.Z, {
                            children: i ? (0, Ve.jsx)(yn, {
                                color: "white",
                                children: "Auction ended"
                            }) : r.map((function(e, t) {
                                var n = e.value,
                                    r = e.shortLabel;
                                return (0, Ve.jsxs)(yn, {
                                    color: "white",
                                    css: {
                                        marginLeft: "$2",
                                        minWidth: 32
                                    },
                                    children: [n, r]
                                }, t)
                            }))
                        })]
                    })]
                })
            }

            function An(e) {
                var t = e.href,
                    n = e.children;
                return (0, Ve.jsx)(X.ZP, {
                    href: t,
                    children: (0, Ve.jsx)("a", {
                        style: {
                            display: "block",
                            textDecoration: "none",
                            width: "100%"
                        },
                        children: (0, Ve.jsx)(Nt.Z, {
                            color: "white",
                            shape: "regular",
                            css: {
                                height: 49,
                                width: "100%",
                                display: "block",
                                paddingX: "$5"
                            },
                            children: n
                        })
                    })
                })
            }

            function Kn(e) {
                var t = e.artwork,
                    n = e.isSecondary,
                    r = (0, kt.a4)({
                        artwork: t,
                        user: t.creator
                    }),
                    i = (0, kt.nS)(t),
                    o = n ? r : i;
                return (0, Ve.jsx)(An, {
                    href: "".concat(o, "/list"),
                    children: "List"
                })
            }

            function In(e) {
                var t = e.auction,
                    n = e.artwork,
                    r = e.isOwnerOnProfile,
                    i = (0, kt.dy)({
                        user: null === t || void 0 === t ? void 0 : t.highestBidderUser
                    });
                return (0, Ve.jsxs)(gn, {
                    children: [(0, Ve.jsxs)(mn, {
                        css: {
                            flexShrink: 0
                        },
                        children: [(0, Ve.jsx)(Zn, {
                            color: "light",
                            children: "Last sold for"
                        }), (0, Ve.jsx)(yn, {
                            color: "light",
                            children: (0, Pn.Bt)(null === t || void 0 === t ? void 0 : t.highestBidAmount)
                        })]
                    }), r ? (0, Ve.jsx)(bn, {
                        css: {
                            marginLeft: "$7",
                            flex: 1
                        },
                        children: (0, Ve.jsx)(Kn, {
                            artwork: n,
                            isSecondary: !0
                        })
                    }) : (0, Ve.jsxs)(mn, {
                        css: {
                            marginLeft: "$7"
                        },
                        children: [(0, Ve.jsx)(Zn, {
                            color: "light",
                            css: {
                                textAlign: "right"
                            },
                            children: "Owned by"
                        }), (0, Ve.jsx)(bn, {
                            children: (0, Ve.jsx)(On.Z, {
                                publicKey: null === t || void 0 === t ? void 0 : t.highestBidder,
                                children: (0, Ve.jsx)(wn, {
                                    href: i,
                                    user: null === t || void 0 === t ? void 0 : t.highestBidderUser
                                })
                            })
                        })]
                    })]
                })
            }

            function Un(e) {
                var t, n, r = e.artwork,
                    i = e.isOwnerOnProfile,
                    o = e.auction,
                    s = (0, kt.dy)({
                        user: null === r || void 0 === r ? void 0 : r.owner
                    });
                return !i && o ? (0, Ve.jsxs)(gn, {
                    children: [(0, Ve.jsxs)(mn, {
                        css: {
                            flexShrink: 0
                        },
                        children: [(0, Ve.jsx)(Zn, {
                            color: "light",
                            children: "Last sold for"
                        }), (0, Ve.jsx)(yn, {
                            color: "light",
                            children: (0, Pn.Bt)(null === o || void 0 === o ? void 0 : o.highestBidAmount)
                        })]
                    }), (0, Ve.jsxs)(mn, {
                        css: {
                            marginLeft: "$7"
                        },
                        children: [(0, Ve.jsx)(Zn, {
                            color: "light",
                            css: {
                                textAlign: "right"
                            },
                            children: "Owned by"
                        }), (0, Ve.jsx)(bn, {
                            children: (0, Ve.jsx)(On.Z, {
                                publicKey: null === r || void 0 === r || null === (n = r.owner) || void 0 === n ? void 0 : n.publicKey,
                                children: (0, Ve.jsx)(wn, {
                                    href: s,
                                    user: null === r || void 0 === r ? void 0 : r.owner
                                })
                            })
                        })]
                    })]
                }) : (0, Ve.jsxs)(gn, {
                    children: [(0, Ve.jsxs)(mn, {
                        children: [(0, Ve.jsx)(Zn, {
                            color: "light",
                            children: "Owned by"
                        }), (0, Ve.jsx)(bn, {
                            children: (0, Ve.jsx)(On.Z, {
                                publicKey: null === r || void 0 === r || null === (t = r.owner) || void 0 === t ? void 0 : t.publicKey,
                                children: (0, Ve.jsx)(wn, {
                                    href: s,
                                    user: null === r || void 0 === r ? void 0 : r.owner
                                })
                            })
                        })]
                    }), i && (0, Ve.jsx)(mn, {
                        css: {
                            marginLeft: "$7",
                            flexGrow: 1
                        },
                        children: (0, Ve.jsx)(bn, {
                            children: (0, Ve.jsx)(Kn, {
                                artwork: r
                            })
                        })
                    })]
                })
            }

            function En(e) {
                var t = e.artwork,
                    n = (0, kt.a4)({
                        artwork: t,
                        user: t.creator
                    });
                return (0, Ve.jsx)(An, {
                    href: "".concat(n, "/settle"),
                    children: "Settle"
                })
            }

            function Rn(e) {
                var t = e.auction,
                    n = e.artwork,
                    r = e.isOwnerOnProfile;
                return (0, Ve.jsxs)(gn, {
                    children: [(0, Ve.jsxs)(mn, {
                        css: {
                            flexShrink: 0
                        },
                        children: [(0, Ve.jsx)(Zn, {
                            color: "light",
                            children: "Last sold for"
                        }), (0, Ve.jsx)(yn, {
                            color: "light",
                            children: (0, Pn.Bt)(null === t || void 0 === t ? void 0 : t.highestBidAmount)
                        })]
                    }), r && (0, Ve.jsx)(bn, {
                        css: {
                            marginLeft: "$7",
                            flex: 1
                        },
                        children: (0, Ve.jsx)(En, {
                            artwork: n
                        })
                    })]
                })
            }

            function Vn(e) {
                var t = e.artwork;
                return e.isOwnerOnProfile ? (0, Ve.jsx)(gn, {
                    children: (0, Ve.jsx)(bn, {
                        css: {
                            display: "block",
                            flex: 1
                        },
                        children: (0, Ve.jsx)(Kn, {
                            artwork: t
                        })
                    })
                }) : null
            }

            function Bn(e) {
                var t = e.status,
                    n = e.mostRecentActiveAuction,
                    r = e.artwork,
                    i = e.isOwnerOnProfile;
                return (0, Dt.Z)([
                    [(0, Mt.Z)(dn.MG.Burned), (0, Ft.Z)(null)],
                    [(0, Mt.Z)(dn.MG.Minted), (0, Ft.Z)((0, Ve.jsx)(Vn, {
                        artwork: r,
                        auction: n,
                        isOwnerOnProfile: i
                    }))],
                    [(0, Mt.Z)(dn.MG.Listed), (0, Ft.Z)((0, Ve.jsx)(Cn, {
                        artwork: r,
                        auction: n,
                        isOwnerOnProfile: i
                    }))],
                    [(0, Mt.Z)(dn.MG.ListedButNotByMe), (0, Ft.Z)((0, Ve.jsx)(Cn, {
                        artwork: r,
                        auction: n,
                        isOwnerOnProfile: i
                    }))],
                    [(0, Mt.Z)(dn.MG.LiveAuction), (0, Ft.Z)((0, Ve.jsx)($n, {
                        artwork: r,
                        auction: n,
                        isOwnerOnProfile: i
                    }))],
                    [(0, Mt.Z)(dn.MG.Unsettled), (0, Ft.Z)((0, Ve.jsx)(Rn, {
                        artwork: r,
                        auction: n,
                        isOwnerOnProfile: i
                    }))],
                    [(0, Mt.Z)(dn.MG.Settled), (0, Ft.Z)((0, Ve.jsx)(In, {
                        artwork: r,
                        auction: n,
                        isOwnerOnProfile: i
                    }))],
                    [(0, Mt.Z)(dn.MG.Transferred), (0, Ft.Z)((0, Ve.jsx)(Un, {
                        artwork: r,
                        auction: n,
                        isOwnerOnProfile: i
                    }))],
                    [pn.Z, (0, Ft.Z)(null)]
                ])(t)
            }
            var Ln = n(34436),
                Dn = n(25186),
                Mn = n(91223);

            function Fn(e) {
                var t = e.className;
                return (0, Ve.jsxs)(Mn.Z.Wrapper, {
                    className: t,
                    children: [(0, Ve.jsx)(Dn.Z, {
                        width: 17,
                        height: 16
                    }), (0, Ve.jsx)(Mn.Z.Label, {
                        children: "Split"
                    })]
                })
            }
            var _n = n(79640),
                zn = n(50779);

            function Tn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Nn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Tn(Object(n), !0).forEach((function(t) {
                        (0, $.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Hn = (0, yt.iv)({
                position: "absolute",
                left: "$5",
                bottom: "$5"
            })();

            function Wn(e) {
                return (0, Ve.jsx)(Ln.Z, {
                    children: (0, Ve.jsx)(Qn, Nn({}, e))
                })
            }

            function Qn(e) {
                var t, n, r = e.artwork,
                    i = e.creator,
                    o = e.currentUser,
                    s = e.isCurrentUserProfile,
                    a = void 0 !== s && s,
                    l = e.setArtworkUserVisibility,
                    u = (0, Ln.R)(),
                    c = u.isHovered,
                    d = u.setIsHovered;
                if (!r) return (0, Ve.jsx)(Xt.Z, {});
                var f = (0, kt.a4)({
                        user: i,
                        artwork: r
                    }),
                    v = (0, kt.dy)({
                        user: i
                    }),
                    p = (0, _n.zr)({
                        h: 640,
                        q: 80,
                        quality: Qt.f.Preview
                    }, r),
                    h = (0, _n.AI)(r),
                    b = (0, zn.hr)(r),
                    m = (null === r || void 0 === r || null === (t = r.splitRecipients) || void 0 === t || null === (n = t.aggregate) || void 0 === n ? void 0 : n.count) > 0,
                    y = (0, kt.q$)({
                        mostRecentActiveAuction: b,
                        latestArtworkEvent: (0, zn.b5)(r),
                        currentUser: o
                    }),
                    Z = (0, x.yv)([null === o || void 0 === o ? void 0 : o.publicAddress, null === r || void 0 === r ? void 0 : r.ownerPublicKey]),
                    w = (0, g.IE)([a, Z]);
                return (0, Ve.jsxs)(Jt.Z, {
                    isHovered: c,
                    className: "artwork-card",
                    children: [(0, Ve.jsx)(X.ZP, {
                        href: f,
                        children: (0, Ve.jsx)(Yn, {
                            children: r.name
                        })
                    }), (0, Ve.jsxs)(Be.Z, {
                        css: {
                            position: "relative"
                        },
                        children: [(0, Ve.jsx)(qt.Z, {
                            assetUrl: p,
                            posterUrl: h
                        }), m && (0, Ve.jsx)(Fn, {
                            className: Hn.className
                        })]
                    }), (0, Ve.jsx)(Zt.Z, {
                        css: {
                            flex: 1,
                            alignItems: "flex-start"
                        },
                        children: (0, Ve.jsxs)(vn.Z, {
                            children: [(0, Ve.jsxs)(Zt.Z, {
                                css: {
                                    justifyContent: "space-between"
                                },
                                children: [(0, Ve.jsx)(Yt.Z, {
                                    children: r.name
                                }), a && (0, Ve.jsx)(fn, {
                                    artwork: r,
                                    status: y,
                                    currentUser: o,
                                    setArtworkUserVisibility: l,
                                    setIsHovered: d
                                })]
                            }), (0, Ve.jsx)(Zt.Z, {
                                css: {
                                    position: "relative",
                                    zIndex: 2
                                },
                                children: (0, Ve.jsx)(On.Z, {
                                    publicKey: (0, g.Yh)(i),
                                    children: (0, Ve.jsx)(X.ZP, {
                                        href: v,
                                        children: (0, Ve.jsx)(qn, {
                                            children: (0, Ve.jsx)(Gt.Z, {
                                                user: i,
                                                color: "currentColor"
                                            })
                                        })
                                    })
                                })
                            })]
                        })
                    }), (0, Ve.jsx)(Zt.Z, {
                        css: {
                            flexDirection: "column"
                        },
                        onMouseEnter: function() {
                            return d(!0)
                        },
                        onMouseLeave: function() {
                            return d(!1)
                        },
                        children: (0, Ve.jsx)(Bn, {
                            artwork: r,
                            mostRecentActiveAuction: b,
                            isOwnerOnProfile: w,
                            status: y
                        })
                    })]
                })
            }
            var Gn, qn = (0, yt.zo)("a", {
                    textDecoration: "none",
                    color: "$black100",
                    "& .username-tag": {
                        fontSize: "$2",
                        color: "$black60",
                        transition: "color $0 ease"
                    },
                    "&:hover .username-tag": {
                        color: "$black100"
                    }
                }),
                Yn = (0, yt.zo)("a", {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 2,
                    textIndent: "-9999rem"
                });

            function Xn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Jn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Xn(Object(n), !0).forEach((function(t) {
                        (0, $.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function er(e) {
                var t = e.collectionQueryHook,
                    n = e.variables,
                    i = e.isCurrentUserProfile,
                    o = e.currentUser,
                    s = e.options,
                    a = (0, d.useQueryClient)(),
                    l = t(n, Jn(Jn({}, s), {}, {
                        refetchOnWindowFocus: !1
                    })),
                    u = l.data,
                    c = l.isLoading,
                    f = l.isFetching,
                    v = l.hasNextPage,
                    p = l.fetchNextPage,
                    h = l.refetch,
                    b = function(e) {
                        return (0, d.useMutation)((0, zt.CQ)(Tt), e)
                    }({
                        onSuccess: function() {
                            h(), a.invalidateQueries("UserArtworksCounts")
                        }
                    }),
                    m = (0, r.useMemo)((function() {
                        return (0, vt.Z)((function(e) {
                            return e.tokenId
                        }), (0, bt.Z)((0, mt.Z)([], "pages", u)))
                    }), [u]),
                    g = (0, r.useState)(!1),
                    x = g[0],
                    y = g[1],
                    Z = m.length > 3;
                return c ? (0, Ve.jsx)(Zt.Z, {
                    css: {
                        paddingTop: "$8"
                    },
                    children: (0, Ve.jsx)(Ht.Z, {})
                }) : (0, Ve.jsxs)(Ve.Fragment, {
                    children: [(0, Ve.jsxs)(Le.Z, {
                        css: {
                            gap: "$4",
                            "@bp1": {
                                gap: "$6"
                            }
                        },
                        children: [(0, Ve.jsx)(nr, {
                            isExpanded: x,
                            children: m.map((function(e) {
                                return (0, Ve.jsx)(Wn, {
                                    artwork: e,
                                    creator: e.creator,
                                    isCurrentUserProfile: i,
                                    setArtworkUserVisibility: b,
                                    currentUser: o
                                }, e.tokenId)
                            }))
                        }), Z && !x && (0, Ve.jsx)(tr, {
                            color: "white",
                            shape: "round",
                            size: "regular",
                            onClick: function() {
                                y(!0)
                            },
                            children: "View all"
                        })]
                    }), (0, Ve.jsx)(Wt.Z, {
                        handleNextPage: p,
                        isFetching: f,
                        hasNextPage: v
                    })]
                })
            }
            var tr = (0, yt.zo)(Nt.Z, {
                    width: "100%",
                    display: "block",
                    "@bp1": {
                        display: "none"
                    }
                }),
                nr = (0, yt.zo)(Le.Z, (Gn = {
                    gap: "$4"
                }, (0, $.Z)(Gn, "& ".concat(Jt.Z, ":nth-of-type(n+4)"), {
                    display: "none"
                }), (0, $.Z)(Gn, "@bp1", (0, $.Z)({
                    gap: "$6",
                    gridTemplateColumns: "repeat(2,1fr)"
                }, "& ".concat(Jt.Z, ":nth-of-type(n+4)"), {
                    display: "flex"
                })), (0, $.Z)(Gn, "@bp3", {
                    gap: "$7",
                    gridTemplateColumns: "repeat(3,1fr)"
                }), (0, $.Z)(Gn, "variants", {
                    isExpanded: {
                        true: (0, $.Z)({}, "& ".concat(Jt.Z, ":nth-of-type(n+4)"), {
                            display: "flex"
                        })
                    }
                }), Gn)),
                rr = n(86172),
                ir = (0, yt.zo)(De.Z, {
                    fontFamily: "$body",
                    fontWeight: 600,
                    fontSize: "$3",
                    textAlign: "center",
                    letterSpacing: -.2,
                    marginBottom: "$8"
                });

            function or(e) {
                var t = e.migratedAddress,
                    n = (0, u.ZP)({
                        publicKey: t,
                        refetchOnWindowFocus: !1
                    }),
                    r = n.data,
                    i = n.isLoading;
                return (0, Ve.jsx)(Be.Z, {
                    css: {
                        position: "relative",
                        zIndex: 10
                    },
                    children: (0, Ve.jsxs)(Zt.Z, {
                        css: {
                            paddingTop: "$11",
                            paddingBottom: "$10",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            maxWidth: 640,
                            marginLeft: "auto",
                            marginRight: "auto"
                        },
                        children: [(0, Ve.jsx)(ir, {
                            children: "This creator has migrated their profile to a new account."
                        }), !i && (0, Ve.jsx)(On.Z, {
                            publicKey: t,
                            children: (0, Ve.jsx)(rr.Z, {
                                user: null === r || void 0 === r ? void 0 : r.user
                            })
                        })]
                    })
                })
            }
            var sr = (0, yt.iv)({
                position: "relative",
                marginLeft: "$6",
                color: "$black20",
                "@media (hover: hover)": {
                    "&:hover": {
                        color: "$black100"
                    }
                },
                "&:after": {
                    position: "absolute",
                    left: "-$6",
                    top: "0px",
                    content: "",
                    height: "24px",
                    borderLeft: "solid 1px $black20"
                }
            })();

            function ar(e) {
                var t = e.label,
                    n = e.count,
                    r = e.isActive,
                    i = e.showCount;
                return (0, Ve.jsxs)(De.Z, {
                    css: {
                        color: r && "$black100",
                        transition: "color $0 ease",
                        "@media (hover: hover)": {
                            "&:hover": {
                                color: "currentColor"
                            }
                        }
                    },
                    children: [t, i && (0, Ve.jsx)(De.Z, {
                        as: "span",
                        css: {
                            marginLeft: "$3",
                            fontWeight: 400
                        },
                        children: n
                    })]
                })
            }
            var lr = n(8831),
                ur = n(73381),
                cr = n(809),
                dr = n.n(cr),
                fr = n(92447),
                vr = "\n    fragment UserFragment on user {\n  userIndex\n  publicKey\n  username\n  profileImageUrl\n  coverImageUrl\n  name\n  bio\n  isApprovedCreator\n  moderationStatus\n  joinedWaitlistAt\n  createdAt\n  migratedToUser\n  isAdmin\n  links\n}\n    ",
                pr = '\n    fragment CollectionArtworkFragment on artwork {\n  ...ArtworkFragment\n  ...LatestArtworkEventFragment\n  ...ArtworkSplitRecipientsFragment\n  owner {\n    ...UserFragment\n  }\n  creator: user {\n    ...UserFragment\n  }\n  auctions(\n    where: {status: {_in: ["OPEN", "FINALIZED", "ENDED"]}}\n    order_by: {startsAt: desc}\n  ) {\n    ...AuctionFragment\n  }\n}\n    '.concat("\n    fragment ArtworkFragment on artwork {\n  id\n  name\n  description\n  assetIPFSPath\n  metadataIPFSPath\n  width\n  height\n  duration\n  mimeType\n  mintTxHash\n  assetId\n  assetStatus\n  mintTxHash\n  tokenId\n  status\n  hiddenAt\n  deletedAt\n  moderationStatus\n  moderationFrom\n  latestTxDate\n  assetVersion\n  ownerPublicKey\n  publicKey\n}\n    ", "\n").concat('\n    fragment LatestArtworkEventFragment on artwork {\n  latestEvents: event(\n    where: {eventType: {_nin: ["MIGRATE_CREATOR", "MIGRATE_CREATOR_PAYMENT_ADDRESS", "MIGRATE_OWNER", "MIGRATE_SELLER", "SELL", "PRICE_CHANGE"]}}\n    limit: 1\n    order_by: {blockTimestamp: desc}\n  ) {\n    eventType\n    data\n  }\n}\n    ', "\n").concat("\n    fragment ArtworkSplitRecipientsFragment on artwork {\n  splitRecipients: splitRecipients_aggregate {\n    aggregate {\n      count\n    }\n  }\n}\n    ", "\n").concat(vr, "\n").concat("\n    fragment AuctionFragment on auction {\n  auctionId\n  canceledAt\n  createdAt\n  endsAt\n  finalizedAt\n  highestBidAmount\n  highestBidder\n  id\n  isPrimarySale\n  reservePriceInETH\n  seller\n  startsAt\n  status\n  tokenId\n  updatedAt\n  highestBidderUser {\n    userIndex\n    publicKey\n    username\n    profileImageUrl\n    coverImageUrl\n    name\n  }\n}\n    "),
                hr = "\n    query UserArtworksCreated($publicKey: String!, $limit: Int, $offset: Int, $indexedStates: [Boolean!]!) {\n  artworks: artwork(\n    where: {publicKey: {_eq: $publicKey}, isIndexed: {_in: $indexedStates}, tokenId: {_is_null: false}, deletedAt: {_is_null: true}}\n    order_by: {tokenId: desc_nulls_last}\n    limit: $limit\n    offset: $offset\n  ) {\n    ...CollectionArtworkFragment\n    artworkUserVisibilities(\n      where: {publicKey: {_eq: $publicKey}, hiddenAt: {_is_null: false}}\n    ) {\n      hiddenAt\n    }\n  }\n}\n    ".concat(pr);

            function br(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function mr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? br(Object(n), !0).forEach((function(t) {
                        (0, $.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : br(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function gr() {
                return (gr = (0, fr.Z)(dr().mark((function e(t) {
                    var n, r;
                    return dr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = (0, zt.ot)(), e.next = 3, n.request(hr, t);
                            case 3:
                                return r = e.sent, e.abrupt("return", r.artworks);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function xr(e, t) {
                var n = e.publicKey;
                return (0, d.useInfiniteQuery)(["UserArtworksCreated", e], (function(t) {
                    var r = t.pageParam,
                        i = void 0 === r ? 0 : r;
                    return function(e) {
                        return gr.apply(this, arguments)
                    }(mr(mr({}, e), {}, {
                        publicKey: (0, x.Qf)(n),
                        limit: jt.KB,
                        offset: jt.KB * i
                    }))
                }), mr(mr({}, t), {}, {
                    enabled: Boolean(n),
                    getNextPageParam: kt.Hd
                }))
            }
            var yr = "\n    query UserArtworksCollected($publicKey: String!, $limit: Int, $offset: Int, $indexedStates: [Boolean!]!) {\n  artworks: artwork(\n    where: {ownerPublicKey: {_eq: $publicKey}, publicKey: {_neq: $publicKey}, isIndexed: {_in: $indexedStates}, tokenId: {_is_null: false}, deletedAt: {_is_null: true}}\n    order_by: {latestTxDate: desc_nulls_last}\n    limit: $limit\n    offset: $offset\n  ) {\n    ...CollectionArtworkFragment\n    artworkUserVisibilities(\n      where: {publicKey: {_eq: $publicKey}, hiddenAt: {_is_null: false}}\n    ) {\n      hiddenAt\n    }\n  }\n}\n    ".concat(pr);

            function Zr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function wr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Zr(Object(n), !0).forEach((function(t) {
                        (0, $.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function kr() {
                return (kr = (0, fr.Z)(dr().mark((function e(t) {
                    var n, r;
                    return dr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = (0, zt.ot)(), e.next = 3, n.request(yr, t);
                            case 3:
                                return r = e.sent, e.abrupt("return", (0, kt.qf)(r.artworks));
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function jr(e, t) {
                var n = e.publicKey;
                return (0, d.useInfiniteQuery)(["UserArtworksCollected", e], (function(t) {
                    var r = t.pageParam,
                        i = void 0 === r ? 0 : r;
                    return function(e) {
                        return kr.apply(this, arguments)
                    }(wr(wr({}, e), {}, {
                        publicKey: (0, x.Qf)(n),
                        limit: jt.KB,
                        offset: jt.KB * i
                    }))
                }), wr(wr({}, t), {}, {
                    enabled: Boolean(n),
                    getNextPageParam: kt.Hd
                }))
            }
            var Or = "\n    query UserArtworksSplits($publicKey: String!, $limit: Int, $offset: Int, $indexedStates: [Boolean!]!) {\n  artworks: artwork(\n    where: {isIndexed: {_in: $indexedStates}, tokenId: {_is_null: false}, deletedAt: {_is_null: true}, splitRecipients: {publicKey: {_eq: $publicKey}}}\n    order_by: {latestTxDate: desc_nulls_last}\n    limit: $limit\n    offset: $offset\n  ) {\n    ...CollectionArtworkFragment\n    artworkUserVisibilities(\n      where: {publicKey: {_eq: $publicKey}, hiddenAt: {_is_null: false}}\n    ) {\n      hiddenAt\n    }\n  }\n}\n    ".concat(pr);

            function Pr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Cr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Pr(Object(n), !0).forEach((function(t) {
                        (0, $.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Sr() {
                return (Sr = (0, fr.Z)(dr().mark((function e(t) {
                    var n, r;
                    return dr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = (0, zt.ot)(), e.next = 3, n.request(Or, t);
                            case 3:
                                return r = e.sent, e.abrupt("return", (0, kt.qf)(r.artworks));
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function $r(e, t) {
                var n = e.publicKey;
                return (0, d.useInfiniteQuery)(["UserArtworksSplits", e], (function(t) {
                    var r = t.pageParam,
                        i = void 0 === r ? 0 : r;
                    return function(e) {
                        return Sr.apply(this, arguments)
                    }(Cr(Cr({}, e), {}, {
                        publicKey: (0, x.Qf)(n),
                        limit: jt.KB,
                        offset: jt.KB * i
                    }))
                }), Cr(Cr({}, t), {}, {
                    enabled: Boolean(n),
                    getNextPageParam: kt.Hd
                }))
            }
            var Ar = "\n    query UserArtworksHidden($publicKey: String!, $limit: Int, $offset: Int, $indexedStates: [Boolean!]!) {\n  artworks: artwork(\n    where: {_or: [{ownerPublicKey: {_eq: $publicKey}}, {splitRecipients: {user: {publicKey: {_eq: $publicKey}}}}], isIndexed: {_in: $indexedStates}, tokenId: {_is_null: false}, deletedAt: {_is_null: true}, artworkUserVisibilities: {hiddenAt: {_is_null: false}, publicKey: {_eq: $publicKey}}}\n    limit: $limit\n    offset: $offset\n  ) {\n    ...CollectionArtworkFragment\n    artworkUserVisibilities(\n      where: {publicKey: {_eq: $publicKey}, hiddenAt: {_is_null: false}}\n    ) {\n      hiddenAt\n    }\n  }\n}\n    ".concat(pr);

            function Kr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ir(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Kr(Object(n), !0).forEach((function(t) {
                        (0, $.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Ur() {
                return (Ur = (0, fr.Z)(dr().mark((function e(t) {
                    var n, r;
                    return dr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = (0, zt.ot)(), e.next = 3, n.request(Ar, t);
                            case 3:
                                return r = e.sent, e.abrupt("return", r.artworks);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Er(e, t) {
                var n = e.publicKey;
                return (0, d.useInfiniteQuery)(["UserArtworksHidden", e], (function(t) {
                    var r = t.pageParam,
                        i = void 0 === r ? 0 : r;
                    return function(e) {
                        return Ur.apply(this, arguments)
                    }(Ir(Ir({}, e), {}, {
                        publicKey: (0, x.Qf)(n),
                        limit: jt.KB,
                        offset: jt.KB * i
                    }))
                }), Ir(Ir({}, t), {}, {
                    enabled: Boolean(n),
                    getNextPageParam: kt.Hd
                }))
            }
            var Rr = n(92522),
                Vr = n(34068),
                Br = n(35064),
                Lr = n(68981),
                Dr = n(50298);

            function Mr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Fr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Mr(Object(n), !0).forEach((function(t) {
                        (0, $.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var _r, zr = (0, Rr.Z)((function(e, t) {
                    return (0, Vr.Z)(0, [t, "aggregate", "count"], e)
                })),
                Tr = (0, dt.Z)(["artworks_aggregate", "aggregate", "count"]),
                Nr = (0, Rr.Z)((function(e, t) {
                    return (0, ft.Z)(Br.Z, (0, Lr.Z)(Tr), (0, Vr.Z)([], [t, "splitRecipients"]))(e)
                })),
                Hr = function(e) {
                    var t = zr(e),
                        n = Nr(e),
                        r = t("artworksCollectedHidden"),
                        i = t("artworksCreatedHidden"),
                        o = n("userSplitsHidden");
                    return {
                        artworksCollected: t("artworksCollected") - r,
                        artworksCreated: t("artworksCreated") - i,
                        artworksSplits: n("userSplits") - o,
                        artworksHidden: t("artworksHidden")
                    }
                };

            function Wr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Qr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Wr(Object(n), !0).forEach((function(t) {
                        (0, $.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Gr(e) {
                var t, n, i, o = e.publicKey,
                    s = e.currentUserPublicKey,
                    a = e.user,
                    l = e.currentUser,
                    u = e.currentUserIsLoading,
                    c = e.createdCount,
                    d = (0, x.yv)([o, s]),
                    f = (0, x.pE)(a),
                    v = null !== l && void 0 !== l && l.admin || d ? [!0, !1] : [!0],
                    p = (n = {
                        publicKey: o,
                        indexedStates: v
                    }, i = {
                        refetchOnWindowFocus: !1
                    }, (0, Dr.M)(n, Fr(Fr({}, i), {}, {
                        select: Hr
                    }))),
                    h = p.data,
                    b = p.isLoading,
                    m = null !== (t = null === h || void 0 === h ? void 0 : h.artworksCreated) && void 0 !== t ? t : c,
                    y = null === h || void 0 === h ? void 0 : h.artworksCollected,
                    Z = null === h || void 0 === h ? void 0 : h.artworksSplits,
                    w = null === h || void 0 === h ? void 0 : h.artworksHidden,
                    k = (0, r.useState)(m > 0 ? _r.Created : _r.Collected),
                    j = k[0],
                    O = k[1],
                    P = [{
                        label: (0, Ve.jsx)(ar, {
                            label: _r.Created,
                            count: m,
                            showCount: !b
                        }),
                        value: _r.Created,
                        isVisible: m > 0
                    }, {
                        label: (0, Ve.jsx)(ar, {
                            label: _r.Collected,
                            count: y,
                            showCount: !b
                        }),
                        value: _r.Collected,
                        isVisible: y > 0
                    }, {
                        label: (0, Ve.jsx)(ar, {
                            label: _r.Splits,
                            count: Z,
                            showCount: !b
                        }),
                        value: _r.Splits,
                        isVisible: Z > 0
                    }, {
                        label: (0, Ve.jsx)(ar, {
                            label: _r.Hidden,
                            count: 0,
                            isActive: j === _r.Hidden,
                            showCount: !1
                        }),
                        value: _r.Hidden,
                        className: sr.className,
                        isVisible: w > 0 && d
                    }],
                    C = (0, Bt.Z)((function(e) {
                        return Boolean(e.isVisible)
                    }), P),
                    S = (0, Lt.Z)((function(e) {
                        return e.value === j
                    }), P),
                    $ = !1 === (null === S || void 0 === S ? void 0 : S.isVisible),
                    A = (0, dt.Z)([0, "value"], C),
                    K = (0, g.Qt)(C);
                (0, r.useEffect)((function() {
                    O(A)
                }), [A, o, $]);
                var I = {
                    variables: {
                        publicKey: o,
                        indexedStates: v
                    },
                    isCurrentUserProfile: d,
                    currentUser: l,
                    currentUserIsLoading: u,
                    publicKey: o
                };
                return f ? (0, Ve.jsx)(or, {
                    migratedAddress: null === a || void 0 === a ? void 0 : a.migratedToUser
                }) : K ? null : (0, Ve.jsxs)(Ve.Fragment, {
                    children: [b ? (0, Ve.jsx)(qr, {}) : (0, Ve.jsx)(lr.F, {
                        currentView: j,
                        setCurrentView: O,
                        tabs: C
                    }), (0, Dt.Z)([
                        [(0, Mt.Z)(_r.Created), (0, Ft.Z)((0, Ve.jsx)(er, Qr(Qr({}, I), {}, {
                            collectionQueryHook: xr
                        })))],
                        [(0, Mt.Z)(_r.Collected), (0, Ft.Z)((0, Ve.jsx)(er, Qr(Qr({}, I), {}, {
                            collectionQueryHook: jr
                        })))],
                        [(0, Mt.Z)(_r.Splits), (0, Ft.Z)((0, Ve.jsx)(er, Qr(Qr({}, I), {}, {
                            collectionQueryHook: $r
                        })))],
                        [(0, Mt.Z)(_r.Hidden), (0, Ft.Z)((0, Ve.jsx)(er, Qr(Qr({}, I), {}, {
                            collectionQueryHook: Er
                        })))]
                    ])(j)]
                })
            }

            function qr() {
                return (0, Ve.jsxs)(Zt.Z, {
                    css: {
                        height: 42,
                        marginBottom: "$4",
                        borderBottom: "solid 1px $black10"
                    },
                    children: [(0, Ve.jsx)(ur.Z, {
                        css: {
                            marginRight: "$6",
                            height: 22,
                            width: 96
                        }
                    }), (0, Ve.jsx)(ur.Z, {
                        css: {
                            height: 22,
                            width: 96
                        }
                    })]
                })
            }! function(e) {
                e.Created = "Created", e.Collected = "Collected", e.Splits = "Splits", e.Hidden = "Hidden"
            }(_r || (_r = {}));
            var Yr = n(76937),
                Xr = n(21841),
                Jr = n(12525),
                ei = n(25559),
                ti = n(84071),
                ni = n(10702),
                ri = (0, ft.Z)((0, vt.Z)((function(e) {
                    return e.publicKey
                })), bt.Z, (0, mt.Z)([], "pages"));

            function ii(e) {
                var t = e.publicKey,
                    n = e.currentUserPublicKey,
                    r = (0, ze.Z)().currentModal,
                    s = (0, d.useQueryClient)(),
                    a = Pt({
                        publicKey: t,
                        currentUserPublicKey: n,
                        enabled: r === He.$.COLLECTORS
                    }),
                    l = a.data,
                    u = a.fetchNextPage,
                    c = a.isLoading,
                    f = a.isFetching,
                    p = a.hasNextPage,
                    h = a.isFetchingNextPage,
                    b = ri(l),
                    m = (0, Xr.Z)({
                        fetchNextPage: u,
                        isFetching: f,
                        hasNextPage: p
                    }).handleNextPage,
                    g = (0, Yr.Z)(b);
                return (0, i.tZ)(ei.Z, {
                    modalKey: He.$.COLLECTORS
                }, (0, i.tZ)(Jr.Z, null, (0, i.tZ)(ni.Z, {
                    tabs: [{
                        onClick: function() {},
                        isActive: !0,
                        children: "Collected by"
                    }]
                }), c ? (0, i.tZ)(Ht.Z, {
                    sx: {
                        paddingBottom: [0, 0, 0]
                    }
                }) : g ? (0, i.tZ)(o.xv, {
                    variant: "body.body",
                    sx: {
                        margin: "auto"
                    }
                }, "This user has no collectors.") : (0, i.tZ)(ti.Z, {
                    users: b,
                    handleNextPage: m,
                    isFetchingNextPage: h,
                    hasNextPage: p,
                    onFollowUpdate: function() {
                        s.invalidateQueries(v.V.ProfileCollectors)
                    }
                })))
            }
            var oi = n(74611),
                si = n(745),
                ai = n(6190),
                li = n(31934),
                ui = "\n    mutation UpdateUsername($username: String, $userPublicKey: String!) {\n  updateUsername(username: $username, userPublicKey: $userPublicKey) {\n    ...UserFragment\n  }\n}\n    ".concat(_t);

            function ci(e) {
                var t, n = e.user,
                    r = (0, Pe.useRouter)(),
                    i = (0, d.useQueryClient)(),
                    o = (t = {
                        onSuccess: function() {
                            var e = (0, fr.Z)(dr().mark((function e(t) {
                                return dr().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, r.push("/".concat(t.updateUsername.publicKey));
                                        case 2:
                                            return e.next = 4, i.refetchQueries(v.V.User);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, (0, d.useMutation)((0, zt.CQ)(ui), t)).mutateAsync,
                    s = function() {
                        var e = (0, fr.Z)(dr().mark((function e(t) {
                            var n;
                            return dr().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = (0, g.KO)(t.username), e.next = 3, o({
                                            userPublicKey: t.userPublicKey,
                                            username: n ? t.username : null
                                        });
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, Ve.jsx)(Be.Z, {
                    css: {
                        padding: "$6"
                    },
                    children: (0, Ve.jsx)(si.J9, {
                        initialValues: {
                            username: (0, he.gg)("username")(n),
                            userPublicKey: (0, he.gg)("publicKey")(n)
                        },
                        onSubmit: s,
                        enableReinitialize: !n,
                        children: (0, Ve.jsx)(si.l0, {
                            children: (0, Ve.jsxs)(Le.Z, {
                                css: {
                                    gap: "$4"
                                },
                                children: [(0, Ve.jsx)(ai.Z, {
                                    name: "username",
                                    placeholder: "Username"
                                }), (0, Ve.jsx)(li.Z, {
                                    label: "Update username",
                                    submittingLabel: "Updating username\u2026",
                                    submittedLabel: "Username updated"
                                })]
                            })
                        })
                    })
                })
            }
            var di = n(13099),
                fi = "\n    mutation UpdateCreatorStatus($creatorStatus: Boolean!, $userPublicKey: String!) {\n  updateCreatorStatus(\n    updateCreatorStatus: $creatorStatus\n    userPublicKey: $userPublicKey\n  ) {\n    ...UserFragment\n  }\n}\n    ".concat(_t);

            function vi(e) {
                var t, n = e.user,
                    r = (0, d.useQueryClient)(),
                    i = (0, d.useMutation)((0, zt.CQ)(fi), t).mutateAsync,
                    o = function() {
                        var e = (0, fr.Z)(dr().mark((function e(t) {
                            return dr().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, i({
                                            userPublicKey: t.userPublicKey,
                                            creatorStatus: t.isApprovedCreator
                                        });
                                    case 2:
                                        return e.next = 4, r.refetchQueries(v.V.User);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, Ve.jsx)(Be.Z, {
                    css: {
                        padding: "$6"
                    },
                    children: (0, Ve.jsx)(si.J9, {
                        initialValues: {
                            isApprovedCreator: (0, mt.Z)(!1, "isApprovedCreator", n),
                            userPublicKey: (0, he.gg)("publicKey")(n)
                        },
                        onSubmit: o,
                        enableReinitialize: !n,
                        children: (0, Ve.jsx)(si.l0, {
                            children: (0, Ve.jsxs)(Le.Z, {
                                css: {
                                    gap: "$4"
                                },
                                children: [(0, Ve.jsx)(di.Z, {
                                    name: "isApprovedCreator",
                                    label: "Creator access",
                                    description: "Should this user have creator access?"
                                }), (0, Ve.jsx)(li.Z, {
                                    label: "Update access",
                                    submittingLabel: "Updating access\u2026",
                                    submittedLabel: "Access updated"
                                })]
                            })
                        })
                    })
                })
            }
            var pi = "\n    mutation RemoveUnusedInviteCodes($userPublicKey: String!) {\n  removeUnusedInviteCodes(userPublicKey: $userPublicKey) {\n    ...UserFragment\n  }\n}\n    ".concat(_t);

            function hi(e) {
                var t, n = e.user,
                    r = (0, d.useMutation)((0, zt.CQ)(pi), t).mutateAsync,
                    i = function() {
                        var e = (0, fr.Z)(dr().mark((function e(t) {
                            return dr().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!t.removeInvites) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.next = 3, r({
                                            userPublicKey: t.userPublicKey
                                        });
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, Ve.jsx)(Be.Z, {
                    css: {
                        padding: "$6"
                    },
                    children: (0, Ve.jsx)(si.J9, {
                        initialValues: {
                            userPublicKey: (0, he.gg)("publicKey")(n),
                            removeInvites: !1
                        },
                        onSubmit: i,
                        enableReinitialize: !n,
                        children: (0, Ve.jsx)(si.l0, {
                            children: (0, Ve.jsxs)(Le.Z, {
                                css: {
                                    gap: "$4"
                                },
                                children: [(0, Ve.jsx)(di.Z, {
                                    name: "removeInvites",
                                    label: "Remove invites",
                                    description: "Should this user\u2019s remaining invites be removed?"
                                }), (0, Ve.jsx)(li.Z, {
                                    label: "Remove invites",
                                    submittingLabel: "Removing invites\u2026",
                                    submittedLabel: "Invites removed"
                                })]
                            })
                        })
                    })
                })
            }
            var bi, mi = n(9170),
                gi = "\n    mutation UpdateCreatorMigration($userPublicKey: String!, $isApproved: Boolean!) {\n  updateUserIsApprovedForMigrationAt(\n    userPublicKey: $userPublicKey\n    isApproved: $isApproved\n  ) {\n    ...UserFragment\n  }\n}\n    ".concat(_t);

            function xi(e) {
                var t, n = e.user,
                    r = (0, d.useMutation)((0, zt.CQ)(gi), t).mutateAsync,
                    i = function() {
                        var e = (0, fr.Z)(dr().mark((function e(t) {
                            return dr().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!t.approveMigration) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.next = 3, r({
                                            userPublicKey: t.userPublicKey,
                                            isApproved: !0
                                        });
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, Ve.jsx)(Be.Z, {
                    css: {
                        padding: "$6"
                    },
                    children: (0, Ve.jsx)(si.J9, {
                        initialValues: {
                            userPublicKey: (0, he.gg)("publicKey")(n),
                            approveMigration: !1
                        },
                        onSubmit: i,
                        enableReinitialize: !n,
                        validationSchema: mi.Ry().shape({
                            approveMigration: mi.O7().oneOf([!0])
                        }),
                        children: (0, Ve.jsx)(si.l0, {
                            children: (0, Ve.jsxs)(Le.Z, {
                                css: {
                                    gap: "$4"
                                },
                                children: [(0, Ve.jsx)(di.Z, {
                                    name: "approveMigration",
                                    label: "Approve Creator Migration",
                                    description: "Approve this user to migrate their account?"
                                }), (0, Ve.jsx)(li.Z, {
                                    label: "Approve",
                                    submittingLabel: "Approving\u2026",
                                    submittedLabel: "Approved"
                                })]
                            })
                        })
                    })
                })
            }! function(e) {
                e.RemoveUsername = "Username", e.RemoveCreatorAccess = "Creator Access", e.RemoveInvites = "Invites", e.ApproveMigration = "Creator Migration"
            }(bi || (bi = {}));
            var yi = (0, yt.iv)({
                maxWidth: "580px !important",
                padding: "0px !important"
            })();

            function Zi(e) {
                var t = e.publicKey,
                    n = (0, r.useState)(bi.RemoveUsername),
                    i = n[0],
                    o = n[1],
                    s = (0, u.ZP)({
                        publicKey: t
                    }).data;
                return (0, Ve.jsx)(ei.Z, {
                    modalKey: He.$.ADMIN_TOOLS,
                    children: (0, Ve.jsxs)(oi.Z, {
                        className: yi.className,
                        children: [(0, Ve.jsx)(ni.Z, {
                            tabs: [{
                                onClick: function() {
                                    return o(bi.RemoveUsername)
                                },
                                isActive: i === bi.RemoveUsername,
                                children: bi.RemoveUsername
                            }, {
                                onClick: function() {
                                    return o(bi.RemoveCreatorAccess)
                                },
                                isActive: i === bi.RemoveCreatorAccess,
                                children: bi.RemoveCreatorAccess
                            }, {
                                onClick: function() {
                                    return o(bi.RemoveInvites)
                                },
                                isActive: i === bi.RemoveInvites,
                                children: bi.RemoveInvites
                            }, {
                                onClick: function() {
                                    return o(bi.ApproveMigration)
                                },
                                isActive: i === bi.ApproveMigration,
                                children: bi.ApproveMigration
                            }]
                        }), (0, Dt.Z)([
                            [(0, Mt.Z)(bi.RemoveUsername), (0, Ft.Z)((0, Ve.jsx)(ci, {
                                user: null === s || void 0 === s ? void 0 : s.user
                            }))],
                            [(0, Mt.Z)(bi.RemoveCreatorAccess), (0, Ft.Z)((0, Ve.jsx)(vi, {
                                user: null === s || void 0 === s ? void 0 : s.user
                            }))],
                            [(0, Mt.Z)(bi.RemoveInvites), (0, Ft.Z)((0, Ve.jsx)(hi, {
                                user: null === s || void 0 === s ? void 0 : s.user
                            }))],
                            [(0, Mt.Z)(bi.ApproveMigration), (0, Ft.Z)((0, Ve.jsx)(xi, {
                                user: null === s || void 0 === s ? void 0 : s.user
                            }))]
                        ])(i)]
                    })
                })
            }
            var wi = n(57079),
                ki = n(27261);

            function ji() {
                var e = (0, ki.Z)(["\n  mutation setProfileModerationStatus(\n    $publicKey: String!\n    $moderationStatus: UserModerationStatus!\n  ) {\n    updateUserModerationStatus(\n      userPublicKey: $publicKey\n      moderationStatus: $moderationStatus\n    ) {\n      moderationStatus\n    }\n  }\n"]);
                return ji = function() {
                    return e
                }, e
            }

            function Oi(e) {
                return Pi.apply(this, arguments)
            }

            function Pi() {
                return (Pi = (0, fr.Z)(dr().mark((function e(t) {
                    var n, r, i, o, s, a;
                    return dr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.id, r = t.moderationStatus, i = t.token, o = t.adminAddress, s = t.url, e.next = 3, fetch("/api/admin/moderate-profile", {
                                    method: "POST",
                                    body: JSON.stringify({
                                        id: n,
                                        moderationStatus: r,
                                        token: i,
                                        adminAddress: o,
                                        url: s
                                    }),
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                });
                            case 3:
                                if (!(a = e.sent).ok) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 7, a.json();
                            case 7:
                                return e.abrupt("return", e.sent);
                            case 8:
                                throw new Error("An error occurred at this endpoint");
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }(0, n(22527).ZP)(ji());
            var Ci = n(34056),
                Si = n(888),
                $i = (0, s.default)((function() {
                    return n.e(5906).then(n.bind(n, 15906))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [15906]
                        },
                        modules: ["[username]/index.tsx -> components/admin/ModerationBanner"]
                    }
                }),
                Ai = (0, s.default)((function() {
                    return n.e(7830).then(n.bind(n, 37655))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [37655]
                        },
                        modules: ["[username]/index.tsx -> components/modals/ChangeStatusAdminModal"]
                    }
                }),
                Ki = (0, s.default)((function() {
                    return n.e(3831).then(n.bind(n, 73831))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [73831]
                        },
                        modules: ["[username]/index.tsx -> components/modals/GiveInvitesAdminModal"]
                    }
                }),
                Ii = (0, s.default)((function() {
                    return Promise.all([n.e(5458), n.e(1291)]).then(n.bind(n, 55458))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [55458]
                        },
                        modules: ["[username]/index.tsx -> components/modals/ReportModal"]
                    }
                }),
                Ui = (0, s.default)((function() {
                    return n.e(4746).then(n.bind(n, 54746))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [54746]
                        },
                        modules: ["[username]/index.tsx -> components/profiles/ProfileFollowInfo"]
                    }
                }),
                Ei = !0;

            function Ri(e) {
                var t, n, s, b = e.user,
                    m = e.profileExists,
                    y = e.createdCount;
                (0, c.Z)();
                var w, k, O = (0, l.Z)(),
                    P = O.user,
                    C = O.isLoading,
                    S = null === P || void 0 === P ? void 0 : P.publicAddress,
                    $ = null === P || void 0 === P ? void 0 : P.token,
                    A = null === b || void 0 === b ? void 0 : b.publicKey,
                    K = (w = {
                        usernameOrPublicKey: A
                    }, k = {
                        initialData: e,
                        refetchOnWindowFocus: !1
                    }, (0, d.useQuery)([v.V.UserProfile, w], (function() {
                        return (0, f.XG)(w.usernameOrPublicKey)
                    }), k)).data,
                    I = (0, u.ZP)({
                        publicKey: S,
                        refetchOnWindowFocus: !1
                    }).data,
                    U = null === K || void 0 === K ? void 0 : K.user,
                    E = null !== (t = null === I || void 0 === I || null === (n = I.user) || void 0 === n ? void 0 : n.isAdmin) && void 0 !== t && t;
                (0, a.N)(null === U || void 0 === U ? void 0 : U.publicKey);
                var R = (0, _n.e0)(U),
                    V = (0, _n.qF)(null === U || void 0 === U ? void 0 : U.profileImageUrl, {
                        w: 350
                    }),
                    B = (0, g.KO)(null === U || void 0 === U ? void 0 : U.username),
                    L = (0, _n.UX)(null !== R && void 0 !== R ? R : V),
                    D = (0, g.sD)(null === U || void 0 === U ? void 0 : U.twitSocialVerifs),
                    M = (0, g.sD)(null === U || void 0 === U ? void 0 : U.instaSocialVerifs),
                    F = (0, x.yv)([S, null === U || void 0 === U ? void 0 : U.publicKey]),
                    _ = null === U || void 0 === U ? void 0 : U.moderationStatus,
                    z = (0, wi.y5)(_);
                if (z && !E && !F) return (0, ct.Z)(_);
                var N = F ? "Your profile is under review." : "This profile is under review.",
                    H = F ? "Your profile has been removed." : "This profile has been removed.";
                return (0, i.tZ)(r.Fragment, null, z && (E || F) && (0, i.tZ)($i, {
                    status: _,
                    reviewText: N,
                    suspendedText: H,
                    takedownText: ""
                }), E && (0, i.tZ)(r.Fragment, null, (0, i.tZ)(Zi, {
                    publicKey: A
                }), (0, i.tZ)(Ai, {
                    moderationStatus: _,
                    moderationFrom: "",
                    currentUserPublicAddress: S,
                    authToken: $,
                    entityId: A,
                    mutation: Oi,
                    dmcaEnabled: !1
                }), (0, i.tZ)(Ki, {
                    publicAddress: A,
                    token: $
                })), (0, i.tZ)(ii, {
                    publicKey: A,
                    currentUserPublicKey: S
                }), (0, i.tZ)(Ii, {
                    publicAddress: S,
                    authToken: $,
                    id: null === U || void 0 === U ? void 0 : U.publicKey,
                    type: Si.C.User
                }), (0, i.tZ)(o.xu, {
                    sx: {
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1
                    }
                }, (0, i.tZ)(p.Z, {
                    title: (0, x.dZ)(U),
                    description: (0, g.QC)(null === U || void 0 === U ? void 0 : U.bio),
                    image: L,
                    headerMode: R ? Ci.nr.dark : Ci.nr.light,
                    absolute: !0
                }, (0, i.tZ)(j, {
                    creator: U,
                    coverImage: R,
                    avatarBackground: (0, x.lu)(null !== (s = null === U || void 0 === U ? void 0 : U.userIndex) && void 0 !== s ? s : 0),
                    avatar: V,
                    meta: (0, i.tZ)(o.kC, {
                        sx: {
                            display: ["none", null, "flex"],
                            justifyContent: "flex-end",
                            position: "relative",
                            zIndex: 4,
                            transform: "translateY(-50%)"
                        }
                    }, (0, i.tZ)(Ut, {
                        publicKey: A,
                        currentUserPublicKey: S,
                        initialData: {
                            pages: [K.collectors],
                            pageParams: [0]
                        }
                    }))
                }), (0, i.tZ)(h.Z, {
                    sx: Vi
                }, (0, i.tZ)(o.xu, null, (0, i.tZ)(o.kC, {
                    sx: {
                        justifyContent: ["center", null, "flex-start"]
                    }
                }, (0, i.tZ)(T, {
                    publicKey: null === U || void 0 === U ? void 0 : U.publicKey,
                    userIndex: null === U || void 0 === U ? void 0 : U.userIndex
                })), (0, i.tZ)(o.rj, null, (0, i.tZ)(o.rj, {
                    gap: ["m", "l"]
                }, B && (0, i.tZ)(Z, {
                    user: U
                }), (0, i.tZ)(o.rj, {
                    gap: ["l", null, "xl"]
                }, (0, i.tZ)(o.rj, {
                    gap: "l"
                }, (0, i.tZ)(o.kC, {
                    sx: {
                        display: ["flex", null, "none"],
                        justifyContent: "center"
                    }
                }, (0, i.tZ)(Ut, {
                    publicKey: A,
                    currentUserPublicKey: S,
                    initialData: {
                        pages: [K.collectors],
                        pageParams: [0]
                    }
                })), m && (0, i.tZ)(Ui, {
                    publicKey: null === U || void 0 === U ? void 0 : U.publicKey,
                    currentUserPublicKey: S
                })), (0, i.tZ)(at, {
                    user: U,
                    currentUser: P,
                    twitterSocialVerification: D,
                    instagramSocialVerification: M,
                    sx: {
                        display: ["none", null, "block"]
                    }
                }))))), (0, i.tZ)(o.xu, null, (0, i.tZ)(Gr, {
                    publicKey: A,
                    currentUserPublicKey: S,
                    currentUserIsLoading: C,
                    user: U,
                    currentUser: P,
                    createdCount: y
                })), (0, i.tZ)(lt, {
                    user: U,
                    currentUser: P,
                    twitterSocialVerification: D,
                    instagramSocialVerification: M,
                    sx: {
                        display: ["block", null, "none"]
                    }
                })))))
            }
            var Vi = {
                flex: 1,
                display: "grid",
                gap: ["l", null, null, null, "xxl"],
                gridTemplateColumns: [null, null, "minmax(280px, 1fr) 3fr", null, "minmax(350px, 1fr) 3fr"]
            }
        },
        40189: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return i
                }
            });
            n(38918);
            var r = n(36765);

            function i(e) {
                var t, n = e.usedVotesData,
                    i = e.currentUser,
                    o = e.user,
                    s = null !== (t = null === n || void 0 === n ? void 0 : n.waitlistVotes) && void 0 !== t ? t : [],
                    a = s.length,
                    l = s.map((function(e) {
                        return e.userVoteFor
                    })),
                    u = (0, r.Vd)(i, a);
                return {
                    currentUserHasVoted: (0, r.pr)(o, s),
                    hasNoVotes: 0 === u,
                    usedVotes: s,
                    flattenedVotes: l,
                    usedVotesCount: a,
                    remainingVotesCount: u
                }
            }
        },
        93171: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/[username]", function() {
                return n(45472)
            }])
        },
        4706: function(e, t, n) {
            "use strict";

            function r(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        74047: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        52700: function(e, t, n) {
            "use strict";

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function i(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), e
            }
            n.d(t, {
                Z: function() {
                    return i
                }
            })
        },
        20775: function(e, t, n) {
            "use strict";

            function r(e) {
                return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        8127: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return (r = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function i(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && r(e, t)
            }
            n.d(t, {
                Z: function() {
                    return i
                }
            })
        },
        44102: function(e, t, n) {
            "use strict";

            function r(e) {
                return (r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var i = n(4706);

            function o(e, t) {
                return !t || "object" !== r(t) && "function" !== typeof t ? (0, i.Z)(e) : t
            }
        },
        35064: function(e, t, n) {
            "use strict";
            var r = n(80891),
                i = (0, n(12338).Z)(r.Z, 0);
            t.Z = i
        },
        2414: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var r = n(67294),
                i = 0,
                o = {},
                s = function(e, t) {
                    void 0 === t && (t = 0);
                    var n = (0, r.useRef)((function() {}));
                    (0, r.useEffect)((function() {
                        n.current = e
                    })), (0, r.useEffect)((function() {
                        if (null !== t) {
                            var e = function(e, t) {
                                var n, r = i++;
                                if (o[t]) o[t].listeners[r] = e;
                                else {
                                    var s = setInterval((function() {
                                        for (var e, n = o[t].listeners, r = !1, i = 0, s = Object.values(n); i < s.length; i++) {
                                            var a = s[i];
                                            try {
                                                a()
                                            } catch (l) {
                                                r = !0, e = l
                                            }
                                        }
                                        if (r) throw e
                                    }), t);
                                    o[t] = {
                                        ms: t,
                                        timer: s,
                                        listeners: (n = {}, n[r] = e, n)
                                    }
                                }
                                return {
                                    bucket: o[t],
                                    id: r
                                }
                            }((function() {
                                return n.current()
                            }), t);
                            return function() {
                                return function(e) {
                                    var t = e.bucket,
                                        n = e.id;
                                    delete t.listeners[n];
                                    var r = !1;
                                    for (var i in t.listeners) {
                                        r = !0;
                                        break
                                    }
                                    r || (clearInterval(t.timer), delete o[t.ms])
                                }(e)
                            }
                        }
                    }), [t])
                }
        },
        74586: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var r = n(67294),
                i = function(e) {
                    (0, r.useEffect)(e, [])
                },
                o = function(e) {
                    var t = (0, r.useRef)(e);
                    t.current = e, i((function() {
                        return function() {
                            return t.current()
                        }
                    }))
                },
                s = function(e) {
                    var t = (0, r.useRef)(0),
                        n = (0, r.useState)(e),
                        i = n[0],
                        s = n[1],
                        a = (0, r.useCallback)((function(e) {
                            cancelAnimationFrame(t.current), t.current = requestAnimationFrame((function() {
                                s(e)
                            }))
                        }), []);
                    return o((function() {
                        cancelAnimationFrame(t.current)
                    })), [i, a]
                }
        },
        14679: function(e, t, n) {
            "use strict";

            function r(e, t, n, r) {
                if (void 0 === n && (n = function() {}), void 0 === r && (r = {}), !e) throw new Error("Target element to observe should be a valid DOM Node");
                var i = Object.assign({}, {
                        viewport: null,
                        modTop: "0px",
                        modRight: "0px",
                        modBottom: "0px",
                        modLeft: "0px",
                        threshold: [0]
                    }, r),
                    o = i.viewport,
                    s = i.modTop,
                    a = i.modLeft,
                    l = i.modBottom,
                    u = i.modRight,
                    c = i.threshold;
                if (!Array.isArray(c) && "number" != typeof c) throw new Error("threshold should be a number or an array of numbers");
                var d = Array.isArray(c) ? c.map((function(e) {
                        return Math.floor(e % 101) / 100
                    })) : [Math.floor(c ? c % 101 : 0) / 100],
                    f = Math.min.apply(Math, d),
                    v = {
                        root: o instanceof Node ? o : null,
                        rootMargin: s + " " + u + " " + l + " " + a,
                        threshold: d
                    },
                    p = new IntersectionObserver((function(r, i) {
                        var o = r.filter((function(t) {
                                return t.target === e
                            }))[0],
                            s = function() {
                                return i.unobserve(e)
                            };
                        o && (o.isInViewport = o.isIntersecting && o.intersectionRatio >= f, o.isInViewport ? t(o, s, e) : n(o, s, e))
                    }), v);
                return p.observe(e),
                    function() {
                        return p.unobserve(e)
                    }
            }
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var i = n(67294);

            function o(e) {
                return "object" == typeof e && "current" in e
            }

            function s(e) {
                return "function" == typeof e && "function" == typeof e.call
            }

            function a(e) {
                void 0 === e && (e = {});
                var t = (0, i.useState)(null),
                    n = t[0],
                    a = t[1],
                    l = e.target,
                    u = e.viewport,
                    c = function(e, t) {
                        var n = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && -1 === t.indexOf(r) && (n[r] = e[r]);
                        return n
                    }(e, ["target", "viewport"]),
                    d = (0, i.useRef)(null),
                    f = (0, i.useRef)(null),
                    v = (0, i.useCallback)((function(e) {
                        d.current = e, u && (s(u) ? u(e) : o(u) && (u.current = e))
                    }), [d, u]),
                    p = (0, i.useCallback)((function(e) {
                        f.current = e, l && (s(l) ? l(e) : o(l) && (l.current = e))
                    }), [f, l]);
                return (0, i.useEffect)((function() {
                    if (f.current) return r(f.current, (function() {
                        return a(!0)
                    }), (function() {
                        return a(!1)
                    }), Object.assign({}, c, {
                        viewport: d.current
                    }))
                }), [f.current, c, d]), [n, p, v]
            }
        }
    },
    function(e) {
        e.O(0, [9351, 5132, 6870, 6624, 745, 724, 6019, 9536, 4774, 2359, 2003, 8312, 6852, 6406, 1796, 9774, 2888, 179], (function() {
            return t = 93171, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);
//# sourceMappingURL=[username]-637c76c54d2c56a32ccb.js.map