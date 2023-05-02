import { Router } from "express"
import { getProducts, newOrder } from "../controllers/products.controller.js"
import { authValidation } from "../middlewares/authValidation.middleware.js"

const productsRouter = Router()

productsRouter.get("/home", getProducts)
productsRouter.post("/cart", authValidation, newOrder)

export default productsRouter