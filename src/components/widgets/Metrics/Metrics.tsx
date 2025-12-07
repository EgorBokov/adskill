import { MetricsList } from '@/components/features/MetricsList/MetricsList'
import { useAppDispatch } from '@/store'
import { loadMetricsThunk } from '@/store/metricsSlice'
import { useEffect } from 'react'

export const Metrics = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(loadMetricsThunk())
  }, [])

  return (
    <div>
      <MetricsList />
    </div>
  )
}
