let cart = JSON.parse(localStorage,getItem("cart")) || [];

const response = await fetch("http://localhost:3000/menu");
const menu = await response.json();

const cartDiv = document.getElementById("cartItems");

cartDiv.innerHTML = "";

cart.forEach(cartId => {

    const item = menu.find(food => food.id === cartId);

    if (item){
        const card = document.createElement("div");

        card.innerHTML = ` 
            <h3>($item.name)</h3>
            <p>($item.price)</p>
            `;

            cartDiv.appendChild(card);
        }
    });

loadCart();