import orderModel from "../models/orderModel.js";
import {Users} from "../models/user.js";
import Stripe from "stripe";


const stripe=new Stripe(process.env.STRIPE_SECRET_KEY);

//placing user order from frontend
const placeOrder=async(req,res)=>{
    try {
        const newOrder=new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address,
        })
        await newOrder.save();
        await Users.findByIdAndUpdate(req.body.userId,{cart:[]});
        const line_items=req.body.items.map((item)=>({
             price_data:{
                currency:"usd",
                product_data:{
                    name:item.name
             },
             unit_amount:item.price*100
            },
            quantity:item.quantity
        }))
        line_items.push({
            price_data:{
                currency:"usd",
                product_data:{
                    name:"Delivery Charge"
            },
            unit_amount:2*100,
        },
        quantity:1,
        })
        const sessiom=await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:'payment',
            success_url:`http://localhost:3000/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`http://localhost:3000/verify?success=false&orderId=${newOrder._id}`,
        })
        return res.status(200).json({success:true,session_url:session.url})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"});
    }
}
export {placeOrder}