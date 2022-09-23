const mongoose = require('mongoose')

const HotelSchema = new mongoose.Schema({
  hotel: {
    type: String,
    //required: true,
  },
  address: {
    type: String,
   // required: true,
  },
  city: {
    type: String,
   // required: true,
  },
  state: {
    type: String,
   // required: true,
  },
  checkIn: {
    type: Date,
   // required: true,
  },
  checkOut: {
    type: Date,
    //required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Hotel', HotelSchema)