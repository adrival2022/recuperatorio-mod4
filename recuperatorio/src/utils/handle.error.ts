import { Response } from "express";
import { CustomError } from "./custom.error";

export class HandleError {
  static processError(res: Response, error: any) {
    if (error instanceof CustomError) {
      res.status(error.statusCode).json({
        error: error.message,
      });
    } else if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
}
