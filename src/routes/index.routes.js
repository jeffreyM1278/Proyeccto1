import { Router } from "express";
import { getHome, getContact } from "../controllers/home.controller.js";
const router = Router();
router.get("/", getHome);
router.get("/contacto", getContact);
export default router;
