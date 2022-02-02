declare module "minista-sitemap" {
  const Wrapper: React.ComponentType<{ children?: React.ReactNode }>
  const Style: React.ComponentType<{
    defaultDark?: boolean
    darkMode?: boolean
    innerMaxWidth?: string
    defaultLightStyle?: string
    defaultDarkStyle?: string
    schemeDarkStyle?: string
    variableStyle?: string
    resetStyle?: string
    componentStyle?: string
  }>
  const Header: React.ComponentType<{
    projectName?: string
    dateName?: string
    date?: string
    buttonText?: string
    buttonLink?: string
    buttonList?: ButtonListItem[]
  }>
  const Main: React.ComponentType<{ children?: React.ReactNode }>
  const Nav: React.ComponentType<{
    title?: string
    children?: React.ReactNode
  }>
  const List: React.ComponentType<{
    items?: listItem[]
  }>

  export interface ButtonListItem {
    text?: string
    link?: string
    color?: string
  }
  export interface listItem {
    name?: string
    slug?: string
    items?: listItem[]
  }
}
