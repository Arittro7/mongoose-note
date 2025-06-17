import { model, Schema } from "mongoose"

const noteSchema = new Schema({
  title: {type: String, required: true, trim: true},
  content: {type: String, default: ""},
  category:{
    type: String,
    enum: ["personal", "work", "study", "other"],
    default: "personal"
  },
  pinned: {
    type: Boolean,
    default: false
  }
},{versionKey: false})

export const Note = model("Note", noteSchema)
