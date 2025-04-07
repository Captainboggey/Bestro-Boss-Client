import React from 'react';

const FoodCard = ({ item }) => {
    const {image,price,name,recipe} = item
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className='absolute right-0 mr-4 mt-4 p-2 rounded-lg bg-slate-900 text-white'>${price}</p>
            <div className="card-body text-center">
                <h2 className="font-semibold text-2xl text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end mx-auto my-10">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;