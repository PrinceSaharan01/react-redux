const mongoose = require("mongoose");
const express = require('express');
const cors = require('cors')
const Data = require('./DB/Data');
require('./DB/confiqure')
const app = express();
app.use(express.json());
app.use(cors());


app.get('/', async (req, resp) => {

    const data = await Data.find();
    // console.log(data);
    // resp.send('Helllooooooo')
    resp.send(data);
});

app.post("/add", async (req, resp) => {
    const data = new Data(req.body);
    const result = await data.save();
    resp.send(result);

});


app.get('/update/:id' , async(req,resp)=>{
    let data =  await Data.find({_id:req.params.id});
    resp.send(data)
})
app.put('/update/:id', async (req, resp) => {
    const result = await Data.updateOne({ _id: req.params.id }, {
        $set: req.body

    })
    resp.send(result)
})

app.listen(4000);