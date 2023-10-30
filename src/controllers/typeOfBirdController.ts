import { Request, Response } from 'express';
import TypeOfBird, { TypeOfBirdDocument } from '../model/typeofbird';

const typeofbirdController = {
    addTypeOfBird: async (req: Request, res: Response) => {
        try {
            const newTypeOfBird = new TypeOfBird(req.body);
            const saveTypeOfBird: TypeOfBirdDocument = await newTypeOfBird.save();
            res.status(200).json(saveTypeOfBird);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllTypeOfBird: async (req: Request, res: Response) => {
        try {
            const typeOfBirds: TypeOfBirdDocument[] = await TypeOfBird.find();
            res.status(200).json(typeOfBirds);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getTypeOfBirdByID: async (req: Request, res: Response) => {
        try {
            const typeOfBird: TypeOfBirdDocument | null = await TypeOfBird.findById(req.params.id);
            res.status(200).json(typeOfBird);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateTypeOfBird: async (req: Request, res: Response) => {
        try {
            const typeOfBird: TypeOfBirdDocument | null = await TypeOfBird.findById(req.params.id);
            if (typeOfBird) {
                await typeOfBird.updateOne({ $set: req.body });
                res.status(200).json({ message: "Update Bird Success" });
            } else {
                res.status(404).json({ message: "Bird not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteTypeOfBird: async (req: Request, res: Response) => {
        try {
            const deletedTypeOfBird: TypeOfBirdDocument | null = await TypeOfBird.findByIdAndDelete(req.params.id);
            if (deletedTypeOfBird) {
                res.status(200).json({ message: "Delete Bird Success" });
            } else {
                res.status(404).json({ message: "Bird not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

export default typeofbirdController;

export function addTypeOfBird(req: Request, res: Response) {
    typeofbirdController.addTypeOfBird(req, res)
}

export function getAllTypeOfBird(req: Request, res: Response) {
    typeofbirdController.getAllTypeOfBird(req, res)
}

export function getTypeOfBirdByID(req: Request, res: Response) {
    typeofbirdController.getTypeOfBirdByID(req, res)
}

export function updateTypeOfBird(req: Request, res: Response) {
    typeofbirdController.updateTypeOfBird(req, res)
}

export function deleteTypeOfBird(req: Request, res: Response) {
    typeofbirdController.deleteTypeOfBird(req, res)
}
