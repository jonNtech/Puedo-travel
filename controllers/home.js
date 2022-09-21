module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },
    getSupport: (req,res)=>{
        res.render('support.ejs')
    },
}