import React from "react"
import { Helmet } from "react-helmet"
import { render } from "minista"
import classNames from "classnames"
import dayjs from "dayjs"

import pjt from "../../project.json"

dayjs.extend(require("dayjs/plugin/timezone"))
dayjs.extend(require("dayjs/plugin/utc"))
dayjs.tz.setDefault("Asia/Tokyo")

const Home = () => {
  const now = dayjs.tz().format("YYYY.MM.DD - HH:mm")
  return render(
    <div className="minista-sitemap-ui-wrap">
      <Helmet
        htmlAttributes={{ lang: "ja" }}
        bodyAttributes={{
          class: classNames(
            "minista-sitemap",
            "minista-sitemap-skin-basic",
            "minista-sitemap-theme-basic"
          ),
        }}
      >
        <title>minista sitemap</title>
      </Helmet>
      <header className="minista-sitemap-ui-header">
        <div className="minista-sitemap-ui-header-inner">
          <div className="minista-sitemap-ui-header-grid">
            <div className="minista-sitemap-ui-header-column">
              <h1 className="minista-sitemap-ui-header-heading">{pjt.name}</h1>
              <p className="minista-sitemap-ui-header-date">
                {"Last Update: " + now}
              </p>
            </div>
            <div className="minista-sitemap-ui-header-column">
              <a className="minista-sitemap-ui-button" href="./dist.zip">
                Download
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Home
