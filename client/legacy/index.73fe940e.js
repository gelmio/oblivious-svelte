import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, g as element, h as space, t as text, D as query_selector_all, j as claim_element, m as detach_dev, l as claim_space, k as children, n as claim_text, p as attr_dev, q as add_location, u as append_dev, r as insert_dev, G as noop, v as validate_slots } from './client.e05bae4b.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/read/index.svelte";

function create_fragment(ctx) {
  var meta0;
  var meta1;
  var meta2;
  var t0;
  var section;
  var h1;
  var t1;
  var t2;
  var h2;
  var t3;
  var t4;
  var div;
  var a0;
  var t5;
  var t6;
  var a1;
  var t7;
  var block = {
    c: function create() {
      meta0 = element("meta");
      meta1 = element("meta");
      meta2 = element("meta");
      t0 = space();
      section = element("section");
      h1 = element("h1");
      t1 = text("Read the Oblivious Trilogy for free, right here!");
      t2 = space();
      h2 = element("h2");
      t3 = text("Tap the book icon and jump to a chapter, or start at the very beginning, which is a very good place to start.");
      t4 = space();
      div = element("div");
      a0 = element("a");
      t5 = text("Let's go already!");
      t6 = space();
      a1 = element("a");
      t7 = text("Jump me to Book 2!");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-nvuwvw\"]", document.head);
      meta0 = claim_element(head_nodes, "META", {
        property: true,
        content: true
      });
      meta1 = claim_element(head_nodes, "META", {
        name: true,
        content: true
      });
      meta2 = claim_element(head_nodes, "META", {
        name: true,
        content: true
      });
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);
      h1 = claim_element(section_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Read the Oblivious Trilogy for free, right here!");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      h2 = claim_element(section_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t3 = claim_text(h2_nodes, "Tap the book icon and jump to a chapter, or start at the very beginning, which is a very good place to start.");
      h2_nodes.forEach(detach_dev);
      t4 = claim_space(section_nodes);
      div = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      a0 = claim_element(div_nodes, "A", {
        rel: true,
        href: true,
        class: true
      });
      var a0_nodes = children(a0);
      t5 = claim_text(a0_nodes, "Let's go already!");
      a0_nodes.forEach(detach_dev);
      t6 = claim_space(div_nodes);
      a1 = claim_element(div_nodes, "A", {
        rel: true,
        href: true,
        class: true
      });
      var a1_nodes = children(a1);
      t7 = claim_text(a1_nodes, "Jump me to Book 2!");
      a1_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Read the Oblivious Trilogy for Free | An outrageously inappropriate journey through West Africa on a Royal Enfield";
      attr_dev(meta0, "property", "og:description");
      attr_dev(meta0, "content", "Come along on the adventure, while we make our way through West Africa on a wildly inappropriate Royal Enfield!");
      add_location(meta0, file, 4, 1, 175);
      attr_dev(meta1, "name", "twitter:description");
      attr_dev(meta1, "content", "Come along on the adventure, while we make our way through West Africa on a wildly inappropriate Royal Enfield!");
      add_location(meta1, file, 8, 1, 338);
      attr_dev(meta2, "name", "twitter:title");
      attr_dev(meta2, "content", "Read the Oblivious Trilogy for Free | An outrageously inappropriate journey through West Africa on a Royal Enfield.");
      add_location(meta2, file, 12, 1, 502);
      attr_dev(h1, "class", "text-4xl md:text-6xl text-center mb-2");
      add_location(h1, file, 19, 1, 756);
      attr_dev(h2, "class", "text-xl md:text-3xl text-center mb-12");
      add_location(h2, file, 22, 1, 866);
      attr_dev(a0, "rel", "prefetch");
      attr_dev(a0, "href", "read/1/1");
      attr_dev(a0, "class", "inline-block text-xl sm:text-2xl p-4 mx-4 my-2 rounded-lg no-underline bg-oblivious");
      add_location(a0, file, 26, 2, 1107);
      attr_dev(a1, "rel", "prefetch");
      attr_dev(a1, "href", "read/2/1");
      attr_dev(a1, "class", "inline-block text-xl sm:text-2xl p-4 mx-4 my-2 rounded-lg no-underline bg-white border border-solid border-oblivious");
      add_location(a1, file, 32, 2, 1274);
      attr_dev(div, "class", "flex flex-col md:flex-row justify-center items-center");
      add_location(div, file, 25, 1, 1037);
      attr_dev(section, "class", "flex flex-col items-center max-w-4xl mt-12 md:mt-28 mb-24");
      add_location(section, file, 18, 0, 679);
    },
    m: function mount(target, anchor) {
      append_dev(document.head, meta0);
      append_dev(document.head, meta1);
      append_dev(document.head, meta2);
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h1);
      append_dev(h1, t1);
      append_dev(section, t2);
      append_dev(section, h2);
      append_dev(h2, t3);
      append_dev(section, t4);
      append_dev(section, div);
      append_dev(div, a0);
      append_dev(a0, t5);
      append_dev(div, t6);
      append_dev(div, a1);
      append_dev(a1, t7);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      detach_dev(meta0);
      detach_dev(meta1);
      detach_dev(meta2);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
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
  validate_slots("Read", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Read> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var Read = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Read, _SvelteComponentDev);

  var _super = _createSuper(Read);

  function Read(options) {
    var _this;

    _classCallCheck(this, Read);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Read",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Read;
}(SvelteComponentDev);

export default Read;
