import React from 'react';

const MenuItem = ({item}) => {
    const {image,price,name,recipe} = item
    return (
        <div className='flex space-x-2'>
            <img className='w-[100px] rounded-s-none rounded-r-full rounded-b-full' src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}-------------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItem;