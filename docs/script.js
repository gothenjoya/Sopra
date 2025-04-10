(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) o(a);
    new MutationObserver(a => {
        for (const c of a)
            if (c.type === "childList")
                for (const f of c.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && o(f)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(a) {
        const c = {};
        return a.integrity && (c.integrity = a.integrity), a.referrerPolicy && (c.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? c.credentials = "include" : a.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c
    }

    function o(a) {
        if (a.ep) return;
        a.ep = !0;
        const c = r(a);
        fetch(a.href, c)
    }
})();

function zp(i) {
    return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i
}
var Ma = {
        exports: {}
    },
    Rr = {},
    Ra = {
        exports: {}
    },
    he = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xh;

function yv() {
    if (Xh) return he;
    Xh = 1;
    var i = Symbol.for("react.element"),
        t = Symbol.for("react.portal"),
        r = Symbol.for("react.fragment"),
        o = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        c = Symbol.for("react.provider"),
        f = Symbol.for("react.context"),
        d = Symbol.for("react.forward_ref"),
        p = Symbol.for("react.suspense"),
        m = Symbol.for("react.memo"),
        y = Symbol.for("react.lazy"),
        v = Symbol.iterator;

    function w(C) {
        return C === null || typeof C != "object" ? null : (C = v && C[v] || C["@@iterator"], typeof C == "function" ? C : null)
    }
    var k = {
            isMounted: function () {
                return !1
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {}
        },
        T = Object.assign,
        P = {};

    function D(C, z, ae) {
        this.props = C, this.context = z, this.refs = P, this.updater = ae || k
    }
    D.prototype.isReactComponent = {}, D.prototype.setState = function (C, z) {
        if (typeof C != "object" && typeof C != "function" && C != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, C, z, "setState")
    }, D.prototype.forceUpdate = function (C) {
        this.updater.enqueueForceUpdate(this, C, "forceUpdate")
    };

    function O() {}
    O.prototype = D.prototype;

    function j(C, z, ae) {
        this.props = C, this.context = z, this.refs = P, this.updater = ae || k
    }
    var F = j.prototype = new O;
    F.constructor = j, T(F, D.prototype), F.isPureReactComponent = !0;
    var J = Array.isArray,
        G = Object.prototype.hasOwnProperty,
        ee = {
            current: null
        },
        de = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function q(C, z, ae) {
        var fe, ue = {},
            pe = null,
            R = null;
        if (z != null)
            for (fe in z.ref !== void 0 && (R = z.ref), z.key !== void 0 && (pe = "" + z.key), z) G.call(z, fe) && !de.hasOwnProperty(fe) && (ue[fe] = z[fe]);
        var L = arguments.length - 2;
        if (L === 1) ue.children = ae;
        else if (1 < L) {
            for (var Q = Array(L), le = 0; le < L; le++) Q[le] = arguments[le + 2];
            ue.children = Q
        }
        if (C && C.defaultProps)
            for (fe in L = C.defaultProps, L) ue[fe] === void 0 && (ue[fe] = L[fe]);
        return {
            $$typeof: i,
            type: C,
            key: pe,
            ref: R,
            props: ue,
            _owner: ee.current
        }
    }

    function ve(C, z) {
        return {
            $$typeof: i,
            type: C.type,
            key: z,
            ref: C.ref,
            props: C.props,
            _owner: C._owner
        }
    }

    function we(C) {
        return typeof C == "object" && C !== null && C.$$typeof === i
    }

    function Le(C) {
        var z = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + C.replace(/[=:]/g, function (ae) {
            return z[ae]
        })
    }
    var et = /\/+/g;

    function Ke(C, z) {
        return typeof C == "object" && C !== null && C.key != null ? Le("" + C.key) : z.toString(36)
    }

    function Ge(C, z, ae, fe, ue) {
        var pe = typeof C;
        (pe === "undefined" || pe === "boolean") && (C = null);
        var R = !1;
        if (C === null) R = !0;
        else switch (pe) {
        case "string":
        case "number":
            R = !0;
            break;
        case "object":
            switch (C.$$typeof) {
            case i:
            case t:
                R = !0
            }
        }
        if (R) return R = C, ue = ue(R), C = fe === "" ? "." + Ke(R, 0) : fe, J(ue) ? (ae = "", C != null && (ae = C.replace(et, "$&/") + "/"), Ge(ue, z, ae, "", function (le) {
            return le
        })) : ue != null && (we(ue) && (ue = ve(ue, ae + (!ue.key || R && R.key === ue.key ? "" : ("" + ue.key).replace(et, "$&/") + "/") + C)), z.push(ue)), 1;
        if (R = 0, fe = fe === "" ? "." : fe + ":", J(C))
            for (var L = 0; L < C.length; L++) {
                pe = C[L];
                var Q = fe + Ke(pe, L);
                R += Ge(pe, z, ae, Q, ue)
            } else if (Q = w(C), typeof Q == "function")
                for (C = Q.call(C), L = 0; !(pe = C.next()).done;) pe = pe.value, Q = fe + Ke(pe, L++), R += Ge(pe, z, ae, Q, ue);
            else if (pe === "object") throw z = String(C), Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
        return R
    }

    function ct(C, z, ae) {
        if (C == null) return C;
        var fe = [],
            ue = 0;
        return Ge(C, fe, "", "", function (pe) {
            return z.call(ae, pe, ue++)
        }), fe
    }

    function be(C) {
        if (C._status === -1) {
            var z = C._result;
            z = z(), z.then(function (ae) {
                (C._status === 0 || C._status === -1) && (C._status = 1, C._result = ae)
            }, function (ae) {
                (C._status === 0 || C._status === -1) && (C._status = 2, C._result = ae)
            }), C._status === -1 && (C._status = 0, C._result = z)
        }
        if (C._status === 1) return C._result.default;
        throw C._result
    }
    var ce = {
            current: null
        },
        B = {
            transition: null
        },
        Z = {
            ReactCurrentDispatcher: ce,
            ReactCurrentBatchConfig: B,
            ReactCurrentOwner: ee
        };

    function U() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return he.Children = {
        map: ct,
        forEach: function (C, z, ae) {
            ct(C, function () {
                z.apply(this, arguments)
            }, ae)
        },
        count: function (C) {
            var z = 0;
            return ct(C, function () {
                z++
            }), z
        },
        toArray: function (C) {
            return ct(C, function (z) {
                return z
            }) || []
        },
        only: function (C) {
            if (!we(C)) throw Error("React.Children.only expected to receive a single React element child.");
            return C
        }
    }, he.Component = D, he.Fragment = r, he.Profiler = a, he.PureComponent = j, he.StrictMode = o, he.Suspense = p, he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z, he.act = U, he.cloneElement = function (C, z, ae) {
        if (C == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + C + ".");
        var fe = T({}, C.props),
            ue = C.key,
            pe = C.ref,
            R = C._owner;
        if (z != null) {
            if (z.ref !== void 0 && (pe = z.ref, R = ee.current), z.key !== void 0 && (ue = "" + z.key), C.type && C.type.defaultProps) var L = C.type.defaultProps;
            for (Q in z) G.call(z, Q) && !de.hasOwnProperty(Q) && (fe[Q] = z[Q] === void 0 && L !== void 0 ? L[Q] : z[Q])
        }
        var Q = arguments.length - 2;
        if (Q === 1) fe.children = ae;
        else if (1 < Q) {
            L = Array(Q);
            for (var le = 0; le < Q; le++) L[le] = arguments[le + 2];
            fe.children = L
        }
        return {
            $$typeof: i,
            type: C.type,
            key: ue,
            ref: pe,
            props: fe,
            _owner: R
        }
    }, he.createContext = function (C) {
        return C = {
            $$typeof: f,
            _currentValue: C,
            _currentValue2: C,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, C.Provider = {
            $$typeof: c,
            _context: C
        }, C.Consumer = C
    }, he.createElement = q, he.createFactory = function (C) {
        var z = q.bind(null, C);
        return z.type = C, z
    }, he.createRef = function () {
        return {
            current: null
        }
    }, he.forwardRef = function (C) {
        return {
            $$typeof: d,
            render: C
        }
    }, he.isValidElement = we, he.lazy = function (C) {
        return {
            $$typeof: y,
            _payload: {
                _status: -1,
                _result: C
            },
            _init: be
        }
    }, he.memo = function (C, z) {
        return {
            $$typeof: m,
            type: C,
            compare: z === void 0 ? null : z
        }
    }, he.startTransition = function (C) {
        var z = B.transition;
        B.transition = {};
        try {
            C()
        } finally {
            B.transition = z
        }
    }, he.unstable_act = U, he.useCallback = function (C, z) {
        return ce.current.useCallback(C, z)
    }, he.useContext = function (C) {
        return ce.current.useContext(C)
    }, he.useDebugValue = function () {}, he.useDeferredValue = function (C) {
        return ce.current.useDeferredValue(C)
    }, he.useEffect = function (C, z) {
        return ce.current.useEffect(C, z)
    }, he.useId = function () {
        return ce.current.useId()
    }, he.useImperativeHandle = function (C, z, ae) {
        return ce.current.useImperativeHandle(C, z, ae)
    }, he.useInsertionEffect = function (C, z) {
        return ce.current.useInsertionEffect(C, z)
    }, he.useLayoutEffect = function (C, z) {
        return ce.current.useLayoutEffect(C, z)
    }, he.useMemo = function (C, z) {
        return ce.current.useMemo(C, z)
    }, he.useReducer = function (C, z, ae) {
        return ce.current.useReducer(C, z, ae)
    }, he.useRef = function (C) {
        return ce.current.useRef(C)
    }, he.useState = function (C) {
        return ce.current.useState(C)
    }, he.useSyncExternalStore = function (C, z, ae) {
        return ce.current.useSyncExternalStore(C, z, ae)
    }, he.useTransition = function () {
        return ce.current.useTransition()
    }, he.version = "18.3.1", he
}
var Qh;

function Su() {
    return Qh || (Qh = 1, Ra.exports = yv()), Ra.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qh;

function vv() {
    if (qh) return Rr;
    qh = 1;
    var i = Su(),
        t = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        a = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function f(d, p, m) {
        var y, v = {},
            w = null,
            k = null;
        m !== void 0 && (w = "" + m), p.key !== void 0 && (w = "" + p.key), p.ref !== void 0 && (k = p.ref);
        for (y in p) o.call(p, y) && !c.hasOwnProperty(y) && (v[y] = p[y]);
        if (d && d.defaultProps)
            for (y in p = d.defaultProps, p) v[y] === void 0 && (v[y] = p[y]);
        return {
            $$typeof: t,
            type: d,
            key: w,
            ref: k,
            props: v,
            _owner: a.current
        }
    }
    return Rr.Fragment = r, Rr.jsx = f, Rr.jsxs = f, Rr
}
var Zh;

function wv() {
    return Zh || (Zh = 1, Ma.exports = vv()), Ma.exports
}
var W = wv(),
    se = Su();
const Jh = zp(se);
var uo = {},
    Da = {
        exports: {}
    },
    gt = {},
    Aa = {
        exports: {}
    },
    Oa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ed;

function xv() {
    return ed || (ed = 1, function (i) {
        function t(B, Z) {
            var U = B.length;
            B.push(Z);
            e: for (; 0 < U;) {
                var C = U - 1 >>> 1,
                    z = B[C];
                if (0 < a(z, Z)) B[C] = Z, B[U] = z, U = C;
                else break e
            }
        }

        function r(B) {
            return B.length === 0 ? null : B[0]
        }

        function o(B) {
            if (B.length === 0) return null;
            var Z = B[0],
                U = B.pop();
            if (U !== Z) {
                B[0] = U;
                e: for (var C = 0, z = B.length, ae = z >>> 1; C < ae;) {
                    var fe = 2 * (C + 1) - 1,
                        ue = B[fe],
                        pe = fe + 1,
                        R = B[pe];
                    if (0 > a(ue, U)) pe < z && 0 > a(R, ue) ? (B[C] = R, B[pe] = U, C = pe) : (B[C] = ue, B[fe] = U, C = fe);
                    else if (pe < z && 0 > a(R, U)) B[C] = R, B[pe] = U, C = pe;
                    else break e
                }
            }
            return Z
        }

        function a(B, Z) {
            var U = B.sortIndex - Z.sortIndex;
            return U !== 0 ? U : B.id - Z.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var c = performance;
            i.unstable_now = function () {
                return c.now()
            }
        } else {
            var f = Date,
                d = f.now();
            i.unstable_now = function () {
                return f.now() - d
            }
        }
        var p = [],
            m = [],
            y = 1,
            v = null,
            w = 3,
            k = !1,
            T = !1,
            P = !1,
            D = typeof setTimeout == "function" ? setTimeout : null,
            O = typeof clearTimeout == "function" ? clearTimeout : null,
            j = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function F(B) {
            for (var Z = r(m); Z !== null;) {
                if (Z.callback === null) o(m);
                else if (Z.startTime <= B) o(m), Z.sortIndex = Z.expirationTime, t(p, Z);
                else break;
                Z = r(m)
            }
        }

        function J(B) {
            if (P = !1, F(B), !T)
                if (r(p) !== null) T = !0, be(G);
                else {
                    var Z = r(m);
                    Z !== null && ce(J, Z.startTime - B)
                }
        }

        function G(B, Z) {
            T = !1, P && (P = !1, O(q), q = -1), k = !0;
            var U = w;
            try {
                for (F(Z), v = r(p); v !== null && (!(v.expirationTime > Z) || B && !Le());) {
                    var C = v.callback;
                    if (typeof C == "function") {
                        v.callback = null, w = v.priorityLevel;
                        var z = C(v.expirationTime <= Z);
                        Z = i.unstable_now(), typeof z == "function" ? v.callback = z : v === r(p) && o(p), F(Z)
                    } else o(p);
                    v = r(p)
                }
                if (v !== null) var ae = !0;
                else {
                    var fe = r(m);
                    fe !== null && ce(J, fe.startTime - Z), ae = !1
                }
                return ae
            } finally {
                v = null, w = U, k = !1
            }
        }
        var ee = !1,
            de = null,
            q = -1,
            ve = 5,
            we = -1;

        function Le() {
            return !(i.unstable_now() - we < ve)
        }

        function et() {
            if (de !== null) {
                var B = i.unstable_now();
                we = B;
                var Z = !0;
                try {
                    Z = de(!0, B)
                } finally {
                    Z ? Ke() : (ee = !1, de = null)
                }
            } else ee = !1
        }
        var Ke;
        if (typeof j == "function") Ke = function () {
            j(et)
        };
        else if (typeof MessageChannel < "u") {
            var Ge = new MessageChannel,
                ct = Ge.port2;
            Ge.port1.onmessage = et, Ke = function () {
                ct.postMessage(null)
            }
        } else Ke = function () {
            D(et, 0)
        };

        function be(B) {
            de = B, ee || (ee = !0, Ke())
        }

        function ce(B, Z) {
            q = D(function () {
                B(i.unstable_now())
            }, Z)
        }
        i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function (B) {
            B.callback = null
        }, i.unstable_continueExecution = function () {
            T || k || (T = !0, be(G))
        }, i.unstable_forceFrameRate = function (B) {
            0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ve = 0 < B ? Math.floor(1e3 / B) : 5
        }, i.unstable_getCurrentPriorityLevel = function () {
            return w
        }, i.unstable_getFirstCallbackNode = function () {
            return r(p)
        }, i.unstable_next = function (B) {
            switch (w) {
            case 1:
            case 2:
            case 3:
                var Z = 3;
                break;
            default:
                Z = w
            }
            var U = w;
            w = Z;
            try {
                return B()
            } finally {
                w = U
            }
        }, i.unstable_pauseExecution = function () {}, i.unstable_requestPaint = function () {}, i.unstable_runWithPriority = function (B, Z) {
            switch (B) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                B = 3
            }
            var U = w;
            w = B;
            try {
                return Z()
            } finally {
                w = U
            }
        }, i.unstable_scheduleCallback = function (B, Z, U) {
            var C = i.unstable_now();
            switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? C + U : C) : U = C, B) {
            case 1:
                var z = -1;
                break;
            case 2:
                z = 250;
                break;
            case 5:
                z = 1073741823;
                break;
            case 4:
                z = 1e4;
                break;
            default:
                z = 5e3
            }
            return z = U + z, B = {
                id: y++,
                callback: Z,
                priorityLevel: B,
                startTime: U,
                expirationTime: z,
                sortIndex: -1
            }, U > C ? (B.sortIndex = U, t(m, B), r(p) === null && B === r(m) && (P ? (O(q), q = -1) : P = !0, ce(J, U - C))) : (B.sortIndex = z, t(p, B), T || k || (T = !0, be(G))), B
        }, i.unstable_shouldYield = Le, i.unstable_wrapCallback = function (B) {
            var Z = w;
            return function () {
                var U = w;
                w = Z;
                try {
                    return B.apply(this, arguments)
                } finally {
                    w = U
                }
            }
        }
    }(Oa)), Oa
}
var td;

function Sv() {
    return td || (td = 1, Aa.exports = xv()), Aa.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nd;

function Pv() {
    if (nd) return gt;
    nd = 1;
    var i = Su(),
        t = Sv();

    function r(e) {
        for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, s = 1; s < arguments.length; s++) n += "&args[]=" + encodeURIComponent(arguments[s]);
        return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var o = new Set,
        a = {};

    function c(e, n) {
        f(e, n), f(e + "Capture", n)
    }

    function f(e, n) {
        for (a[e] = n, e = 0; e < n.length; e++) o.add(n[e])
    }
    var d = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        p = Object.prototype.hasOwnProperty,
        m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        y = {},
        v = {};

    function w(e) {
        return p.call(v, e) ? !0 : p.call(y, e) ? !1 : m.test(e) ? v[e] = !0 : (y[e] = !0, !1)
    }

    function k(e, n, s, l) {
        if (s !== null && s.type === 0) return !1;
        switch (typeof n) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return l ? !1 : s !== null ? !s.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
        }
    }

    function T(e, n, s, l) {
        if (n === null || typeof n > "u" || k(e, n, s, l)) return !0;
        if (l) return !1;
        if (s !== null) switch (s.type) {
        case 3:
            return !n;
        case 4:
            return n === !1;
        case 5:
            return isNaN(n);
        case 6:
            return isNaN(n) || 1 > n
        }
        return !1
    }

    function P(e, n, s, l, u, h, g) {
        this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = l, this.attributeNamespace = u, this.mustUseProperty = s, this.propertyName = e, this.type = n, this.sanitizeURL = h, this.removeEmptyString = g
    }
    var D = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
        D[e] = new P(e, 0, !1, e, null, !1, !1)
    }), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function (e) {
        var n = e[0];
        D[n] = new P(n, 1, !1, e[1], null, !1, !1)
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
        D[e] = new P(e, 2, !1, e.toLowerCase(), null, !1, !1)
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
        D[e] = new P(e, 2, !1, e, null, !1, !1)
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
        D[e] = new P(e, 3, !1, e.toLowerCase(), null, !1, !1)
    }), ["checked", "multiple", "muted", "selected"].forEach(function (e) {
        D[e] = new P(e, 3, !0, e, null, !1, !1)
    }), ["capture", "download"].forEach(function (e) {
        D[e] = new P(e, 4, !1, e, null, !1, !1)
    }), ["cols", "rows", "size", "span"].forEach(function (e) {
        D[e] = new P(e, 6, !1, e, null, !1, !1)
    }), ["rowSpan", "start"].forEach(function (e) {
        D[e] = new P(e, 5, !1, e.toLowerCase(), null, !1, !1)
    });
    var O = /[\-:]([a-z])/g;

    function j(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
        var n = e.replace(O, j);
        D[n] = new P(n, 1, !1, e, null, !1, !1)
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
        var n = e.replace(O, j);
        D[n] = new P(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
        var n = e.replace(O, j);
        D[n] = new P(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
    }), ["tabIndex", "crossOrigin"].forEach(function (e) {
        D[e] = new P(e, 1, !1, e.toLowerCase(), null, !1, !1)
    }), D.xlinkHref = new P("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function (e) {
        D[e] = new P(e, 1, !1, e.toLowerCase(), null, !0, !0)
    });

    function F(e, n, s, l) {
        var u = D.hasOwnProperty(n) ? D[n] : null;
        (u !== null ? u.type !== 0 : l || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (T(n, s, u, l) && (s = null), l || u === null ? w(n) && (s === null ? e.removeAttribute(n) : e.setAttribute(n, "" + s)) : u.mustUseProperty ? e[u.propertyName] = s === null ? u.type === 3 ? !1 : "" : s : (n = u.attributeName, l = u.attributeNamespace, s === null ? e.removeAttribute(n) : (u = u.type, s = u === 3 || u === 4 && s === !0 ? "" : "" + s, l ? e.setAttributeNS(l, n, s) : e.setAttribute(n, s))))
    }
    var J = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        G = Symbol.for("react.element"),
        ee = Symbol.for("react.portal"),
        de = Symbol.for("react.fragment"),
        q = Symbol.for("react.strict_mode"),
        ve = Symbol.for("react.profiler"),
        we = Symbol.for("react.provider"),
        Le = Symbol.for("react.context"),
        et = Symbol.for("react.forward_ref"),
        Ke = Symbol.for("react.suspense"),
        Ge = Symbol.for("react.suspense_list"),
        ct = Symbol.for("react.memo"),
        be = Symbol.for("react.lazy"),
        ce = Symbol.for("react.offscreen"),
        B = Symbol.iterator;

    function Z(e) {
        return e === null || typeof e != "object" ? null : (e = B && e[B] || e["@@iterator"], typeof e == "function" ? e : null)
    }
    var U = Object.assign,
        C;

    function z(e) {
        if (C === void 0) try {
            throw Error()
        } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            C = n && n[1] || ""
        }
        return `
` + C + e
    }
    var ae = !1;

    function fe(e, n) {
        if (!e || ae) return "";
        ae = !0;
        var s = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (n)
                if (n = function () {
                        throw Error()
                    }, Object.defineProperty(n.prototype, "props", {
                        set: function () {
                            throw Error()
                        }
                    }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(n, [])
                    } catch (A) {
                        var l = A
                    }
                    Reflect.construct(e, [], n)
                } else {
                    try {
                        n.call()
                    } catch (A) {
                        l = A
                    }
                    e.call(n.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (A) {
                    l = A
                }
                e()
            }
        } catch (A) {
            if (A && l && typeof A.stack == "string") {
                for (var u = A.stack.split(`
`), h = l.stack.split(`
`), g = u.length - 1, x = h.length - 1; 1 <= g && 0 <= x && u[g] !== h[x];) x--;
                for (; 1 <= g && 0 <= x; g--, x--)
                    if (u[g] !== h[x]) {
                        if (g !== 1 || x !== 1)
                            do
                                if (g--, x--, 0 > x || u[g] !== h[x]) {
                                    var S = `
` + u[g].replace(" at new ", " at ");
                                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), S
                                } while (1 <= g && 0 <= x);
                        break
                    }
            }
        } finally {
            ae = !1, Error.prepareStackTrace = s
        }
        return (e = e ? e.displayName || e.name : "") ? z(e) : ""
    }

    function ue(e) {
        switch (e.tag) {
        case 5:
            return z(e.type);
        case 16:
            return z("Lazy");
        case 13:
            return z("Suspense");
        case 19:
            return z("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = fe(e.type, !1), e;
        case 11:
            return e = fe(e.type.render, !1), e;
        case 1:
            return e = fe(e.type, !0), e;
        default:
            return ""
        }
    }

    function pe(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
        case de:
            return "Fragment";
        case ee:
            return "Portal";
        case ve:
            return "Profiler";
        case q:
            return "StrictMode";
        case Ke:
            return "Suspense";
        case Ge:
            return "SuspenseList"
        }
        if (typeof e == "object") switch (e.$$typeof) {
        case Le:
            return (e.displayName || "Context") + ".Consumer";
        case we:
            return (e._context.displayName || "Context") + ".Provider";
        case et:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ct:
            return n = e.displayName || null, n !== null ? n : pe(e.type) || "Memo";
        case be:
            n = e._payload, e = e._init;
            try {
                return pe(e(n))
            } catch {}
        }
        return null
    }

    function R(e) {
        var n = e.type;
        switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (n.displayName || "Context") + ".Consumer";
        case 10:
            return (n._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return n;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return pe(n);
        case 8:
            return n === q ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof n == "function") return n.displayName || n.name || null;
            if (typeof n == "string") return n
        }
        return null
    }

    function L(e) {
        switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }

    function Q(e) {
        var n = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio")
    }

    function le(e) {
        var n = Q(e) ? "checked" : "value",
            s = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
            l = "" + e[n];
        if (!e.hasOwnProperty(n) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
            var u = s.get,
                h = s.set;
            return Object.defineProperty(e, n, {
                configurable: !0,
                get: function () {
                    return u.call(this)
                },
                set: function (g) {
                    l = "" + g, h.call(this, g)
                }
            }), Object.defineProperty(e, n, {
                enumerable: s.enumerable
            }), {
                getValue: function () {
                    return l
                },
                setValue: function (g) {
                    l = "" + g
                },
                stopTracking: function () {
                    e._valueTracker = null, delete e[n]
                }
            }
        }
    }

    function oe(e) {
        e._valueTracker || (e._valueTracker = le(e))
    }

    function Pe(e) {
        if (!e) return !1;
        var n = e._valueTracker;
        if (!n) return !0;
        var s = n.getValue(),
            l = "";
        return e && (l = Q(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== s ? (n.setValue(e), !0) : !1
    }

    function $e(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }

    function Be(e, n) {
        var s = n.checked;
        return U({}, n, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: s ?? e._wrapperState.initialChecked
        })
    }

    function Se(e, n) {
        var s = n.defaultValue == null ? "" : n.defaultValue,
            l = n.checked != null ? n.checked : n.defaultChecked;
        s = L(n.value != null ? n.value : s), e._wrapperState = {
            initialChecked: l,
            initialValue: s,
            controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null
        }
    }

    function Ne(e, n) {
        n = n.checked, n != null && F(e, "checked", n, !1)
    }

    function Ut(e, n) {
        Ne(e, n);
        var s = L(n.value),
            l = n.type;
        if (s != null) l === "number" ? (s === 0 && e.value === "" || e.value != s) && (e.value = "" + s) : e.value !== "" + s && (e.value = "" + s);
        else if (l === "submit" || l === "reset") {
            e.removeAttribute("value");
            return
        }
        n.hasOwnProperty("value") ? Io(e, n.type, s) : n.hasOwnProperty("defaultValue") && Io(e, n.type, L(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked)
    }

    function $t(e, n, s) {
        if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
            var l = n.type;
            if (!(l !== "submit" && l !== "reset" || n.value !== void 0 && n.value !== null)) return;
            n = "" + e._wrapperState.initialValue, s || n === e.value || (e.value = n), e.defaultValue = n
        }
        s = e.name, s !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, s !== "" && (e.name = s)
    }

    function Io(e, n, s) {
        (n !== "number" || $e(e.ownerDocument) !== e) && (s == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + s && (e.defaultValue = "" + s))
    }
    var Wi = Array.isArray;

    function ri(e, n, s, l) {
        if (e = e.options, n) {
            n = {};
            for (var u = 0; u < s.length; u++) n["$" + s[u]] = !0;
            for (s = 0; s < e.length; s++) u = n.hasOwnProperty("$" + e[s].value), e[s].selected !== u && (e[s].selected = u), u && l && (e[s].defaultSelected = !0)
        } else {
            for (s = "" + L(s), n = null, u = 0; u < e.length; u++) {
                if (e[u].value === s) {
                    e[u].selected = !0, l && (e[u].defaultSelected = !0);
                    return
                }
                n !== null || e[u].disabled || (n = e[u])
            }
            n !== null && (n.selected = !0)
        }
    }

    function Fo(e, n) {
        if (n.dangerouslySetInnerHTML != null) throw Error(r(91));
        return U({}, n, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }

    function rc(e, n) {
        var s = n.value;
        if (s == null) {
            if (s = n.children, n = n.defaultValue, s != null) {
                if (n != null) throw Error(r(92));
                if (Wi(s)) {
                    if (1 < s.length) throw Error(r(93));
                    s = s[0]
                }
                n = s
            }
            n == null && (n = ""), s = n
        }
        e._wrapperState = {
            initialValue: L(s)
        }
    }

    function sc(e, n) {
        var s = L(n.value),
            l = L(n.defaultValue);
        s != null && (s = "" + s, s !== e.value && (e.value = s), n.defaultValue == null && e.defaultValue !== s && (e.defaultValue = s)), l != null && (e.defaultValue = "" + l)
    }

    function oc(e) {
        var n = e.textContent;
        n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n)
    }

    function lc(e) {
        switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }

    function jo(e, n) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? lc(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }
    var ts, ac = function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (n, s, l, u) {
            MSApp.execUnsafeLocalFunction(function () {
                return e(n, s, l, u)
            })
        } : e
    }(function (e, n) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
        else {
            for (ts = ts || document.createElement("div"), ts.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = ts.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; n.firstChild;) e.appendChild(n.firstChild)
        }
    });

    function Hi(e, n) {
        if (n) {
            var s = e.firstChild;
            if (s && s === e.lastChild && s.nodeType === 3) {
                s.nodeValue = n;
                return
            }
        }
        e.textContent = n
    }
    var Ki = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        Pg = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ki).forEach(function (e) {
        Pg.forEach(function (n) {
            n = n + e.charAt(0).toUpperCase() + e.substring(1), Ki[n] = Ki[e]
        })
    });

    function uc(e, n, s) {
        return n == null || typeof n == "boolean" || n === "" ? "" : s || typeof n != "number" || n === 0 || Ki.hasOwnProperty(e) && Ki[e] ? ("" + n).trim() : n + "px"
    }

    function cc(e, n) {
        e = e.style;
        for (var s in n)
            if (n.hasOwnProperty(s)) {
                var l = s.indexOf("--") === 0,
                    u = uc(s, n[s], l);
                s === "float" && (s = "cssFloat"), l ? e.setProperty(s, u) : e[s] = u
            }
    }
    var _g = U({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function bo(e, n) {
        if (n) {
            if (_g[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(r(137, e));
            if (n.dangerouslySetInnerHTML != null) {
                if (n.children != null) throw Error(r(60));
                if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(r(61))
            }
            if (n.style != null && typeof n.style != "object") throw Error(r(62))
        }
    }

    function Bo(e, n) {
        if (e.indexOf("-") === -1) return typeof n.is == "string";
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Uo = null;

    function $o(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
    }
    var Wo = null,
        si = null,
        oi = null;

    function fc(e) {
        if (e = pr(e)) {
            if (typeof Wo != "function") throw Error(r(280));
            var n = e.stateNode;
            n && (n = ks(n), Wo(e.stateNode, e.type, n))
        }
    }

    function hc(e) {
        si ? oi ? oi.push(e) : oi = [e] : si = e
    }

    function dc() {
        if (si) {
            var e = si,
                n = oi;
            if (oi = si = null, fc(e), n)
                for (e = 0; e < n.length; e++) fc(n[e])
        }
    }

    function pc(e, n) {
        return e(n)
    }

    function mc() {}
    var Ho = !1;

    function gc(e, n, s) {
        if (Ho) return e(n, s);
        Ho = !0;
        try {
            return pc(e, n, s)
        } finally {
            Ho = !1, (si !== null || oi !== null) && (mc(), dc())
        }
    }

    function Gi(e, n) {
        var s = e.stateNode;
        if (s === null) return null;
        var l = ks(s);
        if (l === null) return null;
        s = l[n];
        e: switch (n) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
            break e;
        default:
            e = !1
        }
        if (e) return null;
        if (s && typeof s != "function") throw Error(r(231, n, typeof s));
        return s
    }
    var Ko = !1;
    if (d) try {
        var Yi = {};
        Object.defineProperty(Yi, "passive", {
            get: function () {
                Ko = !0
            }
        }), window.addEventListener("test", Yi, Yi), window.removeEventListener("test", Yi, Yi)
    } catch {
        Ko = !1
    }

    function kg(e, n, s, l, u, h, g, x, S) {
        var A = Array.prototype.slice.call(arguments, 3);
        try {
            n.apply(s, A)
        } catch (N) {
            this.onError(N)
        }
    }
    var Xi = !1,
        ns = null,
        is = !1,
        Go = null,
        Tg = {
            onError: function (e) {
                Xi = !0, ns = e
            }
        };

    function Cg(e, n, s, l, u, h, g, x, S) {
        Xi = !1, ns = null, kg.apply(Tg, arguments)
    }

    function Eg(e, n, s, l, u, h, g, x, S) {
        if (Cg.apply(this, arguments), Xi) {
            if (Xi) {
                var A = ns;
                Xi = !1, ns = null
            } else throw Error(r(198));
            is || (is = !0, Go = A)
        }
    }

    function In(e) {
        var n = e,
            s = e;
        if (e.alternate)
            for (; n.return;) n = n.return;
        else {
            e = n;
            do n = e, n.flags & 4098 && (s = n.return), e = n.return; while (e)
        }
        return n.tag === 3 ? s : null
    }

    function yc(e) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated
        }
        return null
    }

    function vc(e) {
        if (In(e) !== e) throw Error(r(188))
    }

    function Mg(e) {
        var n = e.alternate;
        if (!n) {
            if (n = In(e), n === null) throw Error(r(188));
            return n !== e ? null : e
        }
        for (var s = e, l = n;;) {
            var u = s.return;
            if (u === null) break;
            var h = u.alternate;
            if (h === null) {
                if (l = u.return, l !== null) {
                    s = l;
                    continue
                }
                break
            }
            if (u.child === h.child) {
                for (h = u.child; h;) {
                    if (h === s) return vc(u), e;
                    if (h === l) return vc(u), n;
                    h = h.sibling
                }
                throw Error(r(188))
            }
            if (s.return !== l.return) s = u, l = h;
            else {
                for (var g = !1, x = u.child; x;) {
                    if (x === s) {
                        g = !0, s = u, l = h;
                        break
                    }
                    if (x === l) {
                        g = !0, l = u, s = h;
                        break
                    }
                    x = x.sibling
                }
                if (!g) {
                    for (x = h.child; x;) {
                        if (x === s) {
                            g = !0, s = h, l = u;
                            break
                        }
                        if (x === l) {
                            g = !0, l = h, s = u;
                            break
                        }
                        x = x.sibling
                    }
                    if (!g) throw Error(r(189))
                }
            }
            if (s.alternate !== l) throw Error(r(190))
        }
        if (s.tag !== 3) throw Error(r(188));
        return s.stateNode.current === s ? e : n
    }

    function wc(e) {
        return e = Mg(e), e !== null ? xc(e) : null
    }

    function xc(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null;) {
            var n = xc(e);
            if (n !== null) return n;
            e = e.sibling
        }
        return null
    }
    var Sc = t.unstable_scheduleCallback,
        Pc = t.unstable_cancelCallback,
        Rg = t.unstable_shouldYield,
        Dg = t.unstable_requestPaint,
        Ie = t.unstable_now,
        Ag = t.unstable_getCurrentPriorityLevel,
        Yo = t.unstable_ImmediatePriority,
        _c = t.unstable_UserBlockingPriority,
        rs = t.unstable_NormalPriority,
        Og = t.unstable_LowPriority,
        kc = t.unstable_IdlePriority,
        ss = null,
        Wt = null;

    function Lg(e) {
        if (Wt && typeof Wt.onCommitFiberRoot == "function") try {
            Wt.onCommitFiberRoot(ss, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
    }
    var Lt = Math.clz32 ? Math.clz32 : Ng,
        zg = Math.log,
        Vg = Math.LN2;

    function Ng(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (zg(e) / Vg | 0) | 0
    }
    var os = 64,
        ls = 4194304;

    function Qi(e) {
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
        }
    }

    function as(e, n) {
        var s = e.pendingLanes;
        if (s === 0) return 0;
        var l = 0,
            u = e.suspendedLanes,
            h = e.pingedLanes,
            g = s & 268435455;
        if (g !== 0) {
            var x = g & ~u;
            x !== 0 ? l = Qi(x) : (h &= g, h !== 0 && (l = Qi(h)))
        } else g = s & ~u, g !== 0 ? l = Qi(g) : h !== 0 && (l = Qi(h));
        if (l === 0) return 0;
        if (n !== 0 && n !== l && !(n & u) && (u = l & -l, h = n & -n, u >= h || u === 16 && (h & 4194240) !== 0)) return n;
        if (l & 4 && (l |= s & 16), n = e.entangledLanes, n !== 0)
            for (e = e.entanglements, n &= l; 0 < n;) s = 31 - Lt(n), u = 1 << s, l |= e[s], n &= ~u;
        return l
    }

    function Ig(e, n) {
        switch (e) {
        case 1:
        case 2:
        case 4:
            return n + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return n + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }

    function Fg(e, n) {
        for (var s = e.suspendedLanes, l = e.pingedLanes, u = e.expirationTimes, h = e.pendingLanes; 0 < h;) {
            var g = 31 - Lt(h),
                x = 1 << g,
                S = u[g];
            S === -1 ? (!(x & s) || x & l) && (u[g] = Ig(x, n)) : S <= n && (e.expiredLanes |= x), h &= ~x
        }
    }

    function Xo(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }

    function Tc() {
        var e = os;
        return os <<= 1, !(os & 4194240) && (os = 64), e
    }

    function Qo(e) {
        for (var n = [], s = 0; 31 > s; s++) n.push(e);
        return n
    }

    function qi(e, n, s) {
        e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Lt(n), e[n] = s
    }

    function jg(e, n) {
        var s = e.pendingLanes & ~n;
        e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
        var l = e.eventTimes;
        for (e = e.expirationTimes; 0 < s;) {
            var u = 31 - Lt(s),
                h = 1 << u;
            n[u] = 0, l[u] = -1, e[u] = -1, s &= ~h
        }
    }

    function qo(e, n) {
        var s = e.entangledLanes |= n;
        for (e = e.entanglements; s;) {
            var l = 31 - Lt(s),
                u = 1 << l;
            u & n | e[l] & n && (e[l] |= n), s &= ~u
        }
    }
    var xe = 0;

    function Cc(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
    }
    var Ec, Zo, Mc, Rc, Dc, Jo = !1,
        us = [],
        dn = null,
        pn = null,
        mn = null,
        Zi = new Map,
        Ji = new Map,
        gn = [],
        bg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

    function Ac(e, n) {
        switch (e) {
        case "focusin":
        case "focusout":
            dn = null;
            break;
        case "dragenter":
        case "dragleave":
            pn = null;
            break;
        case "mouseover":
        case "mouseout":
            mn = null;
            break;
        case "pointerover":
        case "pointerout":
            Zi.delete(n.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Ji.delete(n.pointerId)
        }
    }

    function er(e, n, s, l, u, h) {
        return e === null || e.nativeEvent !== h ? (e = {
            blockedOn: n,
            domEventName: s,
            eventSystemFlags: l,
            nativeEvent: h,
            targetContainers: [u]
        }, n !== null && (n = pr(n), n !== null && Zo(n)), e) : (e.eventSystemFlags |= l, n = e.targetContainers, u !== null && n.indexOf(u) === -1 && n.push(u), e)
    }

    function Bg(e, n, s, l, u) {
        switch (n) {
        case "focusin":
            return dn = er(dn, e, n, s, l, u), !0;
        case "dragenter":
            return pn = er(pn, e, n, s, l, u), !0;
        case "mouseover":
            return mn = er(mn, e, n, s, l, u), !0;
        case "pointerover":
            var h = u.pointerId;
            return Zi.set(h, er(Zi.get(h) || null, e, n, s, l, u)), !0;
        case "gotpointercapture":
            return h = u.pointerId, Ji.set(h, er(Ji.get(h) || null, e, n, s, l, u)), !0
        }
        return !1
    }

    function Oc(e) {
        var n = Fn(e.target);
        if (n !== null) {
            var s = In(n);
            if (s !== null) {
                if (n = s.tag, n === 13) {
                    if (n = yc(s), n !== null) {
                        e.blockedOn = n, Dc(e.priority, function () {
                            Mc(s)
                        });
                        return
                    }
                } else if (n === 3 && s.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }

    function cs(e) {
        if (e.blockedOn !== null) return !1;
        for (var n = e.targetContainers; 0 < n.length;) {
            var s = tl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
            if (s === null) {
                s = e.nativeEvent;
                var l = new s.constructor(s.type, s);
                Uo = l, s.target.dispatchEvent(l), Uo = null
            } else return n = pr(s), n !== null && Zo(n), e.blockedOn = s, !1;
            n.shift()
        }
        return !0
    }

    function Lc(e, n, s) {
        cs(e) && s.delete(n)
    }

    function Ug() {
        Jo = !1, dn !== null && cs(dn) && (dn = null), pn !== null && cs(pn) && (pn = null), mn !== null && cs(mn) && (mn = null), Zi.forEach(Lc), Ji.forEach(Lc)
    }

    function tr(e, n) {
        e.blockedOn === n && (e.blockedOn = null, Jo || (Jo = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, Ug)))
    }

    function nr(e) {
        function n(u) {
            return tr(u, e)
        }
        if (0 < us.length) {
            tr(us[0], e);
            for (var s = 1; s < us.length; s++) {
                var l = us[s];
                l.blockedOn === e && (l.blockedOn = null)
            }
        }
        for (dn !== null && tr(dn, e), pn !== null && tr(pn, e), mn !== null && tr(mn, e), Zi.forEach(n), Ji.forEach(n), s = 0; s < gn.length; s++) l = gn[s], l.blockedOn === e && (l.blockedOn = null);
        for (; 0 < gn.length && (s = gn[0], s.blockedOn === null);) Oc(s), s.blockedOn === null && gn.shift()
    }
    var li = J.ReactCurrentBatchConfig,
        fs = !0;

    function $g(e, n, s, l) {
        var u = xe,
            h = li.transition;
        li.transition = null;
        try {
            xe = 1, el(e, n, s, l)
        } finally {
            xe = u, li.transition = h
        }
    }

    function Wg(e, n, s, l) {
        var u = xe,
            h = li.transition;
        li.transition = null;
        try {
            xe = 4, el(e, n, s, l)
        } finally {
            xe = u, li.transition = h
        }
    }

    function el(e, n, s, l) {
        if (fs) {
            var u = tl(e, n, s, l);
            if (u === null) vl(e, n, l, hs, s), Ac(e, l);
            else if (Bg(u, e, n, s, l)) l.stopPropagation();
            else if (Ac(e, l), n & 4 && -1 < bg.indexOf(e)) {
                for (; u !== null;) {
                    var h = pr(u);
                    if (h !== null && Ec(h), h = tl(e, n, s, l), h === null && vl(e, n, l, hs, s), h === u) break;
                    u = h
                }
                u !== null && l.stopPropagation()
            } else vl(e, n, l, null, s)
        }
    }
    var hs = null;

    function tl(e, n, s, l) {
        if (hs = null, e = $o(l), e = Fn(e), e !== null)
            if (n = In(e), n === null) e = null;
            else if (s = n.tag, s === 13) {
            if (e = yc(n), e !== null) return e;
            e = null
        } else if (s === 3) {
            if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
            e = null
        } else n !== e && (e = null);
        return hs = e, null
    }

    function zc(e) {
        switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Ag()) {
            case Yo:
                return 1;
            case _c:
                return 4;
            case rs:
            case Og:
                return 16;
            case kc:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var yn = null,
        nl = null,
        ds = null;

    function Vc() {
        if (ds) return ds;
        var e, n = nl,
            s = n.length,
            l, u = "value" in yn ? yn.value : yn.textContent,
            h = u.length;
        for (e = 0; e < s && n[e] === u[e]; e++);
        var g = s - e;
        for (l = 1; l <= g && n[s - l] === u[h - l]; l++);
        return ds = u.slice(e, 1 < l ? 1 - l : void 0)
    }

    function ps(e) {
        var n = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    }

    function ms() {
        return !0
    }

    function Nc() {
        return !1
    }

    function yt(e) {
        function n(s, l, u, h, g) {
            this._reactName = s, this._targetInst = u, this.type = l, this.nativeEvent = h, this.target = g, this.currentTarget = null;
            for (var x in e) e.hasOwnProperty(x) && (s = e[x], this[x] = s ? s(h) : h[x]);
            return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? ms : Nc, this.isPropagationStopped = Nc, this
        }
        return U(n.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var s = this.nativeEvent;
                s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1), this.isDefaultPrevented = ms)
            },
            stopPropagation: function () {
                var s = this.nativeEvent;
                s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0), this.isPropagationStopped = ms)
            },
            persist: function () {},
            isPersistent: ms
        }), n
    }
    var ai = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        il = yt(ai),
        ir = U({}, ai, {
            view: 0,
            detail: 0
        }),
        Hg = yt(ir),
        rl, sl, rr, gs = U({}, ir, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: ll,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function (e) {
                return "movementX" in e ? e.movementX : (e !== rr && (rr && e.type === "mousemove" ? (rl = e.screenX - rr.screenX, sl = e.screenY - rr.screenY) : sl = rl = 0, rr = e), rl)
            },
            movementY: function (e) {
                return "movementY" in e ? e.movementY : sl
            }
        }),
        Ic = yt(gs),
        Kg = U({}, gs, {
            dataTransfer: 0
        }),
        Gg = yt(Kg),
        Yg = U({}, ir, {
            relatedTarget: 0
        }),
        ol = yt(Yg),
        Xg = U({}, ai, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Qg = yt(Xg),
        qg = U({}, ai, {
            clipboardData: function (e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        Zg = yt(qg),
        Jg = U({}, ai, {
            data: 0
        }),
        Fc = yt(Jg),
        ey = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        ty = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        ny = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function iy(e) {
        var n = this.nativeEvent;
        return n.getModifierState ? n.getModifierState(e) : (e = ny[e]) ? !!n[e] : !1
    }

    function ll() {
        return iy
    }
    var ry = U({}, ir, {
            key: function (e) {
                if (e.key) {
                    var n = ey[e.key] || e.key;
                    if (n !== "Unidentified") return n
                }
                return e.type === "keypress" ? (e = ps(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ty[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: ll,
            charCode: function (e) {
                return e.type === "keypress" ? ps(e) : 0
            },
            keyCode: function (e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            },
            which: function (e) {
                return e.type === "keypress" ? ps(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            }
        }),
        sy = yt(ry),
        oy = U({}, gs, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        jc = yt(oy),
        ly = U({}, ir, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: ll
        }),
        ay = yt(ly),
        uy = U({}, ai, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        cy = yt(uy),
        fy = U({}, gs, {
            deltaX: function (e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function (e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        hy = yt(fy),
        dy = [9, 13, 27, 32],
        al = d && "CompositionEvent" in window,
        sr = null;
    d && "documentMode" in document && (sr = document.documentMode);
    var py = d && "TextEvent" in window && !sr,
        bc = d && (!al || sr && 8 < sr && 11 >= sr),
        Bc = " ",
        Uc = !1;

    function $c(e, n) {
        switch (e) {
        case "keyup":
            return dy.indexOf(n.keyCode) !== -1;
        case "keydown":
            return n.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }

    function Wc(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
    }
    var ui = !1;

    function my(e, n) {
        switch (e) {
        case "compositionend":
            return Wc(n);
        case "keypress":
            return n.which !== 32 ? null : (Uc = !0, Bc);
        case "textInput":
            return e = n.data, e === Bc && Uc ? null : e;
        default:
            return null
        }
    }

    function gy(e, n) {
        if (ui) return e === "compositionend" || !al && $c(e, n) ? (e = Vc(), ds = nl = yn = null, ui = !1, e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                if (n.char && 1 < n.char.length) return n.char;
                if (n.which) return String.fromCharCode(n.which)
            }
            return null;
        case "compositionend":
            return bc && n.locale !== "ko" ? null : n.data;
        default:
            return null
        }
    }
    var yy = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function Hc(e) {
        var n = e && e.nodeName && e.nodeName.toLowerCase();
        return n === "input" ? !!yy[e.type] : n === "textarea"
    }

    function Kc(e, n, s, l) {
        hc(l), n = Ss(n, "onChange"), 0 < n.length && (s = new il("onChange", "change", null, s, l), e.push({
            event: s,
            listeners: n
        }))
    }
    var or = null,
        lr = null;

    function vy(e) {
        ff(e, 0)
    }

    function ys(e) {
        var n = pi(e);
        if (Pe(n)) return e
    }

    function wy(e, n) {
        if (e === "change") return n
    }
    var Gc = !1;
    if (d) {
        var ul;
        if (d) {
            var cl = "oninput" in document;
            if (!cl) {
                var Yc = document.createElement("div");
                Yc.setAttribute("oninput", "return;"), cl = typeof Yc.oninput == "function"
            }
            ul = cl
        } else ul = !1;
        Gc = ul && (!document.documentMode || 9 < document.documentMode)
    }

    function Xc() {
        or && (or.detachEvent("onpropertychange", Qc), lr = or = null)
    }

    function Qc(e) {
        if (e.propertyName === "value" && ys(lr)) {
            var n = [];
            Kc(n, lr, e, $o(e)), gc(vy, n)
        }
    }

    function xy(e, n, s) {
        e === "focusin" ? (Xc(), or = n, lr = s, or.attachEvent("onpropertychange", Qc)) : e === "focusout" && Xc()
    }

    function Sy(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return ys(lr)
    }

    function Py(e, n) {
        if (e === "click") return ys(n)
    }

    function _y(e, n) {
        if (e === "input" || e === "change") return ys(n)
    }

    function ky(e, n) {
        return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n
    }
    var zt = typeof Object.is == "function" ? Object.is : ky;

    function ar(e, n) {
        if (zt(e, n)) return !0;
        if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
        var s = Object.keys(e),
            l = Object.keys(n);
        if (s.length !== l.length) return !1;
        for (l = 0; l < s.length; l++) {
            var u = s[l];
            if (!p.call(n, u) || !zt(e[u], n[u])) return !1
        }
        return !0
    }

    function qc(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function Zc(e, n) {
        var s = qc(e);
        e = 0;
        for (var l; s;) {
            if (s.nodeType === 3) {
                if (l = e + s.textContent.length, e <= n && l >= n) return {
                    node: s,
                    offset: n - e
                };
                e = l
            }
            e: {
                for (; s;) {
                    if (s.nextSibling) {
                        s = s.nextSibling;
                        break e
                    }
                    s = s.parentNode
                }
                s = void 0
            }
            s = qc(s)
        }
    }

    function Jc(e, n) {
        return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Jc(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1
    }

    function ef() {
        for (var e = window, n = $e(); n instanceof e.HTMLIFrameElement;) {
            try {
                var s = typeof n.contentWindow.location.href == "string"
            } catch {
                s = !1
            }
            if (s) e = n.contentWindow;
            else break;
            n = $e(e.document)
        }
        return n
    }

    function fl(e) {
        var n = e && e.nodeName && e.nodeName.toLowerCase();
        return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true")
    }

    function Ty(e) {
        var n = ef(),
            s = e.focusedElem,
            l = e.selectionRange;
        if (n !== s && s && s.ownerDocument && Jc(s.ownerDocument.documentElement, s)) {
            if (l !== null && fl(s)) {
                if (n = l.start, e = l.end, e === void 0 && (e = n), "selectionStart" in s) s.selectionStart = n, s.selectionEnd = Math.min(e, s.value.length);
                else if (e = (n = s.ownerDocument || document) && n.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var u = s.textContent.length,
                        h = Math.min(l.start, u);
                    l = l.end === void 0 ? h : Math.min(l.end, u), !e.extend && h > l && (u = l, l = h, h = u), u = Zc(s, h);
                    var g = Zc(s, l);
                    u && g && (e.rangeCount !== 1 || e.anchorNode !== u.node || e.anchorOffset !== u.offset || e.focusNode !== g.node || e.focusOffset !== g.offset) && (n = n.createRange(), n.setStart(u.node, u.offset), e.removeAllRanges(), h > l ? (e.addRange(n), e.extend(g.node, g.offset)) : (n.setEnd(g.node, g.offset), e.addRange(n)))
                }
            }
            for (n = [], e = s; e = e.parentNode;) e.nodeType === 1 && n.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
            for (typeof s.focus == "function" && s.focus(), s = 0; s < n.length; s++) e = n[s], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
        }
    }
    var Cy = d && "documentMode" in document && 11 >= document.documentMode,
        ci = null,
        hl = null,
        ur = null,
        dl = !1;

    function tf(e, n, s) {
        var l = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
        dl || ci == null || ci !== $e(l) || (l = ci, "selectionStart" in l && fl(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }), ur && ar(ur, l) || (ur = l, l = Ss(hl, "onSelect"), 0 < l.length && (n = new il("onSelect", "select", null, n, s), e.push({
            event: n,
            listeners: l
        }), n.target = ci)))
    }

    function vs(e, n) {
        var s = {};
        return s[e.toLowerCase()] = n.toLowerCase(), s["Webkit" + e] = "webkit" + n, s["Moz" + e] = "moz" + n, s
    }
    var fi = {
            animationend: vs("Animation", "AnimationEnd"),
            animationiteration: vs("Animation", "AnimationIteration"),
            animationstart: vs("Animation", "AnimationStart"),
            transitionend: vs("Transition", "TransitionEnd")
        },
        pl = {},
        nf = {};
    d && (nf = document.createElement("div").style, "AnimationEvent" in window || (delete fi.animationend.animation, delete fi.animationiteration.animation, delete fi.animationstart.animation), "TransitionEvent" in window || delete fi.transitionend.transition);

    function ws(e) {
        if (pl[e]) return pl[e];
        if (!fi[e]) return e;
        var n = fi[e],
            s;
        for (s in n)
            if (n.hasOwnProperty(s) && s in nf) return pl[e] = n[s];
        return e
    }
    var rf = ws("animationend"),
        sf = ws("animationiteration"),
        of = ws("animationstart"),
        lf = ws("transitionend"),
        af = new Map,
        uf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function vn(e, n) {
        af.set(e, n), c(n, [e])
    }
    for (var ml = 0; ml < uf.length; ml++) {
        var gl = uf[ml],
            Ey = gl.toLowerCase(),
            My = gl[0].toUpperCase() + gl.slice(1);
        vn(Ey, "on" + My)
    }
    vn(rf, "onAnimationEnd"), vn(sf, "onAnimationIteration"), vn(of, "onAnimationStart"), vn("dblclick", "onDoubleClick"), vn("focusin", "onFocus"), vn("focusout", "onBlur"), vn(lf, "onTransitionEnd"), f("onMouseEnter", ["mouseout", "mouseover"]), f("onMouseLeave", ["mouseout", "mouseover"]), f("onPointerEnter", ["pointerout", "pointerover"]), f("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var cr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        Ry = new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));

    function cf(e, n, s) {
        var l = e.type || "unknown-event";
        e.currentTarget = s, Eg(l, n, void 0, e), e.currentTarget = null
    }

    function ff(e, n) {
        n = (n & 4) !== 0;
        for (var s = 0; s < e.length; s++) {
            var l = e[s],
                u = l.event;
            l = l.listeners;
            e: {
                var h = void 0;
                if (n)
                    for (var g = l.length - 1; 0 <= g; g--) {
                        var x = l[g],
                            S = x.instance,
                            A = x.currentTarget;
                        if (x = x.listener, S !== h && u.isPropagationStopped()) break e;
                        cf(u, x, A), h = S
                    } else
                        for (g = 0; g < l.length; g++) {
                            if (x = l[g], S = x.instance, A = x.currentTarget, x = x.listener, S !== h && u.isPropagationStopped()) break e;
                            cf(u, x, A), h = S
                        }
            }
        }
        if (is) throw e = Go, is = !1, Go = null, e
    }

    function Te(e, n) {
        var s = n[kl];
        s === void 0 && (s = n[kl] = new Set);
        var l = e + "__bubble";
        s.has(l) || (hf(n, e, 2, !1), s.add(l))
    }

    function yl(e, n, s) {
        var l = 0;
        n && (l |= 4), hf(s, e, l, n)
    }
    var xs = "_reactListening" + Math.random().toString(36).slice(2);

    function fr(e) {
        if (!e[xs]) {
            e[xs] = !0, o.forEach(function (s) {
                s !== "selectionchange" && (Ry.has(s) || yl(s, !1, e), yl(s, !0, e))
            });
            var n = e.nodeType === 9 ? e : e.ownerDocument;
            n === null || n[xs] || (n[xs] = !0, yl("selectionchange", !1, n))
        }
    }

    function hf(e, n, s, l) {
        switch (zc(n)) {
        case 1:
            var u = $g;
            break;
        case 4:
            u = Wg;
            break;
        default:
            u = el
        }
        s = u.bind(null, n, s, e), u = void 0, !Ko || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (u = !0), l ? u !== void 0 ? e.addEventListener(n, s, {
            capture: !0,
            passive: u
        }) : e.addEventListener(n, s, !0) : u !== void 0 ? e.addEventListener(n, s, {
            passive: u
        }) : e.addEventListener(n, s, !1)
    }

    function vl(e, n, s, l, u) {
        var h = l;
        if (!(n & 1) && !(n & 2) && l !== null) e: for (;;) {
            if (l === null) return;
            var g = l.tag;
            if (g === 3 || g === 4) {
                var x = l.stateNode.containerInfo;
                if (x === u || x.nodeType === 8 && x.parentNode === u) break;
                if (g === 4)
                    for (g = l.return; g !== null;) {
                        var S = g.tag;
                        if ((S === 3 || S === 4) && (S = g.stateNode.containerInfo, S === u || S.nodeType === 8 && S.parentNode === u)) return;
                        g = g.return
                    }
                for (; x !== null;) {
                    if (g = Fn(x), g === null) return;
                    if (S = g.tag, S === 5 || S === 6) {
                        l = h = g;
                        continue e
                    }
                    x = x.parentNode
                }
            }
            l = l.return
        }
        gc(function () {
            var A = h,
                N = $o(s),
                I = [];
            e: {
                var V = af.get(e);
                if (V !== void 0) {
                    var $ = il,
                        K = e;
                    switch (e) {
                    case "keypress":
                        if (ps(s) === 0) break e;
                    case "keydown":
                    case "keyup":
                        $ = sy;
                        break;
                    case "focusin":
                        K = "focus", $ = ol;
                        break;
                    case "focusout":
                        K = "blur", $ = ol;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        $ = ol;
                        break;
                    case "click":
                        if (s.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        $ = Ic;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        $ = Gg;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        $ = ay;
                        break;
                    case rf:
                    case sf:
                    case of:
                        $ = Qg;
                        break;
                    case lf:
                        $ = cy;
                        break;
                    case "scroll":
                        $ = Hg;
                        break;
                    case "wheel":
                        $ = hy;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        $ = Zg;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        $ = jc
                    }
                    var Y = (n & 4) !== 0,
                        Fe = !Y && e === "scroll",
                        E = Y ? V !== null ? V + "Capture" : null : V;
                    Y = [];
                    for (var _ = A, M; _ !== null;) {
                        M = _;
                        var b = M.stateNode;
                        if (M.tag === 5 && b !== null && (M = b, E !== null && (b = Gi(_, E), b != null && Y.push(hr(_, b, M)))), Fe) break;
                        _ = _.return
                    }
                    0 < Y.length && (V = new $(V, K, null, s, N), I.push({
                        event: V,
                        listeners: Y
                    }))
                }
            }
            if (!(n & 7)) {
                e: {
                    if (V = e === "mouseover" || e === "pointerover", $ = e === "mouseout" || e === "pointerout", V && s !== Uo && (K = s.relatedTarget || s.fromElement) && (Fn(K) || K[en])) break e;
                    if (($ || V) && (V = N.window === N ? N : (V = N.ownerDocument) ? V.defaultView || V.parentWindow : window, $ ? (K = s.relatedTarget || s.toElement, $ = A, K = K ? Fn(K) : null, K !== null && (Fe = In(K), K !== Fe || K.tag !== 5 && K.tag !== 6) && (K = null)) : ($ = null, K = A), $ !== K)) {
                        if (Y = Ic, b = "onMouseLeave", E = "onMouseEnter", _ = "mouse", (e === "pointerout" || e === "pointerover") && (Y = jc, b = "onPointerLeave", E = "onPointerEnter", _ = "pointer"), Fe = $ == null ? V : pi($), M = K == null ? V : pi(K), V = new Y(b, _ + "leave", $, s, N), V.target = Fe, V.relatedTarget = M, b = null, Fn(N) === A && (Y = new Y(E, _ + "enter", K, s, N), Y.target = M, Y.relatedTarget = Fe, b = Y), Fe = b, $ && K) t: {
                            for (Y = $, E = K, _ = 0, M = Y; M; M = hi(M)) _++;
                            for (M = 0, b = E; b; b = hi(b)) M++;
                            for (; 0 < _ - M;) Y = hi(Y),
                            _--;
                            for (; 0 < M - _;) E = hi(E),
                            M--;
                            for (; _--;) {
                                if (Y === E || E !== null && Y === E.alternate) break t;
                                Y = hi(Y), E = hi(E)
                            }
                            Y = null
                        }
                        else Y = null;
                        $ !== null && df(I, V, $, Y, !1), K !== null && Fe !== null && df(I, Fe, K, Y, !0)
                    }
                }
                e: {
                    if (V = A ? pi(A) : window, $ = V.nodeName && V.nodeName.toLowerCase(), $ === "select" || $ === "input" && V.type === "file") var X = wy;
                    else if (Hc(V))
                        if (Gc) X = _y;
                        else {
                            X = Sy;
                            var te = xy
                        }
                    else($ = V.nodeName) && $.toLowerCase() === "input" && (V.type === "checkbox" || V.type === "radio") && (X = Py);
                    if (X && (X = X(e, A))) {
                        Kc(I, X, s, N);
                        break e
                    }
                    te && te(e, V, A),
                    e === "focusout" && (te = V._wrapperState) && te.controlled && V.type === "number" && Io(V, "number", V.value)
                }
                switch (te = A ? pi(A) : window, e) {
                case "focusin":
                    (Hc(te) || te.contentEditable === "true") && (ci = te, hl = A, ur = null);
                    break;
                case "focusout":
                    ur = hl = ci = null;
                    break;
                case "mousedown":
                    dl = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    dl = !1, tf(I, s, N);
                    break;
                case "selectionchange":
                    if (Cy) break;
                case "keydown":
                case "keyup":
                    tf(I, s, N)
                }
                var ne;
                if (al) e: {
                    switch (e) {
                    case "compositionstart":
                        var re = "onCompositionStart";
                        break e;
                    case "compositionend":
                        re = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        re = "onCompositionUpdate";
                        break e
                    }
                    re = void 0
                }
                else ui ? $c(e, s) && (re = "onCompositionEnd") : e === "keydown" && s.keyCode === 229 && (re = "onCompositionStart");re && (bc && s.locale !== "ko" && (ui || re !== "onCompositionStart" ? re === "onCompositionEnd" && ui && (ne = Vc()) : (yn = N, nl = "value" in yn ? yn.value : yn.textContent, ui = !0)), te = Ss(A, re), 0 < te.length && (re = new Fc(re, e, null, s, N), I.push({
                    event: re,
                    listeners: te
                }), ne ? re.data = ne : (ne = Wc(s), ne !== null && (re.data = ne)))),
                (ne = py ? my(e, s) : gy(e, s)) && (A = Ss(A, "onBeforeInput"), 0 < A.length && (N = new Fc("onBeforeInput", "beforeinput", null, s, N), I.push({
                    event: N,
                    listeners: A
                }), N.data = ne))
            }
            ff(I, n)
        })
    }

    function hr(e, n, s) {
        return {
            instance: e,
            listener: n,
            currentTarget: s
        }
    }

    function Ss(e, n) {
        for (var s = n + "Capture", l = []; e !== null;) {
            var u = e,
                h = u.stateNode;
            u.tag === 5 && h !== null && (u = h, h = Gi(e, s), h != null && l.unshift(hr(e, h, u)), h = Gi(e, n), h != null && l.push(hr(e, h, u))), e = e.return
        }
        return l
    }

    function hi(e) {
        if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5);
        return e || null
    }

    function df(e, n, s, l, u) {
        for (var h = n._reactName, g = []; s !== null && s !== l;) {
            var x = s,
                S = x.alternate,
                A = x.stateNode;
            if (S !== null && S === l) break;
            x.tag === 5 && A !== null && (x = A, u ? (S = Gi(s, h), S != null && g.unshift(hr(s, S, x))) : u || (S = Gi(s, h), S != null && g.push(hr(s, S, x)))), s = s.return
        }
        g.length !== 0 && e.push({
            event: n,
            listeners: g
        })
    }
    var Dy = /\r\n?/g,
        Ay = /\u0000|\uFFFD/g;

    function pf(e) {
        return (typeof e == "string" ? e : "" + e).replace(Dy, `
`).replace(Ay, "")
    }

    function Ps(e, n, s) {
        if (n = pf(n), pf(e) !== n && s) throw Error(r(425))
    }

    function _s() {}
    var wl = null,
        xl = null;

    function Sl(e, n) {
        return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null
    }
    var Pl = typeof setTimeout == "function" ? setTimeout : void 0,
        Oy = typeof clearTimeout == "function" ? clearTimeout : void 0,
        mf = typeof Promise == "function" ? Promise : void 0,
        Ly = typeof queueMicrotask == "function" ? queueMicrotask : typeof mf < "u" ? function (e) {
            return mf.resolve(null).then(e).catch(zy)
        } : Pl;

    function zy(e) {
        setTimeout(function () {
            throw e
        })
    }

    function _l(e, n) {
        var s = n,
            l = 0;
        do {
            var u = s.nextSibling;
            if (e.removeChild(s), u && u.nodeType === 8)
                if (s = u.data, s === "/$") {
                    if (l === 0) {
                        e.removeChild(u), nr(n);
                        return
                    }
                    l--
                } else s !== "$" && s !== "$?" && s !== "$!" || l++;
            s = u
        } while (s);
        nr(n)
    }

    function wn(e) {
        for (; e != null; e = e.nextSibling) {
            var n = e.nodeType;
            if (n === 1 || n === 3) break;
            if (n === 8) {
                if (n = e.data, n === "$" || n === "$!" || n === "$?") break;
                if (n === "/$") return null
            }
        }
        return e
    }

    function gf(e) {
        e = e.previousSibling;
        for (var n = 0; e;) {
            if (e.nodeType === 8) {
                var s = e.data;
                if (s === "$" || s === "$!" || s === "$?") {
                    if (n === 0) return e;
                    n--
                } else s === "/$" && n++
            }
            e = e.previousSibling
        }
        return null
    }
    var di = Math.random().toString(36).slice(2),
        Ht = "__reactFiber$" + di,
        dr = "__reactProps$" + di,
        en = "__reactContainer$" + di,
        kl = "__reactEvents$" + di,
        Vy = "__reactListeners$" + di,
        Ny = "__reactHandles$" + di;

    function Fn(e) {
        var n = e[Ht];
        if (n) return n;
        for (var s = e.parentNode; s;) {
            if (n = s[en] || s[Ht]) {
                if (s = n.alternate, n.child !== null || s !== null && s.child !== null)
                    for (e = gf(e); e !== null;) {
                        if (s = e[Ht]) return s;
                        e = gf(e)
                    }
                return n
            }
            e = s, s = e.parentNode
        }
        return null
    }

    function pr(e) {
        return e = e[Ht] || e[en], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }

    function pi(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(r(33))
    }

    function ks(e) {
        return e[dr] || null
    }
    var Tl = [],
        mi = -1;

    function xn(e) {
        return {
            current: e
        }
    }

    function Ce(e) {
        0 > mi || (e.current = Tl[mi], Tl[mi] = null, mi--)
    }

    function _e(e, n) {
        mi++, Tl[mi] = e.current, e.current = n
    }
    var Sn = {},
        tt = xn(Sn),
        ft = xn(!1),
        jn = Sn;

    function gi(e, n) {
        var s = e.type.contextTypes;
        if (!s) return Sn;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === n) return l.__reactInternalMemoizedMaskedChildContext;
        var u = {},
            h;
        for (h in s) u[h] = n[h];
        return l && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = u), u
    }

    function ht(e) {
        return e = e.childContextTypes, e != null
    }

    function Ts() {
        Ce(ft), Ce(tt)
    }

    function yf(e, n, s) {
        if (tt.current !== Sn) throw Error(r(168));
        _e(tt, n), _e(ft, s)
    }

    function vf(e, n, s) {
        var l = e.stateNode;
        if (n = n.childContextTypes, typeof l.getChildContext != "function") return s;
        l = l.getChildContext();
        for (var u in l)
            if (!(u in n)) throw Error(r(108, R(e) || "Unknown", u));
        return U({}, s, l)
    }

    function Cs(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Sn, jn = tt.current, _e(tt, e), _e(ft, ft.current), !0
    }

    function wf(e, n, s) {
        var l = e.stateNode;
        if (!l) throw Error(r(169));
        s ? (e = vf(e, n, jn), l.__reactInternalMemoizedMergedChildContext = e, Ce(ft), Ce(tt), _e(tt, e)) : Ce(ft), _e(ft, s)
    }
    var tn = null,
        Es = !1,
        Cl = !1;

    function xf(e) {
        tn === null ? tn = [e] : tn.push(e)
    }

    function Iy(e) {
        Es = !0, xf(e)
    }

    function Pn() {
        if (!Cl && tn !== null) {
            Cl = !0;
            var e = 0,
                n = xe;
            try {
                var s = tn;
                for (xe = 1; e < s.length; e++) {
                    var l = s[e];
                    do l = l(!0); while (l !== null)
                }
                tn = null, Es = !1
            } catch (u) {
                throw tn !== null && (tn = tn.slice(e + 1)), Sc(Yo, Pn), u
            } finally {
                xe = n, Cl = !1
            }
        }
        return null
    }
    var yi = [],
        vi = 0,
        Ms = null,
        Rs = 0,
        kt = [],
        Tt = 0,
        bn = null,
        nn = 1,
        rn = "";

    function Bn(e, n) {
        yi[vi++] = Rs, yi[vi++] = Ms, Ms = e, Rs = n
    }

    function Sf(e, n, s) {
        kt[Tt++] = nn, kt[Tt++] = rn, kt[Tt++] = bn, bn = e;
        var l = nn;
        e = rn;
        var u = 32 - Lt(l) - 1;
        l &= ~(1 << u), s += 1;
        var h = 32 - Lt(n) + u;
        if (30 < h) {
            var g = u - u % 5;
            h = (l & (1 << g) - 1).toString(32), l >>= g, u -= g, nn = 1 << 32 - Lt(n) + u | s << u | l, rn = h + e
        } else nn = 1 << h | s << u | l, rn = e
    }

    function El(e) {
        e.return !== null && (Bn(e, 1), Sf(e, 1, 0))
    }

    function Ml(e) {
        for (; e === Ms;) Ms = yi[--vi], yi[vi] = null, Rs = yi[--vi], yi[vi] = null;
        for (; e === bn;) bn = kt[--Tt], kt[Tt] = null, rn = kt[--Tt], kt[Tt] = null, nn = kt[--Tt], kt[Tt] = null
    }
    var vt = null,
        wt = null,
        Me = !1,
        Vt = null;

    function Pf(e, n) {
        var s = Rt(5, null, null, 0);
        s.elementType = "DELETED", s.stateNode = n, s.return = e, n = e.deletions, n === null ? (e.deletions = [s], e.flags |= 16) : n.push(s)
    }

    function _f(e, n) {
        switch (e.tag) {
        case 5:
            var s = e.type;
            return n = n.nodeType !== 1 || s.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, vt = e, wt = wn(n.firstChild), !0) : !1;
        case 6:
            return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, vt = e, wt = null, !0) : !1;
        case 13:
            return n = n.nodeType !== 8 ? null : n, n !== null ? (s = bn !== null ? {
                id: nn,
                overflow: rn
            } : null, e.memoizedState = {
                dehydrated: n,
                treeContext: s,
                retryLane: 1073741824
            }, s = Rt(18, null, null, 0), s.stateNode = n, s.return = e, e.child = s, vt = e, wt = null, !0) : !1;
        default:
            return !1
        }
    }

    function Rl(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }

    function Dl(e) {
        if (Me) {
            var n = wt;
            if (n) {
                var s = n;
                if (!_f(e, n)) {
                    if (Rl(e)) throw Error(r(418));
                    n = wn(s.nextSibling);
                    var l = vt;
                    n && _f(e, n) ? Pf(l, s) : (e.flags = e.flags & -4097 | 2, Me = !1, vt = e)
                }
            } else {
                if (Rl(e)) throw Error(r(418));
                e.flags = e.flags & -4097 | 2, Me = !1, vt = e
            }
        }
    }

    function kf(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
        vt = e
    }

    function Ds(e) {
        if (e !== vt) return !1;
        if (!Me) return kf(e), Me = !0, !1;
        var n;
        if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !Sl(e.type, e.memoizedProps)), n && (n = wt)) {
            if (Rl(e)) throw Tf(), Error(r(418));
            for (; n;) Pf(e, n), n = wn(n.nextSibling)
        }
        if (kf(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
            e: {
                for (e = e.nextSibling, n = 0; e;) {
                    if (e.nodeType === 8) {
                        var s = e.data;
                        if (s === "/$") {
                            if (n === 0) {
                                wt = wn(e.nextSibling);
                                break e
                            }
                            n--
                        } else s !== "$" && s !== "$!" && s !== "$?" || n++
                    }
                    e = e.nextSibling
                }
                wt = null
            }
        } else wt = vt ? wn(e.stateNode.nextSibling) : null;
        return !0
    }

    function Tf() {
        for (var e = wt; e;) e = wn(e.nextSibling)
    }

    function wi() {
        wt = vt = null, Me = !1
    }

    function Al(e) {
        Vt === null ? Vt = [e] : Vt.push(e)
    }
    var Fy = J.ReactCurrentBatchConfig;

    function mr(e, n, s) {
        if (e = s.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (s._owner) {
                if (s = s._owner, s) {
                    if (s.tag !== 1) throw Error(r(309));
                    var l = s.stateNode
                }
                if (!l) throw Error(r(147, e));
                var u = l,
                    h = "" + e;
                return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === h ? n.ref : (n = function (g) {
                    var x = u.refs;
                    g === null ? delete x[h] : x[h] = g
                }, n._stringRef = h, n)
            }
            if (typeof e != "string") throw Error(r(284));
            if (!s._owner) throw Error(r(290, e))
        }
        return e
    }

    function As(e, n) {
        throw e = Object.prototype.toString.call(n), Error(r(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e))
    }

    function Cf(e) {
        var n = e._init;
        return n(e._payload)
    }

    function Ef(e) {
        function n(E, _) {
            if (e) {
                var M = E.deletions;
                M === null ? (E.deletions = [_], E.flags |= 16) : M.push(_)
            }
        }

        function s(E, _) {
            if (!e) return null;
            for (; _ !== null;) n(E, _), _ = _.sibling;
            return null
        }

        function l(E, _) {
            for (E = new Map; _ !== null;) _.key !== null ? E.set(_.key, _) : E.set(_.index, _), _ = _.sibling;
            return E
        }

        function u(E, _) {
            return E = Dn(E, _), E.index = 0, E.sibling = null, E
        }

        function h(E, _, M) {
            return E.index = M, e ? (M = E.alternate, M !== null ? (M = M.index, M < _ ? (E.flags |= 2, _) : M) : (E.flags |= 2, _)) : (E.flags |= 1048576, _)
        }

        function g(E) {
            return e && E.alternate === null && (E.flags |= 2), E
        }

        function x(E, _, M, b) {
            return _ === null || _.tag !== 6 ? (_ = Pa(M, E.mode, b), _.return = E, _) : (_ = u(_, M), _.return = E, _)
        }

        function S(E, _, M, b) {
            var X = M.type;
            return X === de ? N(E, _, M.props.children, b, M.key) : _ !== null && (_.elementType === X || typeof X == "object" && X !== null && X.$$typeof === be && Cf(X) === _.type) ? (b = u(_, M.props), b.ref = mr(E, _, M), b.return = E, b) : (b = to(M.type, M.key, M.props, null, E.mode, b), b.ref = mr(E, _, M), b.return = E, b)
        }

        function A(E, _, M, b) {
            return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== M.containerInfo || _.stateNode.implementation !== M.implementation ? (_ = _a(M, E.mode, b), _.return = E, _) : (_ = u(_, M.children || []), _.return = E, _)
        }

        function N(E, _, M, b, X) {
            return _ === null || _.tag !== 7 ? (_ = Xn(M, E.mode, b, X), _.return = E, _) : (_ = u(_, M), _.return = E, _)
        }

        function I(E, _, M) {
            if (typeof _ == "string" && _ !== "" || typeof _ == "number") return _ = Pa("" + _, E.mode, M), _.return = E, _;
            if (typeof _ == "object" && _ !== null) {
                switch (_.$$typeof) {
                case G:
                    return M = to(_.type, _.key, _.props, null, E.mode, M), M.ref = mr(E, null, _), M.return = E, M;
                case ee:
                    return _ = _a(_, E.mode, M), _.return = E, _;
                case be:
                    var b = _._init;
                    return I(E, b(_._payload), M)
                }
                if (Wi(_) || Z(_)) return _ = Xn(_, E.mode, M, null), _.return = E, _;
                As(E, _)
            }
            return null
        }

        function V(E, _, M, b) {
            var X = _ !== null ? _.key : null;
            if (typeof M == "string" && M !== "" || typeof M == "number") return X !== null ? null : x(E, _, "" + M, b);
            if (typeof M == "object" && M !== null) {
                switch (M.$$typeof) {
                case G:
                    return M.key === X ? S(E, _, M, b) : null;
                case ee:
                    return M.key === X ? A(E, _, M, b) : null;
                case be:
                    return X = M._init, V(E, _, X(M._payload), b)
                }
                if (Wi(M) || Z(M)) return X !== null ? null : N(E, _, M, b, null);
                As(E, M)
            }
            return null
        }

        function $(E, _, M, b, X) {
            if (typeof b == "string" && b !== "" || typeof b == "number") return E = E.get(M) || null, x(_, E, "" + b, X);
            if (typeof b == "object" && b !== null) {
                switch (b.$$typeof) {
                case G:
                    return E = E.get(b.key === null ? M : b.key) || null, S(_, E, b, X);
                case ee:
                    return E = E.get(b.key === null ? M : b.key) || null, A(_, E, b, X);
                case be:
                    var te = b._init;
                    return $(E, _, M, te(b._payload), X)
                }
                if (Wi(b) || Z(b)) return E = E.get(M) || null, N(_, E, b, X, null);
                As(_, b)
            }
            return null
        }

        function K(E, _, M, b) {
            for (var X = null, te = null, ne = _, re = _ = 0, Qe = null; ne !== null && re < M.length; re++) {
                ne.index > re ? (Qe = ne, ne = null) : Qe = ne.sibling;
                var ge = V(E, ne, M[re], b);
                if (ge === null) {
                    ne === null && (ne = Qe);
                    break
                }
                e && ne && ge.alternate === null && n(E, ne), _ = h(ge, _, re), te === null ? X = ge : te.sibling = ge, te = ge, ne = Qe
            }
            if (re === M.length) return s(E, ne), Me && Bn(E, re), X;
            if (ne === null) {
                for (; re < M.length; re++) ne = I(E, M[re], b), ne !== null && (_ = h(ne, _, re), te === null ? X = ne : te.sibling = ne, te = ne);
                return Me && Bn(E, re), X
            }
            for (ne = l(E, ne); re < M.length; re++) Qe = $(ne, E, re, M[re], b), Qe !== null && (e && Qe.alternate !== null && ne.delete(Qe.key === null ? re : Qe.key), _ = h(Qe, _, re), te === null ? X = Qe : te.sibling = Qe, te = Qe);
            return e && ne.forEach(function (An) {
                return n(E, An)
            }), Me && Bn(E, re), X
        }

        function Y(E, _, M, b) {
            var X = Z(M);
            if (typeof X != "function") throw Error(r(150));
            if (M = X.call(M), M == null) throw Error(r(151));
            for (var te = X = null, ne = _, re = _ = 0, Qe = null, ge = M.next(); ne !== null && !ge.done; re++, ge = M.next()) {
                ne.index > re ? (Qe = ne, ne = null) : Qe = ne.sibling;
                var An = V(E, ne, ge.value, b);
                if (An === null) {
                    ne === null && (ne = Qe);
                    break
                }
                e && ne && An.alternate === null && n(E, ne), _ = h(An, _, re), te === null ? X = An : te.sibling = An, te = An, ne = Qe
            }
            if (ge.done) return s(E, ne), Me && Bn(E, re), X;
            if (ne === null) {
                for (; !ge.done; re++, ge = M.next()) ge = I(E, ge.value, b), ge !== null && (_ = h(ge, _, re), te === null ? X = ge : te.sibling = ge, te = ge);
                return Me && Bn(E, re), X
            }
            for (ne = l(E, ne); !ge.done; re++, ge = M.next()) ge = $(ne, E, re, ge.value, b), ge !== null && (e && ge.alternate !== null && ne.delete(ge.key === null ? re : ge.key), _ = h(ge, _, re), te === null ? X = ge : te.sibling = ge, te = ge);
            return e && ne.forEach(function (gv) {
                return n(E, gv)
            }), Me && Bn(E, re), X
        }

        function Fe(E, _, M, b) {
            if (typeof M == "object" && M !== null && M.type === de && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
                switch (M.$$typeof) {
                case G:
                    e: {
                        for (var X = M.key, te = _; te !== null;) {
                            if (te.key === X) {
                                if (X = M.type, X === de) {
                                    if (te.tag === 7) {
                                        s(E, te.sibling), _ = u(te, M.props.children), _.return = E, E = _;
                                        break e
                                    }
                                } else if (te.elementType === X || typeof X == "object" && X !== null && X.$$typeof === be && Cf(X) === te.type) {
                                    s(E, te.sibling), _ = u(te, M.props), _.ref = mr(E, te, M), _.return = E, E = _;
                                    break e
                                }
                                s(E, te);
                                break
                            } else n(E, te);
                            te = te.sibling
                        }
                        M.type === de ? (_ = Xn(M.props.children, E.mode, b, M.key), _.return = E, E = _) : (b = to(M.type, M.key, M.props, null, E.mode, b), b.ref = mr(E, _, M), b.return = E, E = b)
                    }
                    return g(E);
                case ee:
                    e: {
                        for (te = M.key; _ !== null;) {
                            if (_.key === te)
                                if (_.tag === 4 && _.stateNode.containerInfo === M.containerInfo && _.stateNode.implementation === M.implementation) {
                                    s(E, _.sibling), _ = u(_, M.children || []), _.return = E, E = _;
                                    break e
                                } else {
                                    s(E, _);
                                    break
                                }
                            else n(E, _);
                            _ = _.sibling
                        }
                        _ = _a(M, E.mode, b),
                        _.return = E,
                        E = _
                    }
                    return g(E);
                case be:
                    return te = M._init, Fe(E, _, te(M._payload), b)
                }
                if (Wi(M)) return K(E, _, M, b);
                if (Z(M)) return Y(E, _, M, b);
                As(E, M)
            }
            return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M, _ !== null && _.tag === 6 ? (s(E, _.sibling), _ = u(_, M), _.return = E, E = _) : (s(E, _), _ = Pa(M, E.mode, b), _.return = E, E = _), g(E)) : s(E, _)
        }
        return Fe
    }
    var xi = Ef(!0),
        Mf = Ef(!1),
        Os = xn(null),
        Ls = null,
        Si = null,
        Ol = null;

    function Ll() {
        Ol = Si = Ls = null
    }

    function zl(e) {
        var n = Os.current;
        Ce(Os), e._currentValue = n
    }

    function Vl(e, n, s) {
        for (; e !== null;) {
            var l = e.alternate;
            if ((e.childLanes & n) !== n ? (e.childLanes |= n, l !== null && (l.childLanes |= n)) : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n), e === s) break;
            e = e.return
        }
    }

    function Pi(e, n) {
        Ls = e, Ol = Si = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (dt = !0), e.firstContext = null)
    }

    function Ct(e) {
        var n = e._currentValue;
        if (Ol !== e)
            if (e = {
                    context: e,
                    memoizedValue: n,
                    next: null
                }, Si === null) {
                if (Ls === null) throw Error(r(308));
                Si = e, Ls.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
            } else Si = Si.next = e;
        return n
    }
    var Un = null;

    function Nl(e) {
        Un === null ? Un = [e] : Un.push(e)
    }

    function Rf(e, n, s, l) {
        var u = n.interleaved;
        return u === null ? (s.next = s, Nl(n)) : (s.next = u.next, u.next = s), n.interleaved = s, sn(e, l)
    }

    function sn(e, n) {
        e.lanes |= n;
        var s = e.alternate;
        for (s !== null && (s.lanes |= n), s = e, e = e.return; e !== null;) e.childLanes |= n, s = e.alternate, s !== null && (s.childLanes |= n), s = e, e = e.return;
        return s.tag === 3 ? s.stateNode : null
    }
    var _n = !1;

    function Il(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }

    function Df(e, n) {
        e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }

    function on(e, n) {
        return {
            eventTime: e,
            lane: n,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function kn(e, n, s) {
        var l = e.updateQueue;
        if (l === null) return null;
        if (l = l.shared, me & 2) {
            var u = l.pending;
            return u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n, sn(e, s)
        }
        return u = l.interleaved, u === null ? (n.next = n, Nl(l)) : (n.next = u.next, u.next = n), l.interleaved = n, sn(e, s)
    }

    function zs(e, n, s) {
        if (n = n.updateQueue, n !== null && (n = n.shared, (s & 4194240) !== 0)) {
            var l = n.lanes;
            l &= e.pendingLanes, s |= l, n.lanes = s, qo(e, s)
        }
    }

    function Af(e, n) {
        var s = e.updateQueue,
            l = e.alternate;
        if (l !== null && (l = l.updateQueue, s === l)) {
            var u = null,
                h = null;
            if (s = s.firstBaseUpdate, s !== null) {
                do {
                    var g = {
                        eventTime: s.eventTime,
                        lane: s.lane,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    };
                    h === null ? u = h = g : h = h.next = g, s = s.next
                } while (s !== null);
                h === null ? u = h = n : h = h.next = n
            } else u = h = n;
            s = {
                baseState: l.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: h,
                shared: l.shared,
                effects: l.effects
            }, e.updateQueue = s;
            return
        }
        e = s.lastBaseUpdate, e === null ? s.firstBaseUpdate = n : e.next = n, s.lastBaseUpdate = n
    }

    function Vs(e, n, s, l) {
        var u = e.updateQueue;
        _n = !1;
        var h = u.firstBaseUpdate,
            g = u.lastBaseUpdate,
            x = u.shared.pending;
        if (x !== null) {
            u.shared.pending = null;
            var S = x,
                A = S.next;
            S.next = null, g === null ? h = A : g.next = A, g = S;
            var N = e.alternate;
            N !== null && (N = N.updateQueue, x = N.lastBaseUpdate, x !== g && (x === null ? N.firstBaseUpdate = A : x.next = A, N.lastBaseUpdate = S))
        }
        if (h !== null) {
            var I = u.baseState;
            g = 0, N = A = S = null, x = h;
            do {
                var V = x.lane,
                    $ = x.eventTime;
                if ((l & V) === V) {
                    N !== null && (N = N.next = {
                        eventTime: $,
                        lane: 0,
                        tag: x.tag,
                        payload: x.payload,
                        callback: x.callback,
                        next: null
                    });
                    e: {
                        var K = e,
                            Y = x;
                        switch (V = n, $ = s, Y.tag) {
                        case 1:
                            if (K = Y.payload, typeof K == "function") {
                                I = K.call($, I, V);
                                break e
                            }
                            I = K;
                            break e;
                        case 3:
                            K.flags = K.flags & -65537 | 128;
                        case 0:
                            if (K = Y.payload, V = typeof K == "function" ? K.call($, I, V) : K, V == null) break e;
                            I = U({}, I, V);
                            break e;
                        case 2:
                            _n = !0
                        }
                    }
                    x.callback !== null && x.lane !== 0 && (e.flags |= 64, V = u.effects, V === null ? u.effects = [x] : V.push(x))
                } else $ = {
                    eventTime: $,
                    lane: V,
                    tag: x.tag,
                    payload: x.payload,
                    callback: x.callback,
                    next: null
                }, N === null ? (A = N = $, S = I) : N = N.next = $, g |= V;
                if (x = x.next, x === null) {
                    if (x = u.shared.pending, x === null) break;
                    V = x, x = V.next, V.next = null, u.lastBaseUpdate = V, u.shared.pending = null
                }
            } while (!0);
            if (N === null && (S = I), u.baseState = S, u.firstBaseUpdate = A, u.lastBaseUpdate = N, n = u.shared.interleaved, n !== null) {
                u = n;
                do g |= u.lane, u = u.next; while (u !== n)
            } else h === null && (u.shared.lanes = 0);
            Hn |= g, e.lanes = g, e.memoizedState = I
        }
    }

    function Of(e, n, s) {
        if (e = n.effects, n.effects = null, e !== null)
            for (n = 0; n < e.length; n++) {
                var l = e[n],
                    u = l.callback;
                if (u !== null) {
                    if (l.callback = null, l = s, typeof u != "function") throw Error(r(191, u));
                    u.call(l)
                }
            }
    }
    var gr = {},
        Kt = xn(gr),
        yr = xn(gr),
        vr = xn(gr);

    function $n(e) {
        if (e === gr) throw Error(r(174));
        return e
    }

    function Fl(e, n) {
        switch (_e(vr, n), _e(yr, e), _e(Kt, gr), e = n.nodeType, e) {
        case 9:
        case 11:
            n = (n = n.documentElement) ? n.namespaceURI : jo(null, "");
            break;
        default:
            e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = jo(n, e)
        }
        Ce(Kt), _e(Kt, n)
    }

    function _i() {
        Ce(Kt), Ce(yr), Ce(vr)
    }

    function Lf(e) {
        $n(vr.current);
        var n = $n(Kt.current),
            s = jo(n, e.type);
        n !== s && (_e(yr, e), _e(Kt, s))
    }

    function jl(e) {
        yr.current === e && (Ce(Kt), Ce(yr))
    }
    var Re = xn(0);

    function Ns(e) {
        for (var n = e; n !== null;) {
            if (n.tag === 13) {
                var s = n.memoizedState;
                if (s !== null && (s = s.dehydrated, s === null || s.data === "$?" || s.data === "$!")) return n
            } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
                if (n.flags & 128) return n
            } else if (n.child !== null) {
                n.child.return = n, n = n.child;
                continue
            }
            if (n === e) break;
            for (; n.sibling === null;) {
                if (n.return === null || n.return === e) return null;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
        return null
    }
    var bl = [];

    function Bl() {
        for (var e = 0; e < bl.length; e++) bl[e]._workInProgressVersionPrimary = null;
        bl.length = 0
    }
    var Is = J.ReactCurrentDispatcher,
        Ul = J.ReactCurrentBatchConfig,
        Wn = 0,
        De = null,
        We = null,
        Ye = null,
        Fs = !1,
        wr = !1,
        xr = 0,
        jy = 0;

    function nt() {
        throw Error(r(321))
    }

    function $l(e, n) {
        if (n === null) return !1;
        for (var s = 0; s < n.length && s < e.length; s++)
            if (!zt(e[s], n[s])) return !1;
        return !0
    }

    function Wl(e, n, s, l, u, h) {
        if (Wn = h, De = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Is.current = e === null || e.memoizedState === null ? $y : Wy, e = s(l, u), wr) {
            h = 0;
            do {
                if (wr = !1, xr = 0, 25 <= h) throw Error(r(301));
                h += 1, Ye = We = null, n.updateQueue = null, Is.current = Hy, e = s(l, u)
            } while (wr)
        }
        if (Is.current = Bs, n = We !== null && We.next !== null, Wn = 0, Ye = We = De = null, Fs = !1, n) throw Error(r(300));
        return e
    }

    function Hl() {
        var e = xr !== 0;
        return xr = 0, e
    }

    function Gt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ye === null ? De.memoizedState = Ye = e : Ye = Ye.next = e, Ye
    }

    function Et() {
        if (We === null) {
            var e = De.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = We.next;
        var n = Ye === null ? De.memoizedState : Ye.next;
        if (n !== null) Ye = n, We = e;
        else {
            if (e === null) throw Error(r(310));
            We = e, e = {
                memoizedState: We.memoizedState,
                baseState: We.baseState,
                baseQueue: We.baseQueue,
                queue: We.queue,
                next: null
            }, Ye === null ? De.memoizedState = Ye = e : Ye = Ye.next = e
        }
        return Ye
    }

    function Sr(e, n) {
        return typeof n == "function" ? n(e) : n
    }

    function Kl(e) {
        var n = Et(),
            s = n.queue;
        if (s === null) throw Error(r(311));
        s.lastRenderedReducer = e;
        var l = We,
            u = l.baseQueue,
            h = s.pending;
        if (h !== null) {
            if (u !== null) {
                var g = u.next;
                u.next = h.next, h.next = g
            }
            l.baseQueue = u = h, s.pending = null
        }
        if (u !== null) {
            h = u.next, l = l.baseState;
            var x = g = null,
                S = null,
                A = h;
            do {
                var N = A.lane;
                if ((Wn & N) === N) S !== null && (S = S.next = {
                    lane: 0,
                    action: A.action,
                    hasEagerState: A.hasEagerState,
                    eagerState: A.eagerState,
                    next: null
                }), l = A.hasEagerState ? A.eagerState : e(l, A.action);
                else {
                    var I = {
                        lane: N,
                        action: A.action,
                        hasEagerState: A.hasEagerState,
                        eagerState: A.eagerState,
                        next: null
                    };
                    S === null ? (x = S = I, g = l) : S = S.next = I, De.lanes |= N, Hn |= N
                }
                A = A.next
            } while (A !== null && A !== h);
            S === null ? g = l : S.next = x, zt(l, n.memoizedState) || (dt = !0), n.memoizedState = l, n.baseState = g, n.baseQueue = S, s.lastRenderedState = l
        }
        if (e = s.interleaved, e !== null) {
            u = e;
            do h = u.lane, De.lanes |= h, Hn |= h, u = u.next; while (u !== e)
        } else u === null && (s.lanes = 0);
        return [n.memoizedState, s.dispatch]
    }

    function Gl(e) {
        var n = Et(),
            s = n.queue;
        if (s === null) throw Error(r(311));
        s.lastRenderedReducer = e;
        var l = s.dispatch,
            u = s.pending,
            h = n.memoizedState;
        if (u !== null) {
            s.pending = null;
            var g = u = u.next;
            do h = e(h, g.action), g = g.next; while (g !== u);
            zt(h, n.memoizedState) || (dt = !0), n.memoizedState = h, n.baseQueue === null && (n.baseState = h), s.lastRenderedState = h
        }
        return [h, l]
    }

    function zf() {}

    function Vf(e, n) {
        var s = De,
            l = Et(),
            u = n(),
            h = !zt(l.memoizedState, u);
        if (h && (l.memoizedState = u, dt = !0), l = l.queue, Yl(Ff.bind(null, s, l, e), [e]), l.getSnapshot !== n || h || Ye !== null && Ye.memoizedState.tag & 1) {
            if (s.flags |= 2048, Pr(9, If.bind(null, s, l, u, n), void 0, null), Xe === null) throw Error(r(349));
            Wn & 30 || Nf(s, n, u)
        }
        return u
    }

    function Nf(e, n, s) {
        e.flags |= 16384, e = {
            getSnapshot: n,
            value: s
        }, n = De.updateQueue, n === null ? (n = {
            lastEffect: null,
            stores: null
        }, De.updateQueue = n, n.stores = [e]) : (s = n.stores, s === null ? n.stores = [e] : s.push(e))
    }

    function If(e, n, s, l) {
        n.value = s, n.getSnapshot = l, jf(n) && bf(e)
    }

    function Ff(e, n, s) {
        return s(function () {
            jf(n) && bf(e)
        })
    }

    function jf(e) {
        var n = e.getSnapshot;
        e = e.value;
        try {
            var s = n();
            return !zt(e, s)
        } catch {
            return !0
        }
    }

    function bf(e) {
        var n = sn(e, 1);
        n !== null && jt(n, e, 1, -1)
    }

    function Bf(e) {
        var n = Gt();
        return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Sr,
            lastRenderedState: e
        }, n.queue = e, e = e.dispatch = Uy.bind(null, De, e), [n.memoizedState, e]
    }

    function Pr(e, n, s, l) {
        return e = {
            tag: e,
            create: n,
            destroy: s,
            deps: l,
            next: null
        }, n = De.updateQueue, n === null ? (n = {
            lastEffect: null,
            stores: null
        }, De.updateQueue = n, n.lastEffect = e.next = e) : (s = n.lastEffect, s === null ? n.lastEffect = e.next = e : (l = s.next, s.next = e, e.next = l, n.lastEffect = e)), e
    }

    function Uf() {
        return Et().memoizedState
    }

    function js(e, n, s, l) {
        var u = Gt();
        De.flags |= e, u.memoizedState = Pr(1 | n, s, void 0, l === void 0 ? null : l)
    }

    function bs(e, n, s, l) {
        var u = Et();
        l = l === void 0 ? null : l;
        var h = void 0;
        if (We !== null) {
            var g = We.memoizedState;
            if (h = g.destroy, l !== null && $l(l, g.deps)) {
                u.memoizedState = Pr(n, s, h, l);
                return
            }
        }
        De.flags |= e, u.memoizedState = Pr(1 | n, s, h, l)
    }

    function $f(e, n) {
        return js(8390656, 8, e, n)
    }

    function Yl(e, n) {
        return bs(2048, 8, e, n)
    }

    function Wf(e, n) {
        return bs(4, 2, e, n)
    }

    function Hf(e, n) {
        return bs(4, 4, e, n)
    }

    function Kf(e, n) {
        if (typeof n == "function") return e = e(), n(e),
            function () {
                n(null)
            };
        if (n != null) return e = e(), n.current = e,
            function () {
                n.current = null
            }
    }

    function Gf(e, n, s) {
        return s = s != null ? s.concat([e]) : null, bs(4, 4, Kf.bind(null, n, e), s)
    }

    function Xl() {}

    function Yf(e, n) {
        var s = Et();
        n = n === void 0 ? null : n;
        var l = s.memoizedState;
        return l !== null && n !== null && $l(n, l[1]) ? l[0] : (s.memoizedState = [e, n], e)
    }

    function Xf(e, n) {
        var s = Et();
        n = n === void 0 ? null : n;
        var l = s.memoizedState;
        return l !== null && n !== null && $l(n, l[1]) ? l[0] : (e = e(), s.memoizedState = [e, n], e)
    }

    function Qf(e, n, s) {
        return Wn & 21 ? (zt(s, n) || (s = Tc(), De.lanes |= s, Hn |= s, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, dt = !0), e.memoizedState = s)
    }

    function by(e, n) {
        var s = xe;
        xe = s !== 0 && 4 > s ? s : 4, e(!0);
        var l = Ul.transition;
        Ul.transition = {};
        try {
            e(!1), n()
        } finally {
            xe = s, Ul.transition = l
        }
    }

    function qf() {
        return Et().memoizedState
    }

    function By(e, n, s) {
        var l = Mn(e);
        if (s = {
                lane: l,
                action: s,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Zf(e)) Jf(n, s);
        else if (s = Rf(e, n, s, l), s !== null) {
            var u = ut();
            jt(s, e, l, u), eh(s, n, l)
        }
    }

    function Uy(e, n, s) {
        var l = Mn(e),
            u = {
                lane: l,
                action: s,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
        if (Zf(e)) Jf(n, u);
        else {
            var h = e.alternate;
            if (e.lanes === 0 && (h === null || h.lanes === 0) && (h = n.lastRenderedReducer, h !== null)) try {
                var g = n.lastRenderedState,
                    x = h(g, s);
                if (u.hasEagerState = !0, u.eagerState = x, zt(x, g)) {
                    var S = n.interleaved;
                    S === null ? (u.next = u, Nl(n)) : (u.next = S.next, S.next = u), n.interleaved = u;
                    return
                }
            } catch {} finally {}
            s = Rf(e, n, u, l), s !== null && (u = ut(), jt(s, e, l, u), eh(s, n, l))
        }
    }

    function Zf(e) {
        var n = e.alternate;
        return e === De || n !== null && n === De
    }

    function Jf(e, n) {
        wr = Fs = !0;
        var s = e.pending;
        s === null ? n.next = n : (n.next = s.next, s.next = n), e.pending = n
    }

    function eh(e, n, s) {
        if (s & 4194240) {
            var l = n.lanes;
            l &= e.pendingLanes, s |= l, n.lanes = s, qo(e, s)
        }
    }
    var Bs = {
            readContext: Ct,
            useCallback: nt,
            useContext: nt,
            useEffect: nt,
            useImperativeHandle: nt,
            useInsertionEffect: nt,
            useLayoutEffect: nt,
            useMemo: nt,
            useReducer: nt,
            useRef: nt,
            useState: nt,
            useDebugValue: nt,
            useDeferredValue: nt,
            useTransition: nt,
            useMutableSource: nt,
            useSyncExternalStore: nt,
            useId: nt,
            unstable_isNewReconciler: !1
        },
        $y = {
            readContext: Ct,
            useCallback: function (e, n) {
                return Gt().memoizedState = [e, n === void 0 ? null : n], e
            },
            useContext: Ct,
            useEffect: $f,
            useImperativeHandle: function (e, n, s) {
                return s = s != null ? s.concat([e]) : null, js(4194308, 4, Kf.bind(null, n, e), s)
            },
            useLayoutEffect: function (e, n) {
                return js(4194308, 4, e, n)
            },
            useInsertionEffect: function (e, n) {
                return js(4, 2, e, n)
            },
            useMemo: function (e, n) {
                var s = Gt();
                return n = n === void 0 ? null : n, e = e(), s.memoizedState = [e, n], e
            },
            useReducer: function (e, n, s) {
                var l = Gt();
                return n = s !== void 0 ? s(n) : n, l.memoizedState = l.baseState = n, e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: n
                }, l.queue = e, e = e.dispatch = By.bind(null, De, e), [l.memoizedState, e]
            },
            useRef: function (e) {
                var n = Gt();
                return e = {
                    current: e
                }, n.memoizedState = e
            },
            useState: Bf,
            useDebugValue: Xl,
            useDeferredValue: function (e) {
                return Gt().memoizedState = e
            },
            useTransition: function () {
                var e = Bf(!1),
                    n = e[0];
                return e = by.bind(null, e[1]), Gt().memoizedState = e, [n, e]
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, n, s) {
                var l = De,
                    u = Gt();
                if (Me) {
                    if (s === void 0) throw Error(r(407));
                    s = s()
                } else {
                    if (s = n(), Xe === null) throw Error(r(349));
                    Wn & 30 || Nf(l, n, s)
                }
                u.memoizedState = s;
                var h = {
                    value: s,
                    getSnapshot: n
                };
                return u.queue = h, $f(Ff.bind(null, l, h, e), [e]), l.flags |= 2048, Pr(9, If.bind(null, l, h, s, n), void 0, null), s
            },
            useId: function () {
                var e = Gt(),
                    n = Xe.identifierPrefix;
                if (Me) {
                    var s = rn,
                        l = nn;
                    s = (l & ~(1 << 32 - Lt(l) - 1)).toString(32) + s, n = ":" + n + "R" + s, s = xr++, 0 < s && (n += "H" + s.toString(32)), n += ":"
                } else s = jy++, n = ":" + n + "r" + s.toString(32) + ":";
                return e.memoizedState = n
            },
            unstable_isNewReconciler: !1
        },
        Wy = {
            readContext: Ct,
            useCallback: Yf,
            useContext: Ct,
            useEffect: Yl,
            useImperativeHandle: Gf,
            useInsertionEffect: Wf,
            useLayoutEffect: Hf,
            useMemo: Xf,
            useReducer: Kl,
            useRef: Uf,
            useState: function () {
                return Kl(Sr)
            },
            useDebugValue: Xl,
            useDeferredValue: function (e) {
                var n = Et();
                return Qf(n, We.memoizedState, e)
            },
            useTransition: function () {
                var e = Kl(Sr)[0],
                    n = Et().memoizedState;
                return [e, n]
            },
            useMutableSource: zf,
            useSyncExternalStore: Vf,
            useId: qf,
            unstable_isNewReconciler: !1
        },
        Hy = {
            readContext: Ct,
            useCallback: Yf,
            useContext: Ct,
            useEffect: Yl,
            useImperativeHandle: Gf,
            useInsertionEffect: Wf,
            useLayoutEffect: Hf,
            useMemo: Xf,
            useReducer: Gl,
            useRef: Uf,
            useState: function () {
                return Gl(Sr)
            },
            useDebugValue: Xl,
            useDeferredValue: function (e) {
                var n = Et();
                return We === null ? n.memoizedState = e : Qf(n, We.memoizedState, e)
            },
            useTransition: function () {
                var e = Gl(Sr)[0],
                    n = Et().memoizedState;
                return [e, n]
            },
            useMutableSource: zf,
            useSyncExternalStore: Vf,
            useId: qf,
            unstable_isNewReconciler: !1
        };

    function Nt(e, n) {
        if (e && e.defaultProps) {
            n = U({}, n), e = e.defaultProps;
            for (var s in e) n[s] === void 0 && (n[s] = e[s]);
            return n
        }
        return n
    }

    function Ql(e, n, s, l) {
        n = e.memoizedState, s = s(l, n), s = s == null ? n : U({}, n, s), e.memoizedState = s, e.lanes === 0 && (e.updateQueue.baseState = s)
    }
    var Us = {
        isMounted: function (e) {
            return (e = e._reactInternals) ? In(e) === e : !1
        },
        enqueueSetState: function (e, n, s) {
            e = e._reactInternals;
            var l = ut(),
                u = Mn(e),
                h = on(l, u);
            h.payload = n, s != null && (h.callback = s), n = kn(e, h, u), n !== null && (jt(n, e, u, l), zs(n, e, u))
        },
        enqueueReplaceState: function (e, n, s) {
            e = e._reactInternals;
            var l = ut(),
                u = Mn(e),
                h = on(l, u);
            h.tag = 1, h.payload = n, s != null && (h.callback = s), n = kn(e, h, u), n !== null && (jt(n, e, u, l), zs(n, e, u))
        },
        enqueueForceUpdate: function (e, n) {
            e = e._reactInternals;
            var s = ut(),
                l = Mn(e),
                u = on(s, l);
            u.tag = 2, n != null && (u.callback = n), n = kn(e, u, l), n !== null && (jt(n, e, l, s), zs(n, e, l))
        }
    };

    function th(e, n, s, l, u, h, g) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, h, g) : n.prototype && n.prototype.isPureReactComponent ? !ar(s, l) || !ar(u, h) : !0
    }

    function nh(e, n, s) {
        var l = !1,
            u = Sn,
            h = n.contextType;
        return typeof h == "object" && h !== null ? h = Ct(h) : (u = ht(n) ? jn : tt.current, l = n.contextTypes, h = (l = l != null) ? gi(e, u) : Sn), n = new n(s, h), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Us, e.stateNode = n, n._reactInternals = e, l && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = u, e.__reactInternalMemoizedMaskedChildContext = h), n
    }

    function ih(e, n, s, l) {
        e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(s, l), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(s, l), n.state !== e && Us.enqueueReplaceState(n, n.state, null)
    }

    function ql(e, n, s, l) {
        var u = e.stateNode;
        u.props = s, u.state = e.memoizedState, u.refs = {}, Il(e);
        var h = n.contextType;
        typeof h == "object" && h !== null ? u.context = Ct(h) : (h = ht(n) ? jn : tt.current, u.context = gi(e, h)), u.state = e.memoizedState, h = n.getDerivedStateFromProps, typeof h == "function" && (Ql(e, n, h, s), u.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (n = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), n !== u.state && Us.enqueueReplaceState(u, u.state, null), Vs(e, s, u, l), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308)
    }

    function ki(e, n) {
        try {
            var s = "",
                l = n;
            do s += ue(l), l = l.return; while (l);
            var u = s
        } catch (h) {
            u = `
Error generating stack: ` + h.message + `
` + h.stack
        }
        return {
            value: e,
            source: n,
            stack: u,
            digest: null
        }
    }

    function Zl(e, n, s) {
        return {
            value: e,
            source: null,
            stack: s ?? null,
            digest: n ?? null
        }
    }

    function Jl(e, n) {
        try {
            console.error(n.value)
        } catch (s) {
            setTimeout(function () {
                throw s
            })
        }
    }
    var Ky = typeof WeakMap == "function" ? WeakMap : Map;

    function rh(e, n, s) {
        s = on(-1, s), s.tag = 3, s.payload = {
            element: null
        };
        var l = n.value;
        return s.callback = function () {
            Xs || (Xs = !0, pa = l), Jl(e, n)
        }, s
    }

    function sh(e, n, s) {
        s = on(-1, s), s.tag = 3;
        var l = e.type.getDerivedStateFromError;
        if (typeof l == "function") {
            var u = n.value;
            s.payload = function () {
                return l(u)
            }, s.callback = function () {
                Jl(e, n)
            }
        }
        var h = e.stateNode;
        return h !== null && typeof h.componentDidCatch == "function" && (s.callback = function () {
            Jl(e, n), typeof l != "function" && (Cn === null ? Cn = new Set([this]) : Cn.add(this));
            var g = n.stack;
            this.componentDidCatch(n.value, {
                componentStack: g !== null ? g : ""
            })
        }), s
    }

    function oh(e, n, s) {
        var l = e.pingCache;
        if (l === null) {
            l = e.pingCache = new Ky;
            var u = new Set;
            l.set(n, u)
        } else u = l.get(n), u === void 0 && (u = new Set, l.set(n, u));
        u.has(s) || (u.add(s), e = ov.bind(null, e, n, s), n.then(e, e))
    }

    function lh(e) {
        do {
            var n;
            if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
            e = e.return
        } while (e !== null);
        return null
    }

    function ah(e, n, s, l, u) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = u, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, s.flags |= 131072, s.flags &= -52805, s.tag === 1 && (s.alternate === null ? s.tag = 17 : (n = on(-1, 1), n.tag = 2, kn(s, n, 1))), s.lanes |= 1), e)
    }
    var Gy = J.ReactCurrentOwner,
        dt = !1;

    function at(e, n, s, l) {
        n.child = e === null ? Mf(n, null, s, l) : xi(n, e.child, s, l)
    }

    function uh(e, n, s, l, u) {
        s = s.render;
        var h = n.ref;
        return Pi(n, u), l = Wl(e, n, s, l, h, u), s = Hl(), e !== null && !dt ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~u, ln(e, n, u)) : (Me && s && El(n), n.flags |= 1, at(e, n, l, u), n.child)
    }

    function ch(e, n, s, l, u) {
        if (e === null) {
            var h = s.type;
            return typeof h == "function" && !Sa(h) && h.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (n.tag = 15, n.type = h, fh(e, n, h, l, u)) : (e = to(s.type, null, l, n, n.mode, u), e.ref = n.ref, e.return = n, n.child = e)
        }
        if (h = e.child, !(e.lanes & u)) {
            var g = h.memoizedProps;
            if (s = s.compare, s = s !== null ? s : ar, s(g, l) && e.ref === n.ref) return ln(e, n, u)
        }
        return n.flags |= 1, e = Dn(h, l), e.ref = n.ref, e.return = n, n.child = e
    }

    function fh(e, n, s, l, u) {
        if (e !== null) {
            var h = e.memoizedProps;
            if (ar(h, l) && e.ref === n.ref)
                if (dt = !1, n.pendingProps = l = h, (e.lanes & u) !== 0) e.flags & 131072 && (dt = !0);
                else return n.lanes = e.lanes, ln(e, n, u)
        }
        return ea(e, n, s, l, u)
    }

    function hh(e, n, s) {
        var l = n.pendingProps,
            u = l.children,
            h = e !== null ? e.memoizedState : null;
        if (l.mode === "hidden")
            if (!(n.mode & 1)) n.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, _e(Ci, xt), xt |= s;
            else {
                if (!(s & 1073741824)) return e = h !== null ? h.baseLanes | s : s, n.lanes = n.childLanes = 1073741824, n.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                }, n.updateQueue = null, _e(Ci, xt), xt |= e, null;
                n.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, l = h !== null ? h.baseLanes : s, _e(Ci, xt), xt |= l
            }
        else h !== null ? (l = h.baseLanes | s, n.memoizedState = null) : l = s, _e(Ci, xt), xt |= l;
        return at(e, n, u, s), n.child
    }

    function dh(e, n) {
        var s = n.ref;
        (e === null && s !== null || e !== null && e.ref !== s) && (n.flags |= 512, n.flags |= 2097152)
    }

    function ea(e, n, s, l, u) {
        var h = ht(s) ? jn : tt.current;
        return h = gi(n, h), Pi(n, u), s = Wl(e, n, s, l, h, u), l = Hl(), e !== null && !dt ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~u, ln(e, n, u)) : (Me && l && El(n), n.flags |= 1, at(e, n, s, u), n.child)
    }

    function ph(e, n, s, l, u) {
        if (ht(s)) {
            var h = !0;
            Cs(n)
        } else h = !1;
        if (Pi(n, u), n.stateNode === null) Ws(e, n), nh(n, s, l), ql(n, s, l, u), l = !0;
        else if (e === null) {
            var g = n.stateNode,
                x = n.memoizedProps;
            g.props = x;
            var S = g.context,
                A = s.contextType;
            typeof A == "object" && A !== null ? A = Ct(A) : (A = ht(s) ? jn : tt.current, A = gi(n, A));
            var N = s.getDerivedStateFromProps,
                I = typeof N == "function" || typeof g.getSnapshotBeforeUpdate == "function";
            I || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (x !== l || S !== A) && ih(n, g, l, A), _n = !1;
            var V = n.memoizedState;
            g.state = V, Vs(n, l, g, u), S = n.memoizedState, x !== l || V !== S || ft.current || _n ? (typeof N == "function" && (Ql(n, s, N, l), S = n.memoizedState), (x = _n || th(n, s, x, l, V, S, A)) ? (I || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof g.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = l, n.memoizedState = S), g.props = l, g.state = S, g.context = A, l = x) : (typeof g.componentDidMount == "function" && (n.flags |= 4194308), l = !1)
        } else {
            g = n.stateNode, Df(e, n), x = n.memoizedProps, A = n.type === n.elementType ? x : Nt(n.type, x), g.props = A, I = n.pendingProps, V = g.context, S = s.contextType, typeof S == "object" && S !== null ? S = Ct(S) : (S = ht(s) ? jn : tt.current, S = gi(n, S));
            var $ = s.getDerivedStateFromProps;
            (N = typeof $ == "function" || typeof g.getSnapshotBeforeUpdate == "function") || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (x !== I || V !== S) && ih(n, g, l, S), _n = !1, V = n.memoizedState, g.state = V, Vs(n, l, g, u);
            var K = n.memoizedState;
            x !== I || V !== K || ft.current || _n ? (typeof $ == "function" && (Ql(n, s, $, l), K = n.memoizedState), (A = _n || th(n, s, A, l, V, K, S) || !1) ? (N || typeof g.UNSAFE_componentWillUpdate != "function" && typeof g.componentWillUpdate != "function" || (typeof g.componentWillUpdate == "function" && g.componentWillUpdate(l, K, S), typeof g.UNSAFE_componentWillUpdate == "function" && g.UNSAFE_componentWillUpdate(l, K, S)), typeof g.componentDidUpdate == "function" && (n.flags |= 4), typeof g.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof g.componentDidUpdate != "function" || x === e.memoizedProps && V === e.memoizedState || (n.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || x === e.memoizedProps && V === e.memoizedState || (n.flags |= 1024), n.memoizedProps = l, n.memoizedState = K), g.props = l, g.state = K, g.context = S, l = A) : (typeof g.componentDidUpdate != "function" || x === e.memoizedProps && V === e.memoizedState || (n.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || x === e.memoizedProps && V === e.memoizedState || (n.flags |= 1024), l = !1)
        }
        return ta(e, n, s, l, h, u)
    }

    function ta(e, n, s, l, u, h) {
        dh(e, n);
        var g = (n.flags & 128) !== 0;
        if (!l && !g) return u && wf(n, s, !1), ln(e, n, h);
        l = n.stateNode, Gy.current = n;
        var x = g && typeof s.getDerivedStateFromError != "function" ? null : l.render();
        return n.flags |= 1, e !== null && g ? (n.child = xi(n, e.child, null, h), n.child = xi(n, null, x, h)) : at(e, n, x, h), n.memoizedState = l.state, u && wf(n, s, !0), n.child
    }

    function mh(e) {
        var n = e.stateNode;
        n.pendingContext ? yf(e, n.pendingContext, n.pendingContext !== n.context) : n.context && yf(e, n.context, !1), Fl(e, n.containerInfo)
    }

    function gh(e, n, s, l, u) {
        return wi(), Al(u), n.flags |= 256, at(e, n, s, l), n.child
    }
    var na = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };

    function ia(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }
    }

    function yh(e, n, s) {
        var l = n.pendingProps,
            u = Re.current,
            h = !1,
            g = (n.flags & 128) !== 0,
            x;
        if ((x = g) || (x = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0), x ? (h = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (u |= 1), _e(Re, u & 1), e === null) return Dl(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (g = l.children, e = l.fallback, h ? (l = n.mode, h = n.child, g = {
            mode: "hidden",
            children: g
        }, !(l & 1) && h !== null ? (h.childLanes = 0, h.pendingProps = g) : h = no(g, l, 0, null), e = Xn(e, l, s, null), h.return = n, e.return = n, h.sibling = e, n.child = h, n.child.memoizedState = ia(s), n.memoizedState = na, e) : ra(n, g));
        if (u = e.memoizedState, u !== null && (x = u.dehydrated, x !== null)) return Yy(e, n, g, l, x, u, s);
        if (h) {
            h = l.fallback, g = n.mode, u = e.child, x = u.sibling;
            var S = {
                mode: "hidden",
                children: l.children
            };
            return !(g & 1) && n.child !== u ? (l = n.child, l.childLanes = 0, l.pendingProps = S, n.deletions = null) : (l = Dn(u, S), l.subtreeFlags = u.subtreeFlags & 14680064), x !== null ? h = Dn(x, h) : (h = Xn(h, g, s, null), h.flags |= 2), h.return = n, l.return = n, l.sibling = h, n.child = l, l = h, h = n.child, g = e.child.memoizedState, g = g === null ? ia(s) : {
                baseLanes: g.baseLanes | s,
                cachePool: null,
                transitions: g.transitions
            }, h.memoizedState = g, h.childLanes = e.childLanes & ~s, n.memoizedState = na, l
        }
        return h = e.child, e = h.sibling, l = Dn(h, {
            mode: "visible",
            children: l.children
        }), !(n.mode & 1) && (l.lanes = s), l.return = n, l.sibling = null, e !== null && (s = n.deletions, s === null ? (n.deletions = [e], n.flags |= 16) : s.push(e)), n.child = l, n.memoizedState = null, l
    }

    function ra(e, n) {
        return n = no({
            mode: "visible",
            children: n
        }, e.mode, 0, null), n.return = e, e.child = n
    }

    function $s(e, n, s, l) {
        return l !== null && Al(l), xi(n, e.child, null, s), e = ra(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e
    }

    function Yy(e, n, s, l, u, h, g) {
        if (s) return n.flags & 256 ? (n.flags &= -257, l = Zl(Error(r(422))), $s(e, n, g, l)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (h = l.fallback, u = n.mode, l = no({
            mode: "visible",
            children: l.children
        }, u, 0, null), h = Xn(h, u, g, null), h.flags |= 2, l.return = n, h.return = n, l.sibling = h, n.child = l, n.mode & 1 && xi(n, e.child, null, g), n.child.memoizedState = ia(g), n.memoizedState = na, h);
        if (!(n.mode & 1)) return $s(e, n, g, null);
        if (u.data === "$!") {
            if (l = u.nextSibling && u.nextSibling.dataset, l) var x = l.dgst;
            return l = x, h = Error(r(419)), l = Zl(h, l, void 0), $s(e, n, g, l)
        }
        if (x = (g & e.childLanes) !== 0, dt || x) {
            if (l = Xe, l !== null) {
                switch (g & -g) {
                case 4:
                    u = 2;
                    break;
                case 16:
                    u = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    u = 32;
                    break;
                case 536870912:
                    u = 268435456;
                    break;
                default:
                    u = 0
                }
                u = u & (l.suspendedLanes | g) ? 0 : u, u !== 0 && u !== h.retryLane && (h.retryLane = u, sn(e, u), jt(l, e, u, -1))
            }
            return xa(), l = Zl(Error(r(421))), $s(e, n, g, l)
        }
        return u.data === "$?" ? (n.flags |= 128, n.child = e.child, n = lv.bind(null, e), u._reactRetry = n, null) : (e = h.treeContext, wt = wn(u.nextSibling), vt = n, Me = !0, Vt = null, e !== null && (kt[Tt++] = nn, kt[Tt++] = rn, kt[Tt++] = bn, nn = e.id, rn = e.overflow, bn = n), n = ra(n, l.children), n.flags |= 4096, n)
    }

    function vh(e, n, s) {
        e.lanes |= n;
        var l = e.alternate;
        l !== null && (l.lanes |= n), Vl(e.return, n, s)
    }

    function sa(e, n, s, l, u) {
        var h = e.memoizedState;
        h === null ? e.memoizedState = {
            isBackwards: n,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: s,
            tailMode: u
        } : (h.isBackwards = n, h.rendering = null, h.renderingStartTime = 0, h.last = l, h.tail = s, h.tailMode = u)
    }

    function wh(e, n, s) {
        var l = n.pendingProps,
            u = l.revealOrder,
            h = l.tail;
        if (at(e, n, l.children, s), l = Re.current, l & 2) l = l & 1 | 2, n.flags |= 128;
        else {
            if (e !== null && e.flags & 128) e: for (e = n.child; e !== null;) {
                if (e.tag === 13) e.memoizedState !== null && vh(e, s, n);
                else if (e.tag === 19) vh(e, s, n);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === n) break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === n) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            l &= 1
        }
        if (_e(Re, l), !(n.mode & 1)) n.memoizedState = null;
        else switch (u) {
        case "forwards":
            for (s = n.child, u = null; s !== null;) e = s.alternate, e !== null && Ns(e) === null && (u = s), s = s.sibling;
            s = u, s === null ? (u = n.child, n.child = null) : (u = s.sibling, s.sibling = null), sa(n, !1, u, s, h);
            break;
        case "backwards":
            for (s = null, u = n.child, n.child = null; u !== null;) {
                if (e = u.alternate, e !== null && Ns(e) === null) {
                    n.child = u;
                    break
                }
                e = u.sibling, u.sibling = s, s = u, u = e
            }
            sa(n, !0, s, null, h);
            break;
        case "together":
            sa(n, !1, null, null, void 0);
            break;
        default:
            n.memoizedState = null
        }
        return n.child
    }

    function Ws(e, n) {
        !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2)
    }

    function ln(e, n, s) {
        if (e !== null && (n.dependencies = e.dependencies), Hn |= n.lanes, !(s & n.childLanes)) return null;
        if (e !== null && n.child !== e.child) throw Error(r(153));
        if (n.child !== null) {
            for (e = n.child, s = Dn(e, e.pendingProps), n.child = s, s.return = n; e.sibling !== null;) e = e.sibling, s = s.sibling = Dn(e, e.pendingProps), s.return = n;
            s.sibling = null
        }
        return n.child
    }

    function Xy(e, n, s) {
        switch (n.tag) {
        case 3:
            mh(n), wi();
            break;
        case 5:
            Lf(n);
            break;
        case 1:
            ht(n.type) && Cs(n);
            break;
        case 4:
            Fl(n, n.stateNode.containerInfo);
            break;
        case 10:
            var l = n.type._context,
                u = n.memoizedProps.value;
            _e(Os, l._currentValue), l._currentValue = u;
            break;
        case 13:
            if (l = n.memoizedState, l !== null) return l.dehydrated !== null ? (_e(Re, Re.current & 1), n.flags |= 128, null) : s & n.child.childLanes ? yh(e, n, s) : (_e(Re, Re.current & 1), e = ln(e, n, s), e !== null ? e.sibling : null);
            _e(Re, Re.current & 1);
            break;
        case 19:
            if (l = (s & n.childLanes) !== 0, e.flags & 128) {
                if (l) return wh(e, n, s);
                n.flags |= 128
            }
            if (u = n.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), _e(Re, Re.current), l) break;
            return null;
        case 22:
        case 23:
            return n.lanes = 0, hh(e, n, s)
        }
        return ln(e, n, s)
    }
    var xh, oa, Sh, Ph;
    xh = function (e, n) {
        for (var s = n.child; s !== null;) {
            if (s.tag === 5 || s.tag === 6) e.appendChild(s.stateNode);
            else if (s.tag !== 4 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue
            }
            if (s === n) break;
            for (; s.sibling === null;) {
                if (s.return === null || s.return === n) return;
                s = s.return
            }
            s.sibling.return = s.return, s = s.sibling
        }
    }, oa = function () {}, Sh = function (e, n, s, l) {
        var u = e.memoizedProps;
        if (u !== l) {
            e = n.stateNode, $n(Kt.current);
            var h = null;
            switch (s) {
            case "input":
                u = Be(e, u), l = Be(e, l), h = [];
                break;
            case "select":
                u = U({}, u, {
                    value: void 0
                }), l = U({}, l, {
                    value: void 0
                }), h = [];
                break;
            case "textarea":
                u = Fo(e, u), l = Fo(e, l), h = [];
                break;
            default:
                typeof u.onClick != "function" && typeof l.onClick == "function" && (e.onclick = _s)
            }
            bo(s, l);
            var g;
            s = null;
            for (A in u)
                if (!l.hasOwnProperty(A) && u.hasOwnProperty(A) && u[A] != null)
                    if (A === "style") {
                        var x = u[A];
                        for (g in x) x.hasOwnProperty(g) && (s || (s = {}), s[g] = "")
                    } else A !== "dangerouslySetInnerHTML" && A !== "children" && A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && A !== "autoFocus" && (a.hasOwnProperty(A) ? h || (h = []) : (h = h || []).push(A, null));
            for (A in l) {
                var S = l[A];
                if (x = u != null ? u[A] : void 0, l.hasOwnProperty(A) && S !== x && (S != null || x != null))
                    if (A === "style")
                        if (x) {
                            for (g in x) !x.hasOwnProperty(g) || S && S.hasOwnProperty(g) || (s || (s = {}), s[g] = "");
                            for (g in S) S.hasOwnProperty(g) && x[g] !== S[g] && (s || (s = {}), s[g] = S[g])
                        } else s || (h || (h = []), h.push(A, s)), s = S;
                else A === "dangerouslySetInnerHTML" ? (S = S ? S.__html : void 0, x = x ? x.__html : void 0, S != null && x !== S && (h = h || []).push(A, S)) : A === "children" ? typeof S != "string" && typeof S != "number" || (h = h || []).push(A, "" + S) : A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && (a.hasOwnProperty(A) ? (S != null && A === "onScroll" && Te("scroll", e), h || x === S || (h = [])) : (h = h || []).push(A, S))
            }
            s && (h = h || []).push("style", s);
            var A = h;
            (n.updateQueue = A) && (n.flags |= 4)
        }
    }, Ph = function (e, n, s, l) {
        s !== l && (n.flags |= 4)
    };

    function _r(e, n) {
        if (!Me) switch (e.tailMode) {
        case "hidden":
            n = e.tail;
            for (var s = null; n !== null;) n.alternate !== null && (s = n), n = n.sibling;
            s === null ? e.tail = null : s.sibling = null;
            break;
        case "collapsed":
            s = e.tail;
            for (var l = null; s !== null;) s.alternate !== null && (l = s), s = s.sibling;
            l === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null
        }
    }

    function it(e) {
        var n = e.alternate !== null && e.alternate.child === e.child,
            s = 0,
            l = 0;
        if (n)
            for (var u = e.child; u !== null;) s |= u.lanes | u.childLanes, l |= u.subtreeFlags & 14680064, l |= u.flags & 14680064, u.return = e, u = u.sibling;
        else
            for (u = e.child; u !== null;) s |= u.lanes | u.childLanes, l |= u.subtreeFlags, l |= u.flags, u.return = e, u = u.sibling;
        return e.subtreeFlags |= l, e.childLanes = s, n
    }

    function Qy(e, n, s) {
        var l = n.pendingProps;
        switch (Ml(n), n.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return it(n), null;
        case 1:
            return ht(n.type) && Ts(), it(n), null;
        case 3:
            return l = n.stateNode, _i(), Ce(ft), Ce(tt), Bl(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Ds(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Vt !== null && (ya(Vt), Vt = null))), oa(e, n), it(n), null;
        case 5:
            jl(n);
            var u = $n(vr.current);
            if (s = n.type, e !== null && n.stateNode != null) Sh(e, n, s, l, u), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
            else {
                if (!l) {
                    if (n.stateNode === null) throw Error(r(166));
                    return it(n), null
                }
                if (e = $n(Kt.current), Ds(n)) {
                    l = n.stateNode, s = n.type;
                    var h = n.memoizedProps;
                    switch (l[Ht] = n, l[dr] = h, e = (n.mode & 1) !== 0, s) {
                    case "dialog":
                        Te("cancel", l), Te("close", l);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Te("load", l);
                        break;
                    case "video":
                    case "audio":
                        for (u = 0; u < cr.length; u++) Te(cr[u], l);
                        break;
                    case "source":
                        Te("error", l);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Te("error", l), Te("load", l);
                        break;
                    case "details":
                        Te("toggle", l);
                        break;
                    case "input":
                        Se(l, h), Te("invalid", l);
                        break;
                    case "select":
                        l._wrapperState = {
                            wasMultiple: !!h.multiple
                        }, Te("invalid", l);
                        break;
                    case "textarea":
                        rc(l, h), Te("invalid", l)
                    }
                    bo(s, h), u = null;
                    for (var g in h)
                        if (h.hasOwnProperty(g)) {
                            var x = h[g];
                            g === "children" ? typeof x == "string" ? l.textContent !== x && (h.suppressHydrationWarning !== !0 && Ps(l.textContent, x, e), u = ["children", x]) : typeof x == "number" && l.textContent !== "" + x && (h.suppressHydrationWarning !== !0 && Ps(l.textContent, x, e), u = ["children", "" + x]) : a.hasOwnProperty(g) && x != null && g === "onScroll" && Te("scroll", l)
                        } switch (s) {
                    case "input":
                        oe(l), $t(l, h, !0);
                        break;
                    case "textarea":
                        oe(l), oc(l);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof h.onClick == "function" && (l.onclick = _s)
                    }
                    l = u, n.updateQueue = l, l !== null && (n.flags |= 4)
                } else {
                    g = u.nodeType === 9 ? u : u.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = lc(s)), e === "http://www.w3.org/1999/xhtml" ? s === "script" ? (e = g.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof l.is == "string" ? e = g.createElement(s, {
                        is: l.is
                    }) : (e = g.createElement(s), s === "select" && (g = e, l.multiple ? g.multiple = !0 : l.size && (g.size = l.size))) : e = g.createElementNS(e, s), e[Ht] = n, e[dr] = l, xh(e, n, !1, !1), n.stateNode = e;
                    e: {
                        switch (g = Bo(s, l), s) {
                        case "dialog":
                            Te("cancel", e), Te("close", e), u = l;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Te("load", e), u = l;
                            break;
                        case "video":
                        case "audio":
                            for (u = 0; u < cr.length; u++) Te(cr[u], e);
                            u = l;
                            break;
                        case "source":
                            Te("error", e), u = l;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Te("error", e), Te("load", e), u = l;
                            break;
                        case "details":
                            Te("toggle", e), u = l;
                            break;
                        case "input":
                            Se(e, l), u = Be(e, l), Te("invalid", e);
                            break;
                        case "option":
                            u = l;
                            break;
                        case "select":
                            e._wrapperState = {
                                wasMultiple: !!l.multiple
                            }, u = U({}, l, {
                                value: void 0
                            }), Te("invalid", e);
                            break;
                        case "textarea":
                            rc(e, l), u = Fo(e, l), Te("invalid", e);
                            break;
                        default:
                            u = l
                        }
                        bo(s, u),
                        x = u;
                        for (h in x)
                            if (x.hasOwnProperty(h)) {
                                var S = x[h];
                                h === "style" ? cc(e, S) : h === "dangerouslySetInnerHTML" ? (S = S ? S.__html : void 0, S != null && ac(e, S)) : h === "children" ? typeof S == "string" ? (s !== "textarea" || S !== "") && Hi(e, S) : typeof S == "number" && Hi(e, "" + S) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (a.hasOwnProperty(h) ? S != null && h === "onScroll" && Te("scroll", e) : S != null && F(e, h, S, g))
                            } switch (s) {
                        case "input":
                            oe(e), $t(e, l, !1);
                            break;
                        case "textarea":
                            oe(e), oc(e);
                            break;
                        case "option":
                            l.value != null && e.setAttribute("value", "" + L(l.value));
                            break;
                        case "select":
                            e.multiple = !!l.multiple, h = l.value, h != null ? ri(e, !!l.multiple, h, !1) : l.defaultValue != null && ri(e, !!l.multiple, l.defaultValue, !0);
                            break;
                        default:
                            typeof u.onClick == "function" && (e.onclick = _s)
                        }
                        switch (s) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            l = !!l.autoFocus;
                            break e;
                        case "img":
                            l = !0;
                            break e;
                        default:
                            l = !1
                        }
                    }
                    l && (n.flags |= 4)
                }
                n.ref !== null && (n.flags |= 512, n.flags |= 2097152)
            }
            return it(n), null;
        case 6:
            if (e && n.stateNode != null) Ph(e, n, e.memoizedProps, l);
            else {
                if (typeof l != "string" && n.stateNode === null) throw Error(r(166));
                if (s = $n(vr.current), $n(Kt.current), Ds(n)) {
                    if (l = n.stateNode, s = n.memoizedProps, l[Ht] = n, (h = l.nodeValue !== s) && (e = vt, e !== null)) switch (e.tag) {
                    case 3:
                        Ps(l.nodeValue, s, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Ps(l.nodeValue, s, (e.mode & 1) !== 0)
                    }
                    h && (n.flags |= 4)
                } else l = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(l), l[Ht] = n, n.stateNode = l
            }
            return it(n), null;
        case 13:
            if (Ce(Re), l = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (Me && wt !== null && n.mode & 1 && !(n.flags & 128)) Tf(), wi(), n.flags |= 98560, h = !1;
                else if (h = Ds(n), l !== null && l.dehydrated !== null) {
                    if (e === null) {
                        if (!h) throw Error(r(318));
                        if (h = n.memoizedState, h = h !== null ? h.dehydrated : null, !h) throw Error(r(317));
                        h[Ht] = n
                    } else wi(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
                    it(n), h = !1
                } else Vt !== null && (ya(Vt), Vt = null), h = !0;
                if (!h) return n.flags & 65536 ? n : null
            }
            return n.flags & 128 ? (n.lanes = s, n) : (l = l !== null, l !== (e !== null && e.memoizedState !== null) && l && (n.child.flags |= 8192, n.mode & 1 && (e === null || Re.current & 1 ? He === 0 && (He = 3) : xa())), n.updateQueue !== null && (n.flags |= 4), it(n), null);
        case 4:
            return _i(), oa(e, n), e === null && fr(n.stateNode.containerInfo), it(n), null;
        case 10:
            return zl(n.type._context), it(n), null;
        case 17:
            return ht(n.type) && Ts(), it(n), null;
        case 19:
            if (Ce(Re), h = n.memoizedState, h === null) return it(n), null;
            if (l = (n.flags & 128) !== 0, g = h.rendering, g === null)
                if (l) _r(h, !1);
                else {
                    if (He !== 0 || e !== null && e.flags & 128)
                        for (e = n.child; e !== null;) {
                            if (g = Ns(e), g !== null) {
                                for (n.flags |= 128, _r(h, !1), l = g.updateQueue, l !== null && (n.updateQueue = l, n.flags |= 4), n.subtreeFlags = 0, l = s, s = n.child; s !== null;) h = s, e = l, h.flags &= 14680066, g = h.alternate, g === null ? (h.childLanes = 0, h.lanes = e, h.child = null, h.subtreeFlags = 0, h.memoizedProps = null, h.memoizedState = null, h.updateQueue = null, h.dependencies = null, h.stateNode = null) : (h.childLanes = g.childLanes, h.lanes = g.lanes, h.child = g.child, h.subtreeFlags = 0, h.deletions = null, h.memoizedProps = g.memoizedProps, h.memoizedState = g.memoizedState, h.updateQueue = g.updateQueue, h.type = g.type, e = g.dependencies, h.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), s = s.sibling;
                                return _e(Re, Re.current & 1 | 2), n.child
                            }
                            e = e.sibling
                        }
                    h.tail !== null && Ie() > Ei && (n.flags |= 128, l = !0, _r(h, !1), n.lanes = 4194304)
                }
            else {
                if (!l)
                    if (e = Ns(g), e !== null) {
                        if (n.flags |= 128, l = !0, s = e.updateQueue, s !== null && (n.updateQueue = s, n.flags |= 4), _r(h, !0), h.tail === null && h.tailMode === "hidden" && !g.alternate && !Me) return it(n), null
                    } else 2 * Ie() - h.renderingStartTime > Ei && s !== 1073741824 && (n.flags |= 128, l = !0, _r(h, !1), n.lanes = 4194304);
                h.isBackwards ? (g.sibling = n.child, n.child = g) : (s = h.last, s !== null ? s.sibling = g : n.child = g, h.last = g)
            }
            return h.tail !== null ? (n = h.tail, h.rendering = n, h.tail = n.sibling, h.renderingStartTime = Ie(), n.sibling = null, s = Re.current, _e(Re, l ? s & 1 | 2 : s & 1), n) : (it(n), null);
        case 22:
        case 23:
            return wa(), l = n.memoizedState !== null, e !== null && e.memoizedState !== null !== l && (n.flags |= 8192), l && n.mode & 1 ? xt & 1073741824 && (it(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : it(n), null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(r(156, n.tag))
    }

    function qy(e, n) {
        switch (Ml(n), n.tag) {
        case 1:
            return ht(n.type) && Ts(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
        case 3:
            return _i(), Ce(ft), Ce(tt), Bl(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
        case 5:
            return jl(n), null;
        case 13:
            if (Ce(Re), e = n.memoizedState, e !== null && e.dehydrated !== null) {
                if (n.alternate === null) throw Error(r(340));
                wi()
            }
            return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
        case 19:
            return Ce(Re), null;
        case 4:
            return _i(), null;
        case 10:
            return zl(n.type._context), null;
        case 22:
        case 23:
            return wa(), null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var Hs = !1,
        rt = !1,
        Zy = typeof WeakSet == "function" ? WeakSet : Set,
        H = null;

    function Ti(e, n) {
        var s = e.ref;
        if (s !== null)
            if (typeof s == "function") try {
                s(null)
            } catch (l) {
                ze(e, n, l)
            } else s.current = null
    }

    function la(e, n, s) {
        try {
            s()
        } catch (l) {
            ze(e, n, l)
        }
    }
    var _h = !1;

    function Jy(e, n) {
        if (wl = fs, e = ef(), fl(e)) {
            if ("selectionStart" in e) var s = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            else e: {
                s = (s = e.ownerDocument) && s.defaultView || window;
                var l = s.getSelection && s.getSelection();
                if (l && l.rangeCount !== 0) {
                    s = l.anchorNode;
                    var u = l.anchorOffset,
                        h = l.focusNode;
                    l = l.focusOffset;
                    try {
                        s.nodeType, h.nodeType
                    } catch {
                        s = null;
                        break e
                    }
                    var g = 0,
                        x = -1,
                        S = -1,
                        A = 0,
                        N = 0,
                        I = e,
                        V = null;
                    t: for (;;) {
                        for (var $; I !== s || u !== 0 && I.nodeType !== 3 || (x = g + u), I !== h || l !== 0 && I.nodeType !== 3 || (S = g + l), I.nodeType === 3 && (g += I.nodeValue.length), ($ = I.firstChild) !== null;) V = I, I = $;
                        for (;;) {
                            if (I === e) break t;
                            if (V === s && ++A === u && (x = g), V === h && ++N === l && (S = g), ($ = I.nextSibling) !== null) break;
                            I = V, V = I.parentNode
                        }
                        I = $
                    }
                    s = x === -1 || S === -1 ? null : {
                        start: x,
                        end: S
                    }
                } else s = null
            }
            s = s || {
                start: 0,
                end: 0
            }
        } else s = null;
        for (xl = {
                focusedElem: e,
                selectionRange: s
            }, fs = !1, H = n; H !== null;)
            if (n = H, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, H = e;
            else
                for (; H !== null;) {
                    n = H;
                    try {
                        var K = n.alternate;
                        if (n.flags & 1024) switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (K !== null) {
                                var Y = K.memoizedProps,
                                    Fe = K.memoizedState,
                                    E = n.stateNode,
                                    _ = E.getSnapshotBeforeUpdate(n.elementType === n.type ? Y : Nt(n.type, Y), Fe);
                                E.__reactInternalSnapshotBeforeUpdate = _
                            }
                            break;
                        case 3:
                            var M = n.stateNode.containerInfo;
                            M.nodeType === 1 ? M.textContent = "" : M.nodeType === 9 && M.documentElement && M.removeChild(M.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(r(163))
                        }
                    } catch (b) {
                        ze(n, n.return, b)
                    }
                    if (e = n.sibling, e !== null) {
                        e.return = n.return, H = e;
                        break
                    }
                    H = n.return
                }
        return K = _h, _h = !1, K
    }

    function kr(e, n, s) {
        var l = n.updateQueue;
        if (l = l !== null ? l.lastEffect : null, l !== null) {
            var u = l = l.next;
            do {
                if ((u.tag & e) === e) {
                    var h = u.destroy;
                    u.destroy = void 0, h !== void 0 && la(n, s, h)
                }
                u = u.next
            } while (u !== l)
        }
    }

    function Ks(e, n) {
        if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
            var s = n = n.next;
            do {
                if ((s.tag & e) === e) {
                    var l = s.create;
                    s.destroy = l()
                }
                s = s.next
            } while (s !== n)
        }
    }

    function aa(e) {
        var n = e.ref;
        if (n !== null) {
            var s = e.stateNode;
            switch (e.tag) {
            case 5:
                e = s;
                break;
            default:
                e = s
            }
            typeof n == "function" ? n(e) : n.current = e
        }
    }

    function kh(e) {
        var n = e.alternate;
        n !== null && (e.alternate = null, kh(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[Ht], delete n[dr], delete n[kl], delete n[Vy], delete n[Ny])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }

    function Th(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }

    function Ch(e) {
        e: for (;;) {
            for (; e.sibling === null;) {
                if (e.return === null || Th(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function ua(e, n, s) {
        var l = e.tag;
        if (l === 5 || l === 6) e = e.stateNode, n ? s.nodeType === 8 ? s.parentNode.insertBefore(e, n) : s.insertBefore(e, n) : (s.nodeType === 8 ? (n = s.parentNode, n.insertBefore(e, s)) : (n = s, n.appendChild(e)), s = s._reactRootContainer, s != null || n.onclick !== null || (n.onclick = _s));
        else if (l !== 4 && (e = e.child, e !== null))
            for (ua(e, n, s), e = e.sibling; e !== null;) ua(e, n, s), e = e.sibling
    }

    function ca(e, n, s) {
        var l = e.tag;
        if (l === 5 || l === 6) e = e.stateNode, n ? s.insertBefore(e, n) : s.appendChild(e);
        else if (l !== 4 && (e = e.child, e !== null))
            for (ca(e, n, s), e = e.sibling; e !== null;) ca(e, n, s), e = e.sibling
    }
    var qe = null,
        It = !1;

    function Tn(e, n, s) {
        for (s = s.child; s !== null;) Eh(e, n, s), s = s.sibling
    }

    function Eh(e, n, s) {
        if (Wt && typeof Wt.onCommitFiberUnmount == "function") try {
            Wt.onCommitFiberUnmount(ss, s)
        } catch {}
        switch (s.tag) {
        case 5:
            rt || Ti(s, n);
        case 6:
            var l = qe,
                u = It;
            qe = null, Tn(e, n, s), qe = l, It = u, qe !== null && (It ? (e = qe, s = s.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(s) : e.removeChild(s)) : qe.removeChild(s.stateNode));
            break;
        case 18:
            qe !== null && (It ? (e = qe, s = s.stateNode, e.nodeType === 8 ? _l(e.parentNode, s) : e.nodeType === 1 && _l(e, s), nr(e)) : _l(qe, s.stateNode));
            break;
        case 4:
            l = qe, u = It, qe = s.stateNode.containerInfo, It = !0, Tn(e, n, s), qe = l, It = u;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!rt && (l = s.updateQueue, l !== null && (l = l.lastEffect, l !== null))) {
                u = l = l.next;
                do {
                    var h = u,
                        g = h.destroy;
                    h = h.tag, g !== void 0 && (h & 2 || h & 4) && la(s, n, g), u = u.next
                } while (u !== l)
            }
            Tn(e, n, s);
            break;
        case 1:
            if (!rt && (Ti(s, n), l = s.stateNode, typeof l.componentWillUnmount == "function")) try {
                l.props = s.memoizedProps, l.state = s.memoizedState, l.componentWillUnmount()
            } catch (x) {
                ze(s, n, x)
            }
            Tn(e, n, s);
            break;
        case 21:
            Tn(e, n, s);
            break;
        case 22:
            s.mode & 1 ? (rt = (l = rt) || s.memoizedState !== null, Tn(e, n, s), rt = l) : Tn(e, n, s);
            break;
        default:
            Tn(e, n, s)
        }
    }

    function Mh(e) {
        var n = e.updateQueue;
        if (n !== null) {
            e.updateQueue = null;
            var s = e.stateNode;
            s === null && (s = e.stateNode = new Zy), n.forEach(function (l) {
                var u = av.bind(null, e, l);
                s.has(l) || (s.add(l), l.then(u, u))
            })
        }
    }

    function Ft(e, n) {
        var s = n.deletions;
        if (s !== null)
            for (var l = 0; l < s.length; l++) {
                var u = s[l];
                try {
                    var h = e,
                        g = n,
                        x = g;
                    e: for (; x !== null;) {
                        switch (x.tag) {
                        case 5:
                            qe = x.stateNode, It = !1;
                            break e;
                        case 3:
                            qe = x.stateNode.containerInfo, It = !0;
                            break e;
                        case 4:
                            qe = x.stateNode.containerInfo, It = !0;
                            break e
                        }
                        x = x.return
                    }
                    if (qe === null) throw Error(r(160));
                    Eh(h, g, u), qe = null, It = !1;
                    var S = u.alternate;
                    S !== null && (S.return = null), u.return = null
                } catch (A) {
                    ze(u, n, A)
                }
            }
        if (n.subtreeFlags & 12854)
            for (n = n.child; n !== null;) Rh(n, e), n = n.sibling
    }

    function Rh(e, n) {
        var s = e.alternate,
            l = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Ft(n, e), Yt(e), l & 4) {
                try {
                    kr(3, e, e.return), Ks(3, e)
                } catch (Y) {
                    ze(e, e.return, Y)
                }
                try {
                    kr(5, e, e.return)
                } catch (Y) {
                    ze(e, e.return, Y)
                }
            }
            break;
        case 1:
            Ft(n, e), Yt(e), l & 512 && s !== null && Ti(s, s.return);
            break;
        case 5:
            if (Ft(n, e), Yt(e), l & 512 && s !== null && Ti(s, s.return), e.flags & 32) {
                var u = e.stateNode;
                try {
                    Hi(u, "")
                } catch (Y) {
                    ze(e, e.return, Y)
                }
            }
            if (l & 4 && (u = e.stateNode, u != null)) {
                var h = e.memoizedProps,
                    g = s !== null ? s.memoizedProps : h,
                    x = e.type,
                    S = e.updateQueue;
                if (e.updateQueue = null, S !== null) try {
                    x === "input" && h.type === "radio" && h.name != null && Ne(u, h), Bo(x, g);
                    var A = Bo(x, h);
                    for (g = 0; g < S.length; g += 2) {
                        var N = S[g],
                            I = S[g + 1];
                        N === "style" ? cc(u, I) : N === "dangerouslySetInnerHTML" ? ac(u, I) : N === "children" ? Hi(u, I) : F(u, N, I, A)
                    }
                    switch (x) {
                    case "input":
                        Ut(u, h);
                        break;
                    case "textarea":
                        sc(u, h);
                        break;
                    case "select":
                        var V = u._wrapperState.wasMultiple;
                        u._wrapperState.wasMultiple = !!h.multiple;
                        var $ = h.value;
                        $ != null ? ri(u, !!h.multiple, $, !1) : V !== !!h.multiple && (h.defaultValue != null ? ri(u, !!h.multiple, h.defaultValue, !0) : ri(u, !!h.multiple, h.multiple ? [] : "", !1))
                    }
                    u[dr] = h
                } catch (Y) {
                    ze(e, e.return, Y)
                }
            }
            break;
        case 6:
            if (Ft(n, e), Yt(e), l & 4) {
                if (e.stateNode === null) throw Error(r(162));
                u = e.stateNode, h = e.memoizedProps;
                try {
                    u.nodeValue = h
                } catch (Y) {
                    ze(e, e.return, Y)
                }
            }
            break;
        case 3:
            if (Ft(n, e), Yt(e), l & 4 && s !== null && s.memoizedState.isDehydrated) try {
                nr(n.containerInfo)
            } catch (Y) {
                ze(e, e.return, Y)
            }
            break;
        case 4:
            Ft(n, e), Yt(e);
            break;
        case 13:
            Ft(n, e), Yt(e), u = e.child, u.flags & 8192 && (h = u.memoizedState !== null, u.stateNode.isHidden = h, !h || u.alternate !== null && u.alternate.memoizedState !== null || (da = Ie())), l & 4 && Mh(e);
            break;
        case 22:
            if (N = s !== null && s.memoizedState !== null, e.mode & 1 ? (rt = (A = rt) || N, Ft(n, e), rt = A) : Ft(n, e), Yt(e), l & 8192) {
                if (A = e.memoizedState !== null, (e.stateNode.isHidden = A) && !N && e.mode & 1)
                    for (H = e, N = e.child; N !== null;) {
                        for (I = H = N; H !== null;) {
                            switch (V = H, $ = V.child, V.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                kr(4, V, V.return);
                                break;
                            case 1:
                                Ti(V, V.return);
                                var K = V.stateNode;
                                if (typeof K.componentWillUnmount == "function") {
                                    l = V, s = V.return;
                                    try {
                                        n = l, K.props = n.memoizedProps, K.state = n.memoizedState, K.componentWillUnmount()
                                    } catch (Y) {
                                        ze(l, s, Y)
                                    }
                                }
                                break;
                            case 5:
                                Ti(V, V.return);
                                break;
                            case 22:
                                if (V.memoizedState !== null) {
                                    Oh(I);
                                    continue
                                }
                            }
                            $ !== null ? ($.return = V, H = $) : Oh(I)
                        }
                        N = N.sibling
                    }
                e: for (N = null, I = e;;) {
                    if (I.tag === 5) {
                        if (N === null) {
                            N = I;
                            try {
                                u = I.stateNode, A ? (h = u.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none") : (x = I.stateNode, S = I.memoizedProps.style, g = S != null && S.hasOwnProperty("display") ? S.display : null, x.style.display = uc("display", g))
                            } catch (Y) {
                                ze(e, e.return, Y)
                            }
                        }
                    } else if (I.tag === 6) {
                        if (N === null) try {
                            I.stateNode.nodeValue = A ? "" : I.memoizedProps
                        } catch (Y) {
                            ze(e, e.return, Y)
                        }
                    } else if ((I.tag !== 22 && I.tag !== 23 || I.memoizedState === null || I === e) && I.child !== null) {
                        I.child.return = I, I = I.child;
                        continue
                    }
                    if (I === e) break e;
                    for (; I.sibling === null;) {
                        if (I.return === null || I.return === e) break e;
                        N === I && (N = null), I = I.return
                    }
                    N === I && (N = null), I.sibling.return = I.return, I = I.sibling
                }
            }
            break;
        case 19:
            Ft(n, e), Yt(e), l & 4 && Mh(e);
            break;
        case 21:
            break;
        default:
            Ft(n, e), Yt(e)
        }
    }

    function Yt(e) {
        var n = e.flags;
        if (n & 2) {
            try {
                e: {
                    for (var s = e.return; s !== null;) {
                        if (Th(s)) {
                            var l = s;
                            break e
                        }
                        s = s.return
                    }
                    throw Error(r(160))
                }
                switch (l.tag) {
                case 5:
                    var u = l.stateNode;
                    l.flags & 32 && (Hi(u, ""), l.flags &= -33);
                    var h = Ch(e);
                    ca(e, h, u);
                    break;
                case 3:
                case 4:
                    var g = l.stateNode.containerInfo,
                        x = Ch(e);
                    ua(e, x, g);
                    break;
                default:
                    throw Error(r(161))
                }
            }
            catch (S) {
                ze(e, e.return, S)
            }
            e.flags &= -3
        }
        n & 4096 && (e.flags &= -4097)
    }

    function ev(e, n, s) {
        H = e, Dh(e)
    }

    function Dh(e, n, s) {
        for (var l = (e.mode & 1) !== 0; H !== null;) {
            var u = H,
                h = u.child;
            if (u.tag === 22 && l) {
                var g = u.memoizedState !== null || Hs;
                if (!g) {
                    var x = u.alternate,
                        S = x !== null && x.memoizedState !== null || rt;
                    x = Hs;
                    var A = rt;
                    if (Hs = g, (rt = S) && !A)
                        for (H = u; H !== null;) g = H, S = g.child, g.tag === 22 && g.memoizedState !== null ? Lh(u) : S !== null ? (S.return = g, H = S) : Lh(u);
                    for (; h !== null;) H = h, Dh(h), h = h.sibling;
                    H = u, Hs = x, rt = A
                }
                Ah(e)
            } else u.subtreeFlags & 8772 && h !== null ? (h.return = u, H = h) : Ah(e)
        }
    }

    function Ah(e) {
        for (; H !== null;) {
            var n = H;
            if (n.flags & 8772) {
                var s = n.alternate;
                try {
                    if (n.flags & 8772) switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                        rt || Ks(5, n);
                        break;
                    case 1:
                        var l = n.stateNode;
                        if (n.flags & 4 && !rt)
                            if (s === null) l.componentDidMount();
                            else {
                                var u = n.elementType === n.type ? s.memoizedProps : Nt(n.type, s.memoizedProps);
                                l.componentDidUpdate(u, s.memoizedState, l.__reactInternalSnapshotBeforeUpdate)
                            } var h = n.updateQueue;
                        h !== null && Of(n, h, l);
                        break;
                    case 3:
                        var g = n.updateQueue;
                        if (g !== null) {
                            if (s = null, n.child !== null) switch (n.child.tag) {
                            case 5:
                                s = n.child.stateNode;
                                break;
                            case 1:
                                s = n.child.stateNode
                            }
                            Of(n, g, s)
                        }
                        break;
                    case 5:
                        var x = n.stateNode;
                        if (s === null && n.flags & 4) {
                            s = x;
                            var S = n.memoizedProps;
                            switch (n.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                S.autoFocus && s.focus();
                                break;
                            case "img":
                                S.src && (s.src = S.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (n.memoizedState === null) {
                            var A = n.alternate;
                            if (A !== null) {
                                var N = A.memoizedState;
                                if (N !== null) {
                                    var I = N.dehydrated;
                                    I !== null && nr(I)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(r(163))
                    }
                    rt || n.flags & 512 && aa(n)
                } catch (V) {
                    ze(n, n.return, V)
                }
            }
            if (n === e) {
                H = null;
                break
            }
            if (s = n.sibling, s !== null) {
                s.return = n.return, H = s;
                break
            }
            H = n.return
        }
    }

    function Oh(e) {
        for (; H !== null;) {
            var n = H;
            if (n === e) {
                H = null;
                break
            }
            var s = n.sibling;
            if (s !== null) {
                s.return = n.return, H = s;
                break
            }
            H = n.return
        }
    }

    function Lh(e) {
        for (; H !== null;) {
            var n = H;
            try {
                switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    var s = n.return;
                    try {
                        Ks(4, n)
                    } catch (S) {
                        ze(n, s, S)
                    }
                    break;
                case 1:
                    var l = n.stateNode;
                    if (typeof l.componentDidMount == "function") {
                        var u = n.return;
                        try {
                            l.componentDidMount()
                        } catch (S) {
                            ze(n, u, S)
                        }
                    }
                    var h = n.return;
                    try {
                        aa(n)
                    } catch (S) {
                        ze(n, h, S)
                    }
                    break;
                case 5:
                    var g = n.return;
                    try {
                        aa(n)
                    } catch (S) {
                        ze(n, g, S)
                    }
                }
            } catch (S) {
                ze(n, n.return, S)
            }
            if (n === e) {
                H = null;
                break
            }
            var x = n.sibling;
            if (x !== null) {
                x.return = n.return, H = x;
                break
            }
            H = n.return
        }
    }
    var tv = Math.ceil,
        Gs = J.ReactCurrentDispatcher,
        fa = J.ReactCurrentOwner,
        Mt = J.ReactCurrentBatchConfig,
        me = 0,
        Xe = null,
        Ue = null,
        Ze = 0,
        xt = 0,
        Ci = xn(0),
        He = 0,
        Tr = null,
        Hn = 0,
        Ys = 0,
        ha = 0,
        Cr = null,
        pt = null,
        da = 0,
        Ei = 1 / 0,
        an = null,
        Xs = !1,
        pa = null,
        Cn = null,
        Qs = !1,
        En = null,
        qs = 0,
        Er = 0,
        ma = null,
        Zs = -1,
        Js = 0;

    function ut() {
        return me & 6 ? Ie() : Zs !== -1 ? Zs : Zs = Ie()
    }

    function Mn(e) {
        return e.mode & 1 ? me & 2 && Ze !== 0 ? Ze & -Ze : Fy.transition !== null ? (Js === 0 && (Js = Tc()), Js) : (e = xe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : zc(e.type)), e) : 1
    }

    function jt(e, n, s, l) {
        if (50 < Er) throw Er = 0, ma = null, Error(r(185));
        qi(e, s, l), (!(me & 2) || e !== Xe) && (e === Xe && (!(me & 2) && (Ys |= s), He === 4 && Rn(e, Ze)), mt(e, l), s === 1 && me === 0 && !(n.mode & 1) && (Ei = Ie() + 500, Es && Pn()))
    }

    function mt(e, n) {
        var s = e.callbackNode;
        Fg(e, n);
        var l = as(e, e === Xe ? Ze : 0);
        if (l === 0) s !== null && Pc(s), e.callbackNode = null, e.callbackPriority = 0;
        else if (n = l & -l, e.callbackPriority !== n) {
            if (s != null && Pc(s), n === 1) e.tag === 0 ? Iy(Vh.bind(null, e)) : xf(Vh.bind(null, e)), Ly(function () {
                !(me & 6) && Pn()
            }), s = null;
            else {
                switch (Cc(l)) {
                case 1:
                    s = Yo;
                    break;
                case 4:
                    s = _c;
                    break;
                case 16:
                    s = rs;
                    break;
                case 536870912:
                    s = kc;
                    break;
                default:
                    s = rs
                }
                s = $h(s, zh.bind(null, e))
            }
            e.callbackPriority = n, e.callbackNode = s
        }
    }

    function zh(e, n) {
        if (Zs = -1, Js = 0, me & 6) throw Error(r(327));
        var s = e.callbackNode;
        if (Mi() && e.callbackNode !== s) return null;
        var l = as(e, e === Xe ? Ze : 0);
        if (l === 0) return null;
        if (l & 30 || l & e.expiredLanes || n) n = eo(e, l);
        else {
            n = l;
            var u = me;
            me |= 2;
            var h = Ih();
            (Xe !== e || Ze !== n) && (an = null, Ei = Ie() + 500, Gn(e, n));
            do try {
                rv();
                break
            } catch (x) {
                Nh(e, x)
            }
            while (!0);
            Ll(), Gs.current = h, me = u, Ue !== null ? n = 0 : (Xe = null, Ze = 0, n = He)
        }
        if (n !== 0) {
            if (n === 2 && (u = Xo(e), u !== 0 && (l = u, n = ga(e, u))), n === 1) throw s = Tr, Gn(e, 0), Rn(e, l), mt(e, Ie()), s;
            if (n === 6) Rn(e, l);
            else {
                if (u = e.current.alternate, !(l & 30) && !nv(u) && (n = eo(e, l), n === 2 && (h = Xo(e), h !== 0 && (l = h, n = ga(e, h))), n === 1)) throw s = Tr, Gn(e, 0), Rn(e, l), mt(e, Ie()), s;
                switch (e.finishedWork = u, e.finishedLanes = l, n) {
                case 0:
                case 1:
                    throw Error(r(345));
                case 2:
                    Yn(e, pt, an);
                    break;
                case 3:
                    if (Rn(e, l), (l & 130023424) === l && (n = da + 500 - Ie(), 10 < n)) {
                        if (as(e, 0) !== 0) break;
                        if (u = e.suspendedLanes, (u & l) !== l) {
                            ut(), e.pingedLanes |= e.suspendedLanes & u;
                            break
                        }
                        e.timeoutHandle = Pl(Yn.bind(null, e, pt, an), n);
                        break
                    }
                    Yn(e, pt, an);
                    break;
                case 4:
                    if (Rn(e, l), (l & 4194240) === l) break;
                    for (n = e.eventTimes, u = -1; 0 < l;) {
                        var g = 31 - Lt(l);
                        h = 1 << g, g = n[g], g > u && (u = g), l &= ~h
                    }
                    if (l = u, l = Ie() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * tv(l / 1960)) - l, 10 < l) {
                        e.timeoutHandle = Pl(Yn.bind(null, e, pt, an), l);
                        break
                    }
                    Yn(e, pt, an);
                    break;
                case 5:
                    Yn(e, pt, an);
                    break;
                default:
                    throw Error(r(329))
                }
            }
        }
        return mt(e, Ie()), e.callbackNode === s ? zh.bind(null, e) : null
    }

    function ga(e, n) {
        var s = Cr;
        return e.current.memoizedState.isDehydrated && (Gn(e, n).flags |= 256), e = eo(e, n), e !== 2 && (n = pt, pt = s, n !== null && ya(n)), e
    }

    function ya(e) {
        pt === null ? pt = e : pt.push.apply(pt, e)
    }

    function nv(e) {
        for (var n = e;;) {
            if (n.flags & 16384) {
                var s = n.updateQueue;
                if (s !== null && (s = s.stores, s !== null))
                    for (var l = 0; l < s.length; l++) {
                        var u = s[l],
                            h = u.getSnapshot;
                        u = u.value;
                        try {
                            if (!zt(h(), u)) return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (s = n.child, n.subtreeFlags & 16384 && s !== null) s.return = n, n = s;
            else {
                if (n === e) break;
                for (; n.sibling === null;) {
                    if (n.return === null || n.return === e) return !0;
                    n = n.return
                }
                n.sibling.return = n.return, n = n.sibling
            }
        }
        return !0
    }

    function Rn(e, n) {
        for (n &= ~ha, n &= ~Ys, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n;) {
            var s = 31 - Lt(n),
                l = 1 << s;
            e[s] = -1, n &= ~l
        }
    }

    function Vh(e) {
        if (me & 6) throw Error(r(327));
        Mi();
        var n = as(e, 0);
        if (!(n & 1)) return mt(e, Ie()), null;
        var s = eo(e, n);
        if (e.tag !== 0 && s === 2) {
            var l = Xo(e);
            l !== 0 && (n = l, s = ga(e, l))
        }
        if (s === 1) throw s = Tr, Gn(e, 0), Rn(e, n), mt(e, Ie()), s;
        if (s === 6) throw Error(r(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = n, Yn(e, pt, an), mt(e, Ie()), null
    }

    function va(e, n) {
        var s = me;
        me |= 1;
        try {
            return e(n)
        } finally {
            me = s, me === 0 && (Ei = Ie() + 500, Es && Pn())
        }
    }

    function Kn(e) {
        En !== null && En.tag === 0 && !(me & 6) && Mi();
        var n = me;
        me |= 1;
        var s = Mt.transition,
            l = xe;
        try {
            if (Mt.transition = null, xe = 1, e) return e()
        } finally {
            xe = l, Mt.transition = s, me = n, !(me & 6) && Pn()
        }
    }

    function wa() {
        xt = Ci.current, Ce(Ci)
    }

    function Gn(e, n) {
        e.finishedWork = null, e.finishedLanes = 0;
        var s = e.timeoutHandle;
        if (s !== -1 && (e.timeoutHandle = -1, Oy(s)), Ue !== null)
            for (s = Ue.return; s !== null;) {
                var l = s;
                switch (Ml(l), l.tag) {
                case 1:
                    l = l.type.childContextTypes, l != null && Ts();
                    break;
                case 3:
                    _i(), Ce(ft), Ce(tt), Bl();
                    break;
                case 5:
                    jl(l);
                    break;
                case 4:
                    _i();
                    break;
                case 13:
                    Ce(Re);
                    break;
                case 19:
                    Ce(Re);
                    break;
                case 10:
                    zl(l.type._context);
                    break;
                case 22:
                case 23:
                    wa()
                }
                s = s.return
            }
        if (Xe = e, Ue = e = Dn(e.current, null), Ze = xt = n, He = 0, Tr = null, ha = Ys = Hn = 0, pt = Cr = null, Un !== null) {
            for (n = 0; n < Un.length; n++)
                if (s = Un[n], l = s.interleaved, l !== null) {
                    s.interleaved = null;
                    var u = l.next,
                        h = s.pending;
                    if (h !== null) {
                        var g = h.next;
                        h.next = u, l.next = g
                    }
                    s.pending = l
                } Un = null
        }
        return e
    }

    function Nh(e, n) {
        do {
            var s = Ue;
            try {
                if (Ll(), Is.current = Bs, Fs) {
                    for (var l = De.memoizedState; l !== null;) {
                        var u = l.queue;
                        u !== null && (u.pending = null), l = l.next
                    }
                    Fs = !1
                }
                if (Wn = 0, Ye = We = De = null, wr = !1, xr = 0, fa.current = null, s === null || s.return === null) {
                    He = 1, Tr = n, Ue = null;
                    break
                }
                e: {
                    var h = e,
                        g = s.return,
                        x = s,
                        S = n;
                    if (n = Ze, x.flags |= 32768, S !== null && typeof S == "object" && typeof S.then == "function") {
                        var A = S,
                            N = x,
                            I = N.tag;
                        if (!(N.mode & 1) && (I === 0 || I === 11 || I === 15)) {
                            var V = N.alternate;
                            V ? (N.updateQueue = V.updateQueue, N.memoizedState = V.memoizedState, N.lanes = V.lanes) : (N.updateQueue = null, N.memoizedState = null)
                        }
                        var $ = lh(g);
                        if ($ !== null) {
                            $.flags &= -257, ah($, g, x, h, n), $.mode & 1 && oh(h, A, n), n = $, S = A;
                            var K = n.updateQueue;
                            if (K === null) {
                                var Y = new Set;
                                Y.add(S), n.updateQueue = Y
                            } else K.add(S);
                            break e
                        } else {
                            if (!(n & 1)) {
                                oh(h, A, n), xa();
                                break e
                            }
                            S = Error(r(426))
                        }
                    } else if (Me && x.mode & 1) {
                        var Fe = lh(g);
                        if (Fe !== null) {
                            !(Fe.flags & 65536) && (Fe.flags |= 256), ah(Fe, g, x, h, n), Al(ki(S, x));
                            break e
                        }
                    }
                    h = S = ki(S, x),
                    He !== 4 && (He = 2),
                    Cr === null ? Cr = [h] : Cr.push(h),
                    h = g;do {
                        switch (h.tag) {
                        case 3:
                            h.flags |= 65536, n &= -n, h.lanes |= n;
                            var E = rh(h, S, n);
                            Af(h, E);
                            break e;
                        case 1:
                            x = S;
                            var _ = h.type,
                                M = h.stateNode;
                            if (!(h.flags & 128) && (typeof _.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (Cn === null || !Cn.has(M)))) {
                                h.flags |= 65536, n &= -n, h.lanes |= n;
                                var b = sh(h, x, n);
                                Af(h, b);
                                break e
                            }
                        }
                        h = h.return
                    } while (h !== null)
                }
                jh(s)
            } catch (X) {
                n = X, Ue === s && s !== null && (Ue = s = s.return);
                continue
            }
            break
        } while (!0)
    }

    function Ih() {
        var e = Gs.current;
        return Gs.current = Bs, e === null ? Bs : e
    }

    function xa() {
        (He === 0 || He === 3 || He === 2) && (He = 4), Xe === null || !(Hn & 268435455) && !(Ys & 268435455) || Rn(Xe, Ze)
    }

    function eo(e, n) {
        var s = me;
        me |= 2;
        var l = Ih();
        (Xe !== e || Ze !== n) && (an = null, Gn(e, n));
        do try {
            iv();
            break
        } catch (u) {
            Nh(e, u)
        }
        while (!0);
        if (Ll(), me = s, Gs.current = l, Ue !== null) throw Error(r(261));
        return Xe = null, Ze = 0, He
    }

    function iv() {
        for (; Ue !== null;) Fh(Ue)
    }

    function rv() {
        for (; Ue !== null && !Rg();) Fh(Ue)
    }

    function Fh(e) {
        var n = Uh(e.alternate, e, xt);
        e.memoizedProps = e.pendingProps, n === null ? jh(e) : Ue = n, fa.current = null
    }

    function jh(e) {
        var n = e;
        do {
            var s = n.alternate;
            if (e = n.return, n.flags & 32768) {
                if (s = qy(s, n), s !== null) {
                    s.flags &= 32767, Ue = s;
                    return
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    He = 6, Ue = null;
                    return
                }
            } else if (s = Qy(s, n, xt), s !== null) {
                Ue = s;
                return
            }
            if (n = n.sibling, n !== null) {
                Ue = n;
                return
            }
            Ue = n = e
        } while (n !== null);
        He === 0 && (He = 5)
    }

    function Yn(e, n, s) {
        var l = xe,
            u = Mt.transition;
        try {
            Mt.transition = null, xe = 1, sv(e, n, s, l)
        } finally {
            Mt.transition = u, xe = l
        }
        return null
    }

    function sv(e, n, s, l) {
        do Mi(); while (En !== null);
        if (me & 6) throw Error(r(327));
        s = e.finishedWork;
        var u = e.finishedLanes;
        if (s === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, s === e.current) throw Error(r(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var h = s.lanes | s.childLanes;
        if (jg(e, h), e === Xe && (Ue = Xe = null, Ze = 0), !(s.subtreeFlags & 2064) && !(s.flags & 2064) || Qs || (Qs = !0, $h(rs, function () {
                return Mi(), null
            })), h = (s.flags & 15990) !== 0, s.subtreeFlags & 15990 || h) {
            h = Mt.transition, Mt.transition = null;
            var g = xe;
            xe = 1;
            var x = me;
            me |= 4, fa.current = null, Jy(e, s), Rh(s, e), Ty(xl), fs = !!wl, xl = wl = null, e.current = s, ev(s), Dg(), me = x, xe = g, Mt.transition = h
        } else e.current = s;
        if (Qs && (Qs = !1, En = e, qs = u), h = e.pendingLanes, h === 0 && (Cn = null), Lg(s.stateNode), mt(e, Ie()), n !== null)
            for (l = e.onRecoverableError, s = 0; s < n.length; s++) u = n[s], l(u.value, {
                componentStack: u.stack,
                digest: u.digest
            });
        if (Xs) throw Xs = !1, e = pa, pa = null, e;
        return qs & 1 && e.tag !== 0 && Mi(), h = e.pendingLanes, h & 1 ? e === ma ? Er++ : (Er = 0, ma = e) : Er = 0, Pn(), null
    }

    function Mi() {
        if (En !== null) {
            var e = Cc(qs),
                n = Mt.transition,
                s = xe;
            try {
                if (Mt.transition = null, xe = 16 > e ? 16 : e, En === null) var l = !1;
                else {
                    if (e = En, En = null, qs = 0, me & 6) throw Error(r(331));
                    var u = me;
                    for (me |= 4, H = e.current; H !== null;) {
                        var h = H,
                            g = h.child;
                        if (H.flags & 16) {
                            var x = h.deletions;
                            if (x !== null) {
                                for (var S = 0; S < x.length; S++) {
                                    var A = x[S];
                                    for (H = A; H !== null;) {
                                        var N = H;
                                        switch (N.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            kr(8, N, h)
                                        }
                                        var I = N.child;
                                        if (I !== null) I.return = N, H = I;
                                        else
                                            for (; H !== null;) {
                                                N = H;
                                                var V = N.sibling,
                                                    $ = N.return;
                                                if (kh(N), N === A) {
                                                    H = null;
                                                    break
                                                }
                                                if (V !== null) {
                                                    V.return = $, H = V;
                                                    break
                                                }
                                                H = $
                                            }
                                    }
                                }
                                var K = h.alternate;
                                if (K !== null) {
                                    var Y = K.child;
                                    if (Y !== null) {
                                        K.child = null;
                                        do {
                                            var Fe = Y.sibling;
                                            Y.sibling = null, Y = Fe
                                        } while (Y !== null)
                                    }
                                }
                                H = h
                            }
                        }
                        if (h.subtreeFlags & 2064 && g !== null) g.return = h, H = g;
                        else e: for (; H !== null;) {
                            if (h = H, h.flags & 2048) switch (h.tag) {
                            case 0:
                            case 11:
                            case 15:
                                kr(9, h, h.return)
                            }
                            var E = h.sibling;
                            if (E !== null) {
                                E.return = h.return, H = E;
                                break e
                            }
                            H = h.return
                        }
                    }
                    var _ = e.current;
                    for (H = _; H !== null;) {
                        g = H;
                        var M = g.child;
                        if (g.subtreeFlags & 2064 && M !== null) M.return = g, H = M;
                        else e: for (g = _; H !== null;) {
                            if (x = H, x.flags & 2048) try {
                                switch (x.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ks(9, x)
                                }
                            } catch (X) {
                                ze(x, x.return, X)
                            }
                            if (x === g) {
                                H = null;
                                break e
                            }
                            var b = x.sibling;
                            if (b !== null) {
                                b.return = x.return, H = b;
                                break e
                            }
                            H = x.return
                        }
                    }
                    if (me = u, Pn(), Wt && typeof Wt.onPostCommitFiberRoot == "function") try {
                        Wt.onPostCommitFiberRoot(ss, e)
                    } catch {}
                    l = !0
                }
                return l
            } finally {
                xe = s, Mt.transition = n
            }
        }
        return !1
    }

    function bh(e, n, s) {
        n = ki(s, n), n = rh(e, n, 1), e = kn(e, n, 1), n = ut(), e !== null && (qi(e, 1, n), mt(e, n))
    }

    function ze(e, n, s) {
        if (e.tag === 3) bh(e, e, s);
        else
            for (; n !== null;) {
                if (n.tag === 3) {
                    bh(n, e, s);
                    break
                } else if (n.tag === 1) {
                    var l = n.stateNode;
                    if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Cn === null || !Cn.has(l))) {
                        e = ki(s, e), e = sh(n, e, 1), n = kn(n, e, 1), e = ut(), n !== null && (qi(n, 1, e), mt(n, e));
                        break
                    }
                }
                n = n.return
            }
    }

    function ov(e, n, s) {
        var l = e.pingCache;
        l !== null && l.delete(n), n = ut(), e.pingedLanes |= e.suspendedLanes & s, Xe === e && (Ze & s) === s && (He === 4 || He === 3 && (Ze & 130023424) === Ze && 500 > Ie() - da ? Gn(e, 0) : ha |= s), mt(e, n)
    }

    function Bh(e, n) {
        n === 0 && (e.mode & 1 ? (n = ls, ls <<= 1, !(ls & 130023424) && (ls = 4194304)) : n = 1);
        var s = ut();
        e = sn(e, n), e !== null && (qi(e, n, s), mt(e, s))
    }

    function lv(e) {
        var n = e.memoizedState,
            s = 0;
        n !== null && (s = n.retryLane), Bh(e, s)
    }

    function av(e, n) {
        var s = 0;
        switch (e.tag) {
        case 13:
            var l = e.stateNode,
                u = e.memoizedState;
            u !== null && (s = u.retryLane);
            break;
        case 19:
            l = e.stateNode;
            break;
        default:
            throw Error(r(314))
        }
        l !== null && l.delete(n), Bh(e, s)
    }
    var Uh;
    Uh = function (e, n, s) {
        if (e !== null)
            if (e.memoizedProps !== n.pendingProps || ft.current) dt = !0;
            else {
                if (!(e.lanes & s) && !(n.flags & 128)) return dt = !1, Xy(e, n, s);
                dt = !!(e.flags & 131072)
            }
        else dt = !1, Me && n.flags & 1048576 && Sf(n, Rs, n.index);
        switch (n.lanes = 0, n.tag) {
        case 2:
            var l = n.type;
            Ws(e, n), e = n.pendingProps;
            var u = gi(n, tt.current);
            Pi(n, s), u = Wl(null, n, l, e, u, s);
            var h = Hl();
            return n.flags |= 1, typeof u == "object" && u !== null && typeof u.render == "function" && u.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, ht(l) ? (h = !0, Cs(n)) : h = !1, n.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, Il(n), u.updater = Us, n.stateNode = u, u._reactInternals = n, ql(n, l, e, s), n = ta(null, n, l, !0, h, s)) : (n.tag = 0, Me && h && El(n), at(null, n, u, s), n = n.child), n;
        case 16:
            l = n.elementType;
            e: {
                switch (Ws(e, n), e = n.pendingProps, u = l._init, l = u(l._payload), n.type = l, u = n.tag = cv(l), e = Nt(l, e), u) {
                case 0:
                    n = ea(null, n, l, e, s);
                    break e;
                case 1:
                    n = ph(null, n, l, e, s);
                    break e;
                case 11:
                    n = uh(null, n, l, e, s);
                    break e;
                case 14:
                    n = ch(null, n, l, Nt(l.type, e), s);
                    break e
                }
                throw Error(r(306, l, ""))
            }
            return n;
        case 0:
            return l = n.type, u = n.pendingProps, u = n.elementType === l ? u : Nt(l, u), ea(e, n, l, u, s);
        case 1:
            return l = n.type, u = n.pendingProps, u = n.elementType === l ? u : Nt(l, u), ph(e, n, l, u, s);
        case 3:
            e: {
                if (mh(n), e === null) throw Error(r(387));l = n.pendingProps,
                h = n.memoizedState,
                u = h.element,
                Df(e, n),
                Vs(n, l, null, s);
                var g = n.memoizedState;
                if (l = g.element, h.isDehydrated)
                    if (h = {
                            element: l,
                            isDehydrated: !1,
                            cache: g.cache,
                            pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
                            transitions: g.transitions
                        }, n.updateQueue.baseState = h, n.memoizedState = h, n.flags & 256) {
                        u = ki(Error(r(423)), n), n = gh(e, n, l, s, u);
                        break e
                    } else if (l !== u) {
                    u = ki(Error(r(424)), n), n = gh(e, n, l, s, u);
                    break e
                } else
                    for (wt = wn(n.stateNode.containerInfo.firstChild), vt = n, Me = !0, Vt = null, s = Mf(n, null, l, s), n.child = s; s;) s.flags = s.flags & -3 | 4096, s = s.sibling;
                else {
                    if (wi(), l === u) {
                        n = ln(e, n, s);
                        break e
                    }
                    at(e, n, l, s)
                }
                n = n.child
            }
            return n;
        case 5:
            return Lf(n), e === null && Dl(n), l = n.type, u = n.pendingProps, h = e !== null ? e.memoizedProps : null, g = u.children, Sl(l, u) ? g = null : h !== null && Sl(l, h) && (n.flags |= 32), dh(e, n), at(e, n, g, s), n.child;
        case 6:
            return e === null && Dl(n), null;
        case 13:
            return yh(e, n, s);
        case 4:
            return Fl(n, n.stateNode.containerInfo), l = n.pendingProps, e === null ? n.child = xi(n, null, l, s) : at(e, n, l, s), n.child;
        case 11:
            return l = n.type, u = n.pendingProps, u = n.elementType === l ? u : Nt(l, u), uh(e, n, l, u, s);
        case 7:
            return at(e, n, n.pendingProps, s), n.child;
        case 8:
            return at(e, n, n.pendingProps.children, s), n.child;
        case 12:
            return at(e, n, n.pendingProps.children, s), n.child;
        case 10:
            e: {
                if (l = n.type._context, u = n.pendingProps, h = n.memoizedProps, g = u.value, _e(Os, l._currentValue), l._currentValue = g, h !== null)
                    if (zt(h.value, g)) {
                        if (h.children === u.children && !ft.current) {
                            n = ln(e, n, s);
                            break e
                        }
                    } else
                        for (h = n.child, h !== null && (h.return = n); h !== null;) {
                            var x = h.dependencies;
                            if (x !== null) {
                                g = h.child;
                                for (var S = x.firstContext; S !== null;) {
                                    if (S.context === l) {
                                        if (h.tag === 1) {
                                            S = on(-1, s & -s), S.tag = 2;
                                            var A = h.updateQueue;
                                            if (A !== null) {
                                                A = A.shared;
                                                var N = A.pending;
                                                N === null ? S.next = S : (S.next = N.next, N.next = S), A.pending = S
                                            }
                                        }
                                        h.lanes |= s, S = h.alternate, S !== null && (S.lanes |= s), Vl(h.return, s, n), x.lanes |= s;
                                        break
                                    }
                                    S = S.next
                                }
                            } else if (h.tag === 10) g = h.type === n.type ? null : h.child;
                            else if (h.tag === 18) {
                                if (g = h.return, g === null) throw Error(r(341));
                                g.lanes |= s, x = g.alternate, x !== null && (x.lanes |= s), Vl(g, s, n), g = h.sibling
                            } else g = h.child;
                            if (g !== null) g.return = h;
                            else
                                for (g = h; g !== null;) {
                                    if (g === n) {
                                        g = null;
                                        break
                                    }
                                    if (h = g.sibling, h !== null) {
                                        h.return = g.return, g = h;
                                        break
                                    }
                                    g = g.return
                                }
                            h = g
                        }
                at(e, n, u.children, s),
                n = n.child
            }
            return n;
        case 9:
            return u = n.type, l = n.pendingProps.children, Pi(n, s), u = Ct(u), l = l(u), n.flags |= 1, at(e, n, l, s), n.child;
        case 14:
            return l = n.type, u = Nt(l, n.pendingProps), u = Nt(l.type, u), ch(e, n, l, u, s);
        case 15:
            return fh(e, n, n.type, n.pendingProps, s);
        case 17:
            return l = n.type, u = n.pendingProps, u = n.elementType === l ? u : Nt(l, u), Ws(e, n), n.tag = 1, ht(l) ? (e = !0, Cs(n)) : e = !1, Pi(n, s), nh(n, l, u), ql(n, l, u, s), ta(null, n, l, !0, e, s);
        case 19:
            return wh(e, n, s);
        case 22:
            return hh(e, n, s)
        }
        throw Error(r(156, n.tag))
    };

    function $h(e, n) {
        return Sc(e, n)
    }

    function uv(e, n, s, l) {
        this.tag = e, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Rt(e, n, s, l) {
        return new uv(e, n, s, l)
    }

    function Sa(e) {
        return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function cv(e) {
        if (typeof e == "function") return Sa(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === et) return 11;
            if (e === ct) return 14
        }
        return 2
    }

    function Dn(e, n) {
        var s = e.alternate;
        return s === null ? (s = Rt(e.tag, n, e.key, e.mode), s.elementType = e.elementType, s.type = e.type, s.stateNode = e.stateNode, s.alternate = e, e.alternate = s) : (s.pendingProps = n, s.type = e.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = e.flags & 14680064, s.childLanes = e.childLanes, s.lanes = e.lanes, s.child = e.child, s.memoizedProps = e.memoizedProps, s.memoizedState = e.memoizedState, s.updateQueue = e.updateQueue, n = e.dependencies, s.dependencies = n === null ? null : {
            lanes: n.lanes,
            firstContext: n.firstContext
        }, s.sibling = e.sibling, s.index = e.index, s.ref = e.ref, s
    }

    function to(e, n, s, l, u, h) {
        var g = 2;
        if (l = e, typeof e == "function") Sa(e) && (g = 1);
        else if (typeof e == "string") g = 5;
        else e: switch (e) {
        case de:
            return Xn(s.children, u, h, n);
        case q:
            g = 8, u |= 8;
            break;
        case ve:
            return e = Rt(12, s, n, u | 2), e.elementType = ve, e.lanes = h, e;
        case Ke:
            return e = Rt(13, s, n, u), e.elementType = Ke, e.lanes = h, e;
        case Ge:
            return e = Rt(19, s, n, u), e.elementType = Ge, e.lanes = h, e;
        case ce:
            return no(s, u, h, n);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
            case we:
                g = 10;
                break e;
            case Le:
                g = 9;
                break e;
            case et:
                g = 11;
                break e;
            case ct:
                g = 14;
                break e;
            case be:
                g = 16, l = null;
                break e
            }
            throw Error(r(130, e == null ? e : typeof e, ""))
        }
        return n = Rt(g, s, n, u), n.elementType = e, n.type = l, n.lanes = h, n
    }

    function Xn(e, n, s, l) {
        return e = Rt(7, e, l, n), e.lanes = s, e
    }

    function no(e, n, s, l) {
        return e = Rt(22, e, l, n), e.elementType = ce, e.lanes = s, e.stateNode = {
            isHidden: !1
        }, e
    }

    function Pa(e, n, s) {
        return e = Rt(6, e, null, n), e.lanes = s, e
    }

    function _a(e, n, s) {
        return n = Rt(4, e.children !== null ? e.children : [], e.key, n), n.lanes = s, n.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, n
    }

    function fv(e, n, s, l, u) {
        this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Qo(0), this.expirationTimes = Qo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qo(0), this.identifierPrefix = l, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null
    }

    function ka(e, n, s, l, u, h, g, x, S) {
        return e = new fv(e, n, s, x, S), n === 1 ? (n = 1, h === !0 && (n |= 8)) : n = 0, h = Rt(3, null, null, n), e.current = h, h.stateNode = e, h.memoizedState = {
            element: l,
            isDehydrated: s,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, Il(h), e
    }

    function hv(e, n, s) {
        var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: ee,
            key: l == null ? null : "" + l,
            children: e,
            containerInfo: n,
            implementation: s
        }
    }

    function Wh(e) {
        if (!e) return Sn;
        e = e._reactInternals;
        e: {
            if (In(e) !== e || e.tag !== 1) throw Error(r(170));
            var n = e;do {
                switch (n.tag) {
                case 3:
                    n = n.stateNode.context;
                    break e;
                case 1:
                    if (ht(n.type)) {
                        n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                n = n.return
            } while (n !== null);
            throw Error(r(171))
        }
        if (e.tag === 1) {
            var s = e.type;
            if (ht(s)) return vf(e, s, n)
        }
        return n
    }

    function Hh(e, n, s, l, u, h, g, x, S) {
        return e = ka(s, l, !0, e, u, h, g, x, S), e.context = Wh(null), s = e.current, l = ut(), u = Mn(s), h = on(l, u), h.callback = n ?? null, kn(s, h, u), e.current.lanes = u, qi(e, u, l), mt(e, l), e
    }

    function io(e, n, s, l) {
        var u = n.current,
            h = ut(),
            g = Mn(u);
        return s = Wh(s), n.context === null ? n.context = s : n.pendingContext = s, n = on(h, g), n.payload = {
            element: e
        }, l = l === void 0 ? null : l, l !== null && (n.callback = l), e = kn(u, n, g), e !== null && (jt(e, u, g, h), zs(e, u, g)), g
    }

    function ro(e) {
        if (e = e.current, !e.child) return null;
        switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
        }
    }

    function Kh(e, n) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var s = e.retryLane;
            e.retryLane = s !== 0 && s < n ? s : n
        }
    }

    function Ta(e, n) {
        Kh(e, n), (e = e.alternate) && Kh(e, n)
    }
    var Gh = typeof reportError == "function" ? reportError : function (e) {
        console.error(e)
    };

    function Ca(e) {
        this._internalRoot = e
    }
    so.prototype.render = Ca.prototype.render = function (e) {
        var n = this._internalRoot;
        if (n === null) throw Error(r(409));
        io(e, n, null, null)
    }, so.prototype.unmount = Ca.prototype.unmount = function () {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var n = e.containerInfo;
            Kn(function () {
                io(null, e, null, null)
            }), n[en] = null
        }
    };

    function so(e) {
        this._internalRoot = e
    }
    so.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var n = Rc();
            e = {
                blockedOn: null,
                target: e,
                priority: n
            };
            for (var s = 0; s < gn.length && n !== 0 && n < gn[s].priority; s++);
            gn.splice(s, 0, e), s === 0 && Oc(e)
        }
    };

    function Ea(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }

    function oo(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }

    function Yh() {}

    function dv(e, n, s, l, u) {
        if (u) {
            if (typeof l == "function") {
                var h = l;
                l = function () {
                    var A = ro(g);
                    h.call(A)
                }
            }
            var g = Hh(n, l, e, 0, null, !1, !1, "", Yh);
            return e._reactRootContainer = g, e[en] = g.current, fr(e.nodeType === 8 ? e.parentNode : e), Kn(), g
        }
        for (; u = e.lastChild;) e.removeChild(u);
        if (typeof l == "function") {
            var x = l;
            l = function () {
                var A = ro(S);
                x.call(A)
            }
        }
        var S = ka(e, 0, !1, null, null, !1, !1, "", Yh);
        return e._reactRootContainer = S, e[en] = S.current, fr(e.nodeType === 8 ? e.parentNode : e), Kn(function () {
            io(n, S, s, l)
        }), S
    }

    function lo(e, n, s, l, u) {
        var h = s._reactRootContainer;
        if (h) {
            var g = h;
            if (typeof u == "function") {
                var x = u;
                u = function () {
                    var S = ro(g);
                    x.call(S)
                }
            }
            io(n, g, e, u)
        } else g = dv(s, n, e, u, l);
        return ro(g)
    }
    Ec = function (e) {
        switch (e.tag) {
        case 3:
            var n = e.stateNode;
            if (n.current.memoizedState.isDehydrated) {
                var s = Qi(n.pendingLanes);
                s !== 0 && (qo(n, s | 1), mt(n, Ie()), !(me & 6) && (Ei = Ie() + 500, Pn()))
            }
            break;
        case 13:
            Kn(function () {
                var l = sn(e, 1);
                if (l !== null) {
                    var u = ut();
                    jt(l, e, 1, u)
                }
            }), Ta(e, 1)
        }
    }, Zo = function (e) {
        if (e.tag === 13) {
            var n = sn(e, 134217728);
            if (n !== null) {
                var s = ut();
                jt(n, e, 134217728, s)
            }
            Ta(e, 134217728)
        }
    }, Mc = function (e) {
        if (e.tag === 13) {
            var n = Mn(e),
                s = sn(e, n);
            if (s !== null) {
                var l = ut();
                jt(s, e, n, l)
            }
            Ta(e, n)
        }
    }, Rc = function () {
        return xe
    }, Dc = function (e, n) {
        var s = xe;
        try {
            return xe = e, n()
        } finally {
            xe = s
        }
    }, Wo = function (e, n, s) {
        switch (n) {
        case "input":
            if (Ut(e, s), n = s.name, s.type === "radio" && n != null) {
                for (s = e; s.parentNode;) s = s.parentNode;
                for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < s.length; n++) {
                    var l = s[n];
                    if (l !== e && l.form === e.form) {
                        var u = ks(l);
                        if (!u) throw Error(r(90));
                        Pe(l), Ut(l, u)
                    }
                }
            }
            break;
        case "textarea":
            sc(e, s);
            break;
        case "select":
            n = s.value, n != null && ri(e, !!s.multiple, n, !1)
        }
    }, pc = va, mc = Kn;
    var pv = {
            usingClientEntryPoint: !1,
            Events: [pr, pi, ks, hc, dc, va]
        },
        Mr = {
            findFiberByHostInstance: Fn,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom"
        },
        mv = {
            bundleType: Mr.bundleType,
            version: Mr.version,
            rendererPackageName: Mr.rendererPackageName,
            rendererConfig: Mr.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: J.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
                return e = wc(e), e === null ? null : e.stateNode
            },
            findFiberByHostInstance: Mr.findFiberByHostInstance,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var ao = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ao.isDisabled && ao.supportsFiber) try {
            ss = ao.inject(mv), Wt = ao
        } catch {}
    }
    return gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pv, gt.createPortal = function (e, n) {
        var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Ea(n)) throw Error(r(200));
        return hv(e, n, null, s)
    }, gt.createRoot = function (e, n) {
        if (!Ea(e)) throw Error(r(299));
        var s = !1,
            l = "",
            u = Gh;
        return n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (u = n.onRecoverableError)), n = ka(e, 1, !1, null, null, s, !1, l, u), e[en] = n.current, fr(e.nodeType === 8 ? e.parentNode : e), new Ca(n)
    }, gt.findDOMNode = function (e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var n = e._reactInternals;
        if (n === void 0) throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
        return e = wc(n), e = e === null ? null : e.stateNode, e
    }, gt.flushSync = function (e) {
        return Kn(e)
    }, gt.hydrate = function (e, n, s) {
        if (!oo(n)) throw Error(r(200));
        return lo(null, e, n, !0, s)
    }, gt.hydrateRoot = function (e, n, s) {
        if (!Ea(e)) throw Error(r(405));
        var l = s != null && s.hydratedSources || null,
            u = !1,
            h = "",
            g = Gh;
        if (s != null && (s.unstable_strictMode === !0 && (u = !0), s.identifierPrefix !== void 0 && (h = s.identifierPrefix), s.onRecoverableError !== void 0 && (g = s.onRecoverableError)), n = Hh(n, null, e, 1, s ?? null, u, !1, h, g), e[en] = n.current, fr(e), l)
            for (e = 0; e < l.length; e++) s = l[e], u = s._getVersion, u = u(s._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [s, u] : n.mutableSourceEagerHydrationData.push(s, u);
        return new so(n)
    }, gt.render = function (e, n, s) {
        if (!oo(n)) throw Error(r(200));
        return lo(null, e, n, !1, s)
    }, gt.unmountComponentAtNode = function (e) {
        if (!oo(e)) throw Error(r(40));
        return e._reactRootContainer ? (Kn(function () {
            lo(null, null, e, !1, function () {
                e._reactRootContainer = null, e[en] = null
            })
        }), !0) : !1
    }, gt.unstable_batchedUpdates = va, gt.unstable_renderSubtreeIntoContainer = function (e, n, s, l) {
        if (!oo(s)) throw Error(r(200));
        if (e == null || e._reactInternals === void 0) throw Error(r(38));
        return lo(e, n, s, !1, l)
    }, gt.version = "18.3.1-next-f1338f8080-20240426", gt
}
var id;

function _v() {
    if (id) return Da.exports;
    id = 1;

    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
        } catch (t) {
            console.error(t)
        }
    }
    return i(), Da.exports = Pv(), Da.exports
}
var rd;

function kv() {
    if (rd) return uo;
    rd = 1;
    var i = _v();
    return uo.createRoot = i.createRoot, uo.hydrateRoot = i.hydrateRoot, uo
}
var Tv = kv();

function Cv(i) {
    if (typeof Proxy > "u") return i;
    const t = new Map,
        r = (...o) => i(...o);
    return new Proxy(r, {
        get: (o, a) => a === "create" ? i : (t.has(a) || t.set(a, i(a)), t.get(a))
    })
}

function Mo(i) {
    return i !== null && typeof i == "object" && typeof i.start == "function"
}
const nu = i => Array.isArray(i);

function Vp(i, t) {
    if (!Array.isArray(t)) return !1;
    const r = t.length;
    if (r !== i.length) return !1;
    for (let o = 0; o < r; o++)
        if (t[o] !== i[o]) return !1;
    return !0
}

function Ur(i) {
    return typeof i == "string" || Array.isArray(i)
}

function sd(i) {
    const t = [{}, {}];
    return i == null || i.values.forEach((r, o) => {
        t[0][o] = r.get(), t[1][o] = r.getVelocity()
    }), t
}

function Pu(i, t, r, o) {
    if (typeof t == "function") {
        const [a, c] = sd(o);
        t = t(r !== void 0 ? r : i.custom, a, c)
    }
    if (typeof t == "string" && (t = i.variants && i.variants[t]), typeof t == "function") {
        const [a, c] = sd(o);
        t = t(r !== void 0 ? r : i.custom, a, c)
    }
    return t
}

function Ro(i, t, r) {
    const o = i.getProps();
    return Pu(o, t, r !== void 0 ? r : o.custom, i)
}
const _u = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    ku = ["initial", ..._u],
    Xr = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    ii = new Set(Xr),
    un = i => i * 1e3,
    cn = i => i / 1e3,
    Ev = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    Mv = i => ({
        type: "spring",
        stiffness: 550,
        damping: i === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    Rv = {
        type: "keyframes",
        duration: .8
    },
    Dv = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    Av = (i, {
        keyframes: t
    }) => t.length > 2 ? Rv : ii.has(i) ? i.startsWith("scale") ? Mv(t[1]) : Ev : Dv;

function Tu(i, t) {
    return i ? i[t] || i.default || i : void 0
}
const Ov = {
        skipAnimations: !1,
        useManualTiming: !1
    },
    Lv = i => i !== null;

function Do(i, {
    repeat: t,
    repeatType: r = "loop"
}, o) {
    const a = i.filter(Lv),
        c = t && r !== "loop" && t % 2 === 1 ? 0 : a.length - 1;
    return !c || o === void 0 ? a[c] : o
}
const Pt = i => i;
let iu = Pt;

function zv(i) {
    let t = new Set,
        r = new Set,
        o = !1,
        a = !1;
    const c = new WeakSet;
    let f = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function d(m) {
        c.has(m) && (p.schedule(m), i()), m(f)
    }
    const p = {
        schedule: (m, y = !1, v = !1) => {
            const k = v && o ? t : r;
            return y && c.add(m), k.has(m) || k.add(m), m
        },
        cancel: m => {
            r.delete(m), c.delete(m)
        },
        process: m => {
            if (f = m, o) {
                a = !0;
                return
            }
            o = !0, [t, r] = [r, t], t.forEach(d), t.clear(), o = !1, a && (a = !1, p.process(m))
        }
    };
    return p
}
const co = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
    Vv = 40;

function Np(i, t) {
    let r = !1,
        o = !0;
    const a = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        c = () => r = !0,
        f = co.reduce((O, j) => (O[j] = zv(c), O), {}),
        {
            read: d,
            resolveKeyframes: p,
            update: m,
            preRender: y,
            render: v,
            postRender: w
        } = f,
        k = () => {
            const O = performance.now();
            r = !1, a.delta = o ? 1e3 / 60 : Math.max(Math.min(O - a.timestamp, Vv), 1), a.timestamp = O, a.isProcessing = !0, d.process(a), p.process(a), m.process(a), y.process(a), v.process(a), w.process(a), a.isProcessing = !1, r && t && (o = !1, i(k))
        },
        T = () => {
            r = !0, o = !0, a.isProcessing || i(k)
        };
    return {
        schedule: co.reduce((O, j) => {
            const F = f[j];
            return O[j] = (J, G = !1, ee = !1) => (r || T(), F.schedule(J, G, ee)), O
        }, {}),
        cancel: O => {
            for (let j = 0; j < co.length; j++) f[co[j]].cancel(O)
        },
        state: a,
        steps: f
    }
}
const {
    schedule: Ee,
    cancel: zn,
    state: Je,
    steps: La
} = Np(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Pt, !0), Ip = (i, t, r) => (((1 - 3 * r + 3 * t) * i + (3 * r - 6 * t)) * i + 3 * t) * i, Nv = 1e-7, Iv = 12;

function Fv(i, t, r, o, a) {
    let c, f, d = 0;
    do f = t + (r - t) / 2, c = Ip(f, o, a) - i, c > 0 ? r = f : t = f; while (Math.abs(c) > Nv && ++d < Iv);
    return f
}

function Qr(i, t, r, o) {
    if (i === t && r === o) return Pt;
    const a = c => Fv(c, 0, 1, i, r);
    return c => c === 0 || c === 1 ? c : Ip(a(c), t, o)
}
const Fp = i => t => t <= .5 ? i(2 * t) / 2 : (2 - i(2 * (1 - t))) / 2,
    jp = i => t => 1 - i(1 - t),
    bp = Qr(.33, 1.53, .69, .99),
    Cu = jp(bp),
    Bp = Fp(Cu),
    Up = i => (i *= 2) < 1 ? .5 * Cu(i) : .5 * (2 - Math.pow(2, -10 * (i - 1))),
    Eu = i => 1 - Math.sin(Math.acos(i)),
    $p = jp(Eu),
    Wp = Fp(Eu),
    Hp = i => /^0[^.\s]+$/u.test(i);

function jv(i) {
    return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || Hp(i) : !0
}
const Kp = i => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i),
    Gp = i => t => typeof t == "string" && t.startsWith(i),
    Yp = Gp("--"),
    bv = Gp("var(--"),
    Mu = i => bv(i) ? Bv.test(i.split("/*")[0].trim()) : !1,
    Bv = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    Uv = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function $v(i) {
    const t = Uv.exec(i);
    if (!t) return [, ];
    const [, r, o, a] = t;
    return [`--${r??o}`, a]
}

function Xp(i, t, r = 1) {
    const [o, a] = $v(i);
    if (!o) return;
    const c = window.getComputedStyle(t).getPropertyValue(o);
    if (c) {
        const f = c.trim();
        return Kp(f) ? parseFloat(f) : f
    }
    return Mu(a) ? Xp(a, t, r + 1) : a
}
const fn = (i, t, r) => r > t ? t : r < i ? i : r,
    $i = {
        test: i => typeof i == "number",
        parse: parseFloat,
        transform: i => i
    },
    $r = {
        ...$i,
        transform: i => fn(0, 1, i)
    },
    fo = {
        ...$i,
        default: 1
    },
    qr = i => ({
        test: t => typeof t == "string" && t.endsWith(i) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${i}`
    }),
    On = qr("deg"),
    Xt = qr("%"),
    ie = qr("px"),
    Wv = qr("vh"),
    Hv = qr("vw"),
    od = {
        ...Xt,
        parse: i => Xt.parse(i) / 100,
        transform: i => Xt.transform(i * 100)
    },
    Kv = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
    ld = i => i === $i || i === ie,
    ad = (i, t) => parseFloat(i.split(", ")[t]),
    ud = (i, t) => (r, {
        transform: o
    }) => {
        if (o === "none" || !o) return 0;
        const a = o.match(/^matrix3d\((.+)\)$/u);
        if (a) return ad(a[1], t);
        {
            const c = o.match(/^matrix\((.+)\)$/u);
            return c ? ad(c[1], i) : 0
        }
    },
    Gv = new Set(["x", "y", "z"]),
    Yv = Xr.filter(i => !Gv.has(i));

function Xv(i) {
    const t = [];
    return Yv.forEach(r => {
        const o = i.getValue(r);
        o !== void 0 && (t.push([r, o.get()]), o.set(r.startsWith("scale") ? 1 : 0))
    }), t
}
const ji = {
    width: ({
        x: i
    }, {
        paddingLeft: t = "0",
        paddingRight: r = "0"
    }) => i.max - i.min - parseFloat(t) - parseFloat(r),
    height: ({
        y: i
    }, {
        paddingTop: t = "0",
        paddingBottom: r = "0"
    }) => i.max - i.min - parseFloat(t) - parseFloat(r),
    top: (i, {
        top: t
    }) => parseFloat(t),
    left: (i, {
        left: t
    }) => parseFloat(t),
    bottom: ({
        y: i
    }, {
        top: t
    }) => parseFloat(t) + (i.max - i.min),
    right: ({
        x: i
    }, {
        left: t
    }) => parseFloat(t) + (i.max - i.min),
    x: ud(4, 13),
    y: ud(5, 14)
};
ji.translateX = ji.x;
ji.translateY = ji.y;
const Qp = i => t => t.test(i),
    Qv = {
        test: i => i === "auto",
        parse: i => i
    },
    qp = [$i, ie, Xt, On, Hv, Wv, Qv],
    cd = i => qp.find(Qp(i)),
    ei = new Set;
let ru = !1,
    su = !1;

function Zp() {
    if (su) {
        const i = Array.from(ei).filter(o => o.needsMeasurement),
            t = new Set(i.map(o => o.element)),
            r = new Map;
        t.forEach(o => {
            const a = Xv(o);
            a.length && (r.set(o, a), o.render())
        }), i.forEach(o => o.measureInitialState()), t.forEach(o => {
            o.render();
            const a = r.get(o);
            a && a.forEach(([c, f]) => {
                var d;
                (d = o.getValue(c)) === null || d === void 0 || d.set(f)
            })
        }), i.forEach(o => o.measureEndState()), i.forEach(o => {
            o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY)
        })
    }
    su = !1, ru = !1, ei.forEach(i => i.complete()), ei.clear()
}

function Jp() {
    ei.forEach(i => {
        i.readKeyframes(), i.needsMeasurement && (su = !0)
    })
}

function qv() {
    Jp(), Zp()
}
class Ru {
    constructor(t, r, o, a, c, f = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = r, this.name = o, this.motionValue = a, this.element = c, this.isAsync = f
    }
    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (ei.add(this), ru || (ru = !0, Ee.read(Jp), Ee.resolveKeyframes(Zp))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: r,
            element: o,
            motionValue: a
        } = this;
        for (let c = 0; c < t.length; c++)
            if (t[c] === null)
                if (c === 0) {
                    const f = a == null ? void 0 : a.get(),
                        d = t[t.length - 1];
                    if (f !== void 0) t[0] = f;
                    else if (o && r) {
                        const p = o.readValue(r, d);
                        p != null && (t[0] = p)
                    }
                    t[0] === void 0 && (t[0] = d), a && f === void 0 && a.set(t[0])
                } else t[c] = t[c - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), ei.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1, ei.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Nr = i => Math.round(i * 1e5) / 1e5,
    Du = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function Zv(i) {
    return i == null
}
const Jv = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Au = (i, t) => r => !!(typeof r == "string" && Jv.test(r) && r.startsWith(i) || t && !Zv(r) && Object.prototype.hasOwnProperty.call(r, t)),
    em = (i, t, r) => o => {
        if (typeof o != "string") return o;
        const [a, c, f, d] = o.match(Du);
        return {
            [i]: parseFloat(a),
            [t]: parseFloat(c),
            [r]: parseFloat(f),
            alpha: d !== void 0 ? parseFloat(d) : 1
        }
    },
    e0 = i => fn(0, 255, i),
    za = {
        ...$i,
        transform: i => Math.round(e0(i))
    },
    Jn = {
        test: Au("rgb", "red"),
        parse: em("red", "green", "blue"),
        transform: ({
            red: i,
            green: t,
            blue: r,
            alpha: o = 1
        }) => "rgba(" + za.transform(i) + ", " + za.transform(t) + ", " + za.transform(r) + ", " + Nr($r.transform(o)) + ")"
    };

function t0(i) {
    let t = "",
        r = "",
        o = "",
        a = "";
    return i.length > 5 ? (t = i.substring(1, 3), r = i.substring(3, 5), o = i.substring(5, 7), a = i.substring(7, 9)) : (t = i.substring(1, 2), r = i.substring(2, 3), o = i.substring(3, 4), a = i.substring(4, 5), t += t, r += r, o += o, a += a), {
        red: parseInt(t, 16),
        green: parseInt(r, 16),
        blue: parseInt(o, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1
    }
}
const ou = {
        test: Au("#"),
        parse: t0,
        transform: Jn.transform
    },
    Di = {
        test: Au("hsl", "hue"),
        parse: em("hue", "saturation", "lightness"),
        transform: ({
            hue: i,
            saturation: t,
            lightness: r,
            alpha: o = 1
        }) => "hsla(" + Math.round(i) + ", " + Xt.transform(Nr(t)) + ", " + Xt.transform(Nr(r)) + ", " + Nr($r.transform(o)) + ")"
    },
    st = {
        test: i => Jn.test(i) || ou.test(i) || Di.test(i),
        parse: i => Jn.test(i) ? Jn.parse(i) : Di.test(i) ? Di.parse(i) : ou.parse(i),
        transform: i => typeof i == "string" ? i : i.hasOwnProperty("red") ? Jn.transform(i) : Di.transform(i)
    },
    n0 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function i0(i) {
    var t, r;
    return isNaN(i) && typeof i == "string" && (((t = i.match(Du)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = i.match(n0)) === null || r === void 0 ? void 0 : r.length) || 0) > 0
}
const tm = "number",
    nm = "color",
    r0 = "var",
    s0 = "var(",
    fd = "${}",
    o0 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function Wr(i) {
    const t = i.toString(),
        r = [],
        o = {
            color: [],
            number: [],
            var: []
        },
        a = [];
    let c = 0;
    const d = t.replace(o0, p => (st.test(p) ? (o.color.push(c), a.push(nm), r.push(st.parse(p))) : p.startsWith(s0) ? (o.var.push(c), a.push(r0), r.push(p)) : (o.number.push(c), a.push(tm), r.push(parseFloat(p))), ++c, fd)).split(fd);
    return {
        values: r,
        split: d,
        indexes: o,
        types: a
    }
}

function im(i) {
    return Wr(i).values
}

function rm(i) {
    const {
        split: t,
        types: r
    } = Wr(i), o = t.length;
    return a => {
        let c = "";
        for (let f = 0; f < o; f++)
            if (c += t[f], a[f] !== void 0) {
                const d = r[f];
                d === tm ? c += Nr(a[f]) : d === nm ? c += st.transform(a[f]) : c += a[f]
            } return c
    }
}
const l0 = i => typeof i == "number" ? 0 : i;

function a0(i) {
    const t = im(i);
    return rm(i)(t.map(l0))
}
const Vn = {
        test: i0,
        parse: im,
        createTransformer: rm,
        getAnimatableNone: a0
    },
    u0 = new Set(["brightness", "contrast", "saturate", "opacity"]);

function c0(i) {
    const [t, r] = i.slice(0, -1).split("(");
    if (t === "drop-shadow") return i;
    const [o] = r.match(Du) || [];
    if (!o) return i;
    const a = r.replace(o, "");
    let c = u0.has(t) ? 1 : 0;
    return o !== r && (c *= 100), t + "(" + c + a + ")"
}
const f0 = /\b([a-z-]*)\(.*?\)/gu,
    lu = {
        ...Vn,
        getAnimatableNone: i => {
            const t = i.match(f0);
            return t ? t.map(c0).join(" ") : i
        }
    },
    h0 = {
        borderWidth: ie,
        borderTopWidth: ie,
        borderRightWidth: ie,
        borderBottomWidth: ie,
        borderLeftWidth: ie,
        borderRadius: ie,
        radius: ie,
        borderTopLeftRadius: ie,
        borderTopRightRadius: ie,
        borderBottomRightRadius: ie,
        borderBottomLeftRadius: ie,
        width: ie,
        maxWidth: ie,
        height: ie,
        maxHeight: ie,
        top: ie,
        right: ie,
        bottom: ie,
        left: ie,
        padding: ie,
        paddingTop: ie,
        paddingRight: ie,
        paddingBottom: ie,
        paddingLeft: ie,
        margin: ie,
        marginTop: ie,
        marginRight: ie,
        marginBottom: ie,
        marginLeft: ie,
        backgroundPositionX: ie,
        backgroundPositionY: ie
    },
    d0 = {
        rotate: On,
        rotateX: On,
        rotateY: On,
        rotateZ: On,
        scale: fo,
        scaleX: fo,
        scaleY: fo,
        scaleZ: fo,
        skew: On,
        skewX: On,
        skewY: On,
        distance: ie,
        translateX: ie,
        translateY: ie,
        translateZ: ie,
        x: ie,
        y: ie,
        z: ie,
        perspective: ie,
        transformPerspective: ie,
        opacity: $r,
        originX: od,
        originY: od,
        originZ: ie
    },
    hd = {
        ...$i,
        transform: Math.round
    },
    Ou = {
        ...h0,
        ...d0,
        zIndex: hd,
        size: ie,
        fillOpacity: $r,
        strokeOpacity: $r,
        numOctaves: hd
    },
    p0 = {
        ...Ou,
        color: st,
        backgroundColor: st,
        outlineColor: st,
        fill: st,
        stroke: st,
        borderColor: st,
        borderTopColor: st,
        borderRightColor: st,
        borderBottomColor: st,
        borderLeftColor: st,
        filter: lu,
        WebkitFilter: lu
    },
    Lu = i => p0[i];

function sm(i, t) {
    let r = Lu(i);
    return r !== lu && (r = Vn), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
}
const m0 = new Set(["auto", "none", "0"]);

function g0(i, t, r) {
    let o = 0,
        a;
    for (; o < i.length && !a;) {
        const c = i[o];
        typeof c == "string" && !m0.has(c) && Wr(c).values.length && (a = i[o]), o++
    }
    if (a && r)
        for (const c of t) i[c] = sm(r, a)
}
class om extends Ru {
    constructor(t, r, o, a, c) {
        super(t, r, o, a, c, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            element: r,
            name: o
        } = this;
        if (!r || !r.current) return;
        super.readKeyframes();
        for (let p = 0; p < t.length; p++) {
            let m = t[p];
            if (typeof m == "string" && (m = m.trim(), Mu(m))) {
                const y = Xp(m, r.current);
                y !== void 0 && (t[p] = y), p === t.length - 1 && (this.finalKeyframe = m)
            }
        }
        if (this.resolveNoneKeyframes(), !Kv.has(o) || t.length !== 2) return;
        const [a, c] = t, f = cd(a), d = cd(c);
        if (f !== d)
            if (ld(f) && ld(d))
                for (let p = 0; p < t.length; p++) {
                    const m = t[p];
                    typeof m == "string" && (t[p] = parseFloat(m))
                } else this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: r
        } = this, o = [];
        for (let a = 0; a < t.length; a++) jv(t[a]) && o.push(a);
        o.length && g0(t, o, r)
    }
    measureInitialState() {
        const {
            element: t,
            unresolvedKeyframes: r,
            name: o
        } = this;
        if (!t || !t.current) return;
        o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ji[o](t.measureViewportBox(), window.getComputedStyle(t.current)), r[0] = this.measuredOrigin;
        const a = r[r.length - 1];
        a !== void 0 && t.getValue(o, a).jump(a, !1)
    }
    measureEndState() {
        var t;
        const {
            element: r,
            name: o,
            unresolvedKeyframes: a
        } = this;
        if (!r || !r.current) return;
        const c = r.getValue(o);
        c && c.jump(this.measuredOrigin, !1);
        const f = a.length - 1,
            d = a[f];
        a[f] = ji[o](r.measureViewportBox(), window.getComputedStyle(r.current)), d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([p, m]) => {
            r.getValue(p).set(m)
        }), this.resolveNoneKeyframes()
    }
}

function zu(i) {
    return typeof i == "function"
}
let po;

function y0() {
    po = void 0
}
const Qt = {
        now: () => (po === void 0 && Qt.set(Je.isProcessing || Ov.useManualTiming ? Je.timestamp : performance.now()), po),
        set: i => {
            po = i, queueMicrotask(y0)
        }
    },
    dd = (i, t) => t === "zIndex" ? !1 : !!(typeof i == "number" || Array.isArray(i) || typeof i == "string" && (Vn.test(i) || i === "0") && !i.startsWith("url("));

function v0(i) {
    const t = i[0];
    if (i.length === 1) return !0;
    for (let r = 0; r < i.length; r++)
        if (i[r] !== t) return !0
}

function w0(i, t, r, o) {
    const a = i[0];
    if (a === null) return !1;
    if (t === "display" || t === "visibility") return !0;
    const c = i[i.length - 1],
        f = dd(a, t),
        d = dd(c, t);
    return !f || !d ? !1 : v0(i) || (r === "spring" || zu(r)) && o
}
const x0 = 40;
class lm {
    constructor({
        autoplay: t = !0,
        delay: r = 0,
        type: o = "keyframes",
        repeat: a = 0,
        repeatDelay: c = 0,
        repeatType: f = "loop",
        ...d
    }) {
        this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Qt.now(), this.options = {
            autoplay: t,
            delay: r,
            type: o,
            repeat: a,
            repeatDelay: c,
            repeatType: f,
            ...d
        }, this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > x0 ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && qv(), this._resolved
    }
    onKeyframesResolved(t, r) {
        this.resolvedAt = Qt.now(), this.hasAttemptedResolve = !0;
        const {
            name: o,
            type: a,
            velocity: c,
            delay: f,
            onComplete: d,
            onUpdate: p,
            isGenerator: m
        } = this.options;
        if (!m && !w0(t, o, a, c))
            if (f) this.options.duration = 0;
            else {
                p == null || p(Do(t, this.options, r)), d == null || d(), this.resolveFinishedPromise();
                return
            } const y = this.initPlayback(t, r);
        y !== !1 && (this._resolved = {
            keyframes: t,
            finalKeyframe: r,
            ...y
        }, this.onPostResolved())
    }
    onPostResolved() {}
    then(t, r) {
        return this.currentFinishedPromise.then(t, r)
    }
    flatten() {
        this.options.type = "keyframes", this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t => {
            this.resolveFinishedPromise = t
        })
    }
}
const bi = (i, t, r) => {
        const o = t - i;
        return o === 0 ? 1 : (r - i) / o
    },
    am = (i, t, r = 10) => {
        let o = "";
        const a = Math.max(Math.round(t / r), 2);
        for (let c = 0; c < a; c++) o += i(bi(0, a - 1, c)) + ", ";
        return `linear(${o.substring(0,o.length-2)})`
    };

function um(i, t) {
    return t ? i * (1e3 / t) : 0
}
const S0 = 5;

function cm(i, t, r) {
    const o = Math.max(t - S0, 0);
    return um(r - i(o), t - o)
}
const Ve = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: .3,
        visualDuration: .3,
        restSpeed: {
            granular: .01,
            default: 2
        },
        restDelta: {
            granular: .005,
            default: .5
        },
        minDuration: .01,
        maxDuration: 10,
        minDamping: .05,
        maxDamping: 1
    },
    Va = .001;

function P0({
    duration: i = Ve.duration,
    bounce: t = Ve.bounce,
    velocity: r = Ve.velocity,
    mass: o = Ve.mass
}) {
    let a, c, f = 1 - t;
    f = fn(Ve.minDamping, Ve.maxDamping, f), i = fn(Ve.minDuration, Ve.maxDuration, cn(i)), f < 1 ? (a = m => {
        const y = m * f,
            v = y * i,
            w = y - r,
            k = au(m, f),
            T = Math.exp(-v);
        return Va - w / k * T
    }, c = m => {
        const v = m * f * i,
            w = v * r + r,
            k = Math.pow(f, 2) * Math.pow(m, 2) * i,
            T = Math.exp(-v),
            P = au(Math.pow(m, 2), f);
        return (-a(m) + Va > 0 ? -1 : 1) * ((w - k) * T) / P
    }) : (a = m => {
        const y = Math.exp(-m * i),
            v = (m - r) * i + 1;
        return -Va + y * v
    }, c = m => {
        const y = Math.exp(-m * i),
            v = (r - m) * (i * i);
        return y * v
    });
    const d = 5 / i,
        p = k0(a, c, d);
    if (i = un(i), isNaN(p)) return {
        stiffness: Ve.stiffness,
        damping: Ve.damping,
        duration: i
    };
    {
        const m = Math.pow(p, 2) * o;
        return {
            stiffness: m,
            damping: f * 2 * Math.sqrt(o * m),
            duration: i
        }
    }
}
const _0 = 12;

function k0(i, t, r) {
    let o = r;
    for (let a = 1; a < _0; a++) o = o - i(o) / t(o);
    return o
}

function au(i, t) {
    return i * Math.sqrt(1 - t * t)
}
const uu = 2e4;

function fm(i) {
    let t = 0;
    const r = 50;
    let o = i.next(t);
    for (; !o.done && t < uu;) t += r, o = i.next(t);
    return t >= uu ? 1 / 0 : t
}
const T0 = ["duration", "bounce"],
    C0 = ["stiffness", "damping", "mass"];

function pd(i, t) {
    return t.some(r => i[r] !== void 0)
}

function E0(i) {
    let t = {
        velocity: Ve.velocity,
        stiffness: Ve.stiffness,
        damping: Ve.damping,
        mass: Ve.mass,
        isResolvedFromDuration: !1,
        ...i
    };
    if (!pd(i, C0) && pd(i, T0))
        if (i.visualDuration) {
            const r = i.visualDuration,
                o = 2 * Math.PI / (r * 1.2),
                a = o * o,
                c = 2 * fn(.05, 1, 1 - i.bounce) * Math.sqrt(a);
            t = {
                ...t,
                mass: Ve.mass,
                stiffness: a,
                damping: c
            }
        } else {
            const r = P0(i);
            t = {
                ...t,
                ...r,
                mass: Ve.mass
            }, t.isResolvedFromDuration = !0
        } return t
}

function hm(i = Ve.visualDuration, t = Ve.bounce) {
    const r = typeof i != "object" ? {
        visualDuration: i,
        keyframes: [0, 1],
        bounce: t
    } : i;
    let {
        restSpeed: o,
        restDelta: a
    } = r;
    const c = r.keyframes[0],
        f = r.keyframes[r.keyframes.length - 1],
        d = {
            done: !1,
            value: c
        },
        {
            stiffness: p,
            damping: m,
            mass: y,
            duration: v,
            velocity: w,
            isResolvedFromDuration: k
        } = E0({
            ...r,
            velocity: -cn(r.velocity || 0)
        }),
        T = w || 0,
        P = m / (2 * Math.sqrt(p * y)),
        D = f - c,
        O = cn(Math.sqrt(p / y)),
        j = Math.abs(D) < 5;
    o || (o = j ? Ve.restSpeed.granular : Ve.restSpeed.default), a || (a = j ? Ve.restDelta.granular : Ve.restDelta.default);
    let F;
    if (P < 1) {
        const G = au(O, P);
        F = ee => {
            const de = Math.exp(-P * O * ee);
            return f - de * ((T + P * O * D) / G * Math.sin(G * ee) + D * Math.cos(G * ee))
        }
    } else if (P === 1) F = G => f - Math.exp(-O * G) * (D + (T + O * D) * G);
    else {
        const G = O * Math.sqrt(P * P - 1);
        F = ee => {
            const de = Math.exp(-P * O * ee),
                q = Math.min(G * ee, 300);
            return f - de * ((T + P * O * D) * Math.sinh(q) + G * D * Math.cosh(q)) / G
        }
    }
    const J = {
        calculatedDuration: k && v || null,
        next: G => {
            const ee = F(G);
            if (k) d.done = G >= v;
            else {
                let de = 0;
                P < 1 && (de = G === 0 ? un(T) : cm(F, G, ee));
                const q = Math.abs(de) <= o,
                    ve = Math.abs(f - ee) <= a;
                d.done = q && ve
            }
            return d.value = d.done ? f : ee, d
        },
        toString: () => {
            const G = Math.min(fm(J), uu),
                ee = am(de => J.next(G * de).value, G, 30);
            return G + "ms " + ee
        }
    };
    return J
}

function md({
    keyframes: i,
    velocity: t = 0,
    power: r = .8,
    timeConstant: o = 325,
    bounceDamping: a = 10,
    bounceStiffness: c = 500,
    modifyTarget: f,
    min: d,
    max: p,
    restDelta: m = .5,
    restSpeed: y
}) {
    const v = i[0],
        w = {
            done: !1,
            value: v
        },
        k = q => d !== void 0 && q < d || p !== void 0 && q > p,
        T = q => d === void 0 ? p : p === void 0 || Math.abs(d - q) < Math.abs(p - q) ? d : p;
    let P = r * t;
    const D = v + P,
        O = f === void 0 ? D : f(D);
    O !== D && (P = O - v);
    const j = q => -P * Math.exp(-q / o),
        F = q => O + j(q),
        J = q => {
            const ve = j(q),
                we = F(q);
            w.done = Math.abs(ve) <= m, w.value = w.done ? O : we
        };
    let G, ee;
    const de = q => {
        k(w.value) && (G = q, ee = hm({
            keyframes: [w.value, T(w.value)],
            velocity: cm(F, q, w.value),
            damping: a,
            stiffness: c,
            restDelta: m,
            restSpeed: y
        }))
    };
    return de(0), {
        calculatedDuration: null,
        next: q => {
            let ve = !1;
            return !ee && G === void 0 && (ve = !0, J(q), de(q)), G !== void 0 && q >= G ? ee.next(q - G) : (!ve && J(q), w)
        }
    }
}
const M0 = Qr(.42, 0, 1, 1),
    R0 = Qr(0, 0, .58, 1),
    dm = Qr(.42, 0, .58, 1),
    D0 = i => Array.isArray(i) && typeof i[0] != "number",
    Vu = i => Array.isArray(i) && typeof i[0] == "number",
    gd = {
        linear: Pt,
        easeIn: M0,
        easeInOut: dm,
        easeOut: R0,
        circIn: Eu,
        circInOut: Wp,
        circOut: $p,
        backIn: Cu,
        backInOut: Bp,
        backOut: bp,
        anticipate: Up
    },
    yd = i => {
        if (Vu(i)) {
            iu(i.length === 4);
            const [t, r, o, a] = i;
            return Qr(t, r, o, a)
        } else if (typeof i == "string") return iu(gd[i] !== void 0), gd[i];
        return i
    },
    A0 = (i, t) => r => t(i(r)),
    Zr = (...i) => i.reduce(A0),
    Oe = (i, t, r) => i + (t - i) * r;

function Na(i, t, r) {
    return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? i + (t - i) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? i + (t - i) * (2 / 3 - r) * 6 : i
}

function O0({
    hue: i,
    saturation: t,
    lightness: r,
    alpha: o
}) {
    i /= 360, t /= 100, r /= 100;
    let a = 0,
        c = 0,
        f = 0;
    if (!t) a = c = f = r;
    else {
        const d = r < .5 ? r * (1 + t) : r + t - r * t,
            p = 2 * r - d;
        a = Na(p, d, i + 1 / 3), c = Na(p, d, i), f = Na(p, d, i - 1 / 3)
    }
    return {
        red: Math.round(a * 255),
        green: Math.round(c * 255),
        blue: Math.round(f * 255),
        alpha: o
    }
}

function wo(i, t) {
    return r => r > 0 ? t : i
}
const Ia = (i, t, r) => {
        const o = i * i,
            a = r * (t * t - o) + o;
        return a < 0 ? 0 : Math.sqrt(a)
    },
    L0 = [ou, Jn, Di],
    z0 = i => L0.find(t => t.test(i));

function vd(i) {
    const t = z0(i);
    if (!t) return !1;
    let r = t.parse(i);
    return t === Di && (r = O0(r)), r
}
const wd = (i, t) => {
        const r = vd(i),
            o = vd(t);
        if (!r || !o) return wo(i, t);
        const a = {
            ...r
        };
        return c => (a.red = Ia(r.red, o.red, c), a.green = Ia(r.green, o.green, c), a.blue = Ia(r.blue, o.blue, c), a.alpha = Oe(r.alpha, o.alpha, c), Jn.transform(a))
    },
    cu = new Set(["none", "hidden"]);

function V0(i, t) {
    return cu.has(i) ? r => r <= 0 ? i : t : r => r >= 1 ? t : i
}

function N0(i, t) {
    return r => Oe(i, t, r)
}

function Nu(i) {
    return typeof i == "number" ? N0 : typeof i == "string" ? Mu(i) ? wo : st.test(i) ? wd : j0 : Array.isArray(i) ? pm : typeof i == "object" ? st.test(i) ? wd : I0 : wo
}

function pm(i, t) {
    const r = [...i],
        o = r.length,
        a = i.map((c, f) => Nu(c)(c, t[f]));
    return c => {
        for (let f = 0; f < o; f++) r[f] = a[f](c);
        return r
    }
}

function I0(i, t) {
    const r = {
            ...i,
            ...t
        },
        o = {};
    for (const a in r) i[a] !== void 0 && t[a] !== void 0 && (o[a] = Nu(i[a])(i[a], t[a]));
    return a => {
        for (const c in o) r[c] = o[c](a);
        return r
    }
}

function F0(i, t) {
    var r;
    const o = [],
        a = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let c = 0; c < t.values.length; c++) {
        const f = t.types[c],
            d = i.indexes[f][a[f]],
            p = (r = i.values[d]) !== null && r !== void 0 ? r : 0;
        o[c] = p, a[f]++
    }
    return o
}
const j0 = (i, t) => {
    const r = Vn.createTransformer(t),
        o = Wr(i),
        a = Wr(t);
    return o.indexes.var.length === a.indexes.var.length && o.indexes.color.length === a.indexes.color.length && o.indexes.number.length >= a.indexes.number.length ? cu.has(i) && !a.values.length || cu.has(t) && !o.values.length ? V0(i, t) : Zr(pm(F0(o, a), a.values), r) : wo(i, t)
};

function mm(i, t, r) {
    return typeof i == "number" && typeof t == "number" && typeof r == "number" ? Oe(i, t, r) : Nu(i)(i, t)
}

function b0(i, t, r) {
    const o = [],
        a = r || mm,
        c = i.length - 1;
    for (let f = 0; f < c; f++) {
        let d = a(i[f], i[f + 1]);
        if (t) {
            const p = Array.isArray(t) ? t[f] || Pt : t;
            d = Zr(p, d)
        }
        o.push(d)
    }
    return o
}

function B0(i, t, {
    clamp: r = !0,
    ease: o,
    mixer: a
} = {}) {
    const c = i.length;
    if (iu(c === t.length), c === 1) return () => t[0];
    if (c === 2 && i[0] === i[1]) return () => t[1];
    i[0] > i[c - 1] && (i = [...i].reverse(), t = [...t].reverse());
    const f = b0(t, o, a),
        d = f.length,
        p = m => {
            let y = 0;
            if (d > 1)
                for (; y < i.length - 2 && !(m < i[y + 1]); y++);
            const v = bi(i[y], i[y + 1], m);
            return f[y](v)
        };
    return r ? m => p(fn(i[0], i[c - 1], m)) : p
}

function U0(i, t) {
    const r = i[i.length - 1];
    for (let o = 1; o <= t; o++) {
        const a = bi(0, t, o);
        i.push(Oe(r, 1, a))
    }
}

function $0(i) {
    const t = [0];
    return U0(t, i.length - 1), t
}

function W0(i, t) {
    return i.map(r => r * t)
}

function H0(i, t) {
    return i.map(() => t || dm).splice(0, i.length - 1)
}

function xo({
    duration: i = 300,
    keyframes: t,
    times: r,
    ease: o = "easeInOut"
}) {
    const a = D0(o) ? o.map(yd) : yd(o),
        c = {
            done: !1,
            value: t[0]
        },
        f = W0(r && r.length === t.length ? r : $0(t), i),
        d = B0(f, t, {
            ease: Array.isArray(a) ? a : H0(t, a)
        });
    return {
        calculatedDuration: i,
        next: p => (c.value = d(p), c.done = p >= i, c)
    }
}
const K0 = i => {
        const t = ({
            timestamp: r
        }) => i(r);
        return {
            start: () => Ee.update(t, !0),
            stop: () => zn(t),
            now: () => Je.isProcessing ? Je.timestamp : Qt.now()
        }
    },
    G0 = {
        decay: md,
        inertia: md,
        tween: xo,
        keyframes: xo,
        spring: hm
    },
    Y0 = i => i / 100;
class Iu extends lm {
    constructor(t) {
        super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
            if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
            this.teardown();
            const {
                onStop: p
            } = this.options;
            p && p()
        };
        const {
            name: r,
            motionValue: o,
            element: a,
            keyframes: c
        } = this.options, f = (a == null ? void 0 : a.KeyframeResolver) || Ru, d = (p, m) => this.onKeyframesResolved(p, m);
        this.resolver = new f(c, d, r, o, a), this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(t) {
        const {
            type: r = "keyframes",
            repeat: o = 0,
            repeatDelay: a = 0,
            repeatType: c,
            velocity: f = 0
        } = this.options, d = zu(r) ? r : G0[r] || xo;
        let p, m;
        d !== xo && typeof t[0] != "number" && (p = Zr(Y0, mm(t[0], t[1])), t = [0, 100]);
        const y = d({
            ...this.options,
            keyframes: t
        });
        c === "mirror" && (m = d({
            ...this.options,
            keyframes: [...t].reverse(),
            velocity: -f
        })), y.calculatedDuration === null && (y.calculatedDuration = fm(y));
        const {
            calculatedDuration: v
        } = y, w = v + a, k = w * (o + 1) - a;
        return {
            generator: y,
            mirroredGenerator: m,
            mapPercentToKeyframes: p,
            calculatedDuration: v,
            resolvedDuration: w,
            totalDuration: k
        }
    }
    onPostResolved() {
        const {
            autoplay: t = !0
        } = this.options;
        this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
    }
    tick(t, r = !1) {
        const {
            resolved: o
        } = this;
        if (!o) {
            const {
                keyframes: q
            } = this.options;
            return {
                done: !0,
                value: q[q.length - 1]
            }
        }
        const {
            finalKeyframe: a,
            generator: c,
            mirroredGenerator: f,
            mapPercentToKeyframes: d,
            keyframes: p,
            calculatedDuration: m,
            totalDuration: y,
            resolvedDuration: v
        } = o;
        if (this.startTime === null) return c.next(0);
        const {
            delay: w,
            repeat: k,
            repeatType: T,
            repeatDelay: P,
            onUpdate: D
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - y / this.speed, this.startTime)), r ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const O = this.currentTime - w * (this.speed >= 0 ? 1 : -1),
            j = this.speed >= 0 ? O < 0 : O > y;
        this.currentTime = Math.max(O, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = y);
        let F = this.currentTime,
            J = c;
        if (k) {
            const q = Math.min(this.currentTime, y) / v;
            let ve = Math.floor(q),
                we = q % 1;
            !we && q >= 1 && (we = 1), we === 1 && ve--, ve = Math.min(ve, k + 1), !!(ve % 2) && (T === "reverse" ? (we = 1 - we, P && (we -= P / v)) : T === "mirror" && (J = f)), F = fn(0, 1, we) * v
        }
        const G = j ? {
            done: !1,
            value: p[0]
        } : J.next(F);
        d && (G.value = d(G.value));
        let {
            done: ee
        } = G;
        !j && m !== null && (ee = this.speed >= 0 ? this.currentTime >= y : this.currentTime <= 0);
        const de = this.holdTime === null && (this.state === "finished" || this.state === "running" && ee);
        return de && a !== void 0 && (G.value = Do(p, this.options, a)), D && D(G.value), de && this.finish(), G
    }
    get duration() {
        const {
            resolved: t
        } = this;
        return t ? cn(t.calculatedDuration) : 0
    }
    get time() {
        return cn(this.currentTime)
    }
    set time(t) {
        t = un(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const r = this.playbackSpeed !== t;
        this.playbackSpeed = t, r && (this.time = cn(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped) return;
        const {
            driver: t = K0,
            onPlay: r,
            startTime: o
        } = this.options;
        this.driver || (this.driver = t(c => this.tick(c))), r && r();
        const a = this.driver.now();
        this.holdTime !== null ? this.startTime = a - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = a) : this.startTime = o ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
    }
    complete() {
        this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }
    finish() {
        this.teardown(), this.state = "finished";
        const {
            onComplete: t
        } = this.options;
        t && t()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0, this.tick(t, !0)
    }
}
const X0 = new Set(["opacity", "clipPath", "filter", "transform"]);

function Fu(i) {
    let t;
    return () => (t === void 0 && (t = i()), t)
}
const Q0 = {
    linearEasing: void 0
};

function q0(i, t) {
    const r = Fu(i);
    return () => {
        var o;
        return (o = Q0[t]) !== null && o !== void 0 ? o : r()
    }
}
const So = q0(() => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}, "linearEasing");

function gm(i) {
    return !!(typeof i == "function" && So() || !i || typeof i == "string" && (i in fu || So()) || Vu(i) || Array.isArray(i) && i.every(gm))
}
const Or = ([i, t, r, o]) => `cubic-bezier(${i}, ${t}, ${r}, ${o})`,
    fu = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: Or([0, .65, .55, 1]),
        circOut: Or([.55, 0, 1, .45]),
        backIn: Or([.31, .01, .66, -.59]),
        backOut: Or([.33, 1.53, .69, .99])
    };

function ym(i, t) {
    if (i) return typeof i == "function" && So() ? am(i, t) : Vu(i) ? Or(i) : Array.isArray(i) ? i.map(r => ym(r, t) || fu.easeOut) : fu[i]
}

function Z0(i, t, r, {
    delay: o = 0,
    duration: a = 300,
    repeat: c = 0,
    repeatType: f = "loop",
    ease: d = "easeInOut",
    times: p
} = {}) {
    const m = {
        [t]: r
    };
    p && (m.offset = p);
    const y = ym(d, a);
    return Array.isArray(y) && (m.easing = y), i.animate(m, {
        delay: o,
        duration: a,
        easing: Array.isArray(y) ? "linear" : y,
        fill: "both",
        iterations: c + 1,
        direction: f === "reverse" ? "alternate" : "normal"
    })
}

function xd(i, t) {
    i.timeline = t, i.onfinish = null
}
const J0 = Fu(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    Po = 10,
    e1 = 2e4;

function t1(i) {
    return zu(i.type) || i.type === "spring" || !gm(i.ease)
}

function n1(i, t) {
    const r = new Iu({
        ...t,
        keyframes: i,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let o = {
        done: !1,
        value: i[0]
    };
    const a = [];
    let c = 0;
    for (; !o.done && c < e1;) o = r.sample(c), a.push(o.value), c += Po;
    return {
        times: void 0,
        keyframes: a,
        duration: c - Po,
        ease: "linear"
    }
}
const vm = {
    anticipate: Up,
    backInOut: Bp,
    circInOut: Wp
};

function i1(i) {
    return i in vm
}
class Sd extends lm {
    constructor(t) {
        super(t);
        const {
            name: r,
            motionValue: o,
            element: a,
            keyframes: c
        } = this.options;
        this.resolver = new om(c, (f, d) => this.onKeyframesResolved(f, d), r, o, a), this.resolver.scheduleResolve()
    }
    initPlayback(t, r) {
        var o;
        let {
            duration: a = 300,
            times: c,
            ease: f,
            type: d,
            motionValue: p,
            name: m,
            startTime: y
        } = this.options;
        if (!(!((o = p.owner) === null || o === void 0) && o.current)) return !1;
        if (typeof f == "string" && So() && i1(f) && (f = vm[f]), t1(this.options)) {
            const {
                onComplete: w,
                onUpdate: k,
                motionValue: T,
                element: P,
                ...D
            } = this.options, O = n1(t, D);
            t = O.keyframes, t.length === 1 && (t[1] = t[0]), a = O.duration, c = O.times, f = O.ease, d = "keyframes"
        }
        const v = Z0(p.owner.current, m, t, {
            ...this.options,
            duration: a,
            times: c,
            ease: f
        });
        return v.startTime = y ?? this.calcStartTime(), this.pendingTimeline ? (xd(v, this.pendingTimeline), this.pendingTimeline = void 0) : v.onfinish = () => {
            const {
                onComplete: w
            } = this.options;
            p.set(Do(t, this.options, r)), w && w(), this.cancel(), this.resolveFinishedPromise()
        }, {
            animation: v,
            duration: a,
            times: c,
            type: d,
            ease: f,
            keyframes: t
        }
    }
    get duration() {
        const {
            resolved: t
        } = this;
        if (!t) return 0;
        const {
            duration: r
        } = t;
        return cn(r)
    }
    get time() {
        const {
            resolved: t
        } = this;
        if (!t) return 0;
        const {
            animation: r
        } = t;
        return cn(r.currentTime || 0)
    }
    set time(t) {
        const {
            resolved: r
        } = this;
        if (!r) return;
        const {
            animation: o
        } = r;
        o.currentTime = un(t)
    }
    get speed() {
        const {
            resolved: t
        } = this;
        if (!t) return 1;
        const {
            animation: r
        } = t;
        return r.playbackRate
    }
    set speed(t) {
        const {
            resolved: r
        } = this;
        if (!r) return;
        const {
            animation: o
        } = r;
        o.playbackRate = t
    }
    get state() {
        const {
            resolved: t
        } = this;
        if (!t) return "idle";
        const {
            animation: r
        } = t;
        return r.playState
    }
    get startTime() {
        const {
            resolved: t
        } = this;
        if (!t) return null;
        const {
            animation: r
        } = t;
        return r.startTime
    }
    attachTimeline(t) {
        if (!this._resolved) this.pendingTimeline = t;
        else {
            const {
                resolved: r
            } = this;
            if (!r) return Pt;
            const {
                animation: o
            } = r;
            xd(o, t)
        }
        return Pt
    }
    play() {
        if (this.isStopped) return;
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: r
        } = t;
        r.playState === "finished" && this.updateFinishedPromise(), r.play()
    }
    pause() {
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: r
        } = t;
        r.pause()
    }
    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
        this.resolveFinishedPromise(), this.updateFinishedPromise();
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: r,
            keyframes: o,
            duration: a,
            type: c,
            ease: f,
            times: d
        } = t;
        if (r.playState === "idle" || r.playState === "finished") return;
        if (this.time) {
            const {
                motionValue: m,
                onUpdate: y,
                onComplete: v,
                element: w,
                ...k
            } = this.options, T = new Iu({
                ...k,
                keyframes: o,
                duration: a,
                type: c,
                ease: f,
                times: d,
                isGenerator: !0
            }), P = un(this.time);
            m.setWithVelocity(T.sample(P - Po).value, T.sample(P).value, Po)
        }
        const {
            onStop: p
        } = this.options;
        p && p(), this.cancel()
    }
    complete() {
        const {
            resolved: t
        } = this;
        t && t.animation.finish()
    }
    cancel() {
        const {
            resolved: t
        } = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {
            motionValue: r,
            name: o,
            repeatDelay: a,
            repeatType: c,
            damping: f,
            type: d
        } = t;
        return J0() && o && X0.has(o) && r && r.owner && r.owner.current instanceof HTMLElement && !r.owner.getProps().onUpdate && !a && c !== "mirror" && f !== 0 && d !== "inertia"
    }
}
const r1 = Fu(() => window.ScrollTimeline !== void 0);
class s1 {
    constructor(t) {
        this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
    }
    then(t, r) {
        return Promise.all(this.animations).then(t).catch(r)
    }
    getAll(t) {
        return this.animations[0][t]
    }
    setAll(t, r) {
        for (let o = 0; o < this.animations.length; o++) this.animations[o][t] = r
    }
    attachTimeline(t, r) {
        const o = this.animations.map(a => r1() && a.attachTimeline ? a.attachTimeline(t) : r(a));
        return () => {
            o.forEach((a, c) => {
                a && a(), this.animations[c].stop()
            })
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(t) {
        this.setAll("time", t)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(t) {
        this.setAll("speed", t)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let t = 0;
        for (let r = 0; r < this.animations.length; r++) t = Math.max(t, this.animations[r].duration);
        return t
    }
    runAll(t) {
        this.animations.forEach(r => r[t]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}

function o1({
    when: i,
    delay: t,
    delayChildren: r,
    staggerChildren: o,
    staggerDirection: a,
    repeat: c,
    repeatType: f,
    repeatDelay: d,
    from: p,
    elapsed: m,
    ...y
}) {
    return !!Object.keys(y).length
}
const ju = (i, t, r, o = {}, a, c) => f => {
        const d = Tu(o, i) || {},
            p = d.delay || o.delay || 0;
        let {
            elapsed: m = 0
        } = o;
        m = m - un(p);
        let y = {
            keyframes: Array.isArray(r) ? r : [null, r],
            ease: "easeOut",
            velocity: t.getVelocity(),
            ...d,
            delay: -m,
            onUpdate: w => {
                t.set(w), d.onUpdate && d.onUpdate(w)
            },
            onComplete: () => {
                f(), d.onComplete && d.onComplete()
            },
            name: i,
            motionValue: t,
            element: c ? void 0 : a
        };
        o1(d) || (y = {
            ...y,
            ...Av(i, y)
        }), y.duration && (y.duration = un(y.duration)), y.repeatDelay && (y.repeatDelay = un(y.repeatDelay)), y.from !== void 0 && (y.keyframes[0] = y.from);
        let v = !1;
        if ((y.type === !1 || y.duration === 0 && !y.repeatDelay) && (y.duration = 0, y.delay === 0 && (v = !0)), v && !c && t.get() !== void 0) {
            const w = Do(y.keyframes, d);
            if (w !== void 0) return Ee.update(() => {
                y.onUpdate(w), y.onComplete()
            }), new s1([])
        }
        return !c && Sd.supports(y) ? new Sd(y) : new Iu(y)
    },
    l1 = i => !!(i && typeof i == "object" && i.mix && i.toValue),
    a1 = i => nu(i) ? i[i.length - 1] || 0 : i;

function bu(i, t) {
    i.indexOf(t) === -1 && i.push(t)
}

function Bu(i, t) {
    const r = i.indexOf(t);
    r > -1 && i.splice(r, 1)
}
class Uu {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return bu(this.subscriptions, t), () => Bu(this.subscriptions, t)
    }
    notify(t, r, o) {
        const a = this.subscriptions.length;
        if (a)
            if (a === 1) this.subscriptions[0](t, r, o);
            else
                for (let c = 0; c < a; c++) {
                    const f = this.subscriptions[c];
                    f && f(t, r, o)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Pd = 30,
    u1 = i => !isNaN(parseFloat(i));
class c1 {
    constructor(t, r = {}) {
        this.version = "11.15.0", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (o, a = !0) => {
            const c = Qt.now();
            this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(o), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), a && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.hasAnimated = !1, this.setCurrent(t), this.owner = r.owner
    }
    setCurrent(t) {
        this.current = t, this.updatedAt = Qt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = u1(this.current))
    }
    setPrevFrameValue(t = this.current) {
        this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, r) {
        this.events[t] || (this.events[t] = new Uu);
        const o = this.events[t].add(r);
        return t === "change" ? () => {
            o(), Ee.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : o
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear()
    }
    attach(t, r) {
        this.passiveEffect = t, this.stopPassiveEffect = r
    }
    set(t, r = !0) {
        !r || !this.passiveEffect ? this.updateAndNotify(t, r) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, r, o) {
        this.set(r), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - o
    }
    jump(t, r = !0) {
        this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, r && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = Qt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Pd) return 0;
        const r = Math.min(this.updatedAt - this.prevUpdatedAt, Pd);
        return um(parseFloat(this.current) - parseFloat(this.prevFrameValue), r)
    }
    start(t) {
        return this.stop(), new Promise(r => {
            this.hasAnimated = !0, this.animation = t(r), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function Hr(i, t) {
    return new c1(i, t)
}

function f1(i, t, r) {
    i.hasValue(t) ? i.getValue(t).set(r) : i.addValue(t, Hr(r))
}

function h1(i, t) {
    const r = Ro(i, t);
    let {
        transitionEnd: o = {},
        transition: a = {},
        ...c
    } = r || {};
    c = {
        ...c,
        ...o
    };
    for (const f in c) {
        const d = a1(c[f]);
        f1(i, f, d)
    }
}
const $u = i => i.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    d1 = "framerAppearId",
    wm = "data-" + $u(d1);

function xm(i) {
    return i.props[wm]
}
const ot = i => !!(i && i.getVelocity);

function p1(i) {
    return !!(ot(i) && i.add)
}

function hu(i, t) {
    const r = i.getValue("willChange");
    if (p1(r)) return r.add(t)
}

function m1({
    protectedKeys: i,
    needsAnimating: t
}, r) {
    const o = i.hasOwnProperty(r) && t[r] !== !0;
    return t[r] = !1, o
}

function Sm(i, t, {
    delay: r = 0,
    transitionOverride: o,
    type: a
} = {}) {
    var c;
    let {
        transition: f = i.getDefaultTransition(),
        transitionEnd: d,
        ...p
    } = t;
    o && (f = o);
    const m = [],
        y = a && i.animationState && i.animationState.getState()[a];
    for (const v in p) {
        const w = i.getValue(v, (c = i.latestValues[v]) !== null && c !== void 0 ? c : null),
            k = p[v];
        if (k === void 0 || y && m1(y, v)) continue;
        const T = {
            delay: r,
            ...Tu(f || {}, v)
        };
        let P = !1;
        if (window.MotionHandoffAnimation) {
            const O = xm(i);
            if (O) {
                const j = window.MotionHandoffAnimation(O, v, Ee);
                j !== null && (T.startTime = j, P = !0)
            }
        }
        hu(i, v), w.start(ju(v, w, k, i.shouldReduceMotion && ii.has(v) ? {
            type: !1
        } : T, i, P));
        const D = w.animation;
        D && m.push(D)
    }
    return d && Promise.all(m).then(() => {
        Ee.update(() => {
            d && h1(i, d)
        })
    }), m
}

function du(i, t, r = {}) {
    var o;
    const a = Ro(i, t, r.type === "exit" ? (o = i.presenceContext) === null || o === void 0 ? void 0 : o.custom : void 0);
    let {
        transition: c = i.getDefaultTransition() || {}
    } = a || {};
    r.transitionOverride && (c = r.transitionOverride);
    const f = a ? () => Promise.all(Sm(i, a, r)) : () => Promise.resolve(),
        d = i.variantChildren && i.variantChildren.size ? (m = 0) => {
            const {
                delayChildren: y = 0,
                staggerChildren: v,
                staggerDirection: w
            } = c;
            return g1(i, t, y + m, v, w, r)
        } : () => Promise.resolve(),
        {
            when: p
        } = c;
    if (p) {
        const [m, y] = p === "beforeChildren" ? [f, d] : [d, f];
        return m().then(() => y())
    } else return Promise.all([f(), d(r.delay)])
}

function g1(i, t, r = 0, o = 0, a = 1, c) {
    const f = [],
        d = (i.variantChildren.size - 1) * o,
        p = a === 1 ? (m = 0) => m * o : (m = 0) => d - m * o;
    return Array.from(i.variantChildren).sort(y1).forEach((m, y) => {
        m.notify("AnimationStart", t), f.push(du(m, t, {
            ...c,
            delay: r + p(y)
        }).then(() => m.notify("AnimationComplete", t)))
    }), Promise.all(f)
}

function y1(i, t) {
    return i.sortNodePosition(t)
}

function v1(i, t, r = {}) {
    i.notify("AnimationStart", t);
    let o;
    if (Array.isArray(t)) {
        const a = t.map(c => du(i, c, r));
        o = Promise.all(a)
    } else if (typeof t == "string") o = du(i, t, r);
    else {
        const a = typeof t == "function" ? Ro(i, t, r.custom) : t;
        o = Promise.all(Sm(i, a, r))
    }
    return o.then(() => {
        i.notify("AnimationComplete", t)
    })
}
const w1 = ku.length;

function Pm(i) {
    if (!i) return;
    if (!i.isControllingVariants) {
        const r = i.parent ? Pm(i.parent) || {} : {};
        return i.props.initial !== void 0 && (r.initial = i.props.initial), r
    }
    const t = {};
    for (let r = 0; r < w1; r++) {
        const o = ku[r],
            a = i.props[o];
        (Ur(a) || a === !1) && (t[o] = a)
    }
    return t
}
const x1 = [..._u].reverse(),
    S1 = _u.length;

function P1(i) {
    return t => Promise.all(t.map(({
        animation: r,
        options: o
    }) => v1(i, r, o)))
}

function _1(i) {
    let t = P1(i),
        r = _d(),
        o = !0;
    const a = p => (m, y) => {
        var v;
        const w = Ro(i, y, p === "exit" ? (v = i.presenceContext) === null || v === void 0 ? void 0 : v.custom : void 0);
        if (w) {
            const {
                transition: k,
                transitionEnd: T,
                ...P
            } = w;
            m = {
                ...m,
                ...P,
                ...T
            }
        }
        return m
    };

    function c(p) {
        t = p(i)
    }

    function f(p) {
        const {
            props: m
        } = i, y = Pm(i.parent) || {}, v = [], w = new Set;
        let k = {},
            T = 1 / 0;
        for (let D = 0; D < S1; D++) {
            const O = x1[D],
                j = r[O],
                F = m[O] !== void 0 ? m[O] : y[O],
                J = Ur(F),
                G = O === p ? j.isActive : null;
            G === !1 && (T = D);
            let ee = F === y[O] && F !== m[O] && J;
            if (ee && o && i.manuallyAnimateOnMount && (ee = !1), j.protectedKeys = {
                    ...k
                }, !j.isActive && G === null || !F && !j.prevProp || Mo(F) || typeof F == "boolean") continue;
            const de = k1(j.prevProp, F);
            let q = de || O === p && j.isActive && !ee && J || D > T && J,
                ve = !1;
            const we = Array.isArray(F) ? F : [F];
            let Le = we.reduce(a(O), {});
            G === !1 && (Le = {});
            const {
                prevResolvedValues: et = {}
            } = j, Ke = {
                ...et,
                ...Le
            }, Ge = ce => {
                q = !0, w.has(ce) && (ve = !0, w.delete(ce)), j.needsAnimating[ce] = !0;
                const B = i.getValue(ce);
                B && (B.liveStyle = !1)
            };
            for (const ce in Ke) {
                const B = Le[ce],
                    Z = et[ce];
                if (k.hasOwnProperty(ce)) continue;
                let U = !1;
                nu(B) && nu(Z) ? U = !Vp(B, Z) : U = B !== Z, U ? B != null ? Ge(ce) : w.add(ce) : B !== void 0 && w.has(ce) ? Ge(ce) : j.protectedKeys[ce] = !0
            }
            j.prevProp = F, j.prevResolvedValues = Le, j.isActive && (k = {
                ...k,
                ...Le
            }), o && i.blockInitialAnimation && (q = !1), q && (!(ee && de) || ve) && v.push(...we.map(ce => ({
                animation: ce,
                options: {
                    type: O
                }
            })))
        }
        if (w.size) {
            const D = {};
            w.forEach(O => {
                const j = i.getBaseTarget(O),
                    F = i.getValue(O);
                F && (F.liveStyle = !0), D[O] = j ?? null
            }), v.push({
                animation: D
            })
        }
        let P = !!v.length;
        return o && (m.initial === !1 || m.initial === m.animate) && !i.manuallyAnimateOnMount && (P = !1), o = !1, P ? t(v) : Promise.resolve()
    }

    function d(p, m) {
        var y;
        if (r[p].isActive === m) return Promise.resolve();
        (y = i.variantChildren) === null || y === void 0 || y.forEach(w => {
            var k;
            return (k = w.animationState) === null || k === void 0 ? void 0 : k.setActive(p, m)
        }), r[p].isActive = m;
        const v = f(p);
        for (const w in r) r[w].protectedKeys = {};
        return v
    }
    return {
        animateChanges: f,
        setActive: d,
        setAnimateFunction: c,
        getState: () => r,
        reset: () => {
            r = _d(), o = !0
        }
    }
}

function k1(i, t) {
    return typeof t == "string" ? t !== i : Array.isArray(t) ? !Vp(t, i) : !1
}

function Qn(i = !1) {
    return {
        isActive: i,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function _d() {
    return {
        animate: Qn(!0),
        whileInView: Qn(),
        whileHover: Qn(),
        whileTap: Qn(),
        whileDrag: Qn(),
        whileFocus: Qn(),
        exit: Qn()
    }
}
class Nn {
    constructor(t) {
        this.isMounted = !1, this.node = t
    }
    update() {}
}
class T1 extends Nn {
    constructor(t) {
        super(t), t.animationState || (t.animationState = _1(t))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: t
        } = this.node.getProps();
        Mo(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: t
        } = this.node.getProps(), {
            animate: r
        } = this.node.prevProps || {};
        t !== r && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this)
    }
}
let C1 = 0;
class E1 extends Nn {
    constructor() {
        super(...arguments), this.id = C1++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: t,
            onExitComplete: r
        } = this.node.presenceContext, {
            isPresent: o
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === o) return;
        const a = this.node.animationState.setActive("exit", !t);
        r && !t && a.then(() => r(this.id))
    }
    mount() {
        const {
            register: t
        } = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const M1 = {
        animation: {
            Feature: T1
        },
        exit: {
            Feature: E1
        }
    },
    bt = {
        x: !1,
        y: !1
    };

function _m() {
    return bt.x || bt.y
}

function R1(i) {
    return i === "x" || i === "y" ? bt[i] ? null : (bt[i] = !0, () => {
        bt[i] = !1
    }) : bt.x || bt.y ? null : (bt.x = bt.y = !0, () => {
        bt.x = bt.y = !1
    })
}
const Wu = i => i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1;

function Jr(i) {
    return {
        point: {
            x: i.pageX,
            y: i.pageY
        }
    }
}
const D1 = i => t => Wu(t) && i(t, Jr(t));

function Kr(i, t, r, o = {
    passive: !0
}) {
    return i.addEventListener(t, r, o), () => i.removeEventListener(t, r)
}

function Ir(i, t, r, o) {
    return Kr(i, t, D1(r), o)
}
const kd = (i, t) => Math.abs(i - t);

function A1(i, t) {
    const r = kd(i.x, t.x),
        o = kd(i.y, t.y);
    return Math.sqrt(r ** 2 + o ** 2)
}
class km {
    constructor(t, r, {
        transformPagePoint: o,
        contextWindow: a,
        dragSnapToOrigin: c = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const v = ja(this.lastMoveEventInfo, this.history),
                    w = this.startEvent !== null,
                    k = A1(v.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!w && !k) return;
                const {
                    point: T
                } = v, {
                    timestamp: P
                } = Je;
                this.history.push({
                    ...T,
                    timestamp: P
                });
                const {
                    onStart: D,
                    onMove: O
                } = this.handlers;
                w || (D && D(this.lastMoveEvent, v), this.startEvent = this.lastMoveEvent), O && O(this.lastMoveEvent, v)
            }, this.handlePointerMove = (v, w) => {
                this.lastMoveEvent = v, this.lastMoveEventInfo = Fa(w, this.transformPagePoint), Ee.update(this.updatePoint, !0)
            }, this.handlePointerUp = (v, w) => {
                this.end();
                const {
                    onEnd: k,
                    onSessionEnd: T,
                    resumeAnimation: P
                } = this.handlers;
                if (this.dragSnapToOrigin && P && P(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const D = ja(v.type === "pointercancel" ? this.lastMoveEventInfo : Fa(w, this.transformPagePoint), this.history);
                this.startEvent && k && k(v, D), T && T(v, D)
            }, !Wu(t)) return;
        this.dragSnapToOrigin = c, this.handlers = r, this.transformPagePoint = o, this.contextWindow = a || window;
        const f = Jr(t),
            d = Fa(f, this.transformPagePoint),
            {
                point: p
            } = d,
            {
                timestamp: m
            } = Je;
        this.history = [{
            ...p,
            timestamp: m
        }];
        const {
            onSessionStart: y
        } = r;
        y && y(t, ja(d, this.history)), this.removeListeners = Zr(Ir(this.contextWindow, "pointermove", this.handlePointerMove), Ir(this.contextWindow, "pointerup", this.handlePointerUp), Ir(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(), zn(this.updatePoint)
    }
}

function Fa(i, t) {
    return t ? {
        point: t(i.point)
    } : i
}

function Td(i, t) {
    return {
        x: i.x - t.x,
        y: i.y - t.y
    }
}

function ja({
    point: i
}, t) {
    return {
        point: i,
        delta: Td(i, Tm(t)),
        offset: Td(i, O1(t)),
        velocity: L1(t, .1)
    }
}

function O1(i) {
    return i[0]
}

function Tm(i) {
    return i[i.length - 1]
}

function L1(i, t) {
    if (i.length < 2) return {
        x: 0,
        y: 0
    };
    let r = i.length - 1,
        o = null;
    const a = Tm(i);
    for (; r >= 0 && (o = i[r], !(a.timestamp - o.timestamp > un(t)));) r--;
    if (!o) return {
        x: 0,
        y: 0
    };
    const c = cn(a.timestamp - o.timestamp);
    if (c === 0) return {
        x: 0,
        y: 0
    };
    const f = {
        x: (a.x - o.x) / c,
        y: (a.y - o.y) / c
    };
    return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f
}

function Ai(i) {
    return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current")
}
const Cm = 1e-4,
    z1 = 1 - Cm,
    V1 = 1 + Cm,
    Em = .01,
    N1 = 0 - Em,
    I1 = 0 + Em;

function _t(i) {
    return i.max - i.min
}

function F1(i, t, r) {
    return Math.abs(i - t) <= r
}

function Cd(i, t, r, o = .5) {
    i.origin = o, i.originPoint = Oe(t.min, t.max, i.origin), i.scale = _t(r) / _t(t), i.translate = Oe(r.min, r.max, i.origin) - i.originPoint, (i.scale >= z1 && i.scale <= V1 || isNaN(i.scale)) && (i.scale = 1), (i.translate >= N1 && i.translate <= I1 || isNaN(i.translate)) && (i.translate = 0)
}

function Fr(i, t, r, o) {
    Cd(i.x, t.x, r.x, o ? o.originX : void 0), Cd(i.y, t.y, r.y, o ? o.originY : void 0)
}

function Ed(i, t, r) {
    i.min = r.min + t.min, i.max = i.min + _t(t)
}

function j1(i, t, r) {
    Ed(i.x, t.x, r.x), Ed(i.y, t.y, r.y)
}

function Md(i, t, r) {
    i.min = t.min - r.min, i.max = i.min + _t(t)
}

function jr(i, t, r) {
    Md(i.x, t.x, r.x), Md(i.y, t.y, r.y)
}

function b1(i, {
    min: t,
    max: r
}, o) {
    return t !== void 0 && i < t ? i = o ? Oe(t, i, o.min) : Math.max(i, t) : r !== void 0 && i > r && (i = o ? Oe(r, i, o.max) : Math.min(i, r)), i
}

function Rd(i, t, r) {
    return {
        min: t !== void 0 ? i.min + t : void 0,
        max: r !== void 0 ? i.max + r - (i.max - i.min) : void 0
    }
}

function B1(i, {
    top: t,
    left: r,
    bottom: o,
    right: a
}) {
    return {
        x: Rd(i.x, r, a),
        y: Rd(i.y, t, o)
    }
}

function Dd(i, t) {
    let r = t.min - i.min,
        o = t.max - i.max;
    return t.max - t.min < i.max - i.min && ([r, o] = [o, r]), {
        min: r,
        max: o
    }
}

function U1(i, t) {
    return {
        x: Dd(i.x, t.x),
        y: Dd(i.y, t.y)
    }
}

function $1(i, t) {
    let r = .5;
    const o = _t(i),
        a = _t(t);
    return a > o ? r = bi(t.min, t.max - o, i.min) : o > a && (r = bi(i.min, i.max - a, t.min)), fn(0, 1, r)
}

function W1(i, t) {
    const r = {};
    return t.min !== void 0 && (r.min = t.min - i.min), t.max !== void 0 && (r.max = t.max - i.min), r
}
const pu = .35;

function H1(i = pu) {
    return i === !1 ? i = 0 : i === !0 && (i = pu), {
        x: Ad(i, "left", "right"),
        y: Ad(i, "top", "bottom")
    }
}

function Ad(i, t, r) {
    return {
        min: Od(i, t),
        max: Od(i, r)
    }
}

function Od(i, t) {
    return typeof i == "number" ? i : i[t] || 0
}
const Ld = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    Oi = () => ({
        x: Ld(),
        y: Ld()
    }),
    zd = () => ({
        min: 0,
        max: 0
    }),
    je = () => ({
        x: zd(),
        y: zd()
    });

function Ot(i) {
    return [i("x"), i("y")]
}

function Mm({
    top: i,
    left: t,
    right: r,
    bottom: o
}) {
    return {
        x: {
            min: t,
            max: r
        },
        y: {
            min: i,
            max: o
        }
    }
}

function K1({
    x: i,
    y: t
}) {
    return {
        top: t.min,
        right: i.max,
        bottom: t.max,
        left: i.min
    }
}

function G1(i, t) {
    if (!t) return i;
    const r = t({
            x: i.left,
            y: i.top
        }),
        o = t({
            x: i.right,
            y: i.bottom
        });
    return {
        top: r.y,
        left: r.x,
        bottom: o.y,
        right: o.x
    }
}

function ba(i) {
    return i === void 0 || i === 1
}

function mu({
    scale: i,
    scaleX: t,
    scaleY: r
}) {
    return !ba(i) || !ba(t) || !ba(r)
}

function qn(i) {
    return mu(i) || Rm(i) || i.z || i.rotate || i.rotateX || i.rotateY || i.skewX || i.skewY
}

function Rm(i) {
    return Vd(i.x) || Vd(i.y)
}

function Vd(i) {
    return i && i !== "0%"
}

function _o(i, t, r) {
    const o = i - r,
        a = t * o;
    return r + a
}

function Nd(i, t, r, o, a) {
    return a !== void 0 && (i = _o(i, a, o)), _o(i, r, o) + t
}

function gu(i, t = 0, r = 1, o, a) {
    i.min = Nd(i.min, t, r, o, a), i.max = Nd(i.max, t, r, o, a)
}

function Dm(i, {
    x: t,
    y: r
}) {
    gu(i.x, t.translate, t.scale, t.originPoint), gu(i.y, r.translate, r.scale, r.originPoint)
}
const Id = .999999999999,
    Fd = 1.0000000000001;

function Y1(i, t, r, o = !1) {
    const a = r.length;
    if (!a) return;
    t.x = t.y = 1;
    let c, f;
    for (let d = 0; d < a; d++) {
        c = r[d], f = c.projectionDelta;
        const {
            visualElement: p
        } = c.options;
        p && p.props.style && p.props.style.display === "contents" || (o && c.options.layoutScroll && c.scroll && c !== c.root && zi(i, {
            x: -c.scroll.offset.x,
            y: -c.scroll.offset.y
        }), f && (t.x *= f.x.scale, t.y *= f.y.scale, Dm(i, f)), o && qn(c.latestValues) && zi(i, c.latestValues))
    }
    t.x < Fd && t.x > Id && (t.x = 1), t.y < Fd && t.y > Id && (t.y = 1)
}

function Li(i, t) {
    i.min = i.min + t, i.max = i.max + t
}

function jd(i, t, r, o, a = .5) {
    const c = Oe(i.min, i.max, a);
    gu(i, t, r, c, o)
}

function zi(i, t) {
    jd(i.x, t.x, t.scaleX, t.scale, t.originX), jd(i.y, t.y, t.scaleY, t.scale, t.originY)
}

function Am(i, t) {
    return Mm(G1(i.getBoundingClientRect(), t))
}

function X1(i, t, r) {
    const o = Am(i, r),
        {
            scroll: a
        } = t;
    return a && (Li(o.x, a.offset.x), Li(o.y, a.offset.y)), o
}
const Om = ({
        current: i
    }) => i ? i.ownerDocument.defaultView : null,
    Q1 = new WeakMap;
class q1 {
    constructor(t) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = je(), this.visualElement = t
    }
    start(t, {
        snapToCursor: r = !1
    } = {}) {
        const {
            presenceContext: o
        } = this.visualElement;
        if (o && o.isPresent === !1) return;
        const a = y => {
                const {
                    dragSnapToOrigin: v
                } = this.getProps();
                v ? this.pauseAnimation() : this.stopAnimation(), r && this.snapToCursor(Jr(y).point)
            },
            c = (y, v) => {
                const {
                    drag: w,
                    dragPropagation: k,
                    onDragStart: T
                } = this.getProps();
                if (w && !k && (this.openDragLock && this.openDragLock(), this.openDragLock = R1(w), !this.openDragLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Ot(D => {
                    let O = this.getAxisMotionValue(D).get() || 0;
                    if (Xt.test(O)) {
                        const {
                            projection: j
                        } = this.visualElement;
                        if (j && j.layout) {
                            const F = j.layout.layoutBox[D];
                            F && (O = _t(F) * (parseFloat(O) / 100))
                        }
                    }
                    this.originPoint[D] = O
                }), T && Ee.postRender(() => T(y, v)), hu(this.visualElement, "transform");
                const {
                    animationState: P
                } = this.visualElement;
                P && P.setActive("whileDrag", !0)
            },
            f = (y, v) => {
                const {
                    dragPropagation: w,
                    dragDirectionLock: k,
                    onDirectionLock: T,
                    onDrag: P
                } = this.getProps();
                if (!w && !this.openDragLock) return;
                const {
                    offset: D
                } = v;
                if (k && this.currentDirection === null) {
                    this.currentDirection = Z1(D), this.currentDirection !== null && T && T(this.currentDirection);
                    return
                }
                this.updateAxis("x", v.point, D), this.updateAxis("y", v.point, D), this.visualElement.render(), P && P(y, v)
            },
            d = (y, v) => this.stop(y, v),
            p = () => Ot(y => {
                var v;
                return this.getAnimationState(y) === "paused" && ((v = this.getAxisMotionValue(y).animation) === null || v === void 0 ? void 0 : v.play())
            }),
            {
                dragSnapToOrigin: m
            } = this.getProps();
        this.panSession = new km(t, {
            onSessionStart: a,
            onStart: c,
            onMove: f,
            onSessionEnd: d,
            resumeAnimation: p
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: m,
            contextWindow: Om(this.visualElement)
        })
    }
    stop(t, r) {
        const o = this.isDragging;
        if (this.cancel(), !o) return;
        const {
            velocity: a
        } = r;
        this.startAnimation(a);
        const {
            onDragEnd: c
        } = this.getProps();
        c && Ee.postRender(() => c(t, r))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: t,
            animationState: r
        } = this.visualElement;
        t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: o
        } = this.getProps();
        !o && this.openDragLock && (this.openDragLock(), this.openDragLock = null), r && r.setActive("whileDrag", !1)
    }
    updateAxis(t, r, o) {
        const {
            drag: a
        } = this.getProps();
        if (!o || !ho(t, a, this.currentDirection)) return;
        const c = this.getAxisMotionValue(t);
        let f = this.originPoint[t] + o[t];
        this.constraints && this.constraints[t] && (f = b1(f, this.constraints[t], this.elastic[t])), c.set(f)
    }
    resolveConstraints() {
        var t;
        const {
            dragConstraints: r,
            dragElastic: o
        } = this.getProps(), a = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, c = this.constraints;
        r && Ai(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && a ? this.constraints = B1(a.layoutBox, r) : this.constraints = !1, this.elastic = H1(o), c !== this.constraints && a && this.constraints && !this.hasMutatedConstraints && Ot(f => {
            this.constraints !== !1 && this.getAxisMotionValue(f) && (this.constraints[f] = W1(a.layoutBox[f], this.constraints[f]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: t,
            onMeasureDragConstraints: r
        } = this.getProps();
        if (!t || !Ai(t)) return !1;
        const o = t.current,
            {
                projection: a
            } = this.visualElement;
        if (!a || !a.layout) return !1;
        const c = X1(o, a.root, this.visualElement.getTransformPagePoint());
        let f = U1(a.layout.layoutBox, c);
        if (r) {
            const d = r(K1(f));
            this.hasMutatedConstraints = !!d, d && (f = Mm(d))
        }
        return f
    }
    startAnimation(t) {
        const {
            drag: r,
            dragMomentum: o,
            dragElastic: a,
            dragTransition: c,
            dragSnapToOrigin: f,
            onDragTransitionEnd: d
        } = this.getProps(), p = this.constraints || {}, m = Ot(y => {
            if (!ho(y, r, this.currentDirection)) return;
            let v = p[y] || {};
            f && (v = {
                min: 0,
                max: 0
            });
            const w = a ? 200 : 1e6,
                k = a ? 40 : 1e7,
                T = {
                    type: "inertia",
                    velocity: o ? t[y] : 0,
                    bounceStiffness: w,
                    bounceDamping: k,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...c,
                    ...v
                };
            return this.startAxisValueAnimation(y, T)
        });
        return Promise.all(m).then(d)
    }
    startAxisValueAnimation(t, r) {
        const o = this.getAxisMotionValue(t);
        return hu(this.visualElement, t), o.start(ju(t, o, 0, r, this.visualElement, !1))
    }
    stopAnimation() {
        Ot(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        Ot(t => {
            var r;
            return (r = this.getAxisMotionValue(t).animation) === null || r === void 0 ? void 0 : r.pause()
        })
    }
    getAnimationState(t) {
        var r;
        return (r = this.getAxisMotionValue(t).animation) === null || r === void 0 ? void 0 : r.state
    }
    getAxisMotionValue(t) {
        const r = `_drag${t.toUpperCase()}`,
            o = this.visualElement.getProps(),
            a = o[r];
        return a || this.visualElement.getValue(t, (o.initial ? o.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Ot(r => {
            const {
                drag: o
            } = this.getProps();
            if (!ho(r, o, this.currentDirection)) return;
            const {
                projection: a
            } = this.visualElement, c = this.getAxisMotionValue(r);
            if (a && a.layout) {
                const {
                    min: f,
                    max: d
                } = a.layout.layoutBox[r];
                c.set(t[r] - Oe(f, d, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: t,
            dragConstraints: r
        } = this.getProps(), {
            projection: o
        } = this.visualElement;
        if (!Ai(r) || !o || !this.constraints) return;
        this.stopAnimation();
        const a = {
            x: 0,
            y: 0
        };
        Ot(f => {
            const d = this.getAxisMotionValue(f);
            if (d && this.constraints !== !1) {
                const p = d.get();
                a[f] = $1({
                    min: p,
                    max: p
                }, this.constraints[f])
            }
        });
        const {
            transformTemplate: c
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = c ? c({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.resolveConstraints(), Ot(f => {
            if (!ho(f, t, null)) return;
            const d = this.getAxisMotionValue(f),
                {
                    min: p,
                    max: m
                } = this.constraints[f];
            d.set(Oe(p, m, a[f]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        Q1.set(this.visualElement, this);
        const t = this.visualElement.current,
            r = Ir(t, "pointerdown", p => {
                const {
                    drag: m,
                    dragListener: y = !0
                } = this.getProps();
                m && y && this.start(p)
            }),
            o = () => {
                const {
                    dragConstraints: p
                } = this.getProps();
                Ai(p) && p.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: a
            } = this.visualElement,
            c = a.addEventListener("measure", o);
        a && !a.layout && (a.root && a.root.updateScroll(), a.updateLayout()), Ee.read(o);
        const f = Kr(window, "resize", () => this.scalePositionWithinConstraints()),
            d = a.addEventListener("didUpdate", ({
                delta: p,
                hasLayoutChanged: m
            }) => {
                this.isDragging && m && (Ot(y => {
                    const v = this.getAxisMotionValue(y);
                    v && (this.originPoint[y] += p[y].translate, v.set(v.get() + p[y].translate))
                }), this.visualElement.render())
            });
        return () => {
            f(), r(), c(), d && d()
        }
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: r = !1,
                dragDirectionLock: o = !1,
                dragPropagation: a = !1,
                dragConstraints: c = !1,
                dragElastic: f = pu,
                dragMomentum: d = !0
            } = t;
        return {
            ...t,
            drag: r,
            dragDirectionLock: o,
            dragPropagation: a,
            dragConstraints: c,
            dragElastic: f,
            dragMomentum: d
        }
    }
}

function ho(i, t, r) {
    return (t === !0 || t === i) && (r === null || r === i)
}

function Z1(i, t = 10) {
    let r = null;
    return Math.abs(i.y) > t ? r = "y" : Math.abs(i.x) > t && (r = "x"), r
}
class J1 extends Nn {
    constructor(t) {
        super(t), this.removeGroupControls = Pt, this.removeListeners = Pt, this.controls = new q1(t)
    }
    mount() {
        const {
            dragControls: t
        } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Pt
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const bd = i => (t, r) => {
    i && Ee.postRender(() => i(t, r))
};
class ew extends Nn {
    constructor() {
        super(...arguments), this.removePointerDownListener = Pt
    }
    onPointerDown(t) {
        this.session = new km(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Om(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: t,
            onPanStart: r,
            onPan: o,
            onPanEnd: a
        } = this.node.getProps();
        return {
            onSessionStart: bd(t),
            onStart: bd(r),
            onMove: o,
            onEnd: (c, f) => {
                delete this.session, a && Ee.postRender(() => a(c, f))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Ir(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
const Hu = se.createContext(null);

function tw() {
    const i = se.useContext(Hu);
    if (i === null) return [!0, null];
    const {
        isPresent: t,
        onExitComplete: r,
        register: o
    } = i, a = se.useId();
    se.useEffect(() => o(a), []);
    const c = se.useCallback(() => r && r(a), [a, r]);
    return !t && r ? [!1, c] : [!0]
}
const Lm = se.createContext({}),
    zm = se.createContext({}),
    mo = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    };

function Bd(i, t) {
    return t.max === t.min ? 0 : i / (t.max - t.min) * 100
}
const Dr = {
        correct: (i, t) => {
            if (!t.target) return i;
            if (typeof i == "string")
                if (ie.test(i)) i = parseFloat(i);
                else return i;
            const r = Bd(i, t.target.x),
                o = Bd(i, t.target.y);
            return `${r}% ${o}%`
        }
    },
    nw = {
        correct: (i, {
            treeScale: t,
            projectionDelta: r
        }) => {
            const o = i,
                a = Vn.parse(i);
            if (a.length > 5) return o;
            const c = Vn.createTransformer(i),
                f = typeof a[0] != "number" ? 1 : 0,
                d = r.x.scale * t.x,
                p = r.y.scale * t.y;
            a[0 + f] /= d, a[1 + f] /= p;
            const m = Oe(d, p, .5);
            return typeof a[2 + f] == "number" && (a[2 + f] /= m), typeof a[3 + f] == "number" && (a[3 + f] /= m), c(a)
        }
    },
    ko = {};

function iw(i) {
    Object.assign(ko, i)
}
const {
    schedule: Ku,
    cancel: UP
} = Np(queueMicrotask, !1);
class rw extends se.Component {
    componentDidMount() {
        const {
            visualElement: t,
            layoutGroup: r,
            switchLayoutGroup: o,
            layoutId: a
        } = this.props, {
            projection: c
        } = t;
        iw(sw), c && (r.group && r.group.add(c), o && o.register && a && o.register(c), c.root.didUpdate(), c.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), c.setOptions({
            ...c.options,
            onExitComplete: () => this.safeToRemove()
        })), mo.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {
            layoutDependency: r,
            visualElement: o,
            drag: a,
            isPresent: c
        } = this.props, f = o.projection;
        return f && (f.isPresent = c, a || t.layoutDependency !== r || r === void 0 ? f.willUpdate() : this.safeToRemove(), t.isPresent !== c && (c ? f.promote() : f.relegate() || Ee.postRender(() => {
            const d = f.getStack();
            (!d || !d.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: t
        } = this.props.visualElement;
        t && (t.root.didUpdate(), Ku.postRender(() => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: t,
            layoutGroup: r,
            switchLayoutGroup: o
        } = this.props, {
            projection: a
        } = t;
        a && (a.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(a), o && o.deregister && o.deregister(a))
    }
    safeToRemove() {
        const {
            safeToRemove: t
        } = this.props;
        t && t()
    }
    render() {
        return null
    }
}

function Vm(i) {
    const [t, r] = tw(), o = se.useContext(Lm);
    return W.jsx(rw, {
        ...i,
        layoutGroup: o,
        switchLayoutGroup: se.useContext(zm),
        isPresent: t,
        safeToRemove: r
    })
}
const sw = {
        borderRadius: {
            ...Dr,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: Dr,
        borderTopRightRadius: Dr,
        borderBottomLeftRadius: Dr,
        borderBottomRightRadius: Dr,
        boxShadow: nw
    },
    Nm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    ow = Nm.length,
    Ud = i => typeof i == "string" ? parseFloat(i) : i,
    $d = i => typeof i == "number" || ie.test(i);

function lw(i, t, r, o, a, c) {
    a ? (i.opacity = Oe(0, r.opacity !== void 0 ? r.opacity : 1, aw(o)), i.opacityExit = Oe(t.opacity !== void 0 ? t.opacity : 1, 0, uw(o))) : c && (i.opacity = Oe(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, o));
    for (let f = 0; f < ow; f++) {
        const d = `border${Nm[f]}Radius`;
        let p = Wd(t, d),
            m = Wd(r, d);
        if (p === void 0 && m === void 0) continue;
        p || (p = 0), m || (m = 0), p === 0 || m === 0 || $d(p) === $d(m) ? (i[d] = Math.max(Oe(Ud(p), Ud(m), o), 0), (Xt.test(m) || Xt.test(p)) && (i[d] += "%")) : i[d] = m
    }(t.rotate || r.rotate) && (i.rotate = Oe(t.rotate || 0, r.rotate || 0, o))
}

function Wd(i, t) {
    return i[t] !== void 0 ? i[t] : i.borderRadius
}
const aw = Im(0, .5, $p),
    uw = Im(.5, .95, Pt);

function Im(i, t, r) {
    return o => o < i ? 0 : o > t ? 1 : r(bi(i, t, o))
}

function Hd(i, t) {
    i.min = t.min, i.max = t.max
}

function Dt(i, t) {
    Hd(i.x, t.x), Hd(i.y, t.y)
}

function Kd(i, t) {
    i.translate = t.translate, i.scale = t.scale, i.originPoint = t.originPoint, i.origin = t.origin
}

function Gd(i, t, r, o, a) {
    return i -= t, i = _o(i, 1 / r, o), a !== void 0 && (i = _o(i, 1 / a, o)), i
}

function cw(i, t = 0, r = 1, o = .5, a, c = i, f = i) {
    if (Xt.test(t) && (t = parseFloat(t), t = Oe(f.min, f.max, t / 100) - f.min), typeof t != "number") return;
    let d = Oe(c.min, c.max, o);
    i === c && (d -= t), i.min = Gd(i.min, t, r, d, a), i.max = Gd(i.max, t, r, d, a)
}

function Yd(i, t, [r, o, a], c, f) {
    cw(i, t[r], t[o], t[a], t.scale, c, f)
}
const fw = ["x", "scaleX", "originX"],
    hw = ["y", "scaleY", "originY"];

function Xd(i, t, r, o) {
    Yd(i.x, t, fw, r ? r.x : void 0, o ? o.x : void 0), Yd(i.y, t, hw, r ? r.y : void 0, o ? o.y : void 0)
}

function Qd(i) {
    return i.translate === 0 && i.scale === 1
}

function Fm(i) {
    return Qd(i.x) && Qd(i.y)
}

function qd(i, t) {
    return i.min === t.min && i.max === t.max
}

function dw(i, t) {
    return qd(i.x, t.x) && qd(i.y, t.y)
}

function Zd(i, t) {
    return Math.round(i.min) === Math.round(t.min) && Math.round(i.max) === Math.round(t.max)
}

function jm(i, t) {
    return Zd(i.x, t.x) && Zd(i.y, t.y)
}

function Jd(i) {
    return _t(i.x) / _t(i.y)
}

function ep(i, t) {
    return i.translate === t.translate && i.scale === t.scale && i.originPoint === t.originPoint
}
class pw {
    constructor() {
        this.members = []
    }
    add(t) {
        bu(this.members, t), t.scheduleRender()
    }
    remove(t) {
        if (Bu(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const r = this.members[this.members.length - 1];
            r && this.promote(r)
        }
    }
    relegate(t) {
        const r = this.members.findIndex(a => t === a);
        if (r === 0) return !1;
        let o;
        for (let a = r; a >= 0; a--) {
            const c = this.members[a];
            if (c.isPresent !== !1) {
                o = c;
                break
            }
        }
        return o ? (this.promote(o), !0) : !1
    }
    promote(t, r) {
        const o = this.lead;
        if (t !== o && (this.prevLead = o, this.lead = t, t.show(), o)) {
            o.instance && o.scheduleRender(), t.scheduleRender(), t.resumeFrom = o, r && (t.resumeFrom.preserveOpacity = !0), o.snapshot && (t.snapshot = o.snapshot, t.snapshot.latestValues = o.animationValues || o.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {
                crossfade: a
            } = t.options;
            a === !1 && o.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {
                options: r,
                resumingFrom: o
            } = t;
            r.onExitComplete && r.onExitComplete(), o && o.options.onExitComplete && o.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function mw(i, t, r) {
    let o = "";
    const a = i.x.translate / t.x,
        c = i.y.translate / t.y,
        f = (r == null ? void 0 : r.z) || 0;
    if ((a || c || f) && (o = `translate3d(${a}px, ${c}px, ${f}px) `), (t.x !== 1 || t.y !== 1) && (o += `scale(${1/t.x}, ${1/t.y}) `), r) {
        const {
            transformPerspective: m,
            rotate: y,
            rotateX: v,
            rotateY: w,
            skewX: k,
            skewY: T
        } = r;
        m && (o = `perspective(${m}px) ${o}`), y && (o += `rotate(${y}deg) `), v && (o += `rotateX(${v}deg) `), w && (o += `rotateY(${w}deg) `), k && (o += `skewX(${k}deg) `), T && (o += `skewY(${T}deg) `)
    }
    const d = i.x.scale * t.x,
        p = i.y.scale * t.y;
    return (d !== 1 || p !== 1) && (o += `scale(${d}, ${p})`), o || "none"
}
const gw = (i, t) => i.depth - t.depth;
class yw {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(t) {
        bu(this.children, t), this.isDirty = !0
    }
    remove(t) {
        Bu(this.children, t), this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(gw), this.isDirty = !1, this.children.forEach(t)
    }
}

function go(i) {
    const t = ot(i) ? i.get() : i;
    return l1(t) ? t.toValue() : t
}

function vw(i, t) {
    const r = Qt.now(),
        o = ({
            timestamp: a
        }) => {
            const c = a - r;
            c >= t && (zn(o), i(c - t))
        };
    return Ee.read(o, !0), () => zn(o)
}

function ww(i) {
    return i instanceof SVGElement && i.tagName !== "svg"
}

function xw(i, t, r) {
    const o = ot(i) ? i : Hr(i);
    return o.start(ju("", o, t, r)), o.animation
}
const Zn = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0
    },
    Lr = typeof window < "u" && window.MotionDebug !== void 0,
    Ba = ["", "X", "Y", "Z"],
    Sw = {
        visibility: "hidden"
    },
    tp = 1e3;
let Pw = 0;

function Ua(i, t, r, o) {
    const {
        latestValues: a
    } = t;
    a[i] && (r[i] = a[i], t.setStaticValue(i, 0), o && (o[i] = 0))
}

function bm(i) {
    if (i.hasCheckedOptimisedAppear = !0, i.root === i) return;
    const {
        visualElement: t
    } = i.options;
    if (!t) return;
    const r = xm(t);
    if (window.MotionHasOptimisedAnimation(r, "transform")) {
        const {
            layout: a,
            layoutId: c
        } = i.options;
        window.MotionCancelOptimisedAnimation(r, "transform", Ee, !(a || c))
    }
    const {
        parent: o
    } = i;
    o && !o.hasCheckedOptimisedAppear && bm(o)
}

function Bm({
    attachResizeListener: i,
    defaultParent: t,
    measureScroll: r,
    checkIsScrollRoot: o,
    resetTransform: a
}) {
    return class {
        constructor(f = {}, d = t == null ? void 0 : t()) {
            this.id = Pw++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, Lr && (Zn.totalNodes = Zn.resolvedTargetDeltas = Zn.recalculatedProjection = 0), this.nodes.forEach(Tw), this.nodes.forEach(Dw), this.nodes.forEach(Aw), this.nodes.forEach(Cw), Lr && window.MotionDebug.record(Zn)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = f, this.root = d ? d.root || d : this, this.path = d ? [...d.path, d] : [], this.parent = d, this.depth = d ? d.depth + 1 : 0;
            for (let p = 0; p < this.path.length; p++) this.path[p].shouldResetTransform = !0;
            this.root === this && (this.nodes = new yw)
        }
        addEventListener(f, d) {
            return this.eventHandlers.has(f) || this.eventHandlers.set(f, new Uu), this.eventHandlers.get(f).add(d)
        }
        notifyListeners(f, ...d) {
            const p = this.eventHandlers.get(f);
            p && p.notify(...d)
        }
        hasListeners(f) {
            return this.eventHandlers.has(f)
        }
        mount(f, d = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = ww(f), this.instance = f;
            const {
                layoutId: p,
                layout: m,
                visualElement: y
            } = this.options;
            if (y && !y.current && y.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this), d && (m || p) && (this.isLayoutDirty = !0), i) {
                let v;
                const w = () => this.root.updateBlockedByResize = !1;
                i(f, () => {
                    this.root.updateBlockedByResize = !0, v && v(), v = vw(w, 250), mo.hasAnimatedSinceResize && (mo.hasAnimatedSinceResize = !1, this.nodes.forEach(ip))
                })
            }
            p && this.root.registerSharedNode(p, this), this.options.animate !== !1 && y && (p || m) && this.addEventListener("didUpdate", ({
                delta: v,
                hasLayoutChanged: w,
                hasRelativeTargetChanged: k,
                layout: T
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const P = this.options.transition || y.getDefaultTransition() || Nw,
                    {
                        onLayoutAnimationStart: D,
                        onLayoutAnimationComplete: O
                    } = y.getProps(),
                    j = !this.targetLayout || !jm(this.targetLayout, T) || k,
                    F = !w && k;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || F || w && (j || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(v, F);
                    const J = {
                        ...Tu(P, "layout"),
                        onPlay: D,
                        onComplete: O
                    };
                    (y.shouldReduceMotion || this.options.layoutRoot) && (J.delay = 0, J.type = !1), this.startAnimation(J)
                } else w || ip(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = T
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const f = this.getStack();
            f && f.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, zn(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Ow), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: f
            } = this.options;
            return f && f.getProps().transformTemplate
        }
        willUpdate(f = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && bm(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let y = 0; y < this.path.length; y++) {
                const v = this.path[y];
                v.shouldResetTransform = !0, v.updateScroll("snapshot"), v.options.layoutRoot && v.willUpdate(!1)
            }
            const {
                layoutId: d,
                layout: p
            } = this.options;
            if (d === void 0 && !p) return;
            const m = this.getTransformTemplate();
            this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0, this.updateSnapshot(), f && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(np);
                return
            }
            this.isUpdating || this.nodes.forEach(Mw), this.isUpdating = !1, this.nodes.forEach(Rw), this.nodes.forEach(_w), this.nodes.forEach(kw), this.clearAllSnapshots();
            const d = Qt.now();
            Je.delta = fn(0, 1e3 / 60, d - Je.timestamp), Je.timestamp = d, Je.isProcessing = !0, La.update.process(Je), La.preRender.process(Je), La.render.process(Je), Je.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, Ku.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Ew), this.sharedNodes.forEach(Lw)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Ee.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Ee.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let p = 0; p < this.path.length; p++) this.path[p].updateScroll();
            const f = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = je(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: d
            } = this.options;
            d && d.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0)
        }
        updateScroll(f = "measure") {
            let d = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === f && (d = !1), d) {
                const p = o(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: f,
                    isRoot: p,
                    offset: r(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : p
                }
            }
        }
        resetTransform() {
            if (!a) return;
            const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                d = this.projectionDelta && !Fm(this.projectionDelta),
                p = this.getTransformTemplate(),
                m = p ? p(this.latestValues, "") : void 0,
                y = m !== this.prevTransformTemplateValue;
            f && (d || qn(this.latestValues) || y) && (a(this.instance, m), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(f = !0) {
            const d = this.measurePageBox();
            let p = this.removeElementScroll(d);
            return f && (p = this.removeTransform(p)), Iw(p), {
                animationId: this.root.animationId,
                measuredBox: d,
                layoutBox: p,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var f;
            const {
                visualElement: d
            } = this.options;
            if (!d) return je();
            const p = d.measureViewportBox();
            if (!(((f = this.scroll) === null || f === void 0 ? void 0 : f.wasRoot) || this.path.some(Fw))) {
                const {
                    scroll: y
                } = this.root;
                y && (Li(p.x, y.offset.x), Li(p.y, y.offset.y))
            }
            return p
        }
        removeElementScroll(f) {
            var d;
            const p = je();
            if (Dt(p, f), !((d = this.scroll) === null || d === void 0) && d.wasRoot) return p;
            for (let m = 0; m < this.path.length; m++) {
                const y = this.path[m],
                    {
                        scroll: v,
                        options: w
                    } = y;
                y !== this.root && v && w.layoutScroll && (v.wasRoot && Dt(p, f), Li(p.x, v.offset.x), Li(p.y, v.offset.y))
            }
            return p
        }
        applyTransform(f, d = !1) {
            const p = je();
            Dt(p, f);
            for (let m = 0; m < this.path.length; m++) {
                const y = this.path[m];
                !d && y.options.layoutScroll && y.scroll && y !== y.root && zi(p, {
                    x: -y.scroll.offset.x,
                    y: -y.scroll.offset.y
                }), qn(y.latestValues) && zi(p, y.latestValues)
            }
            return qn(this.latestValues) && zi(p, this.latestValues), p
        }
        removeTransform(f) {
            const d = je();
            Dt(d, f);
            for (let p = 0; p < this.path.length; p++) {
                const m = this.path[p];
                if (!m.instance || !qn(m.latestValues)) continue;
                mu(m.latestValues) && m.updateSnapshot();
                const y = je(),
                    v = m.measurePageBox();
                Dt(y, v), Xd(d, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, y)
            }
            return qn(this.latestValues) && Xd(d, this.latestValues), d
        }
        setTargetDelta(f) {
            this.targetDelta = f, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(f) {
            this.options = {
                ...this.options,
                ...f,
                crossfade: f.crossfade !== void 0 ? f.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Je.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(f = !1) {
            var d;
            const p = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
            const m = !!this.resumingFrom || this !== p;
            if (!(f || m && this.isSharedProjectionDirty || this.isProjectionDirty || !((d = this.parent) === null || d === void 0) && d.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: v,
                layoutId: w
            } = this.options;
            if (!(!this.layout || !(v || w))) {
                if (this.resolvedRelativeTargetAt = Je.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const k = this.getClosestProjectingParent();
                    k && k.layout && this.animationProgress !== 1 ? (this.relativeParent = k, this.forceRelativeParentToResolveTarget(), this.relativeTarget = je(), this.relativeTargetOrigin = je(), jr(this.relativeTargetOrigin, this.layout.layoutBox, k.layout.layoutBox), Dt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = je(), this.targetWithTransforms = je()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), j1(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Dt(this.target, this.layout.layoutBox), Dm(this.target, this.targetDelta)) : Dt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const k = this.getClosestProjectingParent();
                        k && !!k.resumingFrom == !!this.resumingFrom && !k.options.layoutScroll && k.target && this.animationProgress !== 1 ? (this.relativeParent = k, this.forceRelativeParentToResolveTarget(), this.relativeTarget = je(), this.relativeTargetOrigin = je(), jr(this.relativeTargetOrigin, this.target, k.target), Dt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    Lr && Zn.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || mu(this.parent.latestValues) || Rm(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var f;
            const d = this.getLead(),
                p = !!this.resumingFrom || this !== d;
            let m = !0;
            if ((this.isProjectionDirty || !((f = this.parent) === null || f === void 0) && f.isProjectionDirty) && (m = !1), p && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1), this.resolvedRelativeTargetAt === Je.timestamp && (m = !1), m) return;
            const {
                layout: y,
                layoutId: v
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(y || v)) return;
            Dt(this.layoutCorrected, this.layout.layoutBox);
            const w = this.treeScale.x,
                k = this.treeScale.y;
            Y1(this.layoutCorrected, this.treeScale, this.path, p), d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox, d.targetWithTransforms = je());
            const {
                target: T
            } = d;
            if (!T) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Kd(this.prevProjectionDelta.x, this.projectionDelta.x), Kd(this.prevProjectionDelta.y, this.projectionDelta.y)), Fr(this.projectionDelta, this.layoutCorrected, T, this.latestValues), (this.treeScale.x !== w || this.treeScale.y !== k || !ep(this.projectionDelta.x, this.prevProjectionDelta.x) || !ep(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", T)), Lr && Zn.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(f = !0) {
            var d;
            if ((d = this.options.visualElement) === null || d === void 0 || d.scheduleRender(), f) {
                const p = this.getStack();
                p && p.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Oi(), this.projectionDelta = Oi(), this.projectionDeltaWithTransform = Oi()
        }
        setAnimationOrigin(f, d = !1) {
            const p = this.snapshot,
                m = p ? p.latestValues : {},
                y = {
                    ...this.latestValues
                },
                v = Oi();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !d;
            const w = je(),
                k = p ? p.source : void 0,
                T = this.layout ? this.layout.source : void 0,
                P = k !== T,
                D = this.getStack(),
                O = !D || D.members.length <= 1,
                j = !!(P && !O && this.options.crossfade === !0 && !this.path.some(Vw));
            this.animationProgress = 0;
            let F;
            this.mixTargetDelta = J => {
                const G = J / 1e3;
                rp(v.x, f.x, G), rp(v.y, f.y, G), this.setTargetDelta(v), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (jr(w, this.layout.layoutBox, this.relativeParent.layout.layoutBox), zw(this.relativeTarget, this.relativeTargetOrigin, w, G), F && dw(this.relativeTarget, F) && (this.isProjectionDirty = !1), F || (F = je()), Dt(F, this.relativeTarget)), P && (this.animationValues = y, lw(y, m, this.latestValues, G, j, O)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = G
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(f) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (zn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ee.update(() => {
                mo.hasAnimatedSinceResize = !0, this.currentAnimation = xw(0, tp, {
                    ...f,
                    onUpdate: d => {
                        this.mixTargetDelta(d), f.onUpdate && f.onUpdate(d)
                    },
                    onComplete: () => {
                        f.onComplete && f.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const f = this.getStack();
            f && f.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(tp), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const f = this.getLead();
            let {
                targetWithTransforms: d,
                target: p,
                layout: m,
                latestValues: y
            } = f;
            if (!(!d || !p || !m)) {
                if (this !== f && this.layout && m && Um(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
                    p = this.target || je();
                    const v = _t(this.layout.layoutBox.x);
                    p.x.min = f.target.x.min, p.x.max = p.x.min + v;
                    const w = _t(this.layout.layoutBox.y);
                    p.y.min = f.target.y.min, p.y.max = p.y.min + w
                }
                Dt(d, p), zi(d, y), Fr(this.projectionDeltaWithTransform, this.layoutCorrected, d, y)
            }
        }
        registerSharedNode(f, d) {
            this.sharedNodes.has(f) || this.sharedNodes.set(f, new pw), this.sharedNodes.get(f).add(d);
            const m = d.options.initialPromotionConfig;
            d.promote({
                transition: m ? m.transition : void 0,
                preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(d) : void 0
            })
        }
        isLead() {
            const f = this.getStack();
            return f ? f.lead === this : !0
        }
        getLead() {
            var f;
            const {
                layoutId: d
            } = this.options;
            return d ? ((f = this.getStack()) === null || f === void 0 ? void 0 : f.lead) || this : this
        }
        getPrevLead() {
            var f;
            const {
                layoutId: d
            } = this.options;
            return d ? (f = this.getStack()) === null || f === void 0 ? void 0 : f.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: f
            } = this.options;
            if (f) return this.root.sharedNodes.get(f)
        }
        promote({
            needsReset: f,
            transition: d,
            preserveFollowOpacity: p
        } = {}) {
            const m = this.getStack();
            m && m.promote(this, p), f && (this.projectionDelta = void 0, this.needsReset = !0), d && this.setOptions({
                transition: d
            })
        }
        relegate() {
            const f = this.getStack();
            return f ? f.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: f
            } = this.options;
            if (!f) return;
            let d = !1;
            const {
                latestValues: p
            } = f;
            if ((p.z || p.rotate || p.rotateX || p.rotateY || p.rotateZ || p.skewX || p.skewY) && (d = !0), !d) return;
            const m = {};
            p.z && Ua("z", f, m, this.animationValues);
            for (let y = 0; y < Ba.length; y++) Ua(`rotate${Ba[y]}`, f, m, this.animationValues), Ua(`skew${Ba[y]}`, f, m, this.animationValues);
            f.render();
            for (const y in m) f.setStaticValue(y, m[y]), this.animationValues && (this.animationValues[y] = m[y]);
            f.scheduleRender()
        }
        getProjectionStyles(f) {
            var d, p;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return Sw;
            const m = {
                    visibility: ""
                },
                y = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, m.opacity = "", m.pointerEvents = go(f == null ? void 0 : f.pointerEvents) || "", m.transform = y ? y(this.latestValues, "") : "none", m;
            const v = this.getLead();
            if (!this.projectionDelta || !this.layout || !v.target) {
                const P = {};
                return this.options.layoutId && (P.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, P.pointerEvents = go(f == null ? void 0 : f.pointerEvents) || ""), this.hasProjected && !qn(this.latestValues) && (P.transform = y ? y({}, "") : "none", this.hasProjected = !1), P
            }
            const w = v.animationValues || v.latestValues;
            this.applyTransformsToTarget(), m.transform = mw(this.projectionDeltaWithTransform, this.treeScale, w), y && (m.transform = y(w, m.transform));
            const {
                x: k,
                y: T
            } = this.projectionDelta;
            m.transformOrigin = `${k.origin*100}% ${T.origin*100}% 0`, v.animationValues ? m.opacity = v === this ? (p = (d = w.opacity) !== null && d !== void 0 ? d : this.latestValues.opacity) !== null && p !== void 0 ? p : 1 : this.preserveOpacity ? this.latestValues.opacity : w.opacityExit : m.opacity = v === this ? w.opacity !== void 0 ? w.opacity : "" : w.opacityExit !== void 0 ? w.opacityExit : 0;
            for (const P in ko) {
                if (w[P] === void 0) continue;
                const {
                    correct: D,
                    applyTo: O
                } = ko[P], j = m.transform === "none" ? w[P] : D(w[P], v);
                if (O) {
                    const F = O.length;
                    for (let J = 0; J < F; J++) m[O[J]] = j
                } else m[P] = j
            }
            return this.options.layoutId && (m.pointerEvents = v === this ? go(f == null ? void 0 : f.pointerEvents) || "" : "none"), m
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(f => {
                var d;
                return (d = f.currentAnimation) === null || d === void 0 ? void 0 : d.stop()
            }), this.root.nodes.forEach(np), this.root.sharedNodes.clear()
        }
    }
}

function _w(i) {
    i.updateLayout()
}

function kw(i) {
    var t;
    const r = ((t = i.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || i.snapshot;
    if (i.isLead() && i.layout && r && i.hasListeners("didUpdate")) {
        const {
            layoutBox: o,
            measuredBox: a
        } = i.layout, {
            animationType: c
        } = i.options, f = r.source !== i.layout.source;
        c === "size" ? Ot(v => {
            const w = f ? r.measuredBox[v] : r.layoutBox[v],
                k = _t(w);
            w.min = o[v].min, w.max = w.min + k
        }) : Um(c, r.layoutBox, o) && Ot(v => {
            const w = f ? r.measuredBox[v] : r.layoutBox[v],
                k = _t(o[v]);
            w.max = w.min + k, i.relativeTarget && !i.currentAnimation && (i.isProjectionDirty = !0, i.relativeTarget[v].max = i.relativeTarget[v].min + k)
        });
        const d = Oi();
        Fr(d, o, r.layoutBox);
        const p = Oi();
        f ? Fr(p, i.applyTransform(a, !0), r.measuredBox) : Fr(p, o, r.layoutBox);
        const m = !Fm(d);
        let y = !1;
        if (!i.resumeFrom) {
            const v = i.getClosestProjectingParent();
            if (v && !v.resumeFrom) {
                const {
                    snapshot: w,
                    layout: k
                } = v;
                if (w && k) {
                    const T = je();
                    jr(T, r.layoutBox, w.layoutBox);
                    const P = je();
                    jr(P, o, k.layoutBox), jm(T, P) || (y = !0), v.options.layoutRoot && (i.relativeTarget = P, i.relativeTargetOrigin = T, i.relativeParent = v)
                }
            }
        }
        i.notifyListeners("didUpdate", {
            layout: o,
            snapshot: r,
            delta: p,
            layoutDelta: d,
            hasLayoutChanged: m,
            hasRelativeTargetChanged: y
        })
    } else if (i.isLead()) {
        const {
            onExitComplete: o
        } = i.options;
        o && o()
    }
    i.options.transition = void 0
}

function Tw(i) {
    Lr && Zn.totalNodes++, i.parent && (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty), i.isSharedProjectionDirty || (i.isSharedProjectionDirty = !!(i.isProjectionDirty || i.parent.isProjectionDirty || i.parent.isSharedProjectionDirty)), i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty))
}

function Cw(i) {
    i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1
}

function Ew(i) {
    i.clearSnapshot()
}

function np(i) {
    i.clearMeasurements()
}

function Mw(i) {
    i.isLayoutDirty = !1
}

function Rw(i) {
    const {
        visualElement: t
    } = i.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), i.resetTransform()
}

function ip(i) {
    i.finishAnimation(), i.targetDelta = i.relativeTarget = i.target = void 0, i.isProjectionDirty = !0
}

function Dw(i) {
    i.resolveTargetDelta()
}

function Aw(i) {
    i.calcProjection()
}

function Ow(i) {
    i.resetSkewAndRotation()
}

function Lw(i) {
    i.removeLeadSnapshot()
}

function rp(i, t, r) {
    i.translate = Oe(t.translate, 0, r), i.scale = Oe(t.scale, 1, r), i.origin = t.origin, i.originPoint = t.originPoint
}

function sp(i, t, r, o) {
    i.min = Oe(t.min, r.min, o), i.max = Oe(t.max, r.max, o)
}

function zw(i, t, r, o) {
    sp(i.x, t.x, r.x, o), sp(i.y, t.y, r.y, o)
}

function Vw(i) {
    return i.animationValues && i.animationValues.opacityExit !== void 0
}
const Nw = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    op = i => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i),
    lp = op("applewebkit/") && !op("chrome/") ? Math.round : Pt;

function ap(i) {
    i.min = lp(i.min), i.max = lp(i.max)
}

function Iw(i) {
    ap(i.x), ap(i.y)
}

function Um(i, t, r) {
    return i === "position" || i === "preserve-aspect" && !F1(Jd(t), Jd(r), .2)
}

function Fw(i) {
    var t;
    return i !== i.root && ((t = i.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}
const jw = Bm({
        attachResizeListener: (i, t) => Kr(i, "resize", t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    $a = {
        current: void 0
    },
    $m = Bm({
        measureScroll: i => ({
            x: i.scrollLeft,
            y: i.scrollTop
        }),
        defaultParent: () => {
            if (!$a.current) {
                const i = new jw({});
                i.mount(window), i.setOptions({
                    layoutScroll: !0
                }), $a.current = i
            }
            return $a.current
        },
        resetTransform: (i, t) => {
            i.style.transform = t !== void 0 ? t : "none"
        },
        checkIsScrollRoot: i => window.getComputedStyle(i).position === "fixed"
    }),
    bw = {
        pan: {
            Feature: ew
        },
        drag: {
            Feature: J1,
            ProjectionNode: $m,
            MeasureLayout: Vm
        }
    };

function Bw(i, t, r) {
    var o;
    if (i instanceof Element) return [i];
    if (typeof i == "string") {
        let a = document;
        const c = (o = void 0) !== null && o !== void 0 ? o : a.querySelectorAll(i);
        return c ? Array.from(c) : []
    }
    return Array.from(i)
}

function Wm(i, t) {
    const r = Bw(i),
        o = new AbortController,
        a = {
            passive: !0,
            ...t,
            signal: o.signal
        };
    return [r, a, () => o.abort()]
}

function up(i) {
    return t => {
        t.pointerType === "touch" || _m() || i(t)
    }
}

function Uw(i, t, r = {}) {
    const [o, a, c] = Wm(i, r), f = up(d => {
        const {
            target: p
        } = d, m = t(d);
        if (!m || !p) return;
        const y = up(v => {
            m(v), p.removeEventListener("pointerleave", y)
        });
        p.addEventListener("pointerleave", y, a)
    });
    return o.forEach(d => {
        d.addEventListener("pointerenter", f, a)
    }), c
}

function cp(i, t, r) {
    const {
        props: o
    } = i;
    i.animationState && o.whileHover && i.animationState.setActive("whileHover", r === "Start");
    const a = "onHover" + r,
        c = o[a];
    c && Ee.postRender(() => c(t, Jr(t)))
}
class $w extends Nn {
    mount() {
        const {
            current: t
        } = this.node;
        t && (this.unmount = Uw(t, r => (cp(this.node, r, "Start"), o => cp(this.node, o, "End"))))
    }
    unmount() {}
}
class Ww extends Nn {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = Zr(Kr(this.node.current, "focus", () => this.onFocus()), Kr(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const zr = new WeakSet;

function fp(i) {
    return t => {
        t.key === "Enter" && i(t)
    }
}

function Wa(i, t) {
    i.dispatchEvent(new PointerEvent("pointer" + t, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const Hw = (i, t) => {
        const r = i.currentTarget;
        if (!r) return;
        const o = fp(() => {
            if (zr.has(r)) return;
            Wa(r, "down");
            const a = fp(() => {
                    Wa(r, "up")
                }),
                c = () => Wa(r, "cancel");
            r.addEventListener("keyup", a, t), r.addEventListener("blur", c, t)
        });
        r.addEventListener("keydown", o, t), r.addEventListener("blur", () => r.removeEventListener("keydown", o), t)
    },
    Kw = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function Gw(i) {
    return Kw.has(i.tagName) || i.tabIndex !== -1
}
const Hm = (i, t) => t ? i === t ? !0 : Hm(i, t.parentElement) : !1;

function hp(i) {
    return Wu(i) && !_m()
}

function Yw(i, t, r = {}) {
    const [o, a, c] = Wm(i, r), f = d => {
        const p = d.currentTarget;
        if (!hp(d) || zr.has(p)) return;
        zr.add(p);
        const m = t(d),
            y = (k, T) => {
                window.removeEventListener("pointerup", v), window.removeEventListener("pointercancel", w), !(!hp(k) || !zr.has(p)) && (zr.delete(p), m && m(k, {
                    success: T
                }))
            },
            v = k => {
                y(k, r.useGlobalTarget || Hm(p, k.target))
            },
            w = k => {
                y(k, !1)
            };
        window.addEventListener("pointerup", v, a), window.addEventListener("pointercancel", w, a)
    };
    return o.forEach(d => {
        Gw(d) || (d.tabIndex = 0), (r.useGlobalTarget ? window : d).addEventListener("pointerdown", f, a), d.addEventListener("focus", m => Hw(m, a), a)
    }), c
}

function dp(i, t, r) {
    const {
        props: o
    } = i;
    i.animationState && o.whileTap && i.animationState.setActive("whileTap", r === "Start");
    const a = "onTap" + (r === "End" ? "" : r),
        c = o[a];
    c && Ee.postRender(() => c(t, Jr(t)))
}
class Xw extends Nn {
    mount() {
        const {
            current: t
        } = this.node;
        t && (this.unmount = Yw(t, r => (dp(this.node, r, "Start"), (o, {
            success: a
        }) => dp(this.node, o, a ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const yu = new WeakMap,
    Ha = new WeakMap,
    Qw = i => {
        const t = yu.get(i.target);
        t && t(i)
    },
    qw = i => {
        i.forEach(Qw)
    };

function Zw({
    root: i,
    ...t
}) {
    const r = i || document;
    Ha.has(r) || Ha.set(r, {});
    const o = Ha.get(r),
        a = JSON.stringify(t);
    return o[a] || (o[a] = new IntersectionObserver(qw, {
        root: i,
        ...t
    })), o[a]
}

function Jw(i, t, r) {
    const o = Zw(t);
    return yu.set(i, r), o.observe(i), () => {
        yu.delete(i), o.unobserve(i)
    }
}
const ex = {
    some: 0,
    all: 1
};
class tx extends Nn {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: t = {}
        } = this.node.getProps(), {
            root: r,
            margin: o,
            amount: a = "some",
            once: c
        } = t, f = {
            root: r ? r.current : void 0,
            rootMargin: o,
            threshold: typeof a == "number" ? a : ex[a]
        }, d = p => {
            const {
                isIntersecting: m
            } = p;
            if (this.isInView === m || (this.isInView = m, c && !m && this.hasEnteredView)) return;
            m && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", m);
            const {
                onViewportEnter: y,
                onViewportLeave: v
            } = this.node.getProps(), w = m ? y : v;
            w && w(p)
        };
        return Jw(this.node.current, f, d)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: t,
            prevProps: r
        } = this.node;
        ["amount", "margin", "root"].some(nx(t, r)) && this.startObserver()
    }
    unmount() {}
}

function nx({
    viewport: i = {}
}, {
    viewport: t = {}
} = {}) {
    return r => i[r] !== t[r]
}
const ix = {
        inView: {
            Feature: tx
        },
        tap: {
            Feature: Xw
        },
        focus: {
            Feature: Ww
        },
        hover: {
            Feature: $w
        }
    },
    rx = {
        layout: {
            ProjectionNode: $m,
            MeasureLayout: Vm
        }
    },
    Km = se.createContext({
        transformPagePoint: i => i,
        isStatic: !1,
        reducedMotion: "never"
    }),
    Ao = se.createContext({}),
    Gu = typeof window < "u",
    sx = Gu ? se.useLayoutEffect : se.useEffect,
    Gm = se.createContext({
        strict: !1
    });

function ox(i, t, r, o, a) {
    var c, f;
    const {
        visualElement: d
    } = se.useContext(Ao), p = se.useContext(Gm), m = se.useContext(Hu), y = se.useContext(Km).reducedMotion, v = se.useRef(null);
    o = o || p.renderer, !v.current && o && (v.current = o(i, {
        visualState: t,
        parent: d,
        props: r,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: y
    }));
    const w = v.current,
        k = se.useContext(zm);
    w && !w.projection && a && (w.type === "html" || w.type === "svg") && lx(v.current, r, a, k);
    const T = se.useRef(!1);
    se.useInsertionEffect(() => {
        w && T.current && w.update(r, m)
    });
    const P = r[wm],
        D = se.useRef(!!P && !(!((c = window.MotionHandoffIsComplete) === null || c === void 0) && c.call(window, P)) && ((f = window.MotionHasOptimisedAnimation) === null || f === void 0 ? void 0 : f.call(window, P)));
    return sx(() => {
        w && (T.current = !0, window.MotionIsMounted = !0, w.updateFeatures(), Ku.render(w.render), D.current && w.animationState && w.animationState.animateChanges())
    }), se.useEffect(() => {
        w && (!D.current && w.animationState && w.animationState.animateChanges(), D.current && (queueMicrotask(() => {
            var O;
            (O = window.MotionHandoffMarkAsComplete) === null || O === void 0 || O.call(window, P)
        }), D.current = !1))
    }), w
}

function lx(i, t, r, o) {
    const {
        layoutId: a,
        layout: c,
        drag: f,
        dragConstraints: d,
        layoutScroll: p,
        layoutRoot: m
    } = t;
    i.projection = new r(i.latestValues, t["data-framer-portal-id"] ? void 0 : Ym(i.parent)), i.projection.setOptions({
        layoutId: a,
        layout: c,
        alwaysMeasureLayout: !!f || d && Ai(d),
        visualElement: i,
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: o,
        layoutScroll: p,
        layoutRoot: m
    })
}

function Ym(i) {
    if (i) return i.options.allowProjection !== !1 ? i.projection : Ym(i.parent)
}

function ax(i, t, r) {
    return se.useCallback(o => {
        o && i.mount && i.mount(o), t && (o ? t.mount(o) : t.unmount()), r && (typeof r == "function" ? r(o) : Ai(r) && (r.current = o))
    }, [t])
}

function Oo(i) {
    return Mo(i.animate) || ku.some(t => Ur(i[t]))
}

function Xm(i) {
    return !!(Oo(i) || i.variants)
}

function ux(i, t) {
    if (Oo(i)) {
        const {
            initial: r,
            animate: o
        } = i;
        return {
            initial: r === !1 || Ur(r) ? r : void 0,
            animate: Ur(o) ? o : void 0
        }
    }
    return i.inherit !== !1 ? t : {}
}

function cx(i) {
    const {
        initial: t,
        animate: r
    } = ux(i, se.useContext(Ao));
    return se.useMemo(() => ({
        initial: t,
        animate: r
    }), [pp(t), pp(r)])
}

function pp(i) {
    return Array.isArray(i) ? i.join(" ") : i
}
const mp = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    Bi = {};
for (const i in mp) Bi[i] = {
    isEnabled: t => mp[i].some(r => !!t[r])
};

function fx(i) {
    for (const t in i) Bi[t] = {
        ...Bi[t],
        ...i[t]
    }
}
const hx = Symbol.for("motionComponentSymbol");

function dx({
    preloadedFeatures: i,
    createVisualElement: t,
    useRender: r,
    useVisualState: o,
    Component: a
}) {
    i && fx(i);

    function c(d, p) {
        let m;
        const y = {
                ...se.useContext(Km),
                ...d,
                layoutId: px(d)
            },
            {
                isStatic: v
            } = y,
            w = cx(d),
            k = o(d, v);
        if (!v && Gu) {
            mx();
            const T = gx(y);
            m = T.MeasureLayout, w.visualElement = ox(a, k, y, t, T.ProjectionNode)
        }
        return W.jsxs(Ao.Provider, {
            value: w,
            children: [m && w.visualElement ? W.jsx(m, {
                visualElement: w.visualElement,
                ...y
            }) : null, r(a, d, ax(k, w.visualElement, p), k, v, w.visualElement)]
        })
    }
    const f = se.forwardRef(c);
    return f[hx] = a, f
}

function px({
    layoutId: i
}) {
    const t = se.useContext(Lm).id;
    return t && i !== void 0 ? t + "-" + i : i
}

function mx(i, t) {
    se.useContext(Gm).strict
}

function gx(i) {
    const {
        drag: t,
        layout: r
    } = Bi;
    if (!t && !r) return {};
    const o = {
        ...t,
        ...r
    };
    return {
        MeasureLayout: t != null && t.isEnabled(i) || r != null && r.isEnabled(i) ? o.MeasureLayout : void 0,
        ProjectionNode: o.ProjectionNode
    }
}
const yx = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Yu(i) {
    return typeof i != "string" || i.includes("-") ? !1 : !!(yx.indexOf(i) > -1 || /[A-Z]/u.test(i))
}

function Qm(i, {
    style: t,
    vars: r
}, o, a) {
    Object.assign(i.style, t, a && a.getProjectionStyles(o));
    for (const c in r) i.style.setProperty(c, r[c])
}
const qm = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function Zm(i, t, r, o) {
    Qm(i, t, void 0, o);
    for (const a in t.attrs) i.setAttribute(qm.has(a) ? a : $u(a), t.attrs[a])
}

function Jm(i, {
    layout: t,
    layoutId: r
}) {
    return ii.has(i) || i.startsWith("origin") || (t || r !== void 0) && (!!ko[i] || i === "opacity")
}

function Xu(i, t, r) {
    var o;
    const {
        style: a
    } = i, c = {};
    for (const f in a)(ot(a[f]) || t.style && ot(t.style[f]) || Jm(f, i) || ((o = r == null ? void 0 : r.getValue(f)) === null || o === void 0 ? void 0 : o.liveStyle) !== void 0) && (c[f] = a[f]);
    return c
}

function eg(i, t, r) {
    const o = Xu(i, t, r);
    for (const a in i)
        if (ot(i[a]) || ot(t[a])) {
            const c = Xr.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
            o[c] = i[a]
        } return o
}

function vx(i) {
    const t = se.useRef(null);
    return t.current === null && (t.current = i()), t.current
}

function wx({
    scrapeMotionValuesFromProps: i,
    createRenderState: t,
    onMount: r
}, o, a, c) {
    const f = {
        latestValues: xx(o, a, c, i),
        renderState: t()
    };
    return r && (f.mount = d => r(o, d, f)), f
}
const tg = i => (t, r) => {
    const o = se.useContext(Ao),
        a = se.useContext(Hu),
        c = () => wx(i, t, o, a);
    return r ? c() : vx(c)
};

function xx(i, t, r, o) {
    const a = {},
        c = o(i, {});
    for (const w in c) a[w] = go(c[w]);
    let {
        initial: f,
        animate: d
    } = i;
    const p = Oo(i),
        m = Xm(i);
    t && m && !p && i.inherit !== !1 && (f === void 0 && (f = t.initial), d === void 0 && (d = t.animate));
    let y = r ? r.initial === !1 : !1;
    y = y || f === !1;
    const v = y ? d : f;
    if (v && typeof v != "boolean" && !Mo(v)) {
        const w = Array.isArray(v) ? v : [v];
        for (let k = 0; k < w.length; k++) {
            const T = Pu(i, w[k]);
            if (T) {
                const {
                    transitionEnd: P,
                    transition: D,
                    ...O
                } = T;
                for (const j in O) {
                    let F = O[j];
                    if (Array.isArray(F)) {
                        const J = y ? F.length - 1 : 0;
                        F = F[J]
                    }
                    F !== null && (a[j] = F)
                }
                for (const j in P) a[j] = P[j]
            }
        }
    }
    return a
}
const Qu = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    }),
    ng = () => ({
        ...Qu(),
        attrs: {}
    }),
    ig = (i, t) => t && typeof i == "number" ? t.transform(i) : i,
    Sx = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    Px = Xr.length;

function _x(i, t, r) {
    let o = "",
        a = !0;
    for (let c = 0; c < Px; c++) {
        const f = Xr[c],
            d = i[f];
        if (d === void 0) continue;
        let p = !0;
        if (typeof d == "number" ? p = d === (f.startsWith("scale") ? 1 : 0) : p = parseFloat(d) === 0, !p || r) {
            const m = ig(d, Ou[f]);
            if (!p) {
                a = !1;
                const y = Sx[f] || f;
                o += `${y}(${m}) `
            }
            r && (t[f] = m)
        }
    }
    return o = o.trim(), r ? o = r(t, a ? "" : o) : a && (o = "none"), o
}

function qu(i, t, r) {
    const {
        style: o,
        vars: a,
        transformOrigin: c
    } = i;
    let f = !1,
        d = !1;
    for (const p in t) {
        const m = t[p];
        if (ii.has(p)) {
            f = !0;
            continue
        } else if (Yp(p)) {
            a[p] = m;
            continue
        } else {
            const y = ig(m, Ou[p]);
            p.startsWith("origin") ? (d = !0, c[p] = y) : o[p] = y
        }
    }
    if (t.transform || (f || r ? o.transform = _x(t, i.transform, r) : o.transform && (o.transform = "none")), d) {
        const {
            originX: p = "50%",
            originY: m = "50%",
            originZ: y = 0
        } = c;
        o.transformOrigin = `${p} ${m} ${y}`
    }
}

function gp(i, t, r) {
    return typeof i == "string" ? i : ie.transform(t + r * i)
}

function kx(i, t, r) {
    const o = gp(t, i.x, i.width),
        a = gp(r, i.y, i.height);
    return `${o} ${a}`
}
const Tx = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    Cx = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function Ex(i, t, r = 1, o = 0, a = !0) {
    i.pathLength = 1;
    const c = a ? Tx : Cx;
    i[c.offset] = ie.transform(-o);
    const f = ie.transform(t),
        d = ie.transform(r);
    i[c.array] = `${f} ${d}`
}

function Zu(i, {
    attrX: t,
    attrY: r,
    attrScale: o,
    originX: a,
    originY: c,
    pathLength: f,
    pathSpacing: d = 1,
    pathOffset: p = 0,
    ...m
}, y, v) {
    if (qu(i, m, v), y) {
        i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
        return
    }
    i.attrs = i.style, i.style = {};
    const {
        attrs: w,
        style: k,
        dimensions: T
    } = i;
    w.transform && (T && (k.transform = w.transform), delete w.transform), T && (a !== void 0 || c !== void 0 || k.transform) && (k.transformOrigin = kx(T, a !== void 0 ? a : .5, c !== void 0 ? c : .5)), t !== void 0 && (w.x = t), r !== void 0 && (w.y = r), o !== void 0 && (w.scale = o), f !== void 0 && Ex(w, f, d, p, !1)
}
const Ju = i => typeof i == "string" && i.toLowerCase() === "svg",
    Mx = {
        useVisualState: tg({
            scrapeMotionValuesFromProps: eg,
            createRenderState: ng,
            onMount: (i, t, {
                renderState: r,
                latestValues: o
            }) => {
                Ee.read(() => {
                    try {
                        r.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                    } catch {
                        r.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                }), Ee.render(() => {
                    Zu(r, o, Ju(t.tagName), i.transformTemplate), Zm(t, r)
                })
            }
        })
    },
    Rx = {
        useVisualState: tg({
            scrapeMotionValuesFromProps: Xu,
            createRenderState: Qu
        })
    };

function rg(i, t, r) {
    for (const o in t) !ot(t[o]) && !Jm(o, r) && (i[o] = t[o])
}

function Dx({
    transformTemplate: i
}, t) {
    return se.useMemo(() => {
        const r = Qu();
        return qu(r, t, i), Object.assign({}, r.vars, r.style)
    }, [t])
}

function Ax(i, t) {
    const r = i.style || {},
        o = {};
    return rg(o, r, i), Object.assign(o, Dx(i, t)), o
}

function Ox(i, t) {
    const r = {},
        o = Ax(i, t);
    return i.drag && i.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = i.drag === !0 ? "none" : `pan-${i.drag==="x"?"y":"x"}`), i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (r.tabIndex = 0), r.style = o, r
}
const Lx = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function To(i) {
    return i.startsWith("while") || i.startsWith("drag") && i !== "draggable" || i.startsWith("layout") || i.startsWith("onTap") || i.startsWith("onPan") || i.startsWith("onLayout") || Lx.has(i)
}
let sg = i => !To(i);

function zx(i) {
    i && (sg = t => t.startsWith("on") ? !To(t) : i(t))
}
try {
    zx(require("@emotion/is-prop-valid").default)
} catch {}

function Vx(i, t, r) {
    const o = {};
    for (const a in i) a === "values" && typeof i.values == "object" || (sg(a) || r === !0 && To(a) || !t && !To(a) || i.draggable && a.startsWith("onDrag")) && (o[a] = i[a]);
    return o
}

function Nx(i, t, r, o) {
    const a = se.useMemo(() => {
        const c = ng();
        return Zu(c, t, Ju(o), i.transformTemplate), {
            ...c.attrs,
            style: {
                ...c.style
            }
        }
    }, [t]);
    if (i.style) {
        const c = {};
        rg(c, i.style, i), a.style = {
            ...c,
            ...a.style
        }
    }
    return a
}

function Ix(i = !1) {
    return (r, o, a, {
        latestValues: c
    }, f) => {
        const p = (Yu(r) ? Nx : Ox)(o, c, f, r),
            m = Vx(o, typeof r == "string", i),
            y = r !== se.Fragment ? {
                ...m,
                ...p,
                ref: a
            } : {},
            {
                children: v
            } = o,
            w = se.useMemo(() => ot(v) ? v.get() : v, [v]);
        return se.createElement(r, {
            ...y,
            children: w
        })
    }
}

function Fx(i, t) {
    return function (o, {
        forwardMotionProps: a
    } = {
        forwardMotionProps: !1
    }) {
        const f = {
            ...Yu(o) ? Mx : Rx,
            preloadedFeatures: i,
            useRender: Ix(a),
            createVisualElement: t,
            Component: o
        };
        return dx(f)
    }
}
const vu = {
        current: null
    },
    og = {
        current: !1
    };

function jx() {
    if (og.current = !0, !!Gu)
        if (window.matchMedia) {
            const i = window.matchMedia("(prefers-reduced-motion)"),
                t = () => vu.current = i.matches;
            i.addListener(t), t()
        } else vu.current = !1
}

function bx(i, t, r) {
    for (const o in t) {
        const a = t[o],
            c = r[o];
        if (ot(a)) i.addValue(o, a);
        else if (ot(c)) i.addValue(o, Hr(a, {
            owner: i
        }));
        else if (c !== a)
            if (i.hasValue(o)) {
                const f = i.getValue(o);
                f.liveStyle === !0 ? f.jump(a) : f.hasAnimated || f.set(a)
            } else {
                const f = i.getStaticValue(o);
                i.addValue(o, Hr(f !== void 0 ? f : a, {
                    owner: i
                }))
            }
    }
    for (const o in r) t[o] === void 0 && i.removeValue(o);
    return t
}
const yp = new WeakMap,
    Bx = [...qp, st, Vn],
    Ux = i => Bx.find(Qp(i)),
    vp = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class $x {
    scrapeMotionValuesFromProps(t, r, o) {
        return {}
    }
    constructor({
        parent: t,
        props: r,
        presenceContext: o,
        reducedMotionConfig: a,
        blockInitialAnimation: c,
        visualState: f
    }, d = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = Ru, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const w = Qt.now();
            this.renderScheduledAt < w && (this.renderScheduledAt = w, Ee.render(this.render, !1, !0))
        };
        const {
            latestValues: p,
            renderState: m
        } = f;
        this.latestValues = p, this.baseTarget = {
            ...p
        }, this.initialValues = r.initial ? {
            ...p
        } : {}, this.renderState = m, this.parent = t, this.props = r, this.presenceContext = o, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = a, this.options = d, this.blockInitialAnimation = !!c, this.isControllingVariants = Oo(r), this.isVariantNode = Xm(r), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
        const {
            willChange: y,
            ...v
        } = this.scrapeMotionValuesFromProps(r, {}, this);
        for (const w in v) {
            const k = v[w];
            p[w] !== void 0 && ot(k) && k.set(p[w], !1)
        }
    }
    mount(t) {
        this.current = t, yp.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, o) => this.bindToMotionValue(o, r)), og.current || jx(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : vu.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        yp.delete(this.current), this.projection && this.projection.unmount(), zn(this.notifyUpdate), zn(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const t in this.events) this.events[t].clear();
        for (const t in this.features) {
            const r = this.features[t];
            r && (r.unmount(), r.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(t, r) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const o = ii.has(t),
            a = r.on("change", d => {
                this.latestValues[t] = d, this.props.onUpdate && Ee.preRender(this.notifyUpdate), o && this.projection && (this.projection.isTransformDirty = !0)
            }),
            c = r.on("renderRequest", this.scheduleRender);
        let f;
        window.MotionCheckAppearSync && (f = window.MotionCheckAppearSync(this, t, r)), this.valueSubscriptions.set(t, () => {
            a(), c(), f && f(), r.owner && r.stop()
        })
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in Bi) {
            const r = Bi[t];
            if (!r) continue;
            const {
                isEnabled: o,
                Feature: a
            } = r;
            if (!this.features[t] && a && o(this.props) && (this.features[t] = new a(this)), this.features[t]) {
                const c = this.features[t];
                c.isMounted ? c.update() : (c.mount(), c.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : je()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, r) {
        this.latestValues[t] = r
    }
    update(t, r) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
        for (let o = 0; o < vp.length; o++) {
            const a = vp[o];
            this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](), delete this.propEventSubscriptions[a]);
            const c = "on" + a,
                f = t[c];
            f && (this.propEventSubscriptions[a] = this.on(a, f))
        }
        this.prevMotionValues = bx(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const r = this.getClosestVariantNode();
        if (r) return r.variantChildren && r.variantChildren.add(t), () => r.variantChildren.delete(t)
    }
    addValue(t, r) {
        const o = this.values.get(t);
        r !== o && (o && this.removeValue(t), this.bindToMotionValue(t, r), this.values.set(t, r), this.latestValues[t] = r.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const r = this.valueSubscriptions.get(t);
        r && (r(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, r) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let o = this.values.get(t);
        return o === void 0 && r !== void 0 && (o = Hr(r === null ? void 0 : r, {
            owner: this
        }), this.addValue(t, o)), o
    }
    readValue(t, r) {
        var o;
        let a = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (o = this.getBaseTargetFromProps(this.props, t)) !== null && o !== void 0 ? o : this.readValueFromInstance(this.current, t, this.options);
        return a != null && (typeof a == "string" && (Kp(a) || Hp(a)) ? a = parseFloat(a) : !Ux(a) && Vn.test(r) && (a = sm(t, r)), this.setBaseTarget(t, ot(a) ? a.get() : a)), ot(a) ? a.get() : a
    }
    setBaseTarget(t, r) {
        this.baseTarget[t] = r
    }
    getBaseTarget(t) {
        var r;
        const {
            initial: o
        } = this.props;
        let a;
        if (typeof o == "string" || typeof o == "object") {
            const f = Pu(this.props, o, (r = this.presenceContext) === null || r === void 0 ? void 0 : r.custom);
            f && (a = f[t])
        }
        if (o && a !== void 0) return a;
        const c = this.getBaseTargetFromProps(this.props, t);
        return c !== void 0 && !ot(c) ? c : this.initialValues[t] !== void 0 && a === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, r) {
        return this.events[t] || (this.events[t] = new Uu), this.events[t].add(r)
    }
    notify(t, ...r) {
        this.events[t] && this.events[t].notify(...r)
    }
}
class lg extends $x {
    constructor() {
        super(...arguments), this.KeyframeResolver = om
    }
    sortInstanceNodePosition(t, r) {
        return t.compareDocumentPosition(r) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, r) {
        return t.style ? t.style[r] : void 0
    }
    removeValueFromRenderState(t, {
        vars: r,
        style: o
    }) {
        delete r[t], delete o[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: t
        } = this.props;
        ot(t) && (this.childSubscription = t.on("change", r => {
            this.current && (this.current.textContent = `${r}`)
        }))
    }
}

function Wx(i) {
    return window.getComputedStyle(i)
}
class Hx extends lg {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = Qm
    }
    readValueFromInstance(t, r) {
        if (ii.has(r)) {
            const o = Lu(r);
            return o && o.default || 0
        } else {
            const o = Wx(t),
                a = (Yp(r) ? o.getPropertyValue(r) : o[r]) || 0;
            return typeof a == "string" ? a.trim() : a
        }
    }
    measureInstanceViewportBox(t, {
        transformPagePoint: r
    }) {
        return Am(t, r)
    }
    build(t, r, o) {
        qu(t, r, o.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, r, o) {
        return Xu(t, r, o)
    }
}
class Kx extends lg {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = je
    }
    getBaseTargetFromProps(t, r) {
        return t[r]
    }
    readValueFromInstance(t, r) {
        if (ii.has(r)) {
            const o = Lu(r);
            return o && o.default || 0
        }
        return r = qm.has(r) ? r : $u(r), t.getAttribute(r)
    }
    scrapeMotionValuesFromProps(t, r, o) {
        return eg(t, r, o)
    }
    build(t, r, o) {
        Zu(t, r, this.isSVGTag, o.transformTemplate)
    }
    renderInstance(t, r, o, a) {
        Zm(t, r, o, a)
    }
    mount(t) {
        this.isSVGTag = Ju(t.tagName), super.mount(t)
    }
}
const Gx = (i, t) => Yu(i) ? new Kx(t) : new Hx(t, {
        allowProjection: i !== se.Fragment
    }),
    Yx = Fx({
        ...M1,
        ...ix,
        ...bw,
        ...rx
    }, Gx),
    Ar = Cv(Yx);
var yo = {
        exports: {}
    },
    Xx = yo.exports,
    wp;

function Qx() {
    return wp || (wp = 1, function (i, t) {
        (function (r, o) {
            i.exports = o()
        })(Xx, function () {
            return function (r) {
                var o = {};

                function a(c) {
                    if (o[c]) return o[c].exports;
                    var f = o[c] = {
                        i: c,
                        l: !1,
                        exports: {}
                    };
                    return r[c].call(f.exports, f, f.exports, a), f.l = !0, f.exports
                }
                return a.m = r, a.c = o, a.d = function (c, f, d) {
                    a.o(c, f) || Object.defineProperty(c, f, {
                        enumerable: !0,
                        get: d
                    })
                }, a.r = function (c) {
                    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(c, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(c, "__esModule", {
                        value: !0
                    })
                }, a.t = function (c, f) {
                    if (1 & f && (c = a(c)), 8 & f || 4 & f && typeof c == "object" && c && c.__esModule) return c;
                    var d = Object.create(null);
                    if (a.r(d), Object.defineProperty(d, "default", {
                            enumerable: !0,
                            value: c
                        }), 2 & f && typeof c != "string")
                        for (var p in c) a.d(d, p, (function (m) {
                            return c[m]
                        }).bind(null, p));
                    return d
                }, a.n = function (c) {
                    var f = c && c.__esModule ? function () {
                        return c.default
                    } : function () {
                        return c
                    };
                    return a.d(f, "a", f), f
                }, a.o = function (c, f) {
                    return Object.prototype.hasOwnProperty.call(c, f)
                }, a.p = "/", a(a.s = 2)
            }([function (r, o, a) {
                r.exports = a(3)
            }, function (r, o, a) {
                r.exports = a(5)()
            }, function (r, o, a) {
                Object.defineProperty(o, "__esModule", {
                    value: !0
                });
                var c = function () {
                        function w(k, T) {
                            for (var P = 0; P < T.length; P++) {
                                var D = T[P];
                                D.enumerable = D.enumerable || !1, D.configurable = !0, "value" in D && (D.writable = !0), Object.defineProperty(k, D.key, D)
                            }
                        }
                        return function (k, T, P) {
                            return T && w(k.prototype, T), P && w(k, P), k
                        }
                    }(),
                    f = a(0),
                    d = y(f),
                    p = y(a(1)),
                    m = y(a(7));

                function y(w) {
                    return w && w.__esModule ? w : {
                        default: w
                    }
                }
                var v = function (w) {
                    function k(T) {
                        (function (D, O) {
                            if (!(D instanceof O)) throw new TypeError("Cannot call a class as a function")
                        })(this, k);
                        var P = function (D, O) {
                            if (!D) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !O || typeof O != "object" && typeof O != "function" ? D : O
                        }(this, (k.__proto__ || Object.getPrototypeOf(k)).call(this, T));
                        return P.state = {
                            index: 0,
                            displayText: ""
                        }, P.getRawText = P.getRawText.bind(P), P.type = P.type.bind(P), P.erase = P.erase.bind(P), P.startTyping = P.startTyping.bind(P), P
                    }
                    return function (T, P) {
                        if (typeof P != "function" && P !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof P);
                        T.prototype = Object.create(P && P.prototype, {
                            constructor: {
                                value: T,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), P && (Object.setPrototypeOf ? Object.setPrototypeOf(T, P) : T.__proto__ = P)
                    }(k, f.Component), c(k, [{
                        key: "componentDidMount",
                        value: function () {
                            this.startTyping()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function () {
                            this._timeout && clearTimeout(this._timeout)
                        }
                    }, {
                        key: "startTyping",
                        value: function () {
                            var T = this;
                            this._timeout = setTimeout(function () {
                                T.type()
                            }, this.props.typingDelay)
                        }
                    }, {
                        key: "getRawText",
                        value: function () {
                            var T = this.props.text;
                            return typeof T == "string" ? [T] : [].concat(function (P) {
                                if (Array.isArray(P)) {
                                    for (var D = 0, O = Array(P.length); D < P.length; D++) O[D] = P[D];
                                    return O
                                }
                                return Array.from(P)
                            }(T))
                        }
                    }, {
                        key: "type",
                        value: function () {
                            var T = this,
                                P = this.state,
                                D = P.index,
                                O = P.displayText,
                                j = this.getRawText()[D];
                            j.length > O.length ? (O = j.substr(0, O.length + 1), this.setState({
                                displayText: O
                            }, function () {
                                T._timeout = setTimeout(function () {
                                    T.type()
                                }, T.props.speed)
                            })) : this._timeout = setTimeout(function () {
                                T.erase()
                            }, this.props.eraseDelay)
                        }
                    }, {
                        key: "erase",
                        value: function () {
                            var T = this,
                                P = this.state,
                                D = P.index,
                                O = P.displayText;
                            O.length === 0 ? (D = D + 1 === this.getRawText().length ? 0 : D + 1, this.setState({
                                index: D
                            }, function () {
                                T.startTyping()
                            })) : (O = O.substr(-O.length, O.length - 1), this.setState({
                                displayText: O
                            }, function () {
                                T._timeout = setTimeout(function () {
                                    T.erase()
                                }, T.props.eraseSpeed)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var T = this.props,
                                P = (T.speed, T.eraseSpeed, T.typingDelay, T.eraseDelay, T.staticText),
                                D = (T.text, T.cursor),
                                O = T.displayTextRenderer,
                                j = T.cursorClassName,
                                F = T.cursorRenderer,
                                J = function (q, ve) {
                                    var we = {};
                                    for (var Le in q) ve.indexOf(Le) >= 0 || Object.prototype.hasOwnProperty.call(q, Le) && (we[Le] = q[Le]);
                                    return we
                                }(T, ["speed", "eraseSpeed", "typingDelay", "eraseDelay", "staticText", "text", "cursor", "displayTextRenderer", "cursorClassName", "cursorRenderer"]),
                                G = this.state,
                                ee = G.displayText,
                                de = G.index;
                            return d.default.createElement("span", J, P ? d.default.createElement("span", null, P, " ") : null, d.default.createElement("div", {
                                style: {
                                    display: "inline-block"
                                }
                            }, O ? O(ee, de) : ee), d.default.createElement(m.default, {
                                cursor: D,
                                cursorRenderer: F,
                                className: j
                            }))
                        }
                    }]), k
                }();
                o.default = v, v.defaultProps = {
                    speed: 200,
                    eraseSpeed: 200,
                    eraseDelay: 5e3,
                    typingDelay: 2500
                }, v.propTypes = {
                    speed: p.default.number.isRequired,
                    eraseSpeed: p.default.number.isRequired,
                    typingDelay: p.default.number.isRequired,
                    eraseDelay: p.default.number.isRequired,
                    staticText: p.default.string,
                    text: p.default.oneOfType([p.default.arrayOf(p.default.string), p.default.string]).isRequired,
                    cursor: p.default.string,
                    cursorClassName: p.default.string,
                    displayTextRenderer: p.default.func,
                    cursorRenderer: p.default.func
                }
            }, function (r, o, a) {
                /** @license React v16.13.1
                 * react.production.min.js
                 *
                 * Copyright (c) Facebook, Inc. and its affiliates.
                 *
                 * This source code is licensed under the MIT license found in the
                 * LICENSE file in the root directory of this source tree.
                 */
                var c = a(4),
                    f = typeof Symbol == "function" && Symbol.for,
                    d = f ? Symbol.for("react.element") : 60103,
                    p = f ? Symbol.for("react.portal") : 60106,
                    m = f ? Symbol.for("react.fragment") : 60107,
                    y = f ? Symbol.for("react.strict_mode") : 60108,
                    v = f ? Symbol.for("react.profiler") : 60114,
                    w = f ? Symbol.for("react.provider") : 60109,
                    k = f ? Symbol.for("react.context") : 60110,
                    T = f ? Symbol.for("react.forward_ref") : 60112,
                    P = f ? Symbol.for("react.suspense") : 60113,
                    D = f ? Symbol.for("react.memo") : 60115,
                    O = f ? Symbol.for("react.lazy") : 60116,
                    j = typeof Symbol == "function" && Symbol.iterator;

                function F(R) {
                    for (var L = "https://reactjs.org/docs/error-decoder.html?invariant=" + R, Q = 1; Q < arguments.length; Q++) L += "&args[]=" + encodeURIComponent(arguments[Q]);
                    return "Minified React error #" + R + "; visit " + L + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var J = {
                        isMounted: function () {
                            return !1
                        },
                        enqueueForceUpdate: function () {},
                        enqueueReplaceState: function () {},
                        enqueueSetState: function () {}
                    },
                    G = {};

                function ee(R, L, Q) {
                    this.props = R, this.context = L, this.refs = G, this.updater = Q || J
                }

                function de() {}

                function q(R, L, Q) {
                    this.props = R, this.context = L, this.refs = G, this.updater = Q || J
                }
                ee.prototype.isReactComponent = {}, ee.prototype.setState = function (R, L) {
                    if (typeof R != "object" && typeof R != "function" && R != null) throw Error(F(85));
                    this.updater.enqueueSetState(this, R, L, "setState")
                }, ee.prototype.forceUpdate = function (R) {
                    this.updater.enqueueForceUpdate(this, R, "forceUpdate")
                }, de.prototype = ee.prototype;
                var ve = q.prototype = new de;
                ve.constructor = q, c(ve, ee.prototype), ve.isPureReactComponent = !0;
                var we = {
                        current: null
                    },
                    Le = Object.prototype.hasOwnProperty,
                    et = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function Ke(R, L, Q) {
                    var le, oe = {},
                        Pe = null,
                        $e = null;
                    if (L != null)
                        for (le in L.ref !== void 0 && ($e = L.ref), L.key !== void 0 && (Pe = "" + L.key), L) Le.call(L, le) && !et.hasOwnProperty(le) && (oe[le] = L[le]);
                    var Be = arguments.length - 2;
                    if (Be === 1) oe.children = Q;
                    else if (1 < Be) {
                        for (var Se = Array(Be), Ne = 0; Ne < Be; Ne++) Se[Ne] = arguments[Ne + 2];
                        oe.children = Se
                    }
                    if (R && R.defaultProps)
                        for (le in Be = R.defaultProps) oe[le] === void 0 && (oe[le] = Be[le]);
                    return {
                        $$typeof: d,
                        type: R,
                        key: Pe,
                        ref: $e,
                        props: oe,
                        _owner: we.current
                    }
                }

                function Ge(R) {
                    return typeof R == "object" && R !== null && R.$$typeof === d
                }
                var ct = /\/+/g,
                    be = [];

                function ce(R, L, Q, le) {
                    if (be.length) {
                        var oe = be.pop();
                        return oe.result = R, oe.keyPrefix = L, oe.func = Q, oe.context = le, oe.count = 0, oe
                    }
                    return {
                        result: R,
                        keyPrefix: L,
                        func: Q,
                        context: le,
                        count: 0
                    }
                }

                function B(R) {
                    R.result = null, R.keyPrefix = null, R.func = null, R.context = null, R.count = 0, 10 > be.length && be.push(R)
                }

                function Z(R, L, Q) {
                    return R == null ? 0 : function le(oe, Pe, $e, Be) {
                        var Se = typeof oe;
                        Se !== "undefined" && Se !== "boolean" || (oe = null);
                        var Ne = !1;
                        if (oe === null) Ne = !0;
                        else switch (Se) {
                        case "string":
                        case "number":
                            Ne = !0;
                            break;
                        case "object":
                            switch (oe.$$typeof) {
                            case d:
                            case p:
                                Ne = !0
                            }
                        }
                        if (Ne) return $e(Be, oe, Pe === "" ? "." + U(oe, 0) : Pe), 1;
                        if (Ne = 0, Pe = Pe === "" ? "." : Pe + ":", Array.isArray(oe))
                            for (var Ut = 0; Ut < oe.length; Ut++) {
                                var $t = Pe + U(Se = oe[Ut], Ut);
                                Ne += le(Se, $t, $e, Be)
                            } else if ($t = oe === null || typeof oe != "object" ? null : typeof ($t = j && oe[j] || oe["@@iterator"]) == "function" ? $t : null, typeof $t == "function")
                                for (oe = $t.call(oe), Ut = 0; !(Se = oe.next()).done;) Ne += le(Se = Se.value, $t = Pe + U(Se, Ut++), $e, Be);
                            else if (Se === "object") throw $e = "" + oe, Error(F(31, $e === "[object Object]" ? "object with keys {" + Object.keys(oe).join(", ") + "}" : $e, ""));
                        return Ne
                    }(R, "", L, Q)
                }

                function U(R, L) {
                    return typeof R == "object" && R !== null && R.key != null ? function (Q) {
                        var le = {
                            "=": "=0",
                            ":": "=2"
                        };
                        return "$" + ("" + Q).replace(/[=:]/g, function (oe) {
                            return le[oe]
                        })
                    }(R.key) : L.toString(36)
                }

                function C(R, L) {
                    R.func.call(R.context, L, R.count++)
                }

                function z(R, L, Q) {
                    var le = R.result,
                        oe = R.keyPrefix;
                    R = R.func.call(R.context, L, R.count++), Array.isArray(R) ? ae(R, le, Q, function (Pe) {
                        return Pe
                    }) : R != null && (Ge(R) && (R = function (Pe, $e) {
                        return {
                            $$typeof: d,
                            type: Pe.type,
                            key: $e,
                            ref: Pe.ref,
                            props: Pe.props,
                            _owner: Pe._owner
                        }
                    }(R, oe + (!R.key || L && L.key === R.key ? "" : ("" + R.key).replace(ct, "$&/") + "/") + Q)), le.push(R))
                }

                function ae(R, L, Q, le, oe) {
                    var Pe = "";
                    Q != null && (Pe = ("" + Q).replace(ct, "$&/") + "/"), Z(R, z, L = ce(L, Pe, le, oe)), B(L)
                }
                var fe = {
                    current: null
                };

                function ue() {
                    var R = fe.current;
                    if (R === null) throw Error(F(321));
                    return R
                }
                var pe = {
                    ReactCurrentDispatcher: fe,
                    ReactCurrentBatchConfig: {
                        suspense: null
                    },
                    ReactCurrentOwner: we,
                    IsSomeRendererActing: {
                        current: !1
                    },
                    assign: c
                };
                o.Children = {
                    map: function (R, L, Q) {
                        if (R == null) return R;
                        var le = [];
                        return ae(R, le, null, L, Q), le
                    },
                    forEach: function (R, L, Q) {
                        if (R == null) return R;
                        Z(R, C, L = ce(null, null, L, Q)), B(L)
                    },
                    count: function (R) {
                        return Z(R, function () {
                            return null
                        }, null)
                    },
                    toArray: function (R) {
                        var L = [];
                        return ae(R, L, null, function (Q) {
                            return Q
                        }), L
                    },
                    only: function (R) {
                        if (!Ge(R)) throw Error(F(143));
                        return R
                    }
                }, o.Component = ee, o.Fragment = m, o.Profiler = v, o.PureComponent = q, o.StrictMode = y, o.Suspense = P, o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pe, o.cloneElement = function (R, L, Q) {
                    if (R == null) throw Error(F(267, R));
                    var le = c({}, R.props),
                        oe = R.key,
                        Pe = R.ref,
                        $e = R._owner;
                    if (L != null) {
                        if (L.ref !== void 0 && (Pe = L.ref, $e = we.current), L.key !== void 0 && (oe = "" + L.key), R.type && R.type.defaultProps) var Be = R.type.defaultProps;
                        for (Se in L) Le.call(L, Se) && !et.hasOwnProperty(Se) && (le[Se] = L[Se] === void 0 && Be !== void 0 ? Be[Se] : L[Se])
                    }
                    var Se = arguments.length - 2;
                    if (Se === 1) le.children = Q;
                    else if (1 < Se) {
                        Be = Array(Se);
                        for (var Ne = 0; Ne < Se; Ne++) Be[Ne] = arguments[Ne + 2];
                        le.children = Be
                    }
                    return {
                        $$typeof: d,
                        type: R.type,
                        key: oe,
                        ref: Pe,
                        props: le,
                        _owner: $e
                    }
                }, o.createContext = function (R, L) {
                    return L === void 0 && (L = null), (R = {
                        $$typeof: k,
                        _calculateChangedBits: L,
                        _currentValue: R,
                        _currentValue2: R,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null
                    }).Provider = {
                        $$typeof: w,
                        _context: R
                    }, R.Consumer = R
                }, o.createElement = Ke, o.createFactory = function (R) {
                    var L = Ke.bind(null, R);
                    return L.type = R, L
                }, o.createRef = function () {
                    return {
                        current: null
                    }
                }, o.forwardRef = function (R) {
                    return {
                        $$typeof: T,
                        render: R
                    }
                }, o.isValidElement = Ge, o.lazy = function (R) {
                    return {
                        $$typeof: O,
                        _ctor: R,
                        _status: -1,
                        _result: null
                    }
                }, o.memo = function (R, L) {
                    return {
                        $$typeof: D,
                        type: R,
                        compare: L === void 0 ? null : L
                    }
                }, o.useCallback = function (R, L) {
                    return ue().useCallback(R, L)
                }, o.useContext = function (R, L) {
                    return ue().useContext(R, L)
                }, o.useDebugValue = function () {}, o.useEffect = function (R, L) {
                    return ue().useEffect(R, L)
                }, o.useImperativeHandle = function (R, L, Q) {
                    return ue().useImperativeHandle(R, L, Q)
                }, o.useLayoutEffect = function (R, L) {
                    return ue().useLayoutEffect(R, L)
                }, o.useMemo = function (R, L) {
                    return ue().useMemo(R, L)
                }, o.useReducer = function (R, L, Q) {
                    return ue().useReducer(R, L, Q)
                }, o.useRef = function (R) {
                    return ue().useRef(R)
                }, o.useState = function (R) {
                    return ue().useState(R)
                }, o.version = "16.13.1"
            }, function (r, o, a) {
                /*
                object-assign
                (c) Sindre Sorhus
                @license MIT
                */
                var c = Object.getOwnPropertySymbols,
                    f = Object.prototype.hasOwnProperty,
                    d = Object.prototype.propertyIsEnumerable;
                r.exports = function () {
                    try {
                        if (!Object.assign) return !1;
                        var p = new String("abc");
                        if (p[5] = "de", Object.getOwnPropertyNames(p)[0] === "5") return !1;
                        for (var m = {}, y = 0; y < 10; y++) m["_" + String.fromCharCode(y)] = y;
                        if (Object.getOwnPropertyNames(m).map(function (w) {
                                return m[w]
                            }).join("") !== "0123456789") return !1;
                        var v = {};
                        return "abcdefghijklmnopqrst".split("").forEach(function (w) {
                            v[w] = w
                        }), Object.keys(Object.assign({}, v)).join("") === "abcdefghijklmnopqrst"
                    } catch {
                        return !1
                    }
                }() ? Object.assign : function (p, m) {
                    for (var y, v, w = function (D) {
                            if (D == null) throw new TypeError("Object.assign cannot be called with null or undefined");
                            return Object(D)
                        }(p), k = 1; k < arguments.length; k++) {
                        for (var T in y = Object(arguments[k])) f.call(y, T) && (w[T] = y[T]);
                        if (c) {
                            v = c(y);
                            for (var P = 0; P < v.length; P++) d.call(y, v[P]) && (w[v[P]] = y[v[P]])
                        }
                    }
                    return w
                }
            }, function (r, o, a) {
                var c = a(6);

                function f() {}
                r.exports = function () {
                    function d(y, v, w, k, T, P) {
                        if (P !== c) {
                            var D = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw D.name = "Invariant Violation", D
                        }
                    }

                    function p() {
                        return d
                    }
                    d.isRequired = d;
                    var m = {
                        array: d,
                        bool: d,
                        func: d,
                        number: d,
                        object: d,
                        string: d,
                        symbol: d,
                        any: d,
                        arrayOf: p,
                        element: d,
                        instanceOf: p,
                        node: d,
                        objectOf: p,
                        oneOf: p,
                        oneOfType: p,
                        shape: p,
                        exact: p
                    };
                    return m.checkPropTypes = f, m.PropTypes = m, m
                }
            }, function (r, o, a) {
                r.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
            }, function (r, o, a) {
                Object.defineProperty(o, "__esModule", {
                    value: !0
                });
                var c = function () {
                        function w(k, T) {
                            for (var P = 0; P < T.length; P++) {
                                var D = T[P];
                                D.enumerable = D.enumerable || !1, D.configurable = !0, "value" in D && (D.writable = !0), Object.defineProperty(k, D.key, D)
                            }
                        }
                        return function (k, T, P) {
                            return T && w(k.prototype, T), P && w(k, P), k
                        }
                    }(),
                    f = a(0),
                    d = m(f),
                    p = m(a(1));

                function m(w) {
                    return w && w.__esModule ? w : {
                        default: w
                    }
                }
                var y = function (w) {
                    function k(T) {
                        (function (D, O) {
                            if (!(D instanceof O)) throw new TypeError("Cannot call a class as a function")
                        })(this, k);
                        var P = function (D, O) {
                            if (!D) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !O || typeof O != "object" && typeof O != "function" ? D : O
                        }(this, (k.__proto__ || Object.getPrototypeOf(k)).call(this, T));
                        return P.state = {
                            display: !0
                        }, P.animateCursor = P.animateCursor.bind(P), P
                    }
                    return function (T, P) {
                        if (typeof P != "function" && P !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof P);
                        T.prototype = Object.create(P && P.prototype, {
                            constructor: {
                                value: T,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), P && (Object.setPrototypeOf ? Object.setPrototypeOf(T, P) : T.__proto__ = P)
                    }(k, f.Component), c(k, [{
                        key: "componentDidMount",
                        value: function () {
                            this.animateCursor()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function () {
                            this._interval && clearInterval(this._interval)
                        }
                    }, {
                        key: "animateCursor",
                        value: function () {
                            var T = this;
                            this._interval = setInterval(function () {
                                T.setState({
                                    display: !T.state.display
                                })
                            }, 500)
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var T = this.props,
                                P = T.className,
                                D = T.cursor,
                                O = T.cursorRenderer,
                                j = this.state.display,
                                F = D || "|";
                            return d.default.createElement("span", {
                                className: P,
                                style: v(j)
                            }, O ? O(F) : F)
                        }
                    }]), k
                }();
                o.default = y;
                var v = function () {
                    return {
                        display: "inline-block",
                        MsTransition: "opacity 0.5s",
                        WebkitTransition: "opacity 0.5s",
                        MozTransition: "opacity 0.5s",
                        transition: "opacity 0.5s",
                        opacity: !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0] ? 1 : 0
                    }
                };
                y.propTypes = {
                    cursor: p.default.string,
                    className: p.default.string,
                    cursorRenderer: p.default.func
                }
            }])
        })
    }(yo)), yo.exports
}
var qx = Qx();
const Zx = zp(qx),
    br = "generated",
    Jx = "pointerdown",
    eS = "pointerup",
    xp = "pointerleave",
    tS = "pointerout",
    Sp = "pointermove",
    nS = "touchstart",
    Pp = "touchend",
    iS = "touchmove",
    rS = "touchcancel",
    sS = "resize",
    oS = "visibilitychange",
    ti = "tsParticles - Error";
class St {
    constructor(t, r, o) {
        if (this._updateFromAngle = (a, c) => {
                this.x = Math.cos(a) * c, this.y = Math.sin(a) * c
            }, !Bt(t) && t) {
            this.x = t.x, this.y = t.y;
            const a = t;
            this.z = a.z ? a.z : 0
        } else if (t !== void 0 && r !== void 0) this.x = t, this.y = r, this.z = o ?? 0;
        else throw new Error(`${ti} Vector3d not initialized correctly`)
    }
    static get origin() {
        return St.create(0, 0, 0)
    }
    get angle() {
        return Math.atan2(this.y, this.x)
    }
    set angle(t) {
        this._updateFromAngle(t, this.length)
    }
    get length() {
        return Math.sqrt(this.getLengthSq())
    }
    set length(t) {
        this._updateFromAngle(this.angle, t)
    }
    static clone(t) {
        return St.create(t.x, t.y, t.z)
    }
    static create(t, r, o) {
        return new St(t, r, o)
    }
    add(t) {
        return St.create(this.x + t.x, this.y + t.y, this.z + t.z)
    }
    addTo(t) {
        this.x += t.x, this.y += t.y, this.z += t.z
    }
    copy() {
        return St.clone(this)
    }
    distanceTo(t) {
        return this.sub(t).length
    }
    distanceToSq(t) {
        return this.sub(t).getLengthSq()
    }
    div(t) {
        return St.create(this.x / t, this.y / t, this.z / t)
    }
    divTo(t) {
        this.x /= t, this.y /= t, this.z /= t
    }
    getLengthSq() {
        return this.x ** 2 + this.y ** 2
    }
    mult(t) {
        return St.create(this.x * t, this.y * t, this.z * t)
    }
    multTo(t) {
        this.x *= t, this.y *= t, this.z *= t
    }
    normalize() {
        const t = this.length;
        t != 0 && this.multTo(1 / t)
    }
    rotate(t) {
        return St.create(this.x * Math.cos(t) - this.y * Math.sin(t), this.x * Math.sin(t) + this.y * Math.cos(t), 0)
    }
    setTo(t) {
        this.x = t.x, this.y = t.y;
        const r = t;
        this.z = r.z ? r.z : 0
    }
    sub(t) {
        return St.create(this.x - t.x, this.y - t.y, this.z - t.z)
    }
    subFrom(t) {
        this.x -= t.x, this.y -= t.y, this.z -= t.z
    }
}
class Ni extends St {
    constructor(t, r) {
        super(t, r, 0)
    }
    static get origin() {
        return Ni.create(0, 0)
    }
    static clone(t) {
        return Ni.create(t.x, t.y)
    }
    static create(t, r) {
        return new Ni(t, r)
    }
}
let lS = Math.random;

function hn() {
    return ag(lS(), 0, 1 - 1e-16)
}

function ag(i, t, r) {
    return Math.min(Math.max(i, t), r)
}

function Ii(i) {
    const t = tc(i);
    let r = ec(i);
    return t === r && (r = 0), hn() * (t - r) + r
}

function ke(i) {
    return Bt(i) ? i : Ii(i)
}

function ec(i) {
    return Bt(i) ? i : i.min
}

function tc(i) {
    return Bt(i) ? i : i.max
}

function ye(i, t) {
    if (i === t || t === void 0 && Bt(i)) return i;
    const r = ec(i),
        o = tc(i);
    return t !== void 0 ? {
        min: Math.min(r, t),
        max: Math.max(o, t)
    } : ye(r, o)
}

function aS(i) {
    const t = i.random,
        {
            enable: r,
            minimumValue: o
        } = Ln(t) ? {
            enable: t,
            minimumValue: 0
        } : t;
    return ke(r ? ye(i.value, o) : i.value)
}

function uS(i, t) {
    const r = i.x - t.x,
        o = i.y - t.y;
    return {
        dx: r,
        dy: o,
        distance: Math.sqrt(r ** 2 + o ** 2)
    }
}

function nc(i, t) {
    return uS(i, t).distance
}

function cS(i, t, r) {
    if (Bt(i)) return i * Math.PI / 180;
    switch (i) {
    case "top":
        return -Math.PI / 2;
    case "top-right":
        return -Math.PI / 4;
    case "right":
        return 0;
    case "bottom-right":
        return Math.PI / 4;
    case "bottom":
        return Math.PI / 2;
    case "bottom-left":
        return 3 * Math.PI / 4;
    case "left":
        return Math.PI;
    case "top-left":
        return -3 * Math.PI / 4;
    case "inside":
        return Math.atan2(r.y - t.y, r.x - t.x);
    case "outside":
        return Math.atan2(t.y - r.y, t.x - r.x);
    default:
        return hn() * Math.PI * 2
    }
}

function fS(i) {
    const t = Ni.origin;
    return t.length = 1, t.angle = i, t
}

function hS(i) {
    var t, r;
    return {
        x: ((t = i.position) == null ? void 0 : t.x) ?? hn() * i.size.width,
        y: ((r = i.position) == null ? void 0 : r.y) ?? hn() * i.size.height
    }
}

function ug(i) {
    return i ? i.endsWith("%") ? parseFloat(i) / 100 : parseFloat(i) : 1
}
const dS = {
    debug: console.debug,
    error: console.error,
    info: console.info,
    log: console.log,
    verbose: console.log,
    warning: console.warn
};

function Gr() {
    return dS
}

function Lo() {
    return typeof window > "u" || !window || typeof window.document > "u" || !window.document
}

function pS() {
    return !Lo() && typeof matchMedia < "u"
}

function cg(i) {
    if (pS()) return matchMedia(i)
}

function mS(i) {
    if (!(Lo() || typeof MutationObserver > "u")) return new MutationObserver(i)
}

function gS(i, t) {
    return i === t || Zt(t) && t.indexOf(i) > -1
}

function yS(i) {
    return Math.floor(hn() * i.length)
}

function ic(i, t, r = !0) {
    return i[t !== void 0 && r ? t % i.length : yS(i)]
}

function lt(i, ...t) {
    for (const r of t) {
        if (r == null) continue;
        if (!Vr(r)) {
            i = r;
            continue
        }
        const o = Array.isArray(r);
        o && (Vr(i) || !i || !Array.isArray(i)) ? i = [] : !o && (Vr(i) || !i || Array.isArray(i)) && (i = {});
        for (const a in r) {
            if (a === "__proto__") continue;
            const c = r,
                f = c[a],
                d = i;
            d[a] = Vr(f) && Array.isArray(f) ? f.map(p => lt(d[a], p)) : lt(d[a], f)
        }
    }
    return i
}

function ni(i, t) {
    return Zt(i) ? i.map((r, o) => t(r, o)) : t(i, 0)
}

function Br(i, t, r) {
    return Zt(i) ? ic(i, t, r) : i
}

function vS(i, t) {
    const r = i.value,
        o = i.animation,
        a = {
            delayTime: ke(o.delay) * 1e3,
            enable: o.enable,
            value: ke(i.value) * t,
            max: tc(r) * t,
            min: ec(r) * t,
            loops: 0,
            maxLoops: ke(o.count),
            time: 0
        };
    if (o.enable) {
        switch (a.decay = 1 - ke(o.decay), o.mode) {
        case "increase":
            a.status = "increasing";
            break;
        case "decrease":
            a.status = "decreasing";
            break;
        case "random":
            a.status = hn() >= .5 ? "increasing" : "decreasing";
            break
        }
        const c = o.mode === "auto";
        switch (o.startValue) {
        case "min":
            a.value = a.min, c && (a.status = "increasing");
            break;
        case "max":
            a.value = a.max, c && (a.status = "decreasing");
            break;
        case "random":
        default:
            a.value = Ii(a), c && (a.status = hn() >= .5 ? "increasing" : "decreasing");
            break
        }
    }
    return a.initialValue = a.value, a
}

function wS(i, t) {
    if (!(i.mode === "percent")) {
        const {
            mode: a,
            ...c
        } = i;
        return c
    }
    return "x" in i ? {
        x: i.x / 100 * t.width,
        y: i.y / 100 * t.height
    } : {
        width: i.width / 100 * t.width,
        height: i.height / 100 * t.height
    }
}

function fg(i, t) {
    return wS(i, t)
}

function Ln(i) {
    return typeof i == "boolean"
}

function qt(i) {
    return typeof i == "string"
}

function Bt(i) {
    return typeof i == "number"
}

function hg(i) {
    return typeof i == "function"
}

function Vr(i) {
    return typeof i == "object" && i !== null
}

function Zt(i) {
    return Array.isArray(i)
}
const xS = "random",
    zo = new Map;

function _p(i) {
    zo.set(i.key, i)
}

function Ka(i, t, r) {
    return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? i + (t - i) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? i + (t - i) * (2 / 3 - r) * 6 : i
}

function SS(i) {
    for (const [, c] of zo)
        if (i.startsWith(c.stringPrefix)) return c.parseString(i);
    const t = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
        r = i.replace(t, (c, f, d, p, m) => f + f + d + d + p + p + (m !== void 0 ? m + m : "")),
        o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,
        a = o.exec(r);
    return a ? {
        a: a[4] !== void 0 ? parseInt(a[4], 16) / 255 : 1,
        b: parseInt(a[3], 16),
        g: parseInt(a[2], 16),
        r: parseInt(a[1], 16)
    } : void 0
}

function Fi(i, t, r = !0) {
    if (!i) return;
    const o = qt(i) ? {
        value: i
    } : i;
    if (qt(o.value)) return dg(o.value, t, r);
    if (Zt(o.value)) return Fi({
        value: ic(o.value, t, r)
    });
    for (const [, a] of zo) {
        const c = a.handleRangeColor(o);
        if (c) return c
    }
}

function dg(i, t, r = !0) {
    if (!i) return;
    const o = qt(i) ? {
        value: i
    } : i;
    if (qt(o.value)) return o.value === xS ? TS() : _S(o.value);
    if (Zt(o.value)) return dg({
        value: ic(o.value, t, r)
    });
    for (const [, a] of zo) {
        const c = a.handleColor(o);
        if (c) return c
    }
}

function kp(i, t, r = !0) {
    const o = Fi(i, t, r);
    return o ? PS(o) : void 0
}

function PS(i) {
    const t = i.r / 255,
        r = i.g / 255,
        o = i.b / 255,
        a = Math.max(t, r, o),
        c = Math.min(t, r, o),
        f = {
            h: 0,
            l: (a + c) / 2,
            s: 0
        };
    return a !== c && (f.s = f.l < .5 ? (a - c) / (a + c) : (a - c) / (2 - a - c), f.h = t === a ? (r - o) / (a - c) : f.h = r === a ? 2 + (o - t) / (a - c) : 4 + (t - r) / (a - c)), f.l *= 100, f.s *= 100, f.h *= 60, f.h < 0 && (f.h += 360), f.h >= 360 && (f.h -= 360), f
}

function _S(i) {
    return SS(i)
}

function wu(i) {
    const t = {
            b: 0,
            g: 0,
            r: 0
        },
        r = {
            h: i.h / 360,
            l: i.l / 100,
            s: i.s / 100
        };
    if (!r.s) t.r = t.g = t.b = r.l;
    else {
        const o = r.l < .5 ? r.l * (1 + r.s) : r.l + r.s - r.l * r.s,
            a = 2 * r.l - o;
        t.r = Ka(a, o, r.h + 1 / 3), t.g = Ka(a, o, r.h), t.b = Ka(a, o, r.h - 1 / 3)
    }
    return t.r = Math.floor(t.r * 255), t.g = Math.floor(t.g * 255), t.b = Math.floor(t.b * 255), t
}

function kS(i) {
    const t = wu(i);
    return {
        a: i.a,
        b: t.b,
        g: t.g,
        r: t.r
    }
}

function TS(i) {
    return {
        b: Math.floor(Ii(ye(0, 256))),
        g: Math.floor(Ii(ye(0, 256))),
        r: Math.floor(Ii(ye(0, 256)))
    }
}

function vo(i, t) {
    return `rgba(${i.r}, ${i.g}, ${i.b}, ${t??1})`
}

function Tp(i, t) {
    return `hsla(${i.h}, ${i.s}%, ${i.l}%, ${t??1})`
}

function Cp(i) {
    return i !== void 0 ? {
        h: i.h.value,
        s: i.s.value,
        l: i.l.value
    } : void 0
}

function CS(i, t, r) {
    i.fillStyle = r ?? "rgba(0,0,0,0)", i.fillRect(0, 0, t.width, t.height)
}

function ES(i, t, r, o) {
    r && (i.globalAlpha = o, i.drawImage(r, 0, 0, t.width, t.height), i.globalAlpha = 1)
}

function Ga(i, t) {
    i.clearRect(0, 0, t.width, t.height)
}

function MS(i) {
    const {
        container: t,
        context: r,
        particle: o,
        delta: a,
        colorStyles: c,
        backgroundMask: f,
        composite: d,
        radius: p,
        opacity: m,
        shadow: y,
        transform: v
    } = i, w = o.getPosition(), k = o.rotation + (o.pathRotation ? o.velocity.angle : 0), T = {
        sin: Math.sin(k),
        cos: Math.cos(k)
    }, P = {
        a: T.cos * (v.a ?? 1),
        b: T.sin * (v.b ?? 1),
        c: -T.sin * (v.c ?? 1),
        d: T.cos * (v.d ?? 1)
    };
    r.setTransform(P.a, P.b, P.c, P.d, w.x, w.y), r.beginPath(), f && (r.globalCompositeOperation = d);
    const D = o.shadowColor;
    y.enable && D && (r.shadowBlur = y.blur, r.shadowColor = vo(D), r.shadowOffsetX = y.offset.x, r.shadowOffsetY = y.offset.y), c.fill && (r.fillStyle = c.fill);
    const O = o.strokeWidth ?? 0;
    r.lineWidth = O, c.stroke && (r.strokeStyle = c.stroke), RS(t, r, o, p, m, a), O > 0 && r.stroke(), o.close && r.closePath(), o.fill && r.fill(), DS(t, r, o, p, m, a), r.globalCompositeOperation = "source-over", r.setTransform(1, 0, 0, 1, 0, 0)
}

function RS(i, t, r, o, a, c) {
    if (!r.shape) return;
    const f = i.drawers.get(r.shape);
    f && f.draw(t, r, o, a, c, i.retina.pixelRatio)
}

function DS(i, t, r, o, a, c) {
    if (!r.shape) return;
    const f = i.drawers.get(r.shape);
    !f || !f.afterEffect || f.afterEffect(t, r, o, a, c, i.retina.pixelRatio)
}

function AS(i, t, r) {
    t.draw && t.draw(i, r)
}

function OS(i, t, r, o) {
    t.drawParticle && t.drawParticle(i, r, o)
}

function LS(i, t, r) {
    return {
        h: i.h,
        s: i.s,
        l: i.l + (t === "darken" ? -1 : 1) * r
    }
}

function zS(i, t, r) {
    const o = t[r];
    o !== void 0 && (i[r] = (i[r] ?? 1) * o)
}
class VS {
    constructor(t) {
        this.container = t, this._applyPostDrawUpdaters = r => {
            for (const o of this._postDrawUpdaters) o.afterDraw && o.afterDraw(r)
        }, this._applyPreDrawUpdaters = (r, o, a, c, f, d) => {
            for (const p of this._preDrawUpdaters) {
                if (p.getColorStyles) {
                    const {
                        fill: m,
                        stroke: y
                    } = p.getColorStyles(o, r, a, c);
                    m && (f.fill = m), y && (f.stroke = y)
                }
                if (p.getTransformValues) {
                    const m = p.getTransformValues(o);
                    for (const y in m) zS(d, m, y)
                }
                p.beforeDraw && p.beforeDraw(o)
            }
        }, this._applyResizePlugins = () => {
            for (const r of this._resizePlugins) r.resize && r.resize()
        }, this._getPluginParticleColors = r => {
            let o, a;
            for (const c of this._colorPlugins)
                if (!o && c.particleFillColor && (o = kp(c.particleFillColor(r))), !a && c.particleStrokeColor && (a = kp(c.particleStrokeColor(r))), o && a) break;
            return [o, a]
        }, this._initCover = () => {
            const r = this.container.actualOptions,
                o = r.backgroundMask.cover,
                a = o.color,
                c = Fi(a);
            if (c) {
                const f = {
                    ...c,
                    a: o.opacity
                };
                this._coverColorStyle = vo(f, f.a)
            }
        }, this._initStyle = () => {
            const r = this.element,
                o = this.container.actualOptions;
            if (r) {
                this._fullScreen ? (this._originalStyle = lt({}, r.style), this._setFullScreenStyle()) : this._resetOriginalStyle();
                for (const a in o.style) {
                    if (!a || !o.style) continue;
                    const c = o.style[a];
                    c && r.style.setProperty(a, c, "important")
                }
            }
        }, this._initTrail = async () => {
            const r = this.container.actualOptions,
                o = r.particles.move.trail,
                a = o.fill;
            if (o.enable)
                if (a.color) {
                    const c = Fi(a.color);
                    if (!c) return;
                    const f = r.particles.move.trail;
                    this._trailFill = {
                        color: {
                            ...c
                        },
                        opacity: 1 / f.length
                    }
                } else await new Promise((c, f) => {
                    if (!a.image) return;
                    const d = document.createElement("img");
                    d.addEventListener("load", () => {
                        this._trailFill = {
                            image: d,
                            opacity: 1 / o.length
                        }, c()
                    }), d.addEventListener("error", p => {
                        f(p.error)
                    }), d.src = a.image
                })
        }, this._paintBase = r => {
            this.draw(o => CS(o, this.size, r))
        }, this._paintImage = (r, o) => {
            this.draw(a => ES(a, this.size, r, o))
        }, this._repairStyle = () => {
            const r = this.element;
            r && (this._safeMutationObserver(o => o.disconnect()), this._initStyle(), this.initBackground(), this._safeMutationObserver(o => o.observe(r, {
                attributes: !0
            })))
        }, this._resetOriginalStyle = () => {
            const r = this.element,
                o = this._originalStyle;
            if (!(r && o)) return;
            const a = r.style;
            a.position = o.position, a.zIndex = o.zIndex, a.top = o.top, a.left = o.left, a.width = o.width, a.height = o.height
        }, this._safeMutationObserver = r => {
            this._mutationObserver && r(this._mutationObserver)
        }, this._setFullScreenStyle = () => {
            const r = this.element;
            if (!r) return;
            const o = "important",
                a = r.style;
            a.setProperty("position", "fixed", o), a.setProperty("z-index", this.container.actualOptions.fullScreen.zIndex.toString(10), o), a.setProperty("top", "0", o), a.setProperty("left", "0", o), a.setProperty("width", "100%", o), a.setProperty("height", "100%", o)
        }, this.size = {
            height: 0,
            width: 0
        }, this._context = null, this._generated = !1, this._preDrawUpdaters = [], this._postDrawUpdaters = [], this._resizePlugins = [], this._colorPlugins = []
    }
    get _fullScreen() {
        return this.container.actualOptions.fullScreen.enable
    }
    clear() {
        const t = this.container.actualOptions,
            r = t.particles.move.trail,
            o = this._trailFill;
        t.backgroundMask.enable ? this.paint() : r.enable && r.length > 0 && o ? o.color ? this._paintBase(vo(o.color, o.opacity)) : o.image && this._paintImage(o.image, o.opacity) : this.draw(a => {
            Ga(a, this.size)
        })
    }
    destroy() {
        if (this.stop(), this._generated) {
            const t = this.element;
            t && t.remove()
        } else this._resetOriginalStyle();
        this._preDrawUpdaters = [], this._postDrawUpdaters = [], this._resizePlugins = [], this._colorPlugins = []
    }
    draw(t) {
        const r = this._context;
        if (r) return t(r)
    }
    drawParticle(t, r) {
        if (t.spawning || t.destroyed) return;
        const o = t.getRadius();
        if (o <= 0) return;
        const a = t.getFillColor(),
            c = t.getStrokeColor() ?? a;
        let [f, d] = this._getPluginParticleColors(t);
        f || (f = a), d || (d = c), !(!f && !d) && this.draw(p => {
            var F;
            const m = this.container,
                y = m.actualOptions,
                v = t.options.zIndex,
                w = (1 - t.zIndexFactor) ** v.opacityRate,
                k = t.bubble.opacity ?? ((F = t.opacity) == null ? void 0 : F.value) ?? 1,
                T = t.strokeOpacity ?? k,
                P = k * w,
                D = T * w,
                O = {},
                j = {
                    fill: f ? Tp(f, P) : void 0
                };
            j.stroke = d ? Tp(d, D) : j.fill, this._applyPreDrawUpdaters(p, t, o, P, j, O), MS({
                container: m,
                context: p,
                particle: t,
                delta: r,
                colorStyles: j,
                backgroundMask: y.backgroundMask.enable,
                composite: y.backgroundMask.composite,
                radius: o * (1 - t.zIndexFactor) ** v.sizeRate,
                opacity: P,
                shadow: t.options.shadow,
                transform: O
            }), this._applyPostDrawUpdaters(t)
        })
    }
    drawParticlePlugin(t, r, o) {
        this.draw(a => OS(a, t, r, o))
    }
    drawPlugin(t, r) {
        this.draw(o => AS(o, t, r))
    }
    async init() {
        this._safeMutationObserver(t => t.disconnect()), this._mutationObserver = mS(t => {
            for (const r of t) r.type === "attributes" && r.attributeName === "style" && this._repairStyle()
        }), this.resize(), this._initStyle(), this._initCover();
        try {
            await this._initTrail()
        } catch (t) {
            Gr().error(t)
        }
        this.initBackground(), this._safeMutationObserver(t => {
            this.element && t.observe(this.element, {
                attributes: !0
            })
        }), this.initUpdaters(), this.initPlugins(), this.paint()
    }
    initBackground() {
        const t = this.container.actualOptions,
            r = t.background,
            o = this.element;
        if (!o) return;
        const a = o.style;
        if (a) {
            if (r.color) {
                const c = Fi(r.color);
                a.backgroundColor = c ? vo(c, r.opacity) : ""
            } else a.backgroundColor = "";
            a.backgroundImage = r.image || "", a.backgroundPosition = r.position || "", a.backgroundRepeat = r.repeat || "", a.backgroundSize = r.size || ""
        }
    }
    initPlugins() {
        this._resizePlugins = [];
        for (const [, t] of this.container.plugins) t.resize && this._resizePlugins.push(t), (t.particleFillColor || t.particleStrokeColor) && this._colorPlugins.push(t)
    }
    initUpdaters() {
        this._preDrawUpdaters = [], this._postDrawUpdaters = [];
        for (const t of this.container.particles.updaters) t.afterDraw && this._postDrawUpdaters.push(t), (t.getColorStyles || t.getTransformValues || t.beforeDraw) && this._preDrawUpdaters.push(t)
    }
    loadCanvas(t) {
        this._generated && this.element && this.element.remove(), this._generated = t.dataset && br in t.dataset ? t.dataset[br] === "true" : this._generated, this.element = t, this.element.ariaHidden = "true", this._originalStyle = lt({}, this.element.style), this.size.height = t.offsetHeight, this.size.width = t.offsetWidth, this._context = this.element.getContext("2d"), this._safeMutationObserver(r => {
            this.element && r.observe(this.element, {
                attributes: !0
            })
        }), this.container.retina.init(), this.initBackground()
    }
    paint() {
        const t = this.container.actualOptions;
        this.draw(r => {
            t.backgroundMask.enable && t.backgroundMask.cover ? (Ga(r, this.size), this._paintBase(this._coverColorStyle)) : this._paintBase()
        })
    }
    resize() {
        if (!this.element) return !1;
        const t = this.container,
            r = t.retina.pixelRatio,
            o = t.canvas.size,
            a = {
                width: this.element.offsetWidth * r,
                height: this.element.offsetHeight * r
            };
        if (a.height === o.height && a.width === o.width && a.height === this.element.height && a.width === this.element.width) return !1;
        const c = {
            ...o
        };
        return this.element.width = o.width = this.element.offsetWidth * r, this.element.height = o.height = this.element.offsetHeight * r, this.container.started && (this.resizeFactor = {
            width: o.width / c.width,
            height: o.height / c.height
        }), !0
    }
    stop() {
        this._safeMutationObserver(t => t.disconnect()), this._mutationObserver = void 0, this.draw(t => Ga(t, this.size))
    }
    async windowResize() {
        if (!this.element || !this.resize()) return;
        const t = this.container,
            r = t.updateActualOptions();
        t.particles.setDensity(), this._applyResizePlugins(), r && await t.refresh()
    }
}

function At(i, t, r, o, a) {
    if (o) {
        let c = {
            passive: !0
        };
        Ln(a) ? c.capture = a : a !== void 0 && (c = a), i.addEventListener(t, r, c)
    } else {
        const c = a;
        i.removeEventListener(t, r, c)
    }
}
class NS {
    constructor(t) {
        this.container = t, this._doMouseTouchClick = r => {
            const o = this.container,
                a = o.actualOptions;
            if (this._canPush) {
                const c = o.interactivity.mouse,
                    f = c.position;
                if (!f) return;
                c.clickPosition = {
                    ...f
                }, c.clickTime = new Date().getTime();
                const d = a.interactivity.events.onClick;
                ni(d.mode, p => this.container.handleClickMode(p))
            }
            r.type === "touchend" && setTimeout(() => this._mouseTouchFinish(), 500)
        }, this._handleThemeChange = r => {
            const o = r,
                a = this.container,
                c = a.options,
                f = c.defaultThemes,
                d = o.matches ? f.dark : f.light,
                p = c.themes.find(m => m.name === d);
            p && p.default.auto && a.loadTheme(d)
        }, this._handleVisibilityChange = () => {
            const r = this.container,
                o = r.actualOptions;
            this._mouseTouchFinish(), o.pauseOnBlur && (document && document.hidden ? (r.pageHidden = !0, r.pause()) : (r.pageHidden = !1, r.getAnimationStatus() ? r.play(!0) : r.draw(!0)))
        }, this._handleWindowResize = async () => {
            this._resizeTimeout && (clearTimeout(this._resizeTimeout), delete this._resizeTimeout), this._resizeTimeout = setTimeout(async () => {
                const r = this.container.canvas;
                r && await r.windowResize()
            }, this.container.actualOptions.interactivity.events.resize.delay * 1e3)
        }, this._manageInteractivityListeners = (r, o) => {
            const a = this._handlers,
                c = this.container,
                f = c.actualOptions,
                d = c.interactivity.element;
            if (!d) return;
            const p = d,
                m = c.canvas.element;
            m && (m.style.pointerEvents = p === m ? "initial" : "none"), (f.interactivity.events.onHover.enable || f.interactivity.events.onClick.enable) && (At(d, Sp, a.mouseMove, o), At(d, nS, a.touchStart, o), At(d, iS, a.touchMove, o), f.interactivity.events.onClick.enable ? (At(d, Pp, a.touchEndClick, o), At(d, eS, a.mouseUp, o), At(d, Jx, a.mouseDown, o)) : At(d, Pp, a.touchEnd, o), At(d, r, a.mouseLeave, o), At(d, rS, a.touchCancel, o))
        }, this._manageListeners = r => {
            const o = this._handlers,
                a = this.container,
                c = a.actualOptions,
                f = c.interactivity.detectsOn,
                d = a.canvas.element;
            let p = xp;
            f === "window" ? (a.interactivity.element = window, p = tS) : f === "parent" && d ? a.interactivity.element = d.parentElement ?? d.parentNode : a.interactivity.element = d, this._manageMediaMatch(r), this._manageResize(r), this._manageInteractivityListeners(p, r), document && At(document, oS, o.visibilityChange, r, !1)
        }, this._manageMediaMatch = r => {
            const o = this._handlers,
                a = cg("(prefers-color-scheme: dark)");
            if (a) {
                if (a.addEventListener !== void 0) {
                    At(a, "change", o.themeChange, r);
                    return
                }
                a.addListener !== void 0 && (r ? a.addListener(o.oldThemeChange) : a.removeListener(o.oldThemeChange))
            }
        }, this._manageResize = r => {
            const o = this._handlers,
                a = this.container;
            if (!a.actualOptions.interactivity.events.resize) return;
            if (typeof ResizeObserver > "u") {
                At(window, sS, o.resize, r);
                return
            }
            const f = a.canvas.element;
            this._resizeObserver && !r ? (f && this._resizeObserver.unobserve(f), this._resizeObserver.disconnect(), delete this._resizeObserver) : !this._resizeObserver && r && f && (this._resizeObserver = new ResizeObserver(async d => {
                d.find(m => m.target === f) && await this._handleWindowResize()
            }), this._resizeObserver.observe(f))
        }, this._mouseDown = () => {
            const {
                interactivity: r
            } = this.container;
            if (!r) return;
            const {
                mouse: o
            } = r;
            o.clicking = !0, o.downPosition = o.position
        }, this._mouseTouchClick = r => {
            const o = this.container,
                a = o.actualOptions,
                {
                    mouse: c
                } = o.interactivity;
            c.inside = !0;
            let f = !1;
            const d = c.position;
            if (!(!d || !a.interactivity.events.onClick.enable)) {
                for (const [, p] of o.plugins)
                    if (p.clickPositionValid && (f = p.clickPositionValid(d), f)) break;
                f || this._doMouseTouchClick(r), c.clicking = !1
            }
        }, this._mouseTouchFinish = () => {
            const r = this.container.interactivity;
            if (!r) return;
            const o = r.mouse;
            delete o.position, delete o.clickPosition, delete o.downPosition, r.status = xp, o.inside = !1, o.clicking = !1
        }, this._mouseTouchMove = r => {
            const o = this.container,
                a = o.actualOptions,
                c = o.interactivity,
                f = o.canvas.element;
            if (!c || !c.element) return;
            c.mouse.inside = !0;
            let d;
            if (r.type.startsWith("pointer")) {
                this._canPush = !0;
                const m = r;
                if (c.element === window) {
                    if (f) {
                        const y = f.getBoundingClientRect();
                        d = {
                            x: m.clientX - y.left,
                            y: m.clientY - y.top
                        }
                    }
                } else if (a.interactivity.detectsOn === "parent") {
                    const y = m.target,
                        v = m.currentTarget;
                    if (y && v && f) {
                        const w = y.getBoundingClientRect(),
                            k = v.getBoundingClientRect(),
                            T = f.getBoundingClientRect();
                        d = {
                            x: m.offsetX + 2 * w.left - (k.left + T.left),
                            y: m.offsetY + 2 * w.top - (k.top + T.top)
                        }
                    } else d = {
                        x: m.offsetX ?? m.clientX,
                        y: m.offsetY ?? m.clientY
                    }
                } else m.target === f && (d = {
                    x: m.offsetX ?? m.clientX,
                    y: m.offsetY ?? m.clientY
                })
            } else if (this._canPush = r.type !== "touchmove", f) {
                const m = r,
                    y = m.touches[m.touches.length - 1],
                    v = f.getBoundingClientRect();
                d = {
                    x: y.clientX - (v.left ?? 0),
                    y: y.clientY - (v.top ?? 0)
                }
            }
            const p = o.retina.pixelRatio;
            d && (d.x *= p, d.y *= p), c.mouse.position = d, c.status = Sp
        }, this._touchEnd = r => {
            const o = r,
                a = Array.from(o.changedTouches);
            for (const c of a) this._touches.delete(c.identifier);
            this._mouseTouchFinish()
        }, this._touchEndClick = r => {
            const o = r,
                a = Array.from(o.changedTouches);
            for (const c of a) this._touches.delete(c.identifier);
            this._mouseTouchClick(r)
        }, this._touchStart = r => {
            const o = r,
                a = Array.from(o.changedTouches);
            for (const c of a) this._touches.set(c.identifier, performance.now());
            this._mouseTouchMove(r)
        }, this._canPush = !0, this._touches = new Map, this._handlers = {
            mouseDown: () => this._mouseDown(),
            mouseLeave: () => this._mouseTouchFinish(),
            mouseMove: r => this._mouseTouchMove(r),
            mouseUp: r => this._mouseTouchClick(r),
            touchStart: r => this._touchStart(r),
            touchMove: r => this._mouseTouchMove(r),
            touchEnd: r => this._touchEnd(r),
            touchCancel: r => this._touchEnd(r),
            touchEndClick: r => this._touchEndClick(r),
            visibilityChange: () => this._handleVisibilityChange(),
            themeChange: r => this._handleThemeChange(r),
            oldThemeChange: r => this._handleThemeChange(r),
            resize: () => {
                this._handleWindowResize()
            }
        }
    }
    addListeners() {
        this._manageListeners(!0)
    }
    removeListeners() {
        this._manageListeners(!1)
    }
}
class Jt {
    constructor() {
        this.value = ""
    }
    static create(t, r) {
        const o = new Jt;
        return o.load(t), r !== void 0 && (qt(r) || Zt(r) ? o.load({
            value: r
        }) : o.load(r)), o
    }
    load(t) {
        (t == null ? void 0 : t.value) !== void 0 && (this.value = t.value)
    }
}
class IS {
    constructor() {
        this.color = new Jt, this.color.value = "", this.image = "", this.position = "", this.repeat = "", this.size = "", this.opacity = 1
    }
    load(t) {
        t && (t.color !== void 0 && (this.color = Jt.create(this.color, t.color)), t.image !== void 0 && (this.image = t.image), t.position !== void 0 && (this.position = t.position), t.repeat !== void 0 && (this.repeat = t.repeat), t.size !== void 0 && (this.size = t.size), t.opacity !== void 0 && (this.opacity = t.opacity))
    }
}
class FS {
    constructor() {
        this.color = new Jt, this.color.value = "#fff", this.opacity = 1
    }
    load(t) {
        t && (t.color !== void 0 && (this.color = Jt.create(this.color, t.color)), t.opacity !== void 0 && (this.opacity = t.opacity))
    }
}
class jS {
    constructor() {
        this.composite = "destination-out", this.cover = new FS, this.enable = !1
    }
    load(t) {
        if (t) {
            if (t.composite !== void 0 && (this.composite = t.composite), t.cover !== void 0) {
                const r = t.cover,
                    o = qt(t.cover) ? {
                        color: t.cover
                    } : t.cover;
                this.cover.load(r.color !== void 0 ? r : {
                    color: o
                })
            }
            t.enable !== void 0 && (this.enable = t.enable)
        }
    }
}
class bS {
    constructor() {
        this.enable = !0, this.zIndex = 0
    }
    load(t) {
        t && (t.enable !== void 0 && (this.enable = t.enable), t.zIndex !== void 0 && (this.zIndex = t.zIndex))
    }
}
class BS {
    constructor() {
        this.enable = !1, this.mode = []
    }
    load(t) {
        t && (t.enable !== void 0 && (this.enable = t.enable), t.mode !== void 0 && (this.mode = t.mode))
    }
}
class Ep {
    constructor() {
        this.selectors = [], this.enable = !1, this.mode = [], this.type = "circle"
    }
    get el() {
        return this.elementId
    }
    set el(t) {
        this.elementId = t
    }
    get elementId() {
        return this.ids
    }
    set elementId(t) {
        this.ids = t
    }
    get ids() {
        return ni(this.selectors, t => t.replace("#", ""))
    }
    set ids(t) {
        this.selectors = ni(t, r => `#${r}`)
    }
    load(t) {
        if (!t) return;
        const r = t.ids ?? t.elementId ?? t.el;
        r !== void 0 && (this.ids = r), t.selectors !== void 0 && (this.selectors = t.selectors), t.enable !== void 0 && (this.enable = t.enable), t.mode !== void 0 && (this.mode = t.mode), t.type !== void 0 && (this.type = t.type)
    }
}
class US {
    constructor() {
        this.enable = !1, this.force = 2, this.smooth = 10
    }
    load(t) {
        t && (t.enable !== void 0 && (this.enable = t.enable), t.force !== void 0 && (this.force = t.force), t.smooth !== void 0 && (this.smooth = t.smooth))
    }
}
class $S {
    constructor() {
        this.enable = !1, this.mode = [], this.parallax = new US
    }
    load(t) {
        t && (t.enable !== void 0 && (this.enable = t.enable), t.mode !== void 0 && (this.mode = t.mode), this.parallax.load(t.parallax))
    }
}
class WS {
    constructor() {
        this.delay = .5, this.enable = !0
    }
    load(t) {
        t !== void 0 && (t.delay !== void 0 && (this.delay = t.delay), t.enable !== void 0 && (this.enable = t.enable))
    }
}
class HS {
    constructor() {
        this.onClick = new BS, this.onDiv = new Ep, this.onHover = new $S, this.resize = new WS
    }
    get onclick() {
        return this.onClick
    }
    set onclick(t) {
        this.onClick = t
    }
    get ondiv() {
        return this.onDiv
    }
    set ondiv(t) {
        this.onDiv = t
    }
    get onhover() {
        return this.onHover
    }
    set onhover(t) {
        this.onHover = t
    }
    load(t) {
        if (!t) return;
        this.onClick.load(t.onClick ?? t.onclick);
        const r = t.onDiv ?? t.ondiv;
        r !== void 0 && (this.onDiv = ni(r, o => {
            const a = new Ep;
            return a.load(o), a
        })), this.onHover.load(t.onHover ?? t.onhover), Ln(t.resize) ? this.resize.enable = t.resize : this.resize.load(t.resize)
    }
}
class KS {
    constructor(t, r) {
        this._engine = t, this._container = r
    }
    load(t) {
        if (!t || !this._container) return;
        const r = this._engine.plugins.interactors.get(this._container);
        if (r)
            for (const o of r) o.loadModeOptions && o.loadModeOptions(this, t)
    }
}
class pg {
    constructor(t, r) {
        this.detectsOn = "window", this.events = new HS, this.modes = new KS(t, r)
    }
    get detect_on() {
        return this.detectsOn
    }
    set detect_on(t) {
        this.detectsOn = t
    }
    load(t) {
        if (!t) return;
        const r = t.detectsOn ?? t.detect_on;
        r !== void 0 && (this.detectsOn = r), this.events.load(t.events), this.modes.load(t.modes)
    }
}
class GS {
    load(t) {
        t && (t.position && (this.position = {
            x: t.position.x ?? 50,
            y: t.position.y ?? 50,
            mode: t.position.mode ?? "percent"
        }), t.options && (this.options = lt({}, t.options)))
    }
}
class YS {
    constructor() {
        this.maxWidth = 1 / 0, this.options = {}, this.mode = "canvas"
    }
    load(t) {
        t && (t.maxWidth !== void 0 && (this.maxWidth = t.maxWidth), t.mode !== void 0 && (t.mode === "screen" ? this.mode = "screen" : this.mode = "canvas"), t.options !== void 0 && (this.options = lt({}, t.options)))
    }
}
class XS {
    constructor() {
        this.auto = !1, this.mode = "any", this.value = !1
    }
    load(t) {
        t && (t.auto !== void 0 && (this.auto = t.auto), t.mode !== void 0 && (this.mode = t.mode), t.value !== void 0 && (this.value = t.value))
    }
}
class QS {
    constructor() {
        this.name = "", this.default = new XS
    }
    load(t) {
        t && (t.name !== void 0 && (this.name = t.name), this.default.load(t.default), t.options !== void 0 && (this.options = lt({}, t.options)))
    }
}
class Ya {
    constructor() {
        this.count = 0, this.enable = !1, this.offset = 0, this.speed = 1, this.delay = 0, this.decay = 0, this.sync = !0
    }
    load(t) {
        t && (t.count !== void 0 && (this.count = ye(t.count)), t.enable !== void 0 && (this.enable = t.enable), t.offset !== void 0 && (this.offset = ye(t.offset)), t.speed !== void 0 && (this.speed = ye(t.speed)), t.decay !== void 0 && (this.decay = ye(t.decay)), t.delay !== void 0 && (this.delay = ye(t.delay)), t.sync !== void 0 && (this.sync = t.sync))
    }
}
class qS {
    constructor() {
        this.h = new Ya, this.s = new Ya, this.l = new Ya
    }
    load(t) {
        t && (this.h.load(t.h), this.s.load(t.s), this.l.load(t.l))
    }
}
class Yr extends Jt {
    constructor() {
        super(), this.animation = new qS
    }
    static create(t, r) {
        const o = new Yr;
        return o.load(t), r !== void 0 && (qt(r) || Zt(r) ? o.load({
            value: r
        }) : o.load(r)), o
    }
    load(t) {
        if (super.load(t), !t) return;
        const r = t.animation;
        r !== void 0 && (r.enable !== void 0 ? this.animation.h.load(r) : this.animation.load(t.animation))
    }
}
class ZS {
    constructor() {
        this.speed = 2
    }
    load(t) {
        t && t.speed !== void 0 && (this.speed = t.speed)
    }
}
class JS {
    constructor() {
        this.enable = !0, this.retries = 0
    }
    load(t) {
        t && (t.enable !== void 0 && (this.enable = t.enable), t.retries !== void 0 && (this.retries = t.retries))
    }
}
class eP {
    constructor() {
        this.count = 0, this.enable = !1, this.speed = 1, this.decay = 0, this.delay = 0, this.sync = !1
    }
    load(t) {
        t && (t.count !== void 0 && (this.count = ye(t.count)), t.enable !== void 0 && (this.enable = t.enable), t.speed !== void 0 && (this.speed = ye(t.speed)), t.decay !== void 0 && (this.decay = ye(t.decay)), t.delay !== void 0 && (this.delay = ye(t.delay)), t.sync !== void 0 && (this.sync = t.sync))
    }
}
class mg extends eP {
    constructor() {
        super(), this.mode = "auto", this.startValue = "random"
    }
    load(t) {
        super.load(t), t && (t.minimumValue !== void 0 && (this.minimumValue = t.minimumValue), t.mode !== void 0 && (this.mode = t.mode), t.startValue !== void 0 && (this.startValue = t.startValue))
    }
}
class tP {
    constructor() {
        this.enable = !1, this.minimumValue = 0
    }
    load(t) {
        t && (t.enable !== void 0 && (this.enable = t.enable), t.minimumValue !== void 0 && (this.minimumValue = t.minimumValue))
    }
}
class es {
    constructor() {
        this.random = new tP, this.value = 0
    }
    load(t) {
        t && (Ln(t.random) ? this.random.enable = t.random : this.random.load(t.random), t.value !== void 0 && (this.value = ye(t.value, this.random.enable ? this.random.minimumValue : void 0)))
    }
}
class Mp extends es {
    constructor() {
        super(), this.random.minimumValue = .1, this.value = 1
    }
}
class gg {
    constructor() {
        this.horizontal = new Mp, this.vertical = new Mp
    }
    load(t) {
        t && (this.horizontal.load(t.horizontal), this.vertical.load(t.vertical))
    }
}
class nP {
    constructor() {
        this.absorb = new ZS, this.bounce = new gg, this.enable = !1, this.maxSpeed = 50, this.mode = "bounce", this.overlap = new JS
    }
    load(t) {
        t && (this.absorb.load(t.absorb), this.bounce.load(t.bounce), t.enable !== void 0 && (this.enable = t.enable), t.maxSpeed !== void 0 && (this.maxSpeed = ye(t.maxSpeed)), t.mode !== void 0 && (this.mode = t.mode), this.overlap.load(t.overlap))
    }
}
class iP {
    constructor() {
        this.offset = 0, this.value = 90
    }
    load(t) {
        t && (t.offset !== void 0 && (this.offset = ye(t.offset)), t.value !== void 0 && (this.value = ye(t.value)))
    }
}
class rP {
    constructor() {
        this.distance = 200, this.enable = !1, this.rotate = {
            x: 3e3,
            y: 3e3
        }
    }
    get rotateX() {
        return this.rotate.x
    }
    set rotateX(t) {
        this.rotate.x = t
    }
    get rotateY() {
        return this.rotate.y
    }
    set rotateY(t) {
        this.rotate.y = t
    }
    load(t) {
        var a, c;
        if (!t) return;
        t.distance !== void 0 && (this.distance = ye(t.distance)), t.enable !== void 0 && (this.enable = t.enable);
        const r = ((a = t.rotate) == null ? void 0 : a.x) ?? t.rotateX;
        r !== void 0 && (this.rotate.x = r);
        const o = ((c = t.rotate) == null ? void 0 : c.y) ?? t.rotateY;
        o !== void 0 && (this.rotate.y = o)
    }
}
class sP {
    constructor() {
        this.x = 50, this.y = 50, this.mode = "percent", this.radius = 0
    }
    load(t) {
        t && (t.x !== void 0 && (this.x = t.x), t.y !== void 0 && (this.y = t.y), t.mode !== void 0 && (this.mode = t.mode), t.radius !== void 0 && (this.radius = t.radius))
    }
}
class oP {
    constructor() {
        this.acceleration = 9.81, this.enable = !1, this.inverse = !1, this.maxSpeed = 50
    }
    load(t) {
        t && (t.acceleration !== void 0 && (this.acceleration = ye(t.acceleration)), t.enable !== void 0 && (this.enable = t.enable), t.inverse !== void 0 && (this.inverse = t.inverse), t.maxSpeed !== void 0 && (this.maxSpeed = ye(t.maxSpeed)))
    }
}
class lP {
    constructor() {
        this.clamp = !0, this.delay = new es, this.enable = !1, this.options = {}
    }
    load(t) {
        t && (t.clamp !== void 0 && (this.clamp = t.clamp), this.delay.load(t.delay), t.enable !== void 0 && (this.enable = t.enable), this.generator = t.generator, t.options && (this.options = lt(this.options, t.options)))
    }
}
class aP {
    load(t) {
        t && (t.color !== void 0 && (this.color = Jt.create(this.color, t.color)), t.image !== void 0 && (this.image = t.image))
    }
}
class uP {
    constructor() {
        this.enable = !1, this.length = 10, this.fill = new aP
    }
    get fillColor() {
        return this.fill.color
    }
    set fillColor(t) {
        this.fill.load({
            color: t
        })
    }
    load(t) {
        t && (t.enable !== void 0 && (this.enable = t.enable), (t.fill !== void 0 || t.fillColor !== void 0) && this.fill.load(t.fill || {
            color: t.fillColor
        }), t.length !== void 0 && (this.length = t.length))
    }
}
class cP {
    constructor() {
        this.default = "out"
    }
    load(t) {
        t && (t.default !== void 0 && (this.default = t.default), this.bottom = t.bottom ?? t.default, this.left = t.left ?? t.default, this.right = t.right ?? t.default, this.top = t.top ?? t.default)
    }
}
class fP {
    constructor() {
        this.acceleration = 0, this.enable = !1
    }
    load(t) {
        t && (t.acceleration !== void 0 && (this.acceleration = ye(t.acceleration)), t.enable !== void 0 && (this.enable = t.enable), t.position && (this.position = lt({}, t.position)))
    }
}
class hP {
    constructor() {
        this.angle = new iP, this.attract = new rP, this.center = new sP, this.decay = 0, this.distance = {}, this.direction = "none", this.drift = 0, this.enable = !1, this.gravity = new oP, this.path = new lP, this.outModes = new cP, this.random = !1, this.size = !1, this.speed = 2, this.spin = new fP, this.straight = !1, this.trail = new uP, this.vibrate = !1, this.warp = !1
    }
    get bounce() {
        return this.collisions
    }
    set bounce(t) {
        this.collisions = t
    }
    get collisions() {
        return !1
    }
    set collisions(t) {}
    get noise() {
        return this.path
    }
    set noise(t) {
        this.path = t
    }
    get outMode() {
        return this.outModes.default
    }
    set outMode(t) {
        this.outModes.default = t
    }
    get out_mode() {
        return this.outMode
    }
    set out_mode(t) {
        this.outMode = t
    }
    load(t) {
        if (!t) return;
        this.angle.load(Bt(t.angle) ? {
            value: t.angle
        } : t.angle), this.attract.load(t.attract), this.center.load(t.center), t.decay !== void 0 && (this.decay = ye(t.decay)), t.direction !== void 0 && (this.direction = t.direction), t.distance !== void 0 && (this.distance = Bt(t.distance) ? {
            horizontal: t.distance,
            vertical: t.distance
        } : {
            ...t.distance
        }), t.drift !== void 0 && (this.drift = ye(t.drift)), t.enable !== void 0 && (this.enable = t.enable), this.gravity.load(t.gravity);
        const r = t.outModes ?? t.outMode ?? t.out_mode;
        r !== void 0 && (Vr(r) ? this.outModes.load(r) : this.outModes.load({
            default: r
        })), this.path.load(t.path ?? t.noise), t.random !== void 0 && (this.random = t.random), t.size !== void 0 && (this.size = t.size), t.speed !== void 0 && (this.speed = ye(t.speed)), this.spin.load(t.spin), t.straight !== void 0 && (this.straight = t.straight), this.trail.load(t.trail), t.vibrate !== void 0 && (this.vibrate = t.vibrate), t.warp !== void 0 && (this.warp = t.warp)
    }
}
class dP extends mg {
    constructor() {
        super(), this.destroy = "none", this.speed = 2
    }
    get opacity_min() {
        return this.minimumValue
    }
    set opacity_min(t) {
        this.minimumValue = t
    }
    load(t) {
        (t == null ? void 0 : t.opacity_min) !== void 0 && t.minimumValue === void 0 && (t.minimumValue = t.opacity_min), super.load(t), t && t.destroy !== void 0 && (this.destroy = t.destroy)
    }
}
class pP extends es {
    constructor() {
        super(), this.animation = new dP, this.random.minimumValue = .1, this.value = 1
    }
    get anim() {
        return this.animation
    }
    set anim(t) {
        this.animation = t
    }
    load(t) {
        if (!t) return;
        super.load(t);
        const r = t.animation ?? t.anim;
        r !== void 0 && (this.animation.load(r), this.value = ye(this.value, this.animation.enable ? this.animation.minimumValue : void 0))
    }
}
class mP {
    constructor() {
        this.enable = !1, this.width = 1920, this.height = 1080
    }
    get area() {
        return this.width
    }
    set area(t) {
        this.width = t
    }
    get factor() {
        return this.height
    }
    set factor(t) {
        this.height = t
    }
    get value_area() {
        return this.area
    }
    set value_area(t) {
        this.area = t
    }
    load(t) {
        if (!t) return;
        t.enable !== void 0 && (this.enable = t.enable);
        const r = t.width ?? t.area ?? t.value_area;
        r !== void 0 && (this.width = r);
        const o = t.height ?? t.factor;
        o !== void 0 && (this.height = o)
    }
}
class gP {
    constructor() {
        this.density = new mP, this.limit = 0, this.value = 0
    }
    get max() {
        return this.limit
    }
    set max(t) {
        this.limit = t
    }
    load(t) {
        if (!t) return;
        this.density.load(t.density);
        const r = t.limit ?? t.max;
        r !== void 0 && (this.limit = r), t.value !== void 0 && (this.value = t.value)
    }
}
class yP {
    constructor() {
        this.blur = 0, this.color = new Jt, this.enable = !1, this.offset = {
            x: 0,
            y: 0
        }, this.color.value = "#000"
    }
    load(t) {
        t && (t.blur !== void 0 && (this.blur = t.blur), this.color = Jt.create(this.color, t.color), t.enable !== void 0 && (this.enable = t.enable), t.offset !== void 0 && (t.offset.x !== void 0 && (this.offset.x = t.offset.x), t.offset.y !== void 0 && (this.offset.y = t.offset.y)))
    }
}
const Xa = "character",
    Qa = "char",
    qa = "image",
    Za = "images",
    Ja = "polygon",
    eu = "star";
class vP {
    constructor() {
        this.loadShape = (t, r, o, a) => {
            if (!t) return;
            const c = Zt(t),
                f = c ? [] : {},
                d = c !== Zt(this.options[r]),
                p = c !== Zt(this.options[o]);
            d && (this.options[r] = f), p && a && (this.options[o] = f), this.options[r] = lt(this.options[r] ?? f, t), (!this.options[o] || a) && (this.options[o] = lt(this.options[o] ?? f, t))
        }, this.close = !0, this.fill = !0, this.options = {}, this.type = "circle"
    }
    get character() {
        return this.options[Xa] ?? this.options[Qa]
    }
    set character(t) {
        this.options[Qa] = this.options[Xa] = t
    }
    get custom() {
        return this.options
    }
    set custom(t) {
        this.options = t
    }
    get image() {
        return this.options[qa] ?? this.options[Za]
    }
    set image(t) {
        this.options[Za] = this.options[qa] = t
    }
    get images() {
        return this.image
    }
    set images(t) {
        this.image = t
    }
    get polygon() {
        return this.options[Ja] ?? this.options[eu]
    }
    set polygon(t) {
        this.options[eu] = this.options[Ja] = t
    }
    get stroke() {
        return []
    }
    set stroke(t) {}
    load(t) {
        if (!t) return;
        const r = t.options ?? t.custom;
        if (r !== void 0)
            for (const o in r) {
                const a = r[o];
                a && (this.options[o] = lt(this.options[o] ?? {}, a))
            }
        this.loadShape(t.character, Xa, Qa, !0), this.loadShape(t.polygon, Ja, eu, !1), this.loadShape(t.image ?? t.images, qa, Za, !0), t.close !== void 0 && (this.close = t.close), t.fill !== void 0 && (this.fill = t.fill), t.type !== void 0 && (this.type = t.type)
    }
}
class wP extends mg {
    constructor() {
        super(), this.destroy = "none", this.speed = 5
    }
    get size_min() {
        return this.minimumValue
    }
    set size_min(t) {
        this.minimumValue = t
    }
    load(t) {
        (t == null ? void 0 : t.size_min) !== void 0 && t.minimumValue === void 0 && (t.minimumValue = t.size_min), super.load(t), t && t.destroy !== void 0 && (this.destroy = t.destroy)
    }
}
class xP extends es {
    constructor() {
        super(), this.animation = new wP, this.random.minimumValue = 1, this.value = 3
    }
    get anim() {
        return this.animation
    }
    set anim(t) {
        this.animation = t
    }
    load(t) {
        if (super.load(t), !t) return;
        const r = t.animation ?? t.anim;
        r !== void 0 && (this.animation.load(r), this.value = ye(this.value, this.animation.enable ? this.animation.minimumValue : void 0))
    }
}
class Rp {
    constructor() {
        this.width = 0
    }
    load(t) {
        t && (t.color !== void 0 && (this.color = Yr.create(this.color, t.color)), t.width !== void 0 && (this.width = ye(t.width)), t.opacity !== void 0 && (this.opacity = ye(t.opacity)))
    }
}
class SP extends es {
    constructor() {
        super(), this.opacityRate = 1, this.sizeRate = 1, this.velocityRate = 1
    }
    load(t) {
        super.load(t), t && (t.opacityRate !== void 0 && (this.opacityRate = t.opacityRate), t.sizeRate !== void 0 && (this.sizeRate = t.sizeRate), t.velocityRate !== void 0 && (this.velocityRate = t.velocityRate))
    }
}
class PP {
    constructor(t, r) {
        this._engine = t, this._container = r, this.bounce = new gg, this.collisions = new nP, this.color = new Yr, this.color.value = "#fff", this.groups = {}, this.move = new hP, this.number = new gP, this.opacity = new pP, this.reduceDuplicates = !1, this.shadow = new yP, this.shape = new vP, this.size = new xP, this.stroke = new Rp, this.zIndex = new SP
    }
    load(t) {
        var a, c, f;
        if (!t) return;
        if (this.bounce.load(t.bounce), this.color.load(Yr.create(this.color, t.color)), t.groups !== void 0)
            for (const d in t.groups) {
                const p = t.groups[d];
                p !== void 0 && (this.groups[d] = lt(this.groups[d] ?? {}, p))
            }
        this.move.load(t.move), this.number.load(t.number), this.opacity.load(t.opacity), t.reduceDuplicates !== void 0 && (this.reduceDuplicates = t.reduceDuplicates), this.shape.load(t.shape), this.size.load(t.size), this.shadow.load(t.shadow), this.zIndex.load(t.zIndex);
        const r = ((a = t.move) == null ? void 0 : a.collisions) ?? ((c = t.move) == null ? void 0 : c.bounce);
        r !== void 0 && (this.collisions.enable = r), this.collisions.load(t.collisions), t.interactivity !== void 0 && (this.interactivity = lt({}, t.interactivity));
        const o = t.stroke ?? ((f = t.shape) == null ? void 0 : f.stroke);
        if (o && (this.stroke = ni(o, d => {
                const p = new Rp;
                return p.load(d), p
            })), this._container) {
            const d = this._engine.plugins.updaters.get(this._container);
            if (d)
                for (const m of d) m.loadOptions && m.loadOptions(this, t);
            const p = this._engine.plugins.interactors.get(this._container);
            if (p)
                for (const m of p) m.loadParticlesOptions && m.loadParticlesOptions(this, t)
        }
    }
}

function yg(i, ...t) {
    for (const r of t) i.load(r)
}

function vg(i, t, ...r) {
    const o = new PP(i, t);
    return yg(o, ...r), o
}
class _P {
    constructor(t, r) {
        this._findDefaultTheme = o => this.themes.find(a => a.default.value && a.default.mode === o) ?? this.themes.find(a => a.default.value && a.default.mode === "any"), this._importPreset = o => {
            this.load(this._engine.plugins.getPreset(o))
        }, this._engine = t, this._container = r, this.autoPlay = !0, this.background = new IS, this.backgroundMask = new jS, this.defaultThemes = {}, this.delay = 0, this.fullScreen = new bS, this.detectRetina = !0, this.duration = 0, this.fpsLimit = 120, this.interactivity = new pg(t, r), this.manualParticles = [], this.particles = vg(this._engine, this._container), this.pauseOnBlur = !0, this.pauseOnOutsideViewport = !0, this.responsive = [], this.smooth = !1, this.style = {}, this.themes = [], this.zLayers = 100
    }
    get backgroundMode() {
        return this.fullScreen
    }
    set backgroundMode(t) {
        this.fullScreen.load(t)
    }
    get fps_limit() {
        return this.fpsLimit
    }
    set fps_limit(t) {
        this.fpsLimit = t
    }
    get retina_detect() {
        return this.detectRetina
    }
    set retina_detect(t) {
        this.detectRetina = t
    }
    load(t) {
        var f, d;
        if (!t) return;
        t.preset !== void 0 && ni(t.preset, p => this._importPreset(p)), t.autoPlay !== void 0 && (this.autoPlay = t.autoPlay), t.delay !== void 0 && (this.delay = ye(t.delay));
        const r = t.detectRetina ?? t.retina_detect;
        r !== void 0 && (this.detectRetina = r), t.duration !== void 0 && (this.duration = ye(t.duration));
        const o = t.fpsLimit ?? t.fps_limit;
        o !== void 0 && (this.fpsLimit = o), t.pauseOnBlur !== void 0 && (this.pauseOnBlur = t.pauseOnBlur), t.pauseOnOutsideViewport !== void 0 && (this.pauseOnOutsideViewport = t.pauseOnOutsideViewport), t.zLayers !== void 0 && (this.zLayers = t.zLayers), this.background.load(t.background);
        const a = t.fullScreen ?? t.backgroundMode;
        Ln(a) ? this.fullScreen.enable = a : this.fullScreen.load(a), this.backgroundMask.load(t.backgroundMask), this.interactivity.load(t.interactivity), t.manualParticles && (this.manualParticles = t.manualParticles.map(p => {
            const m = new GS;
            return m.load(p), m
        })), this.particles.load(t.particles), this.style = lt(this.style, t.style), this._engine.plugins.loadOptions(this, t), t.smooth !== void 0 && (this.smooth = t.smooth);
        const c = this._engine.plugins.interactors.get(this._container);
        if (c)
            for (const p of c) p.loadOptions && p.loadOptions(this, t);
        if (t.responsive !== void 0)
            for (const p of t.responsive) {
                const m = new YS;
                m.load(p), this.responsive.push(m)
            }
        if (this.responsive.sort((p, m) => p.maxWidth - m.maxWidth), t.themes !== void 0)
            for (const p of t.themes) {
                const m = this.themes.find(y => y.name === p.name);
                if (m) m.load(p);
                else {
                    const y = new QS;
                    y.load(p), this.themes.push(y)
                }
            }
        this.defaultThemes.dark = (f = this._findDefaultTheme("dark")) == null ? void 0 : f.name, this.defaultThemes.light = (d = this._findDefaultTheme("light")) == null ? void 0 : d.name
    }
    setResponsive(t, r, o) {
        this.load(o);
        const a = this.responsive.find(c => c.mode === "screen" && screen ? c.maxWidth > screen.availWidth : c.maxWidth * r > t);
        return this.load(a == null ? void 0 : a.options), a == null ? void 0 : a.maxWidth
    }
    setTheme(t) {
        if (t) {
            const r = this.themes.find(o => o.name === t);
            r && this.load(r.options)
        } else {
            const r = cg("(prefers-color-scheme: dark)"),
                o = r && r.matches,
                a = this._findDefaultTheme(o ? "dark" : "light");
            a && this.load(a.options)
        }
    }
}
class kP {
    constructor(t, r) {
        this.container = r, this._engine = t, this._interactors = t.plugins.getInteractors(this.container, !0), this._externalInteractors = [], this._particleInteractors = []
    }
    async externalInteract(t) {
        for (const r of this._externalInteractors) r.isEnabled() && await r.interact(t)
    }
    handleClickMode(t) {
        for (const r of this._externalInteractors) r.handleClickMode && r.handleClickMode(t)
    }
    init() {
        this._externalInteractors = [], this._particleInteractors = [];
        for (const t of this._interactors) {
            switch (t.type) {
            case "external":
                this._externalInteractors.push(t);
                break;
            case "particles":
                this._particleInteractors.push(t);
                break
            }
            t.init()
        }
    }
    async particlesInteract(t, r) {
        for (const o of this._externalInteractors) o.clear(t, r);
        for (const o of this._particleInteractors) o.isEnabled(t) && await o.interact(t, r)
    }
    async reset(t) {
        for (const r of this._externalInteractors) r.isEnabled() && r.reset(t);
        for (const r of this._particleInteractors) r.isEnabled(t) && r.reset(t)
    }
}
const Dp = i => {
    if (!gS(i.outMode, i.checkModes)) return;
    const t = i.radius * 2;
    i.coord > i.maxCoord - t ? i.setCb(-i.radius) : i.coord < t && i.setCb(i.radius)
};
class TP {
    constructor(t, r, o, a, c, f) {
        this.container = o, this._calcPosition = (d, p, m, y = 0) => {
            for (const [, j] of d.plugins) {
                const F = j.particlePosition !== void 0 ? j.particlePosition(p, this) : void 0;
                if (F) return St.create(F.x, F.y, m)
            }
            const v = d.canvas.size,
                w = hS({
                    size: v,
                    position: p
                }),
                k = St.create(w.x, w.y, m),
                T = this.getRadius(),
                P = this.options.move.outModes,
                D = j => {
                    Dp({
                        outMode: j,
                        checkModes: ["bounce", "bounce-horizontal"],
                        coord: k.x,
                        maxCoord: d.canvas.size.width,
                        setCb: F => k.x += F,
                        radius: T
                    })
                },
                O = j => {
                    Dp({
                        outMode: j,
                        checkModes: ["bounce", "bounce-vertical"],
                        coord: k.y,
                        maxCoord: d.canvas.size.height,
                        setCb: F => k.y += F,
                        radius: T
                    })
                };
            return D(P.left ?? P.default), D(P.right ?? P.default), O(P.top ?? P.default), O(P.bottom ?? P.default), this._checkOverlap(k, y) ? this._calcPosition(d, void 0, m, y + 1) : k
        }, this._calculateVelocity = () => {
            const d = fS(this.direction),
                p = d.copy(),
                m = this.options.move;
            if (m.direction === "inside" || m.direction === "outside") return p;
            const y = Math.PI / 180 * ke(m.angle.value),
                v = Math.PI / 180 * ke(m.angle.offset),
                w = {
                    left: v - y / 2,
                    right: v + y / 2
                };
            return m.straight || (p.angle += Ii(ye(w.left, w.right))), m.random && typeof m.speed == "number" && (p.length *= hn()), p
        }, this._checkOverlap = (d, p = 0) => {
            const m = this.options.collisions,
                y = this.getRadius();
            if (!m.enable) return !1;
            const v = m.overlap;
            if (v.enable) return !1;
            const w = v.retries;
            if (w >= 0 && p > w) throw new Error(`${ti} particle is overlapping and can't be placed`);
            return !!this.container.particles.find(k => nc(d, k.position) < y + k.getRadius())
        }, this._getRollColor = d => {
            if (!d || !this.roll || !this.backColor && !this.roll.alter) return d;
            const p = this.roll.horizontal && this.roll.vertical ? 2 : 1,
                m = this.roll.horizontal ? Math.PI / 2 : 0;
            return Math.floor(((this.roll.angle ?? 0) + m) / (Math.PI / p)) % 2 ? this.backColor ? this.backColor : this.roll.alter ? LS(d, this.roll.alter.type, this.roll.alter.value) : d : d
        }, this._initPosition = d => {
            const p = this.container,
                m = ke(this.options.zIndex.value);
            this.position = this._calcPosition(p, d, ag(m, 0, p.zLayers)), this.initialPosition = this.position.copy();
            const y = p.canvas.size;
            switch (this.moveCenter = {
                    ...fg(this.options.move.center, y),
                    radius: this.options.move.center.radius ?? 0,
                    mode: this.options.move.center.mode ?? "percent"
                }, this.direction = cS(this.options.move.direction, this.position, this.moveCenter), this.options.move.direction) {
            case "inside":
                this.outType = "inside";
                break;
            case "outside":
                this.outType = "outside";
                break
            }
            this.offset = Ni.origin
        }, this._loadShapeData = (d, p) => {
            const m = d.options[this.shape];
            if (m) return lt({
                close: d.close,
                fill: d.fill
            }, Br(m, this.id, p))
        }, this._engine = t, this.init(r, a, c, f)
    }
    destroy(t) {
        if (this.unbreakable || this.destroyed) return;
        this.destroyed = !0, this.bubble.inRange = !1, this.slow.inRange = !1;
        const r = this.container,
            o = this.pathGenerator;
        for (const [, a] of r.plugins) a.particleDestroyed && a.particleDestroyed(this, t);
        for (const a of r.particles.updaters) a.particleDestroyed && a.particleDestroyed(this, t);
        o && o.reset(this)
    }
    draw(t) {
        const r = this.container;
        for (const [, o] of r.plugins) r.canvas.drawParticlePlugin(o, this, t);
        r.canvas.drawParticle(this, t)
    }
    getFillColor() {
        return this._getRollColor(this.bubble.color ?? Cp(this.color))
    }
    getMass() {
        return this.getRadius() ** 2 * Math.PI / 2
    }
    getPosition() {
        return {
            x: this.position.x + this.offset.x,
            y: this.position.y + this.offset.y,
            z: this.position.z
        }
    }
    getRadius() {
        return this.bubble.radius ?? this.size.value
    }
    getStrokeColor() {
        return this._getRollColor(this.bubble.color ?? Cp(this.strokeColor))
    }
    init(t, r, o, a) {
        const c = this.container,
            f = this._engine;
        this.id = t, this.group = a, this.fill = !0, this.pathRotation = !1, this.close = !0, this.lastPathTime = 0, this.destroyed = !1, this.unbreakable = !1, this.rotation = 0, this.misplaced = !1, this.retina = {
            maxDistance: {}
        }, this.outType = "normal", this.ignoresResizeRatio = !0;
        const d = c.retina.pixelRatio,
            p = c.actualOptions,
            m = vg(this._engine, c, p.particles),
            y = m.shape.type,
            {
                reduceDuplicates: v
            } = m;
        this.shape = Br(y, this.id, v);
        const w = m.shape;
        if (o && o.shape && o.shape.type) {
            const F = o.shape.type,
                J = Br(F, this.id, v);
            J && (this.shape = J, w.load(o.shape))
        }
        this.shapeData = this._loadShapeData(w, v), m.load(o);
        const k = this.shapeData;
        k && m.load(k.particles);
        const T = new pg(f, c);
        T.load(c.actualOptions.interactivity), T.load(m.interactivity), this.interactivity = T, this.fill = (k == null ? void 0 : k.fill) ?? m.shape.fill, this.close = (k == null ? void 0 : k.close) ?? m.shape.close, this.options = m;
        const P = this.options.move.path;
        this.pathDelay = aS(P.delay) * 1e3, P.generator && (this.pathGenerator = this._engine.plugins.getPathGenerator(P.generator), this.pathGenerator && c.addPath(P.generator, this.pathGenerator) && this.pathGenerator.init(c)), c.retina.initParticle(this), this.size = vS(this.options.size, d), this.bubble = {
            inRange: !1
        }, this.slow = {
            inRange: !1,
            factor: 1
        }, this._initPosition(r), this.initialVelocity = this._calculateVelocity(), this.velocity = this.initialVelocity.copy(), this.moveDecay = 1 - ke(this.options.move.decay);
        const D = c.particles;
        D.needsSort = D.needsSort || D.lastZIndex < this.position.z, D.lastZIndex = this.position.z, this.zIndexFactor = this.position.z / c.zLayers, this.sides = 24;
        let O = c.drawers.get(this.shape);
        O || (O = this._engine.plugins.getShapeDrawer(this.shape), O && c.drawers.set(this.shape, O)), O && O.loadShape && O.loadShape(this);
        const j = O == null ? void 0 : O.getSidesCount;
        j && (this.sides = j(this)), this.spawning = !1, this.shadowColor = Fi(this.options.shadow.color);
        for (const F of c.particles.updaters) F.init(this);
        for (const F of c.particles.movers) F.init && F.init(this);
        O && O.particleInit && O.particleInit(c, this);
        for (const [, F] of c.plugins) F.particleCreated && F.particleCreated(this)
    }
    isInsideCanvas() {
        const t = this.getRadius(),
            r = this.container.canvas.size,
            o = this.position;
        return o.x >= -t && o.y >= -t && o.y <= r.height + t && o.x <= r.width + t
    }
    isVisible() {
        return !this.destroyed && !this.spawning && this.isInsideCanvas()
    }
    reset() {
        for (const t of this.container.particles.updaters) t.reset && t.reset(this)
    }
}
class CP {
    constructor(t, r) {
        this.position = t, this.particle = r
    }
}
class wg {
    constructor(t, r) {
        this.position = {
            x: t,
            y: r
        }
    }
}
class Ui extends wg {
    constructor(t, r, o, a) {
        super(t, r), this.size = {
            height: a,
            width: o
        }
    }
    contains(t) {
        const r = this.size.width,
            o = this.size.height,
            a = this.position;
        return t.x >= a.x && t.x <= a.x + r && t.y >= a.y && t.y <= a.y + o
    }
    intersects(t) {
        t instanceof Vo && t.intersects(this);
        const r = this.size.width,
            o = this.size.height,
            a = this.position,
            c = t.position,
            f = t instanceof Ui ? t.size : {
                width: 0,
                height: 0
            },
            d = f.width,
            p = f.height;
        return c.x < a.x + r && c.x + d > a.x && c.y < a.y + o && c.y + p > a.y
    }
}
class Vo extends wg {
    constructor(t, r, o) {
        super(t, r), this.radius = o
    }
    contains(t) {
        return nc(t, this.position) <= this.radius
    }
    intersects(t) {
        const r = this.position,
            o = t.position,
            a = {
                x: Math.abs(o.x - r.x),
                y: Math.abs(o.y - r.y)
            },
            c = this.radius;
        if (t instanceof Vo) {
            const f = c + t.radius,
                d = Math.sqrt(a.x ** 2 + a.y ** 2);
            return f > d
        } else if (t instanceof Ui) {
            const {
                width: f,
                height: d
            } = t.size;
            return Math.pow(a.x - f, 2) + Math.pow(a.y - d, 2) <= c ** 2 || a.x <= c + f && a.y <= c + d || a.x <= f || a.y <= d
        }
        return !1
    }
}
class Co {
    constructor(t, r) {
        this.rectangle = t, this.capacity = r, this._subdivide = () => {
            const {
                x: o,
                y: a
            } = this.rectangle.position, {
                width: c,
                height: f
            } = this.rectangle.size, {
                capacity: d
            } = this;
            for (let p = 0; p < 4; p++) this._subs.push(new Co(new Ui(o + c / 2 * (p % 2), a + f / 2 * (Math.round(p / 2) - p % 2), c / 2, f / 2), d));
            this._divided = !0
        }, this._points = [], this._divided = !1, this._subs = []
    }
    insert(t) {
        return this.rectangle.contains(t.position) ? this._points.length < this.capacity ? (this._points.push(t), !0) : (this._divided || this._subdivide(), this._subs.some(r => r.insert(t))) : !1
    }
    query(t, r, o) {
        const a = o || [];
        if (!t.intersects(this.rectangle)) return [];
        for (const c of this._points) !t.contains(c.position) && nc(t.position, c.position) > c.particle.getRadius() && (!r || r(c.particle)) || a.push(c.particle);
        if (this._divided)
            for (const c of this._subs) c.query(t, r, a);
        return a
    }
    queryCircle(t, r, o) {
        return this.query(new Vo(t.x, t.y, r), o)
    }
    queryRectangle(t, r, o) {
        return this.query(new Ui(t.x, t.y, r.width, r.height), o)
    }
}
const Ap = 4,
    Op = i => new Ui(-i.width / 4, -i.height / 4, i.width * 3 / 2, i.height * 3 / 2);
let EP = class {
    constructor(t, r) {
        this._applyDensity = (a, c, f) => {
            var k;
            if (!((k = a.number.density) != null && k.enable)) return;
            const d = a.number,
                p = this._initDensityFactor(d.density),
                m = d.value,
                y = d.limit > 0 ? d.limit : m,
                v = Math.min(m, y) * p + c,
                w = Math.min(this.count, this.filter(T => T.group === f).length);
            this.limit = d.limit * p, w < v ? this.push(Math.abs(v - w), void 0, a, f) : w > v && this.removeQuantity(w - v, f)
        }, this._initDensityFactor = a => {
            const c = this._container;
            if (!c.canvas.element || !a.enable) return 1;
            const f = c.canvas.element,
                d = c.retina.pixelRatio;
            return f.width * f.height / (a.factor * d ** 2 * a.area)
        }, this._pushParticle = (a, c, f, d) => {
            try {
                let p = this.pool.pop();
                p ? p.init(this._nextId, a, c, f) : p = new TP(this._engine, this._nextId, this._container, a, c, f);
                let m = !0;
                return d && (m = d(p)), m ? (this._array.push(p), this._zArray.push(p), this._nextId++, this._engine.dispatchEvent("particleAdded", {
                    container: this._container,
                    data: {
                        particle: p
                    }
                }), p) : void 0
            } catch (p) {
                Gr().warning(`${ti} adding particle: ${p}`);
                return
            }
        }, this._removeParticle = (a, c, f) => {
            const d = this._array[a];
            if (!d || d.group !== c) return !1;
            d.destroy(f);
            const p = this._zArray.indexOf(d);
            return this._array.splice(a, 1), this._zArray.splice(p, 1), this.pool.push(d), this._engine.dispatchEvent("particleRemoved", {
                container: this._container,
                data: {
                    particle: d
                }
            }), !0
        }, this._engine = t, this._container = r, this._nextId = 0, this._array = [], this._zArray = [], this.pool = [], this.limit = 0, this.needsSort = !1, this.lastZIndex = 0, this._interactionManager = new kP(t, r);
        const o = r.canvas.size;
        this.quadTree = new Co(Op(o), Ap), this.movers = this._engine.plugins.getMovers(r, !0), this.updaters = this._engine.plugins.getUpdaters(r, !0)
    }
    get count() {
        return this._array.length
    }
    addManualParticles() {
        const t = this._container,
            r = t.actualOptions;
        for (const o of r.manualParticles) this.addParticle(o.position ? fg(o.position, t.canvas.size) : void 0, o.options)
    }
    addParticle(t, r, o, a) {
        const c = this._container,
            f = c.actualOptions,
            d = f.particles.number.limit;
        if (d > 0) {
            const p = this.count + 1 - d;
            p > 0 && this.removeQuantity(p)
        }
        return this._pushParticle(t, r, o, a)
    }
    clear() {
        this._array = [], this._zArray = []
    }
    destroy() {
        this._array = [], this._zArray = [], this.movers = [], this.updaters = []
    }
    async draw(t) {
        const r = this._container;
        r.canvas.clear(), await this.update(t);
        for (const [, o] of r.plugins) r.canvas.drawPlugin(o, t);
        for (const o of this._zArray) o.draw(t)
    }
    filter(t) {
        return this._array.filter(t)
    }
    find(t) {
        return this._array.find(t)
    }
    handleClickMode(t) {
        this._interactionManager.handleClickMode(t)
    }
    init() {
        var a;
        const t = this._container,
            r = t.actualOptions;
        this.lastZIndex = 0, this.needsSort = !1;
        let o = !1;
        this.updaters = this._engine.plugins.getUpdaters(t, !0), this._interactionManager.init();
        for (const [, c] of t.plugins)
            if (c.particlesInitialization !== void 0 && (o = c.particlesInitialization()), o) break;
        this._interactionManager.init();
        for (const [, c] of t.pathGenerators) c.init(t);
        if (this.addManualParticles(), !o) {
            for (const c in r.particles.groups) {
                const f = r.particles.groups[c];
                for (let d = this.count, p = 0; p < ((a = f.number) == null ? void 0 : a.value) && d < r.particles.number.value; d++, p++) this.addParticle(void 0, f, c)
            }
            for (let c = this.count; c < r.particles.number.value; c++) this.addParticle()
        }
    }
    push(t, r, o, a) {
        this.pushing = !0;
        for (let c = 0; c < t; c++) this.addParticle(r == null ? void 0 : r.position, o, a);
        this.pushing = !1
    }
    async redraw() {
        this.clear(), this.init(), await this.draw({
            value: 0,
            factor: 0
        })
    }
    remove(t, r, o) {
        this.removeAt(this._array.indexOf(t), void 0, r, o)
    }
    removeAt(t, r = 1, o, a) {
        if (t < 0 || t > this.count) return;
        let c = 0;
        for (let f = t; c < r && f < this.count; f++) this._removeParticle(f--, o, a) && c++
    }
    removeQuantity(t, r) {
        this.removeAt(0, t, r)
    }
    setDensity() {
        const t = this._container.actualOptions,
            r = t.particles.groups;
        for (const o in r) this._applyDensity(r[o], 0, o);
        this._applyDensity(t.particles, t.manualParticles.length)
    }
    async update(t) {
        const r = this._container,
            o = new Set;
        this.quadTree = new Co(Op(r.canvas.size), Ap);
        for (const [, a] of r.pathGenerators) a.update();
        for (const [, a] of r.plugins) a.update && a.update(t);
        for (const a of this._array) {
            const c = r.canvas.resizeFactor;
            c && !a.ignoresResizeRatio && (a.position.x *= c.width, a.position.y *= c.height, a.initialPosition.x *= c.width, a.initialPosition.y *= c.height), a.ignoresResizeRatio = !1, await this._interactionManager.reset(a);
            for (const [, f] of this._container.plugins) {
                if (a.destroyed) break;
                f.particleUpdate && f.particleUpdate(a, t)
            }
            for (const f of this.movers) f.isEnabled(a) && f.move(a, t);
            if (a.destroyed) {
                o.add(a);
                continue
            }
            this.quadTree.insert(new CP(a.getPosition(), a))
        }
        if (o.size) {
            const a = c => !o.has(c);
            this._array = this.filter(a), this._zArray = this._zArray.filter(a), this.pool.push(...o)
        }
        await this._interactionManager.externalInteract(t);
        for (const a of this._array) {
            for (const c of this.updaters) c.update(a, t);
            !a.destroyed && !a.spawning && await this._interactionManager.particlesInteract(a, t)
        }
        if (delete r.canvas.resizeFactor, this.needsSort) {
            const a = this._zArray;
            a.sort((c, f) => f.position.z - c.position.z || c.id - f.id), this.lastZIndex = a[a.length - 1].position.z, this.needsSort = !1
        }
    }
};
class MP {
    constructor(t) {
        this.container = t, this.pixelRatio = 1, this.reduceFactor = 1
    }
    init() {
        const t = this.container,
            r = t.actualOptions;
        this.pixelRatio = !r.detectRetina || Lo() ? 1 : window.devicePixelRatio, this.reduceFactor = 1;
        const o = this.pixelRatio;
        if (t.canvas.element) {
            const f = t.canvas.element;
            t.canvas.size.width = f.offsetWidth * o, t.canvas.size.height = f.offsetHeight * o
        }
        const a = r.particles,
            c = a.move;
        this.attractDistance = ke(c.attract.distance) * o, this.maxSpeed = ke(c.gravity.maxSpeed) * o, this.sizeAnimationSpeed = ke(a.size.animation.speed) * o
    }
    initParticle(t) {
        const r = t.options,
            o = this.pixelRatio,
            a = r.move,
            c = a.distance,
            f = t.retina;
        f.attractDistance = ke(a.attract.distance) * o, f.moveDrift = ke(a.drift) * o, f.moveSpeed = ke(a.speed) * o, f.sizeAnimationSpeed = ke(r.size.animation.speed) * o;
        const d = f.maxDistance;
        d.horizontal = c.horizontal !== void 0 ? c.horizontal * o : void 0, d.vertical = c.vertical !== void 0 ? c.vertical * o : void 0, f.maxSpeed = ke(a.gravity.maxSpeed) * o
    }
}

function Ae(i) {
    return i && !i.destroyed
}

function RP(i, t = 60, r = !1) {
    return {
        value: i,
        factor: r ? 60 / t : 60 * i / 1e3
    }
}

function Ri(i, t, ...r) {
    const o = new _P(i, t);
    return yg(o, ...r), o
}
const DP = "default",
    Lp = {
        generate: i => i.velocity,
        init: () => {},
        update: () => {},
        reset: () => {}
    };
class AP {
    constructor(t, r, o) {
        this.id = r, this._intersectionManager = a => {
            if (!(!Ae(this) || !this.actualOptions.pauseOnOutsideViewport))
                for (const c of a) c.target === this.interactivity.element && (c.isIntersecting ? this.play : this.pause)()
        }, this._nextFrame = async a => {
            try {
                if (!this.smooth && this.lastFrameTime !== void 0 && a < this.lastFrameTime + 1e3 / this.fpsLimit) {
                    this.draw(!1);
                    return
                }
                this.lastFrameTime ?? (this.lastFrameTime = a);
                const c = RP(a - this.lastFrameTime, this.fpsLimit, this.smooth);
                if (this.addLifeTime(c.value), this.lastFrameTime = a, c.value > 1e3) {
                    this.draw(!1);
                    return
                }
                if (await this.particles.draw(c), !this.alive()) {
                    this.destroy();
                    return
                }
                this.getAnimationStatus() && this.draw(!1)
            } catch (c) {
                Gr().error(`${ti} in animation loop`, c)
            }
        }, this._engine = t, this.fpsLimit = 120, this.smooth = !1, this._delay = 0, this._duration = 0, this._lifeTime = 0, this._firstStart = !0, this.started = !1, this.destroyed = !1, this._paused = !0, this.lastFrameTime = 0, this.zLayers = 100, this.pageHidden = !1, this._sourceOptions = o, this._initialSourceOptions = o, this.retina = new MP(this), this.canvas = new VS(this), this.particles = new EP(this._engine, this), this.pathGenerators = new Map, this.interactivity = {
            mouse: {
                clicking: !1,
                inside: !1
            }
        }, this.plugins = new Map, this.drawers = new Map, this._options = Ri(this._engine, this), this.actualOptions = Ri(this._engine, this), this._eventListeners = new NS(this), typeof IntersectionObserver < "u" && IntersectionObserver && (this._intersectionObserver = new IntersectionObserver(a => this._intersectionManager(a))), this._engine.dispatchEvent("containerBuilt", {
            container: this
        })
    }
    get options() {
        return this._options
    }
    get sourceOptions() {
        return this._sourceOptions
    }
    addClickHandler(t) {
        if (!Ae(this)) return;
        const r = this.interactivity.element;
        if (!r) return;
        const o = (v, w, k) => {
                if (!Ae(this)) return;
                const T = this.retina.pixelRatio,
                    P = {
                        x: w.x * T,
                        y: w.y * T
                    },
                    D = this.particles.quadTree.queryCircle(P, k * T);
                t(v, D)
            },
            a = v => {
                if (!Ae(this)) return;
                const w = v,
                    k = {
                        x: w.offsetX || w.clientX,
                        y: w.offsetY || w.clientY
                    };
                o(v, k, 1)
            },
            c = () => {
                Ae(this) && (m = !0, y = !1)
            },
            f = () => {
                Ae(this) && (y = !0)
            },
            d = v => {
                if (Ae(this)) {
                    if (m && !y) {
                        const w = v;
                        let k = w.touches[w.touches.length - 1];
                        if (!k && (k = w.changedTouches[w.changedTouches.length - 1], !k)) return;
                        const T = this.canvas.element,
                            P = T ? T.getBoundingClientRect() : void 0,
                            D = {
                                x: k.clientX - (P ? P.left : 0),
                                y: k.clientY - (P ? P.top : 0)
                            };
                        o(v, D, Math.max(k.radiusX, k.radiusY))
                    }
                    m = !1, y = !1
                }
            },
            p = () => {
                Ae(this) && (m = !1, y = !1)
            };
        let m = !1,
            y = !1;
        r.addEventListener("click", a), r.addEventListener("touchstart", c), r.addEventListener("touchmove", f), r.addEventListener("touchend", d), r.addEventListener("touchcancel", p)
    }
    addLifeTime(t) {
        this._lifeTime += t
    }
    addPath(t, r, o = !1) {
        return !Ae(this) || !o && this.pathGenerators.has(t) ? !1 : (this.pathGenerators.set(t, r ?? Lp), !0)
    }
    alive() {
        return !this._duration || this._lifeTime <= this._duration
    }
    destroy() {
        if (!Ae(this)) return;
        this.stop(), this.particles.destroy(), this.canvas.destroy();
        for (const [, o] of this.drawers) o.destroy && o.destroy(this);
        for (const o of this.drawers.keys()) this.drawers.delete(o);
        this._engine.plugins.destroy(this), this.destroyed = !0;
        const t = this._engine.dom(),
            r = t.findIndex(o => o === this);
        r >= 0 && t.splice(r, 1), this._engine.dispatchEvent("containerDestroyed", {
            container: this
        })
    }
    draw(t) {
        if (!Ae(this)) return;
        let r = t;
        this._drawAnimationFrame = requestAnimationFrame(async o => {
            r && (this.lastFrameTime = void 0, r = !1), await this._nextFrame(o)
        })
    }
    async export (t, r = {}) {
        for (const [, o] of this.plugins) {
            if (!o.export) continue;
            const a = await o.export(t, r);
            if (a.supported) return a.blob
        }
        Gr().error(`${ti} - Export plugin with type ${t} not found`)
    }
    getAnimationStatus() {
        return !this._paused && !this.pageHidden && Ae(this)
    }
    handleClickMode(t) {
        if (Ae(this)) {
            this.particles.handleClickMode(t);
            for (const [, r] of this.plugins) r.handleClickMode && r.handleClickMode(t)
        }
    }
    async init() {
        if (!Ae(this)) return;
        const t = this._engine.plugins.getSupportedShapes();
        for (const o of t) {
            const a = this._engine.plugins.getShapeDrawer(o);
            a && this.drawers.set(o, a)
        }
        this._options = Ri(this._engine, this, this._initialSourceOptions, this.sourceOptions), this.actualOptions = Ri(this._engine, this, this._options);
        const r = this._engine.plugins.getAvailablePlugins(this);
        for (const [o, a] of r) this.plugins.set(o, a);
        this.retina.init(), await this.canvas.init(), this.updateActualOptions(), this.canvas.initBackground(), this.canvas.resize(), this.zLayers = this.actualOptions.zLayers, this._duration = ke(this.actualOptions.duration) * 1e3, this._delay = ke(this.actualOptions.delay) * 1e3, this._lifeTime = 0, this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 120, this.smooth = this.actualOptions.smooth;
        for (const [, o] of this.drawers) o.init && await o.init(this);
        for (const [, o] of this.plugins) o.init && await o.init();
        this._engine.dispatchEvent("containerInit", {
            container: this
        }), this.particles.init(), this.particles.setDensity();
        for (const [, o] of this.plugins) o.particlesSetup && o.particlesSetup();
        this._engine.dispatchEvent("particlesSetup", {
            container: this
        })
    }
    async loadTheme(t) {
        Ae(this) && (this._currentTheme = t, await this.refresh())
    }
    pause() {
        if (Ae(this) && (this._drawAnimationFrame !== void 0 && (cancelAnimationFrame(this._drawAnimationFrame), delete this._drawAnimationFrame), !this._paused)) {
            for (const [, t] of this.plugins) t.pause && t.pause();
            this.pageHidden || (this._paused = !0), this._engine.dispatchEvent("containerPaused", {
                container: this
            })
        }
    }
    play(t) {
        if (!Ae(this)) return;
        const r = this._paused || t;
        if (this._firstStart && !this.actualOptions.autoPlay) {
            this._firstStart = !1;
            return
        }
        if (this._paused && (this._paused = !1), r)
            for (const [, o] of this.plugins) o.play && o.play();
        this._engine.dispatchEvent("containerPlay", {
            container: this
        }), this.draw(r || !1)
    }
    async refresh() {
        if (Ae(this)) return this.stop(), this.start()
    }
    async reset() {
        if (Ae(this)) return this._initialSourceOptions = void 0, this._options = Ri(this._engine, this), this.actualOptions = Ri(this._engine, this, this._options), this.refresh()
    }
    setNoise(t, r, o) {
        Ae(this) && this.setPath(t, r, o)
    }
    setPath(t, r, o) {
        if (!t || !Ae(this)) return;
        const a = {
            ...Lp
        };
        if (hg(t)) a.generate = t, r && (a.init = r), o && (a.update = o);
        else {
            const c = a;
            a.generate = t.generate || c.generate, a.init = t.init || c.init, a.update = t.update || c.update
        }
        this.addPath(DP, a, !0)
    }
    async start() {
        !Ae(this) || this.started || (await this.init(), this.started = !0, await new Promise(t => {
            this._delayTimeout = setTimeout(async () => {
                this._eventListeners.addListeners(), this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.observe(this.interactivity.element);
                for (const [, r] of this.plugins) r.start && await r.start();
                this._engine.dispatchEvent("containerStarted", {
                    container: this
                }), this.play(), t()
            }, this._delay)
        }))
    }
    stop() {
        if (!(!Ae(this) || !this.started)) {
            this._delayTimeout && (clearTimeout(this._delayTimeout), delete this._delayTimeout), this._firstStart = !0, this.started = !1, this._eventListeners.removeListeners(), this.pause(), this.particles.clear(), this.canvas.stop(), this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.unobserve(this.interactivity.element);
            for (const [, t] of this.plugins) t.stop && t.stop();
            for (const t of this.plugins.keys()) this.plugins.delete(t);
            this._sourceOptions = this._options, this._engine.dispatchEvent("containerStopped", {
                container: this
            })
        }
    }
    updateActualOptions() {
        this.actualOptions.responsive = [];
        const t = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
        return this.actualOptions.setTheme(this._currentTheme), this.responsiveMaxWidth === t ? !1 : (this.responsiveMaxWidth = t, !0)
    }
}
class OP {
    constructor() {
        this._listeners = new Map
    }
    addEventListener(t, r) {
        this.removeEventListener(t, r);
        let o = this._listeners.get(t);
        o || (o = [], this._listeners.set(t, o)), o.push(r)
    }
    dispatchEvent(t, r) {
        const o = this._listeners.get(t);
        o && o.forEach(a => a(r))
    }
    hasEventListener(t) {
        return !!this._listeners.get(t)
    }
    removeAllEventListeners(t) {
        t ? this._listeners.delete(t) : this._listeners = new Map
    }
    removeEventListener(t, r) {
        const o = this._listeners.get(t);
        if (!o) return;
        const a = o.length,
            c = o.indexOf(r);
        c < 0 || (a === 1 ? this._listeners.delete(t) : o.splice(c, 1))
    }
}

function tu(i, t, r, o = !1) {
    let a = t.get(i);
    return (!a || o) && (a = [...r.values()].map(c => c(i)), t.set(i, a)), a
}
class LP {
    constructor(t) {
        this._engine = t, this.plugins = [], this._initializers = {
            interactors: new Map,
            movers: new Map,
            updaters: new Map
        }, this.interactors = new Map, this.movers = new Map, this.updaters = new Map, this.presets = new Map, this.drawers = new Map, this.pathGenerators = new Map
    }
    addInteractor(t, r) {
        this._initializers.interactors.set(t, r)
    }
    addParticleMover(t, r) {
        this._initializers.movers.set(t, r)
    }
    addParticleUpdater(t, r) {
        this._initializers.updaters.set(t, r)
    }
    addPathGenerator(t, r) {
        !this.getPathGenerator(t) && this.pathGenerators.set(t, r)
    }
    addPlugin(t) {
        !this.getPlugin(t.id) && this.plugins.push(t)
    }
    addPreset(t, r, o = !1) {
        (o || !this.getPreset(t)) && this.presets.set(t, r)
    }
    addShapeDrawer(t, r) {
        ni(t, o => {
            !this.getShapeDrawer(o) && this.drawers.set(o, r)
        })
    }
    destroy(t) {
        this.updaters.delete(t), this.movers.delete(t), this.interactors.delete(t)
    }
    getAvailablePlugins(t) {
        const r = new Map;
        for (const o of this.plugins) o.needsPlugin(t.actualOptions) && r.set(o.id, o.getPlugin(t));
        return r
    }
    getInteractors(t, r = !1) {
        return tu(t, this.interactors, this._initializers.interactors, r)
    }
    getMovers(t, r = !1) {
        return tu(t, this.movers, this._initializers.movers, r)
    }
    getPathGenerator(t) {
        return this.pathGenerators.get(t)
    }
    getPlugin(t) {
        return this.plugins.find(r => r.id === t)
    }
    getPreset(t) {
        return this.presets.get(t)
    }
    getShapeDrawer(t) {
        return this.drawers.get(t)
    }
    getSupportedShapes() {
        return this.drawers.keys()
    }
    getUpdaters(t, r = !1) {
        return tu(t, this.updaters, this._initializers.updaters, r)
    }
    loadOptions(t, r) {
        for (const o of this.plugins) o.loadOptions(t, r)
    }
    loadParticlesOptions(t, r, ...o) {
        const a = this.updaters.get(t);
        if (a)
            for (const c of a) c.loadOptions && c.loadOptions(r, ...o)
    }
}
async function zP(i) {
    const t = Br(i.url, i.index);
    if (!t) return i.fallback;
    const r = await fetch(t);
    return r.ok ? r.json() : (Gr().error(`${ti} ${r.status} while retrieving config file`), i.fallback)
}

function VP(i) {
    return !i.id && !i.element && !i.url && !i.options
}

function NP(i) {
    return !VP(i)
}
class IP {
    constructor() {
        this._configs = new Map, this._domArray = [], this._eventDispatcher = new OP, this._initialized = !1, this.plugins = new LP(this)
    }
    get configs() {
        const t = {};
        for (const [r, o] of this._configs) t[r] = o;
        return t
    }
    get version() {
        return "2.12.0"
    }
    addConfig(t, r) {
        qt(t) ? r && (r.name = t, this._configs.set(t, r)) : this._configs.set(t.name ?? "default", t)
    }
    addEventListener(t, r) {
        this._eventDispatcher.addEventListener(t, r)
    }
    async addInteractor(t, r, o = !0) {
        this.plugins.addInteractor(t, r), await this.refresh(o)
    }
    async addMover(t, r, o = !0) {
        this.plugins.addParticleMover(t, r), await this.refresh(o)
    }
    async addParticleUpdater(t, r, o = !0) {
        this.plugins.addParticleUpdater(t, r), await this.refresh(o)
    }
    async addPathGenerator(t, r, o = !0) {
        this.plugins.addPathGenerator(t, r), await this.refresh(o)
    }
    async addPlugin(t, r = !0) {
        this.plugins.addPlugin(t), await this.refresh(r)
    }
    async addPreset(t, r, o = !1, a = !0) {
        this.plugins.addPreset(t, r, o), await this.refresh(a)
    }
    async addShape(t, r, o, a, c, f = !0) {
        let d, p = f,
            m, y, v;
        Ln(o) ? (p = o, m = void 0) : m = o, Ln(a) ? (p = a, y = void 0) : y = a, Ln(c) ? (p = c, v = void 0) : v = c, hg(r) ? d = {
            afterEffect: y,
            destroy: v,
            draw: r,
            init: m
        } : d = r, this.plugins.addShapeDrawer(t, d), await this.refresh(p)
    }
    dispatchEvent(t, r) {
        this._eventDispatcher.dispatchEvent(t, r)
    }
    dom() {
        return this._domArray
    }
    domItem(t) {
        const r = this.dom(),
            o = r[t];
        if (!o || o.destroyed) {
            r.splice(t, 1);
            return
        }
        return o
    }
    init() {
        this._initialized || (this._initialized = !0)
    }
    async load(t, r) {
        return this.loadFromArray(t, r)
    }
    async loadFromArray(t, r, o) {
        let a;
        return NP(t) ? a = t : (a = {}, qt(t) ? a.id = t : a.options = t, Bt(r) ? a.index = r : a.options = r ?? a.options, a.index = o ?? a.index), this._loadParams(a)
    }
    async loadJSON(t, r, o) {
        let a, c;
        return Bt(r) || r === void 0 ? a = t : (c = t, a = r), this._loadParams({
            id: c,
            url: a,
            index: o
        })
    }
    async refresh(t = !0) {
        t && this.dom().forEach(r => r.refresh())
    }
    removeEventListener(t, r) {
        this._eventDispatcher.removeEventListener(t, r)
    }
    async set(t, r, o, a) {
        const c = {
            index: a
        };
        return qt(t) ? c.id = t : c.element = t, r instanceof HTMLElement ? c.element = r : c.options = r, Bt(o) ? c.index = o : c.options = o ?? c.options, this._loadParams(c)
    }
    async setJSON(t, r, o, a) {
        const c = {};
        return t instanceof HTMLElement ? (c.element = t, c.url = r, c.index = o) : (c.id = t, c.element = r, c.url = o, c.index = a), this._loadParams(c)
    }
    setOnClickHandler(t) {
        const r = this.dom();
        if (!r.length) throw new Error(`${ti} can only set click handlers after calling tsParticles.load()`);
        for (const o of r) o.addClickHandler(t)
    }
    async _loadParams(t) {
        const r = t.id ?? `tsparticles${Math.floor(hn()*1e4)}`,
            {
                index: o,
                url: a
            } = t,
            c = a ? await zP({
                fallback: t.options,
                url: a,
                index: o
            }) : t.options;
        let f = t.element ?? document.getElementById(r);
        f || (f = document.createElement("div"), f.id = r, document.body.append(f));
        const d = Br(c, o),
            p = this.dom(),
            m = p.findIndex(w => w.id === r);
        if (m >= 0) {
            const w = this.domItem(m);
            w && !w.destroyed && (w.destroy(), p.splice(m, 1))
        }
        let y;
        if (f.tagName.toLowerCase() === "canvas") y = f, y.dataset[br] = "false";
        else {
            const w = f.getElementsByTagName("canvas");
            w.length ? (y = w[0], y.dataset[br] = "false") : (y = document.createElement("canvas"), y.dataset[br] = "true", f.appendChild(y))
        }
        y.style.width || (y.style.width = "100%"), y.style.height || (y.style.height = "100%");
        const v = new AP(this, r, d);
        return m >= 0 ? p.splice(m, 0, v) : p.push(v), v.canvas.loadCanvas(y), await v.start(), v
    }
}
class FP {
    constructor() {
        this.key = "hsl", this.stringPrefix = "hsl"
    }
    handleColor(t) {
        const r = t.value,
            o = r.hsl ?? t.value;
        if (o.h !== void 0 && o.s !== void 0 && o.l !== void 0) return wu(o)
    }
    handleRangeColor(t) {
        const r = t.value,
            o = r.hsl ?? t.value;
        if (o.h !== void 0 && o.l !== void 0) return wu({
            h: ke(o.h),
            l: ke(o.l),
            s: ke(o.s)
        })
    }
    parseString(t) {
        if (!t.startsWith("hsl")) return;
        const r = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i,
            o = r.exec(t);
        return o ? kS({
            a: o.length > 4 ? ug(o[5]) : 1,
            h: parseInt(o[1], 10),
            l: parseInt(o[3], 10),
            s: parseInt(o[2], 10)
        }) : void 0
    }
}
class jP {
    constructor() {
        this.key = "rgb", this.stringPrefix = "rgb"
    }
    handleColor(t) {
        const r = t.value,
            o = r.rgb ?? t.value;
        if (o.r !== void 0) return o
    }
    handleRangeColor(t) {
        const r = t.value,
            o = r.rgb ?? t.value;
        if (o.r !== void 0) return {
            r: ke(o.r),
            g: ke(o.g),
            b: ke(o.b)
        }
    }
    parseString(t) {
        if (!t.startsWith(this.stringPrefix)) return;
        const r = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i,
            o = r.exec(t);
        return o ? {
            a: o.length > 4 ? ug(o[5]) : 1,
            b: parseInt(o[3], 10),
            g: parseInt(o[2], 10),
            r: parseInt(o[1], 10)
        } : void 0
    }
}

function bP() {
    const i = new jP,
        t = new FP;
    _p(i), _p(t);
    const r = new IP;
    return r.init(), r
}
const xu = bP();
Lo() || (window.tsParticles = xu);
const Vi = i => typeof i == "object" && i !== null;

function Eo(i, t, r = () => !1) {
    if (!Vi(i) || !Vi(t)) return i === t;
    const o = Object.keys(i).filter(c => !r(c)),
        a = Object.keys(t).filter(c => !r(c));
    if (o.length !== a.length) return !1;
    for (const c of o) {
        const f = i[c],
            d = t[c];
        if (Vi(f) && Vi(d)) {
            if (f === t && d === i) continue;
            if (!Eo(f, d, r)) return !1
        } else if (Array.isArray(f) && Array.isArray(d)) {
            if (!xg(f, d, r)) return !1
        } else if (f !== d) return !1
    }
    return !0
}

function xg(i, t, r) {
    if (i.length !== t.length) return !1;
    for (let o = 0; o < i.length; o++) {
        const a = i[o],
            c = t[o];
        if (Array.isArray(a) && Array.isArray(c)) {
            if (!xg(a, c, r)) return !1
        } else if (Vi(a) && Vi(c)) {
            if (!Eo(a, c, r)) return !1
        } else if (a !== c) return !1
    }
    return !0
}
const Sg = "tsparticles";
class No extends se.Component {
    constructor(t) {
        super(t), this.state = {
            init: !1,
            library: void 0
        }
    }
    destroy() {
        this.state.library && (this.state.library.destroy(), this.setState({
            library: void 0
        }))
    }
    shouldComponentUpdate(t) {
        const r = t.options ?? t.params,
            o = this.props.options ?? this.props.params;
        return t.url !== this.props.url || t.id !== this.props.id || t.canvasClassName !== this.props.canvasClassName || t.className !== this.props.className || t.height !== this.props.height || t.width !== this.props.width || !Eo(t.style, this.props.style) || t.init !== this.props.init || t.loaded !== this.props.loaded || !Eo(r, o, a => a.startsWith("_"))
    }
    componentDidUpdate() {
        this.refresh()
    }
    forceUpdate() {
        this.refresh().then(() => {
            super.forceUpdate()
        })
    }
    componentDidMount() {
        (async () => (this.props.init && await this.props.init(xu), this.setState({
            init: !0
        }, async () => {
            await this.loadParticles()
        })))()
    }
    componentWillUnmount() {
        this.destroy()
    }
    render() {
        const {
            width: t,
            height: r,
            className: o,
            canvasClassName: a,
            id: c
        } = this.props;
        return Jh.createElement("div", {
            className: o,
            id: c
        }, Jh.createElement("canvas", {
            className: a,
            style: {
                ...this.props.style,
                width: t,
                height: r
            }
        }))
    }
    async refresh() {
        this.destroy(), await this.loadParticles()
    }
    async loadParticles() {
        if (!this.state.init) return;
        const t = this.props.id ?? No.defaultProps.id ?? Sg,
            r = await xu.load({
                url: this.props.url,
                id: t,
                options: this.props.options ?? this.props.params
            });
        this.props.container && (this.props.container.current = r), this.setState({
            library: r
        }), this.props.loaded && await this.props.loaded(r)
    }
}
No.defaultProps = {
    width: "100%",
    height: "100%",
    options: {},
    style: {},
    url: void 0,
    id: Sg
};
const BP = () => {
    const i = ["nice", "hot", "sexy", "cute", "your waifu", "made with love", "well developed", "powerful", "fast", "easy to use", "open source", "free", "awesome", "beautiful", "amazing", "incredible", "fantastic", "wonderful"],
        t = () => {
            const d = Math.floor(Math.random() * i.length);
            return i[d]
        },
        [r, o] = se.useState("");
    se.useEffect(() => {
        const d = setInterval(() => {
            o(t())
        }, 2e3);
        return () => clearInterval(d)
    }, []);
    const [a, c] = se.useState(!1), f = () => {
        c(d => !d)
    };
    return W.jsxs(W.Fragment, {
        children: [W.jsx(No, {
            id: "tsparticles",
            options: {
                particles: {
                    number: {
                        value: 100,
                        density: {
                            enable: !0,
                            value_area: 800
                        }
                    },
                    shape: {
                        type: "circle"
                    },
                    opacity: {
                        value: .5,
                        random: !0
                    },
                    size: {
                        value: 3
                    },
                    line_linked: {
                        enable: !0,
                        distance: 150,
                        color: "#ff4d4d",
                        opacity: .4,
                        width: 1
                    }
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: !0,
                            mode: "repulse"
                        }
                    }
                }
            },
            style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1
            }
        }), W.jsxs("div", {
            className: "min-h-screen bg-[#1a1a1a] text-white",
            children: [W.jsx("nav", {
                className: "",
                children: W.jsxs("div", {
                    className: "",
                    children: [W.jsx("a", {
                        href: "#home",
                        children: ""
                    }), W.jsx("button", {
                        className: "block lg:hidden text-white",
                        onClick: f,
                        children: W.jsx("i", {
                            className: `fas ${a?"fa-times":"fa-bars"} text-2xl`
                        })
                    }), W.jsxs("div", {
                        className: `lg:hidden fixed top-0 right-0 w-64 bg-[#333333] text-white h-full z-50 transition-transform duration-300 ${a?"transform translate-x-0":"transform translate-x-full"}`,
                        children: [W.jsx("div", {
                            className: "flex justify-end p-4",
                            children: W.jsx("button", {
                                onClick: f,
                                className: "text-white",
                                children: W.jsx("i", {
                                    className: "fas fa-times text-2xl"
                                })
                            })
                        })]}), W.jsxs("ul", {
                        className: "hidden lg:flex space-x-4",
                        children: [W.jsx("li", {
                            }), W.jsx("li", {
                        }), W.jsx("li", {
                        }), W.jsx("li", {
                        }), W.jsx("li", {
                            children: W.jsx("a", {
                                href: "",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "hover:text-[#ff6666]",
                                children: ""
                            })
                        })]
                    })]
                })
            }), W.jsx("section", {
                id: "home",
                className: "flex items-center justify-center min-h-screen bg-gradient-to-b from-[#333333] via-[#1a1a1a] to-black text-center px-4",
                children: W.jsxs("div", {
                    children: [W.jsx(Ar.h1, {
                        className: "text-4xl font-bold mb-4 text-[#ff4d4d] sm:text-5xl md:text-6xl",
                        initial: {
                            opacity: 0,
                            y: -50
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 1
                        },
                        children: "Hello, welcome to"
                    }), W.jsx(Ar.h2, {
                        className: "text-6xl font-extrabold text-[#ff4d4d] sm:text-7xl",
                        initial: {
                            opacity: 0,
                            y: -50
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: .5,
                            duration: 1
                        },
                        children: "Sopra"
                    }), W.jsxs(Ar.p, {
                        className: "text-xl mt-4 text-gray-300 sm:text-2xl",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 1,
                            duration: 1
                        },
                        children: ["We're", " ", W.jsx("span", {
                            className: "text-[#ff6666]",
                            children: W.jsx(Zx, {
                                text: r,
                                speed: 100,
                                eraseSpeed: 50,
                                eraseDelay: 1e3,
                                typingDelay: 1e3
                            })
                        })]
                    }), console.log(r), W.jsx("a", {
                        href: "",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "mt-6 inline-block px-6 py-3 bg-[#ff4d4d] hover:bg-[#ff6666] rounded-lg text-white font-semibold transition duration-300",
                        children: "Download"
                    })]
                })
            }), W.jsxs("footer", {
                className: "",
                children: [W.jsx("p", {
                }), W.jsx("a", {
                })]
            })]
        })]
    })
};


Tv.createRoot(document.getElementById("root")).render(W.jsx(se.StrictMode, {
    children: W.jsx(BP, {})
}));
