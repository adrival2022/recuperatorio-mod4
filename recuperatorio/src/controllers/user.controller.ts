import { Request, Response } from "express";
import { CustomError } from "../utils/custom.error";
import { HandleError } from "../utils/handle.error";
import { JwtUtils } from "../utils/jwt-utils";
import { User } from "./../entities/user";

// Obtener todoss los usuarios
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    JwtUtils.authorization(req, res);
    const users = await User.find();
    res.json(users);
  } catch (error: unknown) {
    HandleError.processError(res, error);
  }
};

// Obtener un usuario por ID
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = parseInt(id);
  try {
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrada" });
    }
    res.json(user);
  } catch (error: unknown) {
    HandleError.processError(res, error);
  }
};

// Crear un nuevo usuario
export const createUser = async (req: Request, res: Response) => {
  const newUser = User.createEntity(req.body);
  try {
    const savedUser = await User.save(newUser);
    res.status(201).json(savedUser);
  } catch (error: unknown) {
    HandleError.processError(res, error);
  }
};

// Actualizar una receta por ID
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const auxId = parseInt(id);
    const currentUser = await User.findOne({ where: { id: auxId } });
    if (!currentUser) {
      throw new CustomError(400, "Usuario no encontrado");
    }
    const result = await User.save({
      ...currentUser,
      ...User.createEntity(req.body),
    });
    res.json(result);
  } catch (error: unknown) {
    HandleError.processError(res, error);
  }
};

// Eliminar un usuario por ID
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findOne({ where: { id: +id } });
    if (!deletedUser) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.json(deletedUser);
  } catch (error: unknown) {
    HandleError.processError(res, error);
  }
};
