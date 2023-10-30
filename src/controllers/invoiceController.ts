import { Request, Response } from 'express';
import Invoice, { InvoiceDocument } from '../model/invoice';

const invoiceController = {
    addInvoice: async (req: Request, res: Response) => {
        try {
            const newInvoice = new Invoice(req.body);
            const savedInvoice: InvoiceDocument = await newInvoice.save();
            res.status(200).json(savedInvoice);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllInvoice: async (req: Request, res: Response) => {
        try {
            const invoices: InvoiceDocument[] = await Invoice.find().populate("paymentID");
            res.status(200).json(invoices);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getInvoiceByID: async (req: Request, res: Response) => {
        try {
            const invoice: InvoiceDocument | null = await Invoice.findById(req.params.id).populate("paymentID");
            if (invoice) {
                res.status(200).json(invoice);
            } else {
                res.status(404).json({ message: "Invoice not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateInvoice: async (req: Request, res: Response) => {
        try {
            const invoice: InvoiceDocument | null = await Invoice.findById(req.params.id);
            if (invoice) {
                await invoice.updateOne({ $set: req.body });
                res.status(200).json({ message: "Update Invoice Success" });
            } else {
                res.status(404).json({ message: "Invoice not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteInvoice: async (req: Request, res: Response) => {
        try {
            const deletedInvoice: InvoiceDocument | null = await Invoice.findByIdAndDelete(req.params.id);
            if (deletedInvoice) {
                res.status(200).json({ message: "Delete Invoice Success" });
            } else {
                res.status(404).json({ message: "Invoice not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

export default invoiceController;

export function addInvoice(req: Request, res: Response) {
    invoiceController.addInvoice(req, res)
}

export function getAllInvoice(req: Request, res: Response) {
    invoiceController.getAllInvoice(req, res)
}

export function getInvoiceByID(req: Request, res: Response) {
    invoiceController.getInvoiceByID(req, res)
}

export function updateInvoice(req: Request, res: Response) {
    invoiceController.updateInvoice(req, res)
}

export function deleteInvoice(req: Request, res: Response) {
    invoiceController.deleteInvoice(req, res)
}
