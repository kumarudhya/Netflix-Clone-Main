import express from "express"
import User from "../controller/user.js";
const Router = express.Router();

Router.post("/user_Reg",User.register)
Router.post("/user_Log",User.login)
Router.post("/addPlan",User.plan)
export default Router