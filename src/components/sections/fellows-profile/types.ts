export type FellowNode = {
  title: string
  featuredImage: {
    node: {
      altText: string
      sourceUrl: string
      mediaDetails: {
        width: number
        height: number
      }
    } | null
  } | null
}

export type CohortListItem = {
  id: string
  slug: string
  name: string
}

export type CohortDetail = {
  id: string
  slug: string
  name: string
  fellows: {
    edges: { node: FellowNode }[]
  }
  fellowCohort: {
    pageBanners: {
      pageTitle: string
      bannerImage: {
        node: {
          mediaItemUrl: string
        } | null
      } | null
    } | null
  } | null
}
