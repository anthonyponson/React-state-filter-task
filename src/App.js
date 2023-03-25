import React, { useState } from 'react'

const MobileList = () => {
  const [mobiles, setMobiles] = useState([
    {
      id: '1',
      name: 'oneplus11',
      price: 56999,
      isPurchased: false
    },
    {
      id: '2',
      name: 'Samsung S23 Ultra',
      price: 124999,
      isPurchased: false
    },
    {
      id: '3',
      name: 'Mi 13',
      price: 56999,
      isPurchased: true
    },
    {
      id: '4',
      name: 'iphone 13',
      price: 62990,
      isPurchased: true
    },
    {
      id: '5',
      name: 'Redmi Note 13 pro',
      price: 19990,
      isPurchased: true
    },
    {
      id: '6',
      name: 'Poco M4',
      price: 13999,
      isPurchased: false
    }
  ])

  const sortAscending = (property) => {
    const sortedMobiles = [...mobiles].sort((a, b) => a[property] - b[property])
    setMobiles(sortedMobiles)
  }

  const sortDescending = (property) => {
    const sortedMobiles = [...mobiles].sort((a, b) => b[property] - a[property])
    setMobiles(sortedMobiles)
  }

  const sortByIdAscending = () => {
    sortAscending('id')
  }

  const sortByIdDescending = () => {
    sortDescending('id')
  }

  const sortByPriceAscending = () => {
    sortAscending('price')
  }

  const sortByPriceDescending = () => {
    sortDescending('price')
  }

  const [filteredMobiles, setFilteredMobiles] = useState([])

  const filterByIsPurchased = () => {
    if (filteredMobiles.length === 0) {
      const filtered = mobiles.filter((mobile) => mobile.isPurchased)
      setFilteredMobiles(mobiles)
      setMobiles(filtered)
    } else {
      setMobiles(filteredMobiles)
      setFilteredMobiles([])
    }
  }

  return (
    <>
      <div>
        <ul>
          {mobiles.map((mobile) => (
            <li key={mobile.id}>
              {mobile.name} {mobile.price}
            </li>
          ))}
        </ul>

        <div className="button-wrapper">
          <button onClick={sortByIdAscending}>Sort by Ascending</button>
          <button onClick={sortByIdDescending}>Sort by Descending</button>
          <button onClick={sortByPriceAscending}>Price low to high</button>
          <button onClick={sortByPriceDescending}>Price high to low</button>
          <button onClick={filterByIsPurchased}>Filter</button>
        </div>
      </div>
    </>
  )
}

export default MobileList
