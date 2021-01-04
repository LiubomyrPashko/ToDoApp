import React from 'react'

const SearchContext = React.createContext()

function useSearch() {
  const context = React.useContext(SearchContext)
  if (!context) {
    throw new Error(`useSearch must be used within a SearchProvider`)
  }
  return context
}

function SearchProvider(props) {
  const [allCards, setAllCards] = React.useState([])
  const value = React.useMemo(() => [allCards, setAllCards], [allCards])
  return <SearchContext.Provider value={value} {...props} />
}

export { SearchProvider, useSearch }
