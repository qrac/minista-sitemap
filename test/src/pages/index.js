import React from "react"
import { Helmet } from "react-helmet"
import { render } from "minista"
import dayjs from "dayjs"

import { Wrapper, Style, Header, Main, Aside, Nav, List } from "../../../main"

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
        <Nav>
          <List items={pjt.sitemap.main.items} />
        </Nav>
      </Main>
      <Aside>
        <Nav>
          <List items={pjt.sitemap.aside.items} />
        </Nav>
      </Aside>
    </Wrapper>
  )
}

export default Home
