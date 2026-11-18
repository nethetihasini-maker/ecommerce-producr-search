let cart = [];

function addToCart(product) {
    cart.push(product);
    alert(product + " added to cart!");

    localStorage.setItem("cartItems", JSON.stringify(cart));
}
/* FILTER PRODUCTS */

function filterProducts() {

    let category =
    document.getElementById("categoryFilter").value;

    let price =
    document.getElementById("priceFilter").value;

    let products =
    document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        let productCategory =
        product.getAttribute("data-category");

        let productPrice =
        product.getAttribute("data-price");

        let categoryMatch =
            category === "all" ||
            category === productCategory;

        let priceMatch =
            price === "all" ||
            productPrice <= price;

        if(categoryMatch && priceMatch) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}
<div class="confirmation-box">

    <h1>Order Placed Successfully ✅</h1>

    <h2>Order Confirmation</h2>

    <p>Your order has been confirmed.</p>

    <p>
        Order No:
        <strong id="orderNumber"></strong>
    </p>

    <p>
        Thank you for shopping with us.
    </p>

    <p>
        Your order will be delivered within 3-5 days.
    </p>

    <button onclick="goHome()">
        Continue Shopping
    </button>

</div>
