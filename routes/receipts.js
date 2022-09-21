const express = require('express')
const router = express.Router()
const upload = require("../middleware/multer");
const receiptController = require('../controllers/receipts') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, receiptController.getReceipts)

router.post('/createReceipt', upload.single("file"), receiptController.createReceipt)

router.put('/markApproved', receiptController.markApproved)

router.put('/markNotApproved', receiptController.markNotApproved)

router.delete('/deleteReceipt', receiptController.deleteReceipt)

module.exports = router