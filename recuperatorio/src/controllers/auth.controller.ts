import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { CustomError } from "../utils/custom.error";
import { HandleError } from "../utils/handle.error";

export const loginController = (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    if (!(username === "jorge" && password === "1234")) {
      throw CustomError.forbidden();
    }

    let tokenData = {
      username: username,
    };

    const token = jwt.sign(tokenData, "secret password", {
      expiresIn: 60 * 60 * 24,
    });

    res.send({
      token,
    });
  } catch (error) {
    HandleError.processError(res, error);
  }
};
