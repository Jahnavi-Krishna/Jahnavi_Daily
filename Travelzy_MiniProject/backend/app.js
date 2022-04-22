const express = require('express')
const mongodb = require('mongodb')
const cors = require('cors')
const app = express()
const mongoClient = mongodb.MongoClient

app.use(cors({
    origin: '*'
    }));
    app.use(express.json());
    let dburl = 'mongodb+srv://Jahnavi:janu2000@cluster0.gearm.mongodb.net/Travelzy?retryWrites=true&w=majority'
    app.get('/feedback/all',async (req,res) => {
    const client = await mongoClient.connect(dburl);

    try{
    let db = await client.db('Travelzy');
    let data = await db.collection('feedback').find().toArray();
    res.json(data)
    }catch(err){
    console.log(err);
    }finally{
    client.close();
    }
    });

    app.post('/feedback/new', async (req,res) => {
        const client = await mongoClient.connect(dburl);
        try{
        let db = await client.db('Travelzy');
        let q = await db.collection('feedback').insertOne(req.body);
        
        res.json({
        message: "POST Sucessful!"
        })
        }catch(err){
        console.log(err);
        }finally{
        client.close();
        }
        });
        app.all('*',(req,res) => {
        res.sendStatus(404);
        })
        app.listen(3000,() => { console.log('Server running...');})