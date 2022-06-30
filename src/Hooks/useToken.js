import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    const axios = require('axios');
    useEffect(() => {
        console.log(user);
        const email = user?.user?.email;
        const userData = { email: email };
        if (email) {
            axios.put(`http://localhost:5000/user/${email}`, userData)
                .then(function (response) {
                    // handle success
                    const secretToken = response.data.token;
                    localStorage.setItem('accessToken',secretToken)
                    setToken(secretToken);
                })
        }
    }, [user]);
    return [token];
}
export default useToken;