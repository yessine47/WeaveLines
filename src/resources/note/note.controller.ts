import { Router, Request, Response, NextFunction } from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
import validationMiddleware from '@/middleware/validation.middleware';
import validate from '@/resources/note/note.validation';
import NoteService from '@/resources/note/note.service';
import authenticated from '@/middleware/authenticated.middleware';
import Permission from '@/middleware/permission.middleware';

class NoteController implements Controller {

    public path = '/Notes';
    public router = Router();
    private NoteService = new NoteService();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}/add`,
            validationMiddleware(validate.create),
            authenticated,
            this.create
        );
        this.router.put(
            `${this.path}/update`,
            validationMiddleware(validate.update),
            authenticated,
            Permission.writePermission,
            this.update
        );
        this.router.get(
            `${this.path}/read`,
            authenticated,
            Permission.readPermission,
            this.read
        );
        this.router.put(
            `${this.path}/invite`,
            validationMiddleware(validate.invite),
            authenticated,
            Permission.ownerPermission,
            this.invite
        );
    }

    private create = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {

        try {
            const { title, notes} = req.body;
            const owner=req.headers.user;            
            const note = await this.NoteService.create(title, notes, owner);

            res.status(201).json({ note });
        } catch (error) {
            next(new HttpException(400, 'Cannot create note'));
        }
    };
    private update = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const noteId =req.headers.note;
            
            await this.NoteService.update(req.body.notes, noteId);

            res.status(201).json("notelist updated succesfully");
        } catch (error) {
            console.log("e",error);
            
            next(new HttpException(400, 'Cannot update note'));
        }
    };
    private read = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const noteId =req.headers.note;
            
            const note =await this.NoteService.read( noteId);

            res.status(201).json({note});
        } catch (error) {
            console.log("e",error);
            
            next(new HttpException(400, 'Cannot update note'));
        }
    };
    private invite = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const noteId =req.headers.note;
            const { readOnlyList, readAndWriteList} = req.body;
            console.log(readOnlyList, readAndWriteList);
            
            await this.NoteService.invite({"readOnlyList":readOnlyList,"readAndWriteList":readAndWriteList}, noteId);

            res.status(201).json("users invited succesfully");
        } catch (error) {
            console.log("e",error);
            
            next(new HttpException(400, 'Cannot invite users'));
        }
    };
}

export default NoteController;
