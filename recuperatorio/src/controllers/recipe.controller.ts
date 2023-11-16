import { Request, Response } from "express";
import { Recipe } from "../entities/recipe";
import { HandleError } from "../utils/handle.error";
import { JwtUtils } from "../utils/jwt-utils";
import { CustomError } from "../utils/custom.error";

// Obtener todas las recetas
export const getAllRecipes = async (req: Request, res: Response) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        HandleError.processError(res, error);
    }
}

// Obtener una receta por ID
export const getRecipeById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const recipeId = parseInt(id);
        const recipe = await Recipe.findOne({where: { id: recipeId }});
        if (!recipe) {
            throw CustomError.badRequest( 'Receta no encontrada');
        }
        res.json(recipe);
    } catch (error) {
        HandleError.processError(res, error);
    }
}

// Crear una nueva receta
export const createRecipe = async (req: Request, res: Response) => {
    const newRecipe = Recipe.createEntity(req.body);
    try {
        JwtUtils.authorization(req, res);
        const savedRecipe = await Recipe.save(newRecipe);
        res.status(200).json(savedRecipe);
    } catch (error) {
        HandleError.processError(res, error);
    }
}

// Actualizar una receta por ID
export const updateRecipe = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        JwtUtils.authorization(req, res);
        const currentRecipe = await Recipe.findOne({where: { id: +id }});
        if (!currentRecipe) {
            throw CustomError.badRequest('Receta no encontrada');
        }
        const result = await Recipe.update(id,{ ...currentRecipe, ...Recipe.createEntity(req.body)});
        res.json({status:'success'});
    } catch (error) {
        HandleError.processError(res, error);
    }
}

// Eliminar una receta por ID
export const deleteRecipe = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        JwtUtils.authorization(req, res);
        const deletedRecipe = await Recipe.delete({id:+id});
        if (!deletedRecipe.affected) {
            throw CustomError.badRequest('Receta no encontrada');
        }
        res.json({status:'success'});
    } catch (error) {
        HandleError.processError(res, error);
    }
}