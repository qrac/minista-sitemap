import React from "react"

const Wrapper = ({ children }) => {
  return <div className="minista-sitemap-wrapper">{children}</div>
}

const Style = ({
  defaultDark = false,
  darkMode = false,
  innerMaxWidth = "1000px",
  defaultLightStyle = inlineDefaultLightStyle,
  defaultDarkStyle = inlineDefaultDarkStyle,
  schemeDarkStyle = inlineSchemeDarkStyle,
  variableStyle = inlineVariableStyle,
  resetStyle = inlineResetStyle,
  componentStyle = inlineComponentStyle,
}) => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: defaultDark ? defaultDarkStyle : defaultLightStyle,
        }}
      />
      {darkMode && (
        <style dangerouslySetInnerHTML={{ __html: schemeDarkStyle }} />
      )}
      <style dangerouslySetInnerHTML={{ __html: variableStyle }} />
      <style dangerouslySetInnerHTML={{ __html: resetStyle }} />
      <style>{`.minista-sitemap {--theme-site-width: ${innerMaxWidth}}`}</style>
      <style dangerouslySetInnerHTML={{ __html: componentStyle }} />
    </>
  )
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
  return (
    <main className="minista-sitemap-main">
      <div className="minista-sitemap-main-inner">{children}</div>
    </main>
  )
}

const Nav = ({ title, children }) => {
  return (
    <nav className="minista-sitemap-nav">
      {title && <h2 className="minista-sitemap-nav-title">{title}</h2>}
      {children}
    </nav>
  )
}

const List = ({ items }) => {
  return (
    <ul className="minista-sitemap-list">
      {items.map((item, index) => (
        <li className="minista-sitemap-item" key={index}>
          <div className="minista-sitemap-item-content">
            <a
              className="minista-sitemap-item-content-link"
              href={item.slug}
            ></a>
            <div className="minista-sitemap-item-content-inner">
              <p className="minista-sitemap-item-content-name">{item.name}</p>
              <p className="minista-sitemap-item-content-slug">{item.slug}</p>
            </div>
            <div className="minista-sitemap-item-content-background"></div>
          </div>
          {item.items && List({ items: item.items })}
        </li>
      ))}
    </ul>
  )
}

const css = (props) => {
  return props
}

const inlineDefaultLightStyle = css`
  .minista-sitemap {
    --theme-tx-1: #3e4041;
    --theme-tx-2: #4e5253;
    --theme-tx-3: #8cb4c5;
    --theme-bg-1: #eff4f7;
    --theme-bg-2: #e2e7ea;
    --theme-bg-3: #ffffff;
    --theme-bg-4: #f8fafb;
    --theme-bd-1: #eceff1;
    --theme-bd-2: #c0c7cb;
    --theme-lk-1: #00a4af;
    --theme-lk-tx: #ffffff;
  }
`

const inlineDefaultDarkStyle = css`
  .minista-sitemap {
    --theme-tx-1: #e8e8e8;
    --theme-tx-2: #aaaaaa;
    --theme-tx-3: #515151;
    --theme-bg-1: #191919;
    --theme-bg-2: #292929;
    --theme-bg-3: #222222;
    --theme-bg-4: #292929;
    --theme-bd-1: #3a3a3a;
    --theme-bd-2: #515151;
    --theme-lk-1: #0a736a;
    --theme-lk-tx: #e8e8e8;
  }
`

const inlineSchemeDarkStyle = css`
  @media (prefers-color-scheme: dark) {
    .minista-sitemap {
      --theme-tx-1: #e8e8e8;
      --theme-tx-2: #aaaaaa;
      --theme-tx-3: #515151;
      --theme-bg-1: #191919;
      --theme-bg-2: #292929;
      --theme-bg-3: #222222;
      --theme-bg-4: #292929;
      --theme-bd-1: #3a3a3a;
      --theme-bd-2: #515151;
      --theme-lk-1: #0a736a;
      --theme-lk-tx: #e8e8e8;
    }
  }
`

const inlineVariableStyle = css`
  .minista-sitemap {
    --theme-font-sans: "Hiragino Sans", "Hiragino Kaku Gothic ProN",
      "Noto Sans Japanese", Meiryo, "Yu Gothic Medium", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --theme-font-sans-en: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
    --theme-font-mono: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New",
      Meiryo, monospace, serif;
  }
`

const inlineResetStyle = css`
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

const inlineComponentStyle = css`
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

  .minista-sitemap-header-inner {
    max-width: var(--theme-site-width);
    margin-right: auto;
    margin-left: auto;
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

  .minista-sitemap-button:hover {
    filter: brightness(0.9);
  }

  .minista-sitemap-main-inner {
    max-width: var(--theme-site-width);
    margin-right: auto;
    margin-left: auto;
  }

  .minista-sitemap-nav {
    background-color: var(--theme-bg-3);
    border-radius: 6px;
    overflow: hidden;
  }

  .minista-sitemap-nav + .minista-sitemap-nav {
    margin-top: 20px;
  }

  .minista-sitemap-nav-title {
    padding: 22px 32px;
    font-size: 1.125rem;
    line-height: 1;
    border-bottom: 2px solid var(--theme-bd-1);
  }

  .minista-sitemap-nav
    > .minista-sitemap-list
    > .minista-sitemap-item:first-child {
    border-top: none;
  }

  .minista-sitemap-list {
    padding-left: 32px;
    list-style: none;
  }

  .minista-sitemap-item {
    border-top: 1px solid var(--theme-bd-1);
  }

  .minista-sitemap-item-content {
    position: relative;
  }

  .minista-sitemap-item-content-link {
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100%;
    z-index: 3;
  }

  .minista-sitemap-item-content-background {
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100%;
    z-index: 1;
  }

  .minista-sitemap-item-content-link:hover
    ~ .minista-sitemap-item-content-background {
    background-color: var(--theme-bg-4);
  }

  .minista-sitemap-item-content-link:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 24px;
    width: 6px;
    height: 6px;
    border-top: 2px solid var(--theme-bd-2);
    border-right: 2px solid var(--theme-bd-2);
    transform: translateY(-50%) rotate(45deg);
    z-index: 1;
  }

  .minista-sitemap-item-content-inner {
    position: relative;
    display: flex;
    padding: 24px 36px 24px 0;
    z-index: 2;
  }

  .minista-sitemap-item-content-name {
    font-size: 0.875rem;
    font-weight: 600;
  }

  .minista-sitemap-item-content-slug {
    margin-left: 8px;
    color: var(--theme-tx-3);
    font-size: 0.75rem;
    font-weight: 600;
  }
`

export { Wrapper, Style, Header, Main, Nav, List }
