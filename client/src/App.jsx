import { useEffect } from 'react';

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
