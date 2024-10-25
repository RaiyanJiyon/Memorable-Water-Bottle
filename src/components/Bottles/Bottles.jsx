import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
        .then((response) => response.json())
        .then((jsonData) => setBottles(jsonData))
    } ,[])

    useEffect(() => {
        console.log(bottles.length)
        if (bottles.length > 0) {
            const storedCart = getStoredCart();
            console.log(storedCart); 

            const savedCart = [];

            for (const id of storedCart) {
                console.log(id)
                const bottle = bottles.find((bottle) => bottle.id === id);

                if (bottle) {
                    savedCart.push(bottle);
                }
            }

            setCart(savedCart)
        }
    },[bottles])


    const handleAddToCart = (bottle) => {
        console.log('Added in cart', bottle);
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id)
    }

    return (
        <div>
            <h2>Total Bottles - {bottles.length}</h2>

            <Cart cart={cart}></Cart>

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