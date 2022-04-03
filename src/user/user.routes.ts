import { Router } from 'express';
import { getUser, makeUser, patchUser, deleteUser } from './user.service';

const userRouter:Router = Router();
userRouter.route('/')
    .get(getUser)
    .post(makeUser)
    .patch(patchUser)
    .delete(deleteUser)

export default userRouter;