// import logo from './logo.svg';
import "./App.css";
import Intro from "./components/intro";
import { Route } from "react-router-dom";
import Personnal from "./components/personnal";
import Education from "./components/education";
import Interests from "./components/interests";
import Skills from "./components/skills";
import Training from "./components/training";
import Footer from "./components/footer";

import { useEffect, useState } from "react";

function App() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMenu(true);
    }, 1000); // Reduced from 13 seconds to 3 seconds for better UX
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <div className="main-content">
        <Intro />
        {menu && (
          <main className="content-animate">
            <Route exact path="/" component={Personnal} />
            <Route exact path="/education" component={Education} />
            <Route exact path="/training" component={Training} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/interests" component={Interests} />
          </main>
        )}
      </div>
      {menu && (
        <div className="footer-animate">
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
