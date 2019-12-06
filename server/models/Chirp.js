import { Schema as _Schema, model } from 'mongoose'
const Schema = _Schema

const Chirp = new Schema(
  {
    text: {
      type: String,
      uppercase: true,
      required: true,
    },
    timestamp: {
      type: Date, 
      default: Date.now,
    }
  },
)

export default model('chirps', Chirp)