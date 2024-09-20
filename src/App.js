import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Highlighets from "./components/highlighets";
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Model from "./components/Model";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";




function App() {
  return (
    <main className="bg-black">
      {/* <Router>
        <Navbar />
        <Routes>
            <Route path="/temp" element = { <Temp /> } />
            <Route path="/temp2" element = { <Temp2 /> } />

        </Routes>
         

      </Router> */}

   
      <Navbar />
      <Hero />
      <Highlighets />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    



    </main>
  )
}

export default App;
