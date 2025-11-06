import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

// Permite receber JSON no corpo das requisições
app.use(express.json());

// Configuração CORS (permite chamadas do front na Vercel)
app.use(cors({
  origin: "*", // ou substitua por: "https://authentication-page-py4l.vercel.app"
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
}));

// 🔹 Endpoint simples para testar se o servidor está online
app.get("/", (req, res) => {
  res.send("✅ API online e funcionando no Render!");
});

// 🔹 Criar usuário
app.post("/usuarios", async (req, res) => {
  try {
    console.log(req.body);
    const { email, name, favoriteSport, state, password } = req.body;

    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        favoriteSport,
        state,
        password,
      },
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});

// 🔹 Buscar usuários
app.get("/usuarios", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

// 🔹 Login / Checar usuário
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email e senha são obrigatórios" });
    }

    // Busca o usuário pelo email e senha
    const user = await prisma.user.findFirst({
      where: {
        email,
        password, // ⚠️ Em produção, use hash de senha! Nunca salve senha em texto puro.
      },
    });

    if (!user) {
      return res.status(401).json({ message: "Usuário não encontrado ou senha incorreta" });
    }

    // Retorna os dados do usuário
    res.status(200).json({
      name: user.name,
      email: user.email,
      favoriteSport: user.favoriteSport,
      state: user.state,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao checar usuário" });
  }
});


// Usa a porta do Render ou 3001 localmente
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor iniciado na porta ${PORT}`);
});
