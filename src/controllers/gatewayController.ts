import { Request, Response } from 'express';
import Gateway, { GateWayDocument } from '../model/gateway';
import Payment from '../model/payment';

const gatewayController = {
    addGateway: async (req: Request, res: Response) => {
        try {
            const newGateway = new Gateway(req.body);
            const savedGateway: GateWayDocument = await newGateway.save();
            res.status(200).json(savedGateway);
        } catch (error) {
            res.status(500).json(error); // HTTP REQUEST CODE
        }
    },
    getAllGateway: async (req: Request, res: Response) => {
        try {
            const gateway: GateWayDocument[] = await Gateway.find();
            res.status(200).json(gateway);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getGatewayByID: async (req: Request, res: Response) => {
        try {
            const gateway: GateWayDocument | null = await Gateway.findById(req.params.id);
            res.status(200).json(gateway);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateGateway: async (req: Request, res: Response) => {
        try {
            const gateway: GateWayDocument | null = await Gateway.findById(req.params.id);
            if (gateway) {
                await gateway.updateOne({ $set: req.body });
                res.status(200).json({ message: "Update Gateway Success" });
            } else {
                res.status(404).json({ message: "Gateway not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteGateway: async (req: Request, res: Response) => {
        try {
            await Payment.updateMany({ gateWayID: req.params.id }, { gateWayID: null });
            const gateway: GateWayDocument | null = await Gateway.findByIdAndDelete(req.params.id);
            if (gateway) {
                res.status(200).json({ message: "Delete Gateway Success" });
            } else {
                res.status(404).json({ message: "Gateway not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

export default gatewayController;

export function addGateway(req: Request, res: Response) {
    gatewayController.addGateway(req, res)
}

export function getAllGateway(req: Request, res: Response) {
    gatewayController.getAllGateway(req, res)
}

export function getGatewayByID(req: Request, res: Response) {
    gatewayController.getGatewayByID(req, res)
}

export function updateGateway(req: Request, res: Response) {
    gatewayController.updateGateway(req, res)
}

export function deleteGateway(req: Request, res: Response) {
    gatewayController.deleteGateway(req, res)
}
