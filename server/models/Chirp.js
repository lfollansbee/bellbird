import { Schema as _Schema, model } from 'mongoose'
const Schema = _Schema

const Chirp = new Schema(
  {
    text: { type: String },
  },
)

export default model('chirps', Chirp)