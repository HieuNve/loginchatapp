import React, {Component} from 'react';

function UserTo(props) {

    return (
        <div>
            <div className="list">
                <ul>
                    <li>
                        <button className="btn1"><i className="fa fa-user"/>{props.name}</button>
                    </li>
                </ul>
            </div>
        </div>
    );

}

export default UserTo;