import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes.js";

// const initialState = {
//     numOfItems: 0,
// };

const myMap = new Map();
// myMap.set('Dummy Stock1', [1, 93]);
// myMap.set('Dummy Stock2', [13, 143]);
// myMap.set('Dummy Stock3', [86, 187]);
// myMap.set('Dummy Stock4', [123, 243]);
// myMap.set('Dummy Stock5', [21, 206]);
const initialState = {
    items: [],
}

const cartReducer = (state = myMap, action) => {
    switch (action.type) {
        case ADD_ITEM:
            // myMap.set('')
            console.log(myMap)
            myMap.set(`${action.payload.stockName}`, [`${action.payload.stockQuantity}`, `${action.payload.stockPrice}`, `${action.payload.stopLoss}`]);
            return myMap;
        // {
        //     ...state,
        //     items: [...state.items, action.payload],
        // };

        case DELETE_ITEM:
            return {
                ...state,
                numOfItems: state.numOfItems - 1,
            };
        default:
            return state;
    }
};

export default cartReducer;