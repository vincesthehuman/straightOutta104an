const router = require('express').Router()

router.route('/').get((req, res) => {
  console.log(req.query)
  res.json('hej allihopa')
})

router.route('/').post((req, res) => {
  console.log(req.body)
  res.json('hej allihopa')
})

module.exports = router
