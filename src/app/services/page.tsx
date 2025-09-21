"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Alibaba Onboarding",
    desc:
      "End-to-end setup of your Alibaba.com supplier profile, company verification, product listings, and RFQ response playbooks.",
  },
  {
    title: "Alibaba VAS (Value Added Services)",
    desc:
      "Strategic VAS recommendations like keyword ads, mini-site optimization, showcase products, and traffic growth plans.",
  },
  {
    title: "Digital Marketing",
    desc:
      "Performance marketing across Google, Meta, and B2B channels with analytics-driven landing pages and lead funnels.",
  },
  {
    title: "Logo Designing",
    desc:
      "Professional brand identity and logo systems tailored for global B2B buyers to build trust and recall.",
  },
  {
    title: "Banner Designing",
    desc:
      "High-converting storefront, campaign, and product banners for Alibaba and other marketplaces.",
  },
  {
    title: "Payment Solution",
    desc:
      "Consulting on secure payment flows for international buyers: gateways, escrow, compliance, and payouts.",
  },
  {
    title: "IndiaMART VAS Solution",
    desc:
      "Lead generation and profile optimization for IndiaMART with paid VAS mapping and category strategy.",
  },
];

const serviceIcons = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/simple-colorful-icon-illustration-for-al-1d2826ef-20250921050355.jpg", // Onboarding
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/simple-colorful-icon-illustration-for-al-06cfbcba-20250921050402.jpg", // VAS
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/simple-colorful-icon-for-digital-marketi-c2368d9f-20250921050409.jpg", // Marketing
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/simple-colorful-icon-for-banner-designin-ed4caf0f-20250921050423.jpg", // Logo
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/simple-colorful-icon-for-banner-designin-ed4caf0f-20250921050423.jpg", // Banner
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/simple-colorful-icon-for-payment-solutio-d14f9296-20250921050430.jpg", // Payment
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/simple-colorful-icon-for-indiamart-vas-s-30ab8cc9-20250921050438.jpg", // IndiaMART
];

export default function ServicesPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <header className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Our Services</h1>
        <p className="mt-3 text-muted-foreground">
          Grow faster with our end-to-end marketplace solutions for exporters and manufacturers.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Card key={s.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <div className="flex-shrink-0">
                <Image src={serviceIcons[i % serviceIcons.length]} alt={`${s.title} icon`} width={40} height={40} className="rounded-md object-cover" />
              </div>
              <div>
                <CardTitle className="text-lg">{s.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
              <Link href="/contact"><Button variant="outline" className="w-full">Request Proposal</Button></Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/pricing">
          <Button size="lg">See Pricing Plans</Button>
        </Link>
      </div>
    </section>
  );
}