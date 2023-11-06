'use client';

import { Bell, Search, Sun } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Link from 'next/link';
import { Separator } from '../ui/separator';
import { Dialog, DialogContent, DialogHeader } from '../ui/dialog';
import { DialogTitle, DialogTrigger } from '@radix-ui/react-dialog';
import { Input } from '../ui/input';

export default function Nav() {
  return (
    <nav className="bg-white backdrop-blur shadow py-4 px-5 flex items-center justify-between">
      <Dialog>
        <DialogTrigger asChild>
          <button className="flex items-center gap-x-2 rounded-lg border-2 p-2 shadow hover:border-slate-900 transition-all duration-200 ease-in-out w-[200px]">
            <Search size={20} />
            <span>Search</span>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              <Input placeholder="Search page" className="mt-7" />
            </DialogTitle>
          </DialogHeader>
          <Separator />
          <div>
            <h2 className="font-semibold text-lg">Quick Page Links</h2>
          </div>
        </DialogContent>
      </Dialog>

      <div className="flex gap-3">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={'outline'} size={'icon'}>
              <Bell />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="bg-white shadow rounded-lg w-[200px] border mt-3">
            <div className="flex p-3">
              <h3 className="font-semibold">Notifications</h3>
            </div>
            <Separator />
            <ul>
              <li className="p-3 hover:bg-gray-100">
                <p className="text-sm font-semibold">New Order</p>
                <p className="text-xs">Today</p>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
        <Button variant={'outline'} size={'icon'}>
          <Sun />
        </Button>
        <Popover>
          <PopoverTrigger>
            <Avatar>
              <AvatarImage src="" alt="Admin" />
              <AvatarFallback className="bg-primary text-white">
                A
              </AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="bg-white shadow rounded-lg w-[200px] border mt-3 mr-3">
            <div className="flex items-center gap-x-3 p-4">
              <Avatar>
                <AvatarImage src="" alt="Admin" />
                <AvatarFallback className="bg-primary text-white">
                  A
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">Admin</p>
                <p className="text-sm">admin@mail.com</p>
              </div>
            </div>
            <Separator />
            <ul className="p-4 flex flex-col gap-y-3">
              <li>
                <Link href={'/admin/profile'}>Profile</Link>
              </li>
              <li>
                <Link href={'/admin/profile'}>Settings</Link>
              </li>
            </ul>
            <Separator />
            <button className="p-4 text-red-500">Sign Out</button>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
}
