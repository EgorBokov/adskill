import { Skeleton } from '@/components/shared/Skeleton'
import { useAppSelector } from '@/store'
import { offersSliceSelector, offersTotalBalanceSelector } from '@/store/offersSlice'
import { CardWrapper } from '@/components/shared/CardWrapper'

import styles from './TotalBalance.module.scss'
import { formatCurrency } from '@/utils'

const mockData = [
  { title: 'Дата запуска', value: '15.06.2025' },
  { title: 'Направление', value: 'E-Commerce' },
  { title: 'Объект', value: 'App' },
]

const Line = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className={styles.lineContainer}>
      <span className={styles.lineTitle}>{title}</span>
      <span className={styles.lineValue}>{value}</span>
    </div>
  )
}

export const TotalBalance = () => {
  const { isLoading } = useAppSelector(offersSliceSelector)
  const totalBalance = useAppSelector(offersTotalBalanceSelector)

  if (isLoading)
    return (
      <div>
        <Skeleton />
      </div>
    )

  return (
    <CardWrapper className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.balanceWrapper}>
          <span className={styles.balanceTitle}>Баланс</span>
          <span className={styles.balanceValue}>${formatCurrency(totalBalance)}</span>
        </div>
        <div className={styles.linesContainer}>
          {mockData.map(({ title, value }) => (
            <Line key={value} title={title} value={value} />
          ))}
        </div>
      </div>
    </CardWrapper>
  )
}
