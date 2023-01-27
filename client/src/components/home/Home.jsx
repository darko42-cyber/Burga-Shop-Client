import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import "../../styles/founder.scss";
import "../../styles/menu.scss";
import Menu from "./Menu";
const Home = () => {
	const options = {
		initial: {
			x: "-100%",
			opacity: 0,
		},
		whileInView: {
			x: 0,
			opacity: 1,
		},
	};
	return (
		<>
			<section className="home">
				<div>
					<motion.h1 {...options}>Darko Burga Shop</motion.h1>
					<motion.p {...options} transition={{ delay: 0.2 }}>
						Give yourself a tasty burga
					</motion.p>
				</div>
				<motion.a
					href="#menu"
					initial={{ y: "-100%", opacity: 0 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}>
					Expore Menu
				</motion.a>
			</section>
			<Founder />
			<Menu />
		</>
	);
};

export default Home;
