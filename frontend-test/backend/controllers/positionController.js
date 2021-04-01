const { T1_POSITION } = require('../models')

class positionController{
  static async get(req, res){
    try {
      const response = await T1_POSITION.findAll()

      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}

module.exports = positionController