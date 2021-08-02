import React, {useState} from 'react';
import ChatApp from "../chatApp/ChatApp";
import {Link} from "react-router-dom"

function Login() {
    const [Data, setData] = useState()
    const [Data1, setData1] = useState()

    function getValule(e) {
        setData(e.target.value);
    }

    function getValule1(e) {
        setData1(e.target.value);
    }


    return (
        <section className="login-dark">
            <form>
                <h2 className="sr-only">Login Form</h2>
                <div className="illustration"><i className="icon ion-ios-locked-outline"/>
                </div>
                <div className="form-group">
                    <input className="form-control" id={"ip1"} value={Data} type="email" name="email"
                           placeholder="Email" onChange={getValule}/>
                </div>
                <div className="form-group"><input className="form-control" id={"ip2"} value={Data1} type="password"
                                                   name="password"
                                                   placeholder="Password" onChange={getValule1}/>
                </div>
                <div className="form-group">
                    <Link to={Data} className="btn btn-primary btn-block" onClick={() => {
                        if (Data === ("hieunvph11329@fpt.edu.vn") && Data1 === ("1234")) {
                            <ChatApp/>
                        } else {
                            alert(Data + Data1)
                        }
                    }}>login
                    </Link>
                </div>
                <a className="forgot" href="#" onClick={() => {
                }}>Forgot your email or password?</a>
            </form>
        </section>
    );
}

export default Login;