import express from 'express'
import dotenv from 'dotenv'
import router from './routes/index.routes.js'
import cors from 'cors';

const app = express();

app.use(cors())
app.use(express.json());
app.use(router);

dotenv.config();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))