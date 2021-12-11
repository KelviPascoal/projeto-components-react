import { Table } from "./components/Table";
import { ColumnProps, PaginationProps, SortProps } from "./components/Table/types";

const columns: ColumnProps[] = [
  {
    property: 'name',
    title: 'Nome'
  },
  {
    property: 'lastName',
    title: 'Sobrenome'
  },
  {
    property: 'age',
    title: 'Idade'
  }
]

const data = [
  {
    id: 1,
    name: 'Kelvi',
    lastName: 'Jhones',
    age: 23,
  },
  {
    id: 2,
    name: 'Erick',
    lastName: 'Tchola',
    age: 26,
  },
  {
    id: 3,
    name: 'Patrick',
    lastName: 'AAAAAA',
    age: 30,
  },
  {
    id: 4,
    name: 'Lucas',
    lastName: 'ASDASDASD',
    age: 27,
  },
  {
    id: 5,
    name: 'Hiago',
    lastName: 'Baço',
    age: 23,
  },
  {
    id: 6,
    name: 'Sullan',
    lastName: 'Lindao',
    age: 25,
  },
]

export function App() {
  function handleSort(sort: SortProps) {
    console.log('sort: ', sort);
  }

  function handlePagination(page: number) {
    console.log('page: ', page);

  }

  const pagination: PaginationProps = {
    handlePagination: handlePagination,
    pageSize: 5,
    total: 20
  }

  return (
    <Table data={data} columns={columns} handleSort={handleSort} pagination={pagination} />
  )
}

