import { L as regenerator, x as _slicedToArray, _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, M as _createClass, S as SvelteComponentDev, s as safe_not_equal, a3 as globals, g as element, j as claim_element, k as children, m as detach_dev, p as attr_dev, q as add_location, r as insert_dev, w as listen_dev, K as noop, h as space, t as text, P as empty, E as query_selector_all, l as claim_space, n as claim_text, a4 as HtmlTag, u as append_dev, y as set_data_dev, H as transition_in, I as transition_out, R as check_outros, B as run_all, U as validate_store, V as component_subscribe, v as validate_slots, W as stores$1, a5 as onMount, f as fade, z as add_render_callback, X as create_in_transition, a0 as group_outros, a6 as binding_callbacks, O as create_out_transition } from './client.d37a368b.js';
import { g as giveScrollHint, r as readerPosition } from './reader-hints.e93b29f0.js';

function smoothScroll(element, initial, final, duration, callback = null) {
    let startTime;
    const scrollOnNextTick = timestamp => {
        const runTime = timestamp - startTime;
        const progress = runTime / duration;
        const newPosition = [
            initial[0] + (final[0] - initial[0]) * progress,
            initial[1] + (final[1] - initial[1]) * progress
        ];
        if (runTime < duration) {
            element.scrollTo(newPosition[0], newPosition[1]);
            requestAnimationFrame(scrollOnNextTick);
        }
        else {
            element.scrollTo(final[0], final[1]);
            if (callback) {
                callback();
            }
        }
    };
    requestAnimationFrame((timestamp) => {
        startTime = timestamp;
        scrollOnNextTick(timestamp);
    });
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var document_1 = globals.document,
    window_1 = globals.window;
var file = "src/routes/read/[...slug].svelte"; // (215:2) {:else}

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
  var mounted;
  var dispose;
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
      t4 = text("While you wait, feel free to jump on the mailing list, or maybe even ");
      a = element("a");
      t5 = text("buy me a coffee!");
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
      t4 = claim_text(p2_nodes, "While you wait, feel free to jump on the mailing list, or maybe even ");
      a = claim_element(p2_nodes, "A", {
        href: true,
        rel: true,
        class: true
      });
      var a_nodes = children(a);
      t5 = claim_text(a_nodes, "buy me a coffee!");
      a_nodes.forEach(detach_dev);
      p2_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p0, file, 216, 4, 7987);
      add_location(p1, file, 217, 4, 8045);
      attr_dev(a, "href", "https://transactions.sendowl.com/products/78458726/77A44CD1/add_to_cart");
      attr_dev(a, "rel", "nofollow");
      attr_dev(a, "class", "border-b border-oblivious-dark");
      add_location(a, file, 222, 74, 8228);
      add_location(p2, file, 221, 4, 8150);
      attr_dev(div, "class", "text-center font-header mt-8");
      add_location(div, file, 215, 3, 7940);
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

      if (!mounted) {
        dispose = listen_dev(a, "click", click_handler_2, false, false, false);
        mounted = true;
      }
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(215:2) {:else}",
    ctx: ctx
  });
  return block;
} // (194:2) {#if next[0] < 3}


function create_if_block_3(ctx) {
  var div;
  var a;
  var t0;
  var t1_value = (
  /*nextChapterExists*/
  ctx[3] ? "Chapter" : "Book") + "";
  var t1;
  var a_href_value;
  var t2;
  var mounted;
  var dispose;
  var if_block =
  /*next*/
  ctx[10][1] > 10 && !(
  /*next*/
  ctx[10][1] % 5) && create_if_block_4(ctx);
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
      ctx[10][0] + "/" +
      /*next*/
      ctx[10][1]);
      attr_dev(a, "class", "inline-block text-lg p-2 rounded-lg no-underline bg-oblivious");
      add_location(a, file, 195, 4, 7307);
      attr_dev(div, "class", "flex flex-col md:flex-row justify-end items-end mt-8");
      add_location(div, file, 194, 3, 7236);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, a);
      append_dev(a, t0);
      append_dev(a, t1);
      append_dev(div, t2);
      if (if_block) if_block.m(div, null);

      if (!mounted) {
        dispose = listen_dev(a, "click", click_handler, false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*nextChapterExists*/
      8 && t1_value !== (t1_value = (
      /*nextChapterExists*/
      ctx[3] ? "Chapter" : "Book") + "")) set_data_dev(t1, t1_value);

      if (dirty[0] &
      /*next*/
      1024 && a_href_value !== (a_href_value = "read/" +
      /*next*/
      ctx[10][0] + "/" +
      /*next*/
      ctx[10][1])) {
        attr_dev(a, "href", a_href_value);
      }

      if (
      /*next*/
      ctx[10][1] > 10 && !(
      /*next*/
      ctx[10][1] % 5)) {
        if (if_block) ; else {
          if_block = create_if_block_4(ctx);
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
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_3.name,
    type: "if",
    source: "(194:2) {#if next[0] < 3}",
    ctx: ctx
  });
  return block;
} // (204:4) {#if next[1] > 10 && !(next[1] % 5)}


function create_if_block_4(ctx) {
  var a;
  var t;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      a = element("a");
      t = text("Or buy me a coffee!");
      this.h();
    },
    l: function claim(nodes) {
      a = claim_element(nodes, "A", {
        href: true,
        rel: true,
        class: true
      });
      var a_nodes = children(a);
      t = claim_text(a_nodes, "Or buy me a coffee!");
      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "href", "https://transactions.sendowl.com/products/78458726/77A44CD1/add_to_cart");
      attr_dev(a, "rel", "nofollow");
      attr_dev(a, "class", "inline-block text-lg p-2 mx-4 rounded-lg no-underline bg-white border border-solid border-oblivious");
      add_location(a, file, 204, 5, 7597);
    },
    m: function mount(target, anchor) {
      insert_dev(target, a, anchor);
      append_dev(a, t);

      if (!mounted) {
        dispose = listen_dev(a, "click", click_handler_1, false, false, false);
        mounted = true;
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(a);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_4.name,
    type: "if",
    source: "(204:4) {#if next[1] > 10 && !(next[1] % 5)}",
    ctx: ctx
  });
  return block;
} // (236:0) {#if showPhotoBox}


function create_if_block_2(ctx) {
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
      add_location(div, file, 236, 1, 8597);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      /*div_binding*/

      ctx[19](div);

      if (!mounted) {
        dispose = listen_dev(div, "click",
        /*click_handler_3*/
        ctx[20], false, false, false);
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

      ctx[19](null);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_2.name,
    type: "if",
    source: "(236:0) {#if showPhotoBox}",
    ctx: ctx
  });
  return block;
} // (280:31) 


function create_if_block_1(ctx) {
  var div2;
  var div1;
  var p;
  var t0;
  var t1;
  var div0;
  var button0;
  var t2;
  var t3;
  var button1;
  var t4;
  var div2_intro;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      div2 = element("div");
      div1 = element("div");
      p = element("p");
      t0 = text("Want to jump to the last page you were reading?");
      t1 = space();
      div0 = element("div");
      button0 = element("button");
      t2 = text("Sure");
      t3 = space();
      button1 = element("button");
      t4 = text("Nup");
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
      p = claim_element(div1_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "Want to jump to the last page you were reading?");
      p_nodes.forEach(detach_dev);
      t1 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      button0 = claim_element(div0_nodes, "BUTTON", {
        class: true
      });
      var button0_nodes = children(button0);
      t2 = claim_text(button0_nodes, "Sure");
      button0_nodes.forEach(detach_dev);
      t3 = claim_space(div0_nodes);
      button1 = claim_element(div0_nodes, "BUTTON", {
        class: true
      });
      var button1_nodes = children(button1);
      t4 = claim_text(button1_nodes, "Nup");
      button1_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "font-sans text-base md:text-lg mb-4");
      add_location(p, file, 287, 3, 10041);
      attr_dev(button0, "class", "inline-block text-base md:text-lg p-2 rounded-lg no-underline bg-oblivious");
      add_location(button0, file, 291, 4, 10162);
      attr_dev(button1, "class", "inline-block text-base md:text-lg p-2 rounded-lg no-underline bg-white border border-solid border-oblivious cursor-pointer");
      add_location(button1, file, 299, 4, 10379);
      add_location(div0, file, 290, 3, 10152);
      attr_dev(div1, "class", "rounded-lg bg-white p-2 md:p-16 flex flex-col text-center m-2");
      add_location(div1, file, 284, 2, 9956);
      attr_dev(div2, "class", "fixed inset-0 flex justify-center items-center bg-oblivious-opaque z-10");
      add_location(div2, file, 280, 1, 9836);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div2, anchor);
      append_dev(div2, div1);
      append_dev(div1, p);
      append_dev(p, t0);
      append_dev(div1, t1);
      append_dev(div1, div0);
      append_dev(div0, button0);
      append_dev(button0, t2);
      append_dev(div0, t3);
      append_dev(div0, button1);
      append_dev(button1, t4);

      if (!mounted) {
        dispose = [listen_dev(button0, "click",
        /*click_handler_5*/
        ctx[22], false, false, false), listen_dev(button1, "click",
        /*click_handler_6*/
        ctx[23], false, false, false)];
        mounted = true;
      }
    },
    p: noop,
    i: function intro(local) {
      if (!div2_intro) {
        add_render_callback(function () {
          div2_intro = create_in_transition(div2, fade, {
            delay: 1000
          });
          div2_intro.start();
        });
      }
    },
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div2);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(280:31) ",
    ctx: ctx
  });
  return block;
} // (244:0) {#if $giveScrollHint}


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
      add_location(p0, file, 252, 3, 9019);
      attr_dev(p1, "class", "font-sans text-base md:text-lg mb-1");
      add_location(p1, file, 255, 3, 9101);
      attr_dev(p2, "class", "font-sans text-base md:text-lg mb-1");
      add_location(p2, file, 258, 3, 9196);
      attr_dev(p3, "class", "font-sans text-base md:text-lg mb-1");
      add_location(p3, file, 261, 3, 9283);
      attr_dev(p4, "class", "font-sans text-base md:text-lg mb-1");
      add_location(p4, file, 264, 3, 9404);
      attr_dev(span, "class", "inline-block text-base md:text-lg p-2 rounded-lg no-underline bg-oblivious cursor-pointer");
      add_location(span, file, 269, 4, 9578);
      add_location(div0, file, 268, 3, 9568);
      attr_dev(div1, "class", "rounded-lg bg-white p-2 md:p-16 flex flex-col text-center m-2");
      add_location(div1, file, 249, 2, 8934);
      attr_dev(div2, "class", "fixed inset-0 flex justify-center items-center bg-oblivious-opaque z-10");
      add_location(div2, file, 244, 1, 8803);
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
        /*click_handler_4*/
        ctx[21], false, false, false);
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
    source: "(244:0) {#if $giveScrollHint}",
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
  var current_block_type_index;
  var if_block2;
  var if_block2_anchor;
  var current;
  var mounted;
  var dispose;
  document_1.title = title_value = "Oblivious | Book " +
  /*book*/
  ctx[1] + ", Chapter " +
  /*chapter*/
  ctx[2] + " | An overlanding motorbike journey through West Africa";

  function select_block_type(ctx, dirty) {
    if (
    /*next*/
    ctx[10][0] < 3) return create_if_block_3;
    return create_else_block;
  }

  var current_block_type = select_block_type(ctx);
  var if_block0 = current_block_type(ctx);
  var if_block1 =
  /*showPhotoBox*/
  ctx[8] && create_if_block_2(ctx);
  var if_block_creators = [create_if_block, create_if_block_1];
  var if_blocks = [];

  function select_block_type_1(ctx, dirty) {
    if (
    /*$giveScrollHint*/
    ctx[11]) return 0;
    if (
    /*shouldJumpToPosition*/
    ctx[9]) return 1;
    return -1;
  }

  if (~(current_block_type_index = select_block_type_1(ctx))) {
    if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }

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
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1uu6ren\"]", document_1.head);
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
      attr_dev(h2, "class", "font-header");
      add_location(h2, file, 183, 1, 6850);
      html_tag = new HtmlTag(t6);
      attr_dev(div0, "class", "reader relative overflow-hidden no-scrollbar py-12 svelte-sokgus");
      attr_dev(div0, "style", div0_style_value =
      /*readerWidth*/
      ctx[5] &&
      /*readerHeight*/
      ctx[6] ? "height: ".concat(
      /*readerHeight*/
      ctx[6], "px; columns: auto ").concat(
      /*readerWidth*/
      ctx[5], "px; column-gap: ").concat(
      /*columnGap*/
      ctx[12], "px; column-rule: 1px solid #000;") : "");
      add_location(div0, file, 184, 1, 6911);
      attr_dev(div1, "class", "text-xs text-center -mt-10");
      add_location(div1, file, 233, 1, 8497);
      attr_dev(article, "class", "prose md:prose-xl text-justify mb-8 md:mb-12 pt-16");
      add_location(article, file, 182, 0, 6780);
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

      ctx[18](div0);
      append_dev(article, t7);
      append_dev(article, div1);
      append_dev(div1, t8);
      insert_dev(target, t9, anchor);
      if (if_block1) if_block1.m(target, anchor);
      insert_dev(target, t10, anchor);

      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(target, anchor);
      }

      insert_dev(target, if_block2_anchor, anchor);
      current = true;

      if (!mounted) {
        dispose = [listen_dev(window_1, "resize",
        /*resize_handler*/
        ctx[17], false, false, false), listen_dev(div0, "click",
        /*handleClick*/
        ctx[15], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if ((!current || dirty[0] &
      /*book, chapter*/
      6) && title_value !== (title_value = "Oblivious | Book " +
      /*book*/
      ctx[1] + ", Chapter " +
      /*chapter*/
      ctx[2] + " | An overlanding motorbike journey through West Africa")) {
        document_1.title = title_value;
      }

      if (!current || dirty[0] &
      /*book*/
      2) set_data_dev(t2,
      /*book*/
      ctx[1]);
      if (!current || dirty[0] &
      /*chapter*/
      4) set_data_dev(t4,
      /*chapter*/
      ctx[2]);
      if (!current || dirty[0] &
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

      if (!current || dirty[0] &
      /*readerWidth, readerHeight*/
      96 && div0_style_value !== (div0_style_value =
      /*readerWidth*/
      ctx[5] &&
      /*readerHeight*/
      ctx[6] ? "height: ".concat(
      /*readerHeight*/
      ctx[6], "px; columns: auto ").concat(
      /*readerWidth*/
      ctx[5], "px; column-gap: ").concat(
      /*columnGap*/
      ctx[12], "px; column-rule: 1px solid #000;") : "")) {
        attr_dev(div0, "style", div0_style_value);
      }

      if (
      /*showPhotoBox*/
      ctx[8]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);

          if (dirty[0] &
          /*showPhotoBox*/
          256) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_2(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(t10.parentNode, t10);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }

      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx);

      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx, dirty);
        }
      } else {
        if (if_block2) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, function () {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }

        if (~current_block_type_index) {
          if_block2 = if_blocks[current_block_type_index];

          if (!if_block2) {
            if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
            if_block2.c();
          }

          transition_in(if_block2, 1);
          if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
        } else {
          if_block2 = null;
        }
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

      ctx[18](null);
      if (detaching) detach_dev(t9);
      if (if_block1) if_block1.d(detaching);
      if (detaching) detach_dev(t10);

      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d(detaching);
      }

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

function preload(_ref) {
  var params = _ref.params,
      query = _ref.query;
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

function readersPositionHasAdvanced(storedPosition, currentPosition) {
  return (!storedPosition || !storedPosition[0] || !storedPosition[1]) && currentPosition || currentPosition[0] > storedPosition[0] || currentPosition[0] === storedPosition[0] && currentPosition[1] > storedPosition[1];
}

function debounce(fn, delay) {
  var timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn();
    }, delay);
  };
}

var click_handler = function click_handler(e) {
  return e.stopPropagation();
};

var click_handler_1 = function click_handler_1(e) {
  return e.stopPropagation();
};

var click_handler_2 = function click_handler_2(e) {
  return e.stopPropagation();
};

function instance($$self, $$props, $$invalidate) {
  var $page;
  var $readerPosition;
  var $giveScrollHint;
  validate_store(readerPosition, "readerPosition");
  component_subscribe($$self, readerPosition, function ($$value) {
    return $$invalidate(31, $readerPosition = $$value);
  });
  validate_store(giveScrollHint, "giveScrollHint");
  component_subscribe($$self, giveScrollHint, function ($$value) {
    return $$invalidate(11, $giveScrollHint = $$value);
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
  var windowBounds;
  var readerWidth;
  var readerHeight;
  var readerTop;
  var columnGap = 50;
  var resizeTolerance = 100;
  var photoBox;
  var showPhotoBox = false;
  var shouldJumpToPosition = false;
  var next;
  var observer;
  var paragraphElements;

  var _stores = stores$1(),
      page = _stores.page;

  validate_store(page, "page");
  component_subscribe($$self, page, function (value) {
    return $$invalidate(30, $page = value);
  });

  function setReaderBounds() {
    if (reader) {
      windowBounds = [window.innerWidth, window.innerHeight];

      if (!readerBounds || !readerHeight || !readerWidth || windowBounds[0] < readerWidth || windowBounds[1] < readerHeight || windowBounds[0] > readerWidth + resizeTolerance || windowBounds[1] > readerHeight + resizeTolerance) {
        $$invalidate(6, readerHeight = Math.round(windowBounds[1]));
        readerBounds = reader.getBoundingClientRect();
        $$invalidate(5, readerWidth = Math.round(readerBounds.width));
      }
    }
  }

  var snapToPage = function snapToPage() {
    var currentScroll = reader.scrollLeft;
    setTimeout(function () {
      var remainder = reader.scrollLeft % (readerWidth + columnGap);

      if (currentScroll === reader.scrollLeft && remainder) {
        var moveLeft = remainder / (readerWidth + columnGap) < 0.5 ? -remainder : readerWidth + columnGap - remainder; // is current position less than half way across column

        smoothScroll(reader, [reader.scrollLeft, reader.scrollTop], [reader.scrollLeft + moveLeft, reader.scrollLeft], 300);
      }
    }, 50);
  };

  var debouncedSnap = debounce(snapToPage, 1000);

  var handleClick = function handleClick(_ref2) {
    var clientX = _ref2.clientX,
        target = _ref2.target;

    if (target.tagName === "IMG") {
      $$invalidate(8, showPhotoBox = true);
      setTimeout(function () {
        $$invalidate(7, photoBox.innerHTML = target.outerHTML, photoBox);
      }, 1);
    } else if (clientX && readerBounds && readerBounds.left && readerWidth) {
      var midwayScreenX = readerBounds.left + readerWidth / 2;
      var scrollDistance = readerWidth + columnGap;
      smoothScroll(reader, [reader.scrollLeft, reader.scrollTop], [reader.scrollLeft + (clientX <= midwayScreenX ? -1 : 1) * scrollDistance, reader.scrollTop], 300, debouncedSnap);
    }
  };

  function jumpToParagraph() {
    var elementToJumpTo = paragraphElements[$readerPosition[2] - 1];

    if (elementToJumpTo instanceof HTMLElement) {
      smoothScroll(reader, [reader.scrollLeft, reader.scrollTop], [elementToJumpTo.offsetLeft, reader.scrollTop], 300, debouncedSnap);
    }
  }

  function setupObservers() {
    if (paragraphElements && paragraphElements.length > 0) {
      observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting === true) {
          var currentIndex = Array.from(paragraphElements).indexOf(entries[0].target);

          if (currentIndex > -1 && currentIndex > $readerPosition[2] - 1) {
            readerPosition.set([slug[0], slug[1], currentIndex + 1]);
          }
        }
      }, {
        threshold: [0]
      });
      Array.from(paragraphElements).forEach(function (paragraphElement) {
        return observer.observe(paragraphElement);
      });
    }
  }

  onMount(function () {
    paragraphElements = document.querySelectorAll(".reader p");

    if (slug && readersPositionHasAdvanced($readerPosition, slug)) {
      readerPosition.set([slug[0], slug[1], 1]);
      setupObservers();
    } else if ($readerPosition[0] === slug[0] && $readerPosition[1] === slug[1] && $readerPosition[2] > 1) {
      $$invalidate(9, shouldJumpToPosition = true);
      setupObservers();
    } else if ($readerPosition[0] === slug[0] && $readerPosition[1] === slug[1] && $readerPosition[2] === 1) {
      setupObservers();
    }

    setReaderBounds();
    setTimeout(function () {
      setReaderBounds();
      readerTop = (window.pageYOffset || document.documentElement.scrollTop) + readerBounds.top;
      smoothScroll(window, [window.scrollX, window.scrollY], [window.scrollX, readerTop], 600);
    }, 2000);
  });
  var writable_props = ["content", "book", "chapter", "nextChapterExists"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<U5B_slugu5D> was created with unknown prop '".concat(key, "'"));
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

  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      photoBox = $$value;
      $$invalidate(7, photoBox);
    });
  }

  var click_handler_3 = function click_handler_3() {
    return $$invalidate(8, showPhotoBox = false);
  };

  var click_handler_4 = function click_handler_4() {
    giveScrollHint.set(false);
  };

  var click_handler_5 = function click_handler_5() {
    $$invalidate(9, shouldJumpToPosition = false);
    jumpToParagraph();
  };

  var click_handler_6 = function click_handler_6() {
    $$invalidate(9, shouldJumpToPosition = false);
    readerPosition.set([readerPosition[0], readerPosition[1], 1]);
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
      stores: stores$1,
      fade: fade,
      giveScrollHint: giveScrollHint,
      readerPosition: readerPosition,
      smoothScroll: smoothScroll,
      content: content,
      book: book,
      chapter: chapter,
      nextChapterExists: nextChapterExists,
      reader: reader,
      readerBounds: readerBounds,
      windowBounds: windowBounds,
      readerWidth: readerWidth,
      readerHeight: readerHeight,
      readerTop: readerTop,
      columnGap: columnGap,
      resizeTolerance: resizeTolerance,
      photoBox: photoBox,
      showPhotoBox: showPhotoBox,
      shouldJumpToPosition: shouldJumpToPosition,
      next: next,
      observer: observer,
      paragraphElements: paragraphElements,
      page: page,
      readersPositionHasAdvanced: readersPositionHasAdvanced,
      setReaderBounds: setReaderBounds,
      debounce: debounce,
      snapToPage: snapToPage,
      debouncedSnap: debouncedSnap,
      handleClick: handleClick,
      jumpToParagraph: jumpToParagraph,
      setupObservers: setupObservers,
      slug: slug,
      $page: $page,
      $readerPosition: $readerPosition,
      $giveScrollHint: $giveScrollHint
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("content" in $$props) $$invalidate(0, content = $$props.content);
    if ("book" in $$props) $$invalidate(1, book = $$props.book);
    if ("chapter" in $$props) $$invalidate(2, chapter = $$props.chapter);
    if ("nextChapterExists" in $$props) $$invalidate(3, nextChapterExists = $$props.nextChapterExists);
    if ("reader" in $$props) $$invalidate(4, reader = $$props.reader);
    if ("readerBounds" in $$props) readerBounds = $$props.readerBounds;
    if ("windowBounds" in $$props) windowBounds = $$props.windowBounds;
    if ("readerWidth" in $$props) $$invalidate(5, readerWidth = $$props.readerWidth);
    if ("readerHeight" in $$props) $$invalidate(6, readerHeight = $$props.readerHeight);
    if ("readerTop" in $$props) readerTop = $$props.readerTop;
    if ("columnGap" in $$props) $$invalidate(12, columnGap = $$props.columnGap);
    if ("resizeTolerance" in $$props) resizeTolerance = $$props.resizeTolerance;
    if ("photoBox" in $$props) $$invalidate(7, photoBox = $$props.photoBox);
    if ("showPhotoBox" in $$props) $$invalidate(8, showPhotoBox = $$props.showPhotoBox);
    if ("shouldJumpToPosition" in $$props) $$invalidate(9, shouldJumpToPosition = $$props.shouldJumpToPosition);
    if ("next" in $$props) $$invalidate(10, next = $$props.next);
    if ("observer" in $$props) observer = $$props.observer;
    if ("paragraphElements" in $$props) paragraphElements = $$props.paragraphElements;
    if ("slug" in $$props) slug = $$props.slug;
  };

  var slug;

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty[0] &
    /*$page*/
    1073741824) {
       slug = $page.params.slug ? $page.params.slug.map(function (x) {
        return +x;
      }) : null;
    }

    if ($$self.$$.dirty[0] &
    /*nextChapterExists, book, chapter*/
    14) {
       $$invalidate(10, next = !nextChapterExists && book < 3 ? [book + 1, 1] : [book, chapter + 1]);
    }
  };

  return [content, book, chapter, nextChapterExists, reader, readerWidth, readerHeight, photoBox, showPhotoBox, shouldJumpToPosition, next, $giveScrollHint, columnGap, page, setReaderBounds, handleClick, jumpToParagraph, resize_handler, div0_binding, div_binding, click_handler_3, click_handler_4, click_handler_5, click_handler_6];
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
    }, [-1, -1]);
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
      console.warn("<U5B_slugu5D> was created without expected prop 'content'");
    }

    if (
    /*book*/
    ctx[1] === undefined && !("book" in props)) {
      console.warn("<U5B_slugu5D> was created without expected prop 'book'");
    }

    if (
    /*chapter*/
    ctx[2] === undefined && !("chapter" in props)) {
      console.warn("<U5B_slugu5D> was created without expected prop 'chapter'");
    }

    if (
    /*nextChapterExists*/
    ctx[3] === undefined && !("nextChapterExists" in props)) {
      console.warn("<U5B_slugu5D> was created without expected prop 'nextChapterExists'");
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
