import React from "react";
import Login from "./Login";
import Registration from "./Registration";
import Reset from "./Reset";

function Account(props) {
    switch(props.type) {
        case 0:
            return <div id="content"><Login API={props.API} setUser={props.setUser} /></div>;
        case 1:
            return <div id="content"><Registration API={props.API} /></div>;
        case 2:
            return <div id="content"><Reset API={props.API} /></div>;
        default:
            return <div id="content"><Login API={props.API} /></div>;
    }
}
export default Account;
