import { useState } from 'react'
import { Pagination } from './Pagination'
import * as S from './styles'
import { SortProps, TableProps } from './types'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'


export function Table({ columns, data, handleSort, pagination: { handlePagination, pageSize, total } }: TableProps) {
    const [sorting, setSorting] = useState<SortProps>({} as SortProps)

    function onSorting(sort: SortProps) {
        handleSort(sort)
        setSorting(sort)
    }

    return (
        <>
            <S.Table>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.property} onClick={() => {
                                sorting.property === column.property && sorting.direction === 'asc'
                                    ? onSorting({ property: column.property, direction: 'desc' })
                                    : onSorting({ property: column.property, direction: 'asc' })
                            }}>
                                <div>
                                    <span>{column.title}</span>

                                    {sorting.direction === 'asc' && <span style={{ opacity: sorting.property === column.property ? 1 : 0 }}><BiChevronDown /></span>}
                                    {sorting.direction === 'desc' && <span style={{ opacity: sorting.property === column.property ? 1 : 0 }}><BiChevronUp /></span>}

                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            {columns.map(column => (
                                <td key={item[column.property]}>{item[column.property]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </S.Table>
            <Pagination pageSize={pageSize} handlePagination={handlePagination} total={total} />
        </>
    )
}