import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, g as element, h as space, t as text, F as query_selector_all, j as claim_element, m as detach_dev, l as claim_space, k as children, n as claim_text, p as attr_dev, q as add_location, u as append_dev, r as insert_dev, D as noop, v as validate_slots } from './client.102bf39e.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/awww-yeah.svelte";

function create_fragment(ctx) {
  var meta0;
  var meta1;
  var meta2;
  var meta3;
  var meta4;
  var t0;
  var section0;
  var h1;
  var t1;
  var t2;
  var h2;
  var t3;
  var t4;
  var section1;
  var img;
  var img_src_value;
  var t5;
  var div;
  var h3;
  var t6;
  var t7;
  var h4;
  var t8;
  var block = {
    c: function create() {
      meta0 = element("meta");
      meta1 = element("meta");
      meta2 = element("meta");
      meta3 = element("meta");
      meta4 = element("meta");
      t0 = space();
      section0 = element("section");
      h1 = element("h1");
      t1 = text("Success! It's on!!");
      t2 = space();
      h2 = element("h2");
      t3 = text("I've sent you an email where you can download the e-book in any format, anytime");
      t4 = space();
      section1 = element("section");
      img = element("img");
      t5 = space();
      div = element("div");
      h3 = element("h3");
      t6 = text("Get Reading!");
      t7 = space();
      h4 = element("h4");
      t8 = text("Feel free to use the e-book on anything with a screen! To get it onto your kindle, simply plug it in and copy the file across!");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-18ora8g\"]", document.head);
      meta0 = claim_element(head_nodes, "META", {
        property: true,
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
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      section0 = claim_element(nodes, "SECTION", {
        class: true
      });
      var section0_nodes = children(section0);
      h1 = claim_element(section0_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Success! It's on!!");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(section0_nodes);
      h2 = claim_element(section0_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t3 = claim_text(h2_nodes, "I've sent you an email where you can download the e-book in any format, anytime");
      h2_nodes.forEach(detach_dev);
      section0_nodes.forEach(detach_dev);
      t4 = claim_space(nodes);
      section1 = claim_element(nodes, "SECTION", {
        class: true
      });
      var section1_nodes = children(section1);
      img = claim_element(section1_nodes, "IMG", {
        class: true,
        alt: true,
        src: true
      });
      t5 = claim_space(section1_nodes);
      div = claim_element(section1_nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      h3 = claim_element(div_nodes, "H3", {
        class: true
      });
      var h3_nodes = children(h3);
      t6 = claim_text(h3_nodes, "Get Reading!");
      h3_nodes.forEach(detach_dev);
      t7 = claim_space(div_nodes);
      h4 = claim_element(div_nodes, "H4", {
        class: true
      });
      var h4_nodes = children(h4);
      t8 = claim_text(h4_nodes, "Feel free to use the e-book on anything with a screen! To get it onto your kindle, simply plug it in and copy the file across!");
      h4_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      section1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Great Work, Oblivious book one is on ehte way!";
      attr_dev(meta0, "property", "og:description");
      attr_dev(meta0, "content", "Your order of Oblivious is on the way");
      add_location(meta0, file, 7, 4, 294);
      attr_dev(meta1, "property", "og:url");
      attr_dev(meta1, "content", "http://www.obliviousthebook.com/awww-yeah");
      add_location(meta1, file, 9, 4, 390);
      attr_dev(meta2, "property", "og:site_name");
      attr_dev(meta2, "content", "ObliviousTheBook.com");
      add_location(meta2, file, 10, 4, 472);
      attr_dev(meta3, "property", "fb:admins");
      attr_dev(meta3, "content", "563453705");
      add_location(meta3, file, 11, 4, 539);
      attr_dev(meta4, "property", "og:image");
      attr_dev(meta4, "content", "/images/logo-750.png");
      add_location(meta4, file, 12, 4, 592);
      attr_dev(h1, "class", "text-4xl md:text-5xl text-center");
      add_location(h1, file, 17, 4, 751);
      attr_dev(h2, "class", "text-xl md:text-3xl text-center");
      add_location(h2, file, 18, 4, 824);
      attr_dev(section0, "class", "flex flex-col items-center max-w-4xl my-14 md:my-32");
      add_location(section0, file, 16, 0, 677);
      attr_dev(img, "class", "w-full md:w-3/5 my-4");
      attr_dev(img, "alt", "computer with sendowl payment portal");
      if (img.src !== (img_src_value = "/images/how-step3.jpg")) attr_dev(img, "src", img_src_value);
      add_location(img, file, 21, 4, 1055);
      attr_dev(h3, "class", "text-3xl md:text-5xl");
      add_location(h3, file, 23, 8, 1196);
      attr_dev(h4, "class", "text-xl md:text-2xl");
      add_location(h4, file, 24, 8, 1255);
      attr_dev(div, "class", "md:pl-20");
      add_location(div, file, 22, 4, 1165);
      attr_dev(section1, "class", "flex flex-col md:flex-row items-center max-w-6xl mb-20 md:mb-32 px-8");
      add_location(section1, file, 20, 0, 964);
    },
    m: function mount(target, anchor) {
      append_dev(document.head, meta0);
      append_dev(document.head, meta1);
      append_dev(document.head, meta2);
      append_dev(document.head, meta3);
      append_dev(document.head, meta4);
      insert_dev(target, t0, anchor);
      insert_dev(target, section0, anchor);
      append_dev(section0, h1);
      append_dev(h1, t1);
      append_dev(section0, t2);
      append_dev(section0, h2);
      append_dev(h2, t3);
      insert_dev(target, t4, anchor);
      insert_dev(target, section1, anchor);
      append_dev(section1, img);
      append_dev(section1, t5);
      append_dev(section1, div);
      append_dev(div, h3);
      append_dev(h3, t6);
      append_dev(div, t7);
      append_dev(div, h4);
      append_dev(h4, t8);
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
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section0);
      if (detaching) detach_dev(t4);
      if (detaching) detach_dev(section1);
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

function instance($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Awww_yeah", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Awww_yeah> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var Awww_yeah = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Awww_yeah, _SvelteComponentDev);

  var _super = _createSuper(Awww_yeah);

  function Awww_yeah(options) {
    var _this;

    _classCallCheck(this, Awww_yeah);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Awww_yeah",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Awww_yeah;
}(SvelteComponentDev);

export default Awww_yeah;
