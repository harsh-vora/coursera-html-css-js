(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2726], {
        72454: function(t, n, r) {
            "use strict";
            var e, i, a, o = r(67294);

            function u() {
                return (u = Object.assign || function(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e])
                    }
                    return t
                }).apply(this, arguments)
            }
            n.Z = function(t) {
                return o.createElement("svg", u({
                    viewBox: "0 0 23 27",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, t), e || (e = o.createElement("path", {
                    d: "M18.25 14.625H16V7.312a4.5 4.5 0 10-9 0v7.313H4.75V7.312a6.75 6.75 0 0113.5 0v7.313z",
                    fill: "#C8C8C8"
                })), i || (i = o.createElement("path", {
                    d: "M20.5 11.25h-18a1.687 1.687 0 00-1.688 1.688V24.75A1.687 1.687 0 002.5 26.438h18a1.687 1.687 0 001.688-1.688V12.937A1.687 1.687 0 0020.5 11.25z",
                    fill: "#22D65F"
                })), a || (a = o.createElement("path", {
                    d: "M13.75 17.438a2.25 2.25 0 10-3.375 1.937V22.5a.562.562 0 00.563.563h1.124a.562.562 0 00.563-.563v-3.125a2.24 2.24 0 001.125-1.938z",
                    fill: "#F2F2F2"
                })))
            }
        },
        7534: function(t, n, r) {
            "use strict";
            var e, i, a = r(67294);

            function o() {
                return (o = Object.assign || function(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e])
                    }
                    return t
                }).apply(this, arguments)
            }
            n.Z = function(t) {
                return a.createElement("svg", o({
                    viewBox: "0 0 46 46",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, t), e || (e = a.createElement("path", {
                    d: "M23 46C10.318 46 0 35.683 0 23S10.318 0 23 0s23 10.317 23 23-10.318 23-23 23z",
                    fill: "#E86C60"
                })), i || (i = a.createElement("path", {
                    d: "M24.414 23l7.293-7.293a1 1 0 10-1.414-1.414L23 21.586l-7.293-7.293a1 1 0 10-1.414 1.414L21.586 23l-7.293 7.293a1 1 0 101.414 1.414L23 24.414l7.293 7.293a.997.997 0 001.414 0 1 1 0 000-1.414L24.414 23z",
                    fill: "#fff"
                })))
            }
        },
        54765: function(t, n, r) {
            "use strict";
            var e, i, a = r(67294);

            function o() {
                return (o = Object.assign || function(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e])
                    }
                    return t
                }).apply(this, arguments)
            }
            n.Z = function(t) {
                return a.createElement("svg", o({
                    viewBox: "0 0 46 44",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, t), e || (e = a.createElement("path", {
                    d: "M45.886 42.494l-22-42c-.345-.659-1.427-.659-1.771 0l-22 42A1 1 0 001 43.958h44a1 1 0 00.886-1.464z",
                    fill: "#EFD358"
                })), i || (i = a.createElement("path", {
                    d: "M22 16.958a1 1 0 012 0v13a1 1 0 01-2 0v-13zm1 21a2 2 0 11-.002-3.999 2 2 0 01.002 4z",
                    fill: "#fff"
                })))
            }
        },
        11319: function(t, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return m
                }
            });
            var e = r(67294),
                i = r(11191),
                a = r(61138),
                o = r(88767),
                u = r(79026),
                s = r(809),
                c = r.n(s),
                l = r(92447),
                d = r(63144),
                f = r.n(d),
                v = "https://api.coingecko.com/api/v3";

            function Z() {
                return (Z = (0, l.Z)(c().mark((function t(n, r) {
                    var e, i;
                    return c().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e = Object.assign({
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                }, r), t.next = 3, f()("".concat(v, "/").concat(n), e);
                            case 3:
                                return i = t.sent, t.next = 6, i.json();
                            case 6:
                                return t.abrupt("return", t.sent);
                            case 7:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function h() {
                var t, n = (0, o.useQuery)([u.V.ETHPrice], (function() {
                        return function(t, n) {
                            return Z.apply(this, arguments)
                        }("simple/price?vs_currencies=usd&ids=ethereum", null)
                    }), {
                        refetchOnMount: !1,
                        refetchOnWindowFocus: !1,
                        staleTime: 36e5
                    }),
                    r = n.data;
                return {
                    isLoading: n.isLoading,
                    price: null === r || void 0 === r || null === (t = r.ethereum) || void 0 === t ? void 0 : t.usd
                }
            }
            var p = r(42164);

            function m(t) {
                var n = t.amount,
                    r = h(),
                    o = r.price,
                    u = r.isLoading,
                    s = parseFloat(n);
                return u ? (0, i.tZ)(a.xv, {
                    as: "span",
                    sx: {
                        opacity: 0
                    }
                }, "\u2014") : (0, i.tZ)(e.Fragment, null, (0, p.MV)(s * o))
            }
        },
        75998: function(t, n, r) {
            "use strict";
            var e = r(96626),
                i = r(72694),
                a = (0, e.zo)(i.Z, {
                    fontFamily: "$body",
                    lineHeight: "$body",
                    fontSize: "$1",
                    variants: {
                        size: {
                            sub: {
                                fontSize: "$0"
                            },
                            regular: {
                                fontSize: "$1"
                            }
                        }
                    }
                });
            n.Z = a
        },
        52293: function(t, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return p
                }
            });
            var e, i, a = r(26265),
                o = r(32292),
                u = r(67294),
                s = r(11191),
                c = r(61138),
                l = r(745),
                d = r(51250);

            function f() {
                return (f = Object.assign || function(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e])
                    }
                    return t
                }).apply(this, arguments)
            }
            var v = function(t) {
                return u.createElement("svg", f({
                    viewBox: "0 0 18 27",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, t), e || (e = u.createElement("path", {
                    d: "M18 14.914L9.317 18.13.635 14.914 9.317.004 18 14.914z",
                    fill: "#fff"
                })), i || (i = u.createElement("path", {
                    d: "M17.62 16.706l-8.303 9.716-8.303-9.716 8.303 3.075 8.303-3.075z",
                    fill: "#fff",
                    fillOpacity: .74
                })))
            };

            function Z(t, n) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(t);
                    n && (e = e.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }))), r.push.apply(r, e)
                }
                return r
            }

            function h(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? Z(Object(r), !0).forEach((function(n) {
                        (0, a.Z)(t, n, r[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Z(Object(r)).forEach((function(n) {
                        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n))
                    }))
                }
                return t
            }

            function p(t) {
                var n = t.className,
                    r = t.name,
                    e = t.autoFocus,
                    i = (0, l.U$)(r),
                    a = (0, o.Z)(i, 1)[0],
                    d = (0, u.useMemo)(b, []),
                    f = d.container,
                    Z = d.input;
                return (0, s.tZ)(c.xu, {
                    sx: f
                }, (0, s.tZ)(c.kC, {
                    sx: {
                        backgroundColor: "black.100",
                        borderRadius: 17
                    }
                }, (0, s.tZ)(c.xu, null, (0, s.tZ)(c.II, h(h(h({}, a), t), {}, {
                    type: "number",
                    className: n,
                    sx: Z,
                    step: "any",
                    inputMode: "decimal",
                    autoFocus: e,
                    onWheel: function(t) {
                        return t.currentTarget.blur()
                    }
                }))), (0, s.tZ)(c.kC, {
                    sx: {
                        paddingX: "s",
                        alignItems: "center",
                        minWidth: 110,
                        flexShrink: 0
                    }
                }, (0, s.tZ)(c.xv, {
                    variant: "h.m",
                    sx: {
                        color: "white.100",
                        position: "relative",
                        top: -2,
                        marginRight: 10
                    }
                }, "ETH"), (0, s.tZ)(v, {
                    sx: {
                        display: "block",
                        flexShrink: 0
                    },
                    width: 18,
                    height: 27
                }))))
            }
            var m = "none",
                b = function() {
                    return {
                        container: {
                            position: "relative",
                            fontFamily: "mono",
                            fontSize: 46
                        },
                        input: {
                            border: "solid 4px",
                            borderColor: "rgba(255, 255, 255, 0)",
                            borderRadius: 16,
                            minHeight: 70,
                            padding: 0,
                            paddingX: "s",
                            fontFamily: "inherit",
                            fontSize: "inherit",
                            outline: "none",
                            boxShadow: "0 0 1px #ccc, 0px 10px 20px rgba(0, 0, 0, 0.05)",
                            transition: d.pB.smooth.fast,
                            MozAppearance: "textfield",
                            "&:focus": {
                                boxShadow: "m",
                                borderColor: "black.100"
                            },
                            "&::placeholder": {
                                color: "black.20"
                            },
                            "&::-webkit-outer-spin-button": {
                                appearance: m
                            },
                            "&::-webkit-inner-spin-button": {
                                appearance: m
                            }
                        }
                    }
                }
        },
        57228: function(t, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return a
                }
            });
            r(67294);
            var e = r(11191),
                i = r(61138);

            function a(t) {
                var n = t.children,
                    r = t.className;
                return (0, e.tZ)(i.zx, {
                    className: r,
                    sx: {
                        width: "100%",
                        color: "black.100",
                        bg: "black.10"
                    },
                    disabled: !0
                }, n)
            }
        },
        36281: function(t, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return o
                }
            });
            r(67294);
            var e = r(11191),
                i = r(61138),
                a = r(51250);

            function o(t) {
                var n = t.href,
                    r = t.children,
                    a = t.className,
                    o = t.variant,
                    s = void 0 === o ? "h.body" : o,
                    c = u();
                return (0, e.tZ)(i.rU, {
                    href: n,
                    rel: "noopener noreferrer",
                    target: "_blank"
                }, (0, e.tZ)(i.xv, {
                    variant: s,
                    sx: c.link,
                    className: a
                }, r))
            }
            var u = function() {
                return {
                    link: {
                        color: "black.60",
                        transition: a.pB.smooth.fast,
                        cursor: "pointer",
                        "@media (hover: hover)": {
                            "&:hover": {
                                color: "black.100"
                            }
                        }
                    }
                }
            }
        },
        42517: function(t, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return a
                }
            });
            r(67294);
            var e = r(11191),
                i = r(70394);

            function a(t) {
                var n = t.href,
                    r = t.children,
                    a = t.className,
                    o = t.target,
                    u = t.variant,
                    s = void 0 === u ? "h.body" : u;
                return (0, e.tZ)(i.Z, {
                    href: n,
                    className: a,
                    variant: s,
                    target: o,
                    sx: {
                        display: "inline"
                    }
                }, r)
            }
        },
        70394: function(t, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return u
                }
            });
            r(67294);
            var e = r(11191),
                i = r(61138),
                a = r(51250),
                o = r(75188);

            function u(t) {
                var n = t.href,
                    r = t.children,
                    a = t.className,
                    u = t.target,
                    c = t.variant,
                    l = void 0 === c ? "h.body" : c,
                    d = t.onClick,
                    f = s();
                return d ? (0, e.tZ)(i.xv, {
                    variant: l,
                    sx: f.link,
                    className: a,
                    onClick: d
                }, r) : (0, e.tZ)(o.ZP, {
                    href: n
                }, (0, e.tZ)("a", {
                    sx: {
                        textDecoration: "none"
                    },
                    className: a,
                    target: u
                }, (0, e.tZ)(i.xv, {
                    variant: l,
                    sx: f.link,
                    className: a
                }, r)))
            }
            var s = function() {
                return {
                    link: {
                        color: "black.60",
                        transition: a.pB.smooth.fast,
                        cursor: "pointer",
                        "@media (hover: hover)": {
                            "&:hover": {
                                color: "black.100"
                            }
                        }
                    }
                }
            }
        },
        69830: function(t, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return d
                }
            });
            var e = r(27261),
                i = r(67294),
                a = r(11191),
                o = r(61138),
                u = r(39418),
                s = r(41139),
                c = r(57033);

            function l() {
                var t = (0, e.Z)(["\n          .header-inner {\n            margin-bottom: 0;\n          }\n        "]);
                return l = function() {
                    return t
                }, t
            }

            function d() {
                return (0, a.tZ)(i.Fragment, null, (0, a.tZ)(u.xB, {
                    styles: (0, u.iv)(l())
                }), (0, a.tZ)(c.Z, {
                    title: "Waiting for confirmation\u2026",
                    description: (0, a.tZ)(o.xu, {
                        sx: {
                            maxWidth: 260
                        }
                    }, "Confirm this transaction in your wallet to continue.")
                }, (0, a.tZ)(o.kC, {
                    sx: {
                        marginX: ["auto", null, 0]
                    }
                }, (0, a.tZ)(s.Z, {
                    size: 62
                }))))
            }
        },
        3569: function(t, n, r) {
            "use strict";
            r.d(n, {
                q: function() {
                    return o
                }
            });
            r(67294);
            var e = r(11191),
                i = r(61138),
                a = r(57033);

            function o(t) {
                var n, r, o = t.error,
                    s = t.resetTransaction,
                    c = u();
                return "getAddress" === (null === o || void 0 === o ? void 0 : o.operation) && (r = "You need to enter your password in MetaMask first."), (0, e.tZ)(a.Z, {
                    title: "There was an error with your transaction.",
                    description: "There was an error with your transaction."
                }, (0, e.tZ)(i.rj, {
                    gap: "m"
                }, (0, e.tZ)(i.xu, {
                    sx: {
                        overflow: "scroll",
                        maxHeight: 220
                    }
                }, (0, e.tZ)(i.xv, {
                    variant: "body.body",
                    sx: c.error
                }, null !== (n = r) && void 0 !== n ? n : o.message.toString())), (0, e.tZ)(i.xu, {
                    sx: {
                        maxWidth: 300
                    }
                }, (0, e.tZ)(i.zx, {
                    onClick: s,
                    sx: {
                        width: "100%"
                    }
                }, "Retry"))))
            }
            var u = function() {
                return {
                    error: {
                        fontFamily: "mono",
                        color: "utility.red",
                        fontSize: "sub",
                        lineHeight: 1.75
                    }
                }
            }
        },
        74397: function(t, n, r) {
            "use strict";
            r.d(n, {
                zU: function() {
                    return e
                },
                vh: function() {
                    return i
                },
                Ht: function() {
                    return a
                }
            });
            var e = {
                    textAlign: ["center", null, "left"]
                },
                i = {
                    justifyContent: ["center", null, "flex-start"]
                },
                a = {
                    maxWidth: [null, null, 280],
                    width: "100%"
                }
        },
        20137: function(t, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return b
                }
            });
            var e = r(85893),
                i = r(96626),
                a = r(33559),
                o = r(56344),
                u = r(28330),
                s = r(72694),
                c = r(16174),
                l = r(75998),
                d = r(36281),
                f = r(72454),
                v = r(44559),
                Z = (0, i.zo)(a.Z, {
                    flexDirection: "column",
                    alignItems: "center",
                    maxWidth: 480,
                    marginX: "auto",
                    flex: 1
                }),
                h = (0, i.zo)(s.Z, {
                    fontSize: "$3",
                    letterSpacing: "-0.02em",
                    fontWeight: 600,
                    fontFamily: "$body",
                    textAlign: "center",
                    "@bp1": {
                        fontSize: "$4"
                    }
                }),
                p = (0, i.zo)(l.Z, {
                    marginX: "auto",
                    textAlign: "center"
                }),
                m = (0, i.zo)(c.Z, {
                    backgroundColor: "$black10",
                    paddingX: "$3",
                    paddingY: "$2",
                    fontFamily: "$body",
                    fontWeight: 600,
                    borderRadius: "$2"
                });

            function b(t) {
                var n = t.artwork;
                return (0, e.jsx)(v.Z, {
                    css: {
                        display: "flex",
                        flex: 1,
                        alignItems: "center"
                    },
                    children: (0, e.jsx)(Z, {
                        children: (0, e.jsxs)(u.Z, {
                            css: {
                                gap: "$5"
                            },
                            children: [(0, e.jsxs)(u.Z, {
                                css: {
                                    gap: "$7",
                                    justifyContent: "center"
                                },
                                children: [(0, e.jsx)(c.Z, {
                                    css: {
                                        marginX: "auto"
                                    },
                                    children: (0, e.jsx)(o.Z, {
                                        icon: f.Z,
                                        width: 48,
                                        height: 48
                                    })
                                }), (0, e.jsx)(h, {
                                    children: "This artwork has received a DMCA takedown notice."
                                })]
                            }), (0, e.jsxs)(u.Z, {
                                css: {
                                    gap: "$7"
                                },
                                children: [(0, e.jsxs)(u.Z, {
                                    css: {
                                        gap: "$4"
                                    },
                                    children: [(0, e.jsx)(p, {
                                        children: "Complaint submitted by"
                                    }), (0, e.jsx)(m, {
                                        css: {
                                            marginX: "auto"
                                        },
                                        children: null === n || void 0 === n ? void 0 : n.moderationFrom
                                    })]
                                }), (0, e.jsx)(a.Z, {
                                    css: {
                                        justifyContent: "center"
                                    },
                                    children: (0, e.jsx)(d.Z, {
                                        href: "https://help.foundation.app/en/articles/5151857-guide-digital-millennium-copyright-act-or-dmca",
                                        children: "Learn about the DMCA process \u2192"
                                    })
                                })]
                            })]
                        })
                    })
                })
            }
        },
        89543: function(t, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return s
                }
            });
            var e = r(67294),
                i = r(11191),
                a = r(62739),
                o = r(3907),
                u = r(14490);

            function s() {
                return (0, i.tZ)(a.Z, {
                    title: "This artwork has been permanently removed.",
                    description: (0, i.tZ)(e.Fragment, null, "This artwork was found to be in violation of the Foundation", " ", (0, i.tZ)(u.Z, null), " and has been permanently removed."),
                    icon: o.Z.Suspended
                })
            }
        },
        1459: function(t, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return s
                }
            });
            var e = r(67294),
                i = r(11191),
                a = r(62739),
                o = r(3907),
                u = r(14490);

            function s() {
                return (0, i.tZ)(a.Z, {
                    title: "This artwork is under review",
                    description: (0, i.tZ)(e.Fragment, null, "This artwork is currently under review by the Foundation team to ensure it has not violated the Foundation ", (0, i.tZ)(u.Z, null), "."),
                    icon: o.Z.UnderReview
                })
            }
        },
        62739: function(t, n, r) {
            "use strict";
            r.d(n, {
                h: function() {
                    return Z
                },
                Z: function() {
                    return h
                }
            });
            r(67294);
            var e = r(11191),
                i = r(61138),
                a = r(8598),
                o = r(29278),
                u = r(59211),
                s = r(3907),
                c = r(92931),
                l = r(56344),
                d = r(7534),
                f = r(54765),
                v = r(72454),
                Z = (0, a.Z)([
                    [(0, o.Z)(s.Z.Suspended), (0, u.Z)((0, e.tZ)(d.Z, {
                        sx: {
                            display: "block"
                        }
                    }))],
                    [(0, o.Z)(s.Z.UnderReview), (0, u.Z)((0, e.tZ)(f.Z, {
                        sx: {
                            display: "block"
                        }
                    }))],
                    [(0, o.Z)(s.Z.TakedownRequested), (0, u.Z)((0, e.tZ)(l.Z, {
                        icon: v.Z,
                        width: 22,
                        height: 26
                    }))]
                ]);

            function h(t) {
                var n = t.title,
                    r = t.description,
                    a = t.icon;
                return (0, e.tZ)(c.Z, {
                    sx: {
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }, (0, e.tZ)(i.xu, null, (0, e.tZ)(i.rj, {
                    gap: "l"
                }, (0, e.tZ)(i.kC, {
                    sx: {
                        width: 46,
                        mx: "auto"
                    }
                }, Z(a)), (0, e.tZ)(i.rj, {
                    gap: "m"
                }, (0, e.tZ)(i.X6, {
                    variant: "h.m",
                    sx: {
                        textAlign: "center",
                        maxWidth: 440,
                        marginX: "auto"
                    }
                }, n), (0, e.tZ)(i.xv, {
                    variant: "body.body",
                    sx: {
                        textAlign: "center",
                        maxWidth: 340,
                        marginX: "auto"
                    }
                }, r)))))
            }
        },
        14490: function(t, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return a
                }
            });
            r(67294);
            var e = r(11191),
                i = r(42517);

            function a() {
                return (0, e.tZ)(i.Z, {
                    href: "/terms"
                }, "Terms of Service")
            }
        },
        92721: function(t, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return p
                }
            });
            var e = r(809),
                i = r.n(e),
                a = r(92447),
                o = r(27261),
                u = r(22527),
                s = r(88767),
                c = r(90035),
                l = r(79026),
                d = r(36765),
                f = r(3761);

            function v() {
                var t = (0, o.Z)(["\n  query getUserSocialVerifications($publicKey: String!) {\n    socialVerifications: social_verification(\n      where: { user: { _eq: $publicKey }, isValid: { _eq: true } }\n    ) {\n      ...HasuraSocialVerificationFragment\n    }\n  }\n  ", "\n"]);
                return v = function() {
                    return t
                }, t
            }
            var Z = (0, u.ZP)(v(), f._d);

            function h() {
                return (h = (0, a.Z)(i().mark((function t(n) {
                    var r, e;
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = n.publicKey, e = (0, c.ot)(), t.next = 4, e.request(Z, {
                                    publicKey: (0, d.Qf)(r)
                                });
                            case 4:
                                return t.abrupt("return", t.sent);
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function p(t) {
                var n = t.publicKey,
                    r = t.refetchOnWindowFocus,
                    e = void 0 !== r && r;
                return (0, s.useQuery)([l.V.SocialVerifications, n], (function() {
                    return function(t) {
                        return h.apply(this, arguments)
                    }({
                        publicKey: n
                    })
                }), {
                    enabled: Boolean(n),
                    refetchOnWindowFocus: e
                })
            }
        },
        28542: function(t, n, r) {
            "use strict";
            r.d(n, {
                iN: function() {
                    return s
                }
            });
            var e = r(46829),
                i = r(3907),
                a = (r(15903), r(36561)),
                o = r(38918),
                u = r(57079);

            function s(t) {
                var n = t.tokenId,
                    r = t.excludeHidden,
                    s = void 0 !== r && r,
                    c = t.moderationStatuses,
                    l = void 0 === c ? [i.Z.Active] : c,
                    d = t.pollInterval,
                    f = t.skip,
                    v = (0, e.useQuery)(a.gt, {
                        variables: {
                            tokenIds: (0, o.C7)([n]),
                            excludeHidden: s,
                            moderationStatuses: l,
                            userModerationStatuses: (0, u.hX)(l)
                        },
                        skip: !n || f,
                        context: {
                            endpoint: "hasura"
                        },
                        pollInterval: d
                    }),
                    Z = v.data,
                    h = v.loading,
                    p = v.error;
                return {
                    data: {
                        artwork: (0, o.sD)(null === Z || void 0 === Z ? void 0 : Z.artworks)
                    },
                    loading: h,
                    error: p
                }
            }
        },
        88200: function(t, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return b
                }
            });
            var e = r(809),
                i = r.n(e),
                a = r(92447),
                o = r(27261),
                u = r(88767),
                s = r(22527),
                c = r(46897),
                l = r(64105),
                d = r(19660),
                f = r(38918),
                v = r(79026),
                Z = r(90035);

            function h() {
                var t = (0, o.Z)(["\n  query getArtworkHistory($addressPlusTokenId: String!) {\n    nft(id: $addressPlusTokenId) {\n      ...NftWithHistoryFragment\n    }\n  }\n  ", "\n"]);
                return h = function() {
                    return t
                }, t
            }
            var p = (0, s.ZP)(h(), c.Wx);

            function m() {
                return (m = (0, a.Z)(i().mark((function t(n) {
                    var r, e;
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = (0, l.L5)(n), e = (0, Z.Li)(), t.next = 4, e.request(p, {
                                    addressPlusTokenId: (0, d.fw)(r)
                                });
                            case 4:
                                return t.abrupt("return", t.sent);
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function b(t) {
                var n = t.tokenId,
                    r = t.enabled,
                    e = void 0 === r || r,
                    i = t.refetchInterval,
                    a = t.refetchOnWindowFocus,
                    o = void 0 !== a && a;
                return (0, u.useQuery)([v.V.ArtworkHistory, {
                    tokenId: n
                }], (function() {
                    return function(t) {
                        return m.apply(this, arguments)
                    }(n)
                }), {
                    enabled: (0, f.IE)([n, e]),
                    refetchInterval: i,
                    refetchOnWindowFocus: o
                })
            }
        },
        11677: function(t, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return u
                }
            });
            var e = r(11163),
                i = r(67294),
                a = r(64594),
                o = r(38918);

            function u() {
                var t = (0, e.useRouter)();
                (0, i.useEffect)((function() {
                    var n = new RegExp(/^[^@]/),
                        r = (0, o.sD)(t.query.username),
                        e = (0, a.UJ)(r);
                    if (n.test(r) && !e && t.isReady) {
                        var i = t.asPath.replace("/", "/@");
                        t.push(i, null, {
                            shallow: !0
                        })
                    }
                }), [t])
            }
        },
        50515: function(t, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return u
                },
                j: function() {
                    return s
                }
            });
            var e = r(11163),
                i = r(15857),
                a = r(20115),
                o = (0, i.Z)((0, a.Z)("/"), (function(t) {
                    return "/".concat(t)
                }));

            function u(t) {
                var n, r, i = (0, e.useRouter)(),
                    a = null === (n = i.query) || void 0 === n ? void 0 : n.username,
                    u = null === (r = i.query) || void 0 === r ? void 0 : r.slug;
                return "/".concat(a, "/").concat(u) + o(t)
            }

            function s(t) {
                var n, r = null === (n = (0, e.useRouter)().query) || void 0 === n ? void 0 : n.slug;
                return "/creator/".concat(r) + o(t)
            }
        },
        67796: function(t, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                default: function() {
                    return gt
                }
            });
            var e = r(67294),
                i = r(11191),
                a = r(11163),
                o = r(4878),
                u = r(88200),
                s = r(13787),
                c = r(95324),
                l = r(92721),
                d = r(28542),
                f = r(83748),
                v = r(26265),
                Z = r(809),
                h = r.n(Z),
                p = r(92447),
                m = r(61138),
                b = r(745);

            function g(t) {
                var n = t.amount,
                    r = t.onSubmit,
                    e = t.children,
                    a = t.schema;
                return (0, i.tZ)(b.J9, {
                    enableReinitialize: !0,
                    initialValues: {
                        amount: n
                    },
                    onSubmit: r,
                    validationSchema: a
                }, (0, i.tZ)(b.l0, {
                    sx: {
                        width: "100%"
                    }
                }, e))
            }
            var x = r(32292),
                w = r(57228);

            function y(t) {
                var n = t.name,
                    r = t.children,
                    e = t.className,
                    a = (0, b.U$)(n),
                    o = (0, x.Z)(a, 2)[1];
                return o.error ? (0, i.tZ)(w.Z, null, o.error) : (0, i.tZ)(m.zx, {
                    type: "submit",
                    className: e,
                    sx: {
                        width: "100%"
                    }
                }, r)
            }
            var k = r(67432),
                j = r(59211),
                O = r(11319),
                S = r(38918),
                A = (0, k.Z)(S.Qt, (0, j.Z)("0"));

            function P(t) {
                var n = (0, b.U$)(t),
                    r = (0, x.Z)(n, 1)[0];
                return (0, i.tZ)(m.xv, {
                    sx: {
                        color: "black.60"
                    },
                    variant: "h.body"
                }, (0, i.tZ)(O.Z, {
                    amount: A(r.value)
                }))
            }
            var C = r(52293);

            function T(t) {
                var n = t.balance,
                    r = t.onMaxClick,
                    e = t.formatter,
                    a = t.className,
                    o = $();
                return (0, i.tZ)(m.kC, {
                    sx: o.container,
                    className: a
                }, (0, i.tZ)(m.xv, {
                    variant: "h.body",
                    sx: {
                        color: "black.60"
                    }
                }, "Your Balance"), (0, i.tZ)(m.kC, {
                    sx: {
                        alignItems: "center",
                        minHeight: 26
                    }
                }, (0, i.tZ)(m.xv, {
                    variant: "h.xs"
                }, e(n)), r && (0, i.tZ)(m.zx, {
                    variant: "tiny",
                    type: "button",
                    sx: o.button,
                    onClick: r
                }, "Max")))
            }
            var $ = function() {
                    return {
                        container: {
                            borderRadius: 10,
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingLeft: "m",
                            paddingY: 20,
                            paddingRight: 20,
                            backgroundColor: "black.10"
                        },
                        button: {
                            borderWidth: 1,
                            fontSize: 10,
                            marginLeft: "xs"
                        }
                    }
                },
                z = r(36281);

            function F() {
                return (0, i.tZ)(z.Z, {
                    href: "https://help.foundation.app/en/articles/4742997-a-complete-guide-to-collecting-nfts-and-how-auctions-work",
                    sx: {
                        fontWeight: 600,
                        color: "black.60",
                        textAlign: "center"
                    },
                    variant: "body.body"
                }, "Learn how our auctions work.")
            }
            var I = r(74397);

            function M() {
                return (0, i.tZ)(m.rj, {
                    gap: 10
                }, (0, i.tZ)(m.xv, {
                    variant: "body.body"
                }, "Placing this bid will start a 24 hour auction for the artwork. Once a bid is placed, it cannot be withdrawn."), (0, i.tZ)(m.kC, {
                    sx: I.vh
                }, (0, i.tZ)(F, null)))
            }

            function E() {
                return (0, i.tZ)(m.rj, {
                    gap: 10
                }, (0, i.tZ)(m.xv, {
                    variant: "body.body"
                }, "Once a bid is placed, it cannot be withdrawn."), (0, i.tZ)(m.kC, {
                    sx: I.vh
                }, (0, i.tZ)(F, null)))
            }
            var R = r(69830),
                D = r(85893),
                q = r(57033),
                N = r(85010),
                B = r(75188),
                U = r(50515);

            function W() {
                var t = (0, U.Z)("/");
                return (0, D.jsx)(q.Z, {
                    title: "This creator\u2019s profile is missing social verification",
                    description: "Bids cannot be placed on artwork from a creator who has removed their social verification.",
                    children: (0, D.jsx)(B.ZP, {
                        href: t,
                        children: (0, D.jsx)(N.Z, {
                            color: "black",
                            size: "large",
                            shape: "regular",
                            as: "a",
                            css: {
                                width: 230
                            },
                            children: "Back to artwork"
                        })
                    })
                })
            }
            var H = r(42164);

            function L(t) {
                var n = t.minBidAmount,
                    r = void 0 === n ? "0" : n,
                    e = t.className;
                return (0, i.tZ)(m.rj, {
                    gap: 5,
                    className: e
                }, (0, i.tZ)(m.xv, {
                    variant: "h.xs",
                    sx: {
                        color: "black.60",
                        marginRight: "0.5ch"
                    }
                }, "You must bid at least"), (0, i.tZ)(m.xv, {
                    variant: "h.xs"
                }, (0, H.nk)(r)))
            }
            var _ = r(3569),
                V = r(42443),
                X = r(23107),
                K = r(50779),
                Y = r(45106),
                Q = r(36765),
                J = r(9170),
                G = (J.Ry().shape({
                    amount: J.Rx().min(.01, "Must be at least 0.01").nullable().max(3, "Can\u2019t be more than 3").required("Token amount is required")
                }), function(t) {
                    var n = t.min,
                        r = t.max;
                    return J.Ry().shape({
                        amount: J.Rx().transform((function(t, n) {
                            return (0, H.lp)(n)
                        })).min(n, "Your bid must be at least ".concat((0, H.nk)(n))).nullable().max(r, "You don\u2019t have enough ETH").required("Bid amount is required")
                    })
                }),
                tt = (J.Ry().shape({
                    amount: J.Rx().min(1, "Must be at least 1").nullable().max(500, "Can\u2019t be more than 500").required("Token amount is required")
                }), J.Ry().shape({
                    tokenId: J.Z_().required("Token id is required"),
                    publicAddress: J.Z_().length(42, "Incorrect length").matches(/^0x[a-fA-F0-9]{40}$/g, "Incorrect address"),
                    ownerAddress: J.nK().test("match", "Only the owner can accept bids", (function() {
                        return this.parent.publicAddress === this.parent.ownerAddress
                    })),
                    amount: J.Rx().transform((function(t, n) {
                        return (0, H.lp)(n)
                    })).min(0, "Bid amount must be at least 0").nullable().required("Bid amount is required")
                }), r(37251)),
                nt = r(61361);

            function rt(t, n) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(t);
                    n && (e = e.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }))), r.push.apply(r, e)
                }
                return r
            }

            function et(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? rt(Object(r), !0).forEach((function(n) {
                        (0, v.Z)(t, n, r[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : rt(Object(r)).forEach((function(n) {
                        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n))
                    }))
                }
                return t
            }

            function it(t) {
                var n, r, o, u, s = t.artwork,
                    c = t.balance,
                    l = t.socialVerifications,
                    d = t.auctionId,
                    f = t.user,
                    v = t.resetTransaction,
                    Z = (0, a.useRouter)(),
                    b = (0, X.Z)().setCurrentModal,
                    x = (0, e.useState)(null),
                    k = x[0],
                    j = x[1],
                    O = (0, S.KO)(l),
                    A = null === s || void 0 === s ? void 0 : s.mostRecentActiveAuction,
                    $ = null !== (n = null === A || void 0 === A ? void 0 : A.bids) && void 0 !== n ? n : [],
                    z = null === f || void 0 === f ? void 0 : f.publicAddress,
                    F = (0, S.KO)($),
                    D = (0, K.NX)(A),
                    q = (0, K.u8)(A),
                    N = (0, Q.yv)([z, null === s || void 0 === s || null === (r = s.ownedOrListedBy) || void 0 === r ? void 0 : r.id]),
                    B = (0, Q.yv)([z, null === A || void 0 === A || null === (o = A.highestBid) || void 0 === o || null === (u = o.bidder) || void 0 === u ? void 0 : u.id]),
                    J = (0, U.Z)("/bid/submitted"),
                    rt = (0, V.Z)({
                        method: nt.N.Bid
                    }),
                    it = rt.sendBidTransaction,
                    at = rt.isLoading,
                    ot = rt.isError,
                    ut = rt.error,
                    st = rt.isProviderLoading,
                    ct = (0, e.useCallback)(function() {
                        var t = (0, p.Z)(h().mark((function t(n) {
                            var r, e, i;
                            return h().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!st) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return", b(tt.$.AUTH_MAIN));
                                    case 2:
                                        return r = n.amount, e = {
                                            price: r,
                                            auctionId: d
                                        }, t.next = 6, it(e);
                                    case 6:
                                        if (i = t.sent, !(0, S.dd)(i)) {
                                            t.next = 12;
                                            break
                                        }
                                        return j(i), t.next = 12, Z.push({
                                            pathname: J,
                                            query: {
                                                txHash: i
                                            }
                                        });
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(n) {
                            return t.apply(this, arguments)
                        }
                    }(), [Z, J, d, it, st, b]);
                return O ? at || k ? (0, i.tZ)(R.Z, null) : ot && (0, Y.Ww)(ut) ? (0, i.tZ)(_.q, {
                    error: ut,
                    resetTransaction: v
                }) : (0, i.tZ)(m.rj, {
                    gap: "s"
                }, (0, i.tZ)(m.X6, {
                    variant: "h.l",
                    sx: et(et({}, I.vh), I.zU)
                }, "Place a bid"), (0, i.tZ)(g, {
                    amount: "",
                    onSubmit: ct,
                    schema: G({
                        min: D,
                        max: c
                    })
                }, (0, i.tZ)(m.rj, {
                    gap: "m"
                }, (0, i.tZ)(m.rj, {
                    gap: 10
                }, (0, i.tZ)(m.rj, {
                    gap: "m"
                }, (0, i.tZ)(L, {
                    minBidAmount: D,
                    sx: I.zU
                }), (0, i.tZ)(C.Z, {
                    name: "amount",
                    placeholder: "0",
                    autoFocus: !0
                })), (0, i.tZ)(m.kC, null, (0, i.tZ)(P, {
                    name: "amount"
                }))), (0, i.tZ)(m.rj, {
                    gap: ["m", null, "l"]
                }, (0, i.tZ)(T, {
                    balance: c,
                    formatter: H.Bt
                }), (0, i.tZ)(m.xu, {
                    sx: et(et({}, I.zU), {}, {
                        maxWidth: [320],
                        marginX: ["auto", null, 0]
                    })
                }, F ? (0, i.tZ)(E, null) : (0, i.tZ)(M, null)), (0, i.tZ)(m.xu, {
                    sx: {
                        maxWidth: [null, null, 320],
                        width: "100%"
                    }
                }, N ? (0, i.tZ)(w.Z, null, "You\u2019re the owner of this artwork") : B ? (0, i.tZ)(w.Z, null, "You\u2019re the highest bidder") : q ? (0, i.tZ)(y, {
                    name: "amount"
                }, "Place bid") : (0, i.tZ)(w.Z, null, "This artwork isn\u2019t listed yet")))))) : (0, i.tZ)(W, null)
            }
            var at = r(41139),
                ot = r(12138),
                ut = r(8598),
                st = r(29278),
                ct = r(33287),
                lt = r(3907),
                dt = r(89543),
                ft = r(1459),
                vt = r(20137),
                Zt = (0, ut.Z)([
                    [function(t) {
                        return (0, st.Z)(t.moderationStatus, lt.Z.Suspended)
                    }, (0, j.Z)((0, i.tZ)(dt.Z, null))],
                    [function(t) {
                        return (0, st.Z)(t.moderationStatus, lt.Z.UnderReview)
                    }, (0, j.Z)((0, i.tZ)(ft.Z, null))],
                    [function(t) {
                        return (0, st.Z)(t.moderationStatus, lt.Z.TakedownRequested)
                    }, function(t) {
                        return (0, i.tZ)(vt.Z, {
                            artwork: t
                        })
                    }],
                    [ct.Z, function() {
                        return null
                    }]
                ]),
                ht = r(38859),
                pt = r(57079),
                mt = r(32624),
                bt = r(11677);

            function gt() {
                var t, n, r;
                (0, bt.Z)();
                var f = (0, a.useRouter)(),
                    v = (0, c.Z)(),
                    Z = v.user,
                    h = v.isLoading,
                    p = (0, e.useState)(Date.now()),
                    m = p[0],
                    b = p[1],
                    g = (0, s.Z)(),
                    x = g.data,
                    w = g.isLoading,
                    y = (0, S.sD)(f.query.slug),
                    k = (0, ht.M$)(y),
                    j = (0, u.Z)({
                        tokenId: k
                    }),
                    O = j.data,
                    A = j.isLoading,
                    P = null === O || void 0 === O ? void 0 : O.nft,
                    C = null === P || void 0 === P || null === (t = P.mostRecentActiveAuction) || void 0 === t ? void 0 : t.auctionId,
                    T = (0, d.iN)({
                        tokenId: k,
                        moderationStatuses: mt.zv
                    }),
                    $ = T.data,
                    z = T.loading,
                    F = null === P || void 0 === P || null === (n = P.creator) || void 0 === n ? void 0 : n.id,
                    I = (0, l.Z)({
                        publicKey: F
                    }),
                    M = I.data,
                    E = I.isLoading,
                    R = null !== (r = null === M || void 0 === M ? void 0 : M.socialVerifications) && void 0 !== r ? r : [],
                    D = null === $ || void 0 === $ ? void 0 : $.artwork,
                    q = (0, pt.rF)(D).isModerated,
                    N = [w, A, z, h, E];
                return (0, o.Z)(Boolean, N) ? (0, i.tZ)(at.Z, {
                    size: 44
                }) : Z ? q ? Zt(P) : (0, i.tZ)(it, {
                    key: m,
                    artwork: P,
                    balance: x,
                    socialVerifications: R,
                    auctionId: C,
                    user: Z,
                    resetTransaction: function() {
                        b(Date.now())
                    }
                }) : (0, i.tZ)(ot.Z, null)
            }
            gt.getLayout = (0, f.y)({
                title: "Bid on",
                buildTitle: function(t) {
                    return t ? "Bid on ".concat(t.name) : "Bid on"
                }
            })
        },
        15903: function(t, n, r) {
            "use strict";
            r.d(n, {
                JY: function() {
                    return f
                },
                FJ: function() {
                    return v
                },
                cF: function() {
                    return Z
                }
            });
            var e = r(27261),
                i = r(22527),
                a = r(12416);

            function o() {
                var t = (0, e.Z)(["\n  mutation deleteDraftArtwork($id: String!) {\n    deleteDraftArtwork(id: $id) {\n      ...ArtworkFragment\n    }\n  }\n  ", "\n"]);
                return o = function() {
                    return t
                }, t
            }

            function u() {
                var t = (0, e.Z)(["\n  mutation setDraftArtworkToMinting($id: String!, $mintTxHash: String!) {\n    setDraftArtworkToMinting(id: $id, mintTxHash: $mintTxHash) {\n      ...ArtworkFragmentPrivate\n    }\n  }\n  ", "\n"]);
                return u = function() {
                    return t
                }, t
            }

            function s() {
                var t = (0, e.Z)(["\n  mutation updateDraftArtwork($data: UpdateDraftArtworkInput!) {\n    updateDraftArtwork(data: $data) {\n      ...ArtworkFragmentPrivate\n    }\n  }\n  ", "\n"]);
                return s = function() {
                    return t
                }, t
            }

            function c() {
                var t = (0, e.Z)(["\n  mutation createArtwork($data: CreateArtworkInput!) {\n    createArtwork(data: $data) {\n      ...ArtworkFragmentPrivate\n    }\n  }\n  ", "\n"]);
                return c = function() {
                    return t
                }, t
            }

            function l() {
                var t = (0, e.Z)(["\n  query artworkDownloadableUrl($id: String!) {\n    artwork: artworkDownloadableUrl(id: $id) {\n      downloadableUrl\n    }\n  }\n"]);
                return l = function() {
                    return t
                }, t
            }

            function d() {
                var t = (0, e.Z)(["\n  query artworkDownloadableUrlByTokenId($tokenId: String!) {\n    artwork: artworkDownloadableUrlByTokenId(tokenId: $tokenId) {\n      downloadableUrl\n    }\n  }\n"]);
                return d = function() {
                    return t
                }, t
            }(0, i.ZP)(d()), (0, i.ZP)(l());
            var f = (0, i.ZP)(c(), a.Sy),
                v = (0, i.ZP)(s(), a.Sy),
                Z = (0, i.ZP)(u(), a.Sy);
            (0, i.ZP)(o(), a.vM)
        },
        45106: function(t, n, r) {
            "use strict";
            r.d(n, {
                Ww: function() {
                    return p
                }
            });
            var e = r(5479),
                i = r(11983),
                a = r(51826),
                o = r(57438),
                u = r(97716),
                s = r(68981),
                c = r(35064),
                l = r(67432),
                d = r(59045),
                f = r(24402),
                v = r(18865),
                Z = r(30601),
                h = r(38918),
                p = ((0, e.Z)(i.Z, a.Z, (0, o.Z)(u.Z), (0, s.Z)(h.gg)), (0, e.Z)(c.Z, (0, s.Z)(h.gg)), (0, l.Z)(h.KO, (0, e.Z)(d.Z, (0, f.Z)([(0, v.Z)("MetaMask Tx Signature: User denied transaction signature."), (0, v.Z)("User rejected request"), (0, v.Z)("User rejected the transaction")]), (0, Z.Z)("message"))))
        },
        63144: function(t) {
            "use strict";
            var n = self.fetch.bind(self);
            t.exports = n, t.exports.default = t.exports
        },
        46162: function(t, n, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/[username]/[slug]/bid", function() {
                return r(67796)
            }])
        },
        57438: function(t, n, r) {
            "use strict";
            var e = (0, r(81353).Z)((function(t, n) {
                return Array.prototype.slice.call(n, 0).sort((function(n, r) {
                    var e = t(n),
                        i = t(r);
                    return e < i ? -1 : e > i ? 1 : 0
                }))
            }));
            n.Z = e
        },
        35064: function(t, n, r) {
            "use strict";
            var e = r(80891),
                i = (0, r(12338).Z)(e.Z, 0);
            n.Z = i
        }
    },
    function(t) {
        t.O(0, [9351, 5132, 6870, 6624, 745, 9776, 6019, 9536, 4774, 2359, 2003, 6839, 2923, 4017, 9774, 2888, 179], (function() {
            return n = 46162, t(t.s = n);
            var n
        }));
        var n = t.O();
        _N_E = n
    }
]);
//# sourceMappingURL=bid-0b9eb40974601031f09e.js.map