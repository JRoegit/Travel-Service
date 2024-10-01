import FlightSearch from "./Components/flightSearch";
import Hero from "./Components/LandingPage/hero";
import LoyaltyPromo from "./Components/LandingPage/loyaltyPromo";
import MustVisit from "./Components/LandingPage/mustVisit";
import UserReviews from "./Components/LandingPage/userReviews";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <div className="max-w-screen-xl mx-auto p-4">
        <FlightSearch></FlightSearch>
      </div>
      <MustVisit></MustVisit>
      <UserReviews></UserReviews>
      <LoyaltyPromo></LoyaltyPromo>
    </>
  );
}
