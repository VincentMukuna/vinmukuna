'use client'
import siteMetadata from '@/data/siteMetadata'
import { motion } from 'framer-motion'
import CustomLink from './Link'
import { buttonVariants } from './ui/button'

function Hero() {
  return (
    <div
      className="mx-auto flex h-[80vh]  max-w-[30rem] flex-col items-center justify-center gap-4 from-gray-900 to-red-700
      md:max-w-none md:flex-row lg:justify-between
    "
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="order-2 flex basis-1/2 flex-col items-center gap-y-8 md:items-start"
      >
        <div className="flex w-full flex-col items-center gap-4 text-center md:items-start md:text-start">
          <h1 className="inline-flex flex-nowrap text-3xl font-extrabold tracking-wide dark:text-gray-200 md:text-4xl lg:text-5xl">
            Hi, I&apos;m Vincent <span className="animate-wave repeat-infinite">👋</span>
          </h1>
          <p className="flex items-center justify-center dark:text-gray-300 lg:text-lg">
            A software engineer with a passion for crafting intuitive and responsive designs.
          </p>
        </div>
        <CustomLink
          href={`mailto:${siteMetadata.email}`}
          className={buttonVariants({ size: 'lg' })}
        >
          Reach out
        </CustomLink>
      </motion.div>
      <div className="order-1 inline-flex basis-2/5 drop-shadow-lg md:order-2 ">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          alt="developer activity illustration"
          src="static\illustrations\developer-activity-bro.svg"
          className="pointer-events-none w-full select-none "
        />
      </div>
    </div>
  )
}

export default Hero
