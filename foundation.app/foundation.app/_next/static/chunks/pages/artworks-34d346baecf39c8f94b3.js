(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2586], {
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
        43302: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ft
                }
            });
            var r = n(85893),
                i = n(96374),
                o = n(2002),
                a = n(67294),
                s = n(11163),
                u = n(96626),
                c = n(59536),
                l = n(28330),
                f = n(80207),
                d = n(16174),
                m = n(26265),
                x = n(30693),
                p = n(33559),
                h = n(75188),
                v = n(71522),
                b = n(3101),
                g = n(83673),
                j = n(31621),
                y = n(95007),
                Z = n(79855),
                w = n(5479),
                O = n(72694);

            function $(e) {
                var t = e.formattedParts;
                return (0, r.jsx)(p.Z, {
                    children: t.map((function(e) {
                        var t = e.label,
                            n = e.shortLabel,
                            i = e.value;
                        return (0, r.jsx)(d.Z, {
                            css: {
                                marginRight: "$2"
                            },
                            children: (0, r.jsxs)(O.Z, {
                                css: {
                                    fontSize: "$2",
                                    fontWeight: 600,
                                    fontFamily: "$body"
                                },
                                children: [i, n]
                            })
                        }, t)
                    }))
                })
            }
            var P = n(68941),
                R = n(21717),
                k = n(42164),
                E = n(82720),
                S = (0, w.Z)(E.ws, y.Z, Z.Z);

            function C(e) {
                var t = e.auction,
                    n = e.artwork,
                    i = null === t || void 0 === t ? void 0 : t.status,
                    o = i === R.iy.CANCELED,
                    a = (0, P.Z)(S(null === t || void 0 === t ? void 0 : t.endsAt)),
                    s = a.countdownParts,
                    u = a.hasEnded;
                return !i || o ? (0, r.jsx)(N, {
                    children: (0, r.jsx)(I, {
                        label: "Reserve price",
                        value: "\u2014"
                    })
                }) : n.availability !== R.yS.LIVE_AUCTION && t.status === R.iy.OPEN ? (0, r.jsx)(N, {
                    children: (0, r.jsx)(I, {
                        label: "Reserve price",
                        value: (0, k.Bt)(t.currentPrice)
                    })
                }) : u || t.status === R.iy.FINALIZED ? (0, r.jsx)(N, {
                    children: (0, r.jsx)(I, {
                        label: "Sold for",
                        value: (0, k.Bt)(t.currentPrice)
                    })
                }) : n.availability === R.yS.LIVE_AUCTION ? (0, r.jsxs)(N, {
                    isLive: !0,
                    children: [(0, r.jsx)(I, {
                        label: "Current bid",
                        value: (0, k.Bt)(t.currentPrice)
                    }), (0, r.jsx)(I, {
                        label: "Ending in",
                        value: (0, r.jsx)($, {
                            formattedParts: s
                        })
                    })]
                }) : t.status === R.iy.OPEN ? (0, r.jsx)(N, {
                    children: (0, r.jsx)(I, {
                        label: "Reserve price",
                        value: (0, k.Bt)(t.currentPrice)
                    })
                }) : null
            }

            function I(e) {
                var t = e.label,
                    n = e.value;
                return (0, r.jsxs)(l.Z, {
                    css: {
                        gap: "$1"
                    },
                    children: [(0, r.jsx)(_, {
                        children: t
                    }), (0, r.jsx)(V, {
                        children: n
                    })]
                })
            }
            var V = (0, u.zo)(O.Z, {
                    fontSize: "$2",
                    fontWeight: 600,
                    fontFamily: "$body"
                }),
                _ = (0, u.zo)(V, {
                    color: "$black50"
                }),
                N = (0, u.zo)(d.Z, {
                    backgroundColor: "$white100",
                    paddingX: "$6",
                    paddingY: "$4",
                    variants: {
                        isLive: {
                            true: {
                                backgroundColor: "$black100",
                                color: "$white100",
                                display: "flex",
                                gap: "$4"
                            }
                        }
                    }
                }),
                T = n(35538),
                F = n(34436),
                z = n(31849),
                D = n(23645),
                A = n(64105),
                M = n(79640),
                B = n(38918);

            function L(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function H(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? L(Object(n), !0).forEach((function(t) {
                        (0, m.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : L(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Y(e) {
                return (0, r.jsx)(F.Z, {
                    children: (0, r.jsx)(U, H({}, e))
                })
            }

            function U(e) {
                var t = e.artwork,
                    n = t.creator,
                    i = t.auction,
                    o = (0, F.R)().isHovered;
                if (!t) return (0, r.jsx)(j.Z, {});
                var a = (0, A.a4)({
                        user: n,
                        artwork: t
                    }),
                    s = (0, A.dy)({
                        user: n
                    }),
                    u = (0, M.zr)({
                        h: 640,
                        q: 80,
                        quality: x.f.Preview
                    }, t),
                    c = (0, M.AI)(t);
                return (0, r.jsxs)(z.Z, {
                    isHovered: o,
                    className: "artwork-card",
                    children: [(0, r.jsx)(h.ZP, {
                        href: a,
                        children: (0, r.jsx)(q, {
                            children: t.name
                        })
                    }), (0, r.jsx)(b.Z, {
                        assetUrl: u,
                        posterUrl: c
                    }), (0, r.jsxs)(D.Z, {
                        children: [(0, r.jsx)(p.Z, {
                            children: (0, r.jsx)(g.Z, {
                                children: t.name
                            })
                        }), (0, r.jsx)(p.Z, {
                            css: {
                                marginTop: "auto",
                                position: "relative",
                                zIndex: 2
                            },
                            children: (0, r.jsx)(T.Z, {
                                publicKey: (0, B.Yh)(n),
                                children: (0, r.jsx)(h.ZP, {
                                    href: s,
                                    children: (0, r.jsx)(W, {
                                        children: (0, r.jsx)(v.Z, {
                                            user: n,
                                            color: "currentColor"
                                        })
                                    })
                                })
                            })
                        })]
                    }), (0, r.jsx)(p.Z, {
                        css: {
                            flexDirection: "column",
                            borderTop: "solid 1px $black5"
                        },
                        children: (0, r.jsx)(C, {
                            auction: i,
                            artwork: t
                        })
                    })]
                })
            }
            var W = (0, u.zo)("a", {
                    textDecoration: "none",
                    color: "$black100"
                }),
                q = (0, u.zo)("a", {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 2,
                    textIndent: "-9999rem"
                }),
                X = n(61520),
                G = n(50911),
                J = (0, f.Z)((function(e) {
                    var t = e.hits,
                        n = e.hasMore,
                        i = e.refineNext;
                    (0, G.Z)({
                        results: t
                    });
                    var o = (0, a.useState)(!1),
                        s = o[0],
                        u = o[1],
                        c = (0, a.useCallback)((function() {
                            u(!0), i()
                        }), [u, i]);
                    return (0, a.useEffect)((function() {
                        s && u(!1)
                    }), [t]), (0, r.jsxs)(d.Z, {
                        css: {
                            paddingBottom: "$8"
                        },
                        children: [(0, r.jsx)(K, {
                            children: t.map((function(e, t) {
                                return (0, r.jsx)(Y, {
                                    artwork: e
                                }, t)
                            }))
                        }), (0, r.jsx)(X.Z, {
                            handleNextPage: c,
                            hasNextPage: n,
                            isFetching: s,
                            animationDuration: .05
                        }, t.length)]
                    })
                })),
                K = (0, u.zo)(l.Z, {
                    gap: "$5",
                    "@bp1": {
                        gridTemplateColumns: "repeat(2, 1fr)"
                    },
                    "@bp3": {
                        gridTemplateColumns: "repeat(3, 1fr)"
                    }
                }),
                Q = J,
                ee = n(80129),
                te = n.n(ee),
                ne = n(75805),
                re = n(71934),
                ie = n(49797),
                oe = n(29026),
                ae = (0, u.zo)(O.Z, {
                    fontSize: "$2",
                    fontWeight: 600,
                    fontFamily: "$body"
                }),
                se = (0, u.zo)(d.Z, {
                    width: 20,
                    height: 20,
                    border: "solid 2px $black10",
                    borderRadius: "$round",
                    position: "relative",
                    variants: {
                        isActive: {
                            true: {
                                backgroundColor: "$black100",
                                borderColor: "$black100",
                                "&:after": {
                                    position: "absolute",
                                    content: "",
                                    top: "50%",
                                    left: "50%",
                                    width: 8,
                                    height: 8,
                                    backgroundColor: "$black70",
                                    transform: "translate(-50%, -50%)",
                                    borderRadius: "$round"
                                }
                            }
                        }
                    }
                }),
                ue = (0, ne.Z)((function(e) {
                    var t = e.items,
                        n = e.groups,
                        i = e.title,
                        o = e.currentRefinement,
                        s = e.refine,
                        u = (0, oe.Z)((function(e) {
                            return e.setArtworkAvailabilities
                        })),
                        c = (0, re.Z)(t.filter((function(e) {
                            return e.isRefined
                        }))),
                        f = (0, a.useState)(n[0].title),
                        d = f[0],
                        m = f[1];
                    (0, a.useEffect)((function() {
                        var e = n.filter((function(e) {
                            return e.filters.some((function(e) {
                                return o.includes(e)
                            }))
                        }));
                        m(e[0].title)
                    }), []);
                    var x = o.join(" ");
                    (0, a.useEffect)((function() {
                        u(o)
                    }), [x]);
                    var p = (0, a.useCallback)((function(e) {
                        m(e);
                        var t = n.find((function(t) {
                            return t.title === e
                        })).filters;
                        s(t)
                    }), [m, n, s]);
                    return (0, r.jsxs)(l.Z, {
                        css: {
                            gap: "$7"
                        },
                        children: [(0, r.jsx)(ae, {
                            children: i
                        }), (0, r.jsx)(l.Z, {
                            css: {
                                gap: "$3",
                                "@bp2": {
                                    gap: "$6"
                                }
                            },
                            children: n.map((function(e) {
                                return (0, r.jsxs)(l.Z, {
                                    css: {
                                        border: "solid 2px $black5",
                                        borderRadius: "$2"
                                    },
                                    children: [(0, r.jsxs)(ie.t, {
                                        css: {
                                            margin: -2
                                        },
                                        onClick: function() {
                                            return p(e.title)
                                        },
                                        children: [(0, r.jsx)(se, {
                                            isActive: d === e.title
                                        }), (0, r.jsx)(ae, {
                                            css: {
                                                flex: 1,
                                                textAlign: "left",
                                                marginLeft: "$3"
                                            },
                                            children: e.title
                                        })]
                                    }), (0, r.jsx)(ce, {
                                        isVisible: d === e.title && e.filtersVisible,
                                        children: e.filters.map((function(e) {
                                            var n = t.find((function(t) {
                                                    return t.label === e
                                                })),
                                                i = c > 1;
                                            return (0, r.jsx)(le, {
                                                hit: n,
                                                canRefine: i || !(null !== n && void 0 !== n && n.isRefined),
                                                refine: s
                                            }, e)
                                        }))
                                    })]
                                }, e.title)
                            }))
                        })]
                    })
                })),
                ce = (0, u.zo)(l.Z, {
                    gap: "$3",
                    padding: "$3",
                    display: "none",
                    variants: {
                        isVisible: {
                            true: {
                                display: "grid"
                            }
                        }
                    }
                });

            function le(e) {
                var t = e.canRefine,
                    n = e.hit,
                    i = e.refine;
                return n ? (0, r.jsx)(d.Z, {
                    css: {
                        cursor: t ? "inherit" : "not-allowed"
                    },
                    children: (0, r.jsx)(d.Z, {
                        style: {
                            display: "grid",
                            pointerEvents: t ? "all" : "none"
                        },
                        children: (0, r.jsx)(ie.Z, {
                            hit: n,
                            refine: i
                        })
                    })
                }) : null
            }
            var fe = ue,
                de = n(10587),
                me = n(96156),
                xe = n(45697),
                pe = n.n(xe),
                he = n(71773),
                ve = n(95009);

            function be(e) {
                return e.attribute
            }
            var ge = "range";

            function je(e, t, n, r) {
                var i = (0, ve.U6)(e, t, r, "".concat(ge, ".").concat(be(e)), {}),
                    o = i.min,
                    a = i.max,
                    s = Boolean(e.precision),
                    u = o;
                "string" === typeof u && (u = s ? parseFloat(u) : parseInt(u, 10));
                var c = a;
                "string" === typeof c && (c = s ? parseFloat(c) : parseInt(c, 10));
                var l = {
                        min: u,
                        max: c
                    },
                    f = void 0 !== e.min,
                    d = void 0 !== e.max,
                    m = void 0 !== l.min,
                    x = void 0 !== l.max;
                if (f && m && l.min < n.min) throw Error("You can't provide min value lower than range.");
                if (d && x && l.max > n.max) throw Error("You can't provide max value greater than range.");
                return f && !m && (l.min = n.min), d && !x && (l.max = n.max), l
            }

            function ye(e, t) {
                return {
                    min: void 0 !== e.min ? e.min : t.min,
                    max: void 0 !== e.max ? e.max : t.max
                }
            }

            function Ze(e, t, n, r) {
                return e || n !== r ? e && t ? n : r : void 0
            }

            function we(e, t, n, r, i) {
                var o = n.min,
                    a = n.max,
                    s = r.min,
                    u = r.max,
                    c = void 0 === o || "" === o,
                    l = void 0 === a || "" === a,
                    f = c ? void 0 : parseFloat(o),
                    d = l ? void 0 : parseFloat(a),
                    m = c || isFinite(f),
                    x = l || isFinite(d);
                if (!m || !x) throw Error("You can't provide non finite values to the range connector.");
                if (f < s) throw Error("You can't provide min value lower than range.");
                if (d > u) throw Error("You can't provide max value greater than range.");
                var p = be(e),
                    h = (0, me.Z)({}, p, {
                        min: Ze(void 0 !== e.min, c, s, f),
                        max: Ze(void 0 !== e.max, l, u, d)
                    });
                return (0, ve.RD)(t, h, i, !0, ge)
            }
            var Oe = (0, he.Z)({
                    displayName: "AlgoliaRange",
                    propTypes: {
                        id: pe().string,
                        attribute: pe().string.isRequired,
                        defaultRefinement: pe().shape({
                            min: pe().number,
                            max: pe().number
                        }),
                        min: pe().number,
                        max: pe().number,
                        precision: pe().number,
                        header: pe().node,
                        footer: pe().node
                    },
                    defaultProps: {
                        precision: 0
                    },
                    getProvidedProps: function(e, t, n) {
                        var r = e.attribute,
                            i = e.precision,
                            o = e.min,
                            a = e.max,
                            s = (0, ve.O7)(n, {
                                ais: e.contextValue,
                                multiIndexContext: e.indexContextValue
                            }),
                            u = s && s.getFacetByName(r),
                            c = u && s.getFacetStats(r) || {},
                            l = (u ? s.getFacetValues(r) : []).map((function(e) {
                                return {
                                    value: e.name,
                                    count: e.count
                                }
                            })),
                            f = function(e, t, n) {
                                var r, i, o = Math.pow(10, n);
                                return r = "number" === typeof e.min && isFinite(e.min) ? e.min : "number" === typeof t.min && isFinite(t.min) ? t.min : void 0, i = "number" === typeof e.max && isFinite(e.max) ? e.max : "number" === typeof t.max && isFinite(t.max) ? t.max : void 0, {
                                    min: void 0 !== r ? Math.floor(r * o) / o : r,
                                    max: void 0 !== i ? Math.ceil(i * o) / o : i
                                }
                            }({
                                min: o,
                                max: a
                            }, c, i),
                            d = f.min,
                            m = f.max;
                        this._currentRange = {
                            min: d,
                            max: m
                        };
                        var x = je(e, t, this._currentRange, {
                            ais: e.contextValue,
                            multiIndexContext: e.indexContextValue
                        });
                        return {
                            min: d,
                            max: m,
                            canRefine: l.length > 0,
                            currentRefinement: ye(x, this._currentRange),
                            count: l,
                            precision: i
                        }
                    },
                    refine: function(e, t, n) {
                        return we(e, t, n, this._currentRange, {
                            ais: e.contextValue,
                            multiIndexContext: e.indexContextValue
                        })
                    },
                    cleanUp: function(e, t) {
                        return function(e, t, n) {
                            return (0, ve.cI)(t, n, "".concat(ge, ".").concat(be(e)))
                        }(e, t, {
                            ais: e.contextValue,
                            multiIndexContext: e.indexContextValue
                        })
                    },
                    getSearchParameters: function(e, t, n) {
                        var r = t.attribute,
                            i = je(t, n, this._currentRange, {
                                ais: t.contextValue,
                                multiIndexContext: t.indexContextValue
                            }),
                            o = i.min,
                            a = i.max;
                        return e = e.addDisjunctiveFacet(r), void 0 !== o && (e = e.addNumericRefinement(r, ">=", o)), void 0 !== a && (e = e.addNumericRefinement(r, "<=", a)), e
                    },
                    getMetadata: function(e, t) {
                        var n = this,
                            r = this._currentRange,
                            i = r.min,
                            o = r.max,
                            a = je(e, t, this._currentRange, {
                                ais: e.contextValue,
                                multiIndexContext: e.indexContextValue
                            }),
                            s = a.min,
                            u = a.max,
                            c = [],
                            l = void 0 !== s,
                            f = void 0 !== u;
                        if (l && s !== i || f && u !== o) {
                            var d = [l ? "".concat(s, " <= ") : "", e.attribute, f ? " <= ".concat(u) : ""];
                            c.push({
                                label: d.join(""),
                                attribute: e.attribute,
                                value: function(t) {
                                    return we(e, t, {}, n._currentRange, {
                                        ais: e.contextValue,
                                        multiIndexContext: e.indexContextValue
                                    })
                                },
                                currentRefinement: ye({
                                    min: s,
                                    max: u
                                }, {
                                    min: i,
                                    max: o
                                })
                            })
                        }
                        return {
                            id: be(e),
                            index: (0, ve.WN)({
                                ais: e.contextValue,
                                multiIndexContext: e.indexContextValue
                            }),
                            items: c
                        }
                    }
                }),
                $e = n(745),
                Pe = n(35064),
                Re = n(68981),
                ke = n(30601),
                Ee = n(79724),
                Se = n(85010),
                Ce = n(56344),
                Ie = n(32292),
                Ve = n(33863);

            function _e(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ne(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? _e(Object(n), !0).forEach((function(t) {
                        (0, m.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _e(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Te(e) {
                var t = e.name,
                    n = e.placeholder,
                    i = (0, $e.U$)(t),
                    o = (0, Ie.Z)(i, 1)[0];
                return (0, r.jsxs)(d.Z, {
                    css: {
                        position: "relative"
                    },
                    children: [(0, r.jsx)(Fe, Ne(Ne({}, o), {}, {
                        placeholder: n,
                        color: "white",
                        size: "large",
                        type: "number",
                        step: "any",
                        inputMode: "decimal",
                        onWheel: function(e) {
                            return e.currentTarget.blur()
                        }
                    })), (0, r.jsx)(ze, {
                        children: "ETH"
                    })]
                })
            }
            var Fe = (0, u.zo)(Ve.Z, {
                    width: "100%",
                    borderRadius: "$2",
                    fontWeight: "$body",
                    "&[type=number]": {
                        "-moz-appearance": "textfield"
                    },
                    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
                        "-webkit-appearance": "none",
                        margin: 0
                    }
                }),
                ze = (0, u.zo)(O.Z, {
                    fontFamily: "$body",
                    fontWeight: 600,
                    position: "absolute",
                    right: "$4",
                    top: "50%",
                    transform: "translateY(-50%)",
                    lineHeight: 1,
                    color: "$black60"
                }),
                De = n(9170),
                Ae = function(e, t) {
                    return De.Ry().shape({
                        min: De.Rx().min(e, "Must be at least ${min} ETH").max(t, "Must be at least ${max} ETH").when("max", {
                            is: k.Rq,
                            then: De.Rx().max(De.iH("max")),
                            otherwise: De.Rx()
                        }),
                        max: De.Rx().min(e, "Must be at least ${min} ETH").max(t, "Must be at least ${max} ETH").required("Max price is required")
                    })
                },
                Me = n(74557),
                Be = Oe((function(e) {
                    var t, n, i = e.min,
                        o = e.max,
                        s = e.refine,
                        u = e.count,
                        c = e.currentRefinement,
                        l = e.hasSearchValue,
                        f = (0, a.useState)(l),
                        d = f[0],
                        m = f[1],
                        x = (0, a.useCallback)((function(e) {
                            s(e), m(!0)
                        }), [s]),
                        p = (0, a.useCallback)((function() {
                            s({
                                min: "",
                                max: ""
                            }), m(!1)
                        }), [s, m]);
                    return (0, B.IE)([!i, !o]) ? null : (0, r.jsx)($e.J9, {
                        validationSchema: Ae(i, o),
                        initialValues: {
                            min: null !== (t = l && (null === c || void 0 === c ? void 0 : c.min)) && void 0 !== t ? t : "",
                            max: null !== (n = l && (null === c || void 0 === c ? void 0 : c.max)) && void 0 !== n ? n : ""
                        },
                        onSubmit: x,
                        children: (0, r.jsx)($e.l0, {
                            children: d ? (0, r.jsx)(Ue, {
                                clearField: p,
                                resultCounts: u
                            }) : (0, r.jsx)(Ye, {})
                        })
                    })
                })),
                Le = (0, u.zo)(d.Z, {
                    color: "$black20",
                    marginLeft: "$6",
                    cursor: "pointer",
                    "@media (hover: hover)": {
                        "&:hover": {
                            color: "$black100"
                        }
                    }
                }),
                He = (0, u.zo)(p.Z, {
                    backgroundColor: "$black5",
                    minHeight: 60,
                    alignItems: "center",
                    paddingLeft: "$5",
                    paddingRight: "$6",
                    borderRadius: "$2",
                    justifyContent: "space-between"
                });

            function Ye() {
                var e = (0, $e.u6)().isValid;
                return (0, r.jsxs)(l.Z, {
                    css: {
                        gap: "$4"
                    },
                    children: [(0, r.jsxs)(l.Z, {
                        css: {
                            gridTemplateColumns: "1fr 1fr",
                            gap: "$3"
                        },
                        children: [(0, r.jsx)(Te, {
                            name: "min",
                            placeholder: "0.00"
                        }), (0, r.jsx)(Te, {
                            name: "max",
                            placeholder: "0.00"
                        })]
                    }), (0, r.jsx)(p.Z, {
                        css: {
                            cursor: e ? "inherit" : "not-allowed"
                        },
                        children: (0, r.jsx)(Se.Z, {
                            color: "white",
                            type: "submit",
                            size: "large",
                            shape: "regular",
                            disabled: !e,
                            css: {
                                width: "100%",
                                opacity: e ? 1 : .3
                            },
                            children: "Set price"
                        })
                    })]
                })
            }

            function Ue(e) {
                var t, n, i = e.clearField,
                    o = e.resultCounts,
                    a = (0, $e.u6)(),
                    s = a.values,
                    u = a.resetForm,
                    c = (t = s.min, n = s.max, (0, w.Z)(Pe.Z, (0, Re.Z)((0, ke.Z)("count")), (0, Ee.Z)((function(e) {
                        var r = Number(e.value);
                        return r >= t && r <= n
                    }))))(o);
                return (0, r.jsxs)(He, {
                    onClick: function() {
                        i(), u()
                    },
                    css: {
                        cursor: "pointer",
                        "@media (hover: hover)": (0, m.Z)({}, "&:hover ".concat(Le), {
                            color: "$black100"
                        })
                    },
                    children: [(0, r.jsxs)(d.Z, {
                        css: {
                            fontWeight: 600,
                            fontFamily: "$body"
                        },
                        children: [(0, k.Bt)(s.min), " \u2013 ", (0, k.Bt)(s.max)]
                    }), (0, r.jsxs)(p.Z, {
                        css: {
                            alignItems: "center"
                        },
                        children: [(0, r.jsx)(O.Z, {
                            css: {
                                fontWeight: 400,
                                fontFamily: "$body",
                                color: "$black50"
                            },
                            children: (0, k.kh)(c)
                        }), (0, r.jsx)(Le, {
                            onClick: i,
                            children: (0, r.jsx)(Ce.Z, {
                                icon: Me.Z,
                                width: 10,
                                height: 10
                            })
                        })]
                    })]
                })
            }
            var We = Be;

            function qe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Xe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? qe(Object(n), !0).forEach((function(t) {
                        (0, m.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qe(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ge = (0, u.zo)(l.Z, {
                    borderBottom: "solid 1px $black10",
                    paddingBottom: "$7",
                    gap: "$7"
                }),
                Je = (0, u.zo)(O.Z, {
                    fontSize: "$2",
                    fontWeight: 600,
                    fontFamily: "$body"
                });

            function Ke() {
                var e, t = (0, s.useRouter)(),
                    n = Boolean(null === (e = function(e) {
                        var t = e.asPath.indexOf("?");
                        if (-1 === t) return {};
                        var n = e.asPath.substring(t + 1);
                        return te().parse(n)
                    }(t).range) || void 0 === e ? void 0 : e["auction.currentPrice"]);
                return (0, r.jsx)(d.Z, {
                    children: (0, r.jsxs)(l.Z, {
                        css: {
                            gap: "$7"
                        },
                        children: [(0, r.jsxs)(Ge, {
                            children: [(0, r.jsx)(Je, {
                                children: "Price range"
                            }), (0, r.jsx)(We, {
                                attribute: "auction.currentPrice",
                                hasSearchValue: n
                            })]
                        }), (0, r.jsx)(Ge, {
                            children: (0, r.jsx)(fe, {
                                attribute: "availability",
                                title: "Availability",
                                defaultRefinement: [R.yS.RESERVE_NOT_MET, R.yS.LIVE_AUCTION],
                                groups: [{
                                    title: "Available",
                                    filters: [R.yS.RESERVE_NOT_MET, R.yS.LIVE_AUCTION],
                                    filtersVisible: !0
                                }, {
                                    title: "Sold",
                                    filters: [R.yS.SOLD],
                                    filtersVisible: !1
                                }]
                            })
                        }), (0, r.jsx)(Ge, {
                            children: (0, r.jsx)(de.ZP, {
                                attribute: "auction.isPrimarySale",
                                title: "Market",
                                defaultRefinement: ["true", "false"],
                                transformItems: function(e) {
                                    return e.map((function(e) {
                                        return Xe(Xe({}, e), {}, {
                                            label: (t = e.label, "true" === t ? "Primary" : "Secondary")
                                        });
                                        var t
                                    }))
                                }
                            })
                        }), (0, r.jsx)(de.ZP, {
                            attribute: "mimeTypeFacet",
                            title: "Type",
                            sortOrder: ["IMAGE", "VIDEO"],
                            defaultRefinement: ["IMAGE", "VIDEO"]
                        })]
                    })
                })
            }
            var Qe = n(8095),
                et = n(66510),
                tt = n(61127),
                nt = n(31035),
                rt = n(84298),
                it = n(50266),
                ot = n(70292),
                at = n(34901),
                st = n(23755),
                ut = n(69593),
                ct = n(32624),
                lt = (0, u.iv)({
                    paddingBottom: "0 !important"
                })();

            function ft() {
                var e = (0, s.useRouter)(),
                    t = (0, a.useState)((0, ut._X)(e)),
                    n = t[0],
                    u = t[1],
                    f = (0, oe.Z)((function(e) {
                        return e.isLoading
                    })),
                    d = (0, oe.Z)((function(e) {
                        return e.artworkAvailabilities
                    })),
                    m = st.Bq.filter((function(e) {
                        return e.enabledModes.some((function(e) {
                            return d.includes(e)
                        }))
                    })),
                    x = m[0].value,
                    p = (0, a.useState)(!1),
                    h = p[0],
                    v = p[1];
                return (0, r.jsx)(c.Z, {
                    title: "Artworks",
                    footerStyle: {
                        display: "none"
                    },
                    children: (0, r.jsxs)(i.Z, {
                        searchClient: st.ZP,
                        indexName: "artworks",
                        createURL: ut.uJ,
                        onSearchStateChange: function(t) {
                            var n = t.refinementList,
                                r = t.range,
                                i = t.sortBy;
                            if (u(t), e.isReady) {
                                var o = (0, ut.Bn)(e.query),
                                    a = {
                                        refinementList: n,
                                        sortBy: i,
                                        range: r
                                    },
                                    s = (0, ut.Bn)(a);
                                o !== s && e.push("?".concat(s), void 0, {
                                    shallow: !0,
                                    scroll: !0
                                })
                            }
                        },
                        searchState: n,
                        children: [(0, r.jsx)(o.Z, {
                            hitsPerPage: ct.KB,
                            facetFilters: ["moderationStatus:ACTIVE", "isDeleted:false", "isHidden:false"]
                        }), f && (0, r.jsx)(Qe.Z, {
                            className: lt.className
                        }), (0, r.jsx)(et.Z, {
                            isOpen: h,
                            closeSearch: function() {
                                return v(!1)
                            },
                            filters: [(0, r.jsx)(nt.Z, {
                                algoliaIndexes: m,
                                orientation: "vertical",
                                defaultRefinement: x
                            }, "search"), (0, r.jsx)(Ke, {}, "filters")]
                        }), (0, r.jsx)(at.Z, {
                            isLoading: f,
                            children: (0, r.jsxs)(l.Z, {
                                css: {
                                    gap: "$7",
                                    alignItems: "flex-start"
                                },
                                children: [(0, r.jsx)(tt.Z, {
                                    algoliaIndexes: m,
                                    defaultRefinement: x
                                }), (0, r.jsxs)(ot.Z, {
                                    children: [(0, r.jsx)(it.Z, {
                                        children: (0, r.jsx)(Ke, {})
                                    }), (0, r.jsx)(Q, {}), (0, r.jsx)(rt.Z, {
                                        openSearch: function() {
                                            return v(!0)
                                        }
                                    })]
                                })]
                            })
                        })]
                    })
                })
            }
        },
        7292: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/artworks", function() {
                return n(43302)
            }])
        },
        90578: function() {},
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
                    return a
                }
            });
            var r = n(67294),
                i = 0,
                o = {},
                a = function(e, t) {
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
                                    var a = setInterval((function() {
                                        for (var e, n = o[t].listeners, r = !1, i = 0, a = Object.values(n); i < a.length; i++) {
                                            var s = a[i];
                                            try {
                                                s()
                                            } catch (u) {
                                                r = !0, e = u
                                            }
                                        }
                                        if (r) throw e
                                    }), t);
                                    o[t] = {
                                        ms: t,
                                        timer: a,
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
                    a = i.modTop,
                    s = i.modLeft,
                    u = i.modBottom,
                    c = i.modRight,
                    l = i.threshold;
                if (!Array.isArray(l) && "number" != typeof l) throw new Error("threshold should be a number or an array of numbers");
                var f = Array.isArray(l) ? l.map((function(e) {
                        return Math.floor(e % 101) / 100
                    })) : [Math.floor(l ? l % 101 : 0) / 100],
                    d = Math.min.apply(Math, f),
                    m = {
                        root: o instanceof Node ? o : null,
                        rootMargin: a + " " + c + " " + u + " " + s,
                        threshold: f
                    },
                    x = new IntersectionObserver((function(r, i) {
                        var o = r.filter((function(t) {
                                return t.target === e
                            }))[0],
                            a = function() {
                                return i.unobserve(e)
                            };
                        o && (o.isInViewport = o.isIntersecting && o.intersectionRatio >= d, o.isInViewport ? t(o, a, e) : n(o, a, e))
                    }), m);
                return x.observe(e),
                    function() {
                        return x.unobserve(e)
                    }
            }
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var i = n(67294);

            function o(e) {
                return "object" == typeof e && "current" in e
            }

            function a(e) {
                return "function" == typeof e && "function" == typeof e.call
            }

            function s(e) {
                void 0 === e && (e = {});
                var t = (0, i.useState)(null),
                    n = t[0],
                    s = t[1],
                    u = e.target,
                    c = e.viewport,
                    l = function(e, t) {
                        var n = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && -1 === t.indexOf(r) && (n[r] = e[r]);
                        return n
                    }(e, ["target", "viewport"]),
                    f = (0, i.useRef)(null),
                    d = (0, i.useRef)(null),
                    m = (0, i.useCallback)((function(e) {
                        f.current = e, c && (a(c) ? c(e) : o(c) && (c.current = e))
                    }), [f, c]),
                    x = (0, i.useCallback)((function(e) {
                        d.current = e, u && (a(u) ? u(e) : o(u) && (u.current = e))
                    }), [d, u]);
                return (0, i.useEffect)((function() {
                    if (d.current) return r(d.current, (function() {
                        return s(!0)
                    }), (function() {
                        return s(!1)
                    }), Object.assign({}, l, {
                        viewport: f.current
                    }))
                }), [d.current, l, f]), [n, x, m]
            }
        }
    },
    function(e) {
        e.O(0, [9351, 5132, 6870, 6624, 745, 8806, 6019, 9536, 4774, 2359, 2003, 9640, 9774, 2888, 179], (function() {
            return t = 7292, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);
//# sourceMappingURL=artworks-34d346baecf39c8f94b3.js.map