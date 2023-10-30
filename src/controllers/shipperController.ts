import { Request, Response } from 'express';
import Shipper, { ShipperDocument } from '../model/shipper';

const shipperController = {
    addShipper: async (req: Request, res: Response) => {
        try {
            const newShipper = new Shipper(req.body);
            const savedShipper: ShipperDocument = await newShipper.save();
            res.status(200).json(savedShipper);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllShipper: async (req: Request, res: Response) => {
        try {
            const shippers: ShipperDocument[] = await Shipper.find();
            res.status(200).json(shippers);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getShipperByID: async (req: Request, res: Response) => {
        try {
            const shipper: ShipperDocument | null = await Shipper.findById(req.params.id);
            if (shipper) {
                res.status(200).json(shipper);
            } else {
                res.status(404).json({ message: "Shipper not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateShipper: async (req: Request, res: Response) => {
        try {
            const shipper: ShipperDocument | null = await Shipper.findById(req.params.id);
            if (shipper) {
                await shipper.updateOne({ $set: req.body });
                res.status(200).json({ message: "Update Shipper Success" });
            } else {
                res.status(404).json({ message: "Shipper not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteShipper: async (req: Request, res: Response) => {
        try {
            const deletedShipper: ShipperDocument | null = await Shipper.findByIdAndDelete(req.params.id);
            if (deletedShipper) {
                res.status(200).json({ message: "Delete Shipper Success" });
            } else {
                res.status(404).json({ message: "Shipper not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

export default shipperController;

export function addShipper(req: Request, res: Response) {
    shipperController.addShipper(req, res)
}

export function getAllShipper(req: Request, res: Response) {
    shipperController.getAllShipper(req, res)
}

export function getShipperByID(req: Request, res: Response) {
    shipperController.getShipperByID(req, res)
}

export function updateShipper(req: Request, res: Response) {
    shipperController.updateShipper(req, res)
}

export function deleteShipper(req: Request, res: Response) {
    shipperController.deleteShipper(req, res)
}
