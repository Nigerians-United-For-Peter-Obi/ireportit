import { useEffect } from 'react';
import { getTitle } from './utils/page_title'

function App() {
  useEffect(() => {
    document.title = getTitle("We move")
  })

  return (
    <></>
  )

}

export default App
