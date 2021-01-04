import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './card.css'
import { useState } from 'react'

const AddItem = () => {
  const [cardPlus, setCardContent] = useState(true)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(title, description)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    }
    fetch('http://localhost:5000/add', requestOptions).then((response) =>
      response.json().then(window.location.reload())
    )
  }

  function changeCard() {
    setCardContent(false)
  }

  if (cardPlus) {
    return (
      <Card onClick={changeCard} className='card-container' border='primary'>
        <Card.Img
          variant='top'
          src='https://png.pngtree.com/png-vector/20190214/ourlarge/pngtree-vector-plus-icon-png-image_515260.jpg'
        />
      </Card>
    )
  }
  return (
    <Card className='card-container' border='primary'>
      <Form.Control
        className='title'
        type='text'
        placeholder='title'
        value={title}
        onChange={(e) => e.preventDefault() || setTitle(e.target.value)}
      />

      <Form.Control
        className='description'
        type='text'
        placeholder='description'
        value={description}
        onChange={(e) => e.preventDefault() || setDescription(e.target.value)}
      />

      <Button
        className='buttonAdd'
        variant='primary'
        type='submit'
        value='Submit'
        onClick={handleSubmit}
      >
        Add Task
      </Button>
    </Card>
  )
}

export default AddItem
