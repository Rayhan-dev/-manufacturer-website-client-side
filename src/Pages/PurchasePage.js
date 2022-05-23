import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';

const PurchasePage = () => {
    const { id } = useParams();
    const [purchaseItem,setPurchaseItem]=useState([])
    fetch(`http://localhost:5000/tools/${id}`)
        .then(res => res.json())
        .then(data => {
            setPurchaseItem(data)
        })
    return (
        <div className='h-screen'>
            <h1> parchase page for :{purchaseItem.name}</h1>
        </div>
    );
};

export default PurchasePage;