import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle heading={'Featured Item'} subHeading={'check it out'}></SectionTitle>
            <div  className='md:flex justify-center bg-slate-100 bg-opacity-40 text-black items-center pb-20 pt-12 px-36 '>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-12'>
                    <p>Aug 20,2025</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, saepe est. Beatae saepe nesciunt veniam sint aliquam ut molestias veritatis voluptas dolor et repellendus architecto quos, quam maxime iusto blanditiis?</p>
                    <button className='btn btn-outline border-0 border-b-4'>Order Now</button>
                </div>
            </div>
            
        </div>
    );
};

export default Featured;