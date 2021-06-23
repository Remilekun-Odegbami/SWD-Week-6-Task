import auth from "../components/auth";
import { useHistory } from "react-router";

import '../styles/register.css'

export const Logout = () => {
    const history = useHistory()
    return (
        <div id="login-box" className="left">
            <h1 > Log Out</h1>
            <h3> We hate to see you go, we hope you had a great experience. We are looking forward to seeing you soon. Thank you for using our app.</h3>
            <br />
            <button
            id="btn"
            onClick = {() => {
                auth.logout(() => {
                    history.push('/login');
                })
            }}>Log Out</button>
        </div>
    )
}
