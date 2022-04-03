import { Router } from 'express';
import { getPost, makePost, patchPost, deletePost } from "./post.service";

const postRouter:Router = Router();
postRouter.route("/")
    .get(getPost)
    .post(makePost)
    .patch(patchPost)
    .delete(deletePost);

export default postRouter;