import Link from 'next/link';
import { Button } from '~/components/ui/button';

export default function Nav() {
  return (
    <nav className="sticky top-0 shadow backdrop-blur z-50">
      <div className="flex justify-between items-center py-4 container">
        <Link href={'/'}>GadgetBudget</Link>
        <ul className="hidden md:flex gap-6">
          <li>
            <Link href={'/explore'}>Explore</Link>
          </li>
          <li>
            <Link href={'/'}>On Sale</Link>
          </li>
          <li>
            <Link href={'/'}>Auctions</Link>
          </li>
          <li>
            <Link href={'/'}>Sold Items</Link>
          </li>
        </ul>

        <div className="hidden md:flex gap-4">
          <Button asChild>
            <Link href={'/login'}>Login</Link>
          </Button>
          <Button variant={'outline'} asChild>
            <Link href={'/register'}>Register</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
