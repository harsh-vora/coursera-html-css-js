(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        73172: function(t, n, e) {
            "use strict";
            e.d(n, {
                d: function() {
                    return d
                }
            });
            e(67294);
            var r = e(11191),
                i = e(61138),
                o = e(75188),
                a = e(31820),
                u = e(95953),
                s = e(51250);

            function l(t) {
                var n = t.article,
                    e = c();
                return (0, r.tZ)(o.ZP, {
                    href: "/blog/".concat(n.slug)
                }, (0, r.tZ)(i.kC, {
                    as: "a",
                    sx: e.card
                }, (0, r.tZ)(i.xu, {
                    sx: e.bb
                }, (0, r.tZ)(i.Ee, {
                    src: (0, a.Iq)(null === n || void 0 === n ? void 0 : n.coverImage, {
                        q: 90,
                        w: 630,
                        h: 420,
                        fit: "pad"
                    }),
                    sx: e.db
                })), (0, r.tZ)(i.xu, {
                    sx: {
                        p: "l"
                    }
                }, (0, r.tZ)(i.X6, {
                    variant: "h.s",
                    mb: "s",
                    sx: e.title
                }, n.title), (0, r.tZ)(i.xv, {
                    variant: "body.body"
                }, null === n || void 0 === n ? void 0 : n.shortDescription)), (0, r.tZ)(i.xu, {
                    sx: {
                        px: "l",
                        pb: "l",
                        mt: "auto"
                    }
                }, (0, r.tZ)(i.xv, {
                    mt: "auto",
                    variant: "mono.caption"
                }, "Published ", (0, u.z2)(null === n || void 0 === n ? void 0 : n.datePosted)))))
            }
            var c = function() {
                return {
                    card: {
                        border: "black.2",
                        flexDirection: "column",
                        textDecoration: "none",
                        color: "black.100",
                        transition: s.pB.smooth.fast,
                        willChange: "transform",
                        "@media (hover: hover)": {
                            "&:hover": {
                                transform: "translateY(-4px)",
                                boxShadow: "l"
                            },
                            "&:active": {
                                transform: "translateY(0)"
                            }
                        }
                    },
                    title: {
                        lineHeight: 1.2
                    },
                    bb: {
                        borderBottom: "black.2"
                    },
                    db: {
                        display: "block",
                        width: "100%"
                    }
                }
            };

            function d(t) {
                var n = t.articles;
                return (0, r.tZ)(i.rj, {
                    columns: [1, 1, 3],
                    gap: "s"
                }, n.map((function(t) {
                    return (0, r.tZ)(l, {
                        article: t,
                        key: t.title
                    })
                })))
            }
        },
        11319: function(t, n, e) {
            "use strict";
            e.d(n, {
                Z: function() {
                    return m
                }
            });
            var r = e(67294),
                i = e(11191),
                o = e(61138),
                a = e(88767),
                u = e(79026),
                s = e(809),
                l = e.n(s),
                c = e(92447),
                d = e(63144),
                f = e.n(d),
                p = "https://api.coingecko.com/api/v3";

            function x() {
                return (x = (0, c.Z)(l().mark((function t(n, e) {
                    var r, i;
                    return l().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = Object.assign({
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                }, e), t.next = 3, f()("".concat(p, "/").concat(n), r);
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

            function v() {
                var t, n = (0, a.useQuery)([u.V.ETHPrice], (function() {
                        return function(t, n) {
                            return x.apply(this, arguments)
                        }("simple/price?vs_currencies=usd&ids=ethereum", null)
                    }), {
                        refetchOnMount: !1,
                        refetchOnWindowFocus: !1,
                        staleTime: 36e5
                    }),
                    e = n.data;
                return {
                    isLoading: n.isLoading,
                    price: null === e || void 0 === e || null === (t = e.ethereum) || void 0 === t ? void 0 : t.usd
                }
            }
            var Z = e(42164);

            function m(t) {
                var n = t.amount,
                    e = v(),
                    a = e.price,
                    u = e.isLoading,
                    s = parseFloat(n);
                return u ? (0, i.tZ)(o.xv, {
                    as: "span",
                    sx: {
                        opacity: 0
                    }
                }, "\u2014") : (0, i.tZ)(r.Fragment, null, (0, Z.MV)(s * a))
            }
        },
        21208: function(t, n, e) {
            "use strict";
            e.d(n, {
                Z: function() {
                    return u
                }
            });
            e(67294);
            var r = e(11191),
                i = e(61138),
                o = e(41664),
                a = e(11163);

            function u() {
                var t = (0, a.useRouter)();
                return (0, r.tZ)(i.xu, {
                    sx: {
                        position: "fixed",
                        bottom: 24,
                        left: 24,
                        zIndex: 999999
                    }
                }, (0, r.tZ)(o.default, {
                    href: "/api/preview/disable?redirect=".concat(t.asPath),
                    passHref: !0
                }, (0, r.tZ)(i.zx, {
                    as: "a",
                    variant: "primary",
                    sx: {
                        fontSize: "xs",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: 999,
                        minHeight: 54,
                        maxHeight: 54,
                        backgroundColor: "ticker.pink",
                        borderColor: "ticker.pink",
                        "&:hover": {
                            backgroundColor: "ticker.pink"
                        }
                    }
                }, "Exit Preview Mode")))
            }
        },
        80141: function(t, n, e) {
            "use strict";
            var r = e(96626),
                i = (0, r.F4)({
                    "0%": {
                        transform: "translate(10px, 20px)"
                    },
                    "10%": {
                        transform: "translate(-10px, 10px) rotate(-2deg)"
                    },
                    "50%": {
                        transform: "translate(20px, 20px)"
                    },
                    "70%": {
                        transform: "translate(-10px, 10px) rotate(-2deg)"
                    },
                    "100%": {
                        transform: "translate(10px, 20px)"
                    }
                }),
                o = (0, r.F4)({
                    "0%": {
                        transform: "translate(-10px, -20px)"
                    },
                    "10%": {
                        transform: "translate(10px, -10px) rotate(2deg)"
                    },
                    "50%": {
                        transform: "translate(-20px, -20px)"
                    },
                    "70%": {
                        transform: "translate(10px, -10px) rotate(2deg)"
                    },
                    "100%": {
                        transform: "translate(-10px, -20px)"
                    }
                }),
                a = (0, r.zo)("img", {
                    animation: "".concat(i, " 25s ease-in-out infinite"),
                    transformOrigin: "center",
                    width: 150,
                    "@bp2": {
                        width: 200
                    },
                    "@bp3": {
                        width: 400
                    },
                    alignSelf: "flex-end",
                    variants: {
                        animation: {
                            reverted: {
                                animation: "".concat(o, " 25s ease-in-out infinite")
                            }
                        }
                    }
                });
            n.Z = a
        },
        10527: function(t, n, e) {
            "use strict";
            e.d(n, {
                Z: function() {
                    return b
                }
            });
            var r = e(67294),
                i = e(11191),
                o = e(61138),
                a = e(88767),
                u = e(67826),
                s = e(92931),
                l = e(1728),
                c = e(21056),
                d = e(31621),
                f = e(50070),
                p = e(85893),
                x = e(17757);

            function v(t) {
                var n = t.size,
                    e = void 0 === n ? 10 : n,
                    r = t.className;
                return (0, p.jsx)(x.E.div, {
                    style: {
                        width: e,
                        height: e,
                        backgroundColor: "black",
                        borderRadius: 999
                    },
                    animate: {
                        opacity: [1, 0],
                        scale: [.95, 1]
                    },
                    transition: {
                        ease: "easeInOut",
                        repeat: 1 / 0,
                        duration: 1.5
                    },
                    className: r
                })
            }
            var Z = e(36839),
                m = e(6381),
                h = e(38918),
                b = (0, r.memo)(g);

            function g(t) {
                var n, e = t.artworkCount,
                    r = void 0 === e ? 8 : e,
                    p = new Array(r).fill(null),
                    x = y(),
                    m = Math.round(Date.now() / 1e3),
                    b = (0, a.useQuery)("getGraphAndServerTrendingArtworks", (function() {
                        return (0, Z.Kp)({
                            limit: 48,
                            now: m
                        })
                    }), {
                        staleTime: 0,
                        cacheTime: 0,
                        refetchOnWindowFocus: !1
                    }),
                    g = b.data;
                if (b.isLoading) return (0, i.tZ)(s.Z, {
                    sx: x.body
                }, (0, i.tZ)(f.Z, null, "Trending auctions"), (0, i.tZ)(l.Z, null, p.map((function(t, n) {
                    return (0, i.tZ)(d.Z, {
                        key: n
                    })
                }))));
                var w = (0, u.Z)(r, null !== (n = null === g || void 0 === g ? void 0 : g.artworks) && void 0 !== n ? n : []);
                return (0, h.Qt)(w) ? null : (0, i.tZ)(s.Z, {
                    sx: x.body
                }, (0, i.tZ)(f.Z, {
                    linkHref: "/artworks?refinementList%5Bavailability%5D%5B0%5D=LIVE_AUCTION",
                    linkText: "View all auctions"
                }, (0, i.tZ)(o.kC, {
                    sx: {
                        alignItems: "center"
                    }
                }, (0, i.tZ)(v, {
                    sx: {
                        position: "relative",
                        top: 2
                    }
                }), (0, i.tZ)(o.xv, {
                    sx: {
                        fontFamily: "inherit",
                        marginLeft: 14
                    }
                }, "Trending auctions"))), (0, i.tZ)(o.rj, {
                    gap: "l"
                }, (0, i.tZ)(l.Z, null, w.map((function(t) {
                    return (0, i.tZ)(c.ZP, {
                        artwork: t,
                        creator: t.creator,
                        mostRecentActiveAuction: t.mostRecentActiveAuction,
                        key: t.id
                    })
                })))))
            }
            var y = function() {
                return {
                    body: {
                        position: m.Ep,
                        zIndex: 4
                    }
                }
            }
        },
        38981: function(t, n, e) {
            "use strict";
            e.d(n, {
                uU: function() {
                    return d
                },
                ZP: function() {
                    return f
                },
                dH: function() {
                    return p
                }
            });
            e(67294);
            var r = e(11191),
                i = e(61138),
                o = e(8598),
                a = e(33287),
                u = e(71934),
                s = e(95953),
                l = e(68941),
                c = e(57807),
                d = (0, o.Z)([
                    [function(t) {
                        return (0, s.LS)(2, t)
                    }, function() {
                        return (0, r.tZ)(i.rj, {
                            sx: {
                                position: "relative",
                                top: -4
                            }
                        }, (0, r.tZ)(i.xv, {
                            variant: "h.s",
                            sx: {
                                marginBottom: "xs"
                            }
                        }, "This auction is ending very soon!"), (0, r.tZ)(i.xv, {
                            variant: "body.body"
                        }, "If you were to place a bid at this time there is a high chance that it would result in an error."))
                    }],
                    [function(t) {
                        return (0, s.LS)(15, t)
                    }, function(t) {
                        var n = t.endDate;
                        return (0, r.tZ)(i.rj, {
                            sx: {
                                position: "relative",
                                top: -4
                            }
                        }, (0, r.tZ)(i.xv, {
                            variant: "h.s",
                            sx: {
                                marginBottom: "xs"
                            }
                        }, "This auction is ending soon!"), (0, r.tZ)(i.xu, {
                            sx: {
                                marginBottom: "s"
                            }
                        }, (0, r.tZ)(p, {
                            timestamp: n
                        })), (0, r.tZ)(i.xv, {
                            variant: "body.body"
                        }, "Any bids placed in the last 15 minutes will extend the auction for another 15 minutes."))
                    }],
                    [a.Z, f]
                ]);

            function f(t) {
                var n = t.endDate;
                return (0, r.tZ)(i.xu, null, (0, r.tZ)(i.xv, {
                    variant: "h.body",
                    sx: {
                        marginBottom: 5
                    }
                }, "Auction ending in"), (0, r.tZ)(p, {
                    timestamp: n
                }))
            }

            function p(t) {
                var n = t.timestamp,
                    e = t.className,
                    o = (0, l.Z)(n),
                    a = o.countdownParts;
                return o.hasEnded ? (0, r.tZ)(i.xu, {
                    className: e
                }, (0, r.tZ)(c.Z, null, "\u2014"), (0, r.tZ)(i.xv, {
                    variant: "h.xs",
                    sx: {
                        color: "black.60"
                    }
                }, "Auction has ended")) : (0, r.tZ)(i.rj, {
                    gap: "s",
                    columns: "repeat(".concat((0, u.Z)(a), ", 65px)"),
                    className: e
                }, a.map((function(t, n) {
                    return (0, r.tZ)(i.xu, {
                        key: n
                    }, (0, r.tZ)(c.Z, null, t.value), (0, r.tZ)(i.xv, {
                        variant: "h.body",
                        sx: {
                            color: "black.60"
                        }
                    }, t.label))
                })))
            }
        },
        57807: function(t, n, e) {
            "use strict";
            e.d(n, {
                Z: function() {
                    return o
                }
            });
            e(67294);
            var r = e(11191),
                i = e(61138);

            function o(t) {
                var n = t.children;
                return (0, r.tZ)(i.xv, {
                    sx: {
                        marginBottom: 10,
                        fontFamily: "body",
                        fontWeight: 600,
                        fontSize: ["s", null, null, null, "m"]
                    }
                }, n)
            }
        },
        42356: function(t, n, e) {
            "use strict";
            e.d(n, {
                Z: function() {
                    return s
                }
            });
            e(67294);
            var r = e(11191),
                i = e(61138),
                o = e(11319),
                a = e(57807),
                u = e(42164);

            function s(t) {
                var n = t.label,
                    e = t.amountInETH,
                    s = t.className;
                return (0, r.tZ)(i.xu, {
                    className: s
                }, (0, r.tZ)(i.xv, {
                    variant: "h.body",
                    sx: {
                        marginBottom: 5
                    }
                }, n), (0, r.tZ)(a.Z, null, (0, u.Bt)(Number(e))), (0, r.tZ)(i.xv, {
                    variant: "h.xs",
                    sx: {
                        color: "black.60"
                    }
                }, (0, r.tZ)(o.Z, {
                    amount: e
                })))
            }
        },
        72866: function(t, n, e) {
            "use strict";
            e.d(n, {
                Z: function() {
                    return a
                }
            });
            e(67294);
            var r = e(11191),
                i = e(61138),
                o = e(75188);

            function a(t) {
                var n = t.href,
                    e = t.children;
                return (0, r.tZ)(i.kC, {
                    sx: {
                        justifyContent: "center"
                    }
                }, (0, r.tZ)(o.ZP, {
                    href: n
                }, (0, r.tZ)(i.zx, {
                    as: "a",
                    variant: "ghost",
                    sx: {
                        fontSize: "xs",
                        borderColor: "black.10",
                        height: 56,
                        paddingTop: 14,
                        "@media (hover: hover)": {
                            "&:hover": {
                                borderColor: "black.100",
                                transform: "translateY(-4px)"
                            }
                        }
                    }
                }, e)))
            }
        },
        86172: function(t, n, e) {
            "use strict";
            e.d(n, {
                Z: function() {
                    return f
                }
            });
            var r = e(26265),
                i = (e(67294), e(11191)),
                o = e(61138),
                a = e(71522),
                u = e(75188),
                s = e(38918),
                l = e(91370);

            function c(t, n) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }

            function d(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? c(Object(e), !0).forEach((function(n) {
                        (0, r.Z)(t, n, e[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : c(Object(e)).forEach((function(n) {
                        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                    }))
                }
                return t
            }

            function f(t) {
                var n = t.user,
                    e = t.className,
                    r = (0, s.mf)(n),
                    c = d(d({}, l.o), {}, {
                        paddingRight: [20, 20]
                    });
                return r ? (0, i.tZ)(u.ZP, {
                    href: "/".concat(r)
                }, (0, i.tZ)("a", {
                    sx: l.A,
                    className: e
                }, (0, i.tZ)(a.Z, d(d({}, t), {}, {
                    sx: c,
                    className: e
                })))) : (0, i.tZ)(o.kC, {
                    sx: d(d({}, l.A), {}, {
                        pointerEvents: "none"
                    }),
                    className: e
                }, (0, i.tZ)(a.Z, d(d({}, t), {}, {
                    sx: c
                })))
            }
        },
        11505: function(t, n, e) {
            "use strict";
            e.d(n, {
                Z: function() {
                    return a
                }
            });
            e(67294);
            var r = e(11191),
                i = e(65073),
                o = e(86172);

            function a(t) {
                var n, e = t.publicKey,
                    a = t.className,
                    u = (0, i.ji)({
                        publicKey: e,
                        refetchOnWindowFocus: !1
                    }),
                    s = u.data,
                    l = u.isLoading,
                    c = {
                        publicKey: e
                    };
                return (0, r.tZ)(o.Z, {
                    user: null !== (n = null === s || void 0 === s ? void 0 : s.user) && void 0 !== n ? n : c,
                    className: a,
                    isLoading: l
                })
            }
        },
        91370: function(t, n, e) {
            "use strict";
            e.d(n, {
                A: function() {
                    return i
                },
                o: function() {
                    return o
                }
            });
            var r = e(51250),
                i = {
                    display: "flex",
                    justifyContent: "flex-start",
                    textDecoration: "none"
                },
                o = {
                    padding: [8, 11],
                    background: "#ffffff",
                    display: "flex",
                    boxShadow: "s",
                    alignItems: "center",
                    borderRadius: "9999px",
                    transition: r.pB.smooth.fast,
                    willChange: "transform",
                    "@media (hover: hover)": {
                        "&:hover": {
                            boxShadow: "m",
                            transform: "translateY(-2px)"
                        },
                        "&:active": {
                            boxShadow: "s",
                            transform: "translateY(0)"
                        }
                    }
                }
        },
        71067: function(t, n, e) {
            "use strict";
            e.d(n, {
                Z: function() {
                    return h
                }
            });
            var r = e(809),
                i = e.n(r),
                o = e(92447),
                a = e(27261),
                u = e(88767),
                s = e(22527),
                l = e(90035),
                c = e(3761),
                d = e(79026),
                f = e(36765),
                p = e(64105),
                x = e(32624);

            function v() {
                var t = (0, a.Z)(['\n  query hasuraUsersFeed(\n    $publicKey: String!\n    $userIds: [String!]!\n    $limit: Int!\n    $offset: Int!\n  ) {\n    users: user(\n      limit: $limit\n      offset: $offset\n      order_by: { createdAt: desc }\n      where: {\n        publicKey: { _in: $userIds }\n        moderationStatus: { _eq: "ACTIVE" }\n      }\n    ) {\n      ...HasuraFeedUserFragment\n    }\n  }\n  ', "\n"]);
                return v = function() {
                    return t
                }, t
            }
            var Z = (0, s.ZP)(v(), c.Qu);

            function m() {
                return (m = (0, o.Z)(i().mark((function t(n) {
                    var e, r, o, a, u, s, c;
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e = n.publicKey, r = n.userIds, o = n.limit, a = n.offset, u = (0, l.ot)(), t.next = 4, u.request(Z, {
                                    publicKey: e,
                                    userIds: r,
                                    limit: o,
                                    offset: a
                                });
                            case 4:
                                return s = t.sent, c = s.users, t.abrupt("return", c);
                            case 7:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function h(t) {
                var n = t.publicKey,
                    e = t.userIds,
                    r = t.refetchOnWindowFocus,
                    i = void 0 !== r && r,
                    o = t.limit,
                    a = void 0 === o ? x.KB : o,
                    s = (0, f.vz)(n);
                return (0, u.useInfiniteQuery)([d.V.FeedFeaturedCreators, {
                    publicAddress: s
                }], (function(t) {
                    var n = t.pageParam;
                    return function(t) {
                        return m.apply(this, arguments)
                    }({
                        publicKey: s,
                        userIds: e,
                        limit: a,
                        offset: a * (void 0 === n ? 0 : n)
                    })
                }), {
                    refetchOnWindowFocus: i,
                    getNextPageParam: p.Hd
                })
            }
        },
        81830: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                __N_SSG: function() {
                    return ht
                },
                default: function() {
                    return bt
                }
            });
            var r = e(67294),
                i = e(11191),
                o = e(61138),
                a = e(59536),
                u = e(92931),
                s = e(1728),
                l = e(21056),
                c = e(50070),
                d = e(72866),
                f = e(36765),
                p = e(65073),
                x = e(6381);

            function v(t) {
                var n = t.featuredArtworks,
                    e = t.publicAddress,
                    r = (0, p.ZP)({
                        publicKey: e,
                        refetchOnWindowFocus: !1
                    }).data;
                if (!n) return null;
                var a = Z();
                return (0, i.tZ)(u.Z, {
                    sx: a.body
                }, (0, i.tZ)(c.Z, {
                    linkHref: "/artworks",
                    linkText: "View all artworks"
                }, "Featured artworks"), (0, i.tZ)(o.rj, {
                    gap: "l"
                }, (0, i.tZ)(s.Z, null, n.map((function(t) {
                    return (0, i.tZ)(l.ZP, {
                        artwork: t,
                        creator: t.creator,
                        mostRecentActiveAuction: t.mostRecentActiveAuction,
                        isOwner: (0, f.yv)([e, t.ownedOrListedBy.id]),
                        user: null === r || void 0 === r ? void 0 : r.user,
                        key: t.id
                    })
                }))), (0, i.tZ)(d.Z, {
                    href: "/artworks"
                }, "View all artworks")))
            }
            var Z = function() {
                    return {
                        body: {
                            position: x.Ep,
                            zIndex: 4
                        }
                    }
                },
                m = e(73172);

            function h(t) {
                var n = t.articles;
                return (0, i.tZ)(u.Z, {
                    sx: {
                        position: x.Ep,
                        zIndex: 4
                    }
                }, (0, i.tZ)(c.Z, {
                    linkHref: "/blog",
                    linkText: "View all articles"
                }, "Blog"), (0, i.tZ)(o.rj, {
                    gap: "l"
                }, (0, i.tZ)(m.d, {
                    articles: n
                }), (0, i.tZ)(d.Z, {
                    href: "/blog"
                }, "View all articles")))
            }
            var b = e(88767),
                g = e(71067),
                y = e(87132),
                w = e(79026),
                k = e(52391);

            function j(t) {
                var n, e = t.publicAddress,
                    r = t.creatorIds,
                    a = (0, b.useQueryClient)(),
                    u = (0, g.Z)({
                        publicKey: e,
                        userIds: r,
                        limit: 80
                    }),
                    s = u.data,
                    l = u.isLoading,
                    c = (0, f.SD)(null !== (n = null === s || void 0 === s ? void 0 : s.pages) && void 0 !== n ? n : []),
                    p = (0, k.vC)(r, c);
                return (0, i.tZ)(o.rj, {
                    gap: "l"
                }, (0, i.tZ)(y.Z, {
                    publicAddress: e,
                    isFetching: !1,
                    isLoading: l,
                    creators: p,
                    handleNextPage: function() {},
                    enableHeader: !0,
                    onFollowUpdate: function() {
                        a.invalidateQueries(w.V.FeedFeaturedCreators), a.invalidateQueries(w.V.UserFollowCounts), a.invalidateQueries(w.V.FollowsByUserPublicKeys)
                    },
                    noMoreResults: !0
                }), (0, i.tZ)(d.Z, {
                    href: "/creators"
                }, "View all creators"))
            }
            var O, P = e(2414),
                A = e(86172),
                I = e(26265),
                C = e(96626),
                E = e(62375),
                S = e(49461);
            ! function(t) {
                t.Portrait = "portrait", t.Landscape = "landscape", t.Square = "square"
            }(O || (O = {}));
            var T = e(86668),
                B = e(79640),
                D = (0, C.iv)({
                    width: "100%"
                })();

            function R(t) {
                var n, e, r, a, u, s = t.artwork,
                    l = t.orientation,
                    c = (0, B.RY)(s),
                    d = (0, B.AI)(s),
                    f = (0, B.Wv)(c),
                    p = (0, B.vP)(c),
                    x = (n = {}, (0, I.Z)(n, O.Landscape, [null, null, 400]), (0, I.Z)(n, O.Portrait, [null, null, "60vh"]), n),
                    v = (0, I.Z)({}, O.Square, [null, null, 500]);
                return f ? (0, i.tZ)(E.AQ, {
                    assetUrl: c,
                    posterUrl: d,
                    sx: {
                        maxHeight: null !== (a = x[l]) && void 0 !== a ? a : "none",
                        maxWidth: null !== (u = v[l]) && void 0 !== u ? u : "100%",
                        margin: "auto"
                    }
                }) : p ? (0, i.tZ)(o.xu, {
                    sx: F.model
                }, (0, i.tZ)(S.Z, {
                    src: c,
                    className: D.className
                }), (0, i.tZ)(o.xu, {
                    sx: F.threeDIcon
                }, (0, i.tZ)(o.xu, {
                    sx: {
                        width: 20
                    }
                }, (0, i.tZ)(T.Z, null)), (0, i.tZ)(o.xv, {
                    variant: "h.xs",
                    sx: {
                        ml: "xxs"
                    }
                }, "3D"))) : (0, i.tZ)("img", {
                    src: c,
                    alt: null === s || void 0 === s ? void 0 : s.name,
                    sx: {
                        maxHeight: null !== (e = x[l]) && void 0 !== e ? e : "none",
                        maxWidth: null !== (r = v[l]) && void 0 !== r ? r : "100%",
                        margin: "auto"
                    }
                })
            }
            var F = {
                    model: {
                        display: "flex",
                        height: [400, null, 500],
                        width: "100%",
                        boxShadow: "inset 0 0 0 2px rgba(0,0,0,0.1)",
                        borderRadius: 20,
                        position: x.Ep,
                        overflow: "hidden",
                        pointerEvents: x.SE
                    },
                    threeDIcon: {
                        display: "flex",
                        position: x.vK,
                        top: [18, null, 25],
                        left: [18, null, 25],
                        zIndex: 2,
                        opacity: .5,
                        color: "black.100"
                    }
                },
                N = e(42356),
                _ = e(11505),
                z = e(38981),
                K = e(54015),
                L = e(35538),
                H = e(50779),
                V = e(64105),
                W = e(18506);

            function $(t) {
                var n = t.auction,
                    e = t.artwork,
                    r = t.isLoading,
                    a = (0, H.ty)(null === n || void 0 === n ? void 0 : n.dateEnding),
                    u = (0, H.l$)(n),
                    s = (0, W.xq)(e),
                    l = (0, V.V_)(s),
                    c = {
                        paddingRight: [null, "l"],
                        borderRight: [null, "solid 1px"],
                        borderColor: [null, "black.10"],
                        marginRight: [null, "l"],
                        marginBottom: ["m", 0],
                        textAlign: ["left"],
                        whiteSpace: "pre"
                    };
                return r ? (0, i.tZ)(o.kC, {
                    sx: {
                        flexDirection: ["column", "row"]
                    }
                }, (0, i.tZ)(M, {
                    sx: c
                }), (0, i.tZ)(M, null)) : l ? (0, i.tZ)(o.kC, {
                    sx: {
                        flexDirection: "column"
                    }
                }, (0, i.tZ)(o.xv, {
                    variant: "h.body",
                    sx: {
                        marginBottom: 5
                    }
                }, "Owned by"), (0, i.tZ)(o.kC, {
                    sx: {
                        marginY: "auto"
                    }
                }, (0, i.tZ)(L.Z, {
                    publicKey: n.highestBid.bidder.id
                }, (0, i.tZ)(_.Z, {
                    publicKey: n.highestBid.bidder.id
                })))) : u ? null : a ? (0, i.tZ)(o.kC, {
                    sx: {
                        flexDirection: ["column", "row"]
                    }
                }, (0, i.tZ)(N.Z, {
                    label: "Sold for",
                    amountInETH: n.highestBid.amountInETH,
                    sx: c
                }), (0, i.tZ)(o.kC, {
                    sx: {
                        flexDirection: "column"
                    }
                }, (0, i.tZ)(o.xv, {
                    variant: "h.body",
                    sx: {
                        marginBottom: 5
                    }
                }, "Owned by"), (0, i.tZ)(o.kC, {
                    sx: {
                        marginY: "auto"
                    }
                }, (0, i.tZ)(L.Z, {
                    publicKey: n.highestBid.bidder.id
                }, (0, i.tZ)(_.Z, {
                    publicKey: n.highestBid.bidder.id
                }))))) : null !== n && void 0 !== n && n.highestBid ? (0, i.tZ)(o.kC, {
                    sx: {
                        flexDirection: ["column", "row"]
                    }
                }, (0, i.tZ)(N.Z, {
                    label: "Current Bid",
                    amountInETH: n.highestBid.amountInETH,
                    sx: c
                }), (0, i.tZ)(o.xu, {
                    sx: {
                        textAlign: "left",
                        maxWidth: 340
                    }
                }, (0, i.tZ)(z.ZP, {
                    endDate: null === n || void 0 === n ? void 0 : n.dateEnding
                }))) : (0, i.tZ)(N.Z, {
                    label: "Reserve Price",
                    amountInETH: n.reservePriceInETH,
                    sx: {
                        textAlign: "left"
                    }
                })
            }

            function M(t) {
                var n = t.className;
                return (0, i.tZ)(o.xu, {
                    className: n
                }, (0, i.tZ)(K.Z, {
                    height: [18, null, null, null, 20],
                    width: 80,
                    sx: {
                        marginBottom: [7, null, null, null, 8]
                    }
                }), (0, i.tZ)(K.Z, {
                    height: [35, null, null, null, 43],
                    width: 150,
                    sx: {
                        marginBottom: [7, null, null, null, 8]
                    }
                }), (0, i.tZ)(K.Z, {
                    height: [18, null, null, null, 20],
                    width: 50
                }))
            }
            var Q = e(75188);

            function q(t) {
                var n = t.artwork,
                    e = t.artworkPath;
                return (0, i.tZ)(o.xu, {
                    sx: {
                        paddingTop: "s"
                    }
                }, (0, i.tZ)(Q.ZP, {
                    href: e
                }, (0, i.tZ)("a", {
                    sx: {
                        display: "block",
                        textDecoration: "none",
                        color: "black.100"
                    }
                }, (0, i.tZ)(o.X6, {
                    variant: "h.l",
                    sx: {
                        fontSize: ["l", null, "xl", "xxl"]
                    }
                }, n.name))))
            }

            function Y(t, n) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }

            function U(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? Y(Object(e), !0).forEach((function(n) {
                        (0, I.Z)(t, n, e[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Y(Object(e)).forEach((function(n) {
                        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                    }))
                }
                return t
            }
            var X = {
                maxWidth: [null, null, 500],
                gap: [10, null, "s"]
            };

            function G(t) {
                var n = t.isAuctionOpen,
                    e = t.artworkPath,
                    r = t.minutesRemaining < 15;
                return t.isLoading ? (0, i.tZ)(J, null) : !n || r ? (0, i.tZ)(o.xu, {
                    sx: X
                }, (0, i.tZ)(Q.ZP, {
                    href: e
                }, (0, i.tZ)("a", {
                    sx: {
                        display: "inline-block"
                    }
                }, (0, i.tZ)(o.zx, {
                    variant: "outline",
                    sx: {
                        paddingX: ["xl", "xl", "xl"],
                        width: ["100%", "auto"]
                    }
                }, "View artwork")))) : (0, i.tZ)(o.rj, {
                    sx: U(U({}, X), {}, {
                        gridTemplateColumns: [null, "1fr 1fr", "3fr 2fr"]
                    })
                }, (0, i.tZ)(Q.ZP, {
                    href: "".concat(e, "/bid")
                }, (0, i.tZ)("a", {
                    sx: {
                        display: "block"
                    }
                }, (0, i.tZ)(o.zx, {
                    sx: {
                        width: "100%"
                    }
                }, "Place a bid"))), (0, i.tZ)(Q.ZP, {
                    href: e
                }, (0, i.tZ)("a", {
                    sx: {
                        display: "block"
                    }
                }, (0, i.tZ)(o.zx, {
                    variant: "outline",
                    sx: {
                        width: "100%"
                    }
                }, "View artwork"))))
            }

            function J() {
                return (0, i.tZ)(o.rj, {
                    sx: U(U({}, X), {}, {
                        gridTemplateColumns: [null, "1fr 1fr", "3fr 2fr"]
                    })
                }, (0, i.tZ)(o.xu, null, (0, i.tZ)(K.Z, {
                    width: "100%",
                    height: 60,
                    sx: {
                        borderRadius: 15
                    }
                })), (0, i.tZ)(o.xu, null, (0, i.tZ)(K.Z, {
                    width: "100%",
                    height: 60,
                    sx: {
                        borderRadius: 15
                    }
                })))
            }
            var tt = e(95953),
                nt = e(36839);

            function et(t) {
                var n = t.artwork,
                    e = function(t) {
                        var n = t.artwork,
                            e = t.refetchInterval,
                            r = void 0 === e ? 15e3 : e,
                            i = t.staleTime,
                            o = void 0 === i ? 0 : i,
                            a = t.refetchOnWindowFocus,
                            u = void 0 !== a && a,
                            s = null === n || void 0 === n ? void 0 : n.tokenId;
                        return (0, b.useQuery)(["getGraphAndServerArtwork", {
                            tokenId: s
                        }], (function() {
                            return (0, nt.SC)({
                                tokenId: s
                            })
                        }), {
                            enabled: Boolean(s),
                            initialData: n,
                            staleTime: o,
                            refetchInterval: r,
                            refetchOnWindowFocus: u
                        })
                    }({
                        artwork: n
                    }),
                    a = e.data,
                    u = e.isError,
                    s = e.isFetchedAfterMount,
                    l = (0, V.a4)({
                        artwork: n,
                        user: n.creator
                    }),
                    c = n.width / n.height,
                    d = rt(c),
                    f = null === a || void 0 === a ? void 0 : a.mostRecentActiveAuction,
                    p = null === f || void 0 === f ? void 0 : f.dateEnding,
                    x = (0, H.u8)(f),
                    v = (0, r.useState)((0, tt.AK)(p)),
                    Z = v[0],
                    m = v[1];
                (0, P.Z)((function() {
                    var t = (0, tt.AK)(p);
                    m(t)
                }), 1e3);
                var h = it(),
                    g = !s && !u;
                return (0, i.tZ)(o.rj, {
                    sx: h.grid
                }, (0, i.tZ)(Q.ZP, {
                    href: l
                }, (0, i.tZ)("a", {
                    sx: h.image
                }, (0, i.tZ)(R, {
                    artwork: n,
                    orientation: d
                }))), (0, i.tZ)(o.xu, {
                    sx: h.info
                }, (0, i.tZ)(o.kC, {
                    sx: {
                        paddingTop: ["m", null, 0]
                    }
                }, (0, i.tZ)(L.Z, {
                    publicKey: n.creator.publicKey
                }, (0, i.tZ)(A.Z, {
                    user: n.creator
                }))), (0, i.tZ)(o.rj, {
                    gap: ["m", null, null, "l"]
                }, (0, i.tZ)(q, {
                    artwork: n,
                    artworkPath: l
                }), (0, i.tZ)($, {
                    artwork: a,
                    auction: null === a || void 0 === a ? void 0 : a.mostRecentActiveAuction,
                    minutesRemaining: Z,
                    isLoading: g
                }), (0, i.tZ)(G, {
                    artworkPath: l,
                    isAuctionOpen: x,
                    minutesRemaining: Z,
                    isLoading: g
                }))))
            }
            var rt = function(t) {
                    return t < 1 ? O.Portrait : 1 === t ? O.Square : O.Landscape
                },
                it = function() {
                    return {
                        grid: {
                            paddingTop: [null, null, "xxl", "xxxl"],
                            gridTemplateColumns: [null, null, "repeat(2,1fr)"],
                            gap: [0, null, "l", "xl", "xxxl"],
                            alignItems: [null, null, "center"],
                            minHeight: "calc(80vh - 86px)"
                        },
                        image: {
                            maxWidth: [null, null, 640],
                            marginLeft: [null, null, "auto"],
                            width: "100%"
                        },
                        info: {
                            paddingBottom: [null, null, null, "m"]
                        }
                    }
                },
                ot = e(10527),
                at = e(85893),
                ut = e(44559),
                st = e(85010),
                lt = e(72694),
                ct = e(16174),
                dt = e(28330),
                ft = e(80141),
                pt = (0, C.zo)(ft.Z, {
                    width: 360
                });

            function xt() {
                return (0, at.jsx)(ct.Z, {
                    css: {
                        paddingY: "$9",
                        background: "$black95",
                        "@bp1": {
                            paddingY: 152,
                            overflowX: "clip"
                        }
                    },
                    children: (0, at.jsx)(ut.Z, {
                        css: {
                            "@bp1": {
                                position: "relative",
                                zIndex: 1
                            }
                        },
                        children: (0, at.jsxs)(dt.Z, {
                            css: {
                                maxWidth: 880,
                                marginX: "auto",
                                gridRowGap: "$6",
                                textAlign: "center",
                                "@bp1": {
                                    gridRowGap: "$8"
                                }
                            },
                            children: [(0, at.jsxs)(ct.Z, {
                                css: {
                                    display: "none",
                                    "@bp3": {
                                        display: "flex",
                                        position: "absolute",
                                        left: "-2%",
                                        top: "-50%",
                                        bottom: "-17%",
                                        zIndex: -1,
                                        flexDirection: "column",
                                        justifyContent: "space-between"
                                    }
                                },
                                children: [(0, at.jsx)(pt, {
                                    src: "/images/shapes/prism.png",
                                    alt: "prism"
                                }), (0, at.jsx)(pt, {
                                    src: "/images/shapes/neocube.png",
                                    alt: "cube"
                                })]
                            }), (0, at.jsxs)("picture", {
                                children: [(0, at.jsx)("source", {
                                    srcSet: "/images/svg-text/this-is-the-new-creative-economy.svg",
                                    media: "(min-width: 800px)"
                                }), (0, at.jsx)("img", {
                                    src: "/images/svg-text/this-is-the-new-creative-economy-mobile.svg",
                                    alt: "This is the new creative economy.",
                                    style: {
                                        minWidth: 284
                                    }
                                })]
                            }), (0, at.jsx)(lt.Z, {
                                css: {
                                    fontFamily: "$body",
                                    color: "$black40",
                                    letterSpacing: -.2,
                                    fontSize: "$3",
                                    textAlign: "center",
                                    lineHeight: 1.3,
                                    maxWidth: 428,
                                    marginX: "auto"
                                },
                                children: "We\u2019re bringing digital creators, crypto natives, and collectors together to move culture forward."
                            }), (0, at.jsx)(st.Z, {
                                color: "blue",
                                shape: "round",
                                size: "large",
                                css: {
                                    width: 230,
                                    margin: "auto",
                                    fontSize: "$2"
                                },
                                children: (0, at.jsx)(Q.ZP, {
                                    href: "/explore",
                                    children: (0, at.jsx)("a", {
                                        style: {
                                            textDecoration: "none",
                                            color: "inherit"
                                        },
                                        children: "Explore Foundation"
                                    })
                                })
                            }), (0, at.jsxs)(ct.Z, {
                                css: {
                                    display: "none",
                                    "@bp3": {
                                        display: "flex",
                                        position: "absolute",
                                        right: "-2%",
                                        top: "-50%",
                                        bottom: "-25%",
                                        zIndex: -1,
                                        flexDirection: "column",
                                        justifyContent: "space-between"
                                    }
                                },
                                children: [(0, at.jsx)(pt, {
                                    src: "/images/shapes/sphere.png",
                                    alt: "sphere"
                                }), (0, at.jsx)(pt, {
                                    src: "/images/shapes/cube.png",
                                    alt: "cube"
                                })]
                            })]
                        })
                    })
                })
            }
            var vt = e(21208),
                Zt = e(95324),
                mt = e(34056),
                ht = !0;

            function bt(t) {
                var n = t.preview,
                    e = t.articles,
                    r = t.featuredCreators,
                    s = t.featuredArtworks,
                    l = t.featuredArtwork,
                    c = r.map((function(t) {
                        return (0, f.Qf)(t.publicKey)
                    })),
                    d = (0, Zt.Z)().user,
                    p = null === d || void 0 === d ? void 0 : d.publicAddress;
                return (0, i.tZ)(a.Z, {
                    title: !1,
                    type: mt.c7.maximal
                }, n && (0, i.tZ)(vt.Z, null), l && (0, i.tZ)(u.Z, null, (0, i.tZ)(et, {
                    artwork: l
                })), (0, i.tZ)(o.rj, {
                    sx: {
                        paddingBottom: ["l", "xl", "xxl", "xxxl"],
                        gap: ["s", null, "l"]
                    }
                }, (0, i.tZ)(ot.Z, null), (0, i.tZ)(o.rj, {
                    sx: {
                        gap: ["xl", "xxl", "xxxl"]
                    }
                }, (0, i.tZ)(v, {
                    featuredArtworks: s,
                    publicAddress: p
                }), (0, i.tZ)(u.Z, {
                    sx: {
                        position: "relative",
                        zIndex: 4
                    }
                }, (0, i.tZ)(j, {
                    creatorIds: c,
                    publicAddress: p
                }))), (0, i.tZ)(h, {
                    articles: e
                })), (0, i.tZ)(xt, null))
            }
        },
        63144: function(t) {
            "use strict";
            var n = self.fetch.bind(self);
            t.exports = n, t.exports.default = t.exports
        },
        45301: function(t, n, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return e(81830)
            }])
        },
        90578: function() {},
        4706: function(t, n, e) {
            "use strict";

            function r(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
            e.d(n, {
                Z: function() {
                    return r
                }
            })
        },
        74047: function(t, n, e) {
            "use strict";

            function r(t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
            }
            e.d(n, {
                Z: function() {
                    return r
                }
            })
        },
        52700: function(t, n, e) {
            "use strict";

            function r(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var r = n[e];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function i(t, n, e) {
                return n && r(t.prototype, n), e && r(t, e), t
            }
            e.d(n, {
                Z: function() {
                    return i
                }
            })
        },
        20775: function(t, n, e) {
            "use strict";

            function r(t) {
                return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            e.d(n, {
                Z: function() {
                    return r
                }
            })
        },
        8127: function(t, n, e) {
            "use strict";

            function r(t, n) {
                return (r = Object.setPrototypeOf || function(t, n) {
                    return t.__proto__ = n, t
                })(t, n)
            }

            function i(t, n) {
                if ("function" !== typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), n && r(t, n)
            }
            e.d(n, {
                Z: function() {
                    return i
                }
            })
        },
        44102: function(t, n, e) {
            "use strict";

            function r(t) {
                return (r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            e.d(n, {
                Z: function() {
                    return o
                }
            });
            var i = e(4706);

            function o(t, n) {
                return !n || "object" !== r(n) && "function" !== typeof n ? (0, i.Z)(t) : n
            }
        },
        67822: function(t, n, e) {
            "use strict";
            var r = e(69098),
                i = e(5537),
                o = e(5272),
                a = e(49405),
                u = e(13462),
                s = e(45596),
                l = (0, r.Z)((function t(n, e, r) {
                    if (0 === n.length) return e;
                    var l = n[0];
                    if (n.length > 1) {
                        var c = !(0, s.Z)(r) && (0, i.Z)(l, r) ? r[l] : (0, a.Z)(n[1]) ? [] : {};
                        e = t(Array.prototype.slice.call(n, 1), e, c)
                    }
                    if ((0, a.Z)(l) && (0, o.Z)(r)) {
                        var d = [].concat(r);
                        return d[l] = e, d
                    }
                    return (0, u.Z)(l, e, r)
                }));
            n.Z = l
        },
        34146: function(t, n, e) {
            "use strict";
            e.d(n, {
                Z: function() {
                    return l
                }
            });
            var r = e(81353),
                i = e(69098),
                o = e(32087),
                a = e(5537),
                u = (0, i.Z)((function(t, n, e) {
                    var r, i = {};
                    for (r in n)(0, a.Z)(r, n) && (i[r] = (0, a.Z)(r, e) ? t(r, n[r], e[r]) : n[r]);
                    for (r in e)(0, a.Z)(r, e) && !(0, a.Z)(r, i) && (i[r] = e[r]);
                    return i
                })),
                s = (0, i.Z)((function t(n, e, r) {
                    return u((function(e, r, i) {
                        return (0, o.Z)(r) && (0, o.Z)(i) ? t(n, r, i) : n(e, r, i)
                    }), e, r)
                })),
                l = (0, r.Z)((function(t, n) {
                    return s((function(t, n, e) {
                        return n
                    }), t, n)
                }))
        },
        2414: function(t, n, e) {
            "use strict";
            e.d(n, {
                Z: function() {
                    return a
                }
            });
            var r = e(67294),
                i = 0,
                o = {},
                a = function(t, n) {
                    void 0 === n && (n = 0);
                    var e = (0, r.useRef)((function() {}));
                    (0, r.useEffect)((function() {
                        e.current = t
                    })), (0, r.useEffect)((function() {
                        if (null !== n) {
                            var t = function(t, n) {
                                var e, r = i++;
                                if (o[n]) o[n].listeners[r] = t;
                                else {
                                    var a = setInterval((function() {
                                        for (var t, e = o[n].listeners, r = !1, i = 0, a = Object.values(e); i < a.length; i++) {
                                            var u = a[i];
                                            try {
                                                u()
                                            } catch (s) {
                                                r = !0, t = s
                                            }
                                        }
                                        if (r) throw t
                                    }), n);
                                    o[n] = {
                                        ms: n,
                                        timer: a,
                                        listeners: (e = {}, e[r] = t, e)
                                    }
                                }
                                return {
                                    bucket: o[n],
                                    id: r
                                }
                            }((function() {
                                return e.current()
                            }), n);
                            return function() {
                                return function(t) {
                                    var n = t.bucket,
                                        e = t.id;
                                    delete n.listeners[e];
                                    var r = !1;
                                    for (var i in n.listeners) {
                                        r = !0;
                                        break
                                    }
                                    r || (clearInterval(n.timer), delete o[n.ms])
                                }(t)
                            }
                        }
                    }), [n])
                }
        },
        14679: function(t, n, e) {
            "use strict";

            function r(t, n, e, r) {
                if (void 0 === e && (e = function() {}), void 0 === r && (r = {}), !t) throw new Error("Target element to observe should be a valid DOM Node");
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
                    u = i.modLeft,
                    s = i.modBottom,
                    l = i.modRight,
                    c = i.threshold;
                if (!Array.isArray(c) && "number" != typeof c) throw new Error("threshold should be a number or an array of numbers");
                var d = Array.isArray(c) ? c.map((function(t) {
                        return Math.floor(t % 101) / 100
                    })) : [Math.floor(c ? c % 101 : 0) / 100],
                    f = Math.min.apply(Math, d),
                    p = {
                        root: o instanceof Node ? o : null,
                        rootMargin: a + " " + l + " " + s + " " + u,
                        threshold: d
                    },
                    x = new IntersectionObserver((function(r, i) {
                        var o = r.filter((function(n) {
                                return n.target === t
                            }))[0],
                            a = function() {
                                return i.unobserve(t)
                            };
                        o && (o.isInViewport = o.isIntersecting && o.intersectionRatio >= f, o.isInViewport ? n(o, a, t) : e(o, a, t))
                    }), p);
                return x.observe(t),
                    function() {
                        return x.unobserve(t)
                    }
            }
            e.d(n, {
                Z: function() {
                    return u
                }
            });
            var i = e(67294);

            function o(t) {
                return "object" == typeof t && "current" in t
            }

            function a(t) {
                return "function" == typeof t && "function" == typeof t.call
            }

            function u(t) {
                void 0 === t && (t = {});
                var n = (0, i.useState)(null),
                    e = n[0],
                    u = n[1],
                    s = t.target,
                    l = t.viewport,
                    c = function(t, n) {
                        var e = {};
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && -1 === n.indexOf(r) && (e[r] = t[r]);
                        return e
                    }(t, ["target", "viewport"]),
                    d = (0, i.useRef)(null),
                    f = (0, i.useRef)(null),
                    p = (0, i.useCallback)((function(t) {
                        d.current = t, l && (a(l) ? l(t) : o(l) && (l.current = t))
                    }), [d, l]),
                    x = (0, i.useCallback)((function(t) {
                        f.current = t, s && (a(s) ? s(t) : o(s) && (s.current = t))
                    }), [f, s]);
                return (0, i.useEffect)((function() {
                    if (f.current) return r(f.current, (function() {
                        return u(!0)
                    }), (function() {
                        return u(!1)
                    }), Object.assign({}, c, {
                        viewport: d.current
                    }))
                }), [f.current, c, d]), [e, x, p]
            }
        }
    },
    function(t) {
        t.O(0, [9351, 5132, 6870, 6624, 6019, 9536, 4774, 2359, 2003, 6839, 6814, 1596, 9774, 2888, 179], (function() {
            return n = 45301, t(t.s = n);
            var n
        }));
        var n = t.O();
        _N_E = n
    }
]);
//# sourceMappingURL=index-2b1ce7a8ad33c51ae943.js.map