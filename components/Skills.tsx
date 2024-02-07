'use client'

import skillsData from '@/data/skillsData'
import LogoIcon from './tech-icons'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Skills() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }
  return (
    <div>
      <div className="flex flex-col items-center justify-between py-4 text-black dark:text-gray-300 md:flex-row">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex basis-2/5 items-start"
        >
          {theme === 'dark' ? (
            <img
              alt="developer typing"
              src="static/illustrations/code-typing-bro-dark.svg"
              className="pointer-events-none w-full select-none "
            />
          ) : (
            <img
              alt="developer typing"
              src="static/illustrations/code-typing-bro.svg"
              className="pointer-events-none w-full select-none"
            />
          )}
        </motion.div>
        <div className="basis-1/2 space-y-3">
          <h1 className="border-b border-gray-700 text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Skills
          </h1>
          <h2 className="text-lg">
            I have expertise in leveraging various modern technologies to turn your great design
            ideas into intuitive user interfaces. Some of the tools I've used include:{' '}
          </h2>
          <ul className="mt-3 list-inside list-decimal space-y-1 ">
            {skillsData.map((skill, i) => (
              <li key={i} className="items-ceneter inline-flex w-1/2 gap-2">
                <LogoIcon kind={skill.icon} className="h-6 w-6" />
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
