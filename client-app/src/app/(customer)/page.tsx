import Link from 'next/link';
import { getProducts } from '~/api/product';
import ProductCard from '~/components/ProductCard';
import {
  CategorySection,
  OfferSection,
  SubscribeSection,
} from '~/components/home';
import { Avatar, AvatarFallback } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardFooter } from '~/components/ui/card';

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="mt-5">
      <section className="container rounded-lg bg-slate-100 px-10 py-7 flex mb-8">
        <div className="w-1/3 space-y-3">
          <h1 className="text-3xl font-medium">
            Explore the Latest Products with Our Best Deals
          </h1>
          <h2 className="text-xl">Discover Our Sale Product Today</h2>
          <Button asChild>
            <Link href={'/sale'}>Check it Out!</Link>
          </Button>
        </div>
      </section>

      <CategorySection />

      {/* Product Section */}
      <section className="container mb-10">
        <h1 className="text-2xl font-medium mb-5">Explore Our Products</h1>
        <div className="grid grid-cols-4 gap-7 mb-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center">
          <Button size={'lg'} variant={'secondary'}>
            View All Products
          </Button>
        </div>
      </section>

      <section className="bg-gray-50 mb-10 py-8">
        <div className="container">
          <h1 className="text-2xl font-medium mb-5">Testimonials</h1>
          <div className="grid grid-cols-3 gap-8">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
      </section>

      <OfferSection />
      <SubscribeSection />
    </main>
  );
}

const TestimonialCard = () => {
  return (
    <Card>
      <CardContent className="mt-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          tenetur dolor obcaecati quam nihil incidunt laudantium nemo sit
          asperiores rem.
        </p>
      </CardContent>
      <CardFooter>
        <Avatar className="mr-3">
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-xs text-slate-400">CEO of Company</p>
          <p className="font-medium">John Doe</p>
        </div>
      </CardFooter>
    </Card>
  );
};
