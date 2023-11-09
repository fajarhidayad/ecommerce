'use client';

import { ColumnDef } from '@tanstack/react-table';

export type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
  image: string;
  description: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'price',
    header: 'Price',
  },
  {
    accessorKey: 'stock',
    header: 'Stock',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    id: 'actions',
    enableHiding: false,
    // cell: ({}) => {
    //   return ()
    // }
  },
];
