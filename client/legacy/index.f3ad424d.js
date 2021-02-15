import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, d as init, e as _assertThisInitialized, f as dispatch_dev, L as _createClass, S as SvelteComponentDev, M as validate_each_argument, s as safe_not_equal, g as element, t as text, j as claim_element, k as children, n as claim_text, m as detach_dev, p as attr_dev, q as add_location, r as insert_dev, u as append_dev, y as set_data_dev, h as space, F as query_selector_all, l as claim_space, x as _slicedToArray, D as noop, N as destroy_each, v as validate_slots } from './client.05892d29.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/get-a-taste/index.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
} // (39:1) {#each posts as post}


function create_each_block(ctx) {
  var li;
  var a;
  var t_value =
  /*post*/
  ctx[1].title + "";
  var t;
  var a_href_value;
  var block = {
    c: function create() {
      li = element("li");
      a = element("a");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      li = claim_element(nodes, "LI", {});
      var li_nodes = children(li);
      a = claim_element(li_nodes, "A", {
        rel: true,
        href: true
      });
      var a_nodes = children(a);
      t = claim_text(a_nodes, t_value);
      a_nodes.forEach(detach_dev);
      li_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "rel", "prefetch");
      attr_dev(a, "href", a_href_value = "get-a-taste/" +
      /*post*/
      ctx[1].slug);
      add_location(a, file, 43, 6, 2035);
      add_location(li, file, 43, 2, 2031);
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      append_dev(li, a);
      append_dev(a, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*posts*/
      1 && t_value !== (t_value =
      /*post*/
      ctx[1].title + "")) set_data_dev(t, t_value);

      if (dirty &
      /*posts*/
      1 && a_href_value !== (a_href_value = "get-a-taste/" +
      /*post*/
      ctx[1].slug)) {
        attr_dev(a, "href", a_href_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(li);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(39:1) {#each posts as post}",
    ctx: ctx
  });
  return block;
}

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
  var span;
  var t5;
  var t6;
  var ul;
  var each_value =
  /*posts*/
  ctx[0];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

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
      t1 = text("Want to try before you buy?");
      t2 = space();
      h2 = element("h2");
      t3 = text("You're in the right place! Here are a few select chunks from the Oblivious Trilogy adventure!");
      t4 = space();
      span = element("span");
      t5 = text("[Spoiler Alert!]");
      t6 = space();
      ul = element("ul");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1dr6oil\"]", document.head);
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
      t1 = claim_text(h1_nodes, "Want to try before you buy?");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      h2 = claim_element(section_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t3 = claim_text(h2_nodes, "You're in the right place! Here are a few select chunks from the Oblivious Trilogy adventure!");
      h2_nodes.forEach(detach_dev);
      t4 = claim_space(section_nodes);
      span = claim_element(section_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t5 = claim_text(span_nodes, "[Spoiler Alert!]");
      span_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      t6 = claim_space(nodes);
      ul = claim_element(nodes, "UL", {
        class: true
      });
      var ul_nodes = children(ul);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(ul_nodes);
      }

      ul_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Get a taste of the adventure, with a couple of chunks of the Oblivious Trilogy";
      attr_dev(meta0, "property", "og:description");
      attr_dev(meta0, "content", "Here's just a taste of the action from the once-in-a-lifetime trip through West Africa on a Royal Enfield.");
      add_location(meta0, file, 17, 1, 537);
      attr_dev(meta1, "property", "og:url");
      attr_dev(meta1, "content", "http://www.obliviousthebook.com/");
      add_location(meta1, file, 19, 1, 693);
      attr_dev(meta2, "property", "og:site_name");
      attr_dev(meta2, "content", "ObliviousTheBook.com");
      add_location(meta2, file, 20, 1, 763);
      attr_dev(meta3, "property", "fb:admins");
      attr_dev(meta3, "content", "563453705");
      add_location(meta3, file, 21, 1, 827);
      attr_dev(meta4, "property", "og:image");
      attr_dev(meta4, "content", "/images/logo-750.png");
      add_location(meta4, file, 22, 1, 877);
      attr_dev(meta5, "name", "twitter:card");
      attr_dev(meta5, "content", "summary_large_image");
      add_location(meta5, file, 24, 1, 941);
      attr_dev(meta6, "name", "twitter:description");
      attr_dev(meta6, "content", "Here's just a taste of the action from the once-in-a-lifetime trip through West Africa on a Royal Enfield.");
      add_location(meta6, file, 25, 1, 1000);
      attr_dev(meta7, "name", "twitter:title");
      attr_dev(meta7, "content", "Get a taste of the adventure, with a couple of chunks of the Oblivious Trilogy");
      add_location(meta7, file, 27, 1, 1157);
      attr_dev(meta8, "name", "twitter:image");
      attr_dev(meta8, "content", "/images/logo-750.png");
      add_location(meta8, file, 28, 1, 1276);
      attr_dev(h1, "class", "text-4xl md:text-6xl text-center");
      add_location(h1, file, 33, 1, 1418);
      attr_dev(h2, "class", "text-xl md:text-3xl text-center");
      add_location(h2, file, 34, 1, 1497);
      attr_dev(span, "class", "header-font md:text-xl text-center");
      add_location(span, file, 35, 1, 1641);
      attr_dev(section, "class", "flex flex-col items-center max-w-4xl mb-16");
      add_location(section, file, 32, 0, 1356);
      attr_dev(ul, "class", "flex flex-row justify-around w-full max-w-3xl mb-20");
      add_location(ul, file, 37, 0, 1725);
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
      append_dev(section, span);
      append_dev(span, t5);
      insert_dev(target, t6, anchor);
      insert_dev(target, ul, anchor);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(ul, null);
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*posts*/
      1) {
        each_value =
        /*posts*/
        ctx[0];
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            each_blocks[_i4].m(ul, null);
          }
        }

        for (; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
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
      if (detaching) detach_dev(t6);
      if (detaching) detach_dev(ul);
      destroy_each(each_blocks, detaching);
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

function preload(_ref3) {
  var params = _ref3.params,
      query = _ref3.query;
  return this.fetch("get-a-taste.json").then(function (r) {
    return r.json();
  }).then(function (posts) {
    return {
      posts: posts
    };
  });
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Get_a_taste", slots, []);
  var posts = $$props.posts;
  var writable_props = ["posts"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Get_a_taste> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
  };

  $$self.$capture_state = function () {
    return {
      preload: preload,
      posts: posts
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [posts];
}

var Get_a_taste = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Get_a_taste, _SvelteComponentDev);

  var _super = _createSuper(Get_a_taste);

  function Get_a_taste(options) {
    var _this;

    _classCallCheck(this, Get_a_taste);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      posts: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Get_a_taste",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*posts*/
    ctx[0] === undefined && !("posts" in props)) {
      console.warn("<Get_a_taste> was created without expected prop 'posts'");
    }

    return _this;
  }

  _createClass(Get_a_taste, [{
    key: "posts",
    get: function get() {
      throw new Error("<Get_a_taste>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Get_a_taste>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Get_a_taste;
}(SvelteComponentDev);

export default Get_a_taste;
export { preload };
