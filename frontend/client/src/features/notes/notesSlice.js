import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

// initial state
const initialState = {
    notes: [],
}

// get-all-notes
export const getAllNotes = createAsyncThunk('notes/getAllNotes',async () => {
    try{
        const response = await axios.get('/api/notes/get-all-notes')
        return response.data
    }catch(err){
        return err.response
    }
})

// add-new-note
export const addNewNote = createAsyncThunk('notes/addNewNote',async data => {
    try{
        const response = await axios.post('/api/notes/add-new-note',data)
        return response.data
    }catch(err){
        return err.response
    }
})

// delete note
export const deleteNote = createAsyncThunk('notes/deleteNote',async _id => {
    try{
        const response = await axios.delete(`/api/notes/delete-single-note/${_id}`)
        return response.data
    }catch(err){
        return err.response.data
    }
})

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            // get all notes
            // fulfilled case
            .addCase(getAllNotes.fulfilled,(state,action)=>{
                if(action.payload.notes){
                    state.notes = action.payload.notes
                }
            })
            // new note
            .addCase(addNewNote.fulfilled,(state,action)=>{
                if(action.payload.newNote){
                    state.notes = [action.payload.newNote,...state.notes]
                }
            })
            // delete notes
            .addCase(deleteNote.fulfilled,(state,action)=>{
                if(action.payload._id){
                    state.notes = state.notes.filter(note=>note._id !== action.payload._id)
                }
            })
    }
})

// selectors
// notes
export const selectNotes = state => state.notes.notes 
export default notesSlice.reducer