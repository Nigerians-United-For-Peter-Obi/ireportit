const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({ data: [], status: 1 }).end()
    next()
})

//Send SMS to number
router.get('/sms', (req, res, next) => {
    res.status(200).json({ data: [], status: 1 }).end()
    next()
})



module.exports = router