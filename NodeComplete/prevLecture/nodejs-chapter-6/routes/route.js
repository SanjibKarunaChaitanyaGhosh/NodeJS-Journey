import express from 'express'
import { hello } from '../controllers/controller.js'

const router = express.Router()

//endpoints
// router.get('/greet',(req,res)=>{
//     res.json({message:"Welcome....."})
// })                                     --> controller.js

router.get('/greet',hello)

export default router
