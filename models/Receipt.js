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
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Receipt', ReceiptSchema)