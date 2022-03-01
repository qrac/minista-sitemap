export type WrapperProps = {
  children?: React.ReactNode
}

export type StyleProps = {
  defaultDark?: boolean
  darkMode?: boolean
  innerMaxWidth?: string
  defaultLightStyle?: string
  defaultDarkStyle?: string
  schemeDarkStyle?: string
  variableStyle?: string
  resetStyle?: string
  componentStyle?: string
}

export type HeaderProps = {
  projectName?: string
  dateName?: string
  date?: string
  buttonText?: string
  buttonLink?: string
  buttonList?: ButtonListItem[]
}

export type ButtonListItem = {
  text?: string
  link?: string
  color?: string
}

export type MainProps = {
  children?: React.ReactNode
}

export type NavProps = {
  title?: string
  children?: React.ReactNode
}

export type ListProps = {
  items?: ListItem[]
}

export type ListItem = {
  name?: string
  slug?: string
  items?: ListItem[]
}
