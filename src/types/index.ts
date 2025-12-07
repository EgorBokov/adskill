export enum MetricChangeTypeEnum {
  DECREASE = 'decrease',
  INCREASE = 'increase',
}

export type MetricChangeType = 'increase' | 'decrease'
export type MetricTypeFormat = 'currency' | 'float' | 'integer'

export type MetricType = {
  value: number
  change: number
  changeType: MetricChangeType
  previousValue: number
  format?: MetricTypeFormat
  title?: string
}

export type PlatformType = {
  id: string
  name: string
  color: string
}

export type OfferType = {
  id: string
  name: string
  status: string
  launchDate: string
  balance: number
  spent: number
  platforms: PlatformType[]
}

export type CurrentMetrics = Record<'clicks' | 'cpc' | 'cpa' | 'expenses', MetricType>

export type MetricsResponseType = {
  currentMetrics: CurrentMetrics
  offers: OfferType[]
}

export type MetricsCondition = {
  data: CurrentMetrics | null
  isLoading: boolean
  error: string | null
}

export type OffersCondition = {
  data: OfferType[] | null
  isLoading: boolean
  error: string | null
  sortBy: string | null
  sortOrder: 'asc' | 'desc' | null
}

export type SortableColumn = 'name' | 'launchDate' | 'balance' | 'spent' | 'status'
