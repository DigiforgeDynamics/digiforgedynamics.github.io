var rc = e => {
    throw TypeError(e)
}
;
var qs = (e, t, n) => t.has(e) || rc("Cannot " + n);
var b = (e, t, n) => (qs(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , q = (e, t, n) => t.has(e) ? rc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , W = (e, t, n, r) => (qs(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , ke = (e, t, n) => (qs(e, t, "access private method"),
n);
var ni = (e, t, n, r) => ({
    set _(o) {
        W(e, t, o, n)
    },
    get _() {
        return b(e, t, r)
    }
});
function tg(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
}
)();
function tf(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var nf = {
    exports: {}
}
  , ys = {}
  , rf = {
    exports: {}
}
  , Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ho = Symbol.for("react.element")
  , ng = Symbol.for("react.portal")
  , rg = Symbol.for("react.fragment")
  , og = Symbol.for("react.strict_mode")
  , ig = Symbol.for("react.profiler")
  , sg = Symbol.for("react.provider")
  , lg = Symbol.for("react.context")
  , ag = Symbol.for("react.forward_ref")
  , ug = Symbol.for("react.suspense")
  , cg = Symbol.for("react.memo")
  , dg = Symbol.for("react.lazy")
  , oc = Symbol.iterator;
function fg(e) {
    return e === null || typeof e != "object" ? null : (e = oc && e[oc] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var of = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , sf = Object.assign
  , lf = {};
function Wr(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = lf,
    this.updater = n || of
}
Wr.prototype.isReactComponent = {};
Wr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Wr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function af() {}
af.prototype = Wr.prototype;
function Ua(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = lf,
    this.updater = n || of
}
var Ba = Ua.prototype = new af;
Ba.constructor = Ua;
sf(Ba, Wr.prototype);
Ba.isPureReactComponent = !0;
var ic = Array.isArray
  , uf = Object.prototype.hasOwnProperty
  , Va = {
    current: null
}
  , cf = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function df(e, t, n) {
    var r, o = {}, i = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            uf.call(t, r) && !cf.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        o.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        o.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            o[r] === void 0 && (o[r] = l[r]);
    return {
        $$typeof: Ho,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Va.current
    }
}
function pg(e, t) {
    return {
        $$typeof: Ho,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Wa(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ho
}
function hg(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var sc = /\/+/g;
function Zs(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? hg("" + e.key) : t.toString(36)
}
function Pi(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Ho:
            case ng:
                s = !0
            }
        }
    if (s)
        return s = e,
        o = o(s),
        e = r === "" ? "." + Zs(s, 0) : r,
        ic(o) ? (n = "",
        e != null && (n = e.replace(sc, "$&/") + "/"),
        Pi(o, t, n, "", function(u) {
            return u
        })) : o != null && (Wa(o) && (o = pg(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(sc, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    ic(e))
        for (var l = 0; l < e.length; l++) {
            i = e[l];
            var a = r + Zs(i, l);
            s += Pi(i, t, n, a, o)
        }
    else if (a = fg(e),
    typeof a == "function")
        for (e = a.call(e),
        l = 0; !(i = e.next()).done; )
            i = i.value,
            a = r + Zs(i, l++),
            s += Pi(i, t, n, a, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function ri(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return Pi(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }),
    r
}
function mg(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Le = {
    current: null
}
  , Ti = {
    transition: null
}
  , gg = {
    ReactCurrentDispatcher: Le,
    ReactCurrentBatchConfig: Ti,
    ReactCurrentOwner: Va
};
function ff() {
    throw Error("act(...) is not supported in production builds of React.")
}
Y.Children = {
    map: ri,
    forEach: function(e, t, n) {
        ri(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ri(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return ri(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Wa(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Y.Component = Wr;
Y.Fragment = rg;
Y.Profiler = ig;
Y.PureComponent = Ua;
Y.StrictMode = og;
Y.Suspense = ug;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gg;
Y.act = ff;
Y.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = sf({}, e.props)
      , o = e.key
      , i = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        s = Va.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (a in t)
            uf.call(t, a) && !cf.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: Ho,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
}
;
Y.createContext = function(e) {
    return e = {
        $$typeof: lg,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: sg,
        _context: e
    },
    e.Consumer = e
}
;
Y.createElement = df;
Y.createFactory = function(e) {
    var t = df.bind(null, e);
    return t.type = e,
    t
}
;
Y.createRef = function() {
    return {
        current: null
    }
}
;
Y.forwardRef = function(e) {
    return {
        $$typeof: ag,
        render: e
    }
}
;
Y.isValidElement = Wa;
Y.lazy = function(e) {
    return {
        $$typeof: dg,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: mg
    }
}
;
Y.memo = function(e, t) {
    return {
        $$typeof: cg,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
Y.startTransition = function(e) {
    var t = Ti.transition;
    Ti.transition = {};
    try {
        e()
    } finally {
        Ti.transition = t
    }
}
;
Y.unstable_act = ff;
Y.useCallback = function(e, t) {
    return Le.current.useCallback(e, t)
}
;
Y.useContext = function(e) {
    return Le.current.useContext(e)
}
;
Y.useDebugValue = function() {}
;
Y.useDeferredValue = function(e) {
    return Le.current.useDeferredValue(e)
}
;
Y.useEffect = function(e, t) {
    return Le.current.useEffect(e, t)
}
;
Y.useId = function() {
    return Le.current.useId()
}
;
Y.useImperativeHandle = function(e, t, n) {
    return Le.current.useImperativeHandle(e, t, n)
}
;
Y.useInsertionEffect = function(e, t) {
    return Le.current.useInsertionEffect(e, t)
}
;
Y.useLayoutEffect = function(e, t) {
    return Le.current.useLayoutEffect(e, t)
}
;
Y.useMemo = function(e, t) {
    return Le.current.useMemo(e, t)
}
;
Y.useReducer = function(e, t, n) {
    return Le.current.useReducer(e, t, n)
}
;
Y.useRef = function(e) {
    return Le.current.useRef(e)
}
;
Y.useState = function(e) {
    return Le.current.useState(e)
}
;
Y.useSyncExternalStore = function(e, t, n) {
    return Le.current.useSyncExternalStore(e, t, n)
}
;
Y.useTransition = function() {
    return Le.current.useTransition()
}
;
Y.version = "18.3.1";
rf.exports = Y;
var x = rf.exports;
const O = tf(x)
  , vg = tg({
    __proto__: null,
    default: O
}, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yg = x
  , wg = Symbol.for("react.element")
  , xg = Symbol.for("react.fragment")
  , Sg = Object.prototype.hasOwnProperty
  , Eg = yg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Cg = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function pf(e, t, n) {
    var r, o = {}, i = null, s = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        Sg.call(t, r) && !Cg.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: wg,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Eg.current
    }
}
ys.Fragment = xg;
ys.jsx = pf;
ys.jsxs = pf;
nf.exports = ys;
var E = nf.exports
  , hf = {
    exports: {}
}
  , Ze = {}
  , mf = {
    exports: {}
}
  , gf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(k, _) {
        var z = k.length;
        k.push(_);
        e: for (; 0 < z; ) {
            var j = z - 1 >>> 1
              , F = k[j];
            if (0 < o(F, _))
                k[j] = _,
                k[z] = F,
                z = j;
            else
                break e
        }
    }
    function n(k) {
        return k.length === 0 ? null : k[0]
    }
    function r(k) {
        if (k.length === 0)
            return null;
        var _ = k[0]
          , z = k.pop();
        if (z !== _) {
            k[0] = z;
            e: for (var j = 0, F = k.length, G = F >>> 1; j < G; ) {
                var le = 2 * (j + 1) - 1
                  , Ve = k[le]
                  , Z = le + 1
                  , lt = k[Z];
                if (0 > o(Ve, z))
                    Z < F && 0 > o(lt, Ve) ? (k[j] = lt,
                    k[Z] = z,
                    j = Z) : (k[j] = Ve,
                    k[le] = z,
                    j = le);
                else if (Z < F && 0 > o(lt, z))
                    k[j] = lt,
                    k[Z] = z,
                    j = Z;
                else
                    break e
            }
        }
        return _
    }
    function o(k, _) {
        var z = k.sortIndex - _.sortIndex;
        return z !== 0 ? z : k.id - _.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date
          , l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = []
      , u = []
      , d = 1
      , f = null
      , c = 3
      , v = !1
      , y = !1
      , g = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , h = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(k) {
        for (var _ = n(u); _ !== null; ) {
            if (_.callback === null)
                r(u);
            else if (_.startTime <= k)
                r(u),
                _.sortIndex = _.expirationTime,
                t(a, _);
            else
                break;
            _ = n(u)
        }
    }
    function S(k) {
        if (g = !1,
        m(k),
        !y)
            if (n(a) !== null)
                y = !0,
                U(C);
            else {
                var _ = n(u);
                _ !== null && K(S, _.startTime - k)
            }
    }
    function C(k, _) {
        y = !1,
        g && (g = !1,
        h(N),
        N = -1),
        v = !0;
        var z = c;
        try {
            for (m(_),
            f = n(a); f !== null && (!(f.expirationTime > _) || k && !$()); ) {
                var j = f.callback;
                if (typeof j == "function") {
                    f.callback = null,
                    c = f.priorityLevel;
                    var F = j(f.expirationTime <= _);
                    _ = e.unstable_now(),
                    typeof F == "function" ? f.callback = F : f === n(a) && r(a),
                    m(_)
                } else
                    r(a);
                f = n(a)
            }
            if (f !== null)
                var G = !0;
            else {
                var le = n(u);
                le !== null && K(S, le.startTime - _),
                G = !1
            }
            return G
        } finally {
            f = null,
            c = z,
            v = !1
        }
    }
    var P = !1
      , T = null
      , N = -1
      , D = 5
      , A = -1;
    function $() {
        return !(e.unstable_now() - A < D)
    }
    function I() {
        if (T !== null) {
            var k = e.unstable_now();
            A = k;
            var _ = !0;
            try {
                _ = T(!0, k)
            } finally {
                _ ? H() : (P = !1,
                T = null)
            }
        } else
            P = !1
    }
    var H;
    if (typeof p == "function")
        H = function() {
            p(I)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var M = new MessageChannel
          , Q = M.port2;
        M.port1.onmessage = I,
        H = function() {
            Q.postMessage(null)
        }
    } else
        H = function() {
            w(I, 0)
        }
        ;
    function U(k) {
        T = k,
        P || (P = !0,
        H())
    }
    function K(k, _) {
        N = w(function() {
            k(e.unstable_now())
        }, _)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(k) {
        k.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        y || v || (y = !0,
        U(C))
    }
    ,
    e.unstable_forceFrameRate = function(k) {
        0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < k ? Math.floor(1e3 / k) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return c
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(k) {
        switch (c) {
        case 1:
        case 2:
        case 3:
            var _ = 3;
            break;
        default:
            _ = c
        }
        var z = c;
        c = _;
        try {
            return k()
        } finally {
            c = z
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(k, _) {
        switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            k = 3
        }
        var z = c;
        c = k;
        try {
            return _()
        } finally {
            c = z
        }
    }
    ,
    e.unstable_scheduleCallback = function(k, _, z) {
        var j = e.unstable_now();
        switch (typeof z == "object" && z !== null ? (z = z.delay,
        z = typeof z == "number" && 0 < z ? j + z : j) : z = j,
        k) {
        case 1:
            var F = -1;
            break;
        case 2:
            F = 250;
            break;
        case 5:
            F = 1073741823;
            break;
        case 4:
            F = 1e4;
            break;
        default:
            F = 5e3
        }
        return F = z + F,
        k = {
            id: d++,
            callback: _,
            priorityLevel: k,
            startTime: z,
            expirationTime: F,
            sortIndex: -1
        },
        z > j ? (k.sortIndex = z,
        t(u, k),
        n(a) === null && k === n(u) && (g ? (h(N),
        N = -1) : g = !0,
        K(S, z - j))) : (k.sortIndex = F,
        t(a, k),
        y || v || (y = !0,
        U(C))),
        k
    }
    ,
    e.unstable_shouldYield = $,
    e.unstable_wrapCallback = function(k) {
        var _ = c;
        return function() {
            var z = c;
            c = _;
            try {
                return k.apply(this, arguments)
            } finally {
                c = z
            }
        }
    }
}
)(gf);
mf.exports = gf;
var kg = mf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pg = x
  , qe = kg;
function R(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var vf = new Set
  , Eo = {};
function qn(e, t) {
    jr(e, t),
    jr(e + "Capture", t)
}
function jr(e, t) {
    for (Eo[e] = t,
    e = 0; e < t.length; e++)
        vf.add(t[e])
}
var $t = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Al = Object.prototype.hasOwnProperty
  , Tg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , lc = {}
  , ac = {};
function bg(e) {
    return Al.call(ac, e) ? !0 : Al.call(lc, e) ? !1 : Tg.test(e) ? ac[e] = !0 : (lc[e] = !0,
    !1)
}
function Ng(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Rg(e, t, n, r) {
    if (t === null || typeof t > "u" || Ng(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function je(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = s
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ce[e] = new je(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Ce[t] = new je(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ce[e] = new je(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ce[e] = new je(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ce[e] = new je(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ce[e] = new je(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Ce[e] = new je(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ce[e] = new je(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Ce[e] = new je(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Ha = /[\-:]([a-z])/g;
function Qa(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Ha, Qa);
    Ce[t] = new je(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Ha, Qa);
    Ce[t] = new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Ha, Qa);
    Ce[t] = new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ce[e] = new je(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Ce.xlinkHref = new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ce[e] = new je(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Ka(e, t, n, r) {
    var o = Ce.hasOwnProperty(t) ? Ce[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Rg(t, n, o, r) && (n = null),
    r || o === null ? bg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Qt = Pg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , oi = Symbol.for("react.element")
  , ir = Symbol.for("react.portal")
  , sr = Symbol.for("react.fragment")
  , Ya = Symbol.for("react.strict_mode")
  , Ml = Symbol.for("react.profiler")
  , yf = Symbol.for("react.provider")
  , wf = Symbol.for("react.context")
  , Ga = Symbol.for("react.forward_ref")
  , Ll = Symbol.for("react.suspense")
  , jl = Symbol.for("react.suspense_list")
  , Xa = Symbol.for("react.memo")
  , nn = Symbol.for("react.lazy")
  , xf = Symbol.for("react.offscreen")
  , uc = Symbol.iterator;
function qr(e) {
    return e === null || typeof e != "object" ? null : (e = uc && e[uc] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ce = Object.assign, Js;
function lo(e) {
    if (Js === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Js = t && t[1] || ""
        }
    return `
` + Js + e
}
var el = !1;
function tl(e, t) {
    if (!e || el)
        return "";
    el = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l]; )
                l--;
            for (; 1 <= s && 0 <= l; s--,
            l--)
                if (o[s] !== i[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--,
                            l--,
                            0 > l || o[s] !== i[l]) {
                                var a = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        el = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? lo(e) : ""
}
function _g(e) {
    switch (e.tag) {
    case 5:
        return lo(e.type);
    case 16:
        return lo("Lazy");
    case 13:
        return lo("Suspense");
    case 19:
        return lo("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = tl(e.type, !1),
        e;
    case 11:
        return e = tl(e.type.render, !1),
        e;
    case 1:
        return e = tl(e.type, !0),
        e;
    default:
        return ""
    }
}
function Dl(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case sr:
        return "Fragment";
    case ir:
        return "Portal";
    case Ml:
        return "Profiler";
    case Ya:
        return "StrictMode";
    case Ll:
        return "Suspense";
    case jl:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case wf:
            return (e.displayName || "Context") + ".Consumer";
        case yf:
            return (e._context.displayName || "Context") + ".Provider";
        case Ga:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Xa:
            return t = e.displayName || null,
            t !== null ? t : Dl(e.type) || "Memo";
        case nn:
            t = e._payload,
            e = e._init;
            try {
                return Dl(e(t))
            } catch {}
        }
    return null
}
function Og(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Dl(t);
    case 8:
        return t === Ya ? "StrictMode" : "Mode";
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
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Cn(e) {
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
function Sf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Ag(e) {
    var t = Sf(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s,
                i.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function ii(e) {
    e._valueTracker || (e._valueTracker = Ag(e))
}
function Ef(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Sf(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function $i(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Il(e, t) {
    var n = t.checked;
    return ce({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function cc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Cn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Cf(e, t) {
    t = t.checked,
    t != null && Ka(e, "checked", t, !1)
}
function zl(e, t) {
    Cf(e, t);
    var n = Cn(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Fl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Fl(e, t.type, Cn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function dc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Fl(e, t, n) {
    (t !== "number" || $i(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var ao = Array.isArray;
function vr(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Cn(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function $l(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(R(91));
    return ce({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function fc(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(R(92));
            if (ao(n)) {
                if (1 < n.length)
                    throw Error(R(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Cn(n)
    }
}
function kf(e, t) {
    var n = Cn(t.value)
      , r = Cn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function pc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Pf(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Ul(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Pf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var si, Tf = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (si = si || document.createElement("div"),
        si.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = si.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Co(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var fo = {
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
}
  , Mg = ["Webkit", "ms", "Moz", "O"];
Object.keys(fo).forEach(function(e) {
    Mg.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        fo[t] = fo[e]
    })
});
function bf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || fo.hasOwnProperty(e) && fo[e] ? ("" + t).trim() : t + "px"
}
function Nf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = bf(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var Lg = ce({
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
function Bl(e, t) {
    if (t) {
        if (Lg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(R(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(R(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(R(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(R(62))
    }
}
function Vl(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
var Wl = null;
function qa(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Hl = null
  , yr = null
  , wr = null;
function hc(e) {
    if (e = Yo(e)) {
        if (typeof Hl != "function")
            throw Error(R(280));
        var t = e.stateNode;
        t && (t = Cs(t),
        Hl(e.stateNode, e.type, t))
    }
}
function Rf(e) {
    yr ? wr ? wr.push(e) : wr = [e] : yr = e
}
function _f() {
    if (yr) {
        var e = yr
          , t = wr;
        if (wr = yr = null,
        hc(e),
        t)
            for (e = 0; e < t.length; e++)
                hc(t[e])
    }
}
function Of(e, t) {
    return e(t)
}
function Af() {}
var nl = !1;
function Mf(e, t, n) {
    if (nl)
        return e(t, n);
    nl = !0;
    try {
        return Of(e, t, n)
    } finally {
        nl = !1,
        (yr !== null || wr !== null) && (Af(),
        _f())
    }
}
function ko(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Cs(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(R(231, t, typeof n));
    return n
}
var Ql = !1;
if ($t)
    try {
        var Zr = {};
        Object.defineProperty(Zr, "passive", {
            get: function() {
                Ql = !0
            }
        }),
        window.addEventListener("test", Zr, Zr),
        window.removeEventListener("test", Zr, Zr)
    } catch {
        Ql = !1
    }
function jg(e, t, n, r, o, i, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var po = !1
  , Ui = null
  , Bi = !1
  , Kl = null
  , Dg = {
    onError: function(e) {
        po = !0,
        Ui = e
    }
};
function Ig(e, t, n, r, o, i, s, l, a) {
    po = !1,
    Ui = null,
    jg.apply(Dg, arguments)
}
function zg(e, t, n, r, o, i, s, l, a) {
    if (Ig.apply(this, arguments),
    po) {
        if (po) {
            var u = Ui;
            po = !1,
            Ui = null
        } else
            throw Error(R(198));
        Bi || (Bi = !0,
        Kl = u)
    }
}
function Zn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Lf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function mc(e) {
    if (Zn(e) !== e)
        throw Error(R(188))
}
function Fg(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Zn(e),
        t === null)
            throw Error(R(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n)
                    return mc(o),
                    e;
                if (i === r)
                    return mc(o),
                    t;
                i = i.sibling
            }
            throw Error(R(188))
        }
        if (n.return !== r.return)
            n = o,
            r = i;
        else {
            for (var s = !1, l = o.child; l; ) {
                if (l === n) {
                    s = !0,
                    n = o,
                    r = i;
                    break
                }
                if (l === r) {
                    s = !0,
                    r = o,
                    n = i;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = i.child; l; ) {
                    if (l === n) {
                        s = !0,
                        n = i,
                        r = o;
                        break
                    }
                    if (l === r) {
                        s = !0,
                        r = i,
                        n = o;
                        break
                    }
                    l = l.sibling
                }
                if (!s)
                    throw Error(R(189))
            }
        }
        if (n.alternate !== r)
            throw Error(R(190))
    }
    if (n.tag !== 3)
        throw Error(R(188));
    return n.stateNode.current === n ? e : t
}
function jf(e) {
    return e = Fg(e),
    e !== null ? Df(e) : null
}
function Df(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Df(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var If = qe.unstable_scheduleCallback
  , gc = qe.unstable_cancelCallback
  , $g = qe.unstable_shouldYield
  , Ug = qe.unstable_requestPaint
  , pe = qe.unstable_now
  , Bg = qe.unstable_getCurrentPriorityLevel
  , Za = qe.unstable_ImmediatePriority
  , zf = qe.unstable_UserBlockingPriority
  , Vi = qe.unstable_NormalPriority
  , Vg = qe.unstable_LowPriority
  , Ff = qe.unstable_IdlePriority
  , ws = null
  , Nt = null;
function Wg(e) {
    if (Nt && typeof Nt.onCommitFiberRoot == "function")
        try {
            Nt.onCommitFiberRoot(ws, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var ht = Math.clz32 ? Math.clz32 : Kg
  , Hg = Math.log
  , Qg = Math.LN2;
function Kg(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Hg(e) / Qg | 0) | 0
}
var li = 64
  , ai = 4194304;
function uo(e) {
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
function Wi(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , i = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var l = s & ~o;
        l !== 0 ? r = uo(l) : (i &= s,
        i !== 0 && (r = uo(i)))
    } else
        s = n & ~o,
        s !== 0 ? r = uo(s) : i !== 0 && (r = uo(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    i = t & -t,
    o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - ht(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function Yg(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
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
        return t + 5e3;
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
function Gg(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var s = 31 - ht(i)
          , l = 1 << s
          , a = o[s];
        a === -1 ? (!(l & n) || l & r) && (o[s] = Yg(l, t)) : a <= t && (e.expiredLanes |= l),
        i &= ~l
    }
}
function Yl(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function $f() {
    var e = li;
    return li <<= 1,
    !(li & 4194240) && (li = 64),
    e
}
function rl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Qo(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - ht(t),
    e[t] = n
}
function Xg(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - ht(n)
          , i = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~i
    }
}
function Ja(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - ht(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var J = 0;
function Uf(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Bf, eu, Vf, Wf, Hf, Gl = !1, ui = [], mn = null, gn = null, vn = null, Po = new Map, To = new Map, on = [], qg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function vc(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        mn = null;
        break;
    case "dragenter":
    case "dragleave":
        gn = null;
        break;
    case "mouseover":
    case "mouseout":
        vn = null;
        break;
    case "pointerover":
    case "pointerout":
        Po.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        To.delete(t.pointerId)
    }
}
function Jr(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    },
    t !== null && (t = Yo(t),
    t !== null && eu(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function Zg(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return mn = Jr(mn, e, t, n, r, o),
        !0;
    case "dragenter":
        return gn = Jr(gn, e, t, n, r, o),
        !0;
    case "mouseover":
        return vn = Jr(vn, e, t, n, r, o),
        !0;
    case "pointerover":
        var i = o.pointerId;
        return Po.set(i, Jr(Po.get(i) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return i = o.pointerId,
        To.set(i, Jr(To.get(i) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function Qf(e) {
    var t = jn(e.target);
    if (t !== null) {
        var n = Zn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Lf(n),
                t !== null) {
                    e.blockedOn = t,
                    Hf(e.priority, function() {
                        Vf(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function bi(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Xl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Wl = r,
            n.target.dispatchEvent(r),
            Wl = null
        } else
            return t = Yo(n),
            t !== null && eu(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function yc(e, t, n) {
    bi(e) && n.delete(t)
}
function Jg() {
    Gl = !1,
    mn !== null && bi(mn) && (mn = null),
    gn !== null && bi(gn) && (gn = null),
    vn !== null && bi(vn) && (vn = null),
    Po.forEach(yc),
    To.forEach(yc)
}
function eo(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Gl || (Gl = !0,
    qe.unstable_scheduleCallback(qe.unstable_NormalPriority, Jg)))
}
function bo(e) {
    function t(o) {
        return eo(o, e)
    }
    if (0 < ui.length) {
        eo(ui[0], e);
        for (var n = 1; n < ui.length; n++) {
            var r = ui[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (mn !== null && eo(mn, e),
    gn !== null && eo(gn, e),
    vn !== null && eo(vn, e),
    Po.forEach(t),
    To.forEach(t),
    n = 0; n < on.length; n++)
        r = on[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < on.length && (n = on[0],
    n.blockedOn === null); )
        Qf(n),
        n.blockedOn === null && on.shift()
}
var xr = Qt.ReactCurrentBatchConfig
  , Hi = !0;
function ev(e, t, n, r) {
    var o = J
      , i = xr.transition;
    xr.transition = null;
    try {
        J = 1,
        tu(e, t, n, r)
    } finally {
        J = o,
        xr.transition = i
    }
}
function tv(e, t, n, r) {
    var o = J
      , i = xr.transition;
    xr.transition = null;
    try {
        J = 4,
        tu(e, t, n, r)
    } finally {
        J = o,
        xr.transition = i
    }
}
function tu(e, t, n, r) {
    if (Hi) {
        var o = Xl(e, t, n, r);
        if (o === null)
            pl(e, t, r, Qi, n),
            vc(e, r);
        else if (Zg(o, e, t, n, r))
            r.stopPropagation();
        else if (vc(e, r),
        t & 4 && -1 < qg.indexOf(e)) {
            for (; o !== null; ) {
                var i = Yo(o);
                if (i !== null && Bf(i),
                i = Xl(e, t, n, r),
                i === null && pl(e, t, r, Qi, n),
                i === o)
                    break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else
            pl(e, t, r, null, n)
    }
}
var Qi = null;
function Xl(e, t, n, r) {
    if (Qi = null,
    e = qa(r),
    e = jn(e),
    e !== null)
        if (t = Zn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Lf(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Qi = e,
    null
}
function Kf(e) {
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
        switch (Bg()) {
        case Za:
            return 1;
        case zf:
            return 4;
        case Vi:
        case Vg:
            return 16;
        case Ff:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var fn = null
  , nu = null
  , Ni = null;
function Yf() {
    if (Ni)
        return Ni;
    var e, t = nu, n = t.length, r, o = "value"in fn ? fn.value : fn.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
        ;
    return Ni = o.slice(e, 1 < r ? 1 - r : void 0)
}
function Ri(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function ci() {
    return !0
}
function wc() {
    return !1
}
function Je(e) {
    function t(n, r, o, i, s) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = i,
        this.target = s,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(i) : i[l]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ci : wc,
        this.isPropagationStopped = wc,
        this
    }
    return ce(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = ci)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = ci)
        },
        persist: function() {},
        isPersistent: ci
    }),
    t
}
var Hr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, ru = Je(Hr), Ko = ce({}, Hr, {
    view: 0,
    detail: 0
}), nv = Je(Ko), ol, il, to, xs = ce({}, Ko, {
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
    getModifierState: ou,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== to && (to && e.type === "mousemove" ? (ol = e.screenX - to.screenX,
        il = e.screenY - to.screenY) : il = ol = 0,
        to = e),
        ol)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : il
    }
}), xc = Je(xs), rv = ce({}, xs, {
    dataTransfer: 0
}), ov = Je(rv), iv = ce({}, Ko, {
    relatedTarget: 0
}), sl = Je(iv), sv = ce({}, Hr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), lv = Je(sv), av = ce({}, Hr, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), uv = Je(av), cv = ce({}, Hr, {
    data: 0
}), Sc = Je(cv), dv = {
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
}, fv = {
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
}, pv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function hv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = pv[e]) ? !!t[e] : !1
}
function ou() {
    return hv
}
var mv = ce({}, Ko, {
    key: function(e) {
        if (e.key) {
            var t = dv[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Ri(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? fv[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ou,
    charCode: function(e) {
        return e.type === "keypress" ? Ri(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Ri(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , gv = Je(mv)
  , vv = ce({}, xs, {
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
})
  , Ec = Je(vv)
  , yv = ce({}, Ko, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ou
})
  , wv = Je(yv)
  , xv = ce({}, Hr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Sv = Je(xv)
  , Ev = ce({}, xs, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Cv = Je(Ev)
  , kv = [9, 13, 27, 32]
  , iu = $t && "CompositionEvent"in window
  , ho = null;
$t && "documentMode"in document && (ho = document.documentMode);
var Pv = $t && "TextEvent"in window && !ho
  , Gf = $t && (!iu || ho && 8 < ho && 11 >= ho)
  , Cc = " "
  , kc = !1;
function Xf(e, t) {
    switch (e) {
    case "keyup":
        return kv.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function qf(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var lr = !1;
function Tv(e, t) {
    switch (e) {
    case "compositionend":
        return qf(t);
    case "keypress":
        return t.which !== 32 ? null : (kc = !0,
        Cc);
    case "textInput":
        return e = t.data,
        e === Cc && kc ? null : e;
    default:
        return null
    }
}
function bv(e, t) {
    if (lr)
        return e === "compositionend" || !iu && Xf(e, t) ? (e = Yf(),
        Ni = nu = fn = null,
        lr = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Gf && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Nv = {
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
function Pc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Nv[e.type] : t === "textarea"
}
function Zf(e, t, n, r) {
    Rf(r),
    t = Ki(t, "onChange"),
    0 < t.length && (n = new ru("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var mo = null
  , No = null;
function Rv(e) {
    up(e, 0)
}
function Ss(e) {
    var t = cr(e);
    if (Ef(t))
        return e
}
function _v(e, t) {
    if (e === "change")
        return t
}
var Jf = !1;
if ($t) {
    var ll;
    if ($t) {
        var al = "oninput"in document;
        if (!al) {
            var Tc = document.createElement("div");
            Tc.setAttribute("oninput", "return;"),
            al = typeof Tc.oninput == "function"
        }
        ll = al
    } else
        ll = !1;
    Jf = ll && (!document.documentMode || 9 < document.documentMode)
}
function bc() {
    mo && (mo.detachEvent("onpropertychange", ep),
    No = mo = null)
}
function ep(e) {
    if (e.propertyName === "value" && Ss(No)) {
        var t = [];
        Zf(t, No, e, qa(e)),
        Mf(Rv, t)
    }
}
function Ov(e, t, n) {
    e === "focusin" ? (bc(),
    mo = t,
    No = n,
    mo.attachEvent("onpropertychange", ep)) : e === "focusout" && bc()
}
function Av(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Ss(No)
}
function Mv(e, t) {
    if (e === "click")
        return Ss(t)
}
function Lv(e, t) {
    if (e === "input" || e === "change")
        return Ss(t)
}
function jv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var gt = typeof Object.is == "function" ? Object.is : jv;
function Ro(e, t) {
    if (gt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Al.call(t, o) || !gt(e[o], t[o]))
            return !1
    }
    return !0
}
function Nc(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Rc(e, t) {
    var n = Nc(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Nc(n)
    }
}
function tp(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? tp(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function np() {
    for (var e = window, t = $i(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = $i(e.document)
    }
    return t
}
function su(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Dv(e) {
    var t = np()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && tp(n.ownerDocument.documentElement, n)) {
        if (r !== null && su(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o),
                !e.extend && i > r && (o = r,
                r = i,
                i = o),
                o = Rc(n, i);
                var s = Rc(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Iv = $t && "documentMode"in document && 11 >= document.documentMode
  , ar = null
  , ql = null
  , go = null
  , Zl = !1;
function _c(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Zl || ar == null || ar !== $i(r) || (r = ar,
    "selectionStart"in r && su(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    go && Ro(go, r) || (go = r,
    r = Ki(ql, "onSelect"),
    0 < r.length && (t = new ru("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = ar)))
}
function di(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var ur = {
    animationend: di("Animation", "AnimationEnd"),
    animationiteration: di("Animation", "AnimationIteration"),
    animationstart: di("Animation", "AnimationStart"),
    transitionend: di("Transition", "TransitionEnd")
}
  , ul = {}
  , rp = {};
$t && (rp = document.createElement("div").style,
"AnimationEvent"in window || (delete ur.animationend.animation,
delete ur.animationiteration.animation,
delete ur.animationstart.animation),
"TransitionEvent"in window || delete ur.transitionend.transition);
function Es(e) {
    if (ul[e])
        return ul[e];
    if (!ur[e])
        return e;
    var t = ur[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in rp)
            return ul[e] = t[n];
    return e
}
var op = Es("animationend")
  , ip = Es("animationiteration")
  , sp = Es("animationstart")
  , lp = Es("transitionend")
  , ap = new Map
  , Oc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Rn(e, t) {
    ap.set(e, t),
    qn(t, [e])
}
for (var cl = 0; cl < Oc.length; cl++) {
    var dl = Oc[cl]
      , zv = dl.toLowerCase()
      , Fv = dl[0].toUpperCase() + dl.slice(1);
    Rn(zv, "on" + Fv)
}
Rn(op, "onAnimationEnd");
Rn(ip, "onAnimationIteration");
Rn(sp, "onAnimationStart");
Rn("dblclick", "onDoubleClick");
Rn("focusin", "onFocus");
Rn("focusout", "onBlur");
Rn(lp, "onTransitionEnd");
jr("onMouseEnter", ["mouseout", "mouseover"]);
jr("onMouseLeave", ["mouseout", "mouseover"]);
jr("onPointerEnter", ["pointerout", "pointerover"]);
jr("onPointerLeave", ["pointerout", "pointerover"]);
qn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
qn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
qn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
qn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var co = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , $v = new Set("cancel close invalid load scroll toggle".split(" ").concat(co));
function Ac(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    zg(r, t, void 0, e),
    e.currentTarget = null
}
function up(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== i && o.isPropagationStopped())
                        break e;
                    Ac(o, l, u),
                    i = a
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (l = r[s],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== i && o.isPropagationStopped())
                        break e;
                    Ac(o, l, u),
                    i = a
                }
        }
    }
    if (Bi)
        throw e = Kl,
        Bi = !1,
        Kl = null,
        e
}
function oe(e, t) {
    var n = t[ra];
    n === void 0 && (n = t[ra] = new Set);
    var r = e + "__bubble";
    n.has(r) || (cp(t, e, 2, !1),
    n.add(r))
}
function fl(e, t, n) {
    var r = 0;
    t && (r |= 4),
    cp(n, e, r, t)
}
var fi = "_reactListening" + Math.random().toString(36).slice(2);
function _o(e) {
    if (!e[fi]) {
        e[fi] = !0,
        vf.forEach(function(n) {
            n !== "selectionchange" && ($v.has(n) || fl(n, !1, e),
            fl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[fi] || (t[fi] = !0,
        fl("selectionchange", !1, t))
    }
}
function cp(e, t, n, r) {
    switch (Kf(t)) {
    case 1:
        var o = ev;
        break;
    case 4:
        o = tv;
        break;
    default:
        o = tu
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !Ql || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function pl(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var l = r.stateNode.containerInfo;
                if (l === o || l.nodeType === 8 && l.parentNode === o)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var a = s.tag;
                        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo,
                        a === o || a.nodeType === 8 && a.parentNode === o))
                            return;
                        s = s.return
                    }
                for (; l !== null; ) {
                    if (s = jn(l),
                    s === null)
                        return;
                    if (a = s.tag,
                    a === 5 || a === 6) {
                        r = i = s;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    Mf(function() {
        var u = i
          , d = qa(n)
          , f = [];
        e: {
            var c = ap.get(e);
            if (c !== void 0) {
                var v = ru
                  , y = e;
                switch (e) {
                case "keypress":
                    if (Ri(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    v = gv;
                    break;
                case "focusin":
                    y = "focus",
                    v = sl;
                    break;
                case "focusout":
                    y = "blur",
                    v = sl;
                    break;
                case "beforeblur":
                case "afterblur":
                    v = sl;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    v = xc;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    v = ov;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    v = wv;
                    break;
                case op:
                case ip:
                case sp:
                    v = lv;
                    break;
                case lp:
                    v = Sv;
                    break;
                case "scroll":
                    v = nv;
                    break;
                case "wheel":
                    v = Cv;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    v = uv;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    v = Ec
                }
                var g = (t & 4) !== 0
                  , w = !g && e === "scroll"
                  , h = g ? c !== null ? c + "Capture" : null : c;
                g = [];
                for (var p = u, m; p !== null; ) {
                    m = p;
                    var S = m.stateNode;
                    if (m.tag === 5 && S !== null && (m = S,
                    h !== null && (S = ko(p, h),
                    S != null && g.push(Oo(p, S, m)))),
                    w)
                        break;
                    p = p.return
                }
                0 < g.length && (c = new v(c,y,null,n,d),
                f.push({
                    event: c,
                    listeners: g
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (c = e === "mouseover" || e === "pointerover",
                v = e === "mouseout" || e === "pointerout",
                c && n !== Wl && (y = n.relatedTarget || n.fromElement) && (jn(y) || y[Ut]))
                    break e;
                if ((v || c) && (c = d.window === d ? d : (c = d.ownerDocument) ? c.defaultView || c.parentWindow : window,
                v ? (y = n.relatedTarget || n.toElement,
                v = u,
                y = y ? jn(y) : null,
                y !== null && (w = Zn(y),
                y !== w || y.tag !== 5 && y.tag !== 6) && (y = null)) : (v = null,
                y = u),
                v !== y)) {
                    if (g = xc,
                    S = "onMouseLeave",
                    h = "onMouseEnter",
                    p = "mouse",
                    (e === "pointerout" || e === "pointerover") && (g = Ec,
                    S = "onPointerLeave",
                    h = "onPointerEnter",
                    p = "pointer"),
                    w = v == null ? c : cr(v),
                    m = y == null ? c : cr(y),
                    c = new g(S,p + "leave",v,n,d),
                    c.target = w,
                    c.relatedTarget = m,
                    S = null,
                    jn(d) === u && (g = new g(h,p + "enter",y,n,d),
                    g.target = m,
                    g.relatedTarget = w,
                    S = g),
                    w = S,
                    v && y)
                        t: {
                            for (g = v,
                            h = y,
                            p = 0,
                            m = g; m; m = or(m))
                                p++;
                            for (m = 0,
                            S = h; S; S = or(S))
                                m++;
                            for (; 0 < p - m; )
                                g = or(g),
                                p--;
                            for (; 0 < m - p; )
                                h = or(h),
                                m--;
                            for (; p--; ) {
                                if (g === h || h !== null && g === h.alternate)
                                    break t;
                                g = or(g),
                                h = or(h)
                            }
                            g = null
                        }
                    else
                        g = null;
                    v !== null && Mc(f, c, v, g, !1),
                    y !== null && w !== null && Mc(f, w, y, g, !0)
                }
            }
            e: {
                if (c = u ? cr(u) : window,
                v = c.nodeName && c.nodeName.toLowerCase(),
                v === "select" || v === "input" && c.type === "file")
                    var C = _v;
                else if (Pc(c))
                    if (Jf)
                        C = Lv;
                    else {
                        C = Av;
                        var P = Ov
                    }
                else
                    (v = c.nodeName) && v.toLowerCase() === "input" && (c.type === "checkbox" || c.type === "radio") && (C = Mv);
                if (C && (C = C(e, u))) {
                    Zf(f, C, n, d);
                    break e
                }
                P && P(e, c, u),
                e === "focusout" && (P = c._wrapperState) && P.controlled && c.type === "number" && Fl(c, "number", c.value)
            }
            switch (P = u ? cr(u) : window,
            e) {
            case "focusin":
                (Pc(P) || P.contentEditable === "true") && (ar = P,
                ql = u,
                go = null);
                break;
            case "focusout":
                go = ql = ar = null;
                break;
            case "mousedown":
                Zl = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Zl = !1,
                _c(f, n, d);
                break;
            case "selectionchange":
                if (Iv)
                    break;
            case "keydown":
            case "keyup":
                _c(f, n, d)
            }
            var T;
            if (iu)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var N = "onCompositionStart";
                        break e;
                    case "compositionend":
                        N = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        N = "onCompositionUpdate";
                        break e
                    }
                    N = void 0
                }
            else
                lr ? Xf(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
            N && (Gf && n.locale !== "ko" && (lr || N !== "onCompositionStart" ? N === "onCompositionEnd" && lr && (T = Yf()) : (fn = d,
            nu = "value"in fn ? fn.value : fn.textContent,
            lr = !0)),
            P = Ki(u, N),
            0 < P.length && (N = new Sc(N,e,null,n,d),
            f.push({
                event: N,
                listeners: P
            }),
            T ? N.data = T : (T = qf(n),
            T !== null && (N.data = T)))),
            (T = Pv ? Tv(e, n) : bv(e, n)) && (u = Ki(u, "onBeforeInput"),
            0 < u.length && (d = new Sc("onBeforeInput","beforeinput",null,n,d),
            f.push({
                event: d,
                listeners: u
            }),
            d.data = T))
        }
        up(f, t)
    })
}
function Oo(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ki(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
        i = ko(e, n),
        i != null && r.unshift(Oo(e, i, o)),
        i = ko(e, t),
        i != null && r.push(Oo(e, i, o))),
        e = e.return
    }
    return r
}
function or(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Mc(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        o ? (a = ko(n, i),
        a != null && s.unshift(Oo(n, a, l))) : o || (a = ko(n, i),
        a != null && s.push(Oo(n, a, l)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var Uv = /\r\n?/g
  , Bv = /\u0000|\uFFFD/g;
function Lc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Uv, `
`).replace(Bv, "")
}
function pi(e, t, n) {
    if (t = Lc(t),
    Lc(e) !== t && n)
        throw Error(R(425))
}
function Yi() {}
var Jl = null
  , ea = null;
function ta(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var na = typeof setTimeout == "function" ? setTimeout : void 0
  , Vv = typeof clearTimeout == "function" ? clearTimeout : void 0
  , jc = typeof Promise == "function" ? Promise : void 0
  , Wv = typeof queueMicrotask == "function" ? queueMicrotask : typeof jc < "u" ? function(e) {
    return jc.resolve(null).then(e).catch(Hv)
}
: na;
function Hv(e) {
    setTimeout(function() {
        throw e
    })
}
function hl(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    bo(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    bo(t)
}
function yn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Dc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Qr = Math.random().toString(36).slice(2)
  , bt = "__reactFiber$" + Qr
  , Ao = "__reactProps$" + Qr
  , Ut = "__reactContainer$" + Qr
  , ra = "__reactEvents$" + Qr
  , Qv = "__reactListeners$" + Qr
  , Kv = "__reactHandles$" + Qr;
function jn(e) {
    var t = e[bt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Ut] || n[bt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Dc(e); e !== null; ) {
                    if (n = e[bt])
                        return n;
                    e = Dc(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Yo(e) {
    return e = e[bt] || e[Ut],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function cr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(R(33))
}
function Cs(e) {
    return e[Ao] || null
}
var oa = []
  , dr = -1;
function _n(e) {
    return {
        current: e
    }
}
function ie(e) {
    0 > dr || (e.current = oa[dr],
    oa[dr] = null,
    dr--)
}
function te(e, t) {
    dr++,
    oa[dr] = e.current,
    e.current = t
}
var kn = {}
  , Re = _n(kn)
  , ze = _n(!1)
  , Wn = kn;
function Dr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return kn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function Fe(e) {
    return e = e.childContextTypes,
    e != null
}
function Gi() {
    ie(ze),
    ie(Re)
}
function Ic(e, t, n) {
    if (Re.current !== kn)
        throw Error(R(168));
    te(Re, t),
    te(ze, n)
}
function dp(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(R(108, Og(e) || "Unknown", o));
    return ce({}, n, r)
}
function Xi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || kn,
    Wn = Re.current,
    te(Re, e),
    te(ze, ze.current),
    !0
}
function zc(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(R(169));
    n ? (e = dp(e, t, Wn),
    r.__reactInternalMemoizedMergedChildContext = e,
    ie(ze),
    ie(Re),
    te(Re, e)) : ie(ze),
    te(ze, n)
}
var Dt = null
  , ks = !1
  , ml = !1;
function fp(e) {
    Dt === null ? Dt = [e] : Dt.push(e)
}
function Yv(e) {
    ks = !0,
    fp(e)
}
function On() {
    if (!ml && Dt !== null) {
        ml = !0;
        var e = 0
          , t = J;
        try {
            var n = Dt;
            for (J = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Dt = null,
            ks = !1
        } catch (o) {
            throw Dt !== null && (Dt = Dt.slice(e + 1)),
            If(Za, On),
            o
        } finally {
            J = t,
            ml = !1
        }
    }
    return null
}
var fr = []
  , pr = 0
  , qi = null
  , Zi = 0
  , tt = []
  , nt = 0
  , Hn = null
  , It = 1
  , zt = "";
function Mn(e, t) {
    fr[pr++] = Zi,
    fr[pr++] = qi,
    qi = e,
    Zi = t
}
function pp(e, t, n) {
    tt[nt++] = It,
    tt[nt++] = zt,
    tt[nt++] = Hn,
    Hn = e;
    var r = It;
    e = zt;
    var o = 32 - ht(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var i = 32 - ht(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32),
        r >>= s,
        o -= s,
        It = 1 << 32 - ht(t) + o | n << o | r,
        zt = i + e
    } else
        It = 1 << i | n << o | r,
        zt = e
}
function lu(e) {
    e.return !== null && (Mn(e, 1),
    pp(e, 1, 0))
}
function au(e) {
    for (; e === qi; )
        qi = fr[--pr],
        fr[pr] = null,
        Zi = fr[--pr],
        fr[pr] = null;
    for (; e === Hn; )
        Hn = tt[--nt],
        tt[nt] = null,
        zt = tt[--nt],
        tt[nt] = null,
        It = tt[--nt],
        tt[nt] = null
}
var Ge = null
  , Ye = null
  , se = !1
  , pt = null;
function hp(e, t) {
    var n = rt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Fc(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Ge = e,
        Ye = yn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Ge = e,
        Ye = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Hn !== null ? {
            id: It,
            overflow: zt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = rt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Ge = e,
        Ye = null,
        !0) : !1;
    default:
        return !1
    }
}
function ia(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function sa(e) {
    if (se) {
        var t = Ye;
        if (t) {
            var n = t;
            if (!Fc(e, t)) {
                if (ia(e))
                    throw Error(R(418));
                t = yn(n.nextSibling);
                var r = Ge;
                t && Fc(e, t) ? hp(r, n) : (e.flags = e.flags & -4097 | 2,
                se = !1,
                Ge = e)
            }
        } else {
            if (ia(e))
                throw Error(R(418));
            e.flags = e.flags & -4097 | 2,
            se = !1,
            Ge = e
        }
    }
}
function $c(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ge = e
}
function hi(e) {
    if (e !== Ge)
        return !1;
    if (!se)
        return $c(e),
        se = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !ta(e.type, e.memoizedProps)),
    t && (t = Ye)) {
        if (ia(e))
            throw mp(),
            Error(R(418));
        for (; t; )
            hp(e, t),
            t = yn(t.nextSibling)
    }
    if ($c(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(R(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ye = yn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ye = null
        }
    } else
        Ye = Ge ? yn(e.stateNode.nextSibling) : null;
    return !0
}
function mp() {
    for (var e = Ye; e; )
        e = yn(e.nextSibling)
}
function Ir() {
    Ye = Ge = null,
    se = !1
}
function uu(e) {
    pt === null ? pt = [e] : pt.push(e)
}
var Gv = Qt.ReactCurrentBatchConfig;
function no(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(R(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(R(147, e));
            var o = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var l = o.refs;
                s === null ? delete l[i] : l[i] = s
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(R(284));
        if (!n._owner)
            throw Error(R(290, e))
    }
    return e
}
function mi(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Uc(e) {
    var t = e._init;
    return t(e._payload)
}
function gp(e) {
    function t(h, p) {
        if (e) {
            var m = h.deletions;
            m === null ? (h.deletions = [p],
            h.flags |= 16) : m.push(p)
        }
    }
    function n(h, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(h, p),
            p = p.sibling;
        return null
    }
    function r(h, p) {
        for (h = new Map; p !== null; )
            p.key !== null ? h.set(p.key, p) : h.set(p.index, p),
            p = p.sibling;
        return h
    }
    function o(h, p) {
        return h = En(h, p),
        h.index = 0,
        h.sibling = null,
        h
    }
    function i(h, p, m) {
        return h.index = m,
        e ? (m = h.alternate,
        m !== null ? (m = m.index,
        m < p ? (h.flags |= 2,
        p) : m) : (h.flags |= 2,
        p)) : (h.flags |= 1048576,
        p)
    }
    function s(h) {
        return e && h.alternate === null && (h.flags |= 2),
        h
    }
    function l(h, p, m, S) {
        return p === null || p.tag !== 6 ? (p = El(m, h.mode, S),
        p.return = h,
        p) : (p = o(p, m),
        p.return = h,
        p)
    }
    function a(h, p, m, S) {
        var C = m.type;
        return C === sr ? d(h, p, m.props.children, S, m.key) : p !== null && (p.elementType === C || typeof C == "object" && C !== null && C.$$typeof === nn && Uc(C) === p.type) ? (S = o(p, m.props),
        S.ref = no(h, p, m),
        S.return = h,
        S) : (S = Di(m.type, m.key, m.props, null, h.mode, S),
        S.ref = no(h, p, m),
        S.return = h,
        S)
    }
    function u(h, p, m, S) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== m.containerInfo || p.stateNode.implementation !== m.implementation ? (p = Cl(m, h.mode, S),
        p.return = h,
        p) : (p = o(p, m.children || []),
        p.return = h,
        p)
    }
    function d(h, p, m, S, C) {
        return p === null || p.tag !== 7 ? (p = Vn(m, h.mode, S, C),
        p.return = h,
        p) : (p = o(p, m),
        p.return = h,
        p)
    }
    function f(h, p, m) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = El("" + p, h.mode, m),
            p.return = h,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case oi:
                return m = Di(p.type, p.key, p.props, null, h.mode, m),
                m.ref = no(h, null, p),
                m.return = h,
                m;
            case ir:
                return p = Cl(p, h.mode, m),
                p.return = h,
                p;
            case nn:
                var S = p._init;
                return f(h, S(p._payload), m)
            }
            if (ao(p) || qr(p))
                return p = Vn(p, h.mode, m, null),
                p.return = h,
                p;
            mi(h, p)
        }
        return null
    }
    function c(h, p, m, S) {
        var C = p !== null ? p.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return C !== null ? null : l(h, p, "" + m, S);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case oi:
                return m.key === C ? a(h, p, m, S) : null;
            case ir:
                return m.key === C ? u(h, p, m, S) : null;
            case nn:
                return C = m._init,
                c(h, p, C(m._payload), S)
            }
            if (ao(m) || qr(m))
                return C !== null ? null : d(h, p, m, S, null);
            mi(h, m)
        }
        return null
    }
    function v(h, p, m, S, C) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return h = h.get(m) || null,
            l(p, h, "" + S, C);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case oi:
                return h = h.get(S.key === null ? m : S.key) || null,
                a(p, h, S, C);
            case ir:
                return h = h.get(S.key === null ? m : S.key) || null,
                u(p, h, S, C);
            case nn:
                var P = S._init;
                return v(h, p, m, P(S._payload), C)
            }
            if (ao(S) || qr(S))
                return h = h.get(m) || null,
                d(p, h, S, C, null);
            mi(p, S)
        }
        return null
    }
    function y(h, p, m, S) {
        for (var C = null, P = null, T = p, N = p = 0, D = null; T !== null && N < m.length; N++) {
            T.index > N ? (D = T,
            T = null) : D = T.sibling;
            var A = c(h, T, m[N], S);
            if (A === null) {
                T === null && (T = D);
                break
            }
            e && T && A.alternate === null && t(h, T),
            p = i(A, p, N),
            P === null ? C = A : P.sibling = A,
            P = A,
            T = D
        }
        if (N === m.length)
            return n(h, T),
            se && Mn(h, N),
            C;
        if (T === null) {
            for (; N < m.length; N++)
                T = f(h, m[N], S),
                T !== null && (p = i(T, p, N),
                P === null ? C = T : P.sibling = T,
                P = T);
            return se && Mn(h, N),
            C
        }
        for (T = r(h, T); N < m.length; N++)
            D = v(T, h, N, m[N], S),
            D !== null && (e && D.alternate !== null && T.delete(D.key === null ? N : D.key),
            p = i(D, p, N),
            P === null ? C = D : P.sibling = D,
            P = D);
        return e && T.forEach(function($) {
            return t(h, $)
        }),
        se && Mn(h, N),
        C
    }
    function g(h, p, m, S) {
        var C = qr(m);
        if (typeof C != "function")
            throw Error(R(150));
        if (m = C.call(m),
        m == null)
            throw Error(R(151));
        for (var P = C = null, T = p, N = p = 0, D = null, A = m.next(); T !== null && !A.done; N++,
        A = m.next()) {
            T.index > N ? (D = T,
            T = null) : D = T.sibling;
            var $ = c(h, T, A.value, S);
            if ($ === null) {
                T === null && (T = D);
                break
            }
            e && T && $.alternate === null && t(h, T),
            p = i($, p, N),
            P === null ? C = $ : P.sibling = $,
            P = $,
            T = D
        }
        if (A.done)
            return n(h, T),
            se && Mn(h, N),
            C;
        if (T === null) {
            for (; !A.done; N++,
            A = m.next())
                A = f(h, A.value, S),
                A !== null && (p = i(A, p, N),
                P === null ? C = A : P.sibling = A,
                P = A);
            return se && Mn(h, N),
            C
        }
        for (T = r(h, T); !A.done; N++,
        A = m.next())
            A = v(T, h, N, A.value, S),
            A !== null && (e && A.alternate !== null && T.delete(A.key === null ? N : A.key),
            p = i(A, p, N),
            P === null ? C = A : P.sibling = A,
            P = A);
        return e && T.forEach(function(I) {
            return t(h, I)
        }),
        se && Mn(h, N),
        C
    }
    function w(h, p, m, S) {
        if (typeof m == "object" && m !== null && m.type === sr && m.key === null && (m = m.props.children),
        typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case oi:
                e: {
                    for (var C = m.key, P = p; P !== null; ) {
                        if (P.key === C) {
                            if (C = m.type,
                            C === sr) {
                                if (P.tag === 7) {
                                    n(h, P.sibling),
                                    p = o(P, m.props.children),
                                    p.return = h,
                                    h = p;
                                    break e
                                }
                            } else if (P.elementType === C || typeof C == "object" && C !== null && C.$$typeof === nn && Uc(C) === P.type) {
                                n(h, P.sibling),
                                p = o(P, m.props),
                                p.ref = no(h, P, m),
                                p.return = h,
                                h = p;
                                break e
                            }
                            n(h, P);
                            break
                        } else
                            t(h, P);
                        P = P.sibling
                    }
                    m.type === sr ? (p = Vn(m.props.children, h.mode, S, m.key),
                    p.return = h,
                    h = p) : (S = Di(m.type, m.key, m.props, null, h.mode, S),
                    S.ref = no(h, p, m),
                    S.return = h,
                    h = S)
                }
                return s(h);
            case ir:
                e: {
                    for (P = m.key; p !== null; ) {
                        if (p.key === P)
                            if (p.tag === 4 && p.stateNode.containerInfo === m.containerInfo && p.stateNode.implementation === m.implementation) {
                                n(h, p.sibling),
                                p = o(p, m.children || []),
                                p.return = h,
                                h = p;
                                break e
                            } else {
                                n(h, p);
                                break
                            }
                        else
                            t(h, p);
                        p = p.sibling
                    }
                    p = Cl(m, h.mode, S),
                    p.return = h,
                    h = p
                }
                return s(h);
            case nn:
                return P = m._init,
                w(h, p, P(m._payload), S)
            }
            if (ao(m))
                return y(h, p, m, S);
            if (qr(m))
                return g(h, p, m, S);
            mi(h, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
        p !== null && p.tag === 6 ? (n(h, p.sibling),
        p = o(p, m),
        p.return = h,
        h = p) : (n(h, p),
        p = El(m, h.mode, S),
        p.return = h,
        h = p),
        s(h)) : n(h, p)
    }
    return w
}
var zr = gp(!0)
  , vp = gp(!1)
  , Ji = _n(null)
  , es = null
  , hr = null
  , cu = null;
function du() {
    cu = hr = es = null
}
function fu(e) {
    var t = Ji.current;
    ie(Ji),
    e._currentValue = t
}
function la(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Sr(e, t) {
    es = e,
    cu = hr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ie = !0),
    e.firstContext = null)
}
function it(e) {
    var t = e._currentValue;
    if (cu !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        hr === null) {
            if (es === null)
                throw Error(R(308));
            hr = e,
            es.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            hr = hr.next = e;
    return t
}
var Dn = null;
function pu(e) {
    Dn === null ? Dn = [e] : Dn.push(e)
}
function yp(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    pu(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    Bt(e, r)
}
function Bt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var rn = !1;
function hu(e) {
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
function wp(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Ft(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function wn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    X & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        Bt(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    pu(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    Bt(e, n)
}
function _i(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Ja(e, n)
    }
}
function Bc(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s,
                n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function ts(e, t, n, r) {
    var o = e.updateQueue;
    rn = !1;
    var i = o.firstBaseUpdate
      , s = o.lastBaseUpdate
      , l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        s === null ? i = u : s.next = u,
        s = a;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        l = d.lastBaseUpdate,
        l !== s && (l === null ? d.firstBaseUpdate = u : l.next = u,
        d.lastBaseUpdate = a))
    }
    if (i !== null) {
        var f = o.baseState;
        s = 0,
        d = u = a = null,
        l = i;
        do {
            var c = l.lane
              , v = l.eventTime;
            if ((r & c) === c) {
                d !== null && (d = d.next = {
                    eventTime: v,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var y = e
                      , g = l;
                    switch (c = t,
                    v = n,
                    g.tag) {
                    case 1:
                        if (y = g.payload,
                        typeof y == "function") {
                            f = y.call(v, f, c);
                            break e
                        }
                        f = y;
                        break e;
                    case 3:
                        y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = g.payload,
                        c = typeof y == "function" ? y.call(v, f, c) : y,
                        c == null)
                            break e;
                        f = ce({}, f, c);
                        break e;
                    case 2:
                        rn = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                c = o.effects,
                c === null ? o.effects = [l] : c.push(l))
            } else
                v = {
                    eventTime: v,
                    lane: c,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                d === null ? (u = d = v,
                a = f) : d = d.next = v,
                s |= c;
            if (l = l.next,
            l === null) {
                if (l = o.shared.pending,
                l === null)
                    break;
                c = l,
                l = c.next,
                c.next = null,
                o.lastBaseUpdate = c,
                o.shared.pending = null
            }
        } while (!0);
        if (d === null && (a = f),
        o.baseState = a,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = d,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                s |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        Kn |= s,
        e.lanes = s,
        e.memoizedState = f
    }
}
function Vc(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(R(191, o));
                o.call(r)
            }
        }
}
var Go = {}
  , Rt = _n(Go)
  , Mo = _n(Go)
  , Lo = _n(Go);
function In(e) {
    if (e === Go)
        throw Error(R(174));
    return e
}
function mu(e, t) {
    switch (te(Lo, t),
    te(Mo, e),
    te(Rt, Go),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ul(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Ul(t, e)
    }
    ie(Rt),
    te(Rt, t)
}
function Fr() {
    ie(Rt),
    ie(Mo),
    ie(Lo)
}
function xp(e) {
    In(Lo.current);
    var t = In(Rt.current)
      , n = Ul(t, e.type);
    t !== n && (te(Mo, e),
    te(Rt, n))
}
function gu(e) {
    Mo.current === e && (ie(Rt),
    ie(Mo))
}
var ae = _n(0);
function ns(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var gl = [];
function vu() {
    for (var e = 0; e < gl.length; e++)
        gl[e]._workInProgressVersionPrimary = null;
    gl.length = 0
}
var Oi = Qt.ReactCurrentDispatcher
  , vl = Qt.ReactCurrentBatchConfig
  , Qn = 0
  , ue = null
  , me = null
  , ye = null
  , rs = !1
  , vo = !1
  , jo = 0
  , Xv = 0;
function Pe() {
    throw Error(R(321))
}
function yu(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!gt(e[n], t[n]))
            return !1;
    return !0
}
function wu(e, t, n, r, o, i) {
    if (Qn = i,
    ue = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Oi.current = e === null || e.memoizedState === null ? ey : ty,
    e = n(r, o),
    vo) {
        i = 0;
        do {
            if (vo = !1,
            jo = 0,
            25 <= i)
                throw Error(R(301));
            i += 1,
            ye = me = null,
            t.updateQueue = null,
            Oi.current = ny,
            e = n(r, o)
        } while (vo)
    }
    if (Oi.current = os,
    t = me !== null && me.next !== null,
    Qn = 0,
    ye = me = ue = null,
    rs = !1,
    t)
        throw Error(R(300));
    return e
}
function xu() {
    var e = jo !== 0;
    return jo = 0,
    e
}
function Ct() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ye === null ? ue.memoizedState = ye = e : ye = ye.next = e,
    ye
}
function st() {
    if (me === null) {
        var e = ue.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = me.next;
    var t = ye === null ? ue.memoizedState : ye.next;
    if (t !== null)
        ye = t,
        me = e;
    else {
        if (e === null)
            throw Error(R(310));
        me = e,
        e = {
            memoizedState: me.memoizedState,
            baseState: me.baseState,
            baseQueue: me.baseQueue,
            queue: me.queue,
            next: null
        },
        ye === null ? ue.memoizedState = ye = e : ye = ye.next = e
    }
    return ye
}
function Do(e, t) {
    return typeof t == "function" ? t(e) : t
}
function yl(e) {
    var t = st()
      , n = t.queue;
    if (n === null)
        throw Error(R(311));
    n.lastRenderedReducer = e;
    var r = me
      , o = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next,
            i.next = s
        }
        r.baseQueue = o = i,
        n.pending = null
    }
    if (o !== null) {
        i = o.next,
        r = r.baseState;
        var l = s = null
          , a = null
          , u = i;
        do {
            var d = u.lane;
            if ((Qn & d) === d)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = f,
                s = r) : a = a.next = f,
                ue.lanes |= d,
                Kn |= d
            }
            u = u.next
        } while (u !== null && u !== i);
        a === null ? s = r : a.next = l,
        gt(r, t.memoizedState) || (Ie = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            i = o.lane,
            ue.lanes |= i,
            Kn |= i,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function wl(e) {
    var t = st()
      , n = t.queue;
    if (n === null)
        throw Error(R(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do
            i = e(i, s.action),
            s = s.next;
        while (s !== o);
        gt(i, t.memoizedState) || (Ie = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function Sp() {}
function Ep(e, t) {
    var n = ue
      , r = st()
      , o = t()
      , i = !gt(r.memoizedState, o);
    if (i && (r.memoizedState = o,
    Ie = !0),
    r = r.queue,
    Su(Pp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || ye !== null && ye.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Io(9, kp.bind(null, n, r, o, t), void 0, null),
        we === null)
            throw Error(R(349));
        Qn & 30 || Cp(n, t, o)
    }
    return o
}
function Cp(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ue.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ue.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function kp(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Tp(t) && bp(e)
}
function Pp(e, t, n) {
    return n(function() {
        Tp(t) && bp(e)
    })
}
function Tp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !gt(e, n)
    } catch {
        return !0
    }
}
function bp(e) {
    var t = Bt(e, 1);
    t !== null && mt(t, e, 1, -1)
}
function Wc(e) {
    var t = Ct();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Do,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Jv.bind(null, ue, e),
    [t.memoizedState, e]
}
function Io(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = ue.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ue.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Np() {
    return st().memoizedState
}
function Ai(e, t, n, r) {
    var o = Ct();
    ue.flags |= e,
    o.memoizedState = Io(1 | t, n, void 0, r === void 0 ? null : r)
}
function Ps(e, t, n, r) {
    var o = st();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (me !== null) {
        var s = me.memoizedState;
        if (i = s.destroy,
        r !== null && yu(r, s.deps)) {
            o.memoizedState = Io(t, n, i, r);
            return
        }
    }
    ue.flags |= e,
    o.memoizedState = Io(1 | t, n, i, r)
}
function Hc(e, t) {
    return Ai(8390656, 8, e, t)
}
function Su(e, t) {
    return Ps(2048, 8, e, t)
}
function Rp(e, t) {
    return Ps(4, 2, e, t)
}
function _p(e, t) {
    return Ps(4, 4, e, t)
}
function Op(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Ap(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Ps(4, 4, Op.bind(null, t, e), n)
}
function Eu() {}
function Mp(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && yu(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Lp(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && yu(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function jp(e, t, n) {
    return Qn & 21 ? (gt(n, t) || (n = $f(),
    ue.lanes |= n,
    Kn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ie = !0),
    e.memoizedState = n)
}
function qv(e, t) {
    var n = J;
    J = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = vl.transition;
    vl.transition = {};
    try {
        e(!1),
        t()
    } finally {
        J = n,
        vl.transition = r
    }
}
function Dp() {
    return st().memoizedState
}
function Zv(e, t, n) {
    var r = Sn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Ip(e))
        zp(t, n);
    else if (n = yp(e, t, n, r),
    n !== null) {
        var o = Me();
        mt(n, e, r, o),
        Fp(n, t, r)
    }
}
function Jv(e, t, n) {
    var r = Sn(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Ip(e))
        zp(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var s = t.lastRenderedState
                  , l = i(s, n);
                if (o.hasEagerState = !0,
                o.eagerState = l,
                gt(l, s)) {
                    var a = t.interleaved;
                    a === null ? (o.next = o,
                    pu(t)) : (o.next = a.next,
                    a.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = yp(e, t, o, r),
        n !== null && (o = Me(),
        mt(n, e, r, o),
        Fp(n, t, r))
    }
}
function Ip(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue
}
function zp(e, t) {
    vo = rs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Fp(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Ja(e, n)
    }
}
var os = {
    readContext: it,
    useCallback: Pe,
    useContext: Pe,
    useEffect: Pe,
    useImperativeHandle: Pe,
    useInsertionEffect: Pe,
    useLayoutEffect: Pe,
    useMemo: Pe,
    useReducer: Pe,
    useRef: Pe,
    useState: Pe,
    useDebugValue: Pe,
    useDeferredValue: Pe,
    useTransition: Pe,
    useMutableSource: Pe,
    useSyncExternalStore: Pe,
    useId: Pe,
    unstable_isNewReconciler: !1
}
  , ey = {
    readContext: it,
    useCallback: function(e, t) {
        return Ct().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: it,
    useEffect: Hc,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Ai(4194308, 4, Op.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Ai(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Ai(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Ct();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Ct();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Zv.bind(null, ue, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Ct();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Wc,
    useDebugValue: Eu,
    useDeferredValue: function(e) {
        return Ct().memoizedState = e
    },
    useTransition: function() {
        var e = Wc(!1)
          , t = e[0];
        return e = qv.bind(null, e[1]),
        Ct().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = ue
          , o = Ct();
        if (se) {
            if (n === void 0)
                throw Error(R(407));
            n = n()
        } else {
            if (n = t(),
            we === null)
                throw Error(R(349));
            Qn & 30 || Cp(r, t, n)
        }
        o.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return o.queue = i,
        Hc(Pp.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        Io(9, kp.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Ct()
          , t = we.identifierPrefix;
        if (se) {
            var n = zt
              , r = It;
            n = (r & ~(1 << 32 - ht(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = jo++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = Xv++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , ty = {
    readContext: it,
    useCallback: Mp,
    useContext: it,
    useEffect: Su,
    useImperativeHandle: Ap,
    useInsertionEffect: Rp,
    useLayoutEffect: _p,
    useMemo: Lp,
    useReducer: yl,
    useRef: Np,
    useState: function() {
        return yl(Do)
    },
    useDebugValue: Eu,
    useDeferredValue: function(e) {
        var t = st();
        return jp(t, me.memoizedState, e)
    },
    useTransition: function() {
        var e = yl(Do)[0]
          , t = st().memoizedState;
        return [e, t]
    },
    useMutableSource: Sp,
    useSyncExternalStore: Ep,
    useId: Dp,
    unstable_isNewReconciler: !1
}
  , ny = {
    readContext: it,
    useCallback: Mp,
    useContext: it,
    useEffect: Su,
    useImperativeHandle: Ap,
    useInsertionEffect: Rp,
    useLayoutEffect: _p,
    useMemo: Lp,
    useReducer: wl,
    useRef: Np,
    useState: function() {
        return wl(Do)
    },
    useDebugValue: Eu,
    useDeferredValue: function(e) {
        var t = st();
        return me === null ? t.memoizedState = e : jp(t, me.memoizedState, e)
    },
    useTransition: function() {
        var e = wl(Do)[0]
          , t = st().memoizedState;
        return [e, t]
    },
    useMutableSource: Sp,
    useSyncExternalStore: Ep,
    useId: Dp,
    unstable_isNewReconciler: !1
};
function ut(e, t) {
    if (e && e.defaultProps) {
        t = ce({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function aa(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : ce({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ts = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Zn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Me()
          , o = Sn(e)
          , i = Ft(r, o);
        i.payload = t,
        n != null && (i.callback = n),
        t = wn(e, i, o),
        t !== null && (mt(t, e, o, r),
        _i(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Me()
          , o = Sn(e)
          , i = Ft(r, o);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = wn(e, i, o),
        t !== null && (mt(t, e, o, r),
        _i(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Me()
          , r = Sn(e)
          , o = Ft(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = wn(e, o, r),
        t !== null && (mt(t, e, r, n),
        _i(t, e, r))
    }
};
function Qc(e, t, n, r, o, i, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Ro(n, r) || !Ro(o, i) : !0
}
function $p(e, t, n) {
    var r = !1
      , o = kn
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = it(i) : (o = Fe(t) ? Wn : Re.current,
    r = t.contextTypes,
    i = (r = r != null) ? Dr(e, o) : kn),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Ts,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function Kc(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ts.enqueueReplaceState(t, t.state, null)
}
function ua(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    hu(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = it(i) : (i = Fe(t) ? Wn : Re.current,
    o.context = Dr(e, i)),
    o.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (aa(e, t, i, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && Ts.enqueueReplaceState(o, o.state, null),
    ts(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function $r(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += _g(r),
            r = r.return;
        while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function xl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function ca(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var ry = typeof WeakMap == "function" ? WeakMap : Map;
function Up(e, t, n) {
    n = Ft(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        ss || (ss = !0,
        xa = r),
        ca(e, t)
    }
    ,
    n
}
function Bp(e, t, n) {
    n = Ft(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            ca(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        ca(e, t),
        typeof r != "function" && (xn === null ? xn = new Set([this]) : xn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function Yc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new ry;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = vy.bind(null, e, t, n),
    t.then(e, e))
}
function Gc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Xc(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ft(-1, 1),
    t.tag = 2,
    wn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var oy = Qt.ReactCurrentOwner
  , Ie = !1;
function Oe(e, t, n, r) {
    t.child = e === null ? vp(t, null, n, r) : zr(t, e.child, n, r)
}
function qc(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Sr(t, o),
    r = wu(e, t, n, r, i, o),
    n = xu(),
    e !== null && !Ie ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Vt(e, t, o)) : (se && n && lu(t),
    t.flags |= 1,
    Oe(e, t, r, o),
    t.child)
}
function Zc(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !_u(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        Vp(e, t, i, r, o)) : (e = Di(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Ro,
        n(s, r) && e.ref === t.ref)
            return Vt(e, t, o)
    }
    return t.flags |= 1,
    e = En(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Vp(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Ro(i, r) && e.ref === t.ref)
            if (Ie = !1,
            t.pendingProps = r = i,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (Ie = !0);
            else
                return t.lanes = e.lanes,
                Vt(e, t, o)
    }
    return da(e, t, n, r, o)
}
function Wp(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            te(gr, Qe),
            Qe |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                te(gr, Qe),
                Qe |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            te(gr, Qe),
            Qe |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        te(gr, Qe),
        Qe |= r;
    return Oe(e, t, o, n),
    t.child
}
function Hp(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function da(e, t, n, r, o) {
    var i = Fe(n) ? Wn : Re.current;
    return i = Dr(t, i),
    Sr(t, o),
    n = wu(e, t, n, r, i, o),
    r = xu(),
    e !== null && !Ie ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Vt(e, t, o)) : (se && r && lu(t),
    t.flags |= 1,
    Oe(e, t, n, o),
    t.child)
}
function Jc(e, t, n, r, o) {
    if (Fe(n)) {
        var i = !0;
        Xi(t)
    } else
        i = !1;
    if (Sr(t, o),
    t.stateNode === null)
        Mi(e, t),
        $p(t, n, r),
        ua(t, n, r, o),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , l = t.memoizedProps;
        s.props = l;
        var a = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = it(u) : (u = Fe(n) ? Wn : Re.current,
        u = Dr(t, u));
        var d = n.getDerivedStateFromProps
          , f = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && Kc(t, s, r, u),
        rn = !1;
        var c = t.memoizedState;
        s.state = c,
        ts(t, r, s, o),
        a = t.memoizedState,
        l !== r || c !== a || ze.current || rn ? (typeof d == "function" && (aa(t, n, d, r),
        a = t.memoizedState),
        (l = rn || Qc(t, n, l, r, c, a, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        s.props = r,
        s.state = a,
        s.context = u,
        r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        wp(e, t),
        l = t.memoizedProps,
        u = t.type === t.elementType ? l : ut(t.type, l),
        s.props = u,
        f = t.pendingProps,
        c = s.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = it(a) : (a = Fe(n) ? Wn : Re.current,
        a = Dr(t, a));
        var v = n.getDerivedStateFromProps;
        (d = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || c !== a) && Kc(t, s, r, a),
        rn = !1,
        c = t.memoizedState,
        s.state = c,
        ts(t, r, s, o);
        var y = t.memoizedState;
        l !== f || c !== y || ze.current || rn ? (typeof v == "function" && (aa(t, n, v, r),
        y = t.memoizedState),
        (u = rn || Qc(t, n, u, r, c, y, a) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, a),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, a)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && c === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && c === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = y),
        s.props = r,
        s.state = y,
        s.context = a,
        r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && c === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && c === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return fa(e, t, n, r, i, o)
}
function fa(e, t, n, r, o, i) {
    Hp(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return o && zc(t, n, !1),
        Vt(e, t, i);
    r = t.stateNode,
    oy.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = zr(t, e.child, null, i),
    t.child = zr(t, null, l, i)) : Oe(e, t, l, i),
    t.memoizedState = r.state,
    o && zc(t, n, !0),
    t.child
}
function Qp(e) {
    var t = e.stateNode;
    t.pendingContext ? Ic(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ic(e, t.context, !1),
    mu(e, t.containerInfo)
}
function ed(e, t, n, r, o) {
    return Ir(),
    uu(o),
    t.flags |= 256,
    Oe(e, t, n, r),
    t.child
}
var pa = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function ha(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Kp(e, t, n) {
    var r = t.pendingProps, o = ae.current, i = !1, s = (t.flags & 128) !== 0, l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    te(ae, o & 1),
    e === null)
        return sa(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = s) : i = Rs(s, r, 0, null),
        e = Vn(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = ha(n),
        t.memoizedState = pa,
        e) : Cu(t, s));
    if (o = e.memoizedState,
    o !== null && (l = o.dehydrated,
    l !== null))
        return iy(e, t, s, r, l, o, n);
    if (i) {
        i = r.fallback,
        s = t.mode,
        o = e.child,
        l = o.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = En(o, a),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        l !== null ? i = En(l, i) : (i = Vn(i, s, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        s = e.child.memoizedState,
        s = s === null ? ha(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        i.memoizedState = s,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = pa,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = En(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Cu(e, t) {
    return t = Rs({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function gi(e, t, n, r) {
    return r !== null && uu(r),
    zr(t, e.child, null, n),
    e = Cu(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function iy(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = xl(Error(R(422))),
        gi(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        o = t.mode,
        r = Rs({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        i = Vn(i, o, s, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && zr(t, e.child, null, s),
        t.child.memoizedState = ha(s),
        t.memoizedState = pa,
        i);
    if (!(t.mode & 1))
        return gi(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        i = Error(R(419)),
        r = xl(i, r, void 0),
        gi(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0,
    Ie || l) {
        if (r = we,
        r !== null) {
            switch (s & -s) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
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
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o,
            o !== 0 && o !== i.retryLane && (i.retryLane = o,
            Bt(e, o),
            mt(r, e, o, -1))
        }
        return Ru(),
        r = xl(Error(R(421))),
        gi(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = yy.bind(null, e),
    o._reactRetry = t,
    null) : (e = i.treeContext,
    Ye = yn(o.nextSibling),
    Ge = t,
    se = !0,
    pt = null,
    e !== null && (tt[nt++] = It,
    tt[nt++] = zt,
    tt[nt++] = Hn,
    It = e.id,
    zt = e.overflow,
    Hn = t),
    t = Cu(t, r.children),
    t.flags |= 4096,
    t)
}
function td(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    la(e.return, t, n)
}
function Sl(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = o)
}
function Yp(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , i = r.tail;
    if (Oe(e, t, r.children, n),
    r = ae.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && td(e, n, t);
                else if (e.tag === 19)
                    td(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (te(ae, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && ns(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            Sl(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && ns(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            Sl(t, !0, n, null, i);
            break;
        case "together":
            Sl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Mi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Vt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Kn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(R(153));
    if (t.child !== null) {
        for (e = t.child,
        n = En(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = En(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function sy(e, t, n) {
    switch (t.tag) {
    case 3:
        Qp(t),
        Ir();
        break;
    case 5:
        xp(t);
        break;
    case 1:
        Fe(t.type) && Xi(t);
        break;
    case 4:
        mu(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        te(Ji, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (te(ae, ae.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Kp(e, t, n) : (te(ae, ae.current & 1),
            e = Vt(e, t, n),
            e !== null ? e.sibling : null);
        te(ae, ae.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Yp(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        te(ae, ae.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Wp(e, t, n)
    }
    return Vt(e, t, n)
}
var Gp, ma, Xp, qp;
Gp = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
ma = function() {}
;
Xp = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        In(Rt.current);
        var i = null;
        switch (n) {
        case "input":
            o = Il(e, o),
            r = Il(e, r),
            i = [];
            break;
        case "select":
            o = ce({}, o, {
                value: void 0
            }),
            r = ce({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            o = $l(e, o),
            r = $l(e, r),
            i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Yi)
        }
        Bl(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var l = o[u];
                    for (s in l)
                        l.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Eo.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l)
                            !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in a)
                            a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}),
                            n[s] = a[s])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Eo.hasOwnProperty(u) ? (a != null && u === "onScroll" && oe("scroll", e),
                    i || l === a || (i = [])) : (i = i || []).push(u, a))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
qp = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function ro(e, t) {
    if (!se)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Te(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function ly(e, t, n) {
    var r = t.pendingProps;
    switch (au(t),
    t.tag) {
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
        return Te(t),
        null;
    case 1:
        return Fe(t.type) && Gi(),
        Te(t),
        null;
    case 3:
        return r = t.stateNode,
        Fr(),
        ie(ze),
        ie(Re),
        vu(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (hi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        pt !== null && (Ca(pt),
        pt = null))),
        ma(e, t),
        Te(t),
        null;
    case 5:
        gu(t);
        var o = In(Lo.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Xp(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(R(166));
                return Te(t),
                null
            }
            if (e = In(Rt.current),
            hi(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[bt] = t,
                r[Ao] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    oe("cancel", r),
                    oe("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    oe("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < co.length; o++)
                        oe(co[o], r);
                    break;
                case "source":
                    oe("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    oe("error", r),
                    oe("load", r);
                    break;
                case "details":
                    oe("toggle", r);
                    break;
                case "input":
                    cc(r, i),
                    oe("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    oe("invalid", r);
                    break;
                case "textarea":
                    fc(r, i),
                    oe("invalid", r)
                }
                Bl(n, i),
                o = null;
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var l = i[s];
                        s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && pi(r.textContent, l, e),
                        o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && pi(r.textContent, l, e),
                        o = ["children", "" + l]) : Eo.hasOwnProperty(s) && l != null && s === "onScroll" && oe("scroll", r)
                    }
                switch (n) {
                case "input":
                    ii(r),
                    dc(r, i, !0);
                    break;
                case "textarea":
                    ii(r),
                    pc(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = Yi)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Pf(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[bt] = t,
                e[Ao] = r,
                Gp(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = Vl(n, r),
                    n) {
                    case "dialog":
                        oe("cancel", e),
                        oe("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        oe("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < co.length; o++)
                            oe(co[o], e);
                        o = r;
                        break;
                    case "source":
                        oe("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        oe("error", e),
                        oe("load", e),
                        o = r;
                        break;
                    case "details":
                        oe("toggle", e),
                        o = r;
                        break;
                    case "input":
                        cc(e, r),
                        o = Il(e, r),
                        oe("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = ce({}, r, {
                            value: void 0
                        }),
                        oe("invalid", e);
                        break;
                    case "textarea":
                        fc(e, r),
                        o = $l(e, r),
                        oe("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    Bl(n, o),
                    l = o;
                    for (i in l)
                        if (l.hasOwnProperty(i)) {
                            var a = l[i];
                            i === "style" ? Nf(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && Tf(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Co(e, a) : typeof a == "number" && Co(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Eo.hasOwnProperty(i) ? a != null && i === "onScroll" && oe("scroll", e) : a != null && Ka(e, i, a, s))
                        }
                    switch (n) {
                    case "input":
                        ii(e),
                        dc(e, r, !1);
                        break;
                    case "textarea":
                        ii(e),
                        pc(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Cn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? vr(e, !!r.multiple, i, !1) : r.defaultValue != null && vr(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = Yi)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Te(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            qp(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(R(166));
            if (n = In(Lo.current),
            In(Rt.current),
            hi(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[bt] = t,
                (i = r.nodeValue !== n) && (e = Ge,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        pi(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && pi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[bt] = t,
                t.stateNode = r
        }
        return Te(t),
        null;
    case 13:
        if (ie(ae),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (se && Ye !== null && t.mode & 1 && !(t.flags & 128))
                mp(),
                Ir(),
                t.flags |= 98560,
                i = !1;
            else if (i = hi(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(R(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(R(317));
                    i[bt] = t
                } else
                    Ir(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Te(t),
                i = !1
            } else
                pt !== null && (Ca(pt),
                pt = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ae.current & 1 ? ve === 0 && (ve = 3) : Ru())),
        t.updateQueue !== null && (t.flags |= 4),
        Te(t),
        null);
    case 4:
        return Fr(),
        ma(e, t),
        e === null && _o(t.stateNode.containerInfo),
        Te(t),
        null;
    case 10:
        return fu(t.type._context),
        Te(t),
        null;
    case 17:
        return Fe(t.type) && Gi(),
        Te(t),
        null;
    case 19:
        if (ie(ae),
        i = t.memoizedState,
        i === null)
            return Te(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = i.rendering,
        s === null)
            if (r)
                ro(i, !1);
            else {
                if (ve !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = ns(e),
                        s !== null) {
                            for (t.flags |= 128,
                            ro(i, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                s = i.alternate,
                                s === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = s.childLanes,
                                i.lanes = s.lanes,
                                i.child = s.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = s.memoizedProps,
                                i.memoizedState = s.memoizedState,
                                i.updateQueue = s.updateQueue,
                                i.type = s.type,
                                e = s.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return te(ae, ae.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && pe() > Ur && (t.flags |= 128,
                r = !0,
                ro(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = ns(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    ro(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !s.alternate && !se)
                        return Te(t),
                        null
                } else
                    2 * pe() - i.renderingStartTime > Ur && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    ro(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = i.last,
            n !== null ? n.sibling = s : t.child = s,
            i.last = s)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = pe(),
        t.sibling = null,
        n = ae.current,
        te(ae, r ? n & 1 | 2 : n & 1),
        t) : (Te(t),
        null);
    case 22:
    case 23:
        return Nu(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Qe & 1073741824 && (Te(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Te(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(R(156, t.tag))
}
function ay(e, t) {
    switch (au(t),
    t.tag) {
    case 1:
        return Fe(t.type) && Gi(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Fr(),
        ie(ze),
        ie(Re),
        vu(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return gu(t),
        null;
    case 13:
        if (ie(ae),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(R(340));
            Ir()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ie(ae),
        null;
    case 4:
        return Fr(),
        null;
    case 10:
        return fu(t.type._context),
        null;
    case 22:
    case 23:
        return Nu(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var vi = !1
  , Ne = !1
  , uy = typeof WeakSet == "function" ? WeakSet : Set
  , L = null;
function mr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                fe(e, t, r)
            }
        else
            n.current = null
}
function ga(e, t, n) {
    try {
        n()
    } catch (r) {
        fe(e, t, r)
    }
}
var nd = !1;
function cy(e, t) {
    if (Jl = Hi,
    e = np(),
    su(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , d = 0
                      , f = e
                      , c = null;
                    t: for (; ; ) {
                        for (var v; f !== n || o !== 0 && f.nodeType !== 3 || (l = s + o),
                        f !== i || r !== 0 && f.nodeType !== 3 || (a = s + r),
                        f.nodeType === 3 && (s += f.nodeValue.length),
                        (v = f.firstChild) !== null; )
                            c = f,
                            f = v;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (c === n && ++u === o && (l = s),
                            c === i && ++d === r && (a = s),
                            (v = f.nextSibling) !== null)
                                break;
                            f = c,
                            c = f.parentNode
                        }
                        f = v
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (ea = {
        focusedElem: e,
        selectionRange: n
    },
    Hi = !1,
    L = t; L !== null; )
        if (t = L,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            L = e;
        else
            for (; L !== null; ) {
                t = L;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var g = y.memoizedProps
                                  , w = y.memoizedState
                                  , h = t.stateNode
                                  , p = h.getSnapshotBeforeUpdate(t.elementType === t.type ? g : ut(t.type, g), w);
                                h.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(R(163))
                        }
                } catch (S) {
                    fe(t, t.return, S)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    L = e;
                    break
                }
                L = t.return
            }
    return y = nd,
    nd = !1,
    y
}
function yo(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                i !== void 0 && ga(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function bs(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function va(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Zp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Zp(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[bt],
    delete t[Ao],
    delete t[ra],
    delete t[Qv],
    delete t[Kv])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Jp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function rd(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Jp(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function ya(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Yi));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (ya(e, t, n),
        e = e.sibling; e !== null; )
            ya(e, t, n),
            e = e.sibling
}
function wa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (wa(e, t, n),
        e = e.sibling; e !== null; )
            wa(e, t, n),
            e = e.sibling
}
var Se = null
  , ft = !1;
function Zt(e, t, n) {
    for (n = n.child; n !== null; )
        eh(e, t, n),
        n = n.sibling
}
function eh(e, t, n) {
    if (Nt && typeof Nt.onCommitFiberUnmount == "function")
        try {
            Nt.onCommitFiberUnmount(ws, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Ne || mr(n, t);
    case 6:
        var r = Se
          , o = ft;
        Se = null,
        Zt(e, t, n),
        Se = r,
        ft = o,
        Se !== null && (ft ? (e = Se,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Se.removeChild(n.stateNode));
        break;
    case 18:
        Se !== null && (ft ? (e = Se,
        n = n.stateNode,
        e.nodeType === 8 ? hl(e.parentNode, n) : e.nodeType === 1 && hl(e, n),
        bo(e)) : hl(Se, n.stateNode));
        break;
    case 4:
        r = Se,
        o = ft,
        Se = n.stateNode.containerInfo,
        ft = !0,
        Zt(e, t, n),
        Se = r,
        ft = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ne && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var i = o
                  , s = i.destroy;
                i = i.tag,
                s !== void 0 && (i & 2 || i & 4) && ga(n, t, s),
                o = o.next
            } while (o !== r)
        }
        Zt(e, t, n);
        break;
    case 1:
        if (!Ne && (mr(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                fe(n, t, l)
            }
        Zt(e, t, n);
        break;
    case 21:
        Zt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Ne = (r = Ne) || n.memoizedState !== null,
        Zt(e, t, n),
        Ne = r) : Zt(e, t, n);
        break;
    default:
        Zt(e, t, n)
    }
}
function od(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new uy),
        t.forEach(function(r) {
            var o = wy.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function at(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e
                  , s = t
                  , l = s;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        Se = l.stateNode,
                        ft = !1;
                        break e;
                    case 3:
                        Se = l.stateNode.containerInfo,
                        ft = !0;
                        break e;
                    case 4:
                        Se = l.stateNode.containerInfo,
                        ft = !0;
                        break e
                    }
                    l = l.return
                }
                if (Se === null)
                    throw Error(R(160));
                eh(i, s, o),
                Se = null,
                ft = !1;
                var a = o.alternate;
                a !== null && (a.return = null),
                o.return = null
            } catch (u) {
                fe(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            th(t, e),
            t = t.sibling
}
function th(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (at(t, e),
        Et(e),
        r & 4) {
            try {
                yo(3, e, e.return),
                bs(3, e)
            } catch (g) {
                fe(e, e.return, g)
            }
            try {
                yo(5, e, e.return)
            } catch (g) {
                fe(e, e.return, g)
            }
        }
        break;
    case 1:
        at(t, e),
        Et(e),
        r & 512 && n !== null && mr(n, n.return);
        break;
    case 5:
        if (at(t, e),
        Et(e),
        r & 512 && n !== null && mr(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Co(o, "")
            } catch (g) {
                fe(e, e.return, g)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var i = e.memoizedProps
              , s = n !== null ? n.memoizedProps : i
              , l = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    l === "input" && i.type === "radio" && i.name != null && Cf(o, i),
                    Vl(l, s);
                    var u = Vl(l, i);
                    for (s = 0; s < a.length; s += 2) {
                        var d = a[s]
                          , f = a[s + 1];
                        d === "style" ? Nf(o, f) : d === "dangerouslySetInnerHTML" ? Tf(o, f) : d === "children" ? Co(o, f) : Ka(o, d, f, u)
                    }
                    switch (l) {
                    case "input":
                        zl(o, i);
                        break;
                    case "textarea":
                        kf(o, i);
                        break;
                    case "select":
                        var c = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var v = i.value;
                        v != null ? vr(o, !!i.multiple, v, !1) : c !== !!i.multiple && (i.defaultValue != null ? vr(o, !!i.multiple, i.defaultValue, !0) : vr(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Ao] = i
                } catch (g) {
                    fe(e, e.return, g)
                }
        }
        break;
    case 6:
        if (at(t, e),
        Et(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(R(162));
            o = e.stateNode,
            i = e.memoizedProps;
            try {
                o.nodeValue = i
            } catch (g) {
                fe(e, e.return, g)
            }
        }
        break;
    case 3:
        if (at(t, e),
        Et(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                bo(t.containerInfo)
            } catch (g) {
                fe(e, e.return, g)
            }
        break;
    case 4:
        at(t, e),
        Et(e);
        break;
    case 13:
        at(t, e),
        Et(e),
        o = e.child,
        o.flags & 8192 && (i = o.memoizedState !== null,
        o.stateNode.isHidden = i,
        !i || o.alternate !== null && o.alternate.memoizedState !== null || (Tu = pe())),
        r & 4 && od(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Ne = (u = Ne) || d,
        at(t, e),
        Ne = u) : at(t, e),
        Et(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
                for (L = e,
                d = e.child; d !== null; ) {
                    for (f = L = d; L !== null; ) {
                        switch (c = L,
                        v = c.child,
                        c.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            yo(4, c, c.return);
                            break;
                        case 1:
                            mr(c, c.return);
                            var y = c.stateNode;
                            if (typeof y.componentWillUnmount == "function") {
                                r = c,
                                n = c.return;
                                try {
                                    t = r,
                                    y.props = t.memoizedProps,
                                    y.state = t.memoizedState,
                                    y.componentWillUnmount()
                                } catch (g) {
                                    fe(r, n, g)
                                }
                            }
                            break;
                        case 5:
                            mr(c, c.return);
                            break;
                        case 22:
                            if (c.memoizedState !== null) {
                                sd(f);
                                continue
                            }
                        }
                        v !== null ? (v.return = c,
                        L = v) : sd(f)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (d === null) {
                        d = f;
                        try {
                            o = f.stateNode,
                            u ? (i = o.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = f.stateNode,
                            a = f.memoizedProps.style,
                            s = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = bf("display", s))
                        } catch (g) {
                            fe(e, e.return, g)
                        }
                    }
                } else if (f.tag === 6) {
                    if (d === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (g) {
                            fe(e, e.return, g)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    d === f && (d = null),
                    f = f.return
                }
                d === f && (d = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        at(t, e),
        Et(e),
        r & 4 && od(e);
        break;
    case 21:
        break;
    default:
        at(t, e),
        Et(e)
    }
}
function Et(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Jp(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(R(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (Co(o, ""),
                r.flags &= -33);
                var i = rd(e);
                wa(e, i, o);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , l = rd(e);
                ya(e, l, s);
                break;
            default:
                throw Error(R(161))
            }
        } catch (a) {
            fe(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function dy(e, t, n) {
    L = e,
    nh(e)
}
function nh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; L !== null; ) {
        var o = L
          , i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || vi;
            if (!s) {
                var l = o.alternate
                  , a = l !== null && l.memoizedState !== null || Ne;
                l = vi;
                var u = Ne;
                if (vi = s,
                (Ne = a) && !u)
                    for (L = o; L !== null; )
                        s = L,
                        a = s.child,
                        s.tag === 22 && s.memoizedState !== null ? ld(o) : a !== null ? (a.return = s,
                        L = a) : ld(o);
                for (; i !== null; )
                    L = i,
                    nh(i),
                    i = i.sibling;
                L = o,
                vi = l,
                Ne = u
            }
            id(e)
        } else
            o.subtreeFlags & 8772 && i !== null ? (i.return = o,
            L = i) : id(e)
    }
}
function id(e) {
    for (; L !== null; ) {
        var t = L;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ne || bs(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ne)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : ut(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Vc(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Vc(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
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
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && bo(f)
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
                        throw Error(R(163))
                    }
                Ne || t.flags & 512 && va(t)
            } catch (c) {
                fe(t, t.return, c)
            }
        }
        if (t === e) {
            L = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            L = n;
            break
        }
        L = t.return
    }
}
function sd(e) {
    for (; L !== null; ) {
        var t = L;
        if (t === e) {
            L = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            L = n;
            break
        }
        L = t.return
    }
}
function ld(e) {
    for (; L !== null; ) {
        var t = L;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    bs(4, t)
                } catch (a) {
                    fe(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        fe(t, o, a)
                    }
                }
                var i = t.return;
                try {
                    va(t)
                } catch (a) {
                    fe(t, i, a)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    va(t)
                } catch (a) {
                    fe(t, s, a)
                }
            }
        } catch (a) {
            fe(t, t.return, a)
        }
        if (t === e) {
            L = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            L = l;
            break
        }
        L = t.return
    }
}
var fy = Math.ceil
  , is = Qt.ReactCurrentDispatcher
  , ku = Qt.ReactCurrentOwner
  , ot = Qt.ReactCurrentBatchConfig
  , X = 0
  , we = null
  , he = null
  , Ee = 0
  , Qe = 0
  , gr = _n(0)
  , ve = 0
  , zo = null
  , Kn = 0
  , Ns = 0
  , Pu = 0
  , wo = null
  , De = null
  , Tu = 0
  , Ur = 1 / 0
  , jt = null
  , ss = !1
  , xa = null
  , xn = null
  , yi = !1
  , pn = null
  , ls = 0
  , xo = 0
  , Sa = null
  , Li = -1
  , ji = 0;
function Me() {
    return X & 6 ? pe() : Li !== -1 ? Li : Li = pe()
}
function Sn(e) {
    return e.mode & 1 ? X & 2 && Ee !== 0 ? Ee & -Ee : Gv.transition !== null ? (ji === 0 && (ji = $f()),
    ji) : (e = J,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Kf(e.type)),
    e) : 1
}
function mt(e, t, n, r) {
    if (50 < xo)
        throw xo = 0,
        Sa = null,
        Error(R(185));
    Qo(e, n, r),
    (!(X & 2) || e !== we) && (e === we && (!(X & 2) && (Ns |= n),
    ve === 4 && sn(e, Ee)),
    $e(e, r),
    n === 1 && X === 0 && !(t.mode & 1) && (Ur = pe() + 500,
    ks && On()))
}
function $e(e, t) {
    var n = e.callbackNode;
    Gg(e, t);
    var r = Wi(e, e === we ? Ee : 0);
    if (r === 0)
        n !== null && gc(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && gc(n),
        t === 1)
            e.tag === 0 ? Yv(ad.bind(null, e)) : fp(ad.bind(null, e)),
            Wv(function() {
                !(X & 6) && On()
            }),
            n = null;
        else {
            switch (Uf(r)) {
            case 1:
                n = Za;
                break;
            case 4:
                n = zf;
                break;
            case 16:
                n = Vi;
                break;
            case 536870912:
                n = Ff;
                break;
            default:
                n = Vi
            }
            n = ch(n, rh.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function rh(e, t) {
    if (Li = -1,
    ji = 0,
    X & 6)
        throw Error(R(327));
    var n = e.callbackNode;
    if (Er() && e.callbackNode !== n)
        return null;
    var r = Wi(e, e === we ? Ee : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = as(e, r);
    else {
        t = r;
        var o = X;
        X |= 2;
        var i = ih();
        (we !== e || Ee !== t) && (jt = null,
        Ur = pe() + 500,
        Bn(e, t));
        do
            try {
                my();
                break
            } catch (l) {
                oh(e, l)
            }
        while (!0);
        du(),
        is.current = i,
        X = o,
        he !== null ? t = 0 : (we = null,
        Ee = 0,
        t = ve)
    }
    if (t !== 0) {
        if (t === 2 && (o = Yl(e),
        o !== 0 && (r = o,
        t = Ea(e, o))),
        t === 1)
            throw n = zo,
            Bn(e, 0),
            sn(e, r),
            $e(e, pe()),
            n;
        if (t === 6)
            sn(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !py(o) && (t = as(e, r),
            t === 2 && (i = Yl(e),
            i !== 0 && (r = i,
            t = Ea(e, i))),
            t === 1))
                throw n = zo,
                Bn(e, 0),
                sn(e, r),
                $e(e, pe()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(R(345));
            case 2:
                Ln(e, De, jt);
                break;
            case 3:
                if (sn(e, r),
                (r & 130023424) === r && (t = Tu + 500 - pe(),
                10 < t)) {
                    if (Wi(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        Me(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = na(Ln.bind(null, e, De, jt), t);
                    break
                }
                Ln(e, De, jt);
                break;
            case 4:
                if (sn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var s = 31 - ht(r);
                    i = 1 << s,
                    s = t[s],
                    s > o && (o = s),
                    r &= ~i
                }
                if (r = o,
                r = pe() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * fy(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = na(Ln.bind(null, e, De, jt), r);
                    break
                }
                Ln(e, De, jt);
                break;
            case 5:
                Ln(e, De, jt);
                break;
            default:
                throw Error(R(329))
            }
        }
    }
    return $e(e, pe()),
    e.callbackNode === n ? rh.bind(null, e) : null
}
function Ea(e, t) {
    var n = wo;
    return e.current.memoizedState.isDehydrated && (Bn(e, t).flags |= 256),
    e = as(e, t),
    e !== 2 && (t = De,
    De = n,
    t !== null && Ca(t)),
    e
}
function Ca(e) {
    De === null ? De = e : De.push.apply(De, e)
}
function py(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!gt(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function sn(e, t) {
    for (t &= ~Pu,
    t &= ~Ns,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - ht(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function ad(e) {
    if (X & 6)
        throw Error(R(327));
    Er();
    var t = Wi(e, 0);
    if (!(t & 1))
        return $e(e, pe()),
        null;
    var n = as(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Yl(e);
        r !== 0 && (t = r,
        n = Ea(e, r))
    }
    if (n === 1)
        throw n = zo,
        Bn(e, 0),
        sn(e, t),
        $e(e, pe()),
        n;
    if (n === 6)
        throw Error(R(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Ln(e, De, jt),
    $e(e, pe()),
    null
}
function bu(e, t) {
    var n = X;
    X |= 1;
    try {
        return e(t)
    } finally {
        X = n,
        X === 0 && (Ur = pe() + 500,
        ks && On())
    }
}
function Yn(e) {
    pn !== null && pn.tag === 0 && !(X & 6) && Er();
    var t = X;
    X |= 1;
    var n = ot.transition
      , r = J;
    try {
        if (ot.transition = null,
        J = 1,
        e)
            return e()
    } finally {
        J = r,
        ot.transition = n,
        X = t,
        !(X & 6) && On()
    }
}
function Nu() {
    Qe = gr.current,
    ie(gr)
}
function Bn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Vv(n)),
    he !== null)
        for (n = he.return; n !== null; ) {
            var r = n;
            switch (au(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Gi();
                break;
            case 3:
                Fr(),
                ie(ze),
                ie(Re),
                vu();
                break;
            case 5:
                gu(r);
                break;
            case 4:
                Fr();
                break;
            case 13:
                ie(ae);
                break;
            case 19:
                ie(ae);
                break;
            case 10:
                fu(r.type._context);
                break;
            case 22:
            case 23:
                Nu()
            }
            n = n.return
        }
    if (we = e,
    he = e = En(e.current, null),
    Ee = Qe = t,
    ve = 0,
    zo = null,
    Pu = Ns = Kn = 0,
    De = wo = null,
    Dn !== null) {
        for (t = 0; t < Dn.length; t++)
            if (n = Dn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o,
                    r.next = s
                }
                n.pending = r
            }
        Dn = null
    }
    return e
}
function oh(e, t) {
    do {
        var n = he;
        try {
            if (du(),
            Oi.current = os,
            rs) {
                for (var r = ue.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                rs = !1
            }
            if (Qn = 0,
            ye = me = ue = null,
            vo = !1,
            jo = 0,
            ku.current = null,
            n === null || n.return === null) {
                ve = 1,
                zo = t,
                he = null;
                break
            }
            e: {
                var i = e
                  , s = n.return
                  , l = n
                  , a = t;
                if (t = Ee,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , d = l
                      , f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var c = d.alternate;
                        c ? (d.updateQueue = c.updateQueue,
                        d.memoizedState = c.memoizedState,
                        d.lanes = c.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var v = Gc(s);
                    if (v !== null) {
                        v.flags &= -257,
                        Xc(v, s, l, i, t),
                        v.mode & 1 && Yc(i, u, t),
                        t = v,
                        a = u;
                        var y = t.updateQueue;
                        if (y === null) {
                            var g = new Set;
                            g.add(a),
                            t.updateQueue = g
                        } else
                            y.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Yc(i, u, t),
                            Ru();
                            break e
                        }
                        a = Error(R(426))
                    }
                } else if (se && l.mode & 1) {
                    var w = Gc(s);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        Xc(w, s, l, i, t),
                        uu($r(a, l));
                        break e
                    }
                }
                i = a = $r(a, l),
                ve !== 4 && (ve = 2),
                wo === null ? wo = [i] : wo.push(i),
                i = s;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var h = Up(i, a, t);
                        Bc(i, h);
                        break e;
                    case 1:
                        l = a;
                        var p = i.type
                          , m = i.stateNode;
                        if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (xn === null || !xn.has(m)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var S = Bp(i, l, t);
                            Bc(i, S);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            lh(n)
        } catch (C) {
            t = C,
            he === n && n !== null && (he = n = n.return);
            continue
        }
        break
    } while (!0)
}
function ih() {
    var e = is.current;
    return is.current = os,
    e === null ? os : e
}
function Ru() {
    (ve === 0 || ve === 3 || ve === 2) && (ve = 4),
    we === null || !(Kn & 268435455) && !(Ns & 268435455) || sn(we, Ee)
}
function as(e, t) {
    var n = X;
    X |= 2;
    var r = ih();
    (we !== e || Ee !== t) && (jt = null,
    Bn(e, t));
    do
        try {
            hy();
            break
        } catch (o) {
            oh(e, o)
        }
    while (!0);
    if (du(),
    X = n,
    is.current = r,
    he !== null)
        throw Error(R(261));
    return we = null,
    Ee = 0,
    ve
}
function hy() {
    for (; he !== null; )
        sh(he)
}
function my() {
    for (; he !== null && !$g(); )
        sh(he)
}
function sh(e) {
    var t = uh(e.alternate, e, Qe);
    e.memoizedProps = e.pendingProps,
    t === null ? lh(e) : he = t,
    ku.current = null
}
function lh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = ay(n, t),
            n !== null) {
                n.flags &= 32767,
                he = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                ve = 6,
                he = null;
                return
            }
        } else if (n = ly(n, t, Qe),
        n !== null) {
            he = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            he = t;
            return
        }
        he = t = e
    } while (t !== null);
    ve === 0 && (ve = 5)
}
function Ln(e, t, n) {
    var r = J
      , o = ot.transition;
    try {
        ot.transition = null,
        J = 1,
        gy(e, t, n, r)
    } finally {
        ot.transition = o,
        J = r
    }
    return null
}
function gy(e, t, n, r) {
    do
        Er();
    while (pn !== null);
    if (X & 6)
        throw Error(R(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(R(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Xg(e, i),
    e === we && (he = we = null,
    Ee = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || yi || (yi = !0,
    ch(Vi, function() {
        return Er(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = ot.transition,
        ot.transition = null;
        var s = J;
        J = 1;
        var l = X;
        X |= 4,
        ku.current = null,
        cy(e, n),
        th(n, e),
        Dv(ea),
        Hi = !!Jl,
        ea = Jl = null,
        e.current = n,
        dy(n),
        Ug(),
        X = l,
        J = s,
        ot.transition = i
    } else
        e.current = n;
    if (yi && (yi = !1,
    pn = e,
    ls = o),
    i = e.pendingLanes,
    i === 0 && (xn = null),
    Wg(n.stateNode),
    $e(e, pe()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (ss)
        throw ss = !1,
        e = xa,
        xa = null,
        e;
    return ls & 1 && e.tag !== 0 && Er(),
    i = e.pendingLanes,
    i & 1 ? e === Sa ? xo++ : (xo = 0,
    Sa = e) : xo = 0,
    On(),
    null
}
function Er() {
    if (pn !== null) {
        var e = Uf(ls)
          , t = ot.transition
          , n = J;
        try {
            if (ot.transition = null,
            J = 16 > e ? 16 : e,
            pn === null)
                var r = !1;
            else {
                if (e = pn,
                pn = null,
                ls = 0,
                X & 6)
                    throw Error(R(331));
                var o = X;
                for (X |= 4,
                L = e.current; L !== null; ) {
                    var i = L
                      , s = i.child;
                    if (L.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (L = u; L !== null; ) {
                                    var d = L;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        yo(8, d, i)
                                    }
                                    var f = d.child;
                                    if (f !== null)
                                        f.return = d,
                                        L = f;
                                    else
                                        for (; L !== null; ) {
                                            d = L;
                                            var c = d.sibling
                                              , v = d.return;
                                            if (Zp(d),
                                            d === u) {
                                                L = null;
                                                break
                                            }
                                            if (c !== null) {
                                                c.return = v,
                                                L = c;
                                                break
                                            }
                                            L = v
                                        }
                                }
                            }
                            var y = i.alternate;
                            if (y !== null) {
                                var g = y.child;
                                if (g !== null) {
                                    y.child = null;
                                    do {
                                        var w = g.sibling;
                                        g.sibling = null,
                                        g = w
                                    } while (g !== null)
                                }
                            }
                            L = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null)
                        s.return = i,
                        L = s;
                    else
                        e: for (; L !== null; ) {
                            if (i = L,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    yo(9, i, i.return)
                                }
                            var h = i.sibling;
                            if (h !== null) {
                                h.return = i.return,
                                L = h;
                                break e
                            }
                            L = i.return
                        }
                }
                var p = e.current;
                for (L = p; L !== null; ) {
                    s = L;
                    var m = s.child;
                    if (s.subtreeFlags & 2064 && m !== null)
                        m.return = s,
                        L = m;
                    else
                        e: for (s = p; L !== null; ) {
                            if (l = L,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        bs(9, l)
                                    }
                                } catch (C) {
                                    fe(l, l.return, C)
                                }
                            if (l === s) {
                                L = null;
                                break e
                            }
                            var S = l.sibling;
                            if (S !== null) {
                                S.return = l.return,
                                L = S;
                                break e
                            }
                            L = l.return
                        }
                }
                if (X = o,
                On(),
                Nt && typeof Nt.onPostCommitFiberRoot == "function")
                    try {
                        Nt.onPostCommitFiberRoot(ws, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            J = n,
            ot.transition = t
        }
    }
    return !1
}
function ud(e, t, n) {
    t = $r(n, t),
    t = Up(e, t, 1),
    e = wn(e, t, 1),
    t = Me(),
    e !== null && (Qo(e, 1, t),
    $e(e, t))
}
function fe(e, t, n) {
    if (e.tag === 3)
        ud(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                ud(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (xn === null || !xn.has(r))) {
                    e = $r(n, e),
                    e = Bp(t, e, 1),
                    t = wn(t, e, 1),
                    e = Me(),
                    t !== null && (Qo(t, 1, e),
                    $e(t, e));
                    break
                }
            }
            t = t.return
        }
}
function vy(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Me(),
    e.pingedLanes |= e.suspendedLanes & n,
    we === e && (Ee & n) === n && (ve === 4 || ve === 3 && (Ee & 130023424) === Ee && 500 > pe() - Tu ? Bn(e, 0) : Pu |= n),
    $e(e, t)
}
function ah(e, t) {
    t === 0 && (e.mode & 1 ? (t = ai,
    ai <<= 1,
    !(ai & 130023424) && (ai = 4194304)) : t = 1);
    var n = Me();
    e = Bt(e, t),
    e !== null && (Qo(e, t, n),
    $e(e, n))
}
function yy(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    ah(e, n)
}
function wy(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(R(314))
    }
    r !== null && r.delete(t),
    ah(e, n)
}
var uh;
uh = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ze.current)
            Ie = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ie = !1,
                sy(e, t, n);
            Ie = !!(e.flags & 131072)
        }
    else
        Ie = !1,
        se && t.flags & 1048576 && pp(t, Zi, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Mi(e, t),
        e = t.pendingProps;
        var o = Dr(t, Re.current);
        Sr(t, n),
        o = wu(null, t, r, e, o, n);
        var i = xu();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Fe(r) ? (i = !0,
        Xi(t)) : i = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        hu(t),
        o.updater = Ts,
        t.stateNode = o,
        o._reactInternals = t,
        ua(t, r, e, n),
        t = fa(null, t, r, !0, i, n)) : (t.tag = 0,
        se && i && lu(t),
        Oe(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Mi(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = Sy(r),
            e = ut(r, e),
            o) {
            case 0:
                t = da(null, t, r, e, n);
                break e;
            case 1:
                t = Jc(null, t, r, e, n);
                break e;
            case 11:
                t = qc(null, t, r, e, n);
                break e;
            case 14:
                t = Zc(null, t, r, ut(r.type, e), n);
                break e
            }
            throw Error(R(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ut(r, o),
        da(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ut(r, o),
        Jc(e, t, r, o, n);
    case 3:
        e: {
            if (Qp(t),
            e === null)
                throw Error(R(387));
            r = t.pendingProps,
            i = t.memoizedState,
            o = i.element,
            wp(e, t),
            ts(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    o = $r(Error(R(423)), t),
                    t = ed(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = $r(Error(R(424)), t),
                    t = ed(e, t, r, n, o);
                    break e
                } else
                    for (Ye = yn(t.stateNode.containerInfo.firstChild),
                    Ge = t,
                    se = !0,
                    pt = null,
                    n = vp(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Ir(),
                r === o) {
                    t = Vt(e, t, n);
                    break e
                }
                Oe(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return xp(t),
        e === null && sa(t),
        r = t.type,
        o = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        s = o.children,
        ta(r, o) ? s = null : i !== null && ta(r, i) && (t.flags |= 32),
        Hp(e, t),
        Oe(e, t, s, n),
        t.child;
    case 6:
        return e === null && sa(t),
        null;
    case 13:
        return Kp(e, t, n);
    case 4:
        return mu(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = zr(t, null, r, n) : Oe(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ut(r, o),
        qc(e, t, r, o, n);
    case 7:
        return Oe(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Oe(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Oe(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            i = t.memoizedProps,
            s = o.value,
            te(Ji, r._currentValue),
            r._currentValue = s,
            i !== null)
                if (gt(i.value, s)) {
                    if (i.children === o.children && !ze.current) {
                        t = Vt(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var l = i.dependencies;
                        if (l !== null) {
                            s = i.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (i.tag === 1) {
                                        a = Ft(-1, n & -n),
                                        a.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? a.next = a : (a.next = d.next,
                                            d.next = a),
                                            u.pending = a
                                        }
                                    }
                                    i.lanes |= n,
                                    a = i.alternate,
                                    a !== null && (a.lanes |= n),
                                    la(i.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (i.tag === 10)
                            s = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (s = i.return,
                            s === null)
                                throw Error(R(341));
                            s.lanes |= n,
                            l = s.alternate,
                            l !== null && (l.lanes |= n),
                            la(s, n, t),
                            s = i.sibling
                        } else
                            s = i.child;
                        if (s !== null)
                            s.return = i;
                        else
                            for (s = i; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (i = s.sibling,
                                i !== null) {
                                    i.return = s.return,
                                    s = i;
                                    break
                                }
                                s = s.return
                            }
                        i = s
                    }
            Oe(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        Sr(t, n),
        o = it(o),
        r = r(o),
        t.flags |= 1,
        Oe(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = ut(r, t.pendingProps),
        o = ut(r.type, o),
        Zc(e, t, r, o, n);
    case 15:
        return Vp(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ut(r, o),
        Mi(e, t),
        t.tag = 1,
        Fe(r) ? (e = !0,
        Xi(t)) : e = !1,
        Sr(t, n),
        $p(t, r, o),
        ua(t, r, o, n),
        fa(null, t, r, !0, e, n);
    case 19:
        return Yp(e, t, n);
    case 22:
        return Wp(e, t, n)
    }
    throw Error(R(156, t.tag))
}
;
function ch(e, t) {
    return If(e, t)
}
function xy(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function rt(e, t, n, r) {
    return new xy(e,t,n,r)
}
function _u(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Sy(e) {
    if (typeof e == "function")
        return _u(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Ga)
            return 11;
        if (e === Xa)
            return 14
    }
    return 2
}
function En(e, t) {
    var n = e.alternate;
    return n === null ? (n = rt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Di(e, t, n, r, o, i) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        _u(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case sr:
            return Vn(n.children, o, i, t);
        case Ya:
            s = 8,
            o |= 8;
            break;
        case Ml:
            return e = rt(12, n, t, o | 2),
            e.elementType = Ml,
            e.lanes = i,
            e;
        case Ll:
            return e = rt(13, n, t, o),
            e.elementType = Ll,
            e.lanes = i,
            e;
        case jl:
            return e = rt(19, n, t, o),
            e.elementType = jl,
            e.lanes = i,
            e;
        case xf:
            return Rs(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case yf:
                    s = 10;
                    break e;
                case wf:
                    s = 9;
                    break e;
                case Ga:
                    s = 11;
                    break e;
                case Xa:
                    s = 14;
                    break e;
                case nn:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(R(130, e == null ? e : typeof e, ""))
        }
    return t = rt(s, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function Vn(e, t, n, r) {
    return e = rt(7, e, r, t),
    e.lanes = n,
    e
}
function Rs(e, t, n, r) {
    return e = rt(22, e, r, t),
    e.elementType = xf,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function El(e, t, n) {
    return e = rt(6, e, null, t),
    e.lanes = n,
    e
}
function Cl(e, t, n) {
    return t = rt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Ey(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = rl(0),
    this.expirationTimes = rl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = rl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Ou(e, t, n, r, o, i, s, l, a) {
    return e = new Ey(e,t,n,l,a),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = rt(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    hu(i),
    e
}
function Cy(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: ir,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function dh(e) {
    if (!e)
        return kn;
    e = e._reactInternals;
    e: {
        if (Zn(e) !== e || e.tag !== 1)
            throw Error(R(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Fe(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(R(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Fe(n))
            return dp(e, n, t)
    }
    return t
}
function fh(e, t, n, r, o, i, s, l, a) {
    return e = Ou(n, r, !0, e, o, i, s, l, a),
    e.context = dh(null),
    n = e.current,
    r = Me(),
    o = Sn(n),
    i = Ft(r, o),
    i.callback = t ?? null,
    wn(n, i, o),
    e.current.lanes = o,
    Qo(e, o, r),
    $e(e, r),
    e
}
function _s(e, t, n, r) {
    var o = t.current
      , i = Me()
      , s = Sn(o);
    return n = dh(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Ft(i, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = wn(o, t, s),
    e !== null && (mt(e, o, s, i),
    _i(e, o, s)),
    s
}
function us(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function cd(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Au(e, t) {
    cd(e, t),
    (e = e.alternate) && cd(e, t)
}
function ky() {
    return null
}
var ph = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Mu(e) {
    this._internalRoot = e
}
Os.prototype.render = Mu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(R(409));
    _s(e, t, null, null)
}
;
Os.prototype.unmount = Mu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Yn(function() {
            _s(null, e, null, null)
        }),
        t[Ut] = null
    }
}
;
function Os(e) {
    this._internalRoot = e
}
Os.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Wf();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < on.length && t !== 0 && t < on[n].priority; n++)
            ;
        on.splice(n, 0, e),
        n === 0 && Qf(e)
    }
}
;
function Lu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function As(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function dd() {}
function Py(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = us(s);
                i.call(u)
            }
        }
        var s = fh(t, r, e, 0, null, !1, !1, "", dd);
        return e._reactRootContainer = s,
        e[Ut] = s.current,
        _o(e.nodeType === 8 ? e.parentNode : e),
        Yn(),
        s
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = us(a);
            l.call(u)
        }
    }
    var a = Ou(e, 0, !1, null, null, !1, !1, "", dd);
    return e._reactRootContainer = a,
    e[Ut] = a.current,
    _o(e.nodeType === 8 ? e.parentNode : e),
    Yn(function() {
        _s(t, a, n, r)
    }),
    a
}
function Ms(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var l = o;
            o = function() {
                var a = us(s);
                l.call(a)
            }
        }
        _s(t, s, e, o)
    } else
        s = Py(n, t, e, o, r);
    return us(s)
}
Bf = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = uo(t.pendingLanes);
            n !== 0 && (Ja(t, n | 1),
            $e(t, pe()),
            !(X & 6) && (Ur = pe() + 500,
            On()))
        }
        break;
    case 13:
        Yn(function() {
            var r = Bt(e, 1);
            if (r !== null) {
                var o = Me();
                mt(r, e, 1, o)
            }
        }),
        Au(e, 1)
    }
}
;
eu = function(e) {
    if (e.tag === 13) {
        var t = Bt(e, 134217728);
        if (t !== null) {
            var n = Me();
            mt(t, e, 134217728, n)
        }
        Au(e, 134217728)
    }
}
;
Vf = function(e) {
    if (e.tag === 13) {
        var t = Sn(e)
          , n = Bt(e, t);
        if (n !== null) {
            var r = Me();
            mt(n, e, t, r)
        }
        Au(e, t)
    }
}
;
Wf = function() {
    return J
}
;
Hf = function(e, t) {
    var n = J;
    try {
        return J = e,
        t()
    } finally {
        J = n
    }
}
;
Hl = function(e, t, n) {
    switch (t) {
    case "input":
        if (zl(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = Cs(r);
                    if (!o)
                        throw Error(R(90));
                    Ef(r),
                    zl(r, o)
                }
            }
        }
        break;
    case "textarea":
        kf(e, n);
        break;
    case "select":
        t = n.value,
        t != null && vr(e, !!n.multiple, t, !1)
    }
}
;
Of = bu;
Af = Yn;
var Ty = {
    usingClientEntryPoint: !1,
    Events: [Yo, cr, Cs, Rf, _f, bu]
}
  , oo = {
    findFiberByHostInstance: jn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , by = {
    bundleType: oo.bundleType,
    version: oo.version,
    rendererPackageName: oo.rendererPackageName,
    rendererConfig: oo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Qt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = jf(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: oo.findFiberByHostInstance || ky,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var wi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wi.isDisabled && wi.supportsFiber)
        try {
            ws = wi.inject(by),
            Nt = wi
        } catch {}
}
Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ty;
Ze.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Lu(t))
        throw Error(R(200));
    return Cy(e, t, null, n)
}
;
Ze.createRoot = function(e, t) {
    if (!Lu(e))
        throw Error(R(299));
    var n = !1
      , r = ""
      , o = ph;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Ou(e, 1, !1, null, null, n, !1, r, o),
    e[Ut] = t.current,
    _o(e.nodeType === 8 ? e.parentNode : e),
    new Mu(t)
}
;
Ze.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","),
        Error(R(268, e)));
    return e = jf(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Ze.flushSync = function(e) {
    return Yn(e)
}
;
Ze.hydrate = function(e, t, n) {
    if (!As(t))
        throw Error(R(200));
    return Ms(null, e, t, !0, n)
}
;
Ze.hydrateRoot = function(e, t, n) {
    if (!Lu(e))
        throw Error(R(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , i = ""
      , s = ph;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = fh(t, null, e, 1, n ?? null, o, !1, i, s),
    e[Ut] = t.current,
    _o(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Os(t)
}
;
Ze.render = function(e, t, n) {
    if (!As(t))
        throw Error(R(200));
    return Ms(null, e, t, !1, n)
}
;
Ze.unmountComponentAtNode = function(e) {
    if (!As(e))
        throw Error(R(40));
    return e._reactRootContainer ? (Yn(function() {
        Ms(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Ut] = null
        })
    }),
    !0) : !1
}
;
Ze.unstable_batchedUpdates = bu;
Ze.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!As(n))
        throw Error(R(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(R(38));
    return Ms(e, t, n, !1, r)
}
;
Ze.version = "18.3.1-next-f1338f8080-20240426";
function hh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hh)
        } catch (e) {
            console.error(e)
        }
}
hh(),
hf.exports = Ze;
var Xo = hf.exports;
const mh = tf(Xo);
var gh, fd = Xo;
gh = fd.createRoot,
fd.hydrateRoot;
const Ny = 1
  , Ry = 1e6;
let kl = 0;
function _y() {
    return kl = (kl + 1) % Number.MAX_SAFE_INTEGER,
    kl.toString()
}
const Pl = new Map
  , pd = e => {
    if (Pl.has(e))
        return;
    const t = setTimeout( () => {
        Pl.delete(e),
        So({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , Ry);
    Pl.set(e, t)
}
  , Oy = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, Ny)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? pd(n) : e.toasts.forEach(r => {
                pd(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , Ii = [];
let zi = {
    toasts: []
};
function So(e) {
    zi = Oy(zi, e),
    Ii.forEach(t => {
        t(zi)
    }
    )
}
function Ay({...e}) {
    const t = _y()
      , n = o => So({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => So({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return So({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function My() {
    const [e,t] = x.useState(zi);
    return x.useEffect( () => (Ii.push(t),
    () => {
        const n = Ii.indexOf(t);
        n > -1 && Ii.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: Ay,
        dismiss: n => So({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function ge(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function Ly(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}
function vh(...e) {
    return t => e.forEach(n => Ly(n, t))
}
function vt(...e) {
    return x.useCallback(vh(...e), e)
}
function jy(e, t=[]) {
    let n = [];
    function r(i, s) {
        const l = x.createContext(s)
          , a = n.length;
        n = [...n, s];
        function u(f) {
            const {scope: c, children: v, ...y} = f
              , g = (c == null ? void 0 : c[e][a]) || l
              , w = x.useMemo( () => y, Object.values(y));
            return E.jsx(g.Provider, {
                value: w,
                children: v
            })
        }
        function d(f, c) {
            const v = (c == null ? void 0 : c[e][a]) || l
              , y = x.useContext(v);
            if (y)
                return y;
            if (s !== void 0)
                return s;
            throw new Error(`\`${f}\` must be used within \`${i}\``)
        }
        return u.displayName = i + "Provider",
        [u, d]
    }
    const o = () => {
        const i = n.map(s => x.createContext(s));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return x.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: a
                }
            }), [l, a])
        }
    }
    ;
    return o.scopeName = e,
    [r, Dy(o, ...t)]
}
function Dy(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (l, {useScope: a, scopeName: u}) => {
                const f = a(i)[`__scope${u}`];
                return {
                    ...l,
                    ...f
                }
            }
            , {});
            return x.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var cs = x.forwardRef( (e, t) => {
    const {children: n, ...r} = e
      , o = x.Children.toArray(n)
      , i = o.find(Iy);
    if (i) {
        const s = i.props.children
          , l = o.map(a => a === i ? x.Children.count(s) > 1 ? x.Children.only(null) : x.isValidElement(s) ? s.props.children : null : a);
        return E.jsx(ka, {
            ...r,
            ref: t,
            children: x.isValidElement(s) ? x.cloneElement(s, void 0, l) : null
        })
    }
    return E.jsx(ka, {
        ...r,
        ref: t,
        children: n
    })
}
);
cs.displayName = "Slot";
var ka = x.forwardRef( (e, t) => {
    const {children: n, ...r} = e;
    if (x.isValidElement(n)) {
        const o = Fy(n);
        return x.cloneElement(n, {
            ...zy(r, n.props),
            ref: t ? vh(t, o) : o
        })
    }
    return x.Children.count(n) > 1 ? x.Children.only(null) : null
}
);
ka.displayName = "SlotClone";
var yh = ({children: e}) => E.jsx(E.Fragment, {
    children: e
});
function Iy(e) {
    return x.isValidElement(e) && e.type === yh
}
function zy(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
            i(...l),
            o(...l)
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function Fy(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function $y(e) {
    const t = e + "CollectionProvider"
      , [n,r] = jy(t)
      , [o,i] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , s = v => {
        const {scope: y, children: g} = v
          , w = O.useRef(null)
          , h = O.useRef(new Map).current;
        return E.jsx(o, {
            scope: y,
            itemMap: h,
            collectionRef: w,
            children: g
        })
    }
    ;
    s.displayName = t;
    const l = e + "CollectionSlot"
      , a = O.forwardRef( (v, y) => {
        const {scope: g, children: w} = v
          , h = i(l, g)
          , p = vt(y, h.collectionRef);
        return E.jsx(cs, {
            ref: p,
            children: w
        })
    }
    );
    a.displayName = l;
    const u = e + "CollectionItemSlot"
      , d = "data-radix-collection-item"
      , f = O.forwardRef( (v, y) => {
        const {scope: g, children: w, ...h} = v
          , p = O.useRef(null)
          , m = vt(y, p)
          , S = i(u, g);
        return O.useEffect( () => (S.itemMap.set(p, {
            ref: p,
            ...h
        }),
        () => void S.itemMap.delete(p))),
        E.jsx(cs, {
            [d]: "",
            ref: m,
            children: w
        })
    }
    );
    f.displayName = u;
    function c(v) {
        const y = i(e + "CollectionConsumer", v);
        return O.useCallback( () => {
            const w = y.collectionRef.current;
            if (!w)
                return [];
            const h = Array.from(w.querySelectorAll(`[${d}]`));
            return Array.from(y.itemMap.values()).sort( (S, C) => h.indexOf(S.ref.current) - h.indexOf(C.ref.current))
        }
        , [y.collectionRef, y.itemMap])
    }
    return [{
        Provider: s,
        Slot: a,
        ItemSlot: f
    }, c, r]
}
function wh(e, t=[]) {
    let n = [];
    function r(i, s) {
        const l = x.createContext(s)
          , a = n.length;
        n = [...n, s];
        const u = f => {
            var h;
            const {scope: c, children: v, ...y} = f
              , g = ((h = c == null ? void 0 : c[e]) == null ? void 0 : h[a]) || l
              , w = x.useMemo( () => y, Object.values(y));
            return E.jsx(g.Provider, {
                value: w,
                children: v
            })
        }
        ;
        u.displayName = i + "Provider";
        function d(f, c) {
            var g;
            const v = ((g = c == null ? void 0 : c[e]) == null ? void 0 : g[a]) || l
              , y = x.useContext(v);
            if (y)
                return y;
            if (s !== void 0)
                return s;
            throw new Error(`\`${f}\` must be used within \`${i}\``)
        }
        return [u, d]
    }
    const o = () => {
        const i = n.map(s => x.createContext(s));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return x.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: a
                }
            }), [l, a])
        }
    }
    ;
    return o.scopeName = e,
    [r, Uy(o, ...t)]
}
function Uy(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (l, {useScope: a, scopeName: u}) => {
                const f = a(i)[`__scope${u}`];
                return {
                    ...l,
                    ...f
                }
            }
            , {});
            return x.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var By = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
  , Be = By.reduce( (e, t) => {
    const n = x.forwardRef( (r, o) => {
        const {asChild: i, ...s} = r
          , l = i ? cs : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        E.jsx(l, {
            ...s,
            ref: o
        })
    }
    );
    return n.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: n
    }
}
, {});
function xh(e, t) {
    e && Xo.flushSync( () => e.dispatchEvent(t))
}
function _t(e) {
    const t = x.useRef(e);
    return x.useEffect( () => {
        t.current = e
    }
    ),
    x.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function Vy(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = _t(e);
    x.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var Wy = "DismissableLayer", Pa = "dismissableLayer.update", Hy = "dismissableLayer.pointerDownOutside", Qy = "dismissableLayer.focusOutside", hd, Sh = x.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), ju = x.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: s, onDismiss: l, ...a} = e
      , u = x.useContext(Sh)
      , [d,f] = x.useState(null)
      , c = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,v] = x.useState({})
      , y = vt(t, T => f(T))
      , g = Array.from(u.layers)
      , [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , h = g.indexOf(w)
      , p = d ? g.indexOf(d) : -1
      , m = u.layersWithOutsidePointerEventsDisabled.size > 0
      , S = p >= h
      , C = Yy(T => {
        const N = T.target
          , D = [...u.branches].some(A => A.contains(N));
        !S || D || (o == null || o(T),
        s == null || s(T),
        T.defaultPrevented || l == null || l())
    }
    , c)
      , P = Gy(T => {
        const N = T.target;
        [...u.branches].some(A => A.contains(N)) || (i == null || i(T),
        s == null || s(T),
        T.defaultPrevented || l == null || l())
    }
    , c);
    return Vy(T => {
        p === u.layers.size - 1 && (r == null || r(T),
        !T.defaultPrevented && l && (T.preventDefault(),
        l()))
    }
    , c),
    x.useEffect( () => {
        if (d)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (hd = c.body.style.pointerEvents,
            c.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            md(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (c.body.style.pointerEvents = hd)
            }
    }
    , [d, c, n, u]),
    x.useEffect( () => () => {
        d && (u.layers.delete(d),
        u.layersWithOutsidePointerEventsDisabled.delete(d),
        md())
    }
    , [d, u]),
    x.useEffect( () => {
        const T = () => v({});
        return document.addEventListener(Pa, T),
        () => document.removeEventListener(Pa, T)
    }
    , []),
    E.jsx(Be.div, {
        ...a,
        ref: y,
        style: {
            pointerEvents: m ? S ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: ge(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: ge(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: ge(e.onPointerDownCapture, C.onPointerDownCapture)
    })
}
);
ju.displayName = Wy;
var Ky = "DismissableLayerBranch"
  , Eh = x.forwardRef( (e, t) => {
    const n = x.useContext(Sh)
      , r = x.useRef(null)
      , o = vt(t, r);
    return x.useEffect( () => {
        const i = r.current;
        if (i)
            return n.branches.add(i),
            () => {
                n.branches.delete(i)
            }
    }
    , [n.branches]),
    E.jsx(Be.div, {
        ...e,
        ref: o
    })
}
);
Eh.displayName = Ky;
function Yy(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = _t(e)
      , r = x.useRef(!1)
      , o = x.useRef( () => {}
    );
    return x.useEffect( () => {
        const i = l => {
            if (l.target && !r.current) {
                let a = function() {
                    Ch(Hy, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: l
                };
                l.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = a,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : a()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , s = window.setTimeout( () => {
            t.addEventListener("pointerdown", i)
        }
        , 0);
        return () => {
            window.clearTimeout(s),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function Gy(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = _t(e)
      , r = x.useRef(!1);
    return x.useEffect( () => {
        const o = i => {
            i.target && !r.current && Ch(Qy, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function md() {
    const e = new CustomEvent(Pa);
    document.dispatchEvent(e)
}
function Ch(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , i = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? xh(o, i) : o.dispatchEvent(i)
}
var Xy = ju
  , qy = Eh
  , Gn = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {}
  , Zy = "Portal"
  , kh = x.forwardRef( (e, t) => {
    var l;
    const {container: n, ...r} = e
      , [o,i] = x.useState(!1);
    Gn( () => i(!0), []);
    const s = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
    return s ? mh.createPortal(E.jsx(Be.div, {
        ...r,
        ref: t
    }), s) : null
}
);
kh.displayName = Zy;
function Jy(e, t) {
    return x.useReducer( (n, r) => t[n][r] ?? n, e)
}
var Du = e => {
    const {present: t, children: n} = e
      , r = e0(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : x.Children.only(n)
      , i = vt(r.ref, t0(o));
    return typeof n == "function" || r.isPresent ? x.cloneElement(o, {
        ref: i
    }) : null
}
;
Du.displayName = "Presence";
function e0(e) {
    const [t,n] = x.useState()
      , r = x.useRef({})
      , o = x.useRef(e)
      , i = x.useRef("none")
      , s = e ? "mounted" : "unmounted"
      , [l,a] = Jy(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return x.useEffect( () => {
        const u = xi(r.current);
        i.current = l === "mounted" ? u : "none"
    }
    , [l]),
    Gn( () => {
        const u = r.current
          , d = o.current;
        if (d !== e) {
            const c = i.current
              , v = xi(u);
            e ? a("MOUNT") : v === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(d && c !== v ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, a]),
    Gn( () => {
        if (t) {
            let u;
            const d = t.ownerDocument.defaultView ?? window
              , f = v => {
                const g = xi(r.current).includes(v.animationName);
                if (v.target === t && g && (a("ANIMATION_END"),
                !o.current)) {
                    const w = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = d.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                    }
                    )
                }
            }
              , c = v => {
                v.target === t && (i.current = xi(r.current))
            }
            ;
            return t.addEventListener("animationstart", c),
            t.addEventListener("animationcancel", f),
            t.addEventListener("animationend", f),
            () => {
                d.clearTimeout(u),
                t.removeEventListener("animationstart", c),
                t.removeEventListener("animationcancel", f),
                t.removeEventListener("animationend", f)
            }
        } else
            a("ANIMATION_END")
    }
    , [t, a]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: x.useCallback(u => {
            u && (r.current = getComputedStyle(u)),
            n(u)
        }
        , [])
    }
}
function xi(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function t0(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function n0({prop: e, defaultProp: t, onChange: n= () => {}
}) {
    const [r,o] = r0({
        defaultProp: t,
        onChange: n
    })
      , i = e !== void 0
      , s = i ? e : r
      , l = _t(n)
      , a = x.useCallback(u => {
        if (i) {
            const f = typeof u == "function" ? u(e) : u;
            f !== e && l(f)
        } else
            o(u)
    }
    , [i, e, o, l]);
    return [s, a]
}
function r0({defaultProp: e, onChange: t}) {
    const n = x.useState(e)
      , [r] = n
      , o = x.useRef(r)
      , i = _t(t);
    return x.useEffect( () => {
        o.current !== r && (i(r),
        o.current = r)
    }
    , [r, o, i]),
    n
}
var o0 = "VisuallyHidden"
  , Ls = x.forwardRef( (e, t) => E.jsx(Be.span, {
    ...e,
    ref: t,
    style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
    }
}));
Ls.displayName = o0;
var i0 = Ls
  , Iu = "ToastProvider"
  , [zu,s0,l0] = $y("Toast")
  , [Ph,bS] = wh("Toast", [l0])
  , [a0,js] = Ph(Iu)
  , Th = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: i=50, children: s} = e
      , [l,a] = x.useState(null)
      , [u,d] = x.useState(0)
      , f = x.useRef(!1)
      , c = x.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Iu}\`. Expected non-empty \`string\`.`),
    E.jsx(zu.Provider, {
        scope: t,
        children: E.jsx(a0, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: i,
            toastCount: u,
            viewport: l,
            onViewportChange: a,
            onToastAdd: x.useCallback( () => d(v => v + 1), []),
            onToastRemove: x.useCallback( () => d(v => v - 1), []),
            isFocusedToastEscapeKeyDownRef: f,
            isClosePausedRef: c,
            children: s
        })
    })
}
;
Th.displayName = Iu;
var bh = "ToastViewport"
  , u0 = ["F8"]
  , Ta = "toast.viewportPause"
  , ba = "toast.viewportResume"
  , Nh = x.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=u0, label: o="Notifications ({hotkey})", ...i} = e
      , s = js(bh, n)
      , l = s0(n)
      , a = x.useRef(null)
      , u = x.useRef(null)
      , d = x.useRef(null)
      , f = x.useRef(null)
      , c = vt(t, f, s.onViewportChange)
      , v = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , y = s.toastCount > 0;
    x.useEffect( () => {
        const w = h => {
            var m;
            r.length !== 0 && r.every(S => h[S] || h.code === S) && ((m = f.current) == null || m.focus())
        }
        ;
        return document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
    }
    , [r]),
    x.useEffect( () => {
        const w = a.current
          , h = f.current;
        if (y && w && h) {
            const p = () => {
                if (!s.isClosePausedRef.current) {
                    const P = new CustomEvent(Ta);
                    h.dispatchEvent(P),
                    s.isClosePausedRef.current = !0
                }
            }
              , m = () => {
                if (s.isClosePausedRef.current) {
                    const P = new CustomEvent(ba);
                    h.dispatchEvent(P),
                    s.isClosePausedRef.current = !1
                }
            }
              , S = P => {
                !w.contains(P.relatedTarget) && m()
            }
              , C = () => {
                w.contains(document.activeElement) || m()
            }
            ;
            return w.addEventListener("focusin", p),
            w.addEventListener("focusout", S),
            w.addEventListener("pointermove", p),
            w.addEventListener("pointerleave", C),
            window.addEventListener("blur", p),
            window.addEventListener("focus", m),
            () => {
                w.removeEventListener("focusin", p),
                w.removeEventListener("focusout", S),
                w.removeEventListener("pointermove", p),
                w.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", p),
                window.removeEventListener("focus", m)
            }
        }
    }
    , [y, s.isClosePausedRef]);
    const g = x.useCallback( ({tabbingDirection: w}) => {
        const p = l().map(m => {
            const S = m.ref.current
              , C = [S, ...E0(S)];
            return w === "forwards" ? C : C.reverse()
        }
        );
        return (w === "forwards" ? p.reverse() : p).flat()
    }
    , [l]);
    return x.useEffect( () => {
        const w = f.current;
        if (w) {
            const h = p => {
                var C, P, T;
                const m = p.altKey || p.ctrlKey || p.metaKey;
                if (p.key === "Tab" && !m) {
                    const N = document.activeElement
                      , D = p.shiftKey;
                    if (p.target === w && D) {
                        (C = u.current) == null || C.focus();
                        return
                    }
                    const I = g({
                        tabbingDirection: D ? "backwards" : "forwards"
                    })
                      , H = I.findIndex(M => M === N);
                    Tl(I.slice(H + 1)) ? p.preventDefault() : D ? (P = u.current) == null || P.focus() : (T = d.current) == null || T.focus()
                }
            }
            ;
            return w.addEventListener("keydown", h),
            () => w.removeEventListener("keydown", h)
        }
    }
    , [l, g]),
    E.jsxs(qy, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", v),
        tabIndex: -1,
        style: {
            pointerEvents: y ? void 0 : "none"
        },
        children: [y && E.jsx(Na, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const w = g({
                    tabbingDirection: "forwards"
                });
                Tl(w)
            }
        }), E.jsx(zu.Slot, {
            scope: n,
            children: E.jsx(Be.ol, {
                tabIndex: -1,
                ...i,
                ref: c
            })
        }), y && E.jsx(Na, {
            ref: d,
            onFocusFromOutsideViewport: () => {
                const w = g({
                    tabbingDirection: "backwards"
                });
                Tl(w)
            }
        })]
    })
}
);
Nh.displayName = bh;
var Rh = "ToastFocusProxy"
  , Na = x.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , i = js(Rh, n);
    return E.jsx(Ls, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: s => {
            var u;
            const l = s.relatedTarget;
            !((u = i.viewport) != null && u.contains(l)) && r()
        }
    })
}
);
Na.displayName = Rh;
var Ds = "Toast"
  , c0 = "toast.swipeStart"
  , d0 = "toast.swipeMove"
  , f0 = "toast.swipeCancel"
  , p0 = "toast.swipeEnd"
  , _h = x.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s} = e
      , [l=!0,a] = n0({
        prop: r,
        defaultProp: o,
        onChange: i
    });
    return E.jsx(Du, {
        present: n || l,
        children: E.jsx(g0, {
            open: l,
            ...s,
            ref: t,
            onClose: () => a(!1),
            onPause: _t(e.onPause),
            onResume: _t(e.onResume),
            onSwipeStart: ge(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: ge(e.onSwipeMove, u => {
                const {x: d, y: f} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`)
            }
            ),
            onSwipeCancel: ge(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: ge(e.onSwipeEnd, u => {
                const {x: d, y: f} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`),
                a(!1)
            }
            )
        })
    })
}
);
_h.displayName = Ds;
var [h0,m0] = Ph(Ds, {
    onClose() {}
})
  , g0 = x.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: i, onClose: s, onEscapeKeyDown: l, onPause: a, onResume: u, onSwipeStart: d, onSwipeMove: f, onSwipeCancel: c, onSwipeEnd: v, ...y} = e
      , g = js(Ds, n)
      , [w,h] = x.useState(null)
      , p = vt(t, M => h(M))
      , m = x.useRef(null)
      , S = x.useRef(null)
      , C = o || g.duration
      , P = x.useRef(0)
      , T = x.useRef(C)
      , N = x.useRef(0)
      , {onToastAdd: D, onToastRemove: A} = g
      , $ = _t( () => {
        var Q;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((Q = g.viewport) == null || Q.focus()),
        s()
    }
    )
      , I = x.useCallback(M => {
        !M || M === 1 / 0 || (window.clearTimeout(N.current),
        P.current = new Date().getTime(),
        N.current = window.setTimeout($, M))
    }
    , [$]);
    x.useEffect( () => {
        const M = g.viewport;
        if (M) {
            const Q = () => {
                I(T.current),
                u == null || u()
            }
              , U = () => {
                const K = new Date().getTime() - P.current;
                T.current = T.current - K,
                window.clearTimeout(N.current),
                a == null || a()
            }
            ;
            return M.addEventListener(Ta, U),
            M.addEventListener(ba, Q),
            () => {
                M.removeEventListener(Ta, U),
                M.removeEventListener(ba, Q)
            }
        }
    }
    , [g.viewport, C, a, u, I]),
    x.useEffect( () => {
        i && !g.isClosePausedRef.current && I(C)
    }
    , [i, C, g.isClosePausedRef, I]),
    x.useEffect( () => (D(),
    () => A()), [D, A]);
    const H = x.useMemo( () => w ? Ih(w) : null, [w]);
    return g.viewport ? E.jsxs(E.Fragment, {
        children: [H && E.jsx(v0, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: H
        }), E.jsx(h0, {
            scope: n,
            onClose: $,
            children: Xo.createPortal(E.jsx(zu.ItemSlot, {
                scope: n,
                children: E.jsx(Xy, {
                    asChild: !0,
                    onEscapeKeyDown: ge(l, () => {
                        g.isFocusedToastEscapeKeyDownRef.current || $(),
                        g.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: E.jsx(Be.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": g.swipeDirection,
                        ...y,
                        ref: p,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: ge(e.onKeyDown, M => {
                            M.key === "Escape" && (l == null || l(M.nativeEvent),
                            M.nativeEvent.defaultPrevented || (g.isFocusedToastEscapeKeyDownRef.current = !0,
                            $()))
                        }
                        ),
                        onPointerDown: ge(e.onPointerDown, M => {
                            M.button === 0 && (m.current = {
                                x: M.clientX,
                                y: M.clientY
                            })
                        }
                        ),
                        onPointerMove: ge(e.onPointerMove, M => {
                            if (!m.current)
                                return;
                            const Q = M.clientX - m.current.x
                              , U = M.clientY - m.current.y
                              , K = !!S.current
                              , k = ["left", "right"].includes(g.swipeDirection)
                              , _ = ["left", "up"].includes(g.swipeDirection) ? Math.min : Math.max
                              , z = k ? _(0, Q) : 0
                              , j = k ? 0 : _(0, U)
                              , F = M.pointerType === "touch" ? 10 : 2
                              , G = {
                                x: z,
                                y: j
                            }
                              , le = {
                                originalEvent: M,
                                delta: G
                            };
                            K ? (S.current = G,
                            Si(d0, f, le, {
                                discrete: !1
                            })) : gd(G, g.swipeDirection, F) ? (S.current = G,
                            Si(c0, d, le, {
                                discrete: !1
                            }),
                            M.target.setPointerCapture(M.pointerId)) : (Math.abs(Q) > F || Math.abs(U) > F) && (m.current = null)
                        }
                        ),
                        onPointerUp: ge(e.onPointerUp, M => {
                            const Q = S.current
                              , U = M.target;
                            if (U.hasPointerCapture(M.pointerId) && U.releasePointerCapture(M.pointerId),
                            S.current = null,
                            m.current = null,
                            Q) {
                                const K = M.currentTarget
                                  , k = {
                                    originalEvent: M,
                                    delta: Q
                                };
                                gd(Q, g.swipeDirection, g.swipeThreshold) ? Si(p0, v, k, {
                                    discrete: !0
                                }) : Si(f0, c, k, {
                                    discrete: !0
                                }),
                                K.addEventListener("click", _ => _.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), g.viewport)
        })]
    }) : null
}
)
  , v0 = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = js(Ds, t)
      , [i,s] = x.useState(!1)
      , [l,a] = x.useState(!1);
    return x0( () => s(!0)),
    x.useEffect( () => {
        const u = window.setTimeout( () => a(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    l ? null : E.jsx(kh, {
        asChild: !0,
        children: E.jsx(Ls, {
            ...r,
            children: i && E.jsxs(E.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , y0 = "ToastTitle"
  , Oh = x.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return E.jsx(Be.div, {
        ...r,
        ref: t
    })
}
);
Oh.displayName = y0;
var w0 = "ToastDescription"
  , Ah = x.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return E.jsx(Be.div, {
        ...r,
        ref: t
    })
}
);
Ah.displayName = w0;
var Mh = "ToastAction"
  , Lh = x.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? E.jsx(Dh, {
        altText: n,
        asChild: !0,
        children: E.jsx(Fu, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Mh}\`. Expected non-empty \`string\`.`),
    null)
}
);
Lh.displayName = Mh;
var jh = "ToastClose"
  , Fu = x.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = m0(jh, n);
    return E.jsx(Dh, {
        asChild: !0,
        children: E.jsx(Be.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: ge(e.onClick, o.onClose)
        })
    })
}
);
Fu.displayName = jh;
var Dh = x.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return E.jsx(Be.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function Ih(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        S0(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else
                    t.push(...Ih(r))
        }
    }
    ),
    t
}
function Si(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , i = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? xh(o, i) : o.dispatchEvent(i)
}
var gd = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
}
;
function x0(e= () => {}
) {
    const t = _t(e);
    Gn( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function S0(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function E0(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Tl(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var C0 = Th
  , zh = Nh
  , Fh = _h
  , $h = Oh
  , Uh = Ah
  , Bh = Lh
  , Vh = Fu;
function Wh(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = Wh(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function Hh() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = Wh(e)) && (r && (r += " "),
        r += t);
    return r
}
const vd = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , yd = Hh
  , k0 = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return yd(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: i} = t
      , s = Object.keys(o).map(u => {
        const d = n == null ? void 0 : n[u]
          , f = i == null ? void 0 : i[u];
        if (d === null)
            return null;
        const c = vd(d) || vd(f);
        return o[u][c]
    }
    )
      , l = n && Object.entries(n).reduce( (u, d) => {
        let[f,c] = d;
        return c === void 0 || (u[f] = c),
        u
    }
    , {})
      , a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, d) => {
        let {class: f, className: c, ...v} = d;
        return Object.entries(v).every(y => {
            let[g,w] = y;
            return Array.isArray(w) ? w.includes({
                ...i,
                ...l
            }[g]) : {
                ...i,
                ...l
            }[g] === w
        }
        ) ? [...u, f, c] : u
    }
    , []);
    return yd(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P0 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Qh = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var T0 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b0 = x.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: i, iconNode: s, ...l}, a) => x.createElement("svg", {
    ref: a,
    ...T0,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Qh("lucide", o),
    ...l
}, [...s.map( ([u,d]) => x.createElement(u, d)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kh = (e, t) => {
    const n = x.forwardRef( ({className: r, ...o}, i) => x.createElement(b0, {
        ref: i,
        iconNode: t,
        className: Qh(`lucide-${P0(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N0 = Kh("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yh = Kh("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , $u = "-"
  , R0 = e => {
    const t = O0(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: s => {
            const l = s.split($u);
            return l[0] === "" && l.length !== 1 && l.shift(),
            Gh(l, t) || _0(s)
        }
        ,
        getConflictingClassGroupIds: (s, l) => {
            const a = n[s] || [];
            return l && r[s] ? [...a, ...r[s]] : a
        }
    }
}
  , Gh = (e, t) => {
    var s;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? Gh(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const i = e.join($u);
    return (s = t.validators.find( ({validator: l}) => l(i))) == null ? void 0 : s.classGroupId
}
  , wd = /^\[(.+)\]$/
  , _0 = e => {
    if (wd.test(e)) {
        const t = wd.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , O0 = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return M0(Object.entries(e.classGroups), n).forEach( ([i,s]) => {
        Ra(s, r, i, t)
    }
    ),
    r
}
  , Ra = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const i = o === "" ? t : xd(t, o);
            i.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (A0(o)) {
                Ra(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([i,s]) => {
            Ra(s, xd(t, i), n, r)
        }
        )
    }
    )
}
  , xd = (e, t) => {
    let n = e;
    return t.split($u).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , A0 = e => e.isThemeGetter
  , M0 = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map( ([s,l]) => [t + s, l])) : i);
    return [n, o]
}
) : e
  , L0 = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (i, s) => {
        n.set(i, s),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(i) {
            let s = n.get(i);
            if (s !== void 0)
                return s;
            if ((s = r.get(i)) !== void 0)
                return o(i, s),
                s
        },
        set(i, s) {
            n.has(i) ? n.set(i, s) : o(i, s)
        }
    }
}
  , Xh = "!"
  , j0 = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , i = t.length
      , s = l => {
        const a = [];
        let u = 0, d = 0, f;
        for (let w = 0; w < l.length; w++) {
            let h = l[w];
            if (u === 0) {
                if (h === o && (r || l.slice(w, w + i) === t)) {
                    a.push(l.slice(d, w)),
                    d = w + i;
                    continue
                }
                if (h === "/") {
                    f = w;
                    continue
                }
            }
            h === "[" ? u++ : h === "]" && u--
        }
        const c = a.length === 0 ? l : l.substring(d)
          , v = c.startsWith(Xh)
          , y = v ? c.substring(1) : c
          , g = f && f > d ? f - d : void 0;
        return {
            modifiers: a,
            hasImportantModifier: v,
            baseClassName: y,
            maybePostfixModifierPosition: g
        }
    }
    ;
    return n ? l => n({
        className: l,
        parseClassName: s
    }) : s
}
  , D0 = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , I0 = e => ({
    cache: L0(e.cacheSize),
    parseClassName: j0(e),
    ...R0(e)
})
  , z0 = /\s+/
  , F0 = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , i = []
      , s = e.trim().split(z0);
    let l = "";
    for (let a = s.length - 1; a >= 0; a -= 1) {
        const u = s[a]
          , {modifiers: d, hasImportantModifier: f, baseClassName: c, maybePostfixModifierPosition: v} = n(u);
        let y = !!v
          , g = r(y ? c.substring(0, v) : c);
        if (!g) {
            if (!y) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            if (g = r(c),
            !g) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            y = !1
        }
        const w = D0(d).join(":")
          , h = f ? w + Xh : w
          , p = h + g;
        if (i.includes(p))
            continue;
        i.push(p);
        const m = o(g, y);
        for (let S = 0; S < m.length; ++S) {
            const C = m[S];
            i.push(h + C)
        }
        l = u + (l.length > 0 ? " " + l : l)
    }
    return l
}
;
function $0() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = qh(t)) && (r && (r += " "),
        r += n);
    return r
}
const qh = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = qh(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function U0(e, ...t) {
    let n, r, o, i = s;
    function s(a) {
        const u = t.reduce( (d, f) => f(d), e());
        return n = I0(u),
        r = n.cache.get,
        o = n.cache.set,
        i = l,
        l(a)
    }
    function l(a) {
        const u = r(a);
        if (u)
            return u;
        const d = F0(a, n);
        return o(a, d),
        d
    }
    return function() {
        return i($0.apply(null, arguments))
    }
}
const re = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , Zh = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , B0 = /^\d+\/\d+$/
  , V0 = new Set(["px", "full", "screen"])
  , W0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , H0 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , Q0 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , K0 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , Y0 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Mt = e => Cr(e) || V0.has(e) || B0.test(e)
  , Jt = e => Kr(e, "length", nw)
  , Cr = e => !!e && !Number.isNaN(Number(e))
  , bl = e => Kr(e, "number", Cr)
  , io = e => !!e && Number.isInteger(Number(e))
  , G0 = e => e.endsWith("%") && Cr(e.slice(0, -1))
  , V = e => Zh.test(e)
  , en = e => W0.test(e)
  , X0 = new Set(["length", "size", "percentage"])
  , q0 = e => Kr(e, X0, Jh)
  , Z0 = e => Kr(e, "position", Jh)
  , J0 = new Set(["image", "url"])
  , ew = e => Kr(e, J0, ow)
  , tw = e => Kr(e, "", rw)
  , so = () => !0
  , Kr = (e, t, n) => {
    const r = Zh.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , nw = e => H0.test(e) && !Q0.test(e)
  , Jh = () => !1
  , rw = e => K0.test(e)
  , ow = e => Y0.test(e)
  , iw = () => {
    const e = re("colors")
      , t = re("spacing")
      , n = re("blur")
      , r = re("brightness")
      , o = re("borderColor")
      , i = re("borderRadius")
      , s = re("borderSpacing")
      , l = re("borderWidth")
      , a = re("contrast")
      , u = re("grayscale")
      , d = re("hueRotate")
      , f = re("invert")
      , c = re("gap")
      , v = re("gradientColorStops")
      , y = re("gradientColorStopPositions")
      , g = re("inset")
      , w = re("margin")
      , h = re("opacity")
      , p = re("padding")
      , m = re("saturate")
      , S = re("scale")
      , C = re("sepia")
      , P = re("skew")
      , T = re("space")
      , N = re("translate")
      , D = () => ["auto", "contain", "none"]
      , A = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , $ = () => ["auto", V, t]
      , I = () => [V, t]
      , H = () => ["", Mt, Jt]
      , M = () => ["auto", Cr, V]
      , Q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , U = () => ["solid", "dashed", "dotted", "double", "none"]
      , K = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , k = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , _ = () => ["", "0", V]
      , z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , j = () => [Cr, V];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [so],
            spacing: [Mt, Jt],
            blur: ["none", "", en, V],
            brightness: j(),
            borderColor: [e],
            borderRadius: ["none", "", "full", en, V],
            borderSpacing: I(),
            borderWidth: H(),
            contrast: j(),
            grayscale: _(),
            hueRotate: j(),
            invert: _(),
            gap: I(),
            gradientColorStops: [e],
            gradientColorStopPositions: [G0, Jt],
            inset: $(),
            margin: $(),
            opacity: j(),
            padding: I(),
            saturate: j(),
            scale: j(),
            sepia: _(),
            skew: j(),
            space: I(),
            translate: I()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", V]
            }],
            container: ["container"],
            columns: [{
                columns: [en]
            }],
            "break-after": [{
                "break-after": z()
            }],
            "break-before": [{
                "break-before": z()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...Q(), V]
            }],
            overflow: [{
                overflow: A()
            }],
            "overflow-x": [{
                "overflow-x": A()
            }],
            "overflow-y": [{
                "overflow-y": A()
            }],
            overscroll: [{
                overscroll: D()
            }],
            "overscroll-x": [{
                "overscroll-x": D()
            }],
            "overscroll-y": [{
                "overscroll-y": D()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [g]
            }],
            "inset-x": [{
                "inset-x": [g]
            }],
            "inset-y": [{
                "inset-y": [g]
            }],
            start: [{
                start: [g]
            }],
            end: [{
                end: [g]
            }],
            top: [{
                top: [g]
            }],
            right: [{
                right: [g]
            }],
            bottom: [{
                bottom: [g]
            }],
            left: [{
                left: [g]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", io, V]
            }],
            basis: [{
                basis: $()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", V]
            }],
            grow: [{
                grow: _()
            }],
            shrink: [{
                shrink: _()
            }],
            order: [{
                order: ["first", "last", "none", io, V]
            }],
            "grid-cols": [{
                "grid-cols": [so]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", io, V]
                }, V]
            }],
            "col-start": [{
                "col-start": M()
            }],
            "col-end": [{
                "col-end": M()
            }],
            "grid-rows": [{
                "grid-rows": [so]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [io, V]
                }, V]
            }],
            "row-start": [{
                "row-start": M()
            }],
            "row-end": [{
                "row-end": M()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", V]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", V]
            }],
            gap: [{
                gap: [c]
            }],
            "gap-x": [{
                "gap-x": [c]
            }],
            "gap-y": [{
                "gap-y": [c]
            }],
            "justify-content": [{
                justify: ["normal", ...k()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...k(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...k(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [p]
            }],
            px: [{
                px: [p]
            }],
            py: [{
                py: [p]
            }],
            ps: [{
                ps: [p]
            }],
            pe: [{
                pe: [p]
            }],
            pt: [{
                pt: [p]
            }],
            pr: [{
                pr: [p]
            }],
            pb: [{
                pb: [p]
            }],
            pl: [{
                pl: [p]
            }],
            m: [{
                m: [w]
            }],
            mx: [{
                mx: [w]
            }],
            my: [{
                my: [w]
            }],
            ms: [{
                ms: [w]
            }],
            me: [{
                me: [w]
            }],
            mt: [{
                mt: [w]
            }],
            mr: [{
                mr: [w]
            }],
            mb: [{
                mb: [w]
            }],
            ml: [{
                ml: [w]
            }],
            "space-x": [{
                "space-x": [T]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [T]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", V, t]
            }],
            "min-w": [{
                "min-w": [V, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [V, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [en]
                }, en]
            }],
            h: [{
                h: [V, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [V, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [V, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [V, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", en, Jt]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", bl]
            }],
            "font-family": [{
                font: [so]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", V]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Cr, bl]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Mt, V]
            }],
            "list-image": [{
                "list-image": ["none", V]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", V]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [h]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [h]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...U(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Mt, Jt]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Mt, V]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: I()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", V]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", V]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [h]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...Q(), Z0]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", q0]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, ew]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [y]
            }],
            "gradient-via-pos": [{
                via: [y]
            }],
            "gradient-to-pos": [{
                to: [y]
            }],
            "gradient-from": [{
                from: [v]
            }],
            "gradient-via": [{
                via: [v]
            }],
            "gradient-to": [{
                to: [v]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [l]
            }],
            "border-w-x": [{
                "border-x": [l]
            }],
            "border-w-y": [{
                "border-y": [l]
            }],
            "border-w-s": [{
                "border-s": [l]
            }],
            "border-w-e": [{
                "border-e": [l]
            }],
            "border-w-t": [{
                "border-t": [l]
            }],
            "border-w-r": [{
                "border-r": [l]
            }],
            "border-w-b": [{
                "border-b": [l]
            }],
            "border-w-l": [{
                "border-l": [l]
            }],
            "border-opacity": [{
                "border-opacity": [h]
            }],
            "border-style": [{
                border: [...U(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [l]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [l]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [h]
            }],
            "divide-style": [{
                divide: U()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...U()]
            }],
            "outline-offset": [{
                "outline-offset": [Mt, V]
            }],
            "outline-w": [{
                outline: [Mt, Jt]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: H()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [h]
            }],
            "ring-offset-w": [{
                "ring-offset": [Mt, Jt]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", en, tw]
            }],
            "shadow-color": [{
                shadow: [so]
            }],
            opacity: [{
                opacity: [h]
            }],
            "mix-blend": [{
                "mix-blend": [...K(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": K()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [a]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", en, V]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [d]
            }],
            invert: [{
                invert: [f]
            }],
            saturate: [{
                saturate: [m]
            }],
            sepia: [{
                sepia: [C]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [a]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [d]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [f]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [h]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [m]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [C]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [s]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [s]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [s]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", V]
            }],
            duration: [{
                duration: j()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", V]
            }],
            delay: [{
                delay: j()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", V]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [S]
            }],
            "scale-x": [{
                "scale-x": [S]
            }],
            "scale-y": [{
                "scale-y": [S]
            }],
            rotate: [{
                rotate: [io, V]
            }],
            "translate-x": [{
                "translate-x": [N]
            }],
            "translate-y": [{
                "translate-y": [N]
            }],
            "skew-x": [{
                "skew-x": [P]
            }],
            "skew-y": [{
                "skew-y": [P]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", V]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", V]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": I()
            }],
            "scroll-mx": [{
                "scroll-mx": I()
            }],
            "scroll-my": [{
                "scroll-my": I()
            }],
            "scroll-ms": [{
                "scroll-ms": I()
            }],
            "scroll-me": [{
                "scroll-me": I()
            }],
            "scroll-mt": [{
                "scroll-mt": I()
            }],
            "scroll-mr": [{
                "scroll-mr": I()
            }],
            "scroll-mb": [{
                "scroll-mb": I()
            }],
            "scroll-ml": [{
                "scroll-ml": I()
            }],
            "scroll-p": [{
                "scroll-p": I()
            }],
            "scroll-px": [{
                "scroll-px": I()
            }],
            "scroll-py": [{
                "scroll-py": I()
            }],
            "scroll-ps": [{
                "scroll-ps": I()
            }],
            "scroll-pe": [{
                "scroll-pe": I()
            }],
            "scroll-pt": [{
                "scroll-pt": I()
            }],
            "scroll-pr": [{
                "scroll-pr": I()
            }],
            "scroll-pb": [{
                "scroll-pb": I()
            }],
            "scroll-pl": [{
                "scroll-pl": I()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", V]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [Mt, Jt, bl]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , sw = U0(iw);
function Jn(...e) {
    return sw(Hh(e))
}
const lw = C0
  , em = x.forwardRef( ({className: e, ...t}, n) => E.jsx(zh, {
    ref: n,
    className: Jn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
em.displayName = zh.displayName;
const aw = k0("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , tm = x.forwardRef( ({className: e, variant: t, ...n}, r) => E.jsx(Fh, {
    ref: r,
    className: Jn(aw({
        variant: t
    }), e),
    ...n
}));
tm.displayName = Fh.displayName;
const uw = x.forwardRef( ({className: e, ...t}, n) => E.jsx(Bh, {
    ref: n,
    className: Jn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
uw.displayName = Bh.displayName;
const nm = x.forwardRef( ({className: e, ...t}, n) => E.jsx(Vh, {
    ref: n,
    className: Jn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: E.jsx(Yh, {
        className: "h-4 w-4"
    })
}));
nm.displayName = Vh.displayName;
const rm = x.forwardRef( ({className: e, ...t}, n) => E.jsx($h, {
    ref: n,
    className: Jn("text-sm font-semibold", e),
    ...t
}));
rm.displayName = $h.displayName;
const om = x.forwardRef( ({className: e, ...t}, n) => E.jsx(Uh, {
    ref: n,
    className: Jn("text-sm opacity-90", e),
    ...t
}));
om.displayName = Uh.displayName;
function cw() {
    const {toasts: e} = My();
    return E.jsxs(lw, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...i}) {
            return E.jsxs(tm, {
                ...i,
                children: [E.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && E.jsx(rm, {
                        children: n
                    }), r && E.jsx(om, {
                        children: r
                    })]
                }), o, E.jsx(nm, {})]
            }, t)
        }), E.jsx(em, {})]
    })
}
var Sd = ["light", "dark"]
  , dw = "(prefers-color-scheme: dark)"
  , fw = x.createContext(void 0)
  , pw = {
    setTheme: e => {}
    ,
    themes: []
}
  , hw = () => {
    var e;
    return (e = x.useContext(fw)) != null ? e : pw
}
;
x.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: i, value: s, attrs: l, nonce: a}) => {
    let u = i === "system"
      , d = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map(y => `'${y}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , f = o ? Sd.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , c = (y, g=!1, w=!0) => {
        let h = s ? s[y] : y
          , p = g ? y + "|| ''" : `'${h}'`
          , m = "";
        return o && w && !g && Sd.includes(y) && (m += `d.style.colorScheme = '${y}';`),
        n === "class" ? g || h ? m += `c.add(${p})` : m += "null" : h && (m += `d[s](n,${p})`),
        m
    }
      , v = e ? `!function(){${d}${c(e)}}()` : r ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${dw}',m=window.matchMedia(t);if(m.media!==t||m.matches){${c("dark")}}else{${c("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${c(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + c(i, !1, !1) + "}"}${f}}catch(e){}}()` : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${c(s ? "x[e]" : "e", !0)}}else{${c(i, !1, !1)};}${f}}catch(t){}}();`;
    return x.createElement("script", {
        nonce: a,
        dangerouslySetInnerHTML: {
            __html: v
        }
    })
}
);
var mw = e => {
    switch (e) {
    case "success":
        return yw;
    case "info":
        return xw;
    case "warning":
        return ww;
    case "error":
        return Sw;
    default:
        return null
    }
}
  , gw = Array(12).fill(0)
  , vw = ({visible: e}) => O.createElement("div", {
    className: "sonner-loading-wrapper",
    "data-visible": e
}, O.createElement("div", {
    className: "sonner-spinner"
}, gw.map( (t, n) => O.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${n}`
}))))
  , yw = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , ww = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , xw = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , Sw = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , Ew = () => {
    let[e,t] = O.useState(document.hidden);
    return O.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , _a = 1
  , Cw = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : _a++
              , i = this.toasts.find(l => l.id === o)
              , s = e.dismissible === void 0 ? !0 : e.dismissible;
            return i ? this.toasts = this.toasts.map(l => l.id === o ? (this.publish({
                ...l,
                ...e,
                id: o,
                title: n
            }),
            {
                ...l,
                ...e,
                id: o,
                dismissible: s,
                title: n
            }) : l) : this.addToast({
                title: n,
                ...r,
                dismissible: s,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e()
              , o = n !== void 0;
            return r.then(async i => {
                if (Pw(i) && !i.ok) {
                    o = !1;
                    let s = typeof t.error == "function" ? await t.error(`HTTP error! status: ${i.status}`) : t.error
                      , l = typeof t.description == "function" ? await t.description(`HTTP error! status: ${i.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: s,
                        description: l
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let s = typeof t.success == "function" ? await t.success(i) : t.success
                      , l = typeof t.description == "function" ? await t.description(i) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: s,
                        description: l
                    })
                }
            }
            ).catch(async i => {
                if (t.error !== void 0) {
                    o = !1;
                    let s = typeof t.error == "function" ? await t.error(i) : t.error
                      , l = typeof t.description == "function" ? await t.description(i) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: s,
                        description: l
                    })
                }
            }
            ).finally( () => {
                var i;
                o && (this.dismiss(n),
                n = void 0),
                (i = t.finally) == null || i.call(t)
            }
            ),
            n
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || _a++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.subscribers = [],
        this.toasts = []
    }
}
  , He = new Cw
  , kw = (e, t) => {
    let n = (t == null ? void 0 : t.id) || _a++;
    return He.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , Pw = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , Tw = kw
  , bw = () => He.toasts
  , Nl = Object.assign(Tw, {
    success: He.success,
    info: He.info,
    warning: He.warning,
    error: He.error,
    custom: He.custom,
    message: He.message,
    promise: He.promise,
    dismiss: He.dismiss,
    loading: He.loading
}, {
    getHistory: bw
});
function Nw(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
Nw(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Ei(e) {
    return e.label !== void 0
}
var Rw = 3
  , _w = "32px"
  , Ow = 4e3
  , Aw = 356
  , Mw = 14
  , Lw = 20
  , jw = 200;
function Dw(...e) {
    return e.filter(Boolean).join(" ")
}
var Iw = e => {
    var t, n, r, o, i, s, l, a, u, d;
    let {invert: f, toast: c, unstyled: v, interacting: y, setHeights: g, visibleToasts: w, heights: h, index: p, toasts: m, expanded: S, removeToast: C, defaultRichColors: P, closeButton: T, style: N, cancelButtonStyle: D, actionButtonStyle: A, className: $="", descriptionClassName: I="", duration: H, position: M, gap: Q, loadingIcon: U, expandByDefault: K, classNames: k, icons: _, closeButtonAriaLabel: z="Close toast", pauseWhenPageIsHidden: j, cn: F} = e
      , [G,le] = O.useState(!1)
      , [Ve,Z] = O.useState(!1)
      , [lt,Kt] = O.useState(!1)
      , [Yt,Gt] = O.useState(!1)
      , [Zo,er] = O.useState(0)
      , [An,Xr] = O.useState(0)
      , Jo = O.useRef(null)
      , Xt = O.useRef(null)
      , Ks = p === 0
      , Ys = p + 1 <= w
      , xe = c.type
      , tr = c.dismissible !== !1
      , Ym = c.className || ""
      , Gm = c.descriptionClassName || ""
      , ei = O.useMemo( () => h.findIndex(B => B.toastId === c.id) || 0, [h, c.id])
      , Xm = O.useMemo( () => {
        var B;
        return (B = c.closeButton) != null ? B : T
    }
    , [c.closeButton, T])
      , Zu = O.useMemo( () => c.duration || H || Ow, [c.duration, H])
      , Gs = O.useRef(0)
      , nr = O.useRef(0)
      , Ju = O.useRef(0)
      , rr = O.useRef(null)
      , [ec,qm] = M.split("-")
      , tc = O.useMemo( () => h.reduce( (B, ne, ee) => ee >= ei ? B : B + ne.height, 0), [h, ei])
      , nc = Ew()
      , Zm = c.invert || f
      , Xs = xe === "loading";
    nr.current = O.useMemo( () => ei * Q + tc, [ei, tc]),
    O.useEffect( () => {
        le(!0)
    }
    , []),
    O.useLayoutEffect( () => {
        if (!G)
            return;
        let B = Xt.current
          , ne = B.style.height;
        B.style.height = "auto";
        let ee = B.getBoundingClientRect().height;
        B.style.height = ne,
        Xr(ee),
        g(xt => xt.find(St => St.toastId === c.id) ? xt.map(St => St.toastId === c.id ? {
            ...St,
            height: ee
        } : St) : [{
            toastId: c.id,
            height: ee,
            position: c.position
        }, ...xt])
    }
    , [G, c.title, c.description, g, c.id]);
    let qt = O.useCallback( () => {
        Z(!0),
        er(nr.current),
        g(B => B.filter(ne => ne.toastId !== c.id)),
        setTimeout( () => {
            C(c)
        }
        , jw)
    }
    , [c, C, g, nr]);
    O.useEffect( () => {
        if (c.promise && xe === "loading" || c.duration === 1 / 0 || c.type === "loading")
            return;
        let B, ne = Zu;
        return S || y || j && nc ? ( () => {
            if (Ju.current < Gs.current) {
                let ee = new Date().getTime() - Gs.current;
                ne = ne - ee
            }
            Ju.current = new Date().getTime()
        }
        )() : ne !== 1 / 0 && (Gs.current = new Date().getTime(),
        B = setTimeout( () => {
            var ee;
            (ee = c.onAutoClose) == null || ee.call(c, c),
            qt()
        }
        , ne)),
        () => clearTimeout(B)
    }
    , [S, y, K, c, Zu, qt, c.promise, xe, j, nc]),
    O.useEffect( () => {
        let B = Xt.current;
        if (B) {
            let ne = B.getBoundingClientRect().height;
            return Xr(ne),
            g(ee => [{
                toastId: c.id,
                height: ne,
                position: c.position
            }, ...ee]),
            () => g(ee => ee.filter(xt => xt.toastId !== c.id))
        }
    }
    , [g, c.id]),
    O.useEffect( () => {
        c.delete && qt()
    }
    , [qt, c.delete]);
    function Jm() {
        return _ != null && _.loading ? O.createElement("div", {
            className: "sonner-loader",
            "data-visible": xe === "loading"
        }, _.loading) : U ? O.createElement("div", {
            className: "sonner-loader",
            "data-visible": xe === "loading"
        }, U) : O.createElement(vw, {
            visible: xe === "loading"
        })
    }
    return O.createElement("li", {
        "aria-live": c.important ? "assertive" : "polite",
        "aria-atomic": "true",
        role: "status",
        tabIndex: 0,
        ref: Xt,
        className: F($, Ym, k == null ? void 0 : k.toast, (t = c == null ? void 0 : c.classNames) == null ? void 0 : t.toast, k == null ? void 0 : k.default, k == null ? void 0 : k[xe], (n = c == null ? void 0 : c.classNames) == null ? void 0 : n[xe]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = c.richColors) != null ? r : P,
        "data-styled": !(c.jsx || c.unstyled || v),
        "data-mounted": G,
        "data-promise": !!c.promise,
        "data-removed": Ve,
        "data-visible": Ys,
        "data-y-position": ec,
        "data-x-position": qm,
        "data-index": p,
        "data-front": Ks,
        "data-swiping": lt,
        "data-dismissible": tr,
        "data-type": xe,
        "data-invert": Zm,
        "data-swipe-out": Yt,
        "data-expanded": !!(S || K && G),
        style: {
            "--index": p,
            "--toasts-before": p,
            "--z-index": m.length - p,
            "--offset": `${Ve ? Zo : nr.current}px`,
            "--initial-height": K ? "auto" : `${An}px`,
            ...N,
            ...c.style
        },
        onPointerDown: B => {
            Xs || !tr || (Jo.current = new Date,
            er(nr.current),
            B.target.setPointerCapture(B.pointerId),
            B.target.tagName !== "BUTTON" && (Kt(!0),
            rr.current = {
                x: B.clientX,
                y: B.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var B, ne, ee, xt;
            if (Yt || !tr)
                return;
            rr.current = null;
            let St = Number(((B = Xt.current) == null ? void 0 : B.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0)
              , ti = new Date().getTime() - ((ne = Jo.current) == null ? void 0 : ne.getTime())
              , eg = Math.abs(St) / ti;
            if (Math.abs(St) >= Lw || eg > .11) {
                er(nr.current),
                (ee = c.onDismiss) == null || ee.call(c, c),
                qt(),
                Gt(!0);
                return
            }
            (xt = Xt.current) == null || xt.style.setProperty("--swipe-amount", "0px"),
            Kt(!1)
        }
        ,
        onPointerMove: B => {
            var ne;
            if (!rr.current || !tr)
                return;
            let ee = B.clientY - rr.current.y
              , xt = B.clientX - rr.current.x
              , St = (ec === "top" ? Math.min : Math.max)(0, ee)
              , ti = B.pointerType === "touch" ? 10 : 2;
            Math.abs(St) > ti ? (ne = Xt.current) == null || ne.style.setProperty("--swipe-amount", `${ee}px`) : Math.abs(xt) > ti && (rr.current = null)
        }
    }, Xm && !c.jsx ? O.createElement("button", {
        "aria-label": z,
        "data-disabled": Xs,
        "data-close-button": !0,
        onClick: Xs || !tr ? () => {}
        : () => {
            var B;
            qt(),
            (B = c.onDismiss) == null || B.call(c, c)
        }
        ,
        className: F(k == null ? void 0 : k.closeButton, (o = c == null ? void 0 : c.classNames) == null ? void 0 : o.closeButton)
    }, O.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, O.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), O.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    }))) : null, c.jsx || O.isValidElement(c.title) ? c.jsx || c.title : O.createElement(O.Fragment, null, xe || c.icon || c.promise ? O.createElement("div", {
        "data-icon": "",
        className: F(k == null ? void 0 : k.icon, (i = c == null ? void 0 : c.classNames) == null ? void 0 : i.icon)
    }, c.promise || c.type === "loading" && !c.icon ? c.icon || Jm() : null, c.type !== "loading" ? c.icon || (_ == null ? void 0 : _[xe]) || mw(xe) : null) : null, O.createElement("div", {
        "data-content": "",
        className: F(k == null ? void 0 : k.content, (s = c == null ? void 0 : c.classNames) == null ? void 0 : s.content)
    }, O.createElement("div", {
        "data-title": "",
        className: F(k == null ? void 0 : k.title, (l = c == null ? void 0 : c.classNames) == null ? void 0 : l.title)
    }, c.title), c.description ? O.createElement("div", {
        "data-description": "",
        className: F(I, Gm, k == null ? void 0 : k.description, (a = c == null ? void 0 : c.classNames) == null ? void 0 : a.description)
    }, c.description) : null), O.isValidElement(c.cancel) ? c.cancel : c.cancel && Ei(c.cancel) ? O.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: c.cancelButtonStyle || D,
        onClick: B => {
            var ne, ee;
            Ei(c.cancel) && tr && ((ee = (ne = c.cancel).onClick) == null || ee.call(ne, B),
            qt())
        }
        ,
        className: F(k == null ? void 0 : k.cancelButton, (u = c == null ? void 0 : c.classNames) == null ? void 0 : u.cancelButton)
    }, c.cancel.label) : null, O.isValidElement(c.action) ? c.action : c.action && Ei(c.action) ? O.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: c.actionButtonStyle || A,
        onClick: B => {
            var ne, ee;
            Ei(c.action) && (B.defaultPrevented || ((ee = (ne = c.action).onClick) == null || ee.call(ne, B),
            qt()))
        }
        ,
        className: F(k == null ? void 0 : k.actionButton, (d = c == null ? void 0 : c.classNames) == null ? void 0 : d.actionButton)
    }, c.action.label) : null))
}
;
function Ed() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
var zw = e => {
    let {invert: t, position: n="bottom-right", hotkey: r=["altKey", "KeyT"], expand: o, closeButton: i, className: s, offset: l, theme: a="light", richColors: u, duration: d, style: f, visibleToasts: c=Rw, toastOptions: v, dir: y=Ed(), gap: g=Mw, loadingIcon: w, icons: h, containerAriaLabel: p="Notifications", pauseWhenPageIsHidden: m, cn: S=Dw} = e
      , [C,P] = O.useState([])
      , T = O.useMemo( () => Array.from(new Set([n].concat(C.filter(j => j.position).map(j => j.position)))), [C, n])
      , [N,D] = O.useState([])
      , [A,$] = O.useState(!1)
      , [I,H] = O.useState(!1)
      , [M,Q] = O.useState(a !== "system" ? a : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , U = O.useRef(null)
      , K = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , k = O.useRef(null)
      , _ = O.useRef(!1)
      , z = O.useCallback(j => {
        var F;
        (F = C.find(G => G.id === j.id)) != null && F.delete || He.dismiss(j.id),
        P(G => G.filter( ({id: le}) => le !== j.id))
    }
    , [C]);
    return O.useEffect( () => He.subscribe(j => {
        if (j.dismiss) {
            P(F => F.map(G => G.id === j.id ? {
                ...G,
                delete: !0
            } : G));
            return
        }
        setTimeout( () => {
            mh.flushSync( () => {
                P(F => {
                    let G = F.findIndex(le => le.id === j.id);
                    return G !== -1 ? [...F.slice(0, G), {
                        ...F[G],
                        ...j
                    }, ...F.slice(G + 1)] : [j, ...F]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    O.useEffect( () => {
        if (a !== "system") {
            Q(a);
            return
        }
        a === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Q("dark") : Q("light")),
        typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({matches: j}) => {
            Q(j ? "dark" : "light")
        }
        )
    }
    , [a]),
    O.useEffect( () => {
        C.length <= 1 && $(!1)
    }
    , [C]),
    O.useEffect( () => {
        let j = F => {
            var G, le;
            r.every(Ve => F[Ve] || F.code === Ve) && ($(!0),
            (G = U.current) == null || G.focus()),
            F.code === "Escape" && (document.activeElement === U.current || (le = U.current) != null && le.contains(document.activeElement)) && $(!1)
        }
        ;
        return document.addEventListener("keydown", j),
        () => document.removeEventListener("keydown", j)
    }
    , [r]),
    O.useEffect( () => {
        if (U.current)
            return () => {
                k.current && (k.current.focus({
                    preventScroll: !0
                }),
                k.current = null,
                _.current = !1)
            }
    }
    , [U.current]),
    C.length ? O.createElement("section", {
        "aria-label": `${p} ${K}`,
        tabIndex: -1
    }, T.map( (j, F) => {
        var G;
        let[le,Ve] = j.split("-");
        return O.createElement("ol", {
            key: j,
            dir: y === "auto" ? Ed() : y,
            tabIndex: -1,
            ref: U,
            className: s,
            "data-sonner-toaster": !0,
            "data-theme": M,
            "data-y-position": le,
            "data-x-position": Ve,
            style: {
                "--front-toast-height": `${((G = N[0]) == null ? void 0 : G.height) || 0}px`,
                "--offset": typeof l == "number" ? `${l}px` : l || _w,
                "--width": `${Aw}px`,
                "--gap": `${g}px`,
                ...f
            },
            onBlur: Z => {
                _.current && !Z.currentTarget.contains(Z.relatedTarget) && (_.current = !1,
                k.current && (k.current.focus({
                    preventScroll: !0
                }),
                k.current = null))
            }
            ,
            onFocus: Z => {
                Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || _.current || (_.current = !0,
                k.current = Z.relatedTarget)
            }
            ,
            onMouseEnter: () => $(!0),
            onMouseMove: () => $(!0),
            onMouseLeave: () => {
                I || $(!1)
            }
            ,
            onPointerDown: Z => {
                Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || H(!0)
            }
            ,
            onPointerUp: () => H(!1)
        }, C.filter(Z => !Z.position && F === 0 || Z.position === j).map( (Z, lt) => {
            var Kt, Yt;
            return O.createElement(Iw, {
                key: Z.id,
                icons: h,
                index: lt,
                toast: Z,
                defaultRichColors: u,
                duration: (Kt = v == null ? void 0 : v.duration) != null ? Kt : d,
                className: v == null ? void 0 : v.className,
                descriptionClassName: v == null ? void 0 : v.descriptionClassName,
                invert: t,
                visibleToasts: c,
                closeButton: (Yt = v == null ? void 0 : v.closeButton) != null ? Yt : i,
                interacting: I,
                position: j,
                style: v == null ? void 0 : v.style,
                unstyled: v == null ? void 0 : v.unstyled,
                classNames: v == null ? void 0 : v.classNames,
                cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
                actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
                removeToast: z,
                toasts: C.filter(Gt => Gt.position == Z.position),
                heights: N.filter(Gt => Gt.position == Z.position),
                setHeights: D,
                expandByDefault: o,
                gap: g,
                loadingIcon: w,
                expanded: A,
                pauseWhenPageIsHidden: m,
                cn: S
            })
        }
        ))
    }
    )) : null
}
;
const Fw = ({...e}) => {
    const {theme: t="system"} = hw();
    return E.jsx(zw, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
  , $w = ["top", "right", "bottom", "left"]
  , Pn = Math.min
  , Ke = Math.max
  , ds = Math.round
  , Ci = Math.floor
  , Tn = e => ({
    x: e,
    y: e
})
  , Uw = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , Bw = {
    start: "end",
    end: "start"
};
function Oa(e, t, n) {
    return Ke(e, Pn(t, n))
}
function Wt(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Ht(e) {
    return e.split("-")[0]
}
function Yr(e) {
    return e.split("-")[1]
}
function Uu(e) {
    return e === "x" ? "y" : "x"
}
function Bu(e) {
    return e === "y" ? "height" : "width"
}
function bn(e) {
    return ["top", "bottom"].includes(Ht(e)) ? "y" : "x"
}
function Vu(e) {
    return Uu(bn(e))
}
function Vw(e, t, n) {
    n === void 0 && (n = !1);
    const r = Yr(e)
      , o = Vu(e)
      , i = Bu(o);
    let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = fs(s)),
    [s, fs(s)]
}
function Ww(e) {
    const t = fs(e);
    return [Aa(e), t, Aa(t)]
}
function Aa(e) {
    return e.replace(/start|end/g, t => Bw[t])
}
function Hw(e, t, n) {
    const r = ["left", "right"]
      , o = ["right", "left"]
      , i = ["top", "bottom"]
      , s = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
        return t ? i : s;
    default:
        return []
    }
}
function Qw(e, t, n, r) {
    const o = Yr(e);
    let i = Hw(Ht(e), n === "start", r);
    return o && (i = i.map(s => s + "-" + o),
    t && (i = i.concat(i.map(Aa)))),
    i
}
function fs(e) {
    return e.replace(/left|right|bottom|top/g, t => Uw[t])
}
function Kw(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function im(e) {
    return typeof e != "number" ? Kw(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function ps(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function Cd(e, t, n) {
    let {reference: r, floating: o} = e;
    const i = bn(t)
      , s = Vu(t)
      , l = Bu(s)
      , a = Ht(t)
      , u = i === "y"
      , d = r.x + r.width / 2 - o.width / 2
      , f = r.y + r.height / 2 - o.height / 2
      , c = r[l] / 2 - o[l] / 2;
    let v;
    switch (a) {
    case "top":
        v = {
            x: d,
            y: r.y - o.height
        };
        break;
    case "bottom":
        v = {
            x: d,
            y: r.y + r.height
        };
        break;
    case "right":
        v = {
            x: r.x + r.width,
            y: f
        };
        break;
    case "left":
        v = {
            x: r.x - o.width,
            y: f
        };
        break;
    default:
        v = {
            x: r.x,
            y: r.y
        }
    }
    switch (Yr(t)) {
    case "start":
        v[s] -= c * (n && u ? -1 : 1);
        break;
    case "end":
        v[s] += c * (n && u ? -1 : 1);
        break
    }
    return v
}
const Yw = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: s} = n
      , l = i.filter(Boolean)
      , a = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: d, y: f} = Cd(u, r, a)
      , c = r
      , v = {}
      , y = 0;
    for (let g = 0; g < l.length; g++) {
        const {name: w, fn: h} = l[g]
          , {x: p, y: m, data: S, reset: C} = await h({
            x: d,
            y: f,
            initialPlacement: r,
            placement: c,
            strategy: o,
            middlewareData: v,
            rects: u,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        d = p ?? d,
        f = m ?? f,
        v = {
            ...v,
            [w]: {
                ...v[w],
                ...S
            }
        },
        C && y <= 50 && (y++,
        typeof C == "object" && (C.placement && (c = C.placement),
        C.rects && (u = C.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : C.rects),
        {x: d, y: f} = Cd(u, c, a)),
        g = -1)
    }
    return {
        x: d,
        y: f,
        placement: c,
        strategy: o,
        middlewareData: v
    }
}
;
async function Fo(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: i, rects: s, elements: l, strategy: a} = e
      , {boundary: u="clippingAncestors", rootBoundary: d="viewport", elementContext: f="floating", altBoundary: c=!1, padding: v=0} = Wt(t, e)
      , y = im(v)
      , w = l[c ? f === "floating" ? "reference" : "floating" : f]
      , h = ps(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
        boundary: u,
        rootBoundary: d,
        strategy: a
    }))
      , p = f === "floating" ? {
        x: r,
        y: o,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference
      , m = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating))
      , S = await (i.isElement == null ? void 0 : i.isElement(m)) ? await (i.getScale == null ? void 0 : i.getScale(m)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , C = ps(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: l,
        rect: p,
        offsetParent: m,
        strategy: a
    }) : p);
    return {
        top: (h.top - C.top + y.top) / S.y,
        bottom: (C.bottom - h.bottom + y.bottom) / S.y,
        left: (h.left - C.left + y.left) / S.x,
        right: (C.right - h.right + y.right) / S.x
    }
}
const Gw = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: i, platform: s, elements: l, middlewareData: a} = t
          , {element: u, padding: d=0} = Wt(e, t) || {};
        if (u == null)
            return {};
        const f = im(d)
          , c = {
            x: n,
            y: r
        }
          , v = Vu(o)
          , y = Bu(v)
          , g = await s.getDimensions(u)
          , w = v === "y"
          , h = w ? "top" : "left"
          , p = w ? "bottom" : "right"
          , m = w ? "clientHeight" : "clientWidth"
          , S = i.reference[y] + i.reference[v] - c[v] - i.floating[y]
          , C = c[v] - i.reference[v]
          , P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
        let T = P ? P[m] : 0;
        (!T || !await (s.isElement == null ? void 0 : s.isElement(P))) && (T = l.floating[m] || i.floating[y]);
        const N = S / 2 - C / 2
          , D = T / 2 - g[y] / 2 - 1
          , A = Pn(f[h], D)
          , $ = Pn(f[p], D)
          , I = A
          , H = T - g[y] - $
          , M = T / 2 - g[y] / 2 + N
          , Q = Oa(I, M, H)
          , U = !a.arrow && Yr(o) != null && M !== Q && i.reference[y] / 2 - (M < I ? A : $) - g[y] / 2 < 0
          , K = U ? M < I ? M - I : M - H : 0;
        return {
            [v]: c[v] + K,
            data: {
                [v]: Q,
                centerOffset: M - Q - K,
                ...U && {
                    alignmentOffset: K
                }
            },
            reset: U
        }
    }
})
  , Xw = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: i, rects: s, initialPlacement: l, platform: a, elements: u} = t
              , {mainAxis: d=!0, crossAxis: f=!0, fallbackPlacements: c, fallbackStrategy: v="bestFit", fallbackAxisSideDirection: y="none", flipAlignment: g=!0, ...w} = Wt(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset)
                return {};
            const h = Ht(o)
              , p = bn(l)
              , m = Ht(l) === l
              , S = await (a.isRTL == null ? void 0 : a.isRTL(u.floating))
              , C = c || (m || !g ? [fs(l)] : Ww(l))
              , P = y !== "none";
            !c && P && C.push(...Qw(l, g, y, S));
            const T = [l, ...C]
              , N = await Fo(t, w)
              , D = [];
            let A = ((r = i.flip) == null ? void 0 : r.overflows) || [];
            if (d && D.push(N[h]),
            f) {
                const M = Vw(o, s, S);
                D.push(N[M[0]], N[M[1]])
            }
            if (A = [...A, {
                placement: o,
                overflows: D
            }],
            !D.every(M => M <= 0)) {
                var $, I;
                const M = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1
                  , Q = T[M];
                if (Q)
                    return {
                        data: {
                            index: M,
                            overflows: A
                        },
                        reset: {
                            placement: Q
                        }
                    };
                let U = (I = A.filter(K => K.overflows[0] <= 0).sort( (K, k) => K.overflows[1] - k.overflows[1])[0]) == null ? void 0 : I.placement;
                if (!U)
                    switch (v) {
                    case "bestFit":
                        {
                            var H;
                            const K = (H = A.filter(k => {
                                if (P) {
                                    const _ = bn(k.placement);
                                    return _ === p || _ === "y"
                                }
                                return !0
                            }
                            ).map(k => [k.placement, k.overflows.filter(_ => _ > 0).reduce( (_, z) => _ + z, 0)]).sort( (k, _) => k[1] - _[1])[0]) == null ? void 0 : H[0];
                            K && (U = K);
                            break
                        }
                    case "initialPlacement":
                        U = l;
                        break
                    }
                if (o !== U)
                    return {
                        reset: {
                            placement: U
                        }
                    }
            }
            return {}
        }
    }
};
function kd(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Pd(e) {
    return $w.some(t => e[t] >= 0)
}
const qw = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = Wt(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const i = await Fo(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , s = kd(i, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: s,
                            referenceHidden: Pd(s)
                        }
                    }
                }
            case "escaped":
                {
                    const i = await Fo(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , s = kd(i, n.floating);
                    return {
                        data: {
                            escapedOffsets: s,
                            escaped: Pd(s)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function Zw(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , s = Ht(n)
      , l = Yr(n)
      , a = bn(n) === "y"
      , u = ["left", "top"].includes(s) ? -1 : 1
      , d = i && a ? -1 : 1
      , f = Wt(t, e);
    let {mainAxis: c, crossAxis: v, alignmentAxis: y} = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis
    };
    return l && typeof y == "number" && (v = l === "end" ? y * -1 : y),
    a ? {
        x: v * d,
        y: c * u
    } : {
        x: c * u,
        y: v * d
    }
}
const Jw = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: i, placement: s, middlewareData: l} = t
              , a = await Zw(t, e);
            return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
                x: o + a.x,
                y: i + a.y,
                data: {
                    ...a,
                    placement: s
                }
            }
        }
    }
}
  , e1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: i=!0, crossAxis: s=!1, limiter: l={
                fn: w => {
                    let {x: h, y: p} = w;
                    return {
                        x: h,
                        y: p
                    }
                }
            }, ...a} = Wt(e, t)
              , u = {
                x: n,
                y: r
            }
              , d = await Fo(t, a)
              , f = bn(Ht(o))
              , c = Uu(f);
            let v = u[c]
              , y = u[f];
            if (i) {
                const w = c === "y" ? "top" : "left"
                  , h = c === "y" ? "bottom" : "right"
                  , p = v + d[w]
                  , m = v - d[h];
                v = Oa(p, v, m)
            }
            if (s) {
                const w = f === "y" ? "top" : "left"
                  , h = f === "y" ? "bottom" : "right"
                  , p = y + d[w]
                  , m = y - d[h];
                y = Oa(p, y, m)
            }
            const g = l.fn({
                ...t,
                [c]: v,
                [f]: y
            });
            return {
                ...g,
                data: {
                    x: g.x - n,
                    y: g.y - r,
                    enabled: {
                        [c]: i,
                        [f]: s
                    }
                }
            }
        }
    }
}
  , t1 = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: i, middlewareData: s} = t
              , {offset: l=0, mainAxis: a=!0, crossAxis: u=!0} = Wt(e, t)
              , d = {
                x: n,
                y: r
            }
              , f = bn(o)
              , c = Uu(f);
            let v = d[c]
              , y = d[f];
            const g = Wt(l, t)
              , w = typeof g == "number" ? {
                mainAxis: g,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...g
            };
            if (a) {
                const m = c === "y" ? "height" : "width"
                  , S = i.reference[c] - i.floating[m] + w.mainAxis
                  , C = i.reference[c] + i.reference[m] - w.mainAxis;
                v < S ? v = S : v > C && (v = C)
            }
            if (u) {
                var h, p;
                const m = c === "y" ? "width" : "height"
                  , S = ["top", "left"].includes(Ht(o))
                  , C = i.reference[f] - i.floating[m] + (S && ((h = s.offset) == null ? void 0 : h[f]) || 0) + (S ? 0 : w.crossAxis)
                  , P = i.reference[f] + i.reference[m] + (S ? 0 : ((p = s.offset) == null ? void 0 : p[f]) || 0) - (S ? w.crossAxis : 0);
                y < C ? y = C : y > P && (y = P)
            }
            return {
                [c]: v,
                [f]: y
            }
        }
    }
}
  , n1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: i, platform: s, elements: l} = t
              , {apply: a= () => {}
            , ...u} = Wt(e, t)
              , d = await Fo(t, u)
              , f = Ht(o)
              , c = Yr(o)
              , v = bn(o) === "y"
              , {width: y, height: g} = i.floating;
            let w, h;
            f === "top" || f === "bottom" ? (w = f,
            h = c === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (h = f,
            w = c === "end" ? "top" : "bottom");
            const p = g - d.top - d.bottom
              , m = y - d.left - d.right
              , S = Pn(g - d[w], p)
              , C = Pn(y - d[h], m)
              , P = !t.middlewareData.shift;
            let T = S
              , N = C;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (N = m),
            (r = t.middlewareData.shift) != null && r.enabled.y && (T = p),
            P && !c) {
                const A = Ke(d.left, 0)
                  , $ = Ke(d.right, 0)
                  , I = Ke(d.top, 0)
                  , H = Ke(d.bottom, 0);
                v ? N = y - 2 * (A !== 0 || $ !== 0 ? A + $ : Ke(d.left, d.right)) : T = g - 2 * (I !== 0 || H !== 0 ? I + H : Ke(d.top, d.bottom))
            }
            await a({
                ...t,
                availableWidth: N,
                availableHeight: T
            });
            const D = await s.getDimensions(l.floating);
            return y !== D.width || g !== D.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Is() {
    return typeof window < "u"
}
function Gr(e) {
    return sm(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function Xe(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function At(e) {
    var t;
    return (t = (sm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function sm(e) {
    return Is() ? e instanceof Node || e instanceof Xe(e).Node : !1
}
function yt(e) {
    return Is() ? e instanceof Element || e instanceof Xe(e).Element : !1
}
function Ot(e) {
    return Is() ? e instanceof HTMLElement || e instanceof Xe(e).HTMLElement : !1
}
function Td(e) {
    return !Is() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Xe(e).ShadowRoot
}
function qo(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = wt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}
function r1(e) {
    return ["table", "td", "th"].includes(Gr(e))
}
function zs(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
function Wu(e) {
    const t = Hu()
      , n = yt(e) ? wt(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}
function o1(e) {
    let t = Nn(e);
    for (; Ot(t) && !Br(t); ) {
        if (Wu(t))
            return t;
        if (zs(t))
            return null;
        t = Nn(t)
    }
    return null
}
function Hu() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function Br(e) {
    return ["html", "body", "#document"].includes(Gr(e))
}
function wt(e) {
    return Xe(e).getComputedStyle(e)
}
function Fs(e) {
    return yt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Nn(e) {
    if (Gr(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Td(e) && e.host || At(e);
    return Td(t) ? t.host : t
}
function lm(e) {
    const t = Nn(e);
    return Br(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ot(t) && qo(t) ? t : lm(t)
}
function $o(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = lm(e)
      , i = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , s = Xe(o);
    if (i) {
        const l = Ma(s);
        return t.concat(s, s.visualViewport || [], qo(o) ? o : [], l && n ? $o(l) : [])
    }
    return t.concat(o, $o(o, [], n))
}
function Ma(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function am(e) {
    const t = wt(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = Ot(e)
      , i = o ? e.offsetWidth : n
      , s = o ? e.offsetHeight : r
      , l = ds(n) !== i || ds(r) !== s;
    return l && (n = i,
    r = s),
    {
        width: n,
        height: r,
        $: l
    }
}
function Qu(e) {
    return yt(e) ? e : e.contextElement
}
function kr(e) {
    const t = Qu(e);
    if (!Ot(t))
        return Tn(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: i} = am(t);
    let s = (i ? ds(n.width) : n.width) / r
      , l = (i ? ds(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    {
        x: s,
        y: l
    }
}
const i1 = Tn(0);
function um(e) {
    const t = Xe(e);
    return !Hu() || !t.visualViewport ? i1 : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function s1(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== Xe(e) ? !1 : t
}
function Xn(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , i = Qu(e);
    let s = Tn(1);
    t && (r ? yt(r) && (s = kr(r)) : s = kr(e));
    const l = s1(i, n, r) ? um(i) : Tn(0);
    let a = (o.left + l.x) / s.x
      , u = (o.top + l.y) / s.y
      , d = o.width / s.x
      , f = o.height / s.y;
    if (i) {
        const c = Xe(i)
          , v = r && yt(r) ? Xe(r) : r;
        let y = c
          , g = Ma(y);
        for (; g && r && v !== y; ) {
            const w = kr(g)
              , h = g.getBoundingClientRect()
              , p = wt(g)
              , m = h.left + (g.clientLeft + parseFloat(p.paddingLeft)) * w.x
              , S = h.top + (g.clientTop + parseFloat(p.paddingTop)) * w.y;
            a *= w.x,
            u *= w.y,
            d *= w.x,
            f *= w.y,
            a += m,
            u += S,
            y = Xe(g),
            g = Ma(y)
        }
    }
    return ps({
        width: d,
        height: f,
        x: a,
        y: u
    })
}
function l1(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const i = o === "fixed"
      , s = At(r)
      , l = t ? zs(t.floating) : !1;
    if (r === s || l && i)
        return n;
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = Tn(1);
    const d = Tn(0)
      , f = Ot(r);
    if ((f || !f && !i) && ((Gr(r) !== "body" || qo(s)) && (a = Fs(r)),
    Ot(r))) {
        const c = Xn(r);
        u = kr(r),
        d.x = c.x + r.clientLeft,
        d.y = c.y + r.clientTop
    }
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - a.scrollLeft * u.x + d.x,
        y: n.y * u.y - a.scrollTop * u.y + d.y
    }
}
function a1(e) {
    return Array.from(e.getClientRects())
}
function La(e, t) {
    const n = Fs(e).scrollLeft;
    return t ? t.left + n : Xn(At(e)).left + n
}
function u1(e) {
    const t = At(e)
      , n = Fs(e)
      , r = e.ownerDocument.body
      , o = Ke(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , i = Ke(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + La(e);
    const l = -n.scrollTop;
    return wt(r).direction === "rtl" && (s += Ke(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: i,
        x: s,
        y: l
    }
}
function c1(e, t) {
    const n = Xe(e)
      , r = At(e)
      , o = n.visualViewport;
    let i = r.clientWidth
      , s = r.clientHeight
      , l = 0
      , a = 0;
    if (o) {
        i = o.width,
        s = o.height;
        const u = Hu();
        (!u || u && t === "fixed") && (l = o.offsetLeft,
        a = o.offsetTop)
    }
    return {
        width: i,
        height: s,
        x: l,
        y: a
    }
}
function d1(e, t) {
    const n = Xn(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , i = Ot(e) ? kr(e) : Tn(1)
      , s = e.clientWidth * i.x
      , l = e.clientHeight * i.y
      , a = o * i.x
      , u = r * i.y;
    return {
        width: s,
        height: l,
        x: a,
        y: u
    }
}
function bd(e, t, n) {
    let r;
    if (t === "viewport")
        r = c1(e, n);
    else if (t === "document")
        r = u1(At(e));
    else if (yt(t))
        r = d1(t, n);
    else {
        const o = um(e);
        r = {
            ...t,
            x: t.x - o.x,
            y: t.y - o.y
        }
    }
    return ps(r)
}
function cm(e, t) {
    const n = Nn(e);
    return n === t || !yt(n) || Br(n) ? !1 : wt(n).position === "fixed" || cm(n, t)
}
function f1(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = $o(e, [], !1).filter(l => yt(l) && Gr(l) !== "body")
      , o = null;
    const i = wt(e).position === "fixed";
    let s = i ? Nn(e) : e;
    for (; yt(s) && !Br(s); ) {
        const l = wt(s)
          , a = Wu(s);
        !a && l.position === "fixed" && (o = null),
        (i ? !a && !o : !a && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || qo(s) && !a && cm(e, s)) ? r = r.filter(d => d !== s) : o = l,
        s = Nn(s)
    }
    return t.set(e, r),
    r
}
function p1(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const s = [...n === "clippingAncestors" ? zs(t) ? [] : f1(t, this._c) : [].concat(n), r]
      , l = s[0]
      , a = s.reduce( (u, d) => {
        const f = bd(t, d, o);
        return u.top = Ke(f.top, u.top),
        u.right = Pn(f.right, u.right),
        u.bottom = Pn(f.bottom, u.bottom),
        u.left = Ke(f.left, u.left),
        u
    }
    , bd(t, l, o));
    return {
        width: a.right - a.left,
        height: a.bottom - a.top,
        x: a.left,
        y: a.top
    }
}
function h1(e) {
    const {width: t, height: n} = am(e);
    return {
        width: t,
        height: n
    }
}
function m1(e, t, n) {
    const r = Ot(t)
      , o = At(t)
      , i = n === "fixed"
      , s = Xn(e, !0, i, t);
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const a = Tn(0);
    if (r || !r && !i)
        if ((Gr(t) !== "body" || qo(o)) && (l = Fs(t)),
        r) {
            const v = Xn(t, !0, i, t);
            a.x = v.x + t.clientLeft,
            a.y = v.y + t.clientTop
        } else
            o && (a.x = La(o));
    let u = 0
      , d = 0;
    if (o && !r && !i) {
        const v = o.getBoundingClientRect();
        d = v.top + l.scrollTop,
        u = v.left + l.scrollLeft - La(o, v)
    }
    const f = s.left + l.scrollLeft - a.x - u
      , c = s.top + l.scrollTop - a.y - d;
    return {
        x: f,
        y: c,
        width: s.width,
        height: s.height
    }
}
function Rl(e) {
    return wt(e).position === "static"
}
function Nd(e, t) {
    if (!Ot(e) || wt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return At(e) === n && (n = n.ownerDocument.body),
    n
}
function dm(e, t) {
    const n = Xe(e);
    if (zs(e))
        return n;
    if (!Ot(e)) {
        let o = Nn(e);
        for (; o && !Br(o); ) {
            if (yt(o) && !Rl(o))
                return o;
            o = Nn(o)
        }
        return n
    }
    let r = Nd(e, t);
    for (; r && r1(r) && Rl(r); )
        r = Nd(r, t);
    return r && Br(r) && Rl(r) && !Wu(r) ? n : r || o1(e) || n
}
const g1 = async function(e) {
    const t = this.getOffsetParent || dm
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: m1(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function v1(e) {
    return wt(e).direction === "rtl"
}
const y1 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: l1,
    getDocumentElement: At,
    getClippingRect: p1,
    getOffsetParent: dm,
    getElementRects: g1,
    getClientRects: a1,
    getDimensions: h1,
    getScale: kr,
    isElement: yt,
    isRTL: v1
};
function w1(e, t) {
    let n = null, r;
    const o = At(e);
    function i() {
        var l;
        clearTimeout(r),
        (l = n) == null || l.disconnect(),
        n = null
    }
    function s(l, a) {
        l === void 0 && (l = !1),
        a === void 0 && (a = 1),
        i();
        const {left: u, top: d, width: f, height: c} = e.getBoundingClientRect();
        if (l || t(),
        !f || !c)
            return;
        const v = Ci(d)
          , y = Ci(o.clientWidth - (u + f))
          , g = Ci(o.clientHeight - (d + c))
          , w = Ci(u)
          , p = {
            rootMargin: -v + "px " + -y + "px " + -g + "px " + -w + "px",
            threshold: Ke(0, Pn(1, a)) || 1
        };
        let m = !0;
        function S(C) {
            const P = C[0].intersectionRatio;
            if (P !== a) {
                if (!m)
                    return s();
                P ? s(!1, P) : r = setTimeout( () => {
                    s(!1, 1e-7)
                }
                , 1e3)
            }
            m = !1
        }
        try {
            n = new IntersectionObserver(S,{
                ...p,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(S,p)
        }
        n.observe(e)
    }
    return s(!0),
    i
}
function x1(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: i=!0, elementResize: s=typeof ResizeObserver == "function", layoutShift: l=typeof IntersectionObserver == "function", animationFrame: a=!1} = r
      , u = Qu(e)
      , d = o || i ? [...u ? $o(u) : [], ...$o(t)] : [];
    d.forEach(h => {
        o && h.addEventListener("scroll", n, {
            passive: !0
        }),
        i && h.addEventListener("resize", n)
    }
    );
    const f = u && l ? w1(u, n) : null;
    let c = -1
      , v = null;
    s && (v = new ResizeObserver(h => {
        let[p] = h;
        p && p.target === u && v && (v.unobserve(t),
        cancelAnimationFrame(c),
        c = requestAnimationFrame( () => {
            var m;
            (m = v) == null || m.observe(t)
        }
        )),
        n()
    }
    ),
    u && !a && v.observe(u),
    v.observe(t));
    let y, g = a ? Xn(e) : null;
    a && w();
    function w() {
        const h = Xn(e);
        g && (h.x !== g.x || h.y !== g.y || h.width !== g.width || h.height !== g.height) && n(),
        g = h,
        y = requestAnimationFrame(w)
    }
    return n(),
    () => {
        var h;
        d.forEach(p => {
            o && p.removeEventListener("scroll", n),
            i && p.removeEventListener("resize", n)
        }
        ),
        f == null || f(),
        (h = v) == null || h.disconnect(),
        v = null,
        a && cancelAnimationFrame(y)
    }
}
const S1 = Jw
  , E1 = e1
  , C1 = Xw
  , k1 = n1
  , P1 = qw
  , Rd = Gw
  , T1 = t1
  , b1 = (e, t, n) => {
    const r = new Map
      , o = {
        platform: y1,
        ...n
    }
      , i = {
        ...o.platform,
        _c: r
    };
    return Yw(e, t, {
        ...o,
        platform: i
    })
}
;
var Fi = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
function hs(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!hs(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !hs(e[i], t[i]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function fm(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function _d(e, t) {
    const n = fm(e);
    return Math.round(t * n) / n
}
function _l(e) {
    const t = x.useRef(e);
    return Fi( () => {
        t.current = e
    }
    ),
    t
}
function N1(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: i, floating: s}={}, transform: l=!0, whileElementsMounted: a, open: u} = e
      , [d,f] = x.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [c,v] = x.useState(r);
    hs(c, r) || v(r);
    const [y,g] = x.useState(null)
      , [w,h] = x.useState(null)
      , p = x.useCallback(k => {
        k !== P.current && (P.current = k,
        g(k))
    }
    , [])
      , m = x.useCallback(k => {
        k !== T.current && (T.current = k,
        h(k))
    }
    , [])
      , S = i || y
      , C = s || w
      , P = x.useRef(null)
      , T = x.useRef(null)
      , N = x.useRef(d)
      , D = a != null
      , A = _l(a)
      , $ = _l(o)
      , I = _l(u)
      , H = x.useCallback( () => {
        if (!P.current || !T.current)
            return;
        const k = {
            placement: t,
            strategy: n,
            middleware: c
        };
        $.current && (k.platform = $.current),
        b1(P.current, T.current, k).then(_ => {
            const z = {
                ..._,
                isPositioned: I.current !== !1
            };
            M.current && !hs(N.current, z) && (N.current = z,
            Xo.flushSync( () => {
                f(z)
            }
            ))
        }
        )
    }
    , [c, t, n, $, I]);
    Fi( () => {
        u === !1 && N.current.isPositioned && (N.current.isPositioned = !1,
        f(k => ({
            ...k,
            isPositioned: !1
        })))
    }
    , [u]);
    const M = x.useRef(!1);
    Fi( () => (M.current = !0,
    () => {
        M.current = !1
    }
    ), []),
    Fi( () => {
        if (S && (P.current = S),
        C && (T.current = C),
        S && C) {
            if (A.current)
                return A.current(S, C, H);
            H()
        }
    }
    , [S, C, H, A, D]);
    const Q = x.useMemo( () => ({
        reference: P,
        floating: T,
        setReference: p,
        setFloating: m
    }), [p, m])
      , U = x.useMemo( () => ({
        reference: S,
        floating: C
    }), [S, C])
      , K = x.useMemo( () => {
        const k = {
            position: n,
            left: 0,
            top: 0
        };
        if (!U.floating)
            return k;
        const _ = _d(U.floating, d.x)
          , z = _d(U.floating, d.y);
        return l ? {
            ...k,
            transform: "translate(" + _ + "px, " + z + "px)",
            ...fm(U.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: _,
            top: z
        }
    }
    , [n, l, U.floating, d.x, d.y]);
    return x.useMemo( () => ({
        ...d,
        update: H,
        refs: Q,
        elements: U,
        floatingStyles: K
    }), [d, H, Q, U, K])
}
const R1 = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? Rd({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? Rd({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , _1 = (e, t) => ({
    ...S1(e),
    options: [e, t]
})
  , O1 = (e, t) => ({
    ...E1(e),
    options: [e, t]
})
  , A1 = (e, t) => ({
    ...T1(e),
    options: [e, t]
})
  , M1 = (e, t) => ({
    ...C1(e),
    options: [e, t]
})
  , L1 = (e, t) => ({
    ...k1(e),
    options: [e, t]
})
  , j1 = (e, t) => ({
    ...P1(e),
    options: [e, t]
})
  , D1 = (e, t) => ({
    ...R1(e),
    options: [e, t]
});
var I1 = "Arrow"
  , pm = x.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...i} = e;
    return E.jsx(Be.svg, {
        ...i,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : E.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
pm.displayName = I1;
var z1 = pm;
function F1(e, t=[]) {
    let n = [];
    function r(i, s) {
        const l = x.createContext(s)
          , a = n.length;
        n = [...n, s];
        function u(f) {
            const {scope: c, children: v, ...y} = f
              , g = (c == null ? void 0 : c[e][a]) || l
              , w = x.useMemo( () => y, Object.values(y));
            return E.jsx(g.Provider, {
                value: w,
                children: v
            })
        }
        function d(f, c) {
            const v = (c == null ? void 0 : c[e][a]) || l
              , y = x.useContext(v);
            if (y)
                return y;
            if (s !== void 0)
                return s;
            throw new Error(`\`${f}\` must be used within \`${i}\``)
        }
        return u.displayName = i + "Provider",
        [u, d]
    }
    const o = () => {
        const i = n.map(s => x.createContext(s));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return x.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: a
                }
            }), [l, a])
        }
    }
    ;
    return o.scopeName = e,
    [r, $1(o, ...t)]
}
function $1(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (l, {useScope: a, scopeName: u}) => {
                const f = a(i)[`__scope${u}`];
                return {
                    ...l,
                    ...f
                }
            }
            , {});
            return x.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function U1(e) {
    const [t,n] = x.useState(void 0);
    return Gn( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const i = o[0];
                let s, l;
                if ("borderBoxSize"in i) {
                    const a = i.borderBoxSize
                      , u = Array.isArray(a) ? a[0] : a;
                    s = u.inlineSize,
                    l = u.blockSize
                } else
                    s = e.offsetWidth,
                    l = e.offsetHeight;
                n({
                    width: s,
                    height: l
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var hm = "Popper"
  , [mm,gm] = F1(hm)
  , [NS,vm] = mm(hm)
  , ym = "PopperAnchor"
  , wm = x.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , i = vm(ym, n)
      , s = x.useRef(null)
      , l = vt(t, s);
    return x.useEffect( () => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current)
    }
    ),
    r ? null : E.jsx(Be.div, {
        ...o,
        ref: l
    })
}
);
wm.displayName = ym;
var Ku = "PopperContent"
  , [B1,V1] = mm(Ku)
  , xm = x.forwardRef( (e, t) => {
    var lt, Kt, Yt, Gt, Zo, er;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: i="center", alignOffset: s=0, arrowPadding: l=0, avoidCollisions: a=!0, collisionBoundary: u=[], collisionPadding: d=0, sticky: f="partial", hideWhenDetached: c=!1, updatePositionStrategy: v="optimized", onPlaced: y, ...g} = e
      , w = vm(Ku, n)
      , [h,p] = x.useState(null)
      , m = vt(t, An => p(An))
      , [S,C] = x.useState(null)
      , P = U1(S)
      , T = (P == null ? void 0 : P.width) ?? 0
      , N = (P == null ? void 0 : P.height) ?? 0
      , D = r + (i !== "center" ? "-" + i : "")
      , A = typeof d == "number" ? d : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...d
    }
      , $ = Array.isArray(u) ? u : [u]
      , I = $.length > 0
      , H = {
        padding: A,
        boundary: $.filter(H1),
        altBoundary: I
    }
      , {refs: M, floatingStyles: Q, placement: U, isPositioned: K, middlewareData: k} = N1({
        strategy: "fixed",
        placement: D,
        whileElementsMounted: (...An) => x1(...An, {
            animationFrame: v === "always"
        }),
        elements: {
            reference: w.anchor
        },
        middleware: [_1({
            mainAxis: o + N,
            alignmentAxis: s
        }), a && O1({
            mainAxis: !0,
            crossAxis: !1,
            limiter: f === "partial" ? A1() : void 0,
            ...H
        }), a && M1({
            ...H
        }), L1({
            ...H,
            apply: ({elements: An, rects: Xr, availableWidth: Jo, availableHeight: Xt}) => {
                const {width: Ks, height: Ys} = Xr.reference
                  , xe = An.floating.style;
                xe.setProperty("--radix-popper-available-width", `${Jo}px`),
                xe.setProperty("--radix-popper-available-height", `${Xt}px`),
                xe.setProperty("--radix-popper-anchor-width", `${Ks}px`),
                xe.setProperty("--radix-popper-anchor-height", `${Ys}px`)
            }
        }), S && D1({
            element: S,
            padding: l
        }), Q1({
            arrowWidth: T,
            arrowHeight: N
        }), c && j1({
            strategy: "referenceHidden",
            ...H
        })]
    })
      , [_,z] = Cm(U)
      , j = _t(y);
    Gn( () => {
        K && (j == null || j())
    }
    , [K, j]);
    const F = (lt = k.arrow) == null ? void 0 : lt.x
      , G = (Kt = k.arrow) == null ? void 0 : Kt.y
      , le = ((Yt = k.arrow) == null ? void 0 : Yt.centerOffset) !== 0
      , [Ve,Z] = x.useState();
    return Gn( () => {
        h && Z(window.getComputedStyle(h).zIndex)
    }
    , [h]),
    E.jsx("div", {
        ref: M.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...Q,
            transform: K ? Q.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: Ve,
            "--radix-popper-transform-origin": [(Gt = k.transformOrigin) == null ? void 0 : Gt.x, (Zo = k.transformOrigin) == null ? void 0 : Zo.y].join(" "),
            ...((er = k.hide) == null ? void 0 : er.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: E.jsx(B1, {
            scope: n,
            placedSide: _,
            onArrowChange: C,
            arrowX: F,
            arrowY: G,
            shouldHideArrow: le,
            children: E.jsx(Be.div, {
                "data-side": _,
                "data-align": z,
                ...g,
                ref: m,
                style: {
                    ...g.style,
                    animation: K ? void 0 : "none"
                }
            })
        })
    })
}
);
xm.displayName = Ku;
var Sm = "PopperArrow"
  , W1 = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , Em = x.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , i = V1(Sm, r)
      , s = W1[i.placedSide];
    return E.jsx("span", {
        ref: i.onArrowChange,
        style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [s]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[i.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: E.jsx(z1, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
Em.displayName = Sm;
function H1(e) {
    return e !== null
}
var Q1 = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, h, p;
        const {placement: n, rects: r, middlewareData: o} = t
          , s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0
          , l = s ? 0 : e.arrowWidth
          , a = s ? 0 : e.arrowHeight
          , [u,d] = Cm(n)
          , f = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[d]
          , c = (((h = o.arrow) == null ? void 0 : h.x) ?? 0) + l / 2
          , v = (((p = o.arrow) == null ? void 0 : p.y) ?? 0) + a / 2;
        let y = ""
          , g = "";
        return u === "bottom" ? (y = s ? f : `${c}px`,
        g = `${-a}px`) : u === "top" ? (y = s ? f : `${c}px`,
        g = `${r.floating.height + a}px`) : u === "right" ? (y = `${-a}px`,
        g = s ? f : `${v}px`) : u === "left" && (y = `${r.floating.width + a}px`,
        g = s ? f : `${v}px`),
        {
            data: {
                x: y,
                y: g
            }
        }
    }
});
function Cm(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var K1 = wm
  , Y1 = xm
  , G1 = Em
  , [$s,RS] = wh("Tooltip", [gm])
  , Yu = gm()
  , km = "TooltipProvider"
  , X1 = 700
  , Od = "tooltip.open"
  , [q1,Pm] = $s(km)
  , Tm = e => {
    const {__scopeTooltip: t, delayDuration: n=X1, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: i} = e
      , [s,l] = x.useState(!0)
      , a = x.useRef(!1)
      , u = x.useRef(0);
    return x.useEffect( () => {
        const d = u.current;
        return () => window.clearTimeout(d)
    }
    , []),
    E.jsx(q1, {
        scope: t,
        isOpenDelayed: s,
        delayDuration: n,
        onOpen: x.useCallback( () => {
            window.clearTimeout(u.current),
            l(!1)
        }
        , []),
        onClose: x.useCallback( () => {
            window.clearTimeout(u.current),
            u.current = window.setTimeout( () => l(!0), r)
        }
        , [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: x.useCallback(d => {
            a.current = d
        }
        , []),
        disableHoverableContent: o,
        children: i
    })
}
;
Tm.displayName = km;
var bm = "Tooltip"
  , [_S,Us] = $s(bm)
  , ja = "TooltipTrigger"
  , Z1 = x.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Us(ja, n)
      , i = Pm(ja, n)
      , s = Yu(n)
      , l = x.useRef(null)
      , a = vt(t, l, o.onTriggerChange)
      , u = x.useRef(!1)
      , d = x.useRef(!1)
      , f = x.useCallback( () => u.current = !1, []);
    return x.useEffect( () => () => document.removeEventListener("pointerup", f), [f]),
    E.jsx(K1, {
        asChild: !0,
        ...s,
        children: E.jsx(Be.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: a,
            onPointerMove: ge(e.onPointerMove, c => {
                c.pointerType !== "touch" && !d.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(),
                d.current = !0)
            }
            ),
            onPointerLeave: ge(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                d.current = !1
            }
            ),
            onPointerDown: ge(e.onPointerDown, () => {
                u.current = !0,
                document.addEventListener("pointerup", f, {
                    once: !0
                })
            }
            ),
            onFocus: ge(e.onFocus, () => {
                u.current || o.onOpen()
            }
            ),
            onBlur: ge(e.onBlur, o.onClose),
            onClick: ge(e.onClick, o.onClose)
        })
    })
}
);
Z1.displayName = ja;
var J1 = "TooltipPortal"
  , [OS,ex] = $s(J1, {
    forceMount: void 0
})
  , Vr = "TooltipContent"
  , Nm = x.forwardRef( (e, t) => {
    const n = ex(Vr, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...i} = e
      , s = Us(Vr, e.__scopeTooltip);
    return E.jsx(Du, {
        present: r || s.open,
        children: s.disableHoverableContent ? E.jsx(Rm, {
            side: o,
            ...i,
            ref: t
        }) : E.jsx(tx, {
            side: o,
            ...i,
            ref: t
        })
    })
}
)
  , tx = x.forwardRef( (e, t) => {
    const n = Us(Vr, e.__scopeTooltip)
      , r = Pm(Vr, e.__scopeTooltip)
      , o = x.useRef(null)
      , i = vt(t, o)
      , [s,l] = x.useState(null)
      , {trigger: a, onClose: u} = n
      , d = o.current
      , {onPointerInTransitChange: f} = r
      , c = x.useCallback( () => {
        l(null),
        f(!1)
    }
    , [f])
      , v = x.useCallback( (y, g) => {
        const w = y.currentTarget
          , h = {
            x: y.clientX,
            y: y.clientY
        }
          , p = ix(h, w.getBoundingClientRect())
          , m = sx(h, p)
          , S = lx(g.getBoundingClientRect())
          , C = ux([...m, ...S]);
        l(C),
        f(!0)
    }
    , [f]);
    return x.useEffect( () => () => c(), [c]),
    x.useEffect( () => {
        if (a && d) {
            const y = w => v(w, d)
              , g = w => v(w, a);
            return a.addEventListener("pointerleave", y),
            d.addEventListener("pointerleave", g),
            () => {
                a.removeEventListener("pointerleave", y),
                d.removeEventListener("pointerleave", g)
            }
        }
    }
    , [a, d, v, c]),
    x.useEffect( () => {
        if (s) {
            const y = g => {
                const w = g.target
                  , h = {
                    x: g.clientX,
                    y: g.clientY
                }
                  , p = (a == null ? void 0 : a.contains(w)) || (d == null ? void 0 : d.contains(w))
                  , m = !ax(h, s);
                p ? c() : m && (c(),
                u())
            }
            ;
            return document.addEventListener("pointermove", y),
            () => document.removeEventListener("pointermove", y)
        }
    }
    , [a, d, s, u, c]),
    E.jsx(Rm, {
        ...e,
        ref: i
    })
}
)
  , [nx,rx] = $s(bm, {
    isInside: !1
})
  , Rm = x.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: i, onPointerDownOutside: s, ...l} = e
      , a = Us(Vr, n)
      , u = Yu(n)
      , {onClose: d} = a;
    return x.useEffect( () => (document.addEventListener(Od, d),
    () => document.removeEventListener(Od, d)), [d]),
    x.useEffect( () => {
        if (a.trigger) {
            const f = c => {
                const v = c.target;
                v != null && v.contains(a.trigger) && d()
            }
            ;
            return window.addEventListener("scroll", f, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", f, {
                capture: !0
            })
        }
    }
    , [a.trigger, d]),
    E.jsx(ju, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: f => f.preventDefault(),
        onDismiss: d,
        children: E.jsxs(Y1, {
            "data-state": a.stateAttribute,
            ...u,
            ...l,
            ref: t,
            style: {
                ...l.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [E.jsx(yh, {
                children: r
            }), E.jsx(nx, {
                scope: n,
                isInside: !0,
                children: E.jsx(i0, {
                    id: a.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
Nm.displayName = Vr;
var _m = "TooltipArrow"
  , ox = x.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Yu(n);
    return rx(_m, n).isInside ? null : E.jsx(G1, {
        ...o,
        ...r,
        ref: t
    })
}
);
ox.displayName = _m;
function ix(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
    case i:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function sx(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function lx(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function ax(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const l = t[i].x
          , a = t[i].y
          , u = t[s].x
          , d = t[s].y;
        a > r != d > r && n < (u - l) * (r - a) / (d - a) + l && (o = !o)
    }
    return o
}
function ux(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    cx(t)
}
function cx(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const i = t[t.length - 1]
              , s = t[t.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const i = n[n.length - 1]
              , s = n[n.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var dx = Tm
  , Om = Nm;
const fx = dx
  , px = x.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => E.jsx(Om, {
    ref: r,
    sideOffset: t,
    className: Jn("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
px.displayName = Om.displayName;
var Bs = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Vs = typeof window > "u" || "Deno"in globalThis;
function ct() {}
function hx(e, t) {
    return typeof e == "function" ? e(t) : e
}
function mx(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function gx(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Ad(e, t) {
    return typeof e == "function" ? e(t) : e
}
function vx(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Md(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: i, queryKey: s, stale: l} = e;
    if (s) {
        if (r) {
            if (t.queryHash !== Gu(s, t.options))
                return !1
        } else if (!Bo(t.queryKey, s))
            return !1
    }
    if (n !== "all") {
        const a = t.isActive();
        if (n === "active" && !a || n === "inactive" && a)
            return !1
    }
    return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state.fetchStatus || i && !i(t))
}
function Ld(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: i} = e;
    if (i) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (Uo(t.options.mutationKey) !== Uo(i))
                return !1
        } else if (!Bo(t.options.mutationKey, i))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function Gu(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Uo)(e)
}
function Uo(e) {
    return JSON.stringify(e, (t, n) => Da(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function Bo(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !Bo(e[n], t[n])) : !1
}
function Am(e, t) {
    if (e === t)
        return e;
    const n = jd(e) && jd(t);
    if (n || Da(e) && Da(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , i = n ? t : Object.keys(t)
          , s = i.length
          , l = n ? [] : {};
        let a = 0;
        for (let u = 0; u < s; u++) {
            const d = n ? u : i[u];
            (!n && r.includes(d) || n) && e[d] === void 0 && t[d] === void 0 ? (l[d] = void 0,
            a++) : (l[d] = Am(e[d], t[d]),
            l[d] === e[d] && e[d] !== void 0 && a++)
        }
        return o === s && a === o ? e : l
    }
    return t
}
function jd(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Da(e) {
    if (!Dd(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!Dd(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Dd(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function yx(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function wx(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Am(e, t) : t
}
function xx(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function Sx(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var Xu = Symbol();
function Mm(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Xu ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var zn, ln, Tr, Kd, Ex = (Kd = class extends Bs {
    constructor() {
        super();
        q(this, zn);
        q(this, ln);
        q(this, Tr);
        W(this, Tr, t => {
            if (!Vs && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        b(this, ln) || this.setEventListener(b(this, Tr))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = b(this, ln)) == null || t.call(this),
        W(this, ln, void 0))
    }
    setEventListener(t) {
        var n;
        W(this, Tr, t),
        (n = b(this, ln)) == null || n.call(this),
        W(this, ln, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        b(this, zn) !== t && (W(this, zn, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof b(this, zn) == "boolean" ? b(this, zn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
zn = new WeakMap,
ln = new WeakMap,
Tr = new WeakMap,
Kd), Lm = new Ex, br, an, Nr, Yd, Cx = (Yd = class extends Bs {
    constructor() {
        super();
        q(this, br, !0);
        q(this, an);
        q(this, Nr);
        W(this, Nr, t => {
            if (!Vs && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        b(this, an) || this.setEventListener(b(this, Nr))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = b(this, an)) == null || t.call(this),
        W(this, an, void 0))
    }
    setEventListener(t) {
        var n;
        W(this, Nr, t),
        (n = b(this, an)) == null || n.call(this),
        W(this, an, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        b(this, br) !== t && (W(this, br, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return b(this, br)
    }
}
,
br = new WeakMap,
an = new WeakMap,
Nr = new WeakMap,
Yd), ms = new Cx;
function kx() {
    let e, t;
    const n = new Promise( (o, i) => {
        e = o,
        t = i
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function Px(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function jm(e) {
    return (e ?? "online") === "online" ? ms.isOnline() : !0
}
var Dm = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function Ol(e) {
    return e instanceof Dm
}
function Im(e) {
    let t = !1, n = 0, r = !1, o;
    const i = kx()
      , s = g => {
        var w;
        r || (c(new Dm(g)),
        (w = e.abort) == null || w.call(e))
    }
      , l = () => {
        t = !0
    }
      , a = () => {
        t = !1
    }
      , u = () => Lm.isFocused() && (e.networkMode === "always" || ms.isOnline()) && e.canRun()
      , d = () => jm(e.networkMode) && e.canRun()
      , f = g => {
        var w;
        r || (r = !0,
        (w = e.onSuccess) == null || w.call(e, g),
        o == null || o(),
        i.resolve(g))
    }
      , c = g => {
        var w;
        r || (r = !0,
        (w = e.onError) == null || w.call(e, g),
        o == null || o(),
        i.reject(g))
    }
      , v = () => new Promise(g => {
        var w;
        o = h => {
            (r || u()) && g(h)
        }
        ,
        (w = e.onPause) == null || w.call(e)
    }
    ).then( () => {
        var g;
        o = void 0,
        r || (g = e.onContinue) == null || g.call(e)
    }
    )
      , y = () => {
        if (r)
            return;
        let g;
        const w = n === 0 ? e.initialPromise : void 0;
        try {
            g = w ?? e.fn()
        } catch (h) {
            g = Promise.reject(h)
        }
        Promise.resolve(g).then(f).catch(h => {
            var P;
            if (r)
                return;
            const p = e.retry ?? (Vs ? 0 : 3)
              , m = e.retryDelay ?? Px
              , S = typeof m == "function" ? m(n, h) : m
              , C = p === !0 || typeof p == "number" && n < p || typeof p == "function" && p(n, h);
            if (t || !C) {
                c(h);
                return
            }
            n++,
            (P = e.onFail) == null || P.call(e, n, h),
            yx(S).then( () => u() ? void 0 : v()).then( () => {
                t ? c(h) : y()
            }
            )
        }
        )
    }
    ;
    return {
        promise: i,
        cancel: s,
        continue: () => (o == null || o(),
        i),
        cancelRetry: l,
        continueRetry: a,
        canStart: d,
        start: () => (d() ? y() : v().then(y),
        i)
    }
}
function Tx() {
    let e = []
      , t = 0
      , n = l => {
        l()
    }
      , r = l => {
        l()
    }
      , o = l => setTimeout(l, 0);
    const i = l => {
        t ? e.push(l) : o( () => {
            n(l)
        }
        )
    }
      , s = () => {
        const l = e;
        e = [],
        l.length && o( () => {
            r( () => {
                l.forEach(a => {
                    n(a)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: l => {
            let a;
            t++;
            try {
                a = l()
            } finally {
                t--,
                t || s()
            }
            return a
        }
        ,
        batchCalls: l => (...a) => {
            i( () => {
                l(...a)
            }
            )
        }
        ,
        schedule: i,
        setNotifyFunction: l => {
            n = l
        }
        ,
        setBatchNotifyFunction: l => {
            r = l
        }
        ,
        setScheduler: l => {
            o = l
        }
    }
}
var Ae = Tx(), Fn, Gd, zm = (Gd = class {
    constructor() {
        q(this, Fn)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        mx(this.gcTime) && W(this, Fn, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (Vs ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        b(this, Fn) && (clearTimeout(b(this, Fn)),
        W(this, Fn, void 0))
    }
}
,
Fn = new WeakMap,
Gd), Rr, _r, et, be, Vo, $n, dt, Lt, Xd, bx = (Xd = class extends zm {
    constructor(t) {
        super();
        q(this, dt);
        q(this, Rr);
        q(this, _r);
        q(this, et);
        q(this, be);
        q(this, Vo);
        q(this, $n);
        W(this, $n, !1),
        W(this, Vo, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        W(this, et, t.cache),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        W(this, Rr, Rx(this.options)),
        this.state = t.state ?? b(this, Rr),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = b(this, be)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...b(this, Vo),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && b(this, et).remove(this)
    }
    setData(t, n) {
        const r = wx(this.state.data, t, this.options);
        return ke(this, dt, Lt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        ke(this, dt, Lt).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = b(this, be)) == null ? void 0 : r.promise;
        return (o = b(this, be)) == null || o.cancel(t),
        n ? n.then(ct).catch(ct) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(b(this, Rr))
    }
    isActive() {
        return this.observers.some(t => vx(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Xu || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStale() {
        return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0
    }
    isStaleByTime(t=0) {
        return this.state.isInvalidated || this.state.data === void 0 || !gx(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = b(this, be)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = b(this, be)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        b(this, et).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (b(this, be) && (b(this, $n) ? b(this, be).cancel({
            revert: !0
        }) : b(this, be).cancelRetry()),
        this.scheduleGc()),
        b(this, et).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || ke(this, dt, Lt).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var a, u, d;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (b(this, be))
                return b(this, be).continueRetry(),
                b(this, be).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const f = this.observers.find(c => c.options.queryFn);
            f && this.setOptions(f.options)
        }
        const r = new AbortController
          , o = f => {
            Object.defineProperty(f, "signal", {
                enumerable: !0,
                get: () => (W(this, $n, !0),
                r.signal)
            })
        }
          , i = () => {
            const f = Mm(this.options, n)
              , c = {
                queryKey: this.queryKey,
                meta: this.meta
            };
            return o(c),
            W(this, $n, !1),
            this.options.persister ? this.options.persister(f, c, this) : f(c)
        }
          , s = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: i
        };
        o(s),
        (a = this.options.behavior) == null || a.onFetch(s, this),
        W(this, _r, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = s.fetchOptions) == null ? void 0 : u.meta)) && ke(this, dt, Lt).call(this, {
            type: "fetch",
            meta: (d = s.fetchOptions) == null ? void 0 : d.meta
        });
        const l = f => {
            var c, v, y, g;
            Ol(f) && f.silent || ke(this, dt, Lt).call(this, {
                type: "error",
                error: f
            }),
            Ol(f) || ((v = (c = b(this, et).config).onError) == null || v.call(c, f, this),
            (g = (y = b(this, et).config).onSettled) == null || g.call(y, this.state.data, f, this)),
            this.scheduleGc()
        }
        ;
        return W(this, be, Im({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: s.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: f => {
                var c, v, y, g;
                if (f === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(f)
                } catch (w) {
                    l(w);
                    return
                }
                (v = (c = b(this, et).config).onSuccess) == null || v.call(c, f, this),
                (g = (y = b(this, et).config).onSettled) == null || g.call(y, f, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (f, c) => {
                ke(this, dt, Lt).call(this, {
                    type: "failed",
                    failureCount: f,
                    error: c
                })
            }
            ,
            onPause: () => {
                ke(this, dt, Lt).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                ke(this, dt, Lt).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: s.options.retry,
            retryDelay: s.options.retryDelay,
            networkMode: s.options.networkMode,
            canRun: () => !0
        })),
        b(this, be).start()
    }
}
,
Rr = new WeakMap,
_r = new WeakMap,
et = new WeakMap,
be = new WeakMap,
Vo = new WeakMap,
$n = new WeakMap,
dt = new WeakSet,
Lt = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...Nx(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return Ol(o) && o.revert && b(this, _r) ? {
                ...b(this, _r),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    Ae.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        b(this, et).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Xd);
function Nx(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: jm(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function Rx(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var kt, qd, _x = (qd = class extends Bs {
    constructor(t={}) {
        super();
        q(this, kt);
        this.config = t,
        W(this, kt, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , i = n.queryHash ?? Gu(o, n);
        let s = this.get(i);
        return s || (s = new bx({
            cache: this,
            queryKey: o,
            queryHash: i,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(s)),
        s
    }
    add(t) {
        b(this, kt).has(t.queryHash) || (b(this, kt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = b(this, kt).get(t.queryHash);
        n && (t.destroy(),
        n === t && b(this, kt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        Ae.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return b(this, kt).get(t)
    }
    getAll() {
        return [...b(this, kt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Md(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => Md(t, r)) : n
    }
    notify(t) {
        Ae.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        Ae.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        Ae.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
kt = new WeakMap,
qd), Pt, _e, Un, Tt, tn, Zd, Ox = (Zd = class extends zm {
    constructor(t) {
        super();
        q(this, Tt);
        q(this, Pt);
        q(this, _e);
        q(this, Un);
        this.mutationId = t.mutationId,
        W(this, _e, t.mutationCache),
        W(this, Pt, []),
        this.state = t.state || Ax(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        b(this, Pt).includes(t) || (b(this, Pt).push(t),
        this.clearGcTimeout(),
        b(this, _e).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        W(this, Pt, b(this, Pt).filter(n => n !== t)),
        this.scheduleGc(),
        b(this, _e).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        b(this, Pt).length || (this.state.status === "pending" ? this.scheduleGc() : b(this, _e).remove(this))
    }
    continue() {
        var t;
        return ((t = b(this, Un)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var o, i, s, l, a, u, d, f, c, v, y, g, w, h, p, m, S, C, P, T;
        W(this, Un, Im({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (N, D) => {
                ke(this, Tt, tn).call(this, {
                    type: "failed",
                    failureCount: N,
                    error: D
                })
            }
            ,
            onPause: () => {
                ke(this, Tt, tn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                ke(this, Tt, tn).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => b(this, _e).canRun(this)
        }));
        const n = this.state.status === "pending"
          , r = !b(this, Un).canStart();
        try {
            if (!n) {
                ke(this, Tt, tn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: r
                }),
                await ((i = (o = b(this, _e).config).onMutate) == null ? void 0 : i.call(o, t, this));
                const D = await ((l = (s = this.options).onMutate) == null ? void 0 : l.call(s, t));
                D !== this.state.context && ke(this, Tt, tn).call(this, {
                    type: "pending",
                    context: D,
                    variables: t,
                    isPaused: r
                })
            }
            const N = await b(this, Un).start();
            return await ((u = (a = b(this, _e).config).onSuccess) == null ? void 0 : u.call(a, N, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null ? void 0 : f.call(d, N, t, this.state.context)),
            await ((v = (c = b(this, _e).config).onSettled) == null ? void 0 : v.call(c, N, null, this.state.variables, this.state.context, this)),
            await ((g = (y = this.options).onSettled) == null ? void 0 : g.call(y, N, null, t, this.state.context)),
            ke(this, Tt, tn).call(this, {
                type: "success",
                data: N
            }),
            N
        } catch (N) {
            try {
                throw await ((h = (w = b(this, _e).config).onError) == null ? void 0 : h.call(w, N, t, this.state.context, this)),
                await ((m = (p = this.options).onError) == null ? void 0 : m.call(p, N, t, this.state.context)),
                await ((C = (S = b(this, _e).config).onSettled) == null ? void 0 : C.call(S, void 0, N, this.state.variables, this.state.context, this)),
                await ((T = (P = this.options).onSettled) == null ? void 0 : T.call(P, void 0, N, t, this.state.context)),
                N
            } finally {
                ke(this, Tt, tn).call(this, {
                    type: "error",
                    error: N
                })
            }
        } finally {
            b(this, _e).runNext(this)
        }
    }
}
,
Pt = new WeakMap,
_e = new WeakMap,
Un = new WeakMap,
Tt = new WeakSet,
tn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    Ae.batch( () => {
        b(this, Pt).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        b(this, _e).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Zd);
function Ax() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var We, Wo, Jd, Mx = (Jd = class extends Bs {
    constructor(t={}) {
        super();
        q(this, We);
        q(this, Wo);
        this.config = t,
        W(this, We, new Map),
        W(this, Wo, Date.now())
    }
    build(t, n, r) {
        const o = new Ox({
            mutationCache: this,
            mutationId: ++ni(this, Wo)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        const n = ki(t)
          , r = b(this, We).get(n) ?? [];
        r.push(t),
        b(this, We).set(n, r),
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        var r;
        const n = ki(t);
        if (b(this, We).has(n)) {
            const o = (r = b(this, We).get(n)) == null ? void 0 : r.filter(i => i !== t);
            o && (o.length === 0 ? b(this, We).delete(n) : b(this, We).set(n, o))
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        var r;
        const n = (r = b(this, We).get(ki(t))) == null ? void 0 : r.find(o => o.state.status === "pending");
        return !n || n === t
    }
    runNext(t) {
        var r;
        const n = (r = b(this, We).get(ki(t))) == null ? void 0 : r.find(o => o !== t && o.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve()
    }
    clear() {
        Ae.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    getAll() {
        return [...b(this, We).values()].flat()
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Ld(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => Ld(t, n))
    }
    notify(t) {
        Ae.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return Ae.batch( () => Promise.all(t.map(n => n.continue().catch(ct))))
    }
}
,
We = new WeakMap,
Wo = new WeakMap,
Jd);
function ki(e) {
    var t;
    return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
}
function Id(e) {
    return {
        onFetch: (t, n) => {
            var d, f, c, v, y;
            const r = t.options
              , o = (c = (f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : f.fetchMore) == null ? void 0 : c.direction
              , i = ((v = t.state.data) == null ? void 0 : v.pages) || []
              , s = ((y = t.state.data) == null ? void 0 : y.pageParams) || [];
            let l = {
                pages: [],
                pageParams: []
            }
              , a = 0;
            const u = async () => {
                let g = !1;
                const w = m => {
                    Object.defineProperty(m, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? g = !0 : t.signal.addEventListener("abort", () => {
                            g = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , h = Mm(t.options, t.fetchOptions)
                  , p = async (m, S, C) => {
                    if (g)
                        return Promise.reject();
                    if (S == null && m.pages.length)
                        return Promise.resolve(m);
                    const P = {
                        queryKey: t.queryKey,
                        pageParam: S,
                        direction: C ? "backward" : "forward",
                        meta: t.options.meta
                    };
                    w(P);
                    const T = await h(P)
                      , {maxPages: N} = t.options
                      , D = C ? Sx : xx;
                    return {
                        pages: D(m.pages, T, N),
                        pageParams: D(m.pageParams, S, N)
                    }
                }
                ;
                if (o && i.length) {
                    const m = o === "backward"
                      , S = m ? Lx : zd
                      , C = {
                        pages: i,
                        pageParams: s
                    }
                      , P = S(r, C);
                    l = await p(C, P, m)
                } else {
                    const m = e ?? i.length;
                    do {
                        const S = a === 0 ? s[0] ?? r.initialPageParam : zd(r, l);
                        if (a > 0 && S == null)
                            break;
                        l = await p(l, S),
                        a++
                    } while (a < m)
                }
                return l
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var g, w;
                return (w = (g = t.options).persister) == null ? void 0 : w.call(g, u, {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function zd(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function Lx(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var de, un, cn, Or, Ar, dn, Mr, Lr, ef, jx = (ef = class {
    constructor(e={}) {
        q(this, de);
        q(this, un);
        q(this, cn);
        q(this, Or);
        q(this, Ar);
        q(this, dn);
        q(this, Mr);
        q(this, Lr);
        W(this, de, e.queryCache || new _x),
        W(this, un, e.mutationCache || new Mx),
        W(this, cn, e.defaultOptions || {}),
        W(this, Or, new Map),
        W(this, Ar, new Map),
        W(this, dn, 0)
    }
    mount() {
        ni(this, dn)._++,
        b(this, dn) === 1 && (W(this, Mr, Lm.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            b(this, de).onFocus())
        }
        )),
        W(this, Lr, ms.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            b(this, de).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        ni(this, dn)._--,
        b(this, dn) === 0 && ((e = b(this, Mr)) == null || e.call(this),
        W(this, Mr, void 0),
        (t = b(this, Lr)) == null || t.call(this),
        W(this, Lr, void 0))
    }
    isFetching(e) {
        return b(this, de).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return b(this, un).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = b(this, de).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0)
            return this.fetchQuery(e);
        {
            const n = this.defaultQueryOptions(e)
              , r = b(this, de).build(this, n);
            return e.revalidateIfStale && r.isStaleByTime(Ad(n.staleTime, r)) && this.prefetchQuery(n),
            Promise.resolve(t)
        }
    }
    getQueriesData(e) {
        return b(this, de).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = b(this, de).get(r.queryHash)
          , i = o == null ? void 0 : o.state.data
          , s = hx(t, i);
        if (s !== void 0)
            return b(this, de).build(this, r).setData(s, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return Ae.batch( () => b(this, de).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = b(this, de).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = b(this, de);
        Ae.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = b(this, de)
          , r = {
            type: "active",
            ...e
        };
        return Ae.batch( () => (n.findAll(e).forEach(o => {
            o.reset()
        }
        ),
        this.refetchQueries(r, t)))
    }
    cancelQueries(e={}, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = Ae.batch( () => b(this, de).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(ct).catch(ct)
    }
    invalidateQueries(e={}, t={}) {
        return Ae.batch( () => {
            if (b(this, de).findAll(e).forEach(r => {
                r.invalidate()
            }
            ),
            e.refetchType === "none")
                return Promise.resolve();
            const n = {
                ...e,
                type: e.refetchType ?? e.type ?? "active"
            };
            return this.refetchQueries(n, t)
        }
        )
    }
    refetchQueries(e={}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0
        }
          , r = Ae.batch( () => b(this, de).findAll(e).filter(o => !o.isDisabled()).map(o => {
            let i = o.fetch(void 0, n);
            return n.throwOnError || (i = i.catch(ct)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : i
        }
        ));
        return Promise.all(r).then(ct)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = b(this, de).build(this, t);
        return n.isStaleByTime(Ad(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(ct).catch(ct)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = Id(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(ct).catch(ct)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = Id(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return ms.isOnline() ? b(this, un).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return b(this, de)
    }
    getMutationCache() {
        return b(this, un)
    }
    getDefaultOptions() {
        return b(this, cn)
    }
    setDefaultOptions(e) {
        W(this, cn, e)
    }
    setQueryDefaults(e, t) {
        b(this, Or).set(Uo(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...b(this, Or).values()];
        let n = {};
        return t.forEach(r => {
            Bo(e, r.queryKey) && (n = {
                ...n,
                ...r.defaultOptions
            })
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        b(this, Ar).set(Uo(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...b(this, Ar).values()];
        let n = {};
        return t.forEach(r => {
            Bo(e, r.mutationKey) && (n = {
                ...n,
                ...r.defaultOptions
            })
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...b(this, cn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = Gu(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.enabled !== !0 && t.queryFn === Xu && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...b(this, cn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        b(this, de).clear(),
        b(this, un).clear()
    }
}
,
de = new WeakMap,
un = new WeakMap,
cn = new WeakMap,
Or = new WeakMap,
Ar = new WeakMap,
dn = new WeakMap,
Mr = new WeakMap,
Lr = new WeakMap,
ef), Dx = x.createContext(void 0), Ix = ({client: e, children: t}) => (x.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
E.jsx(Dx.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function gs() {
    return gs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    gs.apply(this, arguments)
}
var hn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(hn || (hn = {}));
const Fd = "popstate";
function zx(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: i, search: s, hash: l} = r.location;
        return Ia("", {
            pathname: i,
            search: s,
            hash: l
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : $m(o)
    }
    return $x(t, n, null, e)
}
function Ue(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Fm(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function Fx() {
    return Math.random().toString(36).substr(2, 8)
}
function $d(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Ia(e, t, n, r) {
    return n === void 0 && (n = null),
    gs({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Ws(t) : t, {
        state: n,
        key: t && t.key || r || Fx()
    })
}
function $m(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function Ws(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function $x(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: i=!1} = r
      , s = o.history
      , l = hn.Pop
      , a = null
      , u = d();
    u == null && (u = 0,
    s.replaceState(gs({}, s.state, {
        idx: u
    }), ""));
    function d() {
        return (s.state || {
            idx: null
        }).idx
    }
    function f() {
        l = hn.Pop;
        let w = d()
          , h = w == null ? null : w - u;
        u = w,
        a && a({
            action: l,
            location: g.location,
            delta: h
        })
    }
    function c(w, h) {
        l = hn.Push;
        let p = Ia(g.location, w, h);
        u = d() + 1;
        let m = $d(p, u)
          , S = g.createHref(p);
        try {
            s.pushState(m, "", S)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError")
                throw C;
            o.location.assign(S)
        }
        i && a && a({
            action: l,
            location: g.location,
            delta: 1
        })
    }
    function v(w, h) {
        l = hn.Replace;
        let p = Ia(g.location, w, h);
        u = d();
        let m = $d(p, u)
          , S = g.createHref(p);
        s.replaceState(m, "", S),
        i && a && a({
            action: l,
            location: g.location,
            delta: 0
        })
    }
    function y(w) {
        let h = o.location.origin !== "null" ? o.location.origin : o.location.href
          , p = typeof w == "string" ? w : $m(w);
        return p = p.replace(/ $/, "%20"),
        Ue(h, "No window.location.(origin|href) available to create URL for href: " + p),
        new URL(p,h)
    }
    let g = {
        get action() {
            return l
        },
        get location() {
            return e(o, s)
        },
        listen(w) {
            if (a)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(Fd, f),
            a = w,
            () => {
                o.removeEventListener(Fd, f),
                a = null
            }
        },
        createHref(w) {
            return t(o, w)
        },
        createURL: y,
        encodeLocation(w) {
            let h = y(w);
            return {
                pathname: h.pathname,
                search: h.search,
                hash: h.hash
            }
        },
        push: c,
        replace: v,
        go(w) {
            return s.go(w)
        }
    };
    return g
}
var Ud;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(Ud || (Ud = {}));
function Ux(e, t, n) {
    return n === void 0 && (n = "/"),
    Bx(e, t, n, !1)
}
function Bx(e, t, n, r) {
    let o = typeof t == "string" ? Ws(t) : t
      , i = Vm(o.pathname || "/", n);
    if (i == null)
        return null;
    let s = Um(e);
    Vx(s);
    let l = null;
    for (let a = 0; l == null && a < s.length; ++a) {
        let u = eS(i);
        l = Zx(s[a], u, r)
    }
    return l
}
function Um(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (i, s, l) => {
        let a = {
            relativePath: l === void 0 ? i.path || "" : l,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        a.relativePath.startsWith("/") && (Ue(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        a.relativePath = a.relativePath.slice(r.length));
        let u = Pr([r, a.relativePath])
          , d = n.concat(a);
        i.children && i.children.length > 0 && (Ue(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Um(i.children, t, d, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: Xx(u, i.index),
            routesMeta: d
        })
    }
    ;
    return e.forEach( (i, s) => {
        var l;
        if (i.path === "" || !((l = i.path) != null && l.includes("?")))
            o(i, s);
        else
            for (let a of Bm(i.path))
                o(i, s, a)
    }
    ),
    t
}
function Bm(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [i, ""] : [i];
    let s = Bm(r.join("/"))
      , l = [];
    return l.push(...s.map(a => a === "" ? i : [i, a].join("/"))),
    o && l.push(...s),
    l.map(a => e.startsWith("/") && a === "" ? "/" : a)
}
function Vx(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : qx(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const Wx = /^:[\w-]+$/
  , Hx = 3
  , Qx = 2
  , Kx = 1
  , Yx = 10
  , Gx = -2
  , Bd = e => e === "*";
function Xx(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Bd) && (r += Gx),
    t && (r += Qx),
    n.filter(o => !Bd(o)).reduce( (o, i) => o + (Wx.test(i) ? Hx : i === "" ? Kx : Yx), r)
}
function qx(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function Zx(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , i = "/"
      , s = [];
    for (let l = 0; l < r.length; ++l) {
        let a = r[l]
          , u = l === r.length - 1
          , d = i === "/" ? t : t.slice(i.length) || "/"
          , f = Vd({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: u
        }, d)
          , c = a.route;
        if (!f && u && n && !r[r.length - 1].route.index && (f = Vd({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: !1
        }, d)),
        !f)
            return null;
        Object.assign(o, f.params),
        s.push({
            params: o,
            pathname: Pr([i, f.pathname]),
            pathnameBase: tS(Pr([i, f.pathnameBase])),
            route: c
        }),
        f.pathnameBase !== "/" && (i = Pr([i, f.pathnameBase]))
    }
    return s
}
function Vd(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = Jx(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let i = o[0]
      , s = i.replace(/(.)\/+$/, "$1")
      , l = o.slice(1);
    return {
        params: r.reduce( (u, d, f) => {
            let {paramName: c, isOptional: v} = d;
            if (c === "*") {
                let g = l[f] || "";
                s = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1")
            }
            const y = l[f];
            return v && !y ? u[c] = void 0 : u[c] = (y || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}
function Jx(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Fm(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, l, a) => (r.push({
        paramName: l,
        isOptional: a != null
    }),
    a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function eS(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Fm(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function Vm(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const Pr = e => e.join("/").replace(/\/\/+/g, "/")
  , tS = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function nS(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Wm = ["post", "put", "patch", "delete"];
new Set(Wm);
const rS = ["get", ...Wm];
new Set(rS);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function vs() {
    return vs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    vs.apply(this, arguments)
}
const oS = x.createContext(null)
  , iS = x.createContext(null)
  , Hm = x.createContext(null)
  , Hs = x.createContext(null)
  , Qs = x.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Qm = x.createContext(null);
function qu() {
    return x.useContext(Hs) != null
}
function Km() {
    return qu() || Ue(!1),
    x.useContext(Hs).location
}
function sS(e, t) {
    return lS(e, t)
}
function lS(e, t, n, r) {
    qu() || Ue(!1);
    let {navigator: o} = x.useContext(Hm)
      , {matches: i} = x.useContext(Qs)
      , s = i[i.length - 1]
      , l = s ? s.params : {};
    s && s.pathname;
    let a = s ? s.pathnameBase : "/";
    s && s.route;
    let u = Km(), d;
    if (t) {
        var f;
        let w = typeof t == "string" ? Ws(t) : t;
        a === "/" || (f = w.pathname) != null && f.startsWith(a) || Ue(!1),
        d = w
    } else
        d = u;
    let c = d.pathname || "/"
      , v = c;
    if (a !== "/") {
        let w = a.replace(/^\//, "").split("/");
        v = "/" + c.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let y = Ux(e, {
        pathname: v
    })
      , g = fS(y && y.map(w => Object.assign({}, w, {
        params: Object.assign({}, l, w.params),
        pathname: Pr([a, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? a : Pr([a, o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), i, n, r);
    return t && g ? x.createElement(Hs.Provider, {
        value: {
            location: vs({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: hn.Pop
        }
    }, g) : g
}
function aS() {
    let e = gS()
      , t = nS(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return x.createElement(x.Fragment, null, x.createElement("h2", null, "Unexpected Application Error!"), x.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? x.createElement("pre", {
        style: o
    }, n) : null, null)
}
const uS = x.createElement(aS, null);
class cS extends x.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? x.createElement(Qs.Provider, {
            value: this.props.routeContext
        }, x.createElement(Qm.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function dS(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = x.useContext(oS);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(Qs.Provider, {
        value: t
    }, r)
}
function fS(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var i;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let s = e
      , l = (o = n) == null ? void 0 : o.errors;
    if (l != null) {
        let d = s.findIndex(f => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0);
        d >= 0 || Ue(!1),
        s = s.slice(0, Math.min(s.length, d + 1))
    }
    let a = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < s.length; d++) {
            let f = s[d];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d),
            f.route.id) {
                let {loaderData: c, errors: v} = n
                  , y = f.route.loader && c[f.route.id] === void 0 && (!v || v[f.route.id] === void 0);
                if (f.route.lazy || y) {
                    a = !0,
                    u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight( (d, f, c) => {
        let v, y = !1, g = null, w = null;
        n && (v = l && f.route.id ? l[f.route.id] : void 0,
        g = f.route.errorElement || uS,
        a && (u < 0 && c === 0 ? (y = !0,
        w = null) : u === c && (y = !0,
        w = f.route.hydrateFallbackElement || null)));
        let h = t.concat(s.slice(0, c + 1))
          , p = () => {
            let m;
            return v ? m = g : y ? m = w : f.route.Component ? m = x.createElement(f.route.Component, null) : f.route.element ? m = f.route.element : m = d,
            x.createElement(dS, {
                match: f,
                routeContext: {
                    outlet: d,
                    matches: h,
                    isDataRoute: n != null
                },
                children: m
            })
        }
        ;
        return n && (f.route.ErrorBoundary || f.route.errorElement || c === 0) ? x.createElement(cS, {
            location: n.location,
            revalidation: n.revalidation,
            component: g,
            error: v,
            children: p(),
            routeContext: {
                outlet: null,
                matches: h,
                isDataRoute: !0
            }
        }) : p()
    }
    , null)
}
var za = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(za || {});
function pS(e) {
    let t = x.useContext(iS);
    return t || Ue(!1),
    t
}
function hS(e) {
    let t = x.useContext(Qs);
    return t || Ue(!1),
    t
}
function mS(e) {
    let t = hS()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || Ue(!1),
    n.route.id
}
function gS() {
    var e;
    let t = x.useContext(Qm)
      , n = pS(za.UseRouteError)
      , r = mS(za.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function Fa(e) {
    Ue(!1)
}
function vS(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=hn.Pop, navigator: i, static: s=!1, future: l} = e;
    qu() && Ue(!1);
    let a = t.replace(/^\/*/, "/")
      , u = x.useMemo( () => ({
        basename: a,
        navigator: i,
        static: s,
        future: vs({
            v7_relativeSplatPath: !1
        }, l)
    }), [a, l, i, s]);
    typeof r == "string" && (r = Ws(r));
    let {pathname: d="/", search: f="", hash: c="", state: v=null, key: y="default"} = r
      , g = x.useMemo( () => {
        let w = Vm(d, a);
        return w == null ? null : {
            location: {
                pathname: w,
                search: f,
                hash: c,
                state: v,
                key: y
            },
            navigationType: o
        }
    }
    , [a, d, f, c, v, y, o]);
    return g == null ? null : x.createElement(Hm.Provider, {
        value: u
    }, x.createElement(Hs.Provider, {
        children: n,
        value: g
    }))
}
function yS(e) {
    let {children: t, location: n} = e;
    return sS($a(t), n)
}
new Promise( () => {}
);
function $a(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return x.Children.forEach(e, (r, o) => {
        if (!x.isValidElement(r))
            return;
        let i = [...t, o];
        if (r.type === x.Fragment) {
            n.push.apply(n, $a(r.props.children, i));
            return
        }
        r.type !== Fa && Ue(!1),
        !r.props.index || !r.props.children || Ue(!1);
        let s = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = $a(r.props.children, i)),
        n.push(s)
    }
    ),
    n
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const wS = "6";
try {
    window.__reactRouterVersion = wS
} catch {}
const xS = "startTransition"
  , Wd = vg[xS];
function SS(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , i = x.useRef();
    i.current == null && (i.current = zx({
        window: o,
        v5Compat: !0
    }));
    let s = i.current
      , [l,a] = x.useState({
        action: s.action,
        location: s.location
    })
      , {v7_startTransition: u} = r || {}
      , d = x.useCallback(f => {
        u && Wd ? Wd( () => a(f)) : a(f)
    }
    , [a, u]);
    return x.useLayoutEffect( () => s.listen(d), [s, d]),
    x.createElement(vS, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: s,
        future: r
    })
}
var Hd;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(Hd || (Hd = {}));
var Qd;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Qd || (Qd = {}));
const ES = () => {
    const [e,t] = x.useState(!1);
    x.useEffect( () => {
        const i = () => {
            Nl.error("You're offline. Some features may not work properly.")
        }
          , s = () => {
            Nl.success("You're back online!")
        }
        ;
        return window.addEventListener("offline", i),
        window.addEventListener("online", s),
        () => {
            window.removeEventListener("offline", i),
            window.removeEventListener("online", s)
        }
    }
    , []);
    const n = i => {
        i.preventDefault(),
        Nl.success("✅ Successfully Submitted!"),
        i.target.reset()
    }
      , r = i => {
        var s;
        (s = document.getElementById(i)) == null || s.scrollIntoView({
            behavior: "smooth"
        }),
        t(!1)
    }
      , o = [{
        name: "Home",
        id: "home"
    }, {
        name: "About",
        id: "about"
    }, {
        name: "Services",
        id: "services"
    }, {
        name: "Contact",
        id: "contact"
    }, {
        name: "Tools",
        href: "https://digiforgedynamics.github.io/Explore-more/"
    }];
    return E.jsxs("div", {
        className: "min-h-screen bg-gray-900 text-white",
        children: [E.jsxs("header", {
            className: "sticky top-0 z-50 bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg",
            children: [E.jsx("div", {
                className: "container mx-auto px-4 py-4",
                children: E.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [E.jsxs("div", {
                        className: "flex items-center space-x-3",
                        children: [E.jsx("img", {
                            src: "https://i.ibb.co/xqr0h65f/cropped-circle-image-Picsart-Ai-Image-Enhancer.png",
                            alt: "DigiforgeDynamics Logo",
                            className: "h-10 w-10 object-contain"
                        }), E.jsx("h1", {
                            className: "text-xl font-bold text-white",
                            children: "DigiforgeDynamics"
                        })]
                    }), E.jsx("nav", {
                        className: "hidden md:flex space-x-8",
                        children: o.map(i => E.jsx("button", {
                            onClick: () => i.href ? window.open(i.href, "_blank") : r(i.id),
                            className: "text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium",
                            children: i.name
                        }, i.name))
                    }), E.jsx("button", {
                        onClick: () => t(!e),
                        className: "md:hidden p-2 text-gray-300 hover:text-emerald-400 transition-colors",
                        id: "menu-btn",
                        children: E.jsx(N0, {
                            className: "h-6 w-6"
                        })
                    })]
                })
            }), E.jsx("div", {
                className: `fixed inset-y-0 right-0 w-64 bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${e ? "translate-x-0" : "translate-x-full"} md:hidden`,
                children: E.jsxs("div", {
                    className: "p-6",
                    children: [E.jsxs("div", {
                        className: "flex items-center justify-between mb-8",
                        children: [E.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [E.jsx("img", {
                                src: "https://i.ibb.co/xqr0h65f/cropped-circle-image-Picsart-Ai-Image-Enhancer.png",
                                alt: "DigiforgeDynamics Logo",
                                className: "h-8 w-8 object-contain"
                            }), E.jsx("span", {
                                className: "text-lg font-bold",
                                children: "DigiforgeDynamics"
                            })]
                        }), E.jsx("button", {
                            onClick: () => t(!1),
                            className: "text-gray-400 hover:text-white transition-colors",
                            children: E.jsx(Yh, {
                                className: "h-6 w-6"
                            })
                        })]
                    }), E.jsx("nav", {
                        className: "space-y-4",
                        children: o.map(i => E.jsx("button", {
                            onClick: () => i.href ? window.open(i.href, "_blank") : r(i.id),
                            className: "block w-full text-left text-gray-300 hover:text-emerald-400 transition-colors duration-300 py-2 font-medium",
                            children: i.name
                        }, i.name))
                    })]
                })
            }), e && E.jsx("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden",
                onClick: () => t(!1)
            })]
        }), E.jsx("section", {
            id: "home",
            className: "h-screen bg-gradient-to-b from-gray-900 to-gray-950 flex items-center justify-center",
            children: E.jsxs("div", {
                className: "text-center px-4",
                children: [E.jsx("h1", {
                    className: "text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent",
                    children: "Unleash Your Creativity"
                }), E.jsx("p", {
                    className: "text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto",
                    children: "Empowering DIYers with premium tools, tutorials, and inspiration"
                }), E.jsx("a", {
                    href: "https://digiforgedynamics.github.io/Explore-more/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg",
                    children: "Explore Now"
                })]
            })
        }), E.jsx("section", {
            id: "about",
            className: "py-20 bg-gray-900",
            children: E.jsx("div", {
                className: "container mx-auto px-4",
                children: E.jsxs("div", {
                    className: "max-w-4xl mx-auto text-center",
                    children: [E.jsx("h2", {
                        className: "text-4xl font-bold mb-8 text-emerald-400",
                        children: "About Our Mission"
                    }), E.jsx("p", {
                        className: "text-lg text-gray-300 leading-relaxed",
                        children: "At DigiforgeDynamics, we believe in democratizing the DIY experience. Our mission is to provide every creator, maker, and innovator with the resources, guidance, and tools they need to bring their visions to life. Whether you're a weekend warrior or a seasoned craftsperson, we're here to support your journey from concept to creation."
                    })]
                })
            })
        }), E.jsx("section", {
            id: "services",
            className: "py-20 bg-gray-800",
            children: E.jsxs("div", {
                className: "container mx-auto px-4",
                children: [E.jsx("h2", {
                    className: "text-4xl font-bold text-center mb-12 text-emerald-400",
                    children: "Our Services"
                }), E.jsxs("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    children: [E.jsxs("div", {
                        className: "bg-gray-900 rounded-lg p-8 border border-gray-700 hover:border-emerald-400 transition-colors duration-300",
                        children: [E.jsx("h3", {
                            className: "text-2xl font-bold mb-4 text-white",
                            children: "Mobile DIY Tools App"
                        }), E.jsx("p", {
                            className: "text-gray-300 leading-relaxed",
                            children: "The Mobile DIY Tools App is an offline-capable Progressive Web App (PWA) designed to offer essential digital tools for makers, students, and engineers — directly from their mobile devices."
                        })]
                    }), E.jsxs("div", {
                        className: "bg-gray-900 rounded-lg p-8 border border-gray-700 hover:border-emerald-400 transition-colors duration-300",
                        children: [E.jsx("h3", {
                            className: "text-2xl font-bold mb-4 text-white",
                            children: "Custom DIY Guides"
                        }), E.jsx("p", {
                            className: "text-gray-300 leading-relaxed",
                            children: "Step-by-step tutorials and comprehensive guides tailored to your skill level. Learn new techniques and master complex projects with our expert instruction."
                        })]
                    }), E.jsxs("div", {
                        className: "bg-gray-900 rounded-lg p-8 border border-gray-700 hover:border-emerald-400 transition-colors duration-300",
                        children: [E.jsx("h3", {
                            className: "text-2xl font-bold mb-4 text-white",
                            children: "Website Creation"
                        }), E.jsx("p", {
                            className: "text-gray-300 leading-relaxed",
                            children: "DigiforgeDynamics offers professional website creation services including static sites, dynamic portals, and progressive web apps. We use modern tech like Tailwind, Firebase, and MySQL to deliver responsive, fast, and secure solutions. Ideal for businesses, educators, and creators seeking tailored digital platforms."
                        })]
                    })]
                })]
            })
        }), E.jsx("section", {
            id: "contact",
            className: "py-20 bg-gray-900",
            children: E.jsx("div", {
                className: "container mx-auto px-4",
                children: E.jsxs("div", {
                    className: "max-w-2xl mx-auto",
                    children: [E.jsx("h2", {
                        className: "text-4xl font-bold text-center mb-12 text-emerald-400",
                        children: "Get In Touch"
                    }), E.jsxs("form", {
                        onSubmit: n,
                        className: "space-y-6",
                        children: [E.jsx("div", {
                            children: E.jsx("input", {
                                type: "text",
                                name: "name",
                                placeholder: "Your Name",
                                required: !0,
                                className: "w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none transition-colors"
                            })
                        }), E.jsx("div", {
                            children: E.jsx("input", {
                                type: "email",
                                name: "email",
                                placeholder: "Your Email",
                                required: !0,
                                className: "w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none transition-colors"
                            })
                        }), E.jsx("div", {
                            children: E.jsx("textarea", {
                                name: "message",
                                placeholder: "Your Message",
                                rows: 6,
                                required: !0,
                                className: "w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none transition-colors resize-vertical"
                            })
                        }), E.jsx("button", {
                            type: "submit",
                            className: "w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300",
                            children: "Send Message"
                        })]
                    })]
                })
            })
        }), E.jsx("footer", {
            className: "bg-gray-950 py-8",
            children: E.jsx("div", {
                className: "container mx-auto px-4 text-center",
                children: E.jsx("p", {
                    className: "text-gray-500",
                    children: "© 2024 DigiforgeDynamics. All rights reserved."
                })
            })
        })]
    })
}
  , CS = () => {
    const e = Km();
    return x.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    E.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-100",
        children: E.jsxs("div", {
            className: "text-center",
            children: [E.jsx("h1", {
                className: "text-4xl font-bold mb-4",
                children: "404"
            }), E.jsx("p", {
                className: "text-xl text-gray-600 mb-4",
                children: "Oops! Page not found"
            }), E.jsx("a", {
                href: "/",
                className: "text-blue-500 hover:text-blue-700 underline",
                children: "Return to Home"
            })]
        })
    })
}
  , kS = new jx
  , PS = () => E.jsx(Ix, {
    client: kS,
    children: E.jsxs(fx, {
        children: [E.jsx(cw, {}), E.jsx(Fw, {}), E.jsx(SS, {
            children: E.jsxs(yS, {
                children: [E.jsx(Fa, {
                    path: "/",
                    element: E.jsx(ES, {})
                }), E.jsx(Fa, {
                    path: "*",
                    element: E.jsx(CS, {})
                })]
            })
        })]
    })
});
gh(document.getElementById("root")).render(E.jsx(PS, {}));
