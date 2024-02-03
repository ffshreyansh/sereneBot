'use client'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
import { Badge } from './ui/badge'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import axios from 'axios'
import { useProModal } from '@/lib/hooks/use-pro-modal'


const ProModal = () => {

  const [loading, setLoading] = useState(false)
    const proModal = useProModal();

  const onSubscribeMonthly = async () =>{
    try {
      setLoading(true)
      const response = axios.get('/api/stripemon');

      window.location.href = (await response).data.url;
    } catch (error) {
        console.log('STRIPE Client error', error)
    }finally{
      setLoading(false);
    }
  }
  const onSubscribeYearly = async ()=>{
    try {
      setLoading(true)
      const response = axios.get('/api/stripeann');

      window.location.href = (await response).data.url;
    } catch (error) {
        console.log('STRIPE Client error', error)
    }finally{
      setLoading(false);
    }
  }

  return (
    <Dialog open={proModal.isOpen}onOpenChange={proModal.onClose} className=' max-w-2xl'>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className='flex items-center justify-center gap-2'>Upgrade to Alaine <Badge className={'bg-[#e87749]'}>PRO</Badge></DialogTitle>
      <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
      <div className="flex flex-col lg:flex-row items-center gap-4 justify-center w-full">
          
          <Card className='w-full lg:w-1/2'>
             <CardHeader>
               <CardTitle className='text-xl font-bold'>Alaine Pro - Monthly</CardTitle>
               <CardDescription>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, ea.</CardDescription>
             </CardHeader>
             <CardContent>
               <span className="text-2xl font-bold">$10.99</span>
               <span className=" text-muted-foreground">/month</span>
             </CardContent>
             <CardFooter>
               <Button className='w-full' variant='nav' onClick={onSubscribeMonthly} disabled={loading}>Subscribe</Button>
             </CardFooter>
           </Card>
           <Card className='w-full lg:w-1/2'>
             <CardHeader>
               <CardTitle className='text-xl font-bold flex item gap-2 justify-center'>Alaine Pro - Yearly 
               <Badge className={'bg-[#e87749]'}>20% Off</Badge>
               </CardTitle>
               <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit.</CardDescription>
             </CardHeader>
             <CardContent>
             <span className="text-2xl font-bold">$105.50</span>
               <span className=" text-muted-foreground">/year</span>
             </CardContent>
             <CardFooter>
             <Button className='w-full' variant='nav' onClick={onSubscribeYearly} disabled={loading}>Subscribe</Button>
             </CardFooter>
           </Card>
           
 
         </div>
          </DialogDescription>

    </DialogHeader>
  </DialogContent>
</Dialog>

  )
}

export default ProModal