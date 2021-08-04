import React, {useState} from 'react';

import axios from "axios";

import {Redirect} from 'react-router'

function Signup() {
    const [Dataa, setData] = useState()
    const [Dataa1, setData1] = useState()
    const [Dataa3, setData3] = useState()
    const [redirect, setRedir] = useState(false)
    //
    function getValulee(e) {
        setData(e.target.value);
    }

    function getValulee1(e) {
        setData1(e.target.value);
    }

    function getValulee2(e) {
        setData3(e.target.value);
    }


    const SignupOnClick = () => {
        console.log("vao day Sign Up 1")
        const requetSignup = async () => {
            console.log("vao day Sign Up 2")
            const param2 = {
                username: Dataa,
                password: Dataa1
            }

            const result = await axios.post('http://127.0.0.1:5000/signup', param2);
            console.log(result)
            return result;
        }


        requetSignup().then(res => {
            console.log(res.data)
            if (res.data === 1){
                console.log('ok ')
                alert("Đăng Ký Thành Công")
                setRedir(!redirect)
            }
        });

    }


    if (redirect) {
        return <Redirect to="/"/>
    }


    return (
        <section className="login-dark">
            <form>
                <h2 className="sr-only">Login Form</h2>
                <div className="illustration"><i className="icon ion-ios-locked-outline"/>
                </div>
                <div className="form-group">
                    <input className="form-control" id={"ip1"} value={Dataa} type="email" name="email"
                           placeholder="Email" onChange={getValulee}/>
                </div>
                <div className="form-group"><input className="form-control" id={"ip2"} value={Dataa1} type="password"
                                                   name="password"
                                                   placeholder="Password" onChange={getValulee1}/>
                </div>
                <div className="form-group"><input className="form-control" id={"ip2"} value={Dataa3} type="password"
                                                   name="password"
                                                   placeholder="Password" onChange={getValulee2}/>
                </div>
                <div className="form-group">
                    <button className="btnlog" type="button" onClick={() => SignupOnClick()}>Sign up
                    </button>
                </div>

            </form>
        </section>
    );
}

export default Signup;