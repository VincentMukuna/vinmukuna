"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

const Provider = ({ children }: any) => {
	return (
		<ThemeProvider defaultTheme="dark" attribute="class">
			{children}
		</ThemeProvider>
	);
};

export default Provider;
