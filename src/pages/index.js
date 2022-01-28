import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Indonesia from "./view/Indonesia"

const IndexPage = () => {
  return(
    <Layout className="layout">
      <div>
        {/* <h1 className="text-3xl font-bold underline">WKWKKWKWKWKWKKW</h1> */}
        <Indonesia />
      </div>
    </Layout>
  )
}

export default IndexPage
