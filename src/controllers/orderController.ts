import { Request, Response } from 'express';
import Order, { OrderDocument } from '../model/order';
import OrderDetail from '../model/orderdetail';
import Payment from '../model/payment';
import OrderVoucher from '../model/ordervoucher';
import Seller from '../model/seller';
import birdController from './birdController';

const orderController = {
    addOrder: async (req: Request, res: Response) => {
        try {
            const newOrder = new Order(req.body);
            const saveOrder: OrderDocument = await newOrder.save();
            res.status(200).json(saveOrder);
            const productIdList: [] = req.body.productList;
            productIdList.map((id: string) => {
                birdController.updateBirdQuantityFn(id);
            }
            )

            
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllOrder: async (req: Request, res: Response) => {
        try {
            const order: OrderDocument[] = await Order.find().populate("productList");
            res.status(200).json(order);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getOrderByID: async (req: Request, res: Response) => {
        try {
            const order: OrderDocument | null = await Order.findById(req.params.id).populate("productList");
            if (order) {
                res.status(200).json(order);
            } else {
                res.status(404).json({ message: "Order not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateOrder: async (req: Request, res: Response) => {
        try {
            const updateOrder: OrderDocument | null = await Order.findById(req.params.id);
            if (updateOrder) {
                await updateOrder.updateOne({ $set: req.body });
                res.status(200).json({ message: "Update Order Success!" });
            } else {
                res.status(404).json({ message: "Order not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteOrder: async (req: Request, res: Response) => {
        try {
            await OrderDetail.updateMany({ orderID: req.params.id }, { orderID: null });
            await Payment.updateMany({ orderID: req.params.id }, { orderID: null });
            await OrderVoucher.updateMany({ orderID: req.params.id }, { orderID: null });
            await Seller.updateMany({ orderID: req.params.id }, { orderID: null });
            const deletedOrder: OrderDocument | null = await Order.findByIdAndDelete(req.params.id);
            if (deletedOrder) {
                res.status(200).json({ message: "Delete Order Success!" });
            } else {
                res.status(404).json({ message: "Order not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

export default orderController;

export function getAllOrder(req: Request, res: Response) {
    orderController.getAllOrder(req, res)
}
export function addOrder(req: Request, res: Response) {
    orderController.addOrder(req, res)
}

export function getOrderByID(req: Request, res: Response) {
    orderController.getOrderByID(req, res)
}

export function updateOrder(req: Request, res: Response) {
    orderController.updateOrder(req, res)
}

export function deleteOrder(req: Request, res: Response) {
    orderController.deleteOrder(req, res)
}

