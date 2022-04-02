
require('dotenv').config()
const express = require('express')
const app = express()
require("./models/db");
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// server your css as static
app.use('/public', express.static('public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

const router = require("./route/routes")


app.use("/api", router)

// index route for home page
app.get("/", (req, res) => res.render("./pages/index"))

// About route for about page
app.get("/about", (req, res) => res.render("./pages/about"))

// Contact route for contact page
app.get("/contact", (req, res) => res.render("./pages/contact"))

// Tour route for Tour page
app.get("/tours", (req, res) => res.render("./pages/tours"))

// register route for Register page
app.get("/register", (req, res) => res.render("./pages/register"))

// login route for login page
app.get("/login", (req, res) => res.render("./pages/login"))

// Profile route for profile page
app.get("/profile", (req, res) => res.render("./pages/profile"))

// Edit Profile route for Edit page
app.get("/edit", (req, res) => res.render("./pages/editProfile"))


// ADMIN ROUTES

// Home Route
app.get("/admin", (req, res) => res.render("./admin/index"))
// User Route
app.get("/users", (req, res) => res.render("./admin/users"))
// Work Route
app.get("/works", (req, res) => res.render("./admin/works"))
// Add Work Route
app.get("/addwork", (req, res) => res.render("./admin/addwork"))

const port = process.env.PORT || 8800
app.listen(port, () => console.log(`Backend running on ${port}`))