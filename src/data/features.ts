// EXPORTS: IFeature, MOCK_FEATURES
export interface IFeature {
  id: string
  number: string
  title: string
  description: string
}

export const MOCK_FEATURES: IFeature[] = [
  {
    id: '1',
    number: '01',
    title: 'Extremely easy to learn',
    description: 'People who practice 12 mins can master it. Follow Master YoYun, learn it on the spot, feel Qi sensation immediately.'
  },
  {
    id: '2',
    number: '02',
    title: 'Unblock 3 meridians',
    description: 'In the human body, there is Conception Vessel, Governor Vessel and Central Channel.'
  },
  {
    id: '3',
    number: '03',
    title: 'Elevate your soul',
    description: 'Strengthen body, prolong life, dispel diseases and improve health, increase longevity.'
  }
]