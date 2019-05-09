export const deleteHorse = (id, access_token, ownProps) => {
    return (dispatch) => {
        if (id) {
            fetch(`http://dev.api.staller.show/v1/horses/${id}`, {
                "method": 'DELETE',
                "mode": 'cors',
                "headers": {
                    "Content-type": "application/json",
                    'Authorization': `Bearer ${access_token}`
                }
            })
            .then(res => res)
            .then((data) => {
                if (data.errors) {
                    console.log("Error in Deletion");
                } else {
                    console.log("Successfully deleted");
                }                
            })
        }
    }
}

export const viewHorse = (id, access_token, ownProps) => {
    return (dispatch) => {
        if (id) {
            fetch(`http://dev.api.staller.show/v1/horses/${id}`, {
                "method": 'GET',
                "mode": 'cors',
                "headers": {
                    "Content-type": "application/json",
                    'Authorization': `Bearer ${access_token}`
                }
            })
            .then(res => res.json())
            .then((data) => {
                if (!data.errors) {
                    dispatch({type: 'VIEW_SUCCESS', data});
                    ownProps.history.push(`/horsedetail/${id}`);
                }                
            })
        }
    }
}