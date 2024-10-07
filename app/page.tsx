import BookingGuide from "./Components/LandingPage/bookingGuide";
import Hero from "./Components/LandingPage/hero";
import KeyFeatures from "./Components/LandingPage/keyFeatures";
import LoyaltyPromo from "./Components/LandingPage/loyaltyPromo";
import MustVisit from "./Components/LandingPage/mustVisit";
import UserReviews from "./Components/LandingPage/userReviews";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <MustVisit></MustVisit>
      <BookingGuide></BookingGuide>
      <KeyFeatures></KeyFeatures>
      <UserReviews></UserReviews>
      <LoyaltyPromo></LoyaltyPromo>
    </>
  );
}
