const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const menuController = require('../controllers/menu')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, menuController.getMenu)



module.exports = router