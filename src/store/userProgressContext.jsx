import { createContext, useState } from "react";

const userProgressContext = createContext({
    progress : '',
    hideCart :() => {},
    showCart: () => {},
    hideCheckout: () => {},
    showCheckout: () => {},
});
    export function UserProgressContextProvider({children}){
        const [userProgress,setUserProgress] = useState('');
        function showCart(){
            setUserProgress('cart')
        }
        function hideCart(){
            setUserProgress('');
        }
        function showCheckout(){
            setUserProgress('checkout')
        }
        function hideCheckout(){
            setUserProgress('');
        }
        const userProgressctx = {
            progress : userProgress,
            hideCart,
            showCart,
            hideCheckout,
            showCheckout
        };
        return(
            <userProgressContext.Provider value={userProgressctx}>
                {children}
            </userProgressContext.Provider>
        );
    }    

export default userProgressContext;