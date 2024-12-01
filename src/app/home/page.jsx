"use client"
import React from 'react'
import Hero from '../components/Hero'
import Statistics from '../components/Statistics'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Steps from '../components/Steps'
import PopularProducts from '../components/PopularProducts'
import Brand from '../components/Brand'
import Testimonial from '../components/Testomonial'
import Faq from '../components/Faq'

function page() {
  return (
    <div>
         <Hero/>
    <Statistics/>
    <Banner/>
    <Categories/>
    <Products/>
    <Steps/>
    <PopularProducts/>
    <Brand/>
    <Faq/>
    <Testimonial/>
    </div>
  )
}

export default page