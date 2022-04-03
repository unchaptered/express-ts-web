import { Request, Response } from 'express'

export const getPost = (req: Request, res: Response) => {
    res.send('get post');
}
export const makePost = (req: Request, res: Response) => {
    res.send('make post');
}
export const patchPost = (req: Request, res: Response) =>{
    res.send('patch post');
}
export const deletePost = (req: Request, res: Response) =>{
    res.send('delete post');
}