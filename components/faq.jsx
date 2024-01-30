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
        <h3 className='text-2xl lg:text-3xl font-bold'>Frequently Asked <span className='text-[#f364b8]'>Questions</span> </h3>
      </div>
      <div>

        <Accordion type="single" collapsible className="w-full lg:w-2/3 mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Lainie?</AccordionTrigger>
            <AccordionContent>
              Lainie is an AI-powered chatbot designed to provide mental health support and companionship through empathetic conversations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How does Lainie work? </AccordionTrigger>
            <AccordionContent>
              Lainie utilizes advanced natural language processing to understand and respond to your inputs, creating personalized and supportive interactions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is Lainie a substitute for professional therapy?</AccordionTrigger>
            <AccordionContent>
              No, Lainie is not a replacement for professional therapy. She’s  designed to offer support and companionship but is not a licensed mental health professional.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is my privacy protected when using Lainie?</AccordionTrigger>
            <AccordionContent>
              Yes, privacy is our top priority. We ensure a secure and confidential space for you to express yourself without fear, judgment or your conversation becoming public. You have complete control and can delete your profile at any time
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Can I use Lainie anonymously?</AccordionTrigger>
            <AccordionContent>
              Absolutely. Lainie allows users to engage anonymously, providing a judgment-free environment for open expression.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>How does Lainie provide personalized guidance?</AccordionTrigger>
            <AccordionContent>
              Lainie adapts her responses based on your conversation history, tailoring interactions to your unique needs and providing insightful reflections.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Is Lainie available 24/7?</AccordionTrigger>
            <AccordionContent>
              Yes, Lainie is available around the clock, providing continuous support whenever you need it.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>Can Lainie help with specific mental health conditions?</AccordionTrigger>
            <AccordionContent>
              While Lainie can offer general support, it is not designed to diagnose or treat specific mental health conditions. For such concerns, it's recommended to consult with a mental health professional.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>How does Lainie evolve with each interaction?</AccordionTrigger>
            <AccordionContent>
            Lainie incorporates machine learning to continuously learn and improve, making each subsequent interaction more insightful and meaningful.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>Is there a cost associated with using Lainie?</AccordionTrigger>
            <AccordionContent>
            In other to keep our servers running so we can support you around the clock, we have implemented a premium package so you can continue to have your much needed interaction
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger>Can I use Lainie alongside professional therapy?</AccordionTrigger>
            <AccordionContent>
            Yes, Lainie can be used as a supplemental support tool, but it's essential to consult with your therapist regarding its integration into your mental health plan.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger>Is Lainie suitable for all age groups?</AccordionTrigger>
            <AccordionContent>
            While designed for adults, Lainie is open to users of various age groups. Parental guidance is recommended for younger users.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-13">
            <AccordionTrigger>Can I provide feedback on Lainie's responses?</AccordionTrigger>
            <AccordionContent>
            Yes, user feedback is valuable for improving Lainie's capabilities. You can provide feedback within the chat interface.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-14">
            <AccordionTrigger>How is Lainie different from other mental health apps?</AccordionTrigger>
            <AccordionContent>
            Lainie stands out with its emphasis on empathetic conversations, continuous learning, and community connections, creating a unique virtual companion.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-15">
            <AccordionTrigger>Can I trust the advice provided by Lainie?</AccordionTrigger>
            <AccordionContent>
            Lainie offers support and guidance based on general principles, but it's important to consult with a professional for personalized advice.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-16">
            <AccordionTrigger>Can I provide feedback on Lainie's responses?</AccordionTrigger>
            <AccordionContent>
            Yes, user feedback is valuable for improving Lainie's capabilities. You can provide feedback within the chat interface.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-17">
            <AccordionTrigger>Is Lainie available in multiple languages?</AccordionTrigger>
            <AccordionContent>
            Currently Lainie is only available in English with plans for expansion based on user demand.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-18">
            <AccordionTrigger>How do I start using Lainie?</AccordionTrigger>
            <AccordionContent>
            Simply create an account  and start a conversation. It's that easy to begin your journey towards mental well-being.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-19">
            <AccordionTrigger>Where can I find additional information about Lainie?</AccordionTrigger>
            <AccordionContent>
            For more details, updates, and community discussions, stay connected through the Lainie website and official social media channels.
            </AccordionContent>
          </AccordionItem>

        </Accordion>

      </div>
    </div>
  )
}

export default FAQ