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

    return (
        <div>
            <h2>Total Bottles - {bottles.length}</h2>

            {
                bottles.map((bottle) => (
                    <Bottle key={bottles.id} bottle={bottle} />
                ))
            }
        </div>
    );
};

export default Bottles;