'use client'
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, Works, Stack, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center z-10">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Stack />
        <Works />
        <div className="relative z-0">
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;