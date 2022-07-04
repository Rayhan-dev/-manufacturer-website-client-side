import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useOrders = () => {
    const axios = require('axios');
    const [user, loading, error] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get(`https://blooming-shelf-97810.herokuapp.com/orders/${user.email}`)
            .then(function (response) {
                setOrders(response.data);
            })
    }, []);
    return [orders, setOrders];
}
export default useOrders