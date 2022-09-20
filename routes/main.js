const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const menuController = require('../controllers/menu')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)
router.get("/logout", authController.logout);
router.get('/menu', menuController.getMenu)

module.exports = router