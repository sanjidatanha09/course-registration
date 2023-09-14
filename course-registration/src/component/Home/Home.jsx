/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Cart from '../Cart/Cart';
import "./Home.css";
import { useState } from 'react';

const Home = () => {
   
    const [allActors ,setAllActors]= useState([]);
    const [selectedActors , setSelectedActors] = useState([]);
    
    useEffect(() => {
        fetch("./data.json")
        .then((res) => res.json())
        .then((data) => setAllActors(data));
    },[]);

    const handleSelectActor = (actor) => {
        const isExist =selectedActors.find(item =>item.id ==actor.id)
        console.log(isExist);

        if(isExist){
            return alert("already added");
        }
        else{
            setSelectedActors([...selectedActors, actor]);

        }


    };



    return (
        <div className='container'>
            <div className='home-container'>
                <div className='card-container'>
                    {allActors.map((actor) =>(

                        <div key={actor.id} className='card'>
                            <div className='card-img '>
                                <img className='photo' src={actor.image} alt="" />

                            </div>
                            <h2 className="">{actor.course}</h2>
                            <p>
                                <small>{actor.Details}</small>
                            </p>
                            <div className='info'>
                                
                                <p>$Price: {actor.Price}</p>
                                <p>$#Credit:{actor.Credit}</p>
                            </div>
                            <div>
                                <button onClick={() => handleSelectActor(actor)} className="card-btn">Select</button>
                            </div>


                        </div>
                    
                    ))}

               </div>

                <div className='cart'>
                    <Cart selectedActors={selectedActors}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;

