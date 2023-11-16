export class CustomError extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly message: string
  ) {
    super(message);
  }

  static badRequest(message: string = "Bad Request") {
    return new CustomError(400, message);
  }
  static unauthorized(message: string = "Unauthorized") {
    return new CustomError(401, message);
  }
  static forbidden(message: string = "Forbidden") {
    return new CustomError(403, message);
  }
  static notFound(message: string = "Not Found") {
    return new CustomError(404, message);
  }
  static serverError(message: string = "Internal Server Error") {
    return new CustomError(500, message);
  }
}
