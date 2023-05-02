import { db } from "../database/database.connection.js"
import dayjs from "dayjs"

export async function getProducts(req, res) {
    // envia um array com os produtos e suas infos
    try {
        
        const products = await db.collection("products").find().toArray()

        if(!products) return res.sendStatus(404)
  
        return res.status(200).send(products)

    } catch (err) {
      console.log(err.message)
    }
}

export async function newOrder(req, res) {
    const { products, customerId, finalPrice } = req.body

    // products vai ser um objeto que recebe o objeto do produto (products) e a quantidade colocada no carrinho (units)
    // salva um objeto contendo todas as infos do pedido na collection orders
  
    try {

        const newOrder = {
            products,
            customerId,
            finalPrice,
            date: dayjs(new Date()).format('DD/MM/YYYY')
        }
      
        await db.collection("orders").insertOne(newOrder);
        
        return res.sendStatus(200);
    
    } catch (error) {
      res.status(500).send(error.message);
    }
}