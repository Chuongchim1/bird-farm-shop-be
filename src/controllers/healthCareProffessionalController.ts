import { Request, Response } from 'express';
import HealthCareProfessional, { HealthCareProffessionalDocument } from '../model/healthcareproffesional';
import Bird from '../model/bird';

const healthCareProfessionalController = {
    addHealthCareProfessional: async (req: Request, res: Response) => {
        try {
            const newHealthCareProfessional = new HealthCareProfessional(req.body);
            const savedHealthCareProfessional: HealthCareProffessionalDocument = await newHealthCareProfessional.save();
            res.status(200).json(savedHealthCareProfessional);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllHealthCareProfessional: async (req: Request, res: Response) => {
        try {
            const healthCareProfessionals: HealthCareProffessionalDocument[] = await HealthCareProfessional.find().populate("healthCareID");
            res.status(200).json(healthCareProfessionals);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getHealthCareProfessionalByID: async (req: Request, res: Response) => {
        try {
            const healthCareProfessional: HealthCareProffessionalDocument | null = await HealthCareProfessional.findById(req.params.id).populate("healthCareID");
            res.status(200).json(healthCareProfessional);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateHealthCareProfessional: async (req: Request, res: Response) => {
        try {
            const healthCareProfessional: HealthCareProffessionalDocument | null = await HealthCareProfessional.findById(req.params.id);
            if (healthCareProfessional) {
                await healthCareProfessional.updateOne({ $set: req.body });
                res.status(200).json({ message: "Update Health Care Professional Success" });
            } else {
                res.status(404).json({ message: "Health Care Professional not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteHealthCareProfessional: async (req: Request, res: Response) => {
        try {
            await Bird.updateMany({ healthCareID: req.params.id }, { healthCareID: null });
            const healthCareProfessional: HealthCareProffessionalDocument | null = await HealthCareProfessional.findByIdAndDelete(req.params.id);
            if (healthCareProfessional) {
                res.status(200).json({ message: "Delete Health Care Professional Success" });
            } else {
                res.status(404).json({ message: "Health Care Professional not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

export default healthCareProfessionalController;

export function addHealthCareProfessional(req: Request, res: Response) {
    healthCareProfessionalController.addHealthCareProfessional(req, res)
}

export function getAllHealthCareProfessional(req: Request, res: Response) {
    healthCareProfessionalController.getAllHealthCareProfessional(req, res)
}

export function getHealthCareProfessionalByID(req: Request, res: Response) {
    healthCareProfessionalController.getHealthCareProfessionalByID(req, res)
}

export function updateHealthCareProfessional(req: Request, res: Response) {
    healthCareProfessionalController.updateHealthCareProfessional(req, res)
}

export function deleteHealthCareProfessional(req: Request, res: Response) {
    healthCareProfessionalController.deleteHealthCareProfessional(req, res)
}
