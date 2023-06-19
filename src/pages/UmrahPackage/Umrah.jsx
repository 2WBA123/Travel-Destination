import React from 'react';
import BookingCard from '../../components/BookingCard';

function Umrah() {
    const items = [
        {
            imageSrc: '/img/countries/1.jpg',
            title: 'Amsterdam',
            link: 'listing.html',
            description: 'Book your trip to Amsterdam',
        },
        {
            imageSrc: '/img/countries/2.jpg',
            title: 'Key West',
            link: '#',
            description: 'Book your trip to Key West',
        },
        {
            imageSrc: '/img/countries/4.jpg',
            title: 'New York City',
            link: '#',
            description: 'Book your trip to NYC',
        },
        {
            imageSrc: '/img/countries/1.jpg',
            title: 'Amsterdam',
            link: '#',
            description: 'Book your trip to Amsterdam',
        },
        {
            imageSrc: '/img/countries/4.jpg',
            title: 'New York City',
            link: '#',
            description: 'Book your trip to NYC',
        },
        {
            imageSrc: '/img/countries/2.jpg',
            title: 'Key West',
            link: '#',
            description: 'Book your trip to Key West',
        },
        {
            imageSrc: '/img/countries/1.jpg',
            title: 'Amsterdam',
            link: '#',
            description: 'Book your trip to Amsterdam',
        },
        {
            imageSrc: '/img/countries/2.jpg',
            title: 'Key West',
            link: '#',
            description: 'Book your trip to Key West',
        },

        // Add more item objects as needed
    ];

    return (
        <div>
           
            <BookingCard items={items} heading= "WHY BOOK WITH US?"/>
            
        </div>
    );
}

export default Umrah;
