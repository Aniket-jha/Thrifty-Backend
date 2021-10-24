import  mongoose  from "mongoose";

const productsSchema= new mongoose.Schema(
   { id: String,
    url: String,
    detailUrl:String,
    title:Object,
    price:Object,
    description:String,
    tagline:String}
)

export const mensTop=mongoose.model('mensTop',productsSchema)
export const mensBottom=mongoose.model('mensbottom',productsSchema)
export const womensTop=mongoose.model('womensTop',productsSchema)
export const womensBottom=mongoose.model('womensbottom',productsSchema)
export const mensEthinic=mongoose.model('mensEthinic',productsSchema)
export const womensEthinic=mongoose.model('womensEthinic',productsSchema)