'use client'
import Image from 'next/image'
import { Button } from './ui/button'

function Hero() {
  return (
    <div className="mb-8 flex flex-col items-center justify-center gap-4 md:flex-row lg:justify-between">
      <div className="order-2 flex flex-col items-center gap-y-8 md:items-start">
        <div className="flex w-full max-w-[30rem] flex-col items-center gap-4 text-center md:items-start md:text-start">
          <h1 className="inline-flex flex-nowrap text-3xl font-extrabold tracking-wide dark:text-gray-200 md:text-5xl">
            Hi, I&apos;m Vincent <span className="animate-wave repeat-infinite">👋</span>
          </h1>
          <p className="flex max-w-[3/4] items-center justify-center  text-xl dark:text-gray-400 lg:max-w-none">
            A software engineer with a passion for crafting intuitive and responsive designs Nulla
            consectetur libero ac leo tristique, eu aliquam elit accumsan.
          </p>
        </div>
        <Button
          size={'lg'}
          className="w-fit rounded-full bg-emerald-700 text-lg dark:bg-emerald-700 dark:text-white dark:hover:bg-emerald-500"
        >
          Reach Out
        </Button>
      </div>
      <div className="order-1 inline-flex w-[20rem] max-w-[25rem]  drop-shadow-lg md:order-2 lg:w-1/2">
        <img
          alt="developer activity illustration"
          src="static\illustrations\developer-activity-bro.svg"
          className="pointer-events-none w-full select-none"
        />
      </div>
    </div>
  )
}

export default Hero
