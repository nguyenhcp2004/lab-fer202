import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import OrchidTable from '@/pages/Manage/OrchidTable'

export default function Manage() {
  return (
    <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 w-full'>
      <div className='space-y-2'>
        <Card x-chunk='dashboard-06-chunk-0'>
          <CardHeader>
            <CardTitle>Orchid</CardTitle>
            <CardDescription>Manage Orchid</CardDescription>
          </CardHeader>
          <CardContent>
            <OrchidTable />
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
