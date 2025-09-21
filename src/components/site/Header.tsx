"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-foreground text-background font-bold">LI</span>
          <span className="text-lg font-semibold">Lakshya International</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-primary">Home</Link>
          <Link href="/services" className="hover:text-primary">Services</Link>
          <Link href="/success-stories" className="hover:text-primary">Success Stories</Link>
          <Link href="/pricing" className="hover:text-primary">Pricing</Link>
          <Link href="/about" className="hover:text-primary">About</Link>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
        </nav>
        <div className="hidden md:block">
          <Link href="/contact">
            <Button>Get a Proposal</Button>
          </Link>
        </div>
        <Button
          variant="ghost"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          size="icon"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg">
          <nav className="flex flex-col items-center py-4 space-y-4 text-sm">
            <Link href="/" className="hover:text-primary" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/services" className="hover:text-primary" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/success-stories" className="hover:text-primary" onClick={() => setIsOpen(false)}>Success Stories</Link>
            <Link href="/pricing" className="hover:text-primary" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link href="/about" className="hover:text-primary" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/contact" className="hover:text-primary" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button>Get a Proposal</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}