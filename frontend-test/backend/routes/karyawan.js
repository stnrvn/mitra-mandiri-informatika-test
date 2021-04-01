const router = require('express').Router()

const karyawanController = require('../controllers/karyawanController')

router.get('/karyawan', karyawanController.get)
router.post('/karyawan', karyawanController.create)
router.get('/karyawan/:id', karyawanController.getDataById)
router.put('/karyawan/:id', karyawanController.update)
router.patch('/karyawan/:id', karyawanController.delete)

module.exports = router