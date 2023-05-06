const express  = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

// middle ware
app.use(cors());
app.use(express.json());

// user name: emonmhk69
// password: syPend4NtBoipipl



const uri = "mongodb+srv://emonmhk69:syPend4NtBoipipl@cluster0.zyyhzcl.mongodb.net/?retryWrites=true&w=majority";

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
    // await client.close();
  }
  
}
run().catch(console.dir);


app.get("/" , (req, res)=>{
    res.send("simple croud API is running");
})

app.listen(port , (req, res)=>{
    console.log(`simple crud API is running on port: ${port}`);
});

