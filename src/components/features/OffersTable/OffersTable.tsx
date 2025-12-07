import { useMemo, useState } from 'react'
import cn from 'classnames'
import { useAppDispatch, useAppSelector } from '@/store'
import { setSort, clearSort, offersSliceSelector } from '@/store/offersSlice'
import { PlatformIcons } from '@/components/shared/PlatformIcons/PlatformIcons'
import { MoreActionIcon } from '@/components/shared/icons/MoreActionIcon'
import { StatusBadge } from '@/components/shared/StatusBadge/StatusBadge'
import { formatDate, formatCurrency, sortOffers } from '@/utils'
import type { SortableColumn } from '@/types'

import styles from './OffersTable.module.scss'

export const OffersTable = () => {
  const dispatch = useAppDispatch()
  const { data, isLoading, sortBy, sortOrder } = useAppSelector(offersSliceSelector)
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())

  const sortedOffers = useMemo(() => {
    if (!data) return []
    return sortOffers(data, sortBy, sortOrder)
  }, [data, sortBy, sortOrder])

  const isAllSelected = useMemo(() => {
    if (!sortedOffers.length) return false
    return sortedOffers.every(offer => selectedIds.has(offer.id))
  }, [sortedOffers, selectedIds])

  const handleSort = (column: SortableColumn) => {
    if (sortBy === column) {
      if (sortOrder === 'asc') {
        dispatch(setSort({ sortBy: column, sortOrder: 'desc' }))
      } else {
        dispatch(clearSort())
      }
    } else {
      dispatch(setSort({ sortBy: column, sortOrder: 'asc' }))
    }
  }

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds(new Set())
    } else {
      setSelectedIds(new Set(sortedOffers.map(offer => offer.id)))
    }
  }

  const handleSelectOffer = (offerId: string) => {
    setSelectedIds(prev => {
      const newSet = new Set(prev)
      if (newSet.has(offerId)) {
        newSet.delete(offerId)
      } else {
        newSet.add(offerId)
      }
      return newSet
    })
  }

  if (isLoading) {
    return <div className={styles.loading}>Загрузка...</div>
  }

  if (!data || data.length === 0) {
    return <div className={styles.empty}>Нет данных</div>
  }

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.checkboxColumn}>
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={handleSelectAll}
                onClick={e => e.stopPropagation()}
              />
            </th>
            <th
              className={cn(styles.sortableHeader, styles.nameColumn)}
              onClick={() => handleSort('name')}
            >
              Название офера
            </th>
            <th
              className={cn(styles.sortableHeader, styles.dateColumn)}
              onClick={() => handleSort('launchDate')}
            >
              Дата запуска
            </th>
            <th className={styles.platformsColumn}>Площадки</th>
            <th
              className={cn(styles.sortableHeader, styles.balanceColumn)}
              onClick={() => handleSort('balance')}
            >
              Баланс
            </th>
            <th
              className={cn(styles.sortableHeader, styles.spentColumn)}
              onClick={() => handleSort('spent')}
            >
              Расход
            </th>
            <th
              className={cn(styles.sortableHeader, styles.statusColumn)}
              onClick={() => handleSort('status')}
            >
              Статус
            </th>
            <th className={styles.actionsColumn}></th>
          </tr>
        </thead>
        <tbody>
          {sortedOffers.map(offer => (
            <tr key={offer.id}>
              <td className={styles.checkboxColumn}>
                <input
                  type="checkbox"
                  checked={selectedIds.has(offer.id)}
                  onChange={() => handleSelectOffer(offer.id)}
                  onClick={e => e.stopPropagation()}
                />
              </td>
              <td className={styles.nameColumn}>{offer.name}</td>
              <td className={styles.dateColumn}>{formatDate(offer.launchDate)}</td>
              <td className={styles.platformsColumn}>
                <PlatformIcons platforms={offer.platforms} />
              </td>
              <td className={styles.balanceColumn}>{formatCurrency(offer.balance)}</td>
              <td className={styles.spentColumn}>{formatCurrency(offer.spent)}</td>
              <td className={styles.statusColumn}>
                <StatusBadge status={offer.status} />
              </td>
              <td className={styles.actionsColumn}>
                <button className={styles.menuButton}>
                  <MoreActionIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
