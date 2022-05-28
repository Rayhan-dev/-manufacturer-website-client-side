import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const MakeAdminRow = ({ user, refetch }) => {
    const handleMakeAdmin = (email) => {
        axios.put(`https://blooming-shelf-97810.herokuapp.com/admin/${email}`)
        .then(function (response) {
            console.log(response);  
            toast.success("Successfully Made an admin");
            refetch()
        })
        fetch(`https://blooming-shelf-97810.herokuapp.com/admin/${email}`, {
            method: "PUT",
        })
            .then(res => res.json())
            .then(data=>console.log(data))

    }
    return (

        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {user.email}
            </th>
            <td class="px-6 py-4">
                {user.role != "admin" && <div className="btn btn-primary" onClick={() => handleMakeAdmin(user.email)} >Make Admin</div>}
            </td>
        </tr>

    );
};

export default MakeAdminRow;