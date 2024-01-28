const {Router} = require('express')

// controllers
// notes
const {
    getAllNotes,
    addNewNote,
    deleteSingleNote,
} = require('../controllers/notesControllers')

const router = Router()

// get all notes
router.get('/get-all-notes',getAllNotes)

// add new note
router.post('/add-new-note',addNewNote)

// delete single note
router.delete('/delete-single-note/:_id',deleteSingleNote)

module.exports = router