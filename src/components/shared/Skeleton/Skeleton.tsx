import cn from 'classnames'
import styles from './Skeleton.module.scss'

type SkeletonProps = {
  width?: string | number
  height?: string | number
  borderRadius?: string | number
  className?: string
}

export const Skeleton = ({ width, height, borderRadius, className }: SkeletonProps) => {
  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
  }

  return <div className={cn(styles.skeleton, className)} style={style} />
}
