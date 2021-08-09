import React from "react"

const css = `
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: inherit;
}

html {
  word-break: break-word;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}
`

const Wrapper = ({ children }) => {
  return <div className="minista-sitemap-wrapper">{children}</div>
}

const Style = ({ style = css }) => {
  return <style>{style}</style>
}

const Header = ({
  projectName = "Project",
  dateName = "Last Update",
  date,
  buttonText = "Download",
  buttonLink,
}) => {
  return (
    <header className="minista-sitemap-header">
      <div className="minista-sitemap-header-inner">
        <div className="minista-sitemap-header-grid">
          <div className="minista-sitemap-header-column">
            <h1 className="minista-sitemap-header-heading">{projectName}</h1>
            {date && (
              <p className="minista-sitemap-header-date">
                {dateName + ": " + date}
              </p>
            )}
          </div>
          <div className="minista-sitemap-header-column">
            {buttonLink && (
              <a className="minista-sitemap-button" href={buttonLink}>
                {buttonText}
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

const Main = ({ children }) => {
  return <main className="minista-sitemap-main">{children}</main>
}

const Aside = ({ children }) => {
  return <aside className="minista-sitemap-aside">{children}</aside>
}

const Nav = ({ children }) => {
  return <nav className="minista-sitemap-nav">{children}</nav>
}

const List = ({ items }) => {
  return (
    <ul className="minista-sitemap-list">
      {items.map((item, index) => (
        <li className="minista-sitemap-item" key={index}>
          <a className="minista-sitemap-link" href={item.slug}>
            <p className="minista-sitemap-link-name">{item.name}</p>
            <p className="minista-sitemap-link-slug">{item.slug}</p>
          </a>
          {item.items && List({ items: item.items })}
        </li>
      ))}
    </ul>
  )
}

export { Wrapper, Style, Header, Main, Aside, Nav, List }
