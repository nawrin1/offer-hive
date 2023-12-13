import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner/Banner";
import Facilities from "../components/Banner/Facilities/Facilities";
import Items from "../components/Items/Items";
import Section from "../components/Section/Section";
import { useEffect } from "react";
import Aos from "aos";


const Home = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
      }, []);
    return (
        
        <div>
            <Helmet>
<title>Offer Hive | Home</title>


</Helmet>

            <Banner></Banner>
            <div className="max-w-6xl mx-auto">
            <Items></Items>

            </div>
            <Section></Section>
            <Facilities></Facilities>
            
        </div>
    );
};

export default Home;