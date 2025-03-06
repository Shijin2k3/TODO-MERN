
import { About } from "./components/about/About"
import { Footer } from "./components/footer/Footer"
import { Home } from "./components/home/Home"
import { Navbar } from "./components/navbar/Navbar"
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { SignIn } from "./components/signin/SignIn";
import { SignUp } from "./components/signup/SignUp";


function App() {


  return (
    
      <div>
         <Router>  
            <Navbar />
              <Routes>
                <Route exact path="/" element={ <Home />}/>
                <Route  path="/about" element={ <About />}/>
                <Route  path="/signin" element={ <SignIn />}/>
                <Route  path="/signup" element={ <SignUp />}/>
              </Routes>
            
            <Footer/>
         </Router>  
      </div>
      

  )
}

export default App
