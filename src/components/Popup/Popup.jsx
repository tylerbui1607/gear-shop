import { useState } from "react";
import { constants as c } from "../../constants";
import Login from "./child/Login";
import SignUp from "./child/SignUp";

function Popup(props){

    const CurrentPopup = {
        [c.LOGIN_POPUP] : <Login ChangePopup = {props.ChangePopupType} />,
        [c.SIGNUP_POPUP] : <SignUp ChangePopup = {props.ChangePopupType} />,
    }

    return (
        CurrentPopup[props.PopupType]
    )
}

export {Popup}