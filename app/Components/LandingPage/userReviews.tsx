import Image from 'next/image'

let reviews = [
    {
        "name" :"Sarah K.",
        "location" : "New York, USA",
        "review" : "Booking my flight to Paris was a breeze! The platform found me the best deal, and I was able to compare flights easily. The whole process was smooth, and I even got a seat upgrade at check-in! Will definitely use this service again for my next trip!"
    },
    {
        "name" :"James L.",
        "location" : "Sydney, Australia",
        "review" : "I booked a last-minute flight to Tokyo, and the customer support team was incredibly helpful. The site was fast, easy to navigate, and gave me multiple options to choose from. I appreciated the detailed seat map and how easy it was to pick my seat. Highly recommend for anyone looking for stress-free bookings."
    },
    {
        "name" :"Lina D.",
        "location" : "Berlin, Germany",
        "review" : "Hands down the best booking experience I've had. I found an amazing flight deal for my vacation to Bali, and everything was handled so smoothly. From the user-friendly search filters to the super quick checkout, I couldn’t have asked for more. Plus, I got a notification about a price drop just in time! Love it!"
    }
]

// Clean this one up, seperate some things...
export default function UserReviews(){
    return (
        <div className='text-neutral-900'>
            <div className="flex flex-col max-w-screen-xl mx-auto p-4 gap-4">
                <div className="text-2xl font-bold ">
                    What Our Customers are Saying
                </div>
                <div className='flex flex-col md:flex-row mx-auto'>
                    {reviews.map((review,index) => index != 1 ? 
                            <ReviewCard key={index} name={review.name} location={review.location} review={review.review}></ReviewCard> :
                            <>
                                <div className='border-b-2 md:border-l-2 border-gray-200 h-ful'></div>
                                    <ReviewCard  name={review.name} location={review.location} review={review.review}></ReviewCard> 
                                <div className='border-b-2 md:border-l-2 border-gray-200 h-ful'></div>
                            </>

                            )}
                </div>
            </div>
        </div>
    )
}

function ReviewCard({name, location, review} : {name : string, location : string, review : string})  {
    return(
        <div className='flex flex-col mx-auto md:w-1/4 '>
            <div className='text-xl mx-auto'>
                <span className='font-bold'>{name}</span> - {location}
            </div>
            <div className='mx-auto'>
                PROFILE PIC
            </div>
            <div className='text-xl mx-auto'>
                STARS
            </div>
            <div className='mx-auto text-center w-2/3 md:w-full'>
                {review}
            </div>
        </div>
    )
}