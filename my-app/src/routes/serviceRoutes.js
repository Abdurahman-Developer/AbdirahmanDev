import express from "express";
import { createService, getService } from "../controllers/serviceController.js";

const router = express.Router();

router.post("/",createService);
router.get("/",getService);

export default router;
