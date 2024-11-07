import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/cartContext";
import { currencyFormatter } from "../Util/formatting";
import Button from "./UI/Button";
import userProgressContext from "../store/userProgressContext";
import CartItem from "./CartItem.jsx";


export default function Cart() {
    const ctxCart = useContext(CartContext);
    const userProgressctx = useContext(userProgressContext);

    const cartTotal = ctxCart.items.reduce((acc, item) => {
        return acc + item.quantity * item.price
    }, 0);
    function handleCloseCart() {
        userProgressctx.hideCart();
    }
    function handleGoToheckout(){
        userProgressctx.showCheckout();
    }
    return (
        <Modal className="cart" open={userProgressctx.progress === 'cart'} 
        onClose={userProgressctx.progress === 'cart'? handleCloseCart : null}>
            <h2>your cart</h2>
            <ul>
                {ctxCart.items.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price}
                        onIncrease={() => ctxCart.addItem(item)}
                        onDecrease={() => ctxCart.removeItem(item.id)}
                        />
                ))}
            </ul>
            <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button textonly onClick={handleCloseCart}> Close</Button>
                {ctxCart.items.length > 0 && (<Button onClick={handleGoToheckout}> Go to checkout</Button>) }
            </p>
        </Modal>
    );
}