import express from "express"
import { notUsing, open, using, notOpen } from "./apiController"
import routes from "./routes"

const apiRouter = express.Router()

//USING
apiRouter.get(routes.notUsing,notUsing)
apiRouter.get(routes.using,using)

//OPEN
apiRouter.get(routes.open,open)
apiRouter.get(routes.notOpen, notOpen)

export default apiRouter