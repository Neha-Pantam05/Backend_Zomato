// create server
const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.route.js")
const foodRoutes = require("./routes/food.route.js")
const foodPartnerRoutes = require("./routes/foodPartner.route.js");


const app = express();

const cors = require("cors");

app.use(
  cors({
    origin: "https://frontend-zomato.vercel.app",
    credentials: true,
  })
);

app.use(express.json());

app.use(cookieParser());


app.get("/", (req,res) =>{
  res.send("Welcome to Zomato API");
})

app.use("/api/auth",authRoutes)
app.use("/api/food",foodRoutes)
app.use("/api/foodPartner",foodPartnerRoutes)


module.exports = app;

