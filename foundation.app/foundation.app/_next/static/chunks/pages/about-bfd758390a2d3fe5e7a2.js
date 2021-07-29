(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2521], {
        11319: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return x
                }
            });
            var o = n(67294),
                a = n(11191),
                i = n(61138),
                r = n(88767),
                s = n(79026),
                l = n(809),
                c = n.n(l),
                p = n(92447),
                u = n(63144),
                d = n.n(u),
                m = "https://api.coingecko.com/api/v3";

            function h() {
                return (h = (0, p.Z)(c().mark((function e(t, n) {
                    var o, a;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return o = Object.assign({
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                }, n), e.next = 3, d()("".concat(m, "/").concat(t), o);
                            case 3:
                                return a = e.sent, e.next = 6, a.json();
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
                var e, t = (0, r.useQuery)([s.V.ETHPrice], (function() {
                        return function(e, t) {
                            return h.apply(this, arguments)
                        }("simple/price?vs_currencies=usd&ids=ethereum", null)
                    }), {
                        refetchOnMount: !1,
                        refetchOnWindowFocus: !1,
                        staleTime: 36e5
                    }),
                    n = t.data;
                return {
                    isLoading: t.isLoading,
                    price: null === n || void 0 === n || null === (e = n.ethereum) || void 0 === e ? void 0 : e.usd
                }
            }
            var g = n(42164);

            function x(e) {
                var t = e.amount,
                    n = f(),
                    r = n.price,
                    s = n.isLoading,
                    l = parseFloat(t);
                return s ? (0, a.tZ)(i.xv, {
                    as: "span",
                    sx: {
                        opacity: 0
                    }
                }, "\u2014") : (0, a.tZ)(o.Fragment, null, (0, g.MV)(l * r))
            }
        },
        78062: function(e, t, n) {
            "use strict";
            var o = (0, n(96626).zo)("img", {});
            t.Z = o
        },
        94198: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var o = n(85893),
                a = n(96626),
                i = (0, a.rS)({
                    colors: {},
                    fonts: {
                        body: '"ABCMarfa", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
                    },
                    sizes: {
                        container: "1400px"
                    }
                }),
                r = n(16174),
                s = (0, a.zo)(r.Z, {});

            function l(e) {
                var t = e.children;
                return (0, o.jsx)(s, {
                    className: i,
                    children: t
                })
            }
        },
        32552: function(e, t, n) {
            "use strict";
            var o = (0, n(96626).zo)("h2", {
                fontFamily: "$display",
                fontSize: "$5",
                textTransform: "uppercase",
                lineHeight: .9,
                zIndex: 1,
                position: "relative",
                "@bp1": {
                    fontSize: "$13"
                },
                variants: {
                    textAlign: {
                        mobileCenter: {
                            textAlign: "center",
                            "@bp1": {
                                textAlign: "left"
                            }
                        }
                    }
                }
            });
            t.Z = o
        },
        86172: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return d
                }
            });
            var o = n(26265),
                a = (n(67294), n(11191)),
                i = n(61138),
                r = n(71522),
                s = n(75188),
                l = n(38918),
                c = n(91370);

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function d(e) {
                var t = e.user,
                    n = e.className,
                    o = (0, l.mf)(t),
                    p = u(u({}, c.o), {}, {
                        paddingRight: [20, 20]
                    });
                return o ? (0, a.tZ)(s.ZP, {
                    href: "/".concat(o)
                }, (0, a.tZ)("a", {
                    sx: c.A,
                    className: n
                }, (0, a.tZ)(r.Z, u(u({}, e), {}, {
                    sx: p,
                    className: n
                })))) : (0, a.tZ)(i.kC, {
                    sx: u(u({}, c.A), {}, {
                        pointerEvents: "none"
                    }),
                    className: n
                }, (0, a.tZ)(r.Z, u(u({}, e), {}, {
                    sx: p
                })))
            }
        },
        20252: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            n(67294);
            var o = n(11191),
                a = n(61138);

            function i(e) {
                var t = e.children,
                    n = e.className;
                return (0, o.tZ)(a.xu, {
                    sx: {
                        background: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none"
                    },
                    className: n
                }, t)
            }
        },
        11505: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            n(67294);
            var o = n(11191),
                a = n(65073),
                i = n(86172);

            function r(e) {
                var t, n = e.publicKey,
                    r = e.className,
                    s = (0, a.ji)({
                        publicKey: n,
                        refetchOnWindowFocus: !1
                    }),
                    l = s.data,
                    c = s.isLoading,
                    p = {
                        publicKey: n
                    };
                return (0, o.tZ)(i.Z, {
                    user: null !== (t = null === l || void 0 === l ? void 0 : l.user) && void 0 !== t ? t : p,
                    className: r,
                    isLoading: c
                })
            }
        },
        71522: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return f
                }
            });
            var o = n(26265),
                a = (n(67294), n(11191)),
                i = n(61138),
                r = n(79272),
                s = n(6381),
                l = n(20252);

            function c(e) {
                var t = e.className;
                return (0, a.tZ)(l.Z, {
                    className: t
                }, (0, a.tZ)(i.xu, {
                    sx: p.avatar
                }), (0, a.tZ)(i.xv, {
                    sx: p.text
                }, (0, a.tZ)(i.xv, {
                    ml: "xs",
                    sx: p.username
                })))
            }
            var p = {
                    avatar: {
                        backgroundColor: "black.10",
                        width: [24, 34],
                        height: [24, 34],
                        borderRadius: 999
                    },
                    text: {
                        display: "flex"
                    },
                    username: {
                        textDecoration: "none",
                        color: "black.100",
                        position: s.Ep,
                        top: -1,
                        fontSize: ["sub", "body"],
                        backgroundColor: "black.5",
                        width: 120,
                        height: 20
                    }
                },
                u = n(38918),
                d = n(19660);

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function f(e) {
                var t = e.user,
                    n = e.className,
                    o = e.isLoading,
                    s = e.avatarSize,
                    p = void 0 === s ? [24, 34] : s,
                    m = e.color,
                    f = void 0 === m ? "black.100" : m,
                    x = (0, u.wO)(t),
                    v = (0, u.Hs)(t),
                    b = null === t || void 0 === t ? void 0 : t.profileImageUrl;
                return o ? (0, a.tZ)(c, {
                    className: n
                }) : (0, a.tZ)(l.Z, {
                    className: n
                }, (0, a.tZ)(r.Z, {
                    size: p,
                    userIndex: null === t || void 0 === t ? void 0 : t.userIndex,
                    imageUrl: b
                }), (0, a.tZ)(i.xv, {
                    sx: h({}, g.text)
                }, (0, a.tZ)(i.xv, {
                    ml: "xs",
                    sx: g.username,
                    color: f,
                    variant: v ? "h.body" : "mono.body",
                    className: "username-tag"
                }, (0, d.fw)(x))))
            }
            var g = {
                text: {
                    display: "flex"
                },
                username: {
                    textDecoration: "none",
                    position: s.Ep,
                    top: -2,
                    fontSize: ["sub", "body"]
                }
            }
        },
        91370: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return a
                },
                o: function() {
                    return i
                }
            });
            var o = n(51250),
                a = {
                    display: "flex",
                    justifyContent: "flex-start",
                    textDecoration: "none"
                },
                i = {
                    padding: [8, 11],
                    background: "#ffffff",
                    display: "flex",
                    boxShadow: "s",
                    alignItems: "center",
                    borderRadius: "9999px",
                    transition: o.pB.smooth.fast,
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
        21126: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSG: function() {
                    return je
                },
                default: function() {
                    return Se
                }
            });
            var o = n(85893),
                a = n(67294),
                i = [{
                    name: "Alexander Attar",
                    title: "Senior Software Engineer",
                    location: "NYC",
                    profilePath: "https://foundation.app/@alexander",
                    imageSrc: "/images/team/alexander-attar.jpg"
                }, {
                    name: "Carlos Sanchez",
                    title: "Senior Brand Designer",
                    location: "PHILLY",
                    profilePath: "https://foundation.app/@carlos",
                    imageSrc: "/images/team/carlos-sanchez.jpg"
                }, {
                    name: "Charles Damga",
                    title: "Director of Creator Relations",
                    location: "NYC",
                    profilePath: "https://foundation.app/@damgood",
                    imageSrc: "/images/team/charles-damga.jpg"
                }, {
                    name: "Chris Collins",
                    title: "Head Of Operations",
                    location: "LA",
                    profilePath: "https://foundation.app/@chris",
                    imageSrc: "/images/team/chris-collins.jpg"
                }, {
                    name: "Eileen Isagon Skyers",
                    title: "Communications Director",
                    location: "NYC",
                    profilePath: "https://foundation.app/@eiskyers",
                    imageSrc: "/images/team/eileen-isagon-skyers.jpg"
                }, {
                    name: "Elpizo Choi",
                    title: "Cofounder, Head Of Engineering",
                    location: "SF",
                    profilePath: "https://foundation.app/@elpizo",
                    imageSrc: "/images/team/elpizo-choi.jpg"
                }, {
                    name: "Hsu Han Ooi",
                    title: "Senior Software Engineer",
                    location: "SEATTLE",
                    profilePath: "https://foundation.app/@hanzo",
                    imageSrc: "/images/team/hsu-han-ooi.jpg"
                }, {
                    name: "Jaysa Alvarez",
                    title: "Chief of Staff",
                    location: "NYC",
                    profilePath: "https://foundation.app/@jaysa",
                    imageSrc: "/images/team/jaysa-alvarez.jpg"
                }, {
                    name: "Jeff Kraus",
                    title: "Community Support Specialist",
                    location: "NYC",
                    profilePath: "https://foundation.app/@jeff.kraus",
                    imageSrc: "/images/team/jeff-kraus.jpg"
                }, {
                    name: "Jesse Pimenta",
                    title: "Senior Product Designer",
                    location: "LA",
                    profilePath: "https://foundation.app/@jessepimenta",
                    imageSrc: "/images/team/jesse-pimenta.jpg"
                }, {
                    name: "Kayvon Tehranian",
                    title: "Cofounder, Ceo",
                    location: "SF",
                    profilePath: "https://foundation.app/@kayvon",
                    imageSrc: "/images/team/kayvon-tehranian.jpg"
                }, {
                    name: "Kristen Cabrera",
                    title: "User Interface Engineer",
                    location: "NYC",
                    profilePath: "https://foundation.app/@kris10cabrera",
                    imageSrc: "/images/team/kristen-cabrera.jpg"
                }, {
                    name: "Kyt Janae",
                    title: "Director Of Collector Relations",
                    location: "LA",
                    profilePath: "https://foundation.app/@kyttenjanae",
                    imageSrc: "/images/team/kyt-janae.jpg"
                }, {
                    name: "Lawrence Gosset",
                    title: "Senior Software Engineer",
                    location: "LONDON",
                    profilePath: "https://foundation.app/@lawrence",
                    imageSrc: "/images/team/lawrence-gosset.jpg"
                }, {
                    name: "Lindsay Howard",
                    title: "Head Of Community",
                    location: "NYC",
                    profilePath: "https://foundation.app/@lindsay",
                    imageSrc: "/images/team/lindsay-howard.jpg"
                }, {
                    name: "Marc Savino",
                    title: "Lead Recruiter",
                    location: "OAK",
                    profilePath: "https://foundation.app/@what",
                    imageSrc: "/images/team/marc-savino.jpg"
                }, {
                    name: "Matthew Vernon",
                    title: "Cofounder, Head Of De$ign",
                    location: "SYDNEY",
                    profilePath: "https://foundation.app/@matt",
                    imageSrc: "/images/team/matthew-vernon.jpg"
                }, {
                    name: "Nick Mancuso",
                    title: "Senior Protocol Engineer",
                    location: "MIAMI",
                    profilePath: "https://foundation.app/@hardlydifficult",
                    imageSrc: "/images/team/nick-mancuso.jpg"
                }, {
                    name: "Paul Cowgill",
                    title: "Senior Software Engineer",
                    location: "CHICAGO",
                    profilePath: "https://foundation.app/@paul",
                    imageSrc: "/images/team/paul-cowgill.jpg"
                }, {
                    name: "Sam Mason de Caires",
                    title: "Senior Software Engineer",
                    location: "LONDON",
                    profilePath: "https://foundation.app/@sammdec",
                    imageSrc: "/images/team/sam-mason-de-caires.jpg"
                }, {
                    name: "Samantha Ayson",
                    title: "Creative Content Director",
                    location: "LA",
                    profilePath: "https://foundation.app/@earthtosam",
                    imageSrc: "/images/team/samantha-ayson.jpg"
                }],
                r = {
                    introduction: "Foundation is a platform that aims to build a new creative economy\u2014a world where creators can use the Ethereum blockchain to value their online expression in entirely new ways, and build stronger connections with their supporters.",
                    invitation: "Foundation bridges crypto and culture to foster a network of mutual support between artists, creators, and collectors. We\u2019re forging a community-driven path and sharing our tools with the rapidly evolving group of developers who are excited to define this future with us. We want anyone and everyone who cares about the future of digital expression to be a part of it.",
                    forCreators: "Creators are invited to join Foundation by members of the community. Once you\u2019ve received an invite, you\u2019ll need to set up a MetaMask wallet with ETH before you can create an artist profile and mint an NFT\u2014which means uploading your JPG, PNG, or video file to IPFS, a decentralized peer-to-peer storage network. It will then be an NFT you can price in ETH and put up for auction on Foundation. Creators receive 85% of the final sale price. If the piece is resold on Foundation (or OpenSea and Rarible), a 10% royalty goes back to the wallet that originally minted the NFT\u2014in perpetuity.",
                    forCollectors: "On Foundation, anyone can create a profile to start collecting NFTs. All you\u2019ll need is a MetaMask wallet and ETH, the cryptocurrency used to pay for all transactions on Ethereum. Artists list NFTs for auction at a reserve price, and once the first bid is placed, a 24-hour auction countdown begins. If a bid is placed within the last 15 minutes, the auction extends for another 15 minutes. When you win an auction and claim the NFT, the artwork gets transferred to your wallet and appears on your Foundation collector profile. You can also then display it in your virtual gallery, share it on social media, sell it later on the secondary market, or pioneer a new approach to appreciating digital art and championing the artists in your collection.",
                    forDevelopers: "We love collaborating, and invite developers to experiment with [our free and open API](https://fnd.dev/docs).",
                    forTheCommunity: "There are many ways to get involved with Foundation beyond joining as a creator, collector, or developer. We welcome anyone interested in collectively building the future of digital culture to join us on [Discord](https://discord.foundation.app), [Instagram](https://www.instagram.com/withfoundation), or [Twitter](https://twitter.com/withfnd). There are a number of community-led initiatives and events that you can plug into, participate in, and even imagine new possibilities for. We actively encourage community members to create new groups based around their interests.",
                    ourTeam: "Our team brings together leading talent from the crypto and creative communities, to the cultural realm. We\u2019ve spent time at Eyebeam, Google, Harvard, Kickstarter, New Museum, Phillips, Princeton, and The Broad. In our spare time, we also design apparel, produce electronic music, paint, make films, and curate museum exhibitions.",
                    creators: [{
                        name: "Serwah Attafuah",
                        text: "\u201cPunk has taught me that there\u2019s always a work-around for any obstacle. You just have to push through and make it happen\u2026 With NFTs, I want to push at what\u2019s possible myself, and I also watch and see what other people are up to. I\u2019ve been brainstorming, and fuck, there are so many things that we could all do. I\u2019m really excited to see how it all continues to take shape, and be a part of it.\u201d",
                        imageSrc: "/images/creators/serwah-attafuah.jpg",
                        publicKey: "0x4783669B60DBEE84484e5e0FFd27AD0bb3Cf1312"
                    }, {
                        name: "Sarah Zucker",
                        text: "\u201cMy own success in the crypto art space has afforded me the opportunity to support artists whose work lights me up, which has been just as exciting as advancing my own art practice. There can be an incredible symbiotic relationship between artists and collectors\u2026\u201d",
                        imageSrc: "/images/creators/sarah-zucker.jpg",
                        publicKey: "0xcF0949bf6d2aDF8032260Fd08039c879CF71c128"
                    }, {
                        name: "Sven Eberwein",
                        text: "\u201cFor web3 to flourish, you need creative individuals. Programmers built the technical infrastructure and economic framework, but artists also have a tremendously important role to play. Hopefully, if we can include everyone\u2019s voices, we\u2019ll end up with a stronger community, and better technology that works for everybody.\u201d",
                        imageSrc: "/images/creators/sven-eberwein.jpg",
                        publicKey: "0x376884Df6FB55bFA319D703BC1Ac5091Ef479ff5"
                    }, {
                        name: "Jon Gold",
                        text: "\u201cI want people to experience what I feel when I collect another artist\u2019s work, which is a feeling of interdependence, optimism, and hope. When we participate equally in this system and use our resources to help each other out, we create a mutually beneficial society.\u201d",
                        imageSrc: "/images/creators/jon-gold.jpg",
                        publicKey: "0x88D01d4354DA0D65C38b0196c4400525A5eebe17"
                    }]
                },
                s = n(59536),
                l = n(94198),
                c = n(44559),
                p = n(96626),
                u = n(28330),
                d = (0, p.zo)(u.Z, {
                    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                    gridRowGap: "$6",
                    gridColumnGap: "$5",
                    marginBottom: "$9",
                    zIndex: 1,
                    position: "relative"
                });

            function m(e) {
                var t = e.children,
                    n = e.canvasActive;
                return (0, o.jsx)(d, {
                    css: {
                        pointerEvents: n ? "none" : "all"
                    },
                    children: t
                })
            }
            var h = n(78062),
                f = (0, p.zo)("a", {
                    display: "flex",
                    borderRadius: "$3",
                    width: "100%",
                    height: 267,
                    boxShadow: "$0",
                    padding: "$7",
                    position: "relative",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    textDecoration: "none",
                    color: "$black100",
                    transition: "transform $1 $ease, box-shadow $1 $ease",
                    background: "#fff",
                    "@media (hover: hover)": {
                        "&:hover": {
                            transform: "translateY(-4px)",
                            boxShadow: "$1"
                        }
                    }
                }),
                g = (0, p.zo)(h.Z, {
                    width: 100,
                    height: 100,
                    borderRadius: "$round"
                }),
                x = (0, p.zo)("span", {
                    fontFamily: "$mono",
                    fontSize: "$0",
                    position: "absolute",
                    top: 30,
                    right: 30,
                    letterSpacing: 1
                }),
                v = (0, p.zo)("h3", {
                    fontFamily: "$body",
                    fontSize: "$3"
                }),
                b = (0, p.zo)("h4", {
                    fontFamily: "$mono",
                    lineHeight: "1.5",
                    letterSpacing: 1,
                    fontSize: "$0",
                    textTransform: "uppercase"
                });

            function y(e) {
                var t = e.name,
                    n = e.title,
                    a = e.location,
                    i = e.profilePath,
                    r = e.imageSrc;
                return (0, o.jsxs)(f, {
                    href: i,
                    children: [(0, o.jsx)(g, {
                        src: r,
                        alt: t
                    }), (0, o.jsx)(v, {
                        children: t
                    }), (0, o.jsx)(b, {
                        children: n
                    }), (0, o.jsx)(x, {
                        children: a
                    })]
                })
            }
            var w = (0, p.zo)("a", {
                    color: "$black100",
                    fontFamily: "$body",
                    textDecoration: "none",
                    borderBottom: "1px solid $black10",
                    transition: "color $1 $ease, border-bottom $ease",
                    paddingBottom: "$1",
                    "&:hover": {
                        color: "$blue100",
                        borderBottomColor: "$blue100"
                    },
                    variants: {
                        size: {
                            small: {
                                fontSize: "$0",
                                "@bp1": {
                                    fontSize: "$s1"
                                }
                            }
                        }
                    }
                }),
                j = n(30724),
                S = n.n(j),
                k = n(16174),
                $ = (0, p.zo)(k.Z, {
                    fontFamily: "$body",
                    fontSize: "$2",
                    lineHeight: "1.4",
                    marginY: "$5",
                    zIndex: 1,
                    position: "relative",
                    "@bp1": {
                        fontSize: "$3"
                    },
                    a: {
                        color: "$black100",
                        fontFamily: "$body",
                        textDecoration: "none",
                        borderBottom: "1px solid $black10",
                        transition: "color $1 $ease, border-bottom $ease",
                        "&:hover": {
                            color: "$blue100",
                            borderBottomColor: "$blue100"
                        }
                    }
                });

            function z(e) {
                var t = e.children;
                return (0, o.jsx)($, {
                    children: (0, o.jsx)(S(), {
                        children: t
                    })
                })
            }
            var C = n(32552),
                O = (0, p.zo)(u.Z, {
                    marginY: "$7",
                    gridGap: "$7",
                    zIndex: 1,
                    position: "relative",
                    "@bp1": {
                        gridTemplateColumns: "1fr 1fr",
                        marginY: "$9",
                        gridColumnGap: "$11",
                        gridRowGap: "$9"
                    },
                    variants: {
                        textAlign: {
                            mobileCenter: {
                                textAlign: "center",
                                "@bp1": {
                                    textAlign: "left"
                                }
                            }
                        }
                    }
                }),
                P = (0, p.zo)("h4", {
                    fontFamily: "$body",
                    fontSize: "$3",
                    marginY: "$3",
                    "@bp1": {
                        fontSize: "$4",
                        marginY: "$6"
                    }
                }),
                Z = (0, p.zo)(w, {
                    fontSize: "$2",
                    letterSpacing: "-0.5px",
                    justifySelf: "left",
                    zIndex: 1,
                    position: "relative",
                    "@bp1": {
                        justifySelf: "right",
                        fontSize: "$4"
                    }
                }),
                E = (0, p.zo)(u.Z, {
                    alignItems: "flex-end",
                    marginY: "$7",
                    zIndex: 1,
                    position: "relative",
                    "@bp1": {
                        gridTemplateColumns: "1fr 1fr",
                        marginY: "$8"
                    }
                }),
                F = n(33559),
                A = (0, p.zo)(F.Z, {
                    flexDirection: "column",
                    justifyContent: "space-between",
                    marginBottom: "$7",
                    alignItems: "center",
                    textAlign: "center",
                    minHeight: 380,
                    zIndex: 1,
                    position: "relative",
                    "@bp1": {
                        marginBottom: "$8",
                        minHeight: 800,
                        textAlign: "left",
                        alignItems: "flex-start"
                    }
                }),
                I = n(11319),
                D = n(42164),
                N = (0, p.zo)("h3", {
                    fontFamily: "$mono",
                    fontSize: "$5",
                    "@bp1": {
                        fontSize: "$9"
                    }
                }),
                T = (0, p.zo)("h3", {
                    fontFamily: "$mono",
                    fontSize: "$2",
                    color: "#757575"
                });

            function B(e) {
                var t = e.eth;
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsxs)(N, {
                        children: [(0, D.kh)(t), " ETH"]
                    }), (0, o.jsx)(T, {
                        children: (0, o.jsx)(I.Z, {
                            amount: t.toString()
                        })
                    })]
                })
            }
            var M = (0, p.zo)("h4", {
                    fontFamily: "$body",
                    fontSize: "$2",
                    letterSpacing: "-0.5px",
                    lineHeight: 1.2,
                    marginY: "$3",
                    "@bp1": {
                        fontSize: "$4",
                        marginY: "$6"
                    }
                }),
                Y = (0, p.zo)(M, {
                    alignSelf: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    "@bp1": {
                        alignItems: "flex-end",
                        alignSelf: "flex-end"
                    }
                }),
                H = (0, p.zo)("section", {
                    position: "absolute",
                    left: 0,
                    right: 0,
                    overflow: "hidden",
                    zIndex: 1,
                    pointerEvents: "none"
                }),
                L = (0, p.F4)({
                    "0%": {
                        transform: "translate3d(calc(-10% + 10vw), 0, 0)"
                    },
                    "100%": {
                        transform: "translate3d(calc(-20% + 10vw), 0, 0)"
                    }
                }),
                R = (0, p.zo)(C.Z, {
                    width: "fit-content",
                    display: "flex",
                    position: "relative",
                    transform: "translate3d(calc(10% + 10vw), 0, 0)",
                    animation: "".concat(L, " 50s linear infinite"),
                    animationFillMode: "forwards",
                    "@supports (-webkit-touch-callout: none)": {
                        "-webkit-text-fill-color": "$colors$blue100"
                    }
                }),
                W = (0, p.zo)(k.Z, {
                    whiteSpace: "nowrap",
                    marginX: "$1",
                    "@bp1": {
                        marginX: "$5"
                    }
                }),
                K = (0, p.zo)(k.Z, {
                    position: "absolute",
                    left: 0,
                    right: 0
                }),
                _ = (0, p.F4)({
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
                G = (0, p.F4)({
                    "0%": {
                        transform: "translate(-10px, -20px)"
                    },
                    "10%": {
                        transform: "translate(10px, -10px) rotate(-2deg)"
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
                J = (0, p.zo)("div", {
                    pointerEvents: "none",
                    position: "absolute",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    bottom: "50%",
                    right: "50%",
                    transform: "translate(50%, 50%)",
                    width: 300,
                    "@bp1": {
                        bottom: "60%",
                        right: "5%",
                        transform: "translate(5%, 60%)"
                    },
                    "@bp3": {
                        width: 610
                    },
                    "@media(min-width: 2200px)": {
                        bottom: "60%",
                        right: "30%",
                        transform: "translate(30%, 60%)"
                    }
                }),
                U = (0, p.zo)("img", {
                    animation: "".concat(_, " 25s ease-in-out infinite"),
                    transformOrigin: "center",
                    width: 150,
                    "@bp2": {
                        width: 200
                    },
                    "@bp3": {
                        width: 400
                    },
                    alignSelf: "flex-end",
                    "&:nth-of-type(2)": {
                        animation: "".concat(G, " 15s ease-in-out infinite"),
                        alignSelf: "flex-start",
                        backdropFilter: "blur(1px)",
                        borderRadius: "$round"
                    }
                });

            function X() {
                return (0, o.jsxs)(J, {
                    children: [(0, o.jsx)(U, {
                        src: "/images/shapes/prism.png",
                        alt: "prism"
                    }), (0, o.jsx)(U, {
                        src: "/images/shapes/sphere.png",
                        alt: "sphere"
                    }), (0, o.jsx)(U, {
                        src: "/images/shapes/cube.png",
                        alt: "cube"
                    })]
                })
            }

            function V() {
                var e = Array.from(Array(10).keys());
                return (0, o.jsxs)(K, {
                    children: [(0, o.jsx)(X, {}), (0, o.jsx)(H, {
                        children: (0, o.jsx)(R, {
                            children: e.map((function(e) {
                                return (0, o.jsx)(W, {
                                    children: (0, o.jsx)(h.Z, {
                                        src: "/images/svg-text/the-new-creative-economy.svg",
                                        alt: "The new creative economy",
                                        css: {
                                            maxWidth: "unset",
                                            width: "180vw",
                                            "@bp1": {
                                                width: "unset"
                                            }
                                        }
                                    })
                                }, e)
                            }))
                        })
                    })]
                })
            }
            var q, Q = (0, p.zo)(u.Z, {
                    gridGap: "20px",
                    marginTop: "$3",
                    marginBottom: "$9",
                    justifyContent: "center",
                    zIndex: 1,
                    position: "relative",
                    "@bp1": {
                        gridTemplateColumns: "1fr 1fr",
                        marginY: "$9"
                    }
                }),
                ee = n(11505),
                te = (0, p.zo)("div", {
                    borderRadius: "$3",
                    width: "100%",
                    boxShadow: "$0",
                    padding: "$7",
                    position: "relative",
                    background: "#fff",
                    "@bp1": {
                        height: 440
                    },
                    a: {
                        "@bp1": {
                            position: "absolute",
                            right: 40,
                            bottom: 40
                        }
                    }
                }),
                ne = (0, p.zo)(h.Z, {
                    display: "none",
                    "@bp1": {
                        display: "block",
                        position: "absolute",
                        left: 40,
                        bottom: 40,
                        width: 100,
                        height: 100,
                        borderRadius: "$round"
                    }
                }),
                oe = (0, p.zo)("h3", {
                    fontFamily: "$body",
                    fontSize: "$3",
                    whiteSpace: "nowrap",
                    "@bp1": {
                        transform: "translateX(-100%) rotate(-90deg)",
                        transformOrigin: "right",
                        top: 30,
                        left: 40,
                        position: "absolute"
                    }
                }),
                ae = (0, p.zo)("p", {
                    fontFamily: "$body",
                    fontSize: "$0",
                    lineHeight: 1.6,
                    marginY: "$3",
                    "@bp1": {
                        fontSize: "$2",
                        marginLeft: "$8"
                    }
                });

            function ie(e) {
                var t = e.name,
                    n = e.text,
                    a = e.imageSrc,
                    i = e.publicKey;
                return (0, o.jsxs)(te, {
                    children: [(0, o.jsx)(oe, {
                        children: t
                    }), (0, o.jsx)(ne, {
                        src: a,
                        alt: t
                    }), (0, o.jsx)(ae, {
                        children: n
                    }), (0, o.jsx)(ee.Z, {
                        publicKey: i
                    })]
                })
            }

            function re() {
                return (re = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }
            var se, le, ce = function(e) {
                return a.createElement("svg", re({
                    width: 24,
                    height: 24,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), q || (q = a.createElement("path", {
                    d: "M20 7L2 2l5 18 3-7 8 8a2.122 2.122 0 003-3l-8-8 7-3z",
                    stroke: "#B3B3B3",
                    strokeWidth: 2,
                    strokeMiterlimit: 10,
                    strokeLinecap: "square"
                })))
            };

            function pe() {
                return (pe = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }
            var ue, de = function(e) {
                return a.createElement("svg", pe({
                    width: 24,
                    height: 24,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), se || (se = a.createElement("path", {
                    d: "M17 4l3 3",
                    stroke: "#B3B3B3",
                    strokeWidth: 2,
                    strokeMiterlimit: 10
                })), le || (le = a.createElement("path", {
                    d: "M12 15l-3-3 9.5-9.5a2.122 2.122 0 013 3L12 15zM3.414 16.343a3 3 0 114.243 4.243C6.485 21.756 2 22 2 22s.243-4.485 1.414-5.657z",
                    stroke: "#B3B3B3",
                    strokeWidth: 2,
                    strokeMiterlimit: 10,
                    strokeLinecap: "square"
                })))
            };

            function me() {
                return (me = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }
            var he = function(e) {
                    return a.createElement("svg", me({
                        width: 24,
                        height: 24,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), ue || (ue = a.createElement("path", {
                        d: "M20 9v12a2 2 0 01-2 2H6a2 2 0 01-2-2V9M1 5h22M8 5V1h8v4M15 11.985l-6 6M15 17.985l-6-6",
                        stroke: "#B3B3B3",
                        strokeWidth: 2,
                        strokeMiterlimit: 10,
                        strokeLinecap: "square"
                    })))
                },
                fe = (0, p.F4)({
                    "0%": {
                        right: -200
                    },
                    "100%": {
                        right: 0
                    }
                }),
                ge = (0, p.zo)("div", {
                    path: {
                        transition: "stroke $1 $ease"
                    },
                    cursor: "pointer",
                    "&:hover": {
                        path: {
                            stroke: "#000"
                        }
                    },
                    variants: {
                        stroke: {
                            active: {
                                path: {
                                    stroke: "#000"
                                }
                            },
                            inactive: {
                                path: {
                                    stroke: "#B3B3B3"
                                }
                            }
                        }
                    }
                }),
                xe = (0, p.zo)(F.Z, {
                    position: "fixed",
                    animation: "".concat(fe, " 800ms forwards"),
                    bottom: "50%",
                    transform: "translateY(-50%)",
                    background: "#fff",
                    boxShadow: "$1",
                    borderBottomLeftRadius: "$3",
                    borderTopLeftRadius: "$3",
                    height: 160,
                    width: 50,
                    zIndex: 9999,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around"
                }),
                ve = (0, p.zo)("canvas", {
                    touchAction: "none",
                    position: "fixed",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }),
                be = (0, p.zo)("section", {
                    display: "none",
                    "@bp1": {
                        display: "block"
                    }
                });

            function ye(e) {
                var t = e.setCanvasActive,
                    n = e.canvasActive,
                    i = (0, a.useRef)(null),
                    r = (0, a.useState)(null),
                    s = r[0],
                    l = r[1],
                    c = (0, a.useState)(null),
                    p = c[0],
                    u = c[1],
                    d = (0, a.useState)(!1),
                    m = d[0],
                    h = d[1],
                    f = (0, a.useState)(null),
                    g = f[0],
                    x = f[1],
                    v = (0, a.useState)(null),
                    b = v[0],
                    y = v[1],
                    w = (0, a.useState)({
                        x: null,
                        y: null
                    }),
                    j = w[0],
                    S = w[1],
                    k = (0, a.useState)(334),
                    $ = k[0],
                    z = k[1];
                return (0, a.useEffect)((function() {
                    if (n) {
                        var e = i.current,
                            t = e.getContext("2d");
                        y(e), x(t), l(document.body.getBoundingClientRect().height), u(document.body.getBoundingClientRect().width)
                    }
                }), [n]), (0, o.jsxs)(be, {
                    children: [(0, o.jsxs)(xe, {
                        children: [(0, o.jsx)(ge, {
                            stroke: n ? "inactive" : "active",
                            children: (0, o.jsx)(ce, {
                                onClick: function() {
                                    return t(!1)
                                }
                            })
                        }), (0, o.jsx)(ge, {
                            stroke: n ? "active" : "inactive",
                            children: (0, o.jsx)(de, {
                                onClick: function() {
                                    return t(!0)
                                }
                            })
                        }), (0, o.jsx)(ge, {
                            children: (0, o.jsx)(he, {
                                onClick: function() {
                                    g.clearRect(0, 0, b.width, b.height)
                                }
                            })
                        })]
                    }), (0, o.jsx)(ve, {
                        ref: i,
                        width: p,
                        height: 2 * s,
                        onMouseDown: function(e) {
                            n && (h(!0), S({
                                x: e.clientX,
                                y: e.clientY
                            }))
                        },
                        onMouseMove: function(e) {
                            return function(e, t) {
                                if (m) {
                                    var n = b.getBoundingClientRect();
                                    g.beginPath(), g.strokeStyle = "hsl(".concat($, ", 90%, 55%)"), g.shadowColor = "hsl(".concat($ + 6, ", 90%, 55%)"), g.lineWidth = 80, g.shadowBlur = 20, g.lineJoin = "round", g.lineCap = "round", null === j.x && null === j.y || g.moveTo(j.x - .1, j.y - .1), g.lineTo(e - n.left, t - n.top), S({
                                        x: e - n.left,
                                        y: t - n.top
                                    }), g.stroke(), z($ >= 360 ? 0 : function(e) {
                                        return e + 3
                                    })
                                }
                            }(e.clientX, e.clientY)
                        },
                        onMouseUp: function() {
                            return h(!1)
                        },
                        onMouseOut: function() {
                            return h(!1)
                        },
                        css: {
                            cursor: n ? "url(/images/icons/ellipse-icon.svg) 49 49, auto" : "auto"
                        }
                    })]
                })
            }
            var we = n(34056),
                je = !0;

            function Se(e) {
                var t = e.metricNftSales,
                    n = (0, a.useState)(!1),
                    p = n[0],
                    u = n[1];
                return (0, o.jsx)(s.Z, {
                    title: "About",
                    footerStyle: {
                        zIndex: 4
                    },
                    type: we.c7.maximal,
                    children: (0, o.jsx)(l.Z, {
                        children: (0, o.jsxs)(c.Z, {
                            css: {
                                paddingY: "$8",
                                "@bp1": {
                                    paddingY: "$10"
                                }
                            },
                            children: [(0, o.jsx)(C.Z, {
                                textAlign: "mobileCenter",
                                css: {
                                    pointerEvents: p ? "none" : "all"
                                },
                                children: (0, o.jsxs)("picture", {
                                    children: [(0, o.jsx)("source", {
                                        srcSet: "/images/svg-text/about-foundation.svg",
                                        media: "(min-width: 800px)"
                                    }), (0, o.jsx)("img", {
                                        src: "/images/svg-text/about-foundation-centered.svg",
                                        alt: "About Foundation"
                                    })]
                                })
                            }), (0, o.jsx)(O, {
                                textAlign: "mobileCenter",
                                css: {
                                    pointerEvents: p ? "none" : "all",
                                    marginTop: "$s2",
                                    marginBottom: 200,
                                    "@bp1": {
                                        marginBottom: 40
                                    }
                                },
                                children: (0, o.jsx)(z, {
                                    children: r.introduction
                                })
                            }), (0, o.jsx)(ye, {
                                setCanvasActive: u,
                                canvasActive: p
                            }), (0, o.jsx)(V, {}), (0, o.jsx)(O, {
                                textAlign: "mobileCenter",
                                css: {
                                    pointerEvents: p ? "none" : "all",
                                    marginTop: 430,
                                    "@bp1": {
                                        marginTop: 230
                                    }
                                },
                                children: (0, o.jsx)(z, {
                                    children: r.invitation
                                })
                            }), (0, o.jsxs)(A, {
                                css: {
                                    pointerEvents: p ? "none" : "all"
                                },
                                children: [(0, o.jsx)(C.Z, {
                                    children: (0, o.jsxs)("picture", {
                                        children: [(0, o.jsx)("source", {
                                            srcSet: "/images/svg-text/making-history.svg",
                                            media: "(min-width: 800px)"
                                        }), (0, o.jsx)("img", {
                                            src: "/images/svg-text/making-history-centered.svg",
                                            alt: "Making history"
                                        })]
                                    })
                                }), (0, o.jsxs)(M, {
                                    children: ["Since launching in February\xa02021,", (0, o.jsx)("br", {}), " creators have earned..."]
                                }), (0, o.jsx)(B, {
                                    eth: t
                                }), (0, o.jsxs)(Y, {
                                    children: ["View real time updates on", (0, o.jsx)(Z, {
                                        href: "https://fnd.info/",
                                        children: "Foundation Terminal"
                                    })]
                                })]
                            }), (0, o.jsxs)("section", {
                                children: [(0, o.jsx)(C.Z, {
                                    textAlign: "mobileCenter",
                                    css: {
                                        pointerEvents: p ? "none" : "all"
                                    },
                                    children: (0, o.jsxs)("picture", {
                                        children: [(0, o.jsx)("source", {
                                            srcSet: "/images/svg-text/what-creators-have-to-say.svg",
                                            media: "(min-width: 800px)"
                                        }), (0, o.jsx)("img", {
                                            src: "/images/svg-text/what-creators-have-to-say-centered.svg",
                                            alt: "What creators have to say"
                                        })]
                                    })
                                }), (0, o.jsx)(Q, {
                                    css: {
                                        pointerEvents: p ? "none" : "all"
                                    },
                                    children: r.creators.map((function(e) {
                                        var t = e.name,
                                            n = e.text,
                                            a = e.imageSrc,
                                            i = e.profilePath,
                                            r = e.publicKey;
                                        return (0, o.jsx)(ie, {
                                            name: t,
                                            text: n,
                                            imageSrc: a,
                                            profilePath: i,
                                            publicKey: r
                                        }, t)
                                    }))
                                })]
                            }), (0, o.jsx)(C.Z, {
                                css: {
                                    pointerEvents: p ? "none" : "all"
                                },
                                children: (0, o.jsxs)("picture", {
                                    children: [(0, o.jsx)("source", {
                                        srcSet: "/images/svg-text/how-it-works.svg",
                                        media: "(min-width: 800px)"
                                    }), (0, o.jsx)("img", {
                                        src: "/images/svg-text/how-it-works-mobile.svg",
                                        alt: "How it works"
                                    })]
                                })
                            }), (0, o.jsxs)(O, {
                                css: {
                                    pointerEvents: p ? "none" : "all"
                                },
                                children: [(0, o.jsxs)("section", {
                                    children: [(0, o.jsx)(P, {
                                        children: "For Creators"
                                    }), (0, o.jsx)(z, {
                                        children: r.forCreators
                                    }), (0, o.jsx)(w, {
                                        size: "small",
                                        href: "https://intercom.help/foundation-529b3c2d3a16/en/collections/2667653-a-complete-guide-to-becoming-a-creator#guides",
                                        children: "Read the full guide: Get Started as a Creator"
                                    })]
                                }), (0, o.jsxs)("section", {
                                    children: [(0, o.jsx)(P, {
                                        children: "For Collectors"
                                    }), (0, o.jsx)(z, {
                                        children: r.forCollectors
                                    }), (0, o.jsx)(w, {
                                        size: "small",
                                        href: "https://help.foundation.app/en/collections/2692228-a-complete-guide-to-becoming-a-collector",
                                        children: "Read the full guide: Get Started as a Collector"
                                    })]
                                })]
                            }), (0, o.jsxs)(O, {
                                css: {
                                    pointerEvents: p ? "none" : "all"
                                },
                                children: [(0, o.jsxs)("section", {
                                    children: [(0, o.jsx)(P, {
                                        children: "For the Community"
                                    }), (0, o.jsx)(z, {
                                        children: r.forTheCommunity
                                    })]
                                }), (0, o.jsxs)("section", {
                                    children: [(0, o.jsx)(P, {
                                        children: "For Developers"
                                    }), (0, o.jsx)(z, {
                                        children: r.forDevelopers
                                    })]
                                })]
                            }), (0, o.jsx)(C.Z, {
                                css: {
                                    pointerEvents: p ? "none" : "all"
                                },
                                children: (0, o.jsx)(h.Z, {
                                    src: "/images/svg-text/our-team.svg",
                                    alt: "Our team",
                                    css: {
                                        maxWidth: "70%",
                                        "@bp1": {
                                            maxWidth: "unset"
                                        }
                                    }
                                })
                            }), (0, o.jsxs)(E, {
                                css: {
                                    pointerEvents: p ? "none" : "all"
                                },
                                children: [(0, o.jsx)(z, {
                                    children: r.ourTeam
                                }), (0, o.jsx)(Z, {
                                    href: "https://foundation.app/careers",
                                    children: "We're hiring!"
                                })]
                            }), (0, o.jsx)(m, {
                                canvasActive: p,
                                children: i.map((function(e) {
                                    var t = e.name,
                                        n = e.title,
                                        a = e.location,
                                        i = e.profilePath,
                                        r = e.imageSrc;
                                    return (0, o.jsx)(y, {
                                        name: t,
                                        title: n,
                                        location: a,
                                        profilePath: i,
                                        imageSrc: r
                                    }, t)
                                }))
                            })]
                        })
                    })
                })
            }
        },
        63144: function(e) {
            "use strict";
            var t = self.fetch.bind(self);
            e.exports = t, e.exports.default = e.exports
        },
        74613: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/about", function() {
                return n(21126)
            }])
        }
    },
    function(e) {
        e.O(0, [9351, 5132, 6870, 724, 6019, 9536, 9774, 2888, 179], (function() {
            return t = 74613, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);
//# sourceMappingURL=about-bfd758390a2d3fe5e7a2.js.map