import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoClient = new MongoClient("mongodb+srv://myMarketDataBase:MyMarket123@cluster0.dtmjw9v.mongodb.net/MyMarket?retryWrites=true&w=majority");
try {
    await mongoClient.connect();
    console.log("MongoDB conectado!");
} catch (err) {
    console.log(err.message);
}

export const db = mongoClient.db();