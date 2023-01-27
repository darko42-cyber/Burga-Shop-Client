import React from "react";
import { FaCopyright } from "react-icons/fa";
import { AiFillYoutube, AiFillGithub, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
	return (
		<footer>
			<div>
				<h2> Darko Burga Shop </h2>
				<p>We are trying to give the possible best taste of your life</p>
				<br />
				<em>We give attention to genuine feedback.</em>
				<strong>
					All rights reserved <FaCopyright /> Mrster Darko
				</strong>
			</div>
			<aside>
				<h4> Follow Us </h4>
				<a href="http://google.com/emma">
					{" "}
					<AiFillInstagram />{" "}
				</a>
				<a href="http://google.com/emma">
					{" "}
					<AiFillGithub />{" "}
				</a>
				<a href="http://google.com/emma">
					{" "}
					<AiFillYoutube />{" "}
				</a>
			</aside>
		</footer>
	);
};

export default Footer;
