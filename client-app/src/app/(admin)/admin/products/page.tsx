'use client';

import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Product, columns } from './columns';
import { DataTable } from './data-table';

export default function AdminProductsPage() {
  const data: Product[] = [];
  return (
    <main className="p-5">
      <h1 className="font-semibold text-2xl mb-4">Products</h1>
      <div className="flex items-center gap-3 mb-5">
        <Input placeholder="Search product" className="w-fit" />
        <Button variant={'outline'} className="ml-auto">
          Filters
        </Button>
      </div>

      <section>
        <DataTable data={data} columns={columns} />
      </section>
    </main>
  );
}
