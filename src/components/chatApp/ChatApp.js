import React, {useState} from 'react';
import "./chaApp.css"
import axios from "axios";
import UserTo from "./user_To";
import BoxChat from "./boxChat";
import user_To from "./user_To";


var idTo;
var ut;
var idRoomChat;
var d = new Date();
var creatTime = (d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()).toString();
console.log(creatTime)
console.log(ut);

function ChatApp() {
    const [Data, setData] = useState()
    const [Mess, setMess] = useState()
    const [Mess1, setMess1] = useState()
    const [UserNameto, setUserNameto] = useState()


    function getMess(e) {
        setMess(e.target.value);
    }

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
            console.log("aa: " + result)
            return result;

        }

        findByname().then(res => {
            idTo = res.data.id;
            ut = res.data.user;
            roomchat()
            setUserNameto(Data);
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
            console.log("id: " + res.data);
            idRoomChat = res.data
            console.log("id r: " + idRoomChat);

        });
    }

    function CreateChat() {
        let idFrom = localStorage.getItem("iduser");
        const insertMess = async () => {
            const par = {
                chat_room_id: idRoomChat,
                user_from: idFrom,
                message: Mess,
                create_time: (d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()).toString()
            }
            const result = await axios.post("http://127.0.0.1:5000/mess", par)
            return result
        }

        insertMess().then(res => {
            console.log(res);
            setMess1(Mess)
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
                        <UserTo name={UserNameto}/>
                    </div>
                    <div className="col-6"><i className="fa fa-user"/>{UserNameto}<br/>
                        <div className="boxchat">
                            <BoxChat mesSend={Mess1} mesReceive={"alo alo 1234"}/>
                            <br/><br/>
                            <div className="ipChat">
                                <form action>
                                    <input className="inbox" type="text" id={"ipMess"} onChange={getMess}/>
                                    <i className="fa fa-paper-plane" onClick={() => {
                                        CreateChat();
                                    }}/>
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