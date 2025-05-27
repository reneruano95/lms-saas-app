import { PricingTable } from "@clerk/nextjs";
import React from "react";

const SubscriptionPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Subscription Plans</h1>
      <PricingTable />
    </main>
  );
};

export default SubscriptionPage;
