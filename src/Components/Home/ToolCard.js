import React from 'react';
import { Link } from 'react-router-dom';

const ToolCard = ({ index, data }) => {
    // const [name,price,minOrder,available,description, img] = data;
    return (
        <div>
            <div class={`mx-auto bg-transparent rounded-xl border border-primary  overflow-hidden my-5 `}>
                <div class={`md:flex ${index % 2 == 1 ? " flex-row-reverse" : ""}`}>
                    <div class="md:shrink-0">
                        <img class="h-48 w-full  md:h-full md:w-80" src={data.img} alt="Man looking at item at a store" />
                    </div>
                    <div class="p-8 text-left">
                        <h1 className='text-2xl lg:text-6xl md:text-4xl sm:text-3xl font-bold py-2' >{data.name}</h1>
                        <p className='pb-2 '>{data.description}</p>
                        <p className='pb-2'><b>price:</b> {data.price}$</p>
                        <p className='pb-2'><b>minimum order:</b> {data.minOrder} pieces</p>
                        <p className='pb-2'><b>Available:</b> {data.available} pieces</p>
                        <div className="py-1">
                            <Link to={`/tools/${data._id}`} className="btn btn-primary">Buy Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ToolCard;