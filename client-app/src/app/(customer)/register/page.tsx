'use client';

import Link from 'next/link';
import React from 'react';
import { Button } from '~/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const signUpSchemaForm = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password must contain at least 8 characters' })
    .max(32, { message: 'Password must contain at most 32 characters' }),
  firstname: z
    .string()
    .min(2, { message: 'First name must contain at least 2 characters' })
    .max(32, { message: 'First name must contain at most 32 characters' }),
  lastname: z
    .string()
    .min(2, { message: 'Last name must contain at least 2 characters' })
    .max(32, { message: 'Last name must contain at most 32 characters' }),
});

export default function RegisterPage() {
  const form = useForm<z.infer<typeof signUpSchemaForm>>({
    resolver: zodResolver(signUpSchemaForm),
  });

  const onSubmit = (values: z.infer<typeof signUpSchemaForm>) => {};

  return (
    <main className="bg-gray-100 flex-1">
      <section className="container max-w-lg mx-auto my-10 p-10 rounded-lg shadow bg-white">
        <h1 className="text-center text-3xl font-semibold mb-5">Sign Up</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email address"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full my-5">
              Sign up
            </Button>
            <Link href={'/login'} className="underline">
              Already have an account? Sign in
            </Link>
          </form>
        </Form>
      </section>
    </main>
  );
}
