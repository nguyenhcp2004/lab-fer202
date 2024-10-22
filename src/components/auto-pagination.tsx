/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@/components/ui/button'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
interface Props {
  page: number
  pageSize: number
  pathname?: string
  isLink?: boolean
  onClick?: (pageNumber: number) => void
}

const RANGE = 2
export default function AutoPagination({
  page,
  pageSize,
  pathname = '/',
  isLink = true,
  onClick = (pageNumber) => {}
}: Props) {
  const renderPagination = () => {
    let dotAfter = false
    let dotBefore = false
    const renderDotBefore = (index: number) => {
      if (!dotBefore) {
        dotBefore = true
        return (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )
      }
      return null
    }
    const renderDotAfter = (index: number) => {
      if (!dotAfter) {
        dotAfter = true
        return (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )
      }
      return null
    }
    return Array(pageSize)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1

        // Điều kiện để return về ...
        if (
          page <= RANGE * 2 + 1 &&
          pageNumber > page + RANGE &&
          pageNumber < pageSize - RANGE + 1
        ) {
          return renderDotAfter(index)
        } else if (page > RANGE * 2 + 1 && page < pageSize - RANGE * 2) {
          if (pageNumber < page - RANGE && pageNumber > RANGE) {
            return renderDotBefore(index)
          } else if (
            pageNumber > page + RANGE &&
            pageNumber < pageSize - RANGE + 1
          ) {
            return renderDotAfter(index)
          }
        } else if (
          page >= pageSize - RANGE * 2 &&
          pageNumber > RANGE &&
          pageNumber < page - RANGE
        ) {
          return renderDotBefore(index)
        }
        const pathNameLink = `${pathname}?page=${pageNumber}`
        return (
          <PaginationItem key={index}>
            {isLink && (
              <PaginationLink
                href={pathNameLink}
                isActive={pageNumber === page}
              >
                {pageNumber}
              </PaginationLink>
            )}
            {!isLink && (
              <Button
                onClick={() => {
                  onClick(pageNumber)
                }}
                variant={pageNumber === page ? 'outline' : 'ghost'}
                className='w-9 h-9 p-0'
              >
                {pageNumber}
              </Button>
            )}
          </PaginationItem>
        )
      })
  }
  const pathNamePrev = `${pathname}?page=${page - 1}`
  const pathNameNext = `${pathname}?page=${page + 1}`
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {isLink && (
            <PaginationPrevious
              href={pathNamePrev}
              className={cn({
                'cursor-not-allowed': page === 1
              })}
              onClick={(e) => {
                if (page === 1) {
                  e.preventDefault()
                }
              }}
            />
          )}
          {!isLink && (
            <Button
              disabled={page === 1}
              onClick={() => onClick(page - 1)}
              variant={'ghost'}
              className='h-9 p-0 px-2'
            >
              <ChevronLeft className='w-5 h-5' /> Previous
            </Button>
          )}
        </PaginationItem>
        {renderPagination()}

        <PaginationItem>
          {isLink && (
            <PaginationNext
              href={pathNameNext}
              className={cn({
                'cursor-not-allowed': page === pageSize
              })}
              onClick={(e) => {
                if (page === pageSize) {
                  e.preventDefault()
                }
              }}
            />
          )}
          {!isLink && (
            <Button
              disabled={page === pageSize}
              onClick={() => onClick(page + 1)}
              variant={'ghost'}
              className='h-9 p-0 px-2'
            >
              Next <ChevronRight className='w-5 h-5' />
            </Button>
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}