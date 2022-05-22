import React from 'react';
import Banner from '../Components/Home/Banner';
import BusinessSummery from '../Components/Home/BusinessSummery';
import Reviews from '../Components/Home/Reviews';
import ToolsSection from '../Components/Home/ToolsSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToolsSection></ToolsSection>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
        </div>
      
        );
};

export default Home;