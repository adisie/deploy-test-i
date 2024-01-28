import {configureStore} from '@reduxjs/toolkit'

// reducers
// notesReducer
import notesReducer from '../features/notes/notesSlice'

export const store = configureStore({
    reducer: {
        notes: notesReducer,
    }
})