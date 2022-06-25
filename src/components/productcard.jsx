import Style from "../style/productCard"

export default function ProductCard(props){
    return(
        <Style>
            <div className="imgbox">
                <img scr={props.img}/>
            </div>

            <div className="infos">
                <span>{props.description}</span>
                <span>{props.price}</span>
            </div>
        </Style>
    )
}