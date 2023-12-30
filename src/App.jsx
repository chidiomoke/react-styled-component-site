import Globalstyle from './Globalstyles'
import Home from './Pages/Home'
import Navbar from './components/Navigation/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import { useState } from 'react';


const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Router>

        <Globalstyle />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Home />



      </Router>
    </>
  )
}

export default App
