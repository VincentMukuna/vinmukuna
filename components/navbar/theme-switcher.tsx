"use client";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
	const { setTheme, theme } = useTheme();
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}
	function renderThemeChanger() {
		if (theme === "dark") {
			return (
				<Button
					variant={"ghost"}
					size={"icon"}
					onClick={() => setTheme("light")}
				>
					<SunIcon className="w-4 h-4" />
				</Button>
			);
		} else {
			return (
				<Button
					variant={"ghost"}
					size={"icon"}
					onClick={() => setTheme("dark")}
				>
					<MoonIcon className="w-4 h-4" />
				</Button>
			);
		}
	}

	return <>{renderThemeChanger()}</>;
}
