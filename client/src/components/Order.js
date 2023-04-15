import { useContext } from "react";
import { UserContext } from '../App'
import { useHistory } from "react-router-dom";

function Order() {

    const user = useContext(UserContext);
    const history = useHistory();

    if (user) {
        history.push("/cakecity/menu");
    }
    else {
        history.push("/cakecity/login");
    }
}
export default Order;
