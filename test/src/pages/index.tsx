import { Helmet } from "react-helmet"
import { render } from "minista"

import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"

import { Wrapper, Style, Header, Main, Nav, List } from "minista-sitemap"

import pjt from "../../project.json"

dayjs.extend(timezone)
dayjs.extend(utc)
dayjs.tz.setDefault("Asia/Tokyo")

const Home = () => {
  const now = dayjs().tz().format("YYYY.MM.DD - HH:mm")
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
      <Style darkMode={true} />
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
