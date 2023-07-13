import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes.js";

const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    };
};

const deleteItem = () => {
    return {
        type: DELETE_ITEM,
    };
};

export { addItem, deleteItem };