"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const sellers = [
  {
    name: "Sharma Engineering",
    quote: "Lakshya International streamlined our Alibaba onboarding and RFQ responses. We now close 2-3 new buyers monthly.",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/professional-avatar-illustration-for-sha-4a6cf867-20250921051955.jpg",
    role: "CEO, Sharma Engineering",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/quote-star-rating-icon%2c-five-stars-in--6989594f-20250921052121.jpg"
  },
  {
    name: "Ravi Textiles",
    quote: "The mini-site redesign and banner creatives drastically improved inquiries.",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/professional-avatar-for-ravi-textiles-ma-145dfcb1-20250921052004.jpg",
    role: "Marketing Manager, Ravi Textiles",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/quote-star-rating-icon%2c-five-stars-in--6989594f-20250921052121.jpg"
  },
  {
    name: "Arun Auto Parts",
    quote: "Digital marketing + VAS guidance reduced our lead costs while improving quality.",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/avatar-for-arun-auto-parts-owner%2c-conf-82dca0b0-20250921052011.jpg",
    role: "Owner, Arun Auto Parts",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/thumbs-up-quote-icon%2c-vibrant-green-th-d47c6db5-20250921052129.jpg"
  },
  {
    name: "Priya Handicrafts",
    quote: "Their design team created banners that doubled our click-through rates on Alibaba.",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/avatar-for-priya-handicrafts-founder%2c--d5dde827-20250921052152.jpg",
    role: "Founder, Priya Handicrafts",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/heart-quote-icon-for-positive-testimonia-1c246d74-20250921052136.jpg"
  },
  {
    name: "Vikram Electronics",
    quote: "Payment solutions integrated seamlessly, boosting buyer confidence and conversions.",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/avatar-for-vikram-electronics-operations-c99b0526-20250921052200.jpg",
    role: "Operations Head, Vikram Electronics",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/checkmark-quote-icon%2c-blue-check-in-ci-11200e0b-20250921052144.jpg"
  },
];

export default function SellerStoriesPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <header className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Seller Stories</h1>
        <p className="mt-3 text-muted-foreground">Hear directly from the teams we support every day.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sellers.map((s) => (
          <Card key={s.name} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-col items-center text-center pb-4">
              <div className="relative mb-3">
                <Avatar className="h-20 w-20 border-2 border-accent">
                  <AvatarImage src={s.avatar} />
                  <AvatarFallback>{s.name[0]}</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 right-4">
                  <Image src={s.icon} alt="Quote icon" width={24} height={24} className="bg-card rounded-full p-1 shadow-md" />
                </div>
              </div>
              <CardTitle className="text-lg">{s.name}</CardTitle>
              <p className="text-xs text-muted-foreground">{s.role}</p>
            </CardHeader>
            <CardContent className="italic text-sm text-muted-foreground p-4 pt-0">
              "{s.quote}"
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}