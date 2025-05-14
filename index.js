const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3000;
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');



app.use(cors())
app.use(express.json())

//user : cofee-monster
//pass : wEbTpXvnC9sKyVb4


// console.log(process.env.BD_USER);
// console.log(process.env.BD_PASS);


const uri = `mongodb+srv://${process.env.BD_USER}:${process.env.BD_PASS}@cluster0.oclat4d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


// const uri = `mongodb+srv://cofee-monster:wEbTpXvnC9sKyVb4@cluster0.oclat4d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);




app.get('/', (req, res) => {
    res.send('Coffe server is getting hotter')
})


app.listen(port, () => {
    console.log(`Coffe server is running on port${port}`);
})
