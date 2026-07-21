import express from "express";
import { createContact, getAllMessage } from "../controllers/contactController.js";
const router = express.Router();

router.post("/", createContact);
router.get("/", getAllMessage);

export default router;