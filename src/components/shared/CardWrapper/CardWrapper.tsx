import type { ReactNode } from 'react'
import cn from 'classnames'
import styles from './CardWrapper.module.scss'

export const CardWrapper = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return <div className={cn(styles.container, className)}>{children}</div>
}
