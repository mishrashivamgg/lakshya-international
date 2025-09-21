"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary/5 to-accent/5 border-t py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company Section */}
          <Card className="bg-transparent border-0 shadow-none">
            <CardContent className="pt-0 pb-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-xl">
                  <span className="text-primary-foreground font-bold text-xl">LI</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Lakshya International</h3>
                  <p className="text-xs text-muted-foreground">Empowering global exporters</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
                Expert Alibaba onboarding, VAS, digital marketing, and marketplace solutions for Indian sellers worldwide.
              </p>
              <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent/10">
                Get a Proposal
              </Button>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card className="bg-transparent border-0 shadow-none">
            <CardContent className="pt-0 pb-0">
              <h4 className="flex items-center gap-2 font-semibold mb-4 text-lg">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>Company
              </h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="flex items-center gap-2 text-sm hover:text-primary transition-colors"><MapPin className="h-4 w-4 text-muted-foreground" />About</Link></li>
                <li><Link href="/services" className="flex items-center gap-2 text-sm hover:text-primary transition-colors"><span className="w-2 h-2 bg-accent rounded-full"></span>Services</Link></li>
                <li><Link href="/pricing" className="flex items-center gap-2 text-sm hover:text-primary transition-colors"><span className="w-2 h-2 bg-primary rounded-full"></span>Pricing</Link></li>
                <li><Link href="/contact" className="flex items-center gap-2 text-sm hover:text-primary transition-colors"><span className="w-2 h-2 bg-muted rounded-full"></span>Contact</Link></li>
              </ul>
            </CardContent>
          </Card>

          {/* Stories */}
          <Card className="bg-transparent border-0 shadow-none">
            <CardContent className="pt-0 pb-0">
              <h4 className="flex items-center gap-2 font-semibold mb-4 text-lg">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>Stories
              </h4>
              <ul className="space-y-3">
                <li><Link href="/success-stories" className="flex items-center gap-2 text-sm hover:text-primary transition-colors"><span className="w-2 h-2 bg-green-500 rounded-full"></span>Success Stories</Link></li>
                <li><Link href="/seller-stories" className="flex items-center gap-2 text-sm hover:text-primary transition-colors"><span className="w-2 h-2 bg-blue-500 rounded-full"></span>Seller Stories</Link></li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact & Social */}
          <Card className="bg-transparent border-0 shadow-none">
            <CardContent className="pt-0 pb-0">
              <h4 className="flex items-center gap-2 font-semibold mb-4 text-lg">
                <span className="w-2 h-2 bg-teal-500 rounded-full"></span>Contact
              </h4>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 text-sm">
                  <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <Link href="mailto:hello@lakshyainternational.co" className="text-muted-foreground hover:text-primary transition-colors">hello@lakshyainternational.co</Link>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Phone className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <Link href="tel:+919876543210" className="text-muted-foreground hover:text-accent transition-colors">+91 98765 43210</Link>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">Plot No. 123, Sector 18<br />New Delhi, India 110018</p>
                  </div>
                </div>
              </div>
              <h5 className="font-medium mb-3 text-sm">Follow Us</h5>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-primary/5" asChild>
                  <Link href="https://facebook.com" target="_blank" rel="noopener">
                    <Facebook className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-accent/5" asChild>
                  <Link href="https://instagram.com" target="_blank" rel="noopener">
                    <Instagram className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-blue-500/5" asChild>
                  <Link href="https://linkedin.com" target="_blank" rel="noopener">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-blue-400/5" asChild>
                  <Link href="https://twitter.com" target="_blank" rel="noopener">
                    <Twitter className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-red-500/5" asChild>
                  <Link href="https://youtube.com" target="_blank" rel="noopener">
                    <Youtube className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="border-t border-border/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Lakshya International. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}