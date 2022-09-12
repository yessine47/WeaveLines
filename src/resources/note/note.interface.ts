import { Document } from 'mongoose';
import mongoose from 'mongoose';

export default interface Note extends Document {
    title: string;
    notes: [string];
    owner:any;
    readOnlyList:[any];
    readAndWriteList:[any];

}
