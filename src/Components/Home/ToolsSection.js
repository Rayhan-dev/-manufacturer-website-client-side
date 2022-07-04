import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading';
import ToolCard from './ToolCard';

const ToolsSection = () => {
    const [loading, setLoading] = useState(true);
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch("https://blooming-shelf-97810.herokuapp.com/tools")
            .then(res => res.json())
            .then(datas => {
                setDatas(datas);
                setLoading(null)
            })
    }, [])
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='mx-5 sm:mx-12 md:mx-18 lg:mx-24'>
            <h1 className='text-2xl lg:text-6xl md:text-4xl sm:text-3xl font-bold pb-10'>Products that we manufacture</h1>
            {
                datas.slice(datas.length - 6, datas.length).reverse().map((data, index) => <ToolCard key={data._id} index={index} data={data} ></ToolCard>)
            }
        </div>
    );
};

export default ToolsSection;