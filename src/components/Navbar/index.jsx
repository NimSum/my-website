import React, { useState, useEffect } from "react";

const Navbar = ({ currentSection, handleSetCurrentSection }) => {
	let prevPos = 0;
	const [animationStyle, setAnimationStyle] = useState("");

	const animationDirection = totalHeight => {
		if (prevPos !== totalHeight) {
			setAnimationStyle(prevPos < totalHeight ? "slide-right" : "slide-left");
			prevPos = totalHeight;
		}
	};

	const calculatePos = () => {
		window.addEventListener("scroll", () => {
			let totalHeight = Math.ceil(
				(window.pageYOffset / document.body.scrollHeight) * 100
			);
			animationDirection(totalHeight);
			switch (true) {
				case totalHeight >= 24 && totalHeight <= 47:
					if (currentSection !== "about") {
						handleSetCurrentSection("about");
					}
					break;
				case totalHeight >= 48 && totalHeight <= 71:
					if (currentSection !== "portfolio") {
						handleSetCurrentSection("portfolio");
					}
					break;
				case totalHeight >= 72:
					if (currentSection !== "contact") {
						handleSetCurrentSection("contact");
					}
					break;
				default:
					if (currentSection !== "home") {
						handleSetCurrentSection("home");
					}
			}
		});
	};

	useEffect(() => {
		calculatePos();
	}, []);

	return (
		<header>
    <header> 
		<header>
			<nav>
				<ul>
					<li
						className={currentSection === "home" ? animationStyle : undefined}
					>
						<a href="#home">HOME</a>
					</li>
					<li
						className={currentSection === "about" ? animationStyle : undefined}
					>
						<a href="#about">ABOUT</a>
					</li>
					<li
						className={
							currentSection === "portfolio" ? animationStyle : undefined
						}
					>
						<a href="#portfolio">PORTFOLIO</a>
					</li>
					<li
						className={
							currentSection === "contact" ? animationStyle : undefined
						}
					>
						<a href="#contact">CONTACT</a>
					</li>
					<li className="resume-download">
						<a
							href={require("../../images/nimrod-garcia-resume.pdf")}
							target="_blank"
							rel="noopener noreferrer"
						>
							View My Resume
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
