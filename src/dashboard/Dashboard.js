import React, {Component} from 'react';
import HorseList from '../Components/HorseList';
import {connect} from 'react-redux';

class Dashboard extends Component {
    state = {
        horseList: []
    }
    componentDidMount () {
        fetch('http://dev.api.staller.show/v1/horses', {
            "method": 'GET',
            "mode": 'cors',
            "headers": {
                "Content-type": "application/json",
                'Authorization': `Bearer ${this.props.accessToken}`
            },
        })
        .then(res => res.json())
        .then((data) => {
            this.setState({ horseList: [...data.data] })
        })
    }
    render() {
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col m12 s12">
                        <HorseList horses={this.state.horseList}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        accessToken: state.loginData.access_token
    }
}

export default connect(mapStateToProps, null)(Dashboard);