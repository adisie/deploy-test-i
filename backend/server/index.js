require('dotenv').config()
const express = require('express')
const monoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

// settings
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: true,
    credentials: true,
}))

monoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('CONNECTED')
    app.listen(PORT,()=>{
        console.log('LISTENING')
    })
})
.catch(err=>{
    console.log('DB CONNECTION ERROR')
})

// routes
// notes
app.use('/api/notes',require('./routes/notesRoutes'))