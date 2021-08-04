import React from "react";
import { Item } from './styled';
import {Link} from "react-router-dom";

const AdItem = (props) => {
    let price = '';

    if(props.data.priceNegotible){
        price = 'Preço Negociável'
    } else {
        price = `R$ ${props.data.price}`
    }

    return (
        <Item className="aditem">
            <Link to={`/ad/${props.data.id}`}>
                <div className="itemImage">
                    <img src={props.data.image} alt=""></img>
                </div>
                <div className="itemName">{props.data.title}</div>
                <div className="itemPrice">{price}</div>
            </Link>
        </Item>
    )
   
}

export default AdItem;

