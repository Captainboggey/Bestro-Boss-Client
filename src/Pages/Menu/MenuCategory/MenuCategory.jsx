import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,title,img}) => {
    return (
        <div className='mb-10'>
        {title &&  <Cover title={title} img={img}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 mt-10'>
                {
                    items.map(item=><MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
            <div className='text-center mt-10'>
           <Link to={`/order/${title}`}> <button className='btn btn-outline border-0 border-b-4 uppercase '>order your favorite food</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;