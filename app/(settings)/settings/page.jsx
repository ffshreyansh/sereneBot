import { Settings } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscriptions";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/navbar";

const SettingsPage = async () => {
  const isPro = await checkSubscription();

  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center h-full py-10 px-3 lg:px-0 lg:h-screen">
      <div className={`w-full lg:w-1/2 text-center space-y-5`}>
        <h2 className="text-3xl font-bold mt-20 lg:mt-0">{isPro ? 'Manage your subscription' : 'Get Alaine Pro'}</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio laudantium ipsam aspernatur ipsum numquam itaque reprehenderit incidunt vitae, esse earum?</p>
       
       {isPro ? (
        <div className="flex flex-col lg:flex-row items-center gap-4 justify-center w-full">
             <Card className='w-full lg:w-1/2'>
            <CardHeader>
              <CardTitle className='text-xl font-bold'>Manage your Subscription</CardTitle>
              <CardDescription>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, ea.</CardDescription>
            </CardHeader>
            {/* <CardContent>
              <span className="text-2xl font-bold">$10.99</span>
              <span className=" text-muted-foreground">/month</span>
            </CardContent> */}
            <CardFooter>
              <SubscriptionButton isPro={isPro}/>
            </CardFooter>
          </Card>
        </div>
       ) : ( <div className="flex flex-col lg:flex-row items-center gap-4 justify-center w-full">
          
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
              <Button className='w-full' variant='nav'>Subscribe</Button>
            </CardFooter>
          </Card>
          <Card className='w-full lg:w-1/2'>
            <CardHeader>
              <CardTitle className='text-xl font-bold flex item gap-2 justify-center'>Alaine Pro - Yearly 
              <Badge className={'bg-[#e87749]'}>20% Off</Badge>
              </CardTitle>
              <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, perspiciatis?</CardDescription>
            </CardHeader>
            <CardContent>
            <span className="text-2xl font-bold">$105.50</span>
              <span className=" text-muted-foreground">/year</span>
            </CardContent>
            <CardFooter>
            <Button className='w-full' variant='nav'>Subscribe</Button>
            </CardFooter>
          </Card>
          

        </div>)}
      </div>
    </div>
    </>
  );
}

export default SettingsPage;


 {/* <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro ? "You are currently on a Pro plan." : "You are currently on a free plan."}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div> */}