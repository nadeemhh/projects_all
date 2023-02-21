const express = require('express')
const path = require('path')
var fs = require('fs');
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
let cors = require('cors')
app.use(cors())
var nodemailer = require('nodemailer');
const publicDirectoryPath = path.join(__dirname, './client/client')
app.use(express.static(publicDirectoryPath, {
    setHeaders: (res, path, stat) => {
      if (path.endsWith('.js')) {
        res.set('Content-Type', 'application/javascript');
      }
    }
  }));
const port = process.env.PORT || 3600



// app.get('/changedata', async (req, res) => {
//     availableTest[0].departments.BIOCHEMISTRY[0].newPage=false;

//     fs.writeFile('data.json', JSON.stringify(availableTest), function (err) {
//         if (err) throw err;
//         console.log('Replaced!');
//       });


//       const dataBuffer = fs.readFileSync('data.json')
// const dataJSON = dataBuffer.toString()
// const tests = JSON.parse(dataJSON)
//  res.send(tests)
//      })



app.listen(port)

