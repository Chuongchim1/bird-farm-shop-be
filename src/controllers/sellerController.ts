import { Request, Response } from 'express';
import Seller, { SellerDocument } from '../model/seller';
import Customer from '../model/customer';
import News from '../model/news';
import Voucher from '../model/voucher';

const sellerController = {
    addSeller: async (req: Request, res: Response) => {
        try {
            const newSeller = new Seller(req.body);
            const savedSeller: SellerDocument = await newSeller.save();
            res.status(200).json(savedSeller);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllSeller: async (req: Request, res: Response) => {
        try {
            const sellers: SellerDocument[] = await Seller.find();
            res.status(200).json(sellers);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getSellerByID: async (req: Request, res: Response) => {
        try {
            const seller: SellerDocument | null = await Seller.findById(req.params.id).populate("orderID");
            if (seller) {
                res.status(200).json(seller);
            } else {
                res.status(404).json({ message: "Seller not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateSeller: async (req: Request, res: Response) => {
        try {
            const updatedSeller: SellerDocument | null = await Seller.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (updatedSeller) {
                res.status(200).json(updatedSeller);
            } else {
                res.status(404).json({ message: "Seller not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteSeller: async (req: Request, res: Response) => {
        try {
            await Customer.updateMany({ SellerID: req.params.id }, { SellerID: null });
            await News.updateMany({ SellerID: req.params.id }, { SellerID: null });
            await Voucher.updateMany({ SellerID: req.params.id }, { SellerID: null });
            const deletedSeller: SellerDocument | null = await Seller.findByIdAndDelete(req.params.id);
            if (deletedSeller) {
                res.status(200).json({ message: "Seller deleted successfully!" });
            } else {
                res.status(404).json({ message: "Seller not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

export default sellerController;

export function addSeller(req: Request, res: Response) {
    sellerController.addSeller(req, res)
}

export function getAllSeller(req: Request, res: Response) {
    sellerController.getAllSeller(req, res)
}

export function getSellerByID(req: Request, res: Response) {
    sellerController.getSellerByID(req, res)
}

export function updateSeller(req: Request, res: Response) {
    sellerController.updateSeller(req, res)
}

export function deleteSeller(req: Request, res: Response) {
    sellerController.deleteSeller(req, res)
}
