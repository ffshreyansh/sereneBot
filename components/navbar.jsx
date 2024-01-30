'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { MenuIcon } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useAuth } from '@clerk/nextjs';

const Navbar = () => {
  const pathname = usePathname();
  const isCurrentPage = (path) => pathname === path;
  const {isSignedIn} = useAuth();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 20px',
  });
  const [hasScrolled, setHasScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
  const scrollToElement = (elementId) => {
    const targetElement = document.getElementById(elementId);
  
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  return (
    <motion.div ref={ref} className={`flex items-center justify-between py-4 bg-white fixed max-w-screen-xl w-full top-0 lg:top-5 z-50 rounded-none lg:rounded-lg pr-3 lg:pr-4 pl-3 lg:pl-8 left-1/2 right-1/2 -translate-x-1/2 ${hasScrolled ? 'shd transition-all' : 'transition-all'}`}
      transition={{ duration: 0.2 }}
    >
      <Link href={'/'} className={`font-bold text-3xl`}>
        <img src="/serene.png" alt="lainie logo" width={'30%'} />
      </Link>
      <div className='items-center justify-between gap-10 font-semibold hidden lg:flex'>
        <span  onClick={()=> scrollToElement('home')} className={isCurrentPage('/') ? 'text-[#f05aad]' : 'text-black hover:text-[#f05aad] transition-all'}>Home</span>
        <Link href={'/'} onClick={()=> scrollToElement('about')} className={isCurrentPage('/about') ? 'text-[#f05aad]' : 'text-black hover:text-[#f05aad] transition-all'}>About</Link>
        <Link href={'/'} onClick={()=> scrollToElement('faq')} className={isCurrentPage('/faq') ? 'text-[#f05aad]' : 'text-black hover:text-[#f05aad] transition-all'}>FAQs</Link>
        <Link href={'/'} onClick={()=> scrollToElement('contact')} className={isCurrentPage('/contact') ? 'text-[#f05aad]' : 'text-black hover:text-[#f05aad] transition-all'}>Contact</Link>
        <Link href={isSignedIn ? "/chat" : "/sign-in"}>
          <Button variant='nav' size='xl'>{isSignedIn ? 'Chat Bot' : 'Log In'}</Button>
        </Link>
      </div>
      <Sheet className='inline lg:hidden'>
        <SheetTrigger className='inline lg:hidden'>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent className="w-full z-10  " side='top'>
          <div className='flex flex-col items-center justify-between gap-10 font-semibold '>
            <Link href={'/'} className={isCurrentPage('/') ? 'text-[#f05aad]' : 'text-black hover:text-[#f05aad] transition-all'}>Home</Link>
            <Link href={'/about'} className={isCurrentPage('/about') ? 'text-[#f05aad]' : 'text-black hover:text-[#f05aad] transition-all'}>About</Link>
            <Link href={'/faq'} className={isCurrentPage('/faq') ? 'text-[#f05aad]' : 'text-black hover:text-[#f05aad] transition-all'}>FAQs</Link>
            <Link href={'/contact'} className={isCurrentPage('/contact') ? 'text-[#f05aad]' : 'text-black hover:text-[#f05aad] transition-all'}>Contact</Link>
            <Link href={'/sign-in'}>
              <Button variant='nav' size='xl'>{isSignedIn ? 'Chat Bot' : 'Log In'}</Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>

    </motion.div>
  )
}

export default Navbar;
