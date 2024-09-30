import FlightSearch from "./Components/flightSearch";
import Footer from "./Components/footer";
import Hero from "./Components/hero";
import LoyaltyPromo from "./Components/loyaltyPromo";
import NavBar from "./Components/navbar";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <div className="max-w-screen-xl mx-auto p-4">
        <FlightSearch></FlightSearch>
      </div>
      <LoyaltyPromo></LoyaltyPromo>
      <Footer></Footer>
    </>
  );
}
