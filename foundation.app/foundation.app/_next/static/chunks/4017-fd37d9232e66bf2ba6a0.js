(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4017], {
        12138: function(t, r, e) {
            "use strict";
            e.d(r, {
                Z: function() {
                    return p
                }
            });
            var n = e(26265),
                a = (e(67294), e(11191)),
                s = e(61138),
                i = e(59536),
                o = e(37251),
                u = e(23107);

            function c(t, r) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(t, r).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function p(t) {
                var r = t.pageProps,
                    e = (0, u.Z)().setCurrentModal,
                    p = function() {
                        e(o.$.AUTH_MAIN)
                    },
                    f = {
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column"
                    },
                    d = {
                        borderRadius: 999,
                        minHeight: 56
                    },
                    h = {
                        maxWidth: 380,
                        marginX: "auto",
                        textAlign: "center",
                        marginBottom: "l",
                        lineHeight: 1.1
                    };
                return r ? (0, a.tZ)(i.Z, function(t) {
                    for (var r = 1; r < arguments.length; r++) {
                        var e = null != arguments[r] ? arguments[r] : {};
                        r % 2 ? c(Object(e), !0).forEach((function(r) {
                            (0, n.Z)(t, r, e[r])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : c(Object(e)).forEach((function(r) {
                            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
                        }))
                    }
                    return t
                }({}, r), (0, a.tZ)(s.kC, {
                    sx: f
                }, (0, a.tZ)(s.X6, {
                    variant: "h.l",
                    sx: h
                }, "Connect your wallet to continue."), (0, a.tZ)(s.zx, {
                    sx: d,
                    onClick: p
                }, "Connect Wallet"))) : (0, a.tZ)(s.kC, {
                    sx: f
                }, (0, a.tZ)(s.X6, {
                    variant: "h.l",
                    sx: h
                }, "Connect your wallet to continue."), (0, a.tZ)(s.zx, {
                    sx: d,
                    onClick: p
                }, "Connect Wallet"))
            }
        },
        57033: function(t, r, e) {
            "use strict";
            e.d(r, {
                Z: function() {
                    return s
                }
            });
            e(67294);
            var n = e(11191),
                a = e(61138);

            function s(t) {
                var r = t.description,
                    e = t.title,
                    s = t.children,
                    o = i();
                return (0, n.tZ)(a.xu, {
                    sx: {
                        maxWidth: 400
                    }
                }, (0, n.tZ)(a.rj, {
                    gap: "s"
                }, (0, n.tZ)(a.X6, {
                    variant: "h.l",
                    sx: o.heading
                }, e), (0, n.tZ)(a.rj, {
                    gap: "l",
                    sx: o.description
                }, (0, n.tZ)(a.xv, {
                    variant: "body.body"
                }, r), s)))
            }
            var i = function() {
                return {
                    heading: {
                        lineHeight: 1,
                        textAlign: ["center", null, "left"]
                    },
                    description: {
                        justifyContent: ["center", null, "flex-start"],
                        textAlign: ["center", null, "left"]
                    }
                }
            }
        },
        42443: function(t, r, e) {
            "use strict";
            e.d(r, {
                Z: function() {
                    return O
                }
            });
            var n = e(809),
                a = e.n(n),
                s = e(92447),
                i = e(67294),
                o = e(71371),
                u = e(10914),
                c = e(21654),
                p = e(19119),
                f = e(21458);
            (0, e(54553).Z)();

            function d(t) {
                var r = t.mul(1e3).div(1e4);
                return t.add(r)
            }
            var h = e(9900);

            function v(t) {
                return l.apply(this, arguments)
            }

            function l() {
                return (l = (0, s.Z)(a().mark((function t(r) {
                    var e, n, s, i, o, u, c, h, v, l, x, m, w, b, k, g, y;
                    return a().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e = r.price, n = void 0 === e ? "0" : e, s = r.provider, i = r.estimateGasProvider, r.gasData, o = r.auctionId, u = (0, p.f)(n), c = o, h = u, v = s.getSigner(), l = (0, f.Rk)(v), x = v.getAddress(), m = (0, f.Up)(i), t.next = 10, m.estimateGas.placeBid(c, {
                                    from: x,
                                    value: h
                                });
                            case 10:
                                return w = t.sent, b = d(w), k = {
                                    gasLimit: b.toString(),
                                    value: h
                                }, t.next = 15, l.placeBid(c, k);
                            case 15:
                                return g = t.sent, y = g.hash, t.abrupt("return", {
                                    tx: g,
                                    txHash: y
                                });
                            case 18:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function x(t) {
                return m.apply(this, arguments)
            }

            function m() {
                return (m = (0, s.Z)(a().mark((function t(r) {
                    var e, n, s, i, o, u, c, p, h, v, l, x, m;
                    return a().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e = r.provider, n = r.estimateGasProvider, r.gasData, s = r.auctionId, i = s, o = e.getSigner(), u = (0, f.Rk)(o), c = o.getAddress(), p = (0, f.Up)(n), t.next = 8, p.estimateGas.finalizeReserveAuction(i, {
                                    from: c
                                });
                            case 8:
                                return h = t.sent, v = d(h), l = {
                                    gasLimit: v.toString()
                                }, t.next = 13, u.finalizeReserveAuction(i, l);
                            case 13:
                                return x = t.sent, m = x.hash, t.abrupt("return", {
                                    tx: x,
                                    txHash: m
                                });
                            case 16:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function w(t) {
                return b.apply(this, arguments)
            }

            function b() {
                return (b = (0, s.Z)(a().mark((function t(r) {
                    var e, n, s, i, o, u, c, p, h, v, l, x, m, w, b;
                    return a().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (e = r.provider, n = r.estimateGasProvider, r.gasData, s = r.tokenIPFSPath, i = r.isFirstTime, o = void 0 === i || i, u = s, c = e.getSigner(), p = (0, f.qT)(c), h = c.getAddress(), v = (0, f.S6)(n), !o) {
                                    t.next = 12;
                                    break
                                }
                                return t.next = 9, v.estimateGas.mintAndApproveMarket(u, {
                                    from: h
                                });
                            case 9:
                                t.t0 = t.sent, t.next = 15;
                                break;
                            case 12:
                                return t.next = 14, v.estimateGas.mint(u, {
                                    from: h
                                });
                            case 14:
                                t.t0 = t.sent;
                            case 15:
                                if (l = t.t0, x = d(l), m = {
                                        gasLimit: x.toString()
                                    }, !o) {
                                    t.next = 24;
                                    break
                                }
                                return t.next = 21, p.mintAndApproveMarket(u, m);
                            case 21:
                                t.t1 = t.sent, t.next = 27;
                                break;
                            case 24:
                                return t.next = 26, p.mint(u, m);
                            case 26:
                                t.t1 = t.sent;
                            case 27:
                                return w = t.t1, b = w.hash, t.abrupt("return", {
                                    tx: w,
                                    txHash: b
                                });
                            case 30:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function k(t) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = (0, s.Z)(a().mark((function t(r) {
                    var e, n, s, i, o, u, c, p, h, v, l, x, m, w;
                    return a().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e = r.provider, n = r.estimateGasProvider, r.gasData, s = r.from, i = r.to, o = r.tokenId, u = e.getSigner(), c = (0, f.qT)(u), p = u.getAddress(), h = (0, f.S6)(n), t.next = 7, h.estimateGas["safeTransferFrom(address,address,uint256)"](s, i, o, {
                                    from: p
                                });
                            case 7:
                                return v = t.sent, l = d(v), x = {
                                    gasLimit: l.toString()
                                }, t.next = 12, c["safeTransferFrom(address,address,uint256)"](s, i, o, x);
                            case 12:
                                return m = t.sent, w = m.hash, t.abrupt("return", {
                                    tx: m,
                                    txHash: w
                                });
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function y(t) {
                return P.apply(this, arguments)
            }

            function P() {
                return (P = (0, s.Z)(a().mark((function t(r) {
                    var e, n, s, i, o, u, c, p, h, v, l, x;
                    return a().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e = r.provider, n = r.estimateGasProvider, r.gasData, s = r.tokenId, i = e.getSigner(), o = (0, f.qT)(i), u = i.getAddress(), c = (0, f.S6)(n), t.next = 7, c.estimateGas.burn(s, {
                                    from: u
                                });
                            case 7:
                                return p = t.sent, h = d(p), v = {
                                    gasLimit: h.toString()
                                }, t.next = 12, o.burn(s, v);
                            case 12:
                                return l = t.sent, x = l.hash, t.abrupt("return", {
                                    tx: l,
                                    txHash: x
                                });
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function A(t) {
                return Z.apply(this, arguments)
            }

            function Z() {
                return (Z = (0, s.Z)(a().mark((function t(r) {
                    var e, n, s, i, o, u, c, p, h, v, l, x, m, w;
                    return a().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e = r.provider, n = r.estimateGasProvider, s = r.nftContract, i = r.id, o = r.reservePrice, u = e.getSigner(), c = (0, f.Rk)(u), p = u.getAddress(), h = (0, f.Up)(n), t.next = 7, h.estimateGas.createReserveAuction(s, i, o, {
                                    from: p
                                });
                            case 7:
                                return v = t.sent, l = d(v), x = {
                                    gasLimit: l.toString()
                                }, t.next = 12, c.createReserveAuction(s, i, o, x);
                            case 12:
                                return m = t.sent, w = m.hash, t.abrupt("return", {
                                    tx: m,
                                    txHash: w
                                });
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function S(t) {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = (0, s.Z)(a().mark((function t(r) {
                    var e, n, s, i, o, u, c, p, h, v, l, x;
                    return a().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e = r.provider, n = r.estimateGasProvider, s = r.auctionId, i = e.getSigner(), o = (0, f.Rk)(i), u = i.getAddress(), c = (0, f.Up)(n), t.next = 7, c.estimateGas.cancelReserveAuction(s, {
                                    from: u
                                });
                            case 7:
                                return p = t.sent, h = d(p), v = {
                                    gasLimit: h.toString()
                                }, t.next = 12, o.cancelReserveAuction(s, v);
                            case 12:
                                return l = t.sent, x = l.hash, t.abrupt("return", {
                                    tx: l,
                                    txHash: x
                                });
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function G(t) {
                return I.apply(this, arguments)
            }

            function I() {
                return (I = (0, s.Z)(a().mark((function t(r) {
                    var e, n, s, i, o, u, c, p, v, l, x, m;
                    return a().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e = r.provider, n = r.estimateGasProvider, s = e.getSigner(), i = (0, f.qT)(s), o = s.getAddress(), u = (0, f.S6)(n), c = (0, h.dA)(), t.next = 8, u.estimateGas.setApprovalForAll(c, !0, {
                                    from: o
                                });
                            case 8:
                                return p = t.sent, v = d(p), l = {
                                    gasLimit: v.toString()
                                }, t.next = 13, i.setApprovalForAll(c, !0, l);
                            case 13:
                                return x = t.sent, m = x.hash, t.abrupt("return", {
                                    tx: x,
                                    txHash: m
                                });
                            case 16:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function C(t) {
                return H.apply(this, arguments)
            }

            function H() {
                return (H = (0, s.Z)(a().mark((function t(r) {
                    var e, n, s, i, o, u, c, p, h, v, l, x, m;
                    return a().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e = r.provider, n = r.estimateGasProvider, s = r.auctionId, i = r.reservePrice, o = e.getSigner(), u = (0, f.Rk)(o), c = o.getAddress(), p = (0, f.Up)(n), t.next = 7, p.estimateGas.updateReserveAuction(s, i, {
                                    from: c
                                });
                            case 7:
                                return h = t.sent, v = d(h), l = {
                                    gasLimit: v.toString()
                                }, t.next = 12, u.updateReserveAuction(s, i, l);
                            case 12:
                                return x = t.sent, m = x.hash, t.abrupt("return", {
                                    tx: x,
                                    txHash: m
                                });
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            var M = e(2593);

            function F(t) {
                return W.apply(this, arguments)
            }

            function W() {
                return (W = (0, s.Z)(a().mark((function t(r) {
                    var e, n, s, i, o, u, c, p, v, l, x, m, w, b, k, g, y, P;
                    return a().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e = r.provider, n = r.estimateGasProvider, s = r.tokenIPFSPath, i = r.shares, o = e.getSigner(), u = (0, f.qT)(o), c = (0, h.B5)(), p = o.getAddress(), v = (0, f.S6)(n), l = (0, f.H$)(n), x = i.map((function(t) {
                                    return {
                                        recipient: t.address,
                                        percentInBasisPoints: M.O$.from((100 * t.shareInPercentage).toFixed(0))
                                    }
                                })), m = x.sort((function(t, r) {
                                    var e = t.recipient.toUpperCase(),
                                        n = r.recipient.toUpperCase();
                                    return e < n ? -1 : e > n ? 1 : 0
                                })), w = l.interface.encodeFunctionData("createSplit", [m]), t.next = 12, v.estimateGas.mintWithCreatorPaymentFactoryAndApproveMarket(s, c, w, {
                                    from: p
                                });
                            case 12:
                                return b = t.sent, k = d(b), g = {
                                    gasLimit: k.toString()
                                }, t.next = 17, u.mintWithCreatorPaymentFactoryAndApproveMarket(s, c, w, g);
                            case 17:
                                return y = t.sent, P = y.hash, t.abrupt("return", {
                                    tx: y,
                                    txHash: P
                                });
                            case 20:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            var R = e(61361),
                L = e(44286),
                E = e(38918);

            function O(t) {
                var r = t.method,
                    e = (0, i.useState)(!1),
                    n = e[0],
                    p = e[1],
                    f = (0, i.useState)(!1),
                    d = f[0],
                    h = f[1],
                    l = (0, i.useState)(!1),
                    m = l[0],
                    b = l[1],
                    g = (0, i.useState)(null),
                    P = g[0],
                    Z = g[1],
                    T = (0, u.Ge)(),
                    I = T.library,
                    H = T.active,
                    M = (0, L.Z)(),
                    W = M.provider,
                    O = (M.isLoading, (0, c.Z)().isWrongNetwork, !H);
                if (O) return {
                    sendBidTransaction: function() {
                        var t = (0, s.Z)(a().mark((function t() {
                            return a().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", "");
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    sendClaimTransaction: function() {
                        var t = (0, s.Z)(a().mark((function t() {
                            return a().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", "");
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    sendMintTransaction: function() {
                        var t = (0, s.Z)(a().mark((function t() {
                            return a().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", "");
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    sendMintWithSplitTransaction: function() {
                        var t = (0, s.Z)(a().mark((function t() {
                            return a().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", "");
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    sendTransferTransaction: function() {
                        var t = (0, s.Z)(a().mark((function t() {
                            return a().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", "");
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    sendBurnTransaction: function() {
                        var t = (0, s.Z)(a().mark((function t() {
                            return a().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", "");
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    sendListTransaction: function() {
                        var t = (0, s.Z)(a().mark((function t() {
                            return a().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", "");
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    sendUnlistTransaction: function() {
                        var t = (0, s.Z)(a().mark((function t() {
                            return a().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", "");
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    sendApproveTransaction: function() {
                        var t = (0, s.Z)(a().mark((function t() {
                            return a().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", "");
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    sendChangePriceTransaction: function() {
                        var t = (0, s.Z)(a().mark((function t() {
                            return a().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", "");
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    isLoading: n,
                    isError: m,
                    error: P,
                    isSuccess: d,
                    isProviderLoading: O
                };

                function j() {
                    return (j = (0, s.Z)(a().mark((function t(e) {
                        var n, s, i, u, c, f, d;
                        return a().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = e.auctionId, s = e.price, i = e.shouldWait, u = void 0 !== i && i, p(!0), t.prev = 2, r === R.N.Bid) {
                                        t.next = 5;
                                        break
                                    }
                                    throw new Error("Methods other than placeBid not supported");
                                case 5:
                                    return t.next = 7, v({
                                        provider: I,
                                        estimateGasProvider: W,
                                        price: s,
                                        auctionId: n
                                    });
                                case 7:
                                    if (c = t.sent, f = c.tx, d = c.txHash, !u) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.next = 13, f.wait();
                                case 13:
                                    return h(!0), p(!1), t.abrupt("return", d);
                                case 18:
                                    throw t.prev = 18, t.t0 = t.catch(2), o.Tb((0, E.by)(t.t0)), Z(t.t0), b(!0), p(!1), t.t0;
                                case 25:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [2, 18]
                        ])
                    })))).apply(this, arguments)
                }

                function B() {
                    return (B = (0, s.Z)(a().mark((function t(e) {
                        var n, s, i, u, c, f;
                        return a().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = e.auctionId, s = e.shouldWait, i = void 0 !== s && s, p(!0), t.prev = 2, r === R.N.Settle) {
                                        t.next = 5;
                                        break
                                    }
                                    throw new Error("Methods other than finalizeReserveAuction not supported");
                                case 5:
                                    return t.next = 7, x({
                                        provider: I,
                                        estimateGasProvider: W,
                                        auctionId: n
                                    });
                                case 7:
                                    if (u = t.sent, c = u.tx, f = u.txHash, !i) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.next = 13, c.wait();
                                case 13:
                                    return h(!0), p(!1), t.abrupt("return", f);
                                case 18:
                                    throw t.prev = 18, t.t0 = t.catch(2), o.Tb((0, E.by)(t.t0)), Z(t.t0), b(!0), p(!1), t.t0;
                                case 25:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [2, 18]
                        ])
                    })))).apply(this, arguments)
                }

                function N() {
                    return (N = (0, s.Z)(a().mark((function t(e) {
                        var n, s, i, u, c, f, d, v;
                        return a().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = e.shouldWait, s = void 0 !== n && n, i = e.tokenIPFSPath, u = e.isFirstTime, c = void 0 === u || u, p(!0), t.prev = 2, r === R.N.FirstMint) {
                                        t.next = 5;
                                        break
                                    }
                                    throw new Error("Methods other than mint not supported");
                                case 5:
                                    if (i) {
                                        t.next = 7;
                                        break
                                    }
                                    throw new Error("Token IPFS Path not defined");
                                case 7:
                                    return t.next = 9, w({
                                        provider: I,
                                        estimateGasProvider: W,
                                        tokenIPFSPath: i,
                                        isFirstTime: c
                                    });
                                case 9:
                                    if (f = t.sent, d = f.tx, v = f.txHash, !s) {
                                        t.next = 15;
                                        break
                                    }
                                    return t.next = 15, d.wait();
                                case 15:
                                    return h(!0), p(!1), t.abrupt("return", v);
                                case 20:
                                    throw t.prev = 20, t.t0 = t.catch(2), o.Tb((0, E.by)(t.t0)), Z(t.t0), b(!0), p(!1), t.t0;
                                case 27:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [2, 20]
                        ])
                    })))).apply(this, arguments)
                }

                function U() {
                    return (U = (0, s.Z)(a().mark((function t(e) {
                        var n, s, i, u, c, f, d;
                        return a().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = e.shouldWait, s = void 0 !== n && n, i = e.tokenIPFSPath, u = e.shares, p(!0), t.prev = 2, r === R.N.MintWithSplit) {
                                        t.next = 5;
                                        break
                                    }
                                    throw new Error("Methods other than mint not supported");
                                case 5:
                                    if (i) {
                                        t.next = 7;
                                        break
                                    }
                                    throw new Error("Token IPFS Path not defined");
                                case 7:
                                    return t.next = 9, F({
                                        provider: I,
                                        estimateGasProvider: W,
                                        tokenIPFSPath: i,
                                        shares: u
                                    });
                                case 9:
                                    if (c = t.sent, f = c.tx, d = c.txHash, !s) {
                                        t.next = 15;
                                        break
                                    }
                                    return t.next = 15, f.wait();
                                case 15:
                                    return h(!0), p(!1), t.abrupt("return", d);
                                case 20:
                                    throw t.prev = 20, t.t0 = t.catch(2), o.Tb((0, E.by)(t.t0)), Z(t.t0), b(!0), p(!1), t.t0;
                                case 27:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [2, 20]
                        ])
                    })))).apply(this, arguments)
                }

                function D() {
                    return (D = (0, s.Z)(a().mark((function t(e) {
                        var n, s, i, u, c, f, d, v;
                        return a().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = e.shouldWait, s = void 0 !== n && n, i = e.from, u = e.to, c = e.tokenId, p(!0), t.prev = 2, r === R.N.Transfer) {
                                        t.next = 5;
                                        break
                                    }
                                    throw new Error("Methods other than transfer not supported");
                                case 5:
                                    return t.next = 7, k({
                                        provider: I,
                                        estimateGasProvider: W,
                                        from: i,
                                        to: u,
                                        tokenId: c
                                    });
                                case 7:
                                    if (f = t.sent, d = f.tx, v = f.txHash, !s) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.next = 13, d.wait();
                                case 13:
                                    return h(!0), p(!1), t.abrupt("return", v);
                                case 18:
                                    throw t.prev = 18, t.t0 = t.catch(2), o.Tb((0, E.by)(t.t0)), Z(t.t0), b(!0), p(!1), t.t0;
                                case 25:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [2, 18]
                        ])
                    })))).apply(this, arguments)
                }

                function q() {
                    return (q = (0, s.Z)(a().mark((function t(e) {
                        var n, s, i, u, c, f;
                        return a().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = e.shouldWait, s = void 0 !== n && n, i = e.tokenId, p(!0), t.prev = 2, r === R.N.Burn) {
                                        t.next = 5;
                                        break
                                    }
                                    throw new Error("Methods other than transfer not supported");
                                case 5:
                                    return t.next = 7, y({
                                        provider: I,
                                        estimateGasProvider: W,
                                        tokenId: i
                                    });
                                case 7:
                                    if (u = t.sent, c = u.tx, f = u.txHash, !s) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.next = 13, c.wait();
                                case 13:
                                    return h(!0), p(!1), t.abrupt("return", f);
                                case 18:
                                    throw t.prev = 18, t.t0 = t.catch(2), o.Tb((0, E.by)(t.t0)), Z(t.t0), b(!0), p(!1), t.t0;
                                case 25:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [2, 18]
                        ])
                    })))).apply(this, arguments)
                }

                function z() {
                    return (z = (0, s.Z)(a().mark((function t(e) {
                        var n, s, i, u, c, f, d, v;
                        return a().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = e.shouldWait, s = void 0 !== n && n, i = e.nftContract, u = e.id, c = e.reservePrice, p(!0), t.prev = 2, r === R.N.List) {
                                        t.next = 5;
                                        break
                                    }
                                    throw new Error("Methods other than list not supported");
                                case 5:
                                    return t.next = 7, A({
                                        provider: I,
                                        estimateGasProvider: W,
                                        nftContract: i,
                                        id: u,
                                        reservePrice: c
                                    });
                                case 7:
                                    if (f = t.sent, d = f.tx, v = f.txHash, !s) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.next = 13, d.wait();
                                case 13:
                                    return h(!0), p(!1), t.abrupt("return", v);
                                case 18:
                                    throw t.prev = 18, t.t0 = t.catch(2), o.Tb((0, E.by)(t.t0)), Z(t.t0), b(!0), p(!1), t.t0;
                                case 25:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [2, 18]
                        ])
                    })))).apply(this, arguments)
                }

                function $() {
                    return ($ = (0, s.Z)(a().mark((function t(e) {
                        var n, s, i, u, c, f;
                        return a().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = e.shouldWait, s = void 0 !== n && n, i = e.auctionId, p(!0), t.prev = 2, r === R.N.Unlist) {
                                        t.next = 5;
                                        break
                                    }
                                    throw new Error("Methods other than list not supported");
                                case 5:
                                    return t.next = 7, S({
                                        provider: I,
                                        estimateGasProvider: W,
                                        auctionId: i
                                    });
                                case 7:
                                    if (u = t.sent, c = u.tx, f = u.txHash, !s) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.next = 13, c.wait();
                                case 13:
                                    return h(!0), p(!1), t.abrupt("return", f);
                                case 18:
                                    throw t.prev = 18, t.t0 = t.catch(2), o.Tb((0, E.by)(t.t0)), Z(t.t0), b(!0), p(!1), t.t0;
                                case 25:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [2, 18]
                        ])
                    })))).apply(this, arguments)
                }

                function _() {
                    return (_ = (0, s.Z)(a().mark((function t(e) {
                        var n, s, i, u, c;
                        return a().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = e.shouldWait, s = void 0 !== n && n, p(!0), t.prev = 2, r === R.N.Approve) {
                                        t.next = 5;
                                        break
                                    }
                                    throw new Error("Methods other than list not supported");
                                case 5:
                                    return t.next = 7, G({
                                        provider: I,
                                        estimateGasProvider: W
                                    });
                                case 7:
                                    if (i = t.sent, u = i.tx, c = i.txHash, !s) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.next = 13, u.wait();
                                case 13:
                                    return h(!0), p(!1), t.abrupt("return", c);
                                case 18:
                                    throw t.prev = 18, t.t0 = t.catch(2), o.Tb((0, E.by)(t.t0)), Z(t.t0), b(!0), p(!1), t.t0;
                                case 25:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [2, 18]
                        ])
                    })))).apply(this, arguments)
                }

                function X() {
                    return (X = (0, s.Z)(a().mark((function t(e) {
                        var n, s, i, u, c, f, d;
                        return a().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = e.shouldWait, s = void 0 !== n && n, i = e.auctionId, u = e.reservePrice, p(!0), t.prev = 2, r === R.N.ChangePrice) {
                                        t.next = 5;
                                        break
                                    }
                                    throw new Error("Methods other than change price not supported");
                                case 5:
                                    return t.next = 7, C({
                                        provider: I,
                                        estimateGasProvider: W,
                                        auctionId: i,
                                        reservePrice: u
                                    });
                                case 7:
                                    if (c = t.sent, f = c.tx, d = c.txHash, !s) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.next = 13, f.wait();
                                case 13:
                                    return h(!0), p(!1), t.abrupt("return", d);
                                case 18:
                                    throw t.prev = 18, t.t0 = t.catch(2), o.Tb((0, E.by)(t.t0)), Z(t.t0), b(!0), p(!1), t.t0;
                                case 25:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [2, 18]
                        ])
                    })))).apply(this, arguments)
                }
                return {
                    sendBidTransaction: function(t) {
                        return j.apply(this, arguments)
                    },
                    sendClaimTransaction: function(t) {
                        return B.apply(this, arguments)
                    },
                    sendMintTransaction: function(t) {
                        return N.apply(this, arguments)
                    },
                    sendMintWithSplitTransaction: function(t) {
                        return U.apply(this, arguments)
                    },
                    sendTransferTransaction: function(t) {
                        return D.apply(this, arguments)
                    },
                    sendBurnTransaction: function(t) {
                        return q.apply(this, arguments)
                    },
                    sendListTransaction: function(t) {
                        return z.apply(this, arguments)
                    },
                    sendUnlistTransaction: function(t) {
                        return $.apply(this, arguments)
                    },
                    sendApproveTransaction: function(t) {
                        return _.apply(this, arguments)
                    },
                    sendChangePriceTransaction: function(t) {
                        return X.apply(this, arguments)
                    },
                    isLoading: n,
                    isError: m,
                    error: P,
                    isSuccess: d,
                    isProviderLoading: O
                }
            }
        },
        21458: function(t, r, e) {
            "use strict";
            e.d(r, {
                Rk: function() {
                    return h
                },
                Up: function() {
                    return v
                },
                qT: function() {
                    return l
                },
                S6: function() {
                    return x
                },
                H$: function() {
                    return m
                }
            });
            var n, a, s, i, o, u = e(9900),
                c = e(74577),
                p = (0, u.dA)(),
                f = (0, u.WH)(),
                d = (0, u.B5)();

            function h(t) {
                return !n && t && (n = c.sj.connect(p, t)), n
            }

            function v(t) {
                return !s && t && (s = c.sj.connect(p, t)), s
            }

            function l(t) {
                return !a && t && (a = c.I.connect(f, t)), a
            }

            function x(t) {
                return !i && t && (i = c.I.connect(f, t)), i
            }

            function m(t) {
                return !o && t && (o = c.$s.connect(d, t)), o
            }
        },
        61361: function(t, r, e) {
            "use strict";
            var n;
            e.d(r, {
                    N: function() {
                        return n
                    }
                }),
                function(t) {
                    t.Bid = "placeBid", t.FirstMint = "mintAndApproveMarket", t.Transfer = "safeTransferFrom", t.AdditionalMint = "mint", t.List = "createReserveAuction", t.Unlist = "cancelReserveAuction", t.Approve = "setApprovalForAll", t.Settle = "finalizeReserveAuction", t.ChangePrice = "updateReserveAuction", t.Burn = "burn", t.MintWithSplit = "mintWithCreatorPaymentFactoryAndApproveMarket"
                }(n || (n = {}))
        }
    }
]);
//# sourceMappingURL=4017-fd37d9232e66bf2ba6a0.js.map