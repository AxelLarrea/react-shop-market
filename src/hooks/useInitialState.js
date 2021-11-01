import { useState } from "react";

const initialState = {
    carrito: []
}


const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            carrito: [...state.carrito, payload]
        })
    }

    return {state, addToCart};
}

export default useInitialState;