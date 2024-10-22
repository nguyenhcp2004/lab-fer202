/* eslint-disable @typescript-eslint/no-unused-vars */
import { CaretSortIcon, DotsHorizontalIcon } from '@radix-ui/react-icons'
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  SortingState,
  ColumnFiltersState,
  VisibilityState
} from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { useState, useEffect, useContext, createContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import AutoPagination from '@/components/auto-pagination'
import { useGetOrchids } from '@/queries/useOrchid'
import { GetListOrchidsResType } from '@/schemaValidations/orchid.schema'
import AddOrchid from '@/pages/Manage/AddOrchid'

const OrchidTableContext = createContext<{
  setOrchidEditId: (value: string) => void
  orchidEditId: string | undefined
  orchidDelete: GetListOrchidsResType[0] | null
  setOrchidDelete: (value: GetListOrchidsResType[0] | null) => void
}>({
  setOrchidEditId: (value: string | undefined) => {},
  orchidEditId: undefined,
  orchidDelete: null,
  setOrchidDelete: (value: GetListOrchidsResType[0] | null) => {}
})

export const columns: ColumnDef<GetListOrchidsResType[0]>[] = [
  {
    accessorKey: 'Id',
    header: 'ID'
  },
  {
    accessorKey: 'image',
    header: 'Image',
    cell: ({ row }) => (
      <Avatar className='aspect-square w-[100px] h-[100px] rounded-md object-cover'>
        <AvatarImage src={row.getValue('image')} />
        <AvatarFallback>{row.original.name.charAt(0)}</AvatarFallback>
      </Avatar>
    )
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => <div className='capitalize'>{row.getValue('name')}</div>
  },
  {
    accessorKey: 'isSpecial',
    header: 'Natural',
    cell: ({ row }) => <div>{row.getValue('species')}</div>
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row }) => <div>{row.getValue('price')} VND</div>
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const { setOrchidEditId, setOrchidDelete } =
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useContext(OrchidTableContext)
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <DotsHorizontalIcon className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem onClick={() => setOrchidEditId(row.original.Id)}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOrchidDelete(row.original)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]

const PAGE_SIZE = 10

export default function OrchidTable() {
  const [searchParam] = useSearchParams()
  const page = searchParam.get('page') ? Number(searchParam.get('page')) : 1
  const pageIndex = page - 1
  const [orchidEditId, setOrchidEditId] = useState<string | undefined>()
  const [orchidDelete, setOrchidDelete] = useState<
    GetListOrchidsResType[0] | null
  >(null)
  const { data: orchids } = useGetOrchids()
  const data = orchids?.data.reverse() || []
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const [pagination, setPagination] = useState({
    pageIndex,
    pageSize: PAGE_SIZE
  })

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    autoResetPageIndex: false,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination
    }
  })

  useEffect(() => {
    table.setPagination({
      pageIndex,
      pageSize: PAGE_SIZE
    })
  }, [table, pageIndex])

  return (
    <OrchidTableContext.Provider
      value={{ orchidEditId, setOrchidEditId, orchidDelete, setOrchidDelete }}
    >
      <div className='w-full'>
        <div className='flex items-center py-4'>
          <Input
            placeholder='Filter name...'
            value={
              (table.getColumn('isSpecial')?.getFilterValue() as string) ?? ''
            }
            onChange={(event) =>
              table.getColumn('isSpecial')?.setFilterValue(event.target.value)
            }
            className='max-w-sm'
          />
          <div className='ml-auto flex items-center gap-2'>
            <AddOrchid />
          </div>
        </div>
        <div className='rounded-md border'>
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className='h-24 text-center'
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className='flex items-center justify-end space-x-2 py-4'>
          <div className='text-xs text-muted-foreground py-4 flex-1 '>
            Showing <strong>{table.getPaginationRowModel().rows.length}</strong>{' '}
            in <strong>{data?.length || 0}</strong> results
          </div>
          <div>
            <AutoPagination
              page={table.getState().pagination.pageIndex + 1}
              pageSize={table.getPageCount()}
              pathname='/manage'
            />
          </div>
        </div>
      </div>
    </OrchidTableContext.Provider>
  )
}
