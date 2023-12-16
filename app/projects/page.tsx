import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import { allProjects } from 'contentlayer/generated'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-2 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Collection of some of the projects I've contributed to.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap justify-center sm:justify-start">
            {allProjects.map((d) => (
              <Card
                key={d.slug}
                name={d.name}
                summary={d.summary}
                imgSrc={d.imgSrc}
                href={`/projects/${d.slug}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
