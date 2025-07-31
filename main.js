let productContainer = document.getElementById("product-container");
let cartList = document.getElementById("cart-list");
let totalDisplay = document.getElementById("total");

let cart = [];
let total = 0;

// Ma'lumotlarni fetch bilan olish
fetch("https://fakestoreapi.com/products") // faqat 8 ta mahsulot olish
  .then(res => res.json())
  .then(data => {
    renderProducts(data);
  });

// Mahsulotlarni ekranga chiqarish
function renderProducts(products) {
  products.forEach(product => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart('${product.title}', ${product.price})">Sotib olish</button>
    `;
    productContainer.appendChild(card);
  });
}

// Xaridlar ro'yxatiga qo‘shish
function addToCart(title, price) {
  cart.push({ title, price });
  total += price;
  renderCart();
}

function renderCart() {
  cartList.innerHTML = "";
  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.title} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
  });
  totalDisplay.textContent = total.toFixed(2);
}
