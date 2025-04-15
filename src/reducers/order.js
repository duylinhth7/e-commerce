const orderReducer = (state = [], action) => {
    const newState = [...state];
    switch(action.type){
        case "ADD_TO_ORDER":
            // console.log(action)
            return[
                ...state,
                {
                    url: action.url,
                    info: action.info,
                    quantity: 1
                }
            ];
        default:
            return state
    }
}
export default orderReducer;