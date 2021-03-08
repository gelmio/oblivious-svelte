import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, K as _createClass, S as SvelteComponentDev, v as validate_slots, g as element, t as text, j as claim_element, k as children, n as claim_text, m as detach_dev, p as attr_dev, q as add_location, r as insert_dev, u as append_dev, x as _slicedToArray, y as set_data_dev, G as noop, h as space, D as query_selector_all, l as claim_space } from './client.f9dd3df9.js';

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

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/routes/about.svelte";

function create_fragment$1(ctx) {
  var meta0;
  var meta1;
  var meta2;
  var meta3;
  var meta4;
  var meta5;
  var meta6;
  var meta7;
  var meta8;
  var meta9;
  var t0;
  var h1;
  var t1;
  var t2;
  var section;
  var p0;
  var t3;
  var em0;
  var t4;
  var t5;
  var p1;
  var t6;
  var t7;
  var p2;
  var t8;
  var t9;
  var p3;
  var t10;
  var t11;
  var p4;
  var t12;
  var t13;
  var p5;
  var em1;
  var t14;
  var t15;
  var p6;
  var t16;
  var em2;
  var t17;
  var t18;
  var t19;
  var p7;
  var t20;
  var em3;
  var t21;
  var t22;
  var em4;
  var t23;
  var t24;
  var t25;
  var p8;
  var t26;
  var em5;
  var t27;
  var t28;
  var t29;
  var p9;
  var t30;
  var t31;
  var p10;
  var t32;
  var t33;
  var p11;
  var t34;
  var t35;
  var p12;
  var t36;
  var t37;
  var p13;
  var t38;
  var t39;
  var p14;
  var t40;
  var t41;
  var p15;
  var t42;
  var em6;
  var t43;
  var t44;
  var t45;
  var p16;
  var t46;
  var t47;
  var p17;
  var t48;
  var em7;
  var t49;
  var t50;
  var t51;
  var p18;
  var t52;
  var p19;
  var t53;
  var t54;
  var p20;
  var t55;
  var t56;
  var p21;
  var t57;
  var t58;
  var p22;
  var t59;
  var t60;
  var p23;
  var t61;
  var t62;
  var div;
  var a0;
  var t63;
  var t64;
  var a1;
  var t65;
  var block = {
    c: function create() {
      meta0 = element("meta");
      meta1 = element("meta");
      meta2 = element("meta");
      meta3 = element("meta");
      meta4 = element("meta");
      meta5 = element("meta");
      meta6 = element("meta");
      meta7 = element("meta");
      meta8 = element("meta");
      meta9 = element("meta");
      t0 = space();
      h1 = element("h1");
      t1 = text("Alternate Title: How [not] to ride through Africa on a Royal Enfield.");
      t2 = space();
      section = element("section");
      p0 = element("p");
      t3 = text("So, ");
      em0 = element("em");
      t4 = text("what's the story then?");
      t5 = space();
      p1 = element("p");
      t6 = text("Essentially, it's a story of things getting out of hand...");
      t7 = space();
      p2 = element("p");
      t8 = text("A fairly simple idea just evolved into something that was book-worthy. I still don't really know how it happened...");
      t9 = space();
      p3 = element("p");
      t10 = text("It started off with quitting my job, quitting my girlfriend and fucking off on a one way ticket to London.");
      t11 = space();
      p4 = element("p");
      t12 = text("From there, I headed straight to the local Royal Enfield dealer and grabbed one of those.");
      t13 = space();
      p5 = element("p");
      em1 = element("em");
      t14 = text("Why wouldn't you?");
      t15 = space();
      p6 = element("p");
      t16 = text("Already, I thought this shit was ");
      em2 = element("em");
      t17 = text("wild");
      t18 = text(".");
      t19 = space();
      p7 = element("p");
      t20 = text("I surprised myself by riding all the way to the northernmost point of Scotland. Then, before I knew it, I was already down to the southermost point of Spain, ");
      em3 = element("em");
      t21 = text("shitting");
      t22 = text(" myself as I looked across ");
      em4 = element("em");
      t23 = text("The Strait");
      t24 = text(" to Africa...");
      t25 = space();
      p8 = element("p");
      t26 = text("From there, well, I guess that's the real story; ");
      em5 = element("em");
      t27 = text("Africa.");
      t28 = text(" On a fucking Royal Enfield...");
      t29 = space();
      p9 = element("p");
      t30 = text("I never planned a moment of any of this; I sure as shit didn't plan on riding though Africa, otherwise my choice of vehicle would have been more sensible. But there I was. And then what happens next is what happens next...");
      t31 = space();
      p10 = element("p");
      t32 = text("I don't want to give the game away for those who haven't read any of the Trilogy yet (it would be retarded to spoil my own book, wouldn't it?)");
      t33 = space();
      p11 = element("p");
      t34 = text("So, what can I say?");
      t35 = space();
      p12 = element("p");
      t36 = text("I can tell you that it was a fucking long ride.");
      t37 = space();
      p13 = element("p");
      t38 = text("I can tell you that a couple of times I thought I was going to die. That's something, isn't it?");
      t39 = space();
      p14 = element("p");
      t40 = text("I can tell you that I killed a guy.");
      t41 = space();
      p15 = element("p");
      t42 = text("I can tell you that I spend more time on ");
      em6 = element("em");
      t43 = text("the throne");
      t44 = text(" than I care to mention.");
      t45 = space();
      p16 = element("p");
      t46 = text("I can tell you that the Enfield was a beast.");
      t47 = space();
      p17 = element("p");
      t48 = text("I can tell you that Africa is fucking ");
      em7 = element("em");
      t49 = text("bananas");
      t50 = text(".");
      t51 = space();
      p18 = element("p");
      t52 = space();
      p19 = element("p");
      t53 = text("Is that enough? Have I sold you on this yet? It's hard for me to tell you what you'll like about the book without knowing what you're here for...");
      t54 = space();
      p20 = element("p");
      t55 = text("If you're here for adventure, you've got it in spades.");
      t56 = space();
      p21 = element("p");
      t57 = text("If you're here to for a laugh, you'll get some of that.");
      t58 = space();
      p22 = element("p");
      t59 = text("If you're here for romance you'll get none of that.");
      t60 = space();
      p23 = element("p");
      t61 = text("If you're here for a good yarn; sit back, and let me take you on the ride.");
      t62 = space();
      div = element("div");
      a0 = element("a");
      t63 = text("Read the book now");
      t64 = text("\n        ... ");
      a1 = element("a");
      t65 = text("or download the e-book");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-132weof\"]", document.head);
      meta0 = claim_element(head_nodes, "META", {
        name: true,
        content: true
      });
      meta1 = claim_element(head_nodes, "META", {
        property: true,
        content: true
      });
      meta2 = claim_element(head_nodes, "META", {
        property: true,
        content: true
      });
      meta3 = claim_element(head_nodes, "META", {
        property: true,
        content: true
      });
      meta4 = claim_element(head_nodes, "META", {
        property: true,
        content: true
      });
      meta5 = claim_element(head_nodes, "META", {
        property: true,
        content: true
      });
      meta6 = claim_element(head_nodes, "META", {
        name: true,
        content: true
      });
      meta7 = claim_element(head_nodes, "META", {
        name: true,
        content: true
      });
      meta8 = claim_element(head_nodes, "META", {
        name: true,
        content: true
      });
      meta9 = claim_element(head_nodes, "META", {
        name: true,
        content: true
      });
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Alternate Title: How [not] to ride through Africa on a Royal Enfield.");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);
      p0 = claim_element(section_nodes, "P", {});
      var p0_nodes = children(p0);
      t3 = claim_text(p0_nodes, "So, ");
      em0 = claim_element(p0_nodes, "EM", {});
      var em0_nodes = children(em0);
      t4 = claim_text(em0_nodes, "what's the story then?");
      em0_nodes.forEach(detach_dev);
      p0_nodes.forEach(detach_dev);
      t5 = claim_space(section_nodes);
      p1 = claim_element(section_nodes, "P", {});
      var p1_nodes = children(p1);
      t6 = claim_text(p1_nodes, "Essentially, it's a story of things getting out of hand...");
      p1_nodes.forEach(detach_dev);
      t7 = claim_space(section_nodes);
      p2 = claim_element(section_nodes, "P", {});
      var p2_nodes = children(p2);
      t8 = claim_text(p2_nodes, "A fairly simple idea just evolved into something that was book-worthy. I still don't really know how it happened...");
      p2_nodes.forEach(detach_dev);
      t9 = claim_space(section_nodes);
      p3 = claim_element(section_nodes, "P", {});
      var p3_nodes = children(p3);
      t10 = claim_text(p3_nodes, "It started off with quitting my job, quitting my girlfriend and fucking off on a one way ticket to London.");
      p3_nodes.forEach(detach_dev);
      t11 = claim_space(section_nodes);
      p4 = claim_element(section_nodes, "P", {});
      var p4_nodes = children(p4);
      t12 = claim_text(p4_nodes, "From there, I headed straight to the local Royal Enfield dealer and grabbed one of those.");
      p4_nodes.forEach(detach_dev);
      t13 = claim_space(section_nodes);
      p5 = claim_element(section_nodes, "P", {});
      var p5_nodes = children(p5);
      em1 = claim_element(p5_nodes, "EM", {});
      var em1_nodes = children(em1);
      t14 = claim_text(em1_nodes, "Why wouldn't you?");
      em1_nodes.forEach(detach_dev);
      p5_nodes.forEach(detach_dev);
      t15 = claim_space(section_nodes);
      p6 = claim_element(section_nodes, "P", {});
      var p6_nodes = children(p6);
      t16 = claim_text(p6_nodes, "Already, I thought this shit was ");
      em2 = claim_element(p6_nodes, "EM", {});
      var em2_nodes = children(em2);
      t17 = claim_text(em2_nodes, "wild");
      em2_nodes.forEach(detach_dev);
      t18 = claim_text(p6_nodes, ".");
      p6_nodes.forEach(detach_dev);
      t19 = claim_space(section_nodes);
      p7 = claim_element(section_nodes, "P", {});
      var p7_nodes = children(p7);
      t20 = claim_text(p7_nodes, "I surprised myself by riding all the way to the northernmost point of Scotland. Then, before I knew it, I was already down to the southermost point of Spain, ");
      em3 = claim_element(p7_nodes, "EM", {});
      var em3_nodes = children(em3);
      t21 = claim_text(em3_nodes, "shitting");
      em3_nodes.forEach(detach_dev);
      t22 = claim_text(p7_nodes, " myself as I looked across ");
      em4 = claim_element(p7_nodes, "EM", {});
      var em4_nodes = children(em4);
      t23 = claim_text(em4_nodes, "The Strait");
      em4_nodes.forEach(detach_dev);
      t24 = claim_text(p7_nodes, " to Africa...");
      p7_nodes.forEach(detach_dev);
      t25 = claim_space(section_nodes);
      p8 = claim_element(section_nodes, "P", {});
      var p8_nodes = children(p8);
      t26 = claim_text(p8_nodes, "From there, well, I guess that's the real story; ");
      em5 = claim_element(p8_nodes, "EM", {});
      var em5_nodes = children(em5);
      t27 = claim_text(em5_nodes, "Africa.");
      em5_nodes.forEach(detach_dev);
      t28 = claim_text(p8_nodes, " On a fucking Royal Enfield...");
      p8_nodes.forEach(detach_dev);
      t29 = claim_space(section_nodes);
      p9 = claim_element(section_nodes, "P", {});
      var p9_nodes = children(p9);
      t30 = claim_text(p9_nodes, "I never planned a moment of any of this; I sure as shit didn't plan on riding though Africa, otherwise my choice of vehicle would have been more sensible. But there I was. And then what happens next is what happens next...");
      p9_nodes.forEach(detach_dev);
      t31 = claim_space(section_nodes);
      p10 = claim_element(section_nodes, "P", {});
      var p10_nodes = children(p10);
      t32 = claim_text(p10_nodes, "I don't want to give the game away for those who haven't read any of the Trilogy yet (it would be retarded to spoil my own book, wouldn't it?)");
      p10_nodes.forEach(detach_dev);
      t33 = claim_space(section_nodes);
      p11 = claim_element(section_nodes, "P", {});
      var p11_nodes = children(p11);
      t34 = claim_text(p11_nodes, "So, what can I say?");
      p11_nodes.forEach(detach_dev);
      t35 = claim_space(section_nodes);
      p12 = claim_element(section_nodes, "P", {});
      var p12_nodes = children(p12);
      t36 = claim_text(p12_nodes, "I can tell you that it was a fucking long ride.");
      p12_nodes.forEach(detach_dev);
      t37 = claim_space(section_nodes);
      p13 = claim_element(section_nodes, "P", {});
      var p13_nodes = children(p13);
      t38 = claim_text(p13_nodes, "I can tell you that a couple of times I thought I was going to die. That's something, isn't it?");
      p13_nodes.forEach(detach_dev);
      t39 = claim_space(section_nodes);
      p14 = claim_element(section_nodes, "P", {});
      var p14_nodes = children(p14);
      t40 = claim_text(p14_nodes, "I can tell you that I killed a guy.");
      p14_nodes.forEach(detach_dev);
      t41 = claim_space(section_nodes);
      p15 = claim_element(section_nodes, "P", {});
      var p15_nodes = children(p15);
      t42 = claim_text(p15_nodes, "I can tell you that I spend more time on ");
      em6 = claim_element(p15_nodes, "EM", {});
      var em6_nodes = children(em6);
      t43 = claim_text(em6_nodes, "the throne");
      em6_nodes.forEach(detach_dev);
      t44 = claim_text(p15_nodes, " than I care to mention.");
      p15_nodes.forEach(detach_dev);
      t45 = claim_space(section_nodes);
      p16 = claim_element(section_nodes, "P", {});
      var p16_nodes = children(p16);
      t46 = claim_text(p16_nodes, "I can tell you that the Enfield was a beast.");
      p16_nodes.forEach(detach_dev);
      t47 = claim_space(section_nodes);
      p17 = claim_element(section_nodes, "P", {});
      var p17_nodes = children(p17);
      t48 = claim_text(p17_nodes, "I can tell you that Africa is fucking ");
      em7 = claim_element(p17_nodes, "EM", {});
      var em7_nodes = children(em7);
      t49 = claim_text(em7_nodes, "bananas");
      em7_nodes.forEach(detach_dev);
      t50 = claim_text(p17_nodes, ".");
      p17_nodes.forEach(detach_dev);
      t51 = claim_space(section_nodes);
      p18 = claim_element(section_nodes, "P", {});
      children(p18).forEach(detach_dev);
      t52 = claim_space(section_nodes);
      p19 = claim_element(section_nodes, "P", {});
      var p19_nodes = children(p19);
      t53 = claim_text(p19_nodes, "Is that enough? Have I sold you on this yet? It's hard for me to tell you what you'll like about the book without knowing what you're here for...");
      p19_nodes.forEach(detach_dev);
      t54 = claim_space(section_nodes);
      p20 = claim_element(section_nodes, "P", {});
      var p20_nodes = children(p20);
      t55 = claim_text(p20_nodes, "If you're here for adventure, you've got it in spades.");
      p20_nodes.forEach(detach_dev);
      t56 = claim_space(section_nodes);
      p21 = claim_element(section_nodes, "P", {});
      var p21_nodes = children(p21);
      t57 = claim_text(p21_nodes, "If you're here to for a laugh, you'll get some of that.");
      p21_nodes.forEach(detach_dev);
      t58 = claim_space(section_nodes);
      p22 = claim_element(section_nodes, "P", {});
      var p22_nodes = children(p22);
      t59 = claim_text(p22_nodes, "If you're here for romance you'll get none of that.");
      p22_nodes.forEach(detach_dev);
      t60 = claim_space(section_nodes);
      p23 = claim_element(section_nodes, "P", {});
      var p23_nodes = children(p23);
      t61 = claim_text(p23_nodes, "If you're here for a good yarn; sit back, and let me take you on the ride.");
      p23_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      t62 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      a0 = claim_element(div_nodes, "A", {
        class: true,
        href: true,
        rel: true
      });
      var a0_nodes = children(a0);
      t63 = claim_text(a0_nodes, "Read the book now");
      a0_nodes.forEach(detach_dev);
      t64 = claim_text(div_nodes, "\n        ... ");
      a1 = claim_element(div_nodes, "A", {
        rel: true,
        href: true
      });
      var a1_nodes = children(a1);
      t65 = claim_text(a1_nodes, "or download the e-book");
      a1_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "About the Oblivious Trilogy | A wild journey through West Africa";
      attr_dev(meta0, "name", "description");
      attr_dev(meta0, "content", "How a ride through England on a Royal Enfield motorcycle turned into an epic journey through Europe and Africa.");
      add_location(meta0, file$1, 5, 1, 175);
      attr_dev(meta1, "property", "og:description");
      attr_dev(meta1, "content", "How a ride through England on a Royal Enfield motorcycle turned into an epic journey through Europe and Africa.");
      add_location(meta1, file$1, 6, 1, 324);
      attr_dev(meta2, "property", "og:url");
      attr_dev(meta2, "content", "http://www.obliviousthebook.com/");
      add_location(meta2, file$1, 7, 1, 481);
      attr_dev(meta3, "property", "og:site_name");
      attr_dev(meta3, "content", "ObliviousTheBook.com");
      add_location(meta3, file$1, 8, 1, 551);
      attr_dev(meta4, "property", "fb:admins");
      attr_dev(meta4, "content", "563453705");
      add_location(meta4, file$1, 9, 1, 615);
      attr_dev(meta5, "property", "og:image");
      attr_dev(meta5, "content", "/images/logo-750.png");
      add_location(meta5, file$1, 10, 1, 665);
      attr_dev(meta6, "name", "twitter:card");
      attr_dev(meta6, "content", "summary_large_image");
      add_location(meta6, file$1, 11, 1, 725);
      attr_dev(meta7, "name", "twitter:description");
      attr_dev(meta7, "content", "How a ride through England on a Royal Enfield motorcycle turned into an epic journey through Europe and Africa.");
      add_location(meta7, file$1, 12, 1, 784);
      attr_dev(meta8, "name", "twitter:title");
      attr_dev(meta8, "content", "Oblivious - An overlanding motorbike journey through West Africa");
      add_location(meta8, file$1, 13, 1, 942);
      attr_dev(meta9, "name", "twitter:image");
      attr_dev(meta9, "content", "/images/logo-750.png");
      add_location(meta9, file$1, 14, 1, 1047);
      attr_dev(h1, "class", "text-4xl md:text-6xl text-center mb-12 mt-12 md:mt-28");
      add_location(h1, file$1, 17, 0, 1123);
      add_location(em0, file$1, 21, 8, 1314);
      add_location(p0, file$1, 21, 1, 1307);
      add_location(p1, file$1, 22, 1, 1351);
      add_location(p2, file$1, 23, 1, 1418);
      add_location(p3, file$1, 24, 1, 1542);
      add_location(p4, file$1, 25, 1, 1657);
      add_location(em1, file$1, 26, 4, 1758);
      add_location(p5, file$1, 26, 1, 1755);
      add_location(em2, file$1, 28, 37, 1827);
      add_location(p6, file$1, 28, 1, 1791);
      add_location(em3, file$1, 29, 162, 2008);
      add_location(em4, file$1, 29, 206, 2052);
      add_location(p7, file$1, 29, 1, 1847);
      add_location(em5, file$1, 30, 53, 2142);
      add_location(p8, file$1, 30, 1, 2090);
      add_location(p9, file$1, 31, 1, 2194);
      add_location(p10, file$1, 32, 1, 2425);
      add_location(p11, file$1, 33, 1, 2576);
      add_location(p12, file$1, 34, 1, 2604);
      add_location(p13, file$1, 35, 1, 2660);
      add_location(p14, file$1, 36, 1, 2764);
      add_location(em6, file$1, 37, 45, 2852);
      add_location(p15, file$1, 37, 1, 2808);
      add_location(p16, file$1, 38, 1, 2901);
      add_location(em7, file$1, 39, 42, 2995);
      add_location(p17, file$1, 39, 1, 2954);
      add_location(p18, file$1, 40, 1, 3018);
      add_location(p19, file$1, 41, 1, 3027);
      add_location(p20, file$1, 42, 1, 3181);
      add_location(p21, file$1, 43, 1, 3244);
      add_location(p22, file$1, 44, 1, 3308);
      add_location(p23, file$1, 45, 1, 3368);
      attr_dev(section, "class", "prose prose-lg mb-10");
      add_location(section, file$1, 20, 0, 1267);
      attr_dev(a0, "class", "inline-block text-xl sm:text-2xl p-4 rounded-lg no-underline bg-oblivious");
      attr_dev(a0, "href", "read");
      attr_dev(a0, "rel", "prefetch");
      add_location(a0, file$1, 48, 1, 3491);
      attr_dev(a1, "rel", "nofollow");
      attr_dev(a1, "href", "https://transactions.sendowl.com/packages/37218/89A60CC9/add_to_cart");
      add_location(a1, file$1, 49, 12, 3637);
      attr_dev(div, "class", "mb-20 md:mb-32");
      add_location(div, file$1, 47, 0, 3461);
    },
    m: function mount(target, anchor) {
      append_dev(document.head, meta0);
      append_dev(document.head, meta1);
      append_dev(document.head, meta2);
      append_dev(document.head, meta3);
      append_dev(document.head, meta4);
      append_dev(document.head, meta5);
      append_dev(document.head, meta6);
      append_dev(document.head, meta7);
      append_dev(document.head, meta8);
      append_dev(document.head, meta9);
      insert_dev(target, t0, anchor);
      insert_dev(target, h1, anchor);
      append_dev(h1, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, p0);
      append_dev(p0, t3);
      append_dev(p0, em0);
      append_dev(em0, t4);
      append_dev(section, t5);
      append_dev(section, p1);
      append_dev(p1, t6);
      append_dev(section, t7);
      append_dev(section, p2);
      append_dev(p2, t8);
      append_dev(section, t9);
      append_dev(section, p3);
      append_dev(p3, t10);
      append_dev(section, t11);
      append_dev(section, p4);
      append_dev(p4, t12);
      append_dev(section, t13);
      append_dev(section, p5);
      append_dev(p5, em1);
      append_dev(em1, t14);
      append_dev(section, t15);
      append_dev(section, p6);
      append_dev(p6, t16);
      append_dev(p6, em2);
      append_dev(em2, t17);
      append_dev(p6, t18);
      append_dev(section, t19);
      append_dev(section, p7);
      append_dev(p7, t20);
      append_dev(p7, em3);
      append_dev(em3, t21);
      append_dev(p7, t22);
      append_dev(p7, em4);
      append_dev(em4, t23);
      append_dev(p7, t24);
      append_dev(section, t25);
      append_dev(section, p8);
      append_dev(p8, t26);
      append_dev(p8, em5);
      append_dev(em5, t27);
      append_dev(p8, t28);
      append_dev(section, t29);
      append_dev(section, p9);
      append_dev(p9, t30);
      append_dev(section, t31);
      append_dev(section, p10);
      append_dev(p10, t32);
      append_dev(section, t33);
      append_dev(section, p11);
      append_dev(p11, t34);
      append_dev(section, t35);
      append_dev(section, p12);
      append_dev(p12, t36);
      append_dev(section, t37);
      append_dev(section, p13);
      append_dev(p13, t38);
      append_dev(section, t39);
      append_dev(section, p14);
      append_dev(p14, t40);
      append_dev(section, t41);
      append_dev(section, p15);
      append_dev(p15, t42);
      append_dev(p15, em6);
      append_dev(em6, t43);
      append_dev(p15, t44);
      append_dev(section, t45);
      append_dev(section, p16);
      append_dev(p16, t46);
      append_dev(section, t47);
      append_dev(section, p17);
      append_dev(p17, t48);
      append_dev(p17, em7);
      append_dev(em7, t49);
      append_dev(p17, t50);
      append_dev(section, t51);
      append_dev(section, p18);
      append_dev(section, t52);
      append_dev(section, p19);
      append_dev(p19, t53);
      append_dev(section, t54);
      append_dev(section, p20);
      append_dev(p20, t55);
      append_dev(section, t56);
      append_dev(section, p21);
      append_dev(p21, t57);
      append_dev(section, t58);
      append_dev(section, p22);
      append_dev(p22, t59);
      append_dev(section, t60);
      append_dev(section, p23);
      append_dev(p23, t61);
      insert_dev(target, t62, anchor);
      insert_dev(target, div, anchor);
      append_dev(div, a0);
      append_dev(a0, t63);
      append_dev(div, t64);
      append_dev(div, a1);
      append_dev(a1, t65);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      detach_dev(meta0);
      detach_dev(meta1);
      detach_dev(meta2);
      detach_dev(meta3);
      detach_dev(meta4);
      detach_dev(meta5);
      detach_dev(meta6);
      detach_dev(meta7);
      detach_dev(meta8);
      detach_dev(meta9);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(section);
      if (detaching) detach_dev(t62);
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("About", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<About> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      BuyButton: BuyButton
    };
  };

  return [];
}

var About = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(About, _SvelteComponentDev);

  var _super = _createSuper$1(About);

  function About(options) {
    var _this;

    _classCallCheck(this, About);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "About",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return About;
}(SvelteComponentDev);

export default About;
