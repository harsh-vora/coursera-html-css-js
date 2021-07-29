(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9195], {
        73172: function(t, l, n) {
            "use strict";
            n.d(l, {
                d: function() {
                    return d
                }
            });
            n(67294);
            var r = n(11191),
                o = n(61138),
                a = n(75188),
                e = n(31820),
                i = n(95953),
                u = n(51250);

            function c(t) {
                var l = t.article,
                    n = s();
                return (0, r.tZ)(a.ZP, {
                    href: "/blog/".concat(l.slug)
                }, (0, r.tZ)(o.kC, {
                    as: "a",
                    sx: n.card
                }, (0, r.tZ)(o.xu, {
                    sx: n.bb
                }, (0, r.tZ)(o.Ee, {
                    src: (0, e.Iq)(null === l || void 0 === l ? void 0 : l.coverImage, {
                        q: 90,
                        w: 630,
                        h: 420,
                        fit: "pad"
                    }),
                    sx: n.db
                })), (0, r.tZ)(o.xu, {
                    sx: {
                        p: "l"
                    }
                }, (0, r.tZ)(o.X6, {
                    variant: "h.s",
                    mb: "s",
                    sx: n.title
                }, l.title), (0, r.tZ)(o.xv, {
                    variant: "body.body"
                }, null === l || void 0 === l ? void 0 : l.shortDescription)), (0, r.tZ)(o.xu, {
                    sx: {
                        px: "l",
                        pb: "l",
                        mt: "auto"
                    }
                }, (0, r.tZ)(o.xv, {
                    mt: "auto",
                    variant: "mono.caption"
                }, "Published ", (0, i.z2)(null === l || void 0 === l ? void 0 : l.datePosted)))))
            }
            var s = function() {
                return {
                    card: {
                        border: "black.2",
                        flexDirection: "column",
                        textDecoration: "none",
                        color: "black.100",
                        transition: u.pB.smooth.fast,
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
                var l = t.articles;
                return (0, r.tZ)(o.rj, {
                    columns: [1, 1, 3],
                    gap: "s"
                }, l.map((function(t) {
                    return (0, r.tZ)(c, {
                        article: t,
                        key: t.title
                    })
                })))
            }
        },
        41624: function(t, l, n) {
            "use strict";
            n.r(l), n.d(l, {
                FeaturedArticle: function() {
                    return p
                },
                __N_SSG: function() {
                    return h
                },
                default: function() {
                    return Z
                }
            });
            var r = n(47707),
                o = n(49391),
                a = n(40355),
                e = n(75678);
            n(67294);
            var i = n(11191),
                u = n(61138),
                c = n(59536),
                s = n(92931),
                d = n(75188),
                x = n(73172),
                v = n(51250),
                b = n(31820),
                f = n(95953),
                m = n(34056),
                h = !0;

            function Z(t) {
                var l, n = t.articles,
                    d = (l = n, (0, r.Z)(l) || (0, o.Z)(l) || (0, a.Z)(l) || (0, e.Z)()),
                    v = d[0],
                    b = d.slice(1);
                return (0, i.tZ)(c.Z, {
                    title: "Blog",
                    type: m.c7.maximal
                }, (0, i.tZ)(s.Z, {
                    sx: {
                        paddingY: ["l", "xl", "xxl", "xxxl"],
                        position: "relative",
                        zIndex: 4
                    }
                }, (0, i.tZ)(u.xu, {
                    mb: ["l", null, "xl"]
                }, (0, i.tZ)(p, {
                    article: v
                })), (0, i.tZ)(x.d, {
                    articles: b
                })))
            }

            function p(t) {
                var l = t.article,
                    n = k();
                return (0, i.tZ)(d.ZP, {
                    href: "/blog/".concat(l.slug)
                }, (0, i.tZ)(u.rj, {
                    as: "a",
                    sx: n.card,
                    columns: [1, null, null, "450px auto", "600px auto"]
                }, (0, i.tZ)(u.xu, {
                    sx: n.bb
                }, (0, i.tZ)(u.Ee, {
                    src: (0, b.Iq)(null === l || void 0 === l ? void 0 : l.coverImage, {
                        q: 90,
                        w: 630,
                        h: 420,
                        fit: "pad"
                    }),
                    sx: n.db
                })), (0, i.tZ)(u.kC, {
                    sx: {
                        p: ["l", null, null, null, "xl"],
                        flexDirection: "column"
                    }
                }, (0, i.tZ)(u.X6, {
                    variant: "h.l",
                    mb: "s",
                    sx: n.title
                }, l.title), (0, i.tZ)(u.xv, {
                    variant: "body.mid",
                    sx: n.excerpt
                }, null === l || void 0 === l ? void 0 : l.shortDescription), (0, i.tZ)(u.xu, {
                    sx: {
                        pt: "l",
                        mt: "auto"
                    }
                }, (0, i.tZ)(u.xv, {
                    mt: "auto",
                    variant: "mono.caption"
                }, "Published ", (0, f.z2)(null === l || void 0 === l ? void 0 : l.datePosted))))))
            }
            var k = function() {
                return {
                    card: {
                        border: "black.2",
                        textDecoration: "none",
                        color: "black.100",
                        transition: v.pB.smooth.fast,
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
                        lineHeight: .9,
                        maxWidth: 560,
                        mb: "l"
                    },
                    excerpt: {
                        maxWidth: 420
                    },
                    bb: {
                        borderBottom: ["black.2", null, null, "none"],
                        borderRight: [null, null, null, "black.2"],
                        display: [null, null, null, "flex"]
                    },
                    db: {
                        display: "block",
                        width: "100%",
                        objectFit: [null, null, null, "cover"]
                    }
                }
            }
        },
        30677: function(t, l, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/blog", function() {
                return n(41624)
            }])
        }
    },
    function(t) {
        t.O(0, [9351, 5132, 6870, 6019, 9536, 9774, 2888, 179], (function() {
            return l = 30677, t(t.s = l);
            var l
        }));
        var l = t.O();
        _N_E = l
    }
]);
//# sourceMappingURL=blog-81427e66ad6568a3b1c7.js.map