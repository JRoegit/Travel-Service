import FlightSearch from "./Components/flightSearch";
import Footer from "./Components/footer";
import Hero from "./Components/hero";
import NavBar from "./Components/navbar";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <div className="max-w-screen-xl mx-auto">
        <FlightSearch></FlightSearch>
      </div>
      <Footer></Footer>
    </>
  );
}
