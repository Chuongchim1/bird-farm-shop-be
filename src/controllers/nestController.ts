import { Request, Response } from 'express';
import Nest, { NestDocument } from '../model/nest';

const nestController = {
    addNest: async (req: Request, res: Response) => {
        try {
            const newNest = new Nest(req.body);
            const savedNest: NestDocument = await newNest.save();
            res.status(200).json(savedNest);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllNest: async (req: Request, res: Response) => {
        try {
            const nests: NestDocument[] = await Nest.find();
            res.status(200).json(nests);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getNestByID: async (req: Request, res: Response) => {
        try {
            const nest: NestDocument | null = await Nest.findById(req.params.id);
            if (nest) {
                res.status(200).json(nest);
            } else {
                res.status(404).json({ message: "Nest not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateNest: async (req: Request, res: Response) => {
        try {
            const nest: NestDocument | null = await Nest.findById(req.params.id);
            if (nest) {
                await nest.updateOne({ $set: req.body });
                res.status(200).json({ message: "Update Nest Success" });
            } else {
                res.status(404).json({ message: "Nest not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteNest: async (req: Request, res: Response) => {
        try {
            const deletedNest: NestDocument | null = await Nest.findByIdAndDelete(req.params.id);
            if (deletedNest) {
                res.status(200).json({ message: "Delete Nest Success" });
            } else {
                res.status(404).json({ message: "Nest not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

export default nestController;

export function addNest(req: Request, res: Response) {
    nestController.addNest(req, res)
}

export function getAllNest(req: Request, res: Response) {
    nestController.getAllNest(req, res)
}

export function getNestByID(req: Request, res: Response) {
    nestController.getNestByID(req, res)
}

export function updateNest(req: Request, res: Response) {
    nestController.updateNest(req, res)
}

export function deleteNest(req: Request, res: Response) {
    nestController.deleteNest(req, res)
}
