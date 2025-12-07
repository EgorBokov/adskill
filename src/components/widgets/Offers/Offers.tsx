import { OffersTable } from '@/components/features/OffersTable/OffersTable'
import { useAppDispatch } from '@/store'
import { loadOffersThunk } from '@/store/offersSlice';
import { useEffect } from 'react';

export const Offers = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadOffersThunk())
  }, [dispatch])
  
  return (
    <div>
      <OffersTable />
    </div>
  )
}
