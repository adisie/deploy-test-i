import {useSelector} from 'react-redux'

// actions from slices
// notes
import {
  selectNotes,
} from '../notesSlice'

// sub-posts
import SingleNote from "./SingleNote"

// main
const NotesList = () => {
  // states from slices
  // notes
  const notes = useSelector(selectNotes)

  return (
    <div className="flex-grow mt-1 h-[82vh] overflow-y-auto pr-1" id="note-list-con">
        {
          notes.map(note=>(
            <SingleNote key={note._id} note={note} />
          ))
        }
    </div>
  )
}

export default NotesList