export const addToOrder = (url, info) => {
    return{
        type: "ADD_TO_ORDER",
        url: url,
        info: info
    }
}