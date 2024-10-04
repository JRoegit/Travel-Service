'use client'

import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';

const tripTypes = [
    {
        "label" : "Round-Trip",
        "value" : "round"
    },
    {
        "label" : "Direct",
        "value" : "direct"
    }
]

const travelerNums = [
    {
        "label" : "1",
        "value" : "1"
    },
    {
        "label" : "2",
        "value" : "2"
    },
    {
        "label" : "3",
        "value" : "3"
    },
    {
        "label" : "4",
        "value" : "4"
    },
    {
        "label" : "5",
        "value" : "5"
    },
    {
        "label" : "6",
        "value" : "6"
    },
    {
        "label" : "7",
        "value" : "7"
    },
    {
        "label" : "8",
        "value" : "8"
    },
    {
        "label" : "9",
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
    const handleForm = (data : any) => {
        console.log(data)
    }
    return (
        <div className='bg-hero bg-no-repeat bg-cover text-neutral-900 h-96'>
            <div className="flex flex-col max-w-screen-xl mx-auto p-4 gap-4">
                <div className="text-2xl font-bold text-white ">
                    Countless Flights. Once Search.
                </div>
                <form action="/search" method='GET' className="flex flex-col sm:flex-row mx-auto w-3/4 max-w-lg- ">
                    <div className='flex flex-row gap-2'>
                        <FlightSearchDropDown name="type" objects={tripTypes}/>
                        <FlightSearchDropDown name="travelers" objects={travelerNums}/>
                        <FlightSearchDropDown name="class" objects={flightClasses}/>
                    </div>
                    <div>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

function FlightSearchDropDown({name, objects}:{name : string, objects : any[]}){
    return (
        <select name={name}>
            {objects.map((object, index) => index == 0 ? <option selected value={object.value}>{object.label}</option> : <option value={object.value}>{object.label}</option>)}
        </select>
    )
}

