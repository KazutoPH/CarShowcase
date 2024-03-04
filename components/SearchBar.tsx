"use client"
import React from 'react'
import { SearchManufacturer } from '.'
import { useState } from 'react'
import { StringDecoder } from 'string_decoder'
import Image from 'next/image'

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('')

  const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src={"/magnifying-glass.svg"}
        alt="magnifying glass"
        width={40}
        height={40}
        className='object-contain'
      />
    </button>
  );
  
  

  const handleSearch = () => {

  }

  return (
   <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
    </form>
  )
}

export default SearchBar