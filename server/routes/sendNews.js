const router = require('express').Router()

router.route('/').get((req, res) => {
  res.send('hej allihopa')
})

module.exports = router
