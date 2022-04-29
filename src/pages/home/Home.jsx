import Featured from "../../components/featured/Featured";
import GuestHomes from "../../components/guestHomes/GuestHomes";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='homeContainer'>
        <Featured />
        <h2 className='homeTitle'>Browse by property type</h2>
        <PropertyList />
        <h2 className='homeTitle'>Homes guests love</h2>
        <GuestHomes />
      </div>
    </div>
  );
};

export default Home;
