import React from 'react';
const Skills = () => {
    return ( <section>
        <div className='skills-section'>
            <div className='lang'><label className='under'>Languages</label>
            <div className='lang-info'>
                <ul className='info'>
                    <li>Arabic <i>Fluent</i></li>
                    <li>English <i>Fair</i></li>
                    <li>Frensh <i>Fair</i></li>
                </ul>
            </div>
            </div>
            <div className='frontend'><label className='under'>Front-End | UI/UX </label>
            <div className ='frontend-info'>
                <ul className='info'>
                    <li>Html5</li>
                    <li>Css3</li>
                    <li>JavaScript ES6</li>
                    <li>React JS</li>
                    <li>Bootstrap</li>
                    <li>Responsive Web Design</li>
                
                </ul>
            </div>
            </div>
            <div className='backend'><label className='under'>Back-End</label>
            <div className='backend-info'>
                <ul className='info'>
                    <li>Node JS</li>
                    <li>Express JS</li>
                    <li>MySql Database</li>
                    <li>RESTful APIs</li>
                    <li>JSON Web Tokens</li>
                </ul> 
            </div>
            </div>
            
            
            
            <div className='database'><label className='under'>Programming</label>
            <div className='database-info'>
                <ul className='info'>
                    <li>Python (<i>Tkinter</i>)</li>
                    <li>C++</li>
                    <li>Java</li>
                    <li>VHDL</li>
                </ul>
                    

            </div>
            </div>
            <div className='it'><label className='under'>IT and Networking</label>
            <div className='it-info'>
                <ul className='info'>
                    <li>Windows Server and its features.</li>
                    <li>Vmware and HyperV Virtualization.</li>
                    <li>CCNA Routing and Switching.</li>
                    <li>Linux.</li>
                </ul>
            </div>
            </div>
            <div className='soft'><label className='under'>Soft Skills</label>
            <div className='soft-info'>
                <ul className='info'>
                    <li>Communication</li>
                    <li>Adaptability</li>
                    <li>Leaderships</li>
                    <li>Teamwork</li>
                    <li>Collaboration</li>
                    <li>Motivation</li>
                    <li>Problem Solving</li>
                </ul>
            </div>
            </div>
            
            
            
        </div>

        
    </section> );
}
 
export default Skills;