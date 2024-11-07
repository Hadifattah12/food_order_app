import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import Header from "./components/Hedear";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/cartContext.jsx";
import { UserProgressContextProvider } from "./store/userProgressContext.jsx";

function App() {
  return (
    <UserProgressContextProvider>
    <CartContextProvider>
      <Header />
      <Meals />
      <Cart />
      <Checkout />
    </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
