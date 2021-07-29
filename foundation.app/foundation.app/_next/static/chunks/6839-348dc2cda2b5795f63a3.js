(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6839], {
        36839: function(n, e, t) {
            "use strict";
            t.d(e, {
                SC: function() {
                    return B
                },
                Kp: function() {
                    return H
                },
                Ud: function() {
                    return q
                }
            });
            var r = t(32292),
                u = t(809),
                i = t.n(u),
                s = t(27261),
                o = t(92447),
                a = t(22527),
                d = t(68981),
                c = t(30601),
                l = t(46897),
                f = t(90035),
                h = t(74294),
                w = t(64105),
                k = t(38918),
                p = t(69306),
                _ = t(36561),
                m = t(3907),
                y = t(3761);

            function v() {
                var n = (0, s.Z)(["\n  query hasuraPublicArtworksByTokenIds(\n    $tokenIds: [Int!]!\n    $excludeHidden: Boolean!\n    $moderationStatuses: [artwork_moderationstatus_enum!]\n    $userModerationStatuses: [user_moderationstatus_enum!]\n  ) {\n    artworks: artwork(\n      where: {\n        tokenId: { _in: $tokenIds }\n        # Always exclude deleted works (goerli example 105)\n        deletedAt: { _is_null: true }\n        # which statuses to include (will be ACTIVE by default)\n        moderationStatus: { _in: $moderationStatuses }\n        # artworks of creators under review shouldn\u2019t show publicly\n        user: {\n          moderationStatus: { _in: $userModerationStatuses }\n          socialVerifications: { isValid: { _eq: true } }\n        }\n        # Respect the excludeHidden flag\n        _or: [\n          # Always include artwork where neither the art or the user are hidden\n          {\n            _and: [\n              { hiddenAt: { _is_null: true } }\n              { user: { hiddenAt: { _is_null: true } } }\n            ]\n          }\n          # Support excludeHidden: false\n          {\n            _or: [\n              # Optionally include when art is hidden but the user is not (goerli example 229)\n              {\n                _and: [\n                  { hiddenAt: { _is_null: $excludeHidden } }\n                  { user: { hiddenAt: { _is_null: true } } }\n                ]\n              }\n              # Optionally include when the user is hidden but the art is not (goerli example 30)\n              {\n                _and: [\n                  { hiddenAt: { _is_null: true } }\n                  { user: { hiddenAt: { _is_null: $excludeHidden } } }\n                ]\n              }\n              # Optionally include when both the art and user are hidden (goerli example 262)\n              {\n                _and: [\n                  { hiddenAt: { _is_null: $excludeHidden } }\n                  { user: { hiddenAt: { _is_null: $excludeHidden } } }\n                ]\n              }\n            ]\n          }\n        ]\n      }\n    ) {\n      ...HasuraArtworkFragment\n      creator: user {\n        ...HasuraUserFragment\n      }\n    }\n  }\n  ", "\n  ", "\n"]);
                return v = function() {
                    return n
                }, n
            }
            var A = (0, a.ZP)(v(), y.Fk, y.Bk);

            function I(n) {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = (0, o.Z)(i().mark((function n(e) {
                    var t, r;
                    return i().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return t = e.tokenIds, r = (0, f.ot)(), n.next = 4, r.request(A, {
                                    tokenIds: (0, k.C7)(t),
                                    excludeHidden: !0,
                                    moderationStatuses: [m.Z.Active],
                                    userModerationStatuses: [m.Z.Active]
                                });
                            case 4:
                                return n.abrupt("return", n.sent);
                            case 5:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                })))).apply(this, arguments)
            }
            t(19660);

            function g() {
                var n = (0, s.Z)(["\n  query trendingArtworksQuery($limit: Int, $now: Int) {\n    auctions: nftMarketAuctions(\n      where: { status: Open, dateEnding_gt: $now, highestBid_not: null }\n      orderBy: numberOfBids\n      orderDirection: desc\n      first: $limit\n    ) {\n      auctionId\n      bidVolumeInETH\n      numberOfBids\n      dateEnding\n      nft {\n        ...NftFragment\n      }\n    }\n  }\n  ", "\n"]);
                return g = function() {
                    return n
                }, n
            }

            function $(n) {
                return b.apply(this, arguments)
            }

            function b() {
                return (b = (0, o.Z)(i().mark((function n(e) {
                    var t, r, u;
                    return i().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return t = (0, w.cb)(e), n.next = 3, I({
                                    tokenIds: t
                                });
                            case 3:
                                return r = n.sent, u = (0, h.Qm)({
                                    serverArtworks: r.artworks,
                                    graphArtworks: e
                                }), n.abrupt("return", u);
                            case 6:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                })))).apply(this, arguments)
            }
            var Z = (0, a.ZP)(g(), l.tP);

            function S(n) {
                var e = 5 * Math.max(Number(n.numberOfBids) - 1, 0),
                    t = 1 * Number(n.bidVolumeInETH),
                    r = (Number(n.dateEnding) - Math.floor(Date.now() / 1e3)) / 3600;
                return e / Math.max(1, Math.pow(r, 2)) + t
            }

            function H(n) {
                return P.apply(this, arguments)
            }

            function P() {
                return (P = (0, o.Z)(i().mark((function n(e) {
                    var t, r, u, s, o, a, l, h, w, k;
                    return i().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return t = e.limit, r = void 0 === t ? 16 : t, u = e.now, s = void 0 === u ? Math.round(Date.now() / 1e3) : u, o = (0, f.Li)(), n.next = 4, o.request(Z, {
                                    limit: r,
                                    now: s
                                });
                            case 4:
                                return a = n.sent, l = (0, d.Z)((0, c.Z)("nft"), a.auctions), n.next = 8, $(l);
                            case 8:
                                return h = n.sent, w = a.auctions.map((function(n) {
                                    return {
                                        tokenId: n.nft.tokenId,
                                        bidVolumeInETH: n.bidVolumeInETH,
                                        numberOfBids: n.numberOfBids,
                                        dateEnding: n.dateEnding
                                    }
                                })), k = h.sort((function(n, e) {
                                    var t = w.find((function(e) {
                                        return e.tokenId === n.tokenId
                                    }));
                                    return S(w.find((function(n) {
                                        return n.tokenId === e.tokenId
                                    }))) - S(t)
                                })), n.abrupt("return", {
                                    artworks: k
                                });
                            case 12:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                })))).apply(this, arguments)
            }

            function B(n) {
                return F.apply(this, arguments)
            }

            function F() {
                return (F = (0, o.Z)(i().mark((function n(e) {
                    var t, u, s, o, a, d, c, l;
                    return i().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return t = e.tokenId, u = e.excludeHidden, s = void 0 === u || u, n.next = 3, Promise.all([(0, _.Kv)({
                                    tokenId: t,
                                    excludeHidden: s
                                }), (0, p.$J)(t)]);
                            case 3:
                                if (o = n.sent, a = (0, r.Z)(o, 2), d = a[0], c = a[1], d) {
                                    n.next = 9;
                                    break
                                }
                                return n.abrupt("return", null);
                            case 9:
                                return l = (0, h.mL)(c, d), n.abrupt("return", l);
                            case 11:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                })))).apply(this, arguments)
            }

            function q(n) {
                return K.apply(this, arguments)
            }

            function K() {
                return (K = (0, o.Z)(i().mark((function n(e) {
                    var t, r, u, s;
                    return i().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return t = e.tokenIds, r = e.first, u = void 0 === r ? 100 : r, s = (0, f.Li)(), n.next = 4, s.request(p.RO, {
                                    tokenIds: (0, k.GA)(t),
                                    first: u
                                });
                            case 4:
                                return n.abrupt("return", n.sent);
                            case 5:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                })))).apply(this, arguments)
            }
        },
        36561: function(n, e, t) {
            "use strict";
            t.d(e, {
                gt: function() {
                    return y
                },
                Kv: function() {
                    return I
                },
                qw: function() {
                    return g
                },
                nb: function() {
                    return $
                },
                Yl: function() {
                    return b
                }
            });
            var r = t(809),
                u = t.n(r),
                i = t(92447),
                s = t(27261),
                o = t(22527),
                a = t(38918),
                d = t(32624),
                c = t(90035),
                l = t(3761),
                f = t(3907),
                h = t(57079);

            function w() {
                var n = (0, s.Z)(["\n  query hasuraArtworksByPublicKeys(\n    $publicKeys: [String!]!\n    $excludeHidden: Boolean!\n    $moderationStatuses: [artwork_moderationstatus_enum!]\n    $userModerationStatuses: [user_moderationstatus_enum!]\n  ) {\n    artworks: artwork(\n      where: {\n        publicKey: { _in: $publicKeys }\n        # Always exclude deleted works (goerli example 105)\n        deletedAt: { _is_null: true }\n        # which statuses to include (will be ACTIVE by default)\n        moderationStatus: { _in: $moderationStatuses }\n        # artworks of creators under review shouldn\u2019t show publicly\n        user: { moderationStatus: { _in: $userModerationStatuses } }\n        # Respect the excludeHidden flag\n        _or: [\n          # Always include artwork where neither the art or the user are hidden\n          {\n            _and: [\n              { hiddenAt: { _is_null: true } }\n              { user: { hiddenAt: { _is_null: true } } }\n            ]\n          }\n          # Support excludeHidden: false\n          {\n            _or: [\n              # Optionally include when art is hidden but the user is not (goerli example 229)\n              {\n                _and: [\n                  { hiddenAt: { _is_null: $excludeHidden } }\n                  { user: { hiddenAt: { _is_null: true } } }\n                ]\n              }\n              # Optionally include when the user is hidden but the art is not (goerli example 30)\n              {\n                _and: [\n                  { hiddenAt: { _is_null: true } }\n                  { user: { hiddenAt: { _is_null: $excludeHidden } } }\n                ]\n              }\n              # Optionally include when both the art and user are hidden (goerli example 262)\n              {\n                _and: [\n                  { hiddenAt: { _is_null: $excludeHidden } }\n                  { user: { hiddenAt: { _is_null: $excludeHidden } } }\n                ]\n              }\n            ]\n          }\n        ]\n      }\n    ) {\n      ...HasuraArtworkFragment\n      creator: user {\n        ...HasuraUserFragment\n      }\n    }\n  }\n  ", "\n  ", "\n"]);
                return w = function() {
                    return n
                }, n
            }

            function k() {
                var n = (0, s.Z)(["\n  query getHasuraArtworksByIPFSPath(\n    $assetIPFSPath: String!\n    $publicKey: String!\n  ) {\n    artworks: artwork(\n      where: {\n        user: { publicKey: { _eq: $publicKey } }\n        assetIPFSPath: { _eq: $assetIPFSPath }\n        deletedAt: { _is_null: true }\n      }\n    ) {\n      ...HasuraArtworkFragment\n    }\n  }\n  ", "\n"]);
                return k = function() {
                    return n
                }, n
            }

            function p() {
                var n = (0, s.Z)(["\n  query getArtwork($id: uuid!) {\n    artwork: artwork_by_pk(id: $id) {\n      ...HasuraArtworkFragment\n      creator: user {\n        ...HasuraUserFragment\n      }\n    }\n  }\n  ", "\n  ", "\n"]);
                return p = function() {
                    return n
                }, n
            }

            function _() {
                var n = (0, s.Z)(["\n  query getHasuraUserArtworks($publicKey: String!) {\n    user: user_by_pk(publicKey: $publicKey) {\n      ...HasuraUserFragment\n      artworks(where: { deletedAt: { _is_null: true } }) {\n        ...HasuraArtworkFragment\n      }\n    }\n  }\n  ", "\n  ", "\n"]);
                return _ = function() {
                    return n
                }, n
            }

            function m() {
                var n = (0, s.Z)(["\n  query hasuraArtworksByTokenIds(\n    $tokenIds: [Int!]!\n    $excludeHidden: Boolean!\n    $moderationStatuses: [artwork_moderationstatus_enum!]\n    $userModerationStatuses: [user_moderationstatus_enum!]\n  ) {\n    artworks: artwork(\n      where: {\n        tokenId: { _in: $tokenIds }\n        # Always exclude deleted works (goerli example 105)\n        deletedAt: { _is_null: true }\n        # which statuses to include (will be ACTIVE by default)\n        moderationStatus: { _in: $moderationStatuses }\n        # artworks of creators under review shouldn\u2019t show publicly\n        user: { moderationStatus: { _in: $userModerationStatuses } }\n        # Respect the excludeHidden flag\n        _or: [\n          # Always include artwork where neither the art or the user are hidden\n          {\n            _and: [\n              { hiddenAt: { _is_null: true } }\n              { user: { hiddenAt: { _is_null: true } } }\n            ]\n          }\n          # Support excludeHidden: false\n          {\n            _or: [\n              # Optionally include when art is hidden but the user is not (goerli example 229)\n              {\n                _and: [\n                  { hiddenAt: { _is_null: $excludeHidden } }\n                  { user: { hiddenAt: { _is_null: true } } }\n                ]\n              }\n              # Optionally include when the user is hidden but the art is not (goerli example 30)\n              {\n                _and: [\n                  { hiddenAt: { _is_null: true } }\n                  { user: { hiddenAt: { _is_null: $excludeHidden } } }\n                ]\n              }\n              # Optionally include when both the art and user are hidden (goerli example 262)\n              {\n                _and: [\n                  { hiddenAt: { _is_null: $excludeHidden } }\n                  { user: { hiddenAt: { _is_null: $excludeHidden } } }\n                ]\n              }\n            ]\n          }\n        ]\n      }\n    ) {\n      ...HasuraArtworkFragment\n      creator: user {\n        ...HasuraUserFragment\n      }\n    }\n  }\n  ", "\n  ", "\n"]);
                return m = function() {
                    return n
                }, n
            }
            var y = (0, o.ZP)(m(), l.Fk, l.Bk);

            function v(n) {
                return A.apply(this, arguments)
            }

            function A() {
                return (A = (0, i.Z)(u().mark((function n(e) {
                    var t, r, i, s, o, d;
                    return u().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return t = e.tokenIds, r = e.excludeHidden, i = void 0 === r || r, s = e.moderationStatuses, o = void 0 === s ? [f.Z.Active] : s, d = (0, c.ot)(), n.next = 4, d.request(y, {
                                    tokenIds: (0, a.C7)(t),
                                    excludeHidden: i,
                                    moderationStatuses: o,
                                    userModerationStatuses: (0, h.hX)(o)
                                });
                            case 4:
                                return n.abrupt("return", n.sent);
                            case 5:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                })))).apply(this, arguments)
            }

            function I(n) {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = (0, i.Z)(u().mark((function n(e) {
                    var t, r, i, s, o, c, l;
                    return u().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return t = e.tokenId, r = e.excludeHidden, i = void 0 === r || r, s = e.moderationStatuses, o = void 0 === s ? d.zv : s, n.next = 3, v({
                                    tokenIds: [t],
                                    excludeHidden: i,
                                    moderationStatuses: o,
                                    userModerationStatuses: (0, h.hX)(o)
                                });
                            case 3:
                                return c = n.sent, l = c.artworks, n.abrupt("return", (0, a.sD)(l));
                            case 6:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                })))).apply(this, arguments)
            }
            var g = (0, o.ZP)(_(), l.Fk, l.Bk),
                $ = (0, o.ZP)(p(), l.Fk, l.Bk);
            var b = (0, o.ZP)(k(), l.Fk);
            (0, o.ZP)(w(), l.Fk, l.Bk)
        },
        69306: function(n, e, t) {
            "use strict";
            t.d(e, {
                RO: function() {
                    return y
                },
                hJ: function() {
                    return v
                },
                SA: function() {
                    return A
                },
                $J: function() {
                    return I
                },
                Vq: function() {
                    return $
                }
            });
            var r = t(809),
                u = t.n(r),
                i = t(92447),
                s = t(27261),
                o = t(22527),
                a = t(90035),
                d = t(11983),
                c = t(46897),
                l = t(82720);

            function f() {
                var n = (0, s.Z)(["\n  query getArtworkPercentSplits($tokenId: BigInt!) {\n    artworks: nfts(where: { tokenId: $tokenId }) {\n      ...NftPercentSplitFragment\n    }\n  }\n  ", "\n"]);
                return f = function() {
                    return n
                }, n
            }

            function h() {
                var n = (0, s.Z)(['\n  query getArtworksByPublicKeys($publicKeys: [String!], $first: Int!) {\n    artworks: nfts(\n      first: $first\n      where: {\n        creator_in: $publicKeys\n        owner_not: "0x0000000000000000000000000000000000000000"\n      }\n    ) {\n      ...NftWithBidsFragment\n    }\n  }\n  ', "\n"]);
                return h = function() {
                    return n
                }, n
            }

            function w() {
                var n = (0, s.Z)(["\n  query getArtworksByTokenId($tokenId: String!) {\n    artworks: nfts(where: { tokenId: $tokenId }) {\n      ...NftFragment\n    }\n  }\n  ", "\n"]);
                return w = function() {
                    return n
                }, n
            }

            function k() {
                var n = (0, s.Z)(['\n  query getArtworksByTokenId($tokenId: String!) {\n    artworks: nfts(\n      where: {\n        tokenId: $tokenId\n        owner_not: "0x0000000000000000000000000000000000000000"\n      }\n    ) {\n      ...NftFragment\n    }\n  }\n  ', "\n"]);
                return k = function() {
                    return n
                }, n
            }

            function p() {
                var n = (0, s.Z)(['\n  query getArtworksByTokenIdsIncludingBids($tokenIds: [BigInt!], $first: Int!) {\n    artworks: nfts(\n      first: $first\n      where: {\n        tokenId_in: $tokenIds\n        owner_not: "0x0000000000000000000000000000000000000000"\n      }\n    ) {\n      ...NftWithBidsFragment\n    }\n  }\n  ', "\n"]);
                return p = function() {
                    return n
                }, n
            }

            function _() {
                var n = (0, s.Z)(['\n  query getArtworksByTokenIds($tokenIds: [BigInt!], $first: Int!) {\n    artworks: nfts(\n      first: $first\n      where: {\n        tokenId_in: $tokenIds\n        owner_not: "0x0000000000000000000000000000000000000000"\n      }\n    ) {\n      ...NftFragment\n    }\n  }\n  ', "\n"]);
                return _ = function() {
                    return n
                }, n
            }

            function m() {
                var n = (0, s.Z)(['\n  query getAccountArtworks($publicKey: String!) {\n    artworks: nfts(\n      where: {\n        creator: $publicKey\n        owner_not: "0x0000000000000000000000000000000000000000"\n      }\n    ) {\n      ...NftFragment\n    }\n  }\n  ', "\n"]);
                return m = function() {
                    return n
                }, n
            }(0, o.ZP)(m(), c.tP), (0, o.ZP)(_(), c.tP);
            var y = (0, o.ZP)(p(), c.FB),
                v = (0, o.ZP)(k(), c.tP),
                A = (0, o.ZP)(w(), c.tP);
            (0, o.ZP)(h(), c.FB);

            function I(n) {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = (0, i.Z)(u().mark((function n(e) {
                    var t, r, i;
                    return u().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return t = (0, a.Li)(), n.next = 3, t.request(v, {
                                    tokenId: e
                                });
                            case 3:
                                return r = n.sent, i = r.artworks, n.abrupt("return", (0, d.Z)(i));
                            case 6:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                })))).apply(this, arguments)
            }
            var g = (0, o.ZP)(f(), c.lR);

            function $(n) {
                return b.apply(this, arguments)
            }

            function b() {
                return (b = (0, i.Z)(u().mark((function n(e) {
                    var t, r, i, s;
                    return u().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return t = (0, a.Li)(), n.next = 3, t.request(g, {
                                    tokenId: (0, l.ws)(e)
                                });
                            case 3:
                                return r = n.sent, i = r.artworks, s = (0, d.Z)(i), n.abrupt("return", null === s || void 0 === s ? void 0 : s.percentSplit);
                            case 7:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                })))).apply(this, arguments)
            }
        },
        74294: function(n, e, t) {
            "use strict";
            t.d(e, {
                mL: function() {
                    return c
                },
                Sy: function() {
                    return f
                },
                Qm: function() {
                    return h
                }
            });
            var r = t(5479),
                u = t(80359),
                i = t(30601),
                s = t(34146),
                o = t(67822),
                a = (t(19660), t(38918));
            var d = (0, r.Z)((0, u.Z)("account"), (0, i.Z)("creator"));

            function c(n, e) {
                var t = (0, s.Z)(n, e),
                    r = d(t);
                return (0, o.Z)(["creator", "account"], r, t)
            }
            var l = function(n, e) {
                    return e.find((function(e) {
                        return Number(e.tokenId) === Number(n.tokenId)
                    }))
                },
                f = function(n) {
                    var e = n.serverArtworks,
                        t = n.graphArtworks;
                    return e.map((function(n) {
                        var e = l(n, t);
                        return e ? c(e, n) : n
                    }))
                },
                h = function(n) {
                    var e = n.serverArtworks;
                    return n.graphArtworks.map((function(n) {
                        var t = l(n, e);
                        return t ? c(n, t) : null
                    })).filter(a.KO)
                }
        }
    }
]);
//# sourceMappingURL=6839-348dc2cda2b5795f63a3.js.map