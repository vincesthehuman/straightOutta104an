const router = require('express').Router()
const sendNews = require('./sendNews')

router.use('/sendNews', sendNews)

module.exports = router
