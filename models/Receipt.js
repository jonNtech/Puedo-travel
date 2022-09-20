const mongoose = require('mongoose')

const ReceiptSchema = new mongoose.Schema({
  receipt: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  approved: {
    type: Boolean,
    required: true,
    default: false,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
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

module.exports = mongoose.model('Receipt', ReceiptSchema)