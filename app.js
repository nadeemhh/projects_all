const express = require('express')
const path = require('path')
const xlsx = require('xlsx');
const  fs = require('fs');
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


app.get('/getdata',(req, res) => {
  axios.get('https://finance.yahoo.com/quote/aap/key-statistics?p=aap',{
          "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "max-age=0",
            "sec-ch-ua": "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "user-agent": `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36`
          },
          "referrerPolicy": "no-referrer-when-downgrade",
          "body": null,
          "method": "GET",
          "mode": "cors",
          "credentials": "include"
        })
  .then(resonse => {
      res.send(resonse.data)
  }).catch(err => console.error('err'))
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

