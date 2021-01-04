import { useEffect, useState } from 'react'
import Item from './card'
import './allCards.css'
import AddItem from './addCard'
import React from 'react'
import { SearchProvider, useSearch } from './context'

const AllItems = () => {
  const [allCards, setAllCards] = useState([])
  const [searchedCards] = useSearch()
  function sendRequest(method, url) {
    return fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setAllCards(data.tasks)
      })
  }
  useEffect(() => {
    sendRequest('GET', 'http://localhost:5000/get')
  }, [])
  useEffect(() => {
    setAllCards(searchedCards)
  }, [searchedCards])
  return (
    <div className='container'>
      {allCards.map((item) => {
        return (
          <Item
            key={item._id}
            _id={item._id}
            title={item.title}
            description={item.description}
            arr={allCards}
          />
        )
      })}
      <AddItem />
    </div>
  )
}

export default AllItems
