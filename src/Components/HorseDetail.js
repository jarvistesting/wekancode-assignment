import React, {Component} from 'react';
import {connect} from 'react-redux';


class HorseDetail extends Component {
    render() {
        return(
            <div>
                <h2>Horse Detail</h2>
                <table className="striped centered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Horse Number</th>
                            <th>Horse Name</th>
                            <th>Profile Pic</th>
                            <th>Aqha Number</th>
                            <th>Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.horseDetail.id}</td>
                            <td>{this.props.horseDetail.horse_number}</td>
                            <td>{this.props.horseDetail.horse_name}</td>
                            <td>{this.props.horseDetail.profile_pic ? <img src={this.props.horseDetail.profile_pic} alt="horse pic" /> : 'N/A'}</td>
                            <td>{this.props.horseDetail.aqha_number}</td>
                            <td>{this.props.horseDetail.color}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        horseDetail:  state.horseData.horseDetail
    }
}

export default connect(mapStateToProps, null)(HorseDetail);