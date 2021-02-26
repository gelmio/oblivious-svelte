import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, g as element, h as space, t as text, F as query_selector_all, j as claim_element, m as detach_dev, l as claim_space, k as children, n as claim_text, p as attr_dev, q as add_location, u as append_dev, r as insert_dev, D as noop, v as validate_slots } from './client.d7f43bb5.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/help.svelte";

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
  var h20;
  var t3;
  var t4;
  var section1;
  var img0;
  var img0_src_value;
  var t5;
  var div0;
  var h30;
  var t6;
  var t7;
  var h40;
  var t8;
  var t9;
  var section2;
  var h21;
  var t10;
  var t11;
  var section3;
  var div1;
  var h31;
  var t12;
  var t13;
  var h41;
  var t14;
  var t15;
  var img1;
  var img1_src_value;
  var t16;
  var section4;
  var img2;
  var img2_src_value;
  var t17;
  var div2;
  var h32;
  var t18;
  var t19;
  var h42;
  var t20;
  var t21;
  var section5;
  var h22;
  var t22;
  var t23;
  var a0;
  var t24;
  var t25;
  var section6;
  var h23;
  var t26;
  var a1;
  var t27;
  var t28;
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
      t1 = text("Broken down and need a hand with getting the e-book onto your device?");
      t2 = space();
      h20 = element("h2");
      t3 = text("You're in the right place! Here's how to go from zero to reading in a few minutes...");
      t4 = space();
      section1 = element("section");
      img0 = element("img");
      t5 = space();
      div0 = element("div");
      h30 = element("h3");
      t6 = text("Step One");
      t7 = space();
      h40 = element("h4");
      t8 = text("Choose what you want to pay and enter your payment details and email address.");
      t9 = space();
      section2 = element("section");
      h21 = element("h2");
      t10 = text("Go grab a coffee, an email is flying your way as fast as it can...");
      t11 = space();
      section3 = element("section");
      div1 = element("div");
      h31 = element("h3");
      t12 = text("Step Two");
      t13 = space();
      h41 = element("h4");
      t14 = text("Once the email has landed in your inbox, click the link it tells you to go to. From there you'll get to choose your device type and the download will start right away.");
      t15 = space();
      img1 = element("img");
      t16 = space();
      section4 = element("section");
      img2 = element("img");
      t17 = space();
      div2 = element("div");
      h32 = element("h3");
      t18 = text("Get Reading!");
      t19 = space();
      h42 = element("h4");
      t20 = text("Feel free to use the e-book on anything with a screen! To get it onto your kindle, simply plug it in and copy the file across!");
      t21 = space();
      section5 = element("section");
      h22 = element("h2");
      t22 = text("Just looking for the link to get all of this started?");
      t23 = space();
      a0 = element("a");
      t24 = text("Here it is!");
      t25 = space();
      section6 = element("section");
      h23 = element("h2");
      t26 = text("Still lost? Flick me an email ");
      a1 = element("a");
      t27 = text("here");
      t28 = text(" and I'll sort you out.");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1vuqwh7\"]", document.head);
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
      t1 = claim_text(h1_nodes, "Broken down and need a hand with getting the e-book onto your device?");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(section0_nodes);
      h20 = claim_element(section0_nodes, "H2", {
        class: true
      });
      var h20_nodes = children(h20);
      t3 = claim_text(h20_nodes, "You're in the right place! Here's how to go from zero to reading in a few minutes...");
      h20_nodes.forEach(detach_dev);
      section0_nodes.forEach(detach_dev);
      t4 = claim_space(nodes);
      section1 = claim_element(nodes, "SECTION", {
        class: true
      });
      var section1_nodes = children(section1);
      img0 = claim_element(section1_nodes, "IMG", {
        class: true,
        alt: true,
        src: true
      });
      t5 = claim_space(section1_nodes);
      div0 = claim_element(section1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      h30 = claim_element(div0_nodes, "H3", {
        class: true
      });
      var h30_nodes = children(h30);
      t6 = claim_text(h30_nodes, "Step One");
      h30_nodes.forEach(detach_dev);
      t7 = claim_space(div0_nodes);
      h40 = claim_element(div0_nodes, "H4", {
        class: true
      });
      var h40_nodes = children(h40);
      t8 = claim_text(h40_nodes, "Choose what you want to pay and enter your payment details and email address.");
      h40_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      section1_nodes.forEach(detach_dev);
      t9 = claim_space(nodes);
      section2 = claim_element(nodes, "SECTION", {
        class: true
      });
      var section2_nodes = children(section2);
      h21 = claim_element(section2_nodes, "H2", {
        class: true
      });
      var h21_nodes = children(h21);
      t10 = claim_text(h21_nodes, "Go grab a coffee, an email is flying your way as fast as it can...");
      h21_nodes.forEach(detach_dev);
      section2_nodes.forEach(detach_dev);
      t11 = claim_space(nodes);
      section3 = claim_element(nodes, "SECTION", {
        class: true
      });
      var section3_nodes = children(section3);
      div1 = claim_element(section3_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      h31 = claim_element(div1_nodes, "H3", {
        class: true
      });
      var h31_nodes = children(h31);
      t12 = claim_text(h31_nodes, "Step Two");
      h31_nodes.forEach(detach_dev);
      t13 = claim_space(div1_nodes);
      h41 = claim_element(div1_nodes, "H4", {
        class: true
      });
      var h41_nodes = children(h41);
      t14 = claim_text(h41_nodes, "Once the email has landed in your inbox, click the link it tells you to go to. From there you'll get to choose your device type and the download will start right away.");
      h41_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t15 = claim_space(section3_nodes);
      img1 = claim_element(section3_nodes, "IMG", {
        class: true,
        alt: true,
        src: true
      });
      section3_nodes.forEach(detach_dev);
      t16 = claim_space(nodes);
      section4 = claim_element(nodes, "SECTION", {
        class: true
      });
      var section4_nodes = children(section4);
      img2 = claim_element(section4_nodes, "IMG", {
        class: true,
        alt: true,
        src: true
      });
      t17 = claim_space(section4_nodes);
      div2 = claim_element(section4_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      h32 = claim_element(div2_nodes, "H3", {
        class: true
      });
      var h32_nodes = children(h32);
      t18 = claim_text(h32_nodes, "Get Reading!");
      h32_nodes.forEach(detach_dev);
      t19 = claim_space(div2_nodes);
      h42 = claim_element(div2_nodes, "H4", {
        class: true
      });
      var h42_nodes = children(h42);
      t20 = claim_text(h42_nodes, "Feel free to use the e-book on anything with a screen! To get it onto your kindle, simply plug it in and copy the file across!");
      h42_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      section4_nodes.forEach(detach_dev);
      t21 = claim_space(nodes);
      section5 = claim_element(nodes, "SECTION", {
        class: true
      });
      var section5_nodes = children(section5);
      h22 = claim_element(section5_nodes, "H2", {
        class: true
      });
      var h22_nodes = children(h22);
      t22 = claim_text(h22_nodes, "Just looking for the link to get all of this started?");
      h22_nodes.forEach(detach_dev);
      t23 = claim_space(section5_nodes);
      a0 = claim_element(section5_nodes, "A", {
        class: true,
        href: true,
        rel: true
      });
      var a0_nodes = children(a0);
      t24 = claim_text(a0_nodes, "Here it is!");
      a0_nodes.forEach(detach_dev);
      section5_nodes.forEach(detach_dev);
      t25 = claim_space(nodes);
      section6 = claim_element(nodes, "SECTION", {
        class: true
      });
      var section6_nodes = children(section6);
      h23 = claim_element(section6_nodes, "H2", {
        class: true
      });
      var h23_nodes = children(h23);
      t26 = claim_text(h23_nodes, "Still lost? Flick me an email ");
      a1 = claim_element(h23_nodes, "A", {
        href: true
      });
      var a1_nodes = children(a1);
      t27 = claim_text(a1_nodes, "here");
      a1_nodes.forEach(detach_dev);
      t28 = claim_text(h23_nodes, " and I'll sort you out.");
      h23_nodes.forEach(detach_dev);
      section6_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Getting help for your Oblivious Trilogy order";
      attr_dev(meta0, "property", "og:description");
      attr_dev(meta0, "content", "Broken down? Here's where to go to get help on getting your Oblivious Trilogy order");
      add_location(meta0, file, 7, 4, 285);
      attr_dev(meta1, "property", "og:url");
      attr_dev(meta1, "content", "http://www.obliviousthebook.com/help");
      add_location(meta1, file, 9, 4, 427);
      attr_dev(meta2, "property", "og:site_name");
      attr_dev(meta2, "content", "ObliviousTheBook.com");
      add_location(meta2, file, 10, 4, 504);
      attr_dev(meta3, "property", "fb:admins");
      attr_dev(meta3, "content", "563453705");
      add_location(meta3, file, 11, 4, 571);
      attr_dev(meta4, "property", "og:image");
      attr_dev(meta4, "content", "/images/logo-750.png");
      add_location(meta4, file, 12, 4, 624);
      attr_dev(h1, "class", "text-4xl md:text-5xl text-center");
      add_location(h1, file, 17, 4, 783);
      attr_dev(h20, "class", "text-xl md:text-3xl text-center");
      add_location(h20, file, 18, 4, 907);
      attr_dev(section0, "class", "flex flex-col items-center max-w-4xl mb-20 md:mb-32");
      add_location(section0, file, 16, 0, 709);
      attr_dev(img0, "class", "w-full md:w-3/5 my-4");
      attr_dev(img0, "alt", "computer with sendowl payment portal");
      if (img0.src !== (img0_src_value = "/images/how-step1.jpg")) attr_dev(img0, "src", img0_src_value);
      add_location(img0, file, 21, 4, 1143);
      attr_dev(h30, "class", "text-3xl md:text-5xl");
      add_location(h30, file, 23, 8, 1284);
      attr_dev(h40, "class", "text-xl md:text-2xl");
      add_location(h40, file, 24, 8, 1339);
      attr_dev(div0, "class", "md:pl-20");
      add_location(div0, file, 22, 4, 1253);
      attr_dev(section1, "class", "flex flex-col md:flex-row items-center max-w-6xl mb-20 md:mb-32 px-8");
      add_location(section1, file, 20, 0, 1052);
      attr_dev(h21, "class", "text-2xl md:text-3xl text-center");
      add_location(h21, file, 28, 4, 1550);
      attr_dev(section2, "class", "flex flex-col items-center max-w-4xl mb-20 md:mb-32");
      add_location(section2, file, 27, 0, 1476);
      attr_dev(h31, "class", "text-3xl md:text-5xl");
      add_location(h31, file, 32, 8, 1817);
      attr_dev(h41, "class", "text-xl md:text-2xl");
      add_location(h41, file, 33, 8, 1872);
      attr_dev(div1, "class", "md:pr-20");
      add_location(div1, file, 31, 4, 1786);
      attr_dev(img1, "class", "w-full md:w-3/5 my-4");
      attr_dev(img1, "alt", "computer with sendowl payment portal");
      if (img1.src !== (img1_src_value = "/images/how-step2.jpg")) attr_dev(img1, "src", img1_src_value);
      add_location(img1, file, 35, 4, 2092);
      attr_dev(section3, "class", "flex flex-col flex-col-reverse md:flex-row items-center max-w-6xl mb-20 md:mb-32 px-8");
      add_location(section3, file, 30, 0, 1678);
      attr_dev(img2, "class", "w-full md:w-3/5 my-4");
      attr_dev(img2, "alt", "computer with sendowl payment portal");
      if (img2.src !== (img2_src_value = "/images/how-step3.jpg")) attr_dev(img2, "src", img2_src_value);
      add_location(img2, file, 38, 4, 2300);
      attr_dev(h32, "class", "text-3xl md:text-5xl");
      add_location(h32, file, 40, 8, 2441);
      attr_dev(h42, "class", "text-xl md:text-2xl");
      add_location(h42, file, 41, 8, 2500);
      attr_dev(div2, "class", "md:pl-20");
      add_location(div2, file, 39, 4, 2410);
      attr_dev(section4, "class", "flex flex-col md:flex-row items-center max-w-6xl mb-20 md:mb-32 px-8");
      add_location(section4, file, 37, 0, 2209);
      attr_dev(h22, "class", "text-2xl md:text-3xl text-center");
      add_location(h22, file, 45, 4, 2760);
      attr_dev(a0, "class", "inline-block text-xl sm:text-2xl p-4 rounded-lg no-underline bg-oblivious");
      attr_dev(a0, "href", "https://transactions.sendowl.com/packages/37218/89A60CC9/add_to_cart");
      attr_dev(a0, "rel", "nofollow");
      add_location(a0, file, 45, 108, 2864);
      attr_dev(section5, "class", "flex flex-col items-center max-w-4xl mb-20 md:mb-32");
      add_location(section5, file, 44, 0, 2686);
      attr_dev(a1, "href", "mailto:obliviousthebook@protonmail.com");
      add_location(a1, file, 48, 79, 3216);
      attr_dev(h23, "class", "text-2xl md:text-3xl text-center");
      add_location(h23, file, 48, 4, 3141);
      attr_dev(section6, "class", "flex flex-col items-center max-w-4xl mb-20 md:mb-32");
      add_location(section6, file, 47, 0, 3067);
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
      append_dev(section0, h20);
      append_dev(h20, t3);
      insert_dev(target, t4, anchor);
      insert_dev(target, section1, anchor);
      append_dev(section1, img0);
      append_dev(section1, t5);
      append_dev(section1, div0);
      append_dev(div0, h30);
      append_dev(h30, t6);
      append_dev(div0, t7);
      append_dev(div0, h40);
      append_dev(h40, t8);
      insert_dev(target, t9, anchor);
      insert_dev(target, section2, anchor);
      append_dev(section2, h21);
      append_dev(h21, t10);
      insert_dev(target, t11, anchor);
      insert_dev(target, section3, anchor);
      append_dev(section3, div1);
      append_dev(div1, h31);
      append_dev(h31, t12);
      append_dev(div1, t13);
      append_dev(div1, h41);
      append_dev(h41, t14);
      append_dev(section3, t15);
      append_dev(section3, img1);
      insert_dev(target, t16, anchor);
      insert_dev(target, section4, anchor);
      append_dev(section4, img2);
      append_dev(section4, t17);
      append_dev(section4, div2);
      append_dev(div2, h32);
      append_dev(h32, t18);
      append_dev(div2, t19);
      append_dev(div2, h42);
      append_dev(h42, t20);
      insert_dev(target, t21, anchor);
      insert_dev(target, section5, anchor);
      append_dev(section5, h22);
      append_dev(h22, t22);
      append_dev(section5, t23);
      append_dev(section5, a0);
      append_dev(a0, t24);
      insert_dev(target, t25, anchor);
      insert_dev(target, section6, anchor);
      append_dev(section6, h23);
      append_dev(h23, t26);
      append_dev(h23, a1);
      append_dev(a1, t27);
      append_dev(h23, t28);
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
      if (detaching) detach_dev(t9);
      if (detaching) detach_dev(section2);
      if (detaching) detach_dev(t11);
      if (detaching) detach_dev(section3);
      if (detaching) detach_dev(t16);
      if (detaching) detach_dev(section4);
      if (detaching) detach_dev(t21);
      if (detaching) detach_dev(section5);
      if (detaching) detach_dev(t25);
      if (detaching) detach_dev(section6);
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
  validate_slots("Help", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Help> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var Help = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Help, _SvelteComponentDev);

  var _super = _createSuper(Help);

  function Help(options) {
    var _this;

    _classCallCheck(this, Help);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Help",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Help;
}(SvelteComponentDev);

export default Help;
