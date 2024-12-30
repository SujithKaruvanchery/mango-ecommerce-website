const { registerSeller, loginSeller, sellerProfile, checkSeller, updateSellerProfile, logoutSeller } = require('../../controllers/sellerController')
const { sellerAuth } = require('../../middlewares/sellerAuth')

const sellerRouter = require('express').Router()

sellerRouter.post("/signup", registerSeller)
sellerRouter.post("/login", loginSeller)
sellerRouter.get("/profile", sellerAuth, sellerProfile)
sellerRouter.get("/logout", logoutSeller)
sellerRouter.get("/check-seller", sellerAuth, checkSeller)
sellerRouter.put("/update-profile", sellerAuth, updateSellerProfile)

module.exports = sellerRouter