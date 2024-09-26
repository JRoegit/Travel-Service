import FlightSearch from "./Components/flightSearch";
import Hero from "./Components/hero";
import NavBar from "./Components/navbar";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <div className="max-w-screen-xl mx-auto">
        <FlightSearch></FlightSearch>
      </div>
    </>
  );
}
