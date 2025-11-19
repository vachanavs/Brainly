import { Router } from "express";
import AuthenticatedRequest, { userMiddleware } from "../middleware";
import { ContentModel, LinkModel, UserModel } from "../db";
import { generate } from "../utils";

const shareRouter = Router();

// '/api/v1/brain/...' comes here.
// route to generate sharable link.
shareRouter.post("/share", userMiddleware, async(req: AuthenticatedRequest, res) => {
    const share = req.body.share;

    if(share) {
        const existingLink = await LinkModel.findOne({
            userId : req.userId
        });

        // if hash already exist for that user then share it
        if(existingLink) {
            res.json({
                hash: existingLink.hash
            })
            return;
        }

        // if hash is not present, generate one
        const hash = generate(10);
        await LinkModel.create({
            userId: req.userId,
            hash: hash
        })
        res.status(200).json({
            message: "Sharable link generated.",
            hash
        })
    } else {
        // if user want to disable the hash.
        await LinkModel.deleteOne({
            userId: req.userId
        });

        res.status(200).json({
            message: "Sharable link is deleted."
        })
        return;
    }
})

// '/api/v1/brain/(hash)' comes here('hash' is the sharable link generated from the above route).
shareRouter.get("/:shareLink", async(req: AuthenticatedRequest, res) => {
    const hash = req.params.shareLink;

    // finding the corresponding link using the entered hash.
    const link = await LinkModel.findOne({
        hash
    });

    // if the link not exist(because of worng hash).
    if(!link) {
        res.status(404).json({
            message: "Incorrect URL."
        })
        return;
    }

    // agregation
    // retriving content using userId(userID is present in both table).
    const content = await ContentModel.find({
        userId: link.userId
    })

    // retriving user's id(_id) using userId(userID and _id contains same value).
    const user = await UserModel.findOne({
        _id: link.userId
    })

    if(!user) {
        res.json({
            message: "User does not exist. Ideally this error should not come."
        })
    }

    res.status(200).json({
        userName: user?.userName,
        content: content
    })
})

export default shareRouter;