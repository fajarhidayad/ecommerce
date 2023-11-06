'use client';
import React from 'react';
import { BarChart, XAxis, YAxis, Tooltip, Bar } from 'recharts';

const data = [
  {
    name: 'January',
    sales: 1500000,
  },
  {
    name: 'February',
    sales: 2100000,
  },
  {
    name: 'March',
    sales: 3200000,
  },
  {
    name: 'April',
    sales: 1600000,
  },
  {
    name: 'May',
    sales: 2500000,
  },
  {
    name: 'June',
    sales: 2700000,
  },
  {
    name: 'July',
    sales: 2300000,
  },
  {
    name: 'August',
    sales: 2900000,
  },
];

export default function Chart() {
  return (
    <BarChart width={1200} height={300} data={data} margin={{ left: 25 }}>
      <XAxis dataKey={'name'} />
      <YAxis />
      <Tooltip />
      <Bar dataKey={'sales'} fill="#82ca9d" radius={[10, 10, 0, 0]} />
    </BarChart>
  );
}
