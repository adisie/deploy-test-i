// models
// note
const Note = require('../models/notesModel')

// get-all-notes
const getAllNotes = async (req,res) =>{
    try{
        const notes = await Note.find().select({
            _id: 1,
            text: 1,
            createdAt: 1,
        }).sort({
            createdAt: -1,
        })
        res.status(200).json({notes})
    }catch(err){
        res.status(400).json({
            error: 'get all notes error'
        })
    }
}

// add-new-note
const addNewNote = async (req,res) => {
    try{
        const {text} = req.body 
        const newNote = await Note.create({text})
        res.status(200).json({
            newNote: {
                _id: newNote._id,
                text: newNote.text,
                createdAt: newNote.createdAt,
            }
        })
    }catch(err){
        res.status(400).json({
            error: 'add new note error'
        })
    }
}

// delete-single-post
const deleteSingleNote = async (req,res) => {
    try{
        const {_id} = req.params 
        const note = await Note.findById(_id)
        if(!note){
            return res.status(400).json({
                error: 'note not found'
            })
        }
        await note.deleteOne()
        res.status(200).json({
            _id,
        })
    }catch(err){
        res.status(400).json({
            error: 'delete single note error'
        })
    }
}

module.exports = {
    getAllNotes,
    addNewNote,
    deleteSingleNote,
}