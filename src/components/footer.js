import React from 'react';
import facebook from '../images/facebook.png';
import insta from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';
import github from '../images/github.png';




const Footer = () => {
    return ( <section className='footer'>
        <a href='https://www.facebook.com/jad.b.maalouf/' target='_blank'><img src={facebook} alt='facebook-logo' className='logo'/></a>
        <a href='https://www.instagram.com/ma3loufjad/' target='_blank'><img src={insta} alt='insta-logo' className='logo'/></a>        
        <a href='https://www.linkedin.com/in/jad-maalouf-194902117/' target='_blank'><img src={linkedin} alt='linkedin-logo' className='logo'/></a>
        <a href='https://twitter.com/JadAlMaalouf' target='_blank'><img src={twitter} alt='twitter-logo' className='logo'/></a>
        <a href='https://github.com/Jad-maalouf' target='_blank'><img src={github} alt='github-logo' className='logo'/></a>

    </section> );
}
 
export default Footer;