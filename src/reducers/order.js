const orderReducer = (state = [], action) => {
    const newState = [...state];
    switch(action.type){
        case "ADD_TO_ORDER":
            if (Array.isArray(action.info)) {
                const newItems = action.info.map(item => ({
                    info: item.info, // item trong giỏ đã có dạng { info: {...}, quantity }
                    quantity: item.quantity
                }));
                return [...newState, ...newItems];
            }

            return [
                ...newState,
                {
                    info: action.info,
                    quantity: 1
                }
            ];
        default:
            return state;
    }
}

export default orderReducer;