"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

const Provider = ({ children }: any) => {
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <>{children}</>;
	}
	return (
		<ThemeProvider defaultTheme="dark" attribute="class">
			{children}
		</ThemeProvider>
	);
};

export default Provider;
