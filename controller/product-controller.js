import { mensBottom, mensTop,womensTop,womensBottom,mensEthinic,womensEthinic } from "../modals/productsSchema.js"

export const getMensTop= async(request,response)=>{
    try {
        const mensTopWear= await mensTop.find({})
        
        response.json(mensTopWear)
        
    } catch (error) {
        console.log("Error:",error.message)
    }
}
export const getMensBottom= async(request,response)=>{
    try {
        const mensBottomWear=await mensBottom.find({})
   
        response.json(mensBottomWear)
    } catch (error) {
        console.log("Error:",error.message)
    }
}
export const getWomensTop= async(request,response)=>{
    try {
        const womensTopWear=await womensTop.find({})
   
        response.json(womensTopWear)
    } catch (error) {
        console.log("Error:",error.message)
    }
}
export const getWomensBottom= async(request,response)=>{
    try {
        const womensBottomWear=await womensBottom.find({})
   
        response.json(womensBottomWear)
    } catch (error) {
        console.log("Error:",error.message)
    }
}
export const getMensEthinic= async(request,response)=>{
    try {
        const mensEthinicWear=await mensEthinic.find({})
   
        response.json(mensEthinicWear)
    } catch (error) {
        console.log("Error:",error.message)
    }
}
export const getWomensEthinic= async(request,response)=>{
    try {
        const womensEthinicWear=await womensEthinic.find({})
   
        response.json(womensEthinicWear)
    } catch (error) {
        console.log("Error:",error.message)
    }
}
export const getMensTopId= async(request,response)=>{
    try {
        const mensTopId=await mensTop.findOne({'id':request.params.id})
        response.json(mensTopId)
   
        
    } catch (error) {
        console.log("Error:",error.message)
    }
}
export const getMensBottomId= async(request,response)=>{
    try {
        const mensBottomId=await mensBottom.findOne({'id':request.params.id})
        response.json(mensBottomId)
   
        
    } catch (error) {
        console.log("Error:",error.message)
    }
}
export const getWomensTopId= async(request,response)=>{
    try {
        const womensTopId=await womensTop.findOne({'id':request.params.id})
        response.json(womensTopId)
      
        
    } catch (error) {
        console.log("Error:",error.message)
    }
}
export const getWomensBottomId= async(request,response)=>{
    try {
        const womensBottomId=await womensBottom.findOne({'id':request.params.id})
      response.json(womensBottomId)
      
        
    } catch (error) {
        console.log("Error:",error.message)
    }
}
export const getMensEthinicId= async(request,response)=>{
    try {
        const mensEthinicId=await mensEthinic.findOne({'id':request.params.id})
        response.json(mensEthinicId)
   
        
    } catch (error) {
        console.log("Error:",error.message)
    }
}
export const getWomensEthinicId= async(request,response)=>{
    try {
        const womensEthinicId=await womensEthinic.findOne({'id':request.params.id})
        response.json(womensEthinicId)
       
        
    } catch (error) {
        console.log("Error:",error.message)
    }
}