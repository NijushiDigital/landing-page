'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects } from '@/lib/projects'

export function Features() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-4 py-15">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Projects</h2>
        <p className="text-md text-muted-foreground max-w-xl mx-auto">
          Nijushi Digital strives to always provide and create projects and services that can help many parties, and here are some of the ones we have worked on:
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
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* See all projects */}
      <div className="flex justify-center mt-12">
        <Link
          href="/project"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 group"
        >
          See All Project
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
