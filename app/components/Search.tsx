"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Search({ data }: any) {
  const [cities, setCities] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  let filteredCities =
    searchInput.trim() === ""
      ? []
      : data.cities.filter((city: any) =>
          city.name.toLowerCase().includes(searchInput.toLowerCase()),
        );

  return (
    <>
      <div className="w-31.25 border-b border-white flex items-center pb-1 relative">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          className="placeholder:text-[12px] placeholder:text-white/70 text-[12px] text-white w-28.5 h-3.5 outline-none"
          id="search"
          placeholder="Search Location..."
          type="text"
        />
        <label htmlFor="search">
          <img src="icons/search.svg" alt="search" />
        </label>
        <div className="absolute -bottom-12 h-10 text-[12px] flex flex-col gap-1 items-start text-white">
            {
                filteredCities.map((city:any) => (
                    <Link key = {city.id} href = {`/${city.name}`}>{city.name}</Link>
                ))
            }
        </div>
      </div>
    </>
  );
}
