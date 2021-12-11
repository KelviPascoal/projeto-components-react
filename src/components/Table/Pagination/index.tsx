import { PaginationProps } from "..";

export function Pagination({ handlePagination, pageSize, total }: PaginationProps) {
    const numbers: number[] = [];

    const totalPages = Math.ceil(total / pageSize);

    for (let i = 1; i <= totalPages; i++) {
        numbers.push(i);
    }

    return (
        <div>
            {numbers.map(number => <button key={number} onClick={() => handlePagination(number)}>{number}</button>)}
        </div>
    )
}