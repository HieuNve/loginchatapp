import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import axios from "axios";
import "./login.css"
import {Redirect} from 'react-router'


function Login() {
    const [Data, setData] = useState()
    const [Data1, setData1] = useState()
    const [redirect, setRedir] = useState(false)

    function getValule(e) {
        setData(e.target.value);
    }

    function getValule1(e) {
        setData1(e.target.value);
    }

    const LoginOnClick = () => {
        console.log("vao day lg 1")
        const requetLogin = async () => {
            console.log("vao day lg 2")
            const param = {
                username: Data,
                password: Data1
            }

            const result = await axios.post('http://127.0.0.1:5000/login', param);
            return result;
        }

        requetLogin().then(res => {
            console.log(res.data.username)
            let us = res.data.username;
            let pas = res.data.password
            if (us === Data && pas === Data1) {

                localStorage.setItem("user", JSON.stringify({
                    "username": Data,
                    "password": Data1
                }));
                localStorage.setItem("users", Data);
                localStorage.setItem("iduser", res.data.id);
                var logg = localStorage.getItem("user");
                if (logg !== null) {
                    setRedir(!redirect)
                }
            }
        });

    }

    if (redirect) {
        return <Redirect to="/chat"/>
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
                    <button className="btnlog" type="button" onClick={() => LoginOnClick()}>Log In
                    </button>
                </div>
                <Link to="/signup" onClick={() => {
                }}>Sign Up</Link>
            </form>

        </section>
    );
}

export default Login;