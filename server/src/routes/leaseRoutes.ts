import  express from "express";
import { getLeasepayments, getLeases } from "../controllers/leaseControllers";
import { authMiddleware } from "../middleware/authMiddleware";



const router = express.Router();

router.get("/", authMiddleware(["manager", "tenant"]), getLeases)
router.get("/", authMiddleware(["manager", "tenant"]), getLeasepayments)

export default router