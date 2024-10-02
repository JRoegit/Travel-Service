import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BookingCarousel from "./bookingCarousel";


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

export default function BookingGuide(){
    return (
        <div className='text-neutral-900'>
            <div className="flex flex-col max-w-screen-xl mx-auto p-4 gap-4">
                <div className="flex flex-col">
                    <div className="text-2xl font-bold">
                        Flight Booking Made Easy
                    </div>
                    <div className="text-base text-gray-700">
                        Follow these simple steps to find and book your flight in minutes.
                    </div>
                </div>
                <BookingCarousel></BookingCarousel>
            </div>
        </div>

        
    )
}
