import { useState } from 'react'
import { useCart } from "react-use-cart";
import Style from '../style/cart'
import { BiPlus, BiMinus } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";


export default function Cart(){
    const [ open, setOpen ] = useState(false)

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
      } = useCart();
    
      return (
        <Style>

          <div className={open ? "card open": "card close"}>

            <div className="openButton" onClick={()=> setOpen(!open)}>
              <span><BsCart2 style={{marginRight: 5}}/>{totalUniqueItems}</span>
            </div>

            <h1>Cart </h1>

            <div className="containt">

              <ul>
                {items.map((item) => (
                  <li key={item.id}>
                    <div className="imgbox">
                        <img src={item.photo}/>
                    </div>

                    <div className="infos">
                        <span>{item.name}</span>
                      
                        <span>{item.price} €</span>
                        <span>Units: {item.quantity} </span>

                        <div className="btns">

                          <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} >
                            <BiMinus size={15}/>
                          </button>
                      
                          <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} >
                            <BiPlus size={15}/>
                          </button>
                          
                          <button onClick={() => removeItem(item.id)}> 
                            <IoIosClose size={15}/> 
                          </button>

                      </div>
                    </div>
                    
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </Style>
      );
}