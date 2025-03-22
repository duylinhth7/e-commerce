const cartReducer = (state = [], action) => {
    const newState = [...state];
    switch(action.type){
        case "ADD_TO_CART":
            return[
                ...state,
                {
                    url: action.url,
                    info: action.info,
                    quantity: 1
                }
            ];
        case "UPDATE_QUANTITY":
            const itemUpdate = newState.find(item => item.url === action.url);
            itemUpdate.quantity ++;
            return newState;

        case "DELETE_PRODUCT":
            return newState.filter(item => item.url !== action.url);
        case "DELETE_ALL":
            state = [];
            return state
        default:
            return state
    }
}
export default cartReducer;