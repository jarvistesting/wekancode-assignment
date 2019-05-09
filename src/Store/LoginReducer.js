let initialState = {
    isLogin: false,
    errorMsg: '',
    user_data: {},
    access_token: ''
}

const LoginReducer = (state = initialState, action) => {
    if (action.type === 'LOGIN_SUCCESS') {
        let statetest = {
            ...state,
            isLogin: true,
            errorMsg: '',
            user_data: action.data.data,
            access_token: action.data.data.access_token
        }
        return statetest;
    } else if (action.type === 'LOGIN_ERROR') {
        let statetest = {
            ...state,
            isLogin: true,
            errorMsg: 'User Not Found',
            user_data: {},
            access_token: ''
        }
        return statetest;
    } else if (action.type === 'LOGOUT_SUCCESS') {
        let statetest = {
            ...state,
            isLogin: false,
            errorMsg: 'User Not Found',
            user_data: {},
            access_token: ''
        }
        return statetest;
    }
    return state;
}

export default LoginReducer;