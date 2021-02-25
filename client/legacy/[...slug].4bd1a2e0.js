import { M as regenerator, x as _slicedToArray, _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, L as _createClass, S as SvelteComponentDev, a3 as globals, s as safe_not_equal, g as element, j as claim_element, k as children, m as detach_dev, p as attr_dev, q as add_location, r as insert_dev, w as listen_dev, D as noop, t as text, h as space, n as claim_text, l as claim_space, u as append_dev, O as create_out_transition, P as empty, F as query_selector_all, a4 as HtmlTag, y as set_data_dev, I as transition_in, J as transition_out, R as check_outros, B as run_all, U as validate_store, V as component_subscribe, v as validate_slots, a5 as onMount, f as fade, z as add_render_callback, X as create_in_transition, a0 as group_outros, a6 as binding_callbacks } from './client.28b2c52f.js';
import { g as giveScrollHint } from './reader-hints.45661a35.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var console_1 = globals.console,
    document_1 = globals.document,
    window_1 = globals.window;
var file = "src/routes/read/[...slug].svelte"; // (131:2) {:else}

function create_else_block(ctx) {
  var div;
  var p0;
  var t0;
  var t1;
  var p1;
  var t2;
  var t3;
  var p2;
  var t4;
  var a;
  var t5;
  var block = {
    c: function create() {
      div = element("div");
      p0 = element("p");
      t0 = text("Congrats! You've made it to the end of Book 2!");
      t1 = space();
      p1 = element("p");
      t2 = text("That's as far as things go for the moment, but Book 3 is on\n\t\t\t\t\tthe way out soon!");
      t3 = space();
      p2 = element("p");
      t4 = text("While you wait, feel free to jump on the mailing list, or ");
      a = element("a");
      t5 = text("flick me some money to keep the wheels rolling!");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "Congrats! You've made it to the end of Book 2!");
      p0_nodes.forEach(detach_dev);
      t1 = claim_space(div_nodes);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      t2 = claim_text(p1_nodes, "That's as far as things go for the moment, but Book 3 is on\n\t\t\t\t\tthe way out soon!");
      p1_nodes.forEach(detach_dev);
      t3 = claim_space(div_nodes);
      p2 = claim_element(div_nodes, "P", {});
      var p2_nodes = children(p2);
      t4 = claim_text(p2_nodes, "While you wait, feel free to jump on the mailing list, or ");
      a = claim_element(p2_nodes, "A", {
        href: true,
        rel: true,
        class: true
      });
      var a_nodes = children(a);
      t5 = claim_text(a_nodes, "flick me some money to keep the wheels rolling!");
      a_nodes.forEach(detach_dev);
      p2_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p0, file, 132, 4, 4425);
      add_location(p1, file, 133, 4, 4483);
      attr_dev(a, "href", "https://transactions.sendowl.com/products/78458726/77A44CD1/add_to_cart");
      attr_dev(a, "rel", "nofollow");
      attr_dev(a, "class", "border-b border-oblivious-dark");
      add_location(a, file, 138, 63, 4655);
      add_location(p2, file, 137, 4, 4588);
      attr_dev(div, "class", "text-center font-header mt-8");
      add_location(div, file, 131, 3, 4378);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, p0);
      append_dev(p0, t0);
      append_dev(div, t1);
      append_dev(div, p1);
      append_dev(p1, t2);
      append_dev(div, t3);
      append_dev(div, p2);
      append_dev(p2, t4);
      append_dev(p2, a);
      append_dev(a, t5);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(131:2) {:else}",
    ctx: ctx
  });
  return block;
} // (110:2) {#if next[0] < 3}


function create_if_block_2(ctx) {
  var div;
  var a;
  var t0;
  var t1_value = (
  /*nextChapterExists*/
  ctx[3] ? "Chapter" : "Book") + "";
  var t1;
  var a_href_value;
  var t2;
  var if_block =
  /*next*/
  ctx[9][1] > 10 && !(
  /*next*/
  ctx[9][1] % 5) && create_if_block_3(ctx);
  var block = {
    c: function create() {
      div = element("div");
      a = element("a");
      t0 = text("Next ");
      t1 = text(t1_value);
      t2 = space();
      if (if_block) if_block.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      a = claim_element(div_nodes, "A", {
        rel: true,
        href: true,
        class: true
      });
      var a_nodes = children(a);
      t0 = claim_text(a_nodes, "Next ");
      t1 = claim_text(a_nodes, t1_value);
      a_nodes.forEach(detach_dev);
      t2 = claim_space(div_nodes);
      if (if_block) if_block.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "rel", "prefetch");
      attr_dev(a, "href", a_href_value = "read/" +
      /*next*/
      ctx[9][0] + "/" +
      /*next*/
      ctx[9][1]);
      attr_dev(a, "class", "inline-block text-lg p-2 rounded-lg no-underline bg-oblivious mr-4");
      add_location(a, file, 111, 4, 3844);
      attr_dev(div, "class", "flex flex-col md:flex-row justify-end items-end mt-8");
      add_location(div, file, 110, 3, 3773);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, a);
      append_dev(a, t0);
      append_dev(a, t1);
      append_dev(div, t2);
      if (if_block) if_block.m(div, null);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*nextChapterExists*/
      8 && t1_value !== (t1_value = (
      /*nextChapterExists*/
      ctx[3] ? "Chapter" : "Book") + "")) set_data_dev(t1, t1_value);

      if (dirty &
      /*next*/
      512 && a_href_value !== (a_href_value = "read/" +
      /*next*/
      ctx[9][0] + "/" +
      /*next*/
      ctx[9][1])) {
        attr_dev(a, "href", a_href_value);
      }

      if (
      /*next*/
      ctx[9][1] > 10 && !(
      /*next*/
      ctx[9][1] % 5)) {
        if (if_block) ; else {
          if_block = create_if_block_3(ctx);
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if (if_block) if_block.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_2.name,
    type: "if",
    source: "(110:2) {#if next[0] < 3}",
    ctx: ctx
  });
  return block;
} // (119:4) {#if next[1] > 10 && !(next[1] % 5)}


function create_if_block_3(ctx) {
  var span;
  var t0;
  var a;
  var t1;
  var block = {
    c: function create() {
      span = element("span");
      t0 = text("... or ");
      a = element("a");
      t1 = text("flick me some money!");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "... or ");
      a = claim_element(span_nodes, "A", {
        href: true,
        rel: true,
        class: true
      });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "flick me some money!");
      a_nodes.forEach(detach_dev);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "href", "https://transactions.sendowl.com/products/78458726/77A44CD1/add_to_cart");
      attr_dev(a, "rel", "nofollow");
      attr_dev(a, "class", "border-b border-oblivious-dark");
      add_location(a, file, 120, 13, 4128);
      attr_dev(span, "class", "m-2");
      add_location(span, file, 119, 5, 4096);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t0);
      append_dev(span, a);
      append_dev(a, t1);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_3.name,
    type: "if",
    source: "(119:4) {#if next[1] > 10 && !(next[1] % 5)}",
    ctx: ctx
  });
  return block;
} // (151:0) {#if showPhotoBox}


function create_if_block_1(ctx) {
  var div;
  var div_intro;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "fixed inset-0 flex justify-center items-center cursor-zoom-out bg-oblivious-opaque");
      add_location(div, file, 151, 1, 5010);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      /*div_binding*/

      ctx[17](div);

      if (!mounted) {
        dispose = listen_dev(div, "click",
        /*click_handler_1*/
        ctx[18], false, false, false);
        mounted = true;
      }
    },
    p: noop,
    i: function intro(local) {
      if (!div_intro) {
        add_render_callback(function () {
          div_intro = create_in_transition(div, fade, {});
          div_intro.start();
        });
      }
    },
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      /*div_binding*/

      ctx[17](null);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(151:0) {#if showPhotoBox}",
    ctx: ctx
  });
  return block;
} // (159:0) {#if $giveScrollHint}


function create_if_block(ctx) {
  var div2;
  var div1;
  var p0;
  var t0;
  var t1;
  var p1;
  var t2;
  var t3;
  var p2;
  var t4;
  var t5;
  var p3;
  var t6;
  var t7;
  var p4;
  var t8;
  var t9;
  var div0;
  var span;
  var t10;
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
      t0 = text("Here's some tips:");
      t1 = space();
      p1 = element("p");
      t2 = text("Tap the text to turn the pages.");
      t3 = space();
      p2 = element("p");
      t4 = text("Tap the images to zoom.");
      t5 = space();
      p3 = element("p");
      t6 = text("I'll help you out by keeping track of where you're up to.");
      t7 = space();
      p4 = element("p");
      t8 = text("I'll also scroll automatically to where the pages are so you\n\t\t\t\tdon't have to bother your finger...");
      t9 = space();
      div0 = element("div");
      span = element("span");
      t10 = text("Got it");
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
      t0 = claim_text(p0_nodes, "Here's some tips:");
      p0_nodes.forEach(detach_dev);
      t1 = claim_space(div1_nodes);
      p1 = claim_element(div1_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t2 = claim_text(p1_nodes, "Tap the text to turn the pages.");
      p1_nodes.forEach(detach_dev);
      t3 = claim_space(div1_nodes);
      p2 = claim_element(div1_nodes, "P", {
        class: true
      });
      var p2_nodes = children(p2);
      t4 = claim_text(p2_nodes, "Tap the images to zoom.");
      p2_nodes.forEach(detach_dev);
      t5 = claim_space(div1_nodes);
      p3 = claim_element(div1_nodes, "P", {
        class: true
      });
      var p3_nodes = children(p3);
      t6 = claim_text(p3_nodes, "I'll help you out by keeping track of where you're up to.");
      p3_nodes.forEach(detach_dev);
      t7 = claim_space(div1_nodes);
      p4 = claim_element(div1_nodes, "P", {
        class: true
      });
      var p4_nodes = children(p4);
      t8 = claim_text(p4_nodes, "I'll also scroll automatically to where the pages are so you\n\t\t\t\tdon't have to bother your finger...");
      p4_nodes.forEach(detach_dev);
      t9 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      span = claim_element(div0_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t10 = claim_text(span_nodes, "Got it");
      span_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p0, "class", "font-header text-xl md:text-2xl mb-4");
      add_location(p0, file, 167, 3, 5432);
      attr_dev(p1, "class", "font-sans text-base md:text-lg mb-1");
      add_location(p1, file, 170, 3, 5514);
      attr_dev(p2, "class", "font-sans text-base md:text-lg mb-1");
      add_location(p2, file, 173, 3, 5609);
      attr_dev(p3, "class", "font-sans text-base md:text-lg mb-1");
      add_location(p3, file, 176, 3, 5696);
      attr_dev(p4, "class", "font-sans text-base md:text-lg mb-1");
      add_location(p4, file, 179, 3, 5817);
      attr_dev(span, "class", "inline-block text-base md:text-lg p-2 rounded-lg no-underline bg-oblivious cursor-pointer");
      add_location(span, file, 184, 4, 5991);
      add_location(div0, file, 183, 3, 5981);
      attr_dev(div1, "class", "rounded-lg bg-white p-2 md:p-16 flex flex-col text-center m-2");
      add_location(div1, file, 164, 2, 5347);
      attr_dev(div2, "class", "fixed inset-0 flex justify-center items-center bg-oblivious-opaque z-10");
      add_location(div2, file, 159, 1, 5216);
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
      append_dev(div1, p2);
      append_dev(p2, t4);
      append_dev(div1, t5);
      append_dev(div1, p3);
      append_dev(p3, t6);
      append_dev(div1, t7);
      append_dev(div1, p4);
      append_dev(p4, t8);
      append_dev(div1, t9);
      append_dev(div1, div0);
      append_dev(div0, span);
      append_dev(span, t10);
      current = true;

      if (!mounted) {
        dispose = listen_dev(span, "click",
        /*click_handler_2*/
        ctx[19], false, false, false);
        mounted = true;
      }
    },
    p: noop,
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
    id: create_if_block.name,
    type: "if",
    source: "(159:0) {#if $giveScrollHint}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var title_value;
  var t0;
  var article;
  var h2;
  var t1;
  var t2;
  var t3;
  var t4;
  var t5;
  var div0;
  var html_tag;
  var t6;
  var div0_style_value;
  var t7;
  var div1;
  var t8;
  var t9;
  var t10;
  var if_block2_anchor;
  var current;
  var mounted;
  var dispose;
  document_1.title = title_value = "Oblivious | Book " +
  /*book*/
  ctx[1] + ", Chapter " +
  /*chapter*/
  ctx[2] + " | An overlanding motorbike journey\n\t\tthrough West Africa";

  function select_block_type(ctx, dirty) {
    if (
    /*next*/
    ctx[9][0] < 3) return create_if_block_2;
    return create_else_block;
  }

  var current_block_type = select_block_type(ctx);
  var if_block0 = current_block_type(ctx);
  var if_block1 =
  /*showPhotoBox*/
  ctx[8] && create_if_block_1(ctx);
  var if_block2 =
  /*$giveScrollHint*/
  ctx[10] && create_if_block(ctx);
  var block = {
    c: function create() {
      t0 = space();
      article = element("article");
      h2 = element("h2");
      t1 = text("Book ");
      t2 = text(
      /*book*/
      ctx[1]);
      t3 = text(", Chapter ");
      t4 = text(
      /*chapter*/
      ctx[2]);
      t5 = space();
      div0 = element("div");
      t6 = space();
      if_block0.c();
      t7 = space();
      div1 = element("div");
      t8 = text("Oblivious | Luke Gelmi");
      t9 = space();
      if (if_block1) if_block1.c();
      t10 = space();
      if (if_block2) if_block2.c();
      if_block2_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-ngr10r\"]", document_1.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      article = claim_element(nodes, "ARTICLE", {
        class: true
      });
      var article_nodes = children(article);
      h2 = claim_element(article_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Book ");
      t2 = claim_text(h2_nodes,
      /*book*/
      ctx[1]);
      t3 = claim_text(h2_nodes, ", Chapter ");
      t4 = claim_text(h2_nodes,
      /*chapter*/
      ctx[2]);
      h2_nodes.forEach(detach_dev);
      t5 = claim_space(article_nodes);
      div0 = claim_element(article_nodes, "DIV", {
        class: true,
        style: true
      });
      var div0_nodes = children(div0);
      t6 = claim_space(div0_nodes);
      if_block0.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      t7 = claim_space(article_nodes);
      div1 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      t8 = claim_text(div1_nodes, "Oblivious | Luke Gelmi");
      div1_nodes.forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      t9 = claim_space(nodes);
      if (if_block1) if_block1.l(nodes);
      t10 = claim_space(nodes);
      if (if_block2) if_block2.l(nodes);
      if_block2_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      var _ctx$;

      attr_dev(h2, "class", "font-header");
      add_location(h2, file, 99, 1, 3397);
      html_tag = new HtmlTag(t6);
      attr_dev(div0, "class", "max-h-screen overflow-hidden overflow-x-scroll no-scrollbar py-12 svelte-sokgus");
      attr_dev(div0, "style", div0_style_value = (
      /*readerBounds*/
      (_ctx$ = ctx[5]) === null || _ctx$ === void 0 ? void 0 : _ctx$.width) ? "columns: auto ".concat(
      /*readerWidth*/
      ctx[6], "px; column-gap: ").concat(
      /*columnGap*/
      ctx[11], "px; column-rule: 1px solid #000;") : "");
      add_location(div0, file, 100, 1, 3458);
      attr_dev(div1, "class", "text-xs text-center -mt-10");
      add_location(div1, file, 148, 1, 4910);
      attr_dev(article, "class", "prose md:prose-xl text-justify mb-8 md:mb-12 pt-16");
      add_location(article, file, 98, 0, 3327);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, article, anchor);
      append_dev(article, h2);
      append_dev(h2, t1);
      append_dev(h2, t2);
      append_dev(h2, t3);
      append_dev(h2, t4);
      append_dev(article, t5);
      append_dev(article, div0);
      html_tag.m(
      /*content*/
      ctx[0], div0);
      append_dev(div0, t6);
      if_block0.m(div0, null);
      /*div0_binding*/

      ctx[15](div0);
      append_dev(article, t7);
      append_dev(article, div1);
      append_dev(div1, t8);
      insert_dev(target, t9, anchor);
      if (if_block1) if_block1.m(target, anchor);
      insert_dev(target, t10, anchor);
      if (if_block2) if_block2.m(target, anchor);
      insert_dev(target, if_block2_anchor, anchor);
      current = true;

      if (!mounted) {
        dispose = [listen_dev(window_1, "resize",
        /*resize_handler*/
        ctx[14], false, false, false), listen_dev(div0, "click",
        /*click_handler*/
        ctx[16], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ctx$2;

      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if ((!current || dirty &
      /*book, chapter*/
      6) && title_value !== (title_value = "Oblivious | Book " +
      /*book*/
      ctx[1] + ", Chapter " +
      /*chapter*/
      ctx[2] + " | An overlanding motorbike journey\n\t\tthrough West Africa")) {
        document_1.title = title_value;
      }

      if (!current || dirty &
      /*book*/
      2) set_data_dev(t2,
      /*book*/
      ctx[1]);
      if (!current || dirty &
      /*chapter*/
      4) set_data_dev(t4,
      /*chapter*/
      ctx[2]);
      if (!current || dirty &
      /*content*/
      1) html_tag.p(
      /*content*/
      ctx[0]);

      if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block0) {
        if_block0.p(ctx, dirty);
      } else {
        if_block0.d(1);
        if_block0 = current_block_type(ctx);

        if (if_block0) {
          if_block0.c();
          if_block0.m(div0, null);
        }
      }

      if (!current || dirty &
      /*readerBounds, readerWidth*/
      96 && div0_style_value !== (div0_style_value = (
      /*readerBounds*/
      (_ctx$2 = ctx[5]) === null || _ctx$2 === void 0 ? void 0 : _ctx$2.width) ? "columns: auto ".concat(
      /*readerWidth*/
      ctx[6], "px; column-gap: ").concat(
      /*columnGap*/
      ctx[11], "px; column-rule: 1px solid #000;") : "")) {
        attr_dev(div0, "style", div0_style_value);
      }

      if (
      /*showPhotoBox*/
      ctx[8]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);

          if (dirty &
          /*showPhotoBox*/
          256) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(t10.parentNode, t10);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }

      if (
      /*$giveScrollHint*/
      ctx[10]) {
        if (if_block2) {
          if_block2.p(ctx, dirty);

          if (dirty &
          /*$giveScrollHint*/
          1024) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block(ctx);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, function () {
          if_block2 = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block1);
      transition_in(if_block2);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block2);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(article);
      if_block0.d();
      /*div0_binding*/

      ctx[15](null);
      if (detaching) detach_dev(t9);
      if (if_block1) if_block1.d(detaching);
      if (detaching) detach_dev(t10);
      if (if_block2) if_block2.d(detaching);
      if (detaching) detach_dev(if_block2_anchor);
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
    var _params$slug$map, _params$slug$map2, bookNumber, chapterNumber, res, _yield$res$json, chapter, nextChapterExists, message;

    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // the `slug` parameter is available because
            // this file is called [slug].svelte
            _params$slug$map = params.slug.map(function (string) {
              return +string;
            }), _params$slug$map2 = _slicedToArray(_params$slug$map, 2), bookNumber = _params$slug$map2[0], chapterNumber = _params$slug$map2[1];
            _context.next = 3;
            return this.fetch("read/".concat(bookNumber, "/").concat(chapterNumber, ".json"));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            _yield$res$json = _context.sent;
            chapter = _yield$res$json.chapter;
            nextChapterExists = _yield$res$json.nextChapterExists;
            message = _yield$res$json.message;

            if (!(res.status === 200)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", {
              content: chapter,
              book: bookNumber,
              chapter: chapterNumber,
              nextChapterExists: nextChapterExists
            });

          case 14:
            this.error(res.status, message);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
}

function instance($$self, $$props, $$invalidate) {
  var $giveScrollHint;
  validate_store(giveScrollHint, "giveScrollHint");
  component_subscribe($$self, giveScrollHint, function ($$value) {
    return $$invalidate(10, $giveScrollHint = $$value);
  });
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("U5B_slugu5D", slots, []);
  var content = $$props.content;
  var book = $$props.book;
  var chapter = $$props.chapter;
  var nextChapterExists = $$props.nextChapterExists;
  var reader;
  var readerBounds;
  var readerWidth;
  var columnGap = 50;
  var photoBox;
  var showPhotoBox = false;
  var next;

  var setReaderBounds = function setReaderBounds() {
    $$invalidate(5, readerBounds = reader.getBoundingClientRect());
    $$invalidate(6, readerWidth = Math.round(readerBounds.width));
  };

  var handleClick = function handleClick(_ref4) {
    var clientX = _ref4.clientX,
        target = _ref4.target;

    if (target.tagName === "IMG") {
      $$invalidate(8, showPhotoBox = true);
      setTimeout(function () {
        $$invalidate(7, photoBox.innerHTML = target.outerHTML, photoBox);
        console.log(showPhotoBox);
      }, 1);
    } else if (clientX && readerBounds && readerBounds.left && readerWidth && !(reader.scrollLeft % (readerWidth + columnGap) > 2)) {
      var midwayScreenX = readerBounds.left + readerWidth / 2;
      var scrollDistance = readerWidth + columnGap;
      reader.scrollBy({
        top: 0,
        left: (clientX <= midwayScreenX ? -1 : 1) * scrollDistance,
        behavior: "smooth"
      });
    }
  };

  onMount(function () {
    setTimeout(function () {
      setReaderBounds();
    }, 600);
    setTimeout(function () {
      setReaderBounds();
      var readerTop = (window.pageYOffset || document.documentElement.scrollTop) + readerBounds.top;
      window.scrollTo({
        top: readerTop,
        behavior: "smooth"
      });
    }, 2500);
  });
  var writable_props = ["content", "book", "chapter", "nextChapterExists"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn("<U5B_slugu5D> was created with unknown prop '".concat(key, "'"));
  });

  var resize_handler = function resize_handler() {
    return setReaderBounds();
  };

  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      reader = $$value;
      $$invalidate(4, reader);
    });
  }

  var click_handler = function click_handler(e) {
    return handleClick(e);
  };

  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      photoBox = $$value;
      $$invalidate(7, photoBox);
    });
  }

  var click_handler_1 = function click_handler_1() {
    return $$invalidate(8, showPhotoBox = false);
  };

  var click_handler_2 = function click_handler_2() {
    giveScrollHint.set(false);
  };

  $$self.$$set = function ($$props) {
    if ("content" in $$props) $$invalidate(0, content = $$props.content);
    if ("book" in $$props) $$invalidate(1, book = $$props.book);
    if ("chapter" in $$props) $$invalidate(2, chapter = $$props.chapter);
    if ("nextChapterExists" in $$props) $$invalidate(3, nextChapterExists = $$props.nextChapterExists);
  };

  $$self.$capture_state = function () {
    return {
      __awaiter: __awaiter,
      preload: preload,
      onMount: onMount,
      fade: fade,
      giveScrollHint: giveScrollHint,
      content: content,
      book: book,
      chapter: chapter,
      nextChapterExists: nextChapterExists,
      reader: reader,
      readerBounds: readerBounds,
      readerWidth: readerWidth,
      columnGap: columnGap,
      photoBox: photoBox,
      showPhotoBox: showPhotoBox,
      next: next,
      setReaderBounds: setReaderBounds,
      handleClick: handleClick,
      $giveScrollHint: $giveScrollHint
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("content" in $$props) $$invalidate(0, content = $$props.content);
    if ("book" in $$props) $$invalidate(1, book = $$props.book);
    if ("chapter" in $$props) $$invalidate(2, chapter = $$props.chapter);
    if ("nextChapterExists" in $$props) $$invalidate(3, nextChapterExists = $$props.nextChapterExists);
    if ("reader" in $$props) $$invalidate(4, reader = $$props.reader);
    if ("readerBounds" in $$props) $$invalidate(5, readerBounds = $$props.readerBounds);
    if ("readerWidth" in $$props) $$invalidate(6, readerWidth = $$props.readerWidth);
    if ("columnGap" in $$props) $$invalidate(11, columnGap = $$props.columnGap);
    if ("photoBox" in $$props) $$invalidate(7, photoBox = $$props.photoBox);
    if ("showPhotoBox" in $$props) $$invalidate(8, showPhotoBox = $$props.showPhotoBox);
    if ("next" in $$props) $$invalidate(9, next = $$props.next);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*nextChapterExists, book, chapter*/
    14) {
       $$invalidate(9, next = !nextChapterExists && book < 3 ? [book + 1, 1] : [book, chapter + 1]);
    }
  };

  return [content, book, chapter, nextChapterExists, reader, readerBounds, readerWidth, photoBox, showPhotoBox, next, $giveScrollHint, columnGap, setReaderBounds, handleClick, resize_handler, div0_binding, click_handler, div_binding, click_handler_1, click_handler_2];
}

var U5B_slugu5D = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(U5B_slugu5D, _SvelteComponentDev);

  var _super = _createSuper(U5B_slugu5D);

  function U5B_slugu5D(options) {
    var _this;

    _classCallCheck(this, U5B_slugu5D);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      content: 0,
      book: 1,
      chapter: 2,
      nextChapterExists: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "U5B_slugu5D",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*content*/
    ctx[0] === undefined && !("content" in props)) {
      console_1.warn("<U5B_slugu5D> was created without expected prop 'content'");
    }

    if (
    /*book*/
    ctx[1] === undefined && !("book" in props)) {
      console_1.warn("<U5B_slugu5D> was created without expected prop 'book'");
    }

    if (
    /*chapter*/
    ctx[2] === undefined && !("chapter" in props)) {
      console_1.warn("<U5B_slugu5D> was created without expected prop 'chapter'");
    }

    if (
    /*nextChapterExists*/
    ctx[3] === undefined && !("nextChapterExists" in props)) {
      console_1.warn("<U5B_slugu5D> was created without expected prop 'nextChapterExists'");
    }

    return _this;
  }

  _createClass(U5B_slugu5D, [{
    key: "content",
    get: function get() {
      throw new Error("<U5B_slugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5B_slugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "book",
    get: function get() {
      throw new Error("<U5B_slugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5B_slugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "chapter",
    get: function get() {
      throw new Error("<U5B_slugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5B_slugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "nextChapterExists",
    get: function get() {
      throw new Error("<U5B_slugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5B_slugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return U5B_slugu5D;
}(SvelteComponentDev);

export default U5B_slugu5D;
export { preload };
