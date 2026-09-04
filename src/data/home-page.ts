// EXPORTS: IHero, MOCK_HERO
export interface IHero {
  id: string
  title: string
  subtitle: string
  tagline: string
  description: string
  ctaText: string
  bgImageUrl: string
}

export const MOCK_HERO: IHero = {
  id: '1',
  title: 'Lotus Moving QiGong',
  subtitle: 'Harmony and enlightenment',
  tagline: 'Immortality & Enlightenment',
  description: 'Lotus Moving Qigong embodies half the history of Chinese martial arts. Master it in 12 minutes and practice for a lifetime.',
  ctaText: 'Start here',
  bgImageUrl: '/spark/app/app_17bvbj4uu76/runtime/api/v1/storage/object/bucket_aadkphgrwmweo_static/static%2Faadkpg4ozqsbi_ve_miaoda',
}