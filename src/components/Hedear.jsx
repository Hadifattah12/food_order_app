import { useContext } from 'react';
import imglogo from '../assets/logo.jpg'
import Button from './UI/Button.jsx';
import CartContext from '../store/cartContext.jsx';
import userProgressContext from '../store/userProgressContext.jsx';


export default function Header() {
    const cartctx = useContext(CartContext);
    const userProgressctx = useContext(userProgressContext);

    const len = cartctx.items.reduce((acc,item) => {
        return acc + item.quantity;
    },0);
    function handleShowCart(){
        userProgressctx.showCart();
    }
    return (
        <header id='main-header'>
            <div id='title'>
                <img src={imglogo} />
                <h1>Hadi 's Restaurant</h1>
            </div>
            <nav>
                <Button textonly onClick={handleShowCart}>
                    cart ({len})
                </Button>
            </nav>
        </header>
    );
}

