import * as S from './styles'

export interface ColumnProps {
    property: string;
    title: string;
}

export interface TableProps {
    data: any[];
    columns: ColumnProps[]
}

export function Table({ columns, data }: TableProps) {
    return (
        <S.Table>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.property}>{column.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, i) => (
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