(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".hello-ping[data-v-c72bcc8d]{font-size:24px;font-weight:700;color:#e66}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
function nt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
function to(e) {
  if (M(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = se(o) ? cs(o) : to(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else {
    if (se(e))
      return e;
    if (z(e))
      return e;
  }
}
const rs = /;(?![^(]*\))/g, ss = /:([^]+)/, is = /\/\*.*?\*\//gs;
function cs(e) {
  const t = {};
  return e.replace(is, "").split(rs).forEach((n) => {
    if (n) {
      const o = n.split(ss);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function no(e) {
  let t = "";
  if (se(e))
    t = e;
  else if (M(e))
    for (let n = 0; n < e.length; n++) {
      const o = no(e[n]);
      o && (t += o + " ");
    }
  else if (z(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ls = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", us = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", fs = /* @__PURE__ */ nt(ls), as = /* @__PURE__ */ nt(us), ps = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ds = /* @__PURE__ */ nt(ps);
function or(e) {
  return !!e || e === "";
}
const q = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, wt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], ue = () => {
}, rr = () => !1, hs = /^on[^a-z]/, Bt = (e) => hs.test(e), cn = (e) => e.startsWith("onUpdate:"), re = Object.assign, oo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ms = Object.prototype.hasOwnProperty, H = (e, t) => ms.call(e, t), M = Array.isArray, xt = (e) => hn(e) === "[object Map]", gs = (e) => hn(e) === "[object Set]", A = (e) => typeof e == "function", se = (e) => typeof e == "string", ro = (e) => typeof e == "symbol", z = (e) => e !== null && typeof e == "object", so = (e) => z(e) && A(e.then) && A(e.catch), _s = Object.prototype.toString, hn = (e) => _s.call(e), io = (e) => hn(e).slice(8, -1), Es = (e) => hn(e) === "[object Object]", co = (e) => se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Qt = /* @__PURE__ */ nt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), vs = /* @__PURE__ */ nt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), mn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, bs = /-(\w)/g, Vt = mn((e) => e.replace(bs, (t, n) => n ? n.toUpperCase() : "")), Ns = /\B([A-Z])/g, Ge = mn((e) => e.replace(Ns, "-$1").toLowerCase()), gn = mn((e) => e.charAt(0).toUpperCase() + e.slice(1)), it = mn((e) => e ? `on${gn(e)}` : ""), ln = (e, t) => !Object.is(e, t), $t = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, un = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, ys = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Vo;
const sr = () => Vo || (Vo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function An(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let De;
class Os {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = De, !t && De && (this.index = (De.scopes || (De.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = De;
      try {
        return De = this, t();
      } finally {
        De = n;
      }
    } else
      process.env.NODE_ENV !== "production" && An("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    De = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    De = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function ws(e, t = De) {
  t && t.active && t.effects.push(e);
}
function xs() {
  return De;
}
const Ft = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, ir = (e) => (e.w & et) > 0, cr = (e) => (e.n & et) > 0, Ds = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= et;
}, Vs = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      ir(r) && !cr(r) ? r.delete(e) : t[n++] = r, r.w &= ~et, r.n &= ~et;
    }
    t.length = n;
  }
}, Rn = /* @__PURE__ */ new WeakMap();
let Mt = 0, et = 1;
const Fn = 30;
let me;
const ut = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Sn = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class lo {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, ws(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = me, n = Qe;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = me, me = this, Qe = !0, et = 1 << ++Mt, Mt <= Fn ? Ds(this) : Co(this), this.fn();
    } finally {
      Mt <= Fn && Vs(this), et = 1 << --Mt, me = this.parent, Qe = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    me === this ? this.deferStop = !0 : this.active && (Co(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Co(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Qe = !0;
const lr = [];
function _t() {
  lr.push(Qe), Qe = !1;
}
function Et() {
  const e = lr.pop();
  Qe = e === void 0 ? !0 : e;
}
function ge(e, t, n) {
  if (Qe && me) {
    let o = Rn.get(e);
    o || Rn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Ft());
    const s = process.env.NODE_ENV !== "production" ? { effect: me, target: e, type: t, key: n } : void 0;
    Hn(r, s);
  }
}
function Hn(e, t) {
  let n = !1;
  Mt <= Fn ? cr(e) || (e.n |= et, n = !ir(e)) : n = !e.has(me), n && (e.add(me), me.deps.push(e), process.env.NODE_ENV !== "production" && me.onTrack && me.onTrack(Object.assign({ effect: me }, t)));
}
function qe(e, t, n, o, r, s) {
  const c = Rn.get(e);
  if (!c)
    return;
  let l = [];
  if (t === "clear")
    l = [...c.values()];
  else if (n === "length" && M(e)) {
    const p = Number(o);
    c.forEach((m, a) => {
      (a === "length" || a >= p) && l.push(m);
    });
  } else
    switch (n !== void 0 && l.push(c.get(n)), t) {
      case "add":
        M(e) ? co(n) && l.push(c.get("length")) : (l.push(c.get(ut)), xt(e) && l.push(c.get(Sn)));
        break;
      case "delete":
        M(e) || (l.push(c.get(ut)), xt(e) && l.push(c.get(Sn)));
        break;
      case "set":
        xt(e) && l.push(c.get(ut));
        break;
    }
  const f = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (l.length === 1)
    l[0] && (process.env.NODE_ENV !== "production" ? Nt(l[0], f) : Nt(l[0]));
  else {
    const p = [];
    for (const m of l)
      m && p.push(...m);
    process.env.NODE_ENV !== "production" ? Nt(Ft(p), f) : Nt(Ft(p));
  }
}
function Nt(e, t) {
  const n = M(e) ? e : [...e];
  for (const o of n)
    o.computed && To(o, t);
  for (const o of n)
    o.computed || To(o, t);
}
function To(e, t) {
  (e !== me || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(re({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const Cs = /* @__PURE__ */ nt("__proto__,__v_isRef,__isVue"), ur = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ro)
), Ts = /* @__PURE__ */ _n(), $s = /* @__PURE__ */ _n(!1, !0), Is = /* @__PURE__ */ _n(!0), Ps = /* @__PURE__ */ _n(!0, !0), $o = /* @__PURE__ */ Ms();
function Ms() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = S(this);
      for (let s = 0, c = this.length; s < c; s++)
        ge(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(S)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      _t();
      const o = S(this)[t].apply(this, n);
      return Et(), o;
    };
  }), e;
}
function js(e) {
  const t = S(this);
  return ge(t, "has", e), t.hasOwnProperty(e);
}
function _n(e = !1, t = !1) {
  return function(o, r, s) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && s === (e ? t ? _r : gr : t ? mr : hr).get(o))
      return o;
    const c = M(o);
    if (!e) {
      if (c && H($o, r))
        return Reflect.get($o, r, s);
      if (r === "hasOwnProperty")
        return js;
    }
    const l = Reflect.get(o, r, s);
    return (ro(r) ? ur.has(r) : Cs(r)) || (e || ge(o, "get", r), t) ? l : le(l) ? c && co(r) ? l : l.value : z(l) ? e ? Er(l) : fo(l) : l;
  };
}
const As = /* @__PURE__ */ fr(), Rs = /* @__PURE__ */ fr(!0);
function fr(e = !1) {
  return function(n, o, r, s) {
    let c = n[o];
    if (mt(c) && le(c) && !le(r))
      return !1;
    if (!e && (!Ln(r) && !mt(r) && (c = S(c), r = S(r)), !M(n) && le(c) && !le(r)))
      return c.value = r, !0;
    const l = M(n) && co(o) ? Number(o) < n.length : H(n, o), f = Reflect.set(n, o, r, s);
    return n === S(s) && (l ? ln(r, c) && qe(n, "set", o, r, c) : qe(n, "add", o, r)), f;
  };
}
function Fs(e, t) {
  const n = H(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && qe(e, "delete", t, void 0, o), r;
}
function Ss(e, t) {
  const n = Reflect.has(e, t);
  return (!ro(t) || !ur.has(t)) && ge(e, "has", t), n;
}
function Hs(e) {
  return ge(e, "iterate", M(e) ? "length" : ut), Reflect.ownKeys(e);
}
const ar = {
  get: Ts,
  set: As,
  deleteProperty: Fs,
  has: Ss,
  ownKeys: Hs
}, pr = {
  get: Is,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && An(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && An(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, Ls = /* @__PURE__ */ re({}, ar, {
  get: $s,
  set: Rs
}), Us = /* @__PURE__ */ re({}, pr, {
  get: Ps
}), uo = (e) => e, En = (e) => Reflect.getPrototypeOf(e);
function qt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = S(e), s = S(t);
  n || (t !== s && ge(r, "get", t), ge(r, "get", s));
  const { has: c } = En(r), l = o ? uo : n ? po : ao;
  if (c.call(r, t))
    return l(e.get(t));
  if (c.call(r, s))
    return l(e.get(s));
  e !== r && e.get(t);
}
function zt(e, t = !1) {
  const n = this.__v_raw, o = S(n), r = S(e);
  return t || (e !== r && ge(o, "has", e), ge(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Jt(e, t = !1) {
  return e = e.__v_raw, !t && ge(S(e), "iterate", ut), Reflect.get(e, "size", e);
}
function Io(e) {
  e = S(e);
  const t = S(this);
  return En(t).has.call(t, e) || (t.add(e), qe(t, "add", e, e)), this;
}
function Po(e, t) {
  t = S(t);
  const n = S(this), { has: o, get: r } = En(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && dr(n, o, e) : (e = S(e), s = o.call(n, e));
  const c = r.call(n, e);
  return n.set(e, t), s ? ln(t, c) && qe(n, "set", e, t, c) : qe(n, "add", e, t), this;
}
function Mo(e) {
  const t = S(this), { has: n, get: o } = En(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && dr(t, n, e) : (e = S(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, c = t.delete(e);
  return r && qe(t, "delete", e, void 0, s), c;
}
function jo() {
  const e = S(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? xt(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && qe(e, "clear", void 0, void 0, n), o;
}
function Yt(e, t) {
  return function(o, r) {
    const s = this, c = s.__v_raw, l = S(c), f = t ? uo : e ? po : ao;
    return !e && ge(l, "iterate", ut), c.forEach((p, m) => o.call(r, f(p), f(m), s));
  };
}
function Zt(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = S(r), c = xt(s), l = e === "entries" || e === Symbol.iterator && c, f = e === "keys" && c, p = r[e](...o), m = n ? uo : t ? po : ao;
    return !t && ge(s, "iterate", f ? Sn : ut), {
      // iterator protocol
      next() {
        const { value: a, done: E } = p.next();
        return E ? { value: a, done: E } : {
          value: l ? [m(a[0]), m(a[1])] : m(a),
          done: E
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Je(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${gn(e)} operation ${n}failed: target is readonly.`, S(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function ks() {
  const e = {
    get(s) {
      return qt(this, s);
    },
    get size() {
      return Jt(this);
    },
    has: zt,
    add: Io,
    set: Po,
    delete: Mo,
    clear: jo,
    forEach: Yt(!1, !1)
  }, t = {
    get(s) {
      return qt(this, s, !1, !0);
    },
    get size() {
      return Jt(this);
    },
    has: zt,
    add: Io,
    set: Po,
    delete: Mo,
    clear: jo,
    forEach: Yt(!1, !0)
  }, n = {
    get(s) {
      return qt(this, s, !0);
    },
    get size() {
      return Jt(this, !0);
    },
    has(s) {
      return zt.call(this, s, !0);
    },
    add: Je(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Je(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Je(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Je(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Yt(!0, !1)
  }, o = {
    get(s) {
      return qt(this, s, !0, !0);
    },
    get size() {
      return Jt(this, !0);
    },
    has(s) {
      return zt.call(this, s, !0);
    },
    add: Je(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Je(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Je(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Je(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Yt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = Zt(s, !1, !1), n[s] = Zt(s, !0, !1), t[s] = Zt(s, !1, !0), o[s] = Zt(s, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [Bs, Ks, Ws, qs] = /* @__PURE__ */ ks();
function vn(e, t) {
  const n = t ? e ? qs : Ws : e ? Ks : Bs;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(H(n, r) && r in o ? n : o, r, s);
}
const zs = {
  get: /* @__PURE__ */ vn(!1, !1)
}, Js = {
  get: /* @__PURE__ */ vn(!1, !0)
}, Ys = {
  get: /* @__PURE__ */ vn(!0, !1)
}, Zs = {
  get: /* @__PURE__ */ vn(!0, !0)
};
function dr(e, t, n) {
  const o = S(n);
  if (o !== n && t.call(e, o)) {
    const r = io(e);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const hr = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new WeakMap(), gr = /* @__PURE__ */ new WeakMap(), _r = /* @__PURE__ */ new WeakMap();
function Xs(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Qs(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Xs(io(e));
}
function fo(e) {
  return mt(e) ? e : bn(e, !1, ar, zs, hr);
}
function Gs(e) {
  return bn(e, !1, Ls, Js, mr);
}
function Er(e) {
  return bn(e, !0, pr, Ys, gr);
}
function yt(e) {
  return bn(e, !0, Us, Zs, _r);
}
function bn(e, t, n, o, r) {
  if (!z(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const c = Qs(e);
  if (c === 0)
    return e;
  const l = new Proxy(e, c === 2 ? o : n);
  return r.set(e, l), l;
}
function ft(e) {
  return mt(e) ? ft(e.__v_raw) : !!(e && e.__v_isReactive);
}
function mt(e) {
  return !!(e && e.__v_isReadonly);
}
function Ln(e) {
  return !!(e && e.__v_isShallow);
}
function Un(e) {
  return ft(e) || mt(e);
}
function S(e) {
  const t = e && e.__v_raw;
  return t ? S(t) : e;
}
function vr(e) {
  return un(e, "__v_skip", !0), e;
}
const ao = (e) => z(e) ? fo(e) : e, po = (e) => z(e) ? Er(e) : e;
function ei(e) {
  Qe && me && (e = S(e), process.env.NODE_ENV !== "production" ? Hn(e.dep || (e.dep = Ft()), {
    target: e,
    type: "get",
    key: "value"
  }) : Hn(e.dep || (e.dep = Ft())));
}
function ti(e, t) {
  e = S(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? Nt(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : Nt(n));
}
function le(e) {
  return !!(e && e.__v_isRef === !0);
}
function ni(e) {
  return le(e) ? e.value : e;
}
const oi = {
  get: (e, t, n) => ni(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return le(r) && !le(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function br(e) {
  return ft(e) ? e : new Proxy(e, oi);
}
var Nr;
class ri {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Nr] = !1, this._dirty = !0, this.effect = new lo(t, () => {
      this._dirty || (this._dirty = !0, ti(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = S(this);
    return ei(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Nr = "__v_isReadonly";
function si(e, t, n = !1) {
  let o, r;
  const s = A(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : ue) : (o = e.get, r = e.set);
  const c = new ri(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (c.effect.onTrack = t.onTrack, c.effect.onTrigger = t.onTrigger), c;
}
const at = [];
function Gt(e) {
  at.push(e);
}
function en() {
  at.pop();
}
function N(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  _t();
  const n = at.length ? at[at.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = ii();
  if (o)
    We(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      r.map(({ vnode: s }) => `at <${Dn(n, s.type)}>`).join(`
`),
      r
    ]);
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...ci(r)), console.warn(...s);
  }
  Et();
}
function ii() {
  let e = at[at.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function ci(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...li(n));
  }), t;
}
function li({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${Dn(e.component, e.type, o)}`, s = ">" + n;
  return e.props ? [r, ...ui(e.props), s] : [r + s];
}
function ui(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...yr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function yr(e, t, n) {
  return se(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : le(t) ? (t = yr(e, S(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : A(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = S(t), n ? t : [`${e}=`, t]);
}
const ho = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [
    0
    /* ErrorCodes.SETUP_FUNCTION */
  ]: "setup function",
  [
    1
    /* ErrorCodes.RENDER_FUNCTION */
  ]: "render function",
  [
    2
    /* ErrorCodes.WATCH_GETTER */
  ]: "watcher getter",
  [
    3
    /* ErrorCodes.WATCH_CALLBACK */
  ]: "watcher callback",
  [
    4
    /* ErrorCodes.WATCH_CLEANUP */
  ]: "watcher cleanup function",
  [
    5
    /* ErrorCodes.NATIVE_EVENT_HANDLER */
  ]: "native event handler",
  [
    6
    /* ErrorCodes.COMPONENT_EVENT_HANDLER */
  ]: "component event handler",
  [
    7
    /* ErrorCodes.VNODE_HOOK */
  ]: "vnode hook",
  [
    8
    /* ErrorCodes.DIRECTIVE_HOOK */
  ]: "directive hook",
  [
    9
    /* ErrorCodes.TRANSITION_HOOK */
  ]: "transition hook",
  [
    10
    /* ErrorCodes.APP_ERROR_HANDLER */
  ]: "app errorHandler",
  [
    11
    /* ErrorCodes.APP_WARN_HANDLER */
  ]: "app warnHandler",
  [
    12
    /* ErrorCodes.FUNCTION_REF */
  ]: "ref function",
  [
    13
    /* ErrorCodes.ASYNC_COMPONENT_LOADER */
  ]: "async component loader",
  [
    14
    /* ErrorCodes.SCHEDULER */
  ]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function We(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    Nn(s, t, n);
  }
  return r;
}
function $e(e, t, n, o) {
  if (A(e)) {
    const s = We(e, t, n, o);
    return s && so(s) && s.catch((c) => {
      Nn(c, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push($e(e[s], t, n, o));
  return r;
}
function Nn(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const c = t.proxy, l = process.env.NODE_ENV !== "production" ? ho[n] : n;
    for (; s; ) {
      const p = s.ec;
      if (p) {
        for (let m = 0; m < p.length; m++)
          if (p[m](e, c, l) === !1)
            return;
      }
      s = s.parent;
    }
    const f = t.appContext.config.errorHandler;
    if (f) {
      We(f, null, 10, [e, c, l]);
      return;
    }
  }
  fi(e, n, r, o);
}
function fi(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = ho[t];
    if (n && Gt(n), N(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && en(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let St = !1, kn = !1;
const fe = [];
let He = 0;
const Dt = [];
let Fe = null, Ye = 0;
const Or = /* @__PURE__ */ Promise.resolve();
let mo = null;
const ai = 100;
function pi(e) {
  const t = mo || Or;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function di(e) {
  let t = He + 1, n = fe.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    Ht(fe[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function yn(e) {
  (!fe.length || !fe.includes(e, St && e.allowRecurse ? He + 1 : He)) && (e.id == null ? fe.push(e) : fe.splice(di(e.id), 0, e), wr());
}
function wr() {
  !St && !kn && (kn = !0, mo = Or.then(Vr));
}
function hi(e) {
  const t = fe.indexOf(e);
  t > He && fe.splice(t, 1);
}
function xr(e) {
  M(e) ? Dt.push(...e) : (!Fe || !Fe.includes(e, e.allowRecurse ? Ye + 1 : Ye)) && Dt.push(e), wr();
}
function Ao(e, t = St ? He + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < fe.length; t++) {
    const n = fe[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && go(e, n))
        continue;
      fe.splice(t, 1), t--, n();
    }
  }
}
function Dr(e) {
  if (Dt.length) {
    const t = [...new Set(Dt)];
    if (Dt.length = 0, Fe) {
      Fe.push(...t);
      return;
    }
    for (Fe = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Fe.sort((n, o) => Ht(n) - Ht(o)), Ye = 0; Ye < Fe.length; Ye++)
      process.env.NODE_ENV !== "production" && go(e, Fe[Ye]) || Fe[Ye]();
    Fe = null, Ye = 0;
  }
}
const Ht = (e) => e.id == null ? 1 / 0 : e.id, mi = (e, t) => {
  const n = Ht(e) - Ht(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Vr(e) {
  kn = !1, St = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), fe.sort(mi);
  const t = process.env.NODE_ENV !== "production" ? (n) => go(e, n) : ue;
  try {
    for (He = 0; He < fe.length; He++) {
      const n = fe[He];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        We(
          n,
          null,
          14
          /* ErrorCodes.SCHEDULER */
        );
      }
    }
  } finally {
    He = 0, fe.length = 0, Dr(e), St = !1, mo = null, (fe.length || Dt.length) && Vr(e);
  }
}
function go(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > ai) {
      const o = t.ownerInstance, r = o && ts(o.type);
      return N(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let pt = !1;
const bt = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (sr().__VUE_HMR_RUNTIME__ = {
  createRecord: Cn(Cr),
  rerender: Cn(Ei),
  reload: Cn(vi)
});
const gt = /* @__PURE__ */ new Map();
function gi(e) {
  const t = e.type.__hmrId;
  let n = gt.get(t);
  n || (Cr(t, e.type), n = gt.get(t)), n.instances.add(e);
}
function _i(e) {
  gt.get(e.type.__hmrId).instances.delete(e);
}
function Cr(e, t) {
  return gt.has(e) ? !1 : (gt.set(e, {
    initialDef: At(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function At(e) {
  return ns(e) ? e.__vccOpts : e;
}
function Ei(e, t) {
  const n = gt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, At(o.type).render = t), o.renderCache = [], pt = !0, o.update(), pt = !1;
  }));
}
function vi(e, t) {
  const n = gt.get(e);
  if (!n)
    return;
  t = At(t), Ro(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = At(r.type);
    bt.has(s) || (s !== n.initialDef && Ro(s, t), bt.add(s)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (bt.add(s), r.ceReload(t.styles), bt.delete(s)) : r.parent ? yn(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  xr(() => {
    for (const r of o)
      bt.delete(At(r.type));
  });
}
function Ro(e, t) {
  re(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Cn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let Le, jt = [], Bn = !1;
function Kt(e, ...t) {
  Le ? Le.emit(e, ...t) : Bn || jt.push({ event: e, args: t });
}
function Tr(e, t) {
  var n, o;
  Le = e, Le ? (Le.enabled = !0, jt.forEach(({ event: r, args: s }) => Le.emit(r, ...s)), jt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Tr(s, t);
  }), setTimeout(() => {
    Le || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Bn = !0, jt = []);
  }, 3e3)) : (Bn = !0, jt = []);
}
function bi(e, t) {
  Kt("app:init", e, t, {
    Fragment: Se,
    Text: Wt,
    Comment: Ie,
    Static: rn
  });
}
function Ni(e) {
  Kt("app:unmount", e);
}
const yi = /* @__PURE__ */ _o(
  "component:added"
  /* DevtoolsHooks.COMPONENT_ADDED */
), $r = /* @__PURE__ */ _o(
  "component:updated"
  /* DevtoolsHooks.COMPONENT_UPDATED */
), Oi = /* @__PURE__ */ _o(
  "component:removed"
  /* DevtoolsHooks.COMPONENT_REMOVED */
), wi = (e) => {
  Le && typeof Le.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Le.cleanupBuffer(e) && Oi(e);
};
function _o(e) {
  return (t) => {
    Kt(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const xi = /* @__PURE__ */ Ir(
  "perf:start"
  /* DevtoolsHooks.PERFORMANCE_START */
), Di = /* @__PURE__ */ Ir(
  "perf:end"
  /* DevtoolsHooks.PERFORMANCE_END */
);
function Ir(e) {
  return (t, n, o) => {
    Kt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Vi(e, t, n) {
  Kt("component:emit", e.appContext.app, e, t, n);
}
function Ci(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || q;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: m, propsOptions: [a] } = e;
    if (m)
      if (!(t in m))
        (!a || !(it(t) in a)) && N(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${it(t)}" prop.`);
      else {
        const E = m[t];
        A(E) && (E(...n) || N(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), c = s && t.slice(7);
  if (c && c in o) {
    const m = `${c === "modelValue" ? "model" : c}Modifiers`, { number: a, trim: E } = o[m] || q;
    E && (r = n.map((V) => se(V) ? V.trim() : V)), a && (r = n.map(ys));
  }
  if (process.env.NODE_ENV !== "production" && Vi(e, t, r), process.env.NODE_ENV !== "production") {
    const m = t.toLowerCase();
    m !== t && o[it(m)] && N(`Event "${m}" is emitted in component ${Dn(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ge(t)}" instead of "${t}".`);
  }
  let l, f = o[l = it(t)] || // also try camelCase event handler (#2249)
  o[l = it(Vt(t))];
  !f && s && (f = o[l = it(Ge(t))]), f && $e(f, e, 6, r);
  const p = o[l + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, $e(p, e, 6, r);
  }
}
function Pr(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let c = {}, l = !1;
  if (!A(e)) {
    const f = (p) => {
      const m = Pr(p, t, !0);
      m && (l = !0, re(c, m));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !s && !l ? (z(e) && o.set(e, null), null) : (M(s) ? s.forEach((f) => c[f] = null) : re(c, s), z(e) && o.set(e, c), c);
}
function On(e, t) {
  return !e || !Bt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, Ge(t)) || H(e, t));
}
let we = null, Mr = null;
function fn(e) {
  const t = we;
  return we = e, Mr = e && e.type.__scopeId || null, t;
}
function Ti(e, t = we, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && qo(-1);
    const s = fn(t);
    let c;
    try {
      c = e(...r);
    } finally {
      fn(s), o._d && qo(1);
    }
    return process.env.NODE_ENV !== "production" && $r(t), c;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Kn = !1;
function an() {
  Kn = !0;
}
function Tn(e) {
  const { type: t, vnode: n, proxy: o, withProxy: r, props: s, propsOptions: [c], slots: l, attrs: f, emit: p, render: m, renderCache: a, data: E, setupState: V, ctx: B, inheritAttrs: R } = e;
  let J, ce;
  const te = fn(e);
  process.env.NODE_ENV !== "production" && (Kn = !1);
  try {
    if (n.shapeFlag & 4) {
      const Q = r || o;
      J = Ve(m.call(Q, Q, a, s, V, E, B)), ce = f;
    } else {
      const Q = t;
      process.env.NODE_ENV !== "production" && f === s && an(), J = Ve(Q.length > 1 ? Q(s, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return an(), f;
        },
        slots: l,
        emit: p
      } : { attrs: f, slots: l, emit: p }) : Q(
        s,
        null
        /* we know it doesn't need it */
      )), ce = t.props ? f : Ii(f);
    }
  } catch (Q) {
    Rt.length = 0, Nn(
      Q,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), J = Te(Ie);
  }
  let Y = J, L;
  if (process.env.NODE_ENV !== "production" && J.patchFlag > 0 && J.patchFlag & 2048 && ([Y, L] = $i(J)), ce && R !== !1) {
    const Q = Object.keys(ce), { shapeFlag: Pe } = Y;
    if (Q.length) {
      if (Pe & 7)
        c && Q.some(cn) && (ce = Pi(ce, c)), Y = tt(Y, ce);
      else if (process.env.NODE_ENV !== "production" && !Kn && Y.type !== Ie) {
        const Ne = Object.keys(f), _e = [], ve = [];
        for (let w = 0, C = Ne.length; w < C; w++) {
          const T = Ne[w];
          Bt(T) ? cn(T) || _e.push(T[2].toLowerCase() + T.slice(3)) : ve.push(T);
        }
        ve.length && N(`Extraneous non-props attributes (${ve.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), _e.length && N(`Extraneous non-emits event listeners (${_e.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Fo(Y) && N("Runtime directive used on component with non-element root node. The directives will not function as intended."), Y = tt(Y), Y.dirs = Y.dirs ? Y.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Fo(Y) && N("Component inside <Transition> renders non-element root node that cannot be animated."), Y.transition = n.transition), process.env.NODE_ENV !== "production" && L ? L(Y) : J = Y, fn(te), J;
}
const $i = (e) => {
  const t = e.children, n = e.dynamicChildren, o = jr(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, c = (l) => {
    t[r] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Ve(o), c];
};
function jr(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (Ut(o)) {
      if (o.type !== Ie || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const Ii = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Bt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Pi = (e, t) => {
  const n = {};
  for (const o in e)
    (!cn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Fo = (e) => e.shapeFlag & 7 || e.type === Ie;
function Mi(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: c, children: l, patchFlag: f } = t, p = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || l) && pt || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? So(o, c, p) : !!c;
    if (f & 8) {
      const m = t.dynamicProps;
      for (let a = 0; a < m.length; a++) {
        const E = m[a];
        if (c[E] !== o[E] && !On(p, E))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : o === c ? !1 : o ? c ? So(o, c, p) : !0 : !!c;
  return !1;
}
function So(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !On(n, s))
      return !0;
  }
  return !1;
}
function ji({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Ai = (e) => e.__isSuspense;
function Ri(e, t) {
  t && t.pendingBranch ? M(e) ? t.effects.push(...e) : t.effects.push(e) : xr(e);
}
function Fi(e, t) {
  if (!oe)
    process.env.NODE_ENV !== "production" && N("provide() can only be used inside setup().");
  else {
    let n = oe.provides;
    const o = oe.parent && oe.parent.provides;
    o === n && (n = oe.provides = Object.create(o)), n[e] = t;
  }
}
function tn(e, t, n = !1) {
  const o = oe || we;
  if (o) {
    const r = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && A(t) ? t.call(o.proxy) : t;
    process.env.NODE_ENV !== "production" && N(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && N("inject() can only be used inside setup() or functional components.");
}
const Xt = {};
function $n(e, t, n) {
  return process.env.NODE_ENV !== "production" && !A(t) && N("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), Ar(e, t, n);
}
function Ar(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: c } = q) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && N('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && N('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const l = (L) => {
    N("Invalid watch source: ", L, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, f = xs() === (oe == null ? void 0 : oe.scope) ? oe : null;
  let p, m = !1, a = !1;
  if (le(e) ? (p = () => e.value, m = Ln(e)) : ft(e) ? (p = () => e, o = !0) : M(e) ? (a = !0, m = e.some((L) => ft(L) || Ln(L)), p = () => e.map((L) => {
    if (le(L))
      return L.value;
    if (ft(L))
      return Ot(L);
    if (A(L))
      return We(
        L,
        f,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
    process.env.NODE_ENV !== "production" && l(L);
  })) : A(e) ? t ? p = () => We(
    e,
    f,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : p = () => {
    if (!(f && f.isUnmounted))
      return E && E(), $e(e, f, 3, [V]);
  } : (p = ue, process.env.NODE_ENV !== "production" && l(e)), t && o) {
    const L = p;
    p = () => Ot(L());
  }
  let E, V = (L) => {
    E = te.onStop = () => {
      We(
        L,
        f,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, B;
  if (kt)
    if (V = ue, t ? n && $e(t, f, 3, [
      p(),
      a ? [] : void 0,
      V
    ]) : p(), r === "sync") {
      const L = qc();
      B = L.__watcherHandles || (L.__watcherHandles = []);
    } else
      return ue;
  let R = a ? new Array(e.length).fill(Xt) : Xt;
  const J = () => {
    if (te.active)
      if (t) {
        const L = te.run();
        (o || m || (a ? L.some((Q, Pe) => ln(Q, R[Pe])) : ln(L, R))) && (E && E(), $e(t, f, 3, [
          L,
          // pass undefined as the old value when it's changed for the first time
          R === Xt ? void 0 : a && R[0] === Xt ? [] : R,
          V
        ]), R = L);
      } else
        te.run();
  };
  J.allowRecurse = !!t;
  let ce;
  r === "sync" ? ce = J : r === "post" ? ce = () => Ee(J, f && f.suspense) : (J.pre = !0, f && (J.id = f.uid), ce = () => yn(J));
  const te = new lo(p, ce);
  process.env.NODE_ENV !== "production" && (te.onTrack = s, te.onTrigger = c), t ? n ? J() : R = te.run() : r === "post" ? Ee(te.run.bind(te), f && f.suspense) : te.run();
  const Y = () => {
    te.stop(), f && f.scope && oo(f.scope.effects, te);
  };
  return B && B.push(Y), Y;
}
function Si(e, t, n) {
  const o = this.proxy, r = se(e) ? e.includes(".") ? Rr(o, e) : () => o[e] : e.bind(o, o);
  let s;
  A(t) ? s = t : (s = t.handler, n = t);
  const c = oe;
  Ct(this);
  const l = Ar(r, s.bind(o), n);
  return c ? Ct(c) : ht(), l;
}
function Rr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function Ot(e, t) {
  if (!z(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), le(e))
    Ot(e.value, t);
  else if (M(e))
    for (let n = 0; n < e.length; n++)
      Ot(e[n], t);
  else if (gs(e) || xt(e))
    e.forEach((n) => {
      Ot(n, t);
    });
  else if (Es(e))
    for (const n in e)
      Ot(e[n], t);
  return e;
}
const nn = (e) => !!e.type.__asyncLoader, Eo = (e) => e.type.__isKeepAlive;
function Hi(e, t) {
  Fr(e, "a", t);
}
function Li(e, t) {
  Fr(e, "da", t);
}
function Fr(e, t, n = oe) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (wn(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Eo(r.parent.vnode) && Ui(o, t, n, r), r = r.parent;
  }
}
function Ui(e, t, n, o) {
  const r = wn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Sr(() => {
    oo(o[t], r);
  }, n);
}
function wn(e, t, n = oe, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...c) => {
      if (n.isUnmounted)
        return;
      _t(), Ct(n);
      const l = $e(t, n, e, c);
      return ht(), Et(), l;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = it(ho[e].replace(/ hook$/, ""));
    N(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const ze = (e) => (t, n = oe) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!kt || e === "sp") && wn(e, (...o) => t(...o), n)
), ki = ze(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), Bi = ze(
  "m"
  /* LifecycleHooks.MOUNTED */
), Ki = ze(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), Wi = ze(
  "u"
  /* LifecycleHooks.UPDATED */
), qi = ze(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), Sr = ze(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), zi = ze(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), Ji = ze(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), Yi = ze(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function Zi(e, t = oe) {
  wn("ec", e, t);
}
function Hr(e) {
  vs(e) && N("Do not use built-in directive ids as custom directive id: " + e);
}
function rt(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let c = 0; c < r.length; c++) {
    const l = r[c];
    s && (l.oldValue = s[c].value);
    let f = l.dir[o];
    f && (_t(), $e(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Et());
  }
}
const Xi = Symbol(), Wn = (e) => e ? Gr(e) ? Oo(e) || e.proxy : Wn(e.parent) : null, dt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ re(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? yt(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? yt(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? yt(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? yt(e.refs) : e.refs,
    $parent: (e) => Wn(e.parent),
    $root: (e) => Wn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => bo(e),
    $forceUpdate: (e) => e.f || (e.f = () => yn(e.update)),
    $nextTick: (e) => e.n || (e.n = pi.bind(e.proxy)),
    $watch: (e) => Si.bind(e)
  })
), vo = (e) => e === "_" || e === "$", In = (e, t) => e !== q && !e.__isScriptSetup && H(e, t), Lr = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: c, type: l, appContext: f } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let p;
    if (t[0] !== "$") {
      const V = c[t];
      if (V !== void 0)
        switch (V) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (In(o, t))
          return c[t] = 1, o[t];
        if (r !== q && H(r, t))
          return c[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (p = e.propsOptions[0]) && H(p, t)
        )
          return c[t] = 3, s[t];
        if (n !== q && H(n, t))
          return c[t] = 4, n[t];
        qn && (c[t] = 0);
      }
    }
    const m = dt[t];
    let a, E;
    if (m)
      return t === "$attrs" && (ge(e, "get", t), process.env.NODE_ENV !== "production" && an()), m(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== q && H(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      E = f.config.globalProperties, H(E, t)
    )
      return E[t];
    process.env.NODE_ENV !== "production" && we && (!se(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== q && vo(t[0]) && H(r, t) ? N(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === we && N(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return In(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && H(r, t) ? (N(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== q && H(o, t) ? (o[t] = n, !0) : H(e.props, t) ? (process.env.NODE_ENV !== "production" && N(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && N(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s } }, c) {
    let l;
    return !!n[c] || e !== q && H(e, c) || In(t, c) || (l = s[0]) && H(l, c) || H(o, c) || H(dt, c) || H(r.config.globalProperties, c);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : H(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Lr.ownKeys = (e) => (N("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function Qi(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(dt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => dt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ue
    });
  }), t;
}
function Gi(e) {
  const { ctx: t, propsOptions: [n] } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: ue
    });
  });
}
function ec(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(S(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (vo(o[0])) {
        N(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: ue
      });
    }
  });
}
function tc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? N(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let qn = !0;
function nc(e) {
  const t = bo(e), n = e.proxy, o = e.ctx;
  qn = !1, t.beforeCreate && Ho(
    t.beforeCreate,
    e,
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  );
  const {
    // state
    data: r,
    computed: s,
    methods: c,
    watch: l,
    provide: f,
    inject: p,
    // lifecycle
    created: m,
    beforeMount: a,
    mounted: E,
    beforeUpdate: V,
    updated: B,
    activated: R,
    deactivated: J,
    beforeDestroy: ce,
    beforeUnmount: te,
    destroyed: Y,
    unmounted: L,
    render: Q,
    renderTracked: Pe,
    renderTriggered: Ne,
    errorCaptured: _e,
    serverPrefetch: ve,
    // public API
    expose: w,
    inheritAttrs: C,
    // assets
    components: T,
    directives: Z,
    filters: ae
  } = t, pe = process.env.NODE_ENV !== "production" ? tc() : null;
  if (process.env.NODE_ENV !== "production") {
    const [P] = e.propsOptions;
    if (P)
      for (const F in P)
        pe("Props", F);
  }
  if (p && oc(p, o, pe, e.appContext.config.unwrapInjectedRef), c)
    for (const P in c) {
      const F = c[P];
      A(F) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, P, {
        value: F.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[P] = F.bind(n), process.env.NODE_ENV !== "production" && pe("Methods", P)) : process.env.NODE_ENV !== "production" && N(`Method "${P}" has type "${typeof F}" in the component definition. Did you reference the function correctly?`);
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !A(r) && N("The data option must be a function. Plain object usage is no longer supported.");
    const P = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && so(P) && N("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !z(P))
      process.env.NODE_ENV !== "production" && N("data() should return an object.");
    else if (e.data = fo(P), process.env.NODE_ENV !== "production")
      for (const F in P)
        pe("Data", F), vo(F[0]) || Object.defineProperty(o, F, {
          configurable: !0,
          enumerable: !0,
          get: () => P[F],
          set: ue
        });
  }
  if (qn = !0, s)
    for (const P in s) {
      const F = s[P], ye = A(F) ? F.bind(n, n) : A(F.get) ? F.get.bind(n, n) : ue;
      process.env.NODE_ENV !== "production" && ye === ue && N(`Computed property "${P}" has no getter.`);
      const Ue = !A(F) && A(F.set) ? F.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        N(`Write operation failed: computed property "${P}" is readonly.`);
      } : ue, Me = Bc({
        get: ye,
        set: Ue
      });
      Object.defineProperty(o, P, {
        enumerable: !0,
        configurable: !0,
        get: () => Me.value,
        set: (Oe) => Me.value = Oe
      }), process.env.NODE_ENV !== "production" && pe("Computed", P);
    }
  if (l)
    for (const P in l)
      Ur(l[P], o, n, P);
  if (f) {
    const P = A(f) ? f.call(n) : f;
    Reflect.ownKeys(P).forEach((F) => {
      Fi(F, P[F]);
    });
  }
  m && Ho(
    m,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function G(P, F) {
    M(F) ? F.forEach((ye) => P(ye.bind(n))) : F && P(F.bind(n));
  }
  if (G(ki, a), G(Bi, E), G(Ki, V), G(Wi, B), G(Hi, R), G(Li, J), G(Zi, _e), G(Yi, Pe), G(Ji, Ne), G(qi, te), G(Sr, L), G(zi, ve), M(w))
    if (w.length) {
      const P = e.exposed || (e.exposed = {});
      w.forEach((F) => {
        Object.defineProperty(P, F, {
          get: () => n[F],
          set: (ye) => n[F] = ye
        });
      });
    } else
      e.exposed || (e.exposed = {});
  Q && e.render === ue && (e.render = Q), C != null && (e.inheritAttrs = C), T && (e.components = T), Z && (e.directives = Z);
}
function oc(e, t, n = ue, o = !1) {
  M(e) && (e = zn(e));
  for (const r in e) {
    const s = e[r];
    let c;
    z(s) ? "default" in s ? c = tn(
      s.from || r,
      s.default,
      !0
      /* treat default function as factory */
    ) : c = tn(s.from || r) : c = tn(s), le(c) ? o ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => c.value,
      set: (l) => c.value = l
    }) : (process.env.NODE_ENV !== "production" && N(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[r] = c) : t[r] = c, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Ho(e, t, n) {
  $e(M(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Ur(e, t, n, o) {
  const r = o.includes(".") ? Rr(n, o) : () => n[o];
  if (se(e)) {
    const s = t[e];
    A(s) ? $n(r, s) : process.env.NODE_ENV !== "production" && N(`Invalid watch handler specified by key "${e}"`, s);
  } else if (A(e))
    $n(r, e.bind(n));
  else if (z(e))
    if (M(e))
      e.forEach((s) => Ur(s, t, n, o));
    else {
      const s = A(e.handler) ? e.handler.bind(n) : t[e.handler];
      A(s) ? $n(r, s, e) : process.env.NODE_ENV !== "production" && N(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && N(`Invalid watch option: "${o}"`, e);
}
function bo(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: c } } = e.appContext, l = s.get(t);
  let f;
  return l ? f = l : !r.length && !n && !o ? f = t : (f = {}, r.length && r.forEach((p) => pn(f, p, c, !0)), pn(f, t, c)), z(t) && s.set(t, f), f;
}
function pn(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && pn(e, s, n, !0), r && r.forEach((c) => pn(e, c, n, !0));
  for (const c in t)
    if (o && c === "expose")
      process.env.NODE_ENV !== "production" && N('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const l = rc[c] || n && n[c];
      e[c] = l ? l(e[c], t[c]) : t[c];
    }
  return e;
}
const rc = {
  data: Lo,
  props: ct,
  emits: ct,
  // objects
  methods: ct,
  computed: ct,
  // lifecycle
  beforeCreate: he,
  created: he,
  beforeMount: he,
  mounted: he,
  beforeUpdate: he,
  updated: he,
  beforeDestroy: he,
  beforeUnmount: he,
  destroyed: he,
  unmounted: he,
  activated: he,
  deactivated: he,
  errorCaptured: he,
  serverPrefetch: he,
  // assets
  components: ct,
  directives: ct,
  // watch
  watch: ic,
  // provide / inject
  provide: Lo,
  inject: sc
};
function Lo(e, t) {
  return t ? e ? function() {
    return re(A(e) ? e.call(this, this) : e, A(t) ? t.call(this, this) : t);
  } : t : e;
}
function sc(e, t) {
  return ct(zn(e), zn(t));
}
function zn(e) {
  if (M(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function he(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ct(e, t) {
  return e ? re(re(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function ic(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = re(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = he(e[o], t[o]);
  return n;
}
function cc(e, t, n, o = !1) {
  const r = {}, s = {};
  un(s, xn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), kr(e, t, r, s);
  for (const c in e.propsOptions[0])
    c in r || (r[c] = void 0);
  process.env.NODE_ENV !== "production" && Kr(t || {}, r, e), n ? e.props = o ? r : Gs(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function lc(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function uc(e, t, n, o) {
  const { props: r, attrs: s, vnode: { patchFlag: c } } = e, l = S(r), [f] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && lc(e)) && (o || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const m = e.vnode.dynamicProps;
      for (let a = 0; a < m.length; a++) {
        let E = m[a];
        if (On(e.emitsOptions, E))
          continue;
        const V = t[E];
        if (f)
          if (H(s, E))
            V !== s[E] && (s[E] = V, p = !0);
          else {
            const B = Vt(E);
            r[B] = Jn(
              f,
              l,
              B,
              V,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          V !== s[E] && (s[E] = V, p = !0);
      }
    }
  } else {
    kr(e, t, r, s) && (p = !0);
    let m;
    for (const a in l)
      (!t || // for camelCase
      !H(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((m = Ge(a)) === a || !H(t, m))) && (f ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[m] !== void 0) && (r[a] = Jn(
        f,
        l,
        a,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete r[a]);
    if (s !== l)
      for (const a in s)
        (!t || !H(t, a)) && (delete s[a], p = !0);
  }
  p && qe(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && Kr(t || {}, r, e);
}
function kr(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let c = !1, l;
  if (t)
    for (let f in t) {
      if (Qt(f))
        continue;
      const p = t[f];
      let m;
      r && H(r, m = Vt(f)) ? !s || !s.includes(m) ? n[m] = p : (l || (l = {}))[m] = p : On(e.emitsOptions, f) || (!(f in o) || p !== o[f]) && (o[f] = p, c = !0);
    }
  if (s) {
    const f = S(n), p = l || q;
    for (let m = 0; m < s.length; m++) {
      const a = s[m];
      n[a] = Jn(r, f, a, p[a], e, !H(p, a));
    }
  }
  return c;
}
function Jn(e, t, n, o, r, s) {
  const c = e[n];
  if (c != null) {
    const l = H(c, "default");
    if (l && o === void 0) {
      const f = c.default;
      if (c.type !== Function && A(f)) {
        const { propsDefaults: p } = r;
        n in p ? o = p[n] : (Ct(r), o = p[n] = f.call(null, t), ht());
      } else
        o = f;
    }
    c[
      0
      /* BooleanFlags.shouldCast */
    ] && (s && !l ? o = !1 : c[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (o === "" || o === Ge(n)) && (o = !0));
  }
  return o;
}
function Br(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, c = {}, l = [];
  let f = !1;
  if (!A(e)) {
    const m = (a) => {
      f = !0;
      const [E, V] = Br(a, t, !0);
      re(c, E), V && l.push(...V);
    };
    !n && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  if (!s && !f)
    return z(e) && o.set(e, wt), wt;
  if (M(s))
    for (let m = 0; m < s.length; m++) {
      process.env.NODE_ENV !== "production" && !se(s[m]) && N("props must be strings when using array syntax.", s[m]);
      const a = Vt(s[m]);
      Uo(a) && (c[a] = q);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !z(s) && N("invalid props options", s);
    for (const m in s) {
      const a = Vt(m);
      if (Uo(a)) {
        const E = s[m], V = c[a] = M(E) || A(E) ? { type: E } : Object.assign({}, E);
        if (V) {
          const B = Bo(Boolean, V.type), R = Bo(String, V.type);
          V[
            0
            /* BooleanFlags.shouldCast */
          ] = B > -1, V[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = R < 0 || B < R, (B > -1 || H(V, "default")) && l.push(a);
        }
      }
    }
  }
  const p = [c, l];
  return z(e) && o.set(e, p), p;
}
function Uo(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && N(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Yn(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function ko(e, t) {
  return Yn(e) === Yn(t);
}
function Bo(e, t) {
  return M(t) ? t.findIndex((n) => ko(n, e)) : A(t) && ko(t, e) ? 0 : -1;
}
function Kr(e, t, n) {
  const o = S(t), r = n.propsOptions[0];
  for (const s in r) {
    let c = r[s];
    c != null && fc(s, o[s], c, !H(e, s) && !H(e, Ge(s)));
  }
}
function fc(e, t, n, o) {
  const { type: r, required: s, validator: c } = n;
  if (s && o) {
    N('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (r != null && r !== !0) {
      let l = !1;
      const f = M(r) ? r : [r], p = [];
      for (let m = 0; m < f.length && !l; m++) {
        const { valid: a, expectedType: E } = pc(t, f[m]);
        p.push(E || ""), l = a;
      }
      if (!l) {
        N(dc(e, t, p));
        return;
      }
    }
    c && !c(t) && N('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const ac = /* @__PURE__ */ nt("String,Number,Boolean,Function,Symbol,BigInt");
function pc(e, t) {
  let n;
  const o = Yn(t);
  if (ac(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = z(e) : o === "Array" ? n = M(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function dc(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(gn).join(" | ")}`;
  const r = n[0], s = io(t), c = Ko(t, r), l = Ko(t, s);
  return n.length === 1 && Wo(r) && !hc(r, s) && (o += ` with value ${c}`), o += `, got ${s} `, Wo(s) && (o += `with value ${l}.`), o;
}
function Ko(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Wo(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function hc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Wr = (e) => e[0] === "_" || e === "$stable", No = (e) => M(e) ? e.map(Ve) : [Ve(e)], mc = (e, t, n) => {
  if (t._n)
    return t;
  const o = Ti((...r) => (process.env.NODE_ENV !== "production" && oe && N(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), No(t(...r))), n);
  return o._c = !1, o;
}, qr = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (Wr(r))
      continue;
    const s = e[r];
    if (A(s))
      t[r] = mc(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && N(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);
      const c = No(s);
      t[r] = () => c;
    }
  }
}, zr = (e, t) => {
  process.env.NODE_ENV !== "production" && !Eo(e.vnode) && N("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = No(t);
  e.slots.default = () => n;
}, gc = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = S(t), un(t, "_", n)) : qr(t, e.slots = {});
  } else
    e.slots = {}, t && zr(e, t);
  un(e.slots, xn, 1);
}, _c = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, c = q;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && pt ? re(r, t) : n && l === 1 ? s = !1 : (re(r, t), !n && l === 1 && delete r._) : (s = !t.$stable, qr(t, r)), c = t;
  } else
    t && (zr(e, t), c = { default: 1 });
  if (s)
    for (const l in r)
      !Wr(l) && !(l in c) && delete r[l];
};
function Jr() {
  return {
    app: null,
    config: {
      isNativeTag: rr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Ec = 0;
function vc(e, t) {
  return function(o, r = null) {
    A(o) || (o = Object.assign({}, o)), r != null && !z(r) && (process.env.NODE_ENV !== "production" && N("root props passed to app.mount() must be an object."), r = null);
    const s = Jr(), c = /* @__PURE__ */ new Set();
    let l = !1;
    const f = s.app = {
      _uid: Ec++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: Yo,
      get config() {
        return s.config;
      },
      set config(p) {
        process.env.NODE_ENV !== "production" && N("app.config cannot be replaced. Modify individual options instead.");
      },
      use(p, ...m) {
        return c.has(p) ? process.env.NODE_ENV !== "production" && N("Plugin has already been applied to target app.") : p && A(p.install) ? (c.add(p), p.install(f, ...m)) : A(p) ? (c.add(p), p(f, ...m)) : process.env.NODE_ENV !== "production" && N('A plugin must either be a function or an object with an "install" function.'), f;
      },
      mixin(p) {
        return s.mixins.includes(p) ? process.env.NODE_ENV !== "production" && N("Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")) : s.mixins.push(p), f;
      },
      component(p, m) {
        return process.env.NODE_ENV !== "production" && Xn(p, s.config), m ? (process.env.NODE_ENV !== "production" && s.components[p] && N(`Component "${p}" has already been registered in target app.`), s.components[p] = m, f) : s.components[p];
      },
      directive(p, m) {
        return process.env.NODE_ENV !== "production" && Hr(p), m ? (process.env.NODE_ENV !== "production" && s.directives[p] && N(`Directive "${p}" has already been registered in target app.`), s.directives[p] = m, f) : s.directives[p];
      },
      mount(p, m, a) {
        if (l)
          process.env.NODE_ENV !== "production" && N("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && p.__vue_app__ && N("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const E = Te(o, r);
          return E.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(tt(E), p, a);
          }), m && t ? t(E, p) : e(E, p, a), l = !0, f._container = p, p.__vue_app__ = f, process.env.NODE_ENV !== "production" && (f._instance = E.component, bi(f, Yo)), Oo(E.component) || E.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, f._container), process.env.NODE_ENV !== "production" && (f._instance = null, Ni(f)), delete f._container.__vue_app__) : process.env.NODE_ENV !== "production" && N("Cannot unmount an app that is not mounted.");
      },
      provide(p, m) {
        return process.env.NODE_ENV !== "production" && p in s.provides && N(`App already provides property with key "${String(p)}". It will be overwritten with the new value.`), s.provides[p] = m, f;
      }
    };
    return f;
  };
}
function Zn(e, t, n, o, r = !1) {
  if (M(e)) {
    e.forEach((E, V) => Zn(E, t && (M(t) ? t[V] : t), n, o, r));
    return;
  }
  if (nn(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? Oo(o.component) || o.component.proxy : o.el, c = r ? null : s, { i: l, r: f } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    N("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const p = t && t.r, m = l.refs === q ? l.refs = {} : l.refs, a = l.setupState;
  if (p != null && p !== f && (se(p) ? (m[p] = null, H(a, p) && (a[p] = null)) : le(p) && (p.value = null)), A(f))
    We(f, l, 12, [c, m]);
  else {
    const E = se(f), V = le(f);
    if (E || V) {
      const B = () => {
        if (e.f) {
          const R = E ? H(a, f) ? a[f] : m[f] : f.value;
          r ? M(R) && oo(R, s) : M(R) ? R.includes(s) || R.push(s) : E ? (m[f] = [s], H(a, f) && (a[f] = m[f])) : (f.value = [s], e.k && (m[e.k] = f.value));
        } else
          E ? (m[f] = c, H(a, f) && (a[f] = c)) : V ? (f.value = c, e.k && (m[e.k] = c)) : process.env.NODE_ENV !== "production" && N("Invalid template ref type:", f, `(${typeof f})`);
      };
      c ? (B.id = -1, Ee(B, n)) : B();
    } else
      process.env.NODE_ENV !== "production" && N("Invalid template ref type:", f, `(${typeof f})`);
  }
}
let It, Xe;
function Be(e, t) {
  e.appContext.config.performance && dn() && Xe.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && xi(e, t, dn() ? Xe.now() : Date.now());
}
function Ke(e, t) {
  if (e.appContext.config.performance && dn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Xe.mark(o), Xe.measure(`<${Dn(e, e.type)}> ${t}`, n, o), Xe.clearMarks(n), Xe.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Di(e, t, dn() ? Xe.now() : Date.now());
}
function dn() {
  return It !== void 0 || (typeof window < "u" && window.performance ? (It = !0, Xe = window.performance) : It = !1), It;
}
function bc() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const Ee = Ri;
function Nc(e) {
  return yc(e);
}
function yc(e, t) {
  bc();
  const n = sr();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Tr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: r, patchProp: s, createElement: c, createText: l, createComment: f, setText: p, setElementText: m, parentNode: a, nextSibling: E, setScopeId: V = ue, insertStaticContent: B } = e, R = (i, u, d, g = null, h = null, b = null, O = !1, v = null, y = process.env.NODE_ENV !== "production" && pt ? !1 : !!u.dynamicChildren) => {
    if (i === u)
      return;
    i && !Pt(i, u) && (g = k(i), be(i, h, b, !0), i = null), u.patchFlag === -2 && (y = !1, u.dynamicChildren = null);
    const { type: _, ref: D, shapeFlag: x } = u;
    switch (_) {
      case Wt:
        J(i, u, d, g);
        break;
      case Ie:
        ce(i, u, d, g);
        break;
      case rn:
        i == null ? te(u, d, g, O) : process.env.NODE_ENV !== "production" && Y(i, u, d, O);
        break;
      case Se:
        Z(i, u, d, g, h, b, O, v, y);
        break;
      default:
        x & 1 ? Pe(i, u, d, g, h, b, O, v, y) : x & 6 ? ae(i, u, d, g, h, b, O, v, y) : x & 64 || x & 128 ? _.process(i, u, d, g, h, b, O, v, y, ee) : process.env.NODE_ENV !== "production" && N("Invalid VNode type:", _, `(${typeof _})`);
    }
    D != null && h && Zn(D, i && i.ref, b, u || i, !u);
  }, J = (i, u, d, g) => {
    if (i == null)
      o(u.el = l(u.children), d, g);
    else {
      const h = u.el = i.el;
      u.children !== i.children && p(h, u.children);
    }
  }, ce = (i, u, d, g) => {
    i == null ? o(u.el = f(u.children || ""), d, g) : u.el = i.el;
  }, te = (i, u, d, g) => {
    [i.el, i.anchor] = B(i.children, u, d, g, i.el, i.anchor);
  }, Y = (i, u, d, g) => {
    if (u.children !== i.children) {
      const h = E(i.anchor);
      Q(i), [u.el, u.anchor] = B(u.children, d, h, g);
    } else
      u.el = i.el, u.anchor = i.anchor;
  }, L = ({ el: i, anchor: u }, d, g) => {
    let h;
    for (; i && i !== u; )
      h = E(i), o(i, d, g), i = h;
    o(u, d, g);
  }, Q = ({ el: i, anchor: u }) => {
    let d;
    for (; i && i !== u; )
      d = E(i), r(i), i = d;
    r(u);
  }, Pe = (i, u, d, g, h, b, O, v, y) => {
    O = O || u.type === "svg", i == null ? Ne(u, d, g, h, b, O, v, y) : w(i, u, h, b, O, v, y);
  }, Ne = (i, u, d, g, h, b, O, v) => {
    let y, _;
    const { type: D, props: x, shapeFlag: $, transition: j, dirs: U } = i;
    if (y = i.el = c(i.type, b, x && x.is, x), $ & 8 ? m(y, i.children) : $ & 16 && ve(i.children, y, null, g, h, b && D !== "foreignObject", O, v), U && rt(i, null, g, "created"), _e(y, i, i.scopeId, O, g), x) {
      for (const K in x)
        K !== "value" && !Qt(K) && s(y, K, null, x[K], b, i.children, g, h, I);
      "value" in x && s(y, "value", null, x.value), (_ = x.onVnodeBeforeMount) && Re(_, g, i);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(y, "__vnode", {
      value: i,
      enumerable: !1
    }), Object.defineProperty(y, "__vueParentComponent", {
      value: g,
      enumerable: !1
    })), U && rt(i, null, g, "beforeMount");
    const W = (!h || h && !h.pendingBranch) && j && !j.persisted;
    W && j.beforeEnter(y), o(y, u, d), ((_ = x && x.onVnodeMounted) || W || U) && Ee(() => {
      _ && Re(_, g, i), W && j.enter(y), U && rt(i, null, g, "mounted");
    }, h);
  }, _e = (i, u, d, g, h) => {
    if (d && V(i, d), g)
      for (let b = 0; b < g.length; b++)
        V(i, g[b]);
    if (h) {
      let b = h.subTree;
      if (process.env.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && (b = jr(b.children) || b), u === b) {
        const O = h.vnode;
        _e(i, O, O.scopeId, O.slotScopeIds, h.parent);
      }
    }
  }, ve = (i, u, d, g, h, b, O, v, y = 0) => {
    for (let _ = y; _ < i.length; _++) {
      const D = i[_] = v ? Ze(i[_]) : Ve(i[_]);
      R(null, D, u, d, g, h, b, O, v);
    }
  }, w = (i, u, d, g, h, b, O) => {
    const v = u.el = i.el;
    let { patchFlag: y, dynamicChildren: _, dirs: D } = u;
    y |= i.patchFlag & 16;
    const x = i.props || q, $ = u.props || q;
    let j;
    d && st(d, !1), (j = $.onVnodeBeforeUpdate) && Re(j, d, u, i), D && rt(u, i, d, "beforeUpdate"), d && st(d, !0), process.env.NODE_ENV !== "production" && pt && (y = 0, O = !1, _ = null);
    const U = h && u.type !== "foreignObject";
    if (_ ? (C(i.dynamicChildren, _, v, d, g, U, b), process.env.NODE_ENV !== "production" && d && d.type.__hmrId && on(i, u)) : O || ye(i, u, v, null, d, g, U, b, !1), y > 0) {
      if (y & 16)
        T(v, u, x, $, d, g, h);
      else if (y & 2 && x.class !== $.class && s(v, "class", null, $.class, h), y & 4 && s(v, "style", x.style, $.style, h), y & 8) {
        const W = u.dynamicProps;
        for (let K = 0; K < W.length; K++) {
          const ne = W[K], xe = x[ne], vt = $[ne];
          (vt !== xe || ne === "value") && s(v, ne, xe, vt, h, i.children, d, g, I);
        }
      }
      y & 1 && i.children !== u.children && m(v, u.children);
    } else
      !O && _ == null && T(v, u, x, $, d, g, h);
    ((j = $.onVnodeUpdated) || D) && Ee(() => {
      j && Re(j, d, u, i), D && rt(u, i, d, "updated");
    }, g);
  }, C = (i, u, d, g, h, b, O) => {
    for (let v = 0; v < u.length; v++) {
      const y = i[v], _ = u[v], D = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === Se || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pt(y, _) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 70) ? a(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      R(y, _, D, null, g, h, b, O, !0);
    }
  }, T = (i, u, d, g, h, b, O) => {
    if (d !== g) {
      if (d !== q)
        for (const v in d)
          !Qt(v) && !(v in g) && s(i, v, d[v], null, O, u.children, h, b, I);
      for (const v in g) {
        if (Qt(v))
          continue;
        const y = g[v], _ = d[v];
        y !== _ && v !== "value" && s(i, v, _, y, O, u.children, h, b, I);
      }
      "value" in g && s(i, "value", d.value, g.value);
    }
  }, Z = (i, u, d, g, h, b, O, v, y) => {
    const _ = u.el = i ? i.el : l(""), D = u.anchor = i ? i.anchor : l("");
    let { patchFlag: x, dynamicChildren: $, slotScopeIds: j } = u;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (pt || x & 2048) && (x = 0, y = !1, $ = null), j && (v = v ? v.concat(j) : j), i == null ? (o(_, d, g), o(D, d, g), ve(u.children, d, D, h, b, O, v, y)) : x > 0 && x & 64 && $ && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    i.dynamicChildren ? (C(i.dynamicChildren, $, d, h, b, O, v), process.env.NODE_ENV !== "production" && h && h.type.__hmrId ? on(i, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || h && u === h.subTree) && on(
        i,
        u,
        !0
        /* shallow */
      )
    )) : ye(i, u, d, D, h, b, O, v, y);
  }, ae = (i, u, d, g, h, b, O, v, y) => {
    u.slotScopeIds = v, i == null ? u.shapeFlag & 512 ? h.ctx.activate(u, d, g, O, y) : pe(u, d, g, h, b, O, y) : G(i, u, y);
  }, pe = (i, u, d, g, h, b, O) => {
    const v = i.component = Ac(i, g, h);
    if (process.env.NODE_ENV !== "production" && v.type.__hmrId && gi(v), process.env.NODE_ENV !== "production" && (Gt(i), Be(v, "mount")), Eo(i) && (v.ctx.renderer = ee), process.env.NODE_ENV !== "production" && Be(v, "init"), Fc(v), process.env.NODE_ENV !== "production" && Ke(v, "init"), v.asyncDep) {
      if (h && h.registerDep(v, P), !i.el) {
        const y = v.subTree = Te(Ie);
        ce(null, y, u, d);
      }
      return;
    }
    P(v, i, u, d, h, b, O), process.env.NODE_ENV !== "production" && (en(), Ke(v, "mount"));
  }, G = (i, u, d) => {
    const g = u.component = i.component;
    if (Mi(i, u, d))
      if (g.asyncDep && !g.asyncResolved) {
        process.env.NODE_ENV !== "production" && Gt(u), F(g, u, d), process.env.NODE_ENV !== "production" && en();
        return;
      } else
        g.next = u, hi(g.update), g.update();
    else
      u.el = i.el, g.vnode = u;
  }, P = (i, u, d, g, h, b, O) => {
    const v = () => {
      if (i.isMounted) {
        let { next: D, bu: x, u: $, parent: j, vnode: U } = i, W = D, K;
        process.env.NODE_ENV !== "production" && Gt(D || i.vnode), st(i, !1), D ? (D.el = U.el, F(i, D, O)) : D = U, x && $t(x), (K = D.props && D.props.onVnodeBeforeUpdate) && Re(K, j, D, U), st(i, !0), process.env.NODE_ENV !== "production" && Be(i, "render");
        const ne = Tn(i);
        process.env.NODE_ENV !== "production" && Ke(i, "render");
        const xe = i.subTree;
        i.subTree = ne, process.env.NODE_ENV !== "production" && Be(i, "patch"), R(
          xe,
          ne,
          // parent may have changed if it's in a teleport
          a(xe.el),
          // anchor may have changed if it's in a fragment
          k(xe),
          i,
          h,
          b
        ), process.env.NODE_ENV !== "production" && Ke(i, "patch"), D.el = ne.el, W === null && ji(i, ne.el), $ && Ee($, h), (K = D.props && D.props.onVnodeUpdated) && Ee(() => Re(K, j, D, U), h), process.env.NODE_ENV !== "production" && $r(i), process.env.NODE_ENV !== "production" && en();
      } else {
        let D;
        const { el: x, props: $ } = u, { bm: j, m: U, parent: W } = i, K = nn(u);
        if (st(i, !1), j && $t(j), !K && (D = $ && $.onVnodeBeforeMount) && Re(D, W, u), st(i, !0), x && je) {
          const ne = () => {
            process.env.NODE_ENV !== "production" && Be(i, "render"), i.subTree = Tn(i), process.env.NODE_ENV !== "production" && Ke(i, "render"), process.env.NODE_ENV !== "production" && Be(i, "hydrate"), je(x, i.subTree, i, h, null), process.env.NODE_ENV !== "production" && Ke(i, "hydrate");
          };
          K ? u.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !i.isUnmounted && ne()
          ) : ne();
        } else {
          process.env.NODE_ENV !== "production" && Be(i, "render");
          const ne = i.subTree = Tn(i);
          process.env.NODE_ENV !== "production" && Ke(i, "render"), process.env.NODE_ENV !== "production" && Be(i, "patch"), R(null, ne, d, g, i, h, b), process.env.NODE_ENV !== "production" && Ke(i, "patch"), u.el = ne.el;
        }
        if (U && Ee(U, h), !K && (D = $ && $.onVnodeMounted)) {
          const ne = u;
          Ee(() => Re(D, W, ne), h);
        }
        (u.shapeFlag & 256 || W && nn(W.vnode) && W.vnode.shapeFlag & 256) && i.a && Ee(i.a, h), i.isMounted = !0, process.env.NODE_ENV !== "production" && yi(i), u = d = g = null;
      }
    }, y = i.effect = new lo(
      v,
      () => yn(_),
      i.scope
      // track it in component's effect scope
    ), _ = i.update = () => y.run();
    _.id = i.uid, st(i, !0), process.env.NODE_ENV !== "production" && (y.onTrack = i.rtc ? (D) => $t(i.rtc, D) : void 0, y.onTrigger = i.rtg ? (D) => $t(i.rtg, D) : void 0, _.ownerInstance = i), _();
  }, F = (i, u, d) => {
    u.component = i;
    const g = i.vnode.props;
    i.vnode = u, i.next = null, uc(i, u.props, g, d), _c(i, u.children, d), _t(), Ao(), Et();
  }, ye = (i, u, d, g, h, b, O, v, y = !1) => {
    const _ = i && i.children, D = i ? i.shapeFlag : 0, x = u.children, { patchFlag: $, shapeFlag: j } = u;
    if ($ > 0) {
      if ($ & 128) {
        Me(_, x, d, g, h, b, O, v, y);
        return;
      } else if ($ & 256) {
        Ue(_, x, d, g, h, b, O, v, y);
        return;
      }
    }
    j & 8 ? (D & 16 && I(_, h, b), x !== _ && m(d, x)) : D & 16 ? j & 16 ? Me(_, x, d, g, h, b, O, v, y) : I(_, h, b, !0) : (D & 8 && m(d, ""), j & 16 && ve(x, d, g, h, b, O, v, y));
  }, Ue = (i, u, d, g, h, b, O, v, y) => {
    i = i || wt, u = u || wt;
    const _ = i.length, D = u.length, x = Math.min(_, D);
    let $;
    for ($ = 0; $ < x; $++) {
      const j = u[$] = y ? Ze(u[$]) : Ve(u[$]);
      R(i[$], j, d, null, h, b, O, v, y);
    }
    _ > D ? I(i, h, b, !0, !1, x) : ve(u, d, g, h, b, O, v, y, x);
  }, Me = (i, u, d, g, h, b, O, v, y) => {
    let _ = 0;
    const D = u.length;
    let x = i.length - 1, $ = D - 1;
    for (; _ <= x && _ <= $; ) {
      const j = i[_], U = u[_] = y ? Ze(u[_]) : Ve(u[_]);
      if (Pt(j, U))
        R(j, U, d, null, h, b, O, v, y);
      else
        break;
      _++;
    }
    for (; _ <= x && _ <= $; ) {
      const j = i[x], U = u[$] = y ? Ze(u[$]) : Ve(u[$]);
      if (Pt(j, U))
        R(j, U, d, null, h, b, O, v, y);
      else
        break;
      x--, $--;
    }
    if (_ > x) {
      if (_ <= $) {
        const j = $ + 1, U = j < D ? u[j].el : g;
        for (; _ <= $; )
          R(null, u[_] = y ? Ze(u[_]) : Ve(u[_]), d, U, h, b, O, v, y), _++;
      }
    } else if (_ > $)
      for (; _ <= x; )
        be(i[_], h, b, !0), _++;
    else {
      const j = _, U = _, W = /* @__PURE__ */ new Map();
      for (_ = U; _ <= $; _++) {
        const de = u[_] = y ? Ze(u[_]) : Ve(u[_]);
        de.key != null && (process.env.NODE_ENV !== "production" && W.has(de.key) && N("Duplicate keys found during update:", JSON.stringify(de.key), "Make sure keys are unique."), W.set(de.key, _));
      }
      let K, ne = 0;
      const xe = $ - U + 1;
      let vt = !1, wo = 0;
      const Tt = new Array(xe);
      for (_ = 0; _ < xe; _++)
        Tt[_] = 0;
      for (_ = j; _ <= x; _++) {
        const de = i[_];
        if (ne >= xe) {
          be(de, h, b, !0);
          continue;
        }
        let Ae;
        if (de.key != null)
          Ae = W.get(de.key);
        else
          for (K = U; K <= $; K++)
            if (Tt[K - U] === 0 && Pt(de, u[K])) {
              Ae = K;
              break;
            }
        Ae === void 0 ? be(de, h, b, !0) : (Tt[Ae - U] = _ + 1, Ae >= wo ? wo = Ae : vt = !0, R(de, u[Ae], d, null, h, b, O, v, y), ne++);
      }
      const xo = vt ? Oc(Tt) : wt;
      for (K = xo.length - 1, _ = xe - 1; _ >= 0; _--) {
        const de = U + _, Ae = u[de], Do = de + 1 < D ? u[de + 1].el : g;
        Tt[_] === 0 ? R(null, Ae, d, Do, h, b, O, v, y) : vt && (K < 0 || _ !== xo[K] ? Oe(
          Ae,
          d,
          Do,
          2
          /* MoveType.REORDER */
        ) : K--);
      }
    }
  }, Oe = (i, u, d, g, h = null) => {
    const { el: b, type: O, transition: v, children: y, shapeFlag: _ } = i;
    if (_ & 6) {
      Oe(i.component.subTree, u, d, g);
      return;
    }
    if (_ & 128) {
      i.suspense.move(u, d, g);
      return;
    }
    if (_ & 64) {
      O.move(i, u, d, ee);
      return;
    }
    if (O === Se) {
      o(b, u, d);
      for (let x = 0; x < y.length; x++)
        Oe(y[x], u, d, g);
      o(i.anchor, u, d);
      return;
    }
    if (O === rn) {
      L(i, u, d);
      return;
    }
    if (g !== 2 && _ & 1 && v)
      if (g === 0)
        v.beforeEnter(b), o(b, u, d), Ee(() => v.enter(b), h);
      else {
        const { leave: x, delayLeave: $, afterLeave: j } = v, U = () => o(b, u, d), W = () => {
          x(b, () => {
            U(), j && j();
          });
        };
        $ ? $(b, U, W) : W();
      }
    else
      o(b, u, d);
  }, be = (i, u, d, g = !1, h = !1) => {
    const { type: b, props: O, ref: v, children: y, dynamicChildren: _, shapeFlag: D, patchFlag: x, dirs: $ } = i;
    if (v != null && Zn(v, null, d, i, !0), D & 256) {
      u.ctx.deactivate(i);
      return;
    }
    const j = D & 1 && $, U = !nn(i);
    let W;
    if (U && (W = O && O.onVnodeBeforeUnmount) && Re(W, u, i), D & 6)
      ot(i.component, d, g);
    else {
      if (D & 128) {
        i.suspense.unmount(d, g);
        return;
      }
      j && rt(i, null, u, "beforeUnmount"), D & 64 ? i.type.remove(i, u, d, h, ee, g) : _ && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== Se || x > 0 && x & 64) ? I(_, u, d, !1, !0) : (b === Se && x & 384 || !h && D & 16) && I(y, u, d), g && ke(i);
    }
    (U && (W = O && O.onVnodeUnmounted) || j) && Ee(() => {
      W && Re(W, u, i), j && rt(i, null, u, "unmounted");
    }, d);
  }, ke = (i) => {
    const { type: u, el: d, anchor: g, transition: h } = i;
    if (u === Se) {
      process.env.NODE_ENV !== "production" && i.patchFlag > 0 && i.patchFlag & 2048 && h && !h.persisted ? i.children.forEach((O) => {
        O.type === Ie ? r(O.el) : ke(O);
      }) : Vn(d, g);
      return;
    }
    if (u === rn) {
      Q(i);
      return;
    }
    const b = () => {
      r(d), h && !h.persisted && h.afterLeave && h.afterLeave();
    };
    if (i.shapeFlag & 1 && h && !h.persisted) {
      const { leave: O, delayLeave: v } = h, y = () => O(d, b);
      v ? v(i.el, b, y) : y();
    } else
      b();
  }, Vn = (i, u) => {
    let d;
    for (; i !== u; )
      d = E(i), r(i), i = d;
    r(u);
  }, ot = (i, u, d) => {
    process.env.NODE_ENV !== "production" && i.type.__hmrId && _i(i);
    const { bum: g, scope: h, update: b, subTree: O, um: v } = i;
    g && $t(g), h.stop(), b && (b.active = !1, be(O, i, u, d)), v && Ee(v, u), Ee(() => {
      i.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && i.asyncDep && !i.asyncResolved && i.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), process.env.NODE_ENV !== "production" && wi(i);
  }, I = (i, u, d, g = !1, h = !1, b = 0) => {
    for (let O = b; O < i.length; O++)
      be(i[O], u, d, g, h);
  }, k = (i) => i.shapeFlag & 6 ? k(i.component.subTree) : i.shapeFlag & 128 ? i.suspense.next() : E(i.anchor || i.el), X = (i, u, d) => {
    i == null ? u._vnode && be(u._vnode, null, null, !0) : R(u._vnode || null, i, u, null, null, null, d), Ao(), Dr(), u._vnode = i;
  }, ee = {
    p: R,
    um: be,
    m: Oe,
    r: ke,
    mt: pe,
    mc: ve,
    pc: ye,
    pbc: C,
    n: k,
    o: e
  };
  let ie, je;
  return t && ([ie, je] = t(ee)), {
    render: X,
    hydrate: ie,
    createApp: vc(X, ie)
  };
}
function st({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function on(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (M(o) && M(r))
    for (let s = 0; s < o.length; s++) {
      const c = o[s];
      let l = r[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = Ze(r[s]), l.el = c.el), n || on(c, l)), l.type === Wt && (l.el = c.el), process.env.NODE_ENV !== "production" && l.type === Ie && !l.el && (l.el = c.el);
    }
}
function Oc(e) {
  const t = e.slice(), n = [0];
  let o, r, s, c, l;
  const f = e.length;
  for (o = 0; o < f; o++) {
    const p = e[o];
    if (p !== 0) {
      if (r = n[n.length - 1], e[r] < p) {
        t[o] = r, n.push(o);
        continue;
      }
      for (s = 0, c = n.length - 1; s < c; )
        l = s + c >> 1, e[n[l]] < p ? s = l + 1 : c = l;
      p < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, c = n[s - 1]; s-- > 0; )
    n[s] = c, c = t[c];
  return n;
}
const wc = (e) => e.__isTeleport, Se = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), Wt = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), Ie = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), rn = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), Rt = [];
let Ce = null;
function xc(e = !1) {
  Rt.push(Ce = e ? null : []);
}
function Dc() {
  Rt.pop(), Ce = Rt[Rt.length - 1] || null;
}
let Lt = 1;
function qo(e) {
  Lt += e;
}
function Vc(e) {
  return e.dynamicChildren = Lt > 0 ? Ce || wt : null, Dc(), Lt > 0 && Ce && Ce.push(e), e;
}
function Cc(e, t, n, o, r, s) {
  return Vc(Zr(
    e,
    t,
    n,
    o,
    r,
    s,
    !0
    /* isBlock */
  ));
}
function Ut(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Pt(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && bt.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Tc = (...e) => Xr(...e), xn = "__vInternal", Yr = ({ key: e }) => e ?? null, sn = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? se(e) || le(e) || A(e) ? { i: we, r: e, k: t, f: !!n } : e : null;
function Zr(e, t = null, n = null, o = 0, r = null, s = e === Se ? 0 : 1, c = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Yr(t),
    ref: t && sn(t),
    scopeId: Mr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: we
  };
  return l ? (yo(f, n), s & 128 && e.normalize(f)) : n && (f.shapeFlag |= se(n) ? 8 : 16), process.env.NODE_ENV !== "production" && f.key !== f.key && N("VNode created with invalid key (NaN). VNode type:", f.type), Lt > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Ce && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && Ce.push(f), f;
}
const Te = process.env.NODE_ENV !== "production" ? Tc : Xr;
function Xr(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === Xi) && (process.env.NODE_ENV !== "production" && !e && N(`Invalid vnode type when creating vnode: ${e}.`), e = Ie), Ut(e)) {
    const l = tt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && yo(l, n), Lt > 0 && !s && Ce && (l.shapeFlag & 6 ? Ce[Ce.indexOf(e)] = l : Ce.push(l)), l.patchFlag |= -2, l;
  }
  if (ns(e) && (e = e.__vccOpts), t) {
    t = $c(t);
    let { class: l, style: f } = t;
    l && !se(l) && (t.class = no(l)), z(f) && (Un(f) && !M(f) && (f = re({}, f)), t.style = to(f));
  }
  const c = se(e) ? 1 : Ai(e) ? 128 : wc(e) ? 64 : z(e) ? 4 : A(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && c & 4 && Un(e) && (e = S(e), N("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), Zr(e, t, n, o, r, c, s, !0);
}
function $c(e) {
  return e ? Un(e) || xn in e ? re({}, e) : e : null;
}
function tt(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: c } = e, l = t ? Pc(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Yr(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? M(r) ? r.concat(sn(t)) : [r, sn(t)] : sn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && M(c) ? c.map(Qr) : c,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Se ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && tt(e.ssContent),
    ssFallback: e.ssFallback && tt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Qr(e) {
  const t = tt(e);
  return M(e.children) && (t.children = e.children.map(Qr)), t;
}
function Ic(e = " ", t = 0) {
  return Te(Wt, null, e, t);
}
function Ve(e) {
  return e == null || typeof e == "boolean" ? Te(Ie) : M(e) ? Te(
    Se,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Ze(e) : Te(Wt, null, String(e));
}
function Ze(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : tt(e);
}
function yo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (M(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), yo(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(xn in t) ? t._ctx = we : r === 3 && we && (we.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    A(t) ? (t = { default: t, _ctx: we }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Ic(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Pc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = no([t.class, o.class]));
      else if (r === "style")
        t.style = to([t.style, o.style]);
      else if (Bt(r)) {
        const s = t[r], c = o[r];
        c && s !== c && !(M(s) && s.includes(c)) && (t[r] = s ? [].concat(s, c) : c);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function Re(e, t, n, o = null) {
  $e(e, t, 7, [
    n,
    o
  ]);
}
const Mc = Jr();
let jc = 0;
function Ac(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Mc, s = {
    uid: jc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Os(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Br(o, r),
    emitsOptions: Pr(o, r),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: q,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: q,
    data: q,
    props: q,
    attrs: q,
    slots: q,
    refs: q,
    setupState: q,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? s.ctx = Qi(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Ci.bind(null, s), e.ce && e.ce(s), s;
}
let oe = null;
const Ct = (e) => {
  oe = e, e.scope.on();
}, ht = () => {
  oe && oe.scope.off(), oe = null;
}, Rc = /* @__PURE__ */ nt("slot,component");
function Xn(e, t) {
  const n = t.isNativeTag || rr;
  (Rc(e) || n(e)) && N("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Gr(e) {
  return e.vnode.shapeFlag & 4;
}
let kt = !1;
function Fc(e, t = !1) {
  kt = t;
  const { props: n, children: o } = e.vnode, r = Gr(e);
  cc(e, n, r, t), gc(e, o);
  const s = r ? Sc(e, t) : void 0;
  return kt = !1, s;
}
function Sc(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && Xn(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let c = 0; c < s.length; c++)
        Xn(s[c], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let c = 0; c < s.length; c++)
        Hr(s[c]);
    }
    o.compilerOptions && Hc() && N('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = vr(new Proxy(e.ctx, Lr)), process.env.NODE_ENV !== "production" && Gi(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? Lc(e) : null;
    Ct(e), _t();
    const c = We(r, e, 0, [process.env.NODE_ENV !== "production" ? yt(e.props) : e.props, s]);
    if (Et(), ht(), so(c)) {
      if (c.then(ht, ht), t)
        return c.then((l) => {
          zo(e, l, t);
        }).catch((l) => {
          Nn(
            l,
            e,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      if (e.asyncDep = c, process.env.NODE_ENV !== "production" && !e.suspense) {
        const l = (n = o.name) !== null && n !== void 0 ? n : "Anonymous";
        N(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      zo(e, c, t);
  } else
    es(e, t);
}
function zo(e, t, n) {
  A(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : z(t) ? (process.env.NODE_ENV !== "production" && Ut(t) && N("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = br(t), process.env.NODE_ENV !== "production" && ec(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && N(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), es(e, n);
}
let Qn;
const Hc = () => !Qn;
function es(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && Qn && !o.render) {
      const r = o.template || bo(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && Be(e, "compile");
        const { isCustomElement: s, compilerOptions: c } = e.appContext.config, { delimiters: l, compilerOptions: f } = o, p = re(re({
          isCustomElement: s,
          delimiters: l
        }, c), f);
        o.render = Qn(r, p), process.env.NODE_ENV !== "production" && Ke(e, "compile");
      }
    }
    e.render = o.render || ue;
  }
  Ct(e), _t(), nc(e), Et(), ht(), process.env.NODE_ENV !== "production" && !o.render && e.render === ue && !t && (o.template ? N(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : N("Component is missing template or render function."));
}
function Jo(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return an(), ge(e, "get", "$attrs"), t[n];
    },
    set() {
      return N("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return N("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return ge(e, "get", "$attrs"), t[n];
    }
  });
}
function Lc(e) {
  const t = (o) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && N("expose() should be called only once per setup()."), o != null)) {
      let r = typeof o;
      r === "object" && (M(o) ? r = "array" : le(o) && (r = "ref")), r !== "object" && N(`expose() should be passed a plain object, received ${r}.`);
    }
    e.exposed = o || {};
  };
  let n;
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = Jo(e));
    },
    get slots() {
      return yt(e.slots);
    },
    get emit() {
      return (o, ...r) => e.emit(o, ...r);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = Jo(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Oo(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(br(vr(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in dt)
          return dt[n](e);
      },
      has(t, n) {
        return n in t || n in dt;
      }
    }));
}
const Uc = /(?:^|[-_])(\w)/g, kc = (e) => e.replace(Uc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function ts(e, t = !0) {
  return A(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Dn(e, t, n = !1) {
  let o = ts(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const c in s)
        if (s[c] === t)
          return c;
    };
    o = r(e.components || e.parent.type.components) || r(e.appContext.components);
  }
  return o ? kc(o) : n ? "App" : "Anonymous";
}
function ns(e) {
  return A(e) && "__vccOpts" in e;
}
const Bc = (e, t) => si(e, t, kt);
function Kc(e, t, n) {
  const o = arguments.length;
  return o === 2 ? z(t) && !M(t) ? Ut(t) ? Te(e, null, [t]) : Te(e, t) : Te(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Ut(n) && (n = [n]), Te(e, t, n));
}
const Wc = Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : ""), qc = () => {
  {
    const e = tn(Wc);
    return e || process.env.NODE_ENV !== "production" && N("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
  }
};
function Pn(e) {
  return !!(e && e.__v_isShallow);
}
function zc() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, r = {
    header(a) {
      return z(a) ? a.__isVue ? ["div", e, "VueInstance"] : le(a) ? [
        "div",
        {},
        ["span", e, m(a)],
        "<",
        l(a.value),
        ">"
      ] : ft(a) ? [
        "div",
        {},
        ["span", e, Pn(a) ? "ShallowReactive" : "Reactive"],
        "<",
        l(a),
        `>${mt(a) ? " (readonly)" : ""}`
      ] : mt(a) ? [
        "div",
        {},
        ["span", e, Pn(a) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(a),
        ">"
      ] : null : null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...s(a.$)
        ];
    }
  };
  function s(a) {
    const E = [];
    a.type.props && a.props && E.push(c("props", S(a.props))), a.setupState !== q && E.push(c("setup", a.setupState)), a.data !== q && E.push(c("data", S(a.data)));
    const V = f(a, "computed");
    V && E.push(c("computed", V));
    const B = f(a, "inject");
    return B && E.push(c("injected", B)), E.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), E;
  }
  function c(a, E) {
    return E = re({}, E), Object.keys(E).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(E).map((V) => [
          "div",
          {},
          ["span", o, V + ": "],
          l(E[V], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(a, E = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : z(a) ? ["object", { object: E ? S(a) : a }] : ["span", n, String(a)];
  }
  function f(a, E) {
    const V = a.type;
    if (A(V))
      return;
    const B = {};
    for (const R in a.ctx)
      p(V, R, E) && (B[R] = a.ctx[R]);
    return B;
  }
  function p(a, E, V) {
    const B = a[V];
    if (M(B) && B.includes(E) || z(B) && E in B || a.extends && p(a.extends, E, V) || a.mixins && a.mixins.some((R) => p(R, E, V)))
      return !0;
  }
  function m(a) {
    return Pn(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const Yo = "3.2.47", Jc = "http://www.w3.org/2000/svg", lt = typeof document < "u" ? document : null, Zo = lt && /* @__PURE__ */ lt.createElement("template"), Yc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? lt.createElementNS(Jc, e) : lt.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => lt.createTextNode(e),
  createComment: (e) => lt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => lt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, s) {
    const c = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      Zo.innerHTML = o ? `<svg>${e}</svg>` : e;
      const l = Zo.content;
      if (o) {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      c ? c.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function Zc(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function Xc(e, t, n) {
  const o = e.style, r = se(n);
  if (n && !r) {
    if (t && !se(t))
      for (const s in t)
        n[s] == null && Gn(o, s, "");
    for (const s in n)
      Gn(o, s, n[s]);
  } else {
    const s = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = s);
  }
}
const Qc = /[^\\];\s*$/, Xo = /\s*!important$/;
function Gn(e, t, n) {
  if (M(n))
    n.forEach((o) => Gn(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Qc.test(n) && N(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Gc(e, t);
    Xo.test(n) ? e.setProperty(Ge(o), n.replace(Xo, ""), "important") : e[o] = n;
  }
}
const Qo = ["Webkit", "Moz", "ms"], Mn = {};
function Gc(e, t) {
  const n = Mn[t];
  if (n)
    return n;
  let o = Vt(t);
  if (o !== "filter" && o in e)
    return Mn[t] = o;
  o = gn(o);
  for (let r = 0; r < Qo.length; r++) {
    const s = Qo[r] + o;
    if (s in e)
      return Mn[t] = s;
  }
  return t;
}
const Go = "http://www.w3.org/1999/xlink";
function el(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Go, t.slice(6, t.length)) : e.setAttributeNS(Go, t, n);
  else {
    const s = ds(t);
    n == null || s && !or(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function tl(e, t, n, o, r, s, c) {
  if (t === "innerHTML" || t === "textContent") {
    o && c(o, r, s), e[t] = n ?? "";
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && // custom elements may use _value internally
  !e.tagName.includes("-")) {
    e._value = n;
    const f = n ?? "";
    (e.value !== f || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    e.tagName === "OPTION") && (e.value = f), n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean" ? n = or(n) : n == null && f === "string" ? (n = "", l = !0) : f === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch (f) {
    process.env.NODE_ENV !== "production" && !l && N(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, f);
  }
  l && e.removeAttribute(t);
}
function nl(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function ol(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function rl(e, t, n, o, r = null) {
  const s = e._vei || (e._vei = {}), c = s[t];
  if (o && c)
    c.value = o;
  else {
    const [l, f] = sl(t);
    if (o) {
      const p = s[t] = ll(o, r);
      nl(e, l, p, f);
    } else
      c && (ol(e, l, c, f), s[t] = void 0);
  }
}
const er = /(?:Once|Passive|Capture)$/;
function sl(e) {
  let t;
  if (er.test(e)) {
    t = {};
    let o;
    for (; o = e.match(er); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ge(e.slice(2)), t];
}
let jn = 0;
const il = /* @__PURE__ */ Promise.resolve(), cl = () => jn || (il.then(() => jn = 0), jn = Date.now());
function ll(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    $e(ul(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = cl(), n;
}
function ul(e, t) {
  if (M(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const tr = /^on[a-z]/, fl = (e, t, n, o, r = !1, s, c, l, f) => {
  t === "class" ? Zc(e, o, r) : t === "style" ? Xc(e, n, o) : Bt(t) ? cn(t) || rl(e, t, n, o, c) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : al(e, t, o, r)) ? tl(e, t, o, s, c, l, f) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), el(e, t, o, r));
};
function al(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && tr.test(t) && A(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || tr.test(t) && se(n) ? !1 : t in e;
}
const pl = /* @__PURE__ */ re({ patchProp: fl }, Yc);
let nr;
function dl() {
  return nr || (nr = Nc(pl));
}
const hl = (...e) => {
  const t = dl().createApp(...e);
  process.env.NODE_ENV !== "production" && (ml(t), gl(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = _l(o);
    if (!r)
      return;
    const s = t._component;
    !A(s) && !s.render && !s.template && (s.template = r.innerHTML), r.innerHTML = "";
    const c = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), c;
  }, t;
};
function ml(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => fs(t) || as(t),
    writable: !1
  });
}
function gl(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        N("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return N(o), n;
      },
      set() {
        N(o);
      }
    });
  }
}
function _l(e) {
  if (se(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && N(`Failed to mount app: mount target selector "${e}" returned null.`), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && N('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
}
function El() {
  zc();
}
process.env.NODE_ENV !== "production" && El();
var vl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, eo = {}, bl = {
  get exports() {
    return eo;
  },
  set exports(e) {
    eo = e;
  }
};
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(typeof self < "u" ? self : vl, function() {
    return (() => {
      var n = { d: (w, C) => {
        for (var T in C)
          n.o(C, T) && !n.o(w, T) && Object.defineProperty(w, T, { enumerable: !0, get: C[T] });
      } };
      n.g = function() {
        if (typeof globalThis == "object")
          return globalThis;
        try {
          return this || new Function("return this")();
        } catch {
          if (typeof window == "object")
            return window;
        }
      }(), n.o = (w, C) => Object.prototype.hasOwnProperty.call(w, C);
      var o = {};
      n.d(o, { default: () => ve });
      const r = (w) => {
        const C = /* @__PURE__ */ Object.create(null);
        return (T) => C[T] || (C[T] = w(T));
      }, s = r((w) => w.charAt(0).toUpperCase() + w.slice(1)), c = r((w) => w ? `on${s(w)}` : "");
      var l = /-(\w)/g, f = function(w) {
        return w.replace(l, function(C, T) {
          return T ? T.toUpperCase() : "";
        });
      }, p = /\B([A-Z])/g, m = function(w) {
        return w.replace(p, "-$1").toLowerCase();
      };
      function a(w, C) {
        return new CustomEvent(w, { bubbles: !1, cancelable: !1, detail: C.length === 1 ? C[0] : C });
      }
      var E = function(w) {
        return /function Boolean/.test(String(w));
      }, V = function(w) {
        return /function Number/.test(String(w));
      };
      function B(w, C) {
        if (w.nodeType === 3)
          return w.data.trim() ? w.data : null;
        if (w.nodeType === 1) {
          var T = { attrs: R(w), domProps: { innerHTML: w.innerHTML } };
          return T.attrs.slot && (T.slot = T.attrs.slot, delete T.attrs.slot), C(w.tagName, T);
        }
        return null;
      }
      function R(w) {
        for (var C = {}, T = 0, Z = w.attributes.length; T < Z; T++) {
          var ae = w.attributes[T];
          C[ae.nodeName] = ae.nodeValue;
        }
        return C;
      }
      function J(w) {
        return J = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(C) {
          return typeof C;
        } : function(C) {
          return C && typeof Symbol == "function" && C.constructor === Symbol && C !== Symbol.prototype ? "symbol" : typeof C;
        }, J(w);
      }
      function ce(w, C) {
        for (var T = 0; T < C.length; T++) {
          var Z = C[T];
          Z.enumerable = Z.enumerable || !1, Z.configurable = !0, "value" in Z && (Z.writable = !0), Object.defineProperty(w, Z.key, Z);
        }
      }
      function te(w, C) {
        return !C || J(C) !== "object" && typeof C != "function" ? Y(w) : C;
      }
      function Y(w) {
        if (w === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return w;
      }
      function L(w) {
        var C = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
        return L = function(T) {
          if (T === null || (Z = T, Function.toString.call(Z).indexOf("[native code]") === -1))
            return T;
          var Z;
          if (typeof T != "function")
            throw new TypeError("Super expression must either be null or a function");
          if (C !== void 0) {
            if (C.has(T))
              return C.get(T);
            C.set(T, ae);
          }
          function ae() {
            return Q(T, arguments, _e(this).constructor);
          }
          return ae.prototype = Object.create(T.prototype, { constructor: { value: ae, enumerable: !1, writable: !0, configurable: !0 } }), Ne(ae, T);
        }, L(w);
      }
      function Q(w, C, T) {
        return Q = Pe() ? Reflect.construct : function(Z, ae, pe) {
          var G = [null];
          G.push.apply(G, ae);
          var P = new (Function.bind.apply(Z, G))();
          return pe && Ne(P, pe.prototype), P;
        }, Q.apply(null, arguments);
      }
      function Pe() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == "function")
          return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }
      function Ne(w, C) {
        return Ne = Object.setPrototypeOf || function(T, Z) {
          return T.__proto__ = Z, T;
        }, Ne(w, C);
      }
      function _e(w) {
        return _e = Object.setPrototypeOf ? Object.getPrototypeOf : function(C) {
          return C.__proto__ || Object.getPrototypeOf(C);
        }, _e(w);
      }
      function ve(w, C, T, Z) {
        var ae, pe, G, P = w, F = !1, ye = function(Ue) {
          (function(I, k) {
            if (typeof k != "function" && k !== null)
              throw new TypeError("Super expression must either be null or a function");
            I.prototype = Object.create(k && k.prototype, { constructor: { value: I, writable: !0, configurable: !0 } }), k && Ne(I, k);
          })(ot, Ue);
          var Me, Oe, be, ke, Vn = (Me = ot, Oe = Pe(), function() {
            var I, k = _e(Me);
            if (Oe) {
              var X = _e(this).constructor;
              I = Reflect.construct(k, arguments, X);
            } else
              I = k.apply(this, arguments);
            return te(this, I);
          });
          function ot() {
            var I;
            return function(k, X) {
              if (!(k instanceof X))
                throw new TypeError("Cannot call a class as a function");
            }(this, ot), (I = Vn.call(this))._wrapper = void 0, I._component = void 0, I._props = void 0, I._slotChildren = void 0, I._mounted = !1, I._props = {}, I._slotChildren = [], new MutationObserver(function(k) {
              for (var X = 0; X < k.length; X++) {
                var ee = k[X];
                !F || ee.type !== "attributes" || ee.target !== Y(I) || ee.attributeName && I.syncAttribute(ee.attributeName);
              }
            }).observe(Y(I), { childList: !0, subtree: !0, characterData: !0, attributes: !0 }), I;
          }
          return be = ot, ke = [{ key: "createEventProxies", value: function(I) {
            var k = this, X = {};
            return I && I.forEach(function(ee) {
              var ie = c(f(ee));
              X[ie] = function() {
                for (var je = arguments.length, i = new Array(je), u = 0; u < je; u++)
                  i[u] = arguments[u];
                k.dispatchEvent(a(ee, i));
              };
            }), X;
          } }, { key: "syncAttribute", value: function(I) {
            var k, X = f(I), ee = void 0;
            this.hasOwnProperty(I) ? ee = this[I] : this.hasAttribute(I) && (ee = this.getAttribute(I)), this._props[X] = function(ie, je) {
              var i = (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}).type;
              if (E(i))
                return ie === "true" || ie === "false" ? ie === "true" : ie === "" || ie === je || ie != null;
              if (V(i)) {
                var u = parseFloat(ie);
                return isNaN(u) ? ie : u;
              }
              return ie;
            }(ee, I, G[X]), (k = this._component) === null || k === void 0 || k.$forceUpdate();
          } }, { key: "syncSlots", value: function() {
            var I;
            this._slotChildren = function(k, X) {
              for (var ee = [], ie = 0, je = k.length; ie < je; ie++)
                ee.push(B(k[ie], X));
              return ee;
            }(this.childNodes, T), (I = this._component) === null || I === void 0 || I.$forceUpdate();
          } }, { key: "syncInitialAttributes", value: function() {
            var I, k = this;
            this._props = (I = {}, pe.forEach(function(X) {
              I[X] = void 0;
            }), I), ae.forEach(function(X) {
              k.syncAttribute(X);
            });
          } }, { key: "connectedCallback", value: function() {
            F && this.syncInitialAttributes();
            var I = this.createEventProxies(P.emits), k = this;
            this._wrapper = C({ render: function() {
              var X = Object.assign({}, k._props, I);
              return delete X.dataVApp, T(P, X, function() {
                return k._slotChildren;
              });
            }, mounted: function() {
              k._mounted = !0;
            }, unmounted: function() {
              k._mounted = !1;
            } }), this.syncSlots(), this._component = this._wrapper.mount(this), Z != null && Z.connectedCallback && Z.connectedCallback.bind(this)();
          } }, { key: "disconnectedCallback", value: function() {
            var I;
            (I = this._wrapper) === null || I === void 0 || I.unmount();
          } }], ke && ce(be.prototype, ke), ot;
        }(L(HTMLElement));
        return function() {
          if (!F) {
            var Ue = Array.isArray(P.props) ? P.props : Object.keys(P.props || {});
            ae = Ue.map(m), pe = Ue.map(f);
            var Me = Array.isArray(P.props) ? {} : P.props || {};
            G = pe.reduce(function(Oe, be, ke) {
              return Oe[be] = Me[Ue[ke]], Oe;
            }, {}), F = !0;
          }
        }(), ye;
      }
      return o.default;
    })();
  });
})(bl);
const Nl = eo;
const yl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Ol = {}, wl = { class: "hello-ping" };
function xl(e, t) {
  return xc(), Cc("div", wl, "Hello Ping");
}
const os = /* @__PURE__ */ yl(Ol, [["render", xl], ["__scopeId", "data-v-c72bcc8d"]]), Dl = Nl(os, hl, Kc);
window.customElements.define("hello-ping", Dl);
const Vl = {
  version: "0.0.1",
  components: {
    HelloPing: os
  }
};
export {
  Vl as default
};
