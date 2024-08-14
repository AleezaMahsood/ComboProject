import axios from "axios";
import { createContext, useEffect, useState } from "react";
import {food_list} from "../assets/frontend_assets/assets"
import food_1 from "../assets/frontend_assets/food_1.png"
import food_2 from "../assets/frontend_assets/food_2.png"
import food_3 from "../assets/frontend_assets/food_3.png"
import food_4 from "../assets/frontend_assets/food_4.png"
export const StoreContext= createContext(null)
const StoreContextProvider=(props)=>{

    const [token,setToken]=useState(localStorage.getItem("token") || "")
    //const [food_list,setFoodList]=useState([])
    const updateToken = (newToken) => {
        setToken(newToken);
        localStorage.setItem("token", newToken);
      };
    /*  const fetchFoodList = async ()=>{
        const response=await axios.get("http://localhost:5555/food/listFood");
        setFoodList(response.data.data);
      }
      useEffect(()=>{
        async function loadData() {
            await fetchFoodList()
        }
        loadData();
      },[])
      */
      const [cartitems , setcartitems]=useState(0);
    
      const addtocart = (itemId) => {
        setcartitems((prev) => ({
          ...prev,
          [itemId]: (prev[itemId] || 0) + 1
        }));
      };
      
      const removefromcart = (itemId) => {
        setcartitems((prev) => {
          if (prev[itemId] > 1) {
            return { ...prev, [itemId]: prev[itemId] - 1 };
          } else {
            const { [itemId]: removedItem, ...newCartItems } = prev;
            return newCartItems;
          }
        });
      };
  
      
     const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartitems){
            if(cartitems[item]>0){
                let itemInfo=food_list.find((product)=>product._id===item)
                totalAmount+= itemInfo.price*cartitems[item];
            }
     }
     return totalAmount
    }

     const cartItem=[
      {
        _id: "1",
        name: "Greek salad",
        image: food_1,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    },
    {
        _id: "2",
        name: "Veg salad",
        image: food_2,
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    }, {
        _id: "3",
        name: "Clover Salad",
        image: food_3,
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    }, {
        _id: "4",
        name: "Chicken Salad",
        image: food_4,
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    }
     ]
    const contextValue={
        food_list,
        token,
        cartitems,
        setcartitems,
        addtocart,
        removefromcart,
        getTotalCartAmount,
        updateToken
    }
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider