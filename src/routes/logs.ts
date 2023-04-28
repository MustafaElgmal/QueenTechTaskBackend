import { Router } from "express";
import { auth } from "../middlewares/auth";
import { pagination } from "../middlewares/pagination";
import { ResponseType } from "../types";
const router = Router();

router.get("/", auth, pagination, async (req, res: ResponseType) => {
  try {
    res.send(res.pagination);
  } catch (e) {
    res.status(500).json({ error: "Server is down!" });
  }
});

export default router;
