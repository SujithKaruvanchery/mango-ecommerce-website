const { registerAdmin, loginAdmin, checkAdmin, logoutAdmin, adminProfile, updateAdminProfile } = require('../../controllers/adminControllers')
// const { getProduct, getProductById, updateProduct, deleteProduct, createProduct } = require('../../controllers/productControllers')
const { adminAuth } = require('../../middlewares/adminAuth')

const adminRouter = require('express').Router()

adminRouter.post("/signup", registerAdmin)
adminRouter.post("/login", loginAdmin)
adminRouter.get("/profile", adminAuth, adminProfile)
adminRouter.get("/logout", logoutAdmin)
adminRouter.get("/check-admin", adminAuth, checkAdmin)
adminRouter.put("/update-profile", adminAuth, updateAdminProfile)

// adminRouter.get("/get-all-products",getProduct)
// adminRouter.get("/get-product/:id",getProductById)
// adminRouter.post("/create-product", createProduct)
// adminRouter.put("/update-product/:id",updateProduct)
// adminRouter.delete("/delete-product/:id", deleteProduct)

module.exports = adminRouter
