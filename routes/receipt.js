const express = require('express')
const router = express.Router()
const receiptController = require('../controllers/receipts') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, receiptController.getReceipts)

router.post('/createReceipt', receiptController.createReceipt)

router.put('/markApproved', receiptController.markApproved)

router.put('/markDeclined', receiptController.markDeclined)

router.delete('/deleteReceipt', receiptController.deleteReceipt)

module.exports = router