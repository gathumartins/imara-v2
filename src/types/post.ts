export type PostCategory = {
  id: string
  name: string
}

export type PostAuthor = {
  name: string
  avatar: {
    url: string | null
  } | null
}

export type PostFeaturedImage = {
  altText: string | null
  mediaDetails: {
    width: number
    height: number
  }
  sourceUrl: string
}

export type PostIpolicyAuthorImage = {
  node: {
    mediaItemUrl: string | null
  } | null
}

export type PostIpolicyAuthor = {
  name: string | null
  image: PostIpolicyAuthorImage | null
}

export type PostReportField = {
  report?: {
    node: {
      mediaItemUrl: string | null
    } | null
  } | null
  year?: string | number | null
  tag?: string | null
}

export type PostNode = {
  id: string
  title: string
  content: string
  date: string
  slug: string
  excerpt?: string | null
  ipolicyFields?: {
    author?: PostIpolicyAuthor | null
  } | null
  reportfields?: PostReportField | null
  categories: {
    edges: Array<{
      node: PostCategory
    }>
  }
  author: {
    node: PostAuthor
  }
  featuredImage: {
    node: PostFeaturedImage
  }
}

export type PostEdge = {
  node: PostNode
}
