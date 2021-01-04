import 'bootstrap/dist/css/bootstrap.min.css'
import AllItems from './allCards'
import Header from './header'
import { SearchProvider, useSearch } from './context'

function App() {
  return (
    <SearchProvider>
      <Header />
      <AllItems />
    </SearchProvider>
  )
}

export default App
