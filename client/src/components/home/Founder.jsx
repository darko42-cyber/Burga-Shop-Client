import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/emma.jpg";
const Founder = () => {
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
		<section className="founder">
			<motion.div {...options}>
				<img src={me} alt="Founder" height={200} width={200} />
				<h3>Official Mrster Darko</h3>
				<p>
					Hey, I'm Emmanuel Zuckurberg the founder of Darko Burga Shop <br />{" "}
					Our aim is to prepare the tasty burga in Ghana{" "}
				</p>
			</motion.div>
		</section>
	);
};

export default Founder;
