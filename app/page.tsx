import Image from "next/image";
import Hero from "../components/hero/hero";
import SkillsList from "../components/skills/skills-list";

export default function Home() {
	return (
		<main className="flex flex-col gap-10 ">
			<Hero />
			<SkillsList />
		</main>
	);
}
