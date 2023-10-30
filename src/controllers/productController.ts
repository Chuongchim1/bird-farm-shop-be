import { Request, Response } from 'express';
import Product, { ProductDocument } from '../model/product';

const productController = {
    addProduct: async (req: Request, res: Response) => {
        try {
            const newProduct = new Product(req.body);
            const savedProduct: ProductDocument = await newProduct.save();
            res.status(200).json(savedProduct);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllProduct: async (req: Request, res: Response) => {
        try {
            const products: ProductDocument[] = await Product.find();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getProductByID: async (req: Request, res: Response) => {
        try {
            const product: ProductDocument | null = await Product.findById(req.params.id);
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ message: "Product not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateProduct: async (req: Request, res: Response) => {
        try {
            const updatedProduct: ProductDocument | null = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (updatedProduct) {
                res.status(200).json(updatedProduct);
            } else {
                res.status(404).json({ message: "Product not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteProduct: async (req: Request, res: Response) => {
        try {
            const deletedProduct: ProductDocument | null = await Product.findByIdAndDelete(req.params.id);
            if (deletedProduct) {
                res.status(200).json({ message: "Product deleted successfully" });
            } else {
                res.status(404).json({ message: "Product not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
};

export default productController;

export function addProduct(req: Request, res: Response) {
    productController.addProduct(req, res)
}

export function getAllProduct(req: Request, res: Response) {
    productController.getAllProduct(req, res)
}

export function getProductByID(req: Request, res: Response) {
    productController.getProductByID(req, res)
}

export function updateProduct(req: Request, res: Response) {
    productController.updateProduct(req, res)
}

export function deleteProduct(req: Request, res: Response) {
    productController.deleteProduct(req, res)
}
