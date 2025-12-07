import type { ReactElement, ReactNode } from 'react'
import cn from 'classnames'
import { type MetricType } from '@/types'
import {
  CpaPlusIcon,
  CpaScheduleIcon,
  FinanceIcon,
  ShareExternalIcon,
  TrendArrowIcon,
} from '@/components/shared/icons'

import { INCREASE_METRIC } from '@/utils/constants'
import { intMetricFormatter } from '@/utils'

import styles from './MetricsCard.module.scss'

type MetricsCardProps = {
  name: string
} & MetricType

const getIcon = (name: string) => {
  switch (name) {
    case 'cpc':
      return <CpaPlusIcon />
    case 'cpa':
      return <CpaScheduleIcon />
    case 'expenses':
      return <FinanceIcon />
    case 'clicks':
      return <ShareExternalIcon />
  }
}

export const MetricsCard = ({
  title,
  change,
  changeType,
  format,
  value,
  name,
}: MetricsCardProps) => {
  const isIncrease = changeType === INCREASE_METRIC
  const trendStyle = isIncrease ? styles.increase : styles.decrease

  const formattedAmount = intMetricFormatter(format, value)

  return (
    <div className={styles.container}>
      <div className={styles.headerLine}>
        <p className={styles.title}>{title}</p>
        <div className={styles.iconWrapper}>{getIcon(name)}</div>
      </div>

      <div className={styles.bottomLine}>
        <span className={styles.metricValue}>{formattedAmount}</span>
        <div className={cn(styles.metricType, trendStyle)}>
          <TrendArrowIcon />
          <span>{change}</span>
        </div>
      </div>
    </div>
  )
}
