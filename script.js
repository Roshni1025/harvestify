/* =========================================================
   HARVESTIFY - SCRIPT.JS
   ========================================================= */


/* =========================================================
   1. NAVBAR SCROLL EFFECT
   ========================================================= */

const navbar = document.querySelector(".navbar");

if (navbar) {
    window.addEventListener("scroll", function () {

        if (window.scrollY > 30) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });
}


/* =========================================================
   2. MOBILE MENU
   ========================================================= */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

if (menuButton && navMenu) {

    menuButton.addEventListener("click", function () {

        navMenu.classList.toggle("active");

    });

}


/* =========================================================
   3. CLOSE MOBILE MENU AFTER CLICKING LINK
   ========================================================= */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

    });

});


/* =========================================================
   4. SMOOTH SCROLLING
   ========================================================= */

const allAnchorLinks =
    document.querySelectorAll('a[href^="#"]');

allAnchorLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        /*
           Ignore empty # links
        */

        if (!targetId || targetId === "#") {
            return;
        }

        const targetSection =
            document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================================
   5. DISCOVER HARVESTIFY BUTTON
   ========================================================= */

/*
   Your existing button:

   Discover Harvestify → #about

   Smooth scrolling is already handled above.
*/

const discoverButton =
    document.querySelector(".primary-button");

if (discoverButton) {

    discoverButton.addEventListener("click", function () {

        console.log(
            "Discover Harvestify clicked"
        );

    });

}


/* =========================================================
   6. HERO "HOW IT WORKS" BUTTON
   ========================================================= */

/*
   Your existing button:

   How it works → #how
*/

const secondaryButton =
    document.querySelector(".secondary-button");

if (secondaryButton) {

    secondaryButton.addEventListener("click", function () {

        console.log(
            "How it works clicked"
        );

    });

}


/* =========================================================
   7. DEMO INTERACTION
   ========================================================= */

/*
   Your website currently does NOT have a real
   "Try Demo" button.

   So we make the SELL IMPACT card itself clickable.

   When the user clicks the card, a demo popup appears.
*/

const sellCard =
    document.querySelector(".sell-card");


if (sellCard) {

    sellCard.style.cursor = "pointer";

    sellCard.addEventListener("click", function () {

        showHarvestifyDemo();

    });

}


/* =========================================================
   8. HARVESTIFY DEMO
   ========================================================= */

function showHarvestifyDemo() {

    /*
       Prevent duplicate popup
    */

    if (document.getElementById("harvestifyDemo")) {
        return;
    }


    /* Sample transaction */

    const quantity = 5;

    const buyPrice = 1000;

    const sellPrice = 1300;


    /* Capital gain */

    const capitalGain =
        (sellPrice - buyPrice) * quantity;


    /* Demo tax calculation */

    const estimatedTax =
        capitalGain * 0.20;


    /*
       Create popup
    */

    const demo =
        document.createElement("div");

    demo.id = "harvestifyDemo";

    
demo.innerHTML = `

    <div class="demo-modal">

        <button
            class="demo-close"
            id="closeDemo"
            aria-label="Close"
        >×</button>

        <div class="demo-topline">
            
            <span class="demo-label">ILLUSTRATIVE DEMO</span>
        </div>

        <p class="demo-eyebrow">
            HARVESTIFY · SELL SIMULATOR
        </p>

        <h2>Before you sell.</h2>

        <p class="demo-description">
            Understand the potential financial impact
            before making your selling decision.
        </p>

        <div class="demo-stock">

            <div>
                <small>STOCK</small>
                <strong>RELIANCE</strong>
            </div>

            <div class="demo-sample-status">
                <span class="demo-live-dot"></span>
                SAMPLE DATA
            </div>

        </div>

        <div class="demo-metrics">

            <div class="demo-metric">
                <small>QUANTITY</small>
                <strong>${quantity} shares</strong>
            </div>

            <div class="demo-metric">
                <small>SELL PRICE / SHARE</small>
                <strong>₹${sellPrice.toLocaleString("en-IN")}</strong>
            </div>

            <div class="demo-metric">
                <small>FIFO BUY PRICE / SHARE</small>
                <strong>₹${buyPrice.toLocaleString("en-IN")}</strong>
            </div>

            <div class="demo-metric demo-gain">
                <small>CAPITAL GAIN</small>
                <strong>₹${capitalGain.toLocaleString("en-IN")}</strong>
            </div>

        </div>

        <div class="demo-tax-card">
            <div>
                <small>ESTIMATED TAX</small>
                <p>Based on demo assumptions</p>
            </div>

            <strong>
                ₹${estimatedTax.toLocaleString("en-IN")}
            </strong>
        </div>

        <div class="demo-result">
            <div>
                <small>ESTIMATED TAX IMPACT</small>
                <strong>
                    ₹${estimatedTax.toLocaleString("en-IN")}
                </strong>
            </div>

            <span class="demo-result-arrow">↗</span>
        </div>

        <p class="demo-disclaimer">
            Sample calculation for demonstration only.
            Actual gains and tax depend on transaction history
            and applicable tax rules.
        </p>

    </div>

`;



    document.body.appendChild(demo);


    /* =====================================================
       POPUP STYLING
       ===================================================== */

    demo.style.position = "fixed";

    demo.style.inset = "0";

    demo.style.zIndex = "99999";

    demo.style.display = "flex";

    demo.style.alignItems = "center";

    demo.style.justifyContent = "center";

    demo.style.padding = "20px";

    demo.style.background =
        "rgba(0, 0, 0, 0.78)";

    demo.style.backdropFilter =
        "blur(10px)";


    const modal =
        demo.querySelector(".demo-modal");


    modal.style.position = "relative";

    modal.style.width = "100%";

    modal.style.maxWidth = "480px";

    modal.style.padding = "38px";

    modal.style.background =
        "#0E1014";

    modal.style.color =
        "#F4F1EA";

    modal.style.border =
        "1px solid rgba(214,179,106,0.35)";

    modal.style.borderRadius =
        "20px";

    modal.style.boxShadow =
        "0 30px 100px rgba(0,0,0,0.6)";

    modal.style.fontFamily =
        "DM Sans, sans-serif";


    /* =====================================================
       CLOSE BUTTON
       ===================================================== */

    const closeButton =
        document.getElementById("closeDemo");


    closeButton.addEventListener(
        "click",
        function () {

            demo.remove();

        }
    );


    /* =====================================================
       CLICK OUTSIDE TO CLOSE
       ===================================================== */

    demo.addEventListener(
        "click",
        function (event) {

            if (event.target === demo) {

                demo.remove();

            }

        }
    );

}


/* =========================================================
   9. ESCAPE KEY CLOSES DEMO
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            const demo =
                document.getElementById(
                    "harvestifyDemo"
                );

            if (demo) {
                demo.remove();
            }

        }

    }
);


/* =========================================================
   10. SCROLL REVEAL ANIMATION
   ========================================================= */

const revealElements =
    document.querySelectorAll(
        ".feature-card, .problem-card, .founder-card, .process-item"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    revealElements.forEach(
        function (element) {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(30px)";

            element.style.transition =
                "opacity 0.7s ease, transform 0.7s ease";

            observer.observe(element);

        }
    );

}


/* =========================================================
   11. BUTTON PRESS EFFECT
   ========================================================= */

const buttons =
    document.querySelectorAll(
        "button, .primary-button, .secondary-button, .nav-button"
    );


buttons.forEach(function (button) {

    button.addEventListener(
        "mousedown",
        function () {

            this.style.transform =
                "scale(0.97)";

        }
    );


    button.addEventListener(
        "mouseup",
        function () {

            this.style.transform = "";

        }
    );


    button.addEventListener(
        "mouseleave",
        function () {

            this.style.transform = "";

        }
    );

});


/* =========================================================
   12. FIX "#" LINKS
   ========================================================= */

/*
   Founder LinkedIn buttons currently have:

   href="#"

   So clicking them should NOT jump the page
   to the top.
*/

const emptyLinks =
    document.querySelectorAll('a[href="#"]');


emptyLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            console.log(
                "This link needs a real URL."
            );

        }
    );

});


/* =========================================================
   13. FINAL MESSAGE
   ========================================================= */

console.log(
    "✓ Harvestify JavaScript loaded successfully."
);


/* ===== HARVESTIFY SAMPLE SALE CALCULATOR ===== */

const calculateButton = document.getElementById("calculateImpact");

if (calculateButton) {
    calculateButton.addEventListener("click", function () {
        const quantityInput = document.getElementById("sellQuantity");
        const buyPriceInput = document.getElementById("buyPrice");
        const sellPriceInput = document.getElementById("sellPrice");
        const errorMessage = document.getElementById("simulatorError");

        const quantity = Number(quantityInput.value);
        const buyPrice = Number(buyPriceInput.value);
        const sellPrice = Number(sellPriceInput.value);

        errorMessage.textContent = "";

        if (
            quantityInput.value.trim() === "" ||
            buyPriceInput.value.trim() === "" ||
            sellPriceInput.value.trim() === "" ||
            !Number.isSafeInteger(quantity) ||
            quantity < 1 ||
            !Number.isFinite(buyPrice) ||
            !Number.isFinite(sellPrice) ||
            buyPrice < 0 ||
            sellPrice < 0
        ) {
            errorMessage.textContent =
                "Please enter a whole number of shares and valid non-negative prices.";
            return;
        }

        const saleValue = quantity * sellPrice;
        const purchaseCost = quantity * buyPrice;
        const capitalGain = saleValue - purchaseCost;

        const money = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        document.getElementById("saleValue").textContent =
            money.format(saleValue);

        document.getElementById("purchaseCost").textContent =
            money.format(purchaseCost);

        document.getElementById("capitalGain").textContent =
            money.format(capitalGain);

        const gainElement = document.getElementById("capitalGain");
        gainElement.style.color =
            capitalGain >= 0 ? "#70C39B" : "#FF9B91";
    });
}
