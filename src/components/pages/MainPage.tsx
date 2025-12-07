import { Metrics } from '@/components/widgets/Metrics/Metrics'
import { Offers } from '@/components/widgets/Offers/Offers'
import { TotalBalance } from '@/components/features/TotalBalance'
import { DefaultLayout } from '@/components/shared/layouts'


export const MainPage = () => {
  return (
    <DefaultLayout>
      <Metrics />
      <Offers />
      <TotalBalance />
    </DefaultLayout>
  )
}
