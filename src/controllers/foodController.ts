import { Request, Response } from 'express';
import Food, { FoodDocument } from '../model/food';

const foodController = {
    addFood: async (req: Request, res: Response) => {
        try {
            const newFood = new Food(req.body);
            const savedFood: FoodDocument = await newFood.save();
            res.status(200).json(savedFood);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllFood: async (req: Request, res: Response) => {
        try {
            const food: FoodDocument[] = await Food.find();
            res.status(200).json(food);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getFoodByID: async (req: Request, res: Response) => {
        try {
            res.status(200).json((await Food.findById(req.params.id)));
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateFood: async (req: Request, res: Response) => {
        try {
            const food: FoodDocument | null = await Food.findById(req.params.id);
            if (food) {
                await food.updateOne({ $set: req.body });
                res.status(200).json({ message: "Update Food Successful" });
            } else {
                res.status(404).json({ message: "Food not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteFood: async (req: Request, res: Response) => {
        try {
            const food: FoodDocument | null = await Food.findByIdAndDelete(req.params.id);
            if (food) {
                res.status(200).json({ message: "Delete Food Successful" });
            } else {
                res.status(404).json({ message: "Food not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

export default foodController;

export function addFood(req: Request, res: Response) {
    foodController.addFood(req, res)
}

export function getAllFood(req: Request, res: Response) {
    foodController.getAllFood(req, res)
}

export function getFoodByID(req: Request, res: Response) {
    foodController.getFoodByID(req, res)
}

export function updateFood(req: Request, res: Response) {
    foodController.updateFood(req, res)
}

export function deleteFood(req: Request, res: Response) {
    foodController.deleteFood(req, res)
}
