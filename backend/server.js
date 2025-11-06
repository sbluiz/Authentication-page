import express, { json } from 'express'
import { PrismaClient } from '@prisma/client'
import cors from "cors";
const app = express();
const prisma = new PrismaClient()
app.use(express.json())
const PORT = 3001;
app.use(cors())


app.post("/usuarios", async (req, res) => {
    try {
        console.log(req.body)
        const { email, name, favoriteSport, state, password} = req.body;
        const newUser = await prisma.user.create({
            data: {
                email,
                name,
                favoriteSport,
                state,
                password
            },
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao criar usuário" });
    }
});



app.get("/usuarios", async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar usuários" });
    }
    
});


app.listen(PORT, () => {
    console.log('Servidor iniciado.');
});

