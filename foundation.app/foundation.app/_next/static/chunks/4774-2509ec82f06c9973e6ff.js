(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4774], {
        14562: function(e, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return l
                }
            });
            r(67294);
            var t = r(11191),
                u = r(61138);

            function i(e) {
                var n = e.children,
                    r = e.className;
                return (0, t.tZ)(u.xv, {
                    sx: {
                        letterSpacing: "-0.03em",
                        fontSize: 32,
                        lineHeight: "heading",
                        fontFamily: "body",
                        fontWeight: "heading",
                        color: "black.100"
                    },
                    className: r
                }, n)
            }
            var o = r(38918);

            function l(e) {
                var n = e.user,
                    r = c(),
                    l = (0, o.Vg)(n),
                    a = l.isAddress,
                    s = l.usernameOrAddress,
                    d = l.nameOrUsername,
                    f = l.hasName;
                return a ? (0, t.tZ)(i, {
                    sx: r.heading
                }, s) : f ? (0, t.tZ)(i, null, d) : (0, t.tZ)(i, null, (0, t.tZ)(u.xv, {
                    variant: "gradient"
                }, s))
            }
            var c = function() {
                return {
                    heading: {
                        fontFamily: "mono",
                        fontSize: "s",
                        fontWeight: 400,
                        letterSpacing: .5
                    }
                }
            }
        },
        2918: function(e, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return c
                }
            });
            r(67294);
            var t = r(11191),
                u = r(38918),
                i = r(61138);

            function o(e) {
                var n = e.children,
                    r = l();
                return (0, t.tZ)(i.kC, null, (0, t.tZ)(i.xv, {
                    variant: "h.s"
                }, (0, t.tZ)(i.xv, {
                    variant: "gradient",
                    sx: r.text
                }, n)))
            }
            var l = function() {
                return {
                    text: {
                        letterSpacing: "-0.01em",
                        lineHeight: 1.2,
                        fontSize: 22
                    }
                }
            };

            function c(e) {
                var n = e.user,
                    r = (0, u.Vg)(n),
                    i = r.isAddress,
                    l = r.usernameOrAddress,
                    c = r.hasName;
                return i || !c ? null : (0, t.tZ)(o, null, l)
            }
        },
        35538: function(e, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return P
                }
            });
            var t = r(67294),
                u = r(11191),
                i = r(61138),
                o = r(87275),
                l = (r(569), r(65073)),
                c = r(67588),
                a = r(95324),
                s = r(79272),
                d = r(75188),
                f = r(54015),
                b = r(54121),
                g = r(72955),
                v = r(88742),
                y = r(38918),
                p = r(27284);

            function Z(e) {
                var n = e.user,
                    r = e.isLoading,
                    t = e.count,
                    i = e.className,
                    o = e.label;
                return (0, u.tZ)(d.ZP, {
                    href: {
                        pathname: "/".concat((0, y.mf)(n)),
                        query: {
                            follows: !0
                        }
                    }
                }, (0, u.tZ)("a", {
                    className: i,
                    sx: {
                        marginRight: "s",
                        cursor: "pointer",
                        textDecoration: "none"
                    }
                }, (0, u.tZ)(v.Z, {
                    label: o,
                    isLoading: r,
                    followerCount: t,
                    size: p.y.small
                })))
            }
            var h = r(36765),
                m = r(14562),
                w = r(2918);

            function K(e) {
                var n, r, t, o, v, K, U, P, q, O = e.publicKey,
                    _ = e.isLazyLoaded,
                    k = e.className,
                    $ = F(),
                    C = (0, a.Z)().user,
                    I = null === C || void 0 === C ? void 0 : C.publicAddress,
                    S = null === C || void 0 === C ? void 0 : C.token,
                    L = (0, h.yv)([I, O]),
                    M = (0, l.ZP)({
                        publicKey: O,
                        enabled: _,
                        refetchOnWindowFocus: !1,
                        refetchOnMount: !1,
                        staleTime: 3600
                    }),
                    W = M.data,
                    B = M.isLoading,
                    N = null === W || void 0 === W ? void 0 : W.user,
                    E = (0, c.Z)({
                        publicKey: O,
                        currentUserPublicKey: I,
                        enabled: _,
                        refetchOnWindowFocus: !1,
                        refetchOnMount: !1,
                        staleTime: 3600
                    }),
                    z = E.data,
                    D = E.isLoading,
                    R = null !== (n = null === z || void 0 === z || null === (r = z.followerCount) || void 0 === r || null === (t = r.aggregate) || void 0 === t ? void 0 : t.count) && void 0 !== n ? n : 0,
                    T = null !== (o = null === z || void 0 === z || null === (v = z.followingCount) || void 0 === v || null === (K = v.aggregate) || void 0 === K ? void 0 : K.count) && void 0 !== o ? o : 0,
                    A = null !== (U = null === z || void 0 === z || null === (P = z.mutualFollowCount) || void 0 === P || null === (q = P.aggregate) || void 0 === q ? void 0 : q.count) && void 0 !== U ? U : 0,
                    H = z && 0 === R,
                    V = (0, y.sD)(null === z || void 0 === z ? void 0 : z.follows),
                    Q = null === V || void 0 === V ? void 0 : V.isFollowing,
                    j = (0, y.KO)(null === N || void 0 === N ? void 0 : N.bio);
                return (0, u.tZ)(i.xu, {
                    sx: $.container,
                    className: k
                }, (0, u.tZ)(i.xu, {
                    sx: {
                        paddingX: "l",
                        paddingTop: "l",
                        paddingBottom: 20
                    }
                }, (0, u.tZ)(i.xu, {
                    sx: {
                        position: "relative"
                    }
                }, (0, u.tZ)(d.ZP, {
                    href: "/".concat((0, y.mf)(N))
                }, (0, u.tZ)("a", {
                    sx: {
                        textDecoration: "none",
                        display: "block"
                    }
                }, (0, u.tZ)(i.xu, {
                    sx: {
                        marginBottom: "m"
                    }
                }, (0, u.tZ)(s.Z, {
                    imageUrl: null === N || void 0 === N ? void 0 : N.profileImageUrl,
                    userIndex: null === N || void 0 === N ? void 0 : N.userIndex,
                    size: 72
                })), B ? (0, u.tZ)(x, null) : (0, u.tZ)(i.rj, {
                    gap: 5,
                    sx: {
                        marginBottom: "s"
                    }
                }, (0, u.tZ)(m.Z, {
                    user: N
                }), (0, u.tZ)(w.Z, {
                    user: N
                })))), !L && (0, u.tZ)(i.xu, {
                    sx: {
                        position: "absolute",
                        top: 0,
                        right: 0
                    }
                }, (0, u.tZ)(g.Z, {
                    isFollowing: Q,
                    isLoading: D,
                    publicKey: O,
                    currentUserPublicKey: I,
                    token: S,
                    onFollowSuccess: function() {},
                    size: p.y.large
                }))), (0, u.tZ)(i.rj, {
                    gap: "s"
                }, B ? (0, u.tZ)(f.Z, {
                    bg: "black.5",
                    height: 50,
                    width: "100%"
                }) : j ? (0, u.tZ)(i.xv, {
                    variant: "body.body",
                    sx: {
                        fontSize: 15
                    }
                }, (0, y.aS)(120, null === N || void 0 === N ? void 0 : N.bio)) : null, (0, u.tZ)(i.kC, {
                    sx: {
                        alignItems: "center",
                        display: H ? "none" : "flex"
                    }
                }, (0, u.tZ)(i.xv, {
                    variant: "h.body",
                    sx: {
                        marginRight: "xs"
                    }
                }, "Followed by"), (0, u.tZ)(b.Z, {
                    publicKey: O,
                    currentUserPublicKey: I,
                    hasMutualFollows: A > 0,
                    queriesEnabled: _,
                    isInteractive: !1
                })))), (0, u.tZ)(i.kC, {
                    sx: $.footer
                }, (0, u.tZ)(Z, {
                    user: N,
                    isLoading: D,
                    count: T,
                    label: "Following",
                    sx: {
                        marginRight: "s"
                    }
                }), (0, u.tZ)(Z, {
                    user: N,
                    isLoading: D,
                    count: R,
                    label: "Followers"
                })))
            }

            function x() {
                return (0, u.tZ)(i.rj, {
                    gap: 5,
                    sx: {
                        marginBottom: "s"
                    }
                }, (0, u.tZ)(f.Z, {
                    height: 39,
                    width: 200,
                    bg: "black.5"
                }), (0, u.tZ)(f.Z, {
                    height: 26,
                    width: 160
                }))
            }
            var F = function() {
                    return {
                        container: {
                            boxShadow: "l",
                            backgroundColor: "white.100",
                            minWidth: 340,
                            maxWidth: 340,
                            borderRadius: 10,
                            color: "black.100"
                        },
                        footer: {
                            paddingTop: 20,
                            paddingBottom: "m",
                            paddingX: "l",
                            borderTop: "solid 1px",
                            borderColor: "black.5"
                        }
                    }
                },
                U = "undefined" !== typeof document ? t.useLayoutEffect : t.useEffect;

            function P(e) {
                var n = e.children,
                    r = e.publicKey,
                    l = e.className,
                    c = (0, t.useState)(!1),
                    a = c[0],
                    s = c[1],
                    d = (0, t.useRef)(null);
                return U((function() {
                    d.current = document.getElementById("portal")
                }), []), (0, u.tZ)(i.xu, {
                    className: l
                }, (0, u.tZ)(o.ZP, {
                    content: a ? (0, u.tZ)(K, {
                        publicKey: r,
                        isLazyLoaded: a,
                        sx: {
                            marginY: 12,
                            marginX: "s"
                        }
                    }) : null,
                    interactive: !0,
                    animation: "shift-away",
                    onTrigger: function() {
                        return s(!0)
                    },
                    onUntrigger: function() {
                        return s(!1)
                    },
                    onShow: function() {
                        return s(!0)
                    },
                    onHidden: function() {
                        return s(!1)
                    },
                    placement: "bottom",
                    touch: !1,
                    delay: [400, 0],
                    appendTo: d.current
                }, (0, u.tZ)(i.xu, {
                    sx: {
                        cursor: "pointer"
                    }
                }, n)))
            }
        },
        54121: function(e, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return K
                }
            });
            r(67294);
            var t = r(11191),
                u = r(67826),
                i = r(23397),
                o = r(76937),
                l = r(809),
                c = r.n(l),
                a = r(92447),
                s = r(27261),
                d = r(88767),
                f = r(22527),
                b = r(90035),
                g = r(79026),
                v = r(3761);

            function y() {
                var e = (0, s.Z)(["\n  query userMutualFollows(\n    $publicKey: String!\n    $currentUserPublicKey: String!\n    $limit: Int!\n  ) {\n    mutualFollows: follow(\n      limit: $limit\n      where: {\n        isFollowing: { _eq: true }\n        _and: [\n          { followedUser: { _eq: $publicKey } }\n          {\n            userByFollowingUser: {\n              follows: {\n                user: { _eq: $currentUserPublicKey }\n                isFollowing: { _eq: true }\n              }\n            }\n          }\n        ]\n      }\n    ) {\n      id\n      user: userByFollowingUser {\n        ...HasuraUserFragmentLight\n      }\n    }\n  }\n  ", "\n"]);
                return y = function() {
                    return e
                }, e
            }
            var p = (0, f.ZP)(y(), v.hn);

            function Z() {
                return (Z = (0, a.Z)(c().mark((function e(n) {
                    var r, t, u, i;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = n.publicKey, t = n.currentUserPublicKey, u = n.limit, i = (0, b.ot)(), e.next = 4, i.request(p, {
                                    publicKey: r,
                                    currentUserPublicKey: t,
                                    limit: u
                                });
                            case 4:
                                return e.abrupt("return", e.sent);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function h(e) {
                var n = e.publicKey,
                    r = e.currentUserPublicKey,
                    t = e.limit,
                    u = e.enabled,
                    i = void 0 === u || u,
                    o = e.refetchOnWindowFocus,
                    l = void 0 !== o && o,
                    c = e.refetchOnMount,
                    a = void 0 === c || c;
                return (0, d.useQuery)([g.V.MutualFollows, {
                    publicKey: n,
                    currentUserPublicKey: r
                }], (function() {
                    return function(e) {
                        return Z.apply(this, arguments)
                    }({
                        publicKey: n,
                        currentUserPublicKey: r,
                        limit: t
                    })
                }), {
                    enabled: Boolean(n && r && i),
                    refetchOnWindowFocus: l,
                    refetchOnMount: a
                })
            }
            var m = r(65949),
                w = r(87070);

            function K(e) {
                var n = e.publicKey,
                    r = e.currentUserPublicKey,
                    u = e.hasMutualFollows,
                    i = e.queriesEnabled,
                    o = e.isInteractive;
                return Boolean(r && u) ? (0, t.tZ)(F, {
                    publicKey: n,
                    currentUserPublicKey: r,
                    queriesEnabled: i,
                    isInteractive: o
                }) : (0, t.tZ)(x, {
                    publicKey: n,
                    queriesEnabled: i,
                    isInteractive: o
                })
            }

            function x(e) {
                var n, r = e.publicKey,
                    l = e.queriesEnabled,
                    c = e.isInteractive,
                    a = (0, m.Z)({
                        publicKey: r,
                        currentUserPublicKey: "",
                        perPage: 5,
                        enabled: l,
                        cacheKey: g.V.FallbackFollows,
                        refetchOnWindowFocus: !1,
                        refetchOnMount: !1,
                        staleTime: 3600
                    }),
                    s = a.data,
                    d = a.isLoading,
                    f = (0, u.Z)(5, (0, i.Z)(null !== (n = null === s || void 0 === s ? void 0 : s.pages) && void 0 !== n ? n : [])).map((function(e) {
                        return e.user
                    })),
                    b = (0, o.Z)(f);
                return d ? (0, t.tZ)(w.vC, null) : b ? null : c ? (0, t.tZ)(w.DL, {
                    users: f
                }) : (0, t.tZ)(w.ZP, {
                    users: f
                })
            }

            function F(e) {
                var n, r = e.publicKey,
                    i = e.currentUserPublicKey,
                    l = e.queriesEnabled,
                    c = e.isInteractive,
                    a = h({
                        publicKey: r,
                        currentUserPublicKey: i,
                        limit: 5,
                        enabled: l,
                        refetchOnWindowFocus: !1,
                        refetchOnMount: !1,
                        staleTime: 3600
                    }),
                    s = a.data,
                    d = a.isLoading,
                    f = (0, u.Z)(5, null !== (n = null === s || void 0 === s ? void 0 : s.mutualFollows) && void 0 !== n ? n : []).map((function(e) {
                        return e.user
                    })),
                    b = (0, o.Z)(f);
                return d ? (0, t.tZ)(w.vC, null) : b ? null : c ? (0, t.tZ)(w.DL, {
                    users: f
                }) : (0, t.tZ)(w.ZP, {
                    users: f
                })
            }
        },
        87070: function(e, n, r) {
            "use strict";
            r.d(n, {
                ZP: function() {
                    return d
                },
                DL: function() {
                    return f
                },
                vC: function() {
                    return g
                }
            });
            var t = r(28140),
                u = (r(67294), r(11191)),
                i = r(61138),
                o = r(54015),
                l = r(35538),
                c = r(79272),
                a = r(75188),
                s = r(38918);

            function d(e) {
                var n = e.users;
                return (0, u.tZ)(i.kC, null, n.map((function(e) {
                    return (0, u.tZ)(b, {
                        key: e.publicKey,
                        user: e
                    })
                })))
            }

            function f(e) {
                var n = e.users;
                return (0, u.tZ)(i.kC, null, n.map((function(e) {
                    return (0, u.tZ)(l.Z, {
                        key: e.publicKey,
                        publicKey: e.publicKey
                    }, (0, u.tZ)(b, {
                        user: e
                    }))
                })))
            }

            function b(e) {
                var n = e.user,
                    r = v();
                return (0, u.tZ)(a.ZP, {
                    href: "/".concat((0, s.mf)(n))
                }, (0, u.tZ)("a", null, (0, u.tZ)(c.Z, {
                    userIndex: n.userIndex,
                    imageUrl: n.profileImageUrl,
                    sx: r.avatar
                })))
            }

            function g() {
                var e = v();
                return (0, u.tZ)(i.kC, null, (0, t.Z)(Array(5)).map((function(n, r) {
                    return (0, u.tZ)(o.Z, {
                        width: 32,
                        height: 32,
                        key: r,
                        sx: e.avatar
                    })
                })))
            }
            var v = function() {
                return {
                    avatar: {
                        border: "solid 3px",
                        borderColor: "white.100",
                        marginRight: -8,
                        borderRadius: 999
                    }
                }
            }
        },
        67588: function(e, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return p
                }
            });
            var t = r(809),
                u = r.n(t),
                i = r(92447),
                o = r(27261),
                l = r(22527),
                c = r(88767),
                a = r(79026),
                s = r(36765),
                d = r(38918),
                f = r(3761),
                b = r(90035);

            function g() {
                var e = (0, o.Z)(["\n  query getHasuraUserFollowState(\n    $currentUserPublicKey: String!\n    $publicKey: String!\n  ) {\n    followerCount: follow_aggregate(\n      where: { followedUser: { _eq: $publicKey }, isFollowing: { _eq: true } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    followingCount: follow_aggregate(\n      where: { user: { _eq: $publicKey }, isFollowing: { _eq: true } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    mutualFollowCount: follow_aggregate(\n      where: {\n        isFollowing: { _eq: true }\n        _and: [\n          { followedUser: { _eq: $publicKey } }\n          {\n            userByFollowingUser: {\n              follows: {\n                user: { _eq: $currentUserPublicKey }\n                isFollowing: { _eq: true }\n              }\n            }\n          }\n        ]\n      }\n    ) {\n      aggregate {\n        count\n      }\n    }\n    follows: follow(\n      where: {\n        user: { _eq: $currentUserPublicKey }\n        followedUser: { _eq: $publicKey }\n        isFollowing: { _eq: true }\n      }\n    ) {\n      ...HasuraFollowFragment\n    }\n  }\n  ", "\n"]);
                return g = function() {
                    return e
                }, e
            }
            var v = (0, l.ZP)(g(), f.uo);

            function y() {
                return (y = (0, i.Z)(u().mark((function e(n) {
                    var r, t, i;
                    return u().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = n.publicKey, t = n.currentUserPublicKey, i = (0, b.ot)(), e.next = 4, i.request(v, {
                                    publicKey: (0, s.Qf)(r),
                                    currentUserPublicKey: (0, s.vz)(t)
                                });
                            case 4:
                                return e.abrupt("return", e.sent);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function p(e) {
                var n = e.publicKey,
                    r = e.currentUserPublicKey,
                    t = e.enabled,
                    u = void 0 === t || t,
                    i = e.refetchOnWindowFocus,
                    o = void 0 !== i && i,
                    l = e.refetchOnMount,
                    s = void 0 === l || l;
                return (0, c.useQuery)([a.V.FollowState, {
                    publicKey: n,
                    currentUserPublicKey: r
                }], (function() {
                    return function(e) {
                        return y.apply(this, arguments)
                    }({
                        publicKey: n,
                        currentUserPublicKey: r
                    })
                }), {
                    enabled: (0, d.IE)([n, u]),
                    refetchOnWindowFocus: o,
                    refetchOnMount: s
                })
            }
        },
        65949: function(e, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return s
                }
            });
            var t = r(27261),
                u = r(22527),
                i = r(32624),
                o = r(79026),
                l = r(16695);

            function c() {
                var e = (0, t.Z)(["\n  query userFollowersQuery(\n    $publicKey: String!\n    $currentUserPublicKey: String!\n    $offset: Int!\n    $limit: Int!\n  ) {\n    follows: follow(\n      where: { followedUser: { _eq: $publicKey }, isFollowing: { _eq: true } }\n      offset: $offset\n      limit: $limit\n    ) {\n      id\n      user: userByFollowingUser {\n        name\n        username\n        profileImageUrl\n        userIndex\n        publicKey\n        follows(\n          where: {\n            user: { _eq: $currentUserPublicKey }\n            isFollowing: { _eq: true }\n          }\n        ) {\n          createdAt\n          isFollowing\n        }\n      }\n    }\n  }\n"]);
                return c = function() {
                    return e
                }, e
            }
            var a = (0, u.ZP)(c());

            function s(e) {
                var n = e.publicKey,
                    r = e.currentUserPublicKey,
                    t = e.perPage,
                    u = void 0 === t ? i.KB : t,
                    c = e.enabled,
                    s = void 0 === c || c,
                    d = e.refetchOnWindowFocus,
                    f = void 0 !== d && d,
                    b = e.refetchOnMount,
                    g = void 0 === b || b,
                    v = e.cacheKey,
                    y = void 0 === v ? o.V.UserFollowers : v;
                return (0, l.Z)({
                    cacheKey: y,
                    queryDocument: a,
                    publicKey: n,
                    currentUserPublicKey: r,
                    perPage: u,
                    refetchOnWindowFocus: f,
                    refetchOnMount: g,
                    enabled: Boolean(n) && s
                })
            }
        },
        16695: function(e, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return d
                }
            });
            var t = r(809),
                u = r.n(t),
                i = r(92447),
                o = r(88767),
                l = r(90035),
                c = r(64105),
                a = r(36765);

            function s() {
                return (s = (0, i.Z)(u().mark((function e(n) {
                    var r, t, i, o, c, s, d, f;
                    return u().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = n.queryDocument, t = n.publicKey, i = n.currentUserPublicKey, o = n.limit, c = n.offset, s = (0, l.ot)(), e.next = 4, s.request(r, {
                                    currentUserPublicKey: (0, a.vz)(i),
                                    publicKey: t,
                                    offset: c,
                                    limit: o
                                });
                            case 4:
                                return d = e.sent, f = d.follows, e.abrupt("return", f);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function d(e) {
                var n = e.publicKey,
                    r = e.currentUserPublicKey,
                    t = e.perPage,
                    u = e.cacheKey,
                    i = e.queryDocument,
                    l = e.enabled,
                    a = e.refetchOnWindowFocus,
                    d = void 0 !== a && a,
                    f = e.refetchOnMount,
                    b = void 0 !== f && f,
                    g = e.refetchOnReconnect,
                    v = void 0 !== g && g;
                return (0, o.useInfiniteQuery)([u, {
                    publicKey: n
                }], (function(e) {
                    var u = e.pageParam;
                    return function(e) {
                        return s.apply(this, arguments)
                    }({
                        queryDocument: i,
                        publicKey: n,
                        currentUserPublicKey: r,
                        limit: t,
                        offset: t * (void 0 === u ? 0 : u)
                    })
                }), {
                    enabled: l,
                    refetchOnWindowFocus: d,
                    refetchOnMount: b,
                    refetchOnReconnect: v,
                    getNextPageParam: c.Hd
                })
            }
        }
    }
]);
//# sourceMappingURL=4774-2509ec82f06c9973e6ff.js.map