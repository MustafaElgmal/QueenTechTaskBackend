import jwt from "jsonwebtoken";
import { NextFunction, Response } from "express";
import { RequestAuthType } from "../types";
import { verifyToken } from "../utils/functions";
export const auth = async (
  req: RequestAuthType,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Please Authenticate!" });
  }
  try {
    const userName = await verifyToken(authorization);
    req.userName = userName;
    next();
  } catch (e) {
    res.status(401).json({ error: "Please vaild Authenticate!" });
  }
};
