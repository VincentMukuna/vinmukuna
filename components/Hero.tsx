'use client'
import Image from 'next/image'
import { Button } from './ui/button'

function Hero() {
  return (
    <div className="flex flex-wrap items-center justify-between md:flex-nowrap ">
      <div className="">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl ">
            Hi, I&apos;m Vincent <span className="e inline-flex">👋</span>
          </h1>
          <p className="max-w-lg text-lg dark:text-gray-300">
            A software engineer with a passion for crafting intuitive and responsive designs
          </p>
        </div>
        <Button size={'lg'} className="mt-8 w-fit rounded-md text-lg">
          Reach Out
        </Button>
      </div>
      <div className="inline-flex scale-75 transform items-center justify-center drop-shadow-lg md:transform-none ">
        <Image
          alt="developer activity illustration"
          src="static\illustrations\developer-activity-bro.svg"
          width={400}
          height={400}
        />
      </div>
    </div>
  )
}

export default Hero
