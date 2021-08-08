import React from 'react';
const Training = () => {
    return ( <section>
        <div className='square'>
            <div className='company'>
                <label className='company-name'>Code Technologies</label>
                <p  className='description'><strong className='strong'>Internship based in IT department from june till august 2020.</strong><br></br>
                <ul className='tasks-list'>
                    <li>Research all about virtualizations and cloud computing.</li>
                    <li>Installing Microsoft hyper-V and VMware ESX on physical servers.</li>
                    <li>Hyper-V Manager to create multiple Virtual machines,<br></br> and assigned Windows server As an OS </li>
                    <li>Create requisite roles and features for a better system management<br></br> and assignes policies to these domain users.</li>
                    <li>Configuration of several Microsoft services such as:<br></br>Exchange, Sql Server, Active Directory, DHCP, DNS.</li>
                </ul>
                </p>
                
            </div>
            <div className='self'>
                <label className='company-name'>Online Learning</label>
                <p className='description des'>
                <ul>
                    <li>Evolve my coding skills following several tutorials, videos,<br></br> articles and professional developers tips<br></br> (<i>example:</i> <a href='https://codewithmosh.com/' target='_blank'>codewithmosh.com</a>, <a href='https://www.freecodecamp.org/' target='_blank'>freecodecamp.org</a>, <a href='https://www.w3schools.com/'target='_blank' >w3schools.com</a>...).</li>
                    <li>Develop many web applications like login and authentification<br></br> systems and shopping-cart using frameworks<br></br> like React JS, Express JS and Mysql databases.</li>
                    <li>Building "guessing number" game using Tkinter a python framework.</li>
                </ul>
                
                
                </p>
            </div>
        </div>
    </section> );
}
 
export default Training;