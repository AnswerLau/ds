import { createElementBlock as d, openBlock as l, normalizeClass as h, toDisplayString as y, resolveComponent as C, createBlock as p, createCommentVNode as u, renderSlot as w, createElementVNode as r, mergeProps as G, Transition as T, withCtx as z, createVNode as k, withDirectives as D, normalizeStyle as _, createTextVNode as I, vShow as P, withKeys as B, withModifiers as M, Fragment as E, renderList as O, render as q } from "vue";
const K = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M8%203V13'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M4%209L8%2013L12%209'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", J = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M13%208H3'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M7%204L3%208L7%2012'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Q = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M3%208H13'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9%204L13%208L9%2012'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", ee = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M8%2013V3'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M4%207L8%203L12%207'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", te = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M8%202.5V3.5'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.5%207C12.5%205.67392%2011.9732%204.40215%2011.0355%203.46447C10.0979%202.52678%208.82608%202%207.5%202C6.17392%202%204.90215%202.52678%203.96447%203.46447C3.02678%204.40215%202.5%205.67392%202.5%207V9L1.5%2011H13.5L12.5%209V7Z'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%2011C9.5%2011.3978%209.34196%2011.7794%209.06066%2012.0607C8.77936%2012.342%208.39782%2012.5%208%2012.5C7.60218%2012.5%207.22064%2012.342%206.93934%2012.0607C6.65804%2011.7794%206.5%2011.3978%206.5%2011'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", se = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M3%208L6%2011L13%204'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", ie = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M4%206L8%2010L12%206'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", ne = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M4%204L12%2012'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%204L4%2012'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", oe = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M2.5%206L8%202L13.5%206'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M3.5%206.5V13.5H12.5V6.5'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M6.5%2013.5V9.5H9.5V13.5'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", le = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3ccircle%20cx='8'%20cy='8'%20r='6'%20stroke='currentColor'%20stroke-opacity='0.3'%20stroke-width='2'%3e%3c/circle%3e%3cpath%20d='M14%208C14%204.68629%2011.3137%202%208%202'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%3e%3c/path%3e%3c/svg%3e", re = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M14%208C14%2011.3137%2011.3137%2014%208%2014C6.34315%2014%204.84315%2013.3284%203.75736%2012.2426C2.67157%2011.1569%202%209.65685%202%208C2%204.68629%204.68629%202%208%202C11.3137%202%2014%204.68629%2014%208Z'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5%207H11'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5%209H9'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", ae = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20version='1.1'%20viewBox='0%200%2016%2016'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.0%20Build%20151)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20none;%20}%20.st1%20{%20fill:%20%23fa2730;%20fill-rule:%20evenodd;%20}%20.st2%20{%20clip-path:%20url(%23clippath);%20}%20%3c/style%3e%3cclipPath%20id='clippath'%3e%3crect%20class='st0'%20width='16'%20height='16'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20class='st2'%3e%3cpath%20class='st1'%20d='M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8,8-3.6,8-8S12.4,0,8,0ZM8,6.9l-2.5-2.5-1.1,1.1,2.5,2.5-2.5,2.5,1.1,1.1,2.5-2.5,2.5,2.5,1.1-1.1-2.5-2.5,2.5-2.5-1.1-1.1-2.5,2.5Z'/%3e%3c/g%3e%3c/svg%3e", de = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20version='1.1'%20viewBox='0%200%2016%2016'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.0%20Build%20151)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20none;%20}%20.st1%20{%20fill:%20%23fff;%20fill-rule:%20evenodd;%20}%20.st2%20{%20fill:%20%232661f1;%20}%20.st3%20{%20clip-path:%20url(%23clippath);%20}%20%3c/style%3e%3cclipPath%20id='clippath'%3e%3crect%20class='st0'%20x='0'%20y='0'%20width='16'%20height='16'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20class='st3'%3e%3cg%3e%3cpath%20class='st2'%20d='M0,8C0,3.6,3.6,0,8,0s8,3.6,8,8-3.6,8-8,8S0,12.4,0,8Z'/%3e%3cpath%20class='st1'%20d='M8.7,6.2v5.9h-1.5v-5.9h1.5Z'/%3e%3cpath%20class='st1'%20d='M8.7,3.3v1.9h-1.5v-1.9h1.5Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", ce = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20version='1.1'%20viewBox='0%200%2016%2016'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.0%20Build%20151)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20none;%20}%20.st1%20{%20fill:%20%2300c767;%20fill-rule:%20evenodd;%20}%20.st2%20{%20clip-path:%20url(%23clippath);%20}%20%3c/style%3e%3cclipPath%20id='clippath'%3e%3crect%20class='st0'%20width='16'%20height='16'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20class='st2'%3e%3cpath%20class='st1'%20d='M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8,8-3.6,8-8S12.4,0,8,0ZM7.6,11l5.4-5-1-1.1-4.4,4-2.7-2.4-1,1.1,3.7,3.4Z'/%3e%3c/g%3e%3c/svg%3e", ue = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20version='1.1'%20viewBox='0%200%2016%2016'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.0%20Build%20151)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20none;%20}%20.st1%20{%20fill:%20%23ff7c23;%20fill-rule:%20evenodd;%20}%20.st2%20{%20clip-path:%20url(%23clippath);%20}%20%3c/style%3e%3cclipPath%20id='clippath'%3e%3crect%20class='st0'%20x='0'%20width='16'%20height='16'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20class='st2'%3e%3cpath%20class='st1'%20d='M0,8C0,3.6,3.6,0,8,0s8,3.6,8,8-3.6,8-8,8S0,12.4,0,8ZM8.8,3.2v5.9h-1.5V3.2h1.5ZM8.8,12.1v-1.9h-1.5v1.9h1.5Z'/%3e%3c/g%3e%3c/svg%3e", he = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M8%203V13'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M3%208H13'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", me = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M6.5%202H9.5'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14%205.5L11.5%204.5'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M4.5%204.5L2%205.5'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8%2012C10.2091%2012%2012%2010.2091%2012%208C12%205.79086%2010.2091%204%208%204C5.79086%204%204%205.79086%204%208C4%2010.2091%205.79086%2012%208%2012Z'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%2014H6.5'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M2%2010.5L4.5%2011.5'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11.5%2011.5L14%2010.5'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", ge = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M8%202L9.8%205.4L13.5%206L11%208.8L11.5%2012.6L8%2010.9L4.5%2012.6L5%208.8L2.5%206L6.2%205.4L8%202Z'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3c/svg%3e", fe = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M8%208C9.65685%208%2011%206.65685%2011%205C11%203.34315%209.65685%202%208%202C6.34315%202%205%203.34315%205%205C5%206.65685%206.34315%208%208%208Z'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.50002%2014C2.50002%2011.5147%204.51473%209.5%207.00002%209.5H9.00002C11.4853%209.5%2013.5%2011.5147%2013.5%2014'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", f = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [a, c] of s)
    t[a] = c;
  return t;
}, pe = {
  name: "ds_Icon",
  props: {
    name: {
      type: String,
      required: !0
    },
    size: {
      type: String,
      default: "medium",
      validator: (e) => ["small", "medium", "large"].includes(e)
    },
    color: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      hasError: !1
    };
  },
  computed: {
    svgUrl() {
      if (this.hasError) return null;
      try {
        return new URL((/* @__PURE__ */ Object.assign({ "../assets/icons/arrow-down.svg": K, "../assets/icons/arrow-left.svg": J, "../assets/icons/arrow-right.svg": Q, "../assets/icons/arrow-up.svg": ee, "../assets/icons/bell.svg": te, "../assets/icons/check.svg": se, "../assets/icons/chevron-down.svg": ie, "../assets/icons/close.svg": ne, "../assets/icons/home.svg": oe, "../assets/icons/loading.svg": le, "../assets/icons/message.svg": re, "../assets/icons/msg-error.svg": ae, "../assets/icons/msg-info.svg": de, "../assets/icons/msg-success.svg": ce, "../assets/icons/msg-warning.svg": ue, "../assets/icons/plus.svg": he, "../assets/icons/settings.svg": me, "../assets/icons/star.svg": ge, "../assets/icons/user.svg": fe }))[`../assets/icons/${this.name}.svg`], import.meta.url).href;
      } catch (e) {
        return console.error(`Icon ${this.name} not found:`, e), this.hasError = !0, null;
      }
    }
  },
  methods: {
    handleError(e) {
      console.error(`Failed to load icon ${this.name}:`, e), this.hasError = !0;
    }
  }
}, ve = ["src"], we = { key: 1 };
function ye(e, s, t, a, c, i) {
  return l(), d("span", {
    class: h(["icon", { [`icon-${t.size}`]: t.size }])
  }, [
    i.svgUrl ? (l(), d("img", {
      key: 0,
      src: i.svgUrl,
      class: h(["icon-svg", { rotating: t.name === "loading" }]),
      alt: "",
      onError: s[0] || (s[0] = (...n) => i.handleError && i.handleError(...n))
    }, null, 42, ve)) : (l(), d("span", we, y(t.name), 1))
  ], 2);
}
const b = /* @__PURE__ */ f(pe, [["render", ye]]), ke = {
  name: "ds_Button",
  components: {
    ds_icon: b
  },
  props: {
    // 按钮类型：primary, secondary, text, link, emphasize
    type: {
      type: String,
      default: "primary",
      validator: (e) => ["primary", "secondary", "text", "link", "emphasize"].includes(e)
    },
    // 按钮尺寸：small, medium, large, xlarge
    size: {
      type: String,
      default: "medium",
      validator: (e) => ["small", "medium", "large", "xlarge"].includes(e)
    },
    // 禁用状态
    disabled: {
      type: Boolean,
      default: !1
    },
    // 加载状态
    loading: {
      type: Boolean,
      default: !1
    },
    // 左侧图标
    iconLeft: {
      type: String,
      default: ""
    },
    // 右侧图标
    iconRight: {
      type: String,
      default: ""
    },
    // 仅图标模式
    iconOnly: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    // 根据按钮尺寸决定图标尺寸
    iconSize() {
      return this.size === "small" ? "small" : this.size === "large" || this.size === "xlarge" ? "large" : "medium";
    }
  },
  methods: {
    onClick(e) {
      !this.disabled && !this.loading && this.$emit("click", e);
    }
  }
}, xe = ["disabled"], be = {
  key: 2,
  class: "button-content"
};
function _e(e, s, t, a, c, i) {
  const n = C("ds_icon");
  return l(), d("button", {
    class: h(["btn", [
      `btn-${t.type}`,
      `btn-${t.size}`,
      {
        "btn-icon-left": t.iconLeft && !t.iconOnly,
        "btn-icon-right": t.iconRight && !t.iconOnly,
        "btn-icon-only": t.iconOnly,
        "btn-loading": t.loading
      }
    ]]),
    disabled: t.disabled || t.loading,
    onClick: s[0] || (s[0] = (...o) => i.onClick && i.onClick(...o))
  }, [
    t.iconLeft && !t.iconOnly && !t.loading ? (l(), p(n, {
      key: 0,
      name: t.iconLeft,
      size: i.iconSize,
      class: "btn-icon"
    }, null, 8, ["name", "size"])) : u("", !0),
    t.loading ? (l(), p(n, {
      key: 1,
      name: "loading",
      size: i.iconSize,
      class: "btn-icon"
    }, null, 8, ["size"])) : u("", !0),
    t.iconOnly ? u("", !0) : (l(), d("span", be, [
      w(e.$slots, "default")
    ])),
    t.iconOnly && !t.loading ? (l(), p(n, {
      key: 3,
      name: t.iconLeft || t.iconRight,
      size: i.iconSize,
      class: "btn-icon"
    }, null, 8, ["name", "size"])) : u("", !0),
    t.iconRight && !t.iconOnly && !t.loading ? (l(), p(n, {
      key: 4,
      name: t.iconRight,
      size: i.iconSize,
      class: "btn-icon"
    }, null, 8, ["name", "size"])) : u("", !0)
  ], 10, xe);
}
const N = /* @__PURE__ */ f(ke, [["render", _e]]), Ce = {
  name: "ds_Input",
  components: {
    ds_icon: b
  },
  props: {
    // v-model 绑定值
    modelValue: {
      type: [String, Number],
      default: ""
    },
    // 输入框类型
    type: {
      type: String,
      default: "text"
    },
    // 占位文本
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    // 尺寸：small, medium, large
    size: {
      type: String,
      default: "medium",
      validator: (e) => ["small", "medium", "large"].includes(e)
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: !1
    },
    // 是否只读
    readonly: {
      type: Boolean,
      default: !1
    },
    // 是否显示清除按钮
    clearable: {
      type: Boolean,
      default: !1
    },
    // 是否有错误
    error: {
      type: Boolean,
      default: !1
    },
    // 最大输入长度
    maxlength: {
      type: Number,
      default: null
    },
    // 是否显示字数限制
    showWordLimit: {
      type: Boolean,
      default: !1
    },
    // 前缀图标
    prefix: {
      type: String,
      default: ""
    },
    // 后缀图标
    suffix: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isFocused: !1
    };
  },
  computed: {
    // 计算当前输入值的长度
    valueLength() {
      return String(this.modelValue).length;
    },
    // 根据输入框尺寸决定图标尺寸
    iconSize() {
      return this.size === "small" ? "small" : this.size === "large" ? "large" : "medium";
    }
  },
  methods: {
    // 输入事件
    onInput(e) {
      this.$emit("update:modelValue", e.target.value), this.$emit("input", e);
    },
    // 聚焦事件
    onFocus(e) {
      this.isFocused = !0, this.$emit("focus", e);
    },
    // 失焦事件
    onBlur(e) {
      this.isFocused = !1, this.$emit("blur", e);
    },
    // 变更事件
    onChange(e) {
      this.$emit("change", e);
    },
    // 清除输入内容
    onClear() {
      this.$emit("update:modelValue", ""), this.$emit("clear"), this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    // 手动聚焦方法
    focus() {
      this.$refs.input.focus();
    },
    // 手动失焦方法
    blur() {
      this.$refs.input.blur();
    }
  }
}, Se = {
  key: 0,
  class: "input-icon input-prefix-icon"
}, Te = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "svg-icon"
}, ze = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "svg-icon"
}, Ve = ["type", "value", "placeholder", "disabled", "readonly", "maxlength"], Be = {
  key: 2,
  class: "input-icon input-suffix-icon"
}, Me = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "svg-icon"
}, Ie = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "svg-icon"
}, Le = {
  key: 3,
  class: "input-count"
};
function De(e, s, t, a, c, i) {
  const n = C("ds_icon");
  return l(), d("div", {
    class: h(["input-wrapper", [
      `input-size-${t.size}`,
      {
        "input-disabled": t.disabled,
        "input-error": t.error,
        "input-prefix": t.prefix,
        "input-suffix": t.suffix,
        "input-focus": c.isFocused
      }
    ]])
  }, [
    t.prefix ? (l(), d("div", Se, [
      t.prefix === "search" ? (l(), d("svg", Te, s[5] || (s[5] = [
        r("circle", {
          cx: "11",
          cy: "11",
          r: "8"
        }, null, -1),
        r("line", {
          x1: "21",
          y1: "21",
          x2: "16.65",
          y2: "16.65"
        }, null, -1)
      ]))) : t.prefix === "calendar" ? (l(), d("svg", ze, s[6] || (s[6] = [
        r("rect", {
          x: "3",
          y: "4",
          width: "18",
          height: "18",
          rx: "2",
          ry: "2"
        }, null, -1),
        r("line", {
          x1: "16",
          y1: "2",
          x2: "16",
          y2: "6"
        }, null, -1),
        r("line", {
          x1: "8",
          y1: "2",
          x2: "8",
          y2: "6"
        }, null, -1),
        r("line", {
          x1: "3",
          y1: "10",
          x2: "21",
          y2: "10"
        }, null, -1)
      ]))) : (l(), p(n, {
        key: 2,
        name: t.prefix,
        size: i.iconSize
      }, null, 8, ["name", "size"]))
    ])) : u("", !0),
    r("input", {
      ref: "input",
      class: "ds-input",
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      readonly: t.readonly,
      maxlength: t.maxlength,
      onInput: s[0] || (s[0] = (...o) => i.onInput && i.onInput(...o)),
      onFocus: s[1] || (s[1] = (...o) => i.onFocus && i.onFocus(...o)),
      onBlur: s[2] || (s[2] = (...o) => i.onBlur && i.onBlur(...o)),
      onChange: s[3] || (s[3] = (...o) => i.onChange && i.onChange(...o))
    }, null, 40, Ve),
    t.clearable && t.modelValue && !t.disabled && !t.readonly ? (l(), d("div", {
      key: 1,
      class: "input-icon input-clear-icon",
      onClick: s[4] || (s[4] = (...o) => i.onClear && i.onClear(...o))
    }, s[7] || (s[7] = [
      r("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        class: "svg-icon"
      }, [
        r("circle", {
          cx: "12",
          cy: "12",
          r: "10"
        }),
        r("line", {
          x1: "15",
          y1: "9",
          x2: "9",
          y2: "15"
        }),
        r("line", {
          x1: "9",
          y1: "9",
          x2: "15",
          y2: "15"
        })
      ], -1)
    ]))) : t.suffix ? (l(), d("div", Be, [
      t.suffix === "search" ? (l(), d("svg", Me, s[8] || (s[8] = [
        r("circle", {
          cx: "11",
          cy: "11",
          r: "8"
        }, null, -1),
        r("line", {
          x1: "21",
          y1: "21",
          x2: "16.65",
          y2: "16.65"
        }, null, -1)
      ]))) : t.suffix === "calendar" ? (l(), d("svg", Ie, s[9] || (s[9] = [
        r("rect", {
          x: "3",
          y: "4",
          width: "18",
          height: "18",
          rx: "2",
          ry: "2"
        }, null, -1),
        r("line", {
          x1: "16",
          y1: "2",
          x2: "16",
          y2: "6"
        }, null, -1),
        r("line", {
          x1: "8",
          y1: "2",
          x2: "8",
          y2: "6"
        }, null, -1),
        r("line", {
          x1: "3",
          y1: "10",
          x2: "21",
          y2: "10"
        }, null, -1)
      ]))) : (l(), p(n, {
        key: 2,
        name: t.suffix,
        size: i.iconSize
      }, null, 8, ["name", "size"]))
    ])) : u("", !0),
    t.showWordLimit && t.maxlength ? (l(), d("div", Le, [
      r("span", null, y(i.valueLength) + "/" + y(t.maxlength), 1)
    ])) : u("", !0)
  ], 2);
}
const F = /* @__PURE__ */ f(Ce, [["render", De]]), Pe = {
  name: "ds_Checkbox",
  components: {
    ds_icon: b
  },
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    indeterminate: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "medium",
      validator: (e) => ["small", "medium"].includes(e)
    },
    isPrimary: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change"],
  methods: {
    handleChange(e) {
      if (this.disabled) return;
      const s = e.target.checked;
      this.$emit("update:modelValue", s), this.$emit("change", s);
    }
  }
}, Ee = { class: "ds-checkbox-label" }, Oe = { class: "ds-checkbox-input" }, je = ["checked", "disabled"], Ne = { class: "ds-checkbox-inner" }, Fe = {
  key: 1,
  class: "ds-checkbox-indeterminate"
}, Ae = {
  key: 0,
  class: "ds-checkbox-text"
};
function Re(e, s, t, a, c, i) {
  const n = C("ds_icon");
  return l(), d("div", {
    class: h(["ds-checkbox", [
      `ds-checkbox--${t.size}`,
      {
        "is-checked": t.modelValue,
        "is-disabled": t.disabled,
        "is-indeterminate": t.indeterminate,
        "is-primary": t.isPrimary
      }
    ]])
  }, [
    r("label", Ee, [
      r("span", Oe, [
        r("input", G({
          type: "checkbox",
          checked: t.modelValue,
          disabled: t.disabled,
          onChange: s[0] || (s[0] = (...o) => i.handleChange && i.handleChange(...o))
        }, e.$attrs), null, 16, je),
        r("span", Ne, [
          t.modelValue && !t.indeterminate ? (l(), p(n, {
            key: 0,
            name: "check",
            size: "small",
            class: "ds-checkbox-icon"
          })) : u("", !0),
          t.indeterminate ? (l(), d("span", Fe)) : u("", !0)
        ])
      ]),
      e.$slots.default ? (l(), d("span", Ae, [
        w(e.$slots, "default")
      ])) : u("", !0)
    ])
  ], 2);
}
const A = /* @__PURE__ */ f(Pe, [["render", Re]]), He = {
  name: "ds_Radio",
  props: {
    // v-model 绑定值
    modelValue: {
      type: [String, Number, Boolean],
      default: ""
    },
    // 单选框值
    label: {
      type: [String, Number, Boolean],
      required: !0
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: !1
    },
    // 单选框尺寸
    size: {
      type: String,
      default: "medium",
      validator: (e) => ["small", "medium", "large"].includes(e)
    }
  },
  methods: {
    // 单选框变更事件
    onChange() {
      this.disabled || (this.$emit("update:modelValue", this.label), this.$emit("change", this.label));
    }
  }
}, $e = { class: "radio" }, Ue = {
  key: 0,
  class: "radio-inner"
}, Xe = {
  key: 0,
  class: "radio-label"
}, Ze = ["value", "checked", "disabled"];
function We(e, s, t, a, c, i) {
  return l(), d("div", {
    class: h(["radio-wrapper", {
      "radio-checked": t.modelValue === t.label,
      "radio-disabled": t.disabled
    }]),
    onClick: s[1] || (s[1] = (...n) => i.onChange && i.onChange(...n))
  }, [
    r("div", $e, [
      t.modelValue === t.label ? (l(), d("div", Ue)) : u("", !0)
    ]),
    e.$slots.default ? (l(), d("span", Xe, [
      w(e.$slots, "default")
    ])) : u("", !0),
    r("input", {
      type: "radio",
      class: "radio-input",
      value: t.label,
      checked: t.modelValue === t.label,
      disabled: t.disabled,
      onChange: s[0] || (s[0] = (...n) => i.onChange && i.onChange(...n))
    }, null, 40, Ze)
  ], 2);
}
const R = /* @__PURE__ */ f(He, [["render", We]]), Ye = {
  name: "ds_Toggle",
  props: {
    // v-model 绑定值
    modelValue: {
      type: Boolean,
      default: !1
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: !1
    },
    // 开关尺寸
    size: {
      type: String,
      default: "medium",
      validator: (e) => ["small", "medium", "large"].includes(e)
    }
  },
  methods: {
    // 开关变更事件
    onChange() {
      this.disabled || (this.$emit("update:modelValue", !this.modelValue), this.$emit("change", !this.modelValue));
    }
  }
}, Ge = {
  key: 0,
  class: "toggle-label"
}, qe = ["checked", "disabled"];
function Ke(e, s, t, a, c, i) {
  return l(), d("div", {
    class: h(["toggle-wrapper", [
      `toggle-${t.size}`,
      {
        "toggle-checked": t.modelValue,
        "toggle-disabled": t.disabled
      }
    ]]),
    onClick: s[1] || (s[1] = (...n) => i.onChange && i.onChange(...n))
  }, [
    s[2] || (s[2] = r("div", { class: "toggle-track" }, [
      r("div", { class: "toggle-thumb" })
    ], -1)),
    e.$slots.default ? (l(), d("span", Ge, [
      w(e.$slots, "default")
    ])) : u("", !0),
    r("input", {
      type: "checkbox",
      class: "toggle-input",
      checked: t.modelValue,
      disabled: t.disabled,
      onChange: s[0] || (s[0] = (...n) => i.onChange && i.onChange(...n))
    }, null, 40, qe)
  ], 2);
}
const H = /* @__PURE__ */ f(Ye, [["render", Ke]]), Je = {
  name: "ds_Alert",
  components: {
    ds_icon: b
  },
  props: {
    // 标题
    title: {
      type: String,
      default: ""
    },
    // 类型
    type: {
      type: String,
      default: "info",
      validator: (e) => ["info", "success", "warning", "error"].includes(e)
    },
    // 是否显示图标
    showIcon: {
      type: Boolean,
      default: !1
    },
    // 是否可关闭
    closable: {
      type: Boolean,
      default: !1
    },
    // 图标尺寸
    iconSize: {
      type: String,
      default: "medium"
    }
  },
  data() {
    return {
      visible: !0
    };
  },
  computed: {
    // 根据类型计算图标名称
    iconName() {
      return {
        info: "info-circle",
        success: "check-circle",
        warning: "warning",
        error: "close-circle"
      }[this.type] || "info-circle";
    }
  },
  methods: {
    // 处理关闭事件
    handleClose() {
      this.visible = !1, this.$emit("close");
    }
  }
}, Qe = {
  key: 0,
  class: "alert-icon"
}, et = { class: "alert-content" }, tt = {
  key: 0,
  class: "alert-title"
}, st = { class: "alert-description" };
function it(e, s, t, a, c, i) {
  const n = C("ds_icon");
  return l(), p(T, { name: "alert-fade" }, {
    default: z(() => [
      c.visible ? (l(), d("div", {
        key: 0,
        class: h(["alert", [
          `alert-${t.type}`,
          { "alert-with-icon": t.showIcon }
        ]]),
        role: "alert"
      }, [
        t.showIcon ? (l(), d("span", Qe, [
          k(n, {
            name: i.iconName,
            size: t.iconSize
          }, null, 8, ["name", "size"])
        ])) : u("", !0),
        r("div", et, [
          t.title ? (l(), d("div", tt, y(t.title), 1)) : u("", !0),
          r("div", st, [
            w(e.$slots, "default")
          ])
        ]),
        t.closable ? (l(), d("span", {
          key: 1,
          class: "alert-close",
          onClick: s[0] || (s[0] = (...o) => i.handleClose && i.handleClose(...o))
        }, [
          k(n, {
            name: "close",
            size: "small"
          })
        ])) : u("", !0)
      ], 2)) : u("", !0)
    ]),
    _: 3
  });
}
const $ = /* @__PURE__ */ f(Je, [["render", it]]), nt = {
  name: "ds_Tooltip",
  props: {
    // 提示内容
    content: {
      type: String,
      default: ""
    },
    // 位置
    placement: {
      type: String,
      default: "top",
      validator: (e) => ["top", "right", "bottom", "left"].includes(e)
    },
    // 主题
    theme: {
      type: String,
      default: "dark",
      validator: (e) => ["dark", "light"].includes(e)
    },
    // 显示延迟
    showDelay: {
      type: Number,
      default: 200
    },
    // 隐藏延迟
    hideDelay: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      visible: !1,
      tooltipStyle: {
        top: "0px",
        left: "0px"
      },
      showTimer: null,
      hideTimer: null
    };
  },
  methods: {
    // 显示提示
    showTooltip() {
      this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null), this.showTimer = setTimeout(() => {
        this.visible = !0, this.$nextTick(() => {
          this.updatePosition();
        });
      }, this.showDelay);
    },
    // 隐藏提示
    hideTooltip() {
      this.showTimer && (clearTimeout(this.showTimer), this.showTimer = null), this.hideTimer = setTimeout(() => {
        this.visible = !1;
      }, this.hideDelay);
    },
    // 更新提示位置
    updatePosition() {
      if (!this.visible) return;
      const e = this.$refs.trigger, s = this.$refs.tooltip;
      if (!e || !s) return;
      const t = e.getBoundingClientRect(), a = s.getBoundingClientRect(), i = {
        top: {
          top: `${-a.height - 10}px`,
          left: `${(t.width - a.width) / 2}px`
        },
        right: {
          top: `${(t.height - a.height) / 2}px`,
          left: `${t.width + 10}px`
        },
        bottom: {
          top: `${t.height + 10}px`,
          left: `${(t.width - a.width) / 2}px`
        },
        left: {
          top: `${(t.height - a.height) / 2}px`,
          left: `${-a.width - 10}px`
        }
      }[this.placement];
      this.tooltipStyle = {
        top: i.top,
        left: i.left
      };
    }
  },
  beforeUnmount() {
    this.showTimer && (clearTimeout(this.showTimer), this.showTimer = null), this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null);
  }
}, ot = {
  ref: "trigger",
  class: "tooltip-trigger"
}, lt = { class: "tooltip-content" };
function rt(e, s, t, a, c, i) {
  return l(), d("div", {
    class: "tooltip-container",
    onMouseenter: s[0] || (s[0] = (...n) => i.showTooltip && i.showTooltip(...n)),
    onMouseleave: s[1] || (s[1] = (...n) => i.hideTooltip && i.hideTooltip(...n))
  }, [
    r("div", ot, [
      w(e.$slots, "default")
    ], 512),
    k(T, { name: "tooltip-fade" }, {
      default: z(() => [
        D(r("div", {
          ref: "tooltip",
          class: h(["tooltip", [
            `tooltip-${t.placement}`,
            `tooltip-${t.theme}`
          ]]),
          style: _(c.tooltipStyle)
        }, [
          r("div", {
            class: h(["tooltip-arrow", `tooltip-arrow-${t.placement}`])
          }, null, 2),
          r("div", lt, [
            w(e.$slots, "content", {}, () => [
              I(y(t.content), 1)
            ])
          ])
        ], 6), [
          [P, c.visible]
        ])
      ]),
      _: 3
    })
  ], 32);
}
const U = /* @__PURE__ */ f(nt, [["render", rt]]), at = {
  name: "ds_Select",
  components: {
    ds_icon: b
  },
  props: {
    // v-model 绑定值
    modelValue: {
      type: [String, Number, Boolean, Object],
      default: ""
    },
    // 选项数组
    options: {
      type: Array,
      default: () => [],
      validator: (e) => e.every(
        (s) => s.hasOwnProperty("value") && s.hasOwnProperty("label")
      )
    },
    // 占位文本
    placeholder: {
      type: String,
      default: "请选择"
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: !1
    },
    // 选择框尺寸
    size: {
      type: String,
      default: "medium",
      validator: (e) => ["small", "medium", "large"].includes(e)
    }
  },
  data() {
    return {
      isOpen: !1,
      isFocused: !1,
      focusedIndex: -1,
      dropdownStyle: {
        width: "auto"
      }
    };
  },
  computed: {
    // 选中项的标签
    selectedLabel() {
      const e = this.options.find((s) => s.value === this.modelValue);
      return e ? e.label : "";
    },
    // 选中的选项
    selectedOption() {
      return this.options.find((e) => e.value === this.modelValue);
    },
    // 箭头图标尺寸
    arrowSize() {
      return this.size === "small" ? "small" : this.size === "large" ? "large" : "medium";
    },
    // 选项图标尺寸
    iconSize() {
      return this.size === "small" ? "small" : this.size === "large" ? "medium" : "small";
    }
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    // 切换下拉菜单显示状态
    toggleDropdown() {
      this.disabled || (this.isOpen = !this.isOpen, this.isOpen && (this.updateDropdownWidth(), this.focusedIndex = this.getSelectedIndex()));
    },
    // 关闭下拉菜单
    closeDropdown() {
      this.isOpen = !1;
    },
    // 处理失焦事件
    handleBlur() {
      this.isFocused = !1, setTimeout(() => {
        this.isOpen && this.closeDropdown();
      }, 100);
    },
    // 处理聚焦事件
    handleFocus() {
      this.disabled || (this.isFocused = !0);
    },
    // 处理点击外部关闭下拉菜单
    handleClickOutside(e) {
      this.$el && !this.$el.contains(e.target) && this.closeDropdown();
    },
    // 选择选项
    selectOption(e) {
      if (this.modelValue === e.value) {
        this.closeDropdown();
        return;
      }
      this.$emit("update:modelValue", e.value), this.$emit("change", e.value), this.closeDropdown();
    },
    // 获取当前选中项的索引
    getSelectedIndex() {
      return this.options.findIndex((e) => e.value === this.modelValue);
    },
    // 聚焦下一个选项
    focusNextItem() {
      if (!this.isOpen) {
        this.isOpen = !0, this.updateDropdownWidth(), this.focusedIndex = this.getSelectedIndex();
        return;
      }
      this.focusedIndex < this.options.length - 1 ? this.focusedIndex++ : this.focusedIndex = 0;
    },
    // 聚焦上一个选项
    focusPrevItem() {
      if (!this.isOpen) {
        this.isOpen = !0, this.updateDropdownWidth(), this.focusedIndex = this.getSelectedIndex();
        return;
      }
      this.focusedIndex > 0 ? this.focusedIndex-- : this.focusedIndex = this.options.length - 1;
    },
    // 选择当前聚焦的选项
    selectFocusedItem() {
      if (!this.isOpen) {
        this.isOpen = !0, this.updateDropdownWidth();
        return;
      }
      this.focusedIndex >= 0 && this.focusedIndex < this.options.length && this.selectOption(this.options[this.focusedIndex]);
    },
    // 更新下拉菜单宽度，使其与选择框相同
    updateDropdownWidth() {
      this.$nextTick(() => {
        if (this.$el) {
          const e = this.$el.offsetWidth;
          this.dropdownStyle = {
            width: `${e}px`
          };
        }
      });
    }
  }
}, dt = { class: "select-inner" }, ct = { class: "select-value" }, ut = { key: 0 }, ht = {
  key: 1,
  class: "select-placeholder"
}, mt = { class: "select-options" }, gt = ["onClick", "onMouseenter"];
function ft(e, s, t, a, c, i) {
  const n = C("ds_icon");
  return l(), d("div", {
    class: h(["select-wrapper", [
      `select-${t.size}`,
      {
        "select-disabled": t.disabled,
        "select-focused": c.isFocused,
        "select-open": c.isOpen
      }
    ]]),
    onClick: s[0] || (s[0] = (...o) => i.toggleDropdown && i.toggleDropdown(...o)),
    onKeydown: [
      s[1] || (s[1] = B((...o) => i.closeDropdown && i.closeDropdown(...o), ["esc"])),
      s[2] || (s[2] = B(M((...o) => i.focusNextItem && i.focusNextItem(...o), ["prevent"]), ["down"])),
      s[3] || (s[3] = B(M((...o) => i.focusPrevItem && i.focusPrevItem(...o), ["prevent"]), ["up"])),
      s[4] || (s[4] = B(M((...o) => i.selectFocusedItem && i.selectFocusedItem(...o), ["prevent"]), ["enter"]))
    ],
    tabindex: "0",
    onBlur: s[5] || (s[5] = (...o) => i.handleBlur && i.handleBlur(...o)),
    onFocus: s[6] || (s[6] = (...o) => i.handleFocus && i.handleFocus(...o))
  }, [
    r("div", dt, [
      r("div", ct, [
        i.selectedLabel ? (l(), d("span", ut, [
          i.selectedOption && i.selectedOption.icon ? (l(), p(n, {
            key: 0,
            name: i.selectedOption.icon,
            size: i.iconSize,
            class: "select-icon"
          }, null, 8, ["name", "size"])) : u("", !0),
          I(" " + y(i.selectedLabel), 1)
        ])) : (l(), d("span", ht, y(t.placeholder), 1))
      ]),
      r("div", {
        class: h(["select-arrow", { rotate: c.isOpen }])
      }, [
        k(n, {
          name: "chevron-down",
          size: i.arrowSize
        }, null, 8, ["size"])
      ], 2)
    ]),
    k(T, { name: "select-dropdown-fade" }, {
      default: z(() => [
        D(r("div", {
          class: "select-dropdown",
          style: _(c.dropdownStyle)
        }, [
          r("ul", mt, [
            (l(!0), d(E, null, O(t.options, (o, m) => (l(), d("li", {
              key: o.value,
              class: h(["select-option", {
                "select-option-selected": t.modelValue === o.value,
                "select-option-focused": c.focusedIndex === m
              }]),
              onClick: M((S) => i.selectOption(o), ["stop"]),
              onMouseenter: (S) => c.focusedIndex = m
            }, [
              o.icon ? (l(), p(n, {
                key: 0,
                name: o.icon,
                size: i.iconSize,
                class: "select-option-icon"
              }, null, 8, ["name", "size"])) : u("", !0),
              I(" " + y(o.label), 1)
            ], 42, gt))), 128))
          ])
        ], 4), [
          [P, c.isOpen]
        ])
      ]),
      _: 1
    })
  ], 34);
}
const X = /* @__PURE__ */ f(at, [["render", ft]]), pt = {
  name: "ds_Dropdown",
  props: {
    // 触发方式
    trigger: {
      type: String,
      default: "click",
      validator: (e) => ["click", "hover"].includes(e)
    },
    // 下拉菜单位置
    placement: {
      type: String,
      default: "bottom",
      validator: (e) => ["top", "right", "bottom", "left"].includes(e)
    },
    // 显示延迟（毫秒）
    showDelay: {
      type: Number,
      default: 100
    },
    // 隐藏延迟（毫秒）
    hideDelay: {
      type: Number,
      default: 150
    },
    // 下拉菜单偏移量
    offset: {
      type: Number,
      default: 8
    }
  },
  data() {
    return {
      visible: !1,
      showTimer: null,
      hideTimer: null,
      dropdownStyle: {
        minWidth: "auto"
      }
    };
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside), this.clearTimers();
  },
  methods: {
    // 切换下拉菜单显示状态
    toggleDropdown() {
      this.trigger === "click" && (this.visible ? this.hideDropdown(0) : this.showDropdown(0));
    },
    // 显示下拉菜单
    showDropdown(e = this.showDelay) {
      this.clearTimers(), e ? this.showTimer = setTimeout(() => {
        this.visible = !0, this.$nextTick(() => {
          this.updatePosition();
        }), this.$emit("show");
      }, e) : (this.visible = !0, this.$nextTick(() => {
        this.updatePosition();
      }), this.$emit("show"));
    },
    // 隐藏下拉菜单
    hideDropdown(e = this.hideDelay) {
      this.clearShowTimer(), e ? this.hideTimer = setTimeout(() => {
        this.visible = !1, this.$emit("hide");
      }, e) : (this.visible = !1, this.$emit("hide"));
    },
    // 清除显示定时器
    clearShowTimer() {
      this.showTimer && (clearTimeout(this.showTimer), this.showTimer = null);
    },
    // 清除隐藏定时器
    clearHideTimer() {
      this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null);
    },
    // 清除所有定时器
    clearTimers() {
      this.clearShowTimer(), this.clearHideTimer();
    },
    // 处理点击外部关闭下拉菜单
    handleClickOutside(e) {
      this.visible && this.$el && !this.$el.contains(e.target) && this.hideDropdown(0);
    },
    // 更新下拉菜单位置
    updatePosition() {
      if (!this.visible) return;
      const e = this.$refs.trigger, s = this.$refs.dropdown;
      if (!e || !s) return;
      const t = e.getBoundingClientRect();
      switch (this.dropdownStyle = {
        ...this.dropdownStyle,
        minWidth: `${t.width}px`
      }, this.placement) {
        case "top":
          s.style.bottom = "100%", s.style.left = "0", s.style.marginBottom = `${this.offset}px`;
          break;
        case "right":
          s.style.left = "100%", s.style.top = "0", s.style.marginLeft = `${this.offset}px`;
          break;
        case "bottom":
          s.style.top = "100%", s.style.left = "0", s.style.marginTop = `${this.offset}px`;
          break;
        case "left":
          s.style.right = "100%", s.style.top = "0", s.style.marginRight = `${this.offset}px`;
          break;
      }
    }
  }
}, vt = { class: "dropdown-container" };
function wt(e, s, t, a, c, i) {
  return l(), d("div", vt, [
    r("div", {
      ref: "trigger",
      class: "dropdown-trigger",
      onClick: s[0] || (s[0] = (...n) => i.toggleDropdown && i.toggleDropdown(...n)),
      onMouseenter: s[1] || (s[1] = (n) => t.trigger === "hover" && i.showDropdown()),
      onMouseleave: s[2] || (s[2] = (n) => t.trigger === "hover" && i.hideDropdown())
    }, [
      w(e.$slots, "trigger")
    ], 544),
    k(T, { name: "dropdown-fade" }, {
      default: z(() => [
        D(r("div", {
          ref: "dropdown",
          class: h(["dropdown", [`dropdown-${t.placement}`]]),
          style: _(c.dropdownStyle),
          onMouseenter: s[3] || (s[3] = (n) => t.trigger === "hover" && i.clearHideTimer()),
          onMouseleave: s[4] || (s[4] = (n) => t.trigger === "hover" && i.hideDropdown())
        }, [
          w(e.$slots, "default")
        ], 38), [
          [P, c.visible]
        ])
      ]),
      _: 3
    })
  ]);
}
const Z = /* @__PURE__ */ f(pt, [["render", wt]]), yt = {
  name: "ds_Tab",
  components: {
    ds_icon: b
  },
  props: {
    // v-model 绑定值
    modelValue: {
      type: [String, Number],
      required: !0
    },
    // 标签页类型
    type: {
      type: String,
      default: "line",
      validator: (e) => ["line", "card"].includes(e)
    },
    // 标签页位置
    position: {
      type: String,
      default: "top",
      validator: (e) => ["top", "right", "bottom", "left"].includes(e)
    },
    // 图标尺寸
    iconSize: {
      type: String,
      default: "small"
    },
    // 标签页数据
    tabs: {
      type: Array,
      required: !0,
      validator: (e) => e.every(
        (s) => s.hasOwnProperty("name") && s.hasOwnProperty("label")
      )
    }
  },
  data() {
    return {
      activeBarStyle: {
        transform: "translateX(0px)",
        width: "0px"
      }
    };
  },
  watch: {
    // 监听激活标签变化，更新激活标记位置
    modelValue: {
      handler() {
        this.$nextTick(() => {
          this.updateActiveBar();
        });
      },
      immediate: !0
    }
  },
  mounted() {
    this.updateActiveBar(), window.addEventListener("resize", this.updateActiveBar);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateActiveBar);
  },
  methods: {
    // 处理标签点击事件
    handleTabClick(e) {
      e.disabled || (this.$emit("update:modelValue", e.name), this.$emit("tab-click", e));
    },
    // 更新激活标记位置
    updateActiveBar() {
      if (this.type !== "line") return;
      const e = this.tabs.findIndex((c) => c.name === this.modelValue);
      if (e === -1) return;
      const s = this.$el.querySelectorAll(".tab-item");
      if (!s.length) return;
      const t = s[e];
      if (!t) return;
      const a = t.getBoundingClientRect();
      this.$el.querySelector(".tab-header").getBoundingClientRect(), this.position === "top" || this.position === "bottom" ? this.activeBarStyle = {
        transform: `translateX(${t.offsetLeft}px)`,
        width: `${a.width}px`
      } : this.activeBarStyle = {
        transform: `translateY(${t.offsetTop}px)`,
        height: `${a.height}px`,
        width: "2px"
      };
    }
  }
}, kt = ["onClick"], xt = { class: "tab-item-label" }, bt = { class: "tab-content" };
function _t(e, s, t, a, c, i) {
  const n = C("ds_icon");
  return l(), d("div", {
    class: h(["tab-container", [`tab-${t.type}`]])
  }, [
    r("div", {
      class: h(["tab-header", [`tab-header-${t.position}`]])
    }, [
      (l(!0), d(E, null, O(t.tabs, (o, m) => (l(), d("div", {
        key: m,
        class: h(["tab-item", {
          "tab-item-active": t.modelValue === o.name,
          "tab-item-disabled": o.disabled
        }]),
        onClick: (S) => i.handleTabClick(o)
      }, [
        o.icon ? (l(), p(n, {
          key: 0,
          name: o.icon,
          size: t.iconSize,
          class: "tab-item-icon"
        }, null, 8, ["name", "size"])) : u("", !0),
        r("span", xt, y(o.label), 1)
      ], 10, kt))), 128)),
      t.type === "line" ? (l(), d("div", {
        key: 0,
        class: "tab-active-bar",
        style: _(c.activeBarStyle)
      }, null, 4)) : u("", !0)
    ], 2),
    r("div", bt, [
      w(e.$slots, "default")
    ])
  ], 2);
}
const W = /* @__PURE__ */ f(yt, [["render", _t]]), Ct = {
  name: "ds_Slider",
  props: {
    // v-model 绑定值
    modelValue: {
      type: Number,
      default: 0
    },
    // 最小值
    min: {
      type: Number,
      default: 0
    },
    // 最大值
    max: {
      type: Number,
      default: 100
    },
    // 步长
    step: {
      type: Number,
      default: 1
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: !1
    },
    // 是否显示输入框
    showInput: {
      type: Boolean,
      default: !1
    },
    // 是否显示提示气泡
    showTooltip: {
      type: Boolean,
      default: !0
    },
    // 是否显示间断点
    showStops: {
      type: Boolean,
      default: !1
    },
    // 是否竖向模式
    vertical: {
      type: Boolean,
      default: !1
    },
    // 高度（竖向模式）
    height: {
      type: String,
      default: "200px"
    }
  },
  data() {
    return {
      isDragging: !1,
      startX: 0,
      startY: 0,
      startPosition: 0,
      currentValue: this.modelValue,
      sliderSize: 0
    };
  },
  computed: {
    // 格式化后的值
    formattedValue() {
      return this.currentValue.toFixed(0);
    },
    // 计算滑块位置（百分比）
    valuePercent() {
      return this.max - this.min === 0 ? 0 : (this.currentValue - this.min) / (this.max - this.min) * 100;
    },
    // 滑块按钮样式
    buttonStyle() {
      return this.vertical ? { bottom: `${this.valuePercent}%` } : { left: `${this.valuePercent}%` };
    },
    // 已选择的轨道样式
    barStyle() {
      return this.vertical ? { height: `${this.valuePercent}%` } : { width: `${this.valuePercent}%` };
    },
    // 计算间断点的位置
    stops() {
      if (!this.showStops || this.min > this.max) return [];
      const e = [], s = (this.max - this.min) / this.step;
      for (let t = 1; t < s; t++) {
        const c = (this.min + t * this.step - this.min) / (this.max - this.min) * 100;
        e.push(c);
      }
      return e;
    }
  },
  watch: {
    // 监听 modelValue 变化
    modelValue: {
      handler(e) {
        this.currentValue = e;
      },
      immediate: !0
    }
  },
  mounted() {
    this.sliderSize = this.vertical ? this.$refs.slider.clientHeight : this.$refs.slider.clientWidth, window.addEventListener("resize", this.updateSliderSize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateSliderSize), this.removeDocumentEvents();
  },
  methods: {
    // 处理滑块点击事件
    handleSliderClick(e) {
      if (this.disabled || this.$refs.button && this.$refs.button.contains(e.target))
        return;
      const s = this.$refs.slider.getBoundingClientRect();
      let t;
      this.vertical ? t = (s.bottom - e.clientY) / this.sliderSize : t = (e.clientX - s.left) / this.sliderSize, this.setPosition(t);
    },
    // 处理鼠标按下事件
    handleMouseDown(e) {
      this.disabled || (this.isDragging = !0, this.startX = e.clientX, this.startY = e.clientY, this.startPosition = this.valuePercent / 100, document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("mouseup", this.handleMouseUp), e.preventDefault());
    },
    // 处理鼠标移动事件
    handleMouseMove(e) {
      if (!this.isDragging) return;
      this.$refs.slider.getBoundingClientRect();
      let s;
      if (this.vertical) {
        const a = e.clientY;
        s = (this.startY - a) / this.sliderSize;
      } else
        s = (e.clientX - this.startX) / this.sliderSize;
      const t = Math.min(Math.max(this.startPosition + s, 0), 1);
      this.setPosition(t);
    },
    // 处理鼠标释放事件
    handleMouseUp() {
      this.isDragging && (this.isDragging = !1, this.removeDocumentEvents());
    },
    // 处理触摸开始事件
    handleTouchStart(e) {
      if (this.disabled) return;
      this.isDragging = !0;
      const s = e.touches[0];
      this.startX = s.clientX, this.startY = s.clientY, this.startPosition = this.valuePercent / 100, document.addEventListener("touchmove", this.handleTouchMove), document.addEventListener("touchend", this.handleTouchEnd), document.addEventListener("touchcancel", this.handleTouchEnd), e.preventDefault();
    },
    // 处理触摸移动事件
    handleTouchMove(e) {
      if (!this.isDragging) return;
      const s = e.touches[0];
      let t;
      if (this.vertical) {
        const c = s.clientY;
        t = (this.startY - c) / this.sliderSize;
      } else
        t = (s.clientX - this.startX) / this.sliderSize;
      const a = Math.min(Math.max(this.startPosition + t, 0), 1);
      this.setPosition(a), e.preventDefault();
    },
    // 处理触摸结束事件
    handleTouchEnd() {
      this.isDragging && (this.isDragging = !1, document.removeEventListener("touchmove", this.handleTouchMove), document.removeEventListener("touchend", this.handleTouchEnd), document.removeEventListener("touchcancel", this.handleTouchEnd));
    },
    // 处理输入框变更事件
    handleInputChange(e) {
      const s = parseFloat(e.target.value);
      if (isNaN(s)) return;
      const t = this.setValueByPosition(Math.max(Math.min(s, this.max), this.min) / (this.max - this.min));
      this.updateValue(t);
    },
    // 移除文档事件监听
    removeDocumentEvents() {
      document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp);
    },
    // 更新滑块尺寸
    updateSliderSize() {
      this.sliderSize = this.vertical ? this.$refs.slider.clientHeight : this.$refs.slider.clientWidth;
    },
    // 设置滑块位置
    setPosition(e) {
      const s = this.setValueByPosition(e);
      this.updateValue(s);
    },
    // 根据位置计算值
    setValueByPosition(e) {
      const s = this.max - this.min;
      let t = this.min + s * e;
      return this.step > 0 && (t = Math.round(t / this.step) * this.step), parseFloat(t.toFixed(5));
    },
    // 更新值并触发事件
    updateValue(e) {
      e !== this.currentValue && (this.currentValue = e, this.$emit("update:modelValue", e), this.$emit("change", e));
    },
    // 获取刻度标记的样式
    getStopStyle(e) {
      return this.vertical ? { bottom: `${e}%` } : { left: `${e}%` };
    }
  }
}, St = {
  key: 0,
  class: "slider-tooltip"
}, Tt = { class: "slider-tooltip-text" }, zt = {
  key: 0,
  class: "slider-input-wrapper"
}, Vt = ["value", "min", "max", "step", "disabled"];
function Bt(e, s, t, a, c, i) {
  return l(), d("div", {
    class: h(["slider-container", {
      "slider-disabled": t.disabled,
      "slider-vertical": t.vertical,
      "slider-with-input": t.showInput
    }])
  }, [
    r("div", {
      ref: "slider",
      class: "slider",
      onClick: s[2] || (s[2] = (...n) => i.handleSliderClick && i.handleSliderClick(...n))
    }, [
      s[5] || (s[5] = r("div", { class: "slider-runway" }, null, -1)),
      r("div", {
        class: "slider-bar",
        style: _(i.barStyle)
      }, null, 4),
      r("div", {
        ref: "button",
        class: "slider-button-wrapper",
        style: _(i.buttonStyle),
        onMousedown: s[0] || (s[0] = (...n) => i.handleMouseDown && i.handleMouseDown(...n)),
        onTouchstart: s[1] || (s[1] = (...n) => i.handleTouchStart && i.handleTouchStart(...n))
      }, [
        s[4] || (s[4] = r("div", { class: "slider-button" }, null, -1)),
        t.showTooltip && c.isDragging ? (l(), d("div", St, [
          r("span", Tt, y(i.formattedValue), 1)
        ])) : u("", !0)
      ], 36),
      t.showStops ? (l(!0), d(E, { key: 0 }, O(i.stops, (n, o) => (l(), d("div", {
        key: o,
        class: "slider-stop",
        style: _(i.getStopStyle(n))
      }, null, 4))), 128)) : u("", !0)
    ], 512),
    t.showInput ? (l(), d("div", zt, [
      r("input", {
        type: "number",
        class: "slider-input",
        value: t.modelValue,
        min: t.min,
        max: t.max,
        step: t.step,
        disabled: t.disabled,
        onInput: s[3] || (s[3] = (...n) => i.handleInputChange && i.handleInputChange(...n))
      }, null, 40, Vt)
    ])) : u("", !0)
  ], 2);
}
const Y = /* @__PURE__ */ f(Ct, [["render", Bt]]), Mt = {
  name: "ds_Message",
  components: {
    ds_icon: b
  },
  props: {
    message: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "info",
      validator: (e) => ["info", "success", "warning", "error", "loading"].includes(e)
    },
    duration: {
      type: Number,
      default: 3e3
    },
    showIcon: {
      type: Boolean,
      default: !0
    },
    closable: {
      type: Boolean,
      default: !1
    },
    iconSize: {
      type: String,
      default: "medium"
    },
    customClass: {
      type: String,
      default: ""
    },
    zIndex: {
      type: Number,
      default: 1e3
    },
    offset: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      visible: !0,
      timer: null,
      height: 0
    };
  },
  computed: {
    iconName() {
      switch (this.type) {
        case "success":
          return "msg-success";
        case "warning":
          return "msg-warning";
        case "error":
          return "msg-error";
        case "loading":
          return "loading";
        default:
          return "msg-info";
      }
    },
    customStyle() {
      return {
        top: `${this.offset}px`,
        zIndex: this.zIndex
      };
    }
  },
  mounted() {
    this.startTimer();
  },
  beforeUnmount() {
    this.clearTimer();
  },
  methods: {
    startTimer() {
      this.duration > 0 && this.type !== "loading" && (this.timer = setTimeout(() => {
        this.close();
      }, this.duration));
    },
    clearTimer() {
      this.timer && (clearTimeout(this.timer), this.timer = null);
    },
    close() {
      this.visible = !1, this.$emit("close"), setTimeout(() => {
        this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el);
      }, 300);
    }
  }
}, It = { class: "ds-message-content" }, Lt = {
  key: 0,
  class: "ds-message-icon"
}, Dt = { class: "ds-message-text" };
function Pt(e, s, t, a, c, i) {
  const n = C("ds_icon");
  return l(), p(T, { name: "message-fade" }, {
    default: z(() => [
      c.visible ? (l(), d("div", {
        key: 0,
        class: h(["ds-message", `ds-message--${t.type}`]),
        style: _(i.customStyle)
      }, [
        r("div", It, [
          t.showIcon && i.iconName ? (l(), d("div", Lt, [
            k(n, {
              name: i.iconName,
              size: t.iconSize,
              class: h({ "rotate-icon": t.type === "loading" })
            }, null, 8, ["name", "size", "class"])
          ])) : u("", !0),
          r("span", Dt, [
            w(e.$slots, "default")
          ]),
          t.closable ? (l(), d("div", {
            key: 1,
            class: "ds-message-close",
            onClick: s[0] || (s[0] = (...o) => i.close && i.close(...o))
          }, [
            k(n, {
              name: "close",
              size: t.iconSize || "small"
            }, null, 8, ["size"])
          ])) : u("", !0)
        ])
      ], 6)) : u("", !0)
    ]),
    _: 3
  });
}
const j = /* @__PURE__ */ f(Mt, [["render", Pt]]), g = [];
let Et = 1;
const Ot = () => `message_${Et++}`, jt = (e = 20) => {
  let s = e;
  return g.forEach(({ vm: t }) => {
    if (t && t.el) {
      const a = t.el.offsetHeight || 0;
      s += a + 16;
    }
  }), s;
}, Nt = (e) => {
  const s = g.findIndex((i) => i.id === e);
  if (s === -1) return;
  const { vm: t } = g[s];
  if (!t || !t.component) return;
  const a = t.el.offsetHeight || 0;
  g.splice(s, 1);
  const c = g.length;
  c < 1 || requestAnimationFrame(() => {
    for (let i = s; i < c; i++)
      if (g[i].vm && g[i].vm.el) {
        const n = g[i].vm.el, m = parseInt(n.style.top || "0") - a - 16;
        n.style.transition = "top 0.4s cubic-bezier(0.23, 1, 0.32, 1)", n.style.top = `${m}px`, g[i].vm.component && g[i].vm.component.props && (g[i].vm.component.props.offset = m);
      }
  });
}, v = (e) => {
  if (console.log("Creating message with options:", e), (typeof e == "string" || typeof e == "number") && (e = {
    message: e,
    type: "info"
  }), !e.message && e.message !== 0)
    return console.error("Message content is required"), { close: () => {
    } };
  if (e.preventDuplicates !== !1 && g.some(({ vm: m }) => {
    if (m && m.component && m.component.props) {
      const S = m.component.props;
      return S.message === e.message && S.type === (e.type || "info");
    }
    return !1;
  }))
    return console.log("Prevented duplicate message:", e.message), { close: () => {
    } };
  const s = Ot(), t = jt(e.offset), a = document.createElement("div");
  a.className = "ds-message-container";
  const c = e.onClose, n = {
    ...e,
    offset: t,
    id: s,
    onClose: () => {
      Nt(s), c && c();
    }
  };
  console.log("Creating VNode with props:", n);
  try {
    const o = k(j, n, {
      default: () => n.message
    });
    if (q(o, a), document.body.appendChild(a), a.style.position = "fixed", a.style.top = `${t}px`, a.style.left = "50%", a.style.transform = "translateX(-50%)", a.style.width = "auto", a.style.zIndex = n.zIndex || 9999, !o.component)
      return console.error("Failed to create component instance"), { close: () => {
      } };
    const m = {
      id: s,
      vm: {
        id: s,
        el: a,
        component: o.component
      }
    };
    return g.push(m), console.log("Message instance created successfully:", m), {
      close: () => {
        o.component && o.component.proxy && o.component.proxy.close();
      }
    };
  } catch (o) {
    return console.error("Error creating message:", o), a.parentNode && a.parentNode.removeChild(a), { close: () => {
    } };
  }
}, V = {
  info(e) {
    return v(typeof e == "string" || typeof e == "number" ? {
      message: e,
      type: "info"
    } : {
      ...e,
      type: "info"
    });
  },
  success(e) {
    return v(typeof e == "string" || typeof e == "number" ? {
      message: e,
      type: "success"
    } : {
      ...e,
      type: "success"
    });
  },
  warning(e) {
    return v(typeof e == "string" || typeof e == "number" ? {
      message: e,
      type: "warning"
    } : {
      ...e,
      type: "warning"
    });
  },
  error(e) {
    return v(typeof e == "string" || typeof e == "number" ? {
      message: e,
      type: "error"
    } : {
      ...e,
      type: "error"
    });
  },
  loading(e) {
    return v(typeof e == "string" || typeof e == "number" ? {
      message: e,
      type: "loading",
      duration: 0
    } : {
      ...e,
      type: "loading",
      duration: 0
    });
  }
}, x = function(e) {
  return v(e);
};
x.info = V.info;
x.success = V.success;
x.warning = V.warning;
x.error = V.error;
x.loading = V.loading;
x.closeAll = () => {
  [...g].forEach(({ vm: s }) => {
    s && s.component && s.component.proxy && s.component.proxy.close();
  }), g.length = 0, console.log("All messages have been closed");
};
const Ft = [
  N,
  b,
  F,
  A,
  R,
  H,
  $,
  U,
  X,
  Z,
  W,
  Y,
  j
], L = (e) => {
  Ft.forEach((s) => {
    const t = s.name;
    t && e.component(t, s);
  }), e.config.globalProperties.$message = x, console.log("Design System installed, $message available:", x);
};
if (typeof window < "u" && window.Vue) {
  if (window.Vue.version.startsWith("2."))
    typeof window.Vue.use == "function" && window.Vue.use({ install: L });
  else if (typeof window.Vue.createApp == "function") {
    const s = window.Vue.createApp({});
    L(s);
  }
}
const Rt = {
  install: L,
  Button: N,
  Icon: b,
  Input: F,
  Checkbox: A,
  Radio: R,
  Toggle: H,
  Alert: $,
  Tooltip: U,
  Select: X,
  Dropdown: Z,
  Tab: W,
  Slider: Y,
  Message: j,
  message: x
};
export {
  $ as Alert,
  N as Button,
  A as Checkbox,
  Z as Dropdown,
  b as Icon,
  F as Input,
  j as Message,
  R as Radio,
  X as Select,
  Y as Slider,
  W as Tab,
  H as Toggle,
  U as Tooltip,
  Rt as default,
  x as message
};
