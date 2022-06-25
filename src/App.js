import { Fragment } from 'react'
import { CartProvider } from "react-use-cart";
import Style from "./style/home"
import ProductCard from './components/productcard'
import Cart from './components/cart'

const products = [
  {id:1, name:"Channel", brand:"CHANENL", price: 50.00 , photo:"/images/channel.jpg"},
  {id:2, name:"La Vie Est Belle", brand:"LANCÔME", price: 60.70 , photo:"/images/lancome.jpg"},
  {id:3, name:"Shalimar", brand:"GUERLAIN", price: 61.65, photo:"/images/shalimar.jpg"},
  {id:4, name:"Y femme", brand:"YVES SAINT LAURENT", price: 85.76 , photo:"/images/yves.jpg"},
  {id:5, name:"Jadore", brand:"DIOR", price: 63.75 , photo:"/images/jadore.jpg"},
]


function App() {
  return (
   <CartProvider>
      <Style>

        <div className="banner">
          <h1>Perfume Store</h1>   
        </div>

        <div className="container">
          {products.map((item, index) => {
            return(
              <ProductCard key={index} item ={item} img={item.photo} name={item.name} brand={item.brand} price={item.price}/>
            )
          })}
        </div>

        <Cart />
      </Style>
   </CartProvider>
  );
}

export default App;
