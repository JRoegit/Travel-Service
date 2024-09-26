'use client'

import { useState, ChangeEvent, FormEvent } from 'react';

export default function FlightSearch(){
    const [searchParams,setSearchParams] = useState<SearchParameter>({
        startDate: '',
        endDate: '',
        tripType: 'round-trip',
        origin: '',
        destination: '',
        passengers: 1,
        flightClass: 'economy',
        usingSkyMiles: false,
        promoCode: '',
    })
// Handle changes for each input field
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSearchParams((prevParams) => ({
        ...prevParams,
        [name]: name === 'passengers' ? +value : value, // Ensure passengers is a number
        }));
    };

    // Submit handler
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Search Parameters:', searchParams);
        // Perform search logic here, e.g., API call
    };

    return (
        <form onSubmit={handleSubmit}>
          <label>
            Start Date:
            <input
              type="date"
              name="startDate"
              value={searchParams.startDate}
              onChange={handleChange}
            />
          </label>
    
          <label>
            End Date:
            <input
              type="date"
              name="endDate"
              value={searchParams.endDate}
              onChange={handleChange}
            />
          </label>
    
          <label>
            Trip Type:
            <select
              name="tripType"
              value={searchParams.tripType}
              onChange={handleChange}
            >
              <option value="round-trip">Round Trip</option>
              <option value="one-way">One Way</option>
            </select>
          </label>
    
          <label>
            Origin:
            <input
              type="text"
              name="origin"
              value={searchParams.origin}
              onChange={handleChange}
            />
          </label>
    
          <label>
            Destination:
            <input
              type="text"
              name="destination"
              value={searchParams.destination}
              onChange={handleChange}
            />
          </label>
    
          <label>
            Passengers:
            <input
              type="number"
              name="passengers"
              min="1"
              value={searchParams.passengers}
              onChange={handleChange}
            />
          </label>
    
          <button type="submit" className='mx-4 my-auto px-4 py-2 bg-emerald-900 hover:bg-emerald-800 font-medium text-white rounded-md'>Find Your Flight</button>
        </form>
      );
}