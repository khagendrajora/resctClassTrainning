const initialData = {
    cartcount: 0
}
const cartReducer = (state = initialData, action) => {
    //state store the value
    // action is fun which perform operation

    switch (action.type) {
        case 'ADD_ITEM':
            return {
                cartcount: ++state.cartcount
            }
        case 'REMOVE_ITEM':
            return {
                cartcount: --state.cartcount
            }
        default:
            return state
    }
}

export default cartReducer