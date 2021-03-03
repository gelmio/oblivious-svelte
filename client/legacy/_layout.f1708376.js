import { M as regenerator, _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, L as _createClass, S as SvelteComponentDev, N as validate_each_argument, s as safe_not_equal, g as element, t as text, h as space, j as claim_element, k as children, n as claim_text, m as detach_dev, l as claim_space, p as attr_dev, q as add_location, r as insert_dev, u as append_dev, w as listen_dev, y as set_data_dev, O as create_out_transition, P as empty, Q as PageTransition, E as create_component, G as claim_component, H as mount_component, I as transition_in, J as transition_out, K as destroy_component, x as _slicedToArray, R as check_outros, T as destroy_each, B as run_all, U as validate_store, V as component_subscribe, v as validate_slots, W as stores$1, f as fade, z as add_render_callback, X as create_in_transition, Y as _toConsumableArray, Z as toggle_class, $ as create_slot, a0 as group_outros, D as noop, a1 as update_slot } from './client.371fd9d7.js';
import { r as readerPosition } from './reader-hints.d63974bd.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/read/_layout.svelte";

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[16] = list[i];
  child_ctx[18] = i;
  return child_ctx;
}

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[13] = list[i];
  child_ctx[15] = i;
  return child_ctx;
} // (56:0) {#if recommendJumpToChapter}


function create_if_block_1(ctx) {
  var div2;
  var div1;
  var p0;
  var t0;
  var t1;
  var p1;
  var t2;
  var t3;
  var div0;
  var a;
  var t4;
  var t5_value =
  /*$readerPosition*/
  ctx[4][1] + "";
  var t5;
  var a_href_value;
  var t6;
  var span;
  var t7;
  var div2_intro;
  var div2_outro;
  var current;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      div2 = element("div");
      div1 = element("div");
      p0 = element("p");
      t0 = text("Looks like you've been here before...");
      t1 = space();
      p1 = element("p");
      t2 = text("Want to pick up where you left off?");
      t3 = space();
      div0 = element("div");
      a = element("a");
      t4 = text("Sure, take me to chapter ");
      t5 = text(t5_value);
      t6 = space();
      span = element("span");
      t7 = text("Nup");
      this.h();
    },
    l: function claim(nodes) {
      div2 = claim_element(nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      p0 = claim_element(div1_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "Looks like you've been here before...");
      p0_nodes.forEach(detach_dev);
      t1 = claim_space(div1_nodes);
      p1 = claim_element(div1_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t2 = claim_text(p1_nodes, "Want to pick up where you left off?");
      p1_nodes.forEach(detach_dev);
      t3 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      a = claim_element(div0_nodes, "A", {
        class: true,
        href: true
      });
      var a_nodes = children(a);
      t4 = claim_text(a_nodes, "Sure, take me to chapter ");
      t5 = claim_text(a_nodes, t5_value);
      a_nodes.forEach(detach_dev);
      t6 = claim_space(div0_nodes);
      span = claim_element(div0_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t7 = claim_text(span_nodes, "Nup");
      span_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p0, "class", "font-header text-xl md:text-2xl");
      add_location(p0, file, 64, 3, 2326);
      attr_dev(p1, "class", "font-sans text-base md:text-lg mb-4");
      add_location(p1, file, 67, 3, 2423);
      attr_dev(a, "class", "inline-block text-base md:text-lg p-2 rounded-lg no-underline bg-oblivious");
      attr_dev(a, "href", a_href_value = "read/" +
      /*$readerPosition*/
      ctx[4][0] + "/" +
      /*$readerPosition*/
      ctx[4][1]);
      add_location(a, file, 71, 4, 2532);
      attr_dev(span, "class", "inline-block text-base md:text-lg p-2 rounded-lg no-underline bg-white border border-solid border-oblivious cursor-pointer");
      add_location(span, file, 76, 4, 2747);
      add_location(div0, file, 70, 3, 2522);
      attr_dev(div1, "class", "rounded-lg bg-white p-2 md:p-16 flex flex-col text-center m-2");
      add_location(div1, file, 61, 2, 2241);
      attr_dev(div2, "class", "fixed inset-0 flex justify-center items-center bg-oblivious-opaque z-10");
      add_location(div2, file, 56, 1, 2110);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div2, anchor);
      append_dev(div2, div1);
      append_dev(div1, p0);
      append_dev(p0, t0);
      append_dev(div1, t1);
      append_dev(div1, p1);
      append_dev(p1, t2);
      append_dev(div1, t3);
      append_dev(div1, div0);
      append_dev(div0, a);
      append_dev(a, t4);
      append_dev(a, t5);
      append_dev(div0, t6);
      append_dev(div0, span);
      append_dev(span, t7);
      current = true;

      if (!mounted) {
        dispose = listen_dev(span, "click",
        /*click_handler*/
        ctx[7], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if ((!current || dirty &
      /*$readerPosition*/
      16) && t5_value !== (t5_value =
      /*$readerPosition*/
      ctx[4][1] + "")) set_data_dev(t5, t5_value);

      if (!current || dirty &
      /*$readerPosition*/
      16 && a_href_value !== (a_href_value = "read/" +
      /*$readerPosition*/
      ctx[4][0] + "/" +
      /*$readerPosition*/
      ctx[4][1])) {
        attr_dev(a, "href", a_href_value);
      }
    },
    i: function intro(local) {
      if (current) return;
      add_render_callback(function () {
        if (div2_outro) div2_outro.end(1);
        if (!div2_intro) div2_intro = create_in_transition(div2, fade, {
          delay: 1000
        });
        div2_intro.start();
      });
      current = true;
    },
    o: function outro(local) {
      if (div2_intro) div2_intro.invalidate();
      div2_outro = create_out_transition(div2, fade, {});
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div2);
      if (detaching && div2_outro) div2_outro.end();
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(56:0) {#if recommendJumpToChapter}",
    ctx: ctx
  });
  return block;
} // (104:2) {#if bookIndex + 1 < 3}


function create_if_block(ctx) {
  var t0;
  var t1_value =
  /*bookIndex*/
  ctx[15] + 1 + "";
  var t1;
  var t2;
  var ul;
  var t3;

  var each_value_1 = _toConsumableArray(Array(
  /*chapterCount*/
  ctx[13]));

  validate_each_argument(each_value_1);
  var each_blocks = [];

  for (var i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }

  var block = {
    c: function create() {
      t0 = text("Book ");
      t1 = text(t1_value);
      t2 = space();
      ul = element("ul");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t3 = space();
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_text(nodes, "Book ");
      t1 = claim_text(nodes, t1_value);
      t2 = claim_space(nodes);
      ul = claim_element(nodes, "UL", {});
      var ul_nodes = children(ul);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(ul_nodes);
      }

      t3 = claim_space(ul_nodes);
      ul_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(ul, file, 105, 3, 3714);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, t2, anchor);
      insert_dev(target, ul, anchor);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(ul, null);
      }

      append_dev(ul, t3);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*slug, recommendJumpToChapter, navOpen, chapterCounts*/
      15) {
        each_value_1 = _toConsumableArray(Array(
        /*chapterCount*/
        ctx[13]));
        validate_each_argument(each_value_1);

        var _i4;

        for (_i4 = 0; _i4 < each_value_1.length; _i4 += 1) {
          var child_ctx = get_each_context_1(ctx, each_value_1, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);
          } else {
            each_blocks[_i4] = create_each_block_1(child_ctx);

            each_blocks[_i4].c();

            each_blocks[_i4].m(ul, t3);
          }
        }

        for (; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].d(1);
        }

        each_blocks.length = each_value_1.length;
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(ul);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(104:2) {#if bookIndex + 1 < 3}",
    ctx: ctx
  });
  return block;
} // (107:4) {#each [...Array(chapterCount)] as _, chapterIndex}


function create_each_block_1(ctx) {
  var li;
  var a;
  var t0;
  var t1_value =
  /*chapterIndex*/
  ctx[18] + 1 + "";
  var t1;
  var a_href_value;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      li = element("li");
      a = element("a");
      t0 = text("Chapter ");
      t1 = text(t1_value);
      this.h();
    },
    l: function claim(nodes) {
      li = claim_element(nodes, "LI", {
        class: true
      });
      var li_nodes = children(li);
      a = claim_element(li_nodes, "A", {
        rel: true,
        href: true
      });
      var a_nodes = children(a);
      t0 = claim_text(a_nodes, "Chapter ");
      t1 = claim_text(a_nodes, t1_value);
      a_nodes.forEach(detach_dev);
      li_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "rel", "prefetch");
      attr_dev(a, "href", a_href_value = "read/" + (
      /*bookIndex*/
      ctx[15] + 1) + "/" + (
      /*chapterIndex*/
      ctx[18] + 1));
      add_location(a, file, 117, 6, 4036);
      attr_dev(li, "class", "ml-4 p-2 rounded-md");
      toggle_class(li, "bg-oblivious",
      /*slug*/
      ctx[3] &&
      /*bookIndex*/
      ctx[15] + 1 === +
      /*slug*/
      ctx[3][0] &&
      /*chapterIndex*/
      ctx[18] + 1 === +
      /*slug*/
      ctx[3][1]);
      add_location(li, file, 107, 5, 3780);
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      append_dev(li, a);
      append_dev(a, t0);
      append_dev(a, t1);

      if (!mounted) {
        dispose = listen_dev(li, "click",
        /*click_handler_2*/
        ctx[9], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*slug*/
      8) {
        toggle_class(li, "bg-oblivious",
        /*slug*/
        ctx[3] &&
        /*bookIndex*/
        ctx[15] + 1 === +
        /*slug*/
        ctx[3][0] &&
        /*chapterIndex*/
        ctx[18] + 1 === +
        /*slug*/
        ctx[3][1]);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(li);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_1.name,
    type: "each",
    source: "(107:4) {#each [...Array(chapterCount)] as _, chapterIndex}",
    ctx: ctx
  });
  return block;
} // (103:1) {#each chapterCounts as chapterCount, bookIndex}


function create_each_block(ctx) {
  var if_block_anchor;
  var if_block =
  /*bookIndex*/
  ctx[15] + 1 < 3 && create_if_block(ctx);
  var block = {
    c: function create() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
    },
    p: function update(ctx, dirty) {
      if (
      /*bookIndex*/
      ctx[15] + 1 < 3) if_block.p(ctx, dirty);
    },
    d: function destroy(detaching) {
      if (if_block) if_block.d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(103:1) {#each chapterCounts as chapterCount, bookIndex}",
    ctx: ctx
  });
  return block;
} // (131:2) <PageTransition>


function create_default_slot(ctx) {
  var current;
  var default_slot_template =
  /*#slots*/
  ctx[6].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[11], null);
  var block = {
    c: function create() {
      if (default_slot) default_slot.c();
    },
    l: function claim(nodes) {
      if (default_slot) default_slot.l(nodes);
    },
    m: function mount(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        2048) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[11], dirty, null, null);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (default_slot) default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(131:2) <PageTransition>",
    ctx: ctx
  });
  return block;
} // (130:1) {#key slug}


function create_key_block(ctx) {
  var pagetransition;
  var current;
  pagetransition = new PageTransition({
    props: {
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(pagetransition.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(pagetransition.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(pagetransition, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var pagetransition_changes = {};

      if (dirty &
      /*$$scope*/
      2048) {
        pagetransition_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      pagetransition.$set(pagetransition_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(pagetransition.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(pagetransition.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(pagetransition, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_key_block.name,
    type: "key",
    source: "(130:1) {#key slug}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t0;
  var button;
  var t1;
  var span;
  var t2_value = (
  /*navOpen*/
  ctx[1] ? "‹" : "›") + "";
  var t2;
  var t3;
  var nav;
  var nav_class_value;
  var t4;
  var div;
  var previous_key =
  /*slug*/
  ctx[3];
  var current;
  var mounted;
  var dispose;
  var if_block =
  /*recommendJumpToChapter*/
  ctx[2] && create_if_block_1(ctx);
  var each_value =
  /*chapterCounts*/
  ctx[0];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var key_block = create_key_block(ctx);
  var block = {
    c: function create() {
      if (if_block) if_block.c();
      t0 = space();
      button = element("button");
      t1 = text("📖 ");
      span = element("span");
      t2 = text(t2_value);
      t3 = space();
      nav = element("nav");

      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        each_blocks[_i5].c();
      }

      t4 = space();
      div = element("div");
      key_block.c();
      this.h();
    },
    l: function claim(nodes) {
      if (if_block) if_block.l(nodes);
      t0 = claim_space(nodes);
      button = claim_element(nodes, "BUTTON", {
        class: true
      });
      var button_nodes = children(button);
      t1 = claim_text(button_nodes, "📖 ");
      span = claim_element(button_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t2 = claim_text(span_nodes, t2_value);
      span_nodes.forEach(detach_dev);
      button_nodes.forEach(detach_dev);
      t3 = claim_space(nodes);
      nav = claim_element(nodes, "NAV", {
        class: true
      });
      var nav_nodes = children(nav);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        each_blocks[_i6].l(nav_nodes);
      }

      nav_nodes.forEach(detach_dev);
      t4 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      key_block.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "absolute font-black top-1/2 right-1 transform -translate-y-1/2");
      add_location(span, file, 92, 4, 3211);
      attr_dev(button, "class", "absolute top-0 md:top-12 left-0 w-12 h-12 text-lg md:w-16 md:h-16 md:text-2xl bg-oblivious rounded-r-xl");
      add_location(button, file, 88, 0, 3045);
      attr_dev(nav, "class", nav_class_value = "absolute z-10 top-16 md:top-32 left-0 h-4/5vh max-h-full right-auto overflow-y-scroll transform " + (
      /*navOpen*/
      ctx[1] ? "translate-x-0" : "-translate-x-full") + " transition-all duration-1000 ease-in-out bg-white p-4 rounded-r-lg border-solid border-oblivious-dark border-2");
      add_location(nav, file, 97, 0, 3334);
      add_location(div, file, 128, 0, 4217);
    },
    m: function mount(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, button, anchor);
      append_dev(button, t1);
      append_dev(button, span);
      append_dev(span, t2);
      insert_dev(target, t3, anchor);
      insert_dev(target, nav, anchor);

      for (var _i7 = 0; _i7 < each_blocks.length; _i7 += 1) {
        each_blocks[_i7].m(nav, null);
      }

      insert_dev(target, t4, anchor);
      insert_dev(target, div, anchor);
      key_block.m(div, null);
      current = true;

      if (!mounted) {
        dispose = [listen_dev(button, "click",
        /*click_handler_1*/
        ctx[8], false, false, false), listen_dev(div, "click",
        /*click_handler_3*/
        ctx[10], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (
      /*recommendJumpToChapter*/
      ctx[2]) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty &
          /*recommendJumpToChapter*/
          4) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(t0.parentNode, t0);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
      }

      if ((!current || dirty &
      /*navOpen*/
      2) && t2_value !== (t2_value = (
      /*navOpen*/
      ctx[1] ? "‹" : "›") + "")) set_data_dev(t2, t2_value);

      if (dirty &
      /*Array, chapterCounts, slug, recommendJumpToChapter, navOpen*/
      15) {
        each_value =
        /*chapterCounts*/
        ctx[0];
        validate_each_argument(each_value);

        var _i8;

        for (_i8 = 0; _i8 < each_value.length; _i8 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i8);

          if (each_blocks[_i8]) {
            each_blocks[_i8].p(child_ctx, dirty);
          } else {
            each_blocks[_i8] = create_each_block(child_ctx);

            each_blocks[_i8].c();

            each_blocks[_i8].m(nav, null);
          }
        }

        for (; _i8 < each_blocks.length; _i8 += 1) {
          each_blocks[_i8].d(1);
        }

        each_blocks.length = each_value.length;
      }

      if (!current || dirty &
      /*navOpen*/
      2 && nav_class_value !== (nav_class_value = "absolute z-10 top-16 md:top-32 left-0 h-4/5vh max-h-full right-auto overflow-y-scroll transform " + (
      /*navOpen*/
      ctx[1] ? "translate-x-0" : "-translate-x-full") + " transition-all duration-1000 ease-in-out bg-white p-4 rounded-r-lg border-solid border-oblivious-dark border-2")) {
        attr_dev(nav, "class", nav_class_value);
      }

      if (dirty &
      /*slug*/
      8 && safe_not_equal(previous_key, previous_key =
      /*slug*/
      ctx[3])) {
        group_outros();
        transition_out(key_block, 1, 1, noop);
        check_outros();
        key_block = create_key_block(ctx);
        key_block.c();
        transition_in(key_block);
        key_block.m(div, null);
      } else {
        key_block.p(ctx, dirty);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      transition_in(key_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      transition_out(key_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block) if_block.d(detaching);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(button);
      if (detaching) detach_dev(t3);
      if (detaching) detach_dev(nav);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(t4);
      if (detaching) detach_dev(div);
      key_block.d(detaching);
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

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

function preload(_ref3) {
  var params = _ref3.params,
      query = _ref3.query;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/regenerator.mark(function _callee() {
    var res, chapterCounts;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this.fetch("read/book-index.json");

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            chapterCounts = _context.sent;

            if (!(res.status === 200)) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", {
              chapterCounts: chapterCounts
            });

          case 10:
            this.error(res.status);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
}

function readersPositionHasAdvanced(storedPosition, currentPosition) {
  return !storedPosition && currentPosition || currentPosition[0] > storedPosition[0] || currentPosition[0] === storedPosition[0] && currentPosition[1] > storedPosition[1];
}

function instance($$self, $$props, $$invalidate) {
  var $page;
  var $readerPosition;
  validate_store(readerPosition, "readerPosition");
  component_subscribe($$self, readerPosition, function ($$value) {
    return $$invalidate(4, $readerPosition = $$value);
  });
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Layout", slots, ['default']);
  var chapterCounts = $$props.chapterCounts;

  var _stores = stores$1(),
      page = _stores.page;

  validate_store(page, "page");
  component_subscribe($$self, page, function (value) {
    return $$invalidate(12, $page = value);
  });
  var navOpen = false;
  var recommendJumpToChapter = false;
  var writable_props = ["chapterCounts"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Layout> was created with unknown prop '".concat(key, "'"));
  });

  var click_handler = function click_handler() {
    $$invalidate(2, recommendJumpToChapter = false);
    readerPosition.set(null);
  };

  var click_handler_1 = function click_handler_1() {
    return $$invalidate(1, navOpen = !navOpen);
  };

  var click_handler_2 = function click_handler_2() {
    $$invalidate(2, recommendJumpToChapter = false);
    $$invalidate(1, navOpen = false);
  };

  var click_handler_3 = function click_handler_3() {
    return $$invalidate(1, navOpen = false);
  };

  $$self.$$set = function ($$props) {
    if ("chapterCounts" in $$props) $$invalidate(0, chapterCounts = $$props.chapterCounts);
    if ("$$scope" in $$props) $$invalidate(11, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      __awaiter: __awaiter,
      preload: preload,
      stores: stores$1,
      fade: fade,
      PageTransition: PageTransition,
      readerPosition: readerPosition,
      chapterCounts: chapterCounts,
      readersPositionHasAdvanced: readersPositionHasAdvanced,
      page: page,
      navOpen: navOpen,
      recommendJumpToChapter: recommendJumpToChapter,
      slug: slug,
      $page: $page,
      $readerPosition: $readerPosition
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("chapterCounts" in $$props) $$invalidate(0, chapterCounts = $$props.chapterCounts);
    if ("navOpen" in $$props) $$invalidate(1, navOpen = $$props.navOpen);
    if ("recommendJumpToChapter" in $$props) $$invalidate(2, recommendJumpToChapter = $$props.recommendJumpToChapter);
    if ("slug" in $$props) $$invalidate(3, slug = $$props.slug);
  };

  var slug;

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*$page*/
    4096) {
       $$invalidate(3, slug = $page.params.slug ? $page.params.slug.map(function (x) {
        return +x;
      }) : null);
    }

    if ($$self.$$.dirty &
    /*slug, $readerPosition*/
    24) {
       if (slug && readersPositionHasAdvanced($readerPosition, slug)) {
        readerPosition.set(slug);
      } else if (!slug && $readerPosition) {
        setTimeout(function () {
          $$invalidate(2, recommendJumpToChapter = true);
        }, 1);
      } else {
        $$invalidate(2, recommendJumpToChapter = false);
      }
    }
  };

  return [chapterCounts, navOpen, recommendJumpToChapter, slug, $readerPosition, page, slots, click_handler, click_handler_1, click_handler_2, click_handler_3, $$scope];
}

var Layout = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Layout, _SvelteComponentDev);

  var _super = _createSuper(Layout);

  function Layout(options) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      chapterCounts: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Layout",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*chapterCounts*/
    ctx[0] === undefined && !("chapterCounts" in props)) {
      console.warn("<Layout> was created without expected prop 'chapterCounts'");
    }

    return _this;
  }

  _createClass(Layout, [{
    key: "chapterCounts",
    get: function get() {
      throw new Error("<Layout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Layout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Layout;
}(SvelteComponentDev);

export default Layout;
export { preload };
