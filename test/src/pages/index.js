import React from "react"
import { Helmet } from "react-helmet"
import { render } from "minista"
import dayjs from "dayjs"

import { Wrapper, Style, Header, Main, Nav, List } from "../../../main"

import pjt from "../../project.json"

dayjs.extend(require("dayjs/plugin/timezone"))
dayjs.extend(require("dayjs/plugin/utc"))
dayjs.tz.setDefault("Asia/Tokyo")

const Home = () => {
  const now = dayjs.tz().format("YYYY.MM.DD - HH:mm")
  return render(
    <Wrapper>
      <Helmet
        htmlAttributes={{ lang: "ja" }}
        bodyAttributes={{
          class: "minista-sitemap",
        }}
      >
        <title>minista sitemap</title>
      </Helmet>
      <Style />
      <Header projectName={pjt.name} date={now} buttonLink={"./dist.zip"} />
      <Main>
        <Nav title={pjt.sitemap.main.title}>
          <List items={pjt.sitemap.main.items} />
        </Nav>
        <Nav title={pjt.sitemap.other.title}>
          <List items={pjt.sitemap.other.items} />
        </Nav>
      </Main>
    </Wrapper>
  )
}

export default Home
