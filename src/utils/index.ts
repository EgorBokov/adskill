import { type MetricTypeFormat, type OfferType } from '@/types'
import { CURRENCY_FORMAT, FLOAT_FORMAT, INTEGER_FORMAT } from './constants'

export const intMetricFormatter = (format: MetricTypeFormat | undefined, value: number) => {
  switch (format) {
    case CURRENCY_FORMAT:
      return new Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
      }).format(value)
    case INTEGER_FORMAT:
      return new Intl.NumberFormat('ru-RU').format(value)
    case FLOAT_FORMAT:
      return value.toFixed(2)
    default:
      return value.toString()
  }
}

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-EN', {
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
    .format(value)
    .replace(/,/g, ' ')
}

export const sortOffers = (
  offers: OfferType[],
  sortBy: string | null,
  sortOrder: 'asc' | 'desc' | null
): OfferType[] => {
  if (!sortBy || !sortOrder) return offers

  return [...offers].sort((a, b) => {
    let aValue: string | number
    let bValue: string | number

    switch (sortBy) {
      case 'name':
        aValue = a.name.toLowerCase()
        bValue = b.name.toLowerCase()
        break
      case 'launchDate':
        aValue = new Date(a.launchDate).getTime()
        bValue = new Date(b.launchDate).getTime()
        break
      case 'balance':
        aValue = a.balance
        bValue = b.balance
        break
      case 'spent':
        aValue = a.spent
        bValue = b.spent
        break
      case 'status':
        aValue = a.status
        bValue = b.status
        break
      default:
        return 0
    }

    if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1
    if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1
    return 0
  })
}
