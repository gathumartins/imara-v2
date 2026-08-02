export type Fellow = {
  name: string
  image?: string
}

export type Cohort = {
  year: string
  label: string
  fellows: Fellow[]
}
