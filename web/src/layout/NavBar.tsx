import React from "react";
import GradientButton from "../components/components/nurui/gradient-button";

const navItems = [
	{ label: 'Home', href: '#' },
	{ label: 'Services', href: '#' },
	{ label: 'Contact', href: '#' },
];

export default function NavBar() {
	return (
		<nav className="w-full flex justify-center items-center py-4 absolute top-0 left-0 z-20 bg-transparent">
			{navItems.map((item) => (
				<React.Fragment key={item.label}>
					<a
						href={item.href}
						className="mx-8 text-xl font-bold text-slate-800 tracking-wide transition-colors duration-200 hover:text-cyan-400"
					>
						{item.label}
					</a>
					{item.label === 'Contact' && (
						<div className="mx-4">
							<GradientButton text="Cambiar fondo 🚀" />
						</div>
					)}
				</React.Fragment>
			))}
		</nav>
	);
}
