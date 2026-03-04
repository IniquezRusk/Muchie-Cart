const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
    res.json({ message: "MunchieCart server running" });
});

app.listen(3000, () => {
    console.log("Server running");
});

app.get("/menu", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Beef Burger",
            price: 6.99,
            ingredients: ["Beef", "Bun", "Lettuce", "Tomato"]
        },
        {
            id: 2,
            name: "Chicken Bowl",
            price: 7.99,
            ingredients: ["Chicken", "Rice", "Vegetables"]
        },
        {
            id: 3,
            name: "Breakfast Plate",
            price: 5.99,
            ingredients: ["Eggs", "Bacon", "Toast"]
        },
     ]);
    });