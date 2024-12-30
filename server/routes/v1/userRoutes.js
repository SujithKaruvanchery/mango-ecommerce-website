const { register, login, userProfile, userLogout, checkUser, updateUserProfile, loginUser, logoutUser, registerUser, deactivateUser, activateUser } = require('../../controllers/userControllers')
const { upload } = require('../../middlewares/multer')
const { userAuth } = require('../../middlewares/userAuth')
const {adminAuth} = require("../../middlewares/adminAuth")

const userRouter = require('express').Router()

userRouter.post("/signup", upload.single("profilePicture"), registerUser)
userRouter.post("/login", loginUser)
userRouter.get("/profile", userAuth, userProfile)
userRouter.get("/logout", userAuth, logoutUser)
userRouter.put("/update-profile", userAuth, updateUserProfile)
// userRouter.put("/forgot-password")
userRouter.put("/deactive/:id",adminAuth, deactivateUser)
userRouter.put("/active/:id",adminAuth, activateUser)
userRouter.get("/check-user", userAuth, checkUser)

module.exports = userRouter
