import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt='Banner'
          className='home__image'
        />

        <div className='home__row'>
          <Product
            id='12321341'
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={19.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
            rating={5}
          />
          <Product
            id='49538094'
            title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
            price={239.0}
            image='https://images-na.ssl-images-amazon.com/images/I/61etD4-IrPL._AC_SL450_.jpg'
            rating={4}
          />
        </div>

        <div className='home__row'>
          <Product
            id='4903850'
            // title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            title='Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS'
            price={199.99}
            rating={3}
            image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
          />
          <Product
            id='3445930'
            title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric'
            price={98.99}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/61zQN-TujQL._AC_SL450_.jpg'
          />
          <Product
            id='3254354'
            title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
            price={98.99}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL450_.jpg'
          />
        </div>

        <div className='home__row'>
          <Product
            id='9943867'
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/71916r38cNL._AC_SL450_.jpg'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
