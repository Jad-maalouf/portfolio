// import logo from './logo.svg';
import './App.css';
import Intro from './components/intro';
import {Route} from 'react-router-dom';
import Personnal from './components/personnal';
import Education from './components/education';
import Interests from './components/interests';
import Skills from './components/skills';
import Training from './components/training';
import Footer from './components/footer';

import {useEffect, useState} from 'react'

function App() {
  

  const [menu, setMenu] = useState(false);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setMenu(true);


        },13000) 
        return () => clearTimeout(timer);

    },[] )
  return (
    <div className="App">
      <Intro/>
      {menu &&
    <div>
      
      <Route exact path="/" component={Personnal}/>
      <Route exact path="/education" component={Education}/>
      <Route exact path="/training" component={Training}/>
      <Route exact path="/skills" component={Skills}/>
      <Route exact path="/interests" component={Interests}/>
      <Footer/>

      
    </div>
   
}
    </div>
    
      
  );
}

export default App;
