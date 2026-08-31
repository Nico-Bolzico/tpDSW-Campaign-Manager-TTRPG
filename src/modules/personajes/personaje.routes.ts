import { Router } from "express";
import { personajeController } from "./personaje.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

router.use(authMiddleware); // todas requieren estar logueado

router.post("/", personajeController.create);
router.get("/mios", personajeController.misPersonajes);
router.get("/:id", personajeController.getOne);
router.patch("/:id", personajeController.update);
router.delete("/:id", personajeController.delete);

export default router;