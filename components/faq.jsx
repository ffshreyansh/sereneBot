import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const FAQ = () => {
  return (
    <div className='w-full py-20 px-3 flex flex-col gap-8'>
        <div className='flex items-center justify-center text-center mx-auto'>
            <h3 className='text-2xl lg:text-3xl font-bold'>Frequently Asked <span className=''>Questions</span> </h3>
        </div>
        <div>
            
         <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus repellendus, ipsam error rerum nemo, tenetur, doloribus dolore provident cumque ullam odit eligendi assumenda inventore sequi ex. Eum sequi molestiae reprehenderit!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque perferendis, fugiat quas vero error officia id odio voluptatem placeat facere, iste aut adipisci velit reprehenderit qui quo sequi aperiam voluptatum?
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus assumenda cum facilis expedita architecto quis, aliquam quaerat doloribus delectus debitis repudiandae obcaecati quam veniam consequuntur mollitia autem tempore ducimus eum dolorem eligendi. Earum maiores debitis culpa officiis. Corporis dolores, facere dolor, tempora nisi debitis distinctio temporibus veniam blanditiis mollitia maxime!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    
    </div>
    </div>
  )
}

export default FAQ