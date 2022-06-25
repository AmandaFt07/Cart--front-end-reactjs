import { CartProvider, useCart } from "react-use-cart";
import Style from "./style/home"

function App() {
  return (
   <CartProvider>
      <Style>
        <h1>Teste</h1>   
       
      </Style>
   </CartProvider>
  );
}

export default App;
