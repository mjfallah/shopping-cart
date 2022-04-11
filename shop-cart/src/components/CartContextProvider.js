import React, { createContext, useReducer } from 'react';

const initialState = {
    selectedItems : [],
    totalCount : 0,
    totalPrice : 0,
    checkOut : false
};

const sumItems = items => {
    const totalCount = items.reduce((total , item) => total + item.quantity , 0);
    const totalPrice = items.reduce((total , item) => total + item.quantity * item.price , 0).toFixed(2);
    return {totalCount,totalPrice}
}

const cartReducer = (state , action) => {
    switch(action.type){
        case "ADD_ITEM" :
            if(!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({
                    ...action.payload,
                    quantity : 1
                })
                return {
                    ...state,
                    selectedItems : [...state.selectedItems] ,
                    ...sumItems(state.selectedItems) ,
                    checkOut : false
                }
            }
            break;
        case "REMOVE_ITEM" :
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                selectedItems : [...newSelectedItems],
                ...sumItems(newSelectedItems)
            }
        case "INCREASE" :
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexI].quantity++;
            return{
                ...state ,
                ...sumItems(state.selectedItems)
            }
        case "DECREASE" :
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexD].quantity--;    
            return{    
                ...state,
                ...sumItems(state.selectedItems) 
            }        
        case "CHECKOUT" :
            return {
                selectedItems : [],
                totalCount : 0,
                totalPrice : 0,
                checkOut : true 
            }
        case "CLEAR" :    
            return {
                selectedItems : [],
                totalCount : 0,
                totalPrice : 0,
                checkOut : false 
            }
        default :
            return state    
    }
};

export const cartContext = createContext();

const CartContextProvider = ({children}) => {

    const [state , dispatch] = useReducer(cartReducer , initialState);

    return (
        <cartContext.Provider value={{state,dispatch}}>
            {children}
        </cartContext.Provider>
    );
};

export default CartContextProvider;