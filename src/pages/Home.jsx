import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner/Banner";
import Facilities from "../components/Banner/Facilities/Facilities";
import Items from "../components/Items/Items";
import Section from "../components/Section/Section";


const Home = () => {
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