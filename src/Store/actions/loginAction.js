import {sha512} from 'js-sha512';
export const loginAction = (credentials, ownProps) => {
    return (dispatch) => {
        let email = credentials.email;
        let password = sha512(credentials.password);
        if (email && password) {
            fetch('http://dev.api.staller.show/v1/users/login', {
                "method": 'POST',
                "mode": 'cors',
                "headers": {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password
                })
            })
            .then(res => res.json())
            .then((data) => {
                if (data.errors) {
                    dispatch({type: 'LOGIN_ERROR', data, ownProps});
                } else {
                    dispatch({type: 'LOGIN_SUCCESS', data, ownProps});
                    ownProps.history.push('/dashboard');
                }
                
            })
        }
    }
}

export const logoutAction = () => {
    return (dispatch) => {
        dispatch({type:'LOGOUT_SUCCESS'})
    }
}