const express = require('express');
const upload = require('express-fileupload');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(upload());

global.database = {
    helloMessage: "Hello World!"
};

app.use(cors());

app.get('/', (req, res) => {
    console.log("index.js app.get('/') aka HelloWorld"),
    res.send(global.database.helloMessage);
});
app.get('/bye', (req, res) => {
    console.log("index.js app.get('/bye') aka GoodbyeWorld"),
    res.send('Goodbye World!');
});


// When testing be sure postman key uses "newfile" as the key
app.post("/upload",function(req,res){

    if(req.files){
        file = req.files.newfile;
        filename = file.name;

        file.mv('./Upload/'+filename,function(err){});
        res.send("Data accepted");
        console.log("index.js app.post('/testing') aka myFirstUpload SUCCESS");
    } else {
        console.log("index.js app.post('/upload') aka myFirstUpload FAILURE");
        res.send("No file to upload")
    }
});

//Works with the key 'file'
app.post("/testing", function(req,res){
    if(req.files){
        file = req.files.file;
        filename = file.name;
        file.mv('./Upload/'+filename,function(err){});
        res.send("Data accepted");
        console.log("index.js app.post('/testing') aka FullStackUpload SUCCESS");
    } else {
        console.log("index.js app.post('/testing') aka FullStackUpload FAILURE");
        res.send("No file to upload")
    }

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));