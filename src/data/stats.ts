// EXPORTS: IStat, MOCK_STATS
export interface IStat {
  id: string
  value: string
  label: string
}

export const MOCK_STATS: IStat[] = [
  { id: '1', value: '100%', label: 'Quality' },
  { id: '2', value: '8', label: 'Professionals' },
  { id: '3', value: '3+', label: 'Classes' },
  { id: '4', value: '316', label: 'Regular Customers' },
  { id: '5', value: '5', label: 'Years of Experience' },
]