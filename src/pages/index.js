import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Image from './../components/image'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Image />
    <h1>Welcome Yall</h1>

    <h3>How's it going though?</h3>
    <p>This is a sample site to test Gatsby</p>
    <p>Proident qui cupidatat deserunt veniam. Nisi ipsum aliquip ullamco voluptate elit laboris fugiat nostrud dolore enim laboris in quis.</p>

  </Layout>
)

export default IndexPage
