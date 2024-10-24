import './Bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {
    const {name, seller, price, stock, img} = bottle;

    return (
        <div className='bottle'>
            <img src={img} alt="`{name} image`" />
            <h3>{name}</h3>
            <h4>Seller Company - {seller}</h4>
            <h4>Price  - ${price}</h4>
            <h4>Stock Available {stock}</h4>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;