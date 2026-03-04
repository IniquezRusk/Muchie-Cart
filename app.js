async function loadMenu() {
    const response = await fetch("http://localhost:3000/menu");
    const menu = await response.json();

    const menuDiv = document.getElementById("menu");

    menu.forEach(item => {
        const card = document.createElement("div");

        card.innerHTML = `
        <h3>${item.name}</h3>
        <p>$${item.price}</p>
        <p>Ingredients: ${item.ingredients.join(", ")}</p>
        <button onclick="addToCart(${item.id})>Add To Cart</button>
        `;

        menuDiv.appendChild(card);
    });
 }

 let cart = JSON.parse(localStorage.getItem("cart")) || [];

 function addToCart(id) {
    cart.push(id);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to cart!");
 }

