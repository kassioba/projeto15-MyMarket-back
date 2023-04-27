import express from 'express'
import cors from 'cors'
import {MongoClient} from 'mongodb'
import dotenv from 'dotenv'

const app = express()

app.use(express.json())
app.use(cors)
dotenv.config()

const mongoClient = new MongoClient(process.env.DATABASE_URL);
let db;

mongoClient
  .connect()
  .then(() => {
    console.log('MongoDB conectado!')
    db = mongoClient.db()})
  .catch((err) => console.log(err.message));

  app.listen(5000)