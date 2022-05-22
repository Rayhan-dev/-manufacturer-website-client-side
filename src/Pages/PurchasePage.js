import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const PurchasePage = () => {
    const { id } = useParams();
    const [purchaseItem,setPurchaseItem]=useState([])
    fetch(`http://localhost:5000/tools/${id}`)
        .then(res => res.json())
        .then(data => setPurchaseItem(data))
    return (
        <div>
            <h1> parchase page for :{purchaseItem.name}</h1>
        </div>
    );
};

export default PurchasePage;