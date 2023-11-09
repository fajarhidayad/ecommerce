import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { getProductById } from '~/api/product';
import { Button } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';
import { Separator } from '~/components/ui/separator';
import { currency } from '~/utils/currency';
import QuantityDetails from './QuantityDetails';

export default async function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(params.id);

  return (
    <main className="my-10">
      <section className="container flex gap-8">
        <div className="bg-gray-100 rounded-lg w-[500px] h-[500px] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-5">{product.name}</h1>
          <h2 className="text-xl">{currency.format(product.price)}</h2>
          <Separator className="my-3" />
          <p className="text-slate-500">
            {product.description ? product.description : 'No description'}
          </p>
        </div>
        <QuantityDetails price={product.price} stock={product.stock} />
      </section>
    </main>
  );
}
