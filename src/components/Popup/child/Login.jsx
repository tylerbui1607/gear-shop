import { constants as c } from "../../../constants";
export default function Login(props){

    function HandldeChangePopup(e){
        e.preventDefault();
        console.log(e.target.value);
        props.ChangePopup(e.target.value);
    }

    return(
        <div className="form-wrapper">
            <form action="submit" method="POST">
                <button value = {c.SIGNUP_POPUP} onClick={HandldeChangePopup} style ={{padding:'10px'}}>dont have account, register</button>
            </form>
        </div>
    )

}