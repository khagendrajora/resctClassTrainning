const initialData = {
    games: 'Football',
    player: 'messi'
}

const gameReducer = (state = initialData, action) => {
    switch (action.type) {
        case 'CHANGE_GAME':
            return {
                ...state,
                games: action.payload
            }
            case 'CHANGE_PLAYER':
                return{
                    ...state,
                    player: action.payload
                }
        default:
            return state
    }
}

export default gameReducer