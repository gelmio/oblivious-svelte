const updateCart = (callback) => {
    const messageHandler = (m) => {
        if (m?.data === "sendowl:loaded") {
            callback();
            window.removeEventListener("message", messageHandler);
        }
    };
    try {
        window.addEventListener("message", messageHandler, !1);
        let loadedCount = 0;

        const addComplete = (r) => {
            loadedCount = loadedCount + 1;
            window.alert("c: " + loadedCount + " " + r);
            loadedCount === 3
                ? setTimeout(() => {
                      initiateCheckout();
                  }, 10000)
                : null;
        };

        const initiateCheckout = () => {
            sendOwl.showCheckout(
                "https://transactions.sendowl.com/cart?merchant_id=35479",
                true,
                true
            );
        };

        sendOwl.emptyCart(35479, () => {
            sendOwl.addBundleToCart(37218, "89A60CC9", (r) => addComplete(r));
            // sendOwl.addBundleToCart(812169, "A234B840", (r) => addComplete(r));
            // sendOwl.addProductToCart(78458726, "77A44CD1", (r) => addComplete(r));
        });
    } catch {
        console.log("Cart update failed");
    }
};

export default updateCart;
