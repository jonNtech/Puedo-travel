const Receipt = require('../models/Receipt')

module.exports = {
    getReceipts: async (req,res)=>{
        console.log(req.user)
        try{
            const receiptItems = await Receipt.find({userId:req.user.id})
            const itemsLeft = await Receipt.countDocuments({userId:req.user.id,completed: false})
            res.render('receipt.ejs', {receipts: receiptItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createReceipt: async (req, res)=>{
        try{
            await Receipt.create({receipt: req.body.receiptItem, completed: false, userId: req.user.id})
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
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markDeclined: async (req, res)=>{
        try{
            await Receipt.findOneAndUpdate({_id:req.body.receiptIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteReceipt: async (req, res)=>{
        console.log(req.body.receiptIdFromJSFile)
        try{
            await Receipt.findOneAndDelete({_id:req.body.receiptIdFromJSFile})
            console.log('Deleted Receipt')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}   