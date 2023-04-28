import { Router } from "express";
import { validationLogin } from "../utils/validations";
import { createToken } from "../utils/functions";
import { users } from "../constants";

const router = Router();

router.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  try {
    const errors = validationLogin({ userName, password });
    if (errors.length > 0) {
      return res.status(400).json(errors);
    }
    const user = users.find(
      (ele) =>
        ele.userName === userName.toLowerCase() &&
        ele.password === password.toLowerCase()
    );
    if (!user) {
      return res.status(404).json({ message: "User is not found!" });
    }

    const token = createToken(userName);
    res.status(200).json({ token });
  } catch (e) {
    res.status(500).json({ error: "Server is down!" });
  }
});

export default router;
