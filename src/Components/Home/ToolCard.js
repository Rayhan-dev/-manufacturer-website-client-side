import React from 'react';
import { Link } from 'react-router-dom';

const ToolCard = ({ index, data }) => {
    // const [name,price,minOrder,available,description, img] = data;
    return (
        <div className={`card card-side border border-primary rounded-lg mt-5 ${index%2==1?"flex-col lg:flex-row-reverse":""}`} >
            <figure><img className={`w-2/3 ${index%2==1?"ml-auto":"mr-auto"}`} src={data.img} alt="Movie" /></figure>
            <div class="card-body text-left w-2/3">
                <h1 className='text-3xl font-bold' >{data.name}</h1>
                <p>{data.description}</p>
                <p>price:{data.price}</p>
                <p>minimum order:{data.minOrder}</p>
                <p>Available: {data.available}</p>
                <div class="card-actions justify-start">
                    <Link to={`/tools/${data._id}`} class="btn btn-primary">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default ToolCard;