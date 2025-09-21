"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    region: "India",
    price: "₹24,999/mo",
    features: [
      "IndiaMART VAS guidance",
      "Lead response playbooks",
      "Mini-site banner set",
      "Monthly analytics report",
    ],
  },
  {
    region: "International",
    price: "$499/mo",
    features: [
      "Alibaba onboarding + audit",
      "Keyword ads advisory",
      "Global payment consulting",
      "Bi-weekly performance review",
    ],
  },
];

export default function PricingPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <header className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Pricing Plans</h1>
        <p className="mt-3 text-muted-foreground">Simple plans for India-focused and international sellers.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {plans.map((p) => (
          <Card key={p.region} className="flex flex-col">
            <CardHeader>
              <CardTitle>{p.region}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full">Choose {p.region}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}