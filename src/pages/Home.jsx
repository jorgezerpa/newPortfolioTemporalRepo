import React from 'react'
import { Header } from '../components/Header'
import { About } from '../components/About'
import { Portfolio } from '../components/Portfolio'
import { Contact } from '../components/Contact'
import { Testimonies } from '../components/Testimonies'

export const Home = () => {
  return (
    <div>
      <div id='home'><Header /></div>
      <div id='about'><About /></div>
      <div><Testimonies /></div> 
      <div id='portfolio'><Portfolio /></div>
      <div id='contact'><Contact /></div>
    </div>
  )
}
