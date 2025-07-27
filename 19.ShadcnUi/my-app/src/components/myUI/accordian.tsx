import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is Rohan a good boy?</AccordionTrigger>
          <AccordionContent>
            Yes he is!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is Rohan a fat boy?</AccordionTrigger>
          <AccordionContent>
            No he is not!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  