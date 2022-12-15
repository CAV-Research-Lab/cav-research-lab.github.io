import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Satellite Imagery for CAV Localisation (SatCAV) - SPIRINT'
              label='Vision'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Cloud Assisted Real-time Methods for Autonomy (CARMA) – EPSRC & JLR'
              label='Connect'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Future AI and Robotics Hub for Space (Fair-Space) – EPSRC & UKSA'
              label='Robotics'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='5G Above the Cloud – Innovate UK'
              label='Connect'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ground Penetrating Radar for Localisation of Autonomous Cars – Innovate UK'
              label='Automotive'
              path='/sign-up'
            />
            {/* <CardItem
              src='images/img-4.jpg'
              text='Energy Management of a Fleet of Connected Electric Delivery Vehicles – KTP'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Predictive fault detection for reconfigurable control systems – IAA-EPSRC'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Autonomous Decision Support System – SPRINT'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Optimization of scalable real-time models and functional testing for e-drive concepts (Obelics) – EU Commission'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Improved Trustworthiness and Weather-Independence of Conditionally Automated Vehicles in Mixed Traffic Scenarios (TrustVehicle) – EU Commission'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Integrated Control of Multiple-Motor and Multiple-Storage Fully Electric Vehicles (iCompose) – EU Commission'
              label='Adventure'
              path='/products'
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
