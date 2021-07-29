(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6799], {
        11319: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return h
                }
            });
            var o = t(67294),
                r = t(11191),
                i = t(61138),
                a = t(88767),
                l = t(79026),
                u = t(809),
                s = t.n(u),
                c = t(92447),
                d = t(63144),
                y = t.n(d),
                m = "https://api.coingecko.com/api/v3";

            function Z() {
                return (Z = (0, c.Z)(s().mark((function e(n, t) {
                    var o, r;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return o = Object.assign({
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                }, t), e.next = 3, y()("".concat(m, "/").concat(n), o);
                            case 3:
                                return r = e.sent, e.next = 6, r.json();
                            case 6:
                                return e.abrupt("return", e.sent);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function f() {
                var e, n = (0, a.useQuery)([l.V.ETHPrice], (function() {
                        return function(e, n) {
                            return Z.apply(this, arguments)
                        }("simple/price?vs_currencies=usd&ids=ethereum", null)
                    }), {
                        refetchOnMount: !1,
                        refetchOnWindowFocus: !1,
                        staleTime: 36e5
                    }),
                    t = n.data;
                return {
                    isLoading: n.isLoading,
                    price: null === t || void 0 === t || null === (e = t.ethereum) || void 0 === e ? void 0 : e.usd
                }
            }
            var p = t(42164);

            function h(e) {
                var n = e.amount,
                    t = f(),
                    a = t.price,
                    l = t.isLoading,
                    u = parseFloat(n);
                return l ? (0, r.tZ)(i.xv, {
                    as: "span",
                    sx: {
                        opacity: 0
                    }
                }, "\u2014") : (0, r.tZ)(o.Fragment, null, (0, p.MV)(u * a))
            }
        },
        73381: function(e, n, t) {
            "use strict";
            var o = t(96626),
                r = t(16174),
                i = (0, o.zo)(r.Z, {
                    backgroundColor: "$black10",
                    height: 24,
                    width: 78,
                    borderRadius: "$1"
                });
            n.Z = i
        },
        56619: function(e, n, t) {
            "use strict";
            var o = t(96626),
                r = t(72694),
                i = (0, o.zo)(r.Z, {
                    fontFamily: "$body",
                    fontWeight: 600,
                    color: "$black60",
                    fontSize: "$1",
                    paddingLeft: 0,
                    "@bp2": {
                        fontSize: "$2"
                    },
                    "@bp4": {
                        paddingLeft: "$3"
                    }
                });
            n.Z = i
        },
        48827: function(e, n, t) {
            "use strict";
            var o = t(72694),
                r = (0, t(96626).zo)(o.Z, {
                    fontFamily: "$body",
                    fontWeight: 600,
                    fontSize: "$1",
                    letterSpacing: -.2,
                    whiteSpace: "nowrap",
                    "@bp2": {
                        fontSize: "$3"
                    }
                });
            n.Z = r
        },
        29505: function(e, n, t) {
            "use strict";
            var o = t(72694),
                r = (0, t(96626).zo)(o.Z, {
                    fontFamily: "$body",
                    fontWeight: 600,
                    fontSize: "$1",
                    color: "$black50"
                });
            n.Z = r
        },
        51183: function(e, n, t) {
            "use strict";
            var o = t(96626),
                r = t(72694),
                i = (0, o.zo)(r.Z, {
                    fontFamily: "$body",
                    fontWeight: 600,
                    fontSize: "$1",
                    letterSpacing: -.2,
                    marginBottom: "$1",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    "@bp2": {
                        fontSize: "$3"
                    }
                });
            n.Z = i
        },
        93447: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return u
                }
            });
            var o = t(85893),
                r = t(96626),
                i = t(85010),
                a = t(83416),
                l = (0, r.zo)(i.Z, {
                    fontSize: "$1",
                    paddingX: "$2",
                    paddingY: "$1",
                    minHeight: "auto",
                    borderRadius: 6,
                    backgroundColor: "transparent",
                    color: "$black60",
                    cursor: "pointer",
                    "@media (hover: hover)": {
                        "&:hover": {
                            color: "$white100",
                            backgroundColor: "$black100",
                            transform: "translateY(-2px)",
                            boxShadow: "$2"
                        }
                    },
                    variants: {
                        isActive: {
                            true: {
                                color: "$white100",
                                backgroundColor: "$black100",
                                "&:hover": {
                                    transform: "translateY(0)",
                                    boxShadow: "none"
                                }
                            }
                        }
                    }
                });

            function u(e) {
                var n = e.setCurrentTimeFilter,
                    t = e.currentTimeFilter;
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(l, {
                        onClick: function() {
                            return n(a.IL.OneDay)
                        },
                        isActive: t === a.IL.OneDay,
                        children: "1d"
                    }), (0, o.jsx)(l, {
                        css: {
                            marginLeft: "$2"
                        },
                        onClick: function() {
                            return n(a.IL.SevenDay)
                        },
                        isActive: t === a.IL.SevenDay,
                        children: "7d"
                    }), (0, o.jsx)(l, {
                        css: {
                            marginLeft: "$2"
                        },
                        onClick: function() {
                            return n(a.IL.ThirtyDay)
                        },
                        isActive: t === a.IL.ThirtyDay,
                        children: "30d"
                    }), (0, o.jsx)(l, {
                        css: {
                            marginLeft: "$2"
                        },
                        onClick: function() {
                            return n(a.IL.AllTime)
                        },
                        isActive: t === a.IL.AllTime,
                        children: "All Time"
                    })]
                })
            }
        },
        10511: function(e, n, t) {
            "use strict";
            var o = t(96626),
                r = t(72694),
                i = (0, o.zo)(r.Z, {
                    fontFamily: "$body",
                    fontWeight: 600,
                    fontSize: "$1",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    variants: {
                        hasNoUsername: {
                            true: {
                                fontFamily: "$mono",
                                fontWeight: 400,
                                fontSize: "$0",
                                color: "$black100"
                            }
                        },
                        hasNoName: {
                            true: {
                                fontSize: "$1",
                                "@bp2": {
                                    fontSize: "$3"
                                }
                            }
                        }
                    },
                    compoundVariants: [{
                        hasNoUsername: !0,
                        hasNoName: !0,
                        css: {
                            fontSize: "$0",
                            "@bp2": {
                                fontSize: "$2"
                            }
                        }
                    }]
                });
            n.Z = i
        },
        23005: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return h
                }
            });
            var o = t(88767),
                r = t(64105),
                i = t(809),
                a = t.n(i),
                l = t(26265),
                u = t(92447),
                s = t(27261),
                c = t(22527),
                d = t(90035),
                y = t(3761);

            function m() {
                var e = (0, s.Z)(["\n  query trendingCollectorsQuery(\n    $orderBy: trending_collector_order_by!\n    $offset: Int!\n    $limit: Int!\n  ) {\n    trendingCollectors: trending_collector(\n      order_by: [$orderBy]\n      offset: $offset\n      limit: $limit\n    ) {\n      oneDayCreatorsSupported\n      oneDayNumBought\n      oneDaySpent\n\n      oneWeekCreatorsSupported\n      oneWeekNumBought\n      oneWeekSpent\n\n      oneMonthCreatorsSupported\n      oneMonthNumBought\n      oneMonthSpent\n\n      totalCreatorsSupported\n      totalNumBought\n      totalSpent\n\n      user {\n        ...HasuraUserFragmentLight\n      }\n    }\n  }\n\n  ", "\n"]);
                return m = function() {
                    return e
                }, e
            }
            var Z = (0, c.ZP)(m(), y.hn);

            function f() {
                return (f = (0, u.Z)(a().mark((function e(n) {
                    var t, o, r, i, u, s;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = n.orderByField, o = n.limit, r = n.offset, i = (0, d.ot)(), e.next = 4, i.request(Z, {
                                    orderBy: (0, l.Z)({}, t, "desc"),
                                    limit: o,
                                    offset: r
                                });
                            case 4:
                                return u = e.sent, s = u.trendingCollectors, e.abrupt("return", s);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var p = t(79026);

            function h(e) {
                var n = e.orderByField,
                    t = e.limit,
                    i = void 0 === t ? 100 : t,
                    a = e.enabled,
                    l = void 0 === a || a,
                    u = e.refetchOnWindowFocus,
                    s = void 0 !== u && u;
                return (0, o.useInfiniteQuery)([p.V.TrendingCollectors, {
                    orderByField: n
                }], (function(e) {
                    var t = e.pageParam;
                    return function(e) {
                        return f.apply(this, arguments)
                    }({
                        orderByField: n,
                        limit: i,
                        offset: i * (void 0 === t ? 0 : t)
                    })
                }), {
                    enabled: Boolean(n && l),
                    getNextPageParam: r.Hd,
                    refetchOnWindowFocus: s
                })
            }
        },
        8019: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return h
                }
            });
            var o = t(88767),
                r = t(64105),
                i = t(809),
                a = t.n(i),
                l = t(26265),
                u = t(92447),
                s = t(27261),
                c = t(22527),
                d = t(90035),
                y = t(3761);

            function m() {
                var e = (0, s.Z)(["\n  query trendingCreatorsQuery(\n    $orderBy: trending_creator_order_by!\n    $offset: Int!\n    $limit: Int!\n  ) {\n    trendingCreators: trending_creator(\n      order_by: [$orderBy]\n      offset: $offset\n      limit: $limit\n    ) {\n      oneDayVol\n      oneDayNumSold\n      oneDayCollectors\n      oneDayPrimaryVol\n      oneDaySecondaryVol\n\n      oneWeekVol\n      oneWeekNumSold\n      oneWeekCollectors\n      oneWeekPrimaryVol\n      oneWeekSecondaryVol\n\n      oneMonthVol\n      oneMonthNumSold\n      oneMonthCollectors\n      oneMonthPrimaryVol\n      oneMonthSecondaryVol\n\n      totalVol\n      totalNumSold\n      totalCollectors\n      totalPrimaryVol\n      totalSecondaryVol\n\n      user {\n        ...HasuraUserFragmentLight\n      }\n    }\n  }\n\n  ", "\n"]);
                return m = function() {
                    return e
                }, e
            }
            var Z = (0, c.ZP)(m(), y.hn);

            function f() {
                return (f = (0, u.Z)(a().mark((function e(n) {
                    var t, o, r, i, u, s;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = n.orderByField, o = n.limit, r = n.offset, i = (0, d.ot)(), e.next = 4, i.request(Z, {
                                    orderBy: (0, l.Z)({}, t, "desc"),
                                    limit: o,
                                    offset: r
                                });
                            case 4:
                                return u = e.sent, s = u.trendingCreators, e.abrupt("return", s);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var p = t(79026);

            function h(e) {
                var n = e.orderByField,
                    t = e.limit,
                    i = void 0 === t ? 100 : t,
                    a = e.enabled,
                    l = void 0 === a || a,
                    u = e.refetchOnWindowFocus,
                    s = void 0 !== u && u;
                return (0, o.useInfiniteQuery)([p.V.TrendingCreators, {
                    orderByField: n
                }], (function(e) {
                    var t = e.pageParam;
                    return function(e) {
                        return f.apply(this, arguments)
                    }({
                        orderByField: n,
                        limit: i,
                        offset: i * (void 0 === t ? 0 : t)
                    })
                }), {
                    enabled: Boolean(n && l),
                    getNextPageParam: r.Hd,
                    refetchOnWindowFocus: s
                })
            }
        },
        83416: function(e, n, t) {
            "use strict";
            var o, r, i;
            t.d(n, {
                    IL: function() {
                        return o
                    },
                    zJ: function() {
                        return r
                    },
                    cz: function() {
                        return i
                    }
                }),
                function(e) {
                    e[e.OneDay = 0] = "OneDay", e[e.SevenDay = 1] = "SevenDay", e[e.ThirtyDay = 2] = "ThirtyDay", e[e.AllTime = 3] = "AllTime"
                }(o || (o = {})),
                function(e) {
                    e.UniqueCollectors = "UniqueCollectors", e.NftsSold = "NftsSold", e.PrimarySales = "PrimarySales", e.SecondarySales = "SecondarySales", e.TotalVolume = "TotalVolume"
                }(r || (r = {})),
                function(e) {
                    e.CreatorsSupported = "CreatorsSupported", e.NftsBought = "NftsBought", e.TotalSpent = "TotalSpent"
                }(i || (i = {}))
        },
        48702: function(e, n, t) {
            "use strict";
            t.d(n, {
                Zp: function() {
                    return s
                },
                p3: function() {
                    return c
                },
                eG: function() {
                    return d
                }
            });
            var o = t(8598),
                r = t(29278),
                i = t(59211),
                a = t(21669),
                l = t(16946),
                u = t(83416),
                s = (0, o.Z)([
                    [(0, r.Z)(u.IL.OneDay), (0, i.Z)("oneDay")],
                    [(0, r.Z)(u.IL.SevenDay), (0, i.Z)("oneWeek")],
                    [(0, r.Z)(u.IL.ThirtyDay), (0, i.Z)("oneMonth")],
                    [(0, r.Z)(u.IL.AllTime), (0, i.Z)("total")]
                ]),
                c = (0, o.Z)([
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.OneDay), (0, l.Z)("orderByColumn", u.zJ.TotalVolume)]), (0, i.Z)("oneDayVol")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.OneDay), (0, l.Z)("orderByColumn", u.zJ.NftsSold)]), (0, i.Z)("oneDayNumSold")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.OneDay), (0, l.Z)("orderByColumn", u.zJ.UniqueCollectors)]), (0, i.Z)("oneDayCollectors")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.OneDay), (0, l.Z)("orderByColumn", u.zJ.PrimarySales)]), (0, i.Z)("oneDayPrimaryVol")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.OneDay), (0, l.Z)("orderByColumn", u.zJ.SecondarySales)]), (0, i.Z)("oneDaySecondaryVol")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.SevenDay), (0, l.Z)("orderByColumn", u.zJ.TotalVolume)]), (0, i.Z)("oneWeekVol")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.SevenDay), (0, l.Z)("orderByColumn", u.zJ.NftsSold)]), (0, i.Z)("oneWeekNumSold")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.SevenDay), (0, l.Z)("orderByColumn", u.zJ.UniqueCollectors)]), (0, i.Z)("oneWeekCollectors")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.SevenDay), (0, l.Z)("orderByColumn", u.zJ.PrimarySales)]), (0, i.Z)("oneWeekPrimaryVol")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.SevenDay), (0, l.Z)("orderByColumn", u.zJ.SecondarySales)]), (0, i.Z)("oneWeekSecondaryVol")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.ThirtyDay), (0, l.Z)("orderByColumn", u.zJ.TotalVolume)]), (0, i.Z)("oneMonthVol")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.ThirtyDay), (0, l.Z)("orderByColumn", u.zJ.NftsSold)]), (0, i.Z)("oneMonthNumSold")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.ThirtyDay), (0, l.Z)("orderByColumn", u.zJ.UniqueCollectors)]), (0, i.Z)("oneMonthCollectors")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.ThirtyDay), (0, l.Z)("orderByColumn", u.zJ.PrimarySales)]), (0, i.Z)("oneMonthPrimaryVol")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.ThirtyDay), (0, l.Z)("orderByColumn", u.zJ.SecondarySales)]), (0, i.Z)("oneMonthSecondaryVol")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.AllTime), (0, l.Z)("orderByColumn", u.zJ.TotalVolume)]), (0, i.Z)("totalVol")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.AllTime), (0, l.Z)("orderByColumn", u.zJ.NftsSold)]), (0, i.Z)("totalNumSold")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.AllTime), (0, l.Z)("orderByColumn", u.zJ.UniqueCollectors)]), (0, i.Z)("totalCollectors")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.AllTime), (0, l.Z)("orderByColumn", u.zJ.PrimarySales)]), (0, i.Z)("totalPrimaryVol")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.AllTime), (0, l.Z)("orderByColumn", u.zJ.SecondarySales)]), (0, i.Z)("totalSecondaryVol")]
                ]),
                d = (0, o.Z)([
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.OneDay), (0, l.Z)("orderByColumn", u.cz.CreatorsSupported)]), (0, i.Z)("oneDayCreatorsSupported")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.OneDay), (0, l.Z)("orderByColumn", u.cz.NftsBought)]), (0, i.Z)("oneDayNumBought")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.OneDay), (0, l.Z)("orderByColumn", u.cz.TotalSpent)]), (0, i.Z)("oneDaySpent")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.SevenDay), (0, l.Z)("orderByColumn", u.cz.CreatorsSupported)]), (0, i.Z)("oneWeekCreatorsSupported")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.SevenDay), (0, l.Z)("orderByColumn", u.cz.NftsBought)]), (0, i.Z)("oneWeekNumBought")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.SevenDay), (0, l.Z)("orderByColumn", u.cz.TotalSpent)]), (0, i.Z)("oneWeekSpent")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.ThirtyDay), (0, l.Z)("orderByColumn", u.cz.CreatorsSupported)]), (0, i.Z)("oneMonthCreatorsSupported")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.ThirtyDay), (0, l.Z)("orderByColumn", u.cz.NftsBought)]), (0, i.Z)("oneMonthNumBought")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.ThirtyDay), (0, l.Z)("orderByColumn", u.cz.TotalSpent)]), (0, i.Z)("oneMonthSpent")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.AllTime), (0, l.Z)("orderByColumn", u.cz.CreatorsSupported)]), (0, i.Z)("totalCreatorsSupported")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.AllTime), (0, l.Z)("orderByColumn", u.cz.NftsBought)]), (0, i.Z)("totalNumBought")],
                    [(0, a.Z)([(0, l.Z)("timeFilter", u.IL.AllTime), (0, l.Z)("orderByColumn", u.cz.TotalSpent)]), (0, i.Z)("totalSpent")]
                ])
        }
    }
]);
//# sourceMappingURL=6799-826dea7cba270c224d12.js.map