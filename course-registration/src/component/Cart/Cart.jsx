/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({selectedActors , remaining , totalCost}) => {
    console.log(selectedActors);
   
    return (
        <div>
            <h5>Credit hour Remaining :{remaining} hr</h5>
            <hr />
            <h1>Course Name</h1>
            

            {selectedActors.map((actor) =>(
                    <li key={actor.id}>{actor.course}</li>
            ))}
            <hr />
            <h3>Total Credit Hour:{totalCost}</h3>
            <hr />
            
        </div>
    );
};

export default Cart;