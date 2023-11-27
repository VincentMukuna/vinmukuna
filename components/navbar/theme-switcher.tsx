"use client";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
	const { setTheme, theme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<Button
			aria-hidden
			variant={"ghost"}
			size={"icon"}
			onClick={() =>
				setTheme(
					theme === "dark" || resolvedTheme === "dark"
						? "light"
						: "dark"
				)
			}
		>
			{mounted && (theme === "dark" || resolvedTheme === "dark") ? (
				<SunIcon className="w-4 h-4" />
			) : (
				<MoonIcon className="w-4 h-4" />
			)}
		</Button>
	);
}
