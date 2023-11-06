import {
  Zap,
  CircleDollarSign,
  BadgePercent,
  Hourglass,
  PhoneCall,
} from 'lucide-react';
import React from 'react';

export function OfferSection() {
  return (
    <section className="container mb-10">
      <h1 className="text-2xl font-medium mb-5 text-center">
        Why People Chose Us
      </h1>
      <div className="grid grid-cols-5 gap-8">
        <div className="border rounded-md p-5 flex flex-col items-center gap-5">
          <Zap size={50} />
          <p className="font-medium">Fast & Secure Delivery</p>
        </div>
        <div className="border rounded-md p-5 flex flex-col items-center gap-5">
          <CircleDollarSign size={50} />
          <p className="font-medium">Money Back Guarantee</p>
        </div>
        <div className="border rounded-md p-5 flex flex-col items-center gap-5">
          <BadgePercent size={50} />
          <p className="font-medium">Discount Products</p>
        </div>
        <div className="border rounded-md p-5 flex flex-col items-center gap-5">
          <Hourglass size={50} />
          <p className="font-medium">24 Hour Return Policy</p>
        </div>
        <div className="border rounded-md p-5 flex flex-col items-center gap-5">
          <PhoneCall size={50} />
          <p className="font-medium">Customer Support</p>
        </div>
      </div>
    </section>
  );
}
