import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Indonesia from "./view/Indonesia"
import { Helmet } from "react-helmet"
const IndexPage = () => {
  return(
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Covid 19 Data | Indonesia</title>
        </Helmet>
        <Indonesia />
      </div>
    </>
  )
}

export default IndexPage
