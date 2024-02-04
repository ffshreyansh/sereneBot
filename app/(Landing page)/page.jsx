'use client'

import AboutComponent from '@/components/about'
import Contact from '@/components/contact'
import ContentLaine from '@/components/content'
import FAQ from '@/components/faq'
import Home from '@/components/home'
import Navbar from '@/components/navbar'
import { useClerk } from '@clerk/nextjs'

export default function LandingPage() {
  const clerk = useClerk()

  return (
    <div>
      <div className="px-3 lg:px-0">
        <Navbar />
        <Home />
        <AboutComponent />
        <ContentLaine />
        <FAQ />
        <Contact />
      </div>
    </div>
  )
}
