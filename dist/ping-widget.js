(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".hello-ping[data-v-4dfe02af]{font-size:24px;font-weight:700;color:#e66}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
function nt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
function to(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = te(o) ? as(o) : to(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else {
    if (te(e))
      return e;
    if (W(e))
      return e;
  }
}
const ls = /;(?![^(]*\))/g, us = /:([^]+)/, fs = /\/\*.*?\*\//gs;
function as(e) {
  const t = {};
  return e.replace(fs, "").split(ls).forEach((n) => {
    if (n) {
      const o = n.split(us);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function no(e) {
  let t = "";
  if (te(e))
    t = e;
  else if (P(e))
    for (let n = 0; n < e.length; n++) {
      const o = no(e[n]);
      o && (t += o + " ");
    }
  else if (W(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ps = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ds = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", hs = /* @__PURE__ */ nt(ps), ms = /* @__PURE__ */ nt(ds), gs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", _s = /* @__PURE__ */ nt(gs);
function or(e) {
  return !!e || e === "";
}
const Es = (e) => te(e) ? e : e == null ? "" : P(e) || W(e) && (e.toString === cr || !j(e.toString)) ? JSON.stringify(e, rr, 2) : String(e), rr = (e, t) => t && t.__v_isRef ? rr(e, t.value) : ut(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r]) => (n[`${o} =>`] = r, n), {})
} : ir(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : W(t) && !P(t) && !lr(t) ? String(t) : t, z = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, xt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], ue = () => {
}, sr = () => !1, vs = /^on[^a-z]/, Bt = (e) => vs.test(e), cn = (e) => e.startsWith("onUpdate:"), se = Object.assign, oo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ns = Object.prototype.hasOwnProperty, H = (e, t) => Ns.call(e, t), P = Array.isArray, ut = (e) => hn(e) === "[object Map]", ir = (e) => hn(e) === "[object Set]", j = (e) => typeof e == "function", te = (e) => typeof e == "string", ro = (e) => typeof e == "symbol", W = (e) => e !== null && typeof e == "object", so = (e) => W(e) && j(e.then) && j(e.catch), cr = Object.prototype.toString, hn = (e) => cr.call(e), io = (e) => hn(e).slice(8, -1), lr = (e) => hn(e) === "[object Object]", co = (e) => te(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Qt = /* @__PURE__ */ nt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), bs = /* @__PURE__ */ nt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), mn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ys = /-(\w)/g, Vt = mn((e) => e.replace(ys, (t, n) => n ? n.toUpperCase() : "")), Os = /\B([A-Z])/g, Ge = mn((e) => e.replace(Os, "-$1").toLowerCase()), gn = mn((e) => e.charAt(0).toUpperCase() + e.slice(1)), it = mn((e) => e ? `on${gn(e)}` : ""), ln = (e, t) => !Object.is(e, t), $t = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, un = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, ws = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Vo;
const ur = () => Vo || (Vo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function An(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let De;
class xs {
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
function Ds(e, t = De) {
  t && t.active && t.effects.push(e);
}
function Vs() {
  return De;
}
const St = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, fr = (e) => (e.w & et) > 0, ar = (e) => (e.n & et) > 0, Cs = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= et;
}, Ts = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      fr(r) && !ar(r) ? r.delete(e) : t[n++] = r, r.w &= ~et, r.n &= ~et;
    }
    t.length = n;
  }
}, Rn = /* @__PURE__ */ new WeakMap();
let Mt = 0, et = 1;
const Sn = 30;
let me;
const ft = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Fn = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class lo {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Ds(this, o);
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
      return this.parent = me, me = this, Qe = !0, et = 1 << ++Mt, Mt <= Sn ? Cs(this) : Co(this), this.fn();
    } finally {
      Mt <= Sn && Ts(this), et = 1 << --Mt, me = this.parent, Qe = n, this.parent = void 0, this.deferStop && this.stop();
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
const pr = [];
function Et() {
  pr.push(Qe), Qe = !1;
}
function vt() {
  const e = pr.pop();
  Qe = e === void 0 ? !0 : e;
}
function ge(e, t, n) {
  if (Qe && me) {
    let o = Rn.get(e);
    o || Rn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = St());
    const s = process.env.NODE_ENV !== "production" ? { effect: me, target: e, type: t, key: n } : void 0;
    Hn(r, s);
  }
}
function Hn(e, t) {
  let n = !1;
  Mt <= Sn ? ar(e) || (e.n |= et, n = !fr(e)) : n = !e.has(me), n && (e.add(me), me.deps.push(e), process.env.NODE_ENV !== "production" && me.onTrack && me.onTrack(Object.assign({ effect: me }, t)));
}
function qe(e, t, n, o, r, s) {
  const c = Rn.get(e);
  if (!c)
    return;
  let l = [];
  if (t === "clear")
    l = [...c.values()];
  else if (n === "length" && P(e)) {
    const p = Number(o);
    c.forEach((m, a) => {
      (a === "length" || a >= p) && l.push(m);
    });
  } else
    switch (n !== void 0 && l.push(c.get(n)), t) {
      case "add":
        P(e) ? co(n) && l.push(c.get("length")) : (l.push(c.get(ft)), ut(e) && l.push(c.get(Fn)));
        break;
      case "delete":
        P(e) || (l.push(c.get(ft)), ut(e) && l.push(c.get(Fn)));
        break;
      case "set":
        ut(e) && l.push(c.get(ft));
        break;
    }
  const f = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (l.length === 1)
    l[0] && (process.env.NODE_ENV !== "production" ? yt(l[0], f) : yt(l[0]));
  else {
    const p = [];
    for (const m of l)
      m && p.push(...m);
    process.env.NODE_ENV !== "production" ? yt(St(p), f) : yt(St(p));
  }
}
function yt(e, t) {
  const n = P(e) ? e : [...e];
  for (const o of n)
    o.computed && To(o, t);
  for (const o of n)
    o.computed || To(o, t);
}
function To(e, t) {
  (e !== me || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(se({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const $s = /* @__PURE__ */ nt("__proto__,__v_isRef,__isVue"), dr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ro)
), Is = /* @__PURE__ */ _n(), Ps = /* @__PURE__ */ _n(!1, !0), Ms = /* @__PURE__ */ _n(!0), js = /* @__PURE__ */ _n(!0, !0), $o = /* @__PURE__ */ As();
function As() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = F(this);
      for (let s = 0, c = this.length; s < c; s++)
        ge(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(F)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Et();
      const o = F(this)[t].apply(this, n);
      return vt(), o;
    };
  }), e;
}
function Rs(e) {
  const t = F(this);
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
    if (r === "__v_raw" && s === (e ? t ? br : Nr : t ? vr : Er).get(o))
      return o;
    const c = P(o);
    if (!e) {
      if (c && H($o, r))
        return Reflect.get($o, r, s);
      if (r === "hasOwnProperty")
        return Rs;
    }
    const l = Reflect.get(o, r, s);
    return (ro(r) ? dr.has(r) : $s(r)) || (e || ge(o, "get", r), t) ? l : le(l) ? c && co(r) ? l : l.value : W(l) ? e ? yr(l) : fo(l) : l;
  };
}
const Ss = /* @__PURE__ */ hr(), Fs = /* @__PURE__ */ hr(!0);
function hr(e = !1) {
  return function(n, o, r, s) {
    let c = n[o];
    if (gt(c) && le(c) && !le(r))
      return !1;
    if (!e && (!Ln(r) && !gt(r) && (c = F(c), r = F(r)), !P(n) && le(c) && !le(r)))
      return c.value = r, !0;
    const l = P(n) && co(o) ? Number(o) < n.length : H(n, o), f = Reflect.set(n, o, r, s);
    return n === F(s) && (l ? ln(r, c) && qe(n, "set", o, r, c) : qe(n, "add", o, r)), f;
  };
}
function Hs(e, t) {
  const n = H(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && qe(e, "delete", t, void 0, o), r;
}
function Ls(e, t) {
  const n = Reflect.has(e, t);
  return (!ro(t) || !dr.has(t)) && ge(e, "has", t), n;
}
function Us(e) {
  return ge(e, "iterate", P(e) ? "length" : ft), Reflect.ownKeys(e);
}
const mr = {
  get: Is,
  set: Ss,
  deleteProperty: Hs,
  has: Ls,
  ownKeys: Us
}, gr = {
  get: Ms,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && An(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && An(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, ks = /* @__PURE__ */ se({}, mr, {
  get: Ps,
  set: Fs
}), Bs = /* @__PURE__ */ se({}, gr, {
  get: js
}), uo = (e) => e, En = (e) => Reflect.getPrototypeOf(e);
function qt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = F(e), s = F(t);
  n || (t !== s && ge(r, "get", t), ge(r, "get", s));
  const { has: c } = En(r), l = o ? uo : n ? po : ao;
  if (c.call(r, t))
    return l(e.get(t));
  if (c.call(r, s))
    return l(e.get(s));
  e !== r && e.get(t);
}
function zt(e, t = !1) {
  const n = this.__v_raw, o = F(n), r = F(e);
  return t || (e !== r && ge(o, "has", e), ge(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Jt(e, t = !1) {
  return e = e.__v_raw, !t && ge(F(e), "iterate", ft), Reflect.get(e, "size", e);
}
function Io(e) {
  e = F(e);
  const t = F(this);
  return En(t).has.call(t, e) || (t.add(e), qe(t, "add", e, e)), this;
}
function Po(e, t) {
  t = F(t);
  const n = F(this), { has: o, get: r } = En(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && _r(n, o, e) : (e = F(e), s = o.call(n, e));
  const c = r.call(n, e);
  return n.set(e, t), s ? ln(t, c) && qe(n, "set", e, t, c) : qe(n, "add", e, t), this;
}
function Mo(e) {
  const t = F(this), { has: n, get: o } = En(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && _r(t, n, e) : (e = F(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, c = t.delete(e);
  return r && qe(t, "delete", e, void 0, s), c;
}
function jo() {
  const e = F(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? ut(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && qe(e, "clear", void 0, void 0, n), o;
}
function Yt(e, t) {
  return function(o, r) {
    const s = this, c = s.__v_raw, l = F(c), f = t ? uo : e ? po : ao;
    return !e && ge(l, "iterate", ft), c.forEach((p, m) => o.call(r, f(p), f(m), s));
  };
}
function Zt(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = F(r), c = ut(s), l = e === "entries" || e === Symbol.iterator && c, f = e === "keys" && c, p = r[e](...o), m = n ? uo : t ? po : ao;
    return !t && ge(s, "iterate", f ? Fn : ft), {
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
      console.warn(`${gn(e)} operation ${n}failed: target is readonly.`, F(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function Ks() {
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
const [Ws, qs, zs, Js] = /* @__PURE__ */ Ks();
function vn(e, t) {
  const n = t ? e ? Js : zs : e ? qs : Ws;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(H(n, r) && r in o ? n : o, r, s);
}
const Ys = {
  get: /* @__PURE__ */ vn(!1, !1)
}, Zs = {
  get: /* @__PURE__ */ vn(!1, !0)
}, Xs = {
  get: /* @__PURE__ */ vn(!0, !1)
}, Qs = {
  get: /* @__PURE__ */ vn(!0, !0)
};
function _r(e, t, n) {
  const o = F(n);
  if (o !== n && t.call(e, o)) {
    const r = io(e);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const Er = /* @__PURE__ */ new WeakMap(), vr = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), br = /* @__PURE__ */ new WeakMap();
function Gs(e) {
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
function ei(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Gs(io(e));
}
function fo(e) {
  return gt(e) ? e : Nn(e, !1, mr, Ys, Er);
}
function ti(e) {
  return Nn(e, !1, ks, Zs, vr);
}
function yr(e) {
  return Nn(e, !0, gr, Xs, Nr);
}
function Ot(e) {
  return Nn(e, !0, Bs, Qs, br);
}
function Nn(e, t, n, o, r) {
  if (!W(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const c = ei(e);
  if (c === 0)
    return e;
  const l = new Proxy(e, c === 2 ? o : n);
  return r.set(e, l), l;
}
function at(e) {
  return gt(e) ? at(e.__v_raw) : !!(e && e.__v_isReactive);
}
function gt(e) {
  return !!(e && e.__v_isReadonly);
}
function Ln(e) {
  return !!(e && e.__v_isShallow);
}
function Un(e) {
  return at(e) || gt(e);
}
function F(e) {
  const t = e && e.__v_raw;
  return t ? F(t) : e;
}
function Or(e) {
  return un(e, "__v_skip", !0), e;
}
const ao = (e) => W(e) ? fo(e) : e, po = (e) => W(e) ? yr(e) : e;
function ni(e) {
  Qe && me && (e = F(e), process.env.NODE_ENV !== "production" ? Hn(e.dep || (e.dep = St()), {
    target: e,
    type: "get",
    key: "value"
  }) : Hn(e.dep || (e.dep = St())));
}
function oi(e, t) {
  e = F(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? yt(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : yt(n));
}
function le(e) {
  return !!(e && e.__v_isRef === !0);
}
function ri(e) {
  return le(e) ? e.value : e;
}
const si = {
  get: (e, t, n) => ri(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return le(r) && !le(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function wr(e) {
  return at(e) ? e : new Proxy(e, si);
}
var xr;
class ii {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[xr] = !1, this._dirty = !0, this.effect = new lo(t, () => {
      this._dirty || (this._dirty = !0, oi(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = F(this);
    return ni(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
xr = "__v_isReadonly";
function ci(e, t, n = !1) {
  let o, r;
  const s = j(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : ue) : (o = e.get, r = e.set);
  const c = new ii(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (c.effect.onTrack = t.onTrack, c.effect.onTrigger = t.onTrigger), c;
}
const pt = [];
function Gt(e) {
  pt.push(e);
}
function en() {
  pt.pop();
}
function b(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  Et();
  const n = pt.length ? pt[pt.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = li();
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
`, ...ui(r)), console.warn(...s);
  }
  vt();
}
function li() {
  let e = pt[pt.length - 1];
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
function ui(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...fi(n));
  }), t;
}
function fi({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${Dn(e.component, e.type, o)}`, s = ">" + n;
  return e.props ? [r, ...ai(e.props), s] : [r + s];
}
function ai(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Dr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Dr(e, t, n) {
  return te(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : le(t) ? (t = Dr(e, F(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : j(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = F(t), n ? t : [`${e}=`, t]);
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
    bn(s, t, n);
  }
  return r;
}
function $e(e, t, n, o) {
  if (j(e)) {
    const s = We(e, t, n, o);
    return s && so(s) && s.catch((c) => {
      bn(c, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push($e(e[s], t, n, o));
  return r;
}
function bn(e, t, n, o = !0) {
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
  pi(e, n, r, o);
}
function pi(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = ho[t];
    if (n && Gt(n), b(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && en(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Ft = !1, kn = !1;
const fe = [];
let He = 0;
const Dt = [];
let Se = null, Ye = 0;
const Vr = /* @__PURE__ */ Promise.resolve();
let mo = null;
const di = 100;
function hi(e) {
  const t = mo || Vr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function mi(e) {
  let t = He + 1, n = fe.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    Ht(fe[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function yn(e) {
  (!fe.length || !fe.includes(e, Ft && e.allowRecurse ? He + 1 : He)) && (e.id == null ? fe.push(e) : fe.splice(mi(e.id), 0, e), Cr());
}
function Cr() {
  !Ft && !kn && (kn = !0, mo = Vr.then(Ir));
}
function gi(e) {
  const t = fe.indexOf(e);
  t > He && fe.splice(t, 1);
}
function Tr(e) {
  P(e) ? Dt.push(...e) : (!Se || !Se.includes(e, e.allowRecurse ? Ye + 1 : Ye)) && Dt.push(e), Cr();
}
function Ao(e, t = Ft ? He + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < fe.length; t++) {
    const n = fe[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && go(e, n))
        continue;
      fe.splice(t, 1), t--, n();
    }
  }
}
function $r(e) {
  if (Dt.length) {
    const t = [...new Set(Dt)];
    if (Dt.length = 0, Se) {
      Se.push(...t);
      return;
    }
    for (Se = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Se.sort((n, o) => Ht(n) - Ht(o)), Ye = 0; Ye < Se.length; Ye++)
      process.env.NODE_ENV !== "production" && go(e, Se[Ye]) || Se[Ye]();
    Se = null, Ye = 0;
  }
}
const Ht = (e) => e.id == null ? 1 / 0 : e.id, _i = (e, t) => {
  const n = Ht(e) - Ht(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Ir(e) {
  kn = !1, Ft = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), fe.sort(_i);
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
    He = 0, fe.length = 0, $r(e), Ft = !1, mo = null, (fe.length || Dt.length) && Ir(e);
  }
}
function go(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > di) {
      const o = t.ownerInstance, r = o && ss(o.type);
      return b(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let dt = !1;
const bt = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (ur().__VUE_HMR_RUNTIME__ = {
  createRecord: Cn(Pr),
  rerender: Cn(Ni),
  reload: Cn(bi)
});
const _t = /* @__PURE__ */ new Map();
function Ei(e) {
  const t = e.type.__hmrId;
  let n = _t.get(t);
  n || (Pr(t, e.type), n = _t.get(t)), n.instances.add(e);
}
function vi(e) {
  _t.get(e.type.__hmrId).instances.delete(e);
}
function Pr(e, t) {
  return _t.has(e) ? !1 : (_t.set(e, {
    initialDef: At(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function At(e) {
  return is(e) ? e.__vccOpts : e;
}
function Ni(e, t) {
  const n = _t.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, At(o.type).render = t), o.renderCache = [], dt = !0, o.update(), dt = !1;
  }));
}
function bi(e, t) {
  const n = _t.get(e);
  if (!n)
    return;
  t = At(t), Ro(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = At(r.type);
    bt.has(s) || (s !== n.initialDef && Ro(s, t), bt.add(s)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (bt.add(s), r.ceReload(t.styles), bt.delete(s)) : r.parent ? yn(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  Tr(() => {
    for (const r of o)
      bt.delete(At(r.type));
  });
}
function Ro(e, t) {
  se(e, t);
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
function Mr(e, t) {
  var n, o;
  Le = e, Le ? (Le.enabled = !0, jt.forEach(({ event: r, args: s }) => Le.emit(r, ...s)), jt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Mr(s, t);
  }), setTimeout(() => {
    Le || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Bn = !0, jt = []);
  }, 3e3)) : (Bn = !0, jt = []);
}
function yi(e, t) {
  Kt("app:init", e, t, {
    Fragment: Fe,
    Text: Wt,
    Comment: Ie,
    Static: rn
  });
}
function Oi(e) {
  Kt("app:unmount", e);
}
const wi = /* @__PURE__ */ _o(
  "component:added"
  /* DevtoolsHooks.COMPONENT_ADDED */
), jr = /* @__PURE__ */ _o(
  "component:updated"
  /* DevtoolsHooks.COMPONENT_UPDATED */
), xi = /* @__PURE__ */ _o(
  "component:removed"
  /* DevtoolsHooks.COMPONENT_REMOVED */
), Di = (e) => {
  Le && typeof Le.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Le.cleanupBuffer(e) && xi(e);
};
function _o(e) {
  return (t) => {
    Kt(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const Vi = /* @__PURE__ */ Ar(
  "perf:start"
  /* DevtoolsHooks.PERFORMANCE_START */
), Ci = /* @__PURE__ */ Ar(
  "perf:end"
  /* DevtoolsHooks.PERFORMANCE_END */
);
function Ar(e) {
  return (t, n, o) => {
    Kt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Ti(e, t, n) {
  Kt("component:emit", e.appContext.app, e, t, n);
}
function $i(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || z;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: m, propsOptions: [a] } = e;
    if (m)
      if (!(t in m))
        (!a || !(it(t) in a)) && b(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${it(t)}" prop.`);
      else {
        const E = m[t];
        j(E) && (E(...n) || b(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), c = s && t.slice(7);
  if (c && c in o) {
    const m = `${c === "modelValue" ? "model" : c}Modifiers`, { number: a, trim: E } = o[m] || z;
    E && (r = n.map((V) => te(V) ? V.trim() : V)), a && (r = n.map(ws));
  }
  if (process.env.NODE_ENV !== "production" && Ti(e, t, r), process.env.NODE_ENV !== "production") {
    const m = t.toLowerCase();
    m !== t && o[it(m)] && b(`Event "${m}" is emitted in component ${Dn(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ge(t)}" instead of "${t}".`);
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
function Rr(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let c = {}, l = !1;
  if (!j(e)) {
    const f = (p) => {
      const m = Rr(p, t, !0);
      m && (l = !0, se(c, m));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !s && !l ? (W(e) && o.set(e, null), null) : (P(s) ? s.forEach((f) => c[f] = null) : se(c, s), W(e) && o.set(e, c), c);
}
function On(e, t) {
  return !e || !Bt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, Ge(t)) || H(e, t));
}
let we = null, Sr = null;
function fn(e) {
  const t = we;
  return we = e, Sr = e && e.type.__scopeId || null, t;
}
function Ii(e, t = we, n) {
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
    return process.env.NODE_ENV !== "production" && jr(t), c;
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
  const ne = fn(e);
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
      )), ce = t.props ? f : Mi(f);
    }
  } catch (Q) {
    Rt.length = 0, bn(
      Q,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), J = Te(Ie);
  }
  let Y = J, L;
  if (process.env.NODE_ENV !== "production" && J.patchFlag > 0 && J.patchFlag & 2048 && ([Y, L] = Pi(J)), ce && R !== !1) {
    const Q = Object.keys(ce), { shapeFlag: Pe } = Y;
    if (Q.length) {
      if (Pe & 7)
        c && Q.some(cn) && (ce = ji(ce, c)), Y = tt(Y, ce);
      else if (process.env.NODE_ENV !== "production" && !Kn && Y.type !== Ie) {
        const be = Object.keys(f), _e = [], ve = [];
        for (let w = 0, C = be.length; w < C; w++) {
          const T = be[w];
          Bt(T) ? cn(T) || _e.push(T[2].toLowerCase() + T.slice(3)) : ve.push(T);
        }
        ve.length && b(`Extraneous non-props attributes (${ve.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), _e.length && b(`Extraneous non-emits event listeners (${_e.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !So(Y) && b("Runtime directive used on component with non-element root node. The directives will not function as intended."), Y = tt(Y), Y.dirs = Y.dirs ? Y.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !So(Y) && b("Component inside <Transition> renders non-element root node that cannot be animated."), Y.transition = n.transition), process.env.NODE_ENV !== "production" && L ? L(Y) : J = Y, fn(ne), J;
}
const Pi = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Fr(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, c = (l) => {
    t[r] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Ve(o), c];
};
function Fr(e) {
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
const Mi = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Bt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ji = (e, t) => {
  const n = {};
  for (const o in e)
    (!cn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, So = (e) => e.shapeFlag & 7 || e.type === Ie;
function Ai(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: c, children: l, patchFlag: f } = t, p = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || l) && dt || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? Fo(o, c, p) : !!c;
    if (f & 8) {
      const m = t.dynamicProps;
      for (let a = 0; a < m.length; a++) {
        const E = m[a];
        if (c[E] !== o[E] && !On(p, E))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : o === c ? !1 : o ? c ? Fo(o, c, p) : !0 : !!c;
  return !1;
}
function Fo(e, t, n) {
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
function Ri({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Si = (e) => e.__isSuspense;
function Fi(e, t) {
  t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : Tr(e);
}
function Hi(e, t) {
  if (!re)
    process.env.NODE_ENV !== "production" && b("provide() can only be used inside setup().");
  else {
    let n = re.provides;
    const o = re.parent && re.parent.provides;
    o === n && (n = re.provides = Object.create(o)), n[e] = t;
  }
}
function tn(e, t, n = !1) {
  const o = re || we;
  if (o) {
    const r = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && j(t) ? t.call(o.proxy) : t;
    process.env.NODE_ENV !== "production" && b(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && b("inject() can only be used inside setup() or functional components.");
}
const Xt = {};
function $n(e, t, n) {
  return process.env.NODE_ENV !== "production" && !j(t) && b("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), Hr(e, t, n);
}
function Hr(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: c } = z) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && b('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && b('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const l = (L) => {
    b("Invalid watch source: ", L, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, f = Vs() === (re == null ? void 0 : re.scope) ? re : null;
  let p, m = !1, a = !1;
  if (le(e) ? (p = () => e.value, m = Ln(e)) : at(e) ? (p = () => e, o = !0) : P(e) ? (a = !0, m = e.some((L) => at(L) || Ln(L)), p = () => e.map((L) => {
    if (le(L))
      return L.value;
    if (at(L))
      return wt(L);
    if (j(L))
      return We(
        L,
        f,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
    process.env.NODE_ENV !== "production" && l(L);
  })) : j(e) ? t ? p = () => We(
    e,
    f,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : p = () => {
    if (!(f && f.isUnmounted))
      return E && E(), $e(e, f, 3, [V]);
  } : (p = ue, process.env.NODE_ENV !== "production" && l(e)), t && o) {
    const L = p;
    p = () => wt(L());
  }
  let E, V = (L) => {
    E = ne.onStop = () => {
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
      const L = Yc();
      B = L.__watcherHandles || (L.__watcherHandles = []);
    } else
      return ue;
  let R = a ? new Array(e.length).fill(Xt) : Xt;
  const J = () => {
    if (ne.active)
      if (t) {
        const L = ne.run();
        (o || m || (a ? L.some((Q, Pe) => ln(Q, R[Pe])) : ln(L, R))) && (E && E(), $e(t, f, 3, [
          L,
          // pass undefined as the old value when it's changed for the first time
          R === Xt ? void 0 : a && R[0] === Xt ? [] : R,
          V
        ]), R = L);
      } else
        ne.run();
  };
  J.allowRecurse = !!t;
  let ce;
  r === "sync" ? ce = J : r === "post" ? ce = () => Ee(J, f && f.suspense) : (J.pre = !0, f && (J.id = f.uid), ce = () => yn(J));
  const ne = new lo(p, ce);
  process.env.NODE_ENV !== "production" && (ne.onTrack = s, ne.onTrigger = c), t ? n ? J() : R = ne.run() : r === "post" ? Ee(ne.run.bind(ne), f && f.suspense) : ne.run();
  const Y = () => {
    ne.stop(), f && f.scope && oo(f.scope.effects, ne);
  };
  return B && B.push(Y), Y;
}
function Li(e, t, n) {
  const o = this.proxy, r = te(e) ? e.includes(".") ? Lr(o, e) : () => o[e] : e.bind(o, o);
  let s;
  j(t) ? s = t : (s = t.handler, n = t);
  const c = re;
  Ct(this);
  const l = Hr(r, s.bind(o), n);
  return c ? Ct(c) : mt(), l;
}
function Lr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function wt(e, t) {
  if (!W(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), le(e))
    wt(e.value, t);
  else if (P(e))
    for (let n = 0; n < e.length; n++)
      wt(e[n], t);
  else if (ir(e) || ut(e))
    e.forEach((n) => {
      wt(n, t);
    });
  else if (lr(e))
    for (const n in e)
      wt(e[n], t);
  return e;
}
function Ui(e) {
  return j(e) ? { setup: e, name: e.name } : e;
}
const nn = (e) => !!e.type.__asyncLoader, Eo = (e) => e.type.__isKeepAlive;
function ki(e, t) {
  Ur(e, "a", t);
}
function Bi(e, t) {
  Ur(e, "da", t);
}
function Ur(e, t, n = re) {
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
      Eo(r.parent.vnode) && Ki(o, t, n, r), r = r.parent;
  }
}
function Ki(e, t, n, o) {
  const r = wn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  kr(() => {
    oo(o[t], r);
  }, n);
}
function wn(e, t, n = re, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...c) => {
      if (n.isUnmounted)
        return;
      Et(), Ct(n);
      const l = $e(t, n, e, c);
      return mt(), vt(), l;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = it(ho[e].replace(/ hook$/, ""));
    b(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const ze = (e) => (t, n = re) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!kt || e === "sp") && wn(e, (...o) => t(...o), n)
), Wi = ze(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), qi = ze(
  "m"
  /* LifecycleHooks.MOUNTED */
), zi = ze(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), Ji = ze(
  "u"
  /* LifecycleHooks.UPDATED */
), Yi = ze(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), kr = ze(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), Zi = ze(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), Xi = ze(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), Qi = ze(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function Gi(e, t = re) {
  wn("ec", e, t);
}
function Br(e) {
  bs(e) && b("Do not use built-in directive ids as custom directive id: " + e);
}
function rt(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let c = 0; c < r.length; c++) {
    const l = r[c];
    s && (l.oldValue = s[c].value);
    let f = l.dir[o];
    f && (Et(), $e(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), vt());
  }
}
const ec = Symbol(), Wn = (e) => e ? os(e) ? Oo(e) || e.proxy : Wn(e.parent) : null, ht = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ se(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Ot(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Ot(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Ot(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Ot(e.refs) : e.refs,
    $parent: (e) => Wn(e.parent),
    $root: (e) => Wn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => No(e),
    $forceUpdate: (e) => e.f || (e.f = () => yn(e.update)),
    $nextTick: (e) => e.n || (e.n = hi.bind(e.proxy)),
    $watch: (e) => Li.bind(e)
  })
), vo = (e) => e === "_" || e === "$", In = (e, t) => e !== z && !e.__isScriptSetup && H(e, t), Kr = {
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
        if (r !== z && H(r, t))
          return c[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (p = e.propsOptions[0]) && H(p, t)
        )
          return c[t] = 3, s[t];
        if (n !== z && H(n, t))
          return c[t] = 4, n[t];
        qn && (c[t] = 0);
      }
    }
    const m = ht[t];
    let a, E;
    if (m)
      return t === "$attrs" && (ge(e, "get", t), process.env.NODE_ENV !== "production" && an()), m(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== z && H(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      E = f.config.globalProperties, H(E, t)
    )
      return E[t];
    process.env.NODE_ENV !== "production" && we && (!te(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== z && vo(t[0]) && H(r, t) ? b(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === we && b(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return In(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && H(r, t) ? (b(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== z && H(o, t) ? (o[t] = n, !0) : H(e.props, t) ? (process.env.NODE_ENV !== "production" && b(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && b(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s } }, c) {
    let l;
    return !!n[c] || e !== z && H(e, c) || In(t, c) || (l = s[0]) && H(l, c) || H(o, c) || H(ht, c) || H(r.config.globalProperties, c);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : H(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Kr.ownKeys = (e) => (b("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function tc(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(ht).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => ht[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ue
    });
  }), t;
}
function nc(e) {
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
function oc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(F(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (vo(o[0])) {
        b(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
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
function rc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? b(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let qn = !0;
function sc(e) {
  const t = No(e), n = e.proxy, o = e.ctx;
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
    beforeUnmount: ne,
    destroyed: Y,
    unmounted: L,
    render: Q,
    renderTracked: Pe,
    renderTriggered: be,
    errorCaptured: _e,
    serverPrefetch: ve,
    // public API
    expose: w,
    inheritAttrs: C,
    // assets
    components: T,
    directives: Z,
    filters: ae
  } = t, pe = process.env.NODE_ENV !== "production" ? rc() : null;
  if (process.env.NODE_ENV !== "production") {
    const [M] = e.propsOptions;
    if (M)
      for (const S in M)
        pe("Props", S);
  }
  if (p && ic(p, o, pe, e.appContext.config.unwrapInjectedRef), c)
    for (const M in c) {
      const S = c[M];
      j(S) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, M, {
        value: S.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[M] = S.bind(n), process.env.NODE_ENV !== "production" && pe("Methods", M)) : process.env.NODE_ENV !== "production" && b(`Method "${M}" has type "${typeof S}" in the component definition. Did you reference the function correctly?`);
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !j(r) && b("The data option must be a function. Plain object usage is no longer supported.");
    const M = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && so(M) && b("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !W(M))
      process.env.NODE_ENV !== "production" && b("data() should return an object.");
    else if (e.data = fo(M), process.env.NODE_ENV !== "production")
      for (const S in M)
        pe("Data", S), vo(S[0]) || Object.defineProperty(o, S, {
          configurable: !0,
          enumerable: !0,
          get: () => M[S],
          set: ue
        });
  }
  if (qn = !0, s)
    for (const M in s) {
      const S = s[M], ye = j(S) ? S.bind(n, n) : j(S.get) ? S.get.bind(n, n) : ue;
      process.env.NODE_ENV !== "production" && ye === ue && b(`Computed property "${M}" has no getter.`);
      const Ue = !j(S) && j(S.set) ? S.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        b(`Write operation failed: computed property "${M}" is readonly.`);
      } : ue, Me = qc({
        get: ye,
        set: Ue
      });
      Object.defineProperty(o, M, {
        enumerable: !0,
        configurable: !0,
        get: () => Me.value,
        set: (Oe) => Me.value = Oe
      }), process.env.NODE_ENV !== "production" && pe("Computed", M);
    }
  if (l)
    for (const M in l)
      Wr(l[M], o, n, M);
  if (f) {
    const M = j(f) ? f.call(n) : f;
    Reflect.ownKeys(M).forEach((S) => {
      Hi(S, M[S]);
    });
  }
  m && Ho(
    m,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function G(M, S) {
    P(S) ? S.forEach((ye) => M(ye.bind(n))) : S && M(S.bind(n));
  }
  if (G(Wi, a), G(qi, E), G(zi, V), G(Ji, B), G(ki, R), G(Bi, J), G(Gi, _e), G(Qi, Pe), G(Xi, be), G(Yi, ne), G(kr, L), G(Zi, ve), P(w))
    if (w.length) {
      const M = e.exposed || (e.exposed = {});
      w.forEach((S) => {
        Object.defineProperty(M, S, {
          get: () => n[S],
          set: (ye) => n[S] = ye
        });
      });
    } else
      e.exposed || (e.exposed = {});
  Q && e.render === ue && (e.render = Q), C != null && (e.inheritAttrs = C), T && (e.components = T), Z && (e.directives = Z);
}
function ic(e, t, n = ue, o = !1) {
  P(e) && (e = zn(e));
  for (const r in e) {
    const s = e[r];
    let c;
    W(s) ? "default" in s ? c = tn(
      s.from || r,
      s.default,
      !0
      /* treat default function as factory */
    ) : c = tn(s.from || r) : c = tn(s), le(c) ? o ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => c.value,
      set: (l) => c.value = l
    }) : (process.env.NODE_ENV !== "production" && b(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[r] = c) : t[r] = c, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Ho(e, t, n) {
  $e(P(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Wr(e, t, n, o) {
  const r = o.includes(".") ? Lr(n, o) : () => n[o];
  if (te(e)) {
    const s = t[e];
    j(s) ? $n(r, s) : process.env.NODE_ENV !== "production" && b(`Invalid watch handler specified by key "${e}"`, s);
  } else if (j(e))
    $n(r, e.bind(n));
  else if (W(e))
    if (P(e))
      e.forEach((s) => Wr(s, t, n, o));
    else {
      const s = j(e.handler) ? e.handler.bind(n) : t[e.handler];
      j(s) ? $n(r, s, e) : process.env.NODE_ENV !== "production" && b(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && b(`Invalid watch option: "${o}"`, e);
}
function No(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: c } } = e.appContext, l = s.get(t);
  let f;
  return l ? f = l : !r.length && !n && !o ? f = t : (f = {}, r.length && r.forEach((p) => pn(f, p, c, !0)), pn(f, t, c)), W(t) && s.set(t, f), f;
}
function pn(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && pn(e, s, n, !0), r && r.forEach((c) => pn(e, c, n, !0));
  for (const c in t)
    if (o && c === "expose")
      process.env.NODE_ENV !== "production" && b('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const l = cc[c] || n && n[c];
      e[c] = l ? l(e[c], t[c]) : t[c];
    }
  return e;
}
const cc = {
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
  watch: uc,
  // provide / inject
  provide: Lo,
  inject: lc
};
function Lo(e, t) {
  return t ? e ? function() {
    return se(j(e) ? e.call(this, this) : e, j(t) ? t.call(this, this) : t);
  } : t : e;
}
function lc(e, t) {
  return ct(zn(e), zn(t));
}
function zn(e) {
  if (P(e)) {
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
  return e ? se(se(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function uc(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = se(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = he(e[o], t[o]);
  return n;
}
function fc(e, t, n, o = !1) {
  const r = {}, s = {};
  un(s, xn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), qr(e, t, r, s);
  for (const c in e.propsOptions[0])
    c in r || (r[c] = void 0);
  process.env.NODE_ENV !== "production" && Jr(t || {}, r, e), n ? e.props = o ? r : ti(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function ac(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function pc(e, t, n, o) {
  const { props: r, attrs: s, vnode: { patchFlag: c } } = e, l = F(r), [f] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && ac(e)) && (o || c > 0) && !(c & 16)
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
    qr(e, t, r, s) && (p = !0);
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
  p && qe(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && Jr(t || {}, r, e);
}
function qr(e, t, n, o) {
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
    const f = F(n), p = l || z;
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
      if (c.type !== Function && j(f)) {
        const { propsDefaults: p } = r;
        n in p ? o = p[n] : (Ct(r), o = p[n] = f.call(null, t), mt());
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
function zr(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, c = {}, l = [];
  let f = !1;
  if (!j(e)) {
    const m = (a) => {
      f = !0;
      const [E, V] = zr(a, t, !0);
      se(c, E), V && l.push(...V);
    };
    !n && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  if (!s && !f)
    return W(e) && o.set(e, xt), xt;
  if (P(s))
    for (let m = 0; m < s.length; m++) {
      process.env.NODE_ENV !== "production" && !te(s[m]) && b("props must be strings when using array syntax.", s[m]);
      const a = Vt(s[m]);
      Uo(a) && (c[a] = z);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !W(s) && b("invalid props options", s);
    for (const m in s) {
      const a = Vt(m);
      if (Uo(a)) {
        const E = s[m], V = c[a] = P(E) || j(E) ? { type: E } : Object.assign({}, E);
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
  return W(e) && o.set(e, p), p;
}
function Uo(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && b(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Yn(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function ko(e, t) {
  return Yn(e) === Yn(t);
}
function Bo(e, t) {
  return P(t) ? t.findIndex((n) => ko(n, e)) : j(t) && ko(t, e) ? 0 : -1;
}
function Jr(e, t, n) {
  const o = F(t), r = n.propsOptions[0];
  for (const s in r) {
    let c = r[s];
    c != null && dc(s, o[s], c, !H(e, s) && !H(e, Ge(s)));
  }
}
function dc(e, t, n, o) {
  const { type: r, required: s, validator: c } = n;
  if (s && o) {
    b('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (r != null && r !== !0) {
      let l = !1;
      const f = P(r) ? r : [r], p = [];
      for (let m = 0; m < f.length && !l; m++) {
        const { valid: a, expectedType: E } = mc(t, f[m]);
        p.push(E || ""), l = a;
      }
      if (!l) {
        b(gc(e, t, p));
        return;
      }
    }
    c && !c(t) && b('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const hc = /* @__PURE__ */ nt("String,Number,Boolean,Function,Symbol,BigInt");
function mc(e, t) {
  let n;
  const o = Yn(t);
  if (hc(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = W(e) : o === "Array" ? n = P(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function gc(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(gn).join(" | ")}`;
  const r = n[0], s = io(t), c = Ko(t, r), l = Ko(t, s);
  return n.length === 1 && Wo(r) && !_c(r, s) && (o += ` with value ${c}`), o += `, got ${s} `, Wo(s) && (o += `with value ${l}.`), o;
}
function Ko(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Wo(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function _c(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Yr = (e) => e[0] === "_" || e === "$stable", bo = (e) => P(e) ? e.map(Ve) : [Ve(e)], Ec = (e, t, n) => {
  if (t._n)
    return t;
  const o = Ii((...r) => (process.env.NODE_ENV !== "production" && re && b(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), bo(t(...r))), n);
  return o._c = !1, o;
}, Zr = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (Yr(r))
      continue;
    const s = e[r];
    if (j(s))
      t[r] = Ec(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && b(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);
      const c = bo(s);
      t[r] = () => c;
    }
  }
}, Xr = (e, t) => {
  process.env.NODE_ENV !== "production" && !Eo(e.vnode) && b("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = bo(t);
  e.slots.default = () => n;
}, vc = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = F(t), un(t, "_", n)) : Zr(t, e.slots = {});
  } else
    e.slots = {}, t && Xr(e, t);
  un(e.slots, xn, 1);
}, Nc = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, c = z;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && dt ? se(r, t) : n && l === 1 ? s = !1 : (se(r, t), !n && l === 1 && delete r._) : (s = !t.$stable, Zr(t, r)), c = t;
  } else
    t && (Xr(e, t), c = { default: 1 });
  if (s)
    for (const l in r)
      !Yr(l) && !(l in c) && delete r[l];
};
function Qr() {
  return {
    app: null,
    config: {
      isNativeTag: sr,
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
let bc = 0;
function yc(e, t) {
  return function(o, r = null) {
    j(o) || (o = Object.assign({}, o)), r != null && !W(r) && (process.env.NODE_ENV !== "production" && b("root props passed to app.mount() must be an object."), r = null);
    const s = Qr(), c = /* @__PURE__ */ new Set();
    let l = !1;
    const f = s.app = {
      _uid: bc++,
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
        process.env.NODE_ENV !== "production" && b("app.config cannot be replaced. Modify individual options instead.");
      },
      use(p, ...m) {
        return c.has(p) ? process.env.NODE_ENV !== "production" && b("Plugin has already been applied to target app.") : p && j(p.install) ? (c.add(p), p.install(f, ...m)) : j(p) ? (c.add(p), p(f, ...m)) : process.env.NODE_ENV !== "production" && b('A plugin must either be a function or an object with an "install" function.'), f;
      },
      mixin(p) {
        return s.mixins.includes(p) ? process.env.NODE_ENV !== "production" && b("Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")) : s.mixins.push(p), f;
      },
      component(p, m) {
        return process.env.NODE_ENV !== "production" && Xn(p, s.config), m ? (process.env.NODE_ENV !== "production" && s.components[p] && b(`Component "${p}" has already been registered in target app.`), s.components[p] = m, f) : s.components[p];
      },
      directive(p, m) {
        return process.env.NODE_ENV !== "production" && Br(p), m ? (process.env.NODE_ENV !== "production" && s.directives[p] && b(`Directive "${p}" has already been registered in target app.`), s.directives[p] = m, f) : s.directives[p];
      },
      mount(p, m, a) {
        if (l)
          process.env.NODE_ENV !== "production" && b("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && p.__vue_app__ && b("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const E = Te(o, r);
          return E.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(tt(E), p, a);
          }), m && t ? t(E, p) : e(E, p, a), l = !0, f._container = p, p.__vue_app__ = f, process.env.NODE_ENV !== "production" && (f._instance = E.component, yi(f, Yo)), Oo(E.component) || E.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, f._container), process.env.NODE_ENV !== "production" && (f._instance = null, Oi(f)), delete f._container.__vue_app__) : process.env.NODE_ENV !== "production" && b("Cannot unmount an app that is not mounted.");
      },
      provide(p, m) {
        return process.env.NODE_ENV !== "production" && p in s.provides && b(`App already provides property with key "${String(p)}". It will be overwritten with the new value.`), s.provides[p] = m, f;
      }
    };
    return f;
  };
}
function Zn(e, t, n, o, r = !1) {
  if (P(e)) {
    e.forEach((E, V) => Zn(E, t && (P(t) ? t[V] : t), n, o, r));
    return;
  }
  if (nn(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? Oo(o.component) || o.component.proxy : o.el, c = r ? null : s, { i: l, r: f } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    b("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const p = t && t.r, m = l.refs === z ? l.refs = {} : l.refs, a = l.setupState;
  if (p != null && p !== f && (te(p) ? (m[p] = null, H(a, p) && (a[p] = null)) : le(p) && (p.value = null)), j(f))
    We(f, l, 12, [c, m]);
  else {
    const E = te(f), V = le(f);
    if (E || V) {
      const B = () => {
        if (e.f) {
          const R = E ? H(a, f) ? a[f] : m[f] : f.value;
          r ? P(R) && oo(R, s) : P(R) ? R.includes(s) || R.push(s) : E ? (m[f] = [s], H(a, f) && (a[f] = m[f])) : (f.value = [s], e.k && (m[e.k] = f.value));
        } else
          E ? (m[f] = c, H(a, f) && (a[f] = c)) : V ? (f.value = c, e.k && (m[e.k] = c)) : process.env.NODE_ENV !== "production" && b("Invalid template ref type:", f, `(${typeof f})`);
      };
      c ? (B.id = -1, Ee(B, n)) : B();
    } else
      process.env.NODE_ENV !== "production" && b("Invalid template ref type:", f, `(${typeof f})`);
  }
}
let It, Xe;
function Be(e, t) {
  e.appContext.config.performance && dn() && Xe.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Vi(e, t, dn() ? Xe.now() : Date.now());
}
function Ke(e, t) {
  if (e.appContext.config.performance && dn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Xe.mark(o), Xe.measure(`<${Dn(e, e.type)}> ${t}`, n, o), Xe.clearMarks(n), Xe.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Ci(e, t, dn() ? Xe.now() : Date.now());
}
function dn() {
  return It !== void 0 || (typeof window < "u" && window.performance ? (It = !0, Xe = window.performance) : It = !1), It;
}
function Oc() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const Ee = Fi;
function wc(e) {
  return xc(e);
}
function xc(e, t) {
  Oc();
  const n = ur();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Mr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: r, patchProp: s, createElement: c, createText: l, createComment: f, setText: p, setElementText: m, parentNode: a, nextSibling: E, setScopeId: V = ue, insertStaticContent: B } = e, R = (i, u, d, g = null, h = null, N = null, O = !1, v = null, y = process.env.NODE_ENV !== "production" && dt ? !1 : !!u.dynamicChildren) => {
    if (i === u)
      return;
    i && !Pt(i, u) && (g = k(i), Ne(i, h, N, !0), i = null), u.patchFlag === -2 && (y = !1, u.dynamicChildren = null);
    const { type: _, ref: D, shapeFlag: x } = u;
    switch (_) {
      case Wt:
        J(i, u, d, g);
        break;
      case Ie:
        ce(i, u, d, g);
        break;
      case rn:
        i == null ? ne(u, d, g, O) : process.env.NODE_ENV !== "production" && Y(i, u, d, O);
        break;
      case Fe:
        Z(i, u, d, g, h, N, O, v, y);
        break;
      default:
        x & 1 ? Pe(i, u, d, g, h, N, O, v, y) : x & 6 ? ae(i, u, d, g, h, N, O, v, y) : x & 64 || x & 128 ? _.process(i, u, d, g, h, N, O, v, y, ee) : process.env.NODE_ENV !== "production" && b("Invalid VNode type:", _, `(${typeof _})`);
    }
    D != null && h && Zn(D, i && i.ref, N, u || i, !u);
  }, J = (i, u, d, g) => {
    if (i == null)
      o(u.el = l(u.children), d, g);
    else {
      const h = u.el = i.el;
      u.children !== i.children && p(h, u.children);
    }
  }, ce = (i, u, d, g) => {
    i == null ? o(u.el = f(u.children || ""), d, g) : u.el = i.el;
  }, ne = (i, u, d, g) => {
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
  }, Pe = (i, u, d, g, h, N, O, v, y) => {
    O = O || u.type === "svg", i == null ? be(u, d, g, h, N, O, v, y) : w(i, u, h, N, O, v, y);
  }, be = (i, u, d, g, h, N, O, v) => {
    let y, _;
    const { type: D, props: x, shapeFlag: $, transition: A, dirs: U } = i;
    if (y = i.el = c(i.type, N, x && x.is, x), $ & 8 ? m(y, i.children) : $ & 16 && ve(i.children, y, null, g, h, N && D !== "foreignObject", O, v), U && rt(i, null, g, "created"), _e(y, i, i.scopeId, O, g), x) {
      for (const K in x)
        K !== "value" && !Qt(K) && s(y, K, null, x[K], N, i.children, g, h, I);
      "value" in x && s(y, "value", null, x.value), (_ = x.onVnodeBeforeMount) && Re(_, g, i);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(y, "__vnode", {
      value: i,
      enumerable: !1
    }), Object.defineProperty(y, "__vueParentComponent", {
      value: g,
      enumerable: !1
    })), U && rt(i, null, g, "beforeMount");
    const q = (!h || h && !h.pendingBranch) && A && !A.persisted;
    q && A.beforeEnter(y), o(y, u, d), ((_ = x && x.onVnodeMounted) || q || U) && Ee(() => {
      _ && Re(_, g, i), q && A.enter(y), U && rt(i, null, g, "mounted");
    }, h);
  }, _e = (i, u, d, g, h) => {
    if (d && V(i, d), g)
      for (let N = 0; N < g.length; N++)
        V(i, g[N]);
    if (h) {
      let N = h.subTree;
      if (process.env.NODE_ENV !== "production" && N.patchFlag > 0 && N.patchFlag & 2048 && (N = Fr(N.children) || N), u === N) {
        const O = h.vnode;
        _e(i, O, O.scopeId, O.slotScopeIds, h.parent);
      }
    }
  }, ve = (i, u, d, g, h, N, O, v, y = 0) => {
    for (let _ = y; _ < i.length; _++) {
      const D = i[_] = v ? Ze(i[_]) : Ve(i[_]);
      R(null, D, u, d, g, h, N, O, v);
    }
  }, w = (i, u, d, g, h, N, O) => {
    const v = u.el = i.el;
    let { patchFlag: y, dynamicChildren: _, dirs: D } = u;
    y |= i.patchFlag & 16;
    const x = i.props || z, $ = u.props || z;
    let A;
    d && st(d, !1), (A = $.onVnodeBeforeUpdate) && Re(A, d, u, i), D && rt(u, i, d, "beforeUpdate"), d && st(d, !0), process.env.NODE_ENV !== "production" && dt && (y = 0, O = !1, _ = null);
    const U = h && u.type !== "foreignObject";
    if (_ ? (C(i.dynamicChildren, _, v, d, g, U, N), process.env.NODE_ENV !== "production" && d && d.type.__hmrId && on(i, u)) : O || ye(i, u, v, null, d, g, U, N, !1), y > 0) {
      if (y & 16)
        T(v, u, x, $, d, g, h);
      else if (y & 2 && x.class !== $.class && s(v, "class", null, $.class, h), y & 4 && s(v, "style", x.style, $.style, h), y & 8) {
        const q = u.dynamicProps;
        for (let K = 0; K < q.length; K++) {
          const oe = q[K], xe = x[oe], Nt = $[oe];
          (Nt !== xe || oe === "value") && s(v, oe, xe, Nt, h, i.children, d, g, I);
        }
      }
      y & 1 && i.children !== u.children && m(v, u.children);
    } else
      !O && _ == null && T(v, u, x, $, d, g, h);
    ((A = $.onVnodeUpdated) || D) && Ee(() => {
      A && Re(A, d, u, i), D && rt(u, i, d, "updated");
    }, g);
  }, C = (i, u, d, g, h, N, O) => {
    for (let v = 0; v < u.length; v++) {
      const y = i[v], _ = u[v], D = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === Fe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pt(y, _) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 70) ? a(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      R(y, _, D, null, g, h, N, O, !0);
    }
  }, T = (i, u, d, g, h, N, O) => {
    if (d !== g) {
      if (d !== z)
        for (const v in d)
          !Qt(v) && !(v in g) && s(i, v, d[v], null, O, u.children, h, N, I);
      for (const v in g) {
        if (Qt(v))
          continue;
        const y = g[v], _ = d[v];
        y !== _ && v !== "value" && s(i, v, _, y, O, u.children, h, N, I);
      }
      "value" in g && s(i, "value", d.value, g.value);
    }
  }, Z = (i, u, d, g, h, N, O, v, y) => {
    const _ = u.el = i ? i.el : l(""), D = u.anchor = i ? i.anchor : l("");
    let { patchFlag: x, dynamicChildren: $, slotScopeIds: A } = u;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (dt || x & 2048) && (x = 0, y = !1, $ = null), A && (v = v ? v.concat(A) : A), i == null ? (o(_, d, g), o(D, d, g), ve(u.children, d, D, h, N, O, v, y)) : x > 0 && x & 64 && $ && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    i.dynamicChildren ? (C(i.dynamicChildren, $, d, h, N, O, v), process.env.NODE_ENV !== "production" && h && h.type.__hmrId ? on(i, u) : (
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
    )) : ye(i, u, d, D, h, N, O, v, y);
  }, ae = (i, u, d, g, h, N, O, v, y) => {
    u.slotScopeIds = v, i == null ? u.shapeFlag & 512 ? h.ctx.activate(u, d, g, O, y) : pe(u, d, g, h, N, O, y) : G(i, u, y);
  }, pe = (i, u, d, g, h, N, O) => {
    const v = i.component = Fc(i, g, h);
    if (process.env.NODE_ENV !== "production" && v.type.__hmrId && Ei(v), process.env.NODE_ENV !== "production" && (Gt(i), Be(v, "mount")), Eo(i) && (v.ctx.renderer = ee), process.env.NODE_ENV !== "production" && Be(v, "init"), Lc(v), process.env.NODE_ENV !== "production" && Ke(v, "init"), v.asyncDep) {
      if (h && h.registerDep(v, M), !i.el) {
        const y = v.subTree = Te(Ie);
        ce(null, y, u, d);
      }
      return;
    }
    M(v, i, u, d, h, N, O), process.env.NODE_ENV !== "production" && (en(), Ke(v, "mount"));
  }, G = (i, u, d) => {
    const g = u.component = i.component;
    if (Ai(i, u, d))
      if (g.asyncDep && !g.asyncResolved) {
        process.env.NODE_ENV !== "production" && Gt(u), S(g, u, d), process.env.NODE_ENV !== "production" && en();
        return;
      } else
        g.next = u, gi(g.update), g.update();
    else
      u.el = i.el, g.vnode = u;
  }, M = (i, u, d, g, h, N, O) => {
    const v = () => {
      if (i.isMounted) {
        let { next: D, bu: x, u: $, parent: A, vnode: U } = i, q = D, K;
        process.env.NODE_ENV !== "production" && Gt(D || i.vnode), st(i, !1), D ? (D.el = U.el, S(i, D, O)) : D = U, x && $t(x), (K = D.props && D.props.onVnodeBeforeUpdate) && Re(K, A, D, U), st(i, !0), process.env.NODE_ENV !== "production" && Be(i, "render");
        const oe = Tn(i);
        process.env.NODE_ENV !== "production" && Ke(i, "render");
        const xe = i.subTree;
        i.subTree = oe, process.env.NODE_ENV !== "production" && Be(i, "patch"), R(
          xe,
          oe,
          // parent may have changed if it's in a teleport
          a(xe.el),
          // anchor may have changed if it's in a fragment
          k(xe),
          i,
          h,
          N
        ), process.env.NODE_ENV !== "production" && Ke(i, "patch"), D.el = oe.el, q === null && Ri(i, oe.el), $ && Ee($, h), (K = D.props && D.props.onVnodeUpdated) && Ee(() => Re(K, A, D, U), h), process.env.NODE_ENV !== "production" && jr(i), process.env.NODE_ENV !== "production" && en();
      } else {
        let D;
        const { el: x, props: $ } = u, { bm: A, m: U, parent: q } = i, K = nn(u);
        if (st(i, !1), A && $t(A), !K && (D = $ && $.onVnodeBeforeMount) && Re(D, q, u), st(i, !0), x && je) {
          const oe = () => {
            process.env.NODE_ENV !== "production" && Be(i, "render"), i.subTree = Tn(i), process.env.NODE_ENV !== "production" && Ke(i, "render"), process.env.NODE_ENV !== "production" && Be(i, "hydrate"), je(x, i.subTree, i, h, null), process.env.NODE_ENV !== "production" && Ke(i, "hydrate");
          };
          K ? u.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !i.isUnmounted && oe()
          ) : oe();
        } else {
          process.env.NODE_ENV !== "production" && Be(i, "render");
          const oe = i.subTree = Tn(i);
          process.env.NODE_ENV !== "production" && Ke(i, "render"), process.env.NODE_ENV !== "production" && Be(i, "patch"), R(null, oe, d, g, i, h, N), process.env.NODE_ENV !== "production" && Ke(i, "patch"), u.el = oe.el;
        }
        if (U && Ee(U, h), !K && (D = $ && $.onVnodeMounted)) {
          const oe = u;
          Ee(() => Re(D, q, oe), h);
        }
        (u.shapeFlag & 256 || q && nn(q.vnode) && q.vnode.shapeFlag & 256) && i.a && Ee(i.a, h), i.isMounted = !0, process.env.NODE_ENV !== "production" && wi(i), u = d = g = null;
      }
    }, y = i.effect = new lo(
      v,
      () => yn(_),
      i.scope
      // track it in component's effect scope
    ), _ = i.update = () => y.run();
    _.id = i.uid, st(i, !0), process.env.NODE_ENV !== "production" && (y.onTrack = i.rtc ? (D) => $t(i.rtc, D) : void 0, y.onTrigger = i.rtg ? (D) => $t(i.rtg, D) : void 0, _.ownerInstance = i), _();
  }, S = (i, u, d) => {
    u.component = i;
    const g = i.vnode.props;
    i.vnode = u, i.next = null, pc(i, u.props, g, d), Nc(i, u.children, d), Et(), Ao(), vt();
  }, ye = (i, u, d, g, h, N, O, v, y = !1) => {
    const _ = i && i.children, D = i ? i.shapeFlag : 0, x = u.children, { patchFlag: $, shapeFlag: A } = u;
    if ($ > 0) {
      if ($ & 128) {
        Me(_, x, d, g, h, N, O, v, y);
        return;
      } else if ($ & 256) {
        Ue(_, x, d, g, h, N, O, v, y);
        return;
      }
    }
    A & 8 ? (D & 16 && I(_, h, N), x !== _ && m(d, x)) : D & 16 ? A & 16 ? Me(_, x, d, g, h, N, O, v, y) : I(_, h, N, !0) : (D & 8 && m(d, ""), A & 16 && ve(x, d, g, h, N, O, v, y));
  }, Ue = (i, u, d, g, h, N, O, v, y) => {
    i = i || xt, u = u || xt;
    const _ = i.length, D = u.length, x = Math.min(_, D);
    let $;
    for ($ = 0; $ < x; $++) {
      const A = u[$] = y ? Ze(u[$]) : Ve(u[$]);
      R(i[$], A, d, null, h, N, O, v, y);
    }
    _ > D ? I(i, h, N, !0, !1, x) : ve(u, d, g, h, N, O, v, y, x);
  }, Me = (i, u, d, g, h, N, O, v, y) => {
    let _ = 0;
    const D = u.length;
    let x = i.length - 1, $ = D - 1;
    for (; _ <= x && _ <= $; ) {
      const A = i[_], U = u[_] = y ? Ze(u[_]) : Ve(u[_]);
      if (Pt(A, U))
        R(A, U, d, null, h, N, O, v, y);
      else
        break;
      _++;
    }
    for (; _ <= x && _ <= $; ) {
      const A = i[x], U = u[$] = y ? Ze(u[$]) : Ve(u[$]);
      if (Pt(A, U))
        R(A, U, d, null, h, N, O, v, y);
      else
        break;
      x--, $--;
    }
    if (_ > x) {
      if (_ <= $) {
        const A = $ + 1, U = A < D ? u[A].el : g;
        for (; _ <= $; )
          R(null, u[_] = y ? Ze(u[_]) : Ve(u[_]), d, U, h, N, O, v, y), _++;
      }
    } else if (_ > $)
      for (; _ <= x; )
        Ne(i[_], h, N, !0), _++;
    else {
      const A = _, U = _, q = /* @__PURE__ */ new Map();
      for (_ = U; _ <= $; _++) {
        const de = u[_] = y ? Ze(u[_]) : Ve(u[_]);
        de.key != null && (process.env.NODE_ENV !== "production" && q.has(de.key) && b("Duplicate keys found during update:", JSON.stringify(de.key), "Make sure keys are unique."), q.set(de.key, _));
      }
      let K, oe = 0;
      const xe = $ - U + 1;
      let Nt = !1, wo = 0;
      const Tt = new Array(xe);
      for (_ = 0; _ < xe; _++)
        Tt[_] = 0;
      for (_ = A; _ <= x; _++) {
        const de = i[_];
        if (oe >= xe) {
          Ne(de, h, N, !0);
          continue;
        }
        let Ae;
        if (de.key != null)
          Ae = q.get(de.key);
        else
          for (K = U; K <= $; K++)
            if (Tt[K - U] === 0 && Pt(de, u[K])) {
              Ae = K;
              break;
            }
        Ae === void 0 ? Ne(de, h, N, !0) : (Tt[Ae - U] = _ + 1, Ae >= wo ? wo = Ae : Nt = !0, R(de, u[Ae], d, null, h, N, O, v, y), oe++);
      }
      const xo = Nt ? Dc(Tt) : xt;
      for (K = xo.length - 1, _ = xe - 1; _ >= 0; _--) {
        const de = U + _, Ae = u[de], Do = de + 1 < D ? u[de + 1].el : g;
        Tt[_] === 0 ? R(null, Ae, d, Do, h, N, O, v, y) : Nt && (K < 0 || _ !== xo[K] ? Oe(
          Ae,
          d,
          Do,
          2
          /* MoveType.REORDER */
        ) : K--);
      }
    }
  }, Oe = (i, u, d, g, h = null) => {
    const { el: N, type: O, transition: v, children: y, shapeFlag: _ } = i;
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
    if (O === Fe) {
      o(N, u, d);
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
        v.beforeEnter(N), o(N, u, d), Ee(() => v.enter(N), h);
      else {
        const { leave: x, delayLeave: $, afterLeave: A } = v, U = () => o(N, u, d), q = () => {
          x(N, () => {
            U(), A && A();
          });
        };
        $ ? $(N, U, q) : q();
      }
    else
      o(N, u, d);
  }, Ne = (i, u, d, g = !1, h = !1) => {
    const { type: N, props: O, ref: v, children: y, dynamicChildren: _, shapeFlag: D, patchFlag: x, dirs: $ } = i;
    if (v != null && Zn(v, null, d, i, !0), D & 256) {
      u.ctx.deactivate(i);
      return;
    }
    const A = D & 1 && $, U = !nn(i);
    let q;
    if (U && (q = O && O.onVnodeBeforeUnmount) && Re(q, u, i), D & 6)
      ot(i.component, d, g);
    else {
      if (D & 128) {
        i.suspense.unmount(d, g);
        return;
      }
      A && rt(i, null, u, "beforeUnmount"), D & 64 ? i.type.remove(i, u, d, h, ee, g) : _ && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (N !== Fe || x > 0 && x & 64) ? I(_, u, d, !1, !0) : (N === Fe && x & 384 || !h && D & 16) && I(y, u, d), g && ke(i);
    }
    (U && (q = O && O.onVnodeUnmounted) || A) && Ee(() => {
      q && Re(q, u, i), A && rt(i, null, u, "unmounted");
    }, d);
  }, ke = (i) => {
    const { type: u, el: d, anchor: g, transition: h } = i;
    if (u === Fe) {
      process.env.NODE_ENV !== "production" && i.patchFlag > 0 && i.patchFlag & 2048 && h && !h.persisted ? i.children.forEach((O) => {
        O.type === Ie ? r(O.el) : ke(O);
      }) : Vn(d, g);
      return;
    }
    if (u === rn) {
      Q(i);
      return;
    }
    const N = () => {
      r(d), h && !h.persisted && h.afterLeave && h.afterLeave();
    };
    if (i.shapeFlag & 1 && h && !h.persisted) {
      const { leave: O, delayLeave: v } = h, y = () => O(d, N);
      v ? v(i.el, N, y) : y();
    } else
      N();
  }, Vn = (i, u) => {
    let d;
    for (; i !== u; )
      d = E(i), r(i), i = d;
    r(u);
  }, ot = (i, u, d) => {
    process.env.NODE_ENV !== "production" && i.type.__hmrId && vi(i);
    const { bum: g, scope: h, update: N, subTree: O, um: v } = i;
    g && $t(g), h.stop(), N && (N.active = !1, Ne(O, i, u, d)), v && Ee(v, u), Ee(() => {
      i.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && i.asyncDep && !i.asyncResolved && i.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), process.env.NODE_ENV !== "production" && Di(i);
  }, I = (i, u, d, g = !1, h = !1, N = 0) => {
    for (let O = N; O < i.length; O++)
      Ne(i[O], u, d, g, h);
  }, k = (i) => i.shapeFlag & 6 ? k(i.component.subTree) : i.shapeFlag & 128 ? i.suspense.next() : E(i.anchor || i.el), X = (i, u, d) => {
    i == null ? u._vnode && Ne(u._vnode, null, null, !0) : R(u._vnode || null, i, u, null, null, null, d), Ao(), $r(), u._vnode = i;
  }, ee = {
    p: R,
    um: Ne,
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
    createApp: yc(X, ie)
  };
}
function st({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function on(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (P(o) && P(r))
    for (let s = 0; s < o.length; s++) {
      const c = o[s];
      let l = r[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = Ze(r[s]), l.el = c.el), n || on(c, l)), l.type === Wt && (l.el = c.el), process.env.NODE_ENV !== "production" && l.type === Ie && !l.el && (l.el = c.el);
    }
}
function Dc(e) {
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
const Vc = (e) => e.__isTeleport, Fe = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), Wt = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), Ie = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), rn = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), Rt = [];
let Ce = null;
function Cc(e = !1) {
  Rt.push(Ce = e ? null : []);
}
function Tc() {
  Rt.pop(), Ce = Rt[Rt.length - 1] || null;
}
let Lt = 1;
function qo(e) {
  Lt += e;
}
function $c(e) {
  return e.dynamicChildren = Lt > 0 ? Ce || xt : null, Tc(), Lt > 0 && Ce && Ce.push(e), e;
}
function Ic(e, t, n, o, r, s) {
  return $c(es(
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
const Pc = (...e) => ts(...e), xn = "__vInternal", Gr = ({ key: e }) => e ?? null, sn = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? te(e) || le(e) || j(e) ? { i: we, r: e, k: t, f: !!n } : e : null;
function es(e, t = null, n = null, o = 0, r = null, s = e === Fe ? 0 : 1, c = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Gr(t),
    ref: t && sn(t),
    scopeId: Sr,
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
  return l ? (yo(f, n), s & 128 && e.normalize(f)) : n && (f.shapeFlag |= te(n) ? 8 : 16), process.env.NODE_ENV !== "production" && f.key !== f.key && b("VNode created with invalid key (NaN). VNode type:", f.type), Lt > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Ce && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && Ce.push(f), f;
}
const Te = process.env.NODE_ENV !== "production" ? Pc : ts;
function ts(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === ec) && (process.env.NODE_ENV !== "production" && !e && b(`Invalid vnode type when creating vnode: ${e}.`), e = Ie), Ut(e)) {
    const l = tt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && yo(l, n), Lt > 0 && !s && Ce && (l.shapeFlag & 6 ? Ce[Ce.indexOf(e)] = l : Ce.push(l)), l.patchFlag |= -2, l;
  }
  if (is(e) && (e = e.__vccOpts), t) {
    t = Mc(t);
    let { class: l, style: f } = t;
    l && !te(l) && (t.class = no(l)), W(f) && (Un(f) && !P(f) && (f = se({}, f)), t.style = to(f));
  }
  const c = te(e) ? 1 : Si(e) ? 128 : Vc(e) ? 64 : W(e) ? 4 : j(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && c & 4 && Un(e) && (e = F(e), b("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), es(e, t, n, o, r, c, s, !0);
}
function Mc(e) {
  return e ? Un(e) || xn in e ? se({}, e) : e : null;
}
function tt(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: c } = e, l = t ? Ac(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Gr(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? P(r) ? r.concat(sn(t)) : [r, sn(t)] : sn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && P(c) ? c.map(ns) : c,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Fe ? s === -1 ? 16 : s | 16 : s,
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
function ns(e) {
  const t = tt(e);
  return P(e.children) && (t.children = e.children.map(ns)), t;
}
function jc(e = " ", t = 0) {
  return Te(Wt, null, e, t);
}
function Ve(e) {
  return e == null || typeof e == "boolean" ? Te(Ie) : P(e) ? Te(
    Fe,
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
  else if (P(t))
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
    j(t) ? (t = { default: t, _ctx: we }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [jc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ac(...e) {
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
        c && s !== c && !(P(s) && s.includes(c)) && (t[r] = s ? [].concat(s, c) : c);
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
const Rc = Qr();
let Sc = 0;
function Fc(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Rc, s = {
    uid: Sc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new xs(
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
    propsOptions: zr(o, r),
    emitsOptions: Rr(o, r),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: z,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: z,
    data: z,
    props: z,
    attrs: z,
    slots: z,
    refs: z,
    setupState: z,
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
  return process.env.NODE_ENV !== "production" ? s.ctx = tc(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = $i.bind(null, s), e.ce && e.ce(s), s;
}
let re = null;
const Ct = (e) => {
  re = e, e.scope.on();
}, mt = () => {
  re && re.scope.off(), re = null;
}, Hc = /* @__PURE__ */ nt("slot,component");
function Xn(e, t) {
  const n = t.isNativeTag || sr;
  (Hc(e) || n(e)) && b("Do not use built-in or reserved HTML elements as component id: " + e);
}
function os(e) {
  return e.vnode.shapeFlag & 4;
}
let kt = !1;
function Lc(e, t = !1) {
  kt = t;
  const { props: n, children: o } = e.vnode, r = os(e);
  fc(e, n, r, t), vc(e, o);
  const s = r ? Uc(e, t) : void 0;
  return kt = !1, s;
}
function Uc(e, t) {
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
        Br(s[c]);
    }
    o.compilerOptions && kc() && b('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Or(new Proxy(e.ctx, Kr)), process.env.NODE_ENV !== "production" && nc(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? Bc(e) : null;
    Ct(e), Et();
    const c = We(r, e, 0, [process.env.NODE_ENV !== "production" ? Ot(e.props) : e.props, s]);
    if (vt(), mt(), so(c)) {
      if (c.then(mt, mt), t)
        return c.then((l) => {
          zo(e, l, t);
        }).catch((l) => {
          bn(
            l,
            e,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      if (e.asyncDep = c, process.env.NODE_ENV !== "production" && !e.suspense) {
        const l = (n = o.name) !== null && n !== void 0 ? n : "Anonymous";
        b(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      zo(e, c, t);
  } else
    rs(e, t);
}
function zo(e, t, n) {
  j(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : W(t) ? (process.env.NODE_ENV !== "production" && Ut(t) && b("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = wr(t), process.env.NODE_ENV !== "production" && oc(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && b(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), rs(e, n);
}
let Qn;
const kc = () => !Qn;
function rs(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && Qn && !o.render) {
      const r = o.template || No(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && Be(e, "compile");
        const { isCustomElement: s, compilerOptions: c } = e.appContext.config, { delimiters: l, compilerOptions: f } = o, p = se(se({
          isCustomElement: s,
          delimiters: l
        }, c), f);
        o.render = Qn(r, p), process.env.NODE_ENV !== "production" && Ke(e, "compile");
      }
    }
    e.render = o.render || ue;
  }
  Ct(e), Et(), sc(e), vt(), mt(), process.env.NODE_ENV !== "production" && !o.render && e.render === ue && !t && (o.template ? b(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : b("Component is missing template or render function."));
}
function Jo(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return an(), ge(e, "get", "$attrs"), t[n];
    },
    set() {
      return b("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return b("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return ge(e, "get", "$attrs"), t[n];
    }
  });
}
function Bc(e) {
  const t = (o) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && b("expose() should be called only once per setup()."), o != null)) {
      let r = typeof o;
      r === "object" && (P(o) ? r = "array" : le(o) && (r = "ref")), r !== "object" && b(`expose() should be passed a plain object, received ${r}.`);
    }
    e.exposed = o || {};
  };
  let n;
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = Jo(e));
    },
    get slots() {
      return Ot(e.slots);
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
    return e.exposeProxy || (e.exposeProxy = new Proxy(wr(Or(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in ht)
          return ht[n](e);
      },
      has(t, n) {
        return n in t || n in ht;
      }
    }));
}
const Kc = /(?:^|[-_])(\w)/g, Wc = (e) => e.replace(Kc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function ss(e, t = !0) {
  return j(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Dn(e, t, n = !1) {
  let o = ss(t);
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
  return o ? Wc(o) : n ? "App" : "Anonymous";
}
function is(e) {
  return j(e) && "__vccOpts" in e;
}
const qc = (e, t) => ci(e, t, kt);
function zc(e, t, n) {
  const o = arguments.length;
  return o === 2 ? W(t) && !P(t) ? Ut(t) ? Te(e, null, [t]) : Te(e, t) : Te(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Ut(n) && (n = [n]), Te(e, t, n));
}
const Jc = Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : ""), Yc = () => {
  {
    const e = tn(Jc);
    return e || process.env.NODE_ENV !== "production" && b("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
  }
};
function Pn(e) {
  return !!(e && e.__v_isShallow);
}
function Zc() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, r = {
    header(a) {
      return W(a) ? a.__isVue ? ["div", e, "VueInstance"] : le(a) ? [
        "div",
        {},
        ["span", e, m(a)],
        "<",
        l(a.value),
        ">"
      ] : at(a) ? [
        "div",
        {},
        ["span", e, Pn(a) ? "ShallowReactive" : "Reactive"],
        "<",
        l(a),
        `>${gt(a) ? " (readonly)" : ""}`
      ] : gt(a) ? [
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
    a.type.props && a.props && E.push(c("props", F(a.props))), a.setupState !== z && E.push(c("setup", a.setupState)), a.data !== z && E.push(c("data", F(a.data)));
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
    return E = se({}, E), Object.keys(E).length ? [
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
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : W(a) ? ["object", { object: E ? F(a) : a }] : ["span", n, String(a)];
  }
  function f(a, E) {
    const V = a.type;
    if (j(V))
      return;
    const B = {};
    for (const R in a.ctx)
      p(V, R, E) && (B[R] = a.ctx[R]);
    return B;
  }
  function p(a, E, V) {
    const B = a[V];
    if (P(B) && B.includes(E) || W(B) && E in B || a.extends && p(a.extends, E, V) || a.mixins && a.mixins.some((R) => p(R, E, V)))
      return !0;
  }
  function m(a) {
    return Pn(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const Yo = "3.2.47", Xc = "http://www.w3.org/2000/svg", lt = typeof document < "u" ? document : null, Zo = lt && /* @__PURE__ */ lt.createElement("template"), Qc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? lt.createElementNS(Xc, e) : lt.createElement(e, n ? { is: n } : void 0);
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
function Gc(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function el(e, t, n) {
  const o = e.style, r = te(n);
  if (n && !r) {
    if (t && !te(t))
      for (const s in t)
        n[s] == null && Gn(o, s, "");
    for (const s in n)
      Gn(o, s, n[s]);
  } else {
    const s = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = s);
  }
}
const tl = /[^\\];\s*$/, Xo = /\s*!important$/;
function Gn(e, t, n) {
  if (P(n))
    n.forEach((o) => Gn(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && tl.test(n) && b(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = nl(e, t);
    Xo.test(n) ? e.setProperty(Ge(o), n.replace(Xo, ""), "important") : e[o] = n;
  }
}
const Qo = ["Webkit", "Moz", "ms"], Mn = {};
function nl(e, t) {
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
function ol(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Go, t.slice(6, t.length)) : e.setAttributeNS(Go, t, n);
  else {
    const s = _s(t);
    n == null || s && !or(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function rl(e, t, n, o, r, s, c) {
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
    process.env.NODE_ENV !== "production" && !l && b(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, f);
  }
  l && e.removeAttribute(t);
}
function sl(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function il(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function cl(e, t, n, o, r = null) {
  const s = e._vei || (e._vei = {}), c = s[t];
  if (o && c)
    c.value = o;
  else {
    const [l, f] = ll(t);
    if (o) {
      const p = s[t] = al(o, r);
      sl(e, l, p, f);
    } else
      c && (il(e, l, c, f), s[t] = void 0);
  }
}
const er = /(?:Once|Passive|Capture)$/;
function ll(e) {
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
const ul = /* @__PURE__ */ Promise.resolve(), fl = () => jn || (ul.then(() => jn = 0), jn = Date.now());
function al(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    $e(pl(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = fl(), n;
}
function pl(e, t) {
  if (P(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const tr = /^on[a-z]/, dl = (e, t, n, o, r = !1, s, c, l, f) => {
  t === "class" ? Gc(e, o, r) : t === "style" ? el(e, n, o) : Bt(t) ? cn(t) || cl(e, t, n, o, c) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : hl(e, t, o, r)) ? rl(e, t, o, s, c, l, f) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), ol(e, t, o, r));
};
function hl(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && tr.test(t) && j(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || tr.test(t) && te(n) ? !1 : t in e;
}
const ml = /* @__PURE__ */ se({ patchProp: dl }, Qc);
let nr;
function gl() {
  return nr || (nr = wc(ml));
}
const _l = (...e) => {
  const t = gl().createApp(...e);
  process.env.NODE_ENV !== "production" && (El(t), vl(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = Nl(o);
    if (!r)
      return;
    const s = t._component;
    !j(s) && !s.render && !s.template && (s.template = r.innerHTML), r.innerHTML = "";
    const c = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), c;
  }, t;
};
function El(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => hs(t) || ms(t),
    writable: !1
  });
}
function vl(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        b("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return b(o), n;
      },
      set() {
        b(o);
      }
    });
  }
}
function Nl(e) {
  if (te(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && b(`Failed to mount app: mount target selector "${e}" returned null.`), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && b('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
}
function bl() {
  Zc();
}
process.env.NODE_ENV !== "production" && bl();
var yl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, eo = {}, Ol = {
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
  })(typeof self < "u" ? self : yl, function() {
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
      function ne(w, C) {
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
          return ae.prototype = Object.create(T.prototype, { constructor: { value: ae, enumerable: !1, writable: !0, configurable: !0 } }), be(ae, T);
        }, L(w);
      }
      function Q(w, C, T) {
        return Q = Pe() ? Reflect.construct : function(Z, ae, pe) {
          var G = [null];
          G.push.apply(G, ae);
          var M = new (Function.bind.apply(Z, G))();
          return pe && be(M, pe.prototype), M;
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
      function be(w, C) {
        return be = Object.setPrototypeOf || function(T, Z) {
          return T.__proto__ = Z, T;
        }, be(w, C);
      }
      function _e(w) {
        return _e = Object.setPrototypeOf ? Object.getPrototypeOf : function(C) {
          return C.__proto__ || Object.getPrototypeOf(C);
        }, _e(w);
      }
      function ve(w, C, T, Z) {
        var ae, pe, G, M = w, S = !1, ye = function(Ue) {
          (function(I, k) {
            if (typeof k != "function" && k !== null)
              throw new TypeError("Super expression must either be null or a function");
            I.prototype = Object.create(k && k.prototype, { constructor: { value: I, writable: !0, configurable: !0 } }), k && be(I, k);
          })(ot, Ue);
          var Me, Oe, Ne, ke, Vn = (Me = ot, Oe = Pe(), function() {
            var I, k = _e(Me);
            if (Oe) {
              var X = _e(this).constructor;
              I = Reflect.construct(k, arguments, X);
            } else
              I = k.apply(this, arguments);
            return ne(this, I);
          });
          function ot() {
            var I;
            return function(k, X) {
              if (!(k instanceof X))
                throw new TypeError("Cannot call a class as a function");
            }(this, ot), (I = Vn.call(this))._wrapper = void 0, I._component = void 0, I._props = void 0, I._slotChildren = void 0, I._mounted = !1, I._props = {}, I._slotChildren = [], new MutationObserver(function(k) {
              for (var X = 0; X < k.length; X++) {
                var ee = k[X];
                !S || ee.type !== "attributes" || ee.target !== Y(I) || ee.attributeName && I.syncAttribute(ee.attributeName);
              }
            }).observe(Y(I), { childList: !0, subtree: !0, characterData: !0, attributes: !0 }), I;
          }
          return Ne = ot, ke = [{ key: "createEventProxies", value: function(I) {
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
            S && this.syncInitialAttributes();
            var I = this.createEventProxies(M.emits), k = this;
            this._wrapper = C({ render: function() {
              var X = Object.assign({}, k._props, I);
              return delete X.dataVApp, T(M, X, function() {
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
          } }], ke && ce(Ne.prototype, ke), ot;
        }(L(HTMLElement));
        return function() {
          if (!S) {
            var Ue = Array.isArray(M.props) ? M.props : Object.keys(M.props || {});
            ae = Ue.map(m), pe = Ue.map(f);
            var Me = Array.isArray(M.props) ? {} : M.props || {};
            G = pe.reduce(function(Oe, Ne, ke) {
              return Oe[Ne] = Me[Ue[ke]], Oe;
            }, {}), S = !0;
          }
        }(), ye;
      }
      return o.default;
    })();
  });
})(Ol);
const wl = eo, xl = { class: "hello-ping" }, Dl = /* @__PURE__ */ Ui({
  __name: "index",
  props: {
    msg: String
  },
  setup(e) {
    return (t, n) => (Cc(), Ic("div", xl, "Hello Ping " + Es(e.msg), 1));
  }
});
const Vl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, cs = /* @__PURE__ */ Vl(Dl, [["__scopeId", "data-v-4dfe02af"]]), Cl = wl(cs, _l, zc);
window.customElements.define("hello-ping", Cl);
const Tl = {
  version: "0.0.1",
  components: {
    HelloPing: cs
  }
};
export {
  Tl as default
};
