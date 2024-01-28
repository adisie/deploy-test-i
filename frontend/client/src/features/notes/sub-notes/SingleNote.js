import {formatDistanceToNow} from 'date-fns'
import {useDispatch} from 'react-redux'

// actions from slices
// notes
import {
  deleteNote,
} from '../notesSlice'

// icons
import { AiOutlineDelete } from "react-icons/ai"

// main
const SingleNote = ({note}) => {
  // hooks
  const dispatch = useDispatch()

  return (
    <div className="text-xs text-emerald-800 font-serif mb-3 border-b border-emerald-800 border-opacity-[.13] py-1 mr-3">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minima commodi ipsa, exercitationem corporis in quae eaque impedit cumque? Necessitatibus ducimus nam blanditiis perspiciatis placeat aspernatur tempore distinctio laboriosam quasi quos aperiam quibusdam molestiae a, nobis accusamus natus iure dignissimos sint temporibus. Aspernatur illo voluptates voluptas excepturi quae fugiat odit?
        </p>
        <div className="flex items-center py-1 justify-center">
            <button className="text-xl mr-3" 
              onClick={()=>{
                dispatch(deleteNote(note._id))
              }}
            > 
                <AiOutlineDelete />
            </button>
            <span className="text-[.65rem] italic">{formatDistanceToNow(new Date(note.createdAt),{addSuffix: true})}</span>
        </div>
    </div>
  )
}

export default SingleNote