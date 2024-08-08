import mongoose from "mongoose";

const order=new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"users",
    },
    book:{
        type:mongoose.Types.ObjectId,
        ref:"books",
    },user:{
        type:String,
        default:"Order Placed",
        enum:["Order Placed","Out for Delivery","Delivered","Canceled"]
    },
},{
    timestamps:true,
})

export const Orders=mongoose.model("orders",order);