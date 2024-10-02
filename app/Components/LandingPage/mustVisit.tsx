import Image from "next/image"
import Bali from '/public/bali.jpg'
import Paris from '/public/paris.jpg'
import Tokyo from '/public/tokyo.jpg'
import Rome from '/public/rome.jpg'
import Link from "next/link"


const destinations = [
    {
        "name" : "Paris",
        "slogan" : "The city of love",
        "img" : Paris,
        "price" : "$199.0"
    },
    {
        "name" : "Bali",
        "slogan" : "Tropical Paradise Awaits",
        "img" : Bali,
        "price" : "$159.0"
    },
    {
        "name" : "Rome",
        "slogan" : "Walk Through History",
        "img" : Rome,
        "price" : "$129.0"
    },
    {
        "name" : "Tokyo",
        "slogan" : "Tradition Meets Innovation",
        "img" : Tokyo,
        "price" : "$219.0"
    }
]

export default function MustVisit(){
    return (
        <div className='bg-gray-100 text-neutral-900'>
            <div className="flex flex-col max-w-screen-xl mx-auto p-4 gap-4">
                <div className="text-2xl font-bold ">
                    Must-Visit Destinations
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-2">
                    {destinations.map((destination, index) => 
                        <DestinationCard key={index} destination={destination}></DestinationCard>
                    )}
                </div>
            </div>
        </div>
    )
}

function DestinationCard({destination} : {destination : any}){
    return (
        <div className="flex flex-col gap-1 bg-white rounded-md p-2">
            <div className="text-2xl font-bold">{destination.name}</div>
            <div className="text-lg text-gray-600">{destination.slogan}</div>
            <Image src={destination.img} alt={destination.name} width={250.0} height={250.0} layout="responsive" unoptimized className="rounded-sm w-[250px] h-[250px]"></Image>
            <div className="text-lg font-semibold">Starting from {destination.price}</div>
            <Link href="/" className="text-center bg-emerald-900 hover:bg-emerald-950 text-white font-semibold rounded-md p-2">Book Now</Link>
        </div>
    )
}