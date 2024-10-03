'use client'

import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';

const tripTypes = [
    {
        "label" : "Round-Trip",
        "value" : "roundtrip"
    }
]

const travelers = [
    1,2,3,4,5,6,7,8,9
]

export default function Hero(){
    
    return (
        <div className='bg-hero bg-no-repeat bg-cover text-neutral-900 h-96'>
            <div className="flex flex-col max-w-screen-xl mx-auto p-4 gap-4">
                <div className="text-2xl font-bold text-white ">
                    Countless Flights. Once Search.
                </div>
                <form className="flex flex-col sm:flex-row mx-auto w-3/4 max-w-lg- ">
                    <div className='flex flex-row gap-2'>
                        <TripTypeDropDown></TripTypeDropDown>
                    </div>
                    <div>
                    </div>
                </form>
            </div>
        </div>
    )
}

function TripTypeDropDown(){
    let [tripType, setTripType] = useState()
    return (
        <Dropdown value={tripType} onChange={(e) => setTripType(e.value)} options={tripTypes} optionLabel="label" placeholder="Select a Trip Type" className="w-full md:w-14rem bg-gray-200 p-2 rounded-md" />
    )
}
function NumTravelersDropDown(){
    let [travelers, setTravelers] = useState()
    return (
        <Dropdown value={travelers} onChange={(e) => setTravelers(e.value)} options={tripTypes} optionLabel="label" placeholder="Select a Trip Type" className="w-full md:w-14rem bg-gray-200 p-2 rounded-md" />
    )
}
function FlightClassDropDown(){
    let [tripType, setTripType] = useState()
    return (
        <Dropdown value={tripType} onChange={(e) => setTripType(e.value)} options={tripTypes} optionLabel="label" placeholder="Select a Trip Type" className="w-full md:w-14rem bg-gray-200 p-2 rounded-md" />
    )
}
