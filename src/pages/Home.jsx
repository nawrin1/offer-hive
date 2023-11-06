import Banner from "../components/Banner/Banner";
import Items from "../components/Items/Items";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-6xl mx-auto">
            <Items></Items>
            </div>
            
        </div>
    );
};

export default Home;