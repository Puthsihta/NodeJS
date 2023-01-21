const express = require('express')
const router = express.Router()
const userModel = require('../model/userModel')
router.get('/', async (req, res) => {
  const user = await userModel.find()
  res.json(user)
})
router.post('/', async (req, res) => {
  // console.log('name : ', req.body)
  try {
    const data = {
      name: req.body.name,
      age: req.body.age,
    }
    const user = new userModel(data)
    await user.save()
    res.json(user)
  } catch (err) {
    console.log('error : ', err)
  }
})
router.put('/:id', async (req, res) => {
  const data = {
    name: req.body.name,
    age: req.body.age,
  }
  try {
    await userModel.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      data,
    )
    const userUpdated = await userModel.findById(req.params.id)
    res.json(userUpdated)
  } catch (err) {
    console.log(err)
  }
})
router.delete('/:id', async (req, res) => {
  try {
    await userModel.findByIdAndRemove(req.params.id)
  } catch (err) {
    logger.error(err)
  }
  res.json({
    message: true,
  })
})
router.get('/:id', async (req, res) => {
  try {
    const _user = await userModel.findById(req.params.id)
    res.json(_user)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
