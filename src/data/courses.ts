// EXPORTS: ICourse, MOCK_COURSES
export interface ICourse {
  id: string
  name: string
  instructor: string
  price: number
  originalPrice: number
  isSpecialOffer: boolean
  isNew: boolean
  isPopular: boolean
  isFree: boolean
  hasCertificate: boolean
  description: string
  imageUrl: string
  category: string
}

export const MOCK_COURSES: ICourse[] = [
  {
    id: '1',
    name: 'Lotus Moving QiGong',
    instructor: 'Master YoYun',
    price: 699,
    originalPrice: 1899,
    isSpecialOffer: true,
    isNew: true,
    isPopular: true,
    isFree: false,
    hasCertificate: true,
    description: 'Lotus Moving QiGong is extremely simple, extremely easy to learn, and extremely effective. Strengthen body, prolong life, dispel diseases and improve health.',
    imageUrl: '/images/course-1.jpg',
    category: 'premium'
  },
  {
    id: '2',
    name: 'Beginner QiGong Fundamentals',
    instructor: 'Master YoYun',
    price: 0,
    originalPrice: 0,
    isSpecialOffer: false,
    isNew: true,
    isPopular: false,
    isFree: true,
    hasCertificate: false,
    description: 'A gentle introduction to QiGong basics. Learn foundational breathing techniques and simple movements to start your wellness journey.',
    imageUrl: '/images/course-2.jpg',
    category: 'beginner'
  },
  {
    id: '3',
    name: 'Advanced Meridian Mastery',
    instructor: 'Master YoYun',
    price: 499,
    originalPrice: 999,
    isSpecialOffer: true,
    isNew: false,
    isPopular: true,
    isFree: false,
    hasCertificate: true,
    description: 'Deepen your practice with advanced meridian unblocking techniques. Unblock Conception Vessel, Governor Vessel and Central Channel.',
    imageUrl: '/images/course-3.jpg',
    category: 'advanced'
  }
]