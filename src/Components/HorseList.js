import React, {Component} from 'react';
import {deleteHorse, viewHorse} from '../Store/actions/crudAction';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

class HorseList extends Component {
    render() {
        const horses = this.props.horses;
        return(
            <div>
                <h2>Horse List's</h2>
                <table className="striped centered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Horse Number</th>
                            <th>Horse Name</th>
                            <th>Profile Pic</th>
                            <th>Aqha Number</th>
                            <th>Color</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {horses && horses.map(horse => {
                            return (
                                <tr key={horse.id}>
                                    <td>{horse.id}</td>
                                    <td>{horse.horse_number}</td>
                                    <td>{horse.horse_name}</td>
                                    <td>{horse.profile_pic ?  <img src={horse.profile_pic} alt="horse pic" /> : 'N/A'}</td>
                                    <td>{horse.aqha_number}</td>
                                    <td>{horse.color}</td>
                                    <td>
                                        <button className="btn btn-sm waves-effect waves-light login-submit" type="button" onClick={() => this.props.viewHorse(horse.id, this.props.access_token)}>
                                            <i className="material-icons">remove_red_eye</i>
                                        </button>
                                        &nbsp;&nbsp;
                                        <button type="button" onClick={() => this.props.deleteHorse(horse.id, this.props.access_token)} className="btn btn-sm waves-effect waves-light login-submit">
                                            <i className="material-icons">delete</i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        access_token: state.loginData.access_token
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteHorse: (id, access_token) => {
            if (window.confirm("Are you sure want to delete?")) {
                dispatch(deleteHorse(id, access_token, ownProps))
            }
        },
        viewHorse: (id, access_token) => dispatch(viewHorse(id, access_token, ownProps))
    }    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HorseList));