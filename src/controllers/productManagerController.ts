import { Request, Response } from 'express';
import ProductManager, { ProductManagerDocument } from '../model/productmanager';

const productmanagerController = {
    addProductManager: async (req: Request, res: Response) => {
        try {
            const newProductManager = new ProductManager(req.body);
            const saveProductManager: ProductManagerDocument = await newProductManager.save();
            res.status(200).json(saveProductManager);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllProductManager: async (req: Request, res: Response) => {
        try {
            const productManagers: ProductManagerDocument[] = await ProductManager.find();
            res.status(200).json(productManagers);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getProductManagerByID: async (req: Request, res: Response) => {
        try {
            const productManager: ProductManagerDocument | null = await ProductManager.findById(req.params.id);
            if (productManager) {
                res.status(200).json(productManager);
            } else {
                res.status(404).json({ message: "Product Manager not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateProductManager: async (req: Request, res: Response) => {
        try {
            const updatedProductManager: ProductManagerDocument | null = await ProductManager.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (updatedProductManager) {
                res.status(200).json(updatedProductManager);
            } else {
                res.status(404).json({ message: "Product Manager not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteProductManager: async (req: Request, res: Response) => {
        try {
            const deletedProductManager: ProductManagerDocument | null = await ProductManager.findByIdAndDelete(req.params.id);
            if (deletedProductManager) {
                res.status(200).json({ message: "Product Manager deleted successfully" });
            } else {
                res.status(404).json({ message: "Product Manager not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
};

export default productmanagerController;

export function addProductManager(req: Request, res: Response) {
    productmanagerController.addProductManager(req, res)
}

export function getAllProductManager(req: Request, res: Response) {
    productmanagerController.getAllProductManager(req, res)
}

export function getProductManagerByID(req: Request, res: Response) {
    productmanagerController.getProductManagerByID(req, res)
}

export function updateProductManager(req: Request, res: Response) {
    productmanagerController.updateProductManager(req, res)
}

export function deleteProductManager(req: Request, res: Response) {
    productmanagerController.deleteProductManager(req, res)
}
