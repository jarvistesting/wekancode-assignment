let initialState = {
    id: '',
    horseDetail: ''
}

const viewReducer = (state = initialState, action) => {
    if (action.type === 'VIEW_SUCCESS') {
        let statetest = {
            ...state,
            id: action.data.data.id,
            horseDetail: action.data.data
        }
        return statetest;
    }
    return state;
}

export {viewReducer};