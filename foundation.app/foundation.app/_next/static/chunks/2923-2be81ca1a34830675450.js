(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2923], {
        5186: function(t, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return b
                }
            });
            var e = r(26265),
                i = (r(67294), r(11191)),
                o = r(61138),
                a = r(6381),
                c = r(79640),
                u = r(21056),
                s = r(31621),
                l = r(3101),
                p = r(83673),
                d = r(19896),
                f = r(71522),
                g = r(6396);

            function v(t, n) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(t);
                    n && (e = e.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }))), r.push.apply(r, e)
                }
                return r
            }

            function Z(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? v(Object(r), !0).forEach((function(n) {
                        (0, e.Z)(t, n, r[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(n) {
                        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n))
                    }))
                }
                return t
            }

            function b(t) {
                var n = t.artwork,
                    r = t.creator,
                    e = (0, u.v3)();
                if (!n) return (0, i.tZ)(s.W, null);
                var v = (0, c.g4)(n),
                    b = (0, c.AI)(n),
                    m = (0, c.pS)(n);
                return (0, i.tZ)(o.xu, {
                    sx: Z(Z({}, e.card), {}, {
                        pointerEvents: a.SE
                    })
                }, (0, i.tZ)(o.xu, {
                    sx: {
                        position: "relative"
                    }
                }, (0, i.tZ)(g.Z, {
                    isVisible: m,
                    sx: {
                        top: "m",
                        left: "m"
                    }
                }), (0, i.tZ)(l.Z, {
                    assetUrl: v,
                    posterUrl: b
                })), (0, i.tZ)(d.Z, null, (0, i.tZ)(p.Z, null, n.name), (0, i.tZ)(f.Z, {
                    user: r,
                    sx: {
                        marginTop: "auto"
                    }
                })))
            }
        },
        6396: function(t, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return p
                }
            });
            var e = r(26265),
                i = (r(67294), r(11191)),
                o = r(61138),
                a = r(53869),
                c = r(17757),
                u = r(41139);

            function s(t, n) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(t);
                    n && (e = e.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }))), r.push.apply(r, e)
                }
                return r
            }

            function l(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? s(Object(r), !0).forEach((function(n) {
                        (0, e.Z)(t, n, r[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(n) {
                        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n))
                    }))
                }
                return t
            }

            function p(t) {
                var n = t.className,
                    r = t.isVisible,
                    e = {
                        tag: {
                            backgroundColor: "black.100",
                            color: "white.100",
                            borderRadius: "9999px",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            lineHeight: 1,
                            display: "flex",
                            paddingRight: "s",
                            alignItems: "center",
                            zIndex: 9
                        },
                        indicator: {
                            backgroundColor: "red.100",
                            height: "1rem",
                            width: "1rem",
                            margin: "0.5rem",
                            borderRadius: "9999px",
                            marginRight: "xs"
                        }
                    };
                return (0, i.tZ)(a.M, null, r && (0, i.tZ)(c.E.div, {
                    sx: l(l({}, e.tag), {}, {
                        paddingY: 9,
                        paddingX: 10
                    }),
                    className: n,
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: [1, 0, 0],
                        y: -20
                    },
                    transition: {
                        duration: .35,
                        type: "spring"
                    }
                }, (0, i.tZ)(o.xu, null, (0, i.tZ)(u.Z, {
                    size: 14
                })), (0, i.tZ)(o.xv, {
                    variant: "h.body",
                    sx: {
                        marginLeft: "xs"
                    }
                }, "Processing\u2026")))
            }
        },
        83748: function(t, n, r) {
            "use strict";
            r.d(n, {
                y: function() {
                    return w
                }
            });
            var e = r(26265),
                i = r(27261),
                o = r(67294),
                a = r(11191),
                c = r(39418),
                u = r(11163),
                s = r(77887),
                l = r(33949),
                p = r(59536),
                d = r(61099),
                f = r(65038),
                g = r(34056),
                v = r(27284),
                Z = r(38918),
                b = r(38859);

            function m(t, n) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(t);
                    n && (e = e.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }))), r.push.apply(r, e)
                }
                return r
            }

            function x(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? m(Object(r), !0).forEach((function(n) {
                        (0, e.Z)(t, n, r[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach((function(n) {
                        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n))
                    }))
                }
                return t
            }

            function y() {
                var t = (0, i.Z)(["\n  body {\n    background-color: #f2f2f2;\n  }\n  .tab-navigation {\n    display: none;\n  }\n"]);
                return y = function() {
                    return t
                }, t
            }
            var h = (0, c.iv)(y());

            function O(t) {
                var n = t.children,
                    r = t.title,
                    e = t.buildTitle,
                    i = t.currentStep,
                    m = t.navigationSteps,
                    x = (0, u.useRouter)(),
                    y = j(),
                    O = (0, Z.sD)(x.query.slug),
                    w = (0, b.M$)(O),
                    k = (0, Z.KO)(m),
                    P = (0, s.Z)({
                        tokenId: w
                    }).data;
                return (0, l.Z)(i), (0, a.tZ)(o.Fragment, null, (0, a.tZ)(c.xB, {
                    styles: h
                }), (0, a.tZ)(p.Z, {
                    type: g.c7.auth,
                    title: e ? e(P) : r
                }, k && (0, a.tZ)(d.Z, {
                    sx: y.navigation,
                    navigationSteps: m
                }), (0, a.tZ)(f.Z, {
                    artwork: P,
                    cardVariant: v.T.default
                }, n)))
            }

            function w(t) {
                var n = t.title,
                    r = t.buildTitle,
                    e = t.currentStep,
                    i = t.navigationSteps;
                return function(t, o) {
                    return (0, a.tZ)(O, x(x({}, o), {}, {
                        title: n,
                        buildTitle: r,
                        currentStep: e,
                        navigationSteps: i
                    }), t)
                }
            }
            var j = function() {
                return {
                    container: {
                        flexDirection: "column",
                        flex: "auto",
                        paddingTop: ["xl", "xxxl"],
                        paddingBottom: ["xl", "xxxxl"]
                    },
                    navigation: {
                        paddingTop: ["m", null, "l", "xl"]
                    }
                }
            }
        },
        65038: function(t, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return d
                },
                T: function() {
                    return f
                }
            });
            r(67294);
            var e = r(11191),
                i = r(61138),
                o = r(94184),
                a = r.n(o),
                c = r(17757),
                u = r(5186),
                s = r(21056),
                l = r(92931),
                p = r(27284);

            function d(t) {
                var n = t.artwork,
                    r = t.children,
                    o = t.className,
                    l = t.cardVariant,
                    d = void 0 === l ? p.T.minimal : l,
                    f = g();
                return (0, e.tZ)(i.rj, {
                    sx: f.container,
                    className: a()({
                        className: o,
                        "transaction-container": !0
                    })
                }, (0, e.tZ)(c.E.div, {
                    key: "card",
                    layout: "position",
                    className: "transaction-card",
                    sx: {
                        display: ["none", null, "block"]
                    }
                }, (0, e.tZ)(i.xu, {
                    sx: f.panel
                }, d === p.T.minimal ? (0, e.tZ)(u.Z, {
                    artwork: n,
                    creator: null === n || void 0 === n ? void 0 : n.creator
                }) : (0, e.tZ)(s.ZP, {
                    artwork: n,
                    creator: null === n || void 0 === n ? void 0 : n.creator,
                    mostRecentActiveAuction: null === n || void 0 === n ? void 0 : n.mostRecentActiveAuction
                }))), (0, e.tZ)(i.xu, {
                    className: "transaction-content",
                    sx: {
                        paddingX: ["m", null, 0],
                        paddingBottom: ["l", null, 0]
                    }
                }, r))
            }

            function f(t) {
                var n = t.children,
                    r = t.className;
                return (0, e.tZ)(l.Z, {
                    className: r,
                    sx: {
                        display: "grid",
                        flex: "auto",
                        alignItems: "center",
                        maxWidth: 1080
                    }
                }, n)
            }
            var g = function() {
                return {
                    container: {
                        flex: 1,
                        flexDirection: "column",
                        alignItems: "center",
                        marginX: "auto",
                        gridTemplateColumns: [null, null, "340px 400px"],
                        gap: [0, null, "xxxl"],
                        display: ["flex", null, "grid"],
                        justifyContent: ["center", null, "flex-start"]
                    },
                    panel: {
                        maxWidth: [340, null, "none"]
                    }
                }
            }
        },
        61099: function(t, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return g
                },
                t: function() {
                    return v
                }
            });
            var e = r(27261),
                i = r(26265),
                o = (r(67294), r(11191)),
                a = r(61138),
                c = r(94184),
                u = r.n(c),
                s = r(39418),
                l = r(6381),
                p = r(51250),
                d = r(89087);

            function f() {
                var t = (0, e.Z)(["\n        .transaction-nav {\n          display: none;\n        }\n      "]);
                return f = function() {
                    return t
                }, t
            }

            function g(t) {
                var n, r = t.className,
                    e = t.navigationSteps,
                    c = e.length,
                    s = e.length - 1,
                    l = (0, d.Z)((function(t) {
                        return t.currentStep
                    })),
                    f = l - 1,
                    g = Math.round(f),
                    v = f / s * 100,
                    b = 1 === l,
                    m = Z({
                        stepCount: c
                    });
                return (0, o.tZ)(a.xu, {
                    sx: m.relative,
                    className: u()((n = {}, (0, i.Z)(n, r, !0), (0, i.Z)(n, "transaction-nav", !0), n))
                }, (0, o.tZ)(a.rj, {
                    sx: m.container
                }, (0, o.tZ)(a.xu, {
                    sx: m.progress
                }), (0, o.tZ)(a.xu, {
                    sx: m.rainbow,
                    style: {
                        width: b ? "calc(".concat(v, "% + 50px)") : "".concat(v, "%")
                    }
                })), (0, o.tZ)(a.rj, {
                    sx: m.steps
                }, e.map((function(t, n) {
                    var r = g === n;
                    return (0, o.tZ)(a.xu, {
                        key: n,
                        sx: m.step,
                        className: "step"
                    }, (0, o.tZ)(a.xv, {
                        variant: "h.body",
                        sx: {
                            color: r ? "black.100" : "black.50",
                            transition: p.pB.smooth.snail
                        }
                    }, (0, o.tZ)(a.xv, {
                        variant: "h.body",
                        as: "span"
                    }, t.name)))
                }))))
            }

            function v() {
                return (0, o.tZ)(s.xB, {
                    styles: (0, s.iv)(f())
                })
            }
            var Z = function(t) {
                var n = t.stepCount;
                return {
                    relative: {
                        position: l.Ep,
                        width: "100%",
                        maxWidth: 920,
                        marginX: "auto"
                    },
                    steps: {
                        position: l.vK,
                        top: "calc(100% + 24px)",
                        width: "100%",
                        gridTemplateColumns: "repeat(".concat(n, ", 1fr)"),
                        justifyContent: "space-between",
                        gridGap: 0,
                        "& > div:first-of-type": {
                            marginLeft: 0,
                            "& span": {
                                transform: "translateX(-50%)"
                            }
                        },
                        "& > div:last-of-type": {
                            marginRight: 0,
                            "& span": {
                                transform: "translateX(-50%)"
                            }
                        }
                    },
                    step: {
                        maxWidth: 120,
                        marginX: "auto",
                        textAlign: l.Iu,
                        color: "black.50"
                    },
                    container: {
                        boxShadow: "s",
                        backgroundColor: "white.100",
                        paddingY: "s",
                        paddingX: "m",
                        borderRadius: 999,
                        gridTemplateRows: "4px",
                        gridTemplateColumns: "1fr",
                        gridGap: 0
                    },
                    progress: {
                        gridColumn: "1/1",
                        gridRow: "1/1",
                        height: 4,
                        backgroundColor: "black.10",
                        borderRadius: 999,
                        width: "100%"
                    },
                    rainbow: {
                        gridColumn: "1/1",
                        gridRow: "1/1",
                        height: 4,
                        borderRadius: 999,
                        transition: p.pB.smooth.fast,
                        background: "linear-gradient(89.98deg, #76E650 0%, #F9D649 12.5%, #F08E35 25%, #EC5157 37.5%, #FF18BD 50%, #1A4BFF 62.5%, #62D8F9 75%, #76E650 87.5%)",
                        backgroundSize: "400px auto"
                    }
                }
            }
        },
        77887: function(t, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return a
                }
            });
            var e = r(88767),
                i = r(36839),
                o = r(79026);

            function a(t) {
                var n = t.tokenId,
                    r = t.refetchOnWindowFocus,
                    a = void 0 !== r && r,
                    c = t.refetchInterval,
                    u = void 0 !== c && c;
                return (0, e.useQuery)([o.V.ArtworkByTokenId, {
                    tokenId: n
                }], (function() {
                    return (0, i.SC)({
                        tokenId: n,
                        excludeHidden: !1
                    })
                }), {
                    enabled: Boolean(n),
                    refetchOnWindowFocus: a,
                    refetchInterval: u
                })
            }
        },
        33949: function(t, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return o
                }
            });
            var e = r(67294),
                i = r(89087);

            function o(t) {
                var n = (0, i.Z)((function(t) {
                    return t.setNavigationStep
                }));
                (0, e.useEffect)((function() {
                    n(t)
                }), [t, n])
            }
        },
        89087: function(t, n, r) {
            "use strict";
            var e = (0, r(14671).Z)((function(t) {
                return {
                    currentStep: 1,
                    setNavigationStep: function(n) {
                        return t({
                            currentStep: n
                        })
                    }
                }
            }));
            n.Z = e
        },
        67822: function(t, n, r) {
            "use strict";
            var e = r(69098),
                i = r(5537),
                o = r(5272),
                a = r(49405),
                c = r(13462),
                u = r(45596),
                s = (0, e.Z)((function t(n, r, e) {
                    if (0 === n.length) return r;
                    var s = n[0];
                    if (n.length > 1) {
                        var l = !(0, u.Z)(e) && (0, i.Z)(s, e) ? e[s] : (0, a.Z)(n[1]) ? [] : {};
                        r = t(Array.prototype.slice.call(n, 1), r, l)
                    }
                    if ((0, a.Z)(s) && (0, o.Z)(e)) {
                        var p = [].concat(e);
                        return p[s] = r, p
                    }
                    return (0, c.Z)(s, r, e)
                }));
            n.Z = s
        },
        34146: function(t, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return s
                }
            });
            var e = r(81353),
                i = r(69098),
                o = r(32087),
                a = r(5537),
                c = (0, i.Z)((function(t, n, r) {
                    var e, i = {};
                    for (e in n)(0, a.Z)(e, n) && (i[e] = (0, a.Z)(e, r) ? t(e, n[e], r[e]) : n[e]);
                    for (e in r)(0, a.Z)(e, r) && !(0, a.Z)(e, i) && (i[e] = r[e]);
                    return i
                })),
                u = (0, i.Z)((function t(n, r, e) {
                    return c((function(r, e, i) {
                        return (0, o.Z)(e) && (0, o.Z)(i) ? t(n, e, i) : n(r, e, i)
                    }), r, e)
                })),
                s = (0, e.Z)((function(t, n) {
                    return u((function(t, n, r) {
                        return n
                    }), t, n)
                }))
        }
    }
]);
//# sourceMappingURL=2923-2be81ca1a34830675450.js.map