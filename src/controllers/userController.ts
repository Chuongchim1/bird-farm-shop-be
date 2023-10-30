import { Request, Response } from 'express';
import User, { UserDocument } from '../model/user';
import HealthCareProffessional, { HealthCareProffessionalDocument } from '../model/healthcareproffesional';
import Admin, {AdminDocument} from '../model/admin';

const userController = {
    addUser: async (req: Request, res: Response) => {
        try {
            const newUser = new User(req.body);
            const savedUser: UserDocument = await newUser.save();
            if (req.body.role === "HealthCareProfessional") {
                const newHealthCarePro = new HealthCareProffessional(req.body)
                const saveHealthCarePro: HealthCareProffessionalDocument = await newHealthCarePro.save()
                res.status(200).json(saveHealthCarePro);
            }
            if (req.body.role === "Admin") {
                const newHealthCarePro = new Admin(req.body)
                const saveHealthCarePro: AdminDocument = await newHealthCarePro.save()
                res.status(200).json(saveHealthCarePro);
            }
            res.status(200).json(savedUser);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllUsers: async (req: Request, res: Response) => {
        try {
            const users: UserDocument[] = await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getUserByID: async (req: Request, res: Response) => {
        try {
            const user: UserDocument | null = await User.findById(req.params.id);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateUser: async (req: Request, res: Response) => {
        try {
            const user: UserDocument | null = await User.findById(req.params.id);
            if (user) {
                await user.updateOne({ $set: req.body });
                res.status(200).json({ message: "Update User Success" });
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteUser: async (req: Request, res: Response) => {
        try {
            const deletedUser: UserDocument | null = await User.findByIdAndDelete(req.params.id);
            if (deletedUser) {
                res.status(200).json({ message: "Delete User Success" });
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

export default userController;

export async function getAllUsers(req: Request, res: Response) {
    userController.getAllUsers(req, res);
}


export async function deleteUser(req: Request, res: Response) {
    userController.deleteUser(req, res);
}

export async function addUser(req: Request, res: Response) {
    userController.addUser(req, res);
}

export async function getUserByID(req: Request, res: Response) {
    userController.getUserByID(req, res);
}

export async function updateUser(req: Request, res: Response) {
    userController.updateUser(req, res);
}
