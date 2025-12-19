

// Elements
const cartPanel = document.getElementById("cartPanel");
const cartBtn = document.getElementById("cartBtn");
const closeCart = document.getElementById("closeCart");

cartBtn.addEventListener("click", () => {
  cartPanel.classList.add("open");
});

closeCart.addEventListener("click", () => {
  cartPanel.classList.remove("open");
});


// Add to cart (event delegation)
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    const name = e.target.dataset.name;
    const price = Number(e.target.dataset.price);
    cart.push({ name, price });
    updateCart();
  }
});

// Update UI
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <span>₱${item.price}</span>
        <button onclick="removeItem(${index})">❌</button>
      </div>
    `;
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total;
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Remove
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// Clear
function clearCart() {
  cart = [];
  updateCart();
}

// Load saved cart
(function () {
  const saved = localStorage.getItem("cart");
  if (saved) {
    cart = JSON.parse(saved);
    updateCart();
  }
})();
