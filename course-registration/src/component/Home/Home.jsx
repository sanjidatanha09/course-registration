/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Cart from '../Cart/Cart';
import "./Home.css";
import { useState } from 'react';

const Home = () => {
   
    const [allActors ,setAllActors]= useState([]);
    
    useEffect(() => {
        fetch("./data.json")
        .then((res) => res.json())
        .then((data) => setAllActors(data));
    },[]);



    return (
        <div className='container'>
            <div className='home-container'>
               <div className='card-container'>
                    {allActors.map((actor) =>(

                        <div key={actor.id} className='card'>
                            <div className='card-img '>
                                <img className='photo' src={actor.image} alt="" />

                            </div>
                            <h2 className="text-2xl">{actor.course}</h2>
                            <p>
                                <small>{actor.Details}</small>
                            </p>
                            <div className='info'>
                                
                                <p>$Price: {actor.Price}</p>
                                <p>$#Credit:{actor.Credit}</p>
                            </div>
                            <div>
                                <button className="card-btn">Select</button>
                            </div>


                        </div>
                    
                    ))}

               </div>

                <div className='cart'>
                    <h1>this is cart</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;

