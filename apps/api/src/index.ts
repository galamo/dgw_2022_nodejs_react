import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import { productsRouter } from "./products"
import { loginRouter } from "./login"
import cors from "cors"
import addRequestId from "./middleware/requestId";
import logger from "./logger"
dotenv.config();

const app = express();

app.use(bodyParser.json())
app.use(addRequestId)
app.use(cors())
app.use((req, res, next) => {
    logger.info(`${new Date().toISOString()} : ${req.url}`)
    console.log(`${new Date().toISOString()} : ${req.url}`)
    console.log(`${new Date().toISOString()} : ${req.url}`)

    next()
})



app.get("/healthcheck", (req, res) => {
    res.send(`Api is Up ${new Date().toISOString()}`)
})
app.use("/auth", loginRouter)
app.use("/products", productsRouter)

app.use((error, req, res, next) => {
    console.log(error, req.requestId)
    res.status(500).send(`something went wrong ${req.requestId}`)
})

app.listen(process.env.PORT, () => {
    console.log(`Api is listening to: ${process.env.PORT}`)
})