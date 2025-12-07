import { MetricsCard } from '@/components/entities/MetricsCard/MetricsCard'
import { useAppSelector } from '@/store'
import { metricsSliceSelector } from '@/store/metricsSlice'
import { Skeleton } from '@/components/shared/Skeleton'

import styles from './MetricsList.module.scss'

export const MetricsList = () => {
  const { isLoading, data } = useAppSelector(metricsSliceSelector)

  if (isLoading) {
    return (
      <div className={styles.skeletonContainer}>
        <Skeleton />
      </div>
    )
  }

  if (!data && !isLoading) {
    return 'No data'
  }

  return (
    <div className={styles.metricsList}>
      {Object.entries(data!).map(([key, entry]) => (
        <MetricsCard key={entry.title} {...entry} name={key} />
      ))}
    </div>
  )
}
