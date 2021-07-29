(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9640], {
        59289: function(e, t, n) {
            "use strict";
            var r, i = n(67294);

            function o() {
                return (o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            t.Z = function(e) {
                return i.createElement("svg", o({
                    viewBox: "0 0 20 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), r || (r = i.createElement("path", {
                    d: "M20 1.806l-9.227 7.908a1.188 1.188 0 01-1.546 0L0 1.806 1.548 0l8.453 7.245L18.45.001 20 1.806z",
                    fill: "currentColor"
                })))
            }
        },
        8095: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            n(67294);
            var r = n(11191),
                i = n(61138),
                o = n(41139);

            function a(e) {
                var t = e.className;
                return (0, r.tZ)(i.kC, {
                    className: t,
                    sx: {
                        flex: "auto",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingBottom: "xxxl"
                    }
                }, (0, r.tZ)(o.Z, {
                    size: 44
                }))
            }
        },
        61520: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return l
                },
                Z: function() {
                    return u
                }
            });
            var r = n(11191),
                i = n(61138),
                o = n(67294),
                a = n(41139),
                s = n(53869),
                c = n(17757);

            function l(e) {
                var t = e.root,
                    n = e.target,
                    r = e.onIntersect,
                    i = e.threshold,
                    a = void 0 === i ? 1 : i,
                    s = e.rootMargin,
                    c = void 0 === s ? "0px" : s,
                    l = e.enabled,
                    u = void 0 === l || l;
                (0, o.useEffect)((function() {
                    if (u) {
                        var e = new IntersectionObserver((function(e) {
                                return e.forEach((function(e) {
                                    e.isIntersecting && r()
                                }))
                            }), {
                                root: null === t || void 0 === t ? void 0 : t.current,
                                rootMargin: c,
                                threshold: a
                            }),
                            i = n && n.current;
                        if (i) return e.observe(i),
                            function() {
                                e.unobserve(i)
                            }
                    }
                }), [n.current, u])
            }

            function u(e) {
                var t = e.handleNextPage,
                    n = e.isFetching,
                    u = e.enabled,
                    d = void 0 === u || u,
                    f = e.hasNextPage,
                    h = e.animationDuration,
                    p = void 0 === h ? .1 : h,
                    g = (0, o.useRef)();
                return l({
                    target: g,
                    onIntersect: t,
                    enabled: f && d
                }), (0, r.tZ)(o.Fragment, null, (0, r.tZ)(i.xu, {
                    ref: g,
                    sx: {
                        height: 1
                    }
                }), (0, r.tZ)(s.M, {
                    exitBeforeEnter: !0
                }, n && f && (0, r.tZ)(c.E.div, {
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
                }, (0, r.tZ)(i.kC, {
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
        85544: function(e, t, n) {
            "use strict";
            n.d(t, {
                Ph: function() {
                    return l
                },
                bL: function() {
                    return u
                },
                GV: function() {
                    return d
                },
                ZP: function() {
                    return f
                }
            });
            var r = n(85893),
                i = n(96626),
                o = n(67294),
                a = n(72694),
                s = n(33559),
                c = n(59289),
                l = (0, i.zo)("select", {
                    appearance: "none",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    opacity: 0,
                    fontSize: "$1"
                }),
                u = (0, i.zo)(s.Z, {
                    maxHeight: 38,
                    fontFamily: "$body",
                    fontWeight: 600,
                    fontSize: "$1",
                    color: "$black100",
                    borderRadius: "$1",
                    backgroundColor: "$white100",
                    border: "1px solid $black10",
                    paddingY: "$2",
                    paddingLeft: "$2",
                    paddingRight: "$2",
                    minHeight: "auto",
                    whiteSpace: "nowrap",
                    transition: "border-color $1 $ease",
                    cursor: "pointer",
                    position: "relative",
                    alignItems: "center",
                    boxShadow: "$0",
                    "@media (hover: hover)": {
                        "&:hover": {
                            borderColor: "$black100"
                        }
                    }
                }),
                d = (0, i.zo)(s.Z, {
                    marginLeft: "$4",
                    alignSelf: "stretch"
                });

            function f(e) {
                var t = e.items,
                    n = void 0 === t ? [] : t,
                    i = e.className,
                    s = e.defaultSelectedItem,
                    f = e.onSelectedItemChange,
                    h = (0, o.useState)(s),
                    p = h[0],
                    g = h[1];
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)(u, {
                        className: i,
                        children: [(0, r.jsx)(l, {
                            onChange: function(e) {
                                var t = e.target.value,
                                    r = n.find((function(e) {
                                        return e.id === t
                                    }));
                                g(r), f(r)
                            },
                            value: p.id,
                            children: n.map((function(e, t) {
                                return (0, r.jsx)("option", {
                                    value: e.id,
                                    children: e.label
                                }, t)
                            }))
                        }), (0, r.jsx)(a.Z, {
                            children: p.label
                        }), (0, r.jsx)(d, {
                            children: (0, r.jsx)(c.Z, {
                                width: 15
                            })
                        })]
                    })
                })
            }
        },
        49797: function(e, t, n) {
            "use strict";
            n.d(t, {
                t: function() {
                    return j
                },
                Z: function() {
                    return m
                }
            });
            var r, i, o = n(26265),
                a = n(85893),
                s = n(94158),
                c = n(96626),
                l = n(33559),
                u = n(16174),
                d = n(56344),
                f = n(72694),
                h = n(42164),
                p = n(38918),
                g = n(69593),
                b = n(67294);

            function x() {
                return (x = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var v = function(e) {
                return b.createElement("svg", x({
                    width: 20,
                    height: 20,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), r || (r = b.createElement("rect", {
                    width: 20,
                    height: 20,
                    rx: 5,
                    fill: "#000"
                })), i || (i = b.createElement("path", {
                    d: "M4 10l4 4 8-8",
                    stroke: "#fff",
                    strokeWidth: 2,
                    strokeMiterlimit: 10,
                    strokeLinecap: "square"
                })))
            };

            function m(e) {
                var t = e.hit,
                    n = e.refine;
                return (0, a.jsxs)(j, {
                    checked: t.isRefined,
                    onCheckedChange: function() {
                        n(t.value)
                    },
                    name: (0, p.sD)(t.value),
                    children: [(0, a.jsxs)(l.Z, {
                        css: {
                            alignItems: "center"
                        },
                        children: [(0, a.jsx)(u.Z, {
                            children: t.isRefined ? (0, a.jsx)(d.Z, {
                                icon: v,
                                width: 20,
                                height: 20
                            }) : (0, a.jsx)(Z, {})
                        }), (0, a.jsx)(f.Z, {
                            css: {
                                marginLeft: "$3",
                                fontWeight: 600,
                                fontFamily: "$body"
                            },
                            children: (0, g.N4)(t.label)
                        })]
                    }), (0, a.jsx)(u.Z, {
                        css: {
                            color: "$black50",
                            fontWeight: 400,
                            fontFamily: "$body"
                        },
                        children: (0, h.kh)(t.count)
                    })]
                })
            }
            var Z = (0, c.zo)(u.Z, {
                    borderRadius: 5,
                    width: 20,
                    height: 20,
                    border: "solid 2px $black10",
                    transition: "$1"
                }),
                j = (0, c.zo)(s.fC, {
                    display: "flex",
                    backgroundColor: "transparent",
                    justifyContent: "space-between",
                    border: "solid 2px $black5",
                    minHeight: 60,
                    alignItems: "center",
                    paddingLeft: "$5",
                    paddingRight: "$6",
                    cursor: "pointer",
                    borderRadius: "$2",
                    fontFamily: "$body",
                    fontSize: "$1",
                    transition: "$1",
                    "@media (hover: hover)": {
                        "&:hover": (0, o.Z)({
                            borderColor: "$black20"
                        }, "".concat(Z), {
                            borderColor: "$black20"
                        })
                    }
                })
        },
        70292: function(e, t, n) {
            "use strict";
            var r = n(28330),
                i = (0, n(96626).zo)(r.Z, {
                    gap: "$3",
                    "@bp2": {
                        gap: "$2",
                        gridTemplateColumns: "320px auto"
                    }
                });
            t.Z = i
        },
        50266: function(e, t, n) {
            "use strict";
            var r = n(16174),
                i = (0, n(96626).zo)(r.Z, {
                    display: "none",
                    "@bp2": {
                        display: "block",
                        position: "sticky",
                        top: 0,
                        left: 0,
                        alignSelf: "flex-start",
                        paddingTop: "$6",
                        marginTop: "-$6",
                        overflow: "auto",
                        height: "100vh",
                        paddingBottom: "$7",
                        paddingRight: "$6",
                        paddingLeft: "$3",
                        marginLeft: "-$3"
                    }
                });
            t.Z = i
        },
        66510: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return h
                }
            });
            var r = n(85893),
                i = n(67294),
                o = n(16174),
                a = n(33559),
                s = n(72694),
                c = n(85010),
                l = n(17575),
                u = n(96626),
                d = (0, u.zo)(a.Z, {
                    position: "fixed",
                    overflowX: "hidden",
                    overflowY: "overlay",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 999,
                    display: "none",
                    backgroundColor: "$white100",
                    variants: {
                        isOpen: {
                            true: {
                                display: "flex"
                            }
                        }
                    }
                }),
                f = (0, u.zo)(a.Z, {
                    width: "100%",
                    height: "100%",
                    backgroundColor: "$white100",
                    flexDirection: "column"
                });

            function h(e) {
                var t = e.isOpen,
                    n = e.closeSearch,
                    c = e.filters;
                return (0, i.useEffect)((function() {
                    window.scrollTo(0, 0), t ? document.body.classList.add("body-fixed") : document.body.classList.remove("body-fixed")
                }), [t]), (0, i.useEffect)((function() {
                    return document.body.classList.remove("body-fixed")
                }), []), (0, r.jsx)(d, {
                    isOpen: t,
                    children: (0, r.jsxs)(f, {
                        children: [(0, r.jsxs)(a.Z, {
                            css: {
                                height: "100%",
                                overflowY: "auto",
                                flexDirection: "column"
                            },
                            children: [(0, r.jsx)(o.Z, {
                                css: {
                                    paddingX: "$6"
                                },
                                children: (0, r.jsxs)(a.Z, {
                                    css: {
                                        borderBottom: "solid 1px $black10",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        paddingTop: "$6",
                                        paddingBottom: "$6"
                                    },
                                    children: [(0, r.jsx)(s.Z, {
                                        css: {
                                            fontSize: "$3",
                                            fontWeight: 600,
                                            fontFamily: "$body"
                                        },
                                        onClick: n,
                                        children: "Filters"
                                    }), (0, r.jsx)(l.Z, {
                                        isOpen: t,
                                        setOpen: n
                                    })]
                                })
                            }), (0, r.jsx)(o.Z, {
                                css: {
                                    flex: 1
                                },
                                children: c.map((function(e, t) {
                                    return (0, r.jsx)(o.Z, {
                                        css: {
                                            paddingX: "$6"
                                        },
                                        children: (0, r.jsx)(o.Z, {
                                            className: "filter-box",
                                            css: {
                                                paddingBottom: "$7",
                                                paddingTop: "$6",
                                                borderBottom: t < c.length - 1 ? "solid 1px $black10" : "none"
                                            },
                                            children: e
                                        })
                                    }, t)
                                }))
                            })]
                        }), (0, r.jsx)(p, {
                            onApply: n
                        })]
                    })
                })
            }

            function p(e) {
                var t = e.onApply;
                return (0, r.jsx)(o.Z, {
                    css: {
                        padding: "$6",
                        boxShadow: "0px -10px 20px rgba(0, 0, 0, 0.1)",
                        position: "sticky",
                        bottom: 0,
                        left: 0,
                        backgroundColor: "$white100",
                        borderRadius: "$2"
                    },
                    children: (0, r.jsx)(c.Z, {
                        color: "black",
                        size: "large",
                        shape: "regular",
                        onClick: t,
                        css: {
                            width: "100%"
                        },
                        children: "Save"
                    })
                })
            }
        },
        84298: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var r = n(85893),
                i = n(17757),
                o = n(16174),
                a = n(85010);

            function s(e) {
                var t = e.openSearch;
                return (0, r.jsx)(o.Z, {
                    css: {
                        position: "fixed",
                        bottom: "$7",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "block",
                        "@bp2": {
                            display: "none"
                        }
                    },
                    children: (0, r.jsx)(c, {
                        color: "black",
                        size: "large",
                        shape: "regular",
                        as: i.E.div,
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: .9
                        },
                        transition: {
                            duration: .1
                        },
                        onClick: t,
                        children: "Filters"
                    })
                })
            }
            var c = (0, n(96626).zo)(a.Z, {
                paddingX: "$8",
                borderRadius: 999,
                fontSize: "$2",
                boxShadow: "$3"
            })
        },
        34901: function(e, t, n) {
            "use strict";
            var r = n(44559),
                i = (0, n(96626).zo)(r.Z, {
                    paddingTop: "$2",
                    "@bp1": {
                        paddingTop: "$9"
                    },
                    variants: {
                        isLoading: {
                            true: {
                                display: "none"
                            }
                        }
                    }
                });
            t.Z = i
        },
        10587: function(e, t, n) {
            "use strict";
            var r = n(26265),
                i = n(85893),
                o = n(75805),
                a = n(16697),
                s = n(84792),
                c = n(76835),
                l = n(96626),
                u = n(28330),
                d = n(72694),
                f = n(33559),
                h = n(49797),
                p = n(38918);

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var x = function(e, t) {
                    return (0, p.Qt)(t) ? e : function(e, t) {
                        return (0, s.Z)((function(e, n) {
                            return (0, c.Z)(e.label, t) - (0, c.Z)(n.label, t)
                        }), e)
                    }(e, t)
                },
                v = (0, l.zo)(d.Z, {
                    fontSize: "$2",
                    fontWeight: 600,
                    fontFamily: "$body"
                }),
                m = (0, o.Z)((function(e) {
                    var t = e.items,
                        n = e.title,
                        r = e.sortOrder,
                        o = e.refine,
                        a = x(t, r);
                    return (0, i.jsxs)(u.Z, {
                        css: {
                            gap: "$7"
                        },
                        children: [(0, i.jsx)(f.Z, {
                            children: (0, i.jsx)(v, {
                                children: n
                            })
                        }), (0, i.jsx)(u.Z, {
                            css: {
                                gap: "$3"
                            },
                            children: a.map((function(e) {
                                return (0, i.jsx)(h.Z, {
                                    hit: e,
                                    refine: o
                                }, e.label)
                            }))
                        })]
                    })
                }));
            t.ZP = m;
            (0, a.Z)((function(e) {
                var t = e.currentRefinement,
                    n = e.label,
                    r = e.count,
                    o = e.refine,
                    a = b(b({}, e), {}, {
                        count: t ? r.checked : r.unchecked,
                        currentRefinement: t,
                        isRefined: t,
                        value: !t,
                        label: n
                    });
                return (0, i.jsx)(h.Z, {
                    hit: a,
                    refine: o
                })
            }))
        },
        61127: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return m
                }
            });
            var r = n(85893),
                i = n(89473),
                o = n(26808),
                a = n(96374),
                s = n(11163),
                c = n(96626),
                l = n(33559),
                u = n(28330),
                d = n(72694),
                f = n(31035),
                h = n(75188),
                p = n(23755),
                g = n(42164),
                b = (0, i.Z)((function(e) {
                    var t = e.isActive;
                    return (0, r.jsxs)(Z, {
                        isActive: t,
                        children: [(0, r.jsx)(j, {
                            css: {
                                marginRight: "$3",
                                "@bp2": {
                                    marginRight: "$4"
                                }
                            },
                            isActive: t,
                            children: e.label
                        }), (0, r.jsx)(j, {
                            css: {
                                color: "$black60"
                            },
                            isActive: t,
                            children: (0, g.kh)(e.nbHits)
                        })]
                    })
                }));

            function x(e) {
                var t = e.indexName,
                    n = e.href,
                    i = e.label,
                    a = e.pathname;
                return (0, r.jsx)(o.Z, {
                    indexName: t,
                    children: (0, r.jsx)(h.rU, {
                        href: n,
                        children: (0, r.jsx)("a", {
                            style: {
                                textDecoration: "none",
                                display: "block"
                            },
                            children: (0, r.jsx)(b, {
                                label: i,
                                isActive: n === a
                            })
                        })
                    })
                })
            }
            var v = (0, c.iv)({
                display: "none",
                "@bp1": {
                    display: "flex"
                }
            })();

            function m(e) {
                var t = e.algoliaIndexes,
                    n = e.defaultRefinement,
                    i = (0, s.useRouter)().pathname;
                return (0, r.jsxs)(l.Z, {
                    css: {
                        borderBottom: "solid 1px $black10",
                        justifyContent: "space-between"
                    },
                    children: [(0, r.jsx)(u.Z, {
                        css: {
                            gap: "$5",
                            "@bp2": {
                                gap: "$6"
                            },
                            gridTemplateColumns: "1fr 1fr"
                        },
                        children: (0, r.jsxs)(a.Z, {
                            searchClient: p.ZP,
                            indexName: "artworks",
                            children: [(0, r.jsx)(x, {
                                indexName: "users",
                                href: "/profiles",
                                label: "Profiles",
                                pathname: i
                            }), (0, r.jsx)(x, {
                                indexName: "artworks",
                                href: "/artworks",
                                label: "Artworks",
                                pathname: i
                            })]
                        })
                    }), (0, r.jsx)(f.Z, {
                        algoliaIndexes: t,
                        className: v,
                        orientation: "horizontal",
                        defaultRefinement: n
                    })]
                })
            }
            var Z = (0, c.zo)(l.Z, {
                    marginBottom: -1,
                    paddingBottom: "$6",
                    borderBottom: "solid 2px transparent",
                    textDecoration: "none",
                    variants: {
                        isActive: {
                            true: {
                                borderBottom: "solid 2px $black100"
                            }
                        }
                    }
                }),
                j = (0, c.zo)(d.Z, {
                    fontSize: "$2",
                    fontWeight: 600,
                    fontFamily: "$body",
                    color: "$black100",
                    variants: {
                        isActive: {
                            true: {
                                color: "$black100 !important"
                            }
                        }
                    }
                })
        },
        31035: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return x
                }
            });
            var r = n(85893),
                i = n(8598),
                o = n(29278),
                a = n(96626),
                s = n(72558),
                c = n(67294),
                l = n(33559),
                u = n(72694),
                d = n(28330),
                f = n(85544),
                h = n(59289),
                p = (0, s.Z)((function(e) {
                    var t = e.items,
                        n = e.currentRefinement,
                        i = e.refine,
                        o = t.find((function(e) {
                            return e.value === n
                        }));
                    if (!n || !o) return null;
                    var a = function(e) {
                        var t = e.target.value;
                        i(t)
                    };
                    return (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)(f.bL, {
                            css: {
                                minWidth: 220
                            },
                            children: [(0, r.jsx)(f.Ph, {
                                onBlur: a,
                                onChange: a,
                                children: t.map((function(e, t) {
                                    return (0, r.jsx)("option", {
                                        value: e.value,
                                        children: e.label
                                    }, t)
                                }))
                            }), (0, r.jsx)(u.Z, {
                                children: o.label
                            }), (0, r.jsx)(f.GV, {
                                css: {
                                    marginLeft: "auto"
                                },
                                children: (0, r.jsx)(h.Z, {
                                    width: 15
                                })
                            })]
                        })
                    })
                })),
                g = n(38918),
                b = (0, s.Z)((function(e) {
                    var t = e.items,
                        n = e.refine,
                        r = (0, g.sD)(t),
                        i = null === r || void 0 === r ? void 0 : r.value;
                    return (0, c.useEffect)((function() {
                        n(i)
                    }), [i]), null
                }));

            function x(e) {
                var t = e.algoliaIndexes,
                    n = e.className,
                    a = e.orientation,
                    s = e.defaultRefinement;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(b, {
                        items: t
                    }), (0, r.jsx)(v, {
                        orientation: a,
                        className: n,
                        children: (0, i.Z)([
                            [(0, o.Z)("horizontal"), function() {
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(m, {
                                        css: {
                                            marginRight: "$5"
                                        },
                                        children: "Sort by"
                                    }), (0, r.jsx)(p, {
                                        items: t,
                                        defaultRefinement: s
                                    })]
                                })
                            }],
                            [(0, o.Z)("vertical"), function() {
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(m, {
                                        css: {
                                            marginBottom: "$6"
                                        },
                                        children: "Sort by"
                                    }), (0, r.jsx)(d.Z, {
                                        css: {
                                            gap: "$3"
                                        },
                                        children: (0, r.jsx)(p, {
                                            items: t,
                                            defaultRefinement: s
                                        })
                                    })]
                                })
                            }]
                        ])(a)
                    })]
                })
            }
            var v = (0, a.zo)(l.Z, {
                    variants: {
                        orientation: {
                            vertical: {
                                flexDirection: "column"
                            },
                            horizontal: {
                                alignItems: "center",
                                marginBottom: "auto"
                            }
                        }
                    }
                }),
                m = (0, a.zo)(u.Z, {
                    fontSize: "$2",
                    fontWeight: 600,
                    fontFamily: "$body",
                    color: "$black100",
                    variants: {
                        isActive: {
                            true: {
                                color: "$black100 !important"
                            }
                        }
                    }
                })
        },
        50911: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var r = n(67294),
                i = n(29026),
                o = n(38918);

            function a(e) {
                var t = e.results,
                    n = (0, i.Z)((function(e) {
                        return e.isLoading
                    })),
                    a = (0, i.Z)((function(e) {
                        return e.setSearchLoading
                    })),
                    s = (0, o.Qt)(t),
                    c = n && !s;
                return (0, r.useEffect)((function() {
                    c && a(!1)
                }), [c]), null
            }
        },
        29026: function(e, t, n) {
            "use strict";
            var r = n(14671),
                i = n(21717),
                o = (0, r.Z)((function(e) {
                    return {
                        isLoading: !0,
                        searchTerm: "",
                        artworkAvailabilities: [i.yS.LIVE_AUCTION, i.yS.RESERVE_NOT_MET],
                        setSearchLoading: function(t) {
                            return e({
                                isLoading: t
                            })
                        },
                        setArtworkAvailabilities: function(t) {
                            return e({
                                artworkAvailabilities: t
                            })
                        }
                    }
                }));
            t.Z = o
        },
        69593: function(e, t, n) {
            "use strict";
            n.d(t, {
                uJ: function() {
                    return u
                },
                Bn: function() {
                    return d
                },
                _X: function() {
                    return f
                },
                N4: function() {
                    return h
                }
            });
            var r = n(80129),
                i = n.n(r),
                o = n(8598),
                a = n(29278),
                s = n(59211),
                c = n(33536),
                l = n.n(c);

            function u(e) {
                return "?".concat(i().stringify(e))
            }

            function d(e) {
                return i().stringify(e)
            }

            function f(e) {
                var t = e.asPath.indexOf("?");
                if (-1 === t) return {};
                var n = e.asPath.substring(t + 1);
                return i().parse(n)
            }
            var h = (0, o.Z)([
                [(0, a.Z)("3D"), (0, s.Z)("3D")],
                [Boolean, l()]
            ])
        }
    }
]);
//# sourceMappingURL=9640-6eea8d68be0217132e11.js.map