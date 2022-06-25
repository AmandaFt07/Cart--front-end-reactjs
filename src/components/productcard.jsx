import Style from "../style/productCard"
import { useCart } from "react-use-cart";


export default function ProductCard(props){
    const { addItem } = useCart();

    return(
        <Style>
            <div className="imgbox">
                <img src={props.img}/>
            </div>

            <div className="infos">
                <span>{props.name}</span>
                <span>{props.brand}</span>
                <span>{props.price} €</span>
                <button onClick={() => addItem(props.item)}>Add to cart</button>
            </div>
        </Style>
    )
}