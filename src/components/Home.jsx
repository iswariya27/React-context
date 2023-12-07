import React from 'react';
import "../style/home.css"

function Home(props) {
    return (
        <div className='container'>
            <h1 className='text-center mt-3'>Mobile Phones</h1>
            <p className='mt-3'>Mobile phones are no more merely a part of our lives. Whether it's 
                to stay connected with friends and family or to keep abreast of 
                important developments around the world, mobiles are no longer for 
                sending a text or making a call. From budget to state-of-the-art 
                smartphones; indigenous names to global big-wigs - a whole universe of 
                mobiles await you on <i>Flipkart</i>. Whether you’re looking for waterdrop 
                notch screens, a high screen to body ratio, AI-powered sensational cameras,
                high storage capacity, blazing quick processing engines or reflective glass 
                designs, rest assured you won’t have to venture anywhere else for your smartphone
                needs. The information you are reading has been last updated on <b>07-Dec-23</b>. 
            </p>
            <img className='img' src="https://storiesflistgv2.blob.core.windows.net/stories/2017/09/iphone8_mainbanner2.jpg" alt="filpkart-img" />            
        </div>
    );
}

export default Home;