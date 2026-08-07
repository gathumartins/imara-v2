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

export type HomeHeroCta = {
  label: string | null
  value: string | null
}

export type HomeHeroImage = {
  node: {
    mediaItemUrl: string | null
  } | null
}

export type HomeHeroSection = {
  newherotitle?: string | null
  herosubtitle?: string | null
  ctas?: Array<{
    cta?: HomeHeroCta | null
  }> | null
  heroimages?: Array<{
    himage?: HomeHeroImage | null
  }> | null
}

export type HomeAboutSection = {
  excerpt?: string | null
  homeaboutimage?: {
    node: {
      altText?: string | null
      sourceUrl?: string | null
      mediaDetails?: {
        height?: number | null
        width?: number | null
      } | null
    } | null
  } | null
  readmore?: {
    linklabel?: string | null
    link?: string | null
  } | null
  title?: string | null
}

export type HomeStat = {
  figures?: string | number | null
  title?: string | null
  suffix?: string | null
}

export type HomeStatsSection = {
  title?: string | null
  description?: string | null
  stats?: HomeStat[] | null
}

export type HomeApplySection = {
  excerpt?: string | null
  homeapplymage?: {
    node: {
      altText?: string | null
      sourceUrl?: string | null
      mediaDetails?: {
        height?: number | null
        width?: number | null
      } | null
    } | null
  } | null
  title?: string | null
  readmore?: {
    linklabel?: string | null
    link?: string | null
  } | null
}

export type HomeHeroData = {
  hero?: HomeHeroSection | null
  homeabout?: HomeAboutSection | null
  homestats?: HomeStatsSection | null
  homeapply?: HomeApplySection | null
}

export type PartnerNode = {
  title?: string | null
  featuredImage?: {
    node: {
      altText?: string | null
      mediaDetails?: {
        width?: number | null
      } | null
      sourceUrl?: string | null
    } | null
  } | null
}

export type TestimonialNode = {
  title?: string | null
  content?: string | null
  testimonialFields?: {
    cohort?: string | null
  } | null
}

export type TeamNode = {
  title?: string | null
  content?: string | null
  featuredImage?: {
    node: {
      altText?: string | null
      mediaDetails?: {
        height?: number | null
        width?: number | null
      } | null
      sourceUrl?: string | null
    } | null
  } | null
  teamfields?: {
    designation?: string | null
  } | null
}

export type ProgramNode = {
  title?: string | null
  slug?: string | null
  content?: string | null
  excerpt?: string | null
  uri?: string | null
  programfields?: {
    icon?: {
      node: {
        altText?: string | null
        mediaDetails?: {
          width?: number | null
          height?: number | null
        } | null
        sourceUrl?: string | null
      } | null
    } | null
  } | null
}

export type ProgramSummaryNode = {
  id: string
  title?: string | null
  slug?: string | null
  content?: string | null
  programfields?: {
    icon?: {
      node: {
        altText?: string | null
        mediaDetails?: {
          width?: number | null
          height?: number | null
        } | null
        mediaItemUrl?: string | null
      } | null
    } | null
  } | null
}

export type ProgramSummaryEdge = {
  node: ProgramSummaryNode
}

export type HomePageHeading = {
  title?: string | null
  subtitle?: string | null
}

export type HomePageHeadingGroup = {
  program?: HomePageHeading | null
  testimonials?: HomePageHeading | null
}

export type HomePageData = {
  page?: {
    id?: string | null
    title?: string | null
    uri?: string | null
    slug?: string | null
    link?: string | null
    content?: string | null
    homehero?: {
      hero?: HomeHeroSection | null
      homeabout?: HomeAboutSection | null
      homestats?: HomeStatsSection | null
      homeapply?: HomeApplySection | null
    } | null
  } | null
  partners?: {
    edges?: Array<{
      node?: PartnerNode | null
    }> | null
  } | null
  tests?: {
    edges?: Array<{
      node?: TestimonialNode | null
    }> | null
  } | null
  programs?: {
    edges?: Array<{
      node?: ProgramNode | null
    }> | null
  } | null
  headings?: {
    siteheadings?: {
      headings?: HomePageHeadingGroup | null
    } | null
  } | null
}
