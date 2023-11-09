'use client';

import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';

interface QuantityDetailsProps {
  price: number;
  stock: number;
}

export default function QuantityDetails({
  price,
  stock,
}: QuantityDetailsProps) {
  const [quantity, setQuantity] = useState(1);

  function addQuantity() {
    if (quantity >= stock) return;
    setQuantity((prev) => prev + 1);
  }

  function subtractQuantity() {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  }

  return (
    <Card className="self-start w-[300px]">
      <CardContent>
        <div className="mt-5">
          <h3 className="font-semibold mb-2">Quantity</h3>
          <div className="flex items-center gap-3 mb-4">
            <Button onClick={subtractQuantity} variant={'outline'} size={'sm'}>
              <Minus size={15} />
            </Button>
            <p className="text-xl">{quantity}</p>
            <Button onClick={addQuantity} variant={'outline'} size={'sm'}>
              <Plus size={15} />
            </Button>
          </div>
          <h3 className="font-semibold mb-2">Subtotal</h3>
          <p className="mb-5">{price * quantity}</p>
          <Button className="w-full">Add to cart</Button>
        </div>
      </CardContent>
    </Card>
  );
}
