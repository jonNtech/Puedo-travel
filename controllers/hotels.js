const Hotel = require('../models/Hotel')
const moment = require('moment')

module.exports = {
    formatDate: (date, format) => {
        return moment(date).format(format)
    },
    getHotels: async (req,res)=>{
        console.log(req.user)
        try{
            const hotelStays = await Hotel.find({user:req.user.id}).sort({ createdAt: "desc" })
            
            res.render('hotels.ejs', {hotels: hotelStays, moment:moment,  user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createHotel: async (req, res)=>{
        try{
            await Hotel.create({
                hotel: req.body.hotel,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                checkIn: req.body.checkIn,
                checkOut: req.body.checkOut,
                user: req.user.id,
                 })
            console.log('Hotel Stay has been added!')
            console.log(req.body)
            res.redirect('/hotels')
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