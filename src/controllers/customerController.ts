import { Request, Response } from 'express';
import Customer, { CustomerDocument } from '../model/customer';
import Order from '../model/order';

const customerController = {
    addCustomer: async (req: Request, res: Response) => {
        try {
            const newCustomer = new Customer(req.body);
            const saveCustomer = await newCustomer.save();
            res.status(200).json(saveCustomer);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllCustomer: async (req: Request, res: Response) => {
        try {
            const customers: CustomerDocument[] = await Customer.find().populate("SellerID");
            res.status(200).json(customers);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getCustomerByID: async (req: Request, res: Response) => {
        try {
            res.status(200).json((await Customer.findById(req.params.id).populate("SellerID")));
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateCustomer: async (req: Request, res: Response) => {
        try {
            const customer: CustomerDocument | null = await Customer.findById(req.params.id);

            if (customer) {
                await customer.updateOne({ $set: req.body });
                res.status(200).json({ message: "Update Customer Success" });
            } else {
                res.status(404).json({ message: "Customer not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteCustomer: async (req: Request, res: Response) => {
        try {
            await Order.updateMany({ customerID: req.params.id }, { customerID: null });
            await Customer.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Delete Customers Success" });
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

export default customerController;

export function addCustomer(req: Request, res: Response) {
    customerController.addCustomer(req, res)
}

export function getAllCustomer(req: Request, res: Response) {
    customerController.getAllCustomer(req, res)
}

export function getCustomerByID(req: Request, res: Response) {
    customerController.getCustomerByID(req, res)
}

export function updateCustomer(req: Request, res: Response) {
    customerController.updateCustomer(req, res)
}

export function deleteCustomer(req: Request, res: Response) {
    customerController.deleteCustomer(req, res)
}
