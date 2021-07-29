(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6406], {
        10702: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return f
                }
            });
            var r = n(26265),
                o = (n(67294), n(11191)),
                i = n(61138),
                a = n(96626),
                u = n(26938),
                s = n(34025),
                c = n(70797);

            function l(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function f(t) {
                var e = t.tabs;
                return (0, o.tZ)(s.Z, {
                    className: d()
                }, (0, o.tZ)(i.kC, {
                    sx: {
                        alignItems: "center",
                        flex: 1,
                        paddingTop: "m"
                    }
                }, e.map((function(t, e) {
                    return (0, o.tZ)(c.Z, function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? l(Object(n), !0).forEach((function(e) {
                                (0, r.Z)(t, e, n[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            }))
                        }
                        return t
                    }({
                        key: e
                    }, t))
                }))), (0, o.tZ)(u.Z, null))
            }
            var d = (0, a.iv)({
                display: "flex",
                borderBottom: "solid 1px $black10",
                alignItems: "center",
                paddingLeft: "$6",
                paddingRight: "$5",
                marginBottom: 1,
                $bp1: {
                    paddingLeft: "$7"
                }
            })
        },
        12525: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return i
                }
            });
            n(67294);
            var r = n(11191),
                o = n(74611);

            function i(t) {
                var e = t.children,
                    n = a();
                return (0, r.tZ)(o.Z, {
                    sx: n.container
                }, e)
            }
            var a = function() {
                return {
                    container: {
                        maxWidth: 760,
                        minHeight: 640,
                        maxHeight: 640,
                        padding: [0, 0, 0],
                        overflow: "auto",
                        justifyContent: "flex-start",
                        backgroundColor: "white.100",
                        position: "relative"
                    }
                }
            }
        },
        84071: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return j
                }
            });
            var r = n(67294),
                o = n(11191),
                i = n(61138);

            function a() {
                return (a = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var u, s = ["bottom", "height", "left", "right", "top", "width"],
                c = new Map,
                l = function t() {
                    var e = [];
                    c.forEach((function(t, n) {
                        var r, o, i = n.getBoundingClientRect();
                        r = i, o = t.rect, void 0 === r && (r = {}), void 0 === o && (o = {}), s.some((function(t) {
                            return r[t] !== o[t]
                        })) && (t.rect = i, e.push(t))
                    })), e.forEach((function(t) {
                        t.callbacks.forEach((function(e) {
                            return e(t.rect)
                        }))
                    })), u = window.requestAnimationFrame(t)
                };
            var f = "undefined" !== typeof window ? r.useLayoutEffect : r.useEffect;

            function d(t) {
                var e = r.useState(t.current),
                    n = e[0],
                    o = e[1],
                    i = r.useReducer(v, null),
                    a = i[0],
                    s = i[1],
                    d = r.useRef(!1);
                return f((function() {
                    t.current !== n && o(t.current)
                })), f((function() {
                    if (n && !d.current) {
                        d.current = !0;
                        var t = n.getBoundingClientRect();
                        s({
                            rect: t
                        })
                    }
                }), [n]), r.useEffect((function() {
                    if (n) {
                        var t, e, r = (t = n, e = function(t) {
                            s({
                                rect: t
                            })
                        }, {
                            observe: function() {
                                var n = 0 === c.size;
                                c.has(t) ? c.get(t).callbacks.push(e) : c.set(t, {
                                    rect: void 0,
                                    hasRectChanged: !1,
                                    callbacks: [e]
                                }), n && l()
                            },
                            unobserve: function() {
                                var n = c.get(t);
                                if (n) {
                                    var r = n.callbacks.indexOf(e);
                                    r >= 0 && n.callbacks.splice(r, 1), n.callbacks.length || c.delete(t), c.size || cancelAnimationFrame(u)
                                }
                            }
                        });
                        return r.observe(),
                            function() {
                                r.unobserve()
                            }
                    }
                }), [n]), a
            }

            function v(t, e) {
                var n = e.rect;
                return t && t.height === n.height && t.width === n.width ? t : n
            }
            var g = function() {
                    return 50
                },
                p = function(t) {
                    return t
                },
                m = function(t, e) {
                    return t[e ? "offsetWidth" : "offsetHeight"]
                },
                h = function(t) {
                    for (var e = Math.max(t.start - t.overscan, 0), n = Math.min(t.end + t.overscan, t.size - 1), r = [], o = e; o <= n; o++) r.push(o);
                    return r
                };

            function b(t) {
                var e, n, o = t.size,
                    i = void 0 === o ? 0 : o,
                    u = t.estimateSize,
                    s = void 0 === u ? g : u,
                    c = t.overscan,
                    l = void 0 === c ? 1 : c,
                    v = t.paddingStart,
                    b = void 0 === v ? 0 : v,
                    x = t.paddingEnd,
                    y = void 0 === x ? 0 : x,
                    k = t.parentRef,
                    Z = t.horizontal,
                    w = t.scrollToFn,
                    O = t.useObserver,
                    z = t.onScrollElement,
                    C = t.scrollOffsetFn,
                    S = t.keyExtractor,
                    E = void 0 === S ? p : S,
                    R = t.measureSize,
                    P = void 0 === R ? m : R,
                    j = t.rangeExtractor,
                    F = void 0 === j ? h : j,
                    $ = Z ? "width" : "height",
                    I = Z ? "scrollLeft" : "scrollTop",
                    B = r.useRef({}),
                    L = ((O || d)(k) || ((e = {})[$] = 0, e))[$],
                    M = r.useCallback((function(t) {
                        k.current && (k.current[I] = t)
                    }), [k, I]),
                    N = w || M;
                w = r.useCallback((function(t) {
                    N(t, M)
                }), [M, N]);
                var H = r.useState({}),
                    T = H[0],
                    A = H[1],
                    D = r.useCallback((function() {
                        return A({})
                    }), []),
                    U = r.useMemo((function() {
                        for (var t = [], e = 0; e < i; e++) {
                            var n = T[E(e)],
                                r = t[e - 1] ? t[e - 1].end : b,
                                o = "number" === typeof n ? n : s(e),
                                a = r + o;
                            t[e] = {
                                index: e,
                                start: r,
                                size: o,
                                end: a
                            }
                        }
                        return t
                    }), [s, T, b, i, E]),
                    W = ((null == (n = U[i - 1]) ? void 0 : n.end) || 0) + y;
                B.current.measurements = U, B.current.outerSize = L, B.current.totalSize = W;
                var _ = r.useState({
                        start: 0,
                        end: 0
                    }),
                    q = _[0],
                    K = _[1],
                    X = z ? z.current : k.current,
                    Y = r.useRef(C);
                Y.current = C, f((function() {
                    if (!X) return K({
                        start: 0,
                        end: 0
                    }), void(B.current.scrollOffset = void 0);
                    var t = function(t) {
                        var e = Y.current ? Y.current(t) : X[I];
                        B.current.scrollOffset = e, K((function(t) {
                            return function(t, e) {
                                var n = t.measurements,
                                    r = t.outerSize,
                                    o = t.scrollOffset,
                                    i = n.length - 1,
                                    a = function(t, e, n, r) {
                                        for (; t <= e;) {
                                            var o = (t + e) / 2 | 0,
                                                i = n(o);
                                            if (i < r) t = o + 1;
                                            else {
                                                if (!(i > r)) return o;
                                                e = o - 1
                                            }
                                        }
                                        return t > 0 ? t - 1 : 0
                                    }(0, i, (function(t) {
                                        return n[t].start
                                    }), o),
                                    u = a;
                                for (; u < i && n[u].end < o + r;) u++;
                                if (e.start !== a || e.end !== u) return {
                                    start: a,
                                    end: u
                                };
                                return e
                            }(B.current, t)
                        }))
                    };
                    return t(), X.addEventListener("scroll", t, {
                            capture: !1,
                            passive: !0
                        }),
                        function() {
                            X.removeEventListener("scroll", t)
                        }
                }), [X, I, i, L]);
                var G = r.useRef(P);
                G.current = P;
                var J = r.useMemo((function() {
                        for (var t = F({
                                start: q.start,
                                end: q.end,
                                overscan: l,
                                size: U.length
                            }), e = [], n = function(n, r) {
                                var o = t[n],
                                    i = a(a({}, U[o]), {}, {
                                        measureRef: function(t) {
                                            if (t) {
                                                var e = G.current(t, Z);
                                                if (e !== i.size) {
                                                    var n = B.current.scrollOffset;
                                                    i.start < n && M(n + (e - i.size)), A((function(t) {
                                                        var n;
                                                        return a(a({}, t), {}, ((n = {})[E(o)] = e, n))
                                                    }))
                                                }
                                            }
                                        }
                                    });
                                e.push(i)
                            }, r = 0, o = t.length; r < o; r++) n(r);
                        return e
                    }), [M, Z, E, U, l, q.end, q.start, F]),
                    Q = r.useRef();
                f((function() {
                    Q.current && s && A({}), Q.current = !0
                }), [s]);
                var V = r.useCallback((function(t, e) {
                        var n = (void 0 === e ? {} : e).align,
                            r = void 0 === n ? "start" : n,
                            o = B.current,
                            i = o.scrollOffset,
                            a = o.outerSize;
                        "auto" === r && (r = t <= i ? "start" : t >= i + a ? "end" : "start"), "start" === r ? w(t) : "end" === r ? w(t - a) : "center" === r && w(t - a / 2)
                    }), [w]),
                    tt = r.useCallback((function(t, e) {
                        var n = void 0 === e ? {} : e,
                            r = n.align,
                            o = void 0 === r ? "auto" : r,
                            u = function(t, e) {
                                if (null == t) return {};
                                var n, r, o = {},
                                    i = Object.keys(t);
                                for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                                return o
                            }(n, ["align"]),
                            s = B.current,
                            c = s.measurements,
                            l = s.scrollOffset,
                            f = s.outerSize,
                            d = c[Math.max(0, Math.min(t, i - 1))];
                        if (d) {
                            if ("auto" === o)
                                if (d.end >= l + f) o = "end";
                                else {
                                    if (!(d.start <= l)) return;
                                    o = "start"
                                }
                            var v = "center" === o ? d.start + d.size / 2 : "end" === o ? d.end : d.start;
                            V(v, a({
                                align: o
                            }, u))
                        }
                    }), [V, i]),
                    et = r.useCallback((function() {
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        tt.apply(void 0, e), requestAnimationFrame((function() {
                            tt.apply(void 0, e)
                        }))
                    }), [tt]);
                return {
                    virtualItems: J,
                    totalSize: W,
                    scrollToOffset: V,
                    scrollToIndex: et,
                    measure: D
                }
            }
            var x = n(53278),
                y = n(81100),
                k = n(38918),
                Z = n(51250),
                w = n(36765),
                O = n(72955),
                z = n(79272),
                C = n(75188),
                S = n(95324),
                E = n(27284);

            function R(t) {
                var e = t.user,
                    n = t.isFollowing,
                    r = t.onFollowUpdate,
                    a = t.isLoading,
                    u = P(),
                    s = (0, S.Z)().user,
                    c = e.publicKey,
                    l = null === s || void 0 === s ? void 0 : s.publicAddress,
                    f = null === s || void 0 === s ? void 0 : s.token,
                    d = (0, w.yv)([c, l]),
                    v = (0, k.wO)(e),
                    g = (0, k.mf)(e),
                    p = (0, k.Hs)(e),
                    m = e.name;
                return (0, o.tZ)(i.kC, {
                    sx: u.row
                }, (0, o.tZ)(C.ZP, {
                    href: "/".concat(g)
                }, (0, o.tZ)("a", {
                    sx: u.link
                }, (0, o.tZ)(z.Z, {
                    size: [32, 50],
                    userIndex: e.userIndex,
                    imageUrl: e.profileImageUrl,
                    sx: {
                        marginRight: ["s", "m"]
                    }
                }), (0, o.tZ)(i.rj, null, m && (0, o.tZ)(i.X6, {
                    variant: "h.s",
                    sx: {
                        color: "black.100",
                        fontSize: ["xs", "s"]
                    }
                }, m), (0, o.tZ)(i.X6, {
                    variant: p ? "h.body" : "mono.xs",
                    sx: {
                        display: "flex",
                        color: "black.100"
                    }
                }, (0, o.tZ)(i.xv, {
                    variant: p ? "gradient" : null,
                    sx: {
                        fontFamily: "inherit"
                    }
                }, v))))), !d && (0, o.tZ)(i.kC, {
                    sx: {
                        display: ["none", "flex"]
                    }
                }, (0, o.tZ)(O.Z, {
                    isFollowing: n,
                    isLoading: a,
                    publicKey: c,
                    currentUserPublicKey: l,
                    token: f,
                    onFollowSuccess: r,
                    size: E.y.large
                })))
            }
            var P = function() {
                return {
                    row: {
                        alignItems: "center",
                        paddingRight: [0, 20],
                        transition: Z.pB.smooth.fast,
                        borderRadius: [0, 10],
                        flex: 1,
                        "@media (hover: hover)": {
                            "&:hover": {
                                backgroundColor: "black.5"
                            }
                        }
                    },
                    link: {
                        display: "flex",
                        alignItems: "center",
                        flex: 1,
                        textDecoration: "none",
                        paddingY: ["xs", "m"],
                        paddingLeft: ["m", "m"],
                        paddingRight: ["m", 0]
                    }
                }
            };

            function j(t) {
                var e = t.users,
                    n = t.handleNextPage,
                    a = t.isFetchingNextPage,
                    u = t.hasNextPage,
                    s = t.onFollowUpdate,
                    c = t.modalMode,
                    l = F(),
                    f = (0, y.q)({
                        defaultIndex: 2
                    }),
                    d = (0, r.useRef)(),
                    v = f <= 0,
                    g = (0, r.useCallback)((function() {
                        return v ? 60 : 105
                    }), [v]),
                    p = b({
                        size: e.length,
                        parentRef: d,
                        estimateSize: g,
                        overscan: 20
                    });
                return (0, r.useEffect)((function() {
                    var t = (0, x.Z)(p.virtualItems);
                    t && (t.index === e.length - 1 && u && !a && n())
                }), [e.length, p.virtualItems, a]), (0, r.useEffect)((function() {
                    p.scrollToIndex(0)
                }), [c]), (0, o.tZ)(i.xu, {
                    ref: d,
                    sx: l.container
                }, (0, o.tZ)(i.xu, {
                    style: {
                        height: "".concat(p.totalSize, "px"),
                        width: "100%",
                        position: "relative"
                    }
                }, p.virtualItems.map((function(t) {
                    var n = e[t.index],
                        r = (0, k.sD)(null === n || void 0 === n ? void 0 : n.follows);
                    return (0, o.tZ)(i.xu, {
                        key: t.index,
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "".concat(t.size, "px"),
                            transform: "translateY(".concat(t.start, "px)"),
                            display: "flex"
                        }
                    }, (0, o.tZ)(R, {
                        user: n,
                        isFollowing: null === r || void 0 === r ? void 0 : r.isFollowing,
                        onFollowUpdate: s,
                        isLoading: !1
                    }))
                }))))
            }
            var F = function() {
                return {
                    container: {
                        paddingX: [0, "m"],
                        paddingBottom: ["s", "m"],
                        paddingTop: ["s", "m"],
                        maxWidth: 760,
                        minHeight: 574,
                        maxHeight: 574,
                        overflow: "auto",
                        position: "relative"
                    }
                }
            }
        },
        34025: function(t, e, n) {
            "use strict";
            var r = n(96626),
                o = n(33559),
                i = (0, r.zo)(o.Z, {
                    borderBottom: "1px solid $black10",
                    marginBottom: 20,
                    "@bp1": {
                        marginBottom: "$3"
                    },
                    "@bp2": {
                        marginBottom: "$4"
                    }
                });
            e.Z = i
        },
        70797: function(t, e, n) {
            "use strict";
            var r = n(96626),
                o = n(72694),
                i = (0, r.zo)(o.Z, {
                    fontFamily: "$body",
                    fontWeight: 600,
                    fontSize: "$2",
                    borderBottom: "1px solid rgba(0,0,0,0)",
                    paddingBottom: "$5",
                    borderWidth: 2,
                    marginBottom: -2,
                    marginRight: "$6",
                    transition: "border-color $1 $ease",
                    cursor: "pointer",
                    lineHeight: 1.2,
                    variants: {
                        isActive: {
                            true: {
                                borderColor: "$black100"
                            }
                        }
                    }
                });
            e.Z = i
        },
        21841: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return o
                }
            });
            var r = n(67294);

            function o(t) {
                var e = t.fetchNextPage,
                    n = (0, r.useState)(0),
                    o = n[0],
                    i = n[1];
                return (0, r.useEffect)((function() {
                    o > 0 && e()
                }), [o]), {
                    handleNextPage: (0, r.useCallback)((function() {
                        i((function(t) {
                            return t + 1
                        }))
                    }), []),
                    currentPage: o,
                    setCurrentPage: i
                }
            }
        }
    }
]);
//# sourceMappingURL=6406-3655ca9e7bbf72977285.js.map