
const router = require("express").Router()
const userController = require("../controllers/userController")
const jobController = require("../controllers/jobController")
const featuredController = require("../controllers/featuredController")
const adminController = require("../controllers/adminController")
const cartController = require("../controllers/cartController")

const {verifiedAccessToken, verifiedAdminToken} = require("./verifyTokens")

// USER ROUTES

// create user
router.post("/user/register", userController.createUser)
// login user
router.post("/user/login", userController.loginUser)
// Update User
router.put("/user/update/:id", verifiedAccessToken, userController.updateUser)
// Delete user
router.delete("/user/delete/:id", verifiedAccessToken, userController.deleteUser)
// Get one User
router.get("/user/get/:id", verifiedAccessToken, userController.getOneUser)
// Get All Users
router.get("/user/all/:id", verifiedAdminToken, userController.getAllUsers)


// ADMIN ROUTES

// create admin
router.post("/admin/register", adminController.createUser)
// login admin
router.post("/admin/login", adminController.loginUser)
// Update admin
router.put("/admin/update/:id", verifiedAccessToken, adminController.updateUser)
// Delete admin
router.delete("/admin/delete/:id", verifiedAccessToken, adminController.deleteUser)

// PORODUCT ROUTES

// create product
router.post("/product/create/:id", verifiedAdminToken, jobController.createJob)
// get one product
router.get("/product/get/:id", jobController.getOneJob)
// get varieties of products
router.get("/product/get", jobController.getJobs)
// Update product
router.put("/product/update/:id", verifiedAdminToken, jobController.updateJob)
// Delete product
router.delete("/product/delete/:id", verifiedAdminToken, jobController.deleteJob)


// FEATURED ROUTES

// create product
router.post("/featured/create/:id", verifiedAdminToken, featuredController.createProduct)
// get one product
router.get("/featured/get/:id", featuredController.getOneProduct)
// get varieties of products
router.get("/featured/get", featuredController.getProducts)
// Update product
router.put("/featured/update/:id", verifiedAdminToken, featuredController.updateProduct)
// Delete product
router.delete("/featured/delete/:id", verifiedAdminToken, featuredController.deleteProduct)

// Cart Routes

// Create cart
router.post("/cart/create/:id", verifiedAccessToken, cartController.createCart)
// Update cart
router.put("/cart/update/:id", verifiedAccessToken, cartController.updateCart)
// delete cart
router.delete("/cart/delete/:id", verifiedAccessToken, cartController.deleteCart)
// get user cart
router.get("/cart/user/:id", verifiedAccessToken, cartController.getUsersCart)
// get all carts
router.get("/cart/get/:id", verifiedAccessToken, cartController.getAllCart)



module.exports = router