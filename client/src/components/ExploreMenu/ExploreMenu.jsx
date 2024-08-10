import React from 'react'
import './ExploreMenu.css'
import { menu_list } from "../../assets/frontend_assets/assets"

function ExploreMenu() {
  return (
    <div>
        <div className="explore-menu" id='exploremenu'>
            <h1>Explore Our Menu!</h1>
            <p className='explore-menu-text' >Choose from our diverse menu of expertly crafted dishes, delivered straight to your door, and enjoy a culinary experience that brings exceptional flavors and convenience right to your home</p>
             <div className="explore-menu-list">
                {
                    menu_list.map(
                        (item,index)=>{
                           return(
                            <div key={index} className="explore-menu-list-item">
                                <img src={item.menu_image}></img>
                                <p>{item.menu_name}</p>
                            </div>
                           )
                        }
                    )
                }
             </div>
        
        </div>
    </div>
  )
}

export default ExploreMenu