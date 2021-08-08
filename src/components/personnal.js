import React,{useEffect,useState} from 'react';
import profile from '../images/pic.jpeg';

const Personnal = () => {


    return ( 
    <section className='personnal-section'>

        
        

        <div>
            <img src={profile}  alt='wait!' className="profile" ></img>
        </div>
        < div className='informations'>
            <div className='line'><label className='info-labels'>Name: </label><strong className='remove'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><span className='text'><strong>Jad </strong>Boutros ALMaalouf</span><br></br></div>
            <div className='line'><label className='info-labels'>Email: </label><strong className='remove'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><span className='text'><a href='mailto:jadalmaalouf@hotmail.com' className='mails'>jadalmaalouf@hotmail.com</a>, <strong className='remove'>&nbsp;&nbsp;&nbsp;</strong>  <a href='mailto:jad__maalouf@hotmail.com'className='mails'>jad__maalouf@hotmail.com</a>, <strong className='remove'>&nbsp;&nbsp;&nbsp;</strong><a href='mailto::jad12maalouf@gmail.com' className='mails'>jad12maalouf@gmail.com</a></span><br></br></div>
            <div className='line'><label className='info-labels'>Telephone:</label><strong className='remove'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><span className='text'>+961-71-804182</span><br></br></div>
            <div className='line'><label className='info-labels'>Address: </label><strong className='remove'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><span className='text'>Dekwaneh-MarRoukouz Lebanon, Jezzine South Lebanon</span><br></br></div>
            <div className='line'><label className='info-labels'>Date of birth:</label><span className='text'>October 23rd, 1995 </span><br></br></div>
        </div>
        
            
            


            
            

        
        
        
        


</section> );
}

 
export default Personnal;