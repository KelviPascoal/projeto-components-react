import { useState } from 'react'
import * as S from './styles'

export interface ColumnProps {
    property: string;
    title: string;
}

export interface TableProps {
    data: any[];
    columns: ColumnProps[];
    handleSort: (sort: SortProps) => void;
}

export interface PaginationProps { }

export interface SortProps {
    property: string;
    direction: 'asc' | 'desc';
}

export function Table({ columns, data, handleSort }: TableProps) {
    const [sorting, setSorting] = useState<SortProps>({} as SortProps)

    function onSorting(sort: SortProps) {
        handleSort(sort)
        setSorting(sort)
    }

    return (
        <S.Table>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.property} onClick={() => {
                            sorting.property === column.property && sorting.direction === 'asc'
                                ? onSorting({ property: column.property, direction: 'desc' })
                                : onSorting({ property: column.property, direction: 'asc' })
                        }}>
                            {column.title}
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
    )
}