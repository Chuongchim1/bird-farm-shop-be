import { Request, Response, NextFunction } from 'express';
import jwt, { VerifyErrors } from 'jsonwebtoken';
import 'express';

declare module 'express' {
    interface Request {
        user?: any;
    }
}

const middlewareController = {
    // Verify token
    verifyToken: (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.token as string | undefined;

        if (token) {
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY as string, (err: VerifyErrors | null, user: any) => {
                if (err) {
                    return res.status(403).json("Token is not valid");
                }
                req.user = user;
                next();
            });
        } else {
            return res.status(401).json("You are not authenticated");
        }
    },

    verifyTokenAndAdminAuth: async (req: Request, res: Response, next: NextFunction) => {
        middlewareController.verifyToken(req, res, () => {

            const user = req.user
            if (user && (user.id == req.params.id || user.admin)) {
                next();
            } else {
                return res.status(403).json("You are not allowed to delete user");
            }
        });
    }
}

export default middlewareController;

export async function verifyToken(req: Request, res: Response, next: NextFunction) {
    middlewareController.verifyToken(req, res, next);
}


export async function verifyTokenAndAdminAuth(req: Request, res: Response, next: NextFunction) {
    middlewareController.verifyTokenAndAdminAuth(req, res, next);
}

