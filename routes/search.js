const Router = require('express')
const taskSchema = require('../models/task')
const router = new Router()

router.post('/search', async (req, res) => {
  try {
    console.log(req)
    await taskSchema
      .find({ title: { $regex: '.*' + req.body.title + '.*' } })
      .exec((err, tasks) => {
        if (err)
          return res.status(500).json({
            code: 500,
            message: 'There was an error searching the post',
            error: err,
          })

        res.status(200).json({
          tasks,
        })
      })
  } catch (e) {
    console.log(e)
    res.send({ message: 'Server error' })
  }
})

module.exports = router
