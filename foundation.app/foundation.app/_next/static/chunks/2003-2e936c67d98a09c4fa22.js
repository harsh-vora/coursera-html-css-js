(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2003], {
        21056: function(t, r, e) {
            "use strict";
            e.d(r, {
                ey: function() {
                    return it
                },
                ZP: function() {
                    return ot
                },
                v3: function() {
                    return lt
                }
            });
            var n = e(26265),
                o = (e(67294), e(11191)),
                i = e(61138),
                a = e(81100),
                c = e(30693),
                s = e(75188),
                u = e(71522),
                l = e(3101),
                d = e(83673),
                f = e(71934);

            function h(t) {
                var r = t.children,
                    e = t.className;
                return (0, o.tZ)(i.xv, {
                    className: e,
                    variant: "h.xs",
                    sx: {
                        color: "black.50",
                        marginBottom: "xs",
                        lineHeight: 1
                    }
                }, r)
            }

            function p(t) {
                var r = t.children,
                    e = t.className;
                return (0, o.tZ)(i.xv, {
                    className: e,
                    variant: "h.xs",
                    sx: {
                        lineHeight: 1
                    }
                }, r)
            }
            var Z = e(71703),
                v = e(42164),
                x = e(50779),
                b = e(64105),
                m = e(18506),
                g = e(68941),
                w = e(32624);

            function y(t) {
                var r = t.mostRecentActiveAuction,
                    e = t.className,
                    n = t.artwork,
                    a = null === r || void 0 === r ? void 0 : r.status,
                    c = null === r || void 0 === r ? void 0 : r.highestBid,
                    s = (0, m.xq)(n),
                    u = (0, b.V_)(s),
                    l = (0, x.l$)(r),
                    d = (0, x.ty)(null === r || void 0 === r ? void 0 : r.dateEnding),
                    f = a === Z.Ot.Open;
                if ((l || u) && !c) return (0, o.tZ)(i.xu, {
                    sx: {
                        padding: "m"
                    }
                }, (0, o.tZ)(h, null, "Reserve price"), (0, o.tZ)(p, null, "\u2014"));
                if (d && c) {
                    var g = Number(r.highestBid.amountInETH);
                    return (0, o.tZ)(i.xu, {
                        sx: {
                            padding: "m"
                        },
                        className: e
                    }, (0, o.tZ)(h, null, w.ce), (0, o.tZ)(p, null, (0, v.Bt)(g)))
                }
                if (f && c) {
                    var y = Number(r.highestBid.amountInETH);
                    return (0, o.tZ)(i.kC, {
                        sx: {
                            padding: "m",
                            backgroundColor: "black.100",
                            width: "100%"
                        },
                        className: e
                    }, (0, o.tZ)(i.xu, {
                        sx: {
                            marginRight: "m"
                        }
                    }, (0, o.tZ)(h, {
                        sx: {
                            color: "black.20"
                        }
                    }, "Current bid"), (0, o.tZ)(p, {
                        sx: {
                            color: "white.100"
                        }
                    }, (0, v.Bt)(y))), (0, o.tZ)(i.xu, null, (0, o.tZ)(h, {
                        sx: {
                            color: "black.20"
                        }
                    }, "Ending in"), (0, o.tZ)(p, {
                        sx: {
                            color: "white.100"
                        }
                    }, (0, o.tZ)(O, {
                        timestamp: r.dateEnding
                    }))))
                }
                return (0, o.tZ)(i.xu, {
                    sx: {
                        padding: "m"
                    },
                    className: e
                }, (0, o.tZ)(h, null, "Reserve price"), (0, o.tZ)(p, null, (0, v.Bt)(null === r || void 0 === r ? void 0 : r.reservePriceInETH)))
            }

            function O(t) {
                var r = t.timestamp,
                    e = (0, g.Z)(r),
                    n = e.countdownParts;
                return e.hasEnded ? (0, o.tZ)(i.xu, null, "Auction has ended") : (0, o.tZ)(i.rj, {
                    gap: "xs",
                    columns: "repeat(".concat((0, f.Z)(n), ", 36px)")
                }, n.map((function(t, r) {
                    return (0, o.tZ)(i.xu, {
                        key: r
                    }, (0, o.tZ)(i.xu, null, t.formattedValue, t.shortLabel))
                })))
            }
            var k = e(28140),
                j = e(42984),
                P = e(76526),
                C = e(96280),
                E = e(21015),
                A = e(7372),
                S = e(33020),
                D = e(60076),
                N = e(36765);

            function T(t) {
                var r, e = t.status,
                    n = t.artwork,
                    a = t.user,
                    c = t.setIsHovered,
                    s = (0, b.a4)({
                        artwork: n,
                        user: null === n || void 0 === n ? void 0 : n.creator
                    }),
                    u = (0, b.a4)({
                        artwork: n,
                        user: a
                    }),
                    l = (0, b.nS)(n),
                    d = (0, N.yv)([null === n || void 0 === n || null === (r = n.creator) || void 0 === r ? void 0 : r.id, null === a || void 0 === a ? void 0 : a.publicKey]),
                    f = I({
                        artworkPath: s,
                        artworkPathWithCurrentUser: u,
                        creatorArtworkPath: l,
                        isCreatorCurrentOwner: d
                    })[e];
                return f ? (0, o.tZ)(i.xu, {
                    onMouseEnter: function() {
                        return c(!0)
                    },
                    onMouseLeave: function() {
                        return c(!1)
                    },
                    sx: {
                        position: "relative",
                        zIndex: 4
                    }
                }, (0, o.tZ)(j.Z, {
                    sx: {
                        marginY: -5
                    }
                }, (0, o.tZ)(P.Z, {
                    options: f
                }))) : null
            }
            var I = function(t) {
                    var r, e = t.artworkPathWithCurrentUser,
                        a = t.artworkPath,
                        c = t.creatorArtworkPath,
                        s = t.isCreatorCurrentOwner;
                    return r = {}, (0, n.Z)(r, D.MG.Listed, [{
                        icon: (0, o.tZ)(E.Z, {
                            sx: {
                                display: "block"
                            },
                            width: 22,
                            height: 22
                        }),
                        children: "Change reserve price",
                        href: "".concat(e, "/change-price")
                    }, {
                        icon: (0, o.tZ)(A.Z, {
                            sx: {
                                display: "block"
                            },
                            width: 22,
                            height: 22
                        }),
                        children: "Unlist",
                        href: "".concat(e, "/unlist")
                    }]), (0, n.Z)(r, D.MG.Transferred, [{
                        icon: (0, o.tZ)(C.Z, {
                            sx: {
                                display: "block"
                            },
                            width: 18,
                            height: 18
                        }),
                        children: "Transfer NFT",
                        href: "".concat(a, "/transfer")
                    }].concat((0, k.Z)(s ? [{
                        icon: (0, o.tZ)(S.Z, {
                            sx: {
                                display: "block"
                            },
                            width: 22,
                            height: 22
                        }),
                        children: (0, o.tZ)(i.xv, {
                            sx: {
                                color: "#F93A3A"
                            }
                        }, "Burn NFT"),
                        href: "".concat(c, "/burn")
                    }] : []))), (0, n.Z)(r, D.MG.Settled, [{
                        icon: (0, o.tZ)(C.Z, {
                            sx: {
                                display: "block"
                            },
                            width: 18,
                            height: 18
                        }),
                        children: "Transfer NFT",
                        href: "".concat(a, "/transfer")
                    }].concat((0, k.Z)(s ? [{
                        icon: (0, o.tZ)(S.Z, {
                            sx: {
                                display: "block"
                            },
                            width: 22,
                            height: 22
                        }),
                        children: (0, o.tZ)(i.xv, {
                            sx: {
                                color: "#F93A3A"
                            }
                        }, "Burn NFT"),
                        href: "".concat(c, "/burn")
                    }] : []))), (0, n.Z)(r, D.MG.Minted, [{
                        icon: (0, o.tZ)(C.Z, {
                            sx: {
                                display: "block"
                            },
                            width: 18,
                            height: 18
                        }),
                        children: "Transfer NFT",
                        href: "".concat(a, "/transfer")
                    }].concat((0, k.Z)(s ? [{
                        icon: (0, o.tZ)(S.Z, {
                            sx: {
                                display: "block"
                            },
                            width: 22,
                            height: 22
                        }),
                        children: (0, o.tZ)(i.xv, {
                            sx: {
                                color: "#F93A3A"
                            }
                        }, "Burn NFT"),
                        href: "".concat(c, "/burn")
                    }] : []))), r
                },
                R = e(31621),
                M = e(35538),
                B = e(34436),
                F = e(15288),
                H = e(21669),
                U = e(8598),
                z = e(29278),
                L = e(33287);

            function G(t, r) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(t, r).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function W(t) {
                for (var r = 1; r < arguments.length; r++) {
                    var e = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? G(Object(e), !0).forEach((function(r) {
                        (0, n.Z)(t, r, e[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : G(Object(e)).forEach((function(r) {
                        Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
                    }))
                }
                return t
            }

            function V(t) {
                var r = t.artwork,
                    e = t.children,
                    n = null === r || void 0 === r ? void 0 : r.tokenId,
                    i = (0, b.QF)(r),
                    a = "/creator/".concat(i).concat(n, "/settle");
                return (0, o.tZ)(s.ZP, {
                    href: a
                }, (0, o.tZ)("a", {
                    sx: {
                        display: "flex",
                        flex: 1,
                        textDecoration: "none",
                        positition: "relative",
                        zIndex: 3,
                        maxWidth: 180,
                        marginLeft: "auto"
                    }
                }, (0, o.tZ)($, null, e)))
            }

            function _(t) {
                var r, e = t.artwork,
                    n = t.user,
                    i = t.children,
                    a = t.hasApprovedMarketContract,
                    c = t.className,
                    u = null === e || void 0 === e || null === (r = e.creator) || void 0 === r ? void 0 : r.id,
                    l = null === n || void 0 === n ? void 0 : n.publicKey,
                    d = (0, N.yv)([u, l]),
                    f = (0, b.a4)({
                        artwork: e,
                        user: n
                    }),
                    h = (0, b.nS)(e),
                    p = d ? "".concat(h, "/list") : "".concat(f, a ? "/list" : "/approve");
                return (0, o.tZ)(s.ZP, {
                    href: p
                }, (0, o.tZ)("a", {
                    sx: {
                        display: "flex",
                        flex: 1,
                        textDecoration: "none",
                        positition: "relative",
                        zIndex: 3,
                        maxWidth: 180,
                        marginLeft: "auto"
                    },
                    className: c
                }, (0, o.tZ)($, null, i)))
            }

            function Y(t) {
                var r, e, n = t.artwork;
                return (0, o.tZ)(i.kC, {
                    sx: {
                        padding: "m",
                        marginTop: "auto",
                        alignItems: "center"
                    }
                }, (0, o.tZ)(i.xu, {
                    sx: {
                        whiteSpace: "pre",
                        marginRight: "s"
                    }
                }, (0, o.tZ)(h, null, "Sold For"), (0, o.tZ)(i.xv, {
                    variant: "h.xs",
                    sx: {
                        lineHeight: 1
                    }
                }, (0, v.Bt)(null === (r = n.mostRecentActiveAuction) || void 0 === r || null === (e = r.highestBid) || void 0 === e ? void 0 : e.amountInETH))), (0, o.tZ)(V, W({}, t), "Settle"))
            }

            function q(t) {
                var r, e, n = t.artwork,
                    a = null === n || void 0 === n || null === (r = n.mostRecentActiveAuction) || void 0 === r || null === (e = r.highestBid) || void 0 === e ? void 0 : e.amountInETH;
                return a ? (0, o.tZ)(i.kC, {
                    sx: {
                        padding: "m",
                        marginTop: "auto",
                        alignItems: "center"
                    }
                }, (0, o.tZ)(i.xu, {
                    sx: {
                        whiteSpace: "pre",
                        marginRight: "s"
                    }
                }, (0, o.tZ)(h, null, "Sold For"), (0, o.tZ)(i.xv, {
                    variant: "h.xs",
                    sx: {
                        lineHeight: 1
                    }
                }, (0, v.Bt)(a))), (0, o.tZ)(_, W({}, t), "List NFT")) : (0, o.tZ)(i.kC, {
                    sx: {
                        padding: "m",
                        marginTop: "auto",
                        alignItems: "center"
                    }
                }, (0, o.tZ)(_, W(W({}, t), {}, {
                    sx: {
                        maxWidth: "none"
                    }
                }), "List NFT"))
            }

            function K(t) {
                return (0, o.tZ)(i.kC, {
                    sx: {
                        padding: "m",
                        marginTop: "auto",
                        alignItems: "center"
                    }
                }, (0, o.tZ)(i.xu, {
                    sx: {
                        whiteSpace: "pre",
                        marginRight: "s"
                    }
                }, (0, o.tZ)(h, null, "Transferred"), (0, o.tZ)(i.xv, {
                    variant: "h.xs",
                    sx: {
                        lineHeight: 1
                    }
                }, "\u2014")), (0, o.tZ)(_, W({}, t), "List NFT"))
            }

            function $(t) {
                var r = t.children;
                return (0, o.tZ)(i.zx, {
                    variant: "outline",
                    sx: {
                        minHeight: 55,
                        width: "100%",
                        borderColor: "black.10",
                        marginTop: -5,
                        marginBottom: -6,
                        "@media (hover: hover)": {
                            "&:hover": {
                                borderColor: "black.100"
                            }
                        }
                    }
                }, r)
            }
            var Q = function(t) {
                    var r = t.artwork;
                    return (0, F.Z)((0, H.Z)([x.sw, x.I_]), (function(t) {
                        return (0, o.tZ)(i.kC, {
                            sx: {
                                flex: "auto"
                            }
                        }, (0, o.tZ)(y, {
                            artwork: t,
                            mostRecentActiveAuction: t.mostRecentActiveAuction
                        }))
                    }), (function(t) {
                        return (0, o.tZ)(i.kC, {
                            sx: {
                                marginTop: "auto"
                            }
                        }, (0, o.tZ)(y, {
                            artwork: t,
                            mostRecentActiveAuction: t.mostRecentActiveAuction
                        }))
                    }))(r)
                },
                J = function(t) {
                    var r = t.artworkStatus;
                    return (0, U.Z)([
                        [function() {
                            return (0, z.Z)(r, D.MG.Transferred)
                        }, K],
                        [function() {
                            return (0, z.Z)(r, D.MG.Unsettled)
                        }, Y],
                        [function() {
                            return (0, z.Z)(r, D.MG.Settled)
                        }, q],
                        [function() {
                            return (0, z.Z)(r, D.MG.Minted)
                        }, q],
                        [L.Z, Q]
                    ])(t)
                },
                X = e(51250),
                tt = e(79640),
                rt = e(38918);

            function et(t, r) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(t, r).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function nt(t) {
                for (var r = 1; r < arguments.length; r++) {
                    var e = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? et(Object(e), !0).forEach((function(r) {
                        (0, n.Z)(t, r, e[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : et(Object(e)).forEach((function(r) {
                        Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
                    }))
                }
                return t
            }

            function ot(t) {
                return (0, o.tZ)(B.Z, null, (0, o.tZ)(it, nt({}, t)))
            }

            function it(t) {
                var r = t.artwork,
                    e = t.creator,
                    n = t.mostRecentActiveAuction,
                    f = t.isOwner,
                    h = t.user,
                    p = t.hasApprovedMarketContract,
                    Z = (0, o.B7)().theme,
                    v = null === e || void 0 === e ? void 0 : e.account,
                    x = (0, B.R)(),
                    m = x.isHovered,
                    g = x.setIsHovered,
                    w = lt(),
                    O = (0, a.q)({
                        defaultIndex: 2
                    }) <= 1;
                if (!r) return (0, o.tZ)(R.Z, null);
                var k = (0, b.a4)({
                        user: v,
                        artwork: r
                    }),
                    j = (0, b.dy)({
                        user: v
                    }),
                    P = (0, tt.zr)({
                        h: 640,
                        q: 70,
                        auto: "compress",
                        quality: c.f.Preview
                    }, r),
                    C = (0, tt.AI)(r),
                    E = (0, b.ug)({
                        artwork: r,
                        user: h
                    }),
                    A = f && !O;
                return (0, o.tZ)(i.kC, {
                    sx: w.card,
                    style: {
                        transform: m && "translateY(-4px)",
                        boxShadow: m && Z.shadows.m
                    },
                    className: "artwork-card"
                }, (0, o.tZ)(s.ZP, {
                    href: k
                }, (0, o.tZ)("a", {
                    sx: at
                }, r.name)), (0, o.tZ)(l.Z, {
                    assetUrl: P,
                    posterUrl: C
                }), (0, o.tZ)(i.rj, {
                    gap: "m",
                    sx: w.title
                }, (0, o.tZ)(i.kC, {
                    sx: {
                        justifyContent: "space-between"
                    }
                }, (0, o.tZ)(d.Z, null, r.name), A && (0, o.tZ)(T, {
                    artwork: r,
                    user: h,
                    status: E,
                    setIsHovered: g
                })), (0, o.tZ)(i.kC, {
                    sx: {
                        marginTop: "auto"
                    }
                }, (0, o.tZ)(M.Z, {
                    publicKey: (0, rt.Yh)(v),
                    sx: ct
                }, (0, o.tZ)(s.ZP, {
                    href: j
                }, (0, o.tZ)("a", {
                    sx: st
                }, (0, o.tZ)(u.Z, {
                    user: v,
                    color: "currentColor"
                })))))), A ? (0, o.tZ)(i.kC, {
                    sx: w.activity,
                    onMouseEnter: function() {
                        return g(!0)
                    },
                    onMouseLeave: function() {
                        return g(!1)
                    }
                }, J({
                    artwork: r,
                    user: h,
                    artworkStatus: E,
                    hasApprovedMarketContract: p
                })) : (0, o.tZ)(i.kC, {
                    sx: w.activity
                }, (0, o.tZ)(y, {
                    mostRecentActiveAuction: n,
                    artwork: r
                })))
            }
            var at = {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 2,
                    textIndent: "-9999rem"
                },
                ct = {
                    display: "flex",
                    zIndex: 3,
                    position: "relative",
                    color: "black.60",
                    transition: X.pB.smooth.fast,
                    "@media (hover: hover)": {
                        "&:hover": {
                            color: "black.100"
                        }
                    }
                },
                st = {
                    textDecoration: "none",
                    color: "black.60",
                    transition: X.pB.smooth.fast,
                    "@media (hover: hover)": {
                        "&:hover": {
                            color: "black.100"
                        }
                    }
                },
                ut = {
                    backgroundColor: "white.100",
                    display: "flex",
                    flex: "auto",
                    flexDirection: "column",
                    borderRadius: 10,
                    overflow: "hidden",
                    boxShadow: "s",
                    transition: X.pB.smooth.fast,
                    textDecoration: "none",
                    color: "inherit",
                    position: "relative"
                },
                lt = function() {
                    return {
                        title: {
                            boxShadow: "s",
                            padding: "m",
                            flex: 1
                        },
                        activity: {
                            flexDirection: "column"
                        },
                        card: nt(nt({}, ut), {}, {
                            willChange: "transform",
                            "@media (hover: hover)": {
                                "&:hover": {
                                    transform: "translateY(-4px)",
                                    boxShadow: "m"
                                },
                                "&:active": {
                                    transform: "translateY(0)",
                                    boxShadow: "s"
                                }
                            }
                        })
                    }
                }
        },
        31621: function(t, r, e) {
            "use strict";
            e.d(r, {
                Z: function() {
                    return d
                },
                W: function() {
                    return f
                }
            });
            var n = e(26265),
                o = (e(67294), e(11191)),
                i = e(61138),
                a = e(21056),
                c = e(19896),
                s = e(54015);

            function u(t, r) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(t, r).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function l(t) {
                for (var r = 1; r < arguments.length; r++) {
                    var e = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? u(Object(e), !0).forEach((function(r) {
                        (0, n.Z)(t, r, e[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : u(Object(e)).forEach((function(r) {
                        Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
                    }))
                }
                return t
            }

            function d() {
                var t = (0, a.v3)();
                return (0, o.tZ)(i.xu, {
                    sx: l(l({}, t.card), {}, {
                        pointerEvents: "none"
                    })
                }, (0, o.tZ)(i.oM, {
                    ratio: 1,
                    sx: {
                        backgroundColor: "black.5"
                    }
                }), (0, o.tZ)(c.Z, null, (0, o.tZ)(s.Z, {
                    sx: {
                        height: 29,
                        width: "100%"
                    }
                }), (0, o.tZ)(s.Z, {
                    sx: {
                        height: 32,
                        maxWidth: 180
                    }
                })), (0, o.tZ)(i.xu, {
                    sx: {
                        padding: "m"
                    }
                }, (0, o.tZ)(s.Z, {
                    sx: {
                        height: 56,
                        width: "50%"
                    }
                })))
            }

            function f() {
                var t = (0, a.v3)();
                return (0, o.tZ)(i.xu, {
                    sx: l(l({}, t.card), {}, {
                        pointerEvents: "none"
                    })
                }, (0, o.tZ)(i.oM, {
                    ratio: 1,
                    sx: {
                        backgroundColor: "black.5"
                    }
                }), (0, o.tZ)(c.Z, null, (0, o.tZ)(s.Z, {
                    sx: {
                        height: 29,
                        width: 240
                    }
                }), (0, o.tZ)(s.Z, {
                    sx: {
                        height: 32,
                        width: 180
                    }
                })))
            }
        },
        3101: function(t, r, e) {
            "use strict";
            e.d(r, {
                Z: function() {
                    return y
                }
            });
            var n = e(26265),
                o = e(32292),
                i = e(67294),
                a = e(61138),
                c = e(11191),
                s = e(96626),
                u = e(14679),
                l = e(17757),
                d = e(53869),
                f = e(79640),
                h = e(38918),
                p = (0, i.forwardRef)((function(t, r) {
                    var e = t.children;
                    return (0, c.tZ)(a.oM, {
                        ref: r,
                        ratio: 1,
                        sx: {
                            bg: "black.5",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    }, e)
                })),
                Z = e(60483),
                v = e(69318),
                x = e(6381);

            function b(t, r) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(t, r).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function m(t) {
                for (var r = 1; r < arguments.length; r++) {
                    var e = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? b(Object(e), !0).forEach((function(r) {
                        (0, n.Z)(t, r, e[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : b(Object(e)).forEach((function(r) {
                        Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
                    }))
                }
                return t
            }
            var g = (0, l.E)(a.Ee),
                w = (0, l.E)(Z.Z);

            function y(t) {
                var r = t.assetUrl,
                    e = t.posterUrl,
                    n = (0, i.useState)(!1),
                    s = n[0],
                    l = n[1],
                    f = (0, h.KO)(r),
                    Z = (0, u.Z)(),
                    v = (0, o.Z)(Z, 2),
                    x = v[0],
                    b = v[1];
                return (0, i.useEffect)((function() {
                    x && l(!0)
                }), [x]), f ? (0, c.tZ)(p, {
                    ref: b
                }, (0, c.tZ)(d.M, {
                    exitBeforeEnter: !0
                }, (0, c.tZ)(k, {
                    url: r,
                    posterUrl: e,
                    hasBeenInViewport: s
                }))) : (0, c.tZ)(a.oM, {
                    ratio: 1,
                    sx: {
                        backgroundColor: "black.5"
                    }
                })
            }
            var O = (0, s.iv)({
                position: "absolute",
                left: "$5",
                top: "$5"
            })();

            function k(t) {
                var r = t.url,
                    e = t.posterUrl,
                    n = t.hasBeenInViewport,
                    o = (0, f.Wv)(r),
                    i = (0, f.vP)(r),
                    s = {
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
                            duration: .1
                        }
                    };
                return n || !o && !i ? o ? (0, c.tZ)(w, m(m({}, s), {}, {
                    posterUrl: e,
                    url: r
                })) : i ? (0, c.tZ)(a.xu, {
                    sx: {
                        position: x.Ep,
                        height: "100%"
                    }
                }, (0, c.tZ)(v.Z, {
                    className: O.className
                }), (0, c.tZ)(g, m(m({}, s), {}, {
                    loading: "lazy",
                    src: e,
                    sx: {
                        display: "block",
                        objectFit: "cover",
                        width: "100%",
                        height: "100%"
                    }
                }))) : (0, c.tZ)(g, m(m({}, s), {}, {
                    loading: "lazy",
                    src: r,
                    sx: {
                        display: "block",
                        objectFit: "cover",
                        width: "100%",
                        height: "100%"
                    }
                })) : (0, c.tZ)(l.E.div, m(m({}, s), {}, {
                    sx: {
                        backgroundColor: "black.5"
                    }
                }))
            }
        },
        83673: function(t, r, e) {
            "use strict";
            e.d(r, {
                Z: function() {
                    return i
                }
            });
            e(67294);
            var n = e(11191),
                o = e(61138);

            function i(t) {
                var r = t.children;
                return (0, n.tZ)(o.xv, {
                    variant: "h.s"
                }, r)
            }
        },
        19896: function(t, r, e) {
            "use strict";
            e.d(r, {
                Z: function() {
                    return i
                }
            });
            e(67294);
            var n = e(11191),
                o = e(61138);

            function i(t) {
                var r = t.children;
                return (0, n.tZ)(o.rj, {
                    gap: "m",
                    sx: {
                        boxShadow: "s",
                        padding: "m",
                        flex: "auto"
                    }
                }, r)
            }
        },
        60483: function(t, r, e) {
            "use strict";
            e.d(r, {
                Z: function() {
                    return g
                }
            });
            var n = e(26265),
                o = e(67294),
                i = e(11191),
                a = e(53869),
                c = e(17757),
                s = e(74047),
                u = e(52700),
                l = e(4706),
                d = e(8127),
                f = e(44102),
                h = e(20775);

            function p(t) {
                var r = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var e, n = (0, h.Z)(t);
                    if (r) {
                        var o = (0, h.Z)(this).constructor;
                        e = Reflect.construct(n, arguments, o)
                    } else e = n.apply(this, arguments);
                    return (0, f.Z)(this, e)
                }
            }
            var Z = function(t) {
                (0, d.Z)(e, t);
                var r = p(e);

                function e(t) {
                    var o;
                    return (0, s.Z)(this, e), o = r.call(this, t), (0, n.Z)((0, l.Z)(o), "state", {
                        hasError: !1
                    }), o
                }
                return (0, u.Z)(e, [{
                    key: "componentDidCatch",
                    value: function() {
                        this.setState({
                            hasError: !0
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.state.hasError ? this.props.errorView : this.props.children
                    }
                }]), e
            }(o.Component);

            function v(t, r) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(t, r).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function x(t) {
                for (var r = 1; r < arguments.length; r++) {
                    var e = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? v(Object(e), !0).forEach((function(r) {
                        (0, n.Z)(t, r, e[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : v(Object(e)).forEach((function(r) {
                        Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
                    }))
                }
                return t
            }
            var b = (0, o.forwardRef)((function(t, r) {
                return (0, i.tZ)(Z, {
                    errorView: (0, i.tZ)(m, x({}, t))
                }, (0, i.tZ)(m, x({}, t)))
            }));

            function m(t) {
                var r = t.url,
                    e = t.posterUrl,
                    n = t.className,
                    s = (0, o.useRef)(null);
                return (0, i.tZ)(a.M, null, (0, i.tZ)(c.E.video, {
                    ref: s,
                    className: n,
                    loop: !0,
                    key: r,
                    src: r,
                    poster: e,
                    autoPlay: !0,
                    muted: !0,
                    playsInline: !0,
                    sx: {
                        display: "block",
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        position: "absolute"
                    },
                    initial: !1,
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 1,
                        type: "tween"
                    },
                    onError: function() {}
                }))
            }
            var g = (0, o.memo)(b)
        }
    }
]);
//# sourceMappingURL=2003-2e936c67d98a09c4fa22.js.map