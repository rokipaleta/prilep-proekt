'use client'

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';

const locations = [
  { value: 'skopje', label: 'Skopje' },
  { value: 'prilep', label: 'Prilep' },
  // Add more locations as needed
];

function Prilep() {
    
  const [location, setLocation] = useState('');
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const handleSearch = () => {
    const searchData = {
      location: location ? location.label : '',
      departureDate: departureDate ? departureDate.toDateString() : '',
      returnDate: returnDate ? returnDate.toDateString() : '',
    };

    console.log(searchData);
  };

  return (
    <div className="flex flex-col	 justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">From Location</label>
          <input type="text" value="Prilep" readOnly className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">To Location</label>
          <Select
            options={locations}
            value={location}
            onChange={(selectedOption) => setLocation(selectedOption)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Departure Date</label>
          <DatePicker selected={departureDate} onChange={(date) => setDepartureDate(date)} className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Return Date</label>
          <DatePicker selected={returnDate} onChange={(date) => setReturnDate(date)} className="w-full px-3 py-2 border rounded" />
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full w-full" onClick={handleSearch}>
          Search
        </button>
      </div>
      




      <div>

            asdsad

      </div>
    



    </div>
  );
}

export default Prilep;
