const { Router } = require('express')
const taskSchema = require('../models/task')
const router = new Router()

router.get('/get', async (req, res) => {
  try {
    const tasks = await taskSchema.find({})
    res.status(200).json({
      tasks,
    })
    //console.log(tasks)
  } catch (e) {
    console.log(e)
    res.send({ message: 'Server error' })
  }
})

router.post('/add', async (req, res) => {
  try {
    const { title, description } = req.body

    const newTask = new taskSchema({ title, description })
    await newTask.save()
    return res.json({ message: 'Task succesfully added' })
  } catch (e) {
    console.log(e)
    res.send({ message: 'Server error' })
  }
})

module.exports = router
