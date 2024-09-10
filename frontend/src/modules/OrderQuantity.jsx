import React, { useState } from 'react';
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";

function OrderQuantity () {
    const [quantity, setQuantity] = useState(0);
    const maxQuantity = 10;

    const increment = () => {
        if (quantity < maxQuantity) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }
    return (<div className='clicker'>
        <i onClick={decrement} style={{cursor:'pointer', margin: '0 5px', marginTop: '1px'}}><FaMinusSquare /></i>
        <span>{quantity}</span>
        <i onClick={increment} style={{cursor:'pointer', margin: '0 5px', marginTop:'1px'}}><FaPlusSquare /></i>
    </div>);
}

    

export default OrderQuantity;