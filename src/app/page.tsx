"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  { 
    title: "Alibaba Onboarding", 
    href: "/services",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/simple-colorful-icon-illustration-for-al-1d2826ef-20250921050355.jpg"
  },
  { 
    title: "Alibaba VAS", 
    href: "/services",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/simple-colorful-icon-illustration-for-al-06cfbcba-20250921050402.jpg"
  },
  { 
    title: "Digital Marketing", 
    href: "/services",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/simple-colorful-icon-for-digital-marketi-c2368d9f-20250921050409.jpg"
  },
  { 
    title: "Logo Designing", 
    href: "/services",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/simple-colorful-icon-for-banner-designin-ed4caf0f-20250921050423.jpg" // Reused for logo
  },
  { 
    title: "Banner Designing", 
    href: "/services",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/simple-colorful-icon-for-banner-designin-ed4caf0f-20250921050423.jpg"
  },
  { 
    title: "Payment Solution", 
    href: "/services",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/simple-colorful-icon-for-payment-solutio-d14f9296-20250921050430.jpg"
  },
  { 
    title: "IndiaMART VAS Solution", 
    href: "/services",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/simple-colorful-icon-for-indiamart-vas-s-30ab8cc9-20250921050438.jpg"
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/vibrant-and-simple-illustration-of-globa-29dfa0fd-20250921050340.jpg"
          alt="B2B global trade"
          width={1920}
          height={1080}
          priority
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10 bg-background/80 backdrop-blur-md border-b border-border/50">
          <div className="container mx-auto px-4 py-20 md:py-28">
            <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight text-foreground drop-shadow-md">
              Lakshya International — Accelerating Alibaba & B2B Marketplace Growth
            </h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">
              We help exporters and manufacturers with Alibaba onboarding, VAS, digital marketing, logo & banner design, secure payments, and IndiaMART VAS.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-primary hover:bg-primary/90">Get a Proposal</Button></Link>
              <Link href="/services"><Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">Explore Services</Button></Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      </section>

      {/* Services Overview */}
      <section className="container mx-auto px-4 py-12 md:py-16 bg-card">
        <header className="max-w-4xl mb-8 text-center mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">What We Do</h2>
          <p className="mt-2 text-muted-foreground">End-to-end marketplace growth for B2B sellers.</p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, index) => (
            <Card key={s.title} className="border-border hover:shadow-xl transition-all duration-300 hover:border-primary/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center mb-2">
                  <Image
                    src={s.icon}
                    alt={`${s.title} icon`}
                    width={48}
                    height={48}
                    className="rounded-lg object-contain"
                  />
                </div>
                <CardTitle className="text-base md:text-lg text-center text-foreground">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <Link className="text-sm text-primary hover:underline block text-center hover:text-accent" href={s.href}>Learn more →</Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Company Intro */}
      <section className="container mx-auto px-4 pb-16 bg-muted/50">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold text-primary">Outcome-Driven Partner</h3>
            <p className="mt-3 text-muted-foreground">
              Inspired by leading marketplace growth teams like those at Shahi International, we focus on practical execution: verified profiles, optimized mini-sites, creative banners, and measurable lead flow.
            </p>
            <div className="mt-5 flex gap-3 justify-center">
              <Link href="/success-stories"><Button variant="outline" className="border-accent text-accent hover:bg-accent/10 hover:text-accent">Success Stories</Button></Link>
              <Link href="/seller-stories"><Button variant="accent" className="bg-accent text-accent-foreground hover:bg-accent/90">Seller Stories</Button></Link>
            </div>
          </div>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden border border-accent order-1 md:order-2">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/beautiful-simple-colorful-illustration-o-ae6bc6cf-20250921050348.jpg"
              alt="Team collaboration"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
}