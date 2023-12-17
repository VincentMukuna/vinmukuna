'use client'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import ProjectLayout from '@/layouts/ProjectLayout'
import { allProjects } from 'contentlayer/generated'
import { notFound, useRouter } from 'next/navigation'
import { slug } from 'github-slugger'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { components } from '@/components/MDXComponents'

function Project({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const project = allProjects.find((project) => slug(project.name) === params.slug)
  if (!project) {
    notFound()
  }
  return (
    <Sheet
      defaultOpen
      onOpenChange={(open) => {
        if (!open) {
          router.back()
        }
      }}
    >
      <SheetContent className="w-full max-w-none overflow-y-auto border-none md:w-3/4 md:max-w-[50rem] ">
        <SheetHeader>
          <SheetTitle>Project</SheetTitle>
        </SheetHeader>
        <ProjectLayout project={project}>
          <MDXLayoutRenderer code={project.body.code} components={components} toc={project.toc} />
        </ProjectLayout>
      </SheetContent>
    </Sheet>
  )
}

export default Project
