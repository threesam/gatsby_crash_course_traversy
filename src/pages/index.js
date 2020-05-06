import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import gif from '../images/eatyoursprouts.gif'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome Yall</h1>
    <p>This is a sample site to test Gatsby</p>
    <div style={{ width: `100%`, marginBottom: `1.45rem` }}>
      <img src={gif} alt="eat your sprouts" />
    </div>
  </Layout>
)

export default IndexPage
