import React from 'react';
import Footer from '../component/footer';
import { CardThree } from '../component/card';

function All_courses() {
  return (
    <>
    <div className='flex row flex-wrap'>
      <CardThree />
      <CardThree/>
      <CardThree/>
      <CardThree/>
      <CardThree/>
      <CardThree/>
      <CardThree/>
      <CardThree/>
    </div>
    
    <Footer/>
    </>
  )
}

export default All_courses;