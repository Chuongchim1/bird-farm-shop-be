import { Request, Response } from 'express';
import OrderDetail, { OrderDetailDocument } from '../model/orderdetail';

const orderdetailController = {
    addOrderDetail: async(req: Request, res: Response) =>{
        try {
            const newOrderDetail = new OrderDetail(req.body);
            const saveOrderDetails: OrderDetailDocument = await newOrderDetail.save();
            res.status(200).json(saveOrderDetails);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllOrderDetail: async(req: Request, res: Response)=>{
        try {
            const orderDetail: OrderDetailDocument[] = await OrderDetail.find();
            res.status(200).json(orderDetail);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getOrderDetailByID: async(req: Request, res: Response)=>{
        try {
            const orderDetail: OrderDetailDocument | null = await OrderDetail.findById(req.params.id);
            if (orderDetail) {
                res.status(200).json(orderDetail);
            } else {
                res.status(404).json({ message: "Order Detail not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateOrderDetail: async(req: Request, res: Response)=>{
        try {
            const orderDetail: OrderDetailDocument | null = await OrderDetail.findById(req.params.id);
            if (orderDetail) {
                await orderDetail.updateOne({ $set: req.body });
                res.status(200).json({ message: "Update Order Detail Success!" });
            } else {
                res.status(404).json({ message: "Order Detail not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteOrderDetail: async(req: Request, res: Response)=>{
        try {
            const deletedOrderDetail: OrderDetailDocument | null = await OrderDetail.findByIdAndDelete(req.params.id);
            if (deletedOrderDetail) {
                res.status(200).json({ message: "Delete Order Detail Success!" });
            } else {
                res.status(404).json({ message: "Order Detail not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
};

export default orderdetailController;

export function addOrderDetail(req: Request, res: Response) {
    orderdetailController.addOrderDetail(req, res)
}

export function getAllOrderDetail(req: Request, res: Response) {
    orderdetailController.getAllOrderDetail(req, res)
}

export function getOrderDetailByID(req: Request, res: Response) {
    orderdetailController.getOrderDetailByID(req, res)
}

export function updateOrderDetail(req: Request, res: Response) {
    orderdetailController.updateOrderDetail(req, res)
}

export function deleteOrderDetail(req: Request, res: Response) {
    orderdetailController.deleteOrderDetail(req, res)
}
