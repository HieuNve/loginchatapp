import React, {useState} from 'react';
import "./chaApp.css"
import axios from "axios";
import UserTo from "./user_To";


var idTo;
var ut;

function ChatApp() {
    const [Data, setData] = useState()


    function getValule(e) {
        setData(e.target.value);
    }

    console.log(Data)

    function insertRoomChat() {
        console.log("vao day lgaqqq 2")
        const findByname = async () => {
            console.log("vao day lga 2")
            const param1 = {
                username: Data
            }
            const result = await axios.post('http://127.0.0.1:5000/find', param1);
            return result;

        }

        findByname().then(res => {
            console.log(res)
            idTo = res.data.id;
            ut = res.data.user;
            localStorage.setItem("uT", ut);
            console.log(ut)
            roomchat()
        });
    }

    function roomchat() {
        let idFrom = localStorage.getItem("iduser");
        console.log(idFrom);
        console.log(idTo)
        const insertRoom = async () => {
            const param = {
                id_from: idFrom,
                id_to: idTo
            }
            const result = await axios.post("http://127.0.0.1:5000/roomchat", param)
            return result
        }

        insertRoom().then(res => {
            console.log(res)
        });
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <a href="#"><img className="logo" src="/assets/img/logo.png" alt=""/></a>
                    </div>
                    <div className="col-lg-8" style={{float: 'right'}}>
                        <form className="row g-3" style={{float: 'right'}}>
                            <div className="timKiem">
                                <input className="ipFind" type="text" id={"a1"}
                                       onChange={getValule}/>
                                <button className="btnFind" type="button" onClick={() => insertRoomChat()}>Tìm kiếm
                                </button>
                                <a href="#" className="user"> <i className="fa fa-user" aria-hidden="true"/> </a>
                            </div>
                        </form>
                    </div>
                    <div className="col-4">
                        <UserTo name={ut}/>
                    </div>
                    <div className="col-6"><i className="fa fa-user"/>{ut}<br/>
                        <div className="boxchat">
                            <div className="receive">
                                <p><i className="fa fa-user"/> ádasdasdasd</p>
                            </div>
                            <br/><br/>
                            <div className="send">
                                <p>ádasdsadsad</p>
                            </div>
                            <div className="ipChat">
                                <form action>
                                    <input className="inbox" type="text"/>
                                    <i className="fa fa-paper-plane"/>
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