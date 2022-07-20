import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    document.title = "We move"
  })

  return (
    <><h1 className='text-success'>Welcome my guy</h1></>
  )
}

export default App
