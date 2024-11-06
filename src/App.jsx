import Header from "./components/Hedear";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/cartContext.jsx";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
