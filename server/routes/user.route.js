import express from 'express'
import { test, updateUser } from '../controllers/user.controller.js'
import { verifyToken } from '../utils/verifyUser.js'

const router = express.Router()

router.get('/test', test) 
router.post('/update/:id', verifyToken, updateUser) // first verify the user token then update user

export default router