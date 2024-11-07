import Modal from "./UI/Modal";
import CartContext from "../store/cartContext";
import { useContext } from "react";
import { currencyFormatter } from "../Util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import userProgressContext from "../store/userProgressContext";

export default function Checkout() {
    const ctxCart = useContext(CartContext);
    const userProgressctx = useContext(userProgressContext);

    const cartTotal = ctxCart.items.reduce((acc, item) => {
        return acc + item.quantity * item.price
    }, 0);

    function handleClose() {
        userProgressctx.hideCheckout();
    }
    function handleSubmit(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries());
        fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                order: {
                    items: ctxCart.items,
                    customer: customerData,
                }
            })
        });
    }
    return (
        <Modal open={userProgressctx.progress === 'checkout'} onClose={handleClose}>
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
                <Input label="Full Name" type="text" id="name" />
                <Input label="E-mail address" type="email" id="email" />
                <Input label="Street" type="text" id="street" />
                <div className="control-row">
                    <input label="Postal code" type="text" id="postal-code" />
                    <input label="City" type="text" id="City" />
                </div>
                <p className="modal-actions">
                    <Button type="button" textonly onClick={handleClose} >Close</Button>
                    <Button>Submit order</Button>
                </p>
            </form>
        </Modal>
    );
}