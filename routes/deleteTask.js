const { Router } = require('express')
const taskSchema = require('../models/task')
const router = new Router()

router.delete('/delete', async (req, res) => {
  try {
    await taskSchema
      .findOneAndDelete({ _id: req.body._id })
      .exec((err, task) => {
        if (err)
          return res.status(500).json({
            code: 500,
            message: 'There was an error deleting the post',
            error: err,
          })
        res
          .status(200)
          .json({ code: 200, message: 'Task deleted', deletedTask: task })
      })
  } catch (e) {
    console.log(e)
    res.send({ message: 'Server error' })
  }
})

module.exports = router
