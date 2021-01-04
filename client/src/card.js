import Card from 'react-bootstrap/Card'
import './card.css'
import { Button } from 'react-bootstrap'

const Item = (props) => {
  function changeColor() {
    let arr = props.arr
    let searchName = props.description
    let index = arr.findIndex((el) => el.description === searchName)

    if (arr[index].color === true) {
      document.getElementsByClassName('color')[index].style.backgroundColor =
        'White'
      document.getElementsByClassName('text')[index].style.textDecoration =
        'none'
      arr[index].color = false
    } else if (arr[index].color === false) {
      document.getElementsByClassName('color')[index].style.backgroundColor =
        'Cyan'
      document.getElementsByClassName('text')[index].style.textDecoration =
        'line-through'
      arr[index].color = true
    } else {
      document.getElementsByClassName('color')[index].style.backgroundColor =
        'Cyan'
      document.getElementsByClassName('text')[index].style.textDecoration =
        'line-through'
      arr[index].color = true
    }
  }

  function deleteTask() {
    console.log(props)
    fetch('http://localhost:5000/delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(props),
    })
      .then((res) => res.json()) // or res.json()
      .then((res) => console.log(res))
      .then(window.location.reload())
  }

  return (
    <Card
      key={props._id}
      onClick={changeColor}
      className='card-container color'
      border='primary'
    >
      <Card.Header className='cardHeader'>
        {props.title}
        <Button
          onClick={deleteTask}
          className='close'
          variant='light'
          aria-label='Close'
        >
          <span aria-hidden='true'>&times;</span>
        </Button>
      </Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text className='text'>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Item
