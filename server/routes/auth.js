// const router = require("express").Router();
// const SignupUser = require("../controllers/Auth/Signup");
// const LoginUser = require("../controllers/Auth/Login");
// const Logout = require("../controllers/Auth/Logout");
// const ChangePassword = require("../controllers/Auth/ChangePassword");

// const authRequired = require("../middleware/AuthRequired");

import express from "express";
import { SignupUser } from "../controllers/Auth/Signup.js";
import { LoginUser } from "../controllers/Auth/Login.js";
import { Logout } from "../controllers/Auth/Logout.js";
import { ChangePassword } from "../controllers/Auth/ChangePassword.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", SignupUser);
router.post("/login", LoginUser);
router.get("/logout", auth, Logout);

router.put("/update_password", auth, ChangePassword);

export default router;
