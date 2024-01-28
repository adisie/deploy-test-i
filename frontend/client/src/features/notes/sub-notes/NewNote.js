import {useState} from 'react'
import {useDispatch} from 'react-redux'

// actions from slices
// notes
import {
    addNewNote,
} from '../notesSlice'

// icons
// send
import { GrSend } from "react-icons/gr"

// main
const NewNote = () => {

    // local states
    const [text,setText] = useState('')

    // hooks
    const dispatch = useDispatch()

    // adjust text area height
    const adjustTextAreaHeight = e => {
        let textarea = document.getElementById('note-text-area')
        textarea.style.height = '18px'
        let scHeight = e.target.scrollHeight 
        textarea.style.height = `${scHeight}px`
    }

    // submit handler
    const submitHandler = () => {
        let textarea = document.getElementById('note-text-area')
        if(text.trim()){
            dispatch(addNewNote({text}))
        }
        setText('')
        textarea.style.height = '18px'
        textarea.focus()
    }

  return (
    <div 
        className="flex-grow flex items-end justify-center"
    >
        <div className="relative flex items-center justify-center">
            <div className="absolute bottom-1 flex px-1 bg-emerald-700 text-xs text-gray-200 font-serif rounded-sm items-center py-1">
                <textarea name="text" id="note-text-area" 
                    className="bg-transparent focus:outline-none resize-none w-[230px] h-[18px] max-h-[430px] mt-1" 
                    placeholder="enter text..." 
                    onKeyUp={adjustTextAreaHeight} 
                    value={text} 
                    onChange={e=>setText(e.target.value)} 
                ></textarea>
                <button className="self-end text-xl" 
                    onClick={submitHandler}
                >
                    <GrSend />
                </button>
            </div>
        </div>
    </div>
  )
}

export default NewNote