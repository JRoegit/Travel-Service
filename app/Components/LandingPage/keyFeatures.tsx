import { FaClock } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { MdChair } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const features = [
    {
        "title" : "Fast & Easy Booking",
        "icon" : <FaClock className="text-emerald-900 size-12"/>,
        "description" : "Book flights in just a few clicks with our streamlined booking process."
    },
    {
        "title" : "Secure Payments",
        "icon" : <FaLock className="text-emerald-900 size-12"/>,
        "description" : "Pay securely with industry-leading encryption and multiple payment options."
    },
    {
        "title" : "Lowest Prices Guaranteed",
        "icon" : <AiFillDollarCircle className="text-emerald-900 size-12"/>,
        "description" : "Find the best deals on flights with our competitive pricing and price-match guarantee."
    },
    {
        "title" : "Flexible Booking",
        "icon" : <FaCalendarAlt className="text-emerald-900 size-12"/>,
        "description" : "Easily modify or cancel your flights with flexible policies and options."
    },
    {
        "title" : "Real-Time Flight Updates",
        "icon" : <FaBell className="text-emerald-900 size-12"/>,
        "description" : "Stay updated with real-time notifications for flight status, delays, and gate changes."
    },
    {
        "title" : "Seat Selection",
        "icon" : <MdChair className="text-emerald-900 size-12"/>,
        "description" : "Choose your preferred seat with our interactive seat map."
    },
    {
        "title" : "24/7 Customer Support",
        "icon" : <FaPhoneAlt className="text-emerald-900 size-12"/>,
        "description" : "Our dedicated support team is available around the clock to assist with any issues."
    },
    {
        "title" : "Loyalty Program",
        "icon" : <FaStar className="text-emerald-900 size-12"/>,
        "description" : "Earn points on every booking and redeem them for free flights and upgrades."
    },
]


export default function KeyFeatures(){
    return (
        <div className=' text-neutral-900'>
            <div className="flex flex-col max-w-screen-xl mx-auto p-4 gap-4">
                <div className="text-2xl font-bold ">
                    Why Choose Flightify?
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 px-2">
                    {features.map((feature,index) => <GridCard key={index} feature={feature}></GridCard>)}
                </div>
            </div>
        </div>
    )
}

function GridCard({feature} : {feature : any}){
    return(
        <div className="flex flex-row py-2 md:w-4/5">
            <div className="w-12 h-12 my-auto">
                {feature.icon}
            </div>
            <div className="w-1 h-3/4 border-l-2 border-gray-400 mx-4 my-auto"></div>
            <div className="flex flex-col">
                <div className="text-xl font-bold">{feature.title}</div>
                <div className="text-lg">{feature.description}</div>
            </div>
        </div>
    )
}
