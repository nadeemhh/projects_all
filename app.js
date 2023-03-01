const express = require('express')
const path = require('path')
const xlsx = require('xlsx');
var fs = require('fs');
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
let cors = require('cors')
app.use(cors())
var nodemailer = require('nodemailer');
const publicDirectoryPath = path.join(__dirname, './client')
app.use(express.static(publicDirectoryPath))
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

app.get('/convert', (req, res) => {
const workbook = xlsx.readFile('RELIANCE.csv');

// Get the worksheet by name or index
const worksheet = workbook.Sheets['Sheet1'];

// Define the arrays for the column data and object creation
const dateArray = [];
const openArray = [];
const highArray = [];
const lowArray = [];
const closeArray = [];
const resultArray = [];

// Iterate over the worksheet and push the values to the corresponding arrays
for (let i = 2; i <= worksheet['!ref'].split(':')[1].replace(/[A-Z]/g, ''); i++) {
  dateArray.push(worksheet[`A${i}`].v);
  openArray.push(parseFloat(worksheet[`B${i}`].v));
  highArray.push(parseFloat(worksheet[`C${i}`].v));
  lowArray.push(parseFloat(worksheet[`D${i}`].v));
  closeArray.push(parseFloat(worksheet[`E${i}`].v));
}

// Create an object from each set of values and push it to the result array
for (let i = 0; i < dateArray.length; i++) {
  resultArray.push({
    Date: dateArray[i],
    Open: openArray[i],
    High: highArray[i],
    Low: lowArray[i],
    Close: closeArray[i]
  });
}

// Write the result array to a JSON file
fs.writeFileSync('result2.json', JSON.stringify(resultArray));
});

app.get('/data', (req, res) => {
    // Read the JSON data from the file
    const data = fs.readFileSync('result2.json', 'utf-8');
    
    // Send the JSON data as the response
    res.json(data);
  });


app.listen(port)

