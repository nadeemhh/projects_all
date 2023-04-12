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


app.get("/etfdata", async (req, res) => {
  console.log(req.query.etfName);

  try{

 let data1 = await axios.get(`https://finance.yahoo.com/quote/${req.query.etfName}/`,{
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
});

 const dom = new JSDOM(data1.data);

 let lastPrice = undefined;

 try{
   lastPrice=dom.window.document.querySelector('[data-field="preMarketPrice"]').textContent.replace(',','');
   }catch(err){
    
    try{
    lastPrice=dom.window.document.querySelector('[data-field="postMarketPrice"]').textContent.replace(',','');
    }catch(error){
     lastPrice=dom.window.document.querySelectorAll('[data-field="regularMarketPrice"]')[6].textContent.replace(',','');
    }
   }

 let yield = dom.window.document.querySelector('[data-test="TD_YIELD-value"]').textContent;

 let nav = dom.window.document.querySelector('[data-test="NAV-value"]').textContent;

 let vol = dom.window.document.querySelector('[data-field="regularMarketVolume"]').textContent;

 let avgvol = dom.window.document.querySelector('[data-test="AVERAGE_VOLUME_3MONTH-value"]').textContent;

console.log(yield,nav,vol,avgvol)
res.send(JSON.stringify({yield,nav,vol,avgvol,lastPrice,etfName:req.query.etfName}))

  }catch (error) {
  console.log(error);
  res.send(
    JSON.stringify({ etfName: req.query.etfName, error: "error" })
  );
}

})

app.get("/pennystocks", async (req, res) => {
  console.log(req.query.pennyStockName);

  try{
    let otherdata = [];

 let data1 = await axios.get(`https://finance.yahoo.com/quote/${req.query.pennyStockName}/`,{
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
  });

 const dom = new JSDOM(data1.data);

 let lastPrice = undefined;

 try{
   lastPrice=dom.window.document.querySelector('[data-field="preMarketPrice"]').textContent.replace(',','');
   }catch(err){
    
    try{
    lastPrice=dom.window.document.querySelector('[data-field="postMarketPrice"]').textContent.replace(',','');
    }catch(error){
     lastPrice=dom.window.document.querySelectorAll('[data-field="regularMarketPrice"]')[6].textContent.replace(',','');
    }
   }

 let pe=dom.window.document.querySelectorAll('[data-test="PE_RATIO-value"]')[0].textContent;

 let eps=dom.window.document.querySelectorAll('[data-test="EPS_RATIO-value"]')[0].textContent;
 
 let exdividend=dom.window.document.querySelector('[data-test="EX_DIVIDEND_DATE-value"]').textContent;
 
  let vol = dom.window.document.querySelector('[data-field="regularMarketVolume"]').textContent;
 
 let avgvol = dom.window.document.querySelector('[data-test="AVERAGE_VOLUME_3MONTH-value"]').textContent;

 console.log(`https://finance.yahoo.com/quote/${req.query.pennyStockName}/key-statistics?p=${req.query.pennyStockName}`)
 let data3 = await axios.get(
  `https://finance.yahoo.com/quote/${req.query.pennyStockName}/key-statistics?p=${req.query.pennyStockName}`,{
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
  }
);


let dom2 = new JSDOM(data3.data);

let pegratio= dom2.window.document.querySelectorAll(".BdB")[3].children[1].textContent;

 otherdata.push(
  dom2.window.document.querySelectorAll(".BdB")[17].children[1].textContent
); // Float

otherdata.push(
  dom2.window.document.querySelectorAll(".BdB")[18].children[1].textContent
); // Held by Insiders

otherdata.push(
  dom2.window.document.querySelectorAll(".BdB")[19].children[1].textContent
); // Held by Institutions

otherdata.push(
  dom2.window.document.querySelectorAll(".BdB")[45].children[1].textContent
); // Total Debt (mrq)

otherdata.push(
  dom2.window.document.querySelectorAll(".BdY")[8].children[1].textContent
); //  Total Cash (mrq)

otherdata.push(
  dom2.window.document.querySelectorAll(".BdB")[41].children[1].textContent
); //Net Income Avi to Common (ttm)

otherdata.push(
  dom2.window.document.querySelectorAll(".BdB")[47].children[1].textContent
); // Current Ratio (mrq)



res.send(JSON.stringify({lastPrice,pe,eps,exdividend,vol,avgvol,pegratio,pennyStockName:req.query.pennyStockName,otherdata,}))

  }catch (error) {
  console.log(error);
  res.send(
    JSON.stringify({ pennyStockName: req.query.pennyStockName, error: "error" })
  );
}

})


app.get("/otherdataapi", async (req, res) => {

try{
  let otherdata = [];
  let data3 = await axios.get(
    `https://finance.yahoo.com/quote/${req.query.stockName}/key-statistics?p=${req.query.stockName}`,{
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
    }
  );

  const dom = new JSDOM(data3.data);

  let lastPrice = undefined;

    try{
      lastPrice=dom.window.document.querySelector('[data-field="preMarketPrice"]').textContent.replace(',','');
      }catch(err){
       
       try{
       lastPrice=dom.window.document.querySelector('[data-field="postMarketPrice"]').textContent.replace(',','');
       }catch(error){
        lastPrice=dom.window.document.querySelectorAll('[data-field="regularMarketPrice"]')[6].textContent.replace(',','');
       }
      }


  otherdata.push(
    dom.window.document.querySelectorAll(".BdB")[17].children[1].textContent
  ); // Float

  otherdata.push(
    dom.window.document.querySelectorAll(".BdB")[18].children[1].textContent
  ); // Held by Insiders

  otherdata.push(
    dom.window.document.querySelectorAll(".BdB")[19].children[1].textContent
  ); // Held by Institutions

  otherdata.push(
    dom.window.document.querySelectorAll(".BdB")[45].children[1].textContent
  ); // Total Debt (mrq)

  otherdata.push(
    dom.window.document.querySelectorAll(".BdY")[8].children[1].textContent
  ); //  Total Cash (mrq)

  otherdata.push(
    dom.window.document.querySelectorAll(".BdB")[41].children[1].textContent
  ); //Net Income Avi to Common (ttm)

  otherdata.push(
    dom.window.document.querySelectorAll(".BdB")[47].children[1].textContent
  ); // Current Ratio (mrq)

  res.send(JSON.stringify({otherdata,lastprice:lastPrice}))
}catch(error){console.log(error)}
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

