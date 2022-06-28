import express from "express"
import dotenv from "dotenv"
dotenv.config();

const app = express();

app.get("/healthcheck", (req, res) => {
    res.send("Api is Up")
})


app.listen(process.env.PORT, () => {
    console.log(`Api is listening to: ${process.env.PORT}`)
})