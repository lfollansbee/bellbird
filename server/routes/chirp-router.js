import { Router } from 'express';
import Chirp from '../models/Chirp';

const router = Router()

router.get('/', async function(req, res) {
  await Chirp.find({}, (err, chirps) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!chirps.length) {
      return res
        .status(404)
        .json({ success: false, error: `Chirps not found` })
    }
    return res.status(200).json({ success: true, data: chirps })
  }).catch(err => console.log(err))
})

export default router