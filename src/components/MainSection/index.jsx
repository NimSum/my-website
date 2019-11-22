import React, { useState } from "react";
import Navbar from "../Navbar";
import About from "../About";
import Contact from "../Contact";
import Portfolio from "../Portfolio";

const MainSection = () => {
	const [currentSection, setCurrentSection] = useState("Home");

	const handleSetCurrentSection = section => {
		setCurrentSection(section);
	};

	return (
		<main className="main-section">
			<Navbar
				currentSection={currentSection}
				handleSetCurrentSection={handleSetCurrentSection}
			/>
			<About />
			<Portfolio currentSection={currentSection} />
			<Contact />
		</main>
	);
};

export default MainSection;
