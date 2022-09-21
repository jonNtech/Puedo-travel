const express = require('express')
const router = express.Router()
const hotelController = require('../controllers/hotels')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, hotelController.getHotels)

router.post('/createHotel', hotelController.createHotel)

router.put('/updateCheckIn', hotelController.updateCheckIn)

router.put('/updateCheckOut', hotelController.updateCheckOut)

router.delete('/deleteHotel', hotelController.deleteHotel)

module.exports = router