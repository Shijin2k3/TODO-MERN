
import { About } from "./components/about/About"
import { Footer } from "./components/footer/Footer"
import { Home } from "./components/home/Home"
import { Navbar } from "./components/navbar/Navbar"
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';


function App() {


  return (
    
      <div>
         <Router>  
            <Navbar />
              <Routes>
                <Route exact path="/" element={ <Home />}/>
                <Route exact path="/about" element={ <About />}/>
              </Routes>
            
            <Footer/>
         </Router>  
      </div>
      

  )
}

export default App
