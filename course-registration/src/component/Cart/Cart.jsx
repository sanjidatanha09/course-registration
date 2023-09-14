/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({selectedActors}) => {
   
    return (
        <div>
            <h1>Course Name</h1>

            {selectedActors.map((actor) =>(
                    <li key={actor.id}>{actor.course}</li>
            ))}
            <hr />
            <h3>Total Credit Hour:{selectedActors.length}</h3>
            <hr />
            
        </div>
    );
};

export default Cart;