import express from "express";
const app = express();
const router = express.Router();
import { getAllUsers, createUser, getOneUser, updateUser, deleteUser } from "../controllers/user.js";


router.get("/users", getAllUsers);
router.get("/user/:id", getOneUser);
router.post("/user", createUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;