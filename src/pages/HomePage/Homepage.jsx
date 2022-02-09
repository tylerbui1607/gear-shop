import { useState } from "react"
import { Popup } from "../../components/Popup/Popup"
import Header from "../../components/Header"
import Banner from "./child/Banner"

function HomePage(){

    const [popupType,SetPopupType]= useState('')

    return(
        <div className="wrapper">
            {/*============= Header ============ */}
           <Header ChangePopupType = {SetPopupType}/>
            {/*============= Banner ============ */}
            <Banner/>
           { popupType && 
           <Popup 
           PopupType = {popupType} 
           ChangePopupType = {SetPopupType}
            />}
            
        </div>
    )
}

export {HomePage}