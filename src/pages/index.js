import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello human!</h1>
    <p>Construction in progress…</p>
    <p>Take care :)</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
