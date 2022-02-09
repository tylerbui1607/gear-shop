
import { constants as c } from "../../constants";
import "../Header/Header.css"
export default function Header(props){

    function HandleOpenLoginForm(e){
        e.preventDefault();
        console.log(e.target.value);
        props.ChangePopupType(e.target.value);
    }

    return(
        <div className="nav-bar">
            <button value ={c.LOGIN_POPUP} onClick = {HandleOpenLoginForm}>Login</button>
        </div>
    )

}