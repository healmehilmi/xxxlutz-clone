import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
        <div>
        <h2 >Jubiläumsrabatte für DU</h2>
        <img className="home__image" src="https://media.xxxlutz.com/i/xxxlutz/NCt2REM6tQH1SjTXwU9WhnZg/?fmt=jpg&amp;fmt.jpeg.interlaced=true&amp;w=0&amp;h=300&amp;qlt=85" srcset="https://media.xxxlutz.com/i/xxxlutz/NCt2REM6tQH1SjTXwU9WhnZg/?fmt=jpg&amp;fmt.jpeg.interlaced=true&amp;w=210&amp;h=0&amp;qlt=85 210w,https://media.xxxlutz.com/i/xxxlutz/NCt2REM6tQH1SjTXwU9WhnZg/?fmt=jpg&amp;fmt.jpeg.interlaced=true&amp;w=420&amp;h=0&amp;qlt=85 420w,https://media.xxxlutz.com/i/xxxlutz/NCt2REM6tQH1SjTXwU9WhnZg/?fmt=jpg&amp;fmt.jpeg.interlaced=true&amp;w=600&amp;h=0&amp;qlt=85 600w,https://media.xxxlutz.com/i/xxxlutz/NCt2REM6tQH1SjTXwU9WhnZg/?fmt=jpg&amp;fmt.jpeg.interlaced=true&amp;w=768&amp;h=0&amp;qlt=85 768w,https://media.xxxlutz.com/i/xxxlutz/NCt2REM6tQH1SjTXwU9WhnZg/?fmt=jpg&amp;fmt.jpeg.interlaced=true&amp;w=840&amp;h=0&amp;qlt=85 840w,https://media.xxxlutz.com/i/xxxlutz/NCt2REM6tQH1SjTXwU9WhnZg/?fmt=jpg&amp;fmt.jpeg.interlaced=true&amp;w=1000&amp;h=0&amp;qlt=85 1000w,https://media.xxxlutz.com/i/xxxlutz/NCt2REM6tQH1SjTXwU9WhnZg/?fmt=jpg&amp;fmt.jpeg.interlaced=true&amp;w=1200&amp;h=0&amp;qlt=85 1200w,https://media.xxxlutz.com/i/xxxlutz/NCt2REM6tQH1SjTXwU9WhnZg/?fmt=jpg&amp;fmt.jpeg.interlaced=true&amp;w=1536&amp;h=0&amp;qlt=85 1536w,https://media.xxxlutz.com/i/xxxlutz/NCt2REM6tQH1SjTXwU9WhnZg/?fmt=jpg&amp;fmt.jpeg.interlaced=true&amp;w=1800&amp;h=0&amp;qlt=85 1800w,https://media.xxxlutz.com/i/xxxlutz/NCt2REM6tQH1SjTXwU9WhnZg/?fmt=jpg&amp;fmt.jpeg.interlaced=true&amp;w=2000&amp;h=0&amp;qlt=85 2000w,https://media.xxxlutz.com/i/xxxlutz/NCt2REM6tQH1SjTXwU9WhnZg/?fmt=jpg&amp;fmt.jpeg.interlaced=true&amp;w=2400&amp;h=0&amp;qlt=85 2400w" alt=" "/>   

        </div>
           
           
            <h1>Aktuelle Topseller</h1>

           <div className="home__row">

            <Product
            id="1"
            title="Schone Tisch von XXXLutz"
            price={740.00}
            rating={5}
            image="https://media.xxxlutz.com/i/xxxlutz/PIP0PlTxaWkC_EvTEx0UEyLA/?fmt=jpg&fmt.jpeg.interlaced=true&w=210&h=0&qlt=85&upscale=false%20210w,https://media.xxxlutz.com/i/xxxlutz/PIP0PlTxaWkC_EvTEx0UEyLA/?fmt=jpg&fmt.jpeg.interlaced=true&w=420&h=0&qlt=85&upscale=false%20420w,https://media.xxxlutz.com/i/xxxlutz/PIP0PlTxaWkC_EvTEx0UEyLA/?fmt=jpg&fmt.jpeg.interlaced=true&w=600&h=0&qlt=85&upscale=false%20600w,https://media.xxxlutz.com/i/xxxlutz/PIP0PlTxaWkC_EvTEx0UEyLA/?fmt=jpg&fmt.jpeg.interlaced=true&w=768&h=0&qlt=85&upscale=false%20768w,https://media.xxxlutz.com/i/xxxlutz/PIP0PlTxaWkC_EvTEx0UEyLA/?fmt=jpg&fmt.jpeg.interlaced=true&w=840&h=0&qlt=85&upscale=false%20840w,https://media.xxxlutz.com/i/xxxlutz/PIP0PlTxaWkC_EvTEx0UEyLA/?fmt=jpg&fmt.jpeg.interlaced=true&w=1000&h=0&qlt=85&upscale=false%201000w,https://media.xxxlutz.com/i/xxxlutz/PIP0PlTxaWkC_EvTEx0UEyLA/?fmt=jpg&fmt.jpeg.interlaced=true&w=1200&h=0&qlt=85&upscale=false%201200w,https://media.xxxlutz.com/i/xxxlutz/PIP0PlTxaWkC_EvTEx0UEyLA/?fmt=jpg&fmt.jpeg.interlaced=true&w=1536&h=0&qlt=85&upscale=false%201536w,https://media.xxxlutz.com/i/xxxlutz/PIP0PlTxaWkC_EvTEx0UEyLA/?fmt=jpg&fmt.jpeg.interlaced=true&w=1800&h=0&qlt=85&upscale=false%201800w,https://media.xxxlutz.com/i/xxxlutz/PIP0PlTxaWkC_EvTEx0UEyLA/?fmt=jpg&fmt.jpeg.interlaced=true&w=2000&h=0&qlt=85&upscale=false%202000w,https://media.xxxlutz.com/i/xxxlutz/PIP0PlTxaWkC_EvTEx0UEyLA/?fmt=jpg&fmt.jpeg.interlaced=true&w=2400&h=0&qlt=85&upscale=false%202400w" alt=" "
            />

             <Product
            id="1"
            title="Schone Tisch von XXXLutz"
            price={740.00}
            rating={5}
            image="https://images.unsplash.com/photo-1581428982868-e410dd047a90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt=" "
            />

           </div>
        </div>
    )
}

export default Home
