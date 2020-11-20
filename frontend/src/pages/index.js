import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Services from '../components/Services'

const homePage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
    </Layout>
  )
}

export default homePage
