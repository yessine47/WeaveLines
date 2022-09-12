import NoteModel from '@/resources/note/note.model';
import Note from '@/resources/note/note.interface';
import mongoose from 'mongoose';

class NoteService {
    private Note = NoteModel;

    /**
     * Create a new note
     */
    public async create(title: string, notes: [string], owner:any): Promise<Note> {
        try {
            const note = await this.Note.create({ title, notes, owner });            

            return note;
        } catch (error) {
            throw new Error('Unable to create note');
        }
    }
    public async update(notes:object, noteId:any): Promise<Note|null> {        
        try {
            const note = await this.Note.findByIdAndUpdate(noteId, {notes});  
                      
             return note;
        } catch (error) {            
            throw new Error('Unable to update note');
        }
    }
    public async read( noteId:any): Promise<[string]> {        
        try {
            const note = await this.Note.findById(noteId);  
                      
             return note?.notes!;
        } catch (error) {            
            throw new Error('Unable to read note');
        }
    }
    public async invite(lists:object, noteId:any): Promise<Note|null> {        
        try {
            const note = await this.Note.findByIdAndUpdate(noteId, lists);  
                      
             return note;
        } catch (error) {            
            throw new Error('Unable to invite');
        }
    }
}

export default NoteService;
