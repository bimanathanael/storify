const router = require('express').Router()

const userRouter = require('../routing/userRouter')

router.use('/users', userRouter)



module.exports = router