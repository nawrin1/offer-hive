import Banner from "../components/Banner/Banner";
import Items from "../components/Items/Items";
import Section from "../components/Section/Section";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-6xl mx-auto">
            <Items></Items>

            </div>
            <Section></Section>
            
        </div>
    );
};

export default Home;