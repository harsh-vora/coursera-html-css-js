(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6814], {
        1728: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return i
                }
            });
            n(67294);
            var r = n(11191),
                o = n(61138);

            function i(t) {
                var e = t.children,
                    n = t.className;
                return (0, r.tZ)(o.rj, {
                    className: n,
                    gap: ["s", "m", "l"],
                    columns: [1, 2, 3, null, 4]
                }, e)
            }
        },
        50070: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return a
                }
            });
            n(67294);
            var r = n(11191),
                o = n(61138),
                i = n(70394);

            function a(t) {
                var e = t.children,
                    n = t.linkHref,
                    a = t.linkText,
                    u = t.className,
                    s = l();
                return (0, r.tZ)(o.xu, {
                    sx: {
                        borderBottom: "solid 1px",
                        borderColor: "black.10",
                        marginBottom: "m"
                    }
                }, (0, r.tZ)(o.kC, {
                    sx: s.container,
                    className: u
                }, (0, r.tZ)(o.xv, {
                    sx: s.heading
                }, e), n && (0, r.tZ)(i.Z, {
                    sx: {
                        fontSize: ["body", "xs"]
                    },
                    href: n
                }, a)))
            }
            var l = function() {
                return {
                    container: {
                        paddingTop: ["xl", "xxl", "xxxl"],
                        paddingBottom: "m",
                        justifyContent: "space-between",
                        alignItems: "baseline"
                    },
                    heading: {
                        fontFamily: "body",
                        fontWeight: 600,
                        fontSize: [20, "s"],
                        letterSpacing: "-0.02em",
                        lineHeight: 1
                    },
                    button: {
                        borderRadius: 999,
                        paddingX: ["m", "l"],
                        minHeight: [44, 56]
                    }
                }
            }
        },
        35439: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return x
                },
                t: function() {
                    return v
                }
            });
            var r = n(26265),
                o = (n(67294), n(11191)),
                i = n(61138),
                a = n(38918),
                l = n(79640),
                u = n(51250),
                s = n(75188),
                c = n(79272),
                d = n(34436),
                f = n(14562),
                b = n(2918);

            function p(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function g(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? p(Object(n), !0).forEach((function(e) {
                        (0, r.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function x(t) {
                return (0, o.tZ)(d.Z, null, (0, o.tZ)(v, g({}, t)))
            }

            function v(t) {
                var e = t.creator,
                    n = t.meta,
                    r = t.hideBiosOnMobile,
                    u = (0, l.Mk)(e),
                    p = null === e || void 0 === e ? void 0 : e.profileImageUrl,
                    x = (0, a.mf)(e),
                    v = (0, d.R)().isHovered,
                    h = Z({
                        isHovered: v
                    });
                return (0, o.tZ)(i.kC, {
                    sx: g(g({}, h.card), {}, {
                        flexDirection: "column",
                        flex: 1
                    })
                }, (0, o.tZ)(s.ZP, {
                    href: "/".concat(x)
                }, (0, o.tZ)("a", {
                    sx: g(g({}, h.link), {}, {
                        display: "block",
                        textDecoration: "none",
                        color: "inherit"
                    })
                }, (0, o.tZ)(i.xu, {
                    sx: {
                        position: "relative"
                    }
                }, (0, o.tZ)(i.oM, {
                    ratio: 1.75,
                    sx: h.ratio
                }, u && (0, o.tZ)(i.Ee, {
                    loading: "lazy",
                    src: u,
                    sx: {
                        display: "block",
                        objectFit: "cover",
                        minHeight: "100%",
                        minWidth: "100%"
                    }
                })), (0, o.tZ)(i.xu, {
                    sx: {
                        marginX: "m",
                        position: "relative"
                    }
                }, (0, o.tZ)(i.xu, {
                    sx: h.avatar
                }, (0, o.tZ)(c.Z, {
                    size: 80,
                    imageUrl: p,
                    userIndex: null === e || void 0 === e ? void 0 : e.userIndex
                })))), (0, o.tZ)(i.xu, {
                    sx: h.meta
                }, (0, o.tZ)(i.rj, {
                    gap: 5,
                    sx: {
                        marginBottom: "s"
                    }
                }, (0, o.tZ)(f.Z, {
                    user: e
                }), (0, o.tZ)(b.Z, {
                    user: e
                })), (0, o.tZ)(i.xv, {
                    variant: "body.body",
                    sx: {
                        fontSize: 15,
                        display: r ? ["none", "block", "block"] : "block"
                    }
                }, (0, a.aS)(120, null === e || void 0 === e ? void 0 : e.bio))))), n)
            }
            var Z = function(t) {
                var e = t.isHovered;
                return {
                    card: {
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "s",
                        borderRadius: 10,
                        overflow: "hidden",
                        transition: u.pB.smooth.fast,
                        backgroundColor: "white.100",
                        textDecoration: "none",
                        willChange: "transform",
                        color: "black.100",
                        "@media (hover: hover)": {
                            "&:hover": {
                                transform: "translateY(-4px)",
                                boxShadow: "m"
                            },
                            "&:active": {
                                transform: e ? null : "translateY(0)",
                                boxShadow: e ? null : "s"
                            }
                        }
                    },
                    ratio: {
                        backgroundColor: "black.5",
                        display: "flex"
                    },
                    avatar: {
                        padding: 8,
                        backgroundColor: "white.100",
                        width: 96,
                        height: 96,
                        position: "absolute",
                        left: 0,
                        transform: "translateY(-50%)",
                        display: "flex",
                        borderRadius: 999
                    },
                    meta: {
                        paddingX: "m",
                        paddingTop: "xxl",
                        paddingBottom: "xl"
                    }
                }
            }
        },
        87132: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return q
                }
            });
            var r = n(67294),
                o = n(11191),
                i = n(61138),
                a = n(71934),
                l = n(35439),
                u = n(1728),
                s = n(62313),
                c = n(88742),
                d = n(72955),
                f = n(34436),
                b = n(27284),
                p = n(37251),
                g = n(38918),
                x = n(95324),
                v = n(85286),
                Z = (0, r.memo)(h);

            function h(t) {
                var e, n, a = t.publicKey,
                    l = t.followState,
                    u = t.onCompleted,
                    Z = (0, x.Z)().user,
                    h = null === Z || void 0 === Z ? void 0 : Z.token,
                    y = null === Z || void 0 === Z ? void 0 : Z.publicAddress,
                    w = m(),
                    k = (0, f.R)().setIsHovered,
                    C = Boolean((0, g.sD)(null === l || void 0 === l ? void 0 : l.follows)),
                    F = null === l || void 0 === l || null === (e = l.followerCount) || void 0 === e || null === (n = e.aggregate) || void 0 === n ? void 0 : n.count,
                    O = (0, r.useRef)(null),
                    j = (0, s.Z)(O);
                (0, r.useEffect)((function() {
                    k(j)
                }), [j, k]);
                var K = (0, v.Z)(a).toggleModal;
                return (0, o.tZ)(i.kC, {
                    sx: w.container,
                    ref: O
                }, (0, o.tZ)(i.xu, {
                    sx: {
                        cursor: "pointer"
                    },
                    onClick: function() {
                        return K(p.g.Followers)
                    }
                }, (0, o.tZ)(c.Z, {
                    isLoading: !1,
                    followerCount: F,
                    label: "Followers",
                    size: b.y.large
                })), (0, o.tZ)(d.Z, {
                    isFollowing: C,
                    isLoading: !1,
                    publicKey: a,
                    currentUserPublicKey: y,
                    token: h,
                    onFollowSuccess: u,
                    size: b.y.large
                }))
            }
            var m = function() {
                    return {
                        container: {
                            marginTop: "auto",
                            paddingX: "m",
                            paddingY: "m",
                            borderTop: "solid 1px",
                            borderColor: "black.5",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%"
                        }
                    }
                },
                y = n(50070),
                w = n(85893),
                k = n(51250),
                C = n(54015);

            function F() {
                var t = O();
                return (0, o.tZ)(i.kC, {
                    sx: t.card
                }, (0, o.tZ)(i.xu, {
                    sx: {
                        position: "relative"
                    }
                }, (0, o.tZ)(i.oM, {
                    ratio: 1.75,
                    sx: t.ratio
                }), (0, o.tZ)(i.xu, {
                    sx: {
                        marginX: "m",
                        position: "relative"
                    }
                }, (0, o.tZ)(i.xu, {
                    sx: t.avatar
                }, (0, o.tZ)(i.xu, {
                    sx: {
                        objectFit: "fill",
                        borderRadius: 999,
                        backgroundColor: "black.10"
                    }
                })))), (0, o.tZ)(i.xu, {
                    sx: t.meta
                }, (0, o.tZ)(i.rj, {
                    gap: 5,
                    sx: {
                        marginBottom: "s"
                    }
                }, (0, o.tZ)(C.Z, {
                    height: 39,
                    width: 150,
                    bg: "black.5"
                }), (0, o.tZ)(C.Z, {
                    height: 26,
                    width: 100,
                    bg: "black.5"
                })), (0, o.tZ)(C.Z, {
                    height: 75,
                    width: "100%",
                    bg: "black.5"
                })))
            }
            var O = function() {
                return {
                    card: {
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "s",
                        borderRadius: 10,
                        overflow: "hidden",
                        transition: k.pB.smooth.fast,
                        textDecoration: "none",
                        willChange: "transform",
                        color: "black.100"
                    },
                    ratio: {
                        backgroundColor: "black.5",
                        display: "flex"
                    },
                    avatar: {
                        padding: 8,
                        backgroundColor: "black.10",
                        width: 96,
                        height: 96,
                        position: "absolute",
                        left: 0,
                        transform: "translateY(-50%)",
                        display: "flex",
                        borderRadius: 999
                    },
                    meta: {
                        paddingX: "m",
                        paddingTop: "xxl",
                        paddingBottom: "xl"
                    }
                }
            };

            function j() {
                var t = new Array(20).fill(null);
                return (0, w.jsx)(w.Fragment, {
                    children: t.map((function(t, e) {
                        return (0, w.jsx)(F, {}, e)
                    }))
                })
            }
            var K = n(61520),
                P = n(36765),
                S = n(809),
                B = n.n(S),
                I = n(92447),
                R = n(27261),
                N = n(22527),
                D = n(88767),
                M = n(90035),
                E = n(79026);

            function H() {
                var t = (0, R.Z)(["\n  query getFollowsByUserPublicKeys(\n    $publicKey: String!\n    $creatorIds: [String!]!\n  ) {\n    users: user(where: { publicKey: { _in: $creatorIds } }) {\n      publicKey\n      follows(\n        where: { user: { _eq: $publicKey }, isFollowing: { _eq: true } }\n      ) {\n        isFollowing\n        id\n      }\n      followerCount: follows_aggregate(where: { isFollowing: { _eq: true } }) {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"]);
                return H = function() {
                    return t
                }, t
            }
            var T = (0, N.ZP)(H());

            function _() {
                return (_ = (0, I.Z)(B().mark((function t(e) {
                    var n, r, o;
                    return B().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return n = e.publicKey, r = e.creatorIds, o = (0, M.ot)(), t.next = 4, o.request(T, {
                                    publicKey: (0, P.Qf)(n),
                                    creatorIds: (0, P.nR)(r)
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

            function z(t) {
                var e = t.publicKey,
                    n = t.creatorIds,
                    r = t.refetchOnWindowFocus,
                    o = void 0 !== r && r;
                return (0, D.useQuery)([E.V.FollowsByUserPublicKeys, n], (function() {
                    return function(t) {
                        return _.apply(this, arguments)
                    }({
                        publicKey: e,
                        creatorIds: n
                    })
                }), {
                    enabled: Boolean(e),
                    refetchOnWindowFocus: o
                })
            }

            function q(t) {
                var e = t.creators,
                    n = t.handleNextPage,
                    r = (t.noMoreResultsComponent, t.noMoreResults),
                    s = t.isLoading,
                    c = t.enableHeader,
                    d = t.onFollowUpdate,
                    f = t.isFetching,
                    b = t.publicAddress,
                    p = t.hideBiosOnMobile,
                    g = z({
                        creatorIds: e.map((function(t) {
                            return (0, P.Qf)(t.publicKey)
                        })),
                        publicKey: b
                    }).data,
                    x = (0, P.Rf)(g),
                    v = (0, a.Z)(x.flatMap((function(t) {
                        return t.follows
                    })));
                return s ? (0, o.tZ)(i.xu, null, c && (0, o.tZ)(y.Z, {
                    linkHref: "/creators",
                    linkText: "View all creators",
                    sx: {
                        paddingTop: [0, 0, 0]
                    }
                }, "Featured creators"), (0, o.tZ)(u.Z, null, (0, o.tZ)(j, null))) : (0, o.tZ)(i.xu, null, c && (0, o.tZ)(y.Z, {
                    linkHref: "/creators",
                    linkText: "View all creators",
                    sx: {
                        paddingTop: [0, 0, 0]
                    }
                }, "Featured creators"), (0, o.tZ)(u.Z, null, e.map((function(t) {
                    var e = x.find((function(e) {
                        return e.publicKey === t.publicKey
                    }));
                    return (0, o.tZ)(l.Z, {
                        creator: t,
                        key: t.publicKey,
                        hideBiosOnMobile: p,
                        meta: (0, o.tZ)(Z, {
                            publicKey: t.publicKey,
                            followState: e || t,
                            followsCount: v,
                            onCompleted: d
                        })
                    })
                }))), (0, o.tZ)(K.Z, {
                    handleNextPage: n,
                    isFetching: f,
                    hasNextPage: !r
                }))
            }
        },
        61520: function(t, e, n) {
            "use strict";
            n.d(e, {
                S: function() {
                    return s
                },
                Z: function() {
                    return c
                }
            });
            var r = n(11191),
                o = n(61138),
                i = n(67294),
                a = n(41139),
                l = n(53869),
                u = n(17757);

            function s(t) {
                var e = t.root,
                    n = t.target,
                    r = t.onIntersect,
                    o = t.threshold,
                    a = void 0 === o ? 1 : o,
                    l = t.rootMargin,
                    u = void 0 === l ? "0px" : l,
                    s = t.enabled,
                    c = void 0 === s || s;
                (0, i.useEffect)((function() {
                    if (c) {
                        var t = new IntersectionObserver((function(t) {
                                return t.forEach((function(t) {
                                    t.isIntersecting && r()
                                }))
                            }), {
                                root: null === e || void 0 === e ? void 0 : e.current,
                                rootMargin: u,
                                threshold: a
                            }),
                            o = n && n.current;
                        if (o) return t.observe(o),
                            function() {
                                t.unobserve(o)
                            }
                    }
                }), [n.current, c])
            }

            function c(t) {
                var e = t.handleNextPage,
                    n = t.isFetching,
                    c = t.enabled,
                    d = void 0 === c || c,
                    f = t.hasNextPage,
                    b = t.animationDuration,
                    p = void 0 === b ? .1 : b,
                    g = (0, i.useRef)();
                return s({
                    target: g,
                    onIntersect: e,
                    enabled: f && d
                }), (0, r.tZ)(i.Fragment, null, (0, r.tZ)(o.xu, {
                    ref: g,
                    sx: {
                        height: 1
                    }
                }), (0, r.tZ)(l.M, {
                    exitBeforeEnter: !0
                }, n && f && (0, r.tZ)(u.E.div, {
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
                }, (0, r.tZ)(o.kC, {
                    sx: {
                        padding: 10,
                        backgroundColor: "white.100",
                        boxShadow: "m",
                        borderRadius: 999
                    }
                }, (0, r.tZ)(a.Z, {
                    size: 32
                })))))
            }
        },
        70394: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return l
                }
            });
            n(67294);
            var r = n(11191),
                o = n(61138),
                i = n(51250),
                a = n(75188);

            function l(t) {
                var e = t.href,
                    n = t.children,
                    i = t.className,
                    l = t.target,
                    s = t.variant,
                    c = void 0 === s ? "h.body" : s,
                    d = t.onClick,
                    f = u();
                return d ? (0, r.tZ)(o.xv, {
                    variant: c,
                    sx: f.link,
                    className: i,
                    onClick: d
                }, n) : (0, r.tZ)(a.ZP, {
                    href: e
                }, (0, r.tZ)("a", {
                    sx: {
                        textDecoration: "none"
                    },
                    className: i,
                    target: l
                }, (0, r.tZ)(o.xv, {
                    variant: c,
                    sx: f.link,
                    className: i
                }, n)))
            }
            var u = function() {
                return {
                    link: {
                        color: "black.60",
                        transition: i.pB.smooth.fast,
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
        74586: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return a
                }
            });
            var r = n(67294),
                o = function(t) {
                    (0, r.useEffect)(t, [])
                },
                i = function(t) {
                    var e = (0, r.useRef)(t);
                    e.current = t, o((function() {
                        return function() {
                            return e.current()
                        }
                    }))
                },
                a = function(t) {
                    var e = (0, r.useRef)(0),
                        n = (0, r.useState)(t),
                        o = n[0],
                        a = n[1],
                        l = (0, r.useCallback)((function(t) {
                            cancelAnimationFrame(e.current), e.current = requestAnimationFrame((function() {
                                a(t)
                            }))
                        }), []);
                    return i((function() {
                        cancelAnimationFrame(e.current)
                    })), [o, l]
                }
        }
    }
]);
//# sourceMappingURL=6814-7bb7b731d8bebd06e025.js.map