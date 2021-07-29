(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3196], {
        8095: function(e, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return u
                }
            });
            r(67294);
            var t = r(11191),
                o = r(61138),
                i = r(41139);

            function u(e) {
                var n = e.className;
                return (0, t.tZ)(o.kC, {
                    className: n,
                    sx: {
                        flex: "auto",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingBottom: "xxxl"
                    }
                }, (0, t.tZ)(i.Z, {
                    size: 44
                }))
            }
        },
        33196: function(e, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                default: function() {
                    return M
                }
            });
            var t = r(67294),
                o = r(11191),
                i = r(5479),
                u = r(3069),
                l = r(30601),
                c = r(23397),
                s = r(76937),
                a = r(88767),
                f = r(37251),
                d = r(79026),
                g = r(95324),
                y = r(21841),
                w = r(27261),
                v = r(22527),
                b = r(32624),
                h = r(16695);

            function p() {
                var e = (0, w.Z)(["\n  query userFollowingQuery(\n    $publicKey: String!\n    $currentUserPublicKey: String!\n    $offset: Int!\n    $limit: Int!\n  ) {\n    follows: follow(\n      where: { user: { _eq: $publicKey }, isFollowing: { _eq: true } }\n      offset: $offset\n      limit: $limit\n    ) {\n      id\n      user: userByFollowedUser {\n        name\n        username\n        profileImageUrl\n        userIndex\n        publicKey\n        follows(\n          where: {\n            user: { _eq: $currentUserPublicKey }\n            isFollowing: { _eq: true }\n          }\n        ) {\n          createdAt\n          isFollowing\n        }\n      }\n    }\n  }\n"]);
                return p = function() {
                    return e
                }, e
            }
            var m = (0, v.ZP)(p());

            function F(e) {
                var n = e.publicKey,
                    r = e.currentUserPublicKey,
                    t = e.perPage,
                    o = void 0 === t ? b.KB : t,
                    i = e.enabled,
                    u = void 0 === i || i,
                    l = e.refetchOnWindowFocus,
                    c = void 0 !== l && l;
                return (0, h.Z)({
                    cacheKey: d.V.UserFollowing,
                    queryDocument: m,
                    publicKey: n,
                    currentUserPublicKey: r,
                    perPage: o,
                    refetchOnWindowFocus: c,
                    enabled: Boolean(n) && u
                })
            }
            var K = r(65949),
                Z = r(23107),
                P = r(61138);

            function x(e) {
                var n = e.modalMode;
                return n === f.g.Following ? (0, o.tZ)(P.xv, {
                    variant: "body.body",
                    sx: {
                        margin: "auto"
                    }
                }, "This user isn\u2019t following anyone.") : n === f.g.Followers ? (0, o.tZ)(P.xv, {
                    variant: "body.body",
                    sx: {
                        margin: "auto"
                    }
                }, "This user does not have any followers.") : null
            }
            var U = r(8095),
                $ = r(25559),
                q = r(10702),
                O = r(12525),
                N = r(84071),
                _ = (0, i.Z)((0, u.Z)((0, l.Z)("id")), c.Z);

            function M() {
                var e, n = (0, a.useQueryClient)(),
                    r = (0, Z.Z)(),
                    i = r.modalEntity,
                    u = r.currentModal,
                    l = r.modalMode,
                    c = r.setModalMode,
                    w = (0, g.Z)().user,
                    v = u === f.$.FOLLOWS,
                    b = (l === f.g.Following ? F : K.Z)({
                        publicKey: i,
                        currentUserPublicKey: null === w || void 0 === w ? void 0 : w.publicAddress,
                        enabled: v
                    }),
                    h = b.data,
                    p = b.fetchNextPage,
                    m = b.isLoading,
                    P = b.isFetching,
                    M = b.hasNextPage,
                    I = b.isFetchingNextPage,
                    k = _(null !== (e = null === h || void 0 === h ? void 0 : h.pages) && void 0 !== e ? e : []),
                    B = k.map((function(e) {
                        return e.user
                    })),
                    C = (0, y.Z)({
                        fetchNextPage: p,
                        isFetching: P,
                        hasNextPage: M
                    }),
                    W = C.handleNextPage,
                    S = C.setCurrentPage;
                (0, t.useEffect)((function() {
                    S(0)
                }), [u, l]);
                var A = (0, s.Z)(k);
                return (0, o.tZ)($.Z, {
                    modalKey: f.$.FOLLOWS
                }, (0, o.tZ)(O.Z, null, (0, o.tZ)(q.Z, {
                    tabs: [{
                        onClick: function() {
                            return c(f.g.Following)
                        },
                        isActive: l === f.g.Following,
                        children: "Following"
                    }, {
                        onClick: function() {
                            return c(f.g.Followers)
                        },
                        isActive: l === f.g.Followers,
                        children: "Followers"
                    }]
                }), m ? (0, o.tZ)(U.Z, {
                    sx: {
                        paddingBottom: [0, 0, 0]
                    }
                }) : A ? (0, o.tZ)(x, {
                    modalMode: l
                }) : (0, o.tZ)(N.Z, {
                    modalMode: l,
                    users: B,
                    handleNextPage: W,
                    isFetchingNextPage: I,
                    hasNextPage: M,
                    onFollowUpdate: function() {
                        var e = l === f.g.Followers ? d.V.UserFollowers : d.V.UserFollowing;
                        n.invalidateQueries(e)
                    }
                })))
            }
        },
        65949: function(e, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return a
                }
            });
            var t = r(27261),
                o = r(22527),
                i = r(32624),
                u = r(79026),
                l = r(16695);

            function c() {
                var e = (0, t.Z)(["\n  query userFollowersQuery(\n    $publicKey: String!\n    $currentUserPublicKey: String!\n    $offset: Int!\n    $limit: Int!\n  ) {\n    follows: follow(\n      where: { followedUser: { _eq: $publicKey }, isFollowing: { _eq: true } }\n      offset: $offset\n      limit: $limit\n    ) {\n      id\n      user: userByFollowingUser {\n        name\n        username\n        profileImageUrl\n        userIndex\n        publicKey\n        follows(\n          where: {\n            user: { _eq: $currentUserPublicKey }\n            isFollowing: { _eq: true }\n          }\n        ) {\n          createdAt\n          isFollowing\n        }\n      }\n    }\n  }\n"]);
                return c = function() {
                    return e
                }, e
            }
            var s = (0, o.ZP)(c());

            function a(e) {
                var n = e.publicKey,
                    r = e.currentUserPublicKey,
                    t = e.perPage,
                    o = void 0 === t ? i.KB : t,
                    c = e.enabled,
                    a = void 0 === c || c,
                    f = e.refetchOnWindowFocus,
                    d = void 0 !== f && f,
                    g = e.refetchOnMount,
                    y = void 0 === g || g,
                    w = e.cacheKey,
                    v = void 0 === w ? u.V.UserFollowers : w;
                return (0, l.Z)({
                    cacheKey: v,
                    queryDocument: s,
                    publicKey: n,
                    currentUserPublicKey: r,
                    perPage: o,
                    refetchOnWindowFocus: d,
                    refetchOnMount: y,
                    enabled: Boolean(n) && a
                })
            }
        },
        16695: function(e, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return f
                }
            });
            var t = r(809),
                o = r.n(t),
                i = r(92447),
                u = r(88767),
                l = r(90035),
                c = r(64105),
                s = r(36765);

            function a() {
                return (a = (0, i.Z)(o().mark((function e(n) {
                    var r, t, i, u, c, a, f, d;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = n.queryDocument, t = n.publicKey, i = n.currentUserPublicKey, u = n.limit, c = n.offset, a = (0, l.ot)(), e.next = 4, a.request(r, {
                                    currentUserPublicKey: (0, s.vz)(i),
                                    publicKey: t,
                                    offset: c,
                                    limit: u
                                });
                            case 4:
                                return f = e.sent, d = f.follows, e.abrupt("return", d);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function f(e) {
                var n = e.publicKey,
                    r = e.currentUserPublicKey,
                    t = e.perPage,
                    o = e.cacheKey,
                    i = e.queryDocument,
                    l = e.enabled,
                    s = e.refetchOnWindowFocus,
                    f = void 0 !== s && s,
                    d = e.refetchOnMount,
                    g = void 0 !== d && d,
                    y = e.refetchOnReconnect,
                    w = void 0 !== y && y;
                return (0, u.useInfiniteQuery)([o, {
                    publicKey: n
                }], (function(e) {
                    var o = e.pageParam;
                    return function(e) {
                        return a.apply(this, arguments)
                    }({
                        queryDocument: i,
                        publicKey: n,
                        currentUserPublicKey: r,
                        limit: t,
                        offset: t * (void 0 === o ? 0 : o)
                    })
                }), {
                    enabled: l,
                    refetchOnWindowFocus: f,
                    refetchOnMount: g,
                    refetchOnReconnect: w,
                    getNextPageParam: c.Hd
                })
            }
        }
    }
]);
//# sourceMappingURL=3196.df35b5a40a1b7f2c2c56.js.map