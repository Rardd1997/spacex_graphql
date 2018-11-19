import React, { Component, Fragment } from 'react'
import gql from "graphql-tag";
import { Query } from "react-apollo";
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!) {
      launch(flight_number: $flight_number) {
        flight_number
        mission_name
        launch_year
        launch_date_local
        launch_success
      }
    }
`;

export class Launch extends Component {
    render() {
      let {flight_number } = this.props.match.params;
      flight_number = parseInt(flight_number);

      return (
        <Fragment>
        <Query query={LAUNCH_QUERY} variables={{flight_number}}>
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) console.log(error);
                
                return <Fragment>
                {
                  <div>
                    <h1 className="center display-4 my-3">
                      Mission: {' '}
                      <span className={classNames({
                                      'text-success': data.launch.launch_success,
                                      'text-danger': !data.launch.launch_success
                                  })}>{data.launch.mission_name}</span>
                    </h1>
                    <div className="card-body">
                      <div className="row">
                          <div className="col-md-10">
                              <p className="card-text">
                                  Date: <Moment format="YYYY-MM-DD HH:mm">{data.launch.launch_date_local}</Moment>
                              </p>
                          </div>
                      </div>   
                    </div>
                    <div className="col-md-2">
                        <Link to="/" className="btn btn-secondary">Back</Link>
                    </div>
                  </div>
                }
                </Fragment>;
            }}
        </Query>
        </Fragment>
    )
  }
}

export default Launch
