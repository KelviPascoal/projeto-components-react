export interface ColumnProps {
  property: string;
  title: string;
}

export interface TableProps {
  data: any[];
  columns: ColumnProps[];
  handleSort: (sort: SortProps) => void;
  pagination: PaginationProps;
}

export interface PaginationProps {
  pageSize: number;
  total: number;
  handlePagination: (page: number) => void;
}

export interface SortProps {
  property: string;
  direction: "asc" | "desc";
}
