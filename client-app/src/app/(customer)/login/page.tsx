'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { signIn } from '~/api/auth';
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

const signInFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password must contain at least 8 characters' })
    .max(32, { message: 'Password must contain at most 32 characters' }),
});

export default function LoginPage() {
  const signInMutation = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof signInFormSchema>) => {
    signInMutation.mutate(values);
  };

  return (
    <main className="bg-gray-100 flex-1">
      <div className="container">
        <section className="max-w-lg mx-auto my-10 bg-white p-10 rounded-lg shadow">
          <h1 className="text-center text-3xl font-semibold mb-5">Sign In</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-3">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email address"
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
              <p className="text-red-500">{signInMutation.error?.message}</p>
              <Button
                type="submit"
                className="w-full my-5"
                disabled={form.formState.isLoading}
              >
                {form.formState.isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
              </Button>
              <Link href={'/register'} className="underline">
                Don&apos;t have an account? Register
              </Link>
            </form>
          </Form>
        </section>
      </div>
    </main>
  );
}
