import { Request, Response, NextFunction} from 'express';
import NoteModel from '@/resources/note/note.model';
import HttpException from '@/utils/exceptions/http.exception';

    async function readPermission(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> {
            const userId = req?.headers?.user ;
            const ListId = req?.headers?.note ;
            try {
                const note = await NoteModel.findById(ListId)            
                if(((note?.readAndWriteList?.includes(userId))||(note?.readOnlyList?.includes(userId))||(note?.owner.toString()===userId))===false)
                return next(new HttpException(401, 'Unauthorised'));            
                return next();
            } catch (error) {

                return next(new HttpException(401, 'Unauthorised'));
            }
        };
    async function writePermission(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> {
            const userId = req?.headers?.user ;
            const ListId = req?.headers?.note ;
            try {
                const note = await NoteModel.findById(ListId)            
                if(((note?.readAndWriteList?.includes(userId))||(note?.owner.toString()===userId))===false)
                return next(new HttpException(401, 'Unauthorised'));            
                return next();
            } catch (error) {
    
                return next(new HttpException(401, 'Unauthorised'));
            }
        };
    async function ownerPermission(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> {
            const userId = req?.headers?.user ;
            const ListId = req?.headers?.note ;
            try {
                const note = await NoteModel.findById(ListId)            
                if((note?.owner.toString()===userId)===false)
                return next(new HttpException(401, 'Unauthorised'));            
                return next();
            } catch (error) {
    
                return next(new HttpException(401, 'Unauthorised'));
            }
        };


export default {readPermission,writePermission,ownerPermission};
