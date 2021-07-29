(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [724], {
        18869: function(e) {
            "use strict";
            e.exports = function(e) {
                if (e) throw e
            }
        },
        94470: function(e) {
            "use strict";
            var t = Object.prototype.hasOwnProperty,
                n = Object.prototype.toString,
                r = Object.defineProperty,
                i = Object.getOwnPropertyDescriptor,
                o = function(e) {
                    return "function" === typeof Array.isArray ? Array.isArray(e) : "[object Array]" === n.call(e)
                },
                u = function(e) {
                    if (!e || "[object Object]" !== n.call(e)) return !1;
                    var r, i = t.call(e, "constructor"),
                        o = e.constructor && e.constructor.prototype && t.call(e.constructor.prototype, "isPrototypeOf");
                    if (e.constructor && !i && !o) return !1;
                    for (r in e);
                    return "undefined" === typeof r || t.call(e, r)
                },
                c = function(e, t) {
                    r && "__proto__" === t.name ? r(e, t.name, {
                        enumerable: !0,
                        configurable: !0,
                        value: t.newValue,
                        writable: !0
                    }) : e[t.name] = t.newValue
                },
                s = function(e, n) {
                    if ("__proto__" === n) {
                        if (!t.call(e, n)) return;
                        if (i) return i(e, n).value
                    }
                    return e[n]
                };
            e.exports = function e() {
                var t, n, r, i, a, l, f = arguments[0],
                    p = 1,
                    d = arguments.length,
                    h = !1;
                for ("boolean" === typeof f && (h = f, f = arguments[1] || {}, p = 2), (null == f || "object" !== typeof f && "function" !== typeof f) && (f = {}); p < d; ++p)
                    if (null != (t = arguments[p]))
                        for (n in t) r = s(f, n), f !== (i = s(t, n)) && (h && i && (u(i) || (a = o(i))) ? (a ? (a = !1, l = r && o(r) ? r : []) : l = r && u(r) ? r : {}, c(f, {
                            name: n,
                            newValue: e(h, l, i)
                        })) : "undefined" !== typeof i && c(f, {
                            name: n,
                            newValue: i
                        }));
                return f
            }
        },
        33310: function(e) {
            "use strict";
            e.exports = e => {
                if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
                const t = Object.getPrototypeOf(e);
                return null === t || t === Object.prototype
            }
        },
        36522: function(e, t, n) {
            var r = n(99294);
            e.exports = function() {
                return function(e) {
                    return r(e, "list", (function(e, t) {
                        var n, r, i = 0;
                        for (n = 0, r = t.length; n < r; n++) "list" === t[n].type && (i += 1);
                        for (n = 0, r = e.children.length; n < r; n++) {
                            var o = e.children[n];
                            o.index = n, o.ordered = e.ordered
                        }
                        e.depth = i
                    })), e
                }
            }
        },
        52524: function(e, t, n) {
            "use strict";
            e.exports = function(e, t, n) {
                "string" !== typeof t && (n = t, t = void 0);
                return function(e) {
                    var t = e || {},
                        n = function(e, t) {
                            var n = -1;
                            for (; ++n < t.length;) d(e, t[n]);
                            return e
                        }({
                            transforms: [],
                            canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
                            enter: {
                                autolink: x(pe),
                                autolinkProtocol: M,
                                autolinkEmail: M,
                                atxHeading: x(se),
                                blockQuote: x(re),
                                characterEscape: M,
                                characterReference: M,
                                codeFenced: x(ie),
                                codeFencedFenceInfo: v,
                                codeFencedFenceMeta: v,
                                codeIndented: x(ie, v),
                                codeText: x(oe, v),
                                codeTextData: M,
                                data: M,
                                codeFlowValue: M,
                                definition: x(ue),
                                definitionDestinationString: v,
                                definitionLabelString: v,
                                definitionTitleString: v,
                                emphasis: x(ce),
                                hardBreakEscape: x(ae),
                                hardBreakTrailing: x(ae),
                                htmlFlow: x(le, v),
                                htmlFlowData: M,
                                htmlText: x(le, v),
                                htmlTextData: M,
                                image: x(fe),
                                label: v,
                                link: x(pe),
                                listItem: x(he),
                                listItemValue: E,
                                listOrdered: x(de, w),
                                listUnordered: x(de),
                                paragraph: x(me),
                                reference: J,
                                referenceString: v,
                                resourceDestinationString: v,
                                resourceTitleString: v,
                                setextHeading: x(se),
                                strong: x(ge),
                                thematicBreak: x(ve)
                            },
                            exit: {
                                atxHeading: y(),
                                atxHeadingSequence: z,
                                autolink: y(),
                                autolinkEmail: ne,
                                autolinkProtocol: te,
                                blockQuote: y(),
                                characterEscapeValue: L,
                                characterReferenceMarkerHexadecimal: Y,
                                characterReferenceMarkerNumeric: Y,
                                characterReferenceValue: ee,
                                codeFenced: y(T),
                                codeFencedFence: C,
                                codeFencedFenceInfo: S,
                                codeFencedFenceMeta: A,
                                codeFlowValue: L,
                                codeIndented: y(I),
                                codeText: y(U),
                                codeTextData: L,
                                data: L,
                                definition: y(),
                                definitionDestinationString: O,
                                definitionLabelString: P,
                                definitionTitleString: _,
                                emphasis: y(),
                                hardBreakEscape: y(R),
                                hardBreakTrailing: y(R),
                                htmlFlow: y(q),
                                htmlFlowData: L,
                                htmlText: y(N),
                                htmlTextData: L,
                                image: y(Q),
                                label: K,
                                labelText: W,
                                lineEnding: j,
                                link: y(V),
                                listItem: y(),
                                listOrdered: y(),
                                listUnordered: y(),
                                paragraph: y(),
                                referenceString: G,
                                resourceDestinationString: $,
                                resourceTitleString: X,
                                resource: Z,
                                setextHeading: y(H),
                                setextHeadingLineSequence: B,
                                setextHeadingText: D,
                                strong: y(),
                                thematicBreak: y()
                            }
                        }, t.mdastExtensions || []),
                        s = {};
                    return a;

                    function a(e) {
                        for (var t, r = {
                                type: "root",
                                children: []
                            }, u = [], c = [], s = -1, a = {
                                stack: [r],
                                tokenStack: u,
                                config: n,
                                enter: k,
                                exit: b,
                                buffer: v,
                                resume: F,
                                setData: h,
                                getData: m
                            }; ++s < e.length;) "listOrdered" !== e[s][1].type && "listUnordered" !== e[s][1].type || ("enter" === e[s][0] ? c.push(s) : s = l(e, c.pop(s), s));
                        for (s = -1; ++s < e.length;) t = n[e[s][0]], o.call(t, e[s][1].type) && t[e[s][1].type].call(i({
                            sliceSerialize: e[s][2].sliceSerialize
                        }, a), e[s][1]);
                        if (u.length) throw new Error("Cannot close document, a token (`" + u[u.length - 1].type + "`, " + p({
                            start: u[u.length - 1].start,
                            end: u[u.length - 1].end
                        }) + ") is still open");
                        for (r.position = {
                                start: g(e.length ? e[0][1].start : {
                                    line: 1,
                                    column: 1,
                                    offset: 0
                                }),
                                end: g(e.length ? e[e.length - 2][1].end : {
                                    line: 1,
                                    column: 1,
                                    offset: 0
                                })
                            }, s = -1; ++s < n.transforms.length;) r = n.transforms[s](r) || r;
                        return r
                    }

                    function l(e, t, n) {
                        for (var r, i, o, u, c, s, a, l = t - 1, f = -1, p = !1; ++l <= n;)
                            if ("listUnordered" === (c = e[l])[1].type || "listOrdered" === c[1].type || "blockQuote" === c[1].type ? ("enter" === c[0] ? f++ : f--, a = void 0) : "lineEndingBlank" === c[1].type ? "enter" === c[0] && (!r || a || f || s || (s = l), a = void 0) : "linePrefix" === c[1].type || "listItemValue" === c[1].type || "listItemMarker" === c[1].type || "listItemPrefix" === c[1].type || "listItemPrefixWhitespace" === c[1].type || (a = void 0), !f && "enter" === c[0] && "listItemPrefix" === c[1].type || -1 === f && "exit" === c[0] && ("listUnordered" === c[1].type || "listOrdered" === c[1].type)) {
                                if (r) {
                                    for (i = l, o = void 0; i--;)
                                        if ("lineEnding" === (u = e[i])[1].type || "lineEndingBlank" === u[1].type) {
                                            if ("exit" === u[0]) continue;
                                            o && (e[o][1].type = "lineEndingBlank", p = !0), u[1].type = "lineEnding", o = i
                                        } else if ("linePrefix" !== u[1].type && "blockQuotePrefix" !== u[1].type && "blockQuotePrefixWhitespace" !== u[1].type && "blockQuoteMarker" !== u[1].type && "listItemIndent" !== u[1].type) break;
                                    s && (!o || s < o) && (r._spread = !0), r.end = g(o ? e[o][1].start : c[1].end), e.splice(o || l, 0, ["exit", r, c[2]]), l++, n++
                                }
                                "listItemPrefix" === c[1].type && (r = {
                                    type: "listItem",
                                    _spread: !1,
                                    start: g(c[1].start)
                                }, e.splice(l, 0, ["enter", r, c[2]]), l++, n++, s = void 0, a = !0)
                            }
                        return e[t][1]._spread = p, n
                    }

                    function h(e, t) {
                        s[e] = t
                    }

                    function m(e) {
                        return s[e]
                    }

                    function g(e) {
                        return {
                            line: e.line,
                            column: e.column,
                            offset: e.offset
                        }
                    }

                    function x(e, t) {
                        return n;

                        function n(n) {
                            k.call(this, e(n), n), t && t.call(this, n)
                        }
                    }

                    function v() {
                        this.stack.push({
                            type: "fragment",
                            children: []
                        })
                    }

                    function k(e, t) {
                        return this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push(t), e.position = {
                            start: g(t.start)
                        }, e
                    }

                    function y(e) {
                        return t;

                        function t(t) {
                            e && e.call(this, t), b.call(this, t)
                        }
                    }

                    function b(e) {
                        var t = this.stack.pop(),
                            n = this.tokenStack.pop();
                        if (!n) throw new Error("Cannot close `" + e.type + "` (" + p({
                            start: e.start,
                            end: e.end
                        }) + "): it\u2019s not open");
                        if (n.type !== e.type) throw new Error("Cannot close `" + e.type + "` (" + p({
                            start: e.start,
                            end: e.end
                        }) + "): a different token (`" + n.type + "`, " + p({
                            start: n.start,
                            end: n.end
                        }) + ") is open");
                        return t.position.end = g(e.end), t
                    }

                    function F() {
                        return r(this.stack.pop())
                    }

                    function w() {
                        h("expectingFirstListItemValue", !0)
                    }

                    function E(e) {
                        m("expectingFirstListItemValue") && (this.stack[this.stack.length - 2].start = parseInt(this.sliceSerialize(e), 10), h("expectingFirstListItemValue"))
                    }

                    function S() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].lang = e
                    }

                    function A() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].meta = e
                    }

                    function C() {
                        m("flowCodeInside") || (this.buffer(), h("flowCodeInside", !0))
                    }

                    function T() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), h("flowCodeInside")
                    }

                    function I() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e
                    }

                    function P(e) {
                        var t = this.resume();
                        this.stack[this.stack.length - 1].label = t, this.stack[this.stack.length - 1].identifier = u(this.sliceSerialize(e)).toLowerCase()
                    }

                    function _() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].title = e
                    }

                    function O() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].url = e
                    }

                    function z(e) {
                        this.stack[this.stack.length - 1].depth || (this.stack[this.stack.length - 1].depth = this.sliceSerialize(e).length)
                    }

                    function D() {
                        h("setextHeadingSlurpLineEnding", !0)
                    }

                    function B(e) {
                        this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2
                    }

                    function H() {
                        h("setextHeadingSlurpLineEnding")
                    }

                    function M(e) {
                        var t = this.stack[this.stack.length - 1].children,
                            n = t[t.length - 1];
                        n && "text" === n.type || ((n = xe()).position = {
                            start: g(e.start)
                        }, this.stack[this.stack.length - 1].children.push(n)), this.stack.push(n)
                    }

                    function L(e) {
                        var t = this.stack.pop();
                        t.value += this.sliceSerialize(e), t.position.end = g(e.end)
                    }

                    function j(e) {
                        var t = this.stack[this.stack.length - 1];
                        if (m("atHardBreak")) return t.children[t.children.length - 1].position.end = g(e.end), void h("atHardBreak");
                        !m("setextHeadingSlurpLineEnding") && n.canContainEols.indexOf(t.type) > -1 && (M.call(this, e), L.call(this, e))
                    }

                    function R() {
                        h("atHardBreak", !0)
                    }

                    function q() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e
                    }

                    function N() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e
                    }

                    function U() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e
                    }

                    function V() {
                        var e = this.stack[this.stack.length - 1];
                        m("inReference") ? (e.type += "Reference", e.referenceType = m("referenceType") || "shortcut", delete e.url, delete e.title) : (delete e.identifier, delete e.label, delete e.referenceType), h("referenceType")
                    }

                    function Q() {
                        var e = this.stack[this.stack.length - 1];
                        m("inReference") ? (e.type += "Reference", e.referenceType = m("referenceType") || "shortcut", delete e.url, delete e.title) : (delete e.identifier, delete e.label, delete e.referenceType), h("referenceType")
                    }

                    function W(e) {
                        this.stack[this.stack.length - 2].identifier = u(this.sliceSerialize(e)).toLowerCase()
                    }

                    function K() {
                        var e = this.stack[this.stack.length - 1],
                            t = this.resume();
                        this.stack[this.stack.length - 1].label = t, h("inReference", !0), "link" === this.stack[this.stack.length - 1].type ? this.stack[this.stack.length - 1].children = e.children : this.stack[this.stack.length - 1].alt = t
                    }

                    function $() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].url = e
                    }

                    function X() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].title = e
                    }

                    function Z() {
                        h("inReference")
                    }

                    function J() {
                        h("referenceType", "collapsed")
                    }

                    function G(e) {
                        var t = this.resume();
                        this.stack[this.stack.length - 1].label = t, this.stack[this.stack.length - 1].identifier = u(this.sliceSerialize(e)).toLowerCase(), h("referenceType", "full")
                    }

                    function Y(e) {
                        h("characterReferenceType", e.type)
                    }

                    function ee(e) {
                        var t, n, r = this.sliceSerialize(e),
                            i = m("characterReferenceType");
                        i ? (t = c(r, "characterReferenceMarkerNumeric" === i ? 10 : 16), h("characterReferenceType")) : t = f(r), (n = this.stack.pop()).value += t, n.position.end = g(e.end)
                    }

                    function te(e) {
                        L.call(this, e), this.stack[this.stack.length - 1].url = this.sliceSerialize(e)
                    }

                    function ne(e) {
                        L.call(this, e), this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e)
                    }

                    function re() {
                        return {
                            type: "blockquote",
                            children: []
                        }
                    }

                    function ie() {
                        return {
                            type: "code",
                            lang: null,
                            meta: null,
                            value: ""
                        }
                    }

                    function oe() {
                        return {
                            type: "inlineCode",
                            value: ""
                        }
                    }

                    function ue() {
                        return {
                            type: "definition",
                            identifier: "",
                            label: null,
                            title: null,
                            url: ""
                        }
                    }

                    function ce() {
                        return {
                            type: "emphasis",
                            children: []
                        }
                    }

                    function se() {
                        return {
                            type: "heading",
                            depth: void 0,
                            children: []
                        }
                    }

                    function ae() {
                        return {
                            type: "break"
                        }
                    }

                    function le() {
                        return {
                            type: "html",
                            value: ""
                        }
                    }

                    function fe() {
                        return {
                            type: "image",
                            title: null,
                            url: "",
                            alt: null
                        }
                    }

                    function pe() {
                        return {
                            type: "link",
                            title: null,
                            url: "",
                            children: []
                        }
                    }

                    function de(e) {
                        return {
                            type: "list",
                            ordered: "listOrdered" === e.type,
                            start: null,
                            spread: e._spread,
                            children: []
                        }
                    }

                    function he(e) {
                        return {
                            type: "listItem",
                            spread: e._spread,
                            checked: null,
                            children: []
                        }
                    }

                    function me() {
                        return {
                            type: "paragraph",
                            children: []
                        }
                    }

                    function ge() {
                        return {
                            type: "strong",
                            children: []
                        }
                    }

                    function xe() {
                        return {
                            type: "text",
                            value: ""
                        }
                    }

                    function ve() {
                        return {
                            type: "thematicBreak"
                        }
                    }
                }(n)(l(s(n).document().write(a()(e, t, !0))))
            };
            var r = n(4999),
                i = n(99198),
                o = n(17350),
                u = n(35478),
                c = n(10596),
                s = n(32976),
                a = n(30162),
                l = n(61242),
                f = n(89435),
                p = n(75432);

            function d(e, t) {
                var n, r;
                for (n in t) r = o.call(e, n) ? e[n] : e[n] = {}, "canContainEols" === n || "transforms" === n ? e[n] = [].concat(r, t[n]) : Object.assign(r, t[n])
            }
        },
        39671: function(e, t, n) {
            "use strict";
            e.exports = n(52524)
        },
        4999: function(e) {
            "use strict";

            function t(e) {
                return e && (e.value || e.alt || e.title || "children" in e && n(e.children) || "length" in e && n(e)) || ""
            }

            function n(e) {
                for (var n = [], r = -1; ++r < e.length;) n[r] = t(e[r]);
                return n.join("")
            }
            e.exports = t
        },
        76734: function(e, t, n) {
            "use strict";
            var r = n(2841)(/[A-Za-z]/);
            e.exports = r
        },
        46712: function(e, t, n) {
            "use strict";
            var r = n(2841)(/[\dA-Za-z]/);
            e.exports = r
        },
        13571: function(e, t, n) {
            "use strict";
            var r = n(2841)(/[#-'*+\--9=?A-Z^-~]/);
            e.exports = r
        },
        89696: function(e) {
            "use strict";
            e.exports = function(e) {
                return e < 32 || 127 === e
            }
        },
        73977: function(e, t, n) {
            "use strict";
            var r = n(2841)(/\d/);
            e.exports = r
        },
        56238: function(e, t, n) {
            "use strict";
            var r = n(2841)(/[\dA-Fa-f]/);
            e.exports = r
        },
        83074: function(e, t, n) {
            "use strict";
            var r = n(2841)(/[!-/:-@[-`{-~]/);
            e.exports = r
        },
        88367: function(e) {
            "use strict";
            e.exports = function(e) {
                return e < 0 || 32 === e
            }
        },
        17238: function(e) {
            "use strict";
            e.exports = function(e) {
                return e < -2
            }
        },
        73654: function(e) {
            "use strict";
            e.exports = function(e) {
                return -2 === e || -1 === e || 32 === e
            }
        },
        36996: function(e, t, n) {
            "use strict";
            var r = n(76830),
                i = n(2841)(r);
            e.exports = i
        },
        10395: function(e, t, n) {
            "use strict";
            var r = n(2841)(/\s/);
            e.exports = r
        },
        99198: function(e) {
            "use strict";
            var t = Object.assign;
            e.exports = t
        },
        93267: function(e) {
            "use strict";
            var t = String.fromCharCode;
            e.exports = t
        },
        17350: function(e) {
            "use strict";
            var t = {}.hasOwnProperty;
            e.exports = t
        },
        57139: function(e) {
            "use strict";
            e.exports = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "source", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"]
        },
        16871: function(e) {
            "use strict";
            e.exports = ["pre", "script", "style", "textarea"]
        },
        21362: function(e) {
            "use strict";
            var t = [].splice;
            e.exports = t
        },
        76830: function(e) {
            "use strict";
            e.exports = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
        },
        36274: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(97082),
                i = n(47542),
                o = n(1349),
                u = n(45485),
                c = n(49653),
                s = n(36713),
                a = n(46597),
                l = n(20431),
                f = n(60026),
                p = n(93865),
                d = n(65694),
                h = n(596),
                m = n(76872),
                g = n(28911),
                x = n(31294),
                v = n(36215),
                k = n(60534),
                y = n(92607),
                b = n(46931),
                F = n(15874),
                w = n(37039),
                E = {
                    42: b,
                    43: b,
                    45: b,
                    48: b,
                    49: b,
                    50: b,
                    51: b,
                    52: b,
                    53: b,
                    54: b,
                    55: b,
                    56: b,
                    57: b,
                    62: u
                },
                S = {
                    91: p
                },
                A = {
                    "-2": l,
                    "-1": l,
                    32: l
                },
                C = {
                    35: h,
                    42: w,
                    45: [F, w],
                    60: m,
                    61: F,
                    95: w,
                    96: a,
                    126: a
                },
                T = {
                    38: s,
                    92: c
                },
                I = {
                    "-5": y,
                    "-4": y,
                    "-3": y,
                    33: v,
                    38: s,
                    42: i,
                    60: [o, g],
                    91: k,
                    92: [d, c],
                    93: x,
                    95: i,
                    96: f
                },
                P = {
                    null: [i, r.resolver]
                };
            t.contentInitial = S, t.disable = {
                null: []
            }, t.document = E, t.flow = C, t.flowInitial = A, t.insideSpan = P, t.string = T, t.text = I
        },
        13745: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(17238),
                i = n(52928),
                o = function(e) {
                    var t, n = e.attempt(this.parser.constructs.contentInitial, (function(t) {
                        if (null === t) return void e.consume(t);
                        return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i(e, n, "linePrefix")
                    }), (function(t) {
                        return e.enter("paragraph"), o(t)
                    }));
                    return n;

                    function o(n) {
                        var r = e.enter("chunkText", {
                            contentType: "text",
                            previous: t
                        });
                        return t && (t.next = r), t = r, u(n)
                    }

                    function u(t) {
                        return null === t ? (e.exit("chunkText"), e.exit("paragraph"), void e.consume(t)) : r(t) ? (e.consume(t), e.exit("chunkText"), o) : (e.consume(t), u)
                    }
                };
            t.tokenize = o
        },
        14201: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(17238),
                i = n(52928),
                o = n(66532),
                u = function(e) {
                    var t, n, i, u = this,
                        a = [],
                        l = 0,
                        f = {
                            tokenize: function(e, r) {
                                var i = 0;
                                return t = {}, l;

                                function l(r) {
                                    return i < a.length ? (u.containerState = a[i][1], e.attempt(a[i][0].continuation, f, p)(r)) : n.currentConstruct && n.currentConstruct.concrete ? (t.flowContinue = !0, m(r)) : (u.interrupt = n.currentConstruct && n.currentConstruct.interruptible, u.containerState = {}, e.attempt(c, h, m)(r))
                                }

                                function f(e) {
                                    return i++, u.containerState._closeFlow ? h(e) : l(e)
                                }

                                function p(t) {
                                    return n.currentConstruct && n.currentConstruct.lazy ? (u.containerState = {}, e.attempt(c, h, e.attempt(s, h, e.check(o, h, d)))(t)) : h(t)
                                }

                                function d(e) {
                                    return i = a.length, t.lazy = !0, t.flowContinue = !0, m(e)
                                }

                                function h(e) {
                                    return t.flowEnd = !0, m(e)
                                }

                                function m(e) {
                                    return t.continued = i, u.interrupt = u.containerState = void 0, r(e)
                                }
                            },
                            partial: !0
                        };
                    return p;

                    function p(t) {
                        return l < a.length ? (u.containerState = a[l][1], e.attempt(a[l][0].continuation, d, h)(t)) : h(t)
                    }

                    function d(e) {
                        return l++, p(e)
                    }

                    function h(r) {
                        return t && t.flowContinue ? g(r) : (u.interrupt = n && n.currentConstruct && n.currentConstruct.interruptible, u.containerState = {}, e.attempt(c, m, g)(r))
                    }

                    function m(e) {
                        return a.push([u.currentConstruct, u.containerState]), u.containerState = void 0, h(e)
                    }

                    function g(t) {
                        return null === t ? (y(0, !0), void e.consume(t)) : (n = n || u.parser.flow(u.now()), e.enter("chunkFlow", {
                            contentType: "flow",
                            previous: i,
                            _tokenizer: n
                        }), x(t))
                    }

                    function x(t) {
                        return null === t ? (k(e.exit("chunkFlow")), g(t)) : r(t) ? (e.consume(t), k(e.exit("chunkFlow")), e.check(f, v)) : (e.consume(t), x)
                    }

                    function v(e) {
                        return y(t.continued, t && t.flowEnd), l = 0, p(e)
                    }

                    function k(e) {
                        i && (i.next = e), i = e, n.lazy = t && t.lazy, n.defineSkip(e.start), n.write(u.sliceStream(e))
                    }

                    function y(t, r) {
                        var o = a.length;
                        for (n && r && (n.write([null]), i = n = void 0); o-- > t;) u.containerState = a[o][1], a[o][0].exit.call(u, e);
                        a.length = t
                    }
                },
                c = {
                    tokenize: function(e, t, n) {
                        return i(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
                    }
                },
                s = {
                    tokenize: function(e, t, n) {
                        return i(e, e.lazy(this.parser.constructs.flow, t, n), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
                    }
                };
            t.tokenize = u
        },
        22871: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(64590),
                i = n(52928),
                o = n(66532),
                u = function(e) {
                    var t = this,
                        n = e.attempt(o, (function(r) {
                            if (null === r) return void e.consume(r);
                            return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n
                        }), e.attempt(this.parser.constructs.flowInitial, u, i(e, e.attempt(this.parser.constructs.flow, u, e.attempt(r, u)), "linePrefix")));
                    return n;

                    function u(r) {
                        if (null !== r) return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n;
                        e.consume(r)
                    }
                };
            t.tokenize = u
        },
        97082: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(99198),
                i = n(75923),
                o = s("text"),
                u = s("string"),
                c = {
                    resolveAll: a()
                };

            function s(e) {
                return {
                    tokenize: function(t) {
                        var n = this,
                            r = this.parser.constructs[e],
                            i = t.attempt(r, o, u);
                        return o;

                        function o(e) {
                            return s(e) ? i(e) : u(e)
                        }

                        function u(e) {
                            if (null !== e) return t.enter("data"), t.consume(e), c;
                            t.consume(e)
                        }

                        function c(e) {
                            return s(e) ? (t.exit("data"), i(e)) : (t.consume(e), c)
                        }

                        function s(e) {
                            var t = r[e],
                                i = -1;
                            if (null === e) return !0;
                            if (t)
                                for (; ++i < t.length;)
                                    if (!t[i].previous || t[i].previous.call(n, n.previous)) return !0
                        }
                    },
                    resolveAll: a("text" === e ? l : void 0)
                }
            }

            function a(e) {
                return function(t, n) {
                    var r, i = -1;
                    for (; ++i <= t.length;) void 0 === r ? t[i] && "data" === t[i][1].type && (r = i, i++) : t[i] && "data" === t[i][1].type || (i !== r + 2 && (t[r][1].end = t[i - 1][1].end, t.splice(r + 2, i - r - 2), i = r + 2), r = void 0);
                    return e ? e(t, n) : t
                }
            }

            function l(e, t) {
                for (var n, o, u, c, s, a, l, f, p = -1; ++p <= e.length;)
                    if ((p === e.length || "lineEnding" === e[p][1].type) && "data" === e[p - 1][1].type) {
                        for (o = e[p - 1][1], c = (n = t.sliceStream(o)).length, s = -1, a = 0, l = void 0; c--;)
                            if ("string" === typeof(u = n[c])) {
                                for (s = u.length; 32 === u.charCodeAt(s - 1);) a++, s--;
                                if (s) break;
                                s = -1
                            } else if (-2 === u) l = !0, a++;
                        else if (-1 !== u) {
                            c++;
                            break
                        }
                        a && (f = {
                            type: p === e.length || l || a < 2 ? "lineSuffix" : "hardBreakTrailing",
                            start: {
                                line: o.end.line,
                                column: o.end.column - a,
                                offset: o.end.offset - a,
                                _index: o.start._index + c,
                                _bufferIndex: c ? s : o.start._bufferIndex + s
                            },
                            end: i(o.end)
                        }, o.end = i(f.start), o.start.offset === o.end.offset ? r(o, f) : (e.splice(p, 0, ["enter", f, t], ["exit", f, t]), p += 2)), p++
                    }
                return e
            }
            t.resolver = c, t.string = u, t.text = o
        },
        32976: function(e, t, n) {
            "use strict";
            var r = n(13745),
                i = n(14201),
                o = n(22871),
                u = n(97082),
                c = n(12952),
                s = n(21388),
                a = n(28180),
                l = n(36274);
            e.exports = function(e) {
                var t = {
                    defined: [],
                    constructs: c([l].concat(a((e || {}).extensions))),
                    content: n(r),
                    document: n(i),
                    flow: n(o),
                    string: n(u.string),
                    text: n(u.text)
                };
                return t;

                function n(e) {
                    return function(n) {
                        return s(t, e, n)
                    }
                }
            }
        },
        61242: function(e, t, n) {
            "use strict";
            var r = n(84423);
            e.exports = function(e) {
                for (; !r(e););
                return e
            }
        },
        30162: function(e) {
            "use strict";
            var t = /[\0\t\n\r]/g;
            e.exports = function() {
                var e, n = !0,
                    r = 1,
                    i = "";
                return function(o, u, c) {
                    var s, a, l, f, p, d = [];
                    o = i + o.toString(u), l = 0, i = "", n && (65279 === o.charCodeAt(0) && l++, n = void 0);
                    for (; l < o.length;) {
                        if (t.lastIndex = l, s = t.exec(o), f = s ? s.index : o.length, p = o.charCodeAt(f), !s) {
                            i = o.slice(l);
                            break
                        }
                        if (10 === p && l === f && e) d.push(-3), e = void 0;
                        else if (e && (d.push(-5), e = void 0), l < f && (d.push(o.slice(l, f)), r += f - l), 0 === p) d.push(65533), r++;
                        else if (9 === p)
                            for (a = 4 * Math.ceil(r / 4), d.push(-2); r++ < a;) d.push(-1);
                        else 10 === p ? (d.push(-4), r = 1) : (e = !0, r = 1);
                        l = f + 1
                    }
                    c && (e && d.push(-5), i && d.push(i), d.push(null));
                    return d
                }
            }
        },
        47542: function(e, t, n) {
            "use strict";
            var r = n(78811),
                i = n(56808),
                o = n(19444),
                u = n(15644),
                c = n(58280),
                s = n(75923),
                a = {
                    name: "attention",
                    tokenize: function(e, t) {
                        var n, r = o(this.previous);
                        return function(t) {
                            return e.enter("attentionSequence"), n = t, i(t)
                        };

                        function i(u) {
                            var c, s, a, l;
                            return u === n ? (e.consume(u), i) : (c = e.exit("attentionSequence"), a = !(s = o(u)) || 2 === s && r, l = !r || 2 === r && s, c._open = 42 === n ? a : a && (r || !l), c._close = 42 === n ? l : l && (s || !a), t(u))
                        }
                    },
                    resolveAll: function(e, t) {
                        var n, o, a, l, f, p, d, h, m = -1;
                        for (; ++m < e.length;)
                            if ("enter" === e[m][0] && "attentionSequence" === e[m][1].type && e[m][1]._close)
                                for (n = m; n--;)
                                    if ("exit" === e[n][0] && "attentionSequence" === e[n][1].type && e[n][1]._open && t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[m][1]).charCodeAt(0)) {
                                        if ((e[n][1]._close || e[m][1]._open) && (e[m][1].end.offset - e[m][1].start.offset) % 3 && !((e[n][1].end.offset - e[n][1].start.offset + e[m][1].end.offset - e[m][1].start.offset) % 3)) continue;
                                        p = e[n][1].end.offset - e[n][1].start.offset > 1 && e[m][1].end.offset - e[m][1].start.offset > 1 ? 2 : 1, l = {
                                            type: p > 1 ? "strongSequence" : "emphasisSequence",
                                            start: u(s(e[n][1].end), -p),
                                            end: s(e[n][1].end)
                                        }, f = {
                                            type: p > 1 ? "strongSequence" : "emphasisSequence",
                                            start: s(e[m][1].start),
                                            end: u(s(e[m][1].start), p)
                                        }, a = {
                                            type: p > 1 ? "strongText" : "emphasisText",
                                            start: s(e[n][1].end),
                                            end: s(e[m][1].start)
                                        }, o = {
                                            type: p > 1 ? "strong" : "emphasis",
                                            start: s(l.start),
                                            end: s(f.end)
                                        }, e[n][1].end = s(l.start), e[m][1].start = s(f.end), d = [], e[n][1].end.offset - e[n][1].start.offset && (d = r(d, [
                                            ["enter", e[n][1], t],
                                            ["exit", e[n][1], t]
                                        ])), d = r(d, [
                                            ["enter", o, t],
                                            ["enter", l, t],
                                            ["exit", l, t],
                                            ["enter", a, t]
                                        ]), d = r(d, c(t.parser.constructs.insideSpan.null, e.slice(n + 1, m), t)), d = r(d, [
                                            ["exit", a, t],
                                            ["enter", f, t],
                                            ["exit", f, t],
                                            ["exit", o, t]
                                        ]), e[m][1].end.offset - e[m][1].start.offset ? (h = 2, d = r(d, [
                                            ["enter", e[m][1], t],
                                            ["exit", e[m][1], t]
                                        ])) : h = 0, i(e, n - 1, m - n + 3, d), m = n + d.length - h - 2;
                                        break
                                    }
                        m = -1;
                        for (; ++m < e.length;) "attentionSequence" === e[m][1].type && (e[m][1].type = "data");
                        return e
                    }
                };
            e.exports = a
        },
        1349: function(e, t, n) {
            "use strict";
            var r = n(76734),
                i = n(46712),
                o = n(13571),
                u = n(89696),
                c = {
                    name: "autolink",
                    tokenize: function(e, t, n) {
                        var c = 1;
                        return function(t) {
                            return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), s
                        };

                        function s(t) {
                            return r(t) ? (e.consume(t), a) : o(t) ? p(t) : n(t)
                        }

                        function a(e) {
                            return 43 === e || 45 === e || 46 === e || i(e) ? l(e) : p(e)
                        }

                        function l(t) {
                            return 58 === t ? (e.consume(t), f) : (43 === t || 45 === t || 46 === t || i(t)) && c++ < 32 ? (e.consume(t), l) : p(t)
                        }

                        function f(t) {
                            return 62 === t ? (e.exit("autolinkProtocol"), g(t)) : 32 === t || 60 === t || u(t) ? n(t) : (e.consume(t), f)
                        }

                        function p(t) {
                            return 64 === t ? (e.consume(t), c = 0, d) : o(t) ? (e.consume(t), p) : n(t)
                        }

                        function d(e) {
                            return i(e) ? h(e) : n(e)
                        }

                        function h(t) {
                            return 46 === t ? (e.consume(t), c = 0, d) : 62 === t ? (e.exit("autolinkProtocol").type = "autolinkEmail", g(t)) : m(t)
                        }

                        function m(t) {
                            return (45 === t || i(t)) && c++ < 63 ? (e.consume(t), 45 === t ? m : h) : n(t)
                        }

                        function g(n) {
                            return e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t
                        }
                    }
                };
            e.exports = c
        },
        45485: function(e, t, n) {
            "use strict";
            var r = n(73654),
                i = n(52928),
                o = {
                    name: "blockQuote",
                    tokenize: function(e, t, n) {
                        var i = this;
                        return function(t) {
                            if (62 === t) return i.containerState.open || (e.enter("blockQuote", {
                                _container: !0
                            }), i.containerState.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), o;
                            return n(t)
                        };

                        function o(n) {
                            return r(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n))
                        }
                    },
                    continuation: {
                        tokenize: function(e, t, n) {
                            return i(e, e.attempt(o, t, n), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
                        }
                    },
                    exit: function(e) {
                        e.exit("blockQuote")
                    }
                };
            e.exports = o
        },
        49653: function(e, t, n) {
            "use strict";
            var r = n(83074),
                i = {
                    name: "characterEscape",
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i
                        };

                        function i(i) {
                            return r(i) ? (e.enter("characterEscapeValue"), e.consume(i), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(i)
                        }
                    }
                };
            e.exports = i
        },
        36713: function(e, t, n) {
            "use strict";
            var r = n(89435),
                i = n(46712),
                o = n(73977),
                u = n(56238);

            function c(e) {
                return e && "object" === typeof e && "default" in e ? e : {
                    default: e
                }
            }
            var s = c(r),
                a = {
                    name: "characterReference",
                    tokenize: function(e, t, n) {
                        var r, c, a = this,
                            l = 0;
                        return function(t) {
                            return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), f
                        };

                        function f(t) {
                            return 35 === t ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), p) : (e.enter("characterReferenceValue"), r = 31, c = i, d(t))
                        }

                        function p(t) {
                            return 88 === t || 120 === t ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), r = 6, c = u, d) : (e.enter("characterReferenceValue"), r = 7, c = o, d(t))
                        }

                        function d(o) {
                            var u;
                            return 59 === o && l ? (u = e.exit("characterReferenceValue"), c !== i || s.default(a.sliceSerialize(u)) ? (e.enter("characterReferenceMarker"), e.consume(o), e.exit("characterReferenceMarker"), e.exit("characterReference"), t) : n(o)) : c(o) && l++ < r ? (e.consume(o), d) : n(o)
                        }
                    }
                };
            e.exports = a
        },
        46597: function(e, t, n) {
            "use strict";
            var r = n(17238),
                i = n(88367),
                o = n(15096),
                u = n(52928),
                c = {
                    name: "codeFenced",
                    tokenize: function(e, t, n) {
                        var c, s = this,
                            a = {
                                tokenize: function(e, t, n) {
                                    var i = 0;
                                    return u(e, o, "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);

                                    function o(t) {
                                        return e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), s(t)
                                    }

                                    function s(t) {
                                        return t === c ? (e.consume(t), i++, s) : i < f ? n(t) : (e.exit("codeFencedFenceSequence"), u(e, a, "whitespace")(t))
                                    }

                                    function a(i) {
                                        return null === i || r(i) ? (e.exit("codeFencedFence"), t(i)) : n(i)
                                    }
                                },
                                partial: !0
                            },
                            l = o(this.events, "linePrefix"),
                            f = 0;
                        return function(t) {
                            return e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), c = t, p(t)
                        };

                        function p(t) {
                            return t === c ? (e.consume(t), f++, p) : (e.exit("codeFencedFenceSequence"), f < 3 ? n(t) : u(e, d, "whitespace")(t))
                        }

                        function d(t) {
                            return null === t || r(t) ? x(t) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
                                contentType: "string"
                            }), h(t))
                        }

                        function h(t) {
                            return null === t || i(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), u(e, m, "whitespace")(t)) : 96 === t && t === c ? n(t) : (e.consume(t), h)
                        }

                        function m(t) {
                            return null === t || r(t) ? x(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
                                contentType: "string"
                            }), g(t))
                        }

                        function g(t) {
                            return null === t || r(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), x(t)) : 96 === t && t === c ? n(t) : (e.consume(t), g)
                        }

                        function x(n) {
                            return e.exit("codeFencedFence"), s.interrupt ? t(n) : v(n)
                        }

                        function v(t) {
                            return null === t ? y(t) : r(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), e.attempt(a, y, l ? u(e, v, "linePrefix", l + 1) : v)) : (e.enter("codeFlowValue"), k(t))
                        }

                        function k(t) {
                            return null === t || r(t) ? (e.exit("codeFlowValue"), v(t)) : (e.consume(t), k)
                        }

                        function y(n) {
                            return e.exit("codeFenced"), t(n)
                        }
                    },
                    concrete: !0
                };
            e.exports = c
        },
        20431: function(e, t, n) {
            "use strict";
            var r = n(17238),
                i = n(56808),
                o = n(15096),
                u = n(52928),
                c = {
                    name: "codeIndented",
                    tokenize: function(e, t, n) {
                        return e.attempt(s, i, n);

                        function i(n) {
                            return null === n ? t(n) : r(n) ? e.attempt(s, i, t)(n) : (e.enter("codeFlowValue"), o(n))
                        }

                        function o(t) {
                            return null === t || r(t) ? (e.exit("codeFlowValue"), i(t)) : (e.consume(t), o)
                        }
                    },
                    resolve: function(e, t) {
                        var n = {
                            type: "codeIndented",
                            start: e[0][1].start,
                            end: e[e.length - 1][1].end
                        };
                        return i(e, 0, 0, [
                            ["enter", n, t]
                        ]), i(e, e.length, 0, [
                            ["exit", n, t]
                        ]), e
                    }
                },
                s = {
                    tokenize: function(e, t, n) {
                        var i = this;
                        return u(e, (function c(s) {
                            if (r(s)) return e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), u(e, c, "linePrefix", 5);
                            return o(i.events, "linePrefix") < 4 ? n(s) : t(s)
                        }), "linePrefix", 5)
                    },
                    partial: !0
                };
            e.exports = c
        },
        60026: function(e, t, n) {
            "use strict";
            var r = n(17238),
                i = {
                    name: "codeText",
                    tokenize: function(e, t, n) {
                        var i, o, u = 0;
                        return function(t) {
                            return e.enter("codeText"), e.enter("codeTextSequence"), c(t)
                        };

                        function c(t) {
                            return 96 === t ? (e.consume(t), u++, c) : (e.exit("codeTextSequence"), s(t))
                        }

                        function s(t) {
                            return null === t ? n(t) : 96 === t ? (o = e.enter("codeTextSequence"), i = 0, l(t)) : 32 === t ? (e.enter("space"), e.consume(t), e.exit("space"), s) : r(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), s) : (e.enter("codeTextData"), a(t))
                        }

                        function a(t) {
                            return null === t || 32 === t || 96 === t || r(t) ? (e.exit("codeTextData"), s(t)) : (e.consume(t), a)
                        }

                        function l(n) {
                            return 96 === n ? (e.consume(n), i++, l) : i === u ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (o.type = "codeTextData", a(n))
                        }
                    },
                    resolve: function(e) {
                        var t, n, r = e.length - 4,
                            i = 3;
                        if (("lineEnding" === e[i][1].type || "space" === e[i][1].type) && ("lineEnding" === e[r][1].type || "space" === e[r][1].type))
                            for (t = i; ++t < r;)
                                if ("codeTextData" === e[t][1].type) {
                                    e[r][1].type = e[i][1].type = "codeTextPadding", i += 2, r -= 2;
                                    break
                                }
                        t = i - 1, r++;
                        for (; ++t <= r;) void 0 === n ? t !== r && "lineEnding" !== e[t][1].type && (n = t) : t !== r && "lineEnding" !== e[t][1].type || (e[n][1].type = "codeTextData", t !== n + 2 && (e[n][1].end = e[t - 1][1].end, e.splice(n + 2, t - n - 2), r -= t - n - 2, t = n + 2), n = void 0);
                        return e
                    },
                    previous: function(e) {
                        return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type
                    }
                };
            e.exports = i
        },
        64590: function(e, t, n) {
            "use strict";
            var r = n(17238),
                i = n(15096),
                o = n(84423),
                u = n(52928),
                c = {
                    tokenize: function(e, t) {
                        var n;
                        return function(t) {
                            return e.enter("content"), n = e.enter("chunkContent", {
                                contentType: "content"
                            }), i(t)
                        };

                        function i(t) {
                            return null === t ? o(t) : r(t) ? e.check(s, u, o)(t) : (e.consume(t), i)
                        }

                        function o(n) {
                            return e.exit("chunkContent"), e.exit("content"), t(n)
                        }

                        function u(t) {
                            return e.consume(t), e.exit("chunkContent"), n = n.next = e.enter("chunkContent", {
                                contentType: "content",
                                previous: n
                            }), i
                        }
                    },
                    resolve: function(e) {
                        return o(e), e
                    },
                    interruptible: !0,
                    lazy: !0
                },
                s = {
                    tokenize: function(e, t, n) {
                        var o = this;
                        return function(t) {
                            return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), u(e, c, "linePrefix")
                        };

                        function c(u) {
                            return null === u || r(u) ? n(u) : o.parser.constructs.disable.null.indexOf("codeIndented") > -1 || i(o.events, "linePrefix") < 4 ? e.interrupt(o.parser.constructs.flow, n, t)(u) : t(u)
                        }
                    },
                    partial: !0
                };
            e.exports = c
        },
        93865: function(e, t, n) {
            "use strict";
            var r = n(17238),
                i = n(88367),
                o = n(35478),
                u = n(38229),
                c = n(97154),
                s = n(52928),
                a = n(31056),
                l = n(59283),
                f = {
                    name: "definition",
                    tokenize: function(e, t, n) {
                        var i, l = this;
                        return function(t) {
                            return e.enter("definition"), c.call(l, e, f, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t)
                        };

                        function f(t) {
                            return i = o(l.sliceSerialize(l.events[l.events.length - 1][1]).slice(1, -1)), 58 === t ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), a(e, u(e, e.attempt(p, s(e, d, "whitespace"), s(e, d, "whitespace")), n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"))) : n(t)
                        }

                        function d(o) {
                            return null === o || r(o) ? (e.exit("definition"), l.parser.defined.indexOf(i) < 0 && l.parser.defined.push(i), t(o)) : n(o)
                        }
                    }
                },
                p = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return i(t) ? a(e, o)(t) : n(t)
                        };

                        function o(t) {
                            return 34 === t || 39 === t || 40 === t ? l(e, s(e, u, "whitespace"), n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t) : n(t)
                        }

                        function u(e) {
                            return null === e || r(e) ? t(e) : n(e)
                        }
                    },
                    partial: !0
                };
            e.exports = f
        },
        38229: function(e, t, n) {
            "use strict";
            var r = n(89696),
                i = n(88367),
                o = n(17238);
            e.exports = function(e, t, n, u, c, s, a, l, f) {
                var p = f || 1 / 0,
                    d = 0;
                return function(t) {
                    if (60 === t) return e.enter(u), e.enter(c), e.enter(s), e.consume(t), e.exit(s), h;
                    if (r(t) || 41 === t) return n(t);
                    return e.enter(u), e.enter(a), e.enter(l), e.enter("chunkString", {
                        contentType: "string"
                    }), x(t)
                };

                function h(n) {
                    return 62 === n ? (e.enter(s), e.consume(n), e.exit(s), e.exit(c), e.exit(u), t) : (e.enter(l), e.enter("chunkString", {
                        contentType: "string"
                    }), m(n))
                }

                function m(t) {
                    return 62 === t ? (e.exit("chunkString"), e.exit(l), h(t)) : null === t || 60 === t || o(t) ? n(t) : (e.consume(t), 92 === t ? g : m)
                }

                function g(t) {
                    return 60 === t || 62 === t || 92 === t ? (e.consume(t), m) : m(t)
                }

                function x(o) {
                    return 40 === o ? ++d > p ? n(o) : (e.consume(o), x) : 41 === o ? d-- ? (e.consume(o), x) : (e.exit("chunkString"), e.exit(l), e.exit(a), e.exit(u), t(o)) : null === o || i(o) ? d ? n(o) : (e.exit("chunkString"), e.exit(l), e.exit(a), e.exit(u), t(o)) : r(o) ? n(o) : (e.consume(o), 92 === o ? v : x)
                }

                function v(t) {
                    return 40 === t || 41 === t || 92 === t ? (e.consume(t), x) : x(t)
                }
            }
        },
        97154: function(e, t, n) {
            "use strict";
            var r = n(17238),
                i = n(73654);
            e.exports = function(e, t, n, o, u, c) {
                var s, a = this,
                    l = 0;
                return function(t) {
                    return e.enter(o), e.enter(u), e.consume(t), e.exit(u), e.enter(c), f
                };

                function f(i) {
                    return null === i || 91 === i || 93 === i && !s || 94 === i && !l && "_hiddenFootnoteSupport" in a.parser.constructs || l > 999 ? n(i) : 93 === i ? (e.exit(c), e.enter(u), e.consume(i), e.exit(u), e.exit(o), t) : r(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), f) : (e.enter("chunkString", {
                        contentType: "string"
                    }), p(i))
                }

                function p(t) {
                    return null === t || 91 === t || 93 === t || r(t) || l++ > 999 ? (e.exit("chunkString"), f(t)) : (e.consume(t), s = s || !i(t), 92 === t ? d : p)
                }

                function d(t) {
                    return 91 === t || 92 === t || 93 === t ? (e.consume(t), l++, p) : p(t)
                }
            }
        },
        52928: function(e, t, n) {
            "use strict";
            var r = n(73654);
            e.exports = function(e, t, n, i) {
                var o = i ? i - 1 : 1 / 0,
                    u = 0;
                return function(i) {
                    if (r(i)) return e.enter(n), c(i);
                    return t(i)
                };

                function c(i) {
                    return r(i) && u++ < o ? (e.consume(i), c) : (e.exit(n), t(i))
                }
            }
        },
        59283: function(e, t, n) {
            "use strict";
            var r = n(17238),
                i = n(52928);
            e.exports = function(e, t, n, o, u, c) {
                var s;
                return function(t) {
                    return e.enter(o), e.enter(u), e.consume(t), e.exit(u), s = 40 === t ? 41 : t, a
                };

                function a(n) {
                    return n === s ? (e.enter(u), e.consume(n), e.exit(u), e.exit(o), t) : (e.enter(c), l(n))
                }

                function l(t) {
                    return t === s ? (e.exit(c), a(s)) : null === t ? n(t) : r(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i(e, l, "linePrefix")) : (e.enter("chunkString", {
                        contentType: "string"
                    }), f(t))
                }

                function f(t) {
                    return t === s || null === t || r(t) ? (e.exit("chunkString"), l(t)) : (e.consume(t), 92 === t ? p : f)
                }

                function p(t) {
                    return t === s || 92 === t ? (e.consume(t), f) : f(t)
                }
            }
        },
        31056: function(e, t, n) {
            "use strict";
            var r = n(17238),
                i = n(73654),
                o = n(52928);
            e.exports = function(e, t) {
                var n;
                return function u(c) {
                    if (r(c)) return e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), n = !0, u;
                    if (i(c)) return o(e, u, n ? "linePrefix" : "lineSuffix")(c);
                    return t(c)
                }
            }
        },
        65694: function(e, t, n) {
            "use strict";
            var r = n(17238),
                i = {
                    name: "hardBreakEscape",
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(t), i
                        };

                        function i(i) {
                            return r(i) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), t(i)) : n(i)
                        }
                    }
                };
            e.exports = i
        },
        596: function(e, t, n) {
            "use strict";
            var r = n(17238),
                i = n(88367),
                o = n(73654),
                u = n(56808),
                c = n(52928),
                s = {
                    name: "headingAtx",
                    tokenize: function(e, t, n) {
                        var u = this,
                            s = 0;
                        return function(t) {
                            return e.enter("atxHeading"), e.enter("atxHeadingSequence"), a(t)
                        };

                        function a(r) {
                            return 35 === r && s++ < 6 ? (e.consume(r), a) : null === r || i(r) ? (e.exit("atxHeadingSequence"), u.interrupt ? t(r) : l(r)) : n(r)
                        }

                        function l(n) {
                            return 35 === n ? (e.enter("atxHeadingSequence"), f(n)) : null === n || r(n) ? (e.exit("atxHeading"), t(n)) : o(n) ? c(e, l, "whitespace")(n) : (e.enter("atxHeadingText"), p(n))
                        }

                        function f(t) {
                            return 35 === t ? (e.consume(t), f) : (e.exit("atxHeadingSequence"), l(t))
                        }

                        function p(t) {
                            return null === t || 35 === t || i(t) ? (e.exit("atxHeadingText"), l(t)) : (e.consume(t), p)
                        }
                    },
                    resolve: function(e, t) {
                        var n, r, i = e.length - 2,
                            o = 3;
                        "whitespace" === e[o][1].type && (o += 2);
                        i - 2 > o && "whitespace" === e[i][1].type && (i -= 2);
                        "atxHeadingSequence" === e[i][1].type && (o === i - 1 || i - 4 > o && "whitespace" === e[i - 2][1].type) && (i -= o + 1 === i ? 2 : 4);
                        i > o && (n = {
                            type: "atxHeadingText",
                            start: e[o][1].start,
                            end: e[i][1].end
                        }, r = {
                            type: "chunkText",
                            start: e[o][1].start,
                            end: e[i][1].end,
                            contentType: "text"
                        }, u(e, o, i - o + 1, [
                            ["enter", n, t],
                            ["enter", r, t],
                            ["exit", r, t],
                            ["exit", n, t]
                        ]));
                        return e
                    }
                };
            e.exports = s
        },
        76872: function(e, t, n) {
            "use strict";
            var r = n(76734),
                i = n(46712),
                o = n(17238),
                u = n(88367),
                c = n(73654),
                s = n(93267),
                a = n(57139),
                l = n(16871),
                f = n(66532),
                p = {
                    name: "htmlFlow",
                    tokenize: function(e, t, n) {
                        var f, p, h, m, g, x = this;
                        return function(t) {
                            return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), v
                        };

                        function v(i) {
                            return 33 === i ? (e.consume(i), k) : 47 === i ? (e.consume(i), F) : 63 === i ? (e.consume(i), f = 3, x.interrupt ? t : N) : r(i) ? (e.consume(i), h = s(i), p = !0, w) : n(i)
                        }

                        function k(i) {
                            return 45 === i ? (e.consume(i), f = 2, y) : 91 === i ? (e.consume(i), f = 5, h = "CDATA[", m = 0, b) : r(i) ? (e.consume(i), f = 4, x.interrupt ? t : N) : n(i)
                        }

                        function y(r) {
                            return 45 === r ? (e.consume(r), x.interrupt ? t : N) : n(r)
                        }

                        function b(r) {
                            return r === h.charCodeAt(m++) ? (e.consume(r), m === h.length ? x.interrupt ? t : B : b) : n(r)
                        }

                        function F(t) {
                            return r(t) ? (e.consume(t), h = s(t), w) : n(t)
                        }

                        function w(r) {
                            return null === r || 47 === r || 62 === r || u(r) ? 47 !== r && p && l.indexOf(h.toLowerCase()) > -1 ? (f = 1, x.interrupt ? t(r) : B(r)) : a.indexOf(h.toLowerCase()) > -1 ? (f = 6, 47 === r ? (e.consume(r), E) : x.interrupt ? t(r) : B(r)) : (f = 7, x.interrupt ? n(r) : p ? A(r) : S(r)) : 45 === r || i(r) ? (e.consume(r), h += s(r), w) : n(r)
                        }

                        function E(r) {
                            return 62 === r ? (e.consume(r), x.interrupt ? t : B) : n(r)
                        }

                        function S(t) {
                            return c(t) ? (e.consume(t), S) : z(t)
                        }

                        function A(t) {
                            return 47 === t ? (e.consume(t), z) : 58 === t || 95 === t || r(t) ? (e.consume(t), C) : c(t) ? (e.consume(t), A) : z(t)
                        }

                        function C(t) {
                            return 45 === t || 46 === t || 58 === t || 95 === t || i(t) ? (e.consume(t), C) : T(t)
                        }

                        function T(t) {
                            return 61 === t ? (e.consume(t), I) : c(t) ? (e.consume(t), T) : A(t)
                        }

                        function I(t) {
                            return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), g = t, P) : c(t) ? (e.consume(t), I) : (g = void 0, _(t))
                        }

                        function P(t) {
                            return t === g ? (e.consume(t), O) : null === t || o(t) ? n(t) : (e.consume(t), P)
                        }

                        function _(t) {
                            return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 62 === t || 96 === t || u(t) ? T(t) : (e.consume(t), _)
                        }

                        function O(e) {
                            return 47 === e || 62 === e || c(e) ? A(e) : n(e)
                        }

                        function z(t) {
                            return 62 === t ? (e.consume(t), D) : n(t)
                        }

                        function D(t) {
                            return c(t) ? (e.consume(t), D) : null === t || o(t) ? B(t) : n(t)
                        }

                        function B(t) {
                            return 45 === t && 2 === f ? (e.consume(t), L) : 60 === t && 1 === f ? (e.consume(t), j) : 62 === t && 4 === f ? (e.consume(t), U) : 63 === t && 3 === f ? (e.consume(t), N) : 93 === t && 5 === f ? (e.consume(t), q) : !o(t) || 6 !== f && 7 !== f ? null === t || o(t) ? H(t) : (e.consume(t), B) : e.check(d, U, H)(t)
                        }

                        function H(t) {
                            return e.exit("htmlFlowData"), M(t)
                        }

                        function M(t) {
                            return null === t ? V(t) : o(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), M) : (e.enter("htmlFlowData"), B(t))
                        }

                        function L(t) {
                            return 45 === t ? (e.consume(t), N) : B(t)
                        }

                        function j(t) {
                            return 47 === t ? (e.consume(t), h = "", R) : B(t)
                        }

                        function R(t) {
                            return 62 === t && l.indexOf(h.toLowerCase()) > -1 ? (e.consume(t), U) : r(t) && h.length < 8 ? (e.consume(t), h += s(t), R) : B(t)
                        }

                        function q(t) {
                            return 93 === t ? (e.consume(t), N) : B(t)
                        }

                        function N(t) {
                            return 62 === t ? (e.consume(t), U) : B(t)
                        }

                        function U(t) {
                            return null === t || o(t) ? (e.exit("htmlFlowData"), V(t)) : (e.consume(t), U)
                        }

                        function V(n) {
                            return e.exit("htmlFlow"), t(n)
                        }
                    },
                    resolveTo: function(e) {
                        var t = e.length;
                        for (; t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type););
                        t > 1 && "linePrefix" === e[t - 2][1].type && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2));
                        return e
                    },
                    concrete: !0
                },
                d = {
                    tokenize: function(e, t, n) {
                        return function(r) {
                            return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), e.attempt(f, t, n)
                        }
                    },
                    partial: !0
                };
            e.exports = p
        },
        28911: function(e, t, n) {
            "use strict";
            var r = n(76734),
                i = n(46712),
                o = n(17238),
                u = n(88367),
                c = n(73654),
                s = n(52928),
                a = {
                    name: "htmlText",
                    tokenize: function(e, t, n) {
                        var a, l, f, p, d = this;
                        return function(t) {
                            return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), h
                        };

                        function h(t) {
                            return 33 === t ? (e.consume(t), m) : 47 === t ? (e.consume(t), T) : 63 === t ? (e.consume(t), A) : r(t) ? (e.consume(t), _) : n(t)
                        }

                        function m(t) {
                            return 45 === t ? (e.consume(t), g) : 91 === t ? (e.consume(t), l = "CDATA[", f = 0, b) : r(t) ? (e.consume(t), S) : n(t)
                        }

                        function g(t) {
                            return 45 === t ? (e.consume(t), x) : n(t)
                        }

                        function x(t) {
                            return null === t || 62 === t ? n(t) : 45 === t ? (e.consume(t), v) : k(t)
                        }

                        function v(e) {
                            return null === e || 62 === e ? n(e) : k(e)
                        }

                        function k(t) {
                            return null === t ? n(t) : 45 === t ? (e.consume(t), y) : o(t) ? (p = k, j(t)) : (e.consume(t), k)
                        }

                        function y(t) {
                            return 45 === t ? (e.consume(t), q) : k(t)
                        }

                        function b(t) {
                            return t === l.charCodeAt(f++) ? (e.consume(t), f === l.length ? F : b) : n(t)
                        }

                        function F(t) {
                            return null === t ? n(t) : 93 === t ? (e.consume(t), w) : o(t) ? (p = F, j(t)) : (e.consume(t), F)
                        }

                        function w(t) {
                            return 93 === t ? (e.consume(t), E) : F(t)
                        }

                        function E(t) {
                            return 62 === t ? q(t) : 93 === t ? (e.consume(t), E) : F(t)
                        }

                        function S(t) {
                            return null === t || 62 === t ? q(t) : o(t) ? (p = S, j(t)) : (e.consume(t), S)
                        }

                        function A(t) {
                            return null === t ? n(t) : 63 === t ? (e.consume(t), C) : o(t) ? (p = A, j(t)) : (e.consume(t), A)
                        }

                        function C(e) {
                            return 62 === e ? q(e) : A(e)
                        }

                        function T(t) {
                            return r(t) ? (e.consume(t), I) : n(t)
                        }

                        function I(t) {
                            return 45 === t || i(t) ? (e.consume(t), I) : P(t)
                        }

                        function P(t) {
                            return o(t) ? (p = P, j(t)) : c(t) ? (e.consume(t), P) : q(t)
                        }

                        function _(t) {
                            return 45 === t || i(t) ? (e.consume(t), _) : 47 === t || 62 === t || u(t) ? O(t) : n(t)
                        }

                        function O(t) {
                            return 47 === t ? (e.consume(t), q) : 58 === t || 95 === t || r(t) ? (e.consume(t), z) : o(t) ? (p = O, j(t)) : c(t) ? (e.consume(t), O) : q(t)
                        }

                        function z(t) {
                            return 45 === t || 46 === t || 58 === t || 95 === t || i(t) ? (e.consume(t), z) : D(t)
                        }

                        function D(t) {
                            return 61 === t ? (e.consume(t), B) : o(t) ? (p = D, j(t)) : c(t) ? (e.consume(t), D) : O(t)
                        }

                        function B(t) {
                            return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), a = t, H) : o(t) ? (p = B, j(t)) : c(t) ? (e.consume(t), B) : (e.consume(t), a = void 0, L)
                        }

                        function H(t) {
                            return t === a ? (e.consume(t), M) : null === t ? n(t) : o(t) ? (p = H, j(t)) : (e.consume(t), H)
                        }

                        function M(e) {
                            return 62 === e || 47 === e || u(e) ? O(e) : n(e)
                        }

                        function L(t) {
                            return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? n(t) : 62 === t || u(t) ? O(t) : (e.consume(t), L)
                        }

                        function j(t) {
                            return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), s(e, R, "linePrefix", d.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
                        }

                        function R(t) {
                            return e.enter("htmlTextData"), p(t)
                        }

                        function q(r) {
                            return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r)
                        }
                    }
                };
            e.exports = a
        },
        31294: function(e, t, n) {
            "use strict";
            var r = n(88367),
                i = n(78811),
                o = n(56808),
                u = n(35478),
                c = n(58280),
                s = n(75923),
                a = n(38229),
                l = n(97154),
                f = n(59283),
                p = n(31056),
                d = {
                    name: "labelEnd",
                    tokenize: function(e, t, n) {
                        var r, i, o = this,
                            c = o.events.length;
                        for (; c--;)
                            if (("labelImage" === o.events[c][1].type || "labelLink" === o.events[c][1].type) && !o.events[c][1]._balanced) {
                                r = o.events[c][1];
                                break
                            }
                        return function(t) {
                            if (!r) return n(t);
                            return r._inactive ? a(t) : (i = o.parser.defined.indexOf(u(o.sliceSerialize({
                                start: r.end,
                                end: o.now()
                            }))) > -1, e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), s)
                        };

                        function s(n) {
                            return 40 === n ? e.attempt(h, t, i ? t : a)(n) : 91 === n ? e.attempt(m, t, i ? e.attempt(g, t, a) : a)(n) : i ? t(n) : a(n)
                        }

                        function a(e) {
                            return r._balanced = !0, n(e)
                        }
                    },
                    resolveTo: function(e, t) {
                        var n, r, u, a, l, f, p, d = e.length,
                            h = 0;
                        for (; d--;)
                            if (a = e[d][1], l) {
                                if ("link" === a.type || "labelLink" === a.type && a._inactive) break;
                                "enter" === e[d][0] && "labelLink" === a.type && (a._inactive = !0)
                            } else if (f) {
                            if ("enter" === e[d][0] && ("labelImage" === a.type || "labelLink" === a.type) && !a._balanced && (l = d, "labelLink" !== a.type)) {
                                h = 2;
                                break
                            }
                        } else "labelEnd" === a.type && (f = d);
                        return n = {
                            type: "labelLink" === e[l][1].type ? "link" : "image",
                            start: s(e[l][1].start),
                            end: s(e[e.length - 1][1].end)
                        }, r = {
                            type: "label",
                            start: s(e[l][1].start),
                            end: s(e[f][1].end)
                        }, u = {
                            type: "labelText",
                            start: s(e[l + h + 2][1].end),
                            end: s(e[f - 2][1].start)
                        }, p = i(p = [
                            ["enter", n, t],
                            ["enter", r, t]
                        ], e.slice(l + 1, l + h + 3)), p = i(p, [
                            ["enter", u, t]
                        ]), p = i(p, c(t.parser.constructs.insideSpan.null, e.slice(l + h + 4, f - 3), t)), p = i(p, [
                            ["exit", u, t], e[f - 2], e[f - 1],
                            ["exit", r, t]
                        ]), p = i(p, e.slice(f + 1)), p = i(p, [
                            ["exit", n, t]
                        ]), o(e, l, e.length, p), e
                    },
                    resolveAll: function(e) {
                        var t, n = -1;
                        for (; ++n < e.length;)(t = e[n][1])._used || "labelImage" !== t.type && "labelLink" !== t.type && "labelEnd" !== t.type || (e.splice(n + 1, "labelImage" === t.type ? 4 : 2), t.type = "data", n++);
                        return e
                    }
                },
                h = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), p(e, i)
                        };

                        function i(t) {
                            return 41 === t ? c(t) : a(e, o, n, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 3)(t)
                        }

                        function o(t) {
                            return r(t) ? p(e, u)(t) : c(t)
                        }

                        function u(t) {
                            return 34 === t || 39 === t || 40 === t ? f(e, p(e, c), n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : c(t)
                        }

                        function c(r) {
                            return 41 === r ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r)
                        }
                    }
                },
                m = {
                    tokenize: function(e, t, n) {
                        var r = this;
                        return function(t) {
                            return l.call(r, e, i, n, "reference", "referenceMarker", "referenceString")(t)
                        };

                        function i(e) {
                            return r.parser.defined.indexOf(u(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) < 0 ? n(e) : t(e)
                        }
                    }
                },
                g = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), r
                        };

                        function r(r) {
                            return 93 === r ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r)
                        }
                    }
                };
            e.exports = d
        },
        36215: function(e, t, n) {
            "use strict";
            var r = {
                name: "labelStartImage",
                tokenize: function(e, t, n) {
                    var r = this;
                    return function(t) {
                        return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), i
                    };

                    function i(t) {
                        return 91 === t ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), o) : n(t)
                    }

                    function o(e) {
                        return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
                    }
                },
                resolveAll: n(31294).resolveAll
            };
            e.exports = r
        },
        60534: function(e, t, n) {
            "use strict";
            var r = {
                name: "labelStartLink",
                tokenize: function(e, t, n) {
                    var r = this;
                    return function(t) {
                        return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), i
                    };

                    function i(e) {
                        return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
                    }
                },
                resolveAll: n(31294).resolveAll
            };
            e.exports = r
        },
        92607: function(e, t, n) {
            "use strict";
            var r = n(52928),
                i = {
                    name: "lineEnding",
                    tokenize: function(e, t) {
                        return function(n) {
                            return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), r(e, t, "linePrefix")
                        }
                    }
                };
            e.exports = i
        },
        46931: function(e, t, n) {
            "use strict";
            var r = n(73977),
                i = n(73654),
                o = n(15096),
                u = n(18892),
                c = n(52928),
                s = n(66532),
                a = n(37039),
                l = {
                    name: "list",
                    tokenize: function(e, t, n) {
                        var c = this,
                            l = o(c.events, "linePrefix"),
                            p = 0;
                        return function(t) {
                            var i = c.containerState.type || (42 === t || 43 === t || 45 === t ? "listUnordered" : "listOrdered");
                            if ("listUnordered" === i ? !c.containerState.marker || t === c.containerState.marker : r(t)) {
                                if (c.containerState.type || (c.containerState.type = i, e.enter(i, {
                                        _container: !0
                                    })), "listUnordered" === i) return e.enter("listItemPrefix"), 42 === t || 45 === t ? e.check(a, n, h)(t) : h(t);
                                if (!c.interrupt || 49 === t) return e.enter("listItemPrefix"), e.enter("listItemValue"), d(t)
                            }
                            return n(t)
                        };

                        function d(t) {
                            return r(t) && ++p < 10 ? (e.consume(t), d) : (!c.interrupt || p < 2) && (c.containerState.marker ? t === c.containerState.marker : 41 === t || 46 === t) ? (e.exit("listItemValue"), h(t)) : n(t)
                        }

                        function h(t) {
                            return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), c.containerState.marker = c.containerState.marker || t, e.check(s, c.interrupt ? n : m, e.attempt(f, x, g))
                        }

                        function m(e) {
                            return c.containerState.initialBlankLine = !0, l++, x(e)
                        }

                        function g(t) {
                            return i(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), x) : n(t)
                        }

                        function x(n) {
                            return c.containerState.size = l + u(c.sliceStream(e.exit("listItemPrefix"))), t(n)
                        }
                    },
                    continuation: {
                        tokenize: function(e, t, n) {
                            var r = this;
                            return r.containerState._closeFlow = void 0, e.check(s, (function(n) {
                                return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, c(e, t, "listItemIndent", r.containerState.size + 1)(n)
                            }), (function(n) {
                                if (r.containerState.furtherBlankLines || !i(n)) return r.containerState.furtherBlankLines = r.containerState.initialBlankLine = void 0, o(n);
                                return r.containerState.furtherBlankLines = r.containerState.initialBlankLine = void 0, e.attempt(p, t, o)(n)
                            }));

                            function o(i) {
                                return r.containerState._closeFlow = !0, r.interrupt = void 0, c(e, e.attempt(l, t, n), "linePrefix", r.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)(i)
                            }
                        }
                    },
                    exit: function(e) {
                        e.exit(this.containerState.type)
                    }
                },
                f = {
                    tokenize: function(e, t, n) {
                        var r = this;
                        return c(e, (function(e) {
                            return i(e) || !o(r.events, "listItemPrefixWhitespace") ? n(e) : t(e)
                        }), "listItemPrefixWhitespace", r.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 5)
                    },
                    partial: !0
                },
                p = {
                    tokenize: function(e, t, n) {
                        var r = this;
                        return c(e, (function(e) {
                            return o(r.events, "listItemIndent") === r.containerState.size ? t(e) : n(e)
                        }), "listItemIndent", r.containerState.size + 1)
                    },
                    partial: !0
                };
            e.exports = l
        },
        66532: function(e, t, n) {
            "use strict";
            var r = n(17238),
                i = n(52928),
                o = {
                    tokenize: function(e, t, n) {
                        return i(e, (function(e) {
                            return null === e || r(e) ? t(e) : n(e)
                        }), "linePrefix")
                    },
                    partial: !0
                };
            e.exports = o
        },
        15874: function(e, t, n) {
            "use strict";
            var r = n(17238),
                i = n(75923),
                o = n(52928),
                u = {
                    name: "setextUnderline",
                    tokenize: function(e, t, n) {
                        var i, u, c = this,
                            s = c.events.length;
                        for (; s--;)
                            if ("lineEnding" !== c.events[s][1].type && "linePrefix" !== c.events[s][1].type && "content" !== c.events[s][1].type) {
                                u = "paragraph" === c.events[s][1].type;
                                break
                            }
                        return function(t) {
                            if (!c.lazy && (c.interrupt || u)) return e.enter("setextHeadingLine"), e.enter("setextHeadingLineSequence"), i = t, a(t);
                            return n(t)
                        };

                        function a(t) {
                            return t === i ? (e.consume(t), a) : (e.exit("setextHeadingLineSequence"), o(e, l, "lineSuffix")(t))
                        }

                        function l(i) {
                            return null === i || r(i) ? (e.exit("setextHeadingLine"), t(i)) : n(i)
                        }
                    },
                    resolveTo: function(e, t) {
                        var n, r, o, u, c = e.length;
                        for (; c--;)
                            if ("enter" === e[c][0]) {
                                if ("content" === e[c][1].type) {
                                    n = c;
                                    break
                                }
                                "paragraph" === e[c][1].type && (r = c)
                            } else "content" === e[c][1].type && e.splice(c, 1), o || "definition" !== e[c][1].type || (o = c);
                        u = {
                            type: "setextHeading",
                            start: i(e[r][1].start),
                            end: i(e[e.length - 1][1].end)
                        }, e[r][1].type = "setextHeadingText", o ? (e.splice(r, 0, ["enter", u, t]), e.splice(o + 1, 0, ["exit", e[n][1], t]), e[n][1].end = i(e[o][1].end)) : e[n][1] = u;
                        return e.push(["exit", u, t]), e
                    }
                };
            e.exports = u
        },
        37039: function(e, t, n) {
            "use strict";
            var r = n(17238),
                i = n(73654),
                o = n(52928),
                u = {
                    name: "thematicBreak",
                    tokenize: function(e, t, n) {
                        var u, c = 0;
                        return function(t) {
                            return e.enter("thematicBreak"), u = t, s(t)
                        };

                        function s(l) {
                            return l === u ? (e.enter("thematicBreakSequence"), a(l)) : i(l) ? o(e, s, "whitespace")(l) : c < 3 || null !== l && !r(l) ? n(l) : (e.exit("thematicBreak"), t(l))
                        }

                        function a(t) {
                            return t === u ? (e.consume(t), c++, a) : (e.exit("thematicBreakSequence"), s(t))
                        }
                    }
                };
            e.exports = u
        },
        78811: function(e, t, n) {
            "use strict";
            var r = n(56808);
            e.exports = function(e, t) {
                return e.length ? (r(e, e.length, 0, t), e) : t
            }
        },
        56808: function(e, t, n) {
            "use strict";
            var r = n(21362);
            e.exports = function(e, t, n, i) {
                var o, u = e.length,
                    c = 0;
                if (t = t < 0 ? -t > u ? 0 : u + t : t > u ? u : t, n = n > 0 ? n : 0, i.length < 1e4)(o = Array.from(i)).unshift(t, n), r.apply(e, o);
                else
                    for (n && r.apply(e, [t, n]); c < i.length;)(o = i.slice(c, c + 1e4)).unshift(t, 0), r.apply(e, o), c += 1e4, t += 1e4
            }
        },
        19444: function(e, t, n) {
            "use strict";
            var r = n(88367),
                i = n(36996),
                o = n(10395);
            e.exports = function(e) {
                return null === e || r(e) || o(e) ? 1 : i(e) ? 2 : void 0
            }
        },
        12952: function(e, t, n) {
            "use strict";
            var r = n(17350),
                i = n(56808),
                o = n(28180);

            function u(e, t) {
                var n, i, u, s;
                for (n in t)
                    for (s in i = r.call(e, n) ? e[n] : e[n] = {}, u = t[n]) i[s] = c(o(u[s]), r.call(i, s) ? i[s] : [])
            }

            function c(e, t) {
                for (var n = -1, r = []; ++n < e.length;)("after" === e[n].add ? t : r).push(e[n]);
                return i(t, 0, 0, r), t
            }
            e.exports = function(e) {
                for (var t = {}, n = -1; ++n < e.length;) u(t, e[n]);
                return t
            }
        },
        21388: function(e, t, n) {
            "use strict";
            var r = n(99198),
                i = n(17238),
                o = n(78811),
                u = n(56808),
                c = n(28180),
                s = n(58280),
                a = n(23082),
                l = n(75923),
                f = n(12774);
            e.exports = function(e, t, n) {
                var p = n ? l(n) : {
                        line: 1,
                        column: 1,
                        offset: 0
                    },
                    d = {},
                    h = [],
                    m = [],
                    g = [],
                    x = {
                        consume: function(e) {
                            i(e) ? (p.line++, p.column = 1, p.offset += -3 === e ? 2 : 1, C()) : -1 !== e && (p.column++, p.offset++);
                            p._bufferIndex < 0 ? p._index++ : (p._bufferIndex++, p._bufferIndex === m[p._index].length && (p._bufferIndex = -1, p._index++));
                            v.previous = e
                        },
                        enter: function(e, t) {
                            var n = t || {};
                            return n.type = e, n.start = b(), v.events.push(["enter", n, v]), g.push(n), n
                        },
                        exit: function(e) {
                            var t = g.pop();
                            return t.end = b(), v.events.push(["exit", t, v]), t
                        },
                        attempt: S((function(e, t) {
                            A(e, t.from)
                        })),
                        check: S(E),
                        interrupt: S(E, {
                            interrupt: !0
                        }),
                        lazy: S(E, {
                            lazy: !0
                        })
                    },
                    v = {
                        previous: null,
                        events: [],
                        parser: e,
                        sliceStream: y,
                        sliceSerialize: function(e) {
                            return a(y(e))
                        },
                        now: b,
                        defineSkip: function(e) {
                            d[e.line] = e.column, C()
                        },
                        write: function(e) {
                            if (m = o(m, e), F(), null !== m[m.length - 1]) return [];
                            return A(t, 0), v.events = s(h, v.events, v), v.events
                        }
                    },
                    k = t.tokenize.call(v, x);
                return t.resolveAll && h.push(t), p._index = 0, p._bufferIndex = -1, v;

                function y(e) {
                    return f(m, e)
                }

                function b() {
                    return l(p)
                }

                function F() {
                    for (var e, t; p._index < m.length;)
                        if ("string" === typeof(t = m[p._index]))
                            for (e = p._index, p._bufferIndex < 0 && (p._bufferIndex = 0); p._index === e && p._bufferIndex < t.length;) w(t.charCodeAt(p._bufferIndex));
                        else w(t)
                }

                function w(e) {
                    k = k(e)
                }

                function E(e, t) {
                    t.restore()
                }

                function S(e, t) {
                    return function(n, i, o) {
                        var u, s, a, l;
                        return n.tokenize || "length" in n ? f(c(n)) : function(e) {
                            if (e in n || null in n) return f(n.null ? c(n[e]).concat(c(n.null)) : n[e])(e);
                            return o(e)
                        };

                        function f(e) {
                            return u = e, d(e[s = 0])
                        }

                        function d(e) {
                            return function(n) {
                                l = function() {
                                    var e = b(),
                                        t = v.previous,
                                        n = v.currentConstruct,
                                        r = v.events.length,
                                        i = Array.from(g);
                                    return {
                                        restore: o,
                                        from: r
                                    };

                                    function o() {
                                        p = e, v.previous = t, v.currentConstruct = n, v.events.length = r, g = i, C()
                                    }
                                }(), a = e, e.partial || (v.currentConstruct = e);
                                if (e.name && v.parser.constructs.disable.null.indexOf(e.name) > -1) return m();
                                return e.tokenize.call(t ? r({}, v, t) : v, x, h, m)(n)
                            }
                        }

                        function h(t) {
                            return e(a, l), i
                        }

                        function m(e) {
                            return l.restore(), ++s < u.length ? d(u[s]) : o
                        }
                    }
                }

                function A(e, t) {
                    e.resolveAll && h.indexOf(e) < 0 && h.push(e), e.resolve && u(v.events, t, v.events.length - t, e.resolve(v.events.slice(t), v)), e.resolveTo && (v.events = e.resolveTo(v.events, v))
                }

                function C() {
                    p.line in d && p.column < 2 && (p.column = d[p.line], p.offset += d[p.line] - 1)
                }
            }
        },
        28180: function(e) {
            "use strict";
            e.exports = function(e) {
                return null === e || void 0 === e ? [] : "length" in e ? e : [e]
            }
        },
        15644: function(e) {
            "use strict";
            e.exports = function(e, t) {
                return e.column += t, e.offset += t, e._bufferIndex += t, e
            }
        },
        35478: function(e) {
            "use strict";
            e.exports = function(e) {
                return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
            }
        },
        15096: function(e, t, n) {
            "use strict";
            var r = n(18892);
            e.exports = function(e, t) {
                var n = e[e.length - 1];
                return n && n[1].type === t ? r(n[2].sliceStream(n[1])) : 0
            }
        },
        2841: function(e, t, n) {
            "use strict";
            var r = n(93267);
            e.exports = function(e) {
                return function(t) {
                    return e.test(r(t))
                }
            }
        },
        58280: function(e) {
            "use strict";
            e.exports = function(e, t, n) {
                for (var r, i = [], o = -1; ++o < e.length;)(r = e[o].resolveAll) && i.indexOf(r) < 0 && (t = r(t, n), i.push(r));
                return t
            }
        },
        10596: function(e, t, n) {
            "use strict";
            var r = n(93267);
            e.exports = function(e, t) {
                var n = parseInt(e, t);
                return n < 9 || 11 === n || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || 65535 === (65535 & n) || 65534 === (65535 & n) || n > 1114111 ? "\ufffd" : r(n)
            }
        },
        23082: function(e, t, n) {
            "use strict";
            var r = n(93267);
            e.exports = function(e) {
                for (var t, n, i, o = -1, u = []; ++o < e.length;) {
                    if ("string" === typeof(t = e[o])) n = t;
                    else if (-5 === t) n = "\r";
                    else if (-4 === t) n = "\n";
                    else if (-3 === t) n = "\r\n";
                    else if (-2 === t) n = "\t";
                    else if (-1 === t) {
                        if (i) continue;
                        n = " "
                    } else n = r(t);
                    i = -2 === t, u.push(n)
                }
                return u.join("")
            }
        },
        75923: function(e, t, n) {
            "use strict";
            var r = n(99198);
            e.exports = function(e) {
                return r({}, e)
            }
        },
        18892: function(e) {
            "use strict";
            e.exports = function(e) {
                for (var t = -1, n = 0; ++t < e.length;) n += "string" === typeof e[t] ? e[t].length : 1;
                return n
            }
        },
        12774: function(e) {
            "use strict";
            e.exports = function(e, t) {
                var n, r = t.start._index,
                    i = t.start._bufferIndex,
                    o = t.end._index,
                    u = t.end._bufferIndex;
                return r === o ? n = [e[r].slice(i, u)] : (n = e.slice(r, o), i > -1 && (n[0] = n[0].slice(i)), u > 0 && n.push(e[o].slice(0, u))), n
            }
        },
        84423: function(e, t, n) {
            "use strict";
            var r = n(99198),
                i = n(56808),
                o = n(75923);

            function u(e, t) {
                for (var n, r, o, u, c, s, a = e[t][1], l = e[t][2], f = t - 1, p = [], d = a._tokenizer || l.parser[a.contentType](a.start), h = d.events, m = [], g = {}; a;) {
                    for (; e[++f][1] !== a;);
                    p.push(f), a._tokenizer || (n = l.sliceStream(a), a.next || n.push(null), r && d.defineSkip(a.start), a.isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = !0), d.write(n), a.isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = void 0)), r = a, a = a.next
                }
                for (a = r, o = h.length; o--;) "enter" === h[o][0] ? u = !0 : u && h[o][1].type === h[o - 1][1].type && h[o][1].start.line !== h[o][1].end.line && (x(h.slice(o + 1, c)), a._tokenizer = a.next = void 0, a = a.previous, c = o + 1);
                for (d.events = a._tokenizer = a.next = void 0, x(h.slice(0, c)), o = -1, s = 0; ++o < m.length;) g[s + m[o][0]] = s + m[o][1], s += m[o][1] - m[o][0] - 1;
                return g;

                function x(t) {
                    var n = p.pop();
                    m.unshift([n, n + t.length - 1]), i(e, n, 2, t)
                }
            }
            e.exports = function(e) {
                for (var t, n, c, s, a, l, f, p = {}, d = -1; ++d < e.length;) {
                    for (; d in p;) d = p[d];
                    if (t = e[d], d && "chunkFlow" === t[1].type && "listItemPrefix" === e[d - 1][1].type && ((c = 0) < (l = t[1]._tokenizer.events).length && "lineEndingBlank" === l[c][1].type && (c += 2), c < l.length && "content" === l[c][1].type))
                        for (; ++c < l.length && "content" !== l[c][1].type;) "chunkText" === l[c][1].type && (l[c][1].isInFirstContentOfListItem = !0, c++);
                    if ("enter" === t[0]) t[1].contentType && (r(p, u(e, d)), d = p[d], f = !0);
                    else if (t[1]._container || t[1]._movePreviousLineEndings) {
                        for (c = d, n = void 0; c-- && ("lineEnding" === (s = e[c])[1].type || "lineEndingBlank" === s[1].type);) "enter" === s[0] && (n && (e[n][1].type = "lineEndingBlank"), s[1].type = "lineEnding", n = c);
                        n && (t[1].end = o(e[n][1].start), (a = e.slice(n, d)).unshift(t), i(e, n, d - n + 1, a))
                    }
                }
                return !f
            }
        },
        89435: function(e) {
            "use strict";
            var t;
            e.exports = function(e) {
                var n, r = "&" + e + ";";
                if ((t = t || document.createElement("i")).innerHTML = r, 59 === (n = t.textContent).charCodeAt(n.length - 1) && "semi" !== e) return !1;
                return n !== r && n
            }
        },
        8262: function(e, t, n) {
            "use strict";
            var r = n(67294),
                i = n(47529),
                o = n(59864);

            function u(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    s = t.renderers[e.type];
                e.position || (e.position = {
                    start: {
                        line: null,
                        column: null,
                        offset: null
                    },
                    end: {
                        line: null,
                        column: null,
                        offset: null
                    }
                });
                var a = e.position.start,
                    l = [e.type, a.line, a.column, i].join("-");
                if (!o.isValidElementType(s)) throw new Error("Renderer for type `".concat(e.type, "` not defined or is not renderable"));
                var f = c(e, l, t, s, n, i);
                return r.createElement(s, f, f.children || p() || void 0);

                function p() {
                    return e.children && e.children.map((function(n, r) {
                        return u(n, t, {
                            node: e,
                            props: f
                        }, r)
                    }))
                }
            }

            function c(e, t, n, o, c, l) {
                var f, p = {
                        key: t
                    },
                    d = "string" === typeof o || o === r.Fragment;
                n.sourcePos && e.position && (p["data-sourcepos"] = [(f = e.position).start.line, ":", f.start.column, "-", f.end.line, ":", f.end.column].map(String).join("")), n.rawSourcePos && !d && (p.sourcePosition = e.position), n.includeNodeIndex && c.node && c.node.children && !d && (p.index = c.node.children.indexOf(e), p.parentChildCount = c.node.children.length);
                var h = null !== e.identifier && void 0 !== e.identifier ? n.definitions[e.identifier.toUpperCase()] || {} : null;
                switch (e.type) {
                    case "root":
                        s(p, {
                            className: n.className
                        });
                        break;
                    case "text":
                        p.nodeKey = t, p.children = e.value;
                        break;
                    case "heading":
                        p.level = e.depth;
                        break;
                    case "list":
                        p.start = e.start, p.ordered = e.ordered, p.spread = e.spread, p.depth = e.depth;
                        break;
                    case "listItem":
                        p.checked = e.checked, p.spread = e.spread, p.ordered = e.ordered, p.index = e.index, p.children = function(e, t) {
                            return (t && t.node ? function(e) {
                                var t = e.children,
                                    n = e.spread,
                                    r = -1;
                                for (; !n && ++r < t.length;) n = a(t[r]);
                                return n
                            }(t.node) : a(e)) ? e.children : function(e) {
                                return e.children.reduce((function(e, t) {
                                    return e.concat("paragraph" === t.type ? t.children : [t])
                                }), [])
                            }(e)
                        }(e, c).map((function(t, r) {
                            return u(t, n, {
                                node: e,
                                props: p
                            }, r)
                        }));
                        break;
                    case "definition":
                        s(p, {
                            identifier: e.identifier,
                            title: e.title,
                            url: e.url
                        });
                        break;
                    case "code":
                        s(p, {
                            language: e.lang && e.lang.split(/\s/, 1)[0]
                        });
                        break;
                    case "inlineCode":
                        p.children = e.value, p.inline = !0;
                        break;
                    case "link":
                        s(p, {
                            title: e.title || void 0,
                            target: "function" === typeof n.linkTarget ? n.linkTarget(e.url, e.children, e.title) : n.linkTarget,
                            href: n.transformLinkUri ? n.transformLinkUri(e.url, e.children, e.title) : e.url
                        });
                        break;
                    case "image":
                        s(p, {
                            src: n.transformImageUri ? n.transformImageUri(e.url, e.children, e.title, e.alt) : e.url,
                            alt: e.alt || "",
                            title: e.title || void 0
                        });
                        break;
                    case "linkReference":
                        s(p, i(h, {
                            href: n.transformLinkUri ? n.transformLinkUri(h.href) : h.href
                        }));
                        break;
                    case "imageReference":
                        s(p, {
                            src: n.transformImageUri && h.href ? n.transformImageUri(h.href, e.children, h.title, e.alt) : h.href,
                            alt: e.alt || "",
                            title: h.title || void 0
                        });
                        break;
                    case "table":
                    case "tableHead":
                    case "tableBody":
                        p.columnAlignment = e.align;
                        break;
                    case "tableRow":
                        p.isHeader = "tableHead" === c.node.type, p.columnAlignment = c.props.columnAlignment;
                        break;
                    case "tableCell":
                        s(p, {
                            isHeader: c.props.isHeader,
                            align: c.props.columnAlignment[l]
                        });
                        break;
                    case "virtualHtml":
                        p.tag = e.tag;
                        break;
                    case "html":
                        p.isBlock = e.position.start.line !== e.position.end.line, p.allowDangerousHtml = n.allowDangerousHtml, p.escapeHtml = n.escapeHtml, p.skipHtml = n.skipHtml;
                        break;
                    case "parsedHtml":
                        var m;
                        e.children && (m = e.children.map((function(t, r) {
                            return u(t, n, {
                                node: e,
                                props: p
                            }, r)
                        }))), p.allowDangerousHtml = n.allowDangerousHtml, p.escapeHtml = n.escapeHtml, p.skipHtml = n.skipHtml, p.element = e.element ? function(e, t) {
                            var n = e.element;
                            if (Array.isArray(n)) {
                                var i = r.Fragment || "div";
                                return r.createElement(i, null, n)
                            }
                            if (n.props.children || t) {
                                var o = r.Children.toArray(n.props.children).concat(t);
                                return r.cloneElement(n, null, o)
                            }
                            return r.cloneElement(n, null)
                        }(e, m) : null;
                        break;
                    default:
                        s(p, i(e, {
                            type: void 0,
                            position: void 0,
                            children: void 0
                        }))
                }
                return !d && e.value && (p.value = e.value), d || (p.node = e), p
            }

            function s(e, t) {
                for (var n in t) "undefined" !== typeof t[n] && (e[n] = t[n])
            }

            function a(e) {
                var t = e.spread;
                return void 0 === t || null === t ? e.children.length > 1 : t
            }
            e.exports = u
        },
        9255: function(e, t, n) {
            "use strict";
            var r = n(62854);
            e.exports = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return r(e, "definition", (function(e) {
                    var n = e.identifier.toUpperCase();
                    n in t || (t[n] = {
                        href: e.url,
                        title: e.title
                    })
                })), t
            }
        },
        47979: function(e, t, n) {
            "use strict";
            var r = n(62854),
                i = [].splice;

            function o(e, t) {
                return function(e) {
                    return r(e, n), e
                };

                function n(n, r, o) {
                    if (o && !e(n, r, o)) {
                        var u = [r, 1];
                        return "unwrap" === t && n.children && (u = u.concat(n.children)), i.apply(o.children, u), r
                    }
                }
            }
            t.ofType = function(e, t) {
                return o((function(t, n, r) {
                    return !e.includes(t.type)
                }), t)
            }, t.ifNotMatch = o
        },
        56086: function(e, t, n) {
            "use strict";
            var r = n(62854),
                i = "virtualHtml",
                o = /^<(area|base|br|col|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\s*\/?>$/i,
                u = /^<(\/?)([a-z]+)\s*>$/;
            e.exports = function(e) {
                var t, n;
                return r(e, "html", (function(e, r, c) {
                    n !== c && (t = [], n = c);
                    var s = function(e) {
                        var t = e.value.match(o);
                        return !!t && t[1]
                    }(e);
                    if (s) return c.children.splice(r, 1, {
                        type: i,
                        tag: s,
                        position: e.position
                    }), !0;
                    var a = function(e, t) {
                        var n = e.value.match(u);
                        return !!n && {
                            tag: n[2],
                            opening: !n[1],
                            node: e
                        }
                    }(e);
                    if (!a) return !0;
                    var l = function(e, t) {
                        var n = e.length;
                        for (; n--;)
                            if (e[n].tag === t) return e.splice(n, 1)[0];
                        return !1
                    }(t, a.tag);
                    return l ? c.children.splice(r, 0, function(e, t, n) {
                        var r = n.children.indexOf(e.node),
                            o = n.children.indexOf(t.node),
                            u = n.children.splice(r, o - r + 1).slice(1, -1);
                        return {
                            type: i,
                            children: u,
                            tag: e.tag,
                            position: {
                                start: e.node.position.start,
                                end: t.node.position.end,
                                indent: []
                            }
                        }
                    }(a, l, c)) : a.opening || t.push(a), !0
                }), !0), e
            }
        },
        30724: function(e, t, n) {
            "use strict";
            var r = n(47529),
                i = n(18835),
                o = n(12861),
                u = n(45697),
                c = n(36522),
                s = n(56086),
                a = n(47979),
                l = n(8262),
                f = n(79658),
                p = n(9255),
                d = n(12782),
                h = n(18771),
                m = n(4941),
                g = Object.keys(h),
                x = function(e) {
                    var t = e.source || e.children || "";
                    if (e.allowedTypes && e.disallowedTypes) throw new Error("Only one of `allowedTypes` and `disallowedTypes` should be defined");
                    var n = r(h, e.renderers),
                        u = i().use(o).use(e.plugins || []),
                        d = u.runSync(u.parse(t)),
                        x = r(e, {
                            renderers: n,
                            definitions: p(d)
                        });
                    return function(e) {
                        var t = [f, c()],
                            n = e.disallowedTypes;
                        e.allowedTypes && (n = g.filter((function(t) {
                            return "root" !== t && -1 === e.allowedTypes.indexOf(t)
                        })));
                        var r = e.unwrapDisallowed ? "unwrap" : "remove";
                        n && n.length > 0 && t.push(a.ofType(n, r));
                        e.allowNode && t.push(a.ifNotMatch(e.allowNode, r));
                        var i = (e.allowDangerousHtml || !1 === e.escapeHtml) && !e.skipHtml,
                            o = (e.astPlugins || []).some((function(e) {
                                return e.identity === m.HtmlParser
                            }));
                        i && !o && t.push(s);
                        e.astPlugins && (t = t.concat(e.astPlugins));
                        return t.push(l), t
                    }(e).forEach((function(e) {
                        d = e(d, x)
                    })), d
                };
            x.defaultProps = {
                transformLinkUri: d
            }, x.propTypes = {
                className: u.string,
                source: u.string,
                children: u.string,
                sourcePos: u.bool,
                rawSourcePos: u.bool,
                escapeHtml: u.bool,
                allowDangerousHtml: u.bool,
                skipHtml: u.bool,
                allowNode: u.func,
                allowedTypes: u.arrayOf(u.oneOf(g)),
                disallowedTypes: u.arrayOf(u.oneOf(g)),
                transformLinkUri: u.oneOfType([u.func, u.bool]),
                linkTarget: u.oneOfType([u.func, u.string]),
                transformImageUri: u.func,
                astPlugins: u.arrayOf(u.func),
                unwrapDisallowed: u.bool,
                renderers: u.object,
                plugins: u.array
            }, x.types = g, x.renderers = h, x.uriTransformer = d, e.exports = x
        },
        18771: function(e, t, n) {
            "use strict";
            var r = n(47529),
                i = n(67294),
                o = parseInt((i.version || "16").slice(0, 2), 10) >= 16,
                u = i.createElement;

            function c(e, t) {
                return u(e, s(t), t.children)
            }

            function s(e) {
                var t = e["data-sourcepos"];
                return t ? {
                    "data-sourcepos": t
                } : {}
            }
            e.exports = {
                break: "br",
                paragraph: "p",
                emphasis: "em",
                strong: "strong",
                thematicBreak: "hr",
                blockquote: "blockquote",
                delete: "del",
                link: "a",
                image: "img",
                linkReference: "a",
                imageReference: "img",
                table: c.bind(null, "table"),
                tableHead: c.bind(null, "thead"),
                tableBody: c.bind(null, "tbody"),
                tableRow: c.bind(null, "tr"),
                tableCell: function(e) {
                    var t = e.align ? {
                            textAlign: e.align
                        } : void 0,
                        n = s(e);
                    return u(e.isHeader ? "th" : "td", t ? r({
                        style: t
                    }, n) : n, e.children)
                },
                root: function(e) {
                    var t = e.className,
                        n = !t && i.Fragment || "div";
                    return u(n, t ? {
                        className: t
                    } : null, e.children)
                },
                text: function(e) {
                    var t = e.children || "";
                    return o ? t : u("span", null, t)
                },
                list: function(e) {
                    var t = s(e);
                    null !== e.start && 1 !== e.start && void 0 !== e.start && (t.start = e.start.toString());
                    return u(e.ordered ? "ol" : "ul", t, e.children)
                },
                listItem: function(e) {
                    var t = null;
                    if (null !== e.checked && void 0 !== e.checked) {
                        var n = e.checked;
                        t = u("input", {
                            type: "checkbox",
                            checked: n,
                            readOnly: !0
                        })
                    }
                    return u("li", s(e), t, e.children)
                },
                definition: function() {
                    return null
                },
                heading: function(e) {
                    return u("h".concat(e.level), s(e), e.children)
                },
                inlineCode: function(e) {
                    return u("code", s(e), e.children)
                },
                code: function(e) {
                    var t = e.language && "language-".concat(e.language),
                        n = u("code", t ? {
                            className: t
                        } : null, e.value);
                    return u("pre", s(e), n)
                },
                html: function(e) {
                    if (e.skipHtml) return null;
                    var t = e.allowDangerousHtml || !1 === e.escapeHtml,
                        n = e.isBlock ? "div" : "span";
                    if (!t) return u(i.Fragment || n, null, e.value);
                    var r = {
                        dangerouslySetInnerHTML: {
                            __html: e.value
                        }
                    };
                    return u(n, r)
                },
                virtualHtml: function(e) {
                    return u(e.tag, s(e), e.children)
                },
                parsedHtml: function(e) {
                    return e["data-sourcepos"] ? i.cloneElement(e.element, {
                        "data-sourcepos": e["data-sourcepos"]
                    }) : e.element
                }
            }
        },
        4941: function(e, t) {
            "use strict";
            var n = "__RMD_HTML_PARSER__";
            t.HtmlParser = "undefined" === typeof Symbol ? n : Symbol(n)
        },
        12782: function(e) {
            "use strict";
            var t = ["http", "https", "mailto", "tel"];
            e.exports = function(e) {
                var n = (e || "").trim(),
                    r = n.charAt(0);
                if ("#" === r || "/" === r) return n;
                var i = n.indexOf(":");
                if (-1 === i) return n;
                for (var o = t.length, u = -1; ++u < o;) {
                    var c = t[u];
                    if (i === c.length && n.slice(0, c.length).toLowerCase() === c) return n
                }
                return -1 !== (u = n.indexOf("?")) && i > u || -1 !== (u = n.indexOf("#")) && i > u ? n : "javascript:void(0)"
            }
        },
        79658: function(e, t, n) {
            "use strict";
            var r = n(62854);

            function i(e) {
                var t = e.children;
                e.children = [{
                    type: "tableHead",
                    align: e.align,
                    children: [t[0]],
                    position: t[0].position
                }], t.length > 1 && e.children.push({
                    type: "tableBody",
                    align: e.align,
                    children: t.slice(1),
                    position: {
                        start: t[1].position.start,
                        end: t[t.length - 1].position.end
                    }
                })
            }
            e.exports = function(e) {
                return r(e, "table", i), e
            }
        },
        12861: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t = this;
                this.Parser = function(n) {
                    return r(n, Object.assign({}, t.data("settings"), e, {
                        extensions: t.data("micromarkExtensions") || [],
                        mdastExtensions: t.data("fromMarkdownExtensions") || []
                    }))
                }
            };
            var r = n(39671)
        },
        28281: function(e, t, n) {
            "use strict";
            var r = n(43368);
            e.exports = o, o.wrap = r;
            var i = [].slice;

            function o() {
                var e = [],
                    t = {
                        run: function() {
                            var t = -1,
                                n = i.call(arguments, 0, -1),
                                o = arguments[arguments.length - 1];
                            if ("function" !== typeof o) throw new Error("Expected function as last argument, not " + o);

                            function u(c) {
                                var s = e[++t],
                                    a = i.call(arguments, 0),
                                    l = a.slice(1),
                                    f = n.length,
                                    p = -1;
                                if (c) o(c);
                                else {
                                    for (; ++p < f;) null !== l[p] && void 0 !== l[p] || (l[p] = n[p]);
                                    n = l, s ? r(s, u).apply(null, n) : o.apply(null, [null].concat(n))
                                }
                            }
                            u.apply(null, [null].concat(n))
                        },
                        use: function(n) {
                            if ("function" !== typeof n) throw new Error("Expected `fn` to be a function, not " + n);
                            return e.push(n), t
                        }
                    };
                return t
            }
        },
        43368: function(e) {
            "use strict";
            var t = [].slice;
            e.exports = function(e, n) {
                var r;
                return function() {
                    var n, u = t.call(arguments, 0),
                        c = e.length > u.length;
                    c && u.push(i);
                    try {
                        n = e.apply(null, u)
                    } catch (s) {
                        if (c && r) throw s;
                        return i(s)
                    }
                    c || (n && "function" === typeof n.then ? n.then(o, i) : n instanceof Error ? i(n) : o(n))
                };

                function i() {
                    r || (r = !0, n.apply(null, arguments))
                }

                function o(e) {
                    i(null, e)
                }
            }
        },
        18835: function(e, t, n) {
            "use strict";
            var r = n(18869),
                i = n(73469),
                o = n(94470),
                u = n(33310),
                c = n(28281),
                s = n(10939);
            e.exports = function e() {
                var t, n = [],
                    i = c(),
                    v = {},
                    k = -1;
                return y.data = function(e, n) {
                    if ("string" === typeof e) return 2 === arguments.length ? (m("data", t), v[e] = n, y) : l.call(v, e) && v[e] || null;
                    if (e) return m("data", t), v = e, y;
                    return v
                }, y.freeze = b, y.attachers = n, y.use = function(e) {
                    var r;
                    if (m("use", t), null === e || void 0 === e);
                    else if ("function" === typeof e) l.apply(null, arguments);
                    else {
                        if ("object" !== typeof e) throw new Error("Expected usable value, not `" + e + "`");
                        "length" in e ? s(e) : i(e)
                    }
                    r && (v.settings = o(v.settings || {}, r));
                    return y;

                    function i(e) {
                        s(e.plugins), e.settings && (r = o(r || {}, e.settings))
                    }

                    function c(e) {
                        if ("function" === typeof e) l(e);
                        else {
                            if ("object" !== typeof e) throw new Error("Expected usable value, not `" + e + "`");
                            "length" in e ? l.apply(null, e) : i(e)
                        }
                    }

                    function s(e) {
                        var t = -1;
                        if (null === e || void 0 === e);
                        else {
                            if ("object" !== typeof e || !("length" in e)) throw new Error("Expected a list of plugins, not `" + e + "`");
                            for (; ++t < e.length;) c(e[t])
                        }
                    }

                    function l(e, t) {
                        var r = F(e);
                        r ? (u(r[1]) && u(t) && (t = o(!0, r[1], t)), r[1] = t) : n.push(a.call(arguments))
                    }
                }, y.parse = function(e) {
                    var t, n = s(e);
                    if (b(), d("parse", t = y.Parser), p(t, "parse")) return new t(String(n), n).parse();
                    return t(String(n), n)
                }, y.stringify = function(e, t) {
                    var n, r = s(t);
                    if (b(), h("stringify", n = y.Compiler), g(e), p(n, "compile")) return new n(e, r).compile();
                    return n(e, r)
                }, y.run = w, y.runSync = function(e, t) {
                    var n, i;
                    return w(e, t, o), x("runSync", "run", i), n;

                    function o(e, t) {
                        i = !0, n = t, r(e)
                    }
                }, y.process = E, y.processSync = function(e) {
                    var t, n;
                    return b(), d("processSync", y.Parser), h("processSync", y.Compiler), E(t = s(e), i), x("processSync", "process", n), t;

                    function i(e) {
                        n = !0, r(e)
                    }
                }, y;

                function y() {
                    for (var t = e(), r = -1; ++r < n.length;) t.use.apply(null, n[r]);
                    return t.data(o(!0, {}, v)), t
                }

                function b() {
                    var e, r;
                    if (t) return y;
                    for (; ++k < n.length;) !1 !== (e = n[k])[1] && (!0 === e[1] && (e[1] = void 0), "function" === typeof(r = e[0].apply(y, e.slice(1))) && i.use(r));
                    return t = !0, k = 1 / 0, y
                }

                function F(e) {
                    for (var t = -1; ++t < n.length;)
                        if (n[t][0] === e) return n[t]
                }

                function w(e, t, n) {
                    if (g(e), b(), n || "function" !== typeof t || (n = t, t = null), !n) return new Promise(r);

                    function r(r, o) {
                        i.run(e, s(t), (function(t, i, u) {
                            i = i || e, t ? o(t) : r ? r(i) : n(null, i, u)
                        }))
                    }
                    r(null, n)
                }

                function E(e, t) {
                    if (b(), d("process", y.Parser), h("process", y.Compiler), !t) return new Promise(n);

                    function n(n, r) {
                        var i = s(e);
                        f.run(y, {
                            file: i
                        }, (function(e) {
                            e ? r(e) : n ? n(i) : t(null, i)
                        }))
                    }
                    n(null, t)
                }
            }().freeze();
            var a = [].slice,
                l = {}.hasOwnProperty,
                f = c().use((function(e, t) {
                    t.tree = e.parse(t.file)
                })).use((function(e, t, n) {
                    e.run(t.tree, t.file, (function(e, r, i) {
                        e ? n(e) : (t.tree = r, t.file = i, n())
                    }))
                })).use((function(e, t) {
                    var n = e.stringify(t.tree, t.file);
                    void 0 === n || null === n || ("string" === typeof n || i(n) ? ("value" in t.file && (t.file.value = n), t.file.contents = n) : t.file.result = n)
                }));

            function p(e, t) {
                return "function" === typeof e && e.prototype && (function(e) {
                    var t;
                    for (t in e) return !0;
                    return !1
                }(e.prototype) || t in e.prototype)
            }

            function d(e, t) {
                if ("function" !== typeof t) throw new Error("Cannot `" + e + "` without `Parser`")
            }

            function h(e, t) {
                if ("function" !== typeof t) throw new Error("Cannot `" + e + "` without `Compiler`")
            }

            function m(e, t) {
                if (t) throw new Error("Cannot invoke `" + e + "` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.")
            }

            function g(e) {
                if (!e || "string" !== typeof e.type) throw new Error("Expected node, got `" + e + "`")
            }

            function x(e, t, n) {
                if (!n) throw new Error("`" + e + "` finished async. Use `" + t + "` instead")
            }
        },
        73469: function(e) {
            e.exports = function(e) {
                return null != e && null != e.constructor && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            }
        },
        48145: function(e) {
            "use strict";

            function t(e) {
                if (null == e) return n;
                if ("string" === typeof e) return function(e) {
                    return t;

                    function t(t) {
                        return Boolean(t && t.type === e)
                    }
                }(e);
                if ("object" === typeof e) return "length" in e ? function(e) {
                    var n = [],
                        r = -1;
                    for (; ++r < e.length;) n[r] = t(e[r]);
                    return i;

                    function i() {
                        for (var e = -1; ++e < n.length;)
                            if (n[e].apply(this, arguments)) return !0;
                        return !1
                    }
                }(e) : function(e) {
                    return t;

                    function t(t) {
                        var n;
                        for (n in e)
                            if (t[n] !== e[n]) return !1;
                        return !0
                    }
                }(e);
                if ("function" === typeof e) return e;
                throw new Error("Expected function, string, or object as test")
            }

            function n() {
                return !0
            }
            e.exports = t
        },
        75432: function(e) {
            "use strict";
            var t = {}.hasOwnProperty;

            function n(e) {
                return e && "object" === typeof e || (e = {}), i(e.line) + ":" + i(e.column)
            }

            function r(e) {
                return e && "object" === typeof e || (e = {}), n(e.start) + "-" + n(e.end)
            }

            function i(e) {
                return e && "number" === typeof e ? e : 1
            }
            e.exports = function(e) {
                if (!e || "object" !== typeof e) return "";
                if (t.call(e, "position") || t.call(e, "type")) return r(e.position);
                if (t.call(e, "start") || t.call(e, "end")) return r(e);
                if (t.call(e, "line") || t.call(e, "column")) return n(e);
                return ""
            }
        },
        99294: function(e) {
            "use strict";
            e.exports = function(e, t, n) {
                var r = [];
                "function" === typeof t && (n = t, t = null);

                function i(e) {
                    var o;
                    return t && e.type !== t || (o = n(e, r.concat())), e.children && !1 !== o ? function(e, t) {
                        var n, o = e.length,
                            u = -1;
                        r.push(t);
                        for (; ++u < o;)
                            if ((n = e[u]) && !1 === i(n)) return !1;
                        return r.pop(), !0
                    }(e.children, e) : o
                }
                i(e)
            }
        },
        62854: function(e, t, n) {
            "use strict";
            e.exports = c;
            var r = n(49858),
                i = r.CONTINUE,
                o = r.SKIP,
                u = r.EXIT;

            function c(e, t, n, i) {
                "function" === typeof t && "function" !== typeof n && (i = n, n = t, t = null), r(e, t, (function(e, t) {
                    var r = t[t.length - 1],
                        i = r ? r.children.indexOf(e) : null;
                    return n(e, i, r)
                }), i)
            }
            c.CONTINUE = i, c.SKIP = o, c.EXIT = u
        },
        29824: function(e) {
            e.exports = function(e) {
                return e
            }
        },
        49858: function(e, t, n) {
            "use strict";
            e.exports = s;
            var r = n(48145),
                i = n(29824),
                o = !0,
                u = "skip",
                c = !1;

            function s(e, t, n, s) {
                var a, l;
                "function" === typeof t && "function" !== typeof n && (s = n, n = t, t = null), l = r(t), a = s ? -1 : 1,
                    function e(r, f, p) {
                        var d, h = "object" === typeof r && null !== r ? r : {};
                        "string" === typeof h.type && (d = "string" === typeof h.tagName ? h.tagName : "string" === typeof h.name ? h.name : void 0, m.displayName = "node (" + i(h.type + (d ? "<" + d + ">" : "")) + ")");
                        return m;

                        function m() {
                            var i, d, h = p.concat(r),
                                m = [];
                            if ((!t || l(r, f, p[p.length - 1] || null)) && (m = function(e) {
                                    if (null !== e && "object" === typeof e && "length" in e) return e;
                                    if ("number" === typeof e) return [o, e];
                                    return [e]
                                }(n(r, p)))[0] === c) return m;
                            if (r.children && m[0] !== u)
                                for (d = (s ? r.children.length : -1) + a; d > -1 && d < r.children.length;) {
                                    if ((i = e(r.children[d], d, h)())[0] === c) return i;
                                    d = "number" === typeof i[1] ? i[1] : d + a
                                }
                            return m
                        }
                    }(e, null, [])()
            }
            s.CONTINUE = true, s.SKIP = u, s.EXIT = c
        },
        80734: function(e, t, n) {
            "use strict";
            var r = n(75432);

            function i() {}
            e.exports = u, i.prototype = Error.prototype, u.prototype = new i;
            var o = u.prototype;

            function u(e, t, n) {
                var i, o, u;
                "string" === typeof t && (n = t, t = null), i = function(e) {
                    var t, n = [null, null];
                    "string" === typeof e && (-1 === (t = e.indexOf(":")) ? n[1] = e : (n[0] = e.slice(0, t), n[1] = e.slice(t + 1)));
                    return n
                }(n), o = r(t) || "1:1", u = {
                    start: {
                        line: null,
                        column: null
                    },
                    end: {
                        line: null,
                        column: null
                    }
                }, t && t.position && (t = t.position), t && (t.start ? (u = t, t = t.start) : u.start = t), e.stack && (this.stack = e.stack, e = e.message), this.message = e, this.name = o, this.reason = e, this.line = t ? t.line : null, this.column = t ? t.column : null, this.location = u, this.source = i[0], this.ruleId = i[1]
            }
            o.file = "", o.name = "", o.reason = "", o.message = "", o.stack = "", o.fatal = null, o.column = null, o.line = null
        },
        10939: function(e, t, n) {
            "use strict";
            e.exports = n(65905)
        },
        45442: function(e, t, n) {
            "use strict";
            var r = n(28064),
                i = n(54228),
                o = n(70529);
            e.exports = s;
            var u = {}.hasOwnProperty,
                c = ["history", "path", "basename", "stem", "extname", "dirname"];

            function s(e) {
                var t, n;
                if (e) {
                    if ("string" === typeof e || o(e)) e = {
                        contents: e
                    };
                    else if ("message" in e && "messages" in e) return e
                } else e = {};
                if (!(this instanceof s)) return new s(e);
                for (this.data = {}, this.messages = [], this.history = [], this.cwd = i.cwd(), n = -1; ++n < c.length;) t = c[n], u.call(e, t) && (this[t] = e[t]);
                for (t in e) c.indexOf(t) < 0 && (this[t] = e[t])
            }

            function a(e, t) {
                if (e && e.indexOf(r.sep) > -1) throw new Error("`" + t + "` cannot be a path: did not expect `" + r.sep + "`")
            }

            function l(e, t) {
                if (!e) throw new Error("`" + t + "` cannot be empty")
            }

            function f(e, t) {
                if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too")
            }
            s.prototype.toString = function(e) {
                return (this.contents || "").toString(e)
            }, Object.defineProperty(s.prototype, "path", {
                get: function() {
                    return this.history[this.history.length - 1]
                },
                set: function(e) {
                    l(e, "path"), this.path !== e && this.history.push(e)
                }
            }), Object.defineProperty(s.prototype, "dirname", {
                get: function() {
                    return "string" === typeof this.path ? r.dirname(this.path) : void 0
                },
                set: function(e) {
                    f(this.path, "dirname"), this.path = r.join(e || "", this.basename)
                }
            }), Object.defineProperty(s.prototype, "basename", {
                get: function() {
                    return "string" === typeof this.path ? r.basename(this.path) : void 0
                },
                set: function(e) {
                    l(e, "basename"), a(e, "basename"), this.path = r.join(this.dirname || "", e)
                }
            }), Object.defineProperty(s.prototype, "extname", {
                get: function() {
                    return "string" === typeof this.path ? r.extname(this.path) : void 0
                },
                set: function(e) {
                    if (a(e, "extname"), f(this.path, "extname"), e) {
                        if (46 !== e.charCodeAt(0)) throw new Error("`extname` must start with `.`");
                        if (e.indexOf(".", 1) > -1) throw new Error("`extname` cannot contain multiple dots")
                    }
                    this.path = r.join(this.dirname, this.stem + (e || ""))
                }
            }), Object.defineProperty(s.prototype, "stem", {
                get: function() {
                    return "string" === typeof this.path ? r.basename(this.path, this.extname) : void 0
                },
                set: function(e) {
                    l(e, "stem"), a(e, "stem"), this.path = r.join(this.dirname || "", e + (this.extname || ""))
                }
            })
        },
        65905: function(e, t, n) {
            "use strict";
            var r = n(80734),
                i = n(45442);
            e.exports = i, i.prototype.message = function(e, t, n) {
                var i = new r(e, t, n);
                this.path && (i.name = this.path + ":" + i.name, i.file = this.path);
                return i.fatal = !1, this.messages.push(i), i
            }, i.prototype.info = function() {
                var e = this.message.apply(this, arguments);
                return e.fatal = null, e
            }, i.prototype.fail = function() {
                var e = this.message.apply(this, arguments);
                throw e.fatal = !0, e
            }
        },
        28064: function(e, t) {
            "use strict";

            function n(e) {
                var t, n;
                return r(e), t = 47 === e.charCodeAt(0), (n = function(e, t) {
                    var n, r, i = "",
                        o = 0,
                        u = -1,
                        c = 0,
                        s = -1;
                    for (; ++s <= e.length;) {
                        if (s < e.length) n = e.charCodeAt(s);
                        else {
                            if (47 === n) break;
                            n = 47
                        }
                        if (47 === n) {
                            if (u === s - 1 || 1 === c);
                            else if (u !== s - 1 && 2 === c) {
                                if (i.length < 2 || 2 !== o || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2))
                                    if (i.length > 2) {
                                        if ((r = i.lastIndexOf("/")) !== i.length - 1) {
                                            r < 0 ? (i = "", o = 0) : o = (i = i.slice(0, r)).length - 1 - i.lastIndexOf("/"), u = s, c = 0;
                                            continue
                                        }
                                    } else if (i.length) {
                                    i = "", o = 0, u = s, c = 0;
                                    continue
                                }
                                t && (i = i.length ? i + "/.." : "..", o = 2)
                            } else i.length ? i += "/" + e.slice(u + 1, s) : i = e.slice(u + 1, s), o = s - u - 1;
                            u = s, c = 0
                        } else 46 === n && c > -1 ? c++ : c = -1
                    }
                    return i
                }(e, !t)).length || t || (n = "."), n.length && 47 === e.charCodeAt(e.length - 1) && (n += "/"), t ? "/" + n : n
            }

            function r(e) {
                if ("string" !== typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
            }
            t.basename = function(e, t) {
                var n, i, o, u, c = 0,
                    s = -1;
                if (void 0 !== t && "string" !== typeof t) throw new TypeError('"ext" argument must be a string');
                if (r(e), n = e.length, void 0 === t || !t.length || t.length > e.length) {
                    for (; n--;)
                        if (47 === e.charCodeAt(n)) {
                            if (o) {
                                c = n + 1;
                                break
                            }
                        } else s < 0 && (o = !0, s = n + 1);
                    return s < 0 ? "" : e.slice(c, s)
                }
                if (t === e) return "";
                i = -1, u = t.length - 1;
                for (; n--;)
                    if (47 === e.charCodeAt(n)) {
                        if (o) {
                            c = n + 1;
                            break
                        }
                    } else i < 0 && (o = !0, i = n + 1), u > -1 && (e.charCodeAt(n) === t.charCodeAt(u--) ? u < 0 && (s = n) : (u = -1, s = i));
                c === s ? s = i : s < 0 && (s = e.length);
                return e.slice(c, s)
            }, t.dirname = function(e) {
                var t, n, i;
                if (r(e), !e.length) return ".";
                t = -1, i = e.length;
                for (; --i;)
                    if (47 === e.charCodeAt(i)) {
                        if (n) {
                            t = i;
                            break
                        }
                    } else n || (n = !0);
                return t < 0 ? 47 === e.charCodeAt(0) ? "/" : "." : 1 === t && 47 === e.charCodeAt(0) ? "//" : e.slice(0, t)
            }, t.extname = function(e) {
                var t, n, i, o = -1,
                    u = 0,
                    c = -1,
                    s = 0;
                r(e), i = e.length;
                for (; i--;)
                    if (47 !== (n = e.charCodeAt(i))) c < 0 && (t = !0, c = i + 1), 46 === n ? o < 0 ? o = i : 1 !== s && (s = 1) : o > -1 && (s = -1);
                    else if (t) {
                    u = i + 1;
                    break
                }
                if (o < 0 || c < 0 || 0 === s || 1 === s && o === c - 1 && o === u + 1) return "";
                return e.slice(o, c)
            }, t.join = function() {
                var e, t = -1;
                for (; ++t < arguments.length;) r(arguments[t]), arguments[t] && (e = void 0 === e ? arguments[t] : e + "/" + arguments[t]);
                return void 0 === e ? "." : n(e)
            }, t.sep = "/"
        },
        54228: function(e, t) {
            "use strict";
            t.cwd = function() {
                return "/"
            }
        },
        70529: function(e) {
            e.exports = function(e) {
                return null != e && null != e.constructor && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            }
        },
        47529: function(e) {
            e.exports = function() {
                for (var e = {}, n = 0; n < arguments.length; n++) {
                    var r = arguments[n];
                    for (var i in r) t.call(r, i) && (e[i] = r[i])
                }
                return e
            };
            var t = Object.prototype.hasOwnProperty
        }
    }
]);
//# sourceMappingURL=724-4ff5846de7a15398d6f4.js.map