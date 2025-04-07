import { createElementBlock, openBlock, normalizeClass, toDisplayString, resolveComponent, createBlock, createCommentVNode, renderSlot, createElementVNode, mergeProps, Transition, withCtx, createVNode, withDirectives, normalizeStyle, createTextVNode, vShow, withKeys, withModifiers, Fragment, renderList, render } from "vue";
const __vite_glob_0_0 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M8%203V13'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M4%209L8%2013L12%209'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const __vite_glob_0_1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M13%208H3'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M7%204L3%208L7%2012'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const __vite_glob_0_2 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M3%208H13'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9%204L13%208L9%2012'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const __vite_glob_0_3 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M8%2013V3'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M4%207L8%203L12%207'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const __vite_glob_0_4 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M8%202.5V3.5'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.5%207C12.5%205.67392%2011.9732%204.40215%2011.0355%203.46447C10.0979%202.52678%208.82608%202%207.5%202C6.17392%202%204.90215%202.52678%203.96447%203.46447C3.02678%204.40215%202.5%205.67392%202.5%207V9L1.5%2011H13.5L12.5%209V7Z'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%2011C9.5%2011.3978%209.34196%2011.7794%209.06066%2012.0607C8.77936%2012.342%208.39782%2012.5%208%2012.5C7.60218%2012.5%207.22064%2012.342%206.93934%2012.0607C6.65804%2011.7794%206.5%2011.3978%206.5%2011'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const __vite_glob_0_5 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M3%208L6%2011L13%204'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const __vite_glob_0_6 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M4%206L8%2010L12%206'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const __vite_glob_0_7 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M4%204L12%2012'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%204L4%2012'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const __vite_glob_0_8 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M2.5%206L8%202L13.5%206'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M3.5%206.5V13.5H12.5V6.5'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M6.5%2013.5V9.5H9.5V13.5'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const __vite_glob_0_9 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3ccircle%20cx='8'%20cy='8'%20r='6'%20stroke='currentColor'%20stroke-opacity='0.3'%20stroke-width='2'%3e%3c/circle%3e%3cpath%20d='M14%208C14%204.68629%2011.3137%202%208%202'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%3e%3c/path%3e%3c/svg%3e";
const __vite_glob_0_10 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M14%208C14%2011.3137%2011.3137%2014%208%2014C6.34315%2014%204.84315%2013.3284%203.75736%2012.2426C2.67157%2011.1569%202%209.65685%202%208C2%204.68629%204.68629%202%208%202C11.3137%202%2014%204.68629%2014%208Z'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5%207H11'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5%209H9'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const __vite_glob_0_11 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20version='1.1'%20viewBox='0%200%2016%2016'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.0%20Build%20151)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20none;%20}%20.st1%20{%20fill:%20%23fa2730;%20fill-rule:%20evenodd;%20}%20.st2%20{%20clip-path:%20url(%23clippath);%20}%20%3c/style%3e%3cclipPath%20id='clippath'%3e%3crect%20class='st0'%20width='16'%20height='16'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20class='st2'%3e%3cpath%20class='st1'%20d='M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8,8-3.6,8-8S12.4,0,8,0ZM8,6.9l-2.5-2.5-1.1,1.1,2.5,2.5-2.5,2.5,1.1,1.1,2.5-2.5,2.5,2.5,1.1-1.1-2.5-2.5,2.5-2.5-1.1-1.1-2.5,2.5Z'/%3e%3c/g%3e%3c/svg%3e";
const __vite_glob_0_12 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20version='1.1'%20viewBox='0%200%2016%2016'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.0%20Build%20151)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20none;%20}%20.st1%20{%20fill:%20%23fff;%20fill-rule:%20evenodd;%20}%20.st2%20{%20fill:%20%232661f1;%20}%20.st3%20{%20clip-path:%20url(%23clippath);%20}%20%3c/style%3e%3cclipPath%20id='clippath'%3e%3crect%20class='st0'%20x='0'%20y='0'%20width='16'%20height='16'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20class='st3'%3e%3cg%3e%3cpath%20class='st2'%20d='M0,8C0,3.6,3.6,0,8,0s8,3.6,8,8-3.6,8-8,8S0,12.4,0,8Z'/%3e%3cpath%20class='st1'%20d='M8.7,6.2v5.9h-1.5v-5.9h1.5Z'/%3e%3cpath%20class='st1'%20d='M8.7,3.3v1.9h-1.5v-1.9h1.5Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const __vite_glob_0_13 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20version='1.1'%20viewBox='0%200%2016%2016'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.0%20Build%20151)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20none;%20}%20.st1%20{%20fill:%20%2300c767;%20fill-rule:%20evenodd;%20}%20.st2%20{%20clip-path:%20url(%23clippath);%20}%20%3c/style%3e%3cclipPath%20id='clippath'%3e%3crect%20class='st0'%20width='16'%20height='16'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20class='st2'%3e%3cpath%20class='st1'%20d='M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8,8-3.6,8-8S12.4,0,8,0ZM7.6,11l5.4-5-1-1.1-4.4,4-2.7-2.4-1,1.1,3.7,3.4Z'/%3e%3c/g%3e%3c/svg%3e";
const __vite_glob_0_14 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20version='1.1'%20viewBox='0%200%2016%2016'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.0%20Build%20151)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20none;%20}%20.st1%20{%20fill:%20%23ff7c23;%20fill-rule:%20evenodd;%20}%20.st2%20{%20clip-path:%20url(%23clippath);%20}%20%3c/style%3e%3cclipPath%20id='clippath'%3e%3crect%20class='st0'%20x='0'%20width='16'%20height='16'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20class='st2'%3e%3cpath%20class='st1'%20d='M0,8C0,3.6,3.6,0,8,0s8,3.6,8,8-3.6,8-8,8S0,12.4,0,8ZM8.8,3.2v5.9h-1.5V3.2h1.5ZM8.8,12.1v-1.9h-1.5v1.9h1.5Z'/%3e%3c/g%3e%3c/svg%3e";
const __vite_glob_0_15 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M8%203V13'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M3%208H13'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const __vite_glob_0_16 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M6.5%202H9.5'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14%205.5L11.5%204.5'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M4.5%204.5L2%205.5'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8%2012C10.2091%2012%2012%2010.2091%2012%208C12%205.79086%2010.2091%204%208%204C5.79086%204%204%205.79086%204%208C4%2010.2091%205.79086%2012%208%2012Z'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%2014H6.5'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M2%2010.5L4.5%2011.5'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11.5%2011.5L14%2010.5'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const __vite_glob_0_17 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M8%202L9.8%205.4L13.5%206L11%208.8L11.5%2012.6L8%2010.9L4.5%2012.6L5%208.8L2.5%206L6.2%205.4L8%202Z'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3c/svg%3e";
const __vite_glob_0_18 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20fill='none'%3e%3cpath%20d='M8%208C9.65685%208%2011%206.65685%2011%205C11%203.34315%209.65685%202%208%202C6.34315%202%205%203.34315%205%205C5%206.65685%206.34315%208%208%208Z'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.50002%2014C2.50002%2011.5147%204.51473%209.5%207.00002%209.5H9.00002C11.4853%209.5%2013.5%2011.5147%2013.5%2014'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$c = {
  name: "ds_Icon",
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "medium",
      validator: (value) => ["small", "medium", "large"].includes(value)
    },
    color: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      hasError: false
    };
  },
  computed: {
    svgUrl() {
      if (this.hasError) return null;
      try {
        return new URL((/* @__PURE__ */ Object.assign({ "../assets/icons/arrow-down.svg": __vite_glob_0_0, "../assets/icons/arrow-left.svg": __vite_glob_0_1, "../assets/icons/arrow-right.svg": __vite_glob_0_2, "../assets/icons/arrow-up.svg": __vite_glob_0_3, "../assets/icons/bell.svg": __vite_glob_0_4, "../assets/icons/check.svg": __vite_glob_0_5, "../assets/icons/chevron-down.svg": __vite_glob_0_6, "../assets/icons/close.svg": __vite_glob_0_7, "../assets/icons/home.svg": __vite_glob_0_8, "../assets/icons/loading.svg": __vite_glob_0_9, "../assets/icons/message.svg": __vite_glob_0_10, "../assets/icons/msg-error.svg": __vite_glob_0_11, "../assets/icons/msg-info.svg": __vite_glob_0_12, "../assets/icons/msg-success.svg": __vite_glob_0_13, "../assets/icons/msg-warning.svg": __vite_glob_0_14, "../assets/icons/plus.svg": __vite_glob_0_15, "../assets/icons/settings.svg": __vite_glob_0_16, "../assets/icons/star.svg": __vite_glob_0_17, "../assets/icons/user.svg": __vite_glob_0_18 }))[`../assets/icons/${this.name}.svg`], import.meta.url).href;
      } catch (error) {
        console.error(`Icon ${this.name} not found:`, error);
        this.hasError = true;
        return null;
      }
    }
  },
  methods: {
    handleError(e) {
      console.error(`Failed to load icon ${this.name}:`, e);
      this.hasError = true;
    }
  }
};
const _hoisted_1$c = ["src"];
const _hoisted_2$b = { key: 1 };
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(["icon", { [`icon-${$props.size}`]: $props.size }])
  }, [
    $options.svgUrl ? (openBlock(), createElementBlock("img", {
      key: 0,
      src: $options.svgUrl,
      class: normalizeClass(["icon-svg", { "rotating": $props.name === "loading" }]),
      alt: "",
      onError: _cache[0] || (_cache[0] = (...args) => $options.handleError && $options.handleError(...args))
    }, null, 42, _hoisted_1$c)) : (openBlock(), createElementBlock("span", _hoisted_2$b, toDisplayString($props.name), 1))
  ], 2);
}
const Icon = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c]]);
const _sfc_main$b = {
  name: "ds_Button",
  components: {
    ds_icon: Icon
  },
  props: {
    // 按钮类型：primary, secondary, text, link, emphasize
    type: {
      type: String,
      default: "primary",
      validator: (value) => ["primary", "secondary", "text", "link", "emphasize"].includes(value)
    },
    // 按钮尺寸：small, medium, large, xlarge
    size: {
      type: String,
      default: "medium",
      validator: (value) => ["small", "medium", "large", "xlarge"].includes(value)
    },
    // 禁用状态
    disabled: {
      type: Boolean,
      default: false
    },
    // 加载状态
    loading: {
      type: Boolean,
      default: false
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
      default: false
    }
  },
  computed: {
    // 根据按钮尺寸决定图标尺寸
    iconSize() {
      if (this.size === "small") return "small";
      if (this.size === "large" || this.size === "xlarge") return "large";
      return "medium";
    }
  },
  methods: {
    onClick(event) {
      if (!this.disabled && !this.loading) {
        this.$emit("click", event);
      }
    }
  }
};
const _hoisted_1$b = ["disabled"];
const _hoisted_2$a = {
  key: 2,
  class: "button-content"
};
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ds_icon = resolveComponent("ds_icon");
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(["btn", [
      `btn-${$props.type}`,
      `btn-${$props.size}`,
      {
        "btn-icon-left": $props.iconLeft && !$props.iconOnly,
        "btn-icon-right": $props.iconRight && !$props.iconOnly,
        "btn-icon-only": $props.iconOnly,
        "btn-loading": $props.loading
      }
    ]]),
    disabled: $props.disabled || $props.loading,
    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
  }, [
    $props.iconLeft && !$props.iconOnly && !$props.loading ? (openBlock(), createBlock(_component_ds_icon, {
      key: 0,
      name: $props.iconLeft,
      size: $options.iconSize,
      class: "btn-icon"
    }, null, 8, ["name", "size"])) : createCommentVNode("", true),
    $props.loading ? (openBlock(), createBlock(_component_ds_icon, {
      key: 1,
      name: "loading",
      size: $options.iconSize,
      class: "btn-icon"
    }, null, 8, ["size"])) : createCommentVNode("", true),
    !$props.iconOnly ? (openBlock(), createElementBlock("span", _hoisted_2$a, [
      renderSlot(_ctx.$slots, "default")
    ])) : createCommentVNode("", true),
    $props.iconOnly && !$props.loading ? (openBlock(), createBlock(_component_ds_icon, {
      key: 3,
      name: $props.iconLeft || $props.iconRight,
      size: $options.iconSize,
      class: "btn-icon"
    }, null, 8, ["name", "size"])) : createCommentVNode("", true),
    $props.iconRight && !$props.iconOnly && !$props.loading ? (openBlock(), createBlock(_component_ds_icon, {
      key: 4,
      name: $props.iconRight,
      size: $options.iconSize,
      class: "btn-icon"
    }, null, 8, ["name", "size"])) : createCommentVNode("", true)
  ], 10, _hoisted_1$b);
}
const Button = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b]]);
const _sfc_main$a = {
  name: "ds_Input",
  components: {
    ds_icon: Icon
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
      validator: (value) => ["small", "medium", "large"].includes(value)
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否只读
    readonly: {
      type: Boolean,
      default: false
    },
    // 是否显示清除按钮
    clearable: {
      type: Boolean,
      default: false
    },
    // 是否有错误
    error: {
      type: Boolean,
      default: false
    },
    // 最大输入长度
    maxlength: {
      type: Number,
      default: null
    },
    // 是否显示字数限制
    showWordLimit: {
      type: Boolean,
      default: false
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
      isFocused: false
    };
  },
  computed: {
    // 计算当前输入值的长度
    valueLength() {
      return String(this.modelValue).length;
    },
    // 根据输入框尺寸决定图标尺寸
    iconSize() {
      if (this.size === "small") return "small";
      if (this.size === "large") return "large";
      return "medium";
    }
  },
  methods: {
    // 输入事件
    onInput(event) {
      this.$emit("update:modelValue", event.target.value);
      this.$emit("input", event);
    },
    // 聚焦事件
    onFocus(event) {
      this.isFocused = true;
      this.$emit("focus", event);
    },
    // 失焦事件
    onBlur(event) {
      this.isFocused = false;
      this.$emit("blur", event);
    },
    // 变更事件
    onChange(event) {
      this.$emit("change", event);
    },
    // 清除输入内容
    onClear() {
      this.$emit("update:modelValue", "");
      this.$emit("clear");
      this.$nextTick(() => {
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
};
const _hoisted_1$a = {
  key: 0,
  class: "input-icon input-prefix-icon"
};
const _hoisted_2$9 = {
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
};
const _hoisted_3$7 = {
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
};
const _hoisted_4$5 = ["type", "value", "placeholder", "disabled", "readonly", "maxlength"];
const _hoisted_5$2 = {
  key: 2,
  class: "input-icon input-suffix-icon"
};
const _hoisted_6$2 = {
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
};
const _hoisted_7 = {
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
};
const _hoisted_8 = {
  key: 3,
  class: "input-count"
};
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ds_icon = resolveComponent("ds_icon");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["input-wrapper", [
      `input-size-${$props.size}`,
      {
        "input-disabled": $props.disabled,
        "input-error": $props.error,
        "input-prefix": $props.prefix,
        "input-suffix": $props.suffix,
        "input-focus": $data.isFocused
      }
    ]])
  }, [
    $props.prefix ? (openBlock(), createElementBlock("div", _hoisted_1$a, [
      $props.prefix === "search" ? (openBlock(), createElementBlock("svg", _hoisted_2$9, _cache[5] || (_cache[5] = [
        createElementVNode("circle", {
          cx: "11",
          cy: "11",
          r: "8"
        }, null, -1),
        createElementVNode("line", {
          x1: "21",
          y1: "21",
          x2: "16.65",
          y2: "16.65"
        }, null, -1)
      ]))) : $props.prefix === "calendar" ? (openBlock(), createElementBlock("svg", _hoisted_3$7, _cache[6] || (_cache[6] = [
        createElementVNode("rect", {
          x: "3",
          y: "4",
          width: "18",
          height: "18",
          rx: "2",
          ry: "2"
        }, null, -1),
        createElementVNode("line", {
          x1: "16",
          y1: "2",
          x2: "16",
          y2: "6"
        }, null, -1),
        createElementVNode("line", {
          x1: "8",
          y1: "2",
          x2: "8",
          y2: "6"
        }, null, -1),
        createElementVNode("line", {
          x1: "3",
          y1: "10",
          x2: "21",
          y2: "10"
        }, null, -1)
      ]))) : (openBlock(), createBlock(_component_ds_icon, {
        key: 2,
        name: $props.prefix,
        size: $options.iconSize
      }, null, 8, ["name", "size"]))
    ])) : createCommentVNode("", true),
    createElementVNode("input", {
      ref: "input",
      class: "ds-input",
      type: $props.type,
      value: $props.modelValue,
      placeholder: $props.placeholder,
      disabled: $props.disabled,
      readonly: $props.readonly,
      maxlength: $props.maxlength,
      onInput: _cache[0] || (_cache[0] = (...args) => $options.onInput && $options.onInput(...args)),
      onFocus: _cache[1] || (_cache[1] = (...args) => $options.onFocus && $options.onFocus(...args)),
      onBlur: _cache[2] || (_cache[2] = (...args) => $options.onBlur && $options.onBlur(...args)),
      onChange: _cache[3] || (_cache[3] = (...args) => $options.onChange && $options.onChange(...args))
    }, null, 40, _hoisted_4$5),
    $props.clearable && $props.modelValue && !$props.disabled && !$props.readonly ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: "input-icon input-clear-icon",
      onClick: _cache[4] || (_cache[4] = (...args) => $options.onClear && $options.onClear(...args))
    }, _cache[7] || (_cache[7] = [
      createElementVNode("svg", {
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
        createElementVNode("circle", {
          cx: "12",
          cy: "12",
          r: "10"
        }),
        createElementVNode("line", {
          x1: "15",
          y1: "9",
          x2: "9",
          y2: "15"
        }),
        createElementVNode("line", {
          x1: "9",
          y1: "9",
          x2: "15",
          y2: "15"
        })
      ], -1)
    ]))) : $props.suffix ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
      $props.suffix === "search" ? (openBlock(), createElementBlock("svg", _hoisted_6$2, _cache[8] || (_cache[8] = [
        createElementVNode("circle", {
          cx: "11",
          cy: "11",
          r: "8"
        }, null, -1),
        createElementVNode("line", {
          x1: "21",
          y1: "21",
          x2: "16.65",
          y2: "16.65"
        }, null, -1)
      ]))) : $props.suffix === "calendar" ? (openBlock(), createElementBlock("svg", _hoisted_7, _cache[9] || (_cache[9] = [
        createElementVNode("rect", {
          x: "3",
          y: "4",
          width: "18",
          height: "18",
          rx: "2",
          ry: "2"
        }, null, -1),
        createElementVNode("line", {
          x1: "16",
          y1: "2",
          x2: "16",
          y2: "6"
        }, null, -1),
        createElementVNode("line", {
          x1: "8",
          y1: "2",
          x2: "8",
          y2: "6"
        }, null, -1),
        createElementVNode("line", {
          x1: "3",
          y1: "10",
          x2: "21",
          y2: "10"
        }, null, -1)
      ]))) : (openBlock(), createBlock(_component_ds_icon, {
        key: 2,
        name: $props.suffix,
        size: $options.iconSize
      }, null, 8, ["name", "size"]))
    ])) : createCommentVNode("", true),
    $props.showWordLimit && $props.maxlength ? (openBlock(), createElementBlock("div", _hoisted_8, [
      createElementVNode("span", null, toDisplayString($options.valueLength) + "/" + toDisplayString($props.maxlength), 1)
    ])) : createCommentVNode("", true)
  ], 2);
}
const Input = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
const _sfc_main$9 = {
  name: "ds_Checkbox",
  components: {
    ds_icon: Icon
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "medium",
      validator: (value) => ["small", "medium"].includes(value)
    },
    isPrimary: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "change"],
  methods: {
    handleChange(event) {
      if (this.disabled) return;
      const checked = event.target.checked;
      this.$emit("update:modelValue", checked);
      this.$emit("change", checked);
    }
  }
};
const _hoisted_1$9 = { class: "ds-checkbox-label" };
const _hoisted_2$8 = { class: "ds-checkbox-input" };
const _hoisted_3$6 = ["checked", "disabled"];
const _hoisted_4$4 = { class: "ds-checkbox-inner" };
const _hoisted_5$1 = {
  key: 1,
  class: "ds-checkbox-indeterminate"
};
const _hoisted_6$1 = {
  key: 0,
  class: "ds-checkbox-text"
};
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ds_icon = resolveComponent("ds_icon");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["ds-checkbox", [
      `ds-checkbox--${$props.size}`,
      {
        "is-checked": $props.modelValue,
        "is-disabled": $props.disabled,
        "is-indeterminate": $props.indeterminate,
        "is-primary": $props.isPrimary
      }
    ]])
  }, [
    createElementVNode("label", _hoisted_1$9, [
      createElementVNode("span", _hoisted_2$8, [
        createElementVNode("input", mergeProps({
          type: "checkbox",
          checked: $props.modelValue,
          disabled: $props.disabled,
          onChange: _cache[0] || (_cache[0] = (...args) => $options.handleChange && $options.handleChange(...args))
        }, _ctx.$attrs), null, 16, _hoisted_3$6),
        createElementVNode("span", _hoisted_4$4, [
          $props.modelValue && !$props.indeterminate ? (openBlock(), createBlock(_component_ds_icon, {
            key: 0,
            name: "check",
            size: "small",
            class: "ds-checkbox-icon"
          })) : createCommentVNode("", true),
          $props.indeterminate ? (openBlock(), createElementBlock("span", _hoisted_5$1)) : createCommentVNode("", true)
        ])
      ]),
      _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_6$1, [
        renderSlot(_ctx.$slots, "default")
      ])) : createCommentVNode("", true)
    ])
  ], 2);
}
const Checkbox = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
const _sfc_main$8 = {
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
      required: true
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 单选框尺寸
    size: {
      type: String,
      default: "medium",
      validator: (value) => ["small", "medium", "large"].includes(value)
    }
  },
  methods: {
    // 单选框变更事件
    onChange() {
      if (!this.disabled) {
        this.$emit("update:modelValue", this.label);
        this.$emit("change", this.label);
      }
    }
  }
};
const _hoisted_1$8 = { class: "radio" };
const _hoisted_2$7 = {
  key: 0,
  class: "radio-inner"
};
const _hoisted_3$5 = {
  key: 0,
  class: "radio-label"
};
const _hoisted_4$3 = ["value", "checked", "disabled"];
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["radio-wrapper", {
      "radio-checked": $props.modelValue === $props.label,
      "radio-disabled": $props.disabled
    }]),
    onClick: _cache[1] || (_cache[1] = (...args) => $options.onChange && $options.onChange(...args))
  }, [
    createElementVNode("div", _hoisted_1$8, [
      $props.modelValue === $props.label ? (openBlock(), createElementBlock("div", _hoisted_2$7)) : createCommentVNode("", true)
    ]),
    _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_3$5, [
      renderSlot(_ctx.$slots, "default")
    ])) : createCommentVNode("", true),
    createElementVNode("input", {
      type: "radio",
      class: "radio-input",
      value: $props.label,
      checked: $props.modelValue === $props.label,
      disabled: $props.disabled,
      onChange: _cache[0] || (_cache[0] = (...args) => $options.onChange && $options.onChange(...args))
    }, null, 40, _hoisted_4$3)
  ], 2);
}
const Radio = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
const _sfc_main$7 = {
  name: "ds_Toggle",
  props: {
    // v-model 绑定值
    modelValue: {
      type: Boolean,
      default: false
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 开关尺寸
    size: {
      type: String,
      default: "medium",
      validator: (value) => ["small", "medium", "large"].includes(value)
    }
  },
  methods: {
    // 开关变更事件
    onChange() {
      if (!this.disabled) {
        this.$emit("update:modelValue", !this.modelValue);
        this.$emit("change", !this.modelValue);
      }
    }
  }
};
const _hoisted_1$7 = {
  key: 0,
  class: "toggle-label"
};
const _hoisted_2$6 = ["checked", "disabled"];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["toggle-wrapper", [
      `toggle-${$props.size}`,
      {
        "toggle-checked": $props.modelValue,
        "toggle-disabled": $props.disabled
      }
    ]]),
    onClick: _cache[1] || (_cache[1] = (...args) => $options.onChange && $options.onChange(...args))
  }, [
    _cache[2] || (_cache[2] = createElementVNode("div", { class: "toggle-track" }, [
      createElementVNode("div", { class: "toggle-thumb" })
    ], -1)),
    _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_1$7, [
      renderSlot(_ctx.$slots, "default")
    ])) : createCommentVNode("", true),
    createElementVNode("input", {
      type: "checkbox",
      class: "toggle-input",
      checked: $props.modelValue,
      disabled: $props.disabled,
      onChange: _cache[0] || (_cache[0] = (...args) => $options.onChange && $options.onChange(...args))
    }, null, 40, _hoisted_2$6)
  ], 2);
}
const Toggle = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
const _sfc_main$6 = {
  name: "ds_Alert",
  components: {
    ds_icon: Icon
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
      validator: (value) => ["info", "success", "warning", "error"].includes(value)
    },
    // 是否显示图标
    showIcon: {
      type: Boolean,
      default: false
    },
    // 是否可关闭
    closable: {
      type: Boolean,
      default: false
    },
    // 图标尺寸
    iconSize: {
      type: String,
      default: "medium"
    }
  },
  data() {
    return {
      visible: true
    };
  },
  computed: {
    // 根据类型计算图标名称
    iconName() {
      const iconMap = {
        info: "info-circle",
        success: "check-circle",
        warning: "warning",
        error: "close-circle"
      };
      return iconMap[this.type] || "info-circle";
    }
  },
  methods: {
    // 处理关闭事件
    handleClose() {
      this.visible = false;
      this.$emit("close");
    }
  }
};
const _hoisted_1$6 = {
  key: 0,
  class: "alert-icon"
};
const _hoisted_2$5 = { class: "alert-content" };
const _hoisted_3$4 = {
  key: 0,
  class: "alert-title"
};
const _hoisted_4$2 = { class: "alert-description" };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ds_icon = resolveComponent("ds_icon");
  return openBlock(), createBlock(Transition, { name: "alert-fade" }, {
    default: withCtx(() => [
      $data.visible ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["alert", [
          `alert-${$props.type}`,
          { "alert-with-icon": $props.showIcon }
        ]]),
        role: "alert"
      }, [
        $props.showIcon ? (openBlock(), createElementBlock("span", _hoisted_1$6, [
          createVNode(_component_ds_icon, {
            name: $options.iconName,
            size: $props.iconSize
          }, null, 8, ["name", "size"])
        ])) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_2$5, [
          $props.title ? (openBlock(), createElementBlock("div", _hoisted_3$4, toDisplayString($props.title), 1)) : createCommentVNode("", true),
          createElementVNode("div", _hoisted_4$2, [
            renderSlot(_ctx.$slots, "default")
          ])
        ]),
        $props.closable ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: "alert-close",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClose && $options.handleClose(...args))
        }, [
          createVNode(_component_ds_icon, {
            name: "close",
            size: "small"
          })
        ])) : createCommentVNode("", true)
      ], 2)) : createCommentVNode("", true)
    ]),
    _: 3
  });
}
const Alert = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
const _sfc_main$5 = {
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
      validator: (value) => ["top", "right", "bottom", "left"].includes(value)
    },
    // 主题
    theme: {
      type: String,
      default: "dark",
      validator: (value) => ["dark", "light"].includes(value)
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
      visible: false,
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
      if (this.hideTimer) {
        clearTimeout(this.hideTimer);
        this.hideTimer = null;
      }
      this.showTimer = setTimeout(() => {
        this.visible = true;
        this.$nextTick(() => {
          this.updatePosition();
        });
      }, this.showDelay);
    },
    // 隐藏提示
    hideTooltip() {
      if (this.showTimer) {
        clearTimeout(this.showTimer);
        this.showTimer = null;
      }
      this.hideTimer = setTimeout(() => {
        this.visible = false;
      }, this.hideDelay);
    },
    // 更新提示位置
    updatePosition() {
      if (!this.visible) return;
      const triggerEl = this.$refs.trigger;
      const tooltipEl = this.$refs.tooltip;
      if (!triggerEl || !tooltipEl) return;
      const triggerRect = triggerEl.getBoundingClientRect();
      const tooltipRect = tooltipEl.getBoundingClientRect();
      const positions = {
        top: {
          top: `${-tooltipRect.height - 10}px`,
          left: `${(triggerRect.width - tooltipRect.width) / 2}px`
        },
        right: {
          top: `${(triggerRect.height - tooltipRect.height) / 2}px`,
          left: `${triggerRect.width + 10}px`
        },
        bottom: {
          top: `${triggerRect.height + 10}px`,
          left: `${(triggerRect.width - tooltipRect.width) / 2}px`
        },
        left: {
          top: `${(triggerRect.height - tooltipRect.height) / 2}px`,
          left: `${-tooltipRect.width - 10}px`
        }
      };
      const position = positions[this.placement];
      this.tooltipStyle = {
        top: position.top,
        left: position.left
      };
    }
  },
  beforeUnmount() {
    if (this.showTimer) {
      clearTimeout(this.showTimer);
      this.showTimer = null;
    }
    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
      this.hideTimer = null;
    }
  }
};
const _hoisted_1$5 = {
  ref: "trigger",
  class: "tooltip-trigger"
};
const _hoisted_2$4 = { class: "tooltip-content" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "tooltip-container",
    onMouseenter: _cache[0] || (_cache[0] = (...args) => $options.showTooltip && $options.showTooltip(...args)),
    onMouseleave: _cache[1] || (_cache[1] = (...args) => $options.hideTooltip && $options.hideTooltip(...args))
  }, [
    createElementVNode("div", _hoisted_1$5, [
      renderSlot(_ctx.$slots, "default")
    ], 512),
    createVNode(Transition, { name: "tooltip-fade" }, {
      default: withCtx(() => [
        withDirectives(createElementVNode("div", {
          ref: "tooltip",
          class: normalizeClass(["tooltip", [
            `tooltip-${$props.placement}`,
            `tooltip-${$props.theme}`
          ]]),
          style: normalizeStyle($data.tooltipStyle)
        }, [
          createElementVNode("div", {
            class: normalizeClass(["tooltip-arrow", `tooltip-arrow-${$props.placement}`])
          }, null, 2),
          createElementVNode("div", _hoisted_2$4, [
            renderSlot(_ctx.$slots, "content", {}, () => [
              createTextVNode(toDisplayString($props.content), 1)
            ])
          ])
        ], 6), [
          [vShow, $data.visible]
        ])
      ]),
      _: 3
    })
  ], 32);
}
const Tooltip = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const _sfc_main$4 = {
  name: "ds_Select",
  components: {
    ds_icon: Icon
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
      validator: (options) => {
        return options.every(
          (option) => option.hasOwnProperty("value") && option.hasOwnProperty("label")
        );
      }
    },
    // 占位文本
    placeholder: {
      type: String,
      default: "请选择"
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 选择框尺寸
    size: {
      type: String,
      default: "medium",
      validator: (value) => ["small", "medium", "large"].includes(value)
    }
  },
  data() {
    return {
      isOpen: false,
      isFocused: false,
      focusedIndex: -1,
      dropdownStyle: {
        width: "auto"
      }
    };
  },
  computed: {
    // 选中项的标签
    selectedLabel() {
      const selectedOption = this.options.find((option) => option.value === this.modelValue);
      return selectedOption ? selectedOption.label : "";
    },
    // 选中的选项
    selectedOption() {
      return this.options.find((option) => option.value === this.modelValue);
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
      if (this.disabled) return;
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.updateDropdownWidth();
        this.focusedIndex = this.getSelectedIndex();
      }
    },
    // 关闭下拉菜单
    closeDropdown() {
      this.isOpen = false;
    },
    // 处理失焦事件
    handleBlur() {
      this.isFocused = false;
      setTimeout(() => {
        if (!this.isOpen) return;
        this.closeDropdown();
      }, 100);
    },
    // 处理聚焦事件
    handleFocus() {
      if (this.disabled) return;
      this.isFocused = true;
    },
    // 处理点击外部关闭下拉菜单
    handleClickOutside(event) {
      if (this.$el && !this.$el.contains(event.target)) {
        this.closeDropdown();
      }
    },
    // 选择选项
    selectOption(option) {
      if (this.modelValue === option.value) {
        this.closeDropdown();
        return;
      }
      this.$emit("update:modelValue", option.value);
      this.$emit("change", option.value);
      this.closeDropdown();
    },
    // 获取当前选中项的索引
    getSelectedIndex() {
      return this.options.findIndex((option) => option.value === this.modelValue);
    },
    // 聚焦下一个选项
    focusNextItem() {
      if (!this.isOpen) {
        this.isOpen = true;
        this.updateDropdownWidth();
        this.focusedIndex = this.getSelectedIndex();
        return;
      }
      if (this.focusedIndex < this.options.length - 1) {
        this.focusedIndex++;
      } else {
        this.focusedIndex = 0;
      }
    },
    // 聚焦上一个选项
    focusPrevItem() {
      if (!this.isOpen) {
        this.isOpen = true;
        this.updateDropdownWidth();
        this.focusedIndex = this.getSelectedIndex();
        return;
      }
      if (this.focusedIndex > 0) {
        this.focusedIndex--;
      } else {
        this.focusedIndex = this.options.length - 1;
      }
    },
    // 选择当前聚焦的选项
    selectFocusedItem() {
      if (!this.isOpen) {
        this.isOpen = true;
        this.updateDropdownWidth();
        return;
      }
      if (this.focusedIndex >= 0 && this.focusedIndex < this.options.length) {
        this.selectOption(this.options[this.focusedIndex]);
      }
    },
    // 更新下拉菜单宽度，使其与选择框相同
    updateDropdownWidth() {
      this.$nextTick(() => {
        if (this.$el) {
          const width = this.$el.offsetWidth;
          this.dropdownStyle = {
            width: `${width}px`
          };
        }
      });
    }
  }
};
const _hoisted_1$4 = { class: "select-inner" };
const _hoisted_2$3 = { class: "select-value" };
const _hoisted_3$3 = { key: 0 };
const _hoisted_4$1 = {
  key: 1,
  class: "select-placeholder"
};
const _hoisted_5 = { class: "select-options" };
const _hoisted_6 = ["onClick", "onMouseenter"];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ds_icon = resolveComponent("ds_icon");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["select-wrapper", [
      `select-${$props.size}`,
      {
        "select-disabled": $props.disabled,
        "select-focused": $data.isFocused,
        "select-open": $data.isOpen
      }
    ]]),
    onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleDropdown && $options.toggleDropdown(...args)),
    onKeydown: [
      _cache[1] || (_cache[1] = withKeys((...args) => $options.closeDropdown && $options.closeDropdown(...args), ["esc"])),
      _cache[2] || (_cache[2] = withKeys(withModifiers((...args) => $options.focusNextItem && $options.focusNextItem(...args), ["prevent"]), ["down"])),
      _cache[3] || (_cache[3] = withKeys(withModifiers((...args) => $options.focusPrevItem && $options.focusPrevItem(...args), ["prevent"]), ["up"])),
      _cache[4] || (_cache[4] = withKeys(withModifiers((...args) => $options.selectFocusedItem && $options.selectFocusedItem(...args), ["prevent"]), ["enter"]))
    ],
    tabindex: "0",
    onBlur: _cache[5] || (_cache[5] = (...args) => $options.handleBlur && $options.handleBlur(...args)),
    onFocus: _cache[6] || (_cache[6] = (...args) => $options.handleFocus && $options.handleFocus(...args))
  }, [
    createElementVNode("div", _hoisted_1$4, [
      createElementVNode("div", _hoisted_2$3, [
        $options.selectedLabel ? (openBlock(), createElementBlock("span", _hoisted_3$3, [
          $options.selectedOption && $options.selectedOption.icon ? (openBlock(), createBlock(_component_ds_icon, {
            key: 0,
            name: $options.selectedOption.icon,
            size: $options.iconSize,
            class: "select-icon"
          }, null, 8, ["name", "size"])) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString($options.selectedLabel), 1)
        ])) : (openBlock(), createElementBlock("span", _hoisted_4$1, toDisplayString($props.placeholder), 1))
      ]),
      createElementVNode("div", {
        class: normalizeClass(["select-arrow", { "rotate": $data.isOpen }])
      }, [
        createVNode(_component_ds_icon, {
          name: "chevron-down",
          size: $options.arrowSize
        }, null, 8, ["size"])
      ], 2)
    ]),
    createVNode(Transition, { name: "select-dropdown-fade" }, {
      default: withCtx(() => [
        withDirectives(createElementVNode("div", {
          class: "select-dropdown",
          style: normalizeStyle($data.dropdownStyle)
        }, [
          createElementVNode("ul", _hoisted_5, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($props.options, (option, index) => {
              return openBlock(), createElementBlock("li", {
                key: option.value,
                class: normalizeClass(["select-option", {
                  "select-option-selected": $props.modelValue === option.value,
                  "select-option-focused": $data.focusedIndex === index
                }]),
                onClick: withModifiers(($event) => $options.selectOption(option), ["stop"]),
                onMouseenter: ($event) => $data.focusedIndex = index
              }, [
                option.icon ? (openBlock(), createBlock(_component_ds_icon, {
                  key: 0,
                  name: option.icon,
                  size: $options.iconSize,
                  class: "select-option-icon"
                }, null, 8, ["name", "size"])) : createCommentVNode("", true),
                createTextVNode(" " + toDisplayString(option.label), 1)
              ], 42, _hoisted_6);
            }), 128))
          ])
        ], 4), [
          [vShow, $data.isOpen]
        ])
      ]),
      _: 1
    })
  ], 34);
}
const Select = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = {
  name: "ds_Dropdown",
  props: {
    // 触发方式
    trigger: {
      type: String,
      default: "click",
      validator: (value) => ["click", "hover"].includes(value)
    },
    // 下拉菜单位置
    placement: {
      type: String,
      default: "bottom",
      validator: (value) => ["top", "right", "bottom", "left"].includes(value)
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
      visible: false,
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
    document.removeEventListener("click", this.handleClickOutside);
    this.clearTimers();
  },
  methods: {
    // 切换下拉菜单显示状态
    toggleDropdown() {
      if (this.trigger !== "click") return;
      if (this.visible) {
        this.hideDropdown(0);
      } else {
        this.showDropdown(0);
      }
    },
    // 显示下拉菜单
    showDropdown(delay = this.showDelay) {
      this.clearTimers();
      if (delay) {
        this.showTimer = setTimeout(() => {
          this.visible = true;
          this.$nextTick(() => {
            this.updatePosition();
          });
          this.$emit("show");
        }, delay);
      } else {
        this.visible = true;
        this.$nextTick(() => {
          this.updatePosition();
        });
        this.$emit("show");
      }
    },
    // 隐藏下拉菜单
    hideDropdown(delay = this.hideDelay) {
      this.clearShowTimer();
      if (delay) {
        this.hideTimer = setTimeout(() => {
          this.visible = false;
          this.$emit("hide");
        }, delay);
      } else {
        this.visible = false;
        this.$emit("hide");
      }
    },
    // 清除显示定时器
    clearShowTimer() {
      if (this.showTimer) {
        clearTimeout(this.showTimer);
        this.showTimer = null;
      }
    },
    // 清除隐藏定时器
    clearHideTimer() {
      if (this.hideTimer) {
        clearTimeout(this.hideTimer);
        this.hideTimer = null;
      }
    },
    // 清除所有定时器
    clearTimers() {
      this.clearShowTimer();
      this.clearHideTimer();
    },
    // 处理点击外部关闭下拉菜单
    handleClickOutside(event) {
      if (this.visible && this.$el && !this.$el.contains(event.target)) {
        this.hideDropdown(0);
      }
    },
    // 更新下拉菜单位置
    updatePosition() {
      if (!this.visible) return;
      const triggerEl = this.$refs.trigger;
      const dropdownEl = this.$refs.dropdown;
      if (!triggerEl || !dropdownEl) return;
      const triggerRect = triggerEl.getBoundingClientRect();
      this.dropdownStyle = {
        ...this.dropdownStyle,
        minWidth: `${triggerRect.width}px`
      };
      switch (this.placement) {
        case "top":
          dropdownEl.style.bottom = "100%";
          dropdownEl.style.left = "0";
          dropdownEl.style.marginBottom = `${this.offset}px`;
          break;
        case "right":
          dropdownEl.style.left = "100%";
          dropdownEl.style.top = "0";
          dropdownEl.style.marginLeft = `${this.offset}px`;
          break;
        case "bottom":
          dropdownEl.style.top = "100%";
          dropdownEl.style.left = "0";
          dropdownEl.style.marginTop = `${this.offset}px`;
          break;
        case "left":
          dropdownEl.style.right = "100%";
          dropdownEl.style.top = "0";
          dropdownEl.style.marginRight = `${this.offset}px`;
          break;
      }
    }
  }
};
const _hoisted_1$3 = { class: "dropdown-container" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createElementVNode("div", {
      ref: "trigger",
      class: "dropdown-trigger",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleDropdown && $options.toggleDropdown(...args)),
      onMouseenter: _cache[1] || (_cache[1] = ($event) => $props.trigger === "hover" && $options.showDropdown()),
      onMouseleave: _cache[2] || (_cache[2] = ($event) => $props.trigger === "hover" && $options.hideDropdown())
    }, [
      renderSlot(_ctx.$slots, "trigger")
    ], 544),
    createVNode(Transition, { name: "dropdown-fade" }, {
      default: withCtx(() => [
        withDirectives(createElementVNode("div", {
          ref: "dropdown",
          class: normalizeClass(["dropdown", [`dropdown-${$props.placement}`]]),
          style: normalizeStyle($data.dropdownStyle),
          onMouseenter: _cache[3] || (_cache[3] = ($event) => $props.trigger === "hover" && $options.clearHideTimer()),
          onMouseleave: _cache[4] || (_cache[4] = ($event) => $props.trigger === "hover" && $options.hideDropdown())
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 38), [
          [vShow, $data.visible]
        ])
      ]),
      _: 3
    })
  ]);
}
const Dropdown = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = {
  name: "ds_Tab",
  components: {
    ds_icon: Icon
  },
  props: {
    // v-model 绑定值
    modelValue: {
      type: [String, Number],
      required: true
    },
    // 标签页类型
    type: {
      type: String,
      default: "line",
      validator: (value) => ["line", "card"].includes(value)
    },
    // 标签页位置
    position: {
      type: String,
      default: "top",
      validator: (value) => ["top", "right", "bottom", "left"].includes(value)
    },
    // 图标尺寸
    iconSize: {
      type: String,
      default: "small"
    },
    // 标签页数据
    tabs: {
      type: Array,
      required: true,
      validator: (tabs) => {
        return tabs.every(
          (tab) => tab.hasOwnProperty("name") && tab.hasOwnProperty("label")
        );
      }
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
      immediate: true
    }
  },
  mounted() {
    this.updateActiveBar();
    window.addEventListener("resize", this.updateActiveBar);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateActiveBar);
  },
  methods: {
    // 处理标签点击事件
    handleTabClick(tab) {
      if (tab.disabled) return;
      this.$emit("update:modelValue", tab.name);
      this.$emit("tab-click", tab);
    },
    // 更新激活标记位置
    updateActiveBar() {
      if (this.type !== "line") return;
      const activeIndex = this.tabs.findIndex((tab) => tab.name === this.modelValue);
      if (activeIndex === -1) return;
      const tabItems = this.$el.querySelectorAll(".tab-item");
      if (!tabItems.length) return;
      const activeTabEl = tabItems[activeIndex];
      if (!activeTabEl) return;
      const rect = activeTabEl.getBoundingClientRect();
      this.$el.querySelector(".tab-header").getBoundingClientRect();
      if (this.position === "top" || this.position === "bottom") {
        this.activeBarStyle = {
          transform: `translateX(${activeTabEl.offsetLeft}px)`,
          width: `${rect.width}px`
        };
      } else {
        this.activeBarStyle = {
          transform: `translateY(${activeTabEl.offsetTop}px)`,
          height: `${rect.height}px`,
          width: "2px"
        };
      }
    }
  }
};
const _hoisted_1$2 = ["onClick"];
const _hoisted_2$2 = { class: "tab-item-label" };
const _hoisted_3$2 = { class: "tab-content" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ds_icon = resolveComponent("ds_icon");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["tab-container", [`tab-${$props.type}`]])
  }, [
    createElementVNode("div", {
      class: normalizeClass(["tab-header", [`tab-header-${$props.position}`]])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.tabs, (tab, index) => {
        return openBlock(), createElementBlock("div", {
          key: index,
          class: normalizeClass(["tab-item", {
            "tab-item-active": $props.modelValue === tab.name,
            "tab-item-disabled": tab.disabled
          }]),
          onClick: ($event) => $options.handleTabClick(tab)
        }, [
          tab.icon ? (openBlock(), createBlock(_component_ds_icon, {
            key: 0,
            name: tab.icon,
            size: $props.iconSize,
            class: "tab-item-icon"
          }, null, 8, ["name", "size"])) : createCommentVNode("", true),
          createElementVNode("span", _hoisted_2$2, toDisplayString(tab.label), 1)
        ], 10, _hoisted_1$2);
      }), 128)),
      $props.type === "line" ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "tab-active-bar",
        style: normalizeStyle($data.activeBarStyle)
      }, null, 4)) : createCommentVNode("", true)
    ], 2),
    createElementVNode("div", _hoisted_3$2, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2);
}
const Tab = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {
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
      default: false
    },
    // 是否显示输入框
    showInput: {
      type: Boolean,
      default: false
    },
    // 是否显示提示气泡
    showTooltip: {
      type: Boolean,
      default: true
    },
    // 是否显示间断点
    showStops: {
      type: Boolean,
      default: false
    },
    // 是否竖向模式
    vertical: {
      type: Boolean,
      default: false
    },
    // 高度（竖向模式）
    height: {
      type: String,
      default: "200px"
    }
  },
  data() {
    return {
      isDragging: false,
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
      if (this.max - this.min === 0) return 0;
      return (this.currentValue - this.min) / (this.max - this.min) * 100;
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
      const stops = [];
      const stepCount = (this.max - this.min) / this.step;
      for (let i = 1; i < stepCount; i++) {
        const value = this.min + i * this.step;
        const percent = (value - this.min) / (this.max - this.min) * 100;
        stops.push(percent);
      }
      return stops;
    }
  },
  watch: {
    // 监听 modelValue 变化
    modelValue: {
      handler(val) {
        this.currentValue = val;
      },
      immediate: true
    }
  },
  mounted() {
    this.sliderSize = this.vertical ? this.$refs.slider.clientHeight : this.$refs.slider.clientWidth;
    window.addEventListener("resize", this.updateSliderSize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateSliderSize);
    this.removeDocumentEvents();
  },
  methods: {
    // 处理滑块点击事件
    handleSliderClick(event) {
      if (this.disabled) return;
      if (this.$refs.button && this.$refs.button.contains(event.target)) {
        return;
      }
      const sliderRect = this.$refs.slider.getBoundingClientRect();
      let position;
      if (this.vertical) {
        position = (sliderRect.bottom - event.clientY) / this.sliderSize;
      } else {
        position = (event.clientX - sliderRect.left) / this.sliderSize;
      }
      this.setPosition(position);
    },
    // 处理鼠标按下事件
    handleMouseDown(event) {
      if (this.disabled) return;
      this.isDragging = true;
      this.startX = event.clientX;
      this.startY = event.clientY;
      this.startPosition = this.valuePercent / 100;
      document.addEventListener("mousemove", this.handleMouseMove);
      document.addEventListener("mouseup", this.handleMouseUp);
      event.preventDefault();
    },
    // 处理鼠标移动事件
    handleMouseMove(event) {
      if (!this.isDragging) return;
      this.$refs.slider.getBoundingClientRect();
      let diff;
      if (this.vertical) {
        const clientY = event.clientY;
        diff = (this.startY - clientY) / this.sliderSize;
      } else {
        const clientX = event.clientX;
        diff = (clientX - this.startX) / this.sliderSize;
      }
      const newPosition = Math.min(Math.max(this.startPosition + diff, 0), 1);
      this.setPosition(newPosition);
    },
    // 处理鼠标释放事件
    handleMouseUp() {
      if (!this.isDragging) return;
      this.isDragging = false;
      this.removeDocumentEvents();
    },
    // 处理触摸开始事件
    handleTouchStart(event) {
      if (this.disabled) return;
      this.isDragging = true;
      const touch = event.touches[0];
      this.startX = touch.clientX;
      this.startY = touch.clientY;
      this.startPosition = this.valuePercent / 100;
      document.addEventListener("touchmove", this.handleTouchMove);
      document.addEventListener("touchend", this.handleTouchEnd);
      document.addEventListener("touchcancel", this.handleTouchEnd);
      event.preventDefault();
    },
    // 处理触摸移动事件
    handleTouchMove(event) {
      if (!this.isDragging) return;
      const touch = event.touches[0];
      let diff;
      if (this.vertical) {
        const clientY = touch.clientY;
        diff = (this.startY - clientY) / this.sliderSize;
      } else {
        const clientX = touch.clientX;
        diff = (clientX - this.startX) / this.sliderSize;
      }
      const newPosition = Math.min(Math.max(this.startPosition + diff, 0), 1);
      this.setPosition(newPosition);
      event.preventDefault();
    },
    // 处理触摸结束事件
    handleTouchEnd() {
      if (!this.isDragging) return;
      this.isDragging = false;
      document.removeEventListener("touchmove", this.handleTouchMove);
      document.removeEventListener("touchend", this.handleTouchEnd);
      document.removeEventListener("touchcancel", this.handleTouchEnd);
    },
    // 处理输入框变更事件
    handleInputChange(event) {
      const value = parseFloat(event.target.value);
      if (isNaN(value)) return;
      const newValue = this.setValueByPosition(Math.max(Math.min(value, this.max), this.min) / (this.max - this.min));
      this.updateValue(newValue);
    },
    // 移除文档事件监听
    removeDocumentEvents() {
      document.removeEventListener("mousemove", this.handleMouseMove);
      document.removeEventListener("mouseup", this.handleMouseUp);
    },
    // 更新滑块尺寸
    updateSliderSize() {
      this.sliderSize = this.vertical ? this.$refs.slider.clientHeight : this.$refs.slider.clientWidth;
    },
    // 设置滑块位置
    setPosition(position) {
      const newValue = this.setValueByPosition(position);
      this.updateValue(newValue);
    },
    // 根据位置计算值
    setValueByPosition(position) {
      const range = this.max - this.min;
      let value = this.min + range * position;
      if (this.step > 0) {
        value = Math.round(value / this.step) * this.step;
      }
      return parseFloat(value.toFixed(5));
    },
    // 更新值并触发事件
    updateValue(value) {
      if (value === this.currentValue) return;
      this.currentValue = value;
      this.$emit("update:modelValue", value);
      this.$emit("change", value);
    },
    // 获取刻度标记的样式
    getStopStyle(percent) {
      return this.vertical ? { bottom: `${percent}%` } : { left: `${percent}%` };
    }
  }
};
const _hoisted_1$1 = {
  key: 0,
  class: "slider-tooltip"
};
const _hoisted_2$1 = { class: "slider-tooltip-text" };
const _hoisted_3$1 = {
  key: 0,
  class: "slider-input-wrapper"
};
const _hoisted_4 = ["value", "min", "max", "step", "disabled"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["slider-container", {
      "slider-disabled": $props.disabled,
      "slider-vertical": $props.vertical,
      "slider-with-input": $props.showInput
    }])
  }, [
    createElementVNode("div", {
      ref: "slider",
      class: "slider",
      onClick: _cache[2] || (_cache[2] = (...args) => $options.handleSliderClick && $options.handleSliderClick(...args))
    }, [
      _cache[5] || (_cache[5] = createElementVNode("div", { class: "slider-runway" }, null, -1)),
      createElementVNode("div", {
        class: "slider-bar",
        style: normalizeStyle($options.barStyle)
      }, null, 4),
      createElementVNode("div", {
        ref: "button",
        class: "slider-button-wrapper",
        style: normalizeStyle($options.buttonStyle),
        onMousedown: _cache[0] || (_cache[0] = (...args) => $options.handleMouseDown && $options.handleMouseDown(...args)),
        onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.handleTouchStart && $options.handleTouchStart(...args))
      }, [
        _cache[4] || (_cache[4] = createElementVNode("div", { class: "slider-button" }, null, -1)),
        $props.showTooltip && $data.isDragging ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
          createElementVNode("span", _hoisted_2$1, toDisplayString($options.formattedValue), 1)
        ])) : createCommentVNode("", true)
      ], 36),
      $props.showStops ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($options.stops, (stop, index) => {
        return openBlock(), createElementBlock("div", {
          key: index,
          class: "slider-stop",
          style: normalizeStyle($options.getStopStyle(stop))
        }, null, 4);
      }), 128)) : createCommentVNode("", true)
    ], 512),
    $props.showInput ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
      createElementVNode("input", {
        type: "number",
        class: "slider-input",
        value: $props.modelValue,
        min: $props.min,
        max: $props.max,
        step: $props.step,
        disabled: $props.disabled,
        onInput: _cache[3] || (_cache[3] = (...args) => $options.handleInputChange && $options.handleInputChange(...args))
      }, null, 40, _hoisted_4)
    ])) : createCommentVNode("", true)
  ], 2);
}
const Slider = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  name: "ds_Message",
  components: {
    ds_icon: Icon
  },
  props: {
    message: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "info",
      validator: (value) => ["info", "success", "warning", "error", "loading"].includes(value)
    },
    duration: {
      type: Number,
      default: 3e3
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    closable: {
      type: Boolean,
      default: false
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
      visible: true,
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
      if (this.duration > 0 && this.type !== "loading") {
        this.timer = setTimeout(() => {
          this.close();
        }, this.duration);
      }
    },
    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    },
    close() {
      this.visible = false;
      this.$emit("close");
      setTimeout(() => {
        if (this.$el && this.$el.parentNode) {
          this.$el.parentNode.removeChild(this.$el);
        }
      }, 300);
    }
  }
};
const _hoisted_1 = { class: "ds-message-content" };
const _hoisted_2 = {
  key: 0,
  class: "ds-message-icon"
};
const _hoisted_3 = { class: "ds-message-text" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ds_icon = resolveComponent("ds_icon");
  return openBlock(), createBlock(Transition, { name: "message-fade" }, {
    default: withCtx(() => [
      $data.visible ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["ds-message", `ds-message--${$props.type}`]),
        style: normalizeStyle($options.customStyle)
      }, [
        createElementVNode("div", _hoisted_1, [
          $props.showIcon && $options.iconName ? (openBlock(), createElementBlock("div", _hoisted_2, [
            createVNode(_component_ds_icon, {
              name: $options.iconName,
              size: $props.iconSize,
              class: normalizeClass({ "rotate-icon": $props.type === "loading" })
            }, null, 8, ["name", "size", "class"])
          ])) : createCommentVNode("", true),
          createElementVNode("span", _hoisted_3, [
            renderSlot(_ctx.$slots, "default")
          ]),
          $props.closable ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: "ds-message-close",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.close && $options.close(...args))
          }, [
            createVNode(_component_ds_icon, {
              name: "close",
              size: $props.iconSize || "small"
            }, null, 8, ["size"])
          ])) : createCommentVNode("", true)
        ])
      ], 6)) : createCommentVNode("", true)
    ]),
    _: 3
  });
}
const Message = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const instances = [];
let seed = 1;
const getId = () => {
  return `message_${seed++}`;
};
const getVerticalOffset = (offset = 20) => {
  let verticalOffset = offset;
  instances.forEach(({ vm }) => {
    if (vm && vm.el) {
      const height = vm.el.offsetHeight || 0;
      verticalOffset += height + 16;
    }
  });
  return verticalOffset;
};
const close = (id) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  if (idx === -1) return;
  const { vm } = instances[idx];
  if (!vm || !vm.component) return;
  const removedHeight = vm.el.offsetHeight || 0;
  instances.splice(idx, 1);
  const len = instances.length;
  if (len < 1) return;
  requestAnimationFrame(() => {
    for (let i = idx; i < len; i++) {
      if (instances[i].vm && instances[i].vm.el) {
        const el = instances[i].vm.el;
        const currentTop = parseInt(el.style.top || "0");
        const pos = currentTop - removedHeight - 16;
        el.style.transition = "top 0.4s cubic-bezier(0.23, 1, 0.32, 1)";
        el.style.top = `${pos}px`;
        if (instances[i].vm.component && instances[i].vm.component.props) {
          instances[i].vm.component.props.offset = pos;
        }
      }
    }
  });
};
const createMessage = (options) => {
  console.log("Creating message with options:", options);
  if (typeof options === "string" || typeof options === "number") {
    options = {
      message: options,
      type: "info"
    };
  }
  if (!options.message && options.message !== 0) {
    console.error("Message content is required");
    return { close: () => {
    } };
  }
  if (options.preventDuplicates !== false) {
    const hasDuplicate = instances.some(({ vm }) => {
      if (vm && vm.component && vm.component.props) {
        const props2 = vm.component.props;
        return props2.message === options.message && props2.type === (options.type || "info");
      }
      return false;
    });
    if (hasDuplicate) {
      console.log("Prevented duplicate message:", options.message);
      return { close: () => {
      } };
    }
  }
  const id = getId();
  const verticalOffset = getVerticalOffset(options.offset);
  const container = document.createElement("div");
  container.className = "ds-message-container";
  const userOnClose = options.onClose;
  const onClose = () => {
    close(id);
    if (userOnClose) userOnClose();
  };
  const props = {
    ...options,
    offset: verticalOffset,
    id,
    onClose
  };
  console.log("Creating VNode with props:", props);
  try {
    const vnode = createVNode(Message, props, {
      default: () => props.message
    });
    render(vnode, container);
    document.body.appendChild(container);
    container.style.position = "fixed";
    container.style.top = `${verticalOffset}px`;
    container.style.left = "50%";
    container.style.transform = "translateX(-50%)";
    container.style.width = "auto";
    container.style.zIndex = props.zIndex || 9999;
    if (!vnode.component) {
      console.error("Failed to create component instance");
      return { close: () => {
      } };
    }
    const instance = {
      id,
      vm: {
        id,
        el: container,
        component: vnode.component
      }
    };
    instances.push(instance);
    console.log("Message instance created successfully:", instance);
    return {
      close: () => {
        if (vnode.component && vnode.component.proxy) {
          vnode.component.proxy.close();
        }
      }
    };
  } catch (error) {
    console.error("Error creating message:", error);
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
    return { close: () => {
    } };
  }
};
const message = {
  info(options) {
    if (typeof options === "string" || typeof options === "number") {
      return createMessage({
        message: options,
        type: "info"
      });
    }
    return createMessage({
      ...options,
      type: "info"
    });
  },
  success(options) {
    if (typeof options === "string" || typeof options === "number") {
      return createMessage({
        message: options,
        type: "success"
      });
    }
    return createMessage({
      ...options,
      type: "success"
    });
  },
  warning(options) {
    if (typeof options === "string" || typeof options === "number") {
      return createMessage({
        message: options,
        type: "warning"
      });
    }
    return createMessage({
      ...options,
      type: "warning"
    });
  },
  error(options) {
    if (typeof options === "string" || typeof options === "number") {
      return createMessage({
        message: options,
        type: "error"
      });
    }
    return createMessage({
      ...options,
      type: "error"
    });
  },
  loading(options) {
    if (typeof options === "string" || typeof options === "number") {
      return createMessage({
        message: options,
        type: "loading",
        duration: 0
      });
    }
    return createMessage({
      ...options,
      type: "loading",
      duration: 0
    });
  }
};
const messageAPI = function(options) {
  return createMessage(options);
};
messageAPI.info = message.info;
messageAPI.success = message.success;
messageAPI.warning = message.warning;
messageAPI.error = message.error;
messageAPI.loading = message.loading;
messageAPI.closeAll = () => {
  const instancesCopy = [...instances];
  instancesCopy.forEach(({ vm }) => {
    if (vm && vm.component && vm.component.proxy) {
      vm.component.proxy.close();
    }
  });
  instances.length = 0;
  console.log("All messages have been closed");
};
const components = [
  Button,
  Icon,
  Input,
  Checkbox,
  Radio,
  Toggle,
  Alert,
  Tooltip,
  Select,
  Dropdown,
  Tab,
  Slider,
  Message
];
const install = function(app) {
  if (install.installed) return;
  console.log("Installing Design System components...");
  components.forEach((component) => {
    const name = component.name;
    if (name) {
      const kebabName = name.replace(/_/g, "-").toLowerCase();
      console.log(`注册组件: ${kebabName}`);
      app.component(kebabName, component);
    }
  });
  if (app.config && app.config.globalProperties) {
    app.config.globalProperties.$message = messageAPI;
  } else if (app.prototype) {
    app.prototype.$message = messageAPI;
  }
  install.installed = true;
  console.log("Design System installation complete");
};
if (typeof window !== "undefined" && window.Vue) {
  const Vue = window.Vue;
  if (Vue.version && Vue.version.startsWith("2.")) {
    if (typeof Vue.use === "function") {
      Vue.use({ install });
    }
  } else {
    if (typeof Vue.createApp === "function") {
      const app = Vue.createApp({});
      app.use({ install });
    }
  }
}
const DesignSystem = {
  version: "1.0.0",
  install,
  Button,
  Icon,
  Input,
  Checkbox,
  Radio,
  Toggle,
  Alert,
  Tooltip,
  Select,
  Dropdown,
  Tab,
  Slider,
  Message
};
DesignSystem.message = messageAPI;
if (typeof window !== "undefined") {
  window.DesignSystem = DesignSystem;
}
export {
  Alert,
  Button,
  Checkbox,
  Dropdown,
  Icon,
  Input,
  Message,
  Radio,
  Select,
  Slider,
  Tab,
  Toggle,
  Tooltip,
  DesignSystem as default,
  install,
  messageAPI as message
};
