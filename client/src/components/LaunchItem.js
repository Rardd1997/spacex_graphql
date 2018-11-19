import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export default function LaunchItem({id, launch}){
    let bgColor = launch.launch_success ? 'success' : 'danger';
    return <div className={`card border-${bgColor} mb-3`} >
            <div className="card-body">
                <div className="row">
                    <div className="col-md-10">
                        <h4 className="card-title">
                            Mission:{' '}
                            <span className={classNames({
                                'text-success': launch.launch_success,
                                'text-danger': !launch.launch_success
                            })}>{launch.mission_name}</span>
                        </h4>
                        <p className="card-text">
                            Date: <Moment format="YYYY-MM-DD HH:mm">{launch.launch_date_local}</Moment>
                        </p>
                    </div>
                    <div className="col-md-2 pl-1">
                        <Link to={`/launch/${id}`} className="btn btn-secondary">View details</Link>
                    </div>
                </div>   
            </div>
        </div>;
}
