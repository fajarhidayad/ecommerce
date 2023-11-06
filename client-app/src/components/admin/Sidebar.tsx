import Link from 'next/link';
import React from 'react';

export default function Sidebar() {
  return (
    <aside className="w-[280px] border-r-2 border-r-gray-100 p-5">
      <Link href={'/admin/dashboard'}>
        <h1 className="text-2xl font-semibold text-slate-800 mb-5">Admin</h1>
      </Link>

      <ul>
        <li className="mb-5">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-slate-600 mb-1">Products</h3>
            <Link
              href={'/admin/products'}
              className="rounded-lg px-3 py-2 hover:bg-gray-200 transition-all duration-200 ease-in-out"
            >
              List
            </Link>
            <Link
              href={'/admin/products'}
              className="rounded-lg px-3 py-2 hover:bg-gray-200 transition-all duration-200 ease-in-out"
            >
              Create
            </Link>
          </div>
        </li>
        <li className="mb-5">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-slate-600 mb-1">Orders</h3>
            <Link
              href={'/admin/products'}
              className="rounded-lg px-3 py-2 hover:bg-gray-200 transition-all duration-200 ease-in-out"
            >
              List
            </Link>
            <Link
              href={'/admin/products'}
              className="rounded-lg px-3 py-2 hover:bg-gray-200 transition-all duration-200 ease-in-out"
            >
              Processed
            </Link>
            <Link
              href={'/admin/products'}
              className="rounded-lg px-3 py-2 hover:bg-gray-200 transition-all duration-200 ease-in-out"
            >
              Completed
            </Link>
          </div>
        </li>
        <li className="mb-5">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-slate-600 mb-1">Users</h3>
            <Link
              href={'/admin/products'}
              className="rounded-lg px-3 py-2 hover:bg-gray-200 transition-all duration-200 ease-in-out"
            >
              List
            </Link>
          </div>
        </li>
      </ul>
    </aside>
  );
}
