import CartList from "./CartList";

function Popup({showPopUp, closePopUp, cartItems}) {

    let cartTotal = 0;

    cartItems.forEach(element => {
        let itemTotal = 0;
        itemTotal += (element.price * element.quantity);
        cartTotal += itemTotal;
    });

    const className = `popup-overlay ${showPopUp === true ? 'show-popup' : ''}`;

    return (
        <div className={className}>
            <div className="popup-content">
                <div className='cart-header'>
                    <div className='cart-title'>Your Cart</div>
                    <div className='continue-shopping' onClick={closePopUp} >Continue Shopping</div>
                </div>
                <div className="cart-content">
                    {
                        cartItems.map((product) => {
                            product.quantity = 1;
                            return (
                                <CartList product={product} key={product.id}></CartList>
                            );
                        })
                    }
                    <div className="cart-total">
                        <div>Total</div>
                        <div>₹{cartTotal}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
