const Hotel = require('../models/Hotel')

module.exports = {
    getHotels: async (req,res)=>{
        console.log(req.user)
        try{
            const receiptItems = await Receipt.find({user:req.user.id})
            const itemsLeft = await Receipt.countDocuments({user:req.user.id,approved: false})
            res.render('receipt.ejs', {receipts: receiptItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createHotel: async (req, res)=>{
        try{
            await Hotel.create({
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
    updateCheckIn: async (req, res)=>{
        try{
            await Hotel.findOneAndUpdate({_id:req.body.receiptIdFromJSFile},{
                completed: true
            })
            console.log('Updated Check in')
            res.json('Updated Check in')
        }catch(err){
            console.log(err)
        }
    },
    updateCheckOut: async (req, res)=>{
        try{
            await Hotel.findOneAndUpdate({_id:req.body.receiptIdFromJSFile},{
                completed: false
            })
            console.log('Updated Check out')
            res.json('Updated Check out')
        }catch(err){
            console.log(err)
        }
    },
    deleteHotel: async (req, res)=>{
        console.log(req.body.receiptIdFromJSFile)
        try{
            await Hotel.findOneAndDelete({_id:req.body.receiptIdFromJSFile})
            console.log('Deleted Hotel')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
} 