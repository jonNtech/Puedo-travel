const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const port = process.env.PORT || 4000
require('dotenv').config();


// let dbConnectionStr = process.env.DB_STRING,
//     dbName = 'trip-planner';

// MongoClient.connect(dbConnectionStr, {useUnifedTopology: true})
//     .then(client => {
//         console.log(`Connected to ${dbName} database`);
//         db = client.db(dbName);
//     })
MongoClient.connect(process.env.DB_STRING, { useUnifiedTopology: true })
    .then(client => {
    console.log('Connected to Database Jon')
    
//     const db = client.db('star-wars-quotes')
    //const tripsCollection = db.collection('trips')
    

    // app.set('view engine', 'ejs');    
    // app.use(cors());
    // app.use(express.static('public'));
    // app.use(express.urlencoded({extended: true}));
    // app.use(express.json());


    // app.get('/', (req, res) => {
    //     db.collection('travels').find().toArray()
    //         .then(travels => {
    //             res.render('index.ejs', { info: data })
    //         })
    //         .catch(err => console.log(err))
    // })

    // app.post('/addTrip', (req, res) => {
    //     //<TODO>add a confirmed button to the form</TODO>
    //     db.collection('travels').insertOne({hotelName: req.body.hotelName, hotelPrice: req.body.hotelPrice, hotelDate: req.body.hotelDate})
    // })

    app.listen(port, () => {
        console.log(`the server is running on ${port}!`)
    })
})
.catch(err => console.log(err))