export interface MainMenuItem {
  node: {
    id: string
    label: string
    uri: string
  }
}

export interface NavLink {
  label: string
  href: string
}

export interface LayoutButtonLink {
  title: string
  target: string
  url: string
}

export interface LayoutRegister {
  registerTitle: string
  registerDescription: string
  buttonLink: LayoutButtonLink
  video: string
  registerImage: {
    node: {
      sourceUrl: string
      mediaDetails?: {
        height?: number
        width?: number
      }
    }
  }
}

export interface LayoutData {
  logo?: {
    node?: {
      sourceUrl?: string
    }
  }
  register?: LayoutRegister
}
