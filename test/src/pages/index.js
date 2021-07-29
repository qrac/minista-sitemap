import React from "react"
import { Helmet } from "react-helmet"
import { render } from "minista"
import classNames from "classnames"
import dayjs from "dayjs"

import pjt from "../../project.json"

dayjs.extend(require("dayjs/plugin/timezone"))
dayjs.extend(require("dayjs/plugin/utc"))
dayjs.tz.setDefault("Asia/Tokyo")

const Link = ({ item }) => {
  return (
    <a className="minista-sitemap-ui-link" href={item.slug}>
      <p className="minista-sitemap-ui-link-name">{item.name}</p>
      <p className="minista-sitemap-ui-link-slug">{item.slug}</p>
    </a>
  )
}

const Links = ({ items }) => {
  return (
    <section className="minista-sitemap-ui-links">
      {items && (
        <ul className="minista-sitemap-ui-items">
          {items.map((item, index) => (
            <li className="minista-sitemap-ui-item" key={index}>
              <Link item={item} />
              {item.items && (
                <ul className="minista-sitemap-ui-items">
                  {item.items.map((c1_item, c1_index) => (
                    <li className="minista-sitemap-ui-item" key={c1_index}>
                      <Link item={c1_item} />
                      {c1_item.items && (
                        <ul className="minista-sitemap-ui-items">
                          {c1_item.items.map((c2_item, c2_index) => (
                            <li
                              className="minista-sitemap-ui-item"
                              key={c2_index}
                            >
                              <Link item={c2_item} />
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

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
      <main className="minista-sitemap-ui-main">
        <Links items={pjt.sitemap.main.items} />
      </main>
      <aside className="minista-sitemap-ui-aside">
        <Links items={pjt.sitemap.aside.items} />
      </aside>
    </div>
  )
}

export default Home
