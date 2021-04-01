const router = require('express').Router()

const positionController = require('../controllers/positionController')

router.get('/position', positionController.get)

module.exports = router