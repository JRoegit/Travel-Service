'use client'

import airportData from '@/public/filtered_airports.json'

import Select from 'react-select'
import React, { FormEventHandler, useEffect, useState } from 'react';

import { MdDiscount } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { RiSwapBoxFill } from "react-icons/ri";
import { BiSolidPlaneLand } from "react-icons/bi";
import { BiSolidPlaneTakeOff } from "react-icons/bi";


const tripTypes = [
    {
        "label" : "Round-Trip",
        "value" : "round",
        "placeholder" : "Round-Trip"
    },
    {
        "label" : "Direct",
        "value" : "direct"
    }
]

const travelerNums = [
    {
        "label" : "1 Adult",
        "value" : "1",
    },
    {
        "label" : "2 Adults",
        "value" : "2"
    },
    {
        "label" : "3 Adults",
        "value" : "3"
    },
    {
        "label" : "4 Adults",
        "value" : "4"
    },
    {
        "label" : "5 Adults",
        "value" : "5"
    },
    {
        "label" : "6 Adults",
        "value" : "6"
    },
    {
        "label" : "7 Adults",
        "value" : "7"
    },
    {
        "label" : "8 Adults",
        "value" : "8"
    },
    {
        "label" : "9 Adults",
        "value" : "9"
    },
]

const flightClasses = [
    {
        "label" : "Economy",
        "value" : "econo"
    },
    {
        "label" : "Business",
        "value" : "busin"
    },
    {
        "label" : "First Class",
        "value" : "first"
    }
]

export default function Hero(){
    let [flightType, setFlightType] = useState('round')

    const handleFlightTypeChange = (e : any) => {
        setFlightType(e.target.value)
        console.log("Changed val")
    }

    return (
        <div className='bg-hero bg-no-repeat bg-cover text-neutral-900'>
            <div className="flex flex-col max-w-screen-xl mx-auto p-4 gap-4">
                <div className="text-2xl font-bold text-white ">
                    Countless Flights. Once Search.
                </div>
                <form action="/search" method='GET' className="flex flex-col md:flex-row mx-auto w-full bg-white p-4 rounded-md gap-2">
                    <div className='flex flex-col w-full md:w-1/2 gap-2'>
                        <div className='flex flex-col md:flex-row gap-2'>
                            <div className='flex flex-row gap-2 w-full'>
                                <FlightSearchDropDown name="type" objects={tripTypes} onChange={handleFlightTypeChange}/>
                                <FlightSearchDropDown name="travelers" objects={travelerNums} onChange={() => {}} />
                            </div>
                            <div className='flex flex-row bg-gray-100 text-nowrap rounded-md h-fit px-2 py-1 gap-2'>
                                <div className='px-1 font-semibold'>Book with SkyMiles</div>
                                <input type='checkbox' name='skymiles' className='w-4 h-4 ml-auto my-auto'></input>
                            </div>
                        </div>
                        <ToAndFromSelector></ToAndFromSelector>
                    </div>
                    <div className='flex flex-col mt-auto gap-2 w-full md:w-1/2'>
                        <div className='flex flex-row  w-full gap-1'>
                            <div className={'flex flex-row gap-2 border-b-2 border-gray-200 ' + (flightType == 'direct' ? 'w-full' : 'w-1/2' )}>
                                <FaCalendarAlt className='size-5 my-auto text-emerald-900'/>
                                <input type='text' onFocus={(e) => e.target.type = 'date'} name='depDate' placeholder='Departure Date' className='px-2 py-1 w-full'></input>
                            </div>
                            {flightType == 'round' ? <input type='text' onFocus={(e) => e.target.type = 'date'} name='retDate' placeholder='Return Date' className='w-1/2 px-2 py-1 border-b-2 border-gray-200'></input> : null}
                        </div>
                        <div className='flex flex-col md:flex-row w-full gap-2'>
                            <div className='flex flex-row gap-2 border-b-2 border-gray-200 w-full md:w-1/2'>
                                <MdDiscount className='size-5 my-auto text-emerald-900'/>
                                <input type='text' name='promo' placeholder='Promo Code' className='w-full px-2 py-1'></input>
                            </div>
                            <button type='submit' className='bg-emerald-900 hover:bg-emerald-950 text-white font-semibold px-2 py-1  ml-auto rounded-md w-full md:w-1/2'>Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

function FlightSearchDropDown({name, objects, onChange}:{name : string, objects : any[], onChange : any}){
    return (
        <select name={name} onChange={onChange} className='rounded-md px-2 py-1 font-medium bg-gray-100 h-fit w-1/2 md:w-full'>
            {objects.map((object, index) => index == 0 ? <option selected value={object.value}>{object.label}</option> : <option value={object.value}>{object.label}</option>)}
        </select>
    )
}

function ToAndFromSelector(){
    let [toAndFrom, setToAndFrom] = useState(null)

    const handleSwap = (e : any) => {

    }

    const handleChange = (e : any) => {

    }
 
    return (
        <div className='flex flex-row w-full'>
            <div className='flex flex-col w-full  rounded-md p-1'>
                <div className='flex flex-row border-b-4 border-emerald-900 py-1'>
                    <BiSolidPlaneTakeOff className='size-8 text-emerald-900 my-auto'/>
                    <SearchableDropdown name="depLoc" placeholder='Departing'></SearchableDropdown>
                </div>
                <div className='text-xs text-gray-600'>
                    Select a point of departure for your trip.
                </div>
            </div>
            <button type='button' className='my-auto'>
                <RiSwapBoxFill className='size-12 text-emerald-900'/>
            </button>
            <div className='flex flex-col w-full rounded-md p-1'>
                <div className='flex flex-row border-b-4 border-emerald-900 py-1'>
                    <BiSolidPlaneLand className='size-8 text-emerald-900 my-auto'/>
                    <SearchableDropdown name="arrLoc" placeholder='Arriving'></SearchableDropdown>
                </div>
                <div className='text-xs text-gray-600'>
                    Select a point of arrival for your trip.
                </div>
            </div>
        </div>
    )
}

function SearchableDropdown({name, placeholder} : {name : string, placeholder : string}){
    let [input, setInput] = useState('')
    
    let filtered : {}[] = []
    if(input.length >= 2){
        filtered = airportData.filter((airport) => 
            airport.label.toLowerCase().startsWith(input.toLowerCase()) || airport.value.toLowerCase().startsWith(input.toLowerCase()) ||
            airport.label.toLowerCase().includes(input.toLowerCase()) || airport.value.toLowerCase().includes(input.toLowerCase())
        )
        console.log("Input is greater than or equal to two chars.")
        console.log(filtered)
    }

    return (
        <Select options={filtered} name={name} noOptionsMessage={() => "No Results"} onInputChange={(e) => setInput(e)} placeholder={placeholder} className='w-full'></Select>
    )
}
