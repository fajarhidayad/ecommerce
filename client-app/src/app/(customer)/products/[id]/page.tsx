import React from 'react';

export default function ProductDetailsPage() {
  return (
    <main className="my-10">
      <section className="container flex gap-8">
        <div className="bg-gray-100 rounded-lg w-[300px] h-[300px]"></div>
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-5">Airpods Pro</h1>
          <h2 className="text-xl">Rp3.200.000</h2>
          <span className="h-[1px] bg-gray-200 w-20"></span>
        </div>
      </section>
    </main>
  );
}
