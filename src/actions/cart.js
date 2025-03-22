export const addToCart = (url,  info) => {
    return{
        type: "ADD_TO_CART",
        url: url,
        info: info
    }
}
export const updateQuantity = (url, quantity=1) => {
    return{
        type: "UPDATE_QUANTITY",
        url: url,
        quantity: quantity
    }
}
export const deleteProduct = (url) => {
    return{
        type: "DELETE_PRODUCT",
        url: url,
    }
}
export const deleteAll = () => {
    return{
        type: "DELETE_ALL"
    }
}