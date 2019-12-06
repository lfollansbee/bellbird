import { Router } from 'express';
import Chirp from '../models/Chirp';

const router = Router()

router.get('/', async function (req, res) {
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

router.post('/', async function (req, res) {
  const chirp = new Chirp()
  chirp.text = req.body.text;

  chirp.save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: chirp._id,
        message: 'Chirp created!',
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Chirp not created!',
      })
    })
})


export default router