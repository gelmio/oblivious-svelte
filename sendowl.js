if (window.sendOwl);
else {
    function viewCart() {
        return !0;
    }
    function addProductToCart() {
        return !0;
    }
    function addPackageToCart() {
        return !0;
    }
    function addLoadEvent(e) {
        var t = window.onload;
        "function" != typeof window.onload
            ? (window.onload = e)
            : (window.onload = function () {
                  t && t(), e();
              });
    }
    (sendOwl = {
        cartModifyCallback: null,
        abandonCallback: null,
        sendOwlCartWidget: null,
        captureLinks: function () {
            var e = document.getElementsByTagName("a");
            for (i = 0; i < e.length; i++) {
                var t = e[i],
                    n = t.getAttribute("href");
                if (
                    n &&
                    -1 != n.indexOf("sendowl.com") &&
                    (-1 != n.indexOf("/purchase") ||
                        -1 != n.indexOf("/add_to_cart") ||
                        -1 != n.indexOf("/cart?merchant_id=") ||
                        -1 != n.indexOf("/view"))
                )
                    if (this.inIframe()) {
                        t.setAttribute("target", "_blank");
                        var a = this.appendBackUrl(
                            t.getAttribute("href"),
                            this.getLocationUrl()
                        );
                        t.setAttribute("href", a);
                    } else this.addClickHandler(t, this.purchaseHandler);
            }
        },
        captureForms: function () {
            var e = document.getElementsByTagName("form");
            for (i = 0; i < e.length; i++) {
                var t = e[i],
                    n = t.getAttribute("action");
                if (
                    n &&
                    -1 != n.indexOf("sendowl.com") &&
                    (-1 != n.indexOf("/purchase") ||
                        -1 != n.indexOf("/add_to_cart"))
                )
                    if (this.inIframe()) {
                        t.setAttribute("target", "_top");
                        var a = this.appendBackUrl(
                            t.getAttribute("action"),
                            this.getLocationUrl
                        );
                        t.setAttribute("action", a);
                    } else this.addSubmitHandler(t, this.purchaseHandler);
            }
        },
        cartWidget: function (e) {
            this.sendOwlCartWidget = !0;
            var t =
                    "https://transactions.sendowl.com/cart?merchant_id=" +
                    e.merchantID,
                n = e.cartPhrase || "Cart:",
                a = e.variant || "dark",
                o = e.size || "medium",
                r = e.useCartImage,
                i =
                    e.cartImageUrl ||
                    "https://transactions.sendowl.com/assets/external/sendowl-js-cart-" +
                        o +
                        "-" +
                        a +
                        ".png",
                d = e.customStyle,
                s = "#000000",
                l = "20px";
            null == r && (r = !0),
                null == d && (d = !1),
                "light" == a && (s = "#FFFFFF"),
                "small" == o && (l = "15px"),
                "large" == o && (l = "26px"),
                e.urlAppend && (t = t += "&" + e.urlAppend);
            var c = document.createElement("div");
            if (
                (c.setAttribute("id", "sendowl-cart-widget"),
                c.setAttribute("data-url", t),
                this.addClickHandler(c, this.purchaseHandler),
                d ||
                    c.setAttribute(
                        "style",
                        "cursor: pointer; display: inline-block; font-family: Helvetica,Arial,sans-serif; font-size: " +
                            l +
                            "; color: " +
                            s +
                            ";"
                    ),
                r)
            ) {
                var u = document.createElement("img");
                u.setAttribute("src", i),
                    u.setAttribute("class", "cart-icon"),
                    d || u.setAttribute("style", "vertical-align: middle;");
            }
            var m = document.createElement("span");
            m.setAttribute("class", "cart-name"),
                (m.innerHTML = n),
                d ||
                    m.setAttribute(
                        "style",
                        "vertical-align: middle; margin-left: 5px;"
                    );
            var p = document.createElement("span");
            p.setAttribute("id", "sendowl-cart-count"),
                p.setAttribute("class", "cart-count"),
                d ||
                    p.setAttribute(
                        "style",
                        "vertical-align: middle; margin-left: 2px;"
                    ),
                r && c.appendChild(u),
                c.appendChild(m),
                c.appendChild(p),
                e.parent.appendChild(c);
            var f = sendOwl.cartItemCount();
            null == f && (f = 0), sendOwl.updateSendOwlWidgetCartCount(f);
        },
        cartItemCount: function () {
            var e = sendOwl.readCookie("_sendowl_cart_count");
            return null == e ? null : parseInt(e);
        },
        emptyCart: function (e, t) {
            var n =
                "https://transactions.sendowl.com/cart/empty.json?merchant_id=" +
                e;
            sendOwl.performSafeJSONPRequest(n, t);
        },
        addProductToCart: function (e, t, n) {
            var a =
                "https://transactions.sendowl.com/products/" +
                e +
                "/" +
                t +
                "/add_to_cart.json";
            sendOwl.performSafeJSONPRequest(a, n);
        },
        addBundleToCart: function (e, t, n) {
            var a =
                "https://transactions.sendowl.com/packages/" +
                e +
                "/" +
                t +
                "/add_to_cart.json";
            sendOwl.performSafeJSONPRequest(a, n);
        },
        addPackageToCart: function (e, t, n) {
            sendOwl.addBundleToCart(e, t, n);
        },
        performJSONPRequest: function (e, t) {
            this.cartModifyCallback = t;
            var n = Math.floor(999999 * Math.random()).toString();
            e.indexOf("?") > -1 ? (e += "&") : (e += "?"),
                (e =
                    e +
                    "callback=sendOwl.asyncJSONRequestComplete&requestid=" +
                    n),
                sendOwl.isSafariBrowser() &&
                    (e += "&" + sendOwl.readCookie("_sendowl_cart"));
            var a = document.createElement("script");
            (a.type = "text/javascript"),
                (a.id = "tempscript"),
                (a.src = e),
                document.body.appendChild(a);
        },
        performSafeJSONPRequest: function (e, t) {
            if (sendOwl.isSafariBrowser()) {
                var n = sendOwl.readCookie("_sendowl_cart");
                (xmlhttp = sendOwl.getXMLHttp()),
                    xmlhttp.open(
                        "GET",
                        "https://transactions.sendowl.com/carts/cookie_set?" +
                            (n || "cart_id=&cart_hash=") +
                            "&url=" +
                            e,
                        !0
                    ),
                    (xmlhttp.onload = function () {
                        sendOwl.createCookie(
                            "_sendowl_cart",
                            this.responseText,
                            30
                        ),
                            sendOwl.performJSONPRequest(e, t);
                    }),
                    xmlhttp.send();
            } else sendOwl.performJSONPRequest(e, t);
        },
        asyncJSONRequestComplete: function (e) {
            e.cart_item_count && sendOwl.updateCartCount(e.cart_item_count),
                sendOwl.cartModifyCallback && sendOwl.cartModifyCallback(e);
        },
        updateCartCount: function (e) {
            sendOwl.createCookie("_sendowl_cart_count", e, 30),
                this.sendOwlCartWidget &&
                    sendOwl.updateSendOwlWidgetCartCount(e);
        },
        updateSendOwlWidgetCartCount: function (e) {
            var t = document.getElementById("sendowl-cart-count");
            0 === parseInt(e)
                ? (t.className = t.className + " cart-empty")
                : (t.className = t.className.replace("cart-empty", "")),
                (t.innerHTML = "" + e);
        },
        purchaseHandler: function (e) {
            e = e || window.event;
            var t = null,
                n = sendOwl.getAncestorWithId(
                    e.target || e.srcElement,
                    "sendowl-cart-widget"
                ),
                a = sendOwl.getAncestor(e.target || e.srcElement, "a"),
                o = sendOwl.getAncestor(e.target || e.srcElement, "form");
            if (
                (n
                    ? (t = n.getAttribute("data-url"))
                    : a && -1 != a.getAttribute("href").indexOf("sendowl.com")
                    ? (t = a.getAttribute("href"))
                    : o &&
                      -1 != o.getAttribute("action").indexOf("sendowl.com") &&
                      (t = o.getAttribute("action")),
                (t = sendOwl.appendGoogleAnalyticsTracking(t)))
            ) {
                var r =
                    sendOwl.isSafariBrowser() &&
                    (t.indexOf("add_to_cart") >= 0 || t.indexOf("cart") >= 0);
                if (r) {
                    sendOwl.addLoadingImage();
                    var i = sendOwl.readCookie("_sendowl_cart");
                    (xmlhttp = sendOwl.getXMLHttp()),
                        xmlhttp.open(
                            "GET",
                            "https://transactions.sendowl.com/carts/cookie_set?" +
                                (i || "cart_id=&cart_hash=") +
                                "&url=" +
                                t,
                            !0
                        ),
                        (xmlhttp.onload = function () {
                            sendOwl.createCookie(
                                "_sendowl_cart",
                                this.responseText,
                                30
                            ),
                                sendOwl.continuePurchaseHandler(t, r);
                        }),
                        xmlhttp.send();
                } else sendOwl.continuePurchaseHandler(t, r);
                e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
            }
        },
        continuePurchaseHandler: function (e, t) {
            var n = !1,
                a = e.replace("https://transactions.sendowl.com", "");
            (a = a.match(/cart\?merchant_id/)
                ? a.replace("?", "/")
                : a.split("?")[0]),
                t || sendOwl.addLoadingImage(),
                (xmlhttp = sendOwl.getXMLHttp()),
                xmlhttp.open(
                    "GET",
                    "https://transactions.sendowl.com/carts/check_capability?path=" +
                        a,
                    !0
                ),
                (xmlhttp.onload = function () {
                    this.responseText.match(/lightbox=1/) && (n = !0),
                        sendOwl.showCheckout(e, t, n);
                }),
                xmlhttp.send();
        },
        showCheckout: function (e, t, n) {
            var a = window,
                o = document,
                r = o.documentElement,
                i = o.getElementsByTagName("body")[0],
                d = a.innerWidth || r.clientWidth || i.clientWidth,
                s =
                    (a.innerHeight || r.clientHeight || i.clientHeight,
                    d <= 479);
            if (true || (window.postMessage && n && !s)) {
                console.log("yoyo");
                if (t)
                    e =
                        e +
                        (e.match(/\?/) ? "&" : "?") +
                        sendOwl.readCookie("_sendowl_cart");
                sendOwl.loadIframe(e);
            } else
                (window.location.href = sendOwl.appendBackUrl(
                    e,
                    location.href.split("#")[0]
                )),
                    sendOwl.removeLoadingImage();
        },
        addLoadingImage: function () {
            var e = document.createElement("div");
            e.setAttribute("id", "sendowl-loading"),
                (e.style.cssText =
                    "position: fixed; z-index: 999998; top: 50%; left: 50%; margin: -20px; width: 40px; height: 40px; border-radius: 8px; background: #636363; padding: 2px; overflow: hidden; box-sizing: content-box;");
            var t = document.createElement("img");
            t.setAttribute(
                "src",
                "https://transactions.sendowl.com/assets/buyer/iframe_loading.gif"
            ),
                t.setAttribute("height", "40"),
                t.setAttribute("width", "40"),
                e.appendChild(t),
                document.body.insertBefore(e, document.body.firstChild);
        },
        removeLoadingImage: function () {
            var e = document.getElementById("sendowl-loading");
            e && e.remove();
        },
        isSafariBrowser: function () {
            return (
                navigator.userAgent.indexOf("Safari") >= 0 &&
                navigator.userAgent.indexOf("Chrome") < 0
            );
        },
        appendGoogleAnalyticsTracking: function (e) {
            if ("undefined" != typeof _gat && null != typeof _gat) {
                var t = _gat._getTrackerByName()._getLinkerUrl(e);
                "string" == typeof t && (e = t);
            } else
                "undefined" != typeof ga &&
                    null != typeof ga &&
                    ga(function (t) {
                        var n = new window.gaplugins.Linker(t).decorate(e);
                        "string" == typeof n && (e = n);
                    });
            return e;
        },
        getXMLHttp: function () {
            return window.XMLHttpRequest
                ? new XMLHttpRequest()
                : new ActiveXObject("Microsoft.XMLHTTP");
        },
        getLocationUrl: function () {
            try {
                return parent.location, parent.location.href.split("#")[0];
            } catch (e) {
                return location.href.split("#")[0];
            }
        },
        appendBackUrl: function (e, t) {
            return (
                e.match(/\?/)
                    ? (e += "&back=" + encodeURIComponent(t))
                    : (e += "?back=" + encodeURIComponent(t)),
                e
            );
        },
        inIframe: function () {
            return window.top !== window.self;
        },
        loadIframe: function (e) {
            (iframe = document.createElement("iframe")),
                iframe.setAttribute("id", "sendowl-checkout"),
                iframe.setAttribute("frameBorder", "0"),
                iframe.setAttribute("allowtransparency", "true"),
                iframe.setAttribute("allowPaymentRequest", "true"),
                iframe.setAttribute(
                    "sandbox",
                    "allow-scripts allow-same-origin allow-top-navigation allow-forms allow-popups allow-downloads"
                ),
                (iframe.style.cssText =
                    "display: block; background: transparent; border: 0px none transparent; overflow-x: hidden; overflow-y: auto; visibility: visible; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; z-index: 999999; backdrop-filter: blur(5px);"),
                iframe.setAttribute("src", e),
                document.body.insertBefore(iframe, document.body.firstChild),
                document.getElementById("sendowl-checkout").focus();
        },
        handleMessage: function (e) {
            if (
                e.origin.match("http://www.sendowl.com") ||
                e.origin.match("https://www.sendowl.com") ||
                e.origin.match("http://transactions.sendowl.com") ||
                e.origin.match("https://transactions.sendowl.com")
            )
                if ("sendowl:abandoned" == e.data)
                    sendOwl.removeIframe(),
                        sendOwl.abandonCallback && sendOwl.abandonCallback();
                else if ("sendowl:close" == e.data) sendOwl.removeIframe();
                else if ("sendowl:loaded" == e.data)
                    document.getElementById("sendowl-loading") &&
                        document.body.removeChild(
                            document.getElementById("sendowl-loading")
                        );
                else if ("sendowl:iframe:absolute" == e.data) {
                    ((t =
                        document.getElementById(
                            "sendowl-checkout"
                        )).style.display = "none"),
                        (t.style.position = "absolute"),
                        (t.style.top = window.scrollY + "px"),
                        (t.style.display = "block");
                } else if ("sendowl:iframe:fixed" == e.data) {
                    var t;
                    ((t =
                        document.getElementById(
                            "sendowl-checkout"
                        )).style.display = "none"),
                        (t.style.position = "fixed"),
                        (t.style.top = "0"),
                        (t.style.display = "block");
                } else if (e.data.indexOf("sendowl:redirect") > -1) {
                    var n = e.data.replace("sendowl:redirect:", "");
                    window.location.href = n;
                } else if (e.data.indexOf("sendowl:cartItemCount") > -1) {
                    var a = e.data.split(":")[2];
                    sendOwl.updateCartCount(a);
                } else if ("sendowl:hide" == e.data) {
                    var o = document.getElementById("sendowl-checkout");
                    o &&
                        ((o.style.position = "absolute"),
                        (o.style.top = "0"),
                        (o.style.left = "0"),
                        (o.style.width = "1px"),
                        (o.style.height = "1px"),
                        window.setTimeout(function () {
                            "1px" ==
                                document.getElementById("sendowl-checkout")
                                    .style.width && sendOwl.removeIframe();
                        }, 2500));
                }
        },
        removeIframe: function () {
            var e = document.getElementById("sendowl-checkout");
            e && e.parentNode && e.parentNode.removeChild(e);
        },
        addClickHandler: function (e, t) {
            document.addEventListener
                ? e.addEventListener("click", t, !1)
                : e.attachEvent("onclick", t);
        },
        addSubmitHandler: function (e, t) {
            document.addEventListener
                ? e.addEventListener("submit", t, !1)
                : e.attachEvent("onsubmit", t);
        },
        createCookie: function (e, t, n) {
            if (n) {
                var a = new Date();
                a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3);
                var o = "; expires=" + a.toGMTString();
            } else o = "";
            document.cookie =
                e + "=" + t + o + "; path=/; SameSite=None; Secure";
        },
        readCookie: function (e) {
            for (
                var t = e + "=", n = document.cookie.split(";"), a = 0;
                a < n.length;
                a++
            ) {
                for (var o = n[a]; " " == o.charAt(0); )
                    o = o.substring(1, o.length);
                if (0 == o.indexOf(t)) return o.substring(t.length, o.length);
            }
            return null;
        },
        getAncestor: function (e, t) {
            for (t = t.toUpperCase(); e; ) {
                if (1 == e.nodeType && e.nodeName.toUpperCase() == t) return e;
                e = e.parentNode;
            }
            return null;
        },
        getAncestorWithId: function (e, t) {
            for (; e; ) {
                if (1 == e.nodeType && e.id == t) return e;
                e = e.parentNode;
            }
            return null;
        },
    }),
        (document.onkeydown = function (e) {
            27 == (e = e || window.event).keyCode && sendOwl.removeIframe();
        }),
        addLoadEvent(function () {
            sendOwl.captureLinks(), sendOwl.captureForms();
        }),
        window.addEventListener
            ? window.addEventListener("message", sendOwl.handleMessage, !1)
            : window.attachEvent("onmessage", sendOwl.handleMessage);
}
