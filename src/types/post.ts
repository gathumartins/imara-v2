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

export type PostNode = {
  id: string
  title: string
  content: string
  date: string
  slug: string
  ipolicyFields?: {
    author?: PostIpolicyAuthor | null
  } | null
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
