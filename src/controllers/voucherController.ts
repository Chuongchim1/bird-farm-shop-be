import { Request, Response } from 'express';
import Voucher, { VoucherDocument } from '../model/voucher';

const voucherController = {
    addVoucher: async (req: Request, res: Response) => {
        try {
            const newVoucher = new Voucher(req.body);
            const savedVoucher: VoucherDocument = await newVoucher.save();
            res.status(200).json(savedVoucher);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllVoucher: async (req: Request, res: Response) => {
        try {
            const vouchers: VoucherDocument[] = await Voucher.find();
            res.status(200).json(vouchers);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getVoucherByID: async (req: Request, res: Response) => {
        try {
            const voucher: VoucherDocument | null = await Voucher.findById(req.params.id).populate("SellerID");
            if (voucher) {
                res.status(200).json(voucher);
            } else {
                res.status(404).json({ message: "Voucher not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateVoucher: async (req: Request, res: Response) => {
        try {
            const voucher: VoucherDocument | null = await Voucher.findById(req.params.id);
            if (voucher) {
                await voucher.updateOne({ $set: req.body });
                res.status(200).json({ message: "Update Voucher Successful" });
            } else {
                res.status(404).json({ message: "Voucher not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteVoucher: async (req: Request, res: Response) => {
        try {
            const deletedVoucher: VoucherDocument | null = await Voucher.findByIdAndDelete(req.params.id);
            if (deletedVoucher) {
                res.status(200).json({ message: "Delete Voucher Successful" });
            } else {
                res.status(404).json({ message: "Voucher not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
};
export default voucherController;

export async function addVoucher(req: Request, res: Response) {
    voucherController.addVoucher(req, res);
}
export function getAllVoucher(req: Request, res: Response) {
    voucherController.getAllVoucher(req, res);
}

export function getVoucherByID(req: Request, res: Response) {
    voucherController.getVoucherByID(req, res);
}

export function updateVoucher(req: Request, res: Response) {
    voucherController.updateVoucher(req, res);
}

export function deleteVoucher(req: Request, res: Response) {
    voucherController.deleteVoucher(req, res);
}

