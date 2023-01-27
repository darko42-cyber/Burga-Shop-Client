import React from "react";

import { RiFindReplaceLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import me from "../../assets/darko.jpg";
const About = () => {
	return (
		<section className="about">
			<main>
				<h1>About Us</h1>
				<article>
					<h4>Darko Burga Shop</h4>
					<p>Welcome to Darko Burger Shop. The tasty burger on the earth</p>
					<p>
						Explore the various food and burgers. Click below to see the menu{" "}
					</p>
					<Link to="/">
						<RiFindReplaceLine />
					</Link>
				</article>
				<div>
					<h2>Founder</h2>
					<article>
						<div>
							<img src={me} alt="Founder" />
							<h3>Mrster Darko</h3>
						</div>
						<p>
							I am the founder of Darko Burger Shop. Affiliated to good taste
						</p>
					</article>
				</div>
			</main>
		</section>
	);
};

export default About;
