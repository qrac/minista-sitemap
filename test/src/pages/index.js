import React from "react"
import { Helmet } from "react-helmet"
import { render } from "minista"

const Home = () => {
  return render(
    <>
      <Helmet
        htmlAttributes={{ lang: "ja" }}
        bodyAttributes={{ class: "minista-sitemap" }}
      >
        <title>minista sitemap</title>
      </Helmet>
      test
    </>
  )
}

export default Home
