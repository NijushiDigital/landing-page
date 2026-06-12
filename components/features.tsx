'use client'

import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    logo: 'https://rukogamer.com/favicon.ico',
    title: 'RukoGamer',
    description: 'Complete top-up website for the Indonesian region with low prices and fast processing',
    link: 'https://rukogamer.com',
    github: null
  },
  {
    logo: 'https://malasngoding.dev/favicon.ico',
    title: 'malasngoding.dev',
    description: 'SaaS website to create unlimited custom subdomains and shortlinks!',
    link: 'https://malasngoding.dev',
    github: null // kalau gak ada github, set null
  },
  // ... tambah project lain
]

export function Features() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-4 py-15">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Projects</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Nijushi Digital always provides and creates projects and services that can help many parties, and here are some of the ones we have worked on:
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white border border-border rounded-lg p-8 hover:shadow-md transition group flex flex-col"
          >
            {/* Logo */}
            <div className="mb-4">
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                width={48}
                height={48}
                className="rounded-md object-contain"
              />
            </div>

            {/* Nama produk */}
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {project.title}
            </h3>

            {/* Deskripsi */}
            <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            {/* Links */}
            <div className="flex items-center gap-4 mt-auto">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                Visit Project
              </a>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
