import ProductCard from '~/components/ProductCard';
import SidebarFilter from './SidebarFilter';

export default function ExplorePage() {
  return (
    <main>
      <section className="bg-gray-50 py-10 mb-10">
        <div className="container">
          <h1 className="text-3xl font-semibold">Explore All Products</h1>
        </div>
      </section>

      <section className="container flex gap-12 mb-10">
        <div className="w-[300px] hidden lg:block">
          <SidebarFilter />
        </div>
        <div className="flex-1 grid sm:grid-cols-2 xl:grid-cols-3 gap-8"></div>
      </section>
    </main>
  );
}