import React from 'react'
import { Header } from '../components/Header'
import { About } from '../components/About'
import { Portfolio } from '../components/Portfolio'
import { Contact } from '../components/Contact'
import { Testimonies } from '../components/Testimonies'
import { Hero } from '../components/Hero'

export const Home = () => {
  return (
    <div className='bg-gray-900'>
      <div><Hero /></div>
      {/* <div id='home'><Header /></div> */}
      <div id='about'><About /></div>
      <div><Testimonies /></div> 
      <div id='portfolio'><Portfolio /></div>
      <div id='contact'><Contact /></div>
    </div>
  )
}
