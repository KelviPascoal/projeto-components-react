import { ColumnProps, Table } from "./components/Table";

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
    name: 'Kelvi',
    lastName: 'Jhones',
    age: 23,
  },
  {
    id: 3,
    name: 'Kelvi',
    lastName: 'Jhones',
    age: 23,
  },
  {
    id: 4,
    name: 'Kelvi',
    lastName: 'Jhones',
    age: 23,
  },
  {
    id: 5,
    name: 'Kelvi',
    lastName: 'Jhones',
    age: 23,
  },
  {
    id: 6,
    name: 'Kelvi',
    lastName: 'Jhones',
    age: 23,
  },
]


export function App() {
  return (
    <Table data={data} columns={columns} />
  )
}

