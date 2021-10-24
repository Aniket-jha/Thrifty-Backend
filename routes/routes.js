import express from "express";
import { userSignup,userLogIn } from "../controller/user-controller.js";
import { getMensBottom, getMensTop,getWomensTop,getWomensBottom,getMensEthinic,getWomensEthinic,getMensTopId,getMensBottomId,getWomensTopId,getWomensBottomId,getMensEthinicId,getWomensEthinicId } from "../controller/product-controller.js";
const router=express.Router()

router.post('/signup', userSignup);
router.post('/login',userLogIn)
router.get('/mensTop',getMensTop)
router.get('/mensBottom',getMensBottom)
router.get('/womensTop',getWomensTop)
router.get('/womensBottom',getWomensBottom)
router.get('/mensEthinic',getMensEthinic)
router.get('/womensEthinic',getWomensEthinic)
router.get('/mensTop/:id',getMensTopId)
router.get('/mensBottom/:id',getMensBottomId)
router.get('/womensTop/:id',getWomensTopId)
router.get('/womensBottom/:id',getWomensBottomId)
router.get('/womensEthinic/:id',getWomensEthinicId)
router.get('/mensEthinic/:id',getMensEthinicId)
export default router;