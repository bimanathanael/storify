const router = require('express').Router()
const StoriesController = require('../controllers/storiesController')
const mainController = require('../controllers/mainController')

router.post('/stories',StoriesController.add)
router.get('/stories',StoriesController.view)
router.get('/stories/:id',StoriesController.viewById)
router.post('/googleSignin', mainController.googleSignin)

module.exports = router