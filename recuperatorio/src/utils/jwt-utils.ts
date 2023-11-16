import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { CustomError } from "./custom.error";

export class JwtUtils {
  static authorization = (req: Request, res: Response) => {
    let token = req.headers["authorization"];
    if (!token) {
      throw CustomError.unauthorized();
    }
    token = token?.replace("Bearer ", "");
    return jwt.verify(token, "secret password", (err, decoded) => {
      if (err) {
        throw CustomError.unauthorized();
      }
      return decoded;
    });
  };
}
