import React from 'react';



function BoxChat(props) {

    return (
        <div className={"boxchat"}>
            <div className="receive">
                <p><i  className="fa fa-user"/> {props.mesReceive}</p>
            </div>
            <br/><br/>
            <div className="send">
                <p>{props.mesSend}</p>
            </div>
        </div>
    );

}

export default BoxChat;