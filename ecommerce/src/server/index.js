import express from "express";
import cors from "cors";
import "dotenv/config.js";

const app = express();
const port = 3000;

const token = process.env.INSTA_TOKEN;
const url = `https://graph.instagram.com/me/media?fields=media_type,media_url&access_token=${token}`;
console.log(url);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Servidor")
});

app.get("/instagram", async (req, res) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data from Instagram API');
        }
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data from Instagram API' });
    }
});

app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`)
});

