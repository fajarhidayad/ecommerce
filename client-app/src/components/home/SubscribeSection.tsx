import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export function SubscribeSection() {
  return (
    <section className="container mb-10 bg-gray-100 p-10 rounded-md">
      <h1 className="text-2xl font-semibold mb-8">
        Get Weekly Update of Our Sale Products
      </h1>
      <div className="flex items-center gap-5 ">
        <Input placeholder="example@mail.com" className="max-w-sm" />
        <Button>Subscribe</Button>
      </div>
    </section>
  );
}
