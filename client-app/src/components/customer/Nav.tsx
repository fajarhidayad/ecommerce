import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Button } from '~/components/ui/button';
import { Input } from '../ui/input';

export default function Nav() {
  return (
    <nav className="sticky top-0 shadow backdrop-blur z-50">
      <div className="flex justify-between items-center py-4 container">
        <Link href={'/'}>GadgetBudget</Link>
        <div className="hidden md:flex gap-6">
          <Input placeholder="Search product" className="w-[500px]" />
        </div>

        <div className="hidden md:flex gap-4">
          <Button variant={'ghost'} size={'icon'}>
            <ShoppingCart />
          </Button>
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
