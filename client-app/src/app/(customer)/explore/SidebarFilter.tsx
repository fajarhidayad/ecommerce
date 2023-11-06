'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import { Button } from '~/components/ui/button';
import { Label } from '~/components/ui/label';
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group';

export default function SidebarFilter() {
  return (
    <aside className="sticky top-24">
      <h2 className="text-2xl mb-3 font-semibold">Filters</h2>
      <Accordion type="multiple" className="mb-5">
        <AccordionItem value="category">
          <AccordionTrigger>
            <h3 className="text-xl">Category</h3>
          </AccordionTrigger>
          <AccordionContent className="AccordionContent">
            <p>Category Item</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger>
            <h3 className="text-xl">Price</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p>Category Item</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="conditions">
          <AccordionTrigger>
            <h3 className="text-xl">Conditions</h3>
          </AccordionTrigger>
          <AccordionContent>
            <RadioGroup defaultValue="all">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all">All</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="new" id="new" />
                <Label htmlFor="new">New</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="used" id="used" />
                <Label htmlFor="used">Used</Label>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button variant={'outline'} className="mr-3">
        Reset
      </Button>
      <Button>Apply</Button>
    </aside>
  );
}
