import { Request, Response } from 'express';
import Payment, { PaymentDocument } from '../model/payment';
import Invoice from '../model/invoice';

const paymentController = {
    addPayment: async (req: Request, res: Response) => {
        try {
            const newPayment = new Payment(req.body);
            const savedPayment: PaymentDocument = await newPayment.save();
            res.status(200).json(savedPayment);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllPayment: async (req: Request, res: Response) => {
        try {
            const payments: PaymentDocument[] = await Payment.find().populate(["orderID", "gateWayID"]);
            res.status(200).json(payments);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getPaymentByID: async (req: Request, res: Response) => {
        try {
            const payment: PaymentDocument | null = await Payment.findById(req.params.id).populate("orderID gateWayID");
            if (payment) {
                res.status(200).json(payment);
            } else {
                res.status(404).json({ message: "Payment not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updatePayment: async (req: Request, res: Response) => {
        try {
            const updatedPayment: PaymentDocument | null = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (updatedPayment) {
                res.status(200).json(updatedPayment);
            } else {
                res.status(404).json({ message: "Payment not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deletePayment: async (req: Request, res: Response) => {
        try {
            await Invoice.updateMany({ paymentID: req.params.id }, { paymentID: null });
            const deletedPayment: PaymentDocument | null = await Payment.findByIdAndDelete(req.params.id);
            if (deletedPayment) {
                res.status(200).json({ message: "Payment deleted successfully" });
            } else {
                res.status(404).json({ message: "Payment not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
};

export default paymentController;

export function addPayment(req: Request, res: Response) {
    paymentController.addPayment(req, res)
}

export function getAllPayment(req: Request, res: Response) {
    paymentController.getAllPayment(req, res)
}

export function getPaymentByID(req: Request, res: Response) {
    paymentController.getPaymentByID(req, res)
}

export function updatePayment(req: Request, res: Response) {
    paymentController.updatePayment(req, res)
}

export function deletePayment(req: Request, res: Response) {
    paymentController.deletePayment(req, res)
}
