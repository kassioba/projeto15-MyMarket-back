import { db } from "../database/database.connection.js"

export async function getProducts(req, res) {
  
    try {
        
        const products = await db.collection("products").find().toArray()

        if(!products) return res.sendStatus(404)
  
        return res.status(200).send(products)

    } catch (err) {
      console.log(err.message)
    }
  }

//   export async function addProduct(req, res) {
//     const { description, price, name, image, stock } = req.body;
//     const { authorization } = req.headers;
//     const token = authorization?.replace("Bearer ", "");
  
//     try {
//       const session = await db.collection("sessions").findOne({ token });
  
//       if (!session) {
//         return res.sendStatus(401);
//       }
  
//       if (price <= 0) {
//         return res.status(422).send("O valor deve ser um número positivo!");
//       }
  
    //   const newProduct = {
    //     name,
    //     description,
    //     price,
    //     image,
    //     date: new Date(),
    //   };
  
//       await db.collection("products").insertOne(newProduct);
//       res.sendStatus(200);
//     } catch (err) {
//       console.log(err.message);
//     }
//   }

  export async function newOrder(req, res) {
    const { productsId, buyerId, finalPrice } = req.body
  
    try {

        const newOrder = {
            productsId,
            buyerId,
            finalPrice,
            date: new Date()
        }
      
        await db.collection("orders").insertOne(newOrder);
        
        return res.sendStatus(200);
    
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  export async function addProduct(req, res) {
    const {name, description, price, image } = req.body

    const newProduct = {
      name,
      description,
      price,
      image,
      date: new Date(),
    }

    try{

      await db.collection("products").insertOne(newProduct)
      return res.sendStatus(200)
    } catch (error) {
      res.status(500).send(error.message)
    }
  }