import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, D as DownloadBox, s as safe_not_equal, g as element, h as space, t as text, C as create_component, E as query_selector_all, j as claim_element, m as detach_dev, l as claim_space, k as children, n as claim_text, F as claim_component, p as attr_dev, q as add_location, u as append_dev, r as insert_dev, G as mount_component, x as _slicedToArray, H as transition_in, I as transition_out, J as destroy_component, v as validate_slots } from './client.d37a368b.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/about.svelte"; // (52:1) <DownloadBox>

function create_default_slot(ctx) {
  var div;
  var t;
  var block = {
    c: function create() {
      div = element("div");
      t = text("Or download the e-book");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      t = claim_text(div_nodes, "Or download the e-book");
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "inline-block text-xl sm:text-2xl p-4 mx-4 rounded-lg no-underline bg-white border border-solid border-oblivious");
      add_location(div, file, 52, 2, 3855);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, t);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(52:1) <DownloadBox>",
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
  var img0;
  var img0_src_value;
  var t16;
  var p6;
  var t17;
  var em2;
  var t18;
  var t19;
  var t20;
  var p7;
  var t21;
  var em3;
  var t22;
  var t23;
  var em4;
  var t24;
  var t25;
  var t26;
  var p8;
  var t27;
  var em5;
  var t28;
  var t29;
  var t30;
  var p9;
  var t31;
  var t32;
  var img1;
  var img1_src_value;
  var t33;
  var p10;
  var t34;
  var t35;
  var p11;
  var t36;
  var t37;
  var p12;
  var t38;
  var t39;
  var p13;
  var t40;
  var t41;
  var p14;
  var t42;
  var t43;
  var p15;
  var t44;
  var em6;
  var t45;
  var t46;
  var t47;
  var p16;
  var t48;
  var t49;
  var p17;
  var t50;
  var em7;
  var t51;
  var t52;
  var t53;
  var p18;
  var t54;
  var p19;
  var t55;
  var t56;
  var p20;
  var t57;
  var t58;
  var p21;
  var t59;
  var t60;
  var p22;
  var t61;
  var t62;
  var p23;
  var t63;
  var t64;
  var div;
  var a;
  var t65;
  var t66;
  var downloadbox;
  var current;
  downloadbox = new DownloadBox({
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
      img0 = element("img");
      t16 = space();
      p6 = element("p");
      t17 = text("Already, I thought this shit was ");
      em2 = element("em");
      t18 = text("wild");
      t19 = text(".");
      t20 = space();
      p7 = element("p");
      t21 = text("I surprised myself by riding all the way to the northernmost point of Scotland. Then, before I knew it, I was already down to the southermost point of Spain, ");
      em3 = element("em");
      t22 = text("shitting");
      t23 = text(" myself as I looked across ");
      em4 = element("em");
      t24 = text("The Strait");
      t25 = text(" to Africa...");
      t26 = space();
      p8 = element("p");
      t27 = text("From there, well, I guess that's the real story; ");
      em5 = element("em");
      t28 = text("Africa.");
      t29 = text(" On a fucking Royal Enfield...");
      t30 = space();
      p9 = element("p");
      t31 = text("I never planned a moment of any of this; I sure as shit didn't plan on riding though Africa, otherwise my choice of vehicle would have been more sensible. But there I was. And then what happens next is what happens next...");
      t32 = space();
      img1 = element("img");
      t33 = space();
      p10 = element("p");
      t34 = text("I don't want to give the game away for those who haven't read any of the Trilogy yet (it would be retarded to spoil my own book, wouldn't it?)");
      t35 = space();
      p11 = element("p");
      t36 = text("So, what can I say?");
      t37 = space();
      p12 = element("p");
      t38 = text("I can tell you that it was a fucking long ride.");
      t39 = space();
      p13 = element("p");
      t40 = text("I can tell you that a couple of times I thought I was going to die. That's something, isn't it?");
      t41 = space();
      p14 = element("p");
      t42 = text("I can tell you that I killed a guy.");
      t43 = space();
      p15 = element("p");
      t44 = text("I can tell you that I spend more time on ");
      em6 = element("em");
      t45 = text("the throne");
      t46 = text(" than I care to mention.");
      t47 = space();
      p16 = element("p");
      t48 = text("I can tell you that the Enfield was a beast.");
      t49 = space();
      p17 = element("p");
      t50 = text("I can tell you that Africa is fucking ");
      em7 = element("em");
      t51 = text("bananas");
      t52 = text(".");
      t53 = space();
      p18 = element("p");
      t54 = space();
      p19 = element("p");
      t55 = text("Is that enough? Have I sold you on this yet? It's hard for me to tell you what you'll like about the book without knowing what you're here for...");
      t56 = space();
      p20 = element("p");
      t57 = text("If you're here for adventure, you've got it in spades.");
      t58 = space();
      p21 = element("p");
      t59 = text("If you're here to for a laugh, you'll get some of that.");
      t60 = space();
      p22 = element("p");
      t61 = text("If you're here for romance you'll get none of that.");
      t62 = space();
      p23 = element("p");
      t63 = text("If you're here for a good yarn; sit back, and let me take you on the ride.");
      t64 = space();
      div = element("div");
      a = element("a");
      t65 = text("Read the book now");
      t66 = space();
      create_component(downloadbox.$$.fragment);
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
      img0 = claim_element(section_nodes, "IMG", {
        src: true,
        class: true,
        alt: true
      });
      t16 = claim_space(section_nodes);
      p6 = claim_element(section_nodes, "P", {});
      var p6_nodes = children(p6);
      t17 = claim_text(p6_nodes, "Already, I thought this shit was ");
      em2 = claim_element(p6_nodes, "EM", {});
      var em2_nodes = children(em2);
      t18 = claim_text(em2_nodes, "wild");
      em2_nodes.forEach(detach_dev);
      t19 = claim_text(p6_nodes, ".");
      p6_nodes.forEach(detach_dev);
      t20 = claim_space(section_nodes);
      p7 = claim_element(section_nodes, "P", {});
      var p7_nodes = children(p7);
      t21 = claim_text(p7_nodes, "I surprised myself by riding all the way to the northernmost point of Scotland. Then, before I knew it, I was already down to the southermost point of Spain, ");
      em3 = claim_element(p7_nodes, "EM", {});
      var em3_nodes = children(em3);
      t22 = claim_text(em3_nodes, "shitting");
      em3_nodes.forEach(detach_dev);
      t23 = claim_text(p7_nodes, " myself as I looked across ");
      em4 = claim_element(p7_nodes, "EM", {});
      var em4_nodes = children(em4);
      t24 = claim_text(em4_nodes, "The Strait");
      em4_nodes.forEach(detach_dev);
      t25 = claim_text(p7_nodes, " to Africa...");
      p7_nodes.forEach(detach_dev);
      t26 = claim_space(section_nodes);
      p8 = claim_element(section_nodes, "P", {});
      var p8_nodes = children(p8);
      t27 = claim_text(p8_nodes, "From there, well, I guess that's the real story; ");
      em5 = claim_element(p8_nodes, "EM", {});
      var em5_nodes = children(em5);
      t28 = claim_text(em5_nodes, "Africa.");
      em5_nodes.forEach(detach_dev);
      t29 = claim_text(p8_nodes, " On a fucking Royal Enfield...");
      p8_nodes.forEach(detach_dev);
      t30 = claim_space(section_nodes);
      p9 = claim_element(section_nodes, "P", {});
      var p9_nodes = children(p9);
      t31 = claim_text(p9_nodes, "I never planned a moment of any of this; I sure as shit didn't plan on riding though Africa, otherwise my choice of vehicle would have been more sensible. But there I was. And then what happens next is what happens next...");
      p9_nodes.forEach(detach_dev);
      t32 = claim_space(section_nodes);
      img1 = claim_element(section_nodes, "IMG", {
        src: true,
        class: true,
        alt: true
      });
      t33 = claim_space(section_nodes);
      p10 = claim_element(section_nodes, "P", {});
      var p10_nodes = children(p10);
      t34 = claim_text(p10_nodes, "I don't want to give the game away for those who haven't read any of the Trilogy yet (it would be retarded to spoil my own book, wouldn't it?)");
      p10_nodes.forEach(detach_dev);
      t35 = claim_space(section_nodes);
      p11 = claim_element(section_nodes, "P", {});
      var p11_nodes = children(p11);
      t36 = claim_text(p11_nodes, "So, what can I say?");
      p11_nodes.forEach(detach_dev);
      t37 = claim_space(section_nodes);
      p12 = claim_element(section_nodes, "P", {});
      var p12_nodes = children(p12);
      t38 = claim_text(p12_nodes, "I can tell you that it was a fucking long ride.");
      p12_nodes.forEach(detach_dev);
      t39 = claim_space(section_nodes);
      p13 = claim_element(section_nodes, "P", {});
      var p13_nodes = children(p13);
      t40 = claim_text(p13_nodes, "I can tell you that a couple of times I thought I was going to die. That's something, isn't it?");
      p13_nodes.forEach(detach_dev);
      t41 = claim_space(section_nodes);
      p14 = claim_element(section_nodes, "P", {});
      var p14_nodes = children(p14);
      t42 = claim_text(p14_nodes, "I can tell you that I killed a guy.");
      p14_nodes.forEach(detach_dev);
      t43 = claim_space(section_nodes);
      p15 = claim_element(section_nodes, "P", {});
      var p15_nodes = children(p15);
      t44 = claim_text(p15_nodes, "I can tell you that I spend more time on ");
      em6 = claim_element(p15_nodes, "EM", {});
      var em6_nodes = children(em6);
      t45 = claim_text(em6_nodes, "the throne");
      em6_nodes.forEach(detach_dev);
      t46 = claim_text(p15_nodes, " than I care to mention.");
      p15_nodes.forEach(detach_dev);
      t47 = claim_space(section_nodes);
      p16 = claim_element(section_nodes, "P", {});
      var p16_nodes = children(p16);
      t48 = claim_text(p16_nodes, "I can tell you that the Enfield was a beast.");
      p16_nodes.forEach(detach_dev);
      t49 = claim_space(section_nodes);
      p17 = claim_element(section_nodes, "P", {});
      var p17_nodes = children(p17);
      t50 = claim_text(p17_nodes, "I can tell you that Africa is fucking ");
      em7 = claim_element(p17_nodes, "EM", {});
      var em7_nodes = children(em7);
      t51 = claim_text(em7_nodes, "bananas");
      em7_nodes.forEach(detach_dev);
      t52 = claim_text(p17_nodes, ".");
      p17_nodes.forEach(detach_dev);
      t53 = claim_space(section_nodes);
      p18 = claim_element(section_nodes, "P", {});
      children(p18).forEach(detach_dev);
      t54 = claim_space(section_nodes);
      p19 = claim_element(section_nodes, "P", {});
      var p19_nodes = children(p19);
      t55 = claim_text(p19_nodes, "Is that enough? Have I sold you on this yet? It's hard for me to tell you what you'll like about the book without knowing what you're here for...");
      p19_nodes.forEach(detach_dev);
      t56 = claim_space(section_nodes);
      p20 = claim_element(section_nodes, "P", {});
      var p20_nodes = children(p20);
      t57 = claim_text(p20_nodes, "If you're here for adventure, you've got it in spades.");
      p20_nodes.forEach(detach_dev);
      t58 = claim_space(section_nodes);
      p21 = claim_element(section_nodes, "P", {});
      var p21_nodes = children(p21);
      t59 = claim_text(p21_nodes, "If you're here to for a laugh, you'll get some of that.");
      p21_nodes.forEach(detach_dev);
      t60 = claim_space(section_nodes);
      p22 = claim_element(section_nodes, "P", {});
      var p22_nodes = children(p22);
      t61 = claim_text(p22_nodes, "If you're here for romance you'll get none of that.");
      p22_nodes.forEach(detach_dev);
      t62 = claim_space(section_nodes);
      p23 = claim_element(section_nodes, "P", {});
      var p23_nodes = children(p23);
      t63 = claim_text(p23_nodes, "If you're here for a good yarn; sit back, and let me take you on the ride.");
      p23_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      t64 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      a = claim_element(div_nodes, "A", {
        class: true,
        href: true,
        rel: true
      });
      var a_nodes = children(a);
      t65 = claim_text(a_nodes, "Read the book now");
      a_nodes.forEach(detach_dev);
      t66 = claim_space(div_nodes);
      claim_component(downloadbox.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "About the Oblivious Trilogy | A wild journey through West Africa";
      attr_dev(meta0, "name", "description");
      attr_dev(meta0, "content", "How a ride through England on a Royal Enfield motorcycle turned into an epic journey through Europe and Africa.");
      add_location(meta0, file, 6, 1, 176);
      attr_dev(meta1, "property", "og:description");
      attr_dev(meta1, "content", "How a ride through England on a Royal Enfield motorcycle turned into an epic journey through Europe and Africa.");
      add_location(meta1, file, 7, 1, 325);
      attr_dev(meta2, "property", "og:url");
      attr_dev(meta2, "content", "http://www.obliviousthebook.com/");
      add_location(meta2, file, 8, 1, 482);
      attr_dev(meta3, "property", "og:site_name");
      attr_dev(meta3, "content", "ObliviousTheBook.com");
      add_location(meta3, file, 9, 1, 552);
      attr_dev(meta4, "property", "fb:admins");
      attr_dev(meta4, "content", "563453705");
      add_location(meta4, file, 10, 1, 616);
      attr_dev(meta5, "property", "og:image");
      attr_dev(meta5, "content", "/images/logo-750.png");
      add_location(meta5, file, 11, 1, 666);
      attr_dev(meta6, "name", "twitter:card");
      attr_dev(meta6, "content", "summary_large_image");
      add_location(meta6, file, 12, 1, 726);
      attr_dev(meta7, "name", "twitter:description");
      attr_dev(meta7, "content", "How a ride through England on a Royal Enfield motorcycle turned into an epic journey through Europe and Africa.");
      add_location(meta7, file, 13, 1, 785);
      attr_dev(meta8, "name", "twitter:title");
      attr_dev(meta8, "content", "Oblivious - An overlanding motorbike journey through West Africa");
      add_location(meta8, file, 14, 1, 943);
      attr_dev(meta9, "name", "twitter:image");
      attr_dev(meta9, "content", "/images/logo-750.png");
      add_location(meta9, file, 15, 1, 1048);
      attr_dev(h1, "class", "text-4xl md:text-6xl text-center mb-12 mt-12 md:mt-28");
      add_location(h1, file, 18, 0, 1124);
      add_location(em0, file, 22, 8, 1315);
      add_location(p0, file, 22, 1, 1308);
      add_location(p1, file, 23, 1, 1352);
      add_location(p2, file, 24, 1, 1419);
      add_location(p3, file, 25, 1, 1543);
      add_location(p4, file, 26, 1, 1658);
      add_location(em1, file, 27, 4, 1759);
      add_location(p5, file, 27, 1, 1756);
      if (img0.src !== (img0_src_value = "/images/before.jpg")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "class", "w-full cursor-pointer");
      attr_dev(img0, "alt", "Royal Enfield in the fields of England");
      add_location(img0, file, 28, 1, 1791);
      add_location(em2, file, 29, 37, 1936);
      add_location(p6, file, 29, 1, 1900);
      add_location(em3, file, 30, 162, 2117);
      add_location(em4, file, 30, 206, 2161);
      add_location(p7, file, 30, 1, 1956);
      add_location(em5, file, 31, 53, 2251);
      add_location(p8, file, 31, 1, 2199);
      add_location(p9, file, 32, 1, 2303);
      if (img1.src !== (img1_src_value = "/images/after.jpg")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "class", "w-full cursor-pointer");
      attr_dev(img1, "alt", "Royal Enfield covered in shit");
      add_location(img1, file, 33, 1, 2534);
      add_location(p10, file, 34, 1, 2633);
      add_location(p11, file, 35, 1, 2784);
      add_location(p12, file, 36, 1, 2812);
      add_location(p13, file, 37, 1, 2868);
      add_location(p14, file, 38, 1, 2972);
      add_location(em6, file, 39, 45, 3060);
      add_location(p15, file, 39, 1, 3016);
      add_location(p16, file, 40, 1, 3109);
      add_location(em7, file, 41, 42, 3203);
      add_location(p17, file, 41, 1, 3162);
      add_location(p18, file, 42, 1, 3226);
      add_location(p19, file, 43, 1, 3235);
      add_location(p20, file, 44, 1, 3389);
      add_location(p21, file, 45, 1, 3452);
      add_location(p22, file, 46, 1, 3516);
      add_location(p23, file, 47, 1, 3576);
      attr_dev(section, "class", "prose prose-lg mb-10");
      add_location(section, file, 21, 0, 1268);
      attr_dev(a, "class", "inline-block text-xl sm:text-2xl p-4 rounded-lg no-underline bg-oblivious");
      attr_dev(a, "href", "read");
      attr_dev(a, "rel", "prefetch");
      add_location(a, file, 50, 1, 3704);
      attr_dev(div, "class", "mb-20 md:mb-32 flex");
      add_location(div, file, 49, 0, 3669);
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
      append_dev(section, img0);
      append_dev(section, t16);
      append_dev(section, p6);
      append_dev(p6, t17);
      append_dev(p6, em2);
      append_dev(em2, t18);
      append_dev(p6, t19);
      append_dev(section, t20);
      append_dev(section, p7);
      append_dev(p7, t21);
      append_dev(p7, em3);
      append_dev(em3, t22);
      append_dev(p7, t23);
      append_dev(p7, em4);
      append_dev(em4, t24);
      append_dev(p7, t25);
      append_dev(section, t26);
      append_dev(section, p8);
      append_dev(p8, t27);
      append_dev(p8, em5);
      append_dev(em5, t28);
      append_dev(p8, t29);
      append_dev(section, t30);
      append_dev(section, p9);
      append_dev(p9, t31);
      append_dev(section, t32);
      append_dev(section, img1);
      append_dev(section, t33);
      append_dev(section, p10);
      append_dev(p10, t34);
      append_dev(section, t35);
      append_dev(section, p11);
      append_dev(p11, t36);
      append_dev(section, t37);
      append_dev(section, p12);
      append_dev(p12, t38);
      append_dev(section, t39);
      append_dev(section, p13);
      append_dev(p13, t40);
      append_dev(section, t41);
      append_dev(section, p14);
      append_dev(p14, t42);
      append_dev(section, t43);
      append_dev(section, p15);
      append_dev(p15, t44);
      append_dev(p15, em6);
      append_dev(em6, t45);
      append_dev(p15, t46);
      append_dev(section, t47);
      append_dev(section, p16);
      append_dev(p16, t48);
      append_dev(section, t49);
      append_dev(section, p17);
      append_dev(p17, t50);
      append_dev(p17, em7);
      append_dev(em7, t51);
      append_dev(p17, t52);
      append_dev(section, t53);
      append_dev(section, p18);
      append_dev(section, t54);
      append_dev(section, p19);
      append_dev(p19, t55);
      append_dev(section, t56);
      append_dev(section, p20);
      append_dev(p20, t57);
      append_dev(section, t58);
      append_dev(section, p21);
      append_dev(p21, t59);
      append_dev(section, t60);
      append_dev(section, p22);
      append_dev(p22, t61);
      append_dev(section, t62);
      append_dev(section, p23);
      append_dev(p23, t63);
      insert_dev(target, t64, anchor);
      insert_dev(target, div, anchor);
      append_dev(div, a);
      append_dev(a, t65);
      append_dev(div, t66);
      mount_component(downloadbox, div, null);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var downloadbox_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        downloadbox_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      downloadbox.$set(downloadbox_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(downloadbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(downloadbox.$$.fragment, local);
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
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(section);
      if (detaching) detach_dev(t64);
      if (detaching) detach_dev(div);
      destroy_component(downloadbox);
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
  validate_slots("About", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<About> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      DownloadBox: DownloadBox
    };
  };

  return [];
}

var About = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(About, _SvelteComponentDev);

  var _super = _createSuper(About);

  function About(options) {
    var _this;

    _classCallCheck(this, About);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "About",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return About;
}(SvelteComponentDev);

export default About;