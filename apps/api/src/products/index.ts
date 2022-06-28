import express from "express"
import axios from "axios"
import validateApiKey from "./middleware.apikey"
const productsRouter = express.Router()

productsRouter.use(validateApiKey)
productsRouter.get("/",
    async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const result = await axios.get(process.env.PRODUCTS_URL)
            res.json(result.data)
        } catch (ex) {
            console.log(ex.message)
            return next(new Error(ex.message))
        }
    })


productsRouter.get("/search",
    async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const { q: value } = req.query
            const result = await axios.get(`${process.env.PRODUCTS_URL}/search?q=${value}`)
            res.json(result.data)
        } catch (ex) {
            console.log(ex.message)
            return next(new Error(ex.message))
        }
    })

productsRouter.get("/:id",
    async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const id = req.params.id
            const result = await axios.get(`${process.env.PRODUCTS_URL}/${id}`)
            res.json(result.data)
        } catch (ex) {
            console.log(ex.message)
            return next(new Error(ex.message))
        }
    })

export { productsRouter };

