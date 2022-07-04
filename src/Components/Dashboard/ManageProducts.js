import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading';
import ToolDeleteModal from './ToolDeleteModal';

const ManageProducts = () => {
    const [loading, setLoading] = useState(true);
    const [datas, setDatas] = useState([]);
    const [deleteingTool, setDeletingTool] = useState(null);
    
    const handleToolDelete = (tool) => {
        
        // console.log(tool._id)
        const url = `https://blooming-shelf-97810.herokuapp.com/tools/${tool._id}`
        axios.delete(url);
        const remaining = datas.filter(o => o._id !== tool._id);
        setDatas(remaining);
        setDeletingTool(null)
    }
    useEffect(() => {
        fetch("https://blooming-shelf-97810.herokuapp.com/tools")
            .then(res => res.json())
            .then(datas => {
                setDatas(datas);
                setLoading(null)
            })
    }, [setDatas])

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-primary text-4xl py-5 font-bold'>Manage Products</h1>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span >Action</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas.map(tool => (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        {tool.name}
                                    </th>
                                    <td class="px-6 py-4">
                                        {tool.available}
                                    </td>
                                    <td>
                                        <label onClick={() => setDeletingTool(tool)} for="my-modal" class="btn modal-button text-white px-4 py-3 border border-transparent rounded-lg bg-red-600">Delete Product</label>
                                    </td>
                                </tr>
                            ))
                        }
                        {/* setDeletingOrder={setDeletingOrder} handleOrderCancel={handleOrderCancel} */}


                    </tbody>
                </table>
            </div>
            {deleteingTool && <ToolDeleteModal setDeletingTool={setDeletingTool} handleToolDelete={handleToolDelete} deleteingTool={deleteingTool} ></ToolDeleteModal>}
        </div>
    );
};

export default ManageProducts;