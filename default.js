import { mensTopWear,mensBottomWear,womensTopWear,womensBottomWear,mensEthinicWear,womensEthinicWear } from "./Constants/productData.js"
import {mensTop,mensBottom,womensTop,womensBottom,mensEthinic,womensEthinic} from "./modals/productsSchema.js"
const defaultData= async ()=>{
    try{
       await  mensTop.deleteMany({})
       await  mensBottom.deleteMany({})
       await womensTop.deleteMany({})
       await  womensBottom.deleteMany({})
       await mensEthinic.deleteMany({})
       await womensEthinic.deleteMany({})
         await mensTop.insertMany(mensTopWear)
        await mensBottom.insertMany(mensBottomWear)
        await womensTop.insertMany(womensTopWear)
        await womensBottom.insertMany(womensBottomWear)
        await mensEthinic.insertMany(mensEthinicWear)
        await womensEthinic.insertMany(womensEthinicWear)
         console.log("Data Stored Successfully")
    }catch(err){
        console.log("Error Message", err)
    }
}

export default defaultData