import { Router } from "express";
import { listTires, tireDetail } from "../controllers/tires.controller.js";
const router = Router();
router.get("/", listTires);
router.get("/:id", tireDetail);
export default router;
