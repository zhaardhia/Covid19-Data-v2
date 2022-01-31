import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Indonesia from "./view/Indonesia"

const IndexPage = () => {
  return(
    <Layout className="layout">
      <div>
        <Indonesia />
      </div>
    </Layout>
  )
}

export default IndexPage
