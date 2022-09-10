const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const fs = require('fs');

app.use(express.json());
app.use(express.static('public'));
app.use('/public', express.static(path.join(__dirname, 'public')))
const server = app.listen(port, () => console.log(`Server listening on port: ${port}`));

app.post('/postdata', (req, res) => {
    console.log(req.body.postData);    
    const encodedStr = req.body.postData;
    fs.appendFile('./public/data.txt', encodedStr + "\n", err => {
        if (err) {
            console.error(err)
            return
        }
    })    
    res.send({ "status": "ok" })
})