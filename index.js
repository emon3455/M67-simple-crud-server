const express  = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middle ware
app.use(cors());
app.use(express.json());

// user name: emonmhk69
// password: syPend4NtBoipipl

app.get("/" , (req, res)=>{
    res.send("simple croud API is running");
})

app.listen(port , (req, res)=>{
    console.log(`simple crud API is running on port: ${port}`);
});

