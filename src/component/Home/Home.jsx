/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Cart from '../Cart/Cart';
import "./Home.css";
import { useState } from 'react';
import Bookmark from "../../../public/Asset/Frame (1).svg";
import { toast } from 'react-toastify';


const Home = () => {
   
    const [allActors ,setAllActors]= useState([]);
    const [selectedActors , setSelectedActors] = useState([]);
    const  [remaining, setRemaining] = useState (0);
    const [totalCost , setTotalCost] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    
    useEffect(() => {
        fetch("./data.json")
        .then((res) => res.json())
        .then((data) => setAllActors(data));
    },[]);

    const handleSelectActor = (actor) => {
        const isExist =selectedActors.find(item =>item.id ==actor.id)

        let count = actor.Credit;
        let count2 = actor.Price;

        if(isExist){
           return toast("Already select this course");
           
           
        }
        else{
            selectedActors.forEach((item) =>{
                count = count + item.Credit;
                count2 = count2 + item.Price;
            })

            const totalRemaining = 20 - count;
            
            if (count > 20 ){
               return toast("Can not add.Credit limit is over");
            }

            else{
                setTotalCost(count);
                setTotalPrice(count2);
                setRemaining(totalRemaining);


                setSelectedActors([...selectedActors, actor]);
            }

        }


    };


    return (
        <div className='container'>
            <h2 className='course-regi'>Course Registration</h2>
            <div className='home-container'>
                <div className='card-container'>
                    {allActors.map((actor) =>(

                        <div key={actor.id} className='card'>
                            <div className='card-img '>
                                <img className='photo' src={actor.image} alt="" />

                            </div>
                            <h3 className="course-name">{actor.course}</h3>
                            <p className='details'>
                                <small >{actor.Details}</small>
                            </p>
                            
                            <div className='info'>
                                
                                <p className='price'><span className='doller'>$</span> Price : {actor.Price}</p>
                                <p className='bookmark-credit'> <img className='bookmark-img' src={Bookmark} alt="" /> Credit : {actor.Credit}hr</p>
                            </div>
                            <div>
                                <button onClick={() => handleSelectActor(actor)} className="card-btn">Select</button>
                            </div>


                        </div>
                    
                    ))}

               </div>

                <div className='cart'>
                    <Cart selectedActors={selectedActors} remaining={remaining} totalCost={totalCost} totalPrice={totalPrice}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;

