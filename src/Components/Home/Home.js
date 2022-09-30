import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Home.css'
import photo from '../../image.png'
import Information from '../Information/Information';

const Home = () => {
        const [carts, setCart] = useState([])
        const [newCart, setNewCart] = useState([])

        useEffect(() => {
            fetch('fakedata.json')
                .then(res => res.json())
                .then(data => setCart(data))
        }, [])
        const handdleAddToList = (cart) => {
                // console.log(cart)
                const addNewCart = [...newCart, cart];
                setNewCart(addNewCart);
            }
            // console.log(carts)
        return ( <
            div className = 'home' >

            <
            div className = "cart-container" >
            <
            div className = 'header' >
            <
            img src = { photo }
            alt = "" / >
            <
            h1 className = 'name' > Beauty Saloon < /h1> <
            /div> <
            h2 className = 'select' > Select today 's Exercise :</h2> <
            div className = 'cart-list' > {
                carts.map(cart => < Cart cart = { cart }
                    KEY = { cart._id }
                    handdleAddToList = { handdleAddToList } >
                    < /Cart>)  
                } <
                /div>


                <
                /div> <
                div className = "information-container" >
                <
                Information
                newCarts = { newCart } >
                < /Information> <
                /div> <
                /div>
            );
        };

        export default Home;