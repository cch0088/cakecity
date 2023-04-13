import React from "react";
import Login from "./Login";
import Registration from "./Registration";
import Reset from "./Reset";

function Account({type}) {
    switch(type) {
        case 0:
            return <div id="content"><Login /></div>;
        case 1:
            return <div id="content"><Registration /></div>;
        case 2:
            return <div id="content"><Reset /></div>;
        default:
            return <div id="content"><Login /></div>;
    }
}
export default Account;
