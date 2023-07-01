import React from 'react';
import BookingCard from '../../components/BookingCard/BookingCard';
import { items } from '../../constants/CardsConstants';

function Umrah() {


    return (
        <div>
           
            <BookingCard items={items} heading= "WHY BOOK WITH US?"/>
            
        </div>
    );
}

export default Umrah;
