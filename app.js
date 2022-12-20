const express = require('express')
const path = require('path')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
let cors = require('cors')
app.use(cors())
var nodemailer = require('nodemailer');
const publicDirectoryPath = path.join(__dirname, './client')
app.use(express.static(publicDirectoryPath))
const port = process.env.PORT || 3600



app.listen(port)

