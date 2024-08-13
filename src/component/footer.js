import React from 'react';

import mainlogo from "../assate/main-logo-white.png";


function Footer() {
    return (
        <>
            <footer >
                <div className='flex flex-row  flex-wrap justify-between bg-blue-800 h-auto  pt-6 px-11 text-white '>
                    <div>
                        <div><img className="logo" src={mainlogo} alt="log_image" /></div>
                        <div className='text-xl font-semibold'><p>At BigDoor IT Solutions you can be agile as the only<br></br>
                            constant in our Business is innovation with well crafted<br></br>
                            courses and to scale your impact with a flexible and<br></br>
                            organized tool.</p></div>
                    </div>
                    <div>
                        <h3 className='font-bold text-3xl text-white mb-4'>Courses</h3>
                        <ul className='text-xl font-semibold'>
                            <li>Python</li>
                            <li>Java</li>
                            <li>MERN</li>
                            <li>Full stack</li>
                            <li>Devops</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-bold text-3xl text-white mb-4'>Company</h3>
                        <ul className='text-xl font-semibold'>



                            <li>About Us</li>
                            <li>Help & FAQ</li>
                            <li>Contact Us</li>
                            <li>Blogs</li>
                            <li>Registration</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-bold text-3xl text-white mb-4'>Contact Info</h3>
                        <ul className='font-semibold'>
                            <li className='text-2xl font-semibold'>Phone Number</li>
                            <li>+91 80 4323 2190</li>
                            <li>+91 96328 80906</li>
                            <li className='text-2xl font-semibold'>Email Address</li>
                            <li>info@bigdoorsolution.com</li>
                            <li>info@bigdoorsolution.co.in</li>
                            {/* <li className='text-2xl font-semibold'>Location</li>
                            <li>Bengaluru</li>
                            <li>Lucknow</li> */}
                        </ul>
                    </div>
                </div>
                <div className='flex justify-center p-5 font-semibold text-xl bg-slate-600'><h3>© 2024 BigDoor. All Rights Reserved</h3></div>
            </footer>
        </>
    );

}

export default Footer;