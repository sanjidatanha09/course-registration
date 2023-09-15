/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({selectedActors , remaining , totalCost , totalPrice}) => {
    console.log(selectedActors);
   
    return (
        <div>
            <h5 className='remaining-hour'>Credit Hour Remaining:{remaining} hr</h5>
            <hr />
            <h2 className='cart-course-name'>Course Name</h2>
            

            {selectedActors.map((actor,index) =>(
                    <p className='cart-list-item' key={actor.id}>{index+1}  {actor.course}</p>
            ))}
            <hr />
            <h3 className='cart-total'>Total Credit Hour: {totalCost}</h3>
            <hr />
            <h3 className='cart-total'>Total Price: {totalPrice} USD</h3>
            
        </div>
    );
};

export default Cart;