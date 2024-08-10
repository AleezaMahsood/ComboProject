import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const StoreContext= createContext(null)
const StoreContextProvider=(props)=>{

    const [token,setToken]=useState(localStorage.getItem("token") || "")
    const [food_list,setFoodList]=useState([])
    const updateToken = (newToken) => {
        setToken(newToken);
        localStorage.setItem("token", newToken);
      };
      const fetchFoodList = async ()=>{
        const response=await axios.get("http://localhost:5555/food/listFood");
        setFoodList(response.data.data);
      }
      useEffect(()=>{
        async function loadData() {
            await fetchFoodList()
        }
        loadData();
      },[])
      
    const contextValue={
        food_list,
        token,
        updateToken
    }
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider