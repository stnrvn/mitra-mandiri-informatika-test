const { T1_POSITION, T2_EMPLOYEE } = require('../models')

class karyawanController{
  static async get(req, res){
    try {
      const response = await T2_EMPLOYEE.findAll({
        include: T1_POSITION,
        order: [
            ['id', 'ASC']
        ],
      })

      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  static async create(req, res){
    try {
      let data = {
        NAME: req.body.name,
        BIRTH_DATE: req.body.birth_date,
        POSITION_ID: +req.body.position_id,
        ID_NUMBER: +req.body.id_number,
        GENDER: +req.body.gender,
        IS_DELETE: 0
      }

      const response = await T2_EMPLOYEE.create(data)

      return res.status(201).json(response)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  static async getDataById(req, res){
    try {
      const id = +req.params.id
      const response = await T2_EMPLOYEE.findAll({
        where: {
          id
        },
        include: T1_POSITION
      })

      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  static async update(req, res){
    try {
      const id = +req.params.id

      let data = {
        NAME: req.body.name,
        BIRTH_DATE: req.body.birth_date,
        POSITION_ID: +req.body.position_id,
        ID_NUMBER: +req.body.id_number,
        GENDER: +req.body.gender,
        IS_DELETE: 0
      }

      const response = await T2_EMPLOYEE.update(data, {
        where: {
         id
        }
      })

      return res.status(201).json(response)

    } catch (error) {
      return res.status(500).json(error)
    }
  }

  static async delete(req, res){
    try {
      const id = +req.params.id

      let data = {
        IS_DELETE: 1
      }

      const response = await T2_EMPLOYEE.update(data, {
        where: {
         id
        }
      })

      return res.status(201).json(response)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}

module.exports = karyawanController