"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { ParticlesBackground } from "../ui/particles";

type HeroContentProps = {
  welcomeMessage: string;
};

export function HeroContent({ welcomeMessage }: HeroContentProps) {
  return (
    <section id="hero" className="relative w-full overflow-hidden min-h-[calc(100vh-3.5rem)] flex items-center dark:bg-transparent bg-gradient-to-br from-accent/50 via-background to-secondary/30">
      <ParticlesBackground />
      <div className="container relative z-10 grid md:grid-cols-2 gap-8 items-center py-16 md:py-24">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-destructive">
              Saksham Umate
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              An aspiring Data Scientist with a passion for uncovering insights from data and building predictive models.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 w-full max-w-md rounded-lg border border-border/40 bg-accent/30 dark:bg-accent/50 p-4 text-sm text-accent-foreground shadow-sm backdrop-blur-sm flex items-start gap-3"
          >
            <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="flex-grow">{welcomeMessage}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
          >
            <Button asChild size="lg" className="h-14 px-10 text-lg">
              <Link href="#projects">
                <ArrowDown className="mr-2 h-5 w-5" />
                View My Work
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="h-14 px-10 text-lg">
              <a href="/resume.pdf" download="JaneDoe-Resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
        <div className="hidden md:flex items-center justify-center">
           <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
            className="relative"
          >
            {/* <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent via-destructive to-primary opacity-20 blur-3xl"></div> */}
            <Image
              src="https://drive.google.com/uc?export=view&id=1HFLPW365mENbR-It_Fg3VhS_kRiTrI89"
              alt="Portrait of Saksham Umate"
              width={500}
              height={500}
              className="rounded-full border-4 border-white/80 dark:border-secondary shadow-2xl object-cover"
              data-ai-hint="professional portrait"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
