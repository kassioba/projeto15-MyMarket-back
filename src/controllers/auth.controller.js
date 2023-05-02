import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { db } from "../database/database.connection.js";

export async function signUp(req, res){
    const { name, email, password } = req.body;

    try{
        const user = await db.collection("users").findOne({ email });
        if(user){
            return res.status(409).send("Email already registered");
        }

        const hash = bcrypt.hashSync(password, 10);

        await db.collection("users").insertOne({ name, email, password: hash });
        return res.sendStatus(201);
    }catch(err){
        return res.status(500).send(err.message);
    }
}

export async function signIn(req, res){
    const { email, password } = req.body;

    try{
        const user = await db.collection("users").findOne({ email });
        if(!user){
            return res.status(409).send("Invalid email");
        }

        const comparePassword = bcrypt.compareSync(password, user.password);
        if(!comparePassword){
            return res.status(401).send("Wrong assword");
        }

        const token = uuid();
        await db.collection("sessions").insertOne({ token, userId: user._id });
        res.status(201).send({ token, userName: user.name, userId: user._id });
    }catch(err){
        res.status(500).send(err.message);
    }
}

export async function signOut(req, res) {
    const { token } = res.locals.session;

    try {
        await db.collection("sessions").deleteOne({ token });
        res.sendStatus(200);
    }catch(err){
        res.status(500).send(err.message);
    }
}