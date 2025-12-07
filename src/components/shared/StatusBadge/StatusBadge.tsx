import cn from 'classnames'
import styles from './StatusBadge.module.scss'

type StatusBadgeProps = {
  status: string
}

const getStatusLabel = (status: string): string => {
  switch (status) {
    case 'active':
      return 'Активный'
    case 'stopped':
      return 'Остановлен'
    case 'paused':
      return 'Приостановлен'
    default:
      return status
  }
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const statusClass = cn(styles.badge, {
    [styles.active]: status === 'active',
    [styles.stopped]: status === 'stopped',
    [styles.paused]: status === 'paused',
  })

  return <span className={statusClass}>{getStatusLabel(status)}</span>
}
