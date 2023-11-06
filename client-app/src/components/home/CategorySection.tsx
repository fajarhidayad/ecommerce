import { Laptop, PcCase, Smartphone, Gamepad2, Headphones } from 'lucide-react';
import Link from 'next/link';
import React, { ReactNode } from 'react';

export function CategorySection() {
  return (
    <section className="container mb-16">
      <h1 className="text-2xl font-medium mb-5">Browse by Category</h1>
      <div className="items-center grid grid-cols-5 gap-10">
        <CategoryCard href="/" name="Laptops" icon={<Laptop size={50} />} />
        <CategoryCard href="/" name="Computers" icon={<PcCase size={50} />} />
        <CategoryCard href="/" name="Phones" icon={<Smartphone size={50} />} />
        <CategoryCard href="/" name="Consoles" icon={<Gamepad2 size={50} />} />
        <CategoryCard
          href="/"
          name="Accessories"
          icon={<Headphones size={50} />}
        />
      </div>
    </section>
  );
}

const CategoryCard = ({
  href,
  name,
  icon,
}: {
  href: string;
  name: string;
  icon: ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="rounded-lg border p-4 flex flex-col items-center shadow hover:shadow-lg transition-all duration-200"
    >
      {icon}
      <p>{name}</p>
    </Link>
  );
};
