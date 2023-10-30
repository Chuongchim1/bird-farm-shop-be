const OrderVoucher = require("../model/ordervoucher");

const ordervoucherController = {
    addOrderVoucher: async (req, res) => {
        try {
            const newOrderVoucher = new OrderVoucher(req.body);
            const savedOrderVoucher = await newOrderVoucher.save();
            res.status(200).json(savedOrderVoucher);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllOrderVoucher: async (req, res) => {
        try {
            const orderVouchers = await OrderVoucher.find();
            res.status(200).json(orderVouchers);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getOrderVoucherById: async (req, res) => {
        try {
            const orderVoucher = await OrderVoucher.findById(req.params.id);
            if (orderVoucher) {
                res.status(200).json(orderVoucher);
            } else {
                res.status(404).json({ message: "Order Voucher not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateOrderVoucher: async (req, res) => {
        try {
            const updatedOrderVoucher = await OrderVoucher.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (updatedOrderVoucher) {
                res.status(200).json(updatedOrderVoucher);
            } else {
                res.status(404).json({ message: "Order Voucher not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteOrderVoucher: async (req, res) => {
        try {
            const deletedOrderVoucher = await OrderVoucher.findByIdAndDelete(req.params.id);
            if (deletedOrderVoucher) {
                res.status(200).json({ message: "Order Voucher deleted successfully" });
            } else {
                res.status(404).json({ message: "Order Voucher not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
};

module.exports = ordervoucherController;
