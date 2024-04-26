import express from "express";
import cors from "cors";
import {MercadoPagoConfig, Preference} from "mercadopago";

const app = express();
const port = 3000;
const client = new MercadoPagoConfig({ accessToken: 'TEST-4698487181845581-042520-c034ae01a6c12e7bac06aef7c22b694e-1756864809' });

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Servidor")
});

app.post("/create_preference", async (req, res) => {
    try {
        const body = {
            items: [
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.unit_price),
                    currency_id: "UY"
                }
            ],
            back_urls: {
                succes: "https://www.youtube.com/",
                failure: "https://www.youtube.com/",
                pending: "https://www.youtube.com/"
            },
            auto_return: "approved",
        }
        const preference = new Preference(client)
        const result = await preference.create({body});
        res.json({
            id: result.id
        })
    } catch(err) {
        console.log(err);
        res.status(500).json({error: "No se pudo comprobar el pago"});
    }
})

app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`)
});

