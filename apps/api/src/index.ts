import express from "express"
import dotenv from "dotenv"
import { productsRouter } from "./products"
import addRequestId from "./middleware/requestId";
dotenv.config();

const app = express();

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} : ${req.url}`)
    next()
})

app.use(addRequestId)

app.get("/healthcheck", (req, res) => {
    res.send(`Api is Up ${new Date().toISOString()}`)
})

app.use("/products", productsRouter)

app.use((error, req, res, next) => {
    console.log(error, req.requestId)
    res.status(500).send(`something went wrong ${req.requestId}`)
})

app.listen(process.env.PORT, () => {
    console.log(`Api is listening to: ${process.env.PORT}`)
})