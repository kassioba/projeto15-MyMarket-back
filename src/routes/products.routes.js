import { Router } from "express"
import { addProduct, getProducts, newOrder } from "../controllers/products.controller.js"

const productsRouter = Router()

productsRouter.get("/home", getProducts)
productsRouter.post("/cart", newOrder)
productsRouter.post("/teste", addProduct)

export default productsRouter