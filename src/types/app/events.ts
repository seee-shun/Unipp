export type Events = {
  type: string
  title: string
  image: string
  explain: string
  host: string
  capacity: number
  relatedLinks: string
  entryCost: number
  period: {
    start: Date
    finish: Date
  }
}
