'use client';

import { Gift } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Card, CardContent } from '~/components/ui/card';
import { Separator } from '~/components/ui/separator';
import { DataTable } from './data-table';
import { columns } from './columns';

const Chart = dynamic(() => import('./Chart'), { ssr: false });

export default function AdminDashboardPage() {
  return (
    <main className="p-5">
      <Card className="mb-5">
        <CardContent className="flex mt-5">
          <div>
            <h1 className="font-bold text-3xl mb-3">Good Morning 👋</h1>
            <p>
              Here&apos;s your report of sales today. See the statistics below.
            </p>
          </div>
        </CardContent>
      </Card>

      <section className="grid grid-cols-3 gap-5 mb-5">
        <Card>
          <CardContent className="mt-5">
            <div className="flex items-center gap-3">
              <Gift color="blue" />
              <div>
                <p className="text-slate-500 text-sm">New Orders</p>
                <p className="text-slate-800 font-semibold text-lg">1200</p>
              </div>
            </div>
            <Separator className="my-3" />
            <div className="flex gap-3 text-sm">
              <p className="text-green-600">+30%</p>
              <p className="text-slate-500">Increased</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="mt-5">
            <div className="flex items-center gap-3">
              <Gift color="blue" />
              <div>
                <p className="text-slate-500 text-sm">New Orders</p>
                <p className="text-slate-800 font-semibold text-lg">1200</p>
              </div>
            </div>
            <Separator className="my-3" />
            <div className="flex gap-3 text-sm">
              <p className="text-green-600">+30%</p>
              <p className="text-slate-500">Increased</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="mt-5">
            <div className="flex items-center gap-3">
              <Gift color="blue" />
              <div>
                <p className="text-slate-500 text-sm">New Orders</p>
                <p className="text-slate-800 font-semibold text-lg">1200</p>
              </div>
            </div>
            <Separator className="my-3" />
            <div className="flex gap-3 text-sm">
              <p className="text-green-600">+30%</p>
              <p className="text-slate-500">Increased</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-5">
        <Card>
          <CardContent className="mt-5">
            <Chart />
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardContent className="mt-5">
            <h1 className="font-semibold mb-4">Recent Order</h1>
            <DataTable columns={columns} data={[]} />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
