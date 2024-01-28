import { useEffect } from 'react'
import {useDispatch} from 'react-redux'

// actions from slices
// notes
import {
  getAllNotes,
} from './notesSlice'

// sub-posts
import NotesList from "./sub-notes/NotesList"
import NewNote from "./sub-notes/NewNote"

// main
const Notes = () => {

  // hooks
  const dispatch = useDispatch()

  // effects
  // get-all-notes
  useEffect(()=>{
    dispatch(getAllNotes())
  },[])
  return (
    <div className="flex-grow flex">
        <div className="max-w-[720px] mx-auto px-3 flex-grow flex flex-col">
            <NotesList />
            <NewNote />
        </div>
    </div>
  )
}

export default Notes