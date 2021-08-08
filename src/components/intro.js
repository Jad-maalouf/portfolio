import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Intro = () => {
    // let back = {'background-color': 'red'}
    
     const [menu, setMenu] = useState(false);
    const [activeP, setActiveP] = useState('active');
    const [activeE, setActiveE] = useState('inactive')
    const [activeT, setActiveT] = useState('inactive')
    const [activeS, setActiveS] = useState('inactive')
    const [activeI, setActiveI] = useState('inactive')



    let handleBack = (letter)=>{
        switch (letter) {
            case 'p':
                setActiveP('active');
                setActiveS('inactive');
                setActiveT('inactive');
                setActiveE('inactive');
                setActiveI('inactive');
                
                break;
            case 'e':
                setActiveP('inactive');
                setActiveS('inactive');
                setActiveT('inactive');
                setActiveE('active');
                setActiveI('inactive');
                break;  
            case 't':
                setActiveP('inactive');
                setActiveS('inactive');
                setActiveT('active');
                setActiveE('inactive');
                setActiveI('inactive');
                break;
            case 's':
                setActiveP('inactive');
                setActiveS('active');
                setActiveT('inactive');
                setActiveE('inactive');
                setActiveI('inactive');
                break;    
            case 'i':
                setActiveP('inactive');
                setActiveS('inactive');
                setActiveT('inactive');
                setActiveE('inactive');
                setActiveI('active');
                break;
            default:
                setActiveP('inactive');
                setActiveS('inactive');
                setActiveT('inactive');
                setActiveE('inactive');
                setActiveI('inactive');   
                break; 
        }

    }
    
    

  
    
    

  

    
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setMenu(true);


        },13000) 
        return () => clearTimeout(timer);

    },[] )
    return ( 
        <section>
            
            
            {menu &&
            
            <nav>
            <ul className='menu'>
                <li><Link to='/' className={'visit '+activeP} onClick={()=> handleBack('p')}>Personnal Information</Link></li>
                <li><Link to="/education" className={'visit '+ activeE } onClick={()=>handleBack('e')} >Education</Link></li>
                <li><Link to="/training" className={'visit '+ activeT} onClick={()=>handleBack('t')}>Training</Link></li>
                <li><Link to="/skills" className={'visit '+ activeS} onClick={()=>handleBack('s')}>Skills</Link></li>
                <li><Link to="/interests" className={'visit '+ activeI} onClick={()=>handleBack('i')}>Interests</Link></li>
                
                
            </ul>
            
            </nav>
}
            
            
            <div className='wrapp'  >
            <span className='letters j'>J</span >
            <span className='letters a'>A</span >
            <span className='letters d'>D</span >
            <span className='letters'> </span >
            <span className='letters a2'>A</span >
            <span className='letters l'>L</span >
            <span className='letters m'>M</span >
            <span className='letters a3'>A</span >
            <span className='letters a4'>A</span >
            <span className='letters l2'>L</span >
            <span className='letters o'>O</span >
            <span className='letters u'>U</span >
            <span className='letters f'>F</span >

            </div>
            <p className='portfolio-word'>PORTFOLIO</p>
            
        </section>
     );
}
            


 
export default Intro;