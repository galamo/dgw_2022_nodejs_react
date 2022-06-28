import express from "express"
const loginRouter = express.Router()

loginRouter.post("/login",
    async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const body = req.body
        try {
            res.json({ message: "ok", body })
        } catch (ex) {
            console.log(ex.message)
            return next(new Error(ex.message))
        }
    })


export { loginRouter };

