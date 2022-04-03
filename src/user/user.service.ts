import { Request, Response } from 'express'

export const getUser = (req: Request, res: Response) => {
    res.send('get user');
}
export const makeUser = (req: Request, res: Response) => {
    res.send('make user');
}
export const patchUser = (req: Request, res: Response) =>{
    res.send('patch user');
}
export const deleteUser = (req: Request, res: Response) =>{
    res.send('delete user');
}