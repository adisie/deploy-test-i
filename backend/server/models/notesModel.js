const mongoose = require('mongoose')

const notesShema = new mongoose.Schema({
    text: {
        type: String,
    },
},{
    timestamps: true,
})

module.exports = mongoose.model('Note',notesShema)