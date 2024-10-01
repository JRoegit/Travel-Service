import Image from 'next/image'
import SarahKPfp from '/public/sarahK.jpg'
import SarahStars from '/public/StarContainer5.png'
import JamesLPfp from '/public/jamesL.jpg'
import JamesStars from '/public/StarContainer4.png'
import LinaDPfp from '/public/linaD.jpg'
import LinaStars from '/public/StarContainer4p5.png'

const reviews = [
    {
        "name" :"Sarah K",
        "location" : "New York, USA",
        "stars" : SarahStars,
        "review" : "Booking my flight to Paris was a breeze! The platform found me the best deal, and I was able to compare flights easily. The whole process was smooth, and I even got a seat upgrade at check-in! Will definitely use this service again for my next trip!",
        "img" : SarahKPfp
    },
    {
        "name" :"James L",
        "location" : "Sydney, Australia",
        "stars" : JamesStars,
        "review" : "I booked a last-minute flight to Tokyo, and the customer support team was incredibly helpful. The site was fast, easy to navigate, and gave me multiple options to choose from. I appreciated the detailed seat map and how easy it was to pick my seat. Highly recommend for anyone looking for stress-free bookings.",
        "img" : JamesLPfp
    },
    {
        "name" :"Lina D",
        "location" : "Berlin, Germany",
        "stars" : LinaStars,
        "review" : "Hands down the best booking experience I've had. I found an amazing flight deal for my vacation to Bali, and everything was handled so smoothly. From the user-friendly search filters to the super quick checkout, I couldn’t have asked for more. Plus, I got a notification about a price drop just in time! Love it!",
        "img" : LinaDPfp
    }
]

// Clean this one up, seperate some things...
export default function UserReviews(){
    return (
        <div className='text-neutral-900'>
            <div className="flex flex-col max-w-screen-xl mx-auto p-4 gap-8">
                <div className="text-2xl font-bold ">
                    What Our Customers are Saying
                </div>
                <div className='flex flex-col md:flex-row mx-auto gap-4'>
                    {reviews.map((review,index) => index != 1 ? 
                            <ReviewCard key={index} review={review}></ReviewCard> :
                            <>
                                <div className='border-b-2 h-1 w-2/3 md:h-96 md:w-0 mx-auto md:mx-0 md:my-auto md:border-l-2 border-gray-200'></div>
                                    <ReviewCard review={review}></ReviewCard> 
                                <div className='border-b-2 h-1 w-2/3 md:h-96 md:w-0 mx-auto md:mx-0 md:my-auto md:border-l-2 border-gray-200'></div>
                            </>

                            )}
                </div>
            </div>
        </div>
    )
}

function ReviewCard({review} : {review : any})  {
    return(
        <div className='flex flex-col mx-auto md:w-1/4 gap-2'>
            <div className='text-xl mx-auto text-nowrap'>
                <span className='font-bold'>{review.name}.</span> <span className='text-base'>- {review.location}</span>
            </div> 
            <Image src={review.img} alt={review.name + `'s profile picture`} width={100.0} height={100.0} className='mx-auto rounded-full'></Image>
            <Image src={review.stars} alt={"Sample users star rating"} width={240.0} height={40.0} className='mx-auto'></Image>
            <div className='mx-auto text-center w-2/3 md:w-full'>
                {review.review}
            </div>
        </div>
    )
}