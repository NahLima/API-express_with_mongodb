import express from 'express';
import db from "./config/dbConect.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
  console.log("MongoDB UP")
})

const app = express();
app.use(express.json()) // reconhece o que foi enviado pelo body no postman
routes(app)

export default app
