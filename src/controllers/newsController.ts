import { Request, Response } from 'express';
import News, { NewsDocument } from '../model/news';

const newsController = {
    addNews: async (req: Request, res: Response) => {
        try {
            const newNews = new News(req.body);
            const savedNews: NewsDocument = await newNews.save();
            res.status(200).json(savedNews);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllNews: async (req: Request, res: Response) => {
        try {
            const news: NewsDocument[] = await News.find().populate("SellerID");
            res.status(200).json(news);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getNewsByID: async (req: Request, res: Response) => {
        try {
            const news: NewsDocument | null = await News.findById(req.params.id).populate("SellerID");
            if (news) {
                res.status(200).json(news);
            } else {
                res.status(404).json({ message: "News not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateNews: async (req: Request, res: Response) => {
        try {
            const updateNews: NewsDocument | null = await News.findById(req.params.id);
            if (updateNews) {
                updateNews.updateOne({ $set: req.body });
                res.status(200).json({ message: "Update News Success!" });
            } else {
                res.status(404).json({ message: "News not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteNews: async (req: Request, res: Response) => {
        try {
            const deletedNews: NewsDocument | null = await News.findByIdAndDelete(req.params.id);
            if (deletedNews) {
                res.status(200).json({ message: "Delete News Success!" });
            } else {
                res.status(404).json({ message: "News not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

export default newsController;

export function addNews(req: Request, res: Response) {
    newsController.addNews(req, res)
}

export function getAllNews(req: Request, res: Response) {
    newsController.getAllNews(req, res)
}

export function getNewsByID(req: Request, res: Response) {
    newsController.getNewsByID(req, res)
}

export function updateNews(req: Request, res: Response) {
    newsController.updateNews(req, res)
}

export function deleteNews(req: Request, res: Response) {
    newsController.deleteNews(req, res)
}
