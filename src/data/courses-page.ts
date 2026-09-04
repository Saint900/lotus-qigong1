// EXPORTS: ICourse, MOCK_COURSES
export interface ICourse {
  id: string
  name: string
  instructor: string
  price: number
  originalPrice: number
  isSpecialOffer: boolean
  isNewest: boolean
  isPopular: boolean
  isFree: boolean
  hasCertificate: boolean
  description: string
  imageUrl: string
  category: 'qigong' | 'taichi' | 'meditation'
}

export const MOCK_COURSES: ICourse[] = [
  {
    id: '1',
    name: 'Lotus Moving QiGong',
    instructor: 'Master YoYun',
    price: 699,
    originalPrice: 1899,
    isSpecialOffer: true,
    isNewest: true,
    isPopular: true,
    isFree: false,
    hasCertificate: true,
    description: 'Extremely simple, easy to learn, and effective. Strengthen body, prolong life, dispel diseases and improve health.',
    imageUrl: '/spark/app/app_17bvbj4uu76/runtime/api/v1/storage/object/bucket_aadkphgrwmweo_static/static%2Faadkphatg7sao_ve_miaoda',
    category: 'qigong',
  },
  {
    id: '2',
    name: 'Meridian Unblocking Basics',
    instructor: 'Master YoYun',
    price: 0,
    originalPrice: 0,
    isSpecialOffer: false,
    isNewest: false,
    isPopular: true,
    isFree: true,
    hasCertificate: true,
    description: 'Learn to unblock Conception Vessel, Governor Vessel and Central Channel with simple movements.',
    imageUrl: '/spark/app/app_17bvbj4uu76/runtime/api/v1/storage/object/bucket_aadkphgrwmweo_static/static%2Faadkpgzbvhanq_ve_miaoda',
    category: 'qigong',
  },
  {
    id: '3',
    name: 'Introduction to QiGong',
    instructor: 'Master YoYun',
    price: 0,
    originalPrice: 0,
    isSpecialOffer: false,
    isNewest: true,
    isPopular: false,
    isFree: true,
    hasCertificate: false,
    description: 'A free beginner course to experience Qi sensation and understand the fundamentals of QiGong.',
    imageUrl: '/spark/app/app_17bvbj4uu76/runtime/api/v1/storage/object/bucket_aadkphgrwmweo_static/static%2Faadkpg5vpkqpo_ve_miaoda',
    category: 'meditation',
  },
]