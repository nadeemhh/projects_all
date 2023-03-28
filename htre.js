const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const axios = require('axios');

//app.get('/apdata', (req, res) => {
async function re() {
    console.log('response')
    const response = await axios.get(`https://api.nasdaq.com/api/quote/AAPL/summary?assetclass=stocks`);
    
      console.log(response.data)


//res.send(response.data)
}

re()

//})