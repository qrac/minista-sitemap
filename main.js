import React from "react"

const Wrapper = ({ children }) => {
  return <div className="minista-sitemap-wrapper">{children}</div>
}

const Style = ({ style = inlineStyle }) => {
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

const css = (props) => {
  return props
}

const inlineStyle = css`
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

  .minista-sitemap {
    --theme-font-sans: "Hiragino Sans", "Hiragino Kaku Gothic ProN",
      "Noto Sans Japanese", Meiryo, "Yu Gothic Medium", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --theme-font-sans-en: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
    --theme-font-mono: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New",
      Meiryo, monospace, serif;
  }

  .minista-sitemap {
    --theme-tx-1: #3e4041;
    --theme-tx-2: #4e5253;
    --theme-tx-3: #6d7272;
    --theme-bg-1: #eff4f7;
    --theme-bg-2: #d8dee2;
    --theme-bg-3: #ffffff;
    --theme-bd-1: #cbd4d4;
    --theme-bd-2: #dbe2e2;
    --theme-lk-1: #00a4af;
    --theme-lk-tx: #ffffff;
    --theme-ac-1: #2ce7d2;
  }

  .minista-sitemap {
    background: var(--theme-bg-1);
    color: var(--theme-tx-2);
    font-size: 1rem;
    font-family: var(--theme-font-sans);
    line-height: 1.5;
    word-break: break-word;
  }

  .minista-sitemap-wrapper {
    min-height: 100vh;
    padding-top: max(2vw, 20px);
    padding-right: max(4vw, 16px);
    padding-left: max(4vw, 16px);
    padding-bottom: 40vh;
  }

  .minista-sitemap-header {
    padding-bottom: 20px;
  }

  .minista-sitemap-header-grid {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
  }

  .minista-sitemap-header-column {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px 12px;
  }

  .minista-sitemap-header-heading {
    color: var(--theme-tx-1);
    font-size: 1.5rem;
    font-weight: 800;
    font-family: var(--theme-font-sans-en);
    line-height: 1.125;
  }

  .minista-sitemap-header-date {
    display: inline-flex;
    padding: 4px 8px;
    background-color: var(--theme-bg-2);
    border-radius: 3px;
    font-size: 0.75rem;
    font-weight: 400;
    font-family: var(--theme-font-sans-en);
    line-height: 1;
  }

  .minista-sitemap-button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 8px 16px;
    background-color: var(--theme-lk-1);
    border-radius: 6px;
    color: var(--theme-lk-tx);
    font-size: 0.875rem;
    font-weight: 600;
    font-family: var(--theme-font-sans-en);
    line-height: 1.25;
    text-decoration: none;
    white-space: nowrap;
  }

  .minista-sitemap-links ul {
    list-style: none;
  }

  .minista-sitemap-links a {
    color: var(--theme-tx-2);
    text-decoration: none;
  }
`

export { Wrapper, Style, Header, Main, Nav, List }
