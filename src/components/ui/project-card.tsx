"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/data";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="h-full"
    >
      <Card className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/20 dark:hover:shadow-2xl dark:hover:shadow-primary/10 h-full bg-card">
        <CardHeader className="p-0">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            data-ai-hint={project.image_hint}
          />
        </CardHeader>
        <CardContent className="flex-grow p-6">
          <CardTitle className="mb-2 font-headline">{project.title}</CardTitle>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 mt-auto">
          <div className="flex w-full justify-end gap-2">
            <Button variant="outline" asChild>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" />
                GitHub
              </a>
            </Button>
            <Button asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2" />
                Live Demo
              </a>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
