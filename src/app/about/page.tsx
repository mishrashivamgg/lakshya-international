"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, CheckCircle, Target, Calendar, MapPin, Users2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-accent/5 to-transparent py-20 md:py-32">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 drop-shadow-lg">
            About Lakshya International
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Your dedicated partner in B2B marketplace success. We empower Indian exporters to conquer global trade with expert execution and innovative strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                Our Services <CheckCircle className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 hover:text-accent">
                Get in Touch <MapPin className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Mission & Vision Stats */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="space-y-2 p-6 rounded-xl bg-card border border-border/50 hover:shadow-xl transition-all duration-300">
            <Users2 className="h-12 w-12 text-primary mx-auto mb-2" />
            <h3 className="text-3xl font-bold text-foreground">50+</h3>
            <p className="text-muted-foreground">Exporters Served</p>
          </div>
          <div className="space-y-2 p-6 rounded-xl bg-card border border-border/50 hover:shadow-xl transition-all duration-300">
            <Target className="h-12 w-12 text-accent mx-auto mb-2" />
            <h3 className="text-3xl font-bold text-foreground">10+</h3>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div className="space-y-2 p-6 rounded-xl bg-card border border-border/50 hover:shadow-xl transition-all duration-300">
            <Calendar className="h-12 w-12 text-secondary mx-auto mb-2" />
            <h3 className="text-3xl font-bold text-foreground">2020</h3>
            <p className="text-muted-foreground">Founded</p>
          </div>
          <div className="space-y-2 p-6 rounded-xl bg-card border border-border/50 hover:shadow-xl transition-all duration-300">
            <Users className="h-12 w-12 text-muted mx-auto mb-2" />
            <h3 className="text-3xl font-bold text-foreground">100%</h3>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
        </section>

        {/* Team Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Dedicated Team</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our experts bring deep knowledge in Alibaba ecosystems, digital marketing, and creative design to help your business thrive internationally.
            </p>
            <ul className="space-y-3 text-base">
              <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-accent text-primary" /> Certified Alibaba Partners</li>
              <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-accent" /> Google Ads & SEO Specialists</li>
              <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-accent" /> UI/UX Designers for Global Markets</li>
              <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-accent" /> Secure Payment & Compliance Pros</li>
            </ul>
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground mt-4">
                Join Our Journey
              </Button>
            </Link>
          </div>
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden border-2 border-accent/30 order-1 md:order-2 shadow-2xl">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/74bfef1b-ea38-4767-8a1c-e53d45b80f1f/generated_images/vibrant-colorful-illustration-of-a-diver-9b71d486-20250921053650.jpg"
              alt="Our dynamic team collaborating"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>

        {/* Values Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Core Values That Drive Us</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-border/50 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 group bg-gradient-to-br from-card to-muted/20">
              <CardHeader className="items-center text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <Target className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">Execution Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">We deliver rapid results with data-driven strategies, ensuring your marketplace profile converts from day one.</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 hover:shadow-2xl hover:border-accent/50 transition-all duration-300 group bg-gradient-to-br from-card to-muted/20">
              <CardHeader className="items-center text-center pb-4">
                <div className="w-16 h-16 bg-accent/10 group-hover:bg-accent/20 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <CheckCircle className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-2xl group-hover:text-accent transition-colors">Full Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">Every step is trackable— from leads generated to ROI achieved, with monthly reports you can trust.</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 hover:shadow-2xl hover:border-secondary/50 transition-all duration-300 group bg-gradient-to-br from-card to-muted/20">
              <CardHeader className="items-center text-center pb-4">
                <div className="w-16 h-16 bg-secondary/10 group-hover:bg-secondary/20 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <Users className="h-8 w-8 text-secondary group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-2xl group-hover:text-secondary transition-colors">True Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">We grow with you, providing ongoing support to adapt and scale your B2B presence worldwide.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="relative max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Growth Journey</h2>
          <div className="relative space-y-12">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary/30 to-accent/30 hidden md:block" />
            <div className="space-y-12 md:space-y-16">
              <div className="flex items-center gap-6 md:gap-8 relative">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-primary/10 border-2 border-primary rounded-full flex items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2 z-10">
                  <Calendar className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <div className="md:ml-16 p-4 bg-card rounded-xl shadow-md border border-border/20 md:w-3/4">
                  <h3 className="font-bold text-xl text-foreground">2020: Foundations Laid</h3>
                  <p className="text-muted-foreground mt-2">
                    Launched during global trade disruptions, focusing on Alibaba onboarding for first textile and auto exporters.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 md:gap-8 relative">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-accent/10 border-2 border-accent rounded-full flex items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2 z-10">
                  <Users className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                </div>
                <div className="md:ml-16 p-4 bg-card rounded-xl shadow-md border border-border/20 md:w-3/4">
                  <h3 className="font-bold text-xl text-foreground">2022: Full Ecosystem</h3>
                  <p className="text-muted-foreground mt-2">
                    Expanded to VAS, digital marketing, design services, and payment integrations for comprehensive B2B support.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 md:gap-8 relative">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-secondary/10 border-2 border-secondary rounded-full flex items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2 z-10">
                  <Target className="h-6 w-6 md:h-8 md:w-8 text-secondary" />
                </div>
                <div className="md:ml-16 p-4 bg-card rounded-xl shadow-md border border-border/20 md:w-3/4">
                  <h3 className="font-bold text-xl text-foreground">2024: Scaling Globally</h3>
                  <p className="text-muted-foreground mt-2">
                    Reached 50+ clients across industries, with IndiaMART solutions and ongoing innovation in export compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/success-stories">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                See Our Success Stories
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}