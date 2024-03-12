"use client";
import { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { UserIcon } from "@heroicons/react/solid";
import { DateRangePicker, RangeKeyDict } from "react-date-range"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


const Searchbar = ({ placeholder }: { placeholder?: string }) => {
  const [input, setInput] = useState("");
  const [startDate , setStartDate] = useState(new Date())
  const [endDate , setEndDate] = useState(new Date())
  const [numOfGuests , setNumOfGuests] = useState(1)
  const selectionRange = {
      startDate,
      endDate,
      key: 'selection',
    }
    const handleSelect = (ranges : RangeKeyDict) => {
      setStartDate(ranges.selection.startDate as Date) 
      setEndDate(ranges.selection.endDate as Date) 
    }

  return (
    <>
      <div className="relative ml-4">
        <div className="flex items-center md:border-2 rounded-full py-2 shadow-sm p-2">
          <input
            type="text"
            style={{width: '-webkit-fill-available', textOverflow: 'ellipsis'}}
            placeholder={placeholder || 'Search destinations'}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="text-xs md:text-sm text-gray-600 placeholder-gray-400 flex-grow md:pl-5 bg-transparent outline-none ml-1"
          />
          <SearchIcon className=" hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hover:bg-red-500" />
        </div>
        {input && (
              <div className=" absolute left-[50%] bg-white translate-x-[-50%] p-2 rounded-md">
              <DateRangePicker 
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={['#FD5B61']}
              onChange={handleSelect}/>
              <div className="flex items-center border-b">
                  <h2 className=" text-2xl flex-grow font-semibold">Number of Guests</h2>
                  <UserIcon className="h-5 pr-1"/>
                  <input 
                  type="number"
                  value={numOfGuests}
                  className="w-12 pl-2 text-lg outline-none text-black rounded-md bg-slate-300"
                  onChange={(e) => setNumOfGuests(Number(e.target.value))}
                  min={1}></input>
              </div>
              <div className="h-5 flex mt-2 items-center space-x-6">
                    <button
                      type="button"
                      className="bg-slate-200 rounded-md flex-grow"
                      onClick={() => setInput("")}
                    >
                      Close
                    </button>
                    <Link 
                      href={{
                        pathname: '/search',
                        search: `?location=${input}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGuests=${numOfGuests}`,
                      }}
                      onClick={() => setInput('')}
                      className="bg-[#FD5B61] text-white rounded-md flex-grow text-center">
                      Select
                    </Link>
              </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Searchbar;
