import React, { useState, useEffect } from "react";
import { projects } from "../../utils/PortfolioData";
import Project from "../Project";

const Portfolio = ({ currentSection }) => {
	const [loadAssets, setLoadAsset] = useState(false);

	useEffect(() => {
		const isAtPortfolio = currentSection === "portfolio";
		if (isAtPortfolio && loadAssets !== true) {
			setLoadAsset(true);
		}
	}, [currentSection]);

	return (
		<section className="portfolio-section" id="portfolio">
			<h2>My Projects:</h2>
			<div className="projects-container">
				{loadAssets &&
					projects.map(project => <Project key={project.id} {...project} />)}
			</div>
		</section>
	);
};

export default Portfolio;
