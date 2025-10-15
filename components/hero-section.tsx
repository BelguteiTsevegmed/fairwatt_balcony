"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    google: any;
  }
}

export function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary to-background pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.jpg"
          alt="Solar panels on a balcony"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Stats Badges */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center"></div>

          {/* Main Heading */}
          <h1 className="lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight text-balance text-5xl tracking-normal">
            Zmień swój balkon w małą elektrownię słoneczną
          </h1>

          {/* Updated subtitle */}
          <p className="text-primary-foreground/90 mb-8 leading-relaxed text-base">
            Zacznij oszczędzać na rachunkach za prąd dzięki łatwym w montażu
            panelom fotowoltaicznym na balkon.
          </p>

          <div className="flex justify-center gap-4">
            <Button size="lg" variant="primary" asChild>
              <a href="#">Zobacz produkty</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="#">Dowiedz się więcej</a>
            </Button>
          </div>

          <div className="mt-8 bg-primary-foreground/10 backdrop-blur-md rounded-lg px-6 py-4 border border-primary-foreground/20 max-w-2xl mx-auto">
            <p className="text-primary-foreground text-sm leading-relaxed">
              Prosty montaż · Wysoka wydajność · Inteligentne zarządzanie
              energią
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
