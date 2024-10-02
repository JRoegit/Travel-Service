'use client'

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { MdChair } from "react-icons/md";
import { FaPassport } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { IoMdCheckmarkCircle } from "react-icons/io";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const carouselGuideItems = [
  {
    "title" : "Search for Flights",
    "icon" : <AiOutlineSearch className="text-emerald-900 size-32"/>,
    "description" : "Enter your departure and destination, select your travel dates, and choose the number of passengers."
  },
  {
    "title" : "Choose Your Flight",
    "icon" : <BiSolidPlaneAlt className="text-emerald-900 size-32"/>,
    "description" : "Browse available flight options, compare prices, and pick the flight that best suits your schedule and budget."
  },
  {
    "title" : "Select Your Seat",
    "icon" : <MdChair className="text-emerald-900 size-32"/>,
    "description" : "Choose your preferred seat—aisle, window, or extra legroom—using our interactive seat map."
  },
  {
    "title" : "Enter Passenger Details",
    "icon" : <FaPassport className="text-emerald-900 size-32"/>,
    "description" : "Provide the necessary traveler information such as name, passport details, and contact information."
  },
  {
    "title" : "Make Secure Payment",
    "icon" : <FaCreditCard className="text-emerald-900 size-32"/>,
    "description" : "Pay using your preferred payment method, whether it's a credit card, PayPal, or another option."
  },
  {
    "title" : "Booking Confirmation",
    "icon" : <IoMdCheckmarkCircle className="text-emerald-900 size-32"/>,
    "description" : "After successful payment, receive a confirmation email with your flight details and itinerary."
  },
]

export default function BookingCarousel() {
  return (
    
    <Carousel
      responsive={responsive}
      autoPlay={false}
      swipeable={false}
      draggable={false}
      showDots={false}
      infinite={false}
      partialVisible={false}

    >
      {carouselGuideItems.map((item, index) => <CarouselCard key={index} index={index} item={item}></CarouselCard>)}
    </Carousel>
    
  );
};

function CarouselCard({item, index} : {item : any, index : number}){
  return(
      <div className={"flex flex-col  bg-gray-100 p-4 mx-4 items-center text-center h-full gap-2 rounded-lg border-b-4 border-"}>
          <div className="text-2xl font-bold">{item.title}</div>
            {item.icon}
          <div>{item.description}</div>
      </div>
  )
}