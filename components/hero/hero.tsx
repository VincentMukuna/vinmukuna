import Image from "next/image";
import devIcon from "../../public/Developer activity-bro (2).svg";

import { Button, buttonVariants } from "../ui/button";

function Hero() {
	return (
		<main className="flex flex-col items-center justify-start gap-8 mx-auto mt-8 md:mt-12 md:flex-row-reverse md:justify-center ">
			<div
				className="relative 				
					before:absolute before:h-[300px] before:w-[480px]
					before:-translate-x-1/2 before:rounded-full
					before:bg-gradient-radial before:from-white
					before:to-transparent before:blur-2xl before:content-['']
					
					after:absolute after:-z-20 after:h-[180px] after:w-[240px]after:translate-x-1/3
					after:bg-gradient-conicafter:from-sky-200 after:via-blue-200 
					after:blur-2xl after:content-[''] 
					before:dark:bg-gradient-to-br before:dark:from-transparent
					before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 
					after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"
			>
				<Image
					priority
					src={devIcon}
					alt="developer working"
					width={400}
					className="relative mx-auto drop-shadow-lg"
				/>
			</div>

			<div className="flex flex-col flex-auto max-w-sm gap-8 px-4 mx-auto md:max-w-none md:items-start">
				<div className="flex flex-col gap-4 ">
					<h1 className="text-3xl font-bold md:text-5xl ">
						Hi, I'm Vincent 👋
					</h1>
					<p className="text-lg tracking-wider md:max-w-md">
						A software engineer with a passion for crafting
						intuitive and responsive designs
					</p>
				</div>
				<Button size={"lg"} className="text-lg w-fit">
					Reach Out
				</Button>
			</div>
		</main>
	);
}

export default Hero;
