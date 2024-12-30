const adminRouter = require('./adminRoutes')
const productRouter = require('./productRoutes')
const userRouter = require('./userRoutes')
const sellerRouter = require('./sellerRoutes')
const cartRouter = require('./cartRoutes')
const reviewRouter = require('./reviewRoutes')

const v1Router = require('express').Router()

v1Router.use("/user",userRouter)
v1Router.use("/product", productRouter)
v1Router.use("/admin", adminRouter)
v1Router.use("/seller", sellerRouter)
v1Router.use("/cart", cartRouter)
v1Router.use("/review", reviewRouter)

module.exports = v1Router