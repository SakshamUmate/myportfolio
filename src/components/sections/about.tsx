import { SKILLS, EDUCATION } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50 dark:bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">About Me</h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I am a driven and analytical data science student with a passion for extracting meaningful insights from complex datasets. I enjoy tackling challenging problems, applying statistical methods, and building machine learning models to make data-driven decisions. I am always excited to learn new techniques and contribute to impactful projects.
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-headline mb-4">Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {SKILLS.map((skill) => (
                  <Card key={skill.name} className="flex flex-col items-center justify-center p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
                    <skill.icon className="h-8 w-8 mb-2 text-primary" />
                    <p className="text-sm font-medium">{skill.name}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
            <h3 className="text-2xl font-bold font-headline mb-8 text-center">Education</h3>
            <div className="relative border-l-2 border-primary/20">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="mb-8 ml-6">
                   <span className="absolute -left-[11px] flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 ring-background">
                    <svg className="h-3 w-3 text-primary-foreground" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z"/>
                    </svg>
                   </span>
                   <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>{edu.degree}</CardTitle>
                        <time className="text-sm font-normal leading-none text-muted-foreground">{edu.period}</time>
                      </div>
                      <CardDescription>{edu.school}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base font-normal text-foreground/80">{edu.description}</p>
                    </CardContent>
                   </Card>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
