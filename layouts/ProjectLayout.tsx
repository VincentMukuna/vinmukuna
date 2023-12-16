import { Button } from '@/components/ui/button'
import { Project } from 'contentlayer/generated'
import Image from 'next/image'
import { CoreContent } from 'pliny/utils/contentlayer'
import React from 'react'

export default function ProjectLayout({
  project,
  children,
}: {
  project: CoreContent<Project>
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <Image
        src={project.imgSrc}
        alt={`${project.name} project preview`}
        width={500}
        height={500}
      />
      <h1>{project.name}</h1>
      <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">{children}</div>
      <div className="flex gap-2">
        <Button>Demo</Button>
        <Button>Source</Button>
      </div>
    </div>
  )
}
