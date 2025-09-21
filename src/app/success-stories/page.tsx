"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const stories = [
  {
    title: "Auto Components Exporter",
    result: "3x RFQs and 40% uplift in buyer responses within 90 days on Alibaba",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/modern%2c-colorful-illustration-of-a-div-b17ac44a-20250921051841.jpg",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/simple-colorful-icon-for-success-growth--282981c4-20250921051847.jpg",
    metric: "+300% RFQ Growth"
  },
  {
    title: "Textiles Manufacturer",
    result: "Ranked in top 3 for 12 product keywords; secured 7 global buyers",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/colorful-modern-illustration-of-textiles-94bf7069-20250921051855.jpg",
    icon: "https://v3b.fal.media/files/b/lion/XqFQsk0cWF4pUKw35fGE__output.png",
    metric: "7 New Buyers"
  },
  {
    title: "Engineering Goods",
    result: "Reduced CAC by 32% via targeted ads + optimized mini-site banners",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/modern-illustration-of-engineering-goods-a6e1e302-20250921051910.jpg",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/simple-icon-for-cost-reduction%2c-dollar-820bb6d4-20250921051918.jpg",
    metric: "-32% CAC"
  },
  {
    title: "Handicrafts Seller",
    result: "Doubled international inquiries with custom banner designs and VAS",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/vibrant-illustration-of-handicrafts-arti-2bc79ee9-20250921051925.jpg",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/simple-icon-for-inquiry-growth%2c-chat-b-48163364-20250921051932.jpg",
    metric: "2x Inquiries"
  },
  {
    title: "Electronics Exporter",
    result: "IndiaMART leads up 50% after profile optimization and marketing sync",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/modern-colorful-illustration-of-electron-a0fb922b-20250921051940.jpg",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/simple-icon-for-lead-generation%2c-light-4ed0e6d4-20250921051948.jpg",
    metric: "+50% Leads"
  },
];

export default function SuccessStoriesPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <header className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Success Stories</h1>
        <p className="mt-3 text-muted-foreground">Real results achieved by our clients on Alibaba, IndiaMART, and beyond.</p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((s) => (
          <Card key={s.title} className="overflow-hidden hover:shadow-xl transition-all group">
            <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10">
              <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute top-4 left-4">
                <Image src={s.icon} alt="Story icon" width={32} height={32} className="rounded-full" />
              </div>
            </div>
            <CardHeader className="p-6">
              <Badge className="mb-2 bg-primary/80">{s.metric}</Badge>
              <CardTitle>{s.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-muted-foreground">{s.result}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}