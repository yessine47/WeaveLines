import { Schema, model } from 'mongoose';
import Note from '@/resources/note/note.interface';
import mongoose from 'mongoose';

const NoteSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        notes: {
            type: [String],
            required: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        readOnlyList: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'User'
        },
        readAndWriteList: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'User'
        },
    
    },
    { timestamps: true }
);

export default model<Note>('Note', NoteSchema);
