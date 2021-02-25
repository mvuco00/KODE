import express from "express";
import { signin, signup } from "../controllers/users.js";

// instanca
const router = express.Router();

// POST ruta jer moramo poslati posatke backendu
// podaci iz forme iz fronteda, šalju se backendu
// onda se pozove signin controler
router.post("/signin", signin);
router.post("/signup", signup);

export default router;
