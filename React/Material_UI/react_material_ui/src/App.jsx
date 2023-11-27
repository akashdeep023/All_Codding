// import './App.css'
import Button from '@mui/material/Button';  //import Button from Material UI
import DeleteIcon from '@mui/icons-material/Delete'; //import Delete icon form Material UI
import { Alert } from '@mui/material';
function App() {
  let handleClick = () => {
    console.log("button was clicked")
    alert("Button was clicked")
  }
  return (
    <>
      <h2>Material Ui Demo</h2>
      <Button variant='contained'>Click me!</Button>
      <Button onClick={handleClick} variant='contained' color='success' size='small' >Click me!</Button>
      <Button variant='contained' color='error' size='large' startIcon={<DeleteIcon />}>Delete</Button>
      <Alert severity="error">Delete option is given!</Alert>
    </>
  )
}

export default App
