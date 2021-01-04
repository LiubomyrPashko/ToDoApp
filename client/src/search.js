import { useState } from 'react'

export const useSearch = () => {
  const [allCards, setAllCards] = useState([])

  return {
    allCards,
    setAllCards: () => {},
  }
}
