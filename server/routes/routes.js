const router = require('express').Router()
const userRouter = require('./userRouter')
const {authentication}  = require('../middlewares/authentication')
const StoriesController = require('../controllers/storiesController')
const mainController = require('../controllers/mainController')

router.use('/users', userRouter)

router.use(authentication)
router.post('/stories', StoriesController.add)
router.get('/stories', StoriesController.view)
router.get('/stories/:id',StoriesController.viewById)
router.post('/googleSignin', mainController.googleSignin)

module.exports = router