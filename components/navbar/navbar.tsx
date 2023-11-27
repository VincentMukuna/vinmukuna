import ThemeSwitcher from "./theme-switcher";

function Navbar() {
	return (
		<header className="flex w-full h-16 px-8 ">
			<div className="flex items-center w-full max-w-7xl lg:px-8">
				<div aria-label="Home" className="flex flex-1">
					VinMukuna
				</div>
				<nav className="">
					<ul className="flex gap-4 tracking-wide">
						<li>Home</li>
						<li>Skills</li>
						<li>Projects</li>
					</ul>
				</nav>
				<div className="flex justify-end md:flex-1 ">
					<ThemeSwitcher />
				</div>
			</div>
		</header>
	);
}

export default Navbar;
