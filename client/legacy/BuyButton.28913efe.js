import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, L as _createClass, S as SvelteComponentDev, v as validate_slots, g as element, t as text, j as claim_element, k as children, n as claim_text, m as detach_dev, p as attr_dev, q as add_location, r as insert_dev, u as append_dev, x as _slicedToArray, y as set_data_dev, D as noop } from './client.5de336ae.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/components/BuyButton.svelte";

function create_fragment(ctx) {
  var a;
  var t;
  var block = {
    c: function create() {
      a = element("a");
      t = text(
      /*text*/
      ctx[0]);
      this.h();
    },
    l: function claim(nodes) {
      a = claim_element(nodes, "A", {
        class: true,
        href: true,
        rel: true
      });
      var a_nodes = children(a);
      t = claim_text(a_nodes,
      /*text*/
      ctx[0]);
      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "class", "inline-block text-xl sm:text-2xl p-4 rounded-lg no-underline bg-oblivious");
      attr_dev(a, "href", "https://transactions.sendowl.com/packages/37218/89A60CC9/add_to_cart");
      attr_dev(a, "rel", "nofollow");
      add_location(a, file, 4, 0, 60);
    },
    m: function mount(target, anchor) {
      insert_dev(target, a, anchor);
      append_dev(a, t);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*text*/
      1) set_data_dev(t,
      /*text*/
      ctx[0]);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(a);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("BuyButton", slots, []);
  var _$$props$text = $$props.text,
      text = _$$props$text === void 0 ? "Get e-Book One" : _$$props$text;
  var writable_props = ["text"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<BuyButton> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("text" in $$props) $$invalidate(0, text = $$props.text);
  };

  $$self.$capture_state = function () {
    return {
      text: text
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("text" in $$props) $$invalidate(0, text = $$props.text);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [text];
}

var BuyButton = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(BuyButton, _SvelteComponentDev);

  var _super = _createSuper(BuyButton);

  function BuyButton(options) {
    var _this;

    _classCallCheck(this, BuyButton);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      text: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "BuyButton",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(BuyButton, [{
    key: "text",
    get: function get() {
      throw new Error("<BuyButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<BuyButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return BuyButton;
}(SvelteComponentDev);

export { BuyButton as B };
