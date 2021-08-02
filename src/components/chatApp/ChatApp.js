import React from 'react';
import "./chaApp.css"


function ChatApp(){
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <a href="#"><img className="logo" src="/assets/img/logo.png" alt="" /></a>
                        </div>
                        <div className="col-lg-8" style={{float: 'right'}}>
                            <form className="row g-3" style={{float: 'right'}}>
                                <div className="timKiem">
                                    <input className="ipFind" type="text" />
                                    <button className="btnFind">Tìm kiếm</button>
                                    <a href="#" className="user">  <i className="fa fa-user" aria-hidden="true" /> </a>
                                </div>
                            </form>
                        </div>
                        <div className="col-4">
                            <div className="list">
                                <ul>
                                    <li><button className="btn1"><i className="fa fa-user" />  username 1</button></li>
                                    <li><button className="btn1"><i className="fa fa-user" />  username 2</button></li>
                                    <li><button className="btn1"><i className="fa fa-user" />  username 3</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6"><i className="fa fa-user" /> username<br />
                            <div className="boxchat">
                                <div className="receive">
                                    <p><i className="fa fa-user" /> ádasdasdasd</p>
                                </div>
                                <br /><br />
                                <div className="send">
                                    <p>ádasdsadsad</p>
                                </div>
                                <div className="ipChat">
                                    <form action>
                                        <input className="inbox" type="text" />
                                        <i className="fa fa-paper-plane" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default ChatApp;