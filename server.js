const express = require('express')
const app = express()
const port = 3000
const path = require('path')
app.use(express.static('public'));
app.use('/public', express.static(path.join(__dirname, 'public')))
const server = app.listen(port, () => console.log(`Server listening on port: ${port}`));