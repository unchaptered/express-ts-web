import 'dotenv/config';
import * as express from "express";
import * as morgan from "morgan";
import { Request, Response } from "express";

import postRouter from "./post/post.routes";
import userRouter from "./user/user.routes";

// Singleton Pattern
class Server {
    public app: express.Application;
    public logger: any;

    constructor() {
        const app: express.Application = express();
        this.app = app;
        this.logger = morgan('dev');
    }

    private setMiddleware() {
        this.app.use((req: Request, res: Response, next: Function) => {
            console.log(req.rawHeaders[1]);
            console.log('this is logging middleware');
            next();
        });
        this.app.use(this.logger);
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
    }

    private setRoute() {
        this.app.use('/', (req:Request, res:Response) => {
            res.send({ message: 'Welocome' });
        })
        this.app.use('/user', userRouter);
        this.app.use('/post', postRouter);
        this.app.use('/:any', (req: Request, res: Response, next: Function) => {
            console.log('this is error middleware');
            res.send({ error: '404 not found error '});
        });
    }

    public listen() {
        this.setMiddleware();
        this.setRoute();
        this.app.listen(process.env.SV_PORT, ()=>{
            console.log(`Server is running on ${process.env.SV_PORT}`);
        })
    }
}

export default ():void => {
    const server:Server = new Server();
    server.listen();
}
