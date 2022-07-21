import { useEffect } from 'react';
import getTitle from './utils/page_title'
import Home from "./components/home/Home"

function App() {
  useEffect(() => {
    document.title = getTitle("We move")
  })

  return (
    <><Home /></>
  )

}

export default App
