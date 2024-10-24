import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
        .then((response) => response.json())
        .then((jsonData) => setBottles(jsonData))
    } ,[])

    const [cart, setCart] = useState([]);

    const handleAddToCart = (bottle) => {
        console.log('Added in cart', bottle);
        const newCart = [...cart, bottle];
        setCart(newCart);
    }

    return (
        <div>
            <h2>Total Bottles - {bottles.length}</h2>
            <h3>Add Cart - {cart.length}</h3>

            <div className="bottles">
            {
                bottles.map((bottle) => (
                    <Bottle key={bottles.id} bottle={bottle} handleAddToCart={handleAddToCart} />
                ))
            }
            </div>
        </div>
    );
};

export default Bottles;