async function loadCart(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const response = await fetch("http://localhost:3000/menu");
    const menu = await response.json();

    const cartDiv = document.getElementById("cartItems");

    cartDiv.innerHTML = "";

    let total = 0;

    cart.forEach(cartId => {

        const item = menu.find(food => food.id === cartId);

        if(item){

            total += item.price;

            const card = document.createElement("div");

            card.innerHTML = `
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;

            cartDiv.appendChild(card);
        }

    });

    document.getElementById("totalPrice").innerText = total.toFixed(2);
}

function removeFromCart(id){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item !== id);
    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();
}

function checkout(){

    alert("Order submitted!");
    localStorage.removeItem("cart");
    loadCart();
}

loadCart();
