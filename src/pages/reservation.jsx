import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ReservationHero from '../components/reservation/ReservationHero';
import ReservationForm from '../components/reservation/ReservationForm';
import PrivateEvents from '../components/reservation/PrivateEvent';
import FAQ from '../components/reservation/FAQ';
import "../style/common.css";
import ReservationInfo from '../components/reservation/ReservationInfo';

const ReservationPage = () => {
  return (
    <div className="reservation-page">
 
      <ReservationHero />
      <ReservationForm />
      <ReservationInfo/>
     <PrivateEvents/>
      <FAQ />
   
    </div>
  );
};

export default ReservationPage;