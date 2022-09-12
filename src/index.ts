import 'dotenv/config';
import 'module-alias/register';
import validateEnv from '@/utils/validateEnv';
import App from './app';
import NoteController from '@/resources/note/note.controller';
import UserController from '@/resources/user/user.controller';

validateEnv();

const app = new App(
    [new NoteController(), new UserController()],
    Number(process.env.PORT)
);

app.listen();
