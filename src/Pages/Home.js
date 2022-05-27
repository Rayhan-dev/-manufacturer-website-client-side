import React from 'react';
import Banner from '../Components/Home/Banner';
import BusinessSummery from '../Components/Home/BusinessSummery';
import Chart from '../Components/Home/Chart';
import ContactForm from '../Components/Home/ContactForm';
import Reviews from '../Components/Home/Reviews';
import ToolsSection from '../Components/Home/ToolsSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToolsSection></ToolsSection>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
            <Chart></Chart>
            <ContactForm></ContactForm>
        </div>
      
        );
};

export default Home;