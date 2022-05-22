import React from 'react';
import Banner from '../Components/Home/Banner';
import BusinessSummery from '../Components/Home/BusinessSummery';
import ToolsSection from '../Components/Home/ToolsSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToolsSection></ToolsSection>
            <BusinessSummery></BusinessSummery>
        </div>
      
        );
};

export default Home;