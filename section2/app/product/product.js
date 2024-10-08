"use client"
import { useState } from 'react';
import './product.css'

export default function ProductClick(props) {   

    const [Click, setClick] = useState(false);
    const clicked = () => {
        console.log("Button clicked");
        setClick(!Click);
    }

    return (
        <div>
            <div onClick={clicked} type="button">Click me</div>
            <div className={`${Click ? 'clicked': 'unClicked'}`} >Price: {props.price}</div>
        </div>
    )
}