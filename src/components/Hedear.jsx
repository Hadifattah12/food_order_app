import { useContext } from 'react';
import imglogo from '../assets/logo.jpg'
import Button from './UI/Button.jsx';
import CartContext from '../store/cartContext.jsx';
export default function Header() {
    const cartctx = useContext(CartContext);
    const len = cartctx.items.reduce((acc,item) => {
        return acc + item.quantity;
    },0);
    return (
        <header id='main-header'>
            <div id='title'>
                <img src={imglogo} />
                <h1>Hadi 's Restaurant</h1>
            </div>
            <nav>
                <Button textonly>
                    cart ({len})
                </Button>
            </nav>
        </header>
    );
}

