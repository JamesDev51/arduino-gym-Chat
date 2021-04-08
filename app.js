console.clear();
import express from "express"

import {isUsing,isOpen} from "./apiController" 
import routes from "./routes"
import apiRouter from "./apiRouter"
import morgan from "morgan"

const app = express();

app.use(morgan("dev"))
app.use(routes.api,apiRouter);

export default app;