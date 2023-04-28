import { NextFunction, Request, Response } from "express";
import { getlinesInFile } from "../utils/functions";
import { ResponseType, ResultsType } from "../types";

export const pagination = async (
  req: any,
  res: ResponseType,
  next: NextFunction
) => {
  if (!req.query.path) {
    return res.status(401).send({ message: "Path is required!" });
  }
  if (!req.query.page || !req.query.limit) {
    return res.status(401).send({ message: "Please must well pagination!" });
  }
  if (req.query.page <= 0 || req.query.limit <= 0) {
    return res
      .status(401)
      .send({ message: "Please must enter postive number!" });
  }
  try {
    const lines = getlinesInFile(req.query.path);

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndx = (page - 1) * limit;
    const endIndx = page * limit;
    const results: ResultsType = {};
    if (startIndx > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    if (endIndx < lines.length) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    results.results = lines.slice(startIndx, endIndx);

    res.pagination = { results, fileSize: lines.length};
    next();
  } catch (e) {
    res.status(401).send({ error: "Please must well pagination!" });
  }
};
