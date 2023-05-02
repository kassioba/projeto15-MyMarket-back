import { Router } from "express"
import { getOrder, getOrders, getProducts, newOrder } from "../controllers/products.controller.js"
import { authValidation } from "../middlewares/authValidation.middleware.js"

const productsRouter = Router()

productsRouter.get("/home", getProducts)
productsRouter.post("/cart", authValidation, newOrder)
productsRouter.get('/orders', authValidation, getOrders)
productsRouter.get('/orders/:OrderId', authValidation, getOrder)

export default productsRouter