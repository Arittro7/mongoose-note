import express, { Request, Response } from "express"
import { Note } from "../models/notes.models"

export const notesRoute = express.Router()

// create Note 👇
notesRoute.post('/create-note', async (req: Request, res: Response) =>{

  // note: notesRouteroach 1 hardcoded insert
  // const myNote = new Note ({
  //   title: "Learning Mongoose 2",
  //   content: "I am learning mongoose",
  //   quantity: 5
  // })
  // await myNote.save()

  const body = req.body
  const note = await Note.create(body)
  res.status(201).json({
    success: true,
    message: "Note cerated successfully",
    note
  })
})
// getting all Notes 👇
notesRoute.get('/', async (req: Request, res: Response) =>{

  const notes = await Note.find()
  res.status(201).json({
    success: true,
    message: "Note get successfully",
    notes
  })
})

// getting single Note 👇
notesRoute.get('/:noteId', async (req: Request, res: Response) =>{

  const seeking = req.params.noteId 

  const note = await Note.findById(seeking)
  res.status(201).json({
    success: true,
    message: "Note get successfully",
    note
  })
})

// updating Note 👇
notesRoute.patch('/:noteId', async (req: Request, res: Response) =>{

  const noteId = req.params.noteId
  const updatedNote = req.body
  const note = await Note.findByIdAndUpdate(noteId, updatedNote, {new: true})
  res.status(201).json({
    success: true,
    message: "Note updated successfully",
    note
  })
})

// deleting Note 👇
notesRoute.delete('/:noteId', async (req: Request, res: Response) =>{

  const noteId = req.params.noteId
  await Note.findByIdAndDelete(noteId)
  res.status(201).json({
    success: true,
    message: "Note deleted successfully",
  })

})

// -------------------------- ----------------------------- --------------------------
/**Steps
 * 1. paste/bring all routes here, then import express, request and response from express
 * 2. create a route (notesRoute) and used instant of app using express
 * 3. replace all app. with notesRoute.
 * 4. import Note model which use with CURD functions ex:const note = await ---> Note.create(body)
 * 5. remove the '/notes/' from all route declaration as notesRoute already handel it
 *    spe: notesRoute.get('', async instant of "" empty route add a "/"
 * 6. finally add export in-front of notesRoute variable so that it's can access from others
 * [extra: if Note import shows any err then reimport it
 * */