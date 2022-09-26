const Hotel = require('../models/Hotel')
const moment = require('moment')
const Receipt = require('../models/Receipt')
const Comment = require("../models/Comment");
const cloudinary = require("../middleware/cloudinary");

module.exports = {
    getMenu: async (req,res)=>{
        try{
            const hotelStays = await Hotel.find({user:req.user.id})
            const receiptItems = await Receipt.find({user:req.user.id})
            const comments = await Comment.find({post: req.params.id}).sort({ createdAt: "asc" }).lean()
            const itemsLeft = await Receipt.countDocuments({user:req.user.id,approved: false})
            res.render('menu.ejs', {hotels: hotelStays, moment:moment,  user: req.user, receipts: receiptItems, left: itemsLeft, comments: comments})
        }catch(err){
            console.log(err)
        }
        
    }
}