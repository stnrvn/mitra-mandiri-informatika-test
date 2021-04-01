const router = require('express').Router()
const karyawanRouter = require('./karyawan')
const positionRouter = require('./position')

router.use(karyawanRouter)
router.use(positionRouter)

module.exports = router