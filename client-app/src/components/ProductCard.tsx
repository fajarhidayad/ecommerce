import Image from 'next/image';
import Link from 'next/link';
import { Product } from '~/api/product';
import { Card, CardContent } from './ui/card';
import { currency } from '~/utils/currency';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="hover:cursor-pointer">
      <Link href={`/products/${product.id}`}>
        <CardContent>
          <div className="bg-gray-50 rounded-md h-48 my-5 overflow-hidden bg-cover">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
            />
          </div>
          <h3 className="text-xl font-medium hover:underline">
            {product.name}
          </h3>
          <p className="text-gray-500">{currency.format(product.price)}</p>
        </CardContent>
      </Link>
    </Card>
  );
}
