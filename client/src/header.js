import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { useState } from 'react'
import { SearchProvider, useSearch } from './context'

const Header = () => {
  const [query, setQuery] = useState()
  const [allCards, setAllCards] = useSearch()

  function search() {
    let searchedTitleObj = { title: query }
    console.log(searchedTitleObj)
    fetch('http://localhost:5000/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(searchedTitleObj),
    })
      .then((res) => res.json()) // or res.json()
      .then((data) => {
        setAllCards(data.tasks)
      })
  }
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>To Do</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#features'>Features</Nav.Link>
          <Nav.Link href='#pricing'>Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type='text'
            placeholder='Search'
            className='mr-sm-2'
            onChange={(e) => e.preventDefault() || setQuery(e.target.value)}
          />
          <Button variant='outline-info' onClick={search}>
            Search
          </Button>
        </Form>
      </Navbar>
    </>
  )
}

export default Header
