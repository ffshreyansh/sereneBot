import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscriptions";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/navbar";
import axios from "axios";
// import { useState } from "react";

const SettingsPage = async () => {

  const isPro = await checkSubscription();

  return (
    <>
      <Navbar />
      <SubscriptionButton isPro={isPro}/>
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