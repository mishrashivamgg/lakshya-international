"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <header className="max-w-2xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
        <p className="mt-3 text-muted-foreground">
          Tell us about your business and goals. We'll get back within 24 hours.
        </p>
      </header>

      <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Form Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Get a Proposal</CardTitle>
            <p className="text-muted-foreground">Fill out the form below and we'll reach out soon.</p>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <Input placeholder="Your full name" className="h-11" required />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <Input type="email" placeholder="you@company.com" className="h-11" required />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium mb-1">Phone</label>
                <Input type="tel" placeholder="+91 98765 43210" className="h-11" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium mb-1">What do you need help with?</label>
                <Textarea placeholder="Tell us about your Alibaba onboarding, VAS, digital marketing, design, payments, or any other marketplace needs..." rows={4} className="resize-none" />
              </div>
              <Button type="submit" size="lg" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Reach Us Anytime</CardTitle>
            <p className="text-muted-foreground">We're based in New Delhi and serve clients globally.</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Email */}
            <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
              <div className="p-2 bg-primary/10 rounded-full">
                <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/simple-envelope-icon-for-email%2c-blue-a-2159863f-20250921052214.jpg" alt="Email" width={24} height={24} />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">hello@lakshyainternational.co</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
              <div className="p-2 bg-accent/10 rounded-full">
                <Image src="https://v3b.fal.media/files/b/koala/q_xwAG0FIVFQow0-ng9ao_output.png" alt="Phone" width={24} height={24} />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">+91 98765 43210</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
              <div className="p-2 bg-secondary/10 rounded-full mt-1">
                <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/simple-location-pin-icon-for-contact%2c--c771171a-20250921052206.jpg" alt="Location" width={24} height={24} />
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-sm text-muted-foreground">New Delhi, India</p>
                <p className="text-sm text-muted-foreground">We work remotely with exporters worldwide.</p>
              </div>
            </div>

            {/* Location Image */}
            <div className="relative h-48 rounded-lg overflow-hidden mt-6">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/modern-illustration-of-new-delhi-busines-175d7c0c-20250921052226.jpg"
                alt="New Delhi Office"
                fill
                className="object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}