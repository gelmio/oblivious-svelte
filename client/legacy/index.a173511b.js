import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, g as element, h as space, t as text, F as query_selector_all, j as claim_element, m as detach_dev, l as claim_space, k as children, n as claim_text, p as attr_dev, q as add_location, u as append_dev, r as insert_dev, D as noop, v as validate_slots } from './client.bc13aff9.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/read/index.svelte";

function create_fragment(ctx) {
  var meta0;
  var meta1;
  var meta2;
  var meta3;
  var meta4;
  var meta5;
  var meta6;
  var meta7;
  var meta8;
  var t0;
  var section;
  var h1;
  var t1;
  var t2;
  var h2;
  var t3;
  var t4;
  var div;
  var a;
  var t5;
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
      t0 = space();
      section = element("section");
      h1 = element("h1");
      t1 = text("Read all of Oblivious for free, right here!");
      t2 = space();
      h2 = element("h2");
      t3 = text("Tap the book icon to jump to a chapter, or start at the very beginning, which is a very good place to start.");
      t4 = space();
      div = element("div");
      a = element("a");
      t5 = text("Let's go already!");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1g9oqwh\"]", document.head);
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
      meta5 = claim_element(head_nodes, "META", {
        name: true,
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
      t1 = claim_text(h1_nodes, "Read all of Oblivious for free, right here!");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      h2 = claim_element(section_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t3 = claim_text(h2_nodes, "Tap the book icon to jump to a chapter, or start at the very beginning, which is a very good place to start.");
      h2_nodes.forEach(detach_dev);
      t4 = claim_space(section_nodes);
      div = claim_element(section_nodes, "DIV", {});
      var div_nodes = children(div);
      a = claim_element(div_nodes, "A", {
        rel: true,
        href: true,
        class: true
      });
      var a_nodes = children(a);
      t5 = claim_text(a_nodes, "Let's go already!");
      a_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "ohhai";
      attr_dev(meta0, "property", "og:description");
      attr_dev(meta0, "content", "Here's just a taste of the action from the once-in-a-lifetime trip through West Africa on a Royal Enfield.");
      add_location(meta0, file, 4, 1, 66);
      attr_dev(meta1, "property", "og:url");
      attr_dev(meta1, "content", "http://www.obliviousthebook.com/");
      add_location(meta1, file, 8, 1, 224);
      attr_dev(meta2, "property", "og:site_name");
      attr_dev(meta2, "content", "ObliviousTheBook.com");
      add_location(meta2, file, 9, 1, 295);
      attr_dev(meta3, "property", "fb:admins");
      attr_dev(meta3, "content", "563453705");
      add_location(meta3, file, 10, 1, 360);
      attr_dev(meta4, "property", "og:image");
      attr_dev(meta4, "content", "/images/logo-750.png");
      add_location(meta4, file, 11, 1, 411);
      attr_dev(meta5, "name", "twitter:card");
      attr_dev(meta5, "content", "summary_large_image");
      add_location(meta5, file, 12, 1, 472);
      attr_dev(meta6, "name", "twitter:description");
      attr_dev(meta6, "content", "Here's just a taste of the action from the once-in-a-lifetime trip through West Africa on a Royal Enfield.");
      add_location(meta6, file, 13, 1, 532);
      attr_dev(meta7, "name", "twitter:title");
      attr_dev(meta7, "content", "Get a taste of the adventure, with a couple of chunks of the Oblivious Trilogy");
      add_location(meta7, file, 17, 1, 691);
      attr_dev(meta8, "name", "twitter:image");
      attr_dev(meta8, "content", "/images/logo-750.png");
      add_location(meta8, file, 21, 1, 816);
      attr_dev(h1, "class", "text-4xl md:text-6xl text-center mb-2");
      add_location(h1, file, 25, 1, 970);
      attr_dev(h2, "class", "text-xl md:text-3xl text-center mb-12");
      add_location(h2, file, 28, 1, 1075);
      attr_dev(a, "rel", "prefetch");
      attr_dev(a, "href", "read/1/1");
      attr_dev(a, "class", "inline-block text-xl sm:text-2xl p-4 rounded-lg no-underline bg-oblivious");
      add_location(a, file, 32, 2, 1253);
      add_location(div, file, 31, 1, 1245);
      attr_dev(section, "class", "flex flex-col items-center max-w-4xl mt-12 md:mt-28 mb-24");
      add_location(section, file, 24, 0, 893);
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
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h1);
      append_dev(h1, t1);
      append_dev(section, t2);
      append_dev(section, h2);
      append_dev(h2, t3);
      append_dev(section, t4);
      append_dev(section, div);
      append_dev(div, a);
      append_dev(a, t5);
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
