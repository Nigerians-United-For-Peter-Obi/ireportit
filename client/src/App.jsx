import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Tublet from "./components/tubelet/Tublet"

function App() {
  useEffect(() => {
    document.title = "We move"
  })

  return (
    <><Tublet /></>
  )
}

export default App
