const express = require('express')
const path = require('path')
const xlsx = require('xlsx');
const  fs = require('fs');
const net = require('net');
const archiver = require('archiver');
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
let cors = require('cors')
app.use(cors())
var nodemailer = require('nodemailer');
const publicDirectoryPath = path.join(__dirname, './client')
app.use(express.static(publicDirectoryPath))
const port = process.env.PORT || 3600

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const axios = require('axios');

app.get('/apdata', (req, res) => {
  const ip = req.ip;
  
res.send(ip)


})

app.get('/jsond', (req, res) => {
  const jdata = fs.readFileSync('file2.json', 'utf-8');
  let obj=JSON.parse(jdata)
  console.log(obj)
  res.send(obj)
})


app.get('/download', (req, res) => {
  const folderPath = `${__dirname}/excel`; // Replace 'folder' with the name of the folder you want to send
  const zipName = 'folder.zip';
  const zipPath = `${__dirname}/${zipName}`;
  
  // Create a write stream to write the archive to disk
  const output = fs.createWriteStream(zipPath);
  const archive = archiver('zip');

  // Send the file to the client when the archive is complete
  output.on('close', () => {
    res.download(zipPath, zipName, (err) => {
      // Delete the temporary archive file
      fs.unlinkSync(zipPath);
      if (err) throw err;
    });
  });

  // Catch any errors writing to the archive stream
  archive.on('error', (err) => {
    throw err;
  });

  // Pipe the archive to the write stream
  archive.pipe(output);

  // Add the contents of the folder to the archive
  archive.directory(folderPath, false);

  // Finalize the archive
  archive.finalize();
});


app.get('/convert', (req, res) => {
const workbook = xlsx.readFile('prices2.xlsx');

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
fs.writeFileSync('result5.json', JSON.stringify(resultArray));
});

app.get('/data', (req, res) => {
    // Read the JSON data from the file
    const data = fs.readFileSync('result5.json', 'utf-8');
    
    // Send the JSON data as the response
    res.json(data);
  });


app.listen(port)

