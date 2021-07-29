(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6870], {
        63349: function(e, t, n) {
            "use strict";

            function r(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        6610: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        77608: function(e, t, n) {
            "use strict";

            function r(e) {
                return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        10379: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(14665);

            function i(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (0, r.Z)(e, t)
            }
        },
        54153: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(96156);

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? Object(arguments[t]) : {},
                        i = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), i.forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    }))
                }
                return e
            }
        },
        81253: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(19756);

            function i(e, t) {
                if (null == e) return {};
                var n, i, a = (0, r.Z)(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
        },
        46070: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var r = n(90484),
                i = n(63349);

            function a(e, t) {
                return !t || "object" !== (0, r.Z)(t) && "function" !== typeof t ? (0, i.Z)(e) : t
            }
        },
        90484: function(e, t, n) {
            "use strict";

            function r(e) {
                return (r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        8131: function(e, t, n) {
            "use strict";
            var r = n(49374),
                i = n(17775),
                a = n(23076);

            function s(e, t, n) {
                return new r(e, t, n)
            }
            s.version = n(24336), s.AlgoliaSearchHelper = r, s.SearchParameters = i, s.SearchResults = a, e.exports = s
        },
        60696: function(e) {
            function t() {
                this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
            }

            function n(e) {
                return "function" === typeof e
            }

            function r(e) {
                return "object" === typeof e && null !== e
            }

            function i(e) {
                return void 0 === e
            }
            e.exports = t, t.EventEmitter = t, t.prototype._events = void 0, t.prototype._maxListeners = void 0, t.defaultMaxListeners = 10, t.prototype.setMaxListeners = function(e) {
                if ("number" !== typeof e || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
                return this._maxListeners = e, this
            }, t.prototype.emit = function(e) {
                var t, a, s, c, o, u;
                if (this._events || (this._events = {}), "error" === e && (!this._events.error || r(this._events.error) && !this._events.error.length)) {
                    if ((t = arguments[1]) instanceof Error) throw t;
                    var f = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                    throw f.context = t, f
                }
                if (i(a = this._events[e])) return !1;
                if (n(a)) switch (arguments.length) {
                    case 1:
                        a.call(this);
                        break;
                    case 2:
                        a.call(this, arguments[1]);
                        break;
                    case 3:
                        a.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        c = Array.prototype.slice.call(arguments, 1), a.apply(this, c)
                } else if (r(a))
                    for (c = Array.prototype.slice.call(arguments, 1), s = (u = a.slice()).length, o = 0; o < s; o++) u[o].apply(this, c);
                return !0
            }, t.prototype.addListener = function(e, a) {
                var s;
                if (!n(a)) throw TypeError("listener must be a function");
                return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, n(a.listener) ? a.listener : a), this._events[e] ? r(this._events[e]) ? this._events[e].push(a) : this._events[e] = [this._events[e], a] : this._events[e] = a, r(this._events[e]) && !this._events[e].warned && (s = i(this._maxListeners) ? t.defaultMaxListeners : this._maxListeners) && s > 0 && this._events[e].length > s && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" === typeof console.trace && console.trace()), this
            }, t.prototype.on = t.prototype.addListener, t.prototype.once = function(e, t) {
                if (!n(t)) throw TypeError("listener must be a function");
                var r = !1;

                function i() {
                    this.removeListener(e, i), r || (r = !0, t.apply(this, arguments))
                }
                return i.listener = t, this.on(e, i), this
            }, t.prototype.removeListener = function(e, t) {
                var i, a, s, c;
                if (!n(t)) throw TypeError("listener must be a function");
                if (!this._events || !this._events[e]) return this;
                if (s = (i = this._events[e]).length, a = -1, i === t || n(i.listener) && i.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
                else if (r(i)) {
                    for (c = s; c-- > 0;)
                        if (i[c] === t || i[c].listener && i[c].listener === t) {
                            a = c;
                            break
                        }
                    if (a < 0) return this;
                    1 === i.length ? (i.length = 0, delete this._events[e]) : i.splice(a, 1), this._events.removeListener && this.emit("removeListener", e, t)
                }
                return this
            }, t.prototype.removeAllListeners = function(e) {
                var t, r;
                if (!this._events) return this;
                if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
                if (0 === arguments.length) {
                    for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                    return this.removeAllListeners("removeListener"), this._events = {}, this
                }
                if (n(r = this._events[e])) this.removeListener(e, r);
                else if (r)
                    for (; r.length;) this.removeListener(e, r[r.length - 1]);
                return delete this._events[e], this
            }, t.prototype.listeners = function(e) {
                return this._events && this._events[e] ? n(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
            }, t.prototype.listenerCount = function(e) {
                if (this._events) {
                    var t = this._events[e];
                    if (n(t)) return 1;
                    if (t) return t.length
                }
                return 0
            }, t.listenerCount = function(e, t) {
                return e.listenerCount(t)
            }
        },
        68078: function(e, t, n) {
            "use strict";
            var r = n(60696);

            function i(e, t) {
                this.main = e, this.fn = t, this.lastResults = null
            }
            n(14853)(i, r.EventEmitter), i.prototype.detach = function() {
                this.removeAllListeners(), this.main.detachDerivedHelper(this)
            }, i.prototype.getModifiedState = function(e) {
                return this.fn(e)
            }, e.exports = i
        },
        82437: function(e, t, n) {
            "use strict";
            var r = n(43336),
                i = n(49803),
                a = n(90116),
                s = {
                    addRefinement: function(e, t, n) {
                        if (s.isRefined(e, t, n)) return e;
                        var i = "" + n,
                            a = e[t] ? e[t].concat(i) : [i],
                            c = {};
                        return c[t] = a, r({}, c, e)
                    },
                    removeRefinement: function(e, t, n) {
                        if (void 0 === n) return s.clearRefinement(e, (function(e, n) {
                            return t === n
                        }));
                        var r = "" + n;
                        return s.clearRefinement(e, (function(e, n) {
                            return t === n && r === e
                        }))
                    },
                    toggleRefinement: function(e, t, n) {
                        if (void 0 === n) throw new Error("toggleRefinement should be used with a value");
                        return s.isRefined(e, t, n) ? s.removeRefinement(e, t, n) : s.addRefinement(e, t, n)
                    },
                    clearRefinement: function(e, t, n) {
                        if (void 0 === t) return a(e) ? {} : e;
                        if ("string" === typeof t) return i(e, [t]);
                        if ("function" === typeof t) {
                            var r = !1,
                                s = Object.keys(e).reduce((function(i, a) {
                                    var s = e[a] || [],
                                        c = s.filter((function(e) {
                                            return !t(e, a, n)
                                        }));
                                    return c.length !== s.length && (r = !0), i[a] = c, i
                                }), {});
                            return r ? s : e
                        }
                    },
                    isRefined: function(e, t, n) {
                        var r = !!e[t] && e[t].length > 0;
                        if (void 0 === n || !r) return r;
                        var i = "" + n;
                        return -1 !== e[t].indexOf(i)
                    }
                };
            e.exports = s
        },
        17775: function(e, t, n) {
            "use strict";
            var r = n(60185),
                i = n(43336),
                a = n(22686),
                s = n(7888),
                c = n(28023),
                o = n(49803),
                u = n(90116),
                f = n(46801),
                h = n(82437);

            function l(e, t) {
                return Array.isArray(e) && Array.isArray(t) ? e.length === t.length && e.every((function(e, n) {
                    return l(t[n], e)
                })) : e === t
            }

            function d(e) {
                var t = e ? d._parseNumbers(e) : {};
                void 0 === t.userToken || f(t.userToken) || console.warn("[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}"), this.facets = t.facets || [], this.disjunctiveFacets = t.disjunctiveFacets || [], this.hierarchicalFacets = t.hierarchicalFacets || [], this.facetsRefinements = t.facetsRefinements || {}, this.facetsExcludes = t.facetsExcludes || {}, this.disjunctiveFacetsRefinements = t.disjunctiveFacetsRefinements || {}, this.numericRefinements = t.numericRefinements || {}, this.tagRefinements = t.tagRefinements || [], this.hierarchicalFacetsRefinements = t.hierarchicalFacetsRefinements || {};
                var n = this;
                Object.keys(t).forEach((function(e) {
                    var r = -1 !== d.PARAMETERS.indexOf(e),
                        i = void 0 !== t[e];
                    !r && i && (n[e] = t[e])
                }))
            }
            d.PARAMETERS = Object.keys(new d), d._parseNumbers = function(e) {
                if (e instanceof d) return e;
                var t = {};
                if (["aroundPrecision", "aroundRadius", "getRankingInfo", "minWordSizefor2Typos", "minWordSizefor1Typo", "page", "maxValuesPerFacet", "distinct", "minimumAroundRadius", "hitsPerPage", "minProximity"].forEach((function(n) {
                        var r = e[n];
                        if ("string" === typeof r) {
                            var i = parseFloat(r);
                            t[n] = isNaN(i) ? r : i
                        }
                    })), Array.isArray(e.insideBoundingBox) && (t.insideBoundingBox = e.insideBoundingBox.map((function(e) {
                        return Array.isArray(e) ? e.map((function(e) {
                            return parseFloat(e)
                        })) : e
                    }))), e.numericRefinements) {
                    var n = {};
                    Object.keys(e.numericRefinements).forEach((function(t) {
                        var r = e.numericRefinements[t] || {};
                        n[t] = {}, Object.keys(r).forEach((function(e) {
                            var i = r[e].map((function(e) {
                                return Array.isArray(e) ? e.map((function(e) {
                                    return "string" === typeof e ? parseFloat(e) : e
                                })) : "string" === typeof e ? parseFloat(e) : e
                            }));
                            n[t][e] = i
                        }))
                    })), t.numericRefinements = n
                }
                return r({}, e, t)
            }, d.make = function(e) {
                var t = new d(e);
                return (e.hierarchicalFacets || []).forEach((function(e) {
                    if (e.rootPath) {
                        var n = t.getHierarchicalRefinement(e.name);
                        n.length > 0 && 0 !== n[0].indexOf(e.rootPath) && (t = t.clearRefinements(e.name)), 0 === (n = t.getHierarchicalRefinement(e.name)).length && (t = t.toggleHierarchicalFacetRefinement(e.name, e.rootPath))
                    }
                })), t
            }, d.validate = function(e, t) {
                var n = t || {};
                return e.tagFilters && n.tagRefinements && n.tagRefinements.length > 0 ? new Error("[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method.") : e.tagRefinements.length > 0 && n.tagFilters ? new Error("[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method.") : e.numericFilters && n.numericRefinements && u(n.numericRefinements) ? new Error("[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters.") : u(e.numericRefinements) && n.numericFilters ? new Error("[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters.") : null
            }, d.prototype = {
                constructor: d,
                clearRefinements: function(e) {
                    var t = {
                        numericRefinements: this._clearNumericRefinements(e),
                        facetsRefinements: h.clearRefinement(this.facetsRefinements, e, "conjunctiveFacet"),
                        facetsExcludes: h.clearRefinement(this.facetsExcludes, e, "exclude"),
                        disjunctiveFacetsRefinements: h.clearRefinement(this.disjunctiveFacetsRefinements, e, "disjunctiveFacet"),
                        hierarchicalFacetsRefinements: h.clearRefinement(this.hierarchicalFacetsRefinements, e, "hierarchicalFacet")
                    };
                    return t.numericRefinements === this.numericRefinements && t.facetsRefinements === this.facetsRefinements && t.facetsExcludes === this.facetsExcludes && t.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements && t.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements ? this : this.setQueryParameters(t)
                },
                clearTags: function() {
                    return void 0 === this.tagFilters && 0 === this.tagRefinements.length ? this : this.setQueryParameters({
                        tagFilters: void 0,
                        tagRefinements: []
                    })
                },
                setIndex: function(e) {
                    return e === this.index ? this : this.setQueryParameters({
                        index: e
                    })
                },
                setQuery: function(e) {
                    return e === this.query ? this : this.setQueryParameters({
                        query: e
                    })
                },
                setPage: function(e) {
                    return e === this.page ? this : this.setQueryParameters({
                        page: e
                    })
                },
                setFacets: function(e) {
                    return this.setQueryParameters({
                        facets: e
                    })
                },
                setDisjunctiveFacets: function(e) {
                    return this.setQueryParameters({
                        disjunctiveFacets: e
                    })
                },
                setHitsPerPage: function(e) {
                    return this.hitsPerPage === e ? this : this.setQueryParameters({
                        hitsPerPage: e
                    })
                },
                setTypoTolerance: function(e) {
                    return this.typoTolerance === e ? this : this.setQueryParameters({
                        typoTolerance: e
                    })
                },
                addNumericRefinement: function(e, t, n) {
                    var i = c(n);
                    if (this.isNumericRefined(e, t, i)) return this;
                    var a = r({}, this.numericRefinements);
                    return a[e] = r({}, a[e]), a[e][t] ? (a[e][t] = a[e][t].slice(), a[e][t].push(i)) : a[e][t] = [i], this.setQueryParameters({
                        numericRefinements: a
                    })
                },
                getConjunctiveRefinements: function(e) {
                    return this.isConjunctiveFacet(e) && this.facetsRefinements[e] || []
                },
                getDisjunctiveRefinements: function(e) {
                    return this.isDisjunctiveFacet(e) && this.disjunctiveFacetsRefinements[e] || []
                },
                getHierarchicalRefinement: function(e) {
                    return this.hierarchicalFacetsRefinements[e] || []
                },
                getExcludeRefinements: function(e) {
                    return this.isConjunctiveFacet(e) && this.facetsExcludes[e] || []
                },
                removeNumericRefinement: function(e, t, n) {
                    return void 0 !== n ? this.isNumericRefined(e, t, n) ? this.setQueryParameters({
                        numericRefinements: this._clearNumericRefinements((function(r, i) {
                            return i === e && r.op === t && l(r.val, c(n))
                        }))
                    }) : this : void 0 !== t ? this.isNumericRefined(e, t) ? this.setQueryParameters({
                        numericRefinements: this._clearNumericRefinements((function(n, r) {
                            return r === e && n.op === t
                        }))
                    }) : this : this.isNumericRefined(e) ? this.setQueryParameters({
                        numericRefinements: this._clearNumericRefinements((function(t, n) {
                            return n === e
                        }))
                    }) : this
                },
                getNumericRefinements: function(e) {
                    return this.numericRefinements[e] || {}
                },
                getNumericRefinement: function(e, t) {
                    return this.numericRefinements[e] && this.numericRefinements[e][t]
                },
                _clearNumericRefinements: function(e) {
                    if (void 0 === e) return u(this.numericRefinements) ? {} : this.numericRefinements;
                    if ("string" === typeof e) return o(this.numericRefinements, [e]);
                    if ("function" === typeof e) {
                        var t = !1,
                            n = this.numericRefinements,
                            r = Object.keys(n).reduce((function(r, i) {
                                var a = n[i],
                                    s = {};
                                return a = a || {}, Object.keys(a).forEach((function(n) {
                                    var r = a[n] || [],
                                        c = [];
                                    r.forEach((function(t) {
                                        e({
                                            val: t,
                                            op: n
                                        }, i, "numeric") || c.push(t)
                                    })), c.length !== r.length && (t = !0), s[n] = c
                                })), r[i] = s, r
                            }), {});
                        return t ? r : this.numericRefinements
                    }
                },
                addFacet: function(e) {
                    return this.isConjunctiveFacet(e) ? this : this.setQueryParameters({
                        facets: this.facets.concat([e])
                    })
                },
                addDisjunctiveFacet: function(e) {
                    return this.isDisjunctiveFacet(e) ? this : this.setQueryParameters({
                        disjunctiveFacets: this.disjunctiveFacets.concat([e])
                    })
                },
                addHierarchicalFacet: function(e) {
                    if (this.isHierarchicalFacet(e.name)) throw new Error("Cannot declare two hierarchical facets with the same name: `" + e.name + "`");
                    return this.setQueryParameters({
                        hierarchicalFacets: this.hierarchicalFacets.concat([e])
                    })
                },
                addFacetRefinement: function(e, t) {
                    if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                    return h.isRefined(this.facetsRefinements, e, t) ? this : this.setQueryParameters({
                        facetsRefinements: h.addRefinement(this.facetsRefinements, e, t)
                    })
                },
                addExcludeRefinement: function(e, t) {
                    if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                    return h.isRefined(this.facetsExcludes, e, t) ? this : this.setQueryParameters({
                        facetsExcludes: h.addRefinement(this.facetsExcludes, e, t)
                    })
                },
                addDisjunctiveFacetRefinement: function(e, t) {
                    if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
                    return h.isRefined(this.disjunctiveFacetsRefinements, e, t) ? this : this.setQueryParameters({
                        disjunctiveFacetsRefinements: h.addRefinement(this.disjunctiveFacetsRefinements, e, t)
                    })
                },
                addTagRefinement: function(e) {
                    if (this.isTagRefined(e)) return this;
                    var t = {
                        tagRefinements: this.tagRefinements.concat(e)
                    };
                    return this.setQueryParameters(t)
                },
                removeFacet: function(e) {
                    return this.isConjunctiveFacet(e) ? this.clearRefinements(e).setQueryParameters({
                        facets: this.facets.filter((function(t) {
                            return t !== e
                        }))
                    }) : this
                },
                removeDisjunctiveFacet: function(e) {
                    return this.isDisjunctiveFacet(e) ? this.clearRefinements(e).setQueryParameters({
                        disjunctiveFacets: this.disjunctiveFacets.filter((function(t) {
                            return t !== e
                        }))
                    }) : this
                },
                removeHierarchicalFacet: function(e) {
                    return this.isHierarchicalFacet(e) ? this.clearRefinements(e).setQueryParameters({
                        hierarchicalFacets: this.hierarchicalFacets.filter((function(t) {
                            return t.name !== e
                        }))
                    }) : this
                },
                removeFacetRefinement: function(e, t) {
                    if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                    return h.isRefined(this.facetsRefinements, e, t) ? this.setQueryParameters({
                        facetsRefinements: h.removeRefinement(this.facetsRefinements, e, t)
                    }) : this
                },
                removeExcludeRefinement: function(e, t) {
                    if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                    return h.isRefined(this.facetsExcludes, e, t) ? this.setQueryParameters({
                        facetsExcludes: h.removeRefinement(this.facetsExcludes, e, t)
                    }) : this
                },
                removeDisjunctiveFacetRefinement: function(e, t) {
                    if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
                    return h.isRefined(this.disjunctiveFacetsRefinements, e, t) ? this.setQueryParameters({
                        disjunctiveFacetsRefinements: h.removeRefinement(this.disjunctiveFacetsRefinements, e, t)
                    }) : this
                },
                removeTagRefinement: function(e) {
                    if (!this.isTagRefined(e)) return this;
                    var t = {
                        tagRefinements: this.tagRefinements.filter((function(t) {
                            return t !== e
                        }))
                    };
                    return this.setQueryParameters(t)
                },
                toggleRefinement: function(e, t) {
                    return this.toggleFacetRefinement(e, t)
                },
                toggleFacetRefinement: function(e, t) {
                    if (this.isHierarchicalFacet(e)) return this.toggleHierarchicalFacetRefinement(e, t);
                    if (this.isConjunctiveFacet(e)) return this.toggleConjunctiveFacetRefinement(e, t);
                    if (this.isDisjunctiveFacet(e)) return this.toggleDisjunctiveFacetRefinement(e, t);
                    throw new Error("Cannot refine the undeclared facet " + e + "; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets")
                },
                toggleConjunctiveFacetRefinement: function(e, t) {
                    if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                    return this.setQueryParameters({
                        facetsRefinements: h.toggleRefinement(this.facetsRefinements, e, t)
                    })
                },
                toggleExcludeFacetRefinement: function(e, t) {
                    if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                    return this.setQueryParameters({
                        facetsExcludes: h.toggleRefinement(this.facetsExcludes, e, t)
                    })
                },
                toggleDisjunctiveFacetRefinement: function(e, t) {
                    if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
                    return this.setQueryParameters({
                        disjunctiveFacetsRefinements: h.toggleRefinement(this.disjunctiveFacetsRefinements, e, t)
                    })
                },
                toggleHierarchicalFacetRefinement: function(e, t) {
                    if (!this.isHierarchicalFacet(e)) throw new Error(e + " is not defined in the hierarchicalFacets attribute of the helper configuration");
                    var n = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e)),
                        r = {};
                    return void 0 !== this.hierarchicalFacetsRefinements[e] && this.hierarchicalFacetsRefinements[e].length > 0 && (this.hierarchicalFacetsRefinements[e][0] === t || 0 === this.hierarchicalFacetsRefinements[e][0].indexOf(t + n)) ? -1 === t.indexOf(n) ? r[e] = [] : r[e] = [t.slice(0, t.lastIndexOf(n))] : r[e] = [t], this.setQueryParameters({
                        hierarchicalFacetsRefinements: i({}, r, this.hierarchicalFacetsRefinements)
                    })
                },
                addHierarchicalFacetRefinement: function(e, t) {
                    if (this.isHierarchicalFacetRefined(e)) throw new Error(e + " is already refined.");
                    if (!this.isHierarchicalFacet(e)) throw new Error(e + " is not defined in the hierarchicalFacets attribute of the helper configuration.");
                    var n = {};
                    return n[e] = [t], this.setQueryParameters({
                        hierarchicalFacetsRefinements: i({}, n, this.hierarchicalFacetsRefinements)
                    })
                },
                removeHierarchicalFacetRefinement: function(e) {
                    if (!this.isHierarchicalFacetRefined(e)) return this;
                    var t = {};
                    return t[e] = [], this.setQueryParameters({
                        hierarchicalFacetsRefinements: i({}, t, this.hierarchicalFacetsRefinements)
                    })
                },
                toggleTagRefinement: function(e) {
                    return this.isTagRefined(e) ? this.removeTagRefinement(e) : this.addTagRefinement(e)
                },
                isDisjunctiveFacet: function(e) {
                    return this.disjunctiveFacets.indexOf(e) > -1
                },
                isHierarchicalFacet: function(e) {
                    return void 0 !== this.getHierarchicalFacetByName(e)
                },
                isConjunctiveFacet: function(e) {
                    return this.facets.indexOf(e) > -1
                },
                isFacetRefined: function(e, t) {
                    return !!this.isConjunctiveFacet(e) && h.isRefined(this.facetsRefinements, e, t)
                },
                isExcludeRefined: function(e, t) {
                    return !!this.isConjunctiveFacet(e) && h.isRefined(this.facetsExcludes, e, t)
                },
                isDisjunctiveFacetRefined: function(e, t) {
                    return !!this.isDisjunctiveFacet(e) && h.isRefined(this.disjunctiveFacetsRefinements, e, t)
                },
                isHierarchicalFacetRefined: function(e, t) {
                    if (!this.isHierarchicalFacet(e)) return !1;
                    var n = this.getHierarchicalRefinement(e);
                    return t ? -1 !== n.indexOf(t) : n.length > 0
                },
                isNumericRefined: function(e, t, n) {
                    if (void 0 === n && void 0 === t) return !!this.numericRefinements[e];
                    var r = this.numericRefinements[e] && void 0 !== this.numericRefinements[e][t];
                    if (void 0 === n || !r) return r;
                    var i, a, o = c(n),
                        u = void 0 !== (i = this.numericRefinements[e][t], a = o, s(i, (function(e) {
                            return l(e, a)
                        })));
                    return r && u
                },
                isTagRefined: function(e) {
                    return -1 !== this.tagRefinements.indexOf(e)
                },
                getRefinedDisjunctiveFacets: function() {
                    var e = this,
                        t = a(Object.keys(this.numericRefinements).filter((function(t) {
                            return Object.keys(e.numericRefinements[t]).length > 0
                        })), this.disjunctiveFacets);
                    return Object.keys(this.disjunctiveFacetsRefinements).filter((function(t) {
                        return e.disjunctiveFacetsRefinements[t].length > 0
                    })).concat(t).concat(this.getRefinedHierarchicalFacets())
                },
                getRefinedHierarchicalFacets: function() {
                    var e = this;
                    return a(this.hierarchicalFacets.map((function(e) {
                        return e.name
                    })), Object.keys(this.hierarchicalFacetsRefinements).filter((function(t) {
                        return e.hierarchicalFacetsRefinements[t].length > 0
                    })))
                },
                getUnrefinedDisjunctiveFacets: function() {
                    var e = this.getRefinedDisjunctiveFacets();
                    return this.disjunctiveFacets.filter((function(t) {
                        return -1 === e.indexOf(t)
                    }))
                },
                managedParameters: ["index", "facets", "disjunctiveFacets", "facetsRefinements", "facetsExcludes", "disjunctiveFacetsRefinements", "numericRefinements", "tagRefinements", "hierarchicalFacets", "hierarchicalFacetsRefinements"],
                getQueryParams: function() {
                    var e = this.managedParameters,
                        t = {},
                        n = this;
                    return Object.keys(this).forEach((function(r) {
                        var i = n[r]; - 1 === e.indexOf(r) && void 0 !== i && (t[r] = i)
                    })), t
                },
                setQueryParameter: function(e, t) {
                    if (this[e] === t) return this;
                    var n = {};
                    return n[e] = t, this.setQueryParameters(n)
                },
                setQueryParameters: function(e) {
                    if (!e) return this;
                    var t = d.validate(this, e);
                    if (t) throw t;
                    var n = this,
                        r = d._parseNumbers(e),
                        i = Object.keys(this).reduce((function(e, t) {
                            return e[t] = n[t], e
                        }), {}),
                        a = Object.keys(r).reduce((function(e, t) {
                            var n = void 0 !== e[t],
                                i = void 0 !== r[t];
                            return n && !i ? o(e, [t]) : (i && (e[t] = r[t]), e)
                        }), i);
                    return new this.constructor(a)
                },
                resetPage: function() {
                    return void 0 === this.page ? this : this.setPage(0)
                },
                _getHierarchicalFacetSortBy: function(e) {
                    return e.sortBy || ["isRefined:desc", "name:asc"]
                },
                _getHierarchicalFacetSeparator: function(e) {
                    return e.separator || " > "
                },
                _getHierarchicalRootPath: function(e) {
                    return e.rootPath || null
                },
                _getHierarchicalShowParentLevel: function(e) {
                    return "boolean" !== typeof e.showParentLevel || e.showParentLevel
                },
                getHierarchicalFacetByName: function(e) {
                    return s(this.hierarchicalFacets, (function(t) {
                        return t.name === e
                    }))
                },
                getHierarchicalFacetBreadcrumb: function(e) {
                    if (!this.isHierarchicalFacet(e)) return [];
                    var t = this.getHierarchicalRefinement(e)[0];
                    if (!t) return [];
                    var n = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e));
                    return t.split(n).map((function(e) {
                        return e.trim()
                    }))
                },
                toString: function() {
                    return JSON.stringify(this, null, 2)
                }
            }, e.exports = d
        },
        10210: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return function(t, n) {
                    var s = e.hierarchicalFacets[n],
                        c = e.hierarchicalFacetsRefinements[s.name] && e.hierarchicalFacetsRefinements[s.name][0] || "",
                        o = e._getHierarchicalFacetSeparator(s),
                        u = e._getHierarchicalRootPath(s),
                        f = e._getHierarchicalShowParentLevel(s),
                        h = a(e._getHierarchicalFacetSortBy(s)),
                        l = t.every((function(e) {
                            return e.exhaustive
                        })),
                        d = function(e, t, n, a, s) {
                            return function(c, o, u) {
                                var f = c;
                                if (u > 0) {
                                    var h = 0;
                                    for (f = c; h < u;) {
                                        var l = f && Array.isArray(f.data) ? f.data : [];
                                        f = i(l, (function(e) {
                                            return e.isRefined
                                        })), h++
                                    }
                                }
                                if (f) {
                                    var d = Object.keys(o.data).map((function(e) {
                                        return [e, o.data[e]]
                                    })).filter((function(e) {
                                        return function(e, t, n, r, i, a) {
                                            if (i && (0 !== e.indexOf(i) || i === e)) return !1;
                                            return !i && -1 === e.indexOf(r) || i && e.split(r).length - i.split(r).length === 1 || -1 === e.indexOf(r) && -1 === n.indexOf(r) || 0 === n.indexOf(e) || 0 === e.indexOf(t + r) && (a || 0 === e.indexOf(n))
                                        }(e[0], f.path || n, s, t, n, a)
                                    }));
                                    f.data = r(d.map((function(e) {
                                        var n = e[0];
                                        return function(e, t, n, r, i) {
                                            var a = t.split(n);
                                            return {
                                                name: a[a.length - 1].trim(),
                                                path: t,
                                                count: e,
                                                isRefined: r === t || 0 === r.indexOf(t + n),
                                                exhaustive: i,
                                                data: null
                                            }
                                        }(e[1], n, t, s, o.exhaustive)
                                    })), e[0], e[1])
                                }
                                return c
                            }
                        }(h, o, u, f, c),
                        p = t;
                    return u && (p = t.slice(u.split(o).length)), p.reduce(d, {
                        name: e.hierarchicalFacets[n].name,
                        count: null,
                        isRefined: !0,
                        path: null,
                        exhaustive: l,
                        data: null
                    })
                }
            };
            var r = n(42148),
                i = n(7888),
                a = n(82293)
        },
        23076: function(e, t, n) {
            "use strict";
            var r = n(60185),
                i = n(43336),
                a = n(42148),
                s = n(74587),
                c = n(7888),
                o = n(69725),
                u = n(82293),
                f = n(10210);

            function h(e) {
                var t = {};
                return e.forEach((function(e, n) {
                    t[e] = n
                })), t
            }

            function l(e, t, n) {
                t && t[n] && (e.stats = t[n])
            }

            function d(e, t) {
                var n = t[0];
                this._rawResults = t;
                var a = this;
                Object.keys(n).forEach((function(e) {
                    a[e] = n[e]
                })), this.processingTimeMS = t.reduce((function(e, t) {
                    return void 0 === t.processingTimeMS ? e : e + t.processingTimeMS
                }), 0), this.disjunctiveFacets = [], this.hierarchicalFacets = e.hierarchicalFacets.map((function() {
                    return []
                })), this.facets = [];
                var u = e.getRefinedDisjunctiveFacets(),
                    d = h(e.facets),
                    p = h(e.disjunctiveFacets),
                    m = 1,
                    v = n.facets || {};
                Object.keys(v).forEach((function(t) {
                    var r, i, s = v[t],
                        u = (r = e.hierarchicalFacets, i = t, c(r, (function(e) {
                            return (e.attributes || []).indexOf(i) > -1
                        })));
                    if (u) {
                        var f = u.attributes.indexOf(t),
                            h = o(e.hierarchicalFacets, (function(e) {
                                return e.name === u.name
                            }));
                        a.hierarchicalFacets[h][f] = {
                            attribute: t,
                            data: s,
                            exhaustive: n.exhaustiveFacetsCount
                        }
                    } else {
                        var m, g = -1 !== e.disjunctiveFacets.indexOf(t),
                            y = -1 !== e.facets.indexOf(t);
                        g && (m = p[t], a.disjunctiveFacets[m] = {
                            name: t,
                            data: s,
                            exhaustive: n.exhaustiveFacetsCount
                        }, l(a.disjunctiveFacets[m], n.facets_stats, t)), y && (m = d[t], a.facets[m] = {
                            name: t,
                            data: s,
                            exhaustive: n.exhaustiveFacetsCount
                        }, l(a.facets[m], n.facets_stats, t))
                    }
                })), this.hierarchicalFacets = s(this.hierarchicalFacets), u.forEach((function(s) {
                    var c = t[m],
                        u = c && c.facets ? c.facets : {},
                        f = e.getHierarchicalFacetByName(s);
                    Object.keys(u).forEach((function(t) {
                        var s, h = u[t];
                        if (f) {
                            s = o(e.hierarchicalFacets, (function(e) {
                                return e.name === f.name
                            }));
                            var d = o(a.hierarchicalFacets[s], (function(e) {
                                return e.attribute === t
                            }));
                            if (-1 === d) return;
                            a.hierarchicalFacets[s][d].data = r({}, a.hierarchicalFacets[s][d].data, h)
                        } else {
                            s = p[t];
                            var m = n.facets && n.facets[t] || {};
                            a.disjunctiveFacets[s] = {
                                name: t,
                                data: i({}, h, m),
                                exhaustive: c.exhaustiveFacetsCount
                            }, l(a.disjunctiveFacets[s], c.facets_stats, t), e.disjunctiveFacetsRefinements[t] && e.disjunctiveFacetsRefinements[t].forEach((function(n) {
                                !a.disjunctiveFacets[s].data[n] && e.disjunctiveFacetsRefinements[t].indexOf(n) > -1 && (a.disjunctiveFacets[s].data[n] = 0)
                            }))
                        }
                    })), m++
                })), e.getRefinedHierarchicalFacets().forEach((function(n) {
                    var r = e.getHierarchicalFacetByName(n),
                        s = e._getHierarchicalFacetSeparator(r),
                        c = e.getHierarchicalRefinement(n);
                    if (!(0 === c.length || c[0].split(s).length < 2)) {
                        var u = t[m],
                            f = u && u.facets ? u.facets : {};
                        Object.keys(f).forEach((function(t) {
                            var n = f[t],
                                u = o(e.hierarchicalFacets, (function(e) {
                                    return e.name === r.name
                                })),
                                h = o(a.hierarchicalFacets[u], (function(e) {
                                    return e.attribute === t
                                }));
                            if (-1 !== h) {
                                var l = {};
                                if (c.length > 0) {
                                    var d = c[0].split(s)[0];
                                    l[d] = a.hierarchicalFacets[u][h].data[d]
                                }
                                a.hierarchicalFacets[u][h].data = i(l, n, a.hierarchicalFacets[u][h].data)
                            }
                        })), m++
                    }
                })), Object.keys(e.facetsExcludes).forEach((function(t) {
                    var r = e.facetsExcludes[t],
                        i = d[t];
                    a.facets[i] = {
                        name: t,
                        data: n.facets[t],
                        exhaustive: n.exhaustiveFacetsCount
                    }, r.forEach((function(e) {
                        a.facets[i] = a.facets[i] || {
                            name: t
                        }, a.facets[i].data = a.facets[i].data || {}, a.facets[i].data[e] = 0
                    }))
                })), this.hierarchicalFacets = this.hierarchicalFacets.map(f(e)), this.facets = s(this.facets), this.disjunctiveFacets = s(this.disjunctiveFacets), this._state = e
            }

            function p(e, t, n, r) {
                if (r = r || 0, Array.isArray(t)) return e(t, n[r]);
                if (!t.data || 0 === t.data.length) return t;
                var a = t.data.map((function(t) {
                        return p(e, t, n, r + 1)
                    })),
                    s = e(a, n[r]);
                return i({
                    data: s
                }, t)
            }

            function m(e, t) {
                var n = c(e, (function(e) {
                    return e.name === t
                }));
                return n && n.stats
            }

            function v(e, t, n, r, i) {
                var a = c(i, (function(e) {
                        return e.name === n
                    })),
                    s = a && a.data && a.data[r] ? a.data[r] : 0,
                    o = a && a.exhaustive || !1;
                return {
                    type: t,
                    attributeName: n,
                    name: r,
                    count: s,
                    exhaustive: o
                }
            }
            d.prototype.getFacetByName = function(e) {
                function t(t) {
                    return t.name === e
                }
                return c(this.facets, t) || c(this.disjunctiveFacets, t) || c(this.hierarchicalFacets, t)
            }, d.DEFAULT_SORT = ["isRefined:desc", "count:desc", "name:asc"], d.prototype.getFacetValues = function(e, t) {
                var n = function(e, t) {
                    function n(e) {
                        return e.name === t
                    }
                    if (e._state.isConjunctiveFacet(t)) {
                        var r = c(e.facets, n);
                        return r ? Object.keys(r.data).map((function(n) {
                            return {
                                name: n,
                                count: r.data[n],
                                isRefined: e._state.isFacetRefined(t, n),
                                isExcluded: e._state.isExcludeRefined(t, n)
                            }
                        })) : []
                    }
                    if (e._state.isDisjunctiveFacet(t)) {
                        var i = c(e.disjunctiveFacets, n);
                        return i ? Object.keys(i.data).map((function(n) {
                            return {
                                name: n,
                                count: i.data[n],
                                isRefined: e._state.isDisjunctiveFacetRefined(t, n)
                            }
                        })) : []
                    }
                    if (e._state.isHierarchicalFacet(t)) return c(e.hierarchicalFacets, n)
                }(this, e);
                if (n) {
                    var r, s = i({}, t, {
                            sortBy: d.DEFAULT_SORT,
                            facetOrdering: !(t && t.sortBy)
                        }),
                        o = this;
                    if (Array.isArray(n)) r = [e];
                    else r = o._state.getHierarchicalFacetByName(n.name).attributes;
                    return p((function(e, t) {
                        if (s.facetOrdering) {
                            var n = function(e, t) {
                                return e.renderingContent && e.renderingContent.facetOrdering && e.renderingContent.facetOrdering.values && e.renderingContent.facetOrdering.values[t]
                            }(o, t);
                            if (Boolean(n)) return function(e, t) {
                                var n = [],
                                    r = [],
                                    i = (t.order || []).reduce((function(e, t, n) {
                                        return e[t] = n, e
                                    }), {});
                                e.forEach((function(e) {
                                    var t = e.path || e.name;
                                    void 0 !== i[t] ? n[i[t]] = e : r.push(e)
                                }));
                                var s, c = t.sortRemainingBy;
                                return "hidden" === c ? n : (s = "alpha" === c ? [
                                    ["path", "name"],
                                    ["asc", "asc"]
                                ] : [
                                    ["count"],
                                    ["desc"]
                                ], n.concat(a(r, s[0], s[1])))
                            }(e, n)
                        }
                        if (Array.isArray(s.sortBy)) {
                            var r = u(s.sortBy, d.DEFAULT_SORT);
                            return a(e, r[0], r[1])
                        }
                        if ("function" === typeof s.sortBy) return function(e, t) {
                            return t.sort(e)
                        }(s.sortBy, e);
                        throw new Error("options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function")
                    }), n, r)
                }
            }, d.prototype.getFacetStats = function(e) {
                return this._state.isConjunctiveFacet(e) ? m(this.facets, e) : this._state.isDisjunctiveFacet(e) ? m(this.disjunctiveFacets, e) : void 0
            }, d.prototype.getRefinements = function() {
                var e = this._state,
                    t = this,
                    n = [];
                return Object.keys(e.facetsRefinements).forEach((function(r) {
                    e.facetsRefinements[r].forEach((function(i) {
                        n.push(v(e, "facet", r, i, t.facets))
                    }))
                })), Object.keys(e.facetsExcludes).forEach((function(r) {
                    e.facetsExcludes[r].forEach((function(i) {
                        n.push(v(e, "exclude", r, i, t.facets))
                    }))
                })), Object.keys(e.disjunctiveFacetsRefinements).forEach((function(r) {
                    e.disjunctiveFacetsRefinements[r].forEach((function(i) {
                        n.push(v(e, "disjunctive", r, i, t.disjunctiveFacets))
                    }))
                })), Object.keys(e.hierarchicalFacetsRefinements).forEach((function(r) {
                    e.hierarchicalFacetsRefinements[r].forEach((function(i) {
                        n.push(function(e, t, n, r) {
                            var i = e.getHierarchicalFacetByName(t),
                                a = e._getHierarchicalFacetSeparator(i),
                                s = n.split(a),
                                o = c(r, (function(e) {
                                    return e.name === t
                                })),
                                u = s.reduce((function(e, t) {
                                    var n = e && c(e.data, (function(e) {
                                        return e.name === t
                                    }));
                                    return void 0 !== n ? n : e
                                }), o),
                                f = u && u.count || 0,
                                h = u && u.exhaustive || !1,
                                l = u && u.path || "";
                            return {
                                type: "hierarchical",
                                attributeName: t,
                                name: l,
                                count: f,
                                exhaustive: h
                            }
                        }(e, r, i, t.hierarchicalFacets))
                    }))
                })), Object.keys(e.numericRefinements).forEach((function(t) {
                    var r = e.numericRefinements[t];
                    Object.keys(r).forEach((function(e) {
                        r[e].forEach((function(r) {
                            n.push({
                                type: "numeric",
                                attributeName: t,
                                name: r,
                                numericValue: r,
                                operator: e
                            })
                        }))
                    }))
                })), e.tagRefinements.forEach((function(e) {
                    n.push({
                        type: "tag",
                        attributeName: "_tags",
                        name: e
                    })
                })), n
            }, e.exports = d
        },
        49374: function(e, t, n) {
            "use strict";
            var r = n(17775),
                i = n(23076),
                a = n(68078),
                s = n(96394),
                c = n(60696),
                o = n(14853),
                u = n(90116),
                f = n(49803),
                h = n(60185),
                l = n(24336);

            function d(e, t, n) {
                "function" === typeof e.addAlgoliaAgent && e.addAlgoliaAgent("JS Helper (" + l + ")"), this.setClient(e);
                var i = n || {};
                i.index = t, this.state = r.make(i), this.lastResults = null, this._queryId = 0, this._lastQueryIdReceived = -1, this.derivedHelpers = [], this._currentNbQueries = 0
            }

            function p(e) {
                if (e < 0) throw new Error("Page requested below 0.");
                return this._change({
                    state: this.state.setPage(e),
                    isPageReset: !1
                }), this
            }

            function m() {
                return this.state.page
            }
            o(d, c.EventEmitter), d.prototype.search = function() {
                return this._search({
                    onlyWithDerivedHelpers: !1
                }), this
            }, d.prototype.searchOnlyWithDerivedHelpers = function() {
                return this._search({
                    onlyWithDerivedHelpers: !0
                }), this
            }, d.prototype.getQuery = function() {
                var e = this.state;
                return s._getHitsSearchParams(e)
            }, d.prototype.searchOnce = function(e, t) {
                var n = e ? this.state.setQueryParameters(e) : this.state,
                    r = s._getQueries(n.index, n),
                    a = this;
                if (this._currentNbQueries++, this.emit("searchOnce", {
                        state: n
                    }), !t) return this.client.search(r).then((function(e) {
                    return a._currentNbQueries--, 0 === a._currentNbQueries && a.emit("searchQueueEmpty"), {
                        content: new i(n, e.results),
                        state: n,
                        _originalResponse: e
                    }
                }), (function(e) {
                    throw a._currentNbQueries--, 0 === a._currentNbQueries && a.emit("searchQueueEmpty"), e
                }));
                this.client.search(r).then((function(e) {
                    a._currentNbQueries--, 0 === a._currentNbQueries && a.emit("searchQueueEmpty"), t(null, new i(n, e.results), n)
                })).catch((function(e) {
                    a._currentNbQueries--, 0 === a._currentNbQueries && a.emit("searchQueueEmpty"), t(e, null, n)
                }))
            }, d.prototype.findAnswers = function(e) {
                var t = this.state,
                    n = this.derivedHelpers[0];
                if (!n) return Promise.resolve([]);
                var r = n.getModifiedState(t),
                    i = h({
                        attributesForPrediction: e.attributesForPrediction,
                        nbHits: e.nbHits
                    }, {
                        params: f(s._getHitsSearchParams(r), ["attributesToSnippet", "hitsPerPage", "restrictSearchableAttributes", "snippetEllipsisText"])
                    }),
                    a = "search for answers was called, but this client does not have a function client.initIndex(index).findAnswers";
                if ("function" !== typeof this.client.initIndex) throw new Error(a);
                var c = this.client.initIndex(r.index);
                if ("function" !== typeof c.findAnswers) throw new Error(a);
                return c.findAnswers(r.query, e.queryLanguages, i)
            }, d.prototype.searchForFacetValues = function(e, t, n, r) {
                var i = "function" === typeof this.client.searchForFacetValues;
                if (!i && "function" !== typeof this.client.initIndex) throw new Error("search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues");
                var a = this.state.setQueryParameters(r || {}),
                    c = a.isDisjunctiveFacet(e),
                    o = s.getSearchForFacetQuery(e, t, n, a);
                this._currentNbQueries++;
                var u = this;
                return this.emit("searchForFacetValues", {
                    state: a,
                    facet: e,
                    query: t
                }), (i ? this.client.searchForFacetValues([{
                    indexName: a.index,
                    params: o
                }]) : this.client.initIndex(a.index).searchForFacetValues(o)).then((function(t) {
                    return u._currentNbQueries--, 0 === u._currentNbQueries && u.emit("searchQueueEmpty"), (t = Array.isArray(t) ? t[0] : t).facetHits.forEach((function(t) {
                        t.isRefined = c ? a.isDisjunctiveFacetRefined(e, t.value) : a.isFacetRefined(e, t.value)
                    })), t
                }), (function(e) {
                    throw u._currentNbQueries--, 0 === u._currentNbQueries && u.emit("searchQueueEmpty"), e
                }))
            }, d.prototype.setQuery = function(e) {
                return this._change({
                    state: this.state.resetPage().setQuery(e),
                    isPageReset: !0
                }), this
            }, d.prototype.clearRefinements = function(e) {
                return this._change({
                    state: this.state.resetPage().clearRefinements(e),
                    isPageReset: !0
                }), this
            }, d.prototype.clearTags = function() {
                return this._change({
                    state: this.state.resetPage().clearTags(),
                    isPageReset: !0
                }), this
            }, d.prototype.addDisjunctiveFacetRefinement = function(e, t) {
                return this._change({
                    state: this.state.resetPage().addDisjunctiveFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.addDisjunctiveRefine = function() {
                return this.addDisjunctiveFacetRefinement.apply(this, arguments)
            }, d.prototype.addHierarchicalFacetRefinement = function(e, t) {
                return this._change({
                    state: this.state.resetPage().addHierarchicalFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.addNumericRefinement = function(e, t, n) {
                return this._change({
                    state: this.state.resetPage().addNumericRefinement(e, t, n),
                    isPageReset: !0
                }), this
            }, d.prototype.addFacetRefinement = function(e, t) {
                return this._change({
                    state: this.state.resetPage().addFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.addRefine = function() {
                return this.addFacetRefinement.apply(this, arguments)
            }, d.prototype.addFacetExclusion = function(e, t) {
                return this._change({
                    state: this.state.resetPage().addExcludeRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.addExclude = function() {
                return this.addFacetExclusion.apply(this, arguments)
            }, d.prototype.addTag = function(e) {
                return this._change({
                    state: this.state.resetPage().addTagRefinement(e),
                    isPageReset: !0
                }), this
            }, d.prototype.removeNumericRefinement = function(e, t, n) {
                return this._change({
                    state: this.state.resetPage().removeNumericRefinement(e, t, n),
                    isPageReset: !0
                }), this
            }, d.prototype.removeDisjunctiveFacetRefinement = function(e, t) {
                return this._change({
                    state: this.state.resetPage().removeDisjunctiveFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.removeDisjunctiveRefine = function() {
                return this.removeDisjunctiveFacetRefinement.apply(this, arguments)
            }, d.prototype.removeHierarchicalFacetRefinement = function(e) {
                return this._change({
                    state: this.state.resetPage().removeHierarchicalFacetRefinement(e),
                    isPageReset: !0
                }), this
            }, d.prototype.removeFacetRefinement = function(e, t) {
                return this._change({
                    state: this.state.resetPage().removeFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.removeRefine = function() {
                return this.removeFacetRefinement.apply(this, arguments)
            }, d.prototype.removeFacetExclusion = function(e, t) {
                return this._change({
                    state: this.state.resetPage().removeExcludeRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.removeExclude = function() {
                return this.removeFacetExclusion.apply(this, arguments)
            }, d.prototype.removeTag = function(e) {
                return this._change({
                    state: this.state.resetPage().removeTagRefinement(e),
                    isPageReset: !0
                }), this
            }, d.prototype.toggleFacetExclusion = function(e, t) {
                return this._change({
                    state: this.state.resetPage().toggleExcludeFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.toggleExclude = function() {
                return this.toggleFacetExclusion.apply(this, arguments)
            }, d.prototype.toggleRefinement = function(e, t) {
                return this.toggleFacetRefinement(e, t)
            }, d.prototype.toggleFacetRefinement = function(e, t) {
                return this._change({
                    state: this.state.resetPage().toggleFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.toggleRefine = function() {
                return this.toggleFacetRefinement.apply(this, arguments)
            }, d.prototype.toggleTag = function(e) {
                return this._change({
                    state: this.state.resetPage().toggleTagRefinement(e),
                    isPageReset: !0
                }), this
            }, d.prototype.nextPage = function() {
                var e = this.state.page || 0;
                return this.setPage(e + 1)
            }, d.prototype.previousPage = function() {
                var e = this.state.page || 0;
                return this.setPage(e - 1)
            }, d.prototype.setCurrentPage = p, d.prototype.setPage = p, d.prototype.setIndex = function(e) {
                return this._change({
                    state: this.state.resetPage().setIndex(e),
                    isPageReset: !0
                }), this
            }, d.prototype.setQueryParameter = function(e, t) {
                return this._change({
                    state: this.state.resetPage().setQueryParameter(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.setState = function(e) {
                return this._change({
                    state: r.make(e),
                    isPageReset: !1
                }), this
            }, d.prototype.overrideStateWithoutTriggeringChangeEvent = function(e) {
                return this.state = new r(e), this
            }, d.prototype.hasRefinements = function(e) {
                return !!u(this.state.getNumericRefinements(e)) || (this.state.isConjunctiveFacet(e) ? this.state.isFacetRefined(e) : this.state.isDisjunctiveFacet(e) ? this.state.isDisjunctiveFacetRefined(e) : !!this.state.isHierarchicalFacet(e) && this.state.isHierarchicalFacetRefined(e))
            }, d.prototype.isExcluded = function(e, t) {
                return this.state.isExcludeRefined(e, t)
            }, d.prototype.isDisjunctiveRefined = function(e, t) {
                return this.state.isDisjunctiveFacetRefined(e, t)
            }, d.prototype.hasTag = function(e) {
                return this.state.isTagRefined(e)
            }, d.prototype.isTagRefined = function() {
                return this.hasTagRefinements.apply(this, arguments)
            }, d.prototype.getIndex = function() {
                return this.state.index
            }, d.prototype.getCurrentPage = m, d.prototype.getPage = m, d.prototype.getTags = function() {
                return this.state.tagRefinements
            }, d.prototype.getRefinements = function(e) {
                var t = [];
                if (this.state.isConjunctiveFacet(e)) this.state.getConjunctiveRefinements(e).forEach((function(e) {
                    t.push({
                        value: e,
                        type: "conjunctive"
                    })
                })), this.state.getExcludeRefinements(e).forEach((function(e) {
                    t.push({
                        value: e,
                        type: "exclude"
                    })
                }));
                else if (this.state.isDisjunctiveFacet(e)) {
                    this.state.getDisjunctiveRefinements(e).forEach((function(e) {
                        t.push({
                            value: e,
                            type: "disjunctive"
                        })
                    }))
                }
                var n = this.state.getNumericRefinements(e);
                return Object.keys(n).forEach((function(e) {
                    var r = n[e];
                    t.push({
                        value: r,
                        operator: e,
                        type: "numeric"
                    })
                })), t
            }, d.prototype.getNumericRefinement = function(e, t) {
                return this.state.getNumericRefinement(e, t)
            }, d.prototype.getHierarchicalFacetBreadcrumb = function(e) {
                return this.state.getHierarchicalFacetBreadcrumb(e)
            }, d.prototype._search = function(e) {
                var t = this.state,
                    n = [],
                    r = [];
                e.onlyWithDerivedHelpers || (r = s._getQueries(t.index, t), n.push({
                    state: t,
                    queriesCount: r.length,
                    helper: this
                }), this.emit("search", {
                    state: t,
                    results: this.lastResults
                }));
                var i = this.derivedHelpers.map((function(e) {
                        var r = e.getModifiedState(t),
                            i = s._getQueries(r.index, r);
                        return n.push({
                            state: r,
                            queriesCount: i.length,
                            helper: e
                        }), e.emit("search", {
                            state: r,
                            results: e.lastResults
                        }), i
                    })),
                    a = Array.prototype.concat.apply(r, i),
                    c = this._queryId++;
                this._currentNbQueries++;
                try {
                    this.client.search(a).then(this._dispatchAlgoliaResponse.bind(this, n, c)).catch(this._dispatchAlgoliaError.bind(this, c))
                } catch (o) {
                    this.emit("error", {
                        error: o
                    })
                }
            }, d.prototype._dispatchAlgoliaResponse = function(e, t, n) {
                if (!(t < this._lastQueryIdReceived)) {
                    this._currentNbQueries -= t - this._lastQueryIdReceived, this._lastQueryIdReceived = t, 0 === this._currentNbQueries && this.emit("searchQueueEmpty");
                    var r = n.results.slice();
                    e.forEach((function(e) {
                        var t = e.state,
                            n = e.queriesCount,
                            a = e.helper,
                            s = r.splice(0, n),
                            c = a.lastResults = new i(t, s);
                        a.emit("result", {
                            results: c,
                            state: t
                        })
                    }))
                }
            }, d.prototype._dispatchAlgoliaError = function(e, t) {
                e < this._lastQueryIdReceived || (this._currentNbQueries -= e - this._lastQueryIdReceived, this._lastQueryIdReceived = e, this.emit("error", {
                    error: t
                }), 0 === this._currentNbQueries && this.emit("searchQueueEmpty"))
            }, d.prototype.containsRefinement = function(e, t, n, r) {
                return e || 0 !== t.length || 0 !== n.length || 0 !== r.length
            }, d.prototype._hasDisjunctiveRefinements = function(e) {
                return this.state.disjunctiveRefinements[e] && this.state.disjunctiveRefinements[e].length > 0
            }, d.prototype._change = function(e) {
                var t = e.state,
                    n = e.isPageReset;
                t !== this.state && (this.state = t, this.emit("change", {
                    state: this.state,
                    results: this.lastResults,
                    isPageReset: n
                }))
            }, d.prototype.clearCache = function() {
                return this.client.clearCache && this.client.clearCache(), this
            }, d.prototype.setClient = function(e) {
                return this.client === e || ("function" === typeof e.addAlgoliaAgent && e.addAlgoliaAgent("JS Helper (" + l + ")"), this.client = e), this
            }, d.prototype.getClient = function() {
                return this.client
            }, d.prototype.derive = function(e) {
                var t = new a(this, e);
                return this.derivedHelpers.push(t), t
            }, d.prototype.detachDerivedHelper = function(e) {
                var t = this.derivedHelpers.indexOf(e);
                if (-1 === t) throw new Error("Derived helper already detached");
                this.derivedHelpers.splice(t, 1)
            }, d.prototype.hasPendingRequests = function() {
                return this._currentNbQueries > 0
            }, e.exports = d
        },
        74587: function(e) {
            "use strict";
            e.exports = function(e) {
                return Array.isArray(e) ? e.filter(Boolean) : []
            }
        },
        43336: function(e) {
            "use strict";
            e.exports = function() {
                var e = Array.prototype.slice.call(arguments);
                return e.reduceRight((function(e, t) {
                    return Object.keys(Object(t)).forEach((function(n) {
                        void 0 !== t[n] && (void 0 !== e[n] && delete e[n], e[n] = t[n])
                    })), e
                }), {})
            }
        },
        7888: function(e) {
            "use strict";
            e.exports = function(e, t) {
                if (Array.isArray(e))
                    for (var n = 0; n < e.length; n++)
                        if (t(e[n])) return e[n]
            }
        },
        69725: function(e) {
            "use strict";
            e.exports = function(e, t) {
                if (!Array.isArray(e)) return -1;
                for (var n = 0; n < e.length; n++)
                    if (t(e[n])) return n;
                return -1
            }
        },
        82293: function(e, t, n) {
            "use strict";
            var r = n(7888);
            e.exports = function(e, t) {
                var n = (t || []).map((function(e) {
                    return e.split(":")
                }));
                return e.reduce((function(e, t) {
                    var i = t.split(":"),
                        a = r(n, (function(e) {
                            return e[0] === i[0]
                        }));
                    return i.length > 1 || !a ? (e[0].push(i[0]), e[1].push(i[1]), e) : (e[0].push(a[0]), e[1].push(a[1]), e)
                }), [
                    [],
                    []
                ])
            }
        },
        14853: function(e) {
            "use strict";
            e.exports = function(e, t) {
                e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            }
        },
        22686: function(e) {
            "use strict";
            e.exports = function(e, t) {
                return e.filter((function(n, r) {
                    return t.indexOf(n) > -1 && e.indexOf(n) === r
                }))
            }
        },
        60185: function(e) {
            "use strict";

            function t(e) {
                return "function" === typeof e || Array.isArray(e) || "[object Object]" === Object.prototype.toString.call(e)
            }

            function n(e, r) {
                if (e === r) return e;
                for (var i in r)
                    if (Object.prototype.hasOwnProperty.call(r, i)) {
                        var a = r[i],
                            s = e[i];
                        "undefined" !== typeof s && "undefined" === typeof a || (t(s) && t(a) ? e[i] = n(s, a) : e[i] = "object" === typeof(c = a) && null !== c ? n(Array.isArray(c) ? [] : {}, c) : c)
                    }
                var c;
                return e
            }
            e.exports = function(e) {
                t(e) || (e = {});
                for (var r = 1, i = arguments.length; r < i; r++) {
                    var a = arguments[r];
                    t(a) && n(e, a)
                }
                return e
            }
        },
        90116: function(e) {
            "use strict";
            e.exports = function(e) {
                return e && Object.keys(e).length > 0
            }
        },
        49803: function(e) {
            "use strict";
            e.exports = function(e, t) {
                if (null === e) return {};
                var n, r, i = {},
                    a = Object.keys(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }
        },
        42148: function(e) {
            "use strict";

            function t(e, t) {
                if (e !== t) {
                    var n = void 0 !== e,
                        r = null === e,
                        i = void 0 !== t,
                        a = null === t;
                    if (!a && e > t || r && i || !n) return 1;
                    if (!r && e < t || a && n || !i) return -1
                }
                return 0
            }
            e.exports = function(e, n, r) {
                if (!Array.isArray(e)) return [];
                Array.isArray(r) || (r = []);
                var i = e.map((function(e, t) {
                    return {
                        criteria: n.map((function(t) {
                            return e[t]
                        })),
                        index: t,
                        value: e
                    }
                }));
                return i.sort((function(e, n) {
                    for (var i = -1; ++i < e.criteria.length;) {
                        var a = t(e.criteria[i], n.criteria[i]);
                        if (a) return i >= r.length ? a : "desc" === r[i] ? -a : a
                    }
                    return e.index - n.index
                })), i.map((function(e) {
                    return e.value
                }))
            }
        },
        28023: function(e) {
            "use strict";
            e.exports = function e(t) {
                if ("number" === typeof t) return t;
                if ("string" === typeof t) return parseFloat(t);
                if (Array.isArray(t)) return t.map(e);
                throw new Error("The value should be a number, a parsable string or an array of those.")
            }
        },
        96394: function(e, t, n) {
            "use strict";
            var r = n(60185),
                i = {
                    _getQueries: function(e, t) {
                        var n = [];
                        return n.push({
                            indexName: e,
                            params: i._getHitsSearchParams(t)
                        }), t.getRefinedDisjunctiveFacets().forEach((function(r) {
                            n.push({
                                indexName: e,
                                params: i._getDisjunctiveFacetSearchParams(t, r)
                            })
                        })), t.getRefinedHierarchicalFacets().forEach((function(r) {
                            var a = t.getHierarchicalFacetByName(r),
                                s = t.getHierarchicalRefinement(r),
                                c = t._getHierarchicalFacetSeparator(a);
                            s.length > 0 && s[0].split(c).length > 1 && n.push({
                                indexName: e,
                                params: i._getDisjunctiveFacetSearchParams(t, r, !0)
                            })
                        })), n
                    },
                    _getHitsSearchParams: function(e) {
                        var t = e.facets.concat(e.disjunctiveFacets).concat(i._getHitsHierarchicalFacetsAttributes(e)),
                            n = i._getFacetFilters(e),
                            a = i._getNumericFilters(e),
                            s = {
                                facets: t,
                                tagFilters: i._getTagFilters(e)
                            };
                        return n.length > 0 && (s.facetFilters = n), a.length > 0 && (s.numericFilters = a), r({}, e.getQueryParams(), s)
                    },
                    _getDisjunctiveFacetSearchParams: function(e, t, n) {
                        var a = i._getFacetFilters(e, t, n),
                            s = i._getNumericFilters(e, t),
                            c = {
                                hitsPerPage: 1,
                                page: 0,
                                attributesToRetrieve: [],
                                attributesToHighlight: [],
                                attributesToSnippet: [],
                                tagFilters: i._getTagFilters(e),
                                analytics: !1,
                                clickAnalytics: !1
                            },
                            o = e.getHierarchicalFacetByName(t);
                        return c.facets = o ? i._getDisjunctiveHierarchicalFacetAttribute(e, o, n) : t, s.length > 0 && (c.numericFilters = s), a.length > 0 && (c.facetFilters = a), r({}, e.getQueryParams(), c)
                    },
                    _getNumericFilters: function(e, t) {
                        if (e.numericFilters) return e.numericFilters;
                        var n = [];
                        return Object.keys(e.numericRefinements).forEach((function(r) {
                            var i = e.numericRefinements[r] || {};
                            Object.keys(i).forEach((function(e) {
                                var a = i[e] || [];
                                t !== r && a.forEach((function(t) {
                                    if (Array.isArray(t)) {
                                        var i = t.map((function(t) {
                                            return r + e + t
                                        }));
                                        n.push(i)
                                    } else n.push(r + e + t)
                                }))
                            }))
                        })), n
                    },
                    _getTagFilters: function(e) {
                        return e.tagFilters ? e.tagFilters : e.tagRefinements.join(",")
                    },
                    _getFacetFilters: function(e, t, n) {
                        var r = [],
                            i = e.facetsRefinements || {};
                        Object.keys(i).forEach((function(e) {
                            (i[e] || []).forEach((function(t) {
                                r.push(e + ":" + t)
                            }))
                        }));
                        var a = e.facetsExcludes || {};
                        Object.keys(a).forEach((function(e) {
                            (a[e] || []).forEach((function(t) {
                                r.push(e + ":-" + t)
                            }))
                        }));
                        var s = e.disjunctiveFacetsRefinements || {};
                        Object.keys(s).forEach((function(e) {
                            var n = s[e] || [];
                            if (e !== t && n && 0 !== n.length) {
                                var i = [];
                                n.forEach((function(t) {
                                    i.push(e + ":" + t)
                                })), r.push(i)
                            }
                        }));
                        var c = e.hierarchicalFacetsRefinements || {};
                        return Object.keys(c).forEach((function(i) {
                            var a = (c[i] || [])[0];
                            if (void 0 !== a) {
                                var s, o, u = e.getHierarchicalFacetByName(i),
                                    f = e._getHierarchicalFacetSeparator(u),
                                    h = e._getHierarchicalRootPath(u);
                                if (t === i) {
                                    if (-1 === a.indexOf(f) || !h && !0 === n || h && h.split(f).length === a.split(f).length) return;
                                    h ? (o = h.split(f).length - 1, a = h) : (o = a.split(f).length - 2, a = a.slice(0, a.lastIndexOf(f))), s = u.attributes[o]
                                } else o = a.split(f).length - 1, s = u.attributes[o];
                                s && r.push([s + ":" + a])
                            }
                        })), r
                    },
                    _getHitsHierarchicalFacetsAttributes: function(e) {
                        return e.hierarchicalFacets.reduce((function(t, n) {
                            var r = e.getHierarchicalRefinement(n.name)[0];
                            if (!r) return t.push(n.attributes[0]), t;
                            var i = e._getHierarchicalFacetSeparator(n),
                                a = r.split(i).length,
                                s = n.attributes.slice(0, a + 1);
                            return t.concat(s)
                        }), [])
                    },
                    _getDisjunctiveHierarchicalFacetAttribute: function(e, t, n) {
                        var r = e._getHierarchicalFacetSeparator(t);
                        if (!0 === n) {
                            var i = e._getHierarchicalRootPath(t),
                                a = 0;
                            return i && (a = i.split(r).length), [t.attributes[a]]
                        }
                        var s = (e.getHierarchicalRefinement(t.name)[0] || "").split(r).length - 1;
                        return t.attributes.slice(0, s + 1)
                    },
                    getSearchForFacetQuery: function(e, t, n, a) {
                        var s = a.isDisjunctiveFacet(e) ? a.clearRefinements(e) : a,
                            c = {
                                facetQuery: t,
                                facetName: e
                            };
                        return "number" === typeof n && (c.maxFacetHits = n), r({}, i._getHitsSearchParams(s), c)
                    }
                };
            e.exports = i
        },
        46801: function(e) {
            "use strict";
            e.exports = function(e) {
                return null !== e && /^[a-zA-Z0-9_-]{1,64}$/.test(e)
            }
        },
        24336: function(e) {
            "use strict";
            e.exports = "3.5.4"
        },
        70290: function(e) {
            e.exports = function() {
                "use strict";

                function e(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function t(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function n(n) {
                    for (var r = 1; r < arguments.length; r++) {
                        var i = null != arguments[r] ? arguments[r] : {};
                        r % 2 ? t(Object(i), !0).forEach((function(t) {
                            e(n, t, i[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : t(Object(i)).forEach((function(e) {
                            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return n
                }

                function r(e, t) {
                    if (null == e) return {};
                    var n, r, i = function(e, t) {
                        if (null == e) return {};
                        var n, r, i = {},
                            a = Object.keys(e);
                        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                    return i
                }

                function i(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                            var n = [],
                                r = !0,
                                i = !1,
                                a = void 0;
                            try {
                                for (var s, c = e[Symbol.iterator](); !(r = (s = c.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                            } catch (e) {
                                i = !0, a = e
                            } finally {
                                try {
                                    r || null == c.return || c.return()
                                } finally {
                                    if (i) throw a
                                }
                            }
                            return n
                        }
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }()
                }

                function a(e) {
                    return function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                            return n
                        }
                    }(e) || function(e) {
                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance")
                    }()
                }

                function s(e) {
                    var t, n = "algoliasearch-client-js-".concat(e.key),
                        r = function() {
                            return void 0 === t && (t = e.localStorage || window.localStorage), t
                        },
                        a = function() {
                            return JSON.parse(r().getItem(n) || "{}")
                        };
                    return {
                        get: function(e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                miss: function() {
                                    return Promise.resolve()
                                }
                            };
                            return Promise.resolve().then((function() {
                                var n = JSON.stringify(e),
                                    r = a()[n];
                                return Promise.all([r || t(), void 0 !== r])
                            })).then((function(e) {
                                var t = i(e, 2),
                                    r = t[0],
                                    a = t[1];
                                return Promise.all([r, a || n.miss(r)])
                            })).then((function(e) {
                                return i(e, 1)[0]
                            }))
                        },
                        set: function(e, t) {
                            return Promise.resolve().then((function() {
                                var i = a();
                                return i[JSON.stringify(e)] = t, r().setItem(n, JSON.stringify(i)), t
                            }))
                        },
                        delete: function(e) {
                            return Promise.resolve().then((function() {
                                var t = a();
                                delete t[JSON.stringify(e)], r().setItem(n, JSON.stringify(t))
                            }))
                        },
                        clear: function() {
                            return Promise.resolve().then((function() {
                                r().removeItem(n)
                            }))
                        }
                    }
                }

                function c(e) {
                    var t = a(e.caches),
                        n = t.shift();
                    return void 0 === n ? {
                        get: function(e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                miss: function() {
                                    return Promise.resolve()
                                }
                            };
                            return t().then((function(e) {
                                return Promise.all([e, n.miss(e)])
                            })).then((function(e) {
                                return i(e, 1)[0]
                            }))
                        },
                        set: function(e, t) {
                            return Promise.resolve(t)
                        },
                        delete: function(e) {
                            return Promise.resolve()
                        },
                        clear: function() {
                            return Promise.resolve()
                        }
                    } : {
                        get: function(e, r) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                miss: function() {
                                    return Promise.resolve()
                                }
                            };
                            return n.get(e, r, i).catch((function() {
                                return c({
                                    caches: t
                                }).get(e, r, i)
                            }))
                        },
                        set: function(e, r) {
                            return n.set(e, r).catch((function() {
                                return c({
                                    caches: t
                                }).set(e, r)
                            }))
                        },
                        delete: function(e) {
                            return n.delete(e).catch((function() {
                                return c({
                                    caches: t
                                }).delete(e)
                            }))
                        },
                        clear: function() {
                            return n.clear().catch((function() {
                                return c({
                                    caches: t
                                }).clear()
                            }))
                        }
                    }
                }

                function o() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            serializable: !0
                        },
                        t = {};
                    return {
                        get: function(n, r) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                    miss: function() {
                                        return Promise.resolve()
                                    }
                                },
                                a = JSON.stringify(n);
                            if (a in t) return Promise.resolve(e.serializable ? JSON.parse(t[a]) : t[a]);
                            var s = r(),
                                c = i && i.miss || function() {
                                    return Promise.resolve()
                                };
                            return s.then((function(e) {
                                return c(e)
                            })).then((function() {
                                return s
                            }))
                        },
                        set: function(n, r) {
                            return t[JSON.stringify(n)] = e.serializable ? JSON.stringify(r) : r, Promise.resolve(r)
                        },
                        delete: function(e) {
                            return delete t[JSON.stringify(e)], Promise.resolve()
                        },
                        clear: function() {
                            return t = {}, Promise.resolve()
                        }
                    }
                }

                function u(e) {
                    for (var t = e.length - 1; t > 0; t--) {
                        var n = Math.floor(Math.random() * (t + 1)),
                            r = e[t];
                        e[t] = e[n], e[n] = r
                    }
                    return e
                }

                function f(e, t) {
                    return t ? (Object.keys(t).forEach((function(n) {
                        e[n] = t[n](e)
                    })), e) : e
                }

                function h(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    var i = 0;
                    return e.replace(/%s/g, (function() {
                        return encodeURIComponent(n[i++])
                    }))
                }
                var l = {
                    WithinQueryParameters: 0,
                    WithinHeaders: 1
                };

                function d(e, t) {
                    var n = e || {},
                        r = n.data || {};
                    return Object.keys(n).forEach((function(e) {
                        -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e) && (r[e] = n[e])
                    })), {
                        data: Object.entries(r).length > 0 ? r : void 0,
                        timeout: n.timeout || t,
                        headers: n.headers || {},
                        queryParameters: n.queryParameters || {},
                        cacheable: n.cacheable
                    }
                }
                var p = {
                        Read: 1,
                        Write: 2,
                        Any: 3
                    },
                    m = 1,
                    v = 2,
                    g = 3;

                function y(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m;
                    return n(n({}, e), {}, {
                        status: t,
                        lastUpdate: Date.now()
                    })
                }

                function R(e) {
                    return "string" == typeof e ? {
                        protocol: "https",
                        url: e,
                        accept: p.Any
                    } : {
                        protocol: e.protocol || "https",
                        url: e.url,
                        accept: e.accept || p.Any
                    }
                }
                var F = "GET",
                    x = "POST";

                function b(e, t) {
                    return Promise.all(t.map((function(t) {
                        return e.get(t, (function() {
                            return Promise.resolve(y(t))
                        }))
                    }))).then((function(e) {
                        var n = e.filter((function(e) {
                                return function(e) {
                                    return e.status === m || Date.now() - e.lastUpdate > 12e4
                                }(e)
                            })),
                            r = e.filter((function(e) {
                                return function(e) {
                                    return e.status === g && Date.now() - e.lastUpdate <= 12e4
                                }(e)
                            })),
                            i = [].concat(a(n), a(r));
                        return {
                            getTimeout: function(e, t) {
                                return (0 === r.length && 0 === e ? 1 : r.length + 3 + e) * t
                            },
                            statelessHosts: i.length > 0 ? i.map((function(e) {
                                return R(e)
                            })) : t
                        }
                    }))
                }

                function S(e, t, r, i) {
                    var s = [],
                        c = function(e, t) {
                            if (e.method !== F && (void 0 !== e.data || void 0 !== t.data)) {
                                var r = Array.isArray(e.data) ? e.data : n(n({}, e.data), t.data);
                                return JSON.stringify(r)
                            }
                        }(r, i),
                        o = function(e, t) {
                            var r = n(n({}, e.headers), t.headers),
                                i = {};
                            return Object.keys(r).forEach((function(e) {
                                var t = r[e];
                                i[e.toLowerCase()] = t
                            })), i
                        }(e, i),
                        u = r.method,
                        f = r.method !== F ? {} : n(n({}, r.data), i.data),
                        h = n(n(n({
                            "x-algolia-agent": e.userAgent.value
                        }, e.queryParameters), f), i.queryParameters),
                        l = 0,
                        d = function t(n, a) {
                            var f = n.pop();
                            if (void 0 === f) throw {
                                name: "RetryError",
                                message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
                                transporterStackTrace: O(s)
                            };
                            var d = {
                                    data: c,
                                    headers: o,
                                    method: u,
                                    url: j(f, r.path, h),
                                    connectTimeout: a(l, e.timeouts.connect),
                                    responseTimeout: a(l, i.timeout)
                                },
                                p = function(e) {
                                    var t = {
                                        request: d,
                                        response: e,
                                        host: f,
                                        triesLeft: n.length
                                    };
                                    return s.push(t), t
                                },
                                m = {
                                    onSuccess: function(e) {
                                        return function(e) {
                                            try {
                                                return JSON.parse(e.content)
                                            } catch (t) {
                                                throw function(e, t) {
                                                    return {
                                                        name: "DeserializationError",
                                                        message: e,
                                                        response: t
                                                    }
                                                }(t.message, e)
                                            }
                                        }(e)
                                    },
                                    onRetry: function(r) {
                                        var i = p(r);
                                        return r.isTimedOut && l++, Promise.all([e.logger.info("Retryable failure", _(i)), e.hostsCache.set(f, y(f, r.isTimedOut ? g : v))]).then((function() {
                                            return t(n, a)
                                        }))
                                    },
                                    onFail: function(e) {
                                        throw p(e),
                                            function(e, t) {
                                                var n = e.content,
                                                    r = e.status,
                                                    i = n;
                                                try {
                                                    i = JSON.parse(n).message
                                                } catch (e) {}
                                                return function(e, t, n) {
                                                    return {
                                                        name: "ApiError",
                                                        message: e,
                                                        status: t,
                                                        transporterStackTrace: n
                                                    }
                                                }(i, r, t)
                                            }(e, O(s))
                                    }
                                };
                            return e.requester.send(d).then((function(e) {
                                return function(e, t) {
                                    return function(e) {
                                        var t = e.status;
                                        return e.isTimedOut || function(e) {
                                            var t = e.isTimedOut,
                                                n = e.status;
                                            return !t && 0 == ~~n
                                        }(e) || 2 != ~~(t / 100) && 4 != ~~(t / 100)
                                    }(e) ? t.onRetry(e) : 2 == ~~(e.status / 100) ? t.onSuccess(e) : t.onFail(e)
                                }(e, m)
                            }))
                        };
                    return b(e.hostsCache, t).then((function(e) {
                        return d(a(e.statelessHosts).reverse(), e.getTimeout)
                    }))
                }

                function P(e) {
                    var t = {
                        value: "Algolia for JavaScript (".concat(e, ")"),
                        add: function(e) {
                            var n = "; ".concat(e.segment).concat(void 0 !== e.version ? " (".concat(e.version, ")") : "");
                            return -1 === t.value.indexOf(n) && (t.value = "".concat(t.value).concat(n)), t
                        }
                    };
                    return t
                }

                function j(e, t, n) {
                    var r = w(n),
                        i = "".concat(e.protocol, "://").concat(e.url, "/").concat("/" === t.charAt(0) ? t.substr(1) : t);
                    return r.length && (i += "?".concat(r)), i
                }

                function w(e) {
                    return Object.keys(e).map((function(t) {
                        return h("%s=%s", t, (n = e[t], "[object Object]" === Object.prototype.toString.call(n) || "[object Array]" === Object.prototype.toString.call(n) ? JSON.stringify(e[t]) : e[t]));
                        var n
                    })).join("&")
                }

                function O(e) {
                    return e.map((function(e) {
                        return _(e)
                    }))
                }

                function _(e) {
                    var t = e.request.headers["x-algolia-api-key"] ? {
                        "x-algolia-api-key": "*****"
                    } : {};
                    return n(n({}, e), {}, {
                        request: n(n({}, e.request), {}, {
                            headers: n(n({}, e.request.headers), t)
                        })
                    })
                }
                var E = function(e) {
                        var t = e.appId,
                            r = function(e, t, n) {
                                var r = {
                                    "x-algolia-api-key": n,
                                    "x-algolia-application-id": t
                                };
                                return {
                                    headers: function() {
                                        return e === l.WithinHeaders ? r : {}
                                    },
                                    queryParameters: function() {
                                        return e === l.WithinQueryParameters ? r : {}
                                    }
                                }
                            }(void 0 !== e.authMode ? e.authMode : l.WithinHeaders, t, e.apiKey),
                            a = function(e) {
                                var t = e.hostsCache,
                                    n = e.logger,
                                    r = e.requester,
                                    a = e.requestsCache,
                                    s = e.responsesCache,
                                    c = e.timeouts,
                                    o = e.userAgent,
                                    u = e.hosts,
                                    f = e.queryParameters,
                                    h = {
                                        hostsCache: t,
                                        logger: n,
                                        requester: r,
                                        requestsCache: a,
                                        responsesCache: s,
                                        timeouts: c,
                                        userAgent: o,
                                        headers: e.headers,
                                        queryParameters: f,
                                        hosts: u.map((function(e) {
                                            return R(e)
                                        })),
                                        read: function(e, t) {
                                            var n = d(t, h.timeouts.read),
                                                r = function() {
                                                    return S(h, h.hosts.filter((function(e) {
                                                        return 0 != (e.accept & p.Read)
                                                    })), e, n)
                                                };
                                            if (!0 !== (void 0 !== n.cacheable ? n.cacheable : e.cacheable)) return r();
                                            var a = {
                                                request: e,
                                                mappedRequestOptions: n,
                                                transporter: {
                                                    queryParameters: h.queryParameters,
                                                    headers: h.headers
                                                }
                                            };
                                            return h.responsesCache.get(a, (function() {
                                                return h.requestsCache.get(a, (function() {
                                                    return h.requestsCache.set(a, r()).then((function(e) {
                                                        return Promise.all([h.requestsCache.delete(a), e])
                                                    }), (function(e) {
                                                        return Promise.all([h.requestsCache.delete(a), Promise.reject(e)])
                                                    })).then((function(e) {
                                                        var t = i(e, 2);
                                                        return t[0], t[1]
                                                    }))
                                                }))
                                            }), {
                                                miss: function(e) {
                                                    return h.responsesCache.set(a, e)
                                                }
                                            })
                                        },
                                        write: function(e, t) {
                                            return S(h, h.hosts.filter((function(e) {
                                                return 0 != (e.accept & p.Write)
                                            })), e, d(t, h.timeouts.write))
                                        }
                                    };
                                return h
                            }(n(n({
                                hosts: [{
                                    url: "".concat(t, "-dsn.algolia.net"),
                                    accept: p.Read
                                }, {
                                    url: "".concat(t, ".algolia.net"),
                                    accept: p.Write
                                }].concat(u([{
                                    url: "".concat(t, "-1.algolianet.com")
                                }, {
                                    url: "".concat(t, "-2.algolianet.com")
                                }, {
                                    url: "".concat(t, "-3.algolianet.com")
                                }]))
                            }, e), {}, {
                                headers: n(n(n({}, r.headers()), {
                                    "content-type": "application/x-www-form-urlencoded"
                                }), e.headers),
                                queryParameters: n(n({}, r.queryParameters()), e.queryParameters)
                            }));
                        return f({
                            transporter: a,
                            appId: t,
                            addAlgoliaAgent: function(e, t) {
                                a.userAgent.add({
                                    segment: e,
                                    version: t
                                })
                            },
                            clearCache: function() {
                                return Promise.all([a.requestsCache.clear(), a.responsesCache.clear()]).then((function() {}))
                            }
                        }, e.methods)
                    },
                    C = function(e) {
                        return function(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return f({
                                transporter: e.transporter,
                                appId: e.appId,
                                indexName: t
                            }, n.methods)
                        }
                    },
                    Z = function(e) {
                        return function(t, r) {
                            var i = t.map((function(e) {
                                return n(n({}, e), {}, {
                                    params: w(e.params || {})
                                })
                            }));
                            return e.transporter.read({
                                method: x,
                                path: "1/indexes/*/queries",
                                data: {
                                    requests: i
                                },
                                cacheable: !0
                            }, r)
                        }
                    },
                    A = function(e) {
                        return function(t, i) {
                            return Promise.all(t.map((function(t) {
                                var a = t.params,
                                    s = a.facetName,
                                    c = a.facetQuery,
                                    o = r(a, ["facetName", "facetQuery"]);
                                return C(e)(t.indexName, {
                                    methods: {
                                        searchForFacetValues: H
                                    }
                                }).searchForFacetValues(s, c, n(n({}, i), o))
                            })))
                        }
                    },
                    N = function(e) {
                        return function(t, n, r) {
                            return e.transporter.read({
                                method: x,
                                path: h("1/answers/%s/prediction", e.indexName),
                                data: {
                                    query: t,
                                    queryLanguages: n
                                },
                                cacheable: !0
                            }, r)
                        }
                    },
                    k = function(e) {
                        return function(t, n) {
                            return e.transporter.read({
                                method: x,
                                path: h("1/indexes/%s/query", e.indexName),
                                data: {
                                    query: t
                                },
                                cacheable: !0
                            }, n)
                        }
                    },
                    H = function(e) {
                        return function(t, n, r) {
                            return e.transporter.read({
                                method: x,
                                path: h("1/indexes/%s/facets/%s/query", e.indexName, t),
                                data: {
                                    facetQuery: n
                                },
                                cacheable: !0
                            }, r)
                        }
                    },
                    I = 1,
                    T = 2,
                    V = 3;

                function Q(e, t, r) {
                    var i, a = {
                        appId: e,
                        apiKey: t,
                        timeouts: {
                            connect: 1,
                            read: 2,
                            write: 30
                        },
                        requester: {
                            send: function(e) {
                                return new Promise((function(t) {
                                    var n = new XMLHttpRequest;
                                    n.open(e.method, e.url, !0), Object.keys(e.headers).forEach((function(t) {
                                        return n.setRequestHeader(t, e.headers[t])
                                    }));
                                    var r, i = function(e, r) {
                                            return setTimeout((function() {
                                                n.abort(), t({
                                                    status: 0,
                                                    content: r,
                                                    isTimedOut: !0
                                                })
                                            }), 1e3 * e)
                                        },
                                        a = i(e.connectTimeout, "Connection timeout");
                                    n.onreadystatechange = function() {
                                        n.readyState > n.OPENED && void 0 === r && (clearTimeout(a), r = i(e.responseTimeout, "Socket timeout"))
                                    }, n.onerror = function() {
                                        0 === n.status && (clearTimeout(a), clearTimeout(r), t({
                                            content: n.responseText || "Network request failed",
                                            status: n.status,
                                            isTimedOut: !1
                                        }))
                                    }, n.onload = function() {
                                        clearTimeout(a), clearTimeout(r), t({
                                            content: n.responseText,
                                            status: n.status,
                                            isTimedOut: !1
                                        })
                                    }, n.send(e.data)
                                }))
                            }
                        },
                        logger: (i = V, {
                            debug: function(e, t) {
                                return I >= i && console.debug(e, t), Promise.resolve()
                            },
                            info: function(e, t) {
                                return T >= i && console.info(e, t), Promise.resolve()
                            },
                            error: function(e, t) {
                                return console.error(e, t), Promise.resolve()
                            }
                        }),
                        responsesCache: o(),
                        requestsCache: o({
                            serializable: !1
                        }),
                        hostsCache: c({
                            caches: [s({
                                key: "".concat("4.10.3", "-").concat(e)
                            }), o()]
                        }),
                        userAgent: P("4.10.3").add({
                            segment: "Browser",
                            version: "lite"
                        }),
                        authMode: l.WithinQueryParameters
                    };
                    return E(n(n(n({}, a), r), {}, {
                        methods: {
                            search: Z,
                            searchForFacetValues: A,
                            multipleQueries: Z,
                            multipleSearchForFacetValues: A,
                            initIndex: function(e) {
                                return function(t) {
                                    return C(e)(t, {
                                        methods: {
                                            search: k,
                                            searchForFacetValues: H,
                                            findAnswers: N
                                        }
                                    })
                                }
                            }
                        }
                    }))
                }
                return Q.version = "4.10.3", Q
            }()
        },
        42699: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var r = n(19013),
                i = n(13882);

            function a(e, t) {
                (0, i.Z)(2, arguments);
                var n = (0, r.Z)(e),
                    a = (0, r.Z)(t);
                return n.getTime() > a.getTime()
            }
        },
        23398: function(e, t, n) {
            "use strict";
            var r;
            t.__esModule = !0, t.AmpStateContext = void 0;
            var i = ((r = n(67294)) && r.__esModule ? r : {
                default: r
            }).default.createContext({});
            t.AmpStateContext = i
        },
        3357: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.isInAmpMode = s, t.useAmp = function() {
                return s(i.default.useContext(a.AmpStateContext))
            };
            var r, i = (r = n(67294)) && r.__esModule ? r : {
                    default: r
                },
                a = n(23398);

            function s() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.ampFirst,
                    n = void 0 !== t && t,
                    r = e.hybrid,
                    i = void 0 !== r && r,
                    a = e.hasQuery,
                    s = void 0 !== a && a;
                return n || i && s
            }
        },
        92775: function(e, t, n) {
            "use strict";
            var r = n(61682);

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            t.__esModule = !0, t.defaultHead = l, t.default = void 0;
            var a, s = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== typeof e && "function" !== typeof e) return {
                        default: e
                    };
                    var t = h();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if (Object.prototype.hasOwnProperty.call(e, i)) {
                            var a = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n(67294)),
                c = (a = n(73244)) && a.__esModule ? a : {
                    default: a
                },
                o = n(23398),
                u = n(41165),
                f = n(3357);

            function h() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return h = function() {
                    return e
                }, e
            }

            function l() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = [s.default.createElement("meta", {
                        charSet: "utf-8"
                    })];
                return e || t.push(s.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function d(e, t) {
                return "string" === typeof t || "number" === typeof t ? e : t.type === s.default.Fragment ? e.concat(s.default.Children.toArray(t.props.children).reduce((function(e, t) {
                    return "string" === typeof t || "number" === typeof t ? e : e.concat(t)
                }), [])) : e.concat(t)
            }
            var p = ["name", "httpEquiv", "charSet", "itemProp"];

            function m(e, t) {
                return e.reduce((function(e, t) {
                    var n = s.default.Children.toArray(t.props.children);
                    return e.concat(n)
                }), []).reduce(d, []).reverse().concat(l(t.inAmpMode)).filter(function() {
                    var e = new Set,
                        t = new Set,
                        n = new Set,
                        r = {};
                    return function(i) {
                        var a = !0,
                            s = !1;
                        if (i.key && "number" !== typeof i.key && i.key.indexOf("$") > 0) {
                            s = !0;
                            var c = i.key.slice(i.key.indexOf("$") + 1);
                            e.has(c) ? a = !1 : e.add(c)
                        }
                        switch (i.type) {
                            case "title":
                            case "base":
                                t.has(i.type) ? a = !1 : t.add(i.type);
                                break;
                            case "meta":
                                for (var o = 0, u = p.length; o < u; o++) {
                                    var f = p[o];
                                    if (i.props.hasOwnProperty(f))
                                        if ("charSet" === f) n.has(f) ? a = !1 : n.add(f);
                                        else {
                                            var h = i.props[f],
                                                l = r[f] || new Set;
                                            "name" === f && s || !l.has(h) ? (l.add(h), r[f] = l) : a = !1
                                        }
                                }
                        }
                        return a
                    }
                }()).reverse().map((function(e, n) {
                    var a = e.key || n;
                    if (!t.inAmpMode && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some((function(t) {
                            return e.props.href.startsWith(t)
                        }))) {
                        var c = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? i(Object(n), !0).forEach((function(t) {
                                    r(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e.props || {});
                        return c["data-href"] = c.href, c.href = void 0, c["data-optimized-fonts"] = !0, s.default.cloneElement(e, c)
                    }
                    return s.default.cloneElement(e, {
                        key: a
                    })
                }))
            }
            var v = function(e) {
                var t = e.children,
                    n = (0, s.useContext)(o.AmpStateContext),
                    r = (0, s.useContext)(u.HeadManagerContext);
                return s.default.createElement(c.default, {
                    reduceComponentsToState: m,
                    headManager: r,
                    inAmpMode: (0, f.isInAmpMode)(n)
                }, t)
            };
            t.default = v
        },
        73244: function(e, t, n) {
            "use strict";
            var r = n(83115),
                i = n(2553),
                a = n(62012),
                s = (n(50450), n(9807)),
                c = n(27690),
                o = n(99828);

            function u(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = o(e);
                    if (t) {
                        var i = o(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            t.__esModule = !0, t.default = void 0;
            var f = n(67294),
                h = function(e) {
                    s(n, e);
                    var t = u(n);

                    function n(e) {
                        var a;
                        return i(this, n), (a = t.call(this, e))._hasHeadManager = void 0, a.emitChange = function() {
                            a._hasHeadManager && a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances), a.props))
                        }, a._hasHeadManager = a.props.headManager && a.props.headManager.mountedInstances, a
                    }
                    return a(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.emitChange()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.delete(this), this.emitChange()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return null
                        }
                    }]), n
                }(f.Component);
            t.default = h
        },
        9008: function(e, t, n) {
            e.exports = n(92775)
        },
        38164: function(e, t, n) {
            var r = n(54360);
            e.exports = function(e) {
                if (Array.isArray(e)) return r(e)
            }
        },
        49391: function(e, t, n) {
            "use strict";

            function r(e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        38347: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                }
                return i
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        28140: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var r = n(75093);
            var i = n(49391),
                a = n(40355);

            function s(e) {
                return function(e) {
                    if (Array.isArray(e)) return (0, r.Z)(e)
                }(e) || (0, i.Z)(e) || (0, a.Z)(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        },
        95725: function(e) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        83115: function(e, t, n) {
            var r = n(38164),
                i = n(27381),
                a = n(73585),
                s = n(95725);
            e.exports = function(e) {
                return r(e) || i(e) || a(e) || s()
            }
        },
        13454: function(e, t, n) {
            "use strict";
            var r = n(97716),
                i = (0, n(3069).Z)(r.Z);
            t.Z = i
        },
        69590: function(e) {
            var t = "undefined" !== typeof Element,
                n = "function" === typeof Map,
                r = "function" === typeof Set,
                i = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;

            function a(e, s) {
                if (e === s) return !0;
                if (e && s && "object" == typeof e && "object" == typeof s) {
                    if (e.constructor !== s.constructor) return !1;
                    var c, o, u, f;
                    if (Array.isArray(e)) {
                        if ((c = e.length) != s.length) return !1;
                        for (o = c; 0 !== o--;)
                            if (!a(e[o], s[o])) return !1;
                        return !0
                    }
                    if (n && e instanceof Map && s instanceof Map) {
                        if (e.size !== s.size) return !1;
                        for (f = e.entries(); !(o = f.next()).done;)
                            if (!s.has(o.value[0])) return !1;
                        for (f = e.entries(); !(o = f.next()).done;)
                            if (!a(o.value[1], s.get(o.value[0]))) return !1;
                        return !0
                    }
                    if (r && e instanceof Set && s instanceof Set) {
                        if (e.size !== s.size) return !1;
                        for (f = e.entries(); !(o = f.next()).done;)
                            if (!s.has(o.value[0])) return !1;
                        return !0
                    }
                    if (i && ArrayBuffer.isView(e) && ArrayBuffer.isView(s)) {
                        if ((c = e.length) != s.length) return !1;
                        for (o = c; 0 !== o--;)
                            if (e[o] !== s[o]) return !1;
                        return !0
                    }
                    if (e.constructor === RegExp) return e.source === s.source && e.flags === s.flags;
                    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === s.valueOf();
                    if (e.toString !== Object.prototype.toString) return e.toString() === s.toString();
                    if ((c = (u = Object.keys(e)).length) !== Object.keys(s).length) return !1;
                    for (o = c; 0 !== o--;)
                        if (!Object.prototype.hasOwnProperty.call(s, u[o])) return !1;
                    if (t && e instanceof Element) return !1;
                    for (o = c; 0 !== o--;)
                        if (("_owner" !== u[o] && "__v" !== u[o] && "__o" !== u[o] || !e.$$typeof) && !a(e[u[o]], s[u[o]])) return !1;
                    return !0
                }
                return e !== e && s !== s
            }
            e.exports = function(e, t) {
                try {
                    return a(e, t)
                } catch (n) {
                    if ((n.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw n
                }
            }
        },
        68810: function(e, t, n) {
            "use strict";
            var r = n(71773),
                i = n(95009),
                a = n(60647);
            t.Z = (0, r.Z)({
                displayName: "AlgoliaHits",
                getProvidedProps: function(e, t, n) {
                    var r = (0, i.O7)(n, {
                        ais: e.contextValue,
                        multiIndexContext: e.indexContextValue
                    });
                    if (!r) return {
                        hits: []
                    };
                    var s = (0, a.RC)(r.hits, r.hitsPerPage, r.page);
                    return {
                        hits: (0, a.Io)(s, r.queryID)
                    }
                },
                getSearchParameters: function(e) {
                    return e
                }
            })
        },
        98617: function(e, t, n) {
            "use strict";
            var r = n(71773),
                i = n(95009);
            t.Z = (0, r.Z)({
                displayName: "AlgoliaStateResults",
                getProvidedProps: function(e, t, n) {
                    return {
                        searchState: t,
                        searchResults: (0, i.O7)(n, {
                            ais: e.contextValue,
                            multiIndexContext: e.indexContextValue
                        }),
                        allSearchResults: n.results,
                        searching: n.searching,
                        isSearchStalled: n.isSearchStalled,
                        error: n.error,
                        searchingForFacetValues: n.searchingForFacetValues,
                        props: e
                    }
                }
            })
        },
        33866: function(e, t, n) {
            "use strict";
            n.d(t, {
                BT: function() {
                    return a
                },
                tJ: function() {
                    return s
                },
                wX: function() {
                    return o
                },
                dW: function() {
                    return u
                }
            });
            var r = n(67294),
                i = (0, r.createContext)({
                    onInternalStateUpdate: function() {},
                    createHrefForState: function() {
                        return "#"
                    },
                    onSearchForFacetValues: function() {},
                    onSearchStateChange: function() {},
                    onSearchParameters: function() {},
                    store: {},
                    widgetsManager: {},
                    mainTargetedIndex: ""
                }),
                a = i.Consumer,
                s = i.Provider,
                c = (0, r.createContext)(void 0),
                o = c.Consumer,
                u = c.Provider
        },
        71773: function(e, t, n) {
            "use strict";
            var r = n(22122),
                i = n(81253),
                a = n(54153),
                s = n(6610),
                c = n(5991),
                o = n(46070),
                u = n(77608),
                f = n(63349),
                h = n(10379),
                l = n(96156),
                d = n(67294),
                p = n(69590),
                m = n.n(p),
                v = n(60647),
                g = n(33866);
            t.Z = function(e) {
                return function(t) {
                    var n = function(e) {
                        if (!e.displayName) throw new Error("`createConnector` requires you to provide a `displayName` property.");
                        var t = "function" === typeof e.getSearchParameters || "function" === typeof e.getMetadata || "function" === typeof e.transitionState;
                        return function(n) {
                            var p = function(p) {
                                function g(t) {
                                    var n;
                                    return (0, s.Z)(this, g), n = (0, o.Z)(this, (0, u.Z)(g).call(this, t)), (0, l.Z)((0, f.Z)(n), "unsubscribe", void 0), (0, l.Z)((0, f.Z)(n), "unregisterWidget", void 0), (0, l.Z)((0, f.Z)(n), "isUnmounting", !1), (0, l.Z)((0, f.Z)(n), "state", {
                                        providedProps: n.getProvidedProps(n.props)
                                    }), (0, l.Z)((0, f.Z)(n), "refine", (function() {
                                        for (var t, r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                                        n.props.contextValue.onInternalStateUpdate((t = e.refine).call.apply(t, [(0, f.Z)(n), n.props, n.props.contextValue.store.getState().widgets].concat(i)))
                                    })), (0, l.Z)((0, f.Z)(n), "createURL", (function() {
                                        for (var t, r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                                        return n.props.contextValue.createHrefForState((t = e.refine).call.apply(t, [(0, f.Z)(n), n.props, n.props.contextValue.store.getState().widgets].concat(i)))
                                    })), (0, l.Z)((0, f.Z)(n), "searchForFacetValues", (function() {
                                        for (var t, r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                                        n.props.contextValue.onSearchForFacetValues((t = e.searchForFacetValues).call.apply(t, [(0, f.Z)(n), n.props, n.props.contextValue.store.getState().widgets].concat(i)))
                                    })), e.getSearchParameters && n.props.contextValue.onSearchParameters(e.getSearchParameters.bind((0, f.Z)(n)), {
                                        ais: n.props.contextValue,
                                        multiIndexContext: n.props.indexContextValue
                                    }, n.props, e.getMetadata && e.getMetadata.bind((0, f.Z)(n))), n
                                }
                                return (0, h.Z)(g, p), (0, c.Z)(g, [{
                                    key: "componentDidMount",
                                    value: function() {
                                        var e = this;
                                        this.unsubscribe = this.props.contextValue.store.subscribe((function() {
                                            e.isUnmounting || e.setState({
                                                providedProps: e.getProvidedProps(e.props)
                                            })
                                        })), t && (this.unregisterWidget = this.props.contextValue.widgetsManager.registerWidget(this))
                                    }
                                }, {
                                    key: "shouldComponentUpdate",
                                    value: function(t, n) {
                                        if ("function" === typeof e.shouldComponentUpdate) return e.shouldComponentUpdate.call(this, this.props, t, this.state, n);
                                        var r = (0, v.wU)(this.props, t);
                                        return null === this.state.providedProps || null === n.providedProps ? this.state.providedProps !== n.providedProps || !r : !r || !(0, v.wU)(this.state.providedProps, n.providedProps)
                                    }
                                }, {
                                    key: "componentDidUpdate",
                                    value: function(n) {
                                        m()(n, this.props) || (this.setState({
                                            providedProps: this.getProvidedProps(this.props)
                                        }), t && (this.props.contextValue.widgetsManager.update(), "function" === typeof e.transitionState && this.props.contextValue.onSearchStateChange(e.transitionState.call(this, this.props, this.props.contextValue.store.getState().widgets, this.props.contextValue.store.getState().widgets))))
                                    }
                                }, {
                                    key: "componentWillUnmount",
                                    value: function() {
                                        if (this.isUnmounting = !0, this.unsubscribe && this.unsubscribe(), this.unregisterWidget && (this.unregisterWidget(), "function" === typeof e.cleanUp)) {
                                            var t = e.cleanUp.call(this, this.props, this.props.contextValue.store.getState().widgets);
                                            this.props.contextValue.store.setState((0, a.Z)({}, this.props.contextValue.store.getState(), {
                                                widgets: t
                                            })), this.props.contextValue.onSearchStateChange((0, v.YC)(t))
                                        }
                                    }
                                }, {
                                    key: "getProvidedProps",
                                    value: function(t) {
                                        var n = this.props.contextValue.store.getState(),
                                            r = n.widgets,
                                            i = n.results,
                                            a = n.resultsFacetValues,
                                            s = n.searching,
                                            c = n.searchingForFacetValues,
                                            o = n.isSearchStalled,
                                            u = n.metadata,
                                            f = {
                                                results: i,
                                                searching: s,
                                                searchingForFacetValues: c,
                                                isSearchStalled: o,
                                                error: n.error
                                            };
                                        return e.getProvidedProps.call(this, t, r, f, u, a)
                                    }
                                }, {
                                    key: "getSearchParameters",
                                    value: function(t) {
                                        return "function" === typeof e.getSearchParameters ? e.getSearchParameters.call(this, t, this.props, this.props.contextValue.store.getState().widgets) : null
                                    }
                                }, {
                                    key: "getMetadata",
                                    value: function(t) {
                                        return "function" === typeof e.getMetadata ? e.getMetadata.call(this, this.props, t) : {}
                                    }
                                }, {
                                    key: "transitionState",
                                    value: function(t, n) {
                                        return "function" === typeof e.transitionState ? e.transitionState.call(this, this.props, t, n) : n
                                    }
                                }, {
                                    key: "render",
                                    value: function() {
                                        var t = this.props,
                                            a = (t.contextValue, (0, i.Z)(t, ["contextValue"])),
                                            s = this.state.providedProps;
                                        if (null === s) return null;
                                        var c = "function" === typeof e.refine ? {
                                                refine: this.refine,
                                                createURL: this.createURL
                                            } : {},
                                            o = "function" === typeof e.searchForFacetValues ? {
                                                searchForItems: this.searchForFacetValues
                                            } : {};
                                        return d.createElement(n, (0, r.Z)({}, a, s, c, o))
                                    }
                                }]), g
                            }(d.Component);
                            return (0, l.Z)(p, "displayName", "".concat(e.displayName, "(").concat((0, v.Gf)(n), ")")), (0, l.Z)(p, "propTypes", e.propTypes), (0, l.Z)(p, "defaultProps", e.defaultProps), p
                        }
                    }(e)(t);
                    return function(e) {
                        return d.createElement(g.BT, null, (function(t) {
                            return d.createElement(g.wX, null, (function(i) {
                                return d.createElement(n, (0, r.Z)({
                                    contextValue: t,
                                    indexContextValue: i
                                }, e))
                            }))
                        }))
                    }
                }
            }
        },
        95009: function(e, t, n) {
            "use strict";
            n.d(t, {
                WN: function() {
                    return s
                },
                O7: function() {
                    return c
                },
                Ei: function() {
                    return o
                },
                RD: function() {
                    return u
                },
                U6: function() {
                    return h
                },
                cI: function() {
                    return l
                }
            });
            var r = n(96156),
                i = n(54153),
                a = n(60647);

            function s(e) {
                return o(e) ? e.multiIndexContext.targetedIndex : e.ais.mainTargetedIndex
            }

            function c(e, t) {
                if (e.results) {
                    if (e.results.hits) return e.results;
                    var n = s(t);
                    if (e.results[n]) return e.results[n]
                }
                return null
            }

            function o(e) {
                return e && e.multiIndexContext
            }

            function u(e, t, n, a, c) {
                if (o(n)) {
                    var f = s(n);
                    return c ? function(e, t, n, a, s) {
                        var c, o = a ? {
                                page: 1
                            } : void 0,
                            u = e.indices && e.indices[n] ? (0, i.Z)({}, e.indices, (0, r.Z)({}, n, (0, i.Z)({}, e.indices[n], (c = {}, (0, r.Z)(c, s, (0, i.Z)({}, e.indices[n][s], t)), (0, r.Z)(c, "page", 1), c)))) : (0, i.Z)({}, e.indices, (0, r.Z)({}, n, (0, i.Z)((0, r.Z)({}, s, t), o)));
                        return (0, i.Z)({}, e, {
                            indices: u
                        })
                    }(e, t, f, a, c) : function(e, t, n, a) {
                        var s = a ? {
                                page: 1
                            } : void 0,
                            c = e.indices && e.indices[n] ? (0, i.Z)({}, e.indices, (0, r.Z)({}, n, (0, i.Z)({}, e.indices[n], t, s))) : (0, i.Z)({}, e.indices, (0, r.Z)({}, n, (0, i.Z)({}, t, s)));
                        return (0, i.Z)({}, e, {
                            indices: c
                        })
                    }(e, t, f, a)
                }
                return e.indices && a && Object.keys(e.indices).forEach((function(t) {
                    e = u(e, {
                        page: 1
                    }, {
                        multiIndexContext: {
                            targetedIndex: t
                        }
                    }, !0, c)
                })), c ? function(e, t, n, a) {
                    var s = n ? {
                        page: 1
                    } : void 0;
                    return (0, i.Z)({}, e, (0, r.Z)({}, a, (0, i.Z)({}, e[a], t)), s)
                }(e, t, a, c) : function(e, t, n) {
                    var r = n ? {
                        page: 1
                    } : void 0;
                    return (0, i.Z)({}, e, t, r)
                }(e, t, a)
            }

            function f(e) {
                var t = e.match(/^([^.]*)\.(.*)/);
                return {
                    namespace: t && t[1],
                    attributeName: t && t[2]
                }
            }

            function h(e, t, n, r, i) {
                var a = s(n),
                    c = f(r),
                    u = c.namespace,
                    h = c.attributeName,
                    l = {
                        multiIndex: o(n),
                        indexId: a,
                        namespace: u,
                        attributeName: h,
                        id: r,
                        searchState: t
                    };
                return function(e) {
                    var t = e.multiIndex,
                        n = e.indexId,
                        r = e.namespace,
                        i = e.attributeName,
                        a = e.id,
                        s = e.searchState;
                    return t && r ? s.indices && s.indices[n] && s.indices[n][r] && Object.hasOwnProperty.call(s.indices[n][r], i) : t ? s.indices && s.indices[n] && Object.hasOwnProperty.call(s.indices[n], a) : r ? s[r] && Object.hasOwnProperty.call(s[r], i) : Object.hasOwnProperty.call(s, a)
                }(l) ? function(e) {
                    var t = e.multiIndex,
                        n = e.indexId,
                        r = e.namespace,
                        i = e.attributeName,
                        a = e.id,
                        s = e.searchState;
                    return t && r ? s.indices[n][r][i] : t ? s.indices[n][a] : r ? s[r][i] : s[a]
                }(l) : e.defaultRefinement ? e.defaultRefinement : i
            }

            function l(e, t, n) {
                var c = s(t),
                    u = f(n),
                    h = u.namespace,
                    l = u.attributeName;
                return o(t) && Boolean(e.indices) ? function(e) {
                    var t = e.searchState,
                        n = e.indexId,
                        s = e.id,
                        c = e.namespace,
                        o = e.attribute,
                        u = t.indices[n];
                    if (c && u) return (0, i.Z)({}, t, {
                        indices: (0, i.Z)({}, t.indices, (0, r.Z)({}, n, (0, i.Z)({}, u, (0, r.Z)({}, c, (0, a.CE)(u[c], [o])))))
                    });
                    if (u) return (0, i.Z)({}, t, {
                        indices: (0, i.Z)({}, t.indices, (0, r.Z)({}, n, (0, a.CE)(u, [s])))
                    });
                    return t
                }({
                    attribute: l,
                    searchState: e,
                    indexId: c,
                    id: n,
                    namespace: h
                }) : function(e) {
                    var t = e.searchState,
                        n = e.id,
                        s = e.namespace,
                        c = e.attribute;
                    if (s) return (0, i.Z)({}, t, (0, r.Z)({}, s, (0, a.CE)(t[s], [c])));
                    return (0, a.CE)(t, [n])
                }({
                    attribute: l,
                    searchState: e,
                    id: n,
                    namespace: h
                })
            }
        },
        60647: function(e, t, n) {
            "use strict";
            n.d(t, {
                wU: function() {
                    return a
                },
                Gf: function() {
                    return s
                },
                PQ: function() {
                    return o
                },
                YC: function() {
                    return u
                },
                RC: function() {
                    return f
                },
                Io: function() {
                    return h
                },
                sE: function() {
                    return l
                },
                CE: function() {
                    return d
                }
            });
            var r = n(54153),
                i = n(90484),
                a = function(e, t) {
                    if (e === t) return !0;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (var i = Object.prototype.hasOwnProperty, a = 0; a < n.length; a++)
                        if (!i.call(t, n[a]) || e[n[a]] !== t[n[a]]) return !1;
                    return !0
                },
                s = function(e) {
                    return e.displayName || e.name || "UnknownComponent"
                },
                c = Promise.resolve(),
                o = function(e) {
                    c.then(e)
                },
                u = function e(t) {
                    return Object.keys(t).forEach((function(n) {
                        var r, a = t[n];
                        (function(e) {
                            return "object" === (0, i.Z)(e) && null !== e && !Array.isArray(e)
                        })(a) && ((r = a) && Object.keys(r).length > 0 ? e(a) : delete t[n])
                    })), t
                };

            function f(e, t, n) {
                return e.map((function(e, i) {
                    return (0, r.Z)({}, e, {
                        __position: t * n + i + 1
                    })
                }))
            }

            function h(e, t) {
                return t ? e.map((function(e) {
                    return (0, r.Z)({}, e, {
                        __queryID: t
                    })
                })) : e
            }

            function l(e, t) {
                if (Array.isArray(e))
                    for (var n = 0; n < e.length; n++)
                        if (t(e[n])) return e[n]
            }

            function d(e, t) {
                if (null === e || void 0 === e) return {};
                for (var n = {}, r = Object.keys(e), i = 0; i < r.length; i++) {
                    var a = r[i];
                    t.indexOf(a) >= 0 || (n[a] = e[a])
                }
                return n
            }
        },
        2002: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return u
                }
            });
            var r = n(96156),
                i = n(54153),
                a = n(81253),
                s = n(60647),
                c = n(71773),
                o = n(95009);
            var u = (0, c.Z)({
                displayName: "AlgoliaConfigure",
                getProvidedProps: function() {
                    return {}
                },
                getSearchParameters: function(e, t) {
                    t.children, t.contextValue, t.indexContextValue;
                    var n = (0, a.Z)(t, ["children", "contextValue", "indexContextValue"]);
                    return e.setQueryParameters(n)
                },
                transitionState: function(e, t, n) {
                    var c = "configure",
                        u = (e.children, e.contextValue, e.indexContextValue, (0, a.Z)(e, ["children", "contextValue", "indexContextValue"])),
                        f = Object.keys(e),
                        h = this._props ? Object.keys(this._props).filter((function(e) {
                            return -1 === f.indexOf(e)
                        })) : [];
                    this._props = e;
                    var l = (0, r.Z)({}, c, (0, i.Z)({}, (0, s.CE)(n[c], h), u));
                    return (0, o.RD)(n, l, {
                        ais: e.contextValue,
                        multiIndexContext: e.indexContextValue
                    })
                },
                cleanUp: function(e, t) {
                    var n = "configure",
                        i = (0, o.WN)({
                            ais: e.contextValue,
                            multiIndexContext: e.indexContextValue
                        }),
                        a = (0, o.Ei)({
                            ais: e.contextValue,
                            multiIndexContext: e.indexContextValue
                        }) && t.indices ? t.indices[i] : t,
                        s = (a && a[n] ? Object.keys(a[n]) : []).reduce((function(t, r) {
                            return e[r] || (t[r] = a[n][r]), t
                        }), {}),
                        c = (0, r.Z)({}, n, s);
                    return (0, o.RD)(t, c, {
                        ais: e.contextValue,
                        multiIndexContext: e.indexContextValue
                    })
                }
            })((function() {
                return null
            }))
        },
        26808: function(e, t, n) {
            "use strict";
            var r = n(22122),
                i = n(6610),
                a = n(46070),
                s = n(77608),
                c = n(63349),
                o = n(5991),
                u = n(10379),
                f = n(96156),
                h = n(67294),
                l = n(45697),
                d = n.n(l),
                p = n(33866);

            function m(e) {
                return {
                    targetedIndex: e.indexId
                }
            }
            var v = function(e) {
                function t(e) {
                    var n;
                    return (0, i.Z)(this, t), n = (0, a.Z)(this, (0, s.Z)(t).call(this, e)), (0, f.Z)((0, c.Z)(n), "state", {
                        indexContext: m(n.props)
                    }), (0, f.Z)((0, c.Z)(n), "unregisterWidget", void 0), n.props.contextValue.onSearchParameters(n.getSearchParameters.bind((0, c.Z)(n)), {
                        ais: n.props.contextValue,
                        multiIndexContext: n.state.indexContext
                    }, n.props, void 0), n
                }
                return (0, u.Z)(t, e), (0, o.Z)(t, null, [{
                    key: "getDerivedStateFromProps",
                    value: function(e) {
                        return {
                            indexContext: m(e)
                        }
                    }
                }]), (0, o.Z)(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.unregisterWidget = this.props.contextValue.widgetsManager.registerWidget(this)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        this.props.indexName !== e.indexName && this.props.contextValue.widgetsManager.update()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        "function" === typeof this.unregisterWidget && this.unregisterWidget()
                    }
                }, {
                    key: "getSearchParameters",
                    value: function(e, t) {
                        return e.setIndex(this.props ? this.props.indexName : t.indexName)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return 0 === h.Children.count(this.props.children) ? null : h.createElement(p.dW, {
                            value: this.state.indexContext
                        }, this.props.children)
                    }
                }]), t
            }(h.Component);
            (0, f.Z)(v, "propTypes", {
                indexName: d().string.isRequired,
                indexId: d().string.isRequired,
                children: d().node
            });
            var g = function(e) {
                var t = e.indexName;
                return h.createElement(p.BT, null, (function(n) {
                    return h.createElement(v, (0, r.Z)({
                        contextValue: n,
                        indexId: t
                    }, e))
                }))
            };
            g.propTypes = {
                indexName: d().string.isRequired,
                indexId: d().string
            };
            t.Z = g
        },
        96374: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return k
                }
            });
            var r = n(54153),
                i = n(6610),
                a = n(46070),
                s = n(77608),
                c = n(63349),
                o = n(5991),
                u = n(10379),
                f = n(96156),
                h = n(67294),
                l = n(69590),
                d = n.n(l),
                p = n(45697),
                m = n.n(p),
                v = n(81253),
                g = n(8131),
                y = n.n(g),
                R = n(60647);
            var F = {
                highlightPreTag: "<ais-highlight-0000000000>",
                highlightPostTag: "</ais-highlight-0000000000>"
            };
            var x = n(95009);

            function b(e) {
                "function" === typeof e.addAlgoliaAgent && (e.addAlgoliaAgent("react (".concat(h.version, ")")), e.addAlgoliaAgent("react-instantsearch (".concat("6.12.0", ")")))
            }
            var S = function(e) {
                    return (0, x.Ei)({
                        ais: e.props.contextValue,
                        multiIndexContext: e.props.indexContextValue
                    })
                },
                P = function(e, t) {
                    return e.props.indexContextValue.targetedIndex === t
                },
                j = function(e) {
                    return Boolean(e.props.indexId)
                },
                w = function(e, t) {
                    return e.props.indexId === t
                },
                O = function(e, t) {
                    var n = j(e),
                        r = j(t);
                    return n && !r ? -1 : !n && r ? 1 : 0
                };

            function _(e) {
                return Object.keys(e).map((function(t) {
                    return function(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        var i = 0;
                        return e.replace(/%s/g, (function() {
                            return encodeURIComponent(n[i++])
                        }))
                    }("%s=%s", t, (n = e[t], "[object Object]" === Object.prototype.toString.call(n) || "[object Array]" === Object.prototype.toString.call(n) ? JSON.stringify(e[t]) : e[t]));
                    var n
                })).join("&")
            }

            function E(e) {
                var t = e.indexName,
                    n = e.initialState,
                    i = void 0 === n ? {} : n,
                    a = e.searchClient,
                    s = e.resultsState,
                    c = e.stalledSearchDelay,
                    o = y()(a, t, (0, r.Z)({}, F));
                b(a), o.on("search", (function() {
                    h || (h = setTimeout((function() {
                        var e = p.getState(),
                            t = (e.resultsFacetValues, (0, v.Z)(e, ["resultsFacetValues"]));
                        p.setState((0, r.Z)({}, t, {
                            isSearchStalled: !0
                        }))
                    }), c))
                })).on("result", E({
                    indexId: t
                })).on("error", Z);
                var u = !1,
                    h = null,
                    l = o.state,
                    d = function(e) {
                        var t = [],
                            n = !1;

                        function r() {
                            n || (n = !0, (0, R.PQ)((function() {
                                n = !1, e()
                            })))
                        }
                        return {
                            registerWidget: function(e) {
                                return t.push(e), r(),
                                    function() {
                                        t.splice(t.indexOf(e), 1), r()
                                    }
                            },
                            update: r,
                            getWidgets: function() {
                                return t
                            }
                        }
                    }((function() {
                        var e = m(p.getState().widgets);
                        p.setState((0, r.Z)({}, p.getState(), {
                            metadata: e,
                            searching: !0
                        })), x()
                    }));
                ! function(e, t) {
                    if (!t) return;
                    if ((!e.transporter || e._cacheHydrated) && (!e._useCache || "function" !== typeof e.addAlgoliaAgent)) return;
                    if (e.transporter && !e._cacheHydrated) {
                        e._cacheHydrated = !0;
                        var n = e.search;
                        e.search = function(t) {
                            for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) a[s - 1] = arguments[s];
                            var c = t.map((function(e) {
                                return (0, r.Z)({}, e, {
                                    params: _(e.params)
                                })
                            }));
                            return e.transporter.responsesCache.get({
                                method: "search",
                                args: [c].concat(a)
                            }, (function() {
                                return n.apply(void 0, [t].concat(a))
                            }))
                        }
                    }
                    if (Array.isArray(t.results)) return void
                    function(e, t) {
                        if (e.transporter) return void e.transporter.responsesCache.set({
                            method: "search",
                            args: [t.reduce((function(e, t) {
                                return e.concat(t.rawResults.map((function(e) {
                                    return {
                                        indexName: e.index,
                                        params: e.params
                                    }
                                })))
                            }), [])]
                        }, {
                            results: t.reduce((function(e, t) {
                                return e.concat(t.rawResults)
                            }), [])
                        });
                        var n = "/1/indexes/*/queries_body_".concat(JSON.stringify({
                            requests: t.reduce((function(e, t) {
                                return e.concat(t.rawResults.map((function(e) {
                                    return {
                                        indexName: e.index,
                                        params: e.params
                                    }
                                })))
                            }), [])
                        }));
                        e.cache = (0, r.Z)({}, e.cache, (0, f.Z)({}, n, JSON.stringify({
                            results: t.reduce((function(e, t) {
                                return e.concat(t.rawResults)
                            }), [])
                        })))
                    }(e, t.results);
                    ! function(e, t) {
                        if (e.transporter) return void e.transporter.responsesCache.set({
                            method: "search",
                            args: [t.rawResults.map((function(e) {
                                return {
                                    indexName: e.index,
                                    params: e.params
                                }
                            }))]
                        }, {
                            results: t.rawResults
                        });
                        var n = "/1/indexes/*/queries_body_".concat(JSON.stringify({
                            requests: t.rawResults.map((function(e) {
                                return {
                                    indexName: e.index,
                                    params: e.params
                                }
                            }))
                        }));
                        e.cache = (0, r.Z)({}, e.cache, (0, f.Z)({}, n, JSON.stringify({
                            results: t.rawResults
                        })))
                    }(e, t)
                }(a, s);
                var p = function(e) {
                    var t = e,
                        n = [];
                    return {
                        getState: function() {
                            return t
                        },
                        setState: function(e) {
                            t = e, n.forEach((function(e) {
                                return e()
                            }))
                        },
                        subscribe: function(e) {
                            return n.push(e),
                                function() {
                                    n.splice(n.indexOf(e), 1)
                                }
                        }
                    }
                }({
                    widgets: i,
                    metadata: C(s),
                    results: function(e) {
                        if (!e) return null;
                        if (Array.isArray(e.results)) return e.results.reduce((function(e, t) {
                            return (0, r.Z)({}, e, (0, f.Z)({}, t._internalIndexId, new(y().SearchResults)(new(y().SearchParameters)(t.state), t.rawResults)))
                        }), {});
                        return new(y().SearchResults)(new(y().SearchParameters)(e.state), e.rawResults)
                    }(s),
                    error: null,
                    searching: !1,
                    isSearchStalled: !0,
                    searchingForFacetValues: !1
                });

                function m(e) {
                    return d.getWidgets().filter((function(e) {
                        return Boolean(e.getMetadata)
                    })).map((function(t) {
                        return t.getMetadata(e)
                    }))
                }

                function g() {
                    var e = d.getWidgets().filter((function(e) {
                            return Boolean(e.getSearchParameters)
                        })).filter((function(e) {
                            return !S(e) && !j(e)
                        })).reduce((function(e, t) {
                            return t.getSearchParameters(e)
                        }), l),
                        n = d.getWidgets().filter((function(e) {
                            return Boolean(e.getSearchParameters)
                        })).filter((function(e) {
                            var n = S(e) && P(e, t),
                                r = j(e) && w(e, t);
                            return n || r
                        })).sort(O).reduce((function(e, t) {
                            return t.getSearchParameters(e)
                        }), e),
                        i = d.getWidgets().filter((function(e) {
                            return Boolean(e.getSearchParameters)
                        })).filter((function(e) {
                            var n = S(e) && !P(e, t),
                                r = j(e) && !w(e, t);
                            return n || r
                        })).sort(O).reduce((function(e, t) {
                            var n = S(t) ? t.props.indexContextValue.targetedIndex : t.props.indexId,
                                i = e[n] || [];
                            return (0, r.Z)({}, e, (0, f.Z)({}, n, i.concat(t)))
                        }), {});
                    return {
                        mainParameters: n,
                        derivedParameters: Object.keys(i).map((function(t) {
                            return {
                                parameters: i[t].reduce((function(e, t) {
                                    return t.getSearchParameters(e)
                                }), e),
                                indexId: t
                            }
                        }))
                    }
                }

                function x() {
                    if (!u) {
                        var e = g(o.state),
                            t = e.mainParameters,
                            n = e.derivedParameters;
                        o.derivedHelpers.slice().forEach((function(e) {
                            e.detach()
                        })), n.forEach((function(e) {
                            var t = e.indexId,
                                n = e.parameters;
                            o.derive((function() {
                                return n
                            })).on("result", E({
                                indexId: t
                            })).on("error", Z)
                        })), o.setState(t), o.search()
                    }
                }

                function E(e) {
                    var t = e.indexId;
                    return function(e) {
                        var n = p.getState(),
                            i = !o.derivedHelpers.length,
                            a = n.results ? n.results : {};
                        a = !i && a.getFacetByName ? {} : a, a = i ? e.results : (0, r.Z)({}, a, (0, f.Z)({}, t, e.results));
                        var s = p.getState(),
                            c = s.isSearchStalled;
                        o.hasPendingRequests() || (clearTimeout(h), h = null, c = !1);
                        s.resultsFacetValues;
                        var u = (0, v.Z)(s, ["resultsFacetValues"]);
                        p.setState((0, r.Z)({}, u, {
                            results: a,
                            isSearchStalled: c,
                            searching: !1,
                            error: null
                        }))
                    }
                }

                function Z(e) {
                    var t = e.error,
                        n = p.getState(),
                        i = n.isSearchStalled;
                    o.hasPendingRequests() || (clearTimeout(h), i = !1);
                    n.resultsFacetValues;
                    var a = (0, v.Z)(n, ["resultsFacetValues"]);
                    p.setState((0, r.Z)({}, a, {
                        isSearchStalled: i,
                        error: t,
                        searching: !1
                    }))
                }
                return {
                    store: p,
                    widgetsManager: d,
                    getWidgetsIds: function() {
                        return p.getState().metadata.reduce((function(e, t) {
                            return "undefined" !== typeof t.id ? e.concat(t.id) : e
                        }), [])
                    },
                    getSearchParameters: g,
                    onSearchForFacetValues: function(e) {
                        var t = e.facetName,
                            n = e.query,
                            i = e.maxFacetHits,
                            a = void 0 === i ? 10 : i,
                            s = Math.max(1, Math.min(a, 100));
                        p.setState((0, r.Z)({}, p.getState(), {
                            searchingForFacetValues: !0
                        })), o.searchForFacetValues(t, n, s).then((function(e) {
                            var i;
                            p.setState((0, r.Z)({}, p.getState(), {
                                error: null,
                                searchingForFacetValues: !1,
                                resultsFacetValues: (0, r.Z)({}, p.getState().resultsFacetValues, (i = {}, (0, f.Z)(i, t, e.facetHits), (0, f.Z)(i, "query", n), i))
                            }))
                        }), (function(e) {
                            p.setState((0, r.Z)({}, p.getState(), {
                                searchingForFacetValues: !1,
                                error: e
                            }))
                        })).catch((function(e) {
                            setTimeout((function() {
                                throw e
                            }))
                        }))
                    },
                    onExternalStateUpdate: function(e) {
                        var t = m(e);
                        p.setState((0, r.Z)({}, p.getState(), {
                            widgets: e,
                            metadata: t,
                            searching: !0
                        })), x()
                    },
                    transitionState: function(e) {
                        var t = p.getState().widgets;
                        return d.getWidgets().filter((function(e) {
                            return Boolean(e.transitionState)
                        })).reduce((function(e, n) {
                            return n.transitionState(t, e)
                        }), e)
                    },
                    updateClient: function(e) {
                        b(e), o.setClient(e), x()
                    },
                    updateIndex: function(e) {
                        l = l.setIndex(e)
                    },
                    clearCache: function() {
                        o.clearCache(), x()
                    },
                    skipSearch: function() {
                        u = !0
                    }
                }
            }

            function C(e) {
                return e ? e.metadata.map((function(e) {
                    return (0, r.Z)({
                        value: function() {}
                    }, e, {
                        items: e.items && e.items.map((function(e) {
                            return (0, r.Z)({
                                value: function() {}
                            }, e, {
                                items: e.items && e.items.map((function(e) {
                                    return (0, r.Z)({
                                        value: function() {}
                                    }, e)
                                }))
                            })
                        }))
                    })
                })) : []
            }
            var Z = n(33866);

            function A(e) {
                return Boolean(e.searchState)
            }
            var N = function(e) {
                function t(e) {
                    var n;
                    (0, i.Z)(this, t), n = (0, a.Z)(this, (0, s.Z)(t).call(this, e)), (0, f.Z)((0, c.Z)(n), "isUnmounting", !1);
                    var r = E({
                            indexName: n.props.indexName,
                            searchClient: n.props.searchClient,
                            initialState: n.props.searchState || {},
                            resultsState: n.props.resultsState,
                            stalledSearchDelay: n.props.stalledSearchDelay
                        }),
                        o = {
                            store: r.store,
                            widgetsManager: r.widgetsManager,
                            mainTargetedIndex: n.props.indexName,
                            onInternalStateUpdate: n.onWidgetsInternalStateUpdate.bind((0, c.Z)(n)),
                            createHrefForState: n.createHrefForState.bind((0, c.Z)(n)),
                            onSearchForFacetValues: n.onSearchForFacetValues.bind((0, c.Z)(n)),
                            onSearchStateChange: n.onSearchStateChange.bind((0, c.Z)(n)),
                            onSearchParameters: n.onSearchParameters.bind((0, c.Z)(n))
                        };
                    return n.state = {
                        isControlled: A(n.props),
                        instantSearchManager: r,
                        contextValue: o
                    }, n
                }
                return (0, u.Z)(t, e), (0, o.Z)(t, null, [{
                    key: "getDerivedStateFromProps",
                    value: function(e, t) {
                        var n = A(e),
                            i = t.instantSearchManager.store.getState().widgets,
                            a = e.searchState;
                        return n && !d()(i, a) && t.instantSearchManager.onExternalStateUpdate(e.searchState), {
                            isControlled: n,
                            contextValue: (0, r.Z)({}, t.contextValue, {
                                mainTargetedIndex: e.indexName
                            })
                        }
                    }
                }]), (0, o.Z)(t, [{
                    key: "componentDidUpdate",
                    value: function(e) {
                        var t = A(e);
                        if (t && !this.state.isControlled) throw new Error("You can't switch <InstantSearch> from being controlled to uncontrolled");
                        if (!t && this.state.isControlled) throw new Error("You can't switch <InstantSearch> from being uncontrolled to controlled");
                        this.props.refresh !== e.refresh && this.props.refresh && this.state.instantSearchManager.clearCache(), e.indexName !== this.props.indexName && this.state.instantSearchManager.updateIndex(this.props.indexName), e.searchClient !== this.props.searchClient && this.state.instantSearchManager.updateClient(this.props.searchClient)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.isUnmounting = !0, this.state.instantSearchManager.skipSearch()
                    }
                }, {
                    key: "createHrefForState",
                    value: function(e) {
                        return e = this.state.instantSearchManager.transitionState(e), this.state.isControlled && this.props.createURL ? this.props.createURL(e, this.getKnownKeys()) : "#"
                    }
                }, {
                    key: "onWidgetsInternalStateUpdate",
                    value: function(e) {
                        e = this.state.instantSearchManager.transitionState(e), this.onSearchStateChange(e), this.state.isControlled || this.state.instantSearchManager.onExternalStateUpdate(e)
                    }
                }, {
                    key: "onSearchStateChange",
                    value: function(e) {
                        this.props.onSearchStateChange && !this.isUnmounting && this.props.onSearchStateChange(e)
                    }
                }, {
                    key: "onSearchParameters",
                    value: function(e, t, n, r) {
                        if (this.props.onSearchParameters) {
                            var i = this.props.searchState ? this.props.searchState : {};
                            this.props.onSearchParameters(e, t, n, i)
                        }
                        if (this.props.widgetsCollector) {
                            var a = this.props.searchState ? this.props.searchState : {};
                            this.props.widgetsCollector({
                                getSearchParameters: e,
                                getMetadata: r,
                                context: t,
                                props: n,
                                searchState: a
                            })
                        }
                    }
                }, {
                    key: "onSearchForFacetValues",
                    value: function(e) {
                        this.state.instantSearchManager.onSearchForFacetValues(e)
                    }
                }, {
                    key: "getKnownKeys",
                    value: function() {
                        return this.state.instantSearchManager.getWidgetsIds()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return 0 === h.Children.count(this.props.children) ? null : h.createElement(Z.tJ, {
                            value: this.state.contextValue
                        }, this.props.children)
                    }
                }]), t
            }(h.Component);
            (0, f.Z)(N, "defaultProps", {
                stalledSearchDelay: 200,
                refresh: !1
            }), (0, f.Z)(N, "propTypes", {
                indexName: m().string.isRequired,
                searchClient: m().shape({
                    search: m().func.isRequired,
                    searchForFacetValues: m().func,
                    addAlgoliaAgent: m().func,
                    clearCache: m().func
                }).isRequired,
                createURL: m().func,
                refresh: m().bool,
                searchState: m().object,
                onSearchStateChange: m().func,
                onSearchParameters: m().func,
                widgetsCollector: m().func,
                resultsState: m().oneOfType([m().object, m().array]),
                children: m().node,
                stalledSearchDelay: m().number
            });
            var k = N
        },
        69293: function(e, t, n) {
            "use strict";
            var r = n(67294),
                i = n(27865),
                a = ["mousedown", "touchstart"];
            t.Z = function(e, t, n) {
                void 0 === n && (n = a);
                var s = (0, r.useRef)(t);
                (0, r.useEffect)((function() {
                    s.current = t
                }), [t]), (0, r.useEffect)((function() {
                    for (var t = function(t) {
                            var n = e.current;
                            n && !n.contains(t.target) && s.current(t)
                        }, r = 0, a = n; r < a.length; r++) {
                        var c = a[r];
                        (0, i.on)(document, c, t)
                    }
                    return function() {
                        for (var e = 0, r = n; e < r.length; e++) {
                            var a = r[e];
                            (0, i.S1)(document, a, t)
                        }
                    }
                }), [n, e])
            }
        },
        46990: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return f
                }
            });
            var r = n(67294),
                i = n(27865).C5 ? window : null,
                a = function(e) {
                    return !!e.addEventListener
                },
                s = function(e) {
                    return !!e.on
                },
                c = function(e, t, n, c) {
                    void 0 === n && (n = i), (0, r.useEffect)((function() {
                        if (t && n) return a(n) ? n.addEventListener(e, t, c) : s(n) && n.on(e, t, c),
                            function() {
                                a(n) ? n.removeEventListener(e, t, c) : s(n) && n.off(e, t, c)
                            }
                    }), [e, t, n, JSON.stringify(c)])
                },
                o = function() {},
                u = function(e, t, n, i) {
                    void 0 === t && (t = o), void 0 === n && (n = {}), void 0 === i && (i = [e]);
                    var a = n.event,
                        s = void 0 === a ? "keydown" : a,
                        u = n.target,
                        f = n.options,
                        h = (0, r.useMemo)((function() {
                            var n, r = "function" === typeof(n = e) ? n : "string" === typeof n ? function(e) {
                                return e.key === n
                            } : n ? function() {
                                return !0
                            } : function() {
                                return !1
                            };
                            return function(e) {
                                if (r(e)) return t(e)
                            }
                        }), i);
                    c(s, h, u, f)
                },
                f = function(e) {
                    var t = (0, r.useState)([!1, null]),
                        n = t[0],
                        i = t[1];
                    return u(e, (function(e) {
                        return i([!0, e])
                    }), {
                        event: "keydown"
                    }, [n]), u(e, (function(e) {
                        return i([!1, e])
                    }), {
                        event: "keyup"
                    }, [n]), n
                }
        },
        81341: function(e, t, n) {
            "use strict";
            var r = n(67294);

            function i(e) {
                if (!e) return null;
                if ("BODY" === e.tagName) return e;
                if ("IFRAME" === e.tagName) {
                    var t = e.contentDocument;
                    return t ? t.body : null
                }
                return e.offsetParent ? i(e.offsetParent) : null
            }

            function a(e) {
                var t = e || window.event;
                return t.touches.length > 1 || (t.preventDefault && t.preventDefault(), !1)
            }
            var s = "undefined" !== typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform),
                c = new Map,
                o = "object" === typeof document ? document : void 0,
                u = !1;
            t.Z = o ? function(e, t) {
                void 0 === e && (e = !0);
                var n = (0, r.useRef)(o.body);
                t = t || n;
                var f = function(e) {
                    var t = c.get(e);
                    t && (1 === t.counter ? (c.delete(e), s ? (e.ontouchmove = null, u && (document.removeEventListener("touchmove", a), u = !1)) : e.style.overflow = t.initialOverflow) : c.set(e, {
                        counter: t.counter - 1,
                        initialOverflow: t.initialOverflow
                    }))
                };
                (0, r.useEffect)((function() {
                    var n = i(t.current);
                    n && (e ? function(e) {
                        var t = c.get(e);
                        t ? c.set(e, {
                            counter: t.counter + 1,
                            initialOverflow: t.initialOverflow
                        }) : (c.set(e, {
                            counter: 1,
                            initialOverflow: e.style.overflow
                        }), s ? u || (document.addEventListener("touchmove", a, {
                            passive: !1
                        }), u = !0) : e.style.overflow = "hidden")
                    }(n) : f(n))
                }), [e, t.current]), (0, r.useEffect)((function() {
                    var e = i(t.current);
                    if (e) return function() {
                        f(e)
                    }
                }), [])
            } : function(e, t) {
                void 0 === e && (e = !0)
            }
        },
        89211: function(e, t, n) {
            "use strict";
            var r = n(67294),
                i = function(e, t) {
                    return "boolean" === typeof t ? t : !e
                };
            t.Z = function(e) {
                return (0, r.useReducer)(i, e)
            }
        }
    }
]);
//# sourceMappingURL=6870-9a5f94f987629c5fa225.js.map