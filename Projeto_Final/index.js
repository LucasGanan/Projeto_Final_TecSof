import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

// Rotas
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "index.html"));
});

app.get("/historia", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "historia.html"));
});

app.get("/produtos", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "produtos.html"));
});

app.get("/time", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "time.html"));
});

app.get("/idolos", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "idolos.html"));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

