const express = require('express')
const SendEmail = require('../controllers/newsLetterController')
const router = express.Router()


router.post('/newsletter',SendEmail)