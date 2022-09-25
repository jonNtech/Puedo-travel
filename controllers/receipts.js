const Receipt = require('../models/Receipt')
const cloudinary = require("../middleware/cloudinary");

module.exports = {
    getReceipts: async (req,res)=>{
        console.log(req.user)
        try{
            const receiptItems = await Receipt.find({user:req.user.id}).sort({ createdAt: "desc" })
            const itemsLeft = await Receipt.countDocuments({user:req.user.id,approved: false})
            res.render('receipt.ejs', {receipts: receiptItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createReceipt: async (req, res)=>{
        try{
            // Upload image to cloudinary
            const result = await cloudinary.uploader.upload(req.file.path);

            await Receipt.create({
                receipt: req.body.itemName,
                approved: false,
                image: result.secure_url,
                cloudinaryId: result.public_id,
                amount: req.body.amount,
                user: req.user.id,
                 })
            console.log('Receipt has been added!')
            res.redirect('/receipts')
        }catch(err){
            console.log(err)
        }
    },
    markApproved: async (req, res)=>{
        try{
            await Receipt.findOneAndUpdate({_id:req.body.receiptIdFromJSFile},{
                completed: true
            })
            console.log('Marked Approved')
            res.json('Marked Approved')
        }catch(err){
            console.log(err)
        }
    },
    markNotApproved: async (req, res)=>{
        try{
            await Receipt.findOneAndUpdate({_id:req.body.receiptIdFromJSFile},{
                completed: false
            })
            console.log('Marked declined')
            res.json('Marked declined')
        }catch(err){
            console.log(err)
        }
    },
    deleteReceipt: async (req, res)=>{
        console.log(req.body.receiptIdFromJSFile)
        try{
            let receipt = await Receipt.findById(req.params.id)
            
            await Receipt.findOneAndDelete({_id: req.params.id})
            console.log('Deleted Receipt')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}   