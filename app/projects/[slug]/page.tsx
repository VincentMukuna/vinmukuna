import { components } from '@/components/MDXComponents'
import ProjectLayout from '@/layouts/ProjectLayout'
import { allProjects } from 'contentlayer/generated'
import { slug } from 'github-slugger'
import { notFound } from 'next/navigation'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import React from 'react'

export default function Project({ params }: { params: { slug: string } }) {
  const project = allProjects.find((project) => slug(project.name) === params.slug)
  if (!project) {
    notFound()
  }
  return (
    <ProjectLayout project={project}>
      <MDXLayoutRenderer code={project.body.code} components={components} toc={project.toc} />
    </ProjectLayout>
  )
}
