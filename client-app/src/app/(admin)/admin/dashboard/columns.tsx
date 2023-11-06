'use client';
import { ColumnDef } from '@tanstack/react-table';

export enum OrderStatus {
  UNPAID = 'UNPAID',
  PROCESSING = 'PROCESSING',
  SHIPPED = 'SHIPPED',
  COMPLETED = 'COMPLETED',
  CANCEL = 'CANCEL',
}

export type RecentOrder = {
  id: string;
  status: OrderStatus;
  total: number;
  shippingCost: number;
};

export const columns: ColumnDef<RecentOrder>[] = [
  {
    accessorKey: 'id',
    header: 'ORDER ID',
  },
  {
    accessorKey: 'status',
    header: 'STATUS',
  },
  {
    accessorKey: 'shippingCost',
    header: 'SHIPPING COST',
  },
  {
    accessorKey: 'total',
    header: 'TOTAL',
  },
];
