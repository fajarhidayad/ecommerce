import { Mail, Phone } from 'lucide-react';
import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-50 py-5 border-t">
      <div className="container flex-col sm:flex-row flex mb-5 justify-between">
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <div className="space-y-1 text-sm text-gray-500 mb-5">
            <p>221B Baker Street,</p>
            <p>London, 98898</p>
            <p>United Kingdom.</p>
          </div>
          <div className="text-gray-500 text-sm space-y-2">
            <p className="flex items-center gap-3">
              <Mail size={20} />
              example@mail.com
            </p>
            <p className="flex items-center gap-3">
              <Phone size={20} />
              (+22) 890-212-9862
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Account</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="cursor-pointer hover:underline">Help</li>
            <li className="cursor-pointer hover:underline">FAQ</li>
            <li className="cursor-pointer hover:underline">Auctions</li>
            <li className="cursor-pointer hover:underline">Discount Sale</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="cursor-pointer hover:underline">About Us</li>
            <li className="cursor-pointer hover:underline">
              Delivery Information
            </li>
            <li className="cursor-pointer hover:underline">Privacy Policy</li>
            <li className="cursor-pointer hover:underline">
              Terms & Conditions
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Social Media</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="cursor-pointer hover:underline">Facebook</li>
            <li className="cursor-pointer hover:underline">Twitter</li>
            <li className="cursor-pointer hover:underline">Instagram</li>
            <li className="cursor-pointer hover:underline">LinkedIn</li>
          </ul>
        </div>
      </div>
      <div className="container border-t pt-5">
        <p className="text-center text-slate-400 text-sm">
          &copy; {new Date().getFullYear()}. All rights reserved by Fajar
          Hidayad
        </p>
      </div>
    </footer>
  );
}
