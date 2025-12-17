const products = [
  {
    name: "Twisted Petal Gold Ring",
    price: "₹79,904",
    image: ""
  },
  {
    name: "Elegant Solitaire Ring",
    price: "₹89,500",
    image: ""
  },
  {
    name: "Classic Diamond Ring",
    price: "₹95,000",
    image: ""
  }
];

const productContainer = document.getElementById("products");

function renderProducts() {
  productContainer.innerHTML = "";
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p>${product.price}</p>
    `;
    productContainer.appendChild(div);
  });
}

renderProducts();

/* Tabs Interaction */
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelector(".tab.active").classList.remove("active");
    tab.classList.add("active");
  });
});
