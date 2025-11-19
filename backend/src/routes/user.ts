import { Router } from "express";
import z from "zod";
import jwt from "jsonwebtoken";
import { UserModel } from "../db";
import bcrypt from "bcryptjs";

const userRouter = Router();

// 'api/v1/user/...' comes here
userRouter.post("/signup", async(req, res) => {
    const { userName, password } = req.body;

    const requiredBody = z.object({
        userName: z.string().min(4).max(30),
        password: z.string().min(4).max(15)
    });

    const parseData = requiredBody.safeParse(req.body);

    if(!parseData.success) {
        res.status(411).json({
            message: "Incorrect format.",
            error: parseData.error
        });
        return;
    }

    try{
        const existingUser = await UserModel.findOne({ userName });

        // checking whether user already exist or not.
        if(existingUser) {
            res.status(409).json({
                message: "Username already exist. Try different one."
            });
            return;
        }

        // Hashing password.
        const hashedPassword = await bcrypt.hash(password, 5);

        // adding user into DB
        const user = UserModel.create({
            userName,
            password: hashedPassword
        });

        const userId = (await user)._id;

        // generating token.
        const token = jwt.sign({
            userId
        }, process.env.JWT_SECRET!);

        res.status(200).json({
            message: "You are successfully Signed up.",
            token: token
        });
    } catch(error){
        console.error("error during Sign up: ", error);
        res.status(500).json({
            message: "Internal server error."
        });
    }
})

userRouter.post("/signin", async(req, res) => {
    const { userName, password } = req.body;

    const userExist = await UserModel.findOne({
        userName: userName
    });

    if(!userExist) {
        res.status(403).json({
            message: "Username does not exist."
        });
        return;
    }

    const passwordMatched = await  bcrypt.compare(password, (userExist!.password as string));

    if(passwordMatched) {
        const token = jwt.sign({
        // creating token using unique value(ObjectId)
            userId: userExist!._id
        }, process.env.JWT_SECRET!)

        res.status(200).json({
            message: "Signed in successfully.",
            token: token
        })
    } else {
        res.status(403).json({
            message: "Wrong password."
        })
    }  
})

export default userRouter;