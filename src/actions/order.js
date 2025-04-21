export const addToOrder = (info) => {
    // console.log(info)
    return{
        type: "ADD_TO_ORDER",
        info: info
    }
}