import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, v as validate_slots, o as onDestroy, f as fade, g as element, h as space, t as text, j as claim_element, k as children, l as claim_space, m as detach_dev, n as claim_text, p as attr_dev, q as add_location, r as insert_dev, u as append_dev, w as listen_dev, x as _slicedToArray, y as set_data_dev, z as add_render_callback, A as create_bidirectional_transition, B as run_all, C as set_style, D as noop, E as create_component, F as query_selector_all, G as claim_component, H as mount_component, I as transition_in, J as transition_out, K as destroy_component } from './client.5de336ae.js';
import { B as BuyButton } from './BuyButton.28913efe.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/components/Carousel.svelte";

function create_fragment(ctx) {
  var figure;
  var img0;
  var img0_src_value;
  var img0_alt_value;
  var img0_transition;
  var t0;
  var button0;
  var img1;
  var img1_src_value;
  var t1;
  var button1;
  var img2;
  var img2_src_value;
  var t2;
  var figcaption;
  var t3_value =
  /*carouselPhotos*/
  ctx[1][
  /*index*/
  ctx[0]].caption + "";
  var t3;
  var current;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      figure = element("figure");
      img0 = element("img");
      t0 = space();
      button0 = element("button");
      img1 = element("img");
      t1 = space();
      button1 = element("button");
      img2 = element("img");
      t2 = space();
      figcaption = element("figcaption");
      t3 = text(t3_value);
      this.h();
    },
    l: function claim(nodes) {
      figure = claim_element(nodes, "FIGURE", {
        class: true
      });
      var figure_nodes = children(figure);
      img0 = claim_element(figure_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t0 = claim_space(figure_nodes);
      button0 = claim_element(figure_nodes, "BUTTON", {
        class: true
      });
      var button0_nodes = children(button0);
      img1 = claim_element(button0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      button0_nodes.forEach(detach_dev);
      t1 = claim_space(figure_nodes);
      button1 = claim_element(figure_nodes, "BUTTON", {
        class: true
      });
      var button1_nodes = children(button1);
      img2 = claim_element(button1_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      button1_nodes.forEach(detach_dev);
      t2 = claim_space(figure_nodes);
      figcaption = claim_element(figure_nodes, "FIGCAPTION", {
        class: true
      });
      var figcaption_nodes = children(figcaption);
      t3 = claim_text(figcaption_nodes, t3_value);
      figcaption_nodes.forEach(detach_dev);
      figure_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img0, "class", "relative");
      if (img0.src !== (img0_src_value =
      /*carouselPhotos*/
      ctx[1][
      /*index*/
      ctx[0]].imageSource)) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", img0_alt_value =
      /*carouselPhotos*/
      ctx[1][
      /*index*/
      ctx[0]].caption);
      add_location(img0, file, 68, 4, 2172);
      attr_dev(img1, "class", "h-20 md:h-40 opacity-50");
      if (img1.src !== (img1_src_value = "/images/icons/keyboard_arrow_left-24px.svg")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "arrow left");
      add_location(img1, file, 72, 8, 2452);
      attr_dev(button0, "class", "absolute top-1/2 transform -translate-y-1/2 left-0 z-10 bg-transparent");
      add_location(button0, file, 70, 4, 2305);
      attr_dev(img2, "class", "h-20 md:h-40 opacity-50");
      if (img2.src !== (img2_src_value = "/images/icons/keyboard_arrow_right-24px.svg")) attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "arrow right");
      add_location(img2, file, 76, 8, 2736);
      attr_dev(button1, "class", "absolute h-20 md:h-auto top-1/2 transform -translate-y-1/2 right-0 z-10 bg-transparent");
      add_location(button1, file, 74, 4, 2574);
      attr_dev(figcaption, "class", "absolute top-100 left-0 right-0 text-center text-xl text-oblivious-dark");
      add_location(figcaption, file, 78, 4, 2860);
      attr_dev(figure, "class", "relative");
      add_location(figure, file, 67, 0, 2142);
    },
    m: function mount(target, anchor) {
      insert_dev(target, figure, anchor);
      append_dev(figure, img0);
      append_dev(figure, t0);
      append_dev(figure, button0);
      append_dev(button0, img1);
      append_dev(figure, t1);
      append_dev(figure, button1);
      append_dev(button1, img2);
      append_dev(figure, t2);
      append_dev(figure, figcaption);
      append_dev(figcaption, t3);
      current = true;

      if (!mounted) {
        dispose = [listen_dev(button0, "click",
        /*click_handler*/
        ctx[3], false, false, false), listen_dev(button1, "click",
        /*click_handler_1*/
        ctx[4], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (!current || dirty &
      /*index*/
      1 && img0.src !== (img0_src_value =
      /*carouselPhotos*/
      ctx[1][
      /*index*/
      ctx[0]].imageSource)) {
        attr_dev(img0, "src", img0_src_value);
      }

      if (!current || dirty &
      /*index*/
      1 && img0_alt_value !== (img0_alt_value =
      /*carouselPhotos*/
      ctx[1][
      /*index*/
      ctx[0]].caption)) {
        attr_dev(img0, "alt", img0_alt_value);
      }

      if ((!current || dirty &
      /*index*/
      1) && t3_value !== (t3_value =
      /*carouselPhotos*/
      ctx[1][
      /*index*/
      ctx[0]].caption + "")) set_data_dev(t3, t3_value);
    },
    i: function intro(local) {
      if (current) return;
      add_render_callback(function () {
        if (!img0_transition) img0_transition = create_bidirectional_transition(img0, fade, {}, true);
        img0_transition.run(1);
      });
      current = true;
    },
    o: function outro(local) {
      if (!img0_transition) img0_transition = create_bidirectional_transition(img0, fade, {}, false);
      img0_transition.run(0);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(figure);
      if (detaching && img0_transition) img0_transition.end();
      mounted = false;
      run_all(dispose);
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
  validate_slots("Carousel", slots, []);
  var carouselPhotos = [{
    imageSource: "/images/carousel/images(1).jpg",
    caption: "The Royal Enfield looking sensational in outback West Africa"
  }, {
    imageSource: "/images/carousel/images(2).jpg",
    caption: "Cow in a tree... That's all..."
  }, {
    imageSource: "/images/carousel/images(3).jpg",
    caption: "Trailblazing through Guinea. Too Fucking hot."
  }, {
    imageSource: "/images/carousel/images(4).jpg",
    caption: "Hitchhiking the Sahara on a mining train into the night. Life goals."
  }, {
    imageSource: "/images/carousel/images(5).jpg",
    caption: "Sunset in the stunning Sahara Desert. It's not all shit..."
  }, {
    imageSource: "/images/carousel/images(6).jpg",
    caption: "Hiking in stunning outback Guinea."
  }, {
    imageSource: "/images/carousel/images(7).jpg",
    caption: "One of the few properly done photo's from the trip. Props to our favourite Greek, Manos."
  }, {
    imageSource: "/images/carousel/images(9).jpg",
    caption: "Posing infront of a boat."
  }, {
    imageSource: "/images/carousel/images(10).jpg",
    caption: "Mobbed, with JB the Brit."
  }, {
    imageSource: "/images/carousel/images(11).jpg",
    caption: "Hot as fuck in 40 degree heat and a leather jacket. The smile is a delerious one."
  }];
  var index = 0;

  var changePhoto = function changePhoto(step, stopInterval) {
    if (index === 0 && step === -1) {
      $$invalidate(0, index = carouselPhotos.length - 1);
    } else {
      $$invalidate(0, index = (index + step) % carouselPhotos.length);
    }

    if (stopInterval) {
      clearInterval(interval);
    }
  };

  var interval = setInterval(function () {
    return changePhoto(1);
  }, 6000);
  onDestroy(function () {
    clearInterval(interval);
  });
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Carousel> was created with unknown prop '".concat(key, "'"));
  });

  var click_handler = function click_handler() {
    return changePhoto(-1, true);
  };

  var click_handler_1 = function click_handler_1() {
    return changePhoto(1, true);
  };

  $$self.$capture_state = function () {
    return {
      fade: fade,
      onDestroy: onDestroy,
      carouselPhotos: carouselPhotos,
      index: index,
      changePhoto: changePhoto,
      interval: interval
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("index" in $$props) $$invalidate(0, index = $$props.index);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [index, carouselPhotos, changePhoto, click_handler, click_handler_1];
}

var Carousel = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Carousel, _SvelteComponentDev);

  var _super = _createSuper(Carousel);

  function Carousel(options) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Carousel",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Carousel;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/components/AsSeenIn.svelte";

function create_fragment$1(ctx) {
  var h5;
  var strong;
  var t0;
  var t1;
  var div;
  var img0;
  var img0_src_value;
  var t2;
  var img1;
  var img1_src_value;
  var t3;
  var img2;
  var img2_src_value;
  var t4;
  var img3;
  var img3_src_value;
  var t5;
  var img4;
  var img4_src_value;
  var t6;
  var img5;
  var img5_src_value;
  var block = {
    c: function create() {
      h5 = element("h5");
      strong = element("strong");
      t0 = text("As Featured In");
      t1 = space();
      div = element("div");
      img0 = element("img");
      t2 = space();
      img1 = element("img");
      t3 = space();
      img2 = element("img");
      t4 = space();
      img3 = element("img");
      t5 = space();
      img4 = element("img");
      t6 = space();
      img5 = element("img");
      this.h();
    },
    l: function claim(nodes) {
      h5 = claim_element(nodes, "H5", {
        class: true
      });
      var h5_nodes = children(h5);
      strong = claim_element(h5_nodes, "STRONG", {});
      var strong_nodes = children(strong);
      t0 = claim_text(strong_nodes, "As Featured In");
      strong_nodes.forEach(detach_dev);
      h5_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true,
        style: true
      });
      var div_nodes = children(div);
      img0 = claim_element(div_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t2 = claim_space(div_nodes);
      img1 = claim_element(div_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t3 = claim_space(div_nodes);
      img2 = claim_element(div_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t4 = claim_space(div_nodes);
      img3 = claim_element(div_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t5 = claim_space(div_nodes);
      img4 = claim_element(div_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t6 = claim_space(div_nodes);
      img5 = claim_element(div_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(strong, file$1, 0, 44, 44);
      attr_dev(h5, "class", "text-center mt-3 mb-6 uppercase");
      add_location(h5, file$1, 0, 0, 0);
      attr_dev(img0, "class", "self-center max-h-12 md:max-h-24");
      if (img0.src !== (img0_src_value = "images/OverlandBound-grey.png")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "Overland Bound");
      add_location(img0, file$1, 2, 4, 201);
      attr_dev(img1, "class", "self-center max-h-12 md:max-h-24");
      if (img1.src !== (img1_src_value = "images/Rider-grey.png")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "Rider Magazine");
      add_location(img1, file$1, 3, 4, 309);
      attr_dev(img2, "class", "self-center max-h-12 md:max-h-24");
      if (img2.src !== (img2_src_value = "images/ADVMoto-grey.png")) attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "ADVMoto");
      add_location(img2, file$1, 4, 4, 409);
      attr_dev(img3, "class", "self-center max-h-12 md:max-h-24");
      if (img3.src !== (img3_src_value = "images/ExcuseMyBike-grey.png")) attr_dev(img3, "src", img3_src_value);
      attr_dev(img3, "alt", "Excuse my bike");
      add_location(img3, file$1, 5, 4, 504);
      attr_dev(img4, "class", "self-center max-h-12 md:max-h-24");
      if (img4.src !== (img4_src_value = "images/royalenfield-grey.png")) attr_dev(img4, "src", img4_src_value);
      attr_dev(img4, "alt", "Royal Enfield");
      add_location(img4, file$1, 6, 4, 611);
      attr_dev(img5, "class", "self-center max-h-12 md:max-h-24");
      if (img5.src !== (img5_src_value = "images/cruiser-grey.png")) attr_dev(img5, "src", img5_src_value);
      attr_dev(img5, "alt", "Royal Enfield");
      add_location(img5, file$1, 7, 4, 717);
      attr_dev(div, "class", "grid sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-10");
      set_style(div, "justify-items", "center");
      add_location(div, file$1, 1, 0, 81);
    },
    m: function mount(target, anchor) {
      insert_dev(target, h5, anchor);
      append_dev(h5, strong);
      append_dev(strong, t0);
      insert_dev(target, t1, anchor);
      insert_dev(target, div, anchor);
      append_dev(div, img0);
      append_dev(div, t2);
      append_dev(div, img1);
      append_dev(div, t3);
      append_dev(div, img2);
      append_dev(div, t4);
      append_dev(div, img3);
      append_dev(div, t5);
      append_dev(div, img4);
      append_dev(div, t6);
      append_dev(div, img5);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(h5);
      if (detaching) detach_dev(t1);
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

function instance$1($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("AsSeenIn", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<AsSeenIn> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var AsSeenIn = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(AsSeenIn, _SvelteComponentDev);

  var _super = _createSuper$1(AsSeenIn);

  function AsSeenIn(options) {
    var _this;

    _classCallCheck(this, AsSeenIn);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "AsSeenIn",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return AsSeenIn;
}(SvelteComponentDev);

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$2 = "src/routes/index.svelte";

function create_fragment$2(ctx) {
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
  var section0;
  var h10;
  var t1;
  var t2;
  var h20;
  var t3;
  var em0;
  var t4;
  var t5;
  var a0;
  var t6;
  var t7;
  var t8;
  var section1;
  var img0;
  var img0_src_value;
  var t9;
  var div0;
  var a1;
  var t10;
  var t11;
  var span0;
  var t12;
  var a2;
  var t13;
  var t14;
  var section2;
  var h11;
  var t15;
  var em1;
  var t16;
  var t17;
  var section3;
  var carousel;
  var t18;
  var section4;
  var h21;
  var t19;
  var t20;
  var div3;
  var img1;
  var img1_src_value;
  var t21;
  var div2;
  var p0;
  var t22;
  var br0;
  var t23;
  var span1;
  var t24;
  var em2;
  var t25;
  var t26;
  var div1;
  var p1;
  var t27;
  var br1;
  var t28;
  var span2;
  var t29;
  var t30;
  var p2;
  var t31;
  var em3;
  var t32;
  var t33;
  var br2;
  var t34;
  var span3;
  var t35;
  var t36;
  var p3;
  var t37;
  var br3;
  var t38;
  var span4;
  var t39;
  var t40;
  var div4;
  var a3;
  var t41;
  var t42;
  var span5;
  var t43;
  var a4;
  var t44;
  var t45;
  var section5;
  var h22;
  var t46;
  var t47;
  var h3;
  var t48;
  var current;
  carousel = new Carousel({
    $$inline: true
  });
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
      section0 = element("section");
      h10 = element("h1");
      t1 = text("Yeah Buddy!");
      t2 = space();
      h20 = element("h2");
      t3 = text("Book One of the ");
      em0 = element("em");
      t4 = text("Oblivious Trilogy");
      t5 = text(" is ");
      a0 = element("a");
      t6 = text("here");
      t7 = text(" and available for free!");
      t8 = space();
      section1 = element("section");
      img0 = element("img");
      t9 = space();
      div0 = element("div");
      a1 = element("a");
      t10 = text("Start reading now");
      t11 = space();
      span0 = element("span");
      t12 = text("... ");
      a2 = element("a");
      t13 = text("or download the e-book");
      t14 = space();
      section2 = element("section");
      h11 = element("h1");
      t15 = text("Ride through Africa with me on an outrageously inappropriate ");
      em1 = element("em");
      t16 = text("Royal Enfield Bullet");
      t17 = space();
      section3 = element("section");
      create_component(carousel.$$.fragment);
      t18 = space();
      section4 = element("section");
      h21 = element("h2");
      t19 = text("Ride the Adventure from your phone, tablet or e-reader");
      t20 = space();
      div3 = element("div");
      img1 = element("img");
      t21 = space();
      div2 = element("div");
      p0 = element("p");
      t22 = text("\"This is fascinating shit, man. You're reminding me of a modern Hemingway\"");
      br0 = element("br");
      t23 = space();
      span1 = element("span");
      t24 = text("- Ben Napier, ");
      em2 = element("em");
      t25 = text("Scotsman.co");
      t26 = space();
      div1 = element("div");
      p1 = element("p");
      t27 = text("\"Jesus tap-dancing Christ these are great stories\"");
      br1 = element("br");
      t28 = space();
      span2 = element("span");
      t29 = text("- Zach Kelm");
      t30 = space();
      p2 = element("p");
      t31 = text("\"Adventure is such an abused and overused word these days... Check this out for a taste of ");
      em3 = element("em");
      t32 = text("real");
      t33 = text(" adventure.\"");
      br2 = element("br");
      t34 = space();
      span3 = element("span");
      t35 = text("- Iron and Resin");
      t36 = space();
      p3 = element("p");
      t37 = text("\"Don't laugh at him, he's not funny!\"");
      br3 = element("br");
      t38 = space();
      span4 = element("span");
      t39 = text("- My Mum");
      t40 = space();
      div4 = element("div");
      a3 = element("a");
      t41 = text("Read online now");
      t42 = space();
      span5 = element("span");
      t43 = text("... ");
      a4 = element("a");
      t44 = text("or download the e-book");
      t45 = space();
      section5 = element("section");
      h22 = element("h2");
      t46 = text("Adventure for free!");
      t47 = space();
      h3 = element("h3");
      t48 = text("Or... pay what you like!");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-orerit\"]", document.head);
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
      section0 = claim_element(nodes, "SECTION", {
        class: true
      });
      var section0_nodes = children(section0);
      h10 = claim_element(section0_nodes, "H1", {
        class: true
      });
      var h10_nodes = children(h10);
      t1 = claim_text(h10_nodes, "Yeah Buddy!");
      h10_nodes.forEach(detach_dev);
      t2 = claim_space(section0_nodes);
      h20 = claim_element(section0_nodes, "H2", {
        class: true
      });
      var h20_nodes = children(h20);
      t3 = claim_text(h20_nodes, "Book One of the ");
      em0 = claim_element(h20_nodes, "EM", {});
      var em0_nodes = children(em0);
      t4 = claim_text(em0_nodes, "Oblivious Trilogy");
      em0_nodes.forEach(detach_dev);
      t5 = claim_text(h20_nodes, " is ");
      a0 = claim_element(h20_nodes, "A", {
        href: true,
        rel: true
      });
      var a0_nodes = children(a0);
      t6 = claim_text(a0_nodes, "here");
      a0_nodes.forEach(detach_dev);
      t7 = claim_text(h20_nodes, " and available for free!");
      h20_nodes.forEach(detach_dev);
      section0_nodes.forEach(detach_dev);
      t8 = claim_space(nodes);
      section1 = claim_element(nodes, "SECTION", {
        class: true
      });
      var section1_nodes = children(section1);
      img0 = claim_element(section1_nodes, "IMG", {
        class: true,
        alt: true,
        src: true
      });
      t9 = claim_space(section1_nodes);
      div0 = claim_element(section1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      a1 = claim_element(div0_nodes, "A", {
        class: true,
        href: true,
        rel: true
      });
      var a1_nodes = children(a1);
      t10 = claim_text(a1_nodes, "Start reading now");
      a1_nodes.forEach(detach_dev);
      t11 = claim_space(div0_nodes);
      span0 = claim_element(div0_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t12 = claim_text(span0_nodes, "... ");
      a2 = claim_element(span0_nodes, "A", {
        rel: true,
        href: true
      });
      var a2_nodes = children(a2);
      t13 = claim_text(a2_nodes, "or download the e-book");
      a2_nodes.forEach(detach_dev);
      span0_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      section1_nodes.forEach(detach_dev);
      t14 = claim_space(nodes);
      section2 = claim_element(nodes, "SECTION", {
        class: true
      });
      var section2_nodes = children(section2);
      h11 = claim_element(section2_nodes, "H1", {
        class: true
      });
      var h11_nodes = children(h11);
      t15 = claim_text(h11_nodes, "Ride through Africa with me on an outrageously inappropriate ");
      em1 = claim_element(h11_nodes, "EM", {});
      var em1_nodes = children(em1);
      t16 = claim_text(em1_nodes, "Royal Enfield Bullet");
      em1_nodes.forEach(detach_dev);
      h11_nodes.forEach(detach_dev);
      section2_nodes.forEach(detach_dev);
      t17 = claim_space(nodes);
      section3 = claim_element(nodes, "SECTION", {
        class: true
      });
      var section3_nodes = children(section3);
      claim_component(carousel.$$.fragment, section3_nodes);
      section3_nodes.forEach(detach_dev);
      t18 = claim_space(nodes);
      section4 = claim_element(nodes, "SECTION", {
        class: true
      });
      var section4_nodes = children(section4);
      h21 = claim_element(section4_nodes, "H2", {
        class: true
      });
      var h21_nodes = children(h21);
      t19 = claim_text(h21_nodes, "Ride the Adventure from your phone, tablet or e-reader");
      h21_nodes.forEach(detach_dev);
      t20 = claim_space(section4_nodes);
      div3 = claim_element(section4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      img1 = claim_element(div3_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t21 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      p0 = claim_element(div2_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t22 = claim_text(p0_nodes, "\"This is fascinating shit, man. You're reminding me of a modern Hemingway\"");
      br0 = claim_element(p0_nodes, "BR", {});
      t23 = claim_space(p0_nodes);
      span1 = claim_element(p0_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t24 = claim_text(span1_nodes, "- Ben Napier, ");
      em2 = claim_element(span1_nodes, "EM", {});
      var em2_nodes = children(em2);
      t25 = claim_text(em2_nodes, "Scotsman.co");
      em2_nodes.forEach(detach_dev);
      span1_nodes.forEach(detach_dev);
      p0_nodes.forEach(detach_dev);
      t26 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      p1 = claim_element(div1_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t27 = claim_text(p1_nodes, "\"Jesus tap-dancing Christ these are great stories\"");
      br1 = claim_element(p1_nodes, "BR", {});
      t28 = claim_space(p1_nodes);
      span2 = claim_element(p1_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      t29 = claim_text(span2_nodes, "- Zach Kelm");
      span2_nodes.forEach(detach_dev);
      p1_nodes.forEach(detach_dev);
      t30 = claim_space(div1_nodes);
      p2 = claim_element(div1_nodes, "P", {
        class: true
      });
      var p2_nodes = children(p2);
      t31 = claim_text(p2_nodes, "\"Adventure is such an abused and overused word these days... Check this out for a taste of ");
      em3 = claim_element(p2_nodes, "EM", {});
      var em3_nodes = children(em3);
      t32 = claim_text(em3_nodes, "real");
      em3_nodes.forEach(detach_dev);
      t33 = claim_text(p2_nodes, " adventure.\"");
      br2 = claim_element(p2_nodes, "BR", {});
      t34 = claim_space(p2_nodes);
      span3 = claim_element(p2_nodes, "SPAN", {
        class: true
      });
      var span3_nodes = children(span3);
      t35 = claim_text(span3_nodes, "- Iron and Resin");
      span3_nodes.forEach(detach_dev);
      p2_nodes.forEach(detach_dev);
      t36 = claim_space(div1_nodes);
      p3 = claim_element(div1_nodes, "P", {
        class: true
      });
      var p3_nodes = children(p3);
      t37 = claim_text(p3_nodes, "\"Don't laugh at him, he's not funny!\"");
      br3 = claim_element(p3_nodes, "BR", {});
      t38 = claim_space(p3_nodes);
      span4 = claim_element(p3_nodes, "SPAN", {
        class: true
      });
      var span4_nodes = children(span4);
      t39 = claim_text(span4_nodes, "- My Mum");
      span4_nodes.forEach(detach_dev);
      p3_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t40 = claim_space(section4_nodes);
      div4 = claim_element(section4_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      a3 = claim_element(div4_nodes, "A", {
        class: true,
        href: true,
        rel: true
      });
      var a3_nodes = children(a3);
      t41 = claim_text(a3_nodes, "Read online now");
      a3_nodes.forEach(detach_dev);
      t42 = claim_space(div4_nodes);
      span5 = claim_element(div4_nodes, "SPAN", {
        class: true
      });
      var span5_nodes = children(span5);
      t43 = claim_text(span5_nodes, "... ");
      a4 = claim_element(span5_nodes, "A", {
        rel: true,
        href: true
      });
      var a4_nodes = children(a4);
      t44 = claim_text(a4_nodes, "or download the e-book");
      a4_nodes.forEach(detach_dev);
      span5_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      section4_nodes.forEach(detach_dev);
      t45 = claim_space(nodes);
      section5 = claim_element(nodes, "SECTION", {
        class: true
      });
      var section5_nodes = children(section5);
      h22 = claim_element(section5_nodes, "H2", {
        class: true
      });
      var h22_nodes = children(h22);
      t46 = claim_text(h22_nodes, "Adventure for free!");
      h22_nodes.forEach(detach_dev);
      t47 = claim_space(section5_nodes);
      h3 = claim_element(section5_nodes, "H3", {});
      var h3_nodes = children(h3);
      t48 = claim_text(h3_nodes, "Or... pay what you like!");
      h3_nodes.forEach(detach_dev);
      section5_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Oblivious - An overlanding motorbike journey through West Africa";
      attr_dev(meta0, "name", "description");
      attr_dev(meta0, "content", "Oblivious is the epic true-life solo overlanding journey, motorbiking through West Africa on a Royal Enfield. Come along on the unique adventure!");
      add_location(meta0, file$2, 10, 4, 480);
      attr_dev(meta1, "property", "og:description");
      attr_dev(meta1, "content", "Oblivious is the epic true-life solo overlanding journey, motorbiking through West Africa on a Royal Enfield. Come along on the unique adventure!");
      add_location(meta1, file$2, 11, 4, 666);
      attr_dev(meta2, "property", "og:url");
      attr_dev(meta2, "content", "http://www.obliviousthebook.com/");
      add_location(meta2, file$2, 13, 4, 870);
      attr_dev(meta3, "property", "og:site_name");
      attr_dev(meta3, "content", "ObliviousTheBook.com");
      add_location(meta3, file$2, 14, 4, 943);
      attr_dev(meta4, "property", "fb:admins");
      attr_dev(meta4, "content", "563453705");
      add_location(meta4, file$2, 15, 4, 1010);
      attr_dev(meta5, "property", "og:image");
      attr_dev(meta5, "content", "/images/logo-750.png");
      add_location(meta5, file$2, 16, 4, 1063);
      attr_dev(meta6, "name", "twitter:card");
      attr_dev(meta6, "content", "summary_large_image");
      add_location(meta6, file$2, 18, 4, 1136);
      attr_dev(meta7, "name", "twitter:description");
      attr_dev(meta7, "content", "Oblivious is the epic true-life solo overlanding journey, motorbiking through West Africa on a Royal Enfield. Come along on the unique adventure!");
      add_location(meta7, file$2, 19, 4, 1198);
      attr_dev(meta8, "name", "twitter:title");
      attr_dev(meta8, "content", "Oblivious - An overlanding motorbike journey through West Africa");
      add_location(meta8, file$2, 21, 4, 1403);
      attr_dev(meta9, "name", "twitter:image");
      attr_dev(meta9, "content", "/images/logo-750.png");
      add_location(meta9, file$2, 22, 4, 1511);
      attr_dev(h10, "class", "text-4xl md:text-6xl text-center mb-2");
      add_location(h10, file$2, 27, 4, 1670);
      add_location(em0, file$2, 28, 64, 1801);
      attr_dev(a0, "href", "read");
      attr_dev(a0, "rel", "prefetch");
      add_location(a0, file$2, 28, 94, 1831);
      attr_dev(h20, "class", "text-xl md:text-3xl text-center");
      add_location(h20, file$2, 28, 4, 1741);
      attr_dev(section0, "class", "flex flex-col items-center max-w-4xl mt-8 md:mt-20");
      add_location(section0, file$2, 26, 0, 1597);
      attr_dev(img0, "class", "my-12 max-w-full max-h-1/2vh");
      attr_dev(img0, "alt", "Oblivious book cover");
      if (img0.src !== (img0_src_value = "/images/3D-cover.jpg")) attr_dev(img0, "src", img0_src_value);
      add_location(img0, file$2, 31, 4, 1984);
      attr_dev(a1, "class", "inline-block text-xl sm:text-2xl p-4 rounded-lg no-underline bg-oblivious");
      attr_dev(a1, "href", "read");
      attr_dev(a1, "rel", "prefetch");
      add_location(a1, file$2, 33, 8, 2161);
      attr_dev(a2, "rel", "nofollow");
      attr_dev(a2, "href", "https://transactions.sendowl.com/packages/37218/89A60CC9/add_to_cart");
      add_location(a2, file$2, 34, 30, 2325);
      attr_dev(span0, "class", "m-2");
      add_location(span0, file$2, 34, 8, 2303);
      attr_dev(div0, "class", "flex flex-col md:flex-row justify-center items-center");
      add_location(div0, file$2, 32, 4, 2085);
      attr_dev(section1, "class", "flex flex-col items-center max-w-4xl mb-20 md:mb-32");
      add_location(section1, file$2, 30, 0, 1910);
      add_location(em1, file$2, 41, 110, 2738);
      attr_dev(h11, "class", "text-4xl md:text-6xl text-center");
      add_location(h11, file$2, 41, 4, 2632);
      attr_dev(section2, "class", "flex flex-col items-center max-w-4xl mb-20 md:mb-32");
      add_location(section2, file$2, 40, 0, 2558);
      attr_dev(section3, "class", "flex mb-28 md:mb-32 sm:px-20");
      add_location(section3, file$2, 43, 0, 2784);
      attr_dev(h21, "class", "text-4xl md:text-6xl text-center max-w-4xl mb-8");
      add_location(h21, file$2, 47, 4, 2937);
      attr_dev(img1, "class", "relative inline-block w-full lg:w-2/3 lg:-mr-10");
      if (img1.src !== (img1_src_value = "/images/kindle-pad-phone.jpg")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "book being used on various platforms");
      add_location(img1, file$2, 49, 8, 3152);
      add_location(br0, file$2, 52, 90, 3512);
      add_location(em2, file$2, 53, 64, 3581);
      attr_dev(span1, "class", "text-oblivious-dark");
      add_location(span1, file$2, 53, 16, 3533);
      attr_dev(p0, "class", "absolute top-0 right-0 left-1/2 mt-1 text-xl");
      add_location(p0, file$2, 51, 12, 3365);
      add_location(br1, file$2, 57, 70, 3819);
      attr_dev(span2, "class", "text-oblivious-dark");
      add_location(span2, file$2, 58, 20, 3844);
      attr_dev(p1, "class", "text-xl");
      add_location(p1, file$2, 56, 16, 3729);
      add_location(em3, file$2, 61, 111, 4065);
      add_location(br2, file$2, 61, 136, 4090);
      attr_dev(span3, "class", "text-oblivious-dark");
      add_location(span3, file$2, 62, 20, 4115);
      attr_dev(p2, "class", "text-xl");
      add_location(p2, file$2, 60, 16, 3934);
      add_location(br3, file$2, 65, 57, 4287);
      attr_dev(span4, "class", "text-oblivious-dark");
      add_location(span4, file$2, 66, 20, 4312);
      attr_dev(p3, "class", "text-xl");
      add_location(p3, file$2, 64, 16, 4210);
      attr_dev(div1, "class", "absolute top-1/4 bottom-0 pb-8 flex flex-col justify-between");
      add_location(div1, file$2, 55, 12, 3638);
      attr_dev(div2, "class", "hidden lg:inline-block w-1/3 z-10 pb-4");
      add_location(div2, file$2, 50, 8, 3300);
      attr_dev(div3, "class", "flex relative items-end justify-center max-w-6xl mx-0 lg:mx-10 mb-10");
      add_location(div3, file$2, 48, 4, 3061);
      attr_dev(a3, "class", "inline-block text-xl sm:text-2xl p-4 rounded-lg no-underline bg-oblivious");
      attr_dev(a3, "href", "read");
      attr_dev(a3, "rel", "prefetch");
      add_location(a3, file$2, 72, 8, 4508);
      attr_dev(a4, "rel", "nofollow");
      attr_dev(a4, "href", "https://transactions.sendowl.com/packages/37218/89A60CC9/add_to_cart");
      add_location(a4, file$2, 73, 30, 4670);
      attr_dev(span5, "class", "m-2");
      add_location(span5, file$2, 73, 8, 4648);
      attr_dev(div4, "class", "flex flex-col md:flex-row justify-center items-center");
      add_location(div4, file$2, 71, 4, 4432);
      attr_dev(section4, "class", "flex flex-col justify-center items-center mb-20 md:mb-32");
      add_location(section4, file$2, 46, 0, 2858);
      attr_dev(h22, "class", "text-5xl md:text-6xl");
      add_location(h22, file$2, 77, 4, 4878);
      add_location(h3, file$2, 78, 4, 4940);
      attr_dev(section5, "class", "mb-20 md:mb-32 sm:px-20 text-center");
      add_location(section5, file$2, 76, 0, 4820);
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
      insert_dev(target, section0, anchor);
      append_dev(section0, h10);
      append_dev(h10, t1);
      append_dev(section0, t2);
      append_dev(section0, h20);
      append_dev(h20, t3);
      append_dev(h20, em0);
      append_dev(em0, t4);
      append_dev(h20, t5);
      append_dev(h20, a0);
      append_dev(a0, t6);
      append_dev(h20, t7);
      insert_dev(target, t8, anchor);
      insert_dev(target, section1, anchor);
      append_dev(section1, img0);
      append_dev(section1, t9);
      append_dev(section1, div0);
      append_dev(div0, a1);
      append_dev(a1, t10);
      append_dev(div0, t11);
      append_dev(div0, span0);
      append_dev(span0, t12);
      append_dev(span0, a2);
      append_dev(a2, t13);
      insert_dev(target, t14, anchor);
      insert_dev(target, section2, anchor);
      append_dev(section2, h11);
      append_dev(h11, t15);
      append_dev(h11, em1);
      append_dev(em1, t16);
      insert_dev(target, t17, anchor);
      insert_dev(target, section3, anchor);
      mount_component(carousel, section3, null);
      insert_dev(target, t18, anchor);
      insert_dev(target, section4, anchor);
      append_dev(section4, h21);
      append_dev(h21, t19);
      append_dev(section4, t20);
      append_dev(section4, div3);
      append_dev(div3, img1);
      append_dev(div3, t21);
      append_dev(div3, div2);
      append_dev(div2, p0);
      append_dev(p0, t22);
      append_dev(p0, br0);
      append_dev(p0, t23);
      append_dev(p0, span1);
      append_dev(span1, t24);
      append_dev(span1, em2);
      append_dev(em2, t25);
      append_dev(div2, t26);
      append_dev(div2, div1);
      append_dev(div1, p1);
      append_dev(p1, t27);
      append_dev(p1, br1);
      append_dev(p1, t28);
      append_dev(p1, span2);
      append_dev(span2, t29);
      append_dev(div1, t30);
      append_dev(div1, p2);
      append_dev(p2, t31);
      append_dev(p2, em3);
      append_dev(em3, t32);
      append_dev(p2, t33);
      append_dev(p2, br2);
      append_dev(p2, t34);
      append_dev(p2, span3);
      append_dev(span3, t35);
      append_dev(div1, t36);
      append_dev(div1, p3);
      append_dev(p3, t37);
      append_dev(p3, br3);
      append_dev(p3, t38);
      append_dev(p3, span4);
      append_dev(span4, t39);
      append_dev(section4, t40);
      append_dev(section4, div4);
      append_dev(div4, a3);
      append_dev(a3, t41);
      append_dev(div4, t42);
      append_dev(div4, span5);
      append_dev(span5, t43);
      append_dev(span5, a4);
      append_dev(a4, t44);
      insert_dev(target, t45, anchor);
      insert_dev(target, section5, anchor);
      append_dev(section5, h22);
      append_dev(h22, t46);
      append_dev(section5, t47);
      append_dev(section5, h3);
      append_dev(h3, t48);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(carousel.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(carousel.$$.fragment, local);
      current = false;
    },
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
      if (detaching) detach_dev(section0);
      if (detaching) detach_dev(t8);
      if (detaching) detach_dev(section1);
      if (detaching) detach_dev(t14);
      if (detaching) detach_dev(section2);
      if (detaching) detach_dev(t17);
      if (detaching) detach_dev(section3);
      destroy_component(carousel);
      if (detaching) detach_dev(t18);
      if (detaching) detach_dev(section4);
      if (detaching) detach_dev(t45);
      if (detaching) detach_dev(section5);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$2($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Routes", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      Carousel: Carousel,
      AsSeenIn: AsSeenIn,
      BuyButton: BuyButton
    };
  };

  return [];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  var _super = _createSuper$2(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  return Routes;
}(SvelteComponentDev);

export default Routes;
